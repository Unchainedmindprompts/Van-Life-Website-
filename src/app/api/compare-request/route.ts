import { NextResponse } from "next/server";
import { findModel } from "@/lib/market";

/**
 * Comparison requests from the market index (/market).
 *
 * A shopper picks any two models from the full market list. If both already
 * have fact ledgers, the client sends them to /compare instead and never
 * calls this route. Otherwise the request is stored as a Resend contact
 * (source: compare-request, with the two model names in contact data) so
 * demand decides which models get fact-checked next.
 *
 * Required env to go live: RESEND_API_KEY, RESEND_AUDIENCE_ID.
 * Without them the route runs in preview mode: validates and logs.
 */
export async function POST(req: Request) {
  let body: { email?: string; vanA?: string; vanB?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const email = (body.email ?? "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const a = body.vanA ? findModel(body.vanA) : undefined;
  const b = body.vanB ? findModel(body.vanB) : undefined;
  if (!a || !b) {
    return NextResponse.json({ ok: false, error: "unknown_model" }, { status: 400 });
  }
  if (a.id === b.id) {
    return NextResponse.json({ ok: false, error: "same_model" }, { status: 400 });
  }

  const contactData: Record<string, string> = {
    source: "compare-request",
    van_a: `${a.brand} ${a.name}`,
    van_b: `${b.brand} ${b.name}`,
  };

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.log("[compare-request:preview]", JSON.stringify({ email, ...contactData }));
    return NextResponse.json({ ok: true, mode: "preview" });
  }

  const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, unsubscribed: false, data: contactData }),
  });

  if (!res.ok) {
    console.error("[compare-request] Resend error", res.status, await res.text());
    return NextResponse.json({ ok: false, error: "provider_error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, mode: "live" });
}
