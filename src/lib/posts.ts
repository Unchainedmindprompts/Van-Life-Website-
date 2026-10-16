export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
  updated?: string;
  image: { src: string; alt: string; caption: string };
  about: string[];
  mentions: string[];
  schema: {
    "@type": string;
    headline: string;
    description: string;
    keywords: string[];
  };
}

export const posts: BlogPost[] = [
  {
    slug: "should-you-buy-a-covid-era-used-van",
    title: "Should You Buy a COVID-Era Used Van? What the Data Actually Shows",
    excerpt: "The COVID build quality story is real, but for Class B vans the evidence points somewhere else: supplier-part recalls, no measurable defect penalty, and a first owner who absorbed the depreciation and the punch list. The data, the exceptions, and the buying protocol.",
    category: "Buying Guide",
    readTime: "11 min",
    date: "2026-10-14",
    updated: "2026-10-14",
    image: {
      src: "/images/sportsmobile-interior-rear.jpg",
      alt: "The rear interior of a Class B camper van with the rear doors open, showing bench seating and cabinetry",
      caption: "On a used van, the conversion is where era risk lives, and all of it is inspectable. Photo: the author.",
    },
    featured: true,
    about: ["class-b"],
    mentions: ["org:winnebago"],
    schema: {
      "@type": "BlogPosting",
      headline: "Should You Buy a COVID-Era Used Van? What the Data Actually Shows",
      description: "RVIA shipment data, NHTSA recall records and J.D. Power values on COVID-era (2021-2023) Class B camper vans: what actually went wrong, why vans differ from trailers, and how to buy one safely.",
      keywords: ["COVID era RV quality", "buying a used Class B van", "2021 2022 RV build quality", "COVID camper reliability", "used camper van inspection", "NRVIA inspection", "NHTSA RV recalls"],
    },
  },
  {
    slug: "sportsmobile-review",
    title: "Sportsmobile Review: The Original Converter, Still Building One Van at a Time",
    excerpt:
      "Founded in 1961, Sportsmobile builds every van per client, with no dealer network and published conversion pricing. The author has owned one for thirteen years. The company, the process, the real costs, the warranty, and how they hold up.",
    category: "Van Review",
    readTime: "12 min",
    date: "2026-10-14",
    featured: true,
    updated: "2026-10-14",
    image: {
      src: "/DSC_0795.jpeg",
      alt: "The author's own Sportsmobile, a white 2013 Sprinter 170 EXT, at a coastal campsite",
      caption: "The author's 2013 Sportsmobile Sprinter 170 EXT, the same van as Starry Van's homepage hero photo.",
    },
    about: ["org:sportsmobile", "model:sportsmobile-penthouse"],
    mentions: ["chassis:sprinter", "chassis:transit", "model:sportsmobile-classic", "class-b"],
    schema: {
      "@type": "Article",
      headline: "Sportsmobile Review: The Original Converter, Still Building One Van at a Time",
      description:
        "Sportsmobile has built per-client Class B conversions since 1961. Platforms, Penthouse top, published conversion pricing, 3-year warranty, the Classic 4x4 question, and a 13-year owner durability report, checked against the manufacturer's own pages.",
      keywords: ["Sportsmobile", "Sportsmobile review", "Sportsmobile Sprinter", "Penthouse pop top", "custom van conversion cost", "Sportsmobile Classic 4x4", "Charles Borskey", "van converter since 1961", "Sportsmobile warranty", "EB 170"],
    },
  },
  {
    slug: "remote-vans-review",
    title: "Remote Vans Review: The Class B Built for Working From Anywhere",
    excerpt:
      "A Cincinnati startup founded by an Army logistics officer and a tech founder who worked his way around the world without flying. A 16.8 kWh battery, real off-road hardware, Starlink fitted as standard, and two catches you need to know before you buy.",
    category: "Van Review",
    readTime: "12 min",
    date: "2026-10-14",
    featured: true,
    updated: "2026-10-14",
    image: {
      src: "/images/remote-vans-aegis-hero.jpg",
      alt: "A gray Remote Vans Aegis Series camper van with a front bumper, roof rack, side ladder and all-terrain tires, parked on grass",
      caption: "The Aegis Series, Remote Vans' flagship. Photo: Remote Vans.",
    },
    about: ["org:remote-vans", "model:remote-vans-friday", "model:remote-vans-aegis"],
    mentions: ["chassis:sprinter", "model:winnebago-revel", "model:storyteller-overland-mode", "class-b"],
    schema: {
      "@type": "Article",
      headline: "Remote Vans Review: The Class B Built for Working From Anywhere",
      description:
        "Remote Vans builds Sprinter AWD Class B campers in Cincinnati with 16.8 kWh batteries, Van Compass off-road hardware and fitted Starlink. Founders, build process, lineup prices, warranty terms and the catches, checked against the manufacturer's own pages.",
      keywords: ["Remote Vans", "Remote Vans review", "Remote Vans Friday", "Remote Vans Aegis", "Class B for remote work", "camper van Starlink", "16.8 kWh van battery", "Sprinter AWD camper van", "MoPoWa", "work from van"],
    },
  },
  {
    slug: "class-b-van-buying-guide",
    title: "Class B Van Buying: The 7 Questions You Must Answer Before You Spend a Dime",
    excerpt:
      "Before you fall in love with a van on Instagram, before you schedule a factory tour, before you put a deposit down — answer these seven questions. They'll save you from one of the most expensive mistakes you can make.",
    category: "Buying Guide",
    readTime: "11 min",
    date: "2025-02-15",
    featured: true,
  updated: "2026-10-14",
  image: {
    src: "/images/sportsmobile-interior-door.jpg",
    alt: "Inside a Class B camper van: galley and sink by the sliding door, a lounge bench opposite, and the bed at the rear of a 170-inch Sprinter",
    caption: "Inside a Class B: galley at the door, lounge opposite, bed across the rear. The layout decisions are the purchase. Photo: the author.",
  },
  about: ["class-b"],
  mentions: ["chassis:sprinter", "org:winnebago", "org:storyteller-overland"],
    schema: {
      "@type": "Article",
      headline: "Class B Van Buying: The 7 Questions You Must Answer Before You Spend a Dime",
      description:
        "The 7 critical questions every Class B campervan buyer must answer before purchasing — covering use case, custom vs manufacturer, 4x4, converter quality, budget, off-grid power, and long-term ownership. Written by Mark Abplanalp from Post Falls, Idaho.",
      keywords: [
        "Class B van buying guide",
        "campervan buying questions",
        "van life buying mistakes",
        "Sprinter van purchase",
        "Class B campervan",
        "custom van builder vs manufacturer",
        "4x4 van worth it",
        "van converter quality",
        "van life hidden costs",
        "off-grid van power system",
        "Class B van ownership",
        "Mark Abplanalp van life",
      ],
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
  updated: "2026-10-14",
  image: {
    src: "/images/chassis-comparison.png",
    alt: "Bar charts comparing interior standing height and width between wheel wells for the Sprinter, Transit, and ProMaster",
    caption: "The dimensions that decide the build. Manufacturer figures; sources linked in the article.",
  },
  about: ["chassis:sprinter", "chassis:transit", "chassis:promaster"],
  mentions: ["class-b"],
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
  updated: "2026-10-14",
  image: {
    src: "/tire-tread.png",
    alt: "Close-up of an all-terrain tire tread pattern",
    caption: "Tread is only part of the traction story. The drivetrain decides the rest.",
  },
  about: ["chassis:sprinter"],
  mentions: ["model:winnebago-revel", "model:storyteller-overland-mode", "class-b"],
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
    title: "Winnebago Boldt Review (Discontinued): Is It Still Worth Buying Used?",
    excerpt:
      "Winnebago no longer builds the Boldt. As a used buy it remains one of the strongest factory Class B options for full-timers. What it got right, where it falls short, and what to check before you buy one.",
    category: "Van Review",
    readTime: "11 min",
    date: "2024-12-05",
    featured: false,
  updated: "2026-10-14",
  image: {
    src: "/IMG_1329.jpeg",
    alt: "A Sportsmobile Sprinter Class B camper van at a coastal campsite with bicycles on a rear rack",
    caption: "The author's own Class B, a 2013 Sportsmobile Sprinter. The Boldt is covered from manufacturer material and owner reports.",
  },
  about: ["model:winnebago-boldt"],
  mentions: ["chassis:sprinter", "org:winnebago"],
    schema: {
      "@type": "Article",
      headline: "Winnebago Boldt Review (Discontinued): Is It Still Worth Buying Used?",
      description:
        "The Winnebago Boldt is discontinued. Reviewed as a used buy: strengths, shortcomings, drivetrain, and what full-timers should check before purchasing.",
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
  updated: "2026-10-14",
  image: {
    src: "/IMG_2448.jpeg",
    alt: "A camper van on a gravel forest road at night under the Milky Way",
    caption: "Night on a forest road: the terrain the MODE was built for.",
  },
  about: ["model:storyteller-overland-mode"],
  mentions: ["chassis:transit", "chassis:sprinter", "org:storyteller-overland"],
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
    title: "Off-Grid Power Systems for Class B Vans: Lithium vs AGM Compared",
    excerpt:
      "Lithium or AGM? Solar only or generator backup? Shore power or a DC-DC charger? The definitive breakdown of power system options for Class B van builds — with real numbers on capacity, weight, cost, and lifespan.",
    category: "Systems & Gear",
    readTime: "10 min",
    date: "2024-11-02",
    featured: false,
  updated: "2026-10-14",
  image: {
    src: "/images/power-comparison.png",
    alt: "Bar charts comparing usable capacity and cycle life of lithium and AGM batteries",
    caption: "Lithium vs AGM in two charts. Typical ranges; the reasoning is in the article.",
  },
  about: ["class-b", "topic:lifepo4"],
  mentions: [],
    schema: {
      "@type": "Article",
      headline: "Off-Grid Power Systems for Class B Vans: Lithium vs AGM Compared",
      description:
        "Comparing lithium and AGM battery systems for off-grid Class B van builds, including solar, shore power, and DC-DC charging options.",
      keywords: ["van life power system", "lithium battery van", "off-grid van", "solar van conversion"],
    },
  },
];
