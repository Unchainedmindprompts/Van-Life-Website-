export type CapabilityLevel = "Low" | "Moderate" | "High" | "Very High";
export type BuildQuality = "Budget" | "Mid-Range" | "Premium" | "Luxury";

export interface VanModel {
  id: string;
  name: string;
  maker: string;
  chassis: string;
  priceRange: string;
  has4x4: boolean;
  suspensionOptions: string;
  offRoadCapability: CapabilityLevel;
  sleepingCapacity: number;
  buildQuality: BuildQuality;
  bestFor: string[];
  highlights: string[];
  considerations: string[];
  msrp: string;
}

export const vans: VanModel[] = [
  {
    id: "sprinter-conversion",
    name: "Sprinter Conversion",
    maker: "Mercedes-Benz",
    chassis: "Mercedes Sprinter 144\" / 170\"",
    priceRange: "$150,000 – $300,000+",
    msrp: "Varies by builder",
    has4x4: true,
    suspensionOptions: "Factory 4x4 (Quigley, Aluminess lifts), air suspension upgrades",
    offRoadCapability: "High",
    sleepingCapacity: 2,
    buildQuality: "Premium",
    bestFor: ["Full-time van lifers", "Off-grid adventurers", "Custom build enthusiasts"],
    highlights: [
      "Widest builder ecosystem in the market",
      "Tall interior — 6'+ standing room",
      "Diesel engine with strong torque",
      "4x4 option with factory high-clearance",
    ],
    considerations: [
      "Mercedes dealer network required for major repairs",
      "Higher maintenance costs than domestic chassis",
      "Build quality varies widely between converters",
    ],
  },
  {
    id: "ford-transit-conversion",
    name: "Transit Conversion",
    maker: "Ford",
    chassis: "Ford Transit 148\" / 148\" Extended",
    priceRange: "$80,000 – $200,000",
    msrp: "Varies by builder",
    has4x4: false,
    suspensionOptions: "AWD available, aftermarket lift kits",
    offRoadCapability: "Moderate",
    sleepingCapacity: 2,
    buildQuality: "Mid-Range",
    bestFor: ["Weekend adventurers", "Budget-conscious buyers", "Storyteller Overland fans"],
    highlights: [
      "AWD all-wheel drive available (not 4x4)",
      "Largest domestic van builder ecosystem",
      "More affordable base vehicle cost",
      "EcoBoost engine options for power",
    ],
    considerations: [
      "AWD not true 4x4 — limited off-road ability",
      "Lower ceiling height than Sprinter",
      "Fewer factory adventure-specific options",
    ],
  },
  {
    id: "ram-promaster-conversion",
    name: "ProMaster Conversion",
    maker: "Ram",
    chassis: "Ram ProMaster 136\" / 159\"",
    priceRange: "$60,000 – $150,000",
    msrp: "Varies by builder",
    has4x4: false,
    suspensionOptions: "FWD only, aftermarket suspension upgrades available",
    offRoadCapability: "Low",
    sleepingCapacity: 2,
    buildQuality: "Mid-Range",
    bestFor: ["Urban van lifers", "Budget builds", "Short-trip travelers"],
    highlights: [
      "Most affordable base vehicle",
      "Widest interior width of any cargo van",
      "Front-wheel drive — good in snow/light mud",
      "Easy DIY conversion due to simple layout",
    ],
    considerations: [
      "No 4x4 option — not for serious off-road",
      "FWD limits traction in extreme terrain",
      "Less mature builder ecosystem vs. Sprinter/Transit",
    ],
  },
  {
    id: "winnebago-boldt",
    name: "Boldt",
    maker: "Winnebago",
    chassis: "Mercedes Sprinter 144\"",
    priceRange: "$160,000 – $210,000",
    msrp: "~$165,000 base",
    has4x4: true,
    suspensionOptions: "Factory 4x4 available, Quigley 4x4 system",
    offRoadCapability: "High",
    sleepingCapacity: 2,
    buildQuality: "Premium",
    bestFor: ["Full-timers", "Off-grid adventurers", "Couples seeking turnkey quality"],
    highlights: [
      "Factory-built consistency — no builder variability",
      "Excellent warranty and nationwide Winnebago service",
      "Thoughtful storage and space efficiency",
      "Solar + lithium power system standard",
    ],
    considerations: [
      "Less customization than custom builds",
      "Premium pricing for the chassis size",
      "Waiting lists can be lengthy",
    ],
  },
  {
    id: "airstream-interstate",
    name: "Interstate",
    maker: "Airstream",
    chassis: "Mercedes Sprinter 170\"",
    priceRange: "$200,000 – $280,000",
    msrp: "~$215,000 base",
    has4x4: true,
    suspensionOptions: "4x4 available on Grand Tour model",
    offRoadCapability: "Moderate",
    sleepingCapacity: 2,
    buildQuality: "Luxury",
    bestFor: ["Luxury travelers", "Weekend warriors", "Buyers prioritizing brand prestige"],
    highlights: [
      "Premium fit and finish — best-in-class interior quality",
      "Longer 170\" wheelbase for more living space",
      "Iconic Airstream brand and dealer support",
      "Excellent resale value",
    ],
    considerations: [
      "4x4 not available on all trims",
      "Highest price point in the Class B segment",
      "Focused on luxury, not hardcore off-road",
    ],
  },
  {
    id: "storyteller-overland",
    name: "Storyteller Overland",
    maker: "Storyteller Overland",
    chassis: "Ford Transit 148\" AWD",
    priceRange: "$135,000 – $175,000",
    msrp: "~$140,000 base",
    has4x4: false,
    suspensionOptions: "AWD with MODE suspension lift, aftermarket upgrades",
    offRoadCapability: "High",
    sleepingCapacity: 2,
    buildQuality: "Premium",
    bestFor: ["Overlanders", "Adventure-first buyers", "Off-grid weekend warriors"],
    highlights: [
      "PURPOSE-built for adventure — not a luxury retrofit",
      "Proprietary MODE lift suspension adds ground clearance",
      "Aggressive exterior styling and off-road aesthetics",
      "Strong overlanding community and resale",
    ],
    considerations: [
      "AWD vs. true 4x4 — a step below Sprinter 4x4",
      "Smaller service network than Winnebago/Airstream",
      "Limited customization at point of sale",
    ],
  },
];

export const comparisonFields = [
  { key: "chassis", label: "Chassis" },
  { key: "priceRange", label: "Price Range" },
  { key: "has4x4", label: "4x4 Available" },
  { key: "suspensionOptions", label: "Suspension" },
  { key: "offRoadCapability", label: "Off-Road Rating" },
  { key: "sleepingCapacity", label: "Sleeps" },
  { key: "buildQuality", label: "Build Quality" },
] as const;
