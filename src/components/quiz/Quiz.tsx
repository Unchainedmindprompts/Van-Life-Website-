"use client";

import Link from "next/link";
import { useState } from "react";

import { steps, rankVans, buildReasons } from "@/lib/quiz";

/* ─── Component ──────────────────────────────────────────── */

export default function Quiz() {
  const [step, setStep] = useState(0); // 0 = intro, 1..8 = questions, 9 = result
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [alerts, setAlerts] = useState(true);
  const [subState, setSubState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const isIntro = step === 0;
  const isDone = step > steps.length;
  const currentStep = !isIntro && !isDone ? steps[step - 1] : null;

  function handleNext() {
    if (!selected || !currentStep) return;
    setAnswers((a) => ({ ...a, [currentStep.id]: selected }));
    setSelected(null);
    setStep((s) => s + 1);
  }

  function handleBack() {
    if (step <= 1) {
      setStep(0);
      setSelected(null);
      return;
    }
    const prev = steps[step - 2];
    setSelected(answers[prev.id] ?? null);
    setStep((s) => s - 1);
  }

  function handleRestart() {
    setStep(0);
    setAnswers({});
    setSelected(null);
    setEmail("");
    setSubState("idle");
  }

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubState("sending");
    try {
      const ranked = rankVans(answers);
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          alerts,
          answers,
          matchId: ranked[0]?.van.id,
          runnerUpId: ranked[1]?.van.id,
        }),
      });
      setSubState(res.ok ? "done" : "error");
    } catch {
      setSubState("error");
    }
  }

  /* ── Intro ── */
  if (isIntro) {
    return (
      <div className="pt-20 min-h-screen bg-charcoal-900 flex items-center justify-center px-6 py-16">
        <div className="max-w-xl text-center">
          <span className="inline-block font-display text-[10px] font-bold tracking-[0.3em] uppercase text-earth-500 bg-earth-900/40 px-3 py-1.5 rounded mb-8">
            8 Questions
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl text-sand-100 leading-tight mb-5">
            Find Your
            <br />
            <span className="text-earth-400">Perfect Van.</span>
          </h1>
          <p className="text-sand-400 text-lg leading-relaxed mb-8">
            Answer eight questions about how you travel, where you go, and what you value,
            and we will match you against every major Class B in the segment, with the
            trade-offs stated plainly.
          </p>
          <button
            onClick={() => setStep(1)}
            className="px-8 py-4 font-display font-bold text-sm tracking-widest uppercase bg-earth-600 hover:bg-earth-500 text-sand-100 rounded transition-colors"
          >
            Start the Questionnaire
          </button>
          <p className="text-sand-500 text-xs mt-4">
            Takes about a minute. Every price and spec we use is checked against the
            manufacturer; where sources disagree, we say so.
          </p>
        </div>
      </div>
    );
  }

  /* ── Result ── */
  if (isDone) {
    const ranked = rankVans(answers);
    const winner = ranked[0].van;
    const runnerUp = ranked[1].van;
    const winnerOver = ranked[0].tier > 0 ? ranked[0].overBy : 0;
    const runnerUpOver = ranked[1].tier > 0 ? ranked[1].overBy : 0;
    const reasons = buildReasons(winner, ranked[0].byStep, answers);
    const budgetLabel = steps.find((s) => s.id === "budget")?.options.find((o) => o.id === answers["budget"])?.label;
    const timelineLabel = steps.find((s) => s.id === "timeline")?.options.find((o) => o.id === answers["timeline"])?.label;

    return (
      <div className="pt-20 min-h-screen bg-charcoal-900 px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <p className="font-display text-earth-400 text-xs font-bold tracking-[0.3em] uppercase mb-3 text-center">
            Your Recommendation
          </p>
          <h1 className="font-display font-black text-3xl md:text-4xl text-sand-100 text-center leading-tight mb-2">
            We matched you with:
          </h1>
          {(budgetLabel || timelineLabel) && (
            <p className="text-sand-500 text-sm text-center mb-2">
              Based on your answers{budgetLabel ? `: ${budgetLabel}` : ""}{timelineLabel ? ` / ${timelineLabel}` : ""}
            </p>
          )}

          {winnerOver > 0 && (
            <div className="mt-6 bg-charcoal-800 border border-yellow-600/60 rounded-xl px-6 py-4">
              <p className="text-yellow-400 font-semibold text-sm">
                Honest note: this match is ${winnerOver.toLocaleString()} over the budget you set.
              </p>
              <p className="text-sand-400 text-sm mt-1">
                Nothing inside your budget fit your other answers, so this is the closest
                stretch. Every van inside your budget ranks below it, and your full match
                report will show both.
              </p>
            </div>
          )}

          <div className="mt-8 bg-charcoal-800 border-2 border-earth-600 rounded-xl overflow-hidden">
            <div className="bg-earth-900/30 px-6 py-4 border-b border-earth-800">
              <p className="font-display text-[10px] font-bold tracking-widest uppercase text-earth-500 mb-0.5">
                {winner.maker}
              </p>
              <h2 className="font-display font-black text-2xl text-sand-100">{winner.name}</h2>
              <p className="text-sand-400 text-sm">{winner.chassis}</p>
            </div>

            <div className="p-6 grid grid-cols-2 gap-4 border-b border-charcoal-700">
              <div>
                <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-1">Starting Price</p>
                <p className="text-earth-300 font-semibold text-sm">{winner.priceRange}</p>
              </div>
              <div>
                <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-1">Drive</p>
                <p className="text-sand-200 font-semibold text-sm">{winner.drive}</p>
              </div>
              <div>
                <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-1">Sleeps</p>
                <p className="text-sand-200 font-semibold text-sm">
                  {winner.sleepsDisplay}
                </p>
              </div>
              <div>
                <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-1">Bathroom</p>
                <p className="text-sand-200 font-semibold text-sm">{winner.bathroom}</p>
              </div>
              <div>
                <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-1">Cold-Weather Rating</p>
                <p className="text-sand-200 font-semibold text-sm">{winner.winterRating}</p>
              </div>
              <div>
                <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-1">Build Quality</p>
                <p className="text-earth-400 font-semibold text-sm">{winner.buildQuality}</p>
              </div>
            </div>

            <div className="p-6 border-b border-charcoal-700">
              <p className="font-display text-[10px] font-bold tracking-widest uppercase text-earth-600 mb-3">Why this van, for you</p>
              <ul className="space-y-2">
                {reasons.map((r) => (
                  <li key={r} className="flex gap-2 text-sm text-sand-300">
                    <span className="text-earth-500 mt-0.5 shrink-0">+</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border-b border-charcoal-700">
              <p className="font-display text-[10px] font-bold tracking-widest uppercase text-sand-500 mb-3">Trade-offs to know</p>
              <ul className="space-y-2">
                {winner.considerations.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-sand-400">
                    <span className="text-sand-500 mt-0.5 shrink-0">-</span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="text-sand-500 text-xs mt-4">
                Price basis: {winner.priceNote} Specs verified {winner.verifiedDate} against{" "}
                <a href={winner.sourceUrl} target="_blank" rel="noreferrer" className="underline hover:text-earth-300">
                  the manufacturer
                </a>
                .
              </p>
            </div>

            <div className="p-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/compare"
                className="flex-1 text-center px-6 py-3 font-display font-bold text-sm tracking-wider uppercase bg-earth-600 hover:bg-earth-500 text-sand-100 rounded transition-colors"
              >
                See Full Comparison
              </Link>
              <button
                onClick={handleRestart}
                className="flex-1 px-6 py-3 font-display font-bold text-sm tracking-wider uppercase border border-charcoal-600 hover:border-earth-600 text-sand-300 hover:text-earth-300 rounded transition-colors"
              >
                Start Over
              </button>
            </div>
          </div>

          {/* Runner-up */}
          <div className="mt-6 bg-charcoal-800 border border-charcoal-600 rounded-xl p-6">
            <p className="font-display text-[10px] font-bold tracking-widest uppercase text-sand-500 mb-1">
              Closest alternative
            </p>
            <p className="font-display font-black text-xl text-sand-100">
              {runnerUp.maker} {runnerUp.name} <span className="text-earth-300 text-base font-semibold">{runnerUp.priceRange}</span>
              {runnerUpOver > 0 && (
                <span className="text-yellow-400 text-sm font-semibold"> (over your budget by ${runnerUpOver.toLocaleString()})</span>
              )}
            </p>
            <p className="text-sand-400 text-sm mt-2">
              Worth a look if {runnerUp.bestFor[0].toLowerCase()} sounds like you. Its main
              trade-off: {runnerUp.considerations[0].toLowerCase()}
            </p>
          </div>

          {/* Email capture */}
          <div className="mt-6 bg-earth-900/30 border border-earth-800 rounded-xl p-6">
            <h3 className="font-display font-black text-xl text-sand-100 mb-2">Get your full match report</h3>
            <p className="text-sand-400 text-sm mb-4">
              Your top two vans compared head to head, the verified spec sheets with
              sources, and what to check in person before you buy. Built from your answers,
              not a generic brochure.
            </p>
            {subState === "done" ? (
              <p className="text-forest-400 font-semibold text-sm">
                You are in. Your match report is on its way to {email}.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="flex-1 px-4 py-3 rounded bg-charcoal-900 border border-charcoal-600 text-sand-100 placeholder:text-sand-500 text-sm focus:outline-none focus:border-earth-500"
                  />
                  <button
                    type="submit"
                    disabled={subState === "sending"}
                    className="px-6 py-3 font-display font-bold text-sm tracking-wider uppercase bg-earth-600 hover:bg-earth-500 text-sand-100 rounded transition-colors disabled:opacity-50"
                  >
                    {subState === "sending" ? "Sending..." : "Send My Report"}
                  </button>
                </div>
                <label className="flex items-center gap-2 text-sand-400 text-xs cursor-pointer">
                  <input
                    type="checkbox"
                    checked={alerts}
                    onChange={(e) => setAlerts(e.target.checked)}
                    className="accent-earth-500"
                  />
                  Also send me price-change alerts for the {winner.maker} {winner.name}
                </label>
                {subState === "error" && (
                  <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>

          <p className="text-sand-500 text-xs text-center mt-6">
            This is a starting point, not a verdict. Compare all models to see the full picture.
          </p>
        </div>
      </div>
    );
  }

  /* ── Question ── */
  if (!currentStep) return null;
  const progress = (step / steps.length) * 100;

  return (
    <div className="pt-20 min-h-screen bg-charcoal-900 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-sand-500">
              Question {step} of {steps.length}
            </span>
            <span className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-earth-500">
              {Math.round(progress)}% done
            </span>
          </div>
          <div className="w-full bg-charcoal-700 rounded-full h-1.5">
            <div
              className="bg-earth-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h1 className="font-display font-black text-2xl md:text-3xl text-sand-100 mb-2 leading-tight">
          {currentStep.question}
        </h1>
        <p className="text-sand-500 text-sm mb-8">{currentStep.hint}</p>

        <div className="space-y-3 mb-8">
          {currentStep.options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`w-full text-left p-5 rounded-lg border transition-all ${
                selected === option.id
                  ? "border-earth-500 bg-earth-900/30"
                  : "border-charcoal-600 bg-charcoal-800 hover:border-charcoal-500"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`mt-0.5 w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                    selected === option.id ? "border-earth-500 bg-earth-500" : "border-charcoal-600"
                  }`}
                >
                  {selected === option.id && <div className="w-1.5 h-1.5 rounded-full bg-charcoal-900" />}
                </div>
                <div>
                  <p className="font-display font-bold text-base text-sand-100 mb-0.5">{option.label}</p>
                  <p className="text-sand-400 text-sm">{option.sub}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleBack}
            className="px-6 py-3 font-display font-bold text-sm tracking-wider uppercase border border-charcoal-600 hover:border-charcoal-500 text-sand-400 hover:text-sand-300 rounded transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!selected}
            className={`flex-1 px-6 py-3 font-display font-bold text-sm tracking-wider uppercase rounded transition-colors ${
              selected ? "bg-earth-600 hover:bg-earth-500 text-sand-100" : "bg-charcoal-700 text-charcoal-600 cursor-not-allowed"
            }`}
          >
            {step === steps.length ? "Get My Recommendation" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
