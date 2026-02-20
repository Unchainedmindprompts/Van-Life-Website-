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
      "The Class B campervan market has never been more exciting — or more confusing. You've got boutique custom builders crafting $250,000 rolling masterpieces, and you've got major RV manufacturers now offering factory 4x4 lifts, Fox suspension, and off-road tires at scale. Everyone looks legit. Every van looks amazing in photos. And the price range runs from $80,000 to well over $300,000.",
    relatedSlugs: [
      "sprinter-vs-transit-vs-promaster",
      "4x4-van-is-it-worth-it",
      "off-grid-power-systems-class-b",
    ],
    blocks: [
      {
        type: "callout",
        text: "Before you fall in love with a van on Instagram, before you schedule a factory tour, before you put a deposit down — answer these seven questions. They'll save you from one of the most expensive mistakes you can make.",
      },

      // ── Question 1 ──────────────────────────────────────────
      {
        type: "h2",
        heading: "Question 1: How Do You Actually Plan to Use It?",
        text: "This sounds obvious. It isn't.",
      },
      {
        type: "h3",
        heading: "Define Your Use Case Before You Shop",
        text: "Most buyers say \"weekend trips and maybe some longer stuff eventually.\" That answer tells you nothing — and it leads to buying the wrong van. Be specific. Are you a solo traveler or a couple? Do you bring dogs? Kids? Bikes? Do you need to work remotely from the road? Are you camping in developed campgrounds with hookups, or are you parking on forest roads with no power and no water for a week at a time?",
      },
      {
        type: "h3",
        heading: "Why Use Case Drives Every Other Decision",
        text: "Your use case determines your floor plan, your electrical requirements, your storage needs, and your budget. A weekend warrior who camps at state parks twice a month has completely different needs than a couple planning to full-time for two years in the backcountry. Get this wrong and you'll be living with compromises every single trip.",
      },

      // ── Question 2 ──────────────────────────────────────────
      {
        type: "h2",
        heading: "Question 2: Custom Builder or RV Manufacturer?",
        text: "This is the fork in the road — and it's a bigger decision than most buyers realize.",
      },
      {
        type: "h3",
        heading: "What the Custom Builder Path Looks Like",
        text: "Working with a shop like Outside Van, Storyteller Overland, or dozens of regional converters means they take a raw cargo van and build it to your specifications. You get a high degree of personalization, often superior craftsmanship, and a build that reflects how you actually live. The tradeoff is lead times that can stretch 12-18 months, limited dealer networks for service, and prices that reflect handcrafted work.",
      },
      {
        type: "h3",
        heading: "What the RV Manufacturer Path Looks Like",
        text: "Buying from companies like Winnebago, Airstream, or Thor means established dealer networks, standardized builds, financing options, and warranty infrastructure. These used to mean compromise on capability. Not anymore.",
      },
      {
        type: "h3",
        heading: "How the Market Has Changed",
        text: "Here's what's shifted the game: major manufacturers are now bringing custom builder specs to production scale. Factory 4x4 conversions, Fox suspension upgrades, off-road wheel and tire packages — features that used to require a boutique builder are now coming off assembly lines. That blurs the line significantly and makes the decision harder than it used to be. The right answer depends on how much you value personalization versus convenience, and how comfortable you are with the service and warranty experience each path offers.",
      },

      // ── Question 3 ──────────────────────────────────────────
      {
        type: "h2",
        heading: "Question 3: Do You Need 4x4 and Off-Road Capability?",
        text: "Be honest with yourself here.",
      },
      {
        type: "h3",
        heading: "The Real Cost of 4x4",
        text: "4x4 capability adds cost — typically $10,000 to $20,000 or more depending on the conversion. It adds weight. It adds mechanical complexity. And for a lot of buyers, it sits unused 95% of the time.",
      },
      {
        type: "h3",
        heading: "Who Actually Needs Off-Road Capability",
        text: "If your version of adventure is driving to a trailhead, parking in a campground, and day hiking — you don't need 4x4. A well-built 2WD Sprinter will get you everywhere you actually want to go. But if you're chasing dispersed camping on unmaintained forest roads, running routes in shoulder season when conditions are unpredictable, or overlanding into genuinely remote terrain — 4x4 stops being a luxury and becomes a safety decision.",
      },
      {
        type: "h3",
        heading: "Don't Let Marketing Make This Decision",
        text: "The current market trend is pushing buyers toward off-road specs because it looks great and it sells. Don't let marketing make this decision for you. Be clear about where you actually drive, and buy accordingly.",
      },

      // ── Question 4 ──────────────────────────────────────────
      {
        type: "h2",
        heading: "Question 4: Who Converted It and Can They Prove Their Quality?",
        text: "This is the question most buyers skip. It's the one they regret.",
      },
      {
        type: "h3",
        heading: "Understanding Converter Quality Tiers",
        text: "Not all converters are equal — not even close. There are three rough tiers in the market:",
      },
      {
        type: "ul",
        items: [
          "Premium builders have years of documented builds, real customer reviews, transparent build processes, proper electrical engineering, and warranties they actually stand behind. They cost more because they deliver more.",
          "Mid-tier builders are often solid regional shops doing good work, but with less track record and less infrastructure. Some are excellent. Some cut corners you won't discover until you're three states from home.",
          "Budget converters — domestic or overseas — often look impressive in photos and fall apart under real use. Poorly designed electrical systems, inadequate insulation, cabinetry that doesn't survive road vibration, and warranties that evaporate when you need them.",
        ],
      },
      {
        type: "h3",
        heading: "Questions to Ask Every Converter Before You Buy",
        text: "Before you commit, ask for a detailed build sheet. Ask for customer references and actually call them. Ask specifically about the electrical system design and who engineered it. Ask what the warranty covers and what the claims process looks like. A quality builder will answer every one of those questions without hesitation. A bad one will get vague.",
      },

      // ── Question 5 ──────────────────────────────────────────
      {
        type: "h2",
        heading: "Question 5: What's Your Real Budget Including Hidden Costs?",
        text: "Whatever number you have in your head right now — add 20 to 30 percent.",
      },
      {
        type: "h3",
        heading: "Hidden Costs Most Buyers Miss",
        text: "The purchase price is just the beginning. Here's what most buyers don't factor in:",
      },
      {
        type: "ul",
        items: [
          "Insurance on a $150,000 Class B is not cheap, and coverage varies significantly. Some policies don't cover full-time living situations. Get quotes before you buy, not after.",
          "Maintenance on a Mercedes Sprinter is expensive. Dealer networks are improving but service can still be difficult in rural areas. A diesel engine, a complex electrical system, and a living space all require ongoing attention.",
          "Storage if you're not full-timing. Climate-controlled storage for a vehicle this size runs $200 to $400 a month in most western markets.",
        ],
      },
      {
        type: "h3",
        heading: "Costs That Catch Buyers Off Guard",
        text: "Upgrades — almost every buyer adds things after purchase. Solar capacity, better mattress, bike rack, rooftop gear, communication devices for backcountry travel. Budget for it upfront. Depreciation — Class B vans hold value reasonably well compared to larger RVs, but they're not investments. Know your exit strategy before you buy.",
      },

      // ── Question 6 ──────────────────────────────────────────
      {
        type: "h2",
        heading: "Question 6: How Do You Handle Power and Water Off-Grid?",
        text: "This is where dream meets reality fast.",
      },
      {
        type: "h3",
        heading: "Understanding Your Electrical System",
        text: "The electrical system is the heart of a livable van build. It determines whether you can run your coffee maker, charge your laptops, power your refrigerator, and keep your CPAP running for three days without hookups. A poorly designed system will leave you frustrated and underpowered. A well-engineered one disappears into the background and just works.",
      },
      {
        type: "h3",
        heading: "What to Look for in a Van's Electrical Build",
        text: "Ask specifically about battery capacity in usable amp hours, solar input wattage, shore power charging capability, and inverter size. Lithium batteries are now the standard for serious builds — they're lighter, they charge faster, and they deliver more usable capacity than AGM.",
      },
      {
        type: "h3",
        heading: "Water Capacity and Real-World Use",
        text: "Water is simpler but still matters. How many gallons does the fresh tank hold? Is there a gray water tank or does it drain directly? Is there a hot water system? For weekend use these questions are minor. For extended trips they become daily considerations.",
      },

      // ── Question 7 ──────────────────────────────────────────
      {
        type: "h2",
        heading: "Question 7: What Does Ownership Look Like Long Term?",
        text: "The purchase is day one. You need to think about year three.",
      },
      {
        type: "h3",
        heading: "Warranty Coverage That Actually Protects You",
        text: "What's actually covered, for how long, and who honors it? A custom builder warranty is only as good as the builder's longevity and willingness to stand behind their work. A manufacturer warranty comes with dealer network support but may have more exclusions than you expect.",
      },
      {
        type: "h3",
        heading: "Service Network and Parts Availability",
        text: "Where do you get it serviced? This matters more if you travel extensively. Sprinter dealers are widespread but not universal. Promaster and Transit have broader domestic dealer coverage. If something fails in rural Montana, your service options matter. For highly custom builds with proprietary components, replacement parts can become a challenge. For production vans from established manufacturers this is largely a non-issue.",
      },
      {
        type: "h3",
        heading: "Resale Value by Van Type",
        text: "Class B vans from reputable builders and established manufacturers hold value well. Unknown converters and budget builds do not. If you think you might sell in five years, buy accordingly.",
      },

      // ── Bottom Line ─────────────────────────────────────────
      {
        type: "h2",
        heading: "The Bottom Line",
        text: "A Class B van is one of the best investments you can make in how you experience the world. It's also a decision that rewards research and punishes impulse. Answer these seven questions honestly before you start shopping and you'll enter the market with clarity. You'll know what you need, what you're willing to pay for, and what questions to ask before you sign anything. That puts you miles ahead of most buyers. The right van is out there. Take the time to find it.",
      },

      // ── About the Author ────────────────────────────────────
      {
        type: "callout",
        text: "About the Author — Mark Abplanalp lives in Post Falls, Idaho with his wife and their rescue dog Roxy. He owns a 2013 Sportsmobile 170 EXT Sprinter van and has spent years exploring the American West from the driver's seat. He's passionate about the Class B van space and committed to helping buyers navigate it with honest, experience-based guidance — so they buy the right rig the first time.",
      },

      // ── FAQ ─────────────────────────────────────────────────
      {
        type: "faq-group",
        faqs: [
          {
            question: "How do I decide how I'll actually use my Class B van?",
            answer:
              "Be specific about your travel style before you shop. Define whether you're solo or a couple, whether you bring pets or bikes, whether you need to work remotely, and whether you'll camp at developed campgrounds with hookups or boondock on forest roads for a week at a time. Your use case determines your floor plan, electrical requirements, storage needs, and budget.",
          },
          {
            question: "Should I buy from a custom van builder or an RV manufacturer?",
            answer:
              "Custom builders like Outside Van or Storyteller Overland offer high personalization and often superior craftsmanship, but with 12-18 month lead times and limited service networks. RV manufacturers like Winnebago, Airstream, and Thor offer established dealer networks, standardized builds, and warranty infrastructure. Major manufacturers now offer factory 4x4, Fox suspension, and off-road packages that used to require a boutique builder.",
          },
          {
            question: "Is 4x4 worth the cost on a Class B campervan?",
            answer:
              "4x4 adds $10,000 to $20,000 or more and increases weight and mechanical complexity. If you camp at developed campgrounds and drive graded roads, you don't need it. If you chase dispersed camping on unmaintained forest roads or overland into remote terrain, 4x4 becomes a safety decision. Don't let marketing make this choice — be honest about where you actually drive.",
          },
          {
            question: "How do I evaluate a van converter's build quality?",
            answer:
              "Ask for a detailed build sheet, customer references (and actually call them), specifics about the electrical system design and who engineered it, and exactly what the warranty covers including the claims process. Premium builders answer these questions without hesitation. There are three quality tiers: premium builders with documented track records, mid-tier regional shops with varying quality, and budget converters that often look great in photos but fall apart under real use.",
          },
          {
            question: "What hidden costs should I budget for when buying a Class B van?",
            answer:
              "Add 20-30% to your purchase price for hidden costs. Insurance on a $150,000 Class B varies significantly and some policies don't cover full-time living. Mercedes Sprinter maintenance is expensive and service can be difficult in rural areas. Storage runs $200-$400/month if you're not full-timing. Almost every buyer adds upgrades after purchase — solar, mattress, bike rack, communication devices. Class B vans hold value better than larger RVs, but they're not investments.",
          },
          {
            question: "What should I look for in a van's off-grid power and water system?",
            answer:
              "The electrical system determines whether you can run appliances for days without hookups. Ask about battery capacity in usable amp hours, solar input wattage, shore power charging capability, and inverter size. Lithium batteries are now the standard for serious builds. For water, check fresh tank capacity, gray water handling, and hot water availability — these matter more on extended trips than weekend use.",
          },
          {
            question: "What does long-term Class B van ownership look like?",
            answer:
              "Think about year three, not just day one. Evaluate warranty coverage and who actually honors it — custom builder warranties depend on the builder's longevity. Consider the service network: Sprinter dealers are widespread but not universal, while Promaster and Transit have broader domestic coverage. Vans from reputable builders and established manufacturers hold resale value well; unknown converters and budget builds do not.",
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
