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
    slug: "cost-of-owning-a-class-b-van",
    title: "What It Costs to Own a Class B Van",
    excerpt:
      "Owning a Class B van costs money in five places the purchase price does not cover: insurance, maintenance, fuel, storage and tires, plus depreciation, which is the largest cost of all and not a cash cost. Recreational insurance runs $504 to $1,500 a year in the ranges published by Roamly, citing Progressive data, checked on October 25, 2026. Annual routine maintenance runs $1,050 to $1,500 for a gas ProMaster van and $1,200 to $2,500 for a diesel Sprinter in the published guides checked the same day. Paid storage for a Class B starts at $160 a month in Neighbor figures. Depreciation estimates disagree: one published curve puts a Class B down 31.5 percent at five years, another compilation puts the five year loss at 35 to 45 percent. Every range in the article is named, dated and shown with its basis, because our verified ledger contains no ownership cost figures at all.",
    category: "Buying Guide",
    readTime: "12 min",
    date: "2026-10-25",
    updated: "2026-10-25",
    featured: true,
    image: {
      src: "/images/sportsmobile-interior-door.jpg",
      alt: "Inside a Class B camper van: galley and sink by the sliding door, a lounge bench opposite, and the bed at the rear of a 170-inch Sprinter",
      caption: "The purchase price is the start of Class B ownership, not the whole of it. Insurance, service, fuel, storage and tires are decided by the chassis under the van and how you use it. Photo: the author.",
    },
    about: ["class-b"],
    mentions: ["model:thor-tellaro", "model:winnebago-solis", "model:coachmen-nova", "model:winnebago-travato", "model:thor-sequence", "model:winnebago-revel", "model:coachmen-galleria", "model:storyteller-overland-mode", "model:remote-vans-friday", "model:remote-vans-aegis", "model:grech-terreno", "model:airstream-interstate-24glx"],
    schema: {
      "@type": "Article",
      headline: "What It Costs to Own a Class B Van",
      description:
        "What it costs to own a Class B van beyond the purchase price, with every figure named, dated and shown with its basis, checked on October 25, 2026: insurance at $504 to $1,500 a year for recreational use in Roamly ranges citing Progressive data, routine maintenance at $1,050 to $1,500 a year for a gas ProMaster and $1,200 to $2,500 for a diesel Sprinter in published guides, paid Class B storage from $160 a month in Neighbor figures, all-terrain tire prices for the two verified Remote Vans fitments, a fuel example built only on labeled assumptions, and depreciation estimates that disagree, 31.5 percent at five years on one published curve and 35 to 45 percent in another compilation.",
      keywords: ["cost of owning a Class B van", "Class B van ownership costs", "Class B RV insurance cost", "Sprinter van maintenance cost", "ProMaster maintenance cost", "RV storage cost Class B", "Class B depreciation", "camper van running costs", "Class B van tires cost", "how much does it cost to own a camper van"],
    },
  },
  {
    slug: "class-b-van-bathrooms-wet-bath-dry-bath",
    title: "Class B Bathrooms: Wet Bath, Dry Bath, and What You Actually Get",
    excerpt:
      "No Class B van in the verified pool offers a true dry bath. Nine of the twelve verified models have an enclosed wet bath: five with a plumbed flush toilet on every floor plan, two Winnebago models with a fixed cassette, and the Thor Sequence and Tellaro split by floor plan, cassette on the 20U and flush on the 20L and 20Y. The other three, the Storyteller MODE and the Remote Vans Aegis and Friday, have no fixed bath at all, with a stowable shower and a portable toilet instead. The full per model table, from the verified ledger, with the Winnebago Revel bathroom re-verified on Winnebago own page on October 24, 2026.",
    category: "Buying Guide",
    readTime: "11 min",
    date: "2026-10-24",
    updated: "2026-10-24",
    featured: true,
    image: {
      src: "/images/sportsmobile-interior-galley.jpg",
      alt: "Inside a Class B camper van: a galley with a sink and wood cabinetry, a microwave and refrigerator, and a bench seat by the window",
      caption: "In a Class B van the bathroom competes for the same floor space as the galley, the bed and the seating. What each maker does with that space is the bathroom decision. Photo: the author.",
    },
    about: ["class-b"],
    mentions: ["model:airstream-interstate-24glx", "model:coachmen-galleria", "model:coachmen-nova", "model:grech-terreno", "model:winnebago-travato", "model:thor-sequence", "model:thor-tellaro", "model:winnebago-solis", "model:winnebago-revel", "model:storyteller-overland-mode", "model:remote-vans-aegis", "model:remote-vans-friday"],
    schema: {
      "@type": "Article",
      headline: "Class B Bathrooms: Wet Bath, Dry Bath, and What You Actually Get",
      description:
        "Class B bathrooms compared from the verified ledger: no verified model offers a true dry bath, nine models have an enclosed wet bath split between plumbed flush toilets and fixed cassettes, the Thor Sequence and Tellaro split by floor plan, and the Storyteller MODE and Remote Vans Aegis and Friday have no fixed bath, with stowable showers and portable toilets. The Winnebago Revel wet bath, 31 by 26 inches with a 5 gallon swiveling cassette, was re-verified on Winnebago own page on October 24, 2026.",
      keywords: ["Class B van bathroom", "wet bath vs dry bath camper van", "Class B dry bath", "Winnebago Revel wet bath size", "Winnebago Solis bathroom", "Storyteller MODE Halo Shower", "Remote Vans Cyber Shower", "Thor Tellaro bathroom", "Class B wet bath dimensions", "camper van bathroom types"],
    },
  },
  {
    slug: "best-class-b-vans-for-winter",
    title: "Best Class B Vans for Winter and Four-Season Use",
    excerpt:
      "No Class B van in the verified pool carries a published four-season rating you can compare across brands. What can be compared is the hardware: heated tanks, hydronic heat, insulation and drivetrain. The Grech Terreno heats all three tanks, the Airstream Interstate heats fresh and gray, and the Storyteller MODE keeps its fresh tank inside the cabin. The Coachmen Galleria and Nova put their tank heating in option packages, the Remote Vans Aegis and Friday publish no four-season rating at all, and Thor publishes no insulation rating for the Sequence or Tellaro. The full per model table, from the verified ledger.",
    category: "Buying Guide",
    readTime: "11 min",
    date: "2026-10-23",
    updated: "2026-10-23",
    featured: true,
    image: {
      src: "/images/sportsmobile-interior-door.jpg",
      alt: "Inside a Class B camper van: galley and sink by the sliding door, a lounge bench opposite, and the bed at the rear of a 170-inch Sprinter",
      caption: "Winter use is decided by systems, not labels: the heating system, where the tanks sit and whether they are heated, the insulation, and the drivetrain. Photo: the author.",
    },
    about: ["class-b"],
    mentions: ["model:grech-terreno", "model:airstream-interstate-24glx", "model:storyteller-overland-mode", "model:winnebago-revel", "model:remote-vans-aegis", "model:remote-vans-friday", "model:coachmen-galleria", "model:coachmen-nova", "model:winnebago-travato", "model:winnebago-solis", "model:thor-sequence", "model:thor-tellaro"],
    schema: {
      "@type": "Article",
      headline: "Best Class B Vans for Winter and Four-Season Use",
      description:
        "The best Class B vans for winter, compared on verified features rather than four-season labels: heated tanks on the Grech Terreno and Airstream Interstate, the Storyteller MODE in-cabin fresh tank, Revel hydronic heat re-verified on Winnebago own page on October 23, 2026, Coachmen Galleria and Nova tank heating as options, no four-season rating published for the Remote Vans Aegis and Friday, and no insulation rating published by Thor for the Sequence and Tellaro.",
      keywords: ["best Class B vans for winter", "four season Class B van", "Class B winter camping", "heated tanks camper van", "Grech Terreno winter", "Airstream Interstate winter", "Winnebago Revel winter", "Storyteller MODE four season", "Coachmen Galleria Polar Package", "Class B AWD winter"],
    },
  },
  {
    slug: "class-b-fresh-water-capacity-compared",
    title: "Class B Fresh Water Capacity, Compared",
    excerpt:
      "Fresh water in the verified Class B pool runs from 18 gallons on the Winnebago Travato to 37 gallons on the Storyteller MODE. The Thor Tellaro and Sequence have no single figure: they carry 22, 27 or 35 gallons depending on floor plan. The clean per floor plan table for all twelve verified models, with gray and waste paired alongside, and the dealer figures that should not be in the table.",
    category: "Buying Guide",
    readTime: "10 min",
    date: "2026-10-22",
    updated: "2026-10-22",
    featured: true,
    image: {
      src: "/images/sportsmobile-interior-galley.jpg",
      alt: "Inside a Class B camper van: a galley with a sink and wood cabinetry, a microwave and refrigerator, and a bench seat by the window",
      caption: "Fresh water is only half the system. The gray tank decides how long that water can stay in use before you need a dump point. Photo: the author.",
    },
    about: ["class-b"],
    mentions: ["model:storyteller-overland-mode", "model:thor-tellaro", "model:thor-sequence", "model:remote-vans-friday", "model:remote-vans-aegis", "model:coachmen-nova", "model:coachmen-galleria", "model:grech-terreno", "model:airstream-interstate-24glx", "model:winnebago-revel", "model:winnebago-solis", "model:winnebago-travato"],
    schema: {
      "@type": "Article",
      headline: "Class B Fresh Water Capacity, Compared",
      description:
        "Class B fresh water capacity compared for the twelve verified models, from 18 gallons on the Winnebago Travato to 37 gallons on the Storyteller MODE, with the Thor Tellaro and Sequence shown per floor plan at 22, 27 and 35 gallons, gray and waste capacities paired, and manufacturer figures used where dealer feeds disagree.",
      keywords: ["Class B fresh water capacity", "camper van fresh water tank size", "Winnebago Travato water capacity", "Storyteller MODE 37 gallon", "Thor Tellaro water capacity", "Winnebago Revel 21 gallon fresh water", "Class B gray water capacity", "how long does camper van water last"],
    },
  },
  {
    slug: "how-much-does-a-class-b-van-cost",
    title: "How Much Does a Class B Van Cost in 2026?",
    excerpt:
      "A new Class B van starts at $140,560 and runs to $290,400 in verified starting figures across the models we track. Only one model starts under $150,000, six sit between $150,000 and $200,000, and four starting figures are over $200,000. The Airstream Interstate has no published starting price: its $312,600 figure is a sticker on an optioned unit. Which figures are manufacturer prices, which are dealer figures, and why a sticker can sit well above the starting price.",
    category: "Buying Guide",
    readTime: "11 min",
    date: "2026-10-21",
    updated: "2026-10-21",
    featured: true,
    image: {
      src: "/images/sportsmobile-interior-door.jpg",
      alt: "Inside a Class B camper van: galley and sink by the sliding door, a lounge bench opposite, and the bed at the rear of a 170-inch Sprinter",
      caption: "What a starting price buys is a complete factory van on the lowest priced floor plan, before options. The specific van on a dealer lot is priced on its sticker, not on the line starting figure. Photo: the author.",
    },
    about: ["class-b"],
    mentions: ["model:thor-tellaro", "model:thor-sequence", "model:winnebago-solis", "model:coachmen-nova", "model:winnebago-travato", "model:storyteller-overland-mode", "model:remote-vans-friday", "model:winnebago-revel", "model:coachmen-galleria", "model:remote-vans-aegis", "model:grech-terreno", "model:airstream-interstate-24glx"],
    schema: {
      "@type": "Article",
      headline: "How Much Does a Class B Van Cost in 2026?",
      description:
        "How much a new Class B van costs in 2026, from verified starting prices: the Thor Tellaro at $140,560 is the only model under $150,000, six models sit between $150,000 and $200,000, and manufacturer starting figures run to the Grech Terreno at $290,400, with dealer figures labeled and the Airstream Interstate optioned sticker explained.",
      keywords: ["how much does a Class B van cost", "Class B van prices 2026", "Class B camper van cost", "cheapest Class B van", "Thor Tellaro price", "Winnebago Solis price", "Winnebago Revel price", "Storyteller MODE price", "Grech Terreno price", "Class B starting price vs sticker"],
    },
  },
  {
    slug: "best-transit-based-class-b-vans",
    title: "Best Transit-Based Class B Vans",
    excerpt:
      "The factory Ford Transit Class B set is five models: the Coachmen Beyond, the Thor Palladium and Talavera, the Entegra Coach Expanse, and the Forest River Lucent, new for 2027. The custom builders, Sportsmobile, VanDOit and ModVans, build on Transit more broadly. Every model, checked against its manufacturer, plus why buyers pick Transit over Sprinter and ProMaster.",
    category: "Buying Guide",
    readTime: "10 min",
    date: "2026-10-20",
    updated: "2026-10-20",
    featured: true,
    image: {
      src: "/images/chassis-comparison.png",
      alt: "Bar charts comparing interior standing height and width between wheel wells for the Sprinter, Transit, and ProMaster",
      caption: "The high roof Transit has the tallest interior standing height of the three Class B chassis, at 81.5 inches. Manufacturer figures; sources linked in the article.",
    },
    about: ["class-b", "chassis:transit"],
    mentions: ["model:coachmen-beyond", "model:thor-palladium", "model:thor-talavera", "model:entegra-expanse", "model:forest-river-lucent", "model:vandoit-moov", "model:modvans-cv1", "org:sportsmobile", "model:storyteller-overland-mode", "chassis:sprinter", "chassis:promaster"],
    schema: {
      "@type": "Article",
      headline: "Best Transit-Based Class B Vans",
      description:
        "The Transit-based Class B vans, verified against manufacturer pages on October 20, 2026: Coachmen Beyond, Thor Palladium and Talavera, Entegra Coach Expanse, and the new Forest River Lucent, plus the Transit builders Sportsmobile, VanDOit and ModVans, and why buyers choose the Ford Transit chassis.",
      keywords: ["Transit based Class B vans", "Ford Transit camper van", "best Transit camper vans", "Coachmen Beyond Transit", "Thor Palladium Transit", "Thor Talavera Transit Trail", "Entegra Expanse Transit", "Forest River Lucent", "Transit vs Sprinter camper van", "Sportsmobile Transit conversion"],
    },
  },
  {
    slug: "class-b-vans-that-sleep-four",
    title: "Class B Vans That Sleep Four",
    excerpt:
      "Most Class B vans sleep two. The Winnebago Solis is rated at four as a standard configuration, the Remote Vans line is rated at two to four, and the Thor Tellaro reaches four only with its optional Sky Bunk pop-top. The full list, by manufacturer rating, including the popular vans that do not sleep four.",
    category: "Buying Guide",
    readTime: "10 min",
    date: "2026-10-19",
    updated: "2026-10-19",
    featured: true,
    image: {
      src: "/images/sportsmobile-interior-rear.jpg",
      alt: "The rear interior of a Class B camper van with the rear doors open, showing bench seating that converts to sleeping space and cabinetry",
      caption: "Sleeping four in a Class B is a layout question, not a seating question. Belted seats are not beds. Photo: the author.",
    },
    about: ["class-b"],
    mentions: ["model:winnebago-solis", "model:remote-vans-friday", "model:remote-vans-aegis", "model:thor-tellaro", "model:thor-sequence", "model:coachmen-nova", "model:winnebago-travato", "model:storyteller-overland-mode", "model:airstream-interstate-24glx", "model:winnebago-revel", "model:coachmen-galleria", "model:grech-terreno", "model:sportsmobile-penthouse"],
    schema: {
      "@type": "Article",
      headline: "Class B Vans That Sleep Four",
      description:
        "Which Class B vans actually sleep four, verified against manufacturer ratings: the Winnebago Solis, the Remote Vans line, and the Thor Tellaro with its optional Sky Bunk, plus the models rated at two or three, including the Travato, Storyteller MODE and Airstream Interstate.",
      keywords: ["Class B vans that sleep four", "camper van sleeps 4", "Winnebago Solis sleeps four", "pop top Class B sleep four", "Thor Tellaro Sky Bunk", "Remote Vans sleeps four", "does the Travato sleep four", "Class B for family of four"],
    },
  },
  {
    slug: "class-b-vans-with-cassette-toilets",
    title: "Which Class B Vans Have Cassette Toilets?",
    excerpt:
      "Two Winnebago vans use a fixed cassette toilet, two Thor lines offer one on a single floor plan, and three adventure vans carry a portable cassette. The other five use a black tank. The full list, with cassette sizes from each manufacturer, and how to choose.",
    category: "Buying Guide",
    readTime: "10 min",
    date: "2026-10-18",
    updated: "2026-10-18",
    featured: true,
    image: {
      src: "/images/sportsmobile-interior-galley.jpg",
      alt: "Inside a Class B camper van: a galley with a sink and wood cabinetry, a microwave and refrigerator, and a bench seat by the window",
      caption: "Every Class B bathroom is a set of trades in a very small space. The toilet type decides how waste leaves the van for as long as you own it. Photo: the author.",
    },
    about: ["class-b"],
    mentions: ["model:winnebago-solis", "model:winnebago-revel", "model:thor-sequence", "model:thor-tellaro", "model:storyteller-overland-mode", "model:remote-vans-friday", "model:remote-vans-aegis", "model:winnebago-travato", "model:coachmen-nova", "model:coachmen-galleria", "model:grech-terreno", "model:airstream-interstate-24glx"],
    schema: {
      "@type": "Article",
      headline: "Which Class B Vans Have Cassette Toilets?",
      description:
        "Which Class B vans have cassette toilets, verified against manufacturer specifications: the Winnebago Solis and Revel, the Thor Sequence and Tellaro 20U, the Storyteller MODE and Remote Vans models, plus the black tank models, cassette sizes, and how to choose.",
      keywords: ["cassette toilet Class B", "which Class B vans have cassette toilets", "Winnebago Solis cassette toilet", "Winnebago Revel cassette toilet", "Thor Tellaro cassette toilet", "Thor Sequence cassette toilet", "cassette toilet vs black tank", "Class B van bathroom", "portable cassette toilet van"],
    },
  },
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
