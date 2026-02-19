export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
  schema: {
    "@type": string;
    headline: string;
    description: string;
    keywords: string[];
  };
}

export const posts: BlogPost[] = [
  {
    slug: "class-b-van-buying-guide",
    title: "The Complete Class B Van Buying Guide for 2025",
    excerpt:
      "Everything you need to know before buying a Class B campervan — from chassis selection and 4x4 options to converter quality tiers, hidden costs, and how to test-drive like an expert.",
    category: "Buying Guide",
    readTime: "12 min",
    date: "2025-01-15",
    featured: true,
    schema: {
      "@type": "Article",
      headline: "The Complete Class B Van Buying Guide for 2025",
      description:
        "A comprehensive guide to buying a Class B campervan in 2025, including chassis selection, converter quality, 4x4 options, and pricing.",
      keywords: ["Class B van buying guide", "campervan purchase", "van life", "Sprinter conversion"],
    },
  },
  {
    slug: "sprinter-vs-transit-vs-promaster",
    title: "Sprinter vs Transit vs ProMaster: Which Chassis Wins for Van Life?",
    excerpt:
      "The three dominant cargo van platforms broken down for van life use: ride quality, reliability data, repair costs, interior dimensions, and which one makes the most sense for your lifestyle.",
    category: "Van Comparison",
    readTime: "9 min",
    date: "2025-01-08",
    featured: true,
    schema: {
      "@type": "Article",
      headline: "Sprinter vs Transit vs ProMaster: Which Chassis Wins for Van Life?",
      description:
        "Comparing the three major cargo van chassis for van life conversions: Mercedes Sprinter, Ford Transit, and Ram ProMaster.",
      keywords: ["Sprinter vs Transit", "ProMaster van life", "cargo van chassis comparison", "best van for conversion"],
    },
  },
  {
    slug: "4x4-van-is-it-worth-it",
    title: "4x4 Van: Is It Actually Worth the Premium?",
    excerpt:
      "The honest truth about 4x4 capability in Class B vans — who actually needs it, what it costs (purchase price and long-term), the real-world off-road performance difference, and better alternatives if your adventures don't justify it.",
    category: "Off-Road",
    readTime: "7 min",
    date: "2024-12-20",
    featured: false,
    schema: {
      "@type": "Article",
      headline: "4x4 Van: Is It Actually Worth the Premium?",
      description:
        "An honest analysis of whether the 4x4 option is worth the cost premium for Class B adventure vans.",
      keywords: ["4x4 van", "Sprinter 4x4", "off-road campervan", "4WD van life"],
    },
  },
  {
    slug: "winnebago-boldt-review",
    title: "Winnebago Boldt Review: The Best Turnkey Class B for Full-Timers?",
    excerpt:
      "An in-depth look at the Winnebago Boldt — what it gets right (a lot), where it cuts corners, how the factory 4x4 system performs in the field, and whether the price premium over a custom Sprinter build is justified.",
    category: "Van Review",
    readTime: "11 min",
    date: "2024-12-05",
    featured: false,
    schema: {
      "@type": "Article",
      headline: "Winnebago Boldt Review: The Best Turnkey Class B for Full-Timers?",
      description:
        "A detailed review of the Winnebago Boldt Class B campervan for full-time van life.",
      keywords: ["Winnebago Boldt review", "Class B van review", "full-time van life", "turnkey van"],
    },
  },
  {
    slug: "storyteller-overland-mode-suspension",
    title: "Storyteller Overland MODE Suspension Explained",
    excerpt:
      "Storyteller's proprietary MODE suspension lift is one of the most talked-about features in the Class B market. Here's exactly how it works, what it changes about the transit chassis, and whether the off-road claims are legit.",
    category: "Tech Deep Dive",
    readTime: "6 min",
    date: "2024-11-18",
    featured: false,
    schema: {
      "@type": "Article",
      headline: "Storyteller Overland MODE Suspension Explained",
      description:
        "A technical explanation of the Storyteller Overland MODE suspension lift system and its real-world off-road performance.",
      keywords: ["Storyteller Overland MODE suspension", "van lift kit", "Ford Transit off-road", "adventure van suspension"],
    },
  },
  {
    slug: "off-grid-power-systems-class-b",
    title: "Off-Grid Power Systems for Class B Vans: Lithium vs AGM in 2025",
    excerpt:
      "Lithium or AGM? Solar only or generator backup? Shore power or a DC-DC charger? The definitive breakdown of power system options for Class B van builds — with real numbers on capacity, weight, cost, and lifespan.",
    category: "Systems & Gear",
    readTime: "10 min",
    date: "2024-11-02",
    featured: false,
    schema: {
      "@type": "Article",
      headline: "Off-Grid Power Systems for Class B Vans: Lithium vs AGM in 2025",
      description:
        "Comparing lithium and AGM battery systems for off-grid Class B van builds, including solar, shore power, and DC-DC charging options.",
      keywords: ["van life power system", "lithium battery van", "off-grid van", "solar van conversion"],
    },
  },
];
