import { NextResponse } from "next/server";

/**
 * Quiz lead capture.
 *
 * Stores a quiz completion (email + answers + matched models) as a Resend
 * contact, with the answers flattened into contact data so subscribers are
 * segmented by budget, timeline, terrain, and match from day one.
 *
 * Required env to go live: RESEND_API_KEY, RESEND_AUDIENCE_ID.
 * Without them the route runs in preview mode: it validates and logs the
 * payload server-side and returns success so the flow can be tested end to end.
 */
export async function POST(req: Request) {
  let body: {
    email?: string;
    alerts?: boolean;
    answers?: Record<string, string>;
    matchId?: string;
    runnerUpId?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const email = (body.email ?? "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const answers = body.answers ?? {};
  const contactData: Record<string, string> = {
    source: "find-my-van-quiz",
    match: body.matchId ?? "",
    runner_up: body.runnerUpId ?? "",
    price_alerts: body.alerts ? "yes" : "no",
  };
  for (const [k, v] of Object.entries(answers)) {
    contactData[`q_${k}`] = String(v);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.log("[subscribe:preview]", JSON.stringify({ email, ...contactData }));
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
    console.error("[subscribe] Resend error", res.status, await res.text());
    return NextResponse.json({ ok: false, error: "provider_error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, mode: "live" });
}
