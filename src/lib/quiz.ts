import { vans, type VanModel } from "./vans";

/* ─── Questionnaire data and matching engine ─────────────────
   Extracted from the quiz UI so the matching logic can be tested
   independently. Budget, group sleeping capacity, and a required
   wet bath are hard constraints in rankVans, not preferences. */

type ModelId =
  | "winnebago-revel"
  | "winnebago-travato"
  | "winnebago-solis"
  | "storyteller-overland-mode"
  | "airstream-interstate-24glx"
  | "coachmen-nova"
  | "thor-sequence"
  | "thor-tellaro"
  | "coachmen-galleria"
  | "grech-terreno"
  | "remote-vans-friday"
  | "remote-vans-aegis";

export interface Option {
  id: string;
  label: string;
  sub: string;
  scores: Partial<Record<ModelId, number>>;
}

export interface Step {
  id: string;
  question: string;
  hint: string;
  segment?: boolean; // segmentation-only question (timeline): no scoring
  options: Option[];
}

export const steps: Step[] = [
  {
    id: "usage",
    question: "How will you use your van?",
    hint: "This shapes everything, from power system sizing to chassis choice.",
    options: [
      {
        id: "weekend",
        label: "Weekend trips",
        sub: "Mostly Friday to Sunday, home during the week",
        scores: { "winnebago-solis": 3, "thor-tellaro": 3, "thor-sequence": 3, "winnebago-travato": 2, "coachmen-nova": 2, "storyteller-overland-mode": 2, "winnebago-revel": 1, "airstream-interstate-24glx": 1, "coachmen-galleria": 1, "grech-terreno": 1 , "remote-vans-friday": 1, "remote-vans-aegis": 1},
      },
      {
        id: "multiweek",
        label: "Multi-week adventures",
        sub: "Extended trips, a mix of campgrounds and boondocking",
        scores: { "winnebago-revel": 3, "storyteller-overland-mode": 3, "winnebago-travato": 3, "winnebago-solis": 2, "coachmen-nova": 2, "coachmen-galleria": 2, "grech-terreno": 2, "airstream-interstate-24glx": 2, "thor-tellaro": 1, "thor-sequence": 1 , "remote-vans-friday": 3, "remote-vans-aegis": 3},
      },
      {
        id: "fulltime",
        label: "Full-time van life",
        sub: "This is my home. It has to work every day",
        scores: { "grech-terreno": 3, "coachmen-galleria": 3, "airstream-interstate-24glx": 3, "winnebago-revel": 2, "storyteller-overland-mode": 2, "winnebago-travato": 2, "coachmen-nova": 2, "winnebago-solis": 1 , "remote-vans-friday": 3, "remote-vans-aegis": 3},
      },
    ],
  },
  {
    id: "terrain",
    question: "What terrain do you regularly drive?",
    hint: "Be honest. Most van trips stay on graded roads.",
    options: [
      {
        id: "pavement",
        label: "Mostly paved roads",
        sub: "Campgrounds, highway, the occasional dirt road",
        scores: { "winnebago-travato": 3, "coachmen-galleria": 3, "grech-terreno": 3, "coachmen-nova": 3, "airstream-interstate-24glx": 2, "thor-sequence": 2, "thor-tellaro": 2, "winnebago-solis": 2 , "remote-vans-friday": 1, "remote-vans-aegis": 1},
      },
      {
        id: "gravel",
        label: "Gravel and forest service roads",
        sub: "Rough terrain but not technical. Clearance helps",
        scores: { "storyteller-overland-mode": 4, "winnebago-revel": 4, "airstream-interstate-24glx": 3, "grech-terreno": 2, "coachmen-galleria": 2, "winnebago-travato": 1, "coachmen-nova": 1, "winnebago-solis": 1 , "remote-vans-friday": 3, "remote-vans-aegis": 4},
      },
      {
        id: "offroad",
        label: "Technical off-road",
        sub: "4WD-required routes, steep two-tracks, serious overlanding",
        scores: { "winnebago-revel": 5, "storyteller-overland-mode": 4, "airstream-interstate-24glx": 2, "grech-terreno": 1, "coachmen-galleria": 1 , "remote-vans-friday": 2, "remote-vans-aegis": 4},
      },
    ],
  },
  {
    id: "party",
    question: "How many people will sleep in the van?",
    hint: "The most common mistake in this market is buying a van that sleeps fewer people than travel in it.",
    options: [
      {
        id: "solo",
        label: "Just me",
        sub: "Solo traveler. Space is less critical",
        scores: { "winnebago-solis": 2, "thor-tellaro": 2, "thor-sequence": 2, "storyteller-overland-mode": 2, "winnebago-revel": 2, "winnebago-travato": 1, "coachmen-nova": 1, "airstream-interstate-24glx": 1, "coachmen-galleria": 1, "grech-terreno": 1 , "remote-vans-friday": 2, "remote-vans-aegis": 2},
      },
      {
        id: "couple",
        label: "Two people",
        sub: "A couple living and traveling together",
        scores: { "winnebago-travato": 3, "airstream-interstate-24glx": 3, "coachmen-galleria": 3, "grech-terreno": 3, "winnebago-revel": 2, "storyteller-overland-mode": 2, "coachmen-nova": 2, "thor-sequence": 2, "thor-tellaro": 2, "winnebago-solis": 2 , "remote-vans-friday": 3, "remote-vans-aegis": 3},
      },
      {
        id: "group",
        label: "3 or more",
        sub: "Family or group. Real sleeping capacity matters",
        scores: { "winnebago-solis": 5, "thor-tellaro": 3, "storyteller-overland-mode": 2 , "remote-vans-friday": 2, "remote-vans-aegis": 2},
      },
    ],
  },
  {
    id: "winter",
    question: "Will you camp in real winter?",
    hint: "Snow, freezing nights, ski trips, hunting season. Be honest about how cold.",
    options: [
      {
        id: "rarely",
        label: "Rarely or never",
        sub: "Three-season use, stored or parked in winter",
        scores: { "thor-sequence": 2, "thor-tellaro": 2, "winnebago-solis": 2, "winnebago-travato": 1, "coachmen-nova": 1, "winnebago-revel": 1, "storyteller-overland-mode": 1, "coachmen-galleria": 1, "grech-terreno": 1, "airstream-interstate-24glx": 1 , "remote-vans-friday": 1, "remote-vans-aegis": 1},
      },
      {
        id: "occasional",
        label: "Occasional cold nights",
        sub: "Shoulder seasons and mild freezes, not deep winter",
        scores: { "winnebago-travato": 3, "coachmen-nova": 3, "winnebago-revel": 2, "thor-tellaro": 2, "winnebago-solis": 2, "coachmen-galleria": 2, "airstream-interstate-24glx": 2, "storyteller-overland-mode": 2, "grech-terreno": 2, "thor-sequence": 1 , "remote-vans-friday": 2, "remote-vans-aegis": 2},
      },
      {
        id: "serious",
        label: "Serious four-season use",
        sub: "Sustained freezing temps are part of the plan",
        scores: { "grech-terreno": 5, "storyteller-overland-mode": 4, "coachmen-galleria": 4, "coachmen-nova": 4, "airstream-interstate-24glx": 3, "winnebago-revel": 3, "winnebago-travato": 2, "thor-tellaro": 2, "winnebago-solis": 1 , "remote-vans-friday": 2, "remote-vans-aegis": 2},
      },
    ],
  },
  {
    id: "bathroom",
    question: "What do you need for a bathroom?",
    hint: "This quietly eliminates half the market, so it matters more than most people expect.",
    options: [
      {
        id: "full",
        label: "A real enclosed wet bath",
        sub: "Shower and toilet in the van, non-negotiable",
        scores: { "winnebago-revel": 2, "winnebago-travato": 2, "winnebago-solis": 2, "airstream-interstate-24glx": 2, "coachmen-nova": 2, "thor-sequence": 2, "thor-tellaro": 2, "coachmen-galleria": 2, "grech-terreno": 2 },
      },
      {
        id: "flexible",
        label: "Flexible",
        sub: "A shower system and a portable or cassette toilet are fine",
        scores: { "storyteller-overland-mode": 3, "winnebago-revel": 1, "winnebago-travato": 1, "winnebago-solis": 1, "airstream-interstate-24glx": 1, "coachmen-nova": 1, "thor-sequence": 1, "thor-tellaro": 1, "coachmen-galleria": 1, "grech-terreno": 1 , "remote-vans-friday": 3, "remote-vans-aegis": 3},
      },
      {
        id: "minimal",
        label: "Minimal is fine",
        sub: "Campground facilities or the outdoors work for me",
        scores: { "storyteller-overland-mode": 3, "winnebago-solis": 2, "winnebago-revel": 1, "winnebago-travato": 1, "airstream-interstate-24glx": 1, "coachmen-nova": 1, "thor-sequence": 1, "thor-tellaro": 1, "coachmen-galleria": 1, "grech-terreno": 1 , "remote-vans-friday": 2, "remote-vans-aegis": 2},
      },
    ],
  },
  {
    id: "budget",
    question: "What is your budget for the van?",
    hint: "We treat this as a hard limit, not a suggestion. Prices are new, at the manufacturer or dealer starting price, verified against the maker.",
    options: [
      {
        id: "under150",
        label: "Under $150,000",
        sub: "The most affordable new Class B vans",
        scores: { "thor-tellaro": 5, "winnebago-solis": 2, "thor-sequence": 2 },
      },
      {
        id: "150to200",
        label: "$150,000 to $200,000",
        sub: "Where most factory Class B vans actually sell",
        scores: { "winnebago-solis": 4, "thor-sequence": 4, "coachmen-nova": 4, "winnebago-travato": 4, "storyteller-overland-mode": 4, "thor-tellaro": 2 , "remote-vans-friday": 4},
      },
      {
        id: "200to275",
        label: "$200,000 to $275,000",
        sub: "Premium factory builds, AWD Sprinters",
        scores: { "winnebago-revel": 4, "coachmen-galleria": 4, "airstream-interstate-24glx": 1, "storyteller-overland-mode": 1 , "remote-vans-friday": 1, "remote-vans-aegis": 4},
      },
      {
        id: "275plus",
        label: "$275,000 and up",
        sub: "Top tier. I want the best available",
        scores: { "grech-terreno": 5, "airstream-interstate-24glx": 5, "coachmen-galleria": 2, "winnebago-revel": 1 , "remote-vans-aegis": 2},
      },
    ],
  },
  {
    id: "timeline",
    question: "When are you hoping to buy?",
    hint: "No scoring here. This just lets us tailor what we send you.",
    segment: true,
    options: [
      { id: "now", label: "Ready now", sub: "Actively shopping, want to buy in the next few months", scores: {} },
      { id: "soon", label: "Within 3 to 6 months", sub: "Narrowing it down, doing final research", scores: {} },
      { id: "researching", label: "Just researching", sub: "Learning the market, no deadline", scores: {} },
    ],
  },
  {
    id: "priority",
    question: "What matters most to you?",
    hint: "Your honest answer here is the tiebreaker.",
    options: [
      {
        id: "offroad",
        label: "Off-road capability",
        sub: "I want to go places other vans cannot",
        scores: { "winnebago-revel": 5, "storyteller-overland-mode": 5, "airstream-interstate-24glx": 2, "grech-terreno": 1, "coachmen-galleria": 1 , "remote-vans-friday": 2, "remote-vans-aegis": 4},
      },
      {
        id: "reliability",
        label: "Service network and support",
        sub: "When something breaks, I want a dealer who can fix it",
        scores: { "winnebago-travato": 4, "winnebago-revel": 3, "winnebago-solis": 3, "airstream-interstate-24glx": 3, "coachmen-nova": 2, "coachmen-galleria": 2, "thor-sequence": 2, "thor-tellaro": 2, "grech-terreno": 1, "storyteller-overland-mode": 1 , "remote-vans-friday": 1, "remote-vans-aegis": 1},
      },
      {
        id: "value",
        label: "Value for money",
        sub: "Maximum van for minimum spend",
        scores: { "thor-tellaro": 5, "thor-sequence": 4, "winnebago-solis": 4, "coachmen-nova": 3, "winnebago-travato": 2, "storyteller-overland-mode": 1 , "remote-vans-friday": 2, "remote-vans-aegis": 1},
      },
      {
        id: "comfort",
        label: "Interior comfort and finish",
        sub: "I want it to feel like a premium living space",
        scores: { "grech-terreno": 5, "airstream-interstate-24glx": 5, "coachmen-galleria": 4, "winnebago-travato": 2, "coachmen-nova": 2, "winnebago-revel": 1, "storyteller-overland-mode": 1, "winnebago-solis": 1, "thor-sequence": 1, "thor-tellaro": 1 , "remote-vans-friday": 2, "remote-vans-aegis": 3},
      },
    ],
  },
];

/* ─── Scoring engine ─────────────────────────────────────── */

const ALL_IDS = vans.map((v) => v.id) as ModelId[];

export interface RankedVan {
  van: VanModel;
  total: number;
  byStep: Record<string, number>;
  tier: number; // 0 = inside budget, 1 = within 10% stretch, 2 = beyond
  overBy: number;
}

const BUDGET_CEILINGS: Record<string, number> = {
  under150: 150000,
  "150to200": 200000,
  "200to275": 275000,
  "275plus": Number.POSITIVE_INFINITY,
};

/**
 * Ranking with hard constraints.
 * Budget, sleeping capacity for groups, and a required wet bath are treated
 * as constraints, not preferences: a van outside the buyer's budget can only
 * win when nothing inside it fits the other answers, and it is flagged.
 */
export function rankVans(answers: Record<string, string>): RankedVan[] {
  const totals: Record<string, { total: number; byStep: Record<string, number> }> = {};
  ALL_IDS.forEach((id) => (totals[id] = { total: 0, byStep: {} }));

  steps.forEach((step) => {
    const answerId = answers[step.id];
    if (!answerId) return;
    const option = step.options.find((o) => o.id === answerId);
    if (!option) return;
    Object.entries(option.scores).forEach(([vanId, pts]) => {
      if (pts === undefined) return;
      totals[vanId].total += pts;
      totals[vanId].byStep[step.id] = pts;
    });
  });

  const ceiling = BUDGET_CEILINGS[answers["budget"]] ?? Number.POSITIVE_INFINITY;
  const stretch = Number.isFinite(ceiling) ? Math.round(ceiling * 1.1) : Number.POSITIVE_INFINITY;

  const ranked: (RankedVan & { hardExcluded: boolean })[] = vans.map((van) => {
    const tier = van.priceFrom <= ceiling ? 0 : van.priceFrom <= stretch ? 1 : 2;
    const hardExcluded =
      (answers["bathroom"] === "full" && van.bathroom !== "Wet bath") ||
      (answers["party"] === "group" && van.sleepsMax < 3);
    return {
      van,
      total: totals[van.id].total,
      byStep: totals[van.id].byStep,
      tier,
      overBy: Number.isFinite(ceiling) ? Math.max(0, van.priceFrom - ceiling) : 0,
      hardExcluded,
    };
  });

  const eligible = ranked.filter((r) => !r.hardExcluded);
  const pool = eligible.length > 0 ? eligible : ranked;
  return pool
    .sort((a, b) => a.tier - b.tier || b.total - a.total)
    .map(({ hardExcluded, ...rest }) => rest);
}

export function buildReasons(
  van: VanModel,
  byStep: Record<string, number>,
  answers: Record<string, string>
): string[] {
  const reasons: string[] = [];
  const push = (cond: boolean, text: string) => {
    if (cond && text && !reasons.includes(text)) reasons.push(text);
  };

  if ((byStep["terrain"] ?? 0) >= 3) push(true, `For your terrain: ${van.offroadNote}.`);
  if ((byStep["winter"] ?? 0) >= 3) push(true, `For your winters: ${van.winterNote}.`);
  if (answers["party"] === "group" && (byStep["party"] ?? 0) >= 3)
    push(true, `It actually sleeps your group: ${van.sleepingCapacity} berths${van.sleepsNote ? ` (${van.sleepsNote.toLowerCase()})` : ""}.`);
  if (answers["bathroom"] === "full" && van.bathroom === "Wet bath")
    push(true, "It has the full enclosed wet bath you required.");
  if ((byStep["budget"] ?? 0) >= 3)
    push(true, `It fits the budget you set: starts at ${van.priceRange}.`);
  if ((byStep["priority"] ?? 0) >= 4 && van.highlights[0]) push(true, van.highlights[0] + ".");
  if (answers["usage"] === "fulltime" && (byStep["usage"] ?? 0) >= 2 && van.bestFor[0])
    push(true, `Suited to full-time life: ${van.bestFor[0].toLowerCase()} is exactly who it is built for.`);

  van.highlights.forEach((h) => {
    if (reasons.length < 3) push(true, h + ".");
  });
  return reasons.slice(0, 4);
}

