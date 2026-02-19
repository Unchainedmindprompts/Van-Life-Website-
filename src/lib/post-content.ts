export interface FAQ {
  question: string;
  answer: string;
}

export interface ContentBlock {
  type: "h2" | "h3" | "p" | "ul" | "ol" | "callout" | "faq-group";
  heading?: string;
  text?: string;
  items?: string[];
  faqs?: FAQ[];
}

export interface PostContent {
  slug: string;
  intro: string;
  blocks: ContentBlock[];
  relatedSlugs: string[];
}

export const postContent: Record<string, PostContent> = {
  "class-b-van-buying-guide": {
    slug: "class-b-van-buying-guide",
    intro:
      "Buying a Class B campervan is one of the biggest purchasing decisions you'll make — and the market in 2025 is more crowded and complex than ever. This guide walks you through every decision point, from choosing the right chassis to vetting a converter's build quality to making an offer without leaving money on the table.",
    relatedSlugs: [
      "sprinter-vs-transit-vs-promaster",
      "4x4-van-is-it-worth-it",
      "winnebago-boldt-review",
    ],
    blocks: [
      {
        type: "h2",
        heading: "What Is a Class B Van?",
        text: "Class B motorhomes are self-contained campervans built on a cargo van chassis — typically the Mercedes Sprinter, Ford Transit, or Ram ProMaster. Unlike larger Class A or C rigs, a Class B can be driven daily, parked in a normal space, and doesn't require a special license. That combination of livability and drivability is what's made them the fastest-growing segment in the RV industry.",
      },
      {
        type: "callout",
        text: "Class B vans are not a budget category — entry-level factory-built units start around $100,000 and custom builds on premium chassis regularly exceed $250,000. Understanding where your money goes is the first step in buying well.",
      },
      {
        type: "h2",
        heading: "Step 1: Choose Your Chassis",
        text: "Before you think about the interior, you need to decide what the van is built on. The chassis determines repairability, 4x4 options, interior dimensions, and long-term maintenance costs.",
      },
      {
        type: "ul",
        heading: "Mercedes Sprinter",
        items: [
          "Industry standard for premium builds — widest converter ecosystem",
          "True 4x4 option available (not AWD) with high and low range",
          "Tall interior: 6'2\" standing room in high-roof models",
          "Diesel engine standard — excellent torque and fuel economy on highway",
          "Requires Mercedes dealer for warranty and major service — plan accordingly",
        ],
      },
      {
        type: "ul",
        heading: "Ford Transit",
        items: [
          "Best domestic chassis option — huge builder ecosystem",
          "AWD available (not 4x4 — no low range gear)",
          "Lower ceiling than Sprinter but still functional for standing",
          "Gas engine only in the US — higher fuel consumption than diesel Sprinter",
          "Significantly more affordable base vehicle price",
        ],
      },
      {
        type: "ul",
        heading: "Ram ProMaster",
        items: [
          "Most affordable chassis — lowest barrier to entry for DIY builds",
          "Widest interior of the three — great for side-by-side sleeping",
          "Front-wheel drive only — no AWD or 4x4 available",
          "Best choice for urban-focused van life where off-road isn't a priority",
          "Smaller converter and aftermarket ecosystem",
        ],
      },
      {
        type: "h2",
        heading: "Step 2: Factory Build vs. Custom Conversion",
        text: "Once you've picked a chassis, you need to decide between a factory-built van (Winnebago, Airstream, Storyteller) and a custom conversion from an independent builder. Both have real tradeoffs.",
      },
      {
        type: "ul",
        heading: "Factory builds",
        items: [
          "Consistent quality — you know exactly what you're getting",
          "Nationwide dealer and service network",
          "RV financing available at lower rates than personal loans",
          "Less flexibility — trim options are limited to what the manufacturer offers",
          "Waiting lists of 6–18 months are common for popular models",
        ],
      },
      {
        type: "ul",
        heading: "Custom conversions",
        items: [
          "Full control over every design decision",
          "Can be built around your exact needs (bed size, power system, storage)",
          "Quality ranges wildly — vetting the builder is critical",
          "Harder to finance, harder to insure, harder to resell quickly",
          "Build timelines of 6–12 months are typical",
        ],
      },
      {
        type: "h2",
        heading: "Step 3: Evaluate 4x4 Capability",
        text: "If any part of your travel involves forest service roads, mountain access routes, beach driving, or genuine off-pavement adventure, 4x4 capability matters. Here's what the market actually offers.",
      },
      {
        type: "ul",
        items: [
          "True 4x4 (Sprinter): Two-speed transfer case with high and low range. Meaningful capability on technical terrain.",
          "AWD (Transit, Storyteller MODE): Permanent all-wheel drive without a low range. Great in slippery conditions; limited in technical off-road.",
          "FWD (ProMaster): Front-wheel drive is fine for wet roads and light gravel. Not appropriate for serious off-road use.",
          "Aftermarket lifts (all chassis): 1–2\" lifts improve ground clearance but don't change drivetrain capability.",
        ],
      },
      {
        type: "h2",
        heading: "Step 4: Know What to Inspect Before You Buy",
      },
      {
        type: "ol",
        items: [
          "Request a pre-purchase inspection by a mechanic familiar with the chassis — not just an RV shop",
          "Check all water systems for leaks — shower, sink, and fresh/grey/black tank plumbing",
          "Test every electrical circuit: 12V, shore power, solar charge controller, inverter",
          "Inspect all exterior seams and roof penetrations for signs of water intrusion",
          "Drive it on both highway and surface streets — listen for chassis or suspension issues",
          "Ask for documentation of all builder/converter work, including materials used",
        ],
      },
      {
        type: "h2",
        heading: "Step 5: Understand the Real Costs",
        text: "The purchase price is only the beginning. Budget for the following ongoing expenses when planning your van life finances.",
      },
      {
        type: "ul",
        items: [
          "Insurance: $150–$400/month depending on usage (full-time vs. recreational), chassis, and location",
          "Maintenance: Diesel Sprinters run $1,500–$3,000/year for routine service at a dealer",
          "Campsite/parking: Free camping is possible but unreliable — budget $400–$900/month for a mix of paid and free sites",
          "Propane or power: Budget $50–$150/month depending on climate and cooking habits",
          "Repairs: Budget 1–2% of vehicle value annually for unexpected mechanical work",
        ],
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "What is the average price of a Class B van in 2025?",
            answer:
              "Factory-built Class B vans range from approximately $100,000 (entry-level Transit-based builds) to $280,000+ (Airstream Interstate). Custom Sprinter builds with premium finishes regularly exceed $200,000. The used market offers better value — expect 15–25% depreciation in the first two years.",
          },
          {
            question: "Can I drive a Class B van daily?",
            answer:
              "Yes — Class B vans drive and park like a large cargo van. Most models are under 8 feet tall and can fit in standard parking garages. Daily driving is one of the main advantages over Class A or Class C rigs.",
          },
          {
            question: "Do I need a special license to drive a Class B?",
            answer:
              "No. Class B motorhomes are under the weight threshold requiring a commercial license in all 50 states. A standard driver's license is all you need.",
          },
          {
            question: "How long do Class B vans last?",
            answer:
              "The underlying van chassis typically lasts 200,000–300,000+ miles with proper maintenance. The conversion components (plumbing, electrical, cabinetry) require periodic refurbishment and may need significant work after 10–15 years.",
          },
        ],
      },
    ],
  },

  "sprinter-vs-transit-vs-promaster": {
    slug: "sprinter-vs-transit-vs-promaster",
    intro:
      "Three chassis dominate the Class B van market: the Mercedes Sprinter, the Ford Transit, and the Ram ProMaster. On paper they look similar — cargo vans you can sleep in. In practice, they're built for meaningfully different buyers. Here's the honest breakdown.",
    relatedSlugs: [
      "class-b-van-buying-guide",
      "4x4-van-is-it-worth-it",
      "storyteller-overland-mode-suspension",
    ],
    blocks: [
      {
        type: "h2",
        heading: "The Short Answer",
        text: "Buy a Sprinter if off-road capability or maximum interior height matters. Buy a Transit if you want the most builder options at a lower base cost. Buy a ProMaster if budget is tight and you'll stay on pavement. Now for the details.",
      },
      {
        type: "h2",
        heading: "Interior Dimensions",
        text: "This is where the Sprinter wins decisively. The high-roof Sprinter offers 6'2\" of standing height in the cargo area, which translates directly to livability on the road. The Transit high-roof hits around 5'11\" — workable but noticeably shorter. The ProMaster is the widest of the three (approximately 60\" between wheel wells vs. 48\" for the Sprinter), which makes it excellent for crosswise sleeping arrangements.",
      },
      {
        type: "h2",
        heading: "Drivetrain and Off-Road",
      },
      {
        type: "ul",
        items: [
          "Sprinter: Diesel only (US market). True 4x4 option with two-speed transfer case. Best ground clearance stock.",
          "Transit: Gas only (US market). AWD option with no low range. Good in slippery conditions, limited on technical terrain.",
          "ProMaster: Gas only. Front-wheel drive exclusively — no AWD or 4x4 available, ever.",
        ],
      },
      {
        type: "h2",
        heading: "Reliability and Ownership Costs",
        text: "The ProMaster has the simplest mechanicals and lowest service costs. The Transit is a close second — extensive dealer network, cheaper parts, and straightforward maintenance. The Sprinter is the most capable but the most expensive to maintain: diesel service at a Mercedes dealer runs $800–$1,500 for routine work, and major repairs can be significant. That said, well-maintained Sprinters regularly hit 300,000+ miles.",
      },
      {
        type: "h2",
        heading: "Builder Ecosystem",
        text: "More quality custom converters build on the Sprinter than any other platform. If you want a custom build with maximum options and the best resale value, Sprinter is the industry standard. The Transit has a large and growing converter community, particularly at the mid-market price point. ProMaster converters exist but the ecosystem is considerably smaller.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Is the Sprinter or Transit more reliable?",
            answer:
              "Both are reliable platforms with different risk profiles. The Transit's domestic engine and parts supply chain make it easier and cheaper to maintain. The Sprinter's diesel engine is extremely durable but requires Mercedes-specific service. For most buyers, the Transit is the lower-maintenance option.",
          },
          {
            question: "Which van has the best resale value?",
            answer:
              "Sprinter-based conversions from reputable builders hold value best, particularly with the 4x4 option. The Sprinter brand carries a premium in the used market. Storyteller Overland also holds value well due to brand demand. ProMaster builds generally depreciate fastest.",
          },
          {
            question: "Can I fit a full-size bed in a ProMaster?",
            answer:
              "Yes — the ProMaster's wide interior (approximately 60\" between wheel wells) accommodates a full-size (54\") crosswise mattress without a raised platform. This is one of its genuine advantages over the narrower Sprinter.",
          },
        ],
      },
    ],
  },

  "4x4-van-is-it-worth-it": {
    slug: "4x4-van-is-it-worth-it",
    intro:
      "The 4x4 option on a Sprinter-based Class B typically adds $12,000–$25,000 to the purchase price and increases your maintenance complexity. It's the right choice for some buyers and completely unnecessary for others. Here's how to decide honestly.",
    relatedSlugs: [
      "sprinter-vs-transit-vs-promaster",
      "storyteller-overland-mode-suspension",
      "class-b-van-buying-guide",
    ],
    blocks: [
      {
        type: "h2",
        heading: "What 4x4 Actually Gives You",
        text: "True 4x4 on a Sprinter means a two-speed transfer case with high range (for highway use and mild off-road) and low range (for technical, slow-speed terrain where torque multiplication matters). This is meaningfully different from AWD, which lacks the low range and is primarily useful for traction in slippery conditions rather than technical off-road.",
      },
      {
        type: "callout",
        text: "Key distinction: Sprinter 4x4 = true 4WD with high and low range. Storyteller/Transit AWD = all-wheel drive without low range. These are different systems for different use cases.",
      },
      {
        type: "h2",
        heading: "Who Actually Needs It",
      },
      {
        type: "ul",
        items: [
          "You regularly access Forest Service roads rated 4WD only",
          "You camp above 8,000 feet where seasonal snow is common",
          "You beach-drive on unimproved sand (tidal access, OHV areas)",
          "You routinely use two-track roads in wet, muddy conditions",
          "High resale value in your market — 4x4 vans sell faster and for more",
        ],
      },
      {
        type: "h2",
        heading: "Who Probably Doesn't",
      },
      {
        type: "ul",
        items: [
          "You camp at developed campgrounds or state parks most of the time",
          "Your 'off-road' is gravel forest roads, not technical two-track",
          "You're buying a Transit or ProMaster (4x4 isn't available anyway)",
          "Budget is a significant constraint — the premium has real opportunity cost",
          "You primarily camp at elevation during dry summer months",
        ],
      },
      {
        type: "h2",
        heading: "The Honest Cost-Benefit",
        text: "At $15,000–$20,000 more at purchase, a van 4x4 makes financial sense if you'll actually use it OR if you're buying in a market where 4x4 resale commands a premium. If you spend 90% of your time on paved or graded roads and buy a Sprinter 4x4 for 'just in case' scenarios you could navigate with traction boards and a shovel, you've overpaid.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Does 4x4 affect fuel economy in a Sprinter?",
            answer:
              "Yes — the added mechanical complexity and weight of the 4x4 system reduces fuel economy by approximately 1–3 MPG depending on driving conditions. Most drivers report 18–22 MPG highway in 2WD Sprinters vs. 16–20 in 4x4 models.",
          },
          {
            question: "Is 4x4 worth it for resale?",
            answer:
              "In most markets, yes — Sprinter 4x4 units sell faster and command $10,000–$20,000 premiums in the used market over equivalent 2WD builds. If you're buying with any eye toward resale, 4x4 is often the right investment.",
          },
          {
            question: "Can I add 4x4 to a 2WD Sprinter later?",
            answer:
              "Theoretically yes, but it's not practical. Aftermarket 4x4 conversions exist (via Quigley or similar) but the cost ($20,000+) and complexity exceed buying a factory 4x4 model. If you want 4x4, buy it from the start.",
          },
        ],
      },
    ],
  },

  "winnebago-boldt-review": {
    slug: "winnebago-boldt-review",
    intro:
      "The Winnebago Boldt is the most popular factory-built Class B in North America for good reason — it's well-designed, consistently built, comes with real warranty support, and is offered with a factory 4x4 option. But it's not perfect, and at $165,000+ it's not cheap. Here's everything you need to know.",
    relatedSlugs: [
      "class-b-van-buying-guide",
      "4x4-van-is-it-worth-it",
      "sprinter-vs-transit-vs-promaster",
    ],
    blocks: [
      {
        type: "h2",
        heading: "What the Boldt Gets Right",
      },
      {
        type: "ul",
        items: [
          "Factory consistency: Unlike custom builds, every Boldt of the same model year is built to the same spec — no builder variability",
          "Warranty: 1-year Winnebago warranty plus underlying Mercedes chassis warranty — real coverage, real dealer network",
          "Storage: Boldt's designers maximized every cubic inch — the overhead and under-bed storage is genuinely impressive for a 144\" wheelbase",
          "Power system: 200W solar + 100Ah lithium standard. Adequate for most users without upgrades",
          "Sprinter 4x4: Available as an option and genuinely capable — not a marketing add-on",
          "Resale: Boldt holds its value extremely well, especially 4x4 configurations",
        ],
      },
      {
        type: "h2",
        heading: "Where It Falls Short",
      },
      {
        type: "ul",
        items: [
          "Limited customization: You get what Winnebago offers. No custom bed configurations, no alternative floor plans for a given model year",
          "Water capacity: The standard fresh water tank (26 gallons) runs out fast for two people boondocking — most owners add tank capacity",
          "Solar: 200W is starter-tier for off-grid camping. A real off-grid setup needs 400–600W; plan to upgrade",
          "Wait times: Popular models are frequently backordered 6–12 months from dealers",
          "Price for size: At $165K+ for a 144\" Sprinter, you're paying a quality premium — a comparable custom build might offer more for less",
        ],
      },
      {
        type: "h2",
        heading: "4x4 Performance in the Field",
        text: "The Boldt 4x4 uses the Quigley system on the Mercedes Sprinter chassis — the same platform used by most custom-build 4x4 converters. In real-world use it performs well: stable on technical terrain, reliable transfer case, good ground clearance stock. The 4x4 Boldt is genuinely capable, not a watered-down version of van 4x4.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Is the Winnebago Boldt good for full-time van life?",
            answer:
              "Yes — the Boldt is one of the best factory options for full-timers. The storage efficiency, warranty support, and build consistency make it significantly less stressful than a custom build for people who don't want to be their own mechanic and project manager.",
          },
          {
            question: "How does the Boldt compare to a custom Sprinter build?",
            answer:
              "A custom build at a similar price point can offer more personalization (exact bed dimensions, larger solar, specific materials) but comes with builder variability risk and no manufacturer warranty. The Boldt trades flexibility for consistency and support — the right trade-off for most buyers.",
          },
          {
            question: "What is the fuel economy of the Winnebago Boldt?",
            answer:
              "The 2WD Boldt returns approximately 20–23 MPG on the highway. The 4x4 model is slightly lower at 18–21 MPG. Both figures are strong for a self-contained campervan of this size.",
          },
        ],
      },
    ],
  },

  "storyteller-overland-mode-suspension": {
    slug: "storyteller-overland-mode-suspension",
    intro:
      "Storyteller Overland's MODE suspension system is one of the most-discussed features in the Class B market. It's a proprietary lift and suspension upgrade built into their Transit-based vans that adds meaningful ground clearance without the cost or complexity of a true 4x4 conversion. Here's exactly what it is, what it does, and whether the off-road claims hold up.",
    relatedSlugs: [
      "4x4-van-is-it-worth-it",
      "sprinter-vs-transit-vs-promaster",
      "class-b-van-buying-guide",
    ],
    blocks: [
      {
        type: "h2",
        heading: "What Is the MODE Suspension?",
        text: "MODE (Modular Off-road Drivetrain Enhancements) is Storyteller's proprietary suspension package applied to the Ford Transit AWD platform. It includes a leveling lift of approximately 1.5\" over stock, upgraded shock absorbers, and in some configurations, a front skid plate and all-terrain tires. The result is a Transit that sits noticeably higher than stock and handles rough terrain with more confidence.",
      },
      {
        type: "h2",
        heading: "What It Actually Changes",
      },
      {
        type: "ul",
        items: [
          "Ground clearance: Up approximately 1.5\" over stock Transit (roughly 8.5\" vs. 7\" stock)",
          "Approach/departure angles: Marginally improved — the skid plate protects the front differential",
          "Ride quality: The upgraded shocks meaningfully improve comfort on washboard and rough dirt roads",
          "Wheel travel: Slightly improved articulation for uneven terrain",
          "Nothing about the drivetrain: The Transit AWD system doesn't change — still no low range",
        ],
      },
      {
        type: "callout",
        text: "The MODE suspension makes the Transit a better adventure van. It does not make it a 4x4. For Forest Service road access, beach driving, or technical two-track, a Sprinter 4x4 still has a meaningful capability advantage.",
      },
      {
        type: "h2",
        heading: "Real-World Performance",
        text: "Storyteller owners consistently report that the MODE suspension makes a genuine difference on rough-but-passable terrain: washboard dirt roads, packed gravel with loose sections, rocky two-tracks rated for high-clearance vehicles. The all-terrain tires add traction in loose conditions. For this use case — adventurous but not technical — the MODE system delivers.",
      },
      {
        type: "h2",
        heading: "MODE vs. Sprinter 4x4: Honest Comparison",
        text: "For overlanders who need to access 4WD-required routes, the Sprinter 4x4 is the answer. For adventurers who camp on dirt roads and occasional rough terrain but don't do technical off-road, the Storyteller MODE is capable enough and comes with a lower overall purchase price. The right answer depends on where you actually drive.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Can the Storyteller Overland go off-road?",
            answer:
              "Yes, within limits. The MODE suspension and AWD system handle rough dirt roads, light trail access, and high-clearance terrain well. Technical off-road requiring a low-range transfer case is beyond its capability.",
          },
          {
            question: "How does the MODE suspension affect ride quality on the highway?",
            answer:
              "Most owners report improved highway ride quality over stock Transit. The upgraded shocks reduce the jittery feel that stock Transit vans sometimes have at highway speed, particularly when loaded.",
          },
          {
            question: "Is the Storyteller MODE system serviceable anywhere?",
            answer:
              "The underlying Ford Transit components are serviceable at any Ford dealer. The MODE-specific suspension components are Storyteller-proprietary — service requires going through a Storyteller dealer or authorized shop.",
          },
        ],
      },
    ],
  },

  "off-grid-power-systems-class-b": {
    slug: "off-grid-power-systems-class-b",
    intro:
      "The power system is the most technically complex part of a Class B van build — and the component most likely to be undersized by default. Here's everything you need to know to spec the right system for how you actually camp.",
    relatedSlugs: [
      "class-b-van-buying-guide",
      "winnebago-boldt-review",
      "4x4-van-is-it-worth-it",
    ],
    blocks: [
      {
        type: "h2",
        heading: "Lithium vs. AGM: The Core Decision",
        text: "For most Class B buyers in 2025, lithium (LiFePO4) is the right choice. The price premium has narrowed significantly, and the advantages — deeper usable capacity, longer cycle life, lighter weight, and faster charging — make lithium the better long-term investment for anyone camping more than a few nights at a time.",
      },
      {
        type: "ul",
        heading: "Lithium (LiFePO4)",
        items: [
          "Usable capacity: 80–100% of rated capacity vs. 50% for AGM",
          "Cycle life: 2,000–5,000+ cycles vs. 300–500 for AGM",
          "Weight: Approximately 50–60% lighter per amp-hour than AGM",
          "Charge speed: Accepts higher charge rates — faster solar and alternator charging",
          "Cost: 2–3x the upfront cost of equivalent AGM capacity (but better over a 5-year period)",
          "Sensitivity: Requires a battery management system (BMS) — most quality lithium batteries include one",
        ],
      },
      {
        type: "ul",
        heading: "AGM (Absorbent Glass Mat)",
        items: [
          "Lower upfront cost per amp-hour",
          "Well-understood technology — any RV shop can service",
          "No BMS required — simpler integration",
          "Heavier — significant weight penalty in a van application",
          "Only 50% usable capacity — a 200Ah AGM bank gives you ~100Ah usable",
          "Best for buyers on tight budgets or using the van infrequently",
        ],
      },
      {
        type: "h2",
        heading: "How Much Battery Do You Need?",
        text: "Sizing your battery bank requires knowing your daily consumption. Run an energy audit: add up watt-hours for your refrigerator (biggest draw), lighting, phone/laptop charging, water pump, fan/ventilation, and any heating system. A couple living in a van full-time typically needs 200–300Ah of lithium capacity as a baseline.",
      },
      {
        type: "h2",
        heading: "Solar Sizing",
        text: "The standard 200W panel included with many factory builds is a reasonable starting point for weekend use in sunny regions. For full-time boondocking, most experienced van lifers recommend 400–600W of roof-mounted panels. At higher latitudes or in overcast climates, err toward the higher end of that range.",
      },
      {
        type: "h2",
        heading: "Charging Sources",
      },
      {
        type: "ul",
        items: [
          "Solar: Primary source for most boondocking setups — silent, free fuel, reliable",
          "DC-DC charger (alternator charging): Charges batteries while driving. Essential for multi-day driving stretches without solar",
          "Shore power (AC charging): For campgrounds with hookups — fast and convenient but removes the point of off-grid capability",
          "Generator: Backup option for extended cloudy periods — adds weight, noise, and fuel logistics",
        ],
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "What size inverter do I need in a van?",
            answer:
              "For most van applications — charging laptops, running a blender, operating a small coffee maker — a 1,000–2,000W pure sine wave inverter is sufficient. If you want to run a microwave or other high-draw appliances, size up to 2,000–3,000W. Pure sine wave is required for sensitive electronics; modified sine wave works for basic resistive loads only.",
          },
          {
            question: "Can I run air conditioning off solar in a Class B?",
            answer:
              "Roof-mounted A/C is extremely power-hungry (typically 1,200–1,500W running load) and not practical for sustained off-grid use with solar alone. The math doesn't work without a large generator or shore power. Diesel-powered auxiliary heaters/coolers (Webasto, Eberspächer) are a better off-grid comfort solution.",
          },
          {
            question: "How long does a lithium van battery last?",
            answer:
              "Quality LiFePO4 batteries (Battle Born, Renogy, Battleborn) typically last 10+ years with 2,000–5,000 full cycles. At one full cycle per day, that's 5–13 years of life — significantly better than the 1–3 years you'd get from a comparable AGM bank under the same use pattern.",
          },
        ],
      },
    ],
  },
};
