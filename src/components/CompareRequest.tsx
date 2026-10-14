"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MARKET, findModel } from "@/lib/market";

export default function CompareRequest() {
  const [vanA, setVanA] = useState("");
  const [vanB, setVanB] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const a = vanA ? findModel(vanA) : undefined;
  const b = vanB ? findModel(vanB) : undefined;
  const bothVerified = !!(a?.verified && b?.verified);
  const same = !!a && !!b && a.id === b.id;

  const options = useMemo(
    () =>
      MARKET.map((brand) => (
        <optgroup key={brand.brand} label={brand.brand}>
          {brand.models.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
              {m.verified ? " (full comparison available)" : ""}
            </option>
          ))}
        </optgroup>
      )),
    []
  );

  const selectCls =
    "w-full bg-charcoal-800 border border-charcoal-600 rounded px-4 py-3 text-sand-100 text-sm focus:border-earth-500 focus:outline-none";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!a || !b || same || bothVerified) return;
    setState("sending");
    try {
      const res = await fetch("/api/compare-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, vanA, vanB }),
      });
      const data = await res.json();
      setState(data.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="border border-earth-700 bg-charcoal-800 rounded-lg p-6 text-center">
        <p className="text-sand-100 font-display font-bold text-lg mb-2">Request logged.</p>
        <p className="text-sand-400 text-sm leading-relaxed">
          {a && b
            ? `${a.brand} ${a.name} vs ${b.brand} ${b.name} is in the queue. We will email you when the fact-checked comparison is live.`
            : "We will email you when the fact-checked comparison is live."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-charcoal-600 bg-charcoal-800 rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <label className="block">
          <span className="block text-xs font-display font-bold tracking-widest uppercase text-sand-400 mb-2">
            First van
          </span>
          <select value={vanA} onChange={(e) => setVanA(e.target.value)} className={selectCls} required>
            <option value="">Choose a van…</option>
            {options}
          </select>
        </label>
        <label className="block">
          <span className="block text-xs font-display font-bold tracking-widest uppercase text-sand-400 mb-2">
            Second van
          </span>
          <select value={vanB} onChange={(e) => setVanB(e.target.value)} className={selectCls} required>
            <option value="">Choose a van…</option>
            {options}
          </select>
        </label>
      </div>

      {same && (
        <p className="text-sm text-earth-400 mb-4">Pick two different vans to compare.</p>
      )}

      {bothVerified && !same && (
        <div className="border border-earth-700 rounded p-4 mb-4 text-center">
          <p className="text-sand-200 text-sm mb-3">
            Good news: both of those already have full fact-checked comparisons.
          </p>
          <Link
            href="/compare"
            className="inline-block px-6 py-3 font-display font-bold text-sm tracking-widest uppercase bg-earth-600 hover:bg-earth-500 text-sand-100 rounded transition-colors"
          >
            Open the comparison
          </Link>
        </div>
      )}

      {a && b && !same && !bothVerified && (
        <>
          <label className="block mb-4">
            <span className="block text-xs font-display font-bold tracking-widest uppercase text-sand-400 mb-2">
              Email me when this comparison is live
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-charcoal-900 border border-charcoal-600 rounded px-4 py-3 text-sand-100 text-sm focus:border-earth-500 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            disabled={state === "sending"}
            className="w-full px-6 py-3 font-display font-bold text-sm tracking-widest uppercase bg-earth-600 hover:bg-earth-500 disabled:opacity-50 text-sand-100 rounded transition-colors"
          >
            {state === "sending" ? "Sending…" : "Request this comparison"}
          </button>
          {state === "error" && (
            <p className="text-sm text-earth-400 mt-3 text-center">
              Something went wrong sending that. Please try again.
            </p>
          )}
        </>
      )}
    </form>
  );
}
