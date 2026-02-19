"use client";

import Link from "next/link";
import { useState } from "react";
import { vans } from "@/lib/vans";

/* ─── Questionnaire data ─────────────────────────────────── */

interface Option {
  id: string;
  label: string;
  sub: string;
  scores: Partial<Record<string, number>>;
}

interface Step {
  id: string;
  question: string;
  hint: string;
  options: Option[];
}

const steps: Step[] = [
  {
    id: "usage",
    question: "How will you use your van?",
    hint: "This shapes everything — from power system sizing to chassis choice.",
    options: [
      {
        id: "weekend",
        label: "Weekend trips",
        sub: "Mostly Friday–Sunday, home during the week",
        scores: {
          "ram-promaster-conversion": 2,
          "ford-transit-conversion": 2,
          "airstream-interstate": 2,
          "storyteller-overland": 1,
        },
      },
      {
        id: "multiweek",
        label: "Multi-week adventures",
        sub: "Extended trips, mix of campgrounds and boondocking",
        scores: {
          "sprinter-conversion": 2,
          "winnebago-boldt": 2,
          "storyteller-overland": 3,
          "ford-transit-conversion": 1,
        },
      },
      {
        id: "fulltime",
        label: "Full-time van life",
        sub: "This is my home — I need it to work every day",
        scores: {
          "sprinter-conversion": 3,
          "winnebago-boldt": 3,
          "airstream-interstate": 1,
        },
      },
    ],
  },
  {
    id: "terrain",
    question: "What terrain do you regularly drive?",
    hint: "Be honest — most van trips stay on graded roads.",
    options: [
      {
        id: "pavement",
        label: "Mostly paved roads",
        sub: "Campgrounds, highway, maybe the occasional dirt road",
        scores: {
          "ram-promaster-conversion": 3,
          "ford-transit-conversion": 2,
          "airstream-interstate": 2,
        },
      },
      {
        id: "gravel",
        label: "Gravel & forest service roads",
        sub: "Rough terrain but not technical — high-clearance helpful",
        scores: {
          "storyteller-overland": 4,
          "ford-transit-conversion": 2,
          "sprinter-conversion": 2,
          "winnebago-boldt": 2,
        },
      },
      {
        id: "offroad",
        label: "Technical off-road",
        sub: "4WD-required routes, steep two-tracks, serious overlanding",
        scores: {
          "sprinter-conversion": 5,
          "winnebago-boldt": 3,
        },
      },
    ],
  },
  {
    id: "party",
    question: "How many people will live or travel in the van?",
    hint: "This affects bed layout, storage needs, and chassis choice.",
    options: [
      {
        id: "solo",
        label: "Just me",
        sub: "Solo van lifer — space is less critical",
        scores: {
          "ram-promaster-conversion": 2,
          "ford-transit-conversion": 2,
          "storyteller-overland": 2,
          "sprinter-conversion": 1,
          "winnebago-boldt": 1,
        },
      },
      {
        id: "couple",
        label: "Two people",
        sub: "Couple living and traveling together",
        scores: {
          "sprinter-conversion": 2,
          "winnebago-boldt": 3,
          "storyteller-overland": 2,
          "airstream-interstate": 2,
        },
      },
      {
        id: "group",
        label: "3 or more",
        sub: "Family or group — need maximum space",
        scores: {
          "ram-promaster-conversion": 2,
          "airstream-interstate": 2,
        },
      },
    ],
  },
  {
    id: "budget",
    question: "What's your budget for the van?",
    hint: "Include the base vehicle and conversion/build cost.",
    options: [
      {
        id: "budget-low",
        label: "Under $120,000",
        sub: "Entry-level builds and DIY conversions",
        scores: {
          "ram-promaster-conversion": 5,
          "ford-transit-conversion": 3,
        },
      },
      {
        id: "budget-mid",
        label: "$120,000 – $165,000",
        sub: "Mid-range factory builds and quality custom builds",
        scores: {
          "storyteller-overland": 4,
          "ford-transit-conversion": 2,
          "winnebago-boldt": 1,
        },
      },
      {
        id: "budget-upper",
        label: "$165,000 – $220,000",
        sub: "Premium factory builds and high-end custom work",
        scores: {
          "winnebago-boldt": 4,
          "sprinter-conversion": 2,
          "storyteller-overland": 1,
        },
      },
      {
        id: "budget-top",
        label: "$220,000+",
        sub: "Top-tier builds — I want the best available",
        scores: {
          "airstream-interstate": 4,
          "sprinter-conversion": 3,
          "winnebago-boldt": 1,
        },
      },
    ],
  },
  {
    id: "priority",
    question: "What matters most to you?",
    hint: "Your honest answer here drives the recommendation.",
    options: [
      {
        id: "offroad-cap",
        label: "Off-road capability",
        sub: "I want to go places other vans can't",
        scores: {
          "sprinter-conversion": 5,
          "winnebago-boldt": 3,
          "storyteller-overland": 4,
        },
      },
      {
        id: "reliability",
        label: "Build quality & reliability",
        sub: "I want it to work without babysitting it",
        scores: {
          "winnebago-boldt": 5,
          "airstream-interstate": 3,
          "sprinter-conversion": 2,
        },
      },
      {
        id: "value",
        label: "Value for money",
        sub: "Maximum van for minimum spend",
        scores: {
          "ram-promaster-conversion": 5,
          "ford-transit-conversion": 4,
          "storyteller-overland": 1,
        },
      },
      {
        id: "comfort",
        label: "Interior comfort & aesthetics",
        sub: "I want it to feel like a premium living space",
        scores: {
          "airstream-interstate": 5,
          "winnebago-boldt": 3,
          "sprinter-conversion": 2,
        },
      },
    ],
  },
];

/* ─── Scoring engine ─────────────────────────────────────── */

function scoreVans(answers: string[]): string {
  const totals: Record<string, number> = {
    "sprinter-conversion": 0,
    "ford-transit-conversion": 0,
    "ram-promaster-conversion": 0,
    "winnebago-boldt": 0,
    "airstream-interstate": 0,
    "storyteller-overland": 0,
  };

  answers.forEach((answerId, stepIdx) => {
    const step = steps[stepIdx];
    const option = step.options.find((o) => o.id === answerId);
    if (!option) return;
    Object.entries(option.scores).forEach(([vanId, pts]) => {
      if (pts !== undefined) {
        totals[vanId] = (totals[vanId] ?? 0) + pts;
      }
    });
  });

  return Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
}

/* ─── Component ──────────────────────────────────────────── */

export default function FindMyVanPage() {
  const [step, setStep] = useState(0); // 0 = intro, 1-5 = questions, 6 = result
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const isIntro = step === 0;
  const isDone = step > steps.length;
  const currentStep = isIntro ? null : steps[step - 1];

  function handleNext() {
    if (!selected) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    setStep((s) => s + 1);
  }

  function handleBack() {
    if (step === 1) {
      setStep(0);
      setAnswers([]);
      setSelected(null);
      return;
    }
    const newAnswers = answers.slice(0, -1);
    setAnswers(newAnswers);
    setSelected(null);
    setStep((s) => s - 1);
  }

  function handleRestart() {
    setStep(0);
    setAnswers([]);
    setSelected(null);
  }

  const recommendedId = isDone ? scoreVans(answers) : null;
  const recommendedVan = recommendedId
    ? vans.find((v) => v.id === recommendedId)
    : null;

  /* ── Intro screen ── */
  if (isIntro) {
    return (
      <div className="pt-20 min-h-screen bg-charcoal-900 flex items-center justify-center px-6 py-16">
        <div className="max-w-xl text-center">
          <span className="inline-block font-display text-[10px] font-bold tracking-[0.3em] uppercase text-earth-500 bg-earth-900/40 px-3 py-1.5 rounded mb-8">
            5 Questions
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl text-sand-100 leading-tight mb-5">
            Find Your
            <br />
            <span className="text-earth-400">Perfect Van.</span>
          </h1>
          <p className="text-sand-400 text-lg leading-relaxed mb-8">
            Answer five questions about how you travel, where you go, and what you value
            — and we&apos;ll match you to the best Class B platform for your lifestyle.
          </p>
          <button
            onClick={() => setStep(1)}
            className="px-8 py-4 font-display font-bold text-sm tracking-widest uppercase bg-earth-600 hover:bg-earth-500 text-sand-100 rounded transition-colors"
          >
            Start the Questionnaire
          </button>
          <p className="text-sand-500 text-xs mt-4">Takes about 2 minutes.</p>
        </div>
      </div>
    );
  }

  /* ── Result screen ── */
  if (isDone && recommendedVan) {
    return (
      <div className="pt-20 min-h-screen bg-charcoal-900 px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <p className="font-display text-earth-400 text-xs font-bold tracking-[0.3em] uppercase mb-3 text-center">
            Your Recommendation
          </p>
          <h1 className="font-display font-black text-3xl md:text-4xl text-sand-100 text-center leading-tight mb-2">
            We matched you with:
          </h1>

          {/* Recommendation card */}
          <div className="mt-8 bg-charcoal-800 border-2 border-earth-600 rounded-xl overflow-hidden">
            <div className="bg-earth-900/30 px-6 py-4 border-b border-earth-800">
              <p className="font-display text-[10px] font-bold tracking-widest uppercase text-earth-500 mb-0.5">
                {recommendedVan.maker}
              </p>
              <h2 className="font-display font-black text-2xl text-sand-100">
                {recommendedVan.name}
              </h2>
              <p className="text-sand-400 text-sm">{recommendedVan.chassis}</p>
            </div>

            <div className="p-6 grid grid-cols-2 gap-4 border-b border-charcoal-700">
              <div>
                <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-1">Price Range</p>
                <p className="text-earth-300 font-semibold text-sm">{recommendedVan.priceRange}</p>
              </div>
              <div>
                <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-1">4x4</p>
                <p className={`font-semibold text-sm ${recommendedVan.has4x4 ? "text-forest-400" : "text-sand-400"}`}>
                  {recommendedVan.has4x4 ? "Available" : "Not Available"}
                </p>
              </div>
              <div>
                <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-1">Off-Road</p>
                <p className="text-sand-200 font-semibold text-sm">{recommendedVan.offRoadCapability}</p>
              </div>
              <div>
                <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-1">Build Quality</p>
                <p className="text-earth-400 font-semibold text-sm">{recommendedVan.buildQuality}</p>
              </div>
            </div>

            <div className="p-6 border-b border-charcoal-700">
              <p className="font-display text-[10px] font-bold tracking-widest uppercase text-earth-600 mb-3">Why this van</p>
              <ul className="space-y-2">
                {recommendedVan.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-sand-300">
                    <span className="text-earth-500 mt-0.5 shrink-0">+</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border-b border-charcoal-700">
              <p className="font-display text-[10px] font-bold tracking-widest uppercase text-sand-500/50 mb-2">Best for</p>
              <div className="flex flex-wrap gap-2">
                {recommendedVan.bestFor.map((tag) => (
                  <span key={tag} className="text-xs text-sand-300 bg-charcoal-700 border border-charcoal-600 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
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

          <p className="text-sand-500 text-xs text-center mt-6">
            This is a starting point, not a verdict. Compare all models to see the full picture.
          </p>
        </div>
      </div>
    );
  }

  /* ── Question screen ── */
  if (!currentStep) return null;

  const progress = ((step - 1) / steps.length) * 100;

  return (
    <div className="pt-20 min-h-screen bg-charcoal-900 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
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

        {/* Question */}
        <h1 className="font-display font-black text-2xl md:text-3xl text-sand-100 mb-2 leading-tight">
          {currentStep.question}
        </h1>
        <p className="text-sand-500 text-sm mb-8">{currentStep.hint}</p>

        {/* Options */}
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
                    selected === option.id
                      ? "border-earth-500 bg-earth-500"
                      : "border-charcoal-600"
                  }`}
                >
                  {selected === option.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-charcoal-900" />
                  )}
                </div>
                <div>
                  <p className="font-display font-bold text-base text-sand-100 mb-0.5">
                    {option.label}
                  </p>
                  <p className="text-sand-400 text-sm">{option.sub}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation */}
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
              selected
                ? "bg-earth-600 hover:bg-earth-500 text-sand-100"
                : "bg-charcoal-700 text-charcoal-600 cursor-not-allowed"
            }`}
          >
            {step === steps.length ? "Get My Recommendation" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
