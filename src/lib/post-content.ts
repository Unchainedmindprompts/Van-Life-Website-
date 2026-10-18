export interface FAQ {
  question: string;
  answer: string;
}

export interface ContentBlock {
  type: "h2" | "h3" | "p" | "ul" | "ol" | "callout" | "faq-group" | "image";
  heading?: string;
  text?: string;
  items?: string[];
  faqs?: FAQ[];
  src?: string;
  alt?: string;
  caption?: string;
}

export interface PostContent {
  slug: string;
  intro: string;
  blocks: ContentBlock[];
  relatedSlugs: string[];
}

export const postContent: Record<string, PostContent> = {
  "class-b-vans-with-cassette-toilets": {
    slug: "class-b-vans-with-cassette-toilets",
    intro:
      "Among the twelve Class B vans we track with verified manufacturer figures, the Winnebago Solis and Winnebago Revel have a fixed cassette toilet, the Thor Sequence and Thor Tellaro offer one on their 20U floor plan only, and the Storyteller Overland MODE, Remote Vans Friday and Remote Vans Aegis carry a portable cassette or cartridge toilet. The other five use a flush toilet plumbed to a black tank, and none of the twelve lists a composting toilet as standard equipment.",
    relatedSlugs: [
      "remote-vans-review",
      "class-b-van-buying-guide",
      "sprinter-vs-transit-vs-promaster",
    ],
    blocks: [
      {
        type: "p",
        text: "The short answer is the list above, and it matters more than most spec lines, because the toilet decides how you empty waste for the life of the van. A cassette lifts out and empties at a dump station or into a regular toilet, with no hose and no fixed tank under the van. A black tank holds far more and empties far less often, but only at a dump station, through a sewer hose. What follows lists every verified model by toilet type, with the cassette and tank sizes each manufacturer publishes, so you can shop the decision instead of discovering it on your first trip.",
      },
      {
        type: "ul",
        heading: "Toilet type by model, from manufacturer specifications",
        items: [
          "Winnebago Solis (59P and 59PX): fixed swiveling cassette toilet, 5 gallon cassette, enclosed wet bath, no black tank",
          "Winnebago Revel (44E): fixed swiveling cassette toilet, 5 gallon cassette, wet bath",
          "Thor Sequence: cassette toilet on the 20U only (4.75 gallon cassette); the 20L and 20Y use a flush toilet and a black tank",
          "Thor Tellaro: cassette toilet on the 20U only (4.75 gallon cassette); the 20L and 20Y use a flush toilet and a black tank",
          "Storyteller Overland MODE (Classic MODE OG): portable cassette toilet, 2.6 gallon capacity, stowable shower, no black tank",
          "Remote Vans Friday: portable cartridge toilet stored in the shower box, stowable shower, no black tank",
          "Remote Vans Aegis: portable Thetford cassette toilet stored in the shower box, stowable shower, no black tank",
          "Winnebago Travato: no cassette; flush toilet to a black tank, 11 gallons on the 59G and 12 gallons on the 59K and 59KL",
          "Coachmen Nova: no cassette; flush toilet to a black tank on every floor plan, 19 gallons on the 20C and 20D and 10 gallons on the 20RB",
          "Coachmen Galleria: no cassette; porcelain flush toilet to a black tank on every floor plan, 19 gallons on the 24A, 24 on the 24FL, 12 on the 24Q and 26 on the 24RB",
          "Grech Terreno: no cassette; porcelain toilet with a macerator pump to a 13 gallon black tank",
          "Airstream Interstate 24GLX: no cassette; foot flush toilet to an 11 gallon waste tank, emptied by a macerator pump",
        ],
      },
      {
        type: "h2",
        heading: "What is a cassette toilet, and how is it different from a black tank?",
        text: "A cassette toilet sits over a sealed, removable waste cassette. When the cassette is full, you slide it out and empty it through its pour spout at a dump station or into a regular toilet. Capacities in current Class B vans run from 2.6 gallons on the Storyteller MODE portable unit to 5 gallons on the fixed Winnebago installs. A black tank toilet is plumbed like a small version of a house toilet: waste drops into a fixed tank under the floor, and you empty that tank at a dump station by connecting a sewer hose. The black tanks in the vans above hold 10 to 26 gallons, so they need emptying far less often, but only where a dump connection exists.",
      },
      {
        type: "h2",
        heading: "Which vans have a fixed cassette toilet in a wet bath?",
        text: "Two vans, both from Winnebago, and they could hardly be more different otherwise.",
      },
      {
        type: "h3",
        heading: "Winnebago Solis: cassette on every floor plan",
        text: "The [Winnebago Solis](/models/winnebago-solis) is the clearest cassette answer in the segment. Both floor plans, the 59P and the 59PX, have an enclosed wet bath with a swiveling cassette toilet and a 5 gallon cassette, per Winnebago's Solis brochure, and there is no black water tank at all. If you want a cassette, a real enclosed bathroom and sleeping for four in the same van, the Solis is the only entry on this list that combines all three. Put it side by side with the Thor pair below in the [comparison tool](/compare) and the toilet is one of the first differences you will see.",
      },
      {
        type: "h3",
        heading: "Winnebago Revel: cassette in an adventure van",
        text: "The [Winnebago Revel](/models/winnebago-revel) puts the same style of toilet in a very different van: a swiveling cassette toilet with a 5 gallon cassette in a 31 by 26 inch wet bath, per Winnebago's specifications for the 44E. In an all wheel drive adventure van the cassette earns its keep. There is no black tank to deal with, and the cassette can be emptied at a dump station or into a regular toilet when a trip ends nowhere near an RV dump.",
      },
      {
        type: "h2",
        heading: "Which vans offer a cassette on one floor plan only?",
        text: "Thor's two ProMaster lines split the decision by floor plan, and this is the detail most dealer listings blur. A listing that calls the model line a cassette toilet van is right one time in three.",
      },
      {
        type: "h3",
        heading: "Thor Sequence: cassette on the 20U only",
        text: "On the [Thor Sequence](/models/thor-sequence), only the 20U has a cassette toilet, with a 4.75 gallon cassette in its enclosed wet bath. The 20L and 20Y have gravity flush toilets running to black tanks of 13.5 and 14 gallons. Thor's own floor plan specification pages list waste water at 4.75 gallons on the 20U against those larger black tank figures on the other floor plans, and Thor lists both toilet types in its published standards for the line.",
      },
      {
        type: "h3",
        heading: "Thor Tellaro: the identical split",
        text: "The [Thor Tellaro](/models/thor-tellaro) is the Sequence's sister line and makes the identical split: a cassette toilet on the 20U at 4.75 gallons, and gravity flush toilets with 13.5 and 14 gallon black tanks on the 20L and 20Y. Thor states the split outright in its Tellaro brochure. If a dealer advertises a Tellaro or a Sequence as a cassette toilet van, ask which floor plan is on the lot, because two of the three are not.",
      },
      {
        type: "h2",
        heading: "Which vans carry a portable cassette toilet instead of a fixed bath?",
        text: "The adventure vans below trade the fixed bathroom for living and gear space. The toilet is a portable cassette or cartridge unit that stores away, paired with a stowable shower, and there is no black tank at all.",
      },
      {
        type: "h3",
        heading: "Storyteller Overland MODE: the 2.6 gallon portable",
        text: "The [Storyteller Overland MODE](/models/storyteller-overland-mode), in Classic MODE OG form, skips the fixed bathroom entirely. You get a stowable Halo Shower system and a portable cassette toilet with 2.6 gallons of capacity, per Storyteller's published specifications, rechecked on the manufacturer's page on October 18, 2026. The trade is living space and a 37 gallon fresh water tank mounted inside the cabin, against a toilet you store, carry and empty more often than any other on this list.",
      },
      {
        type: "h3",
        heading: "Remote Vans Friday and Aegis: cartridge and cassette, same idea",
        text: "Remote Vans makes the same trade across its line. The [Remote Vans Friday](/models/remote-vans-friday) carries what the manufacturer calls a portable cartridge toilet, and the [Remote Vans Aegis](/models/remote-vans-aegis) carries a portable Thetford cassette toilet. Both store in the shower box of the stowable Cyber Shower, neither van has a black tank or a fixed wet bath, and both manufacturer pages were rechecked on October 18, 2026. Remote uses the words cartridge and cassette for the same kind of removable waste container. Our [Remote Vans review](/blog/remote-vans-review) covers the rest of that bathroom trade in detail.",
      },
      {
        type: "h2",
        heading: "Which Class B vans do not have a cassette toilet?",
        text: "Five of the twelve verified models use a flush toilet plumbed to a holding tank on every floor plan. If you want a cassette, these are the vans to cross off, whatever a listing headline suggests.",
      },
      {
        type: "ul",
        items: [
          "[Winnebago Travato](/models/winnebago-travato): a wet bath with a foot pedal flush toilet running to a black tank, 11 gallons on the 59G and 12 gallons on the 59K and 59KL, per Winnebago's 2026 brochure. It is the Revel's ProMaster sibling, and the toilet is one of the clearest differences between the two.",
          "[Coachmen Nova](/models/coachmen-nova): a wet bath with a fiberglass shower and a flush toilet to a black tank on every floor plan, 19 gallons on the 20C and 20D and 10 gallons on the 20RB, per Coachmen's specifications.",
          "[Coachmen Galleria](/models/coachmen-galleria): a porcelain flush toilet to a black tank on every floor plan, 19 gallons on the 24A, 24 on the 24FL, 12 on the 24Q and 26 on the 24RB, per Coachmen's specifications.",
          "[Grech Terreno](/models/grech-terreno): a porcelain toilet with a macerator pump to a 13 gallon black tank, per Grech's specifications and owner's manual.",
          "[Airstream Interstate 24GLX](/models/airstream-interstate-24glx): a foot flush toilet to an 11 gallon waste tank, emptied by a macerator pump system, per Airstream's specification page.",
        ],
      },
      {
        type: "h2",
        heading: "Cassette or black tank: which should you choose?",
        text: "Neither system is better in the abstract. They fit different trips, and the honest way to choose is by how you actually camp.",
      },
      {
        type: "ul",
        heading: "A cassette fits if",
        items: [
          "You camp away from dump stations and want to empty waste at a restroom or any dump point, without a sewer hose",
          "You like the option of carrying a spare cassette and swapping it instead of moving the van to dump",
          "You accept emptying a 2.6 to 5 gallon container by hand, more often than a black tank would need it",
          "You want no black tank under the van at all, as on the Solis, the MODE and the Remote Vans models",
        ],
      },
      {
        type: "ul",
        heading: "A black tank fits if",
        items: [
          "You use campgrounds with dump stations or full hookups most of the time",
          "You want the longest interval between dumps: the black tanks on this list hold 10 to 26 gallons, against 2.6 to 5 gallons for cassettes",
          "You want a fixed, plumbed bathroom that works like the one at home, with a flush toilet in an enclosed wet bath",
        ],
      },
      {
        type: "h2",
        heading: "What about composting toilets?",
        text: "None of the twelve vans in our verified pool lists a composting toilet as standard equipment in its manufacturer specifications. Composting units show up in custom conversions and as owner swaps, where a cassette or portable toilet is removed and a composting unit is fitted in its place. If composting is your plan, shop the bathroom space and the venting path rather than the badge, and confirm the swap fits before you buy. The custom route is covered in our [Sportsmobile review](/blog/sportsmobile-review), about a builder that builds each van to its client's layout.",
      },
      {
        type: "h2",
        heading: "Start with the toilet, then shop the van",
        text: "The toilet is a small line on a spec sheet and a daily fact of life on the road, so settle it early. If you have decided on a cassette, your factory short list is the Solis, the Revel, the Thor 20U floor plans, and the portable cassette adventure vans. If you want a black tank, the Travato and the Coachmen, Grech and Airstream entries above are your pool. Run your short list through the [comparison tool](/compare), take the [match quiz](/find-my-van) to check the rest of your priorities against the same models, browse the [full market index](/market) for the wider field, and read the [Class B buying guide](/blog/class-b-van-buying-guide) for the questions to answer before any of this.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Which Class B camper vans have a cassette toilet?",
            answer: "Among the twelve Class B vans we track with verified manufacturer figures, the Winnebago Solis and Winnebago Revel have fixed cassette toilets with 5 gallon cassettes. The Thor Sequence and Thor Tellaro offer a cassette toilet on their 20U floor plan only, with a 4.75 gallon cassette. The Storyteller Overland MODE, Remote Vans Friday and Remote Vans Aegis carry portable cassette or cartridge toilets and have no black tank. The Winnebago Travato, Coachmen Nova, Coachmen Galleria, Grech Terreno and Airstream Interstate 24GLX use flush toilets plumbed to black tanks instead.",
          },
          {
            question: "Does the Winnebago Revel have a cassette toilet?",
            answer: "Yes. The Revel 44E has a swiveling cassette toilet with a 5 gallon cassette in its 31 by 26 inch wet bath, per Winnebago's published specifications.",
          },
          {
            question: "Does the Winnebago Travato have a cassette toilet?",
            answer: "No. The Travato has a wet bath with a foot pedal flush toilet running to a black tank, 11 gallons on the 59G and 12 gallons on the 59K and 59KL, per Winnebago's 2026 brochure. Its Sprinter sibling, the Revel, is the Winnebago with the cassette.",
          },
          {
            question: "Do all Thor Tellaro and Sequence floor plans have cassette toilets?",
            answer: "No. On both lines, only the 20U floor plan has a cassette toilet, with a 4.75 gallon cassette. The 20L and 20Y floor plans have gravity flush toilets running to black tanks of 13.5 and 14 gallons. Thor states the split in its published standards and floor plan specifications.",
          },
          {
            question: "How big is a Class B cassette toilet?",
            answer: "The fixed Winnebago cassettes hold 5 gallons, the Thor 20U cassette holds 4.75 gallons, and the Storyteller MODE portable cassette holds 2.6 gallons, per each manufacturer's specifications. By comparison, the black tanks in the vans we track hold 10 to 26 gallons, which is why cassette owners empty more often.",
          },
          {
            question: "Can you empty a cassette toilet without a dump station?",
            answer: "Yes. A cassette lifts out of the van and empties through its pour spout at a dump station or into a regular toilet, with no sewer hose involved. That flexibility, rather than capacity, is the main reason buyers choose a cassette over a black tank.",
          },
          {
            question: "Do any Class B vans come with a composting toilet?",
            answer: "None of the twelve vans in our verified pool lists a composting toilet as standard equipment in its manufacturer specifications. Composting toilets in Class B vans are generally custom build choices or owner swaps in place of a cassette or portable toilet.",
          },
        ],
      },
    ],
  },
  "class-b-van-buying-guide": {
    slug: "class-b-van-buying-guide",
    intro:
      "The Class B campervan market has never been more exciting — or more confusing. You've got boutique custom builders crafting $250,000 rolling masterpieces, and you've got major RV manufacturers now offering factory all-wheel drive, lifted suspensions, and off-road tires at scale. Everyone looks legit. Every van looks amazing in photos. And the price range runs from $80,000 to well over $300,000.",
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
        text: "Working with a shop like [Outside Van](https://www.outsidevan.com), [Storyteller Overland](https://storytelleroverland.com), or dozens of regional converters means they take a raw cargo van and build it to your specifications. You get a high degree of personalization, often superior craftsmanship, and a build that reflects how you actually live. The tradeoff is lead times that can stretch 12-18 months, limited dealer networks for service, and prices that reflect handcrafted work.",
      },
      {
        type: "h3",
        heading: "What the RV Manufacturer Path Looks Like",
        text: "Buying from companies like [Winnebago](https://www.winnebago.com), [Airstream](https://www.airstream.com), or [Thor](https://www.thormotorcoach.com) means established dealer networks, standardized builds, financing options, and warranty infrastructure. These used to mean compromise on capability. Not anymore.",
      },
      {
        type: "h3",
        heading: "How the Market Has Changed",
        text: "Here's what's shifted the game: major manufacturers are now bringing custom builder specs to production scale. Factory all-wheel drive, suspension upgrades, off-road wheel and tire packages — features that used to require a boutique builder are now coming off assembly lines. That blurs the line significantly and makes the decision harder than it used to be. The right answer depends on how much you value personalization versus convenience, and how comfortable you are with the service and warranty experience each path offers.",
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
        text: "4x4 capability adds cost — typically $10,000 to $25,000 or more depending on the platform and conversion. It adds weight. It adds mechanical complexity. And for a lot of buyers, it sits unused 95% of the time.",
      },
      {
        type: "h3",
        heading: "Who Actually Needs Off-Road Capability",
        text: "If your version of adventure is driving to a trailhead, parking in a campground, and day hiking — you don't need 4x4. A well-built 2WD Sprinter will get you everywhere you actually want to go. But if you're chasing dispersed camping on unmaintained forest roads, running routes in shoulder season when conditions are unpredictable, or overlanding into genuinely remote terrain — 4x4 stops being a luxury and becomes a safety decision.",
      },
      {
        type: "h3",
        heading: "Don't Let Marketing Make This Decision",
        text: "The current market trend is pushing buyers toward off-road specs because it looks great and it sells. Don't let marketing make this decision for you. Be clear about where you actually drive, and buy accordingly. Our full breakdown: [is 4x4 actually worth it?](/blog/4x4-van-is-it-worth-it)",
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
        text: "Ask specifically about battery capacity in usable amp hours, solar input wattage, shore power charging capability, and inverter size. Lithium batteries are now the standard for serious builds — they're lighter, they charge faster, and they deliver more usable capacity than AGM. The complete sizing guide: [off-grid power systems for Class B vans](/blog/off-grid-power-systems-class-b).",
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
        text: "A Class B van is one of the best investments you can make in how you experience the world. It's also a decision that rewards research and punishes impulse. Answer these seven questions honestly before you start shopping and you'll enter the market with clarity. You'll know what you need, what you're willing to pay for, and what questions to ask before you sign anything. That puts you miles ahead of most buyers. The right van is out there. Take the time to find it. When you are ready, [take the match quiz](/find-my-van) or [compare every current model side by side](/compare).",
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
              "Custom builders like Outside Van or Storyteller Overland offer high personalization and often superior craftsmanship, but with 12-18 month lead times and limited service networks. RV manufacturers like Winnebago, Airstream, and Thor offer established dealer networks, standardized builds, and warranty infrastructure. Major manufacturers now offer factory all-wheel drive and off-road packages that used to require a boutique builder.",
          },
          {
            question: "Is 4x4 worth the cost on a Class B campervan?",
            answer:
              "4x4 adds $10,000 to $25,000 or more and increases weight and mechanical complexity. If you camp at developed campgrounds and drive graded roads, you don't need it. If you chase dispersed camping on unmaintained forest roads or overland into remote terrain, 4x4 becomes a safety decision. Don't let marketing make this choice — be honest about where you actually drive.",
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
      "remote-vans-review",
    ],
    blocks: [
      {
        type: "h2",
        heading: "Which chassis should you buy?",
        text: "Buy a Sprinter if off-road capability matters above all else; the [Coachmen Galleria](/models/coachmen-galleria) is the luxury touring coach on that chassis, all hardwood finish and R-15 insulation on the long 170-inch wheelbase, and the [Grech Terreno](/models/grech-terreno) is the luxury flagship, hand-built on the 3500XD with everything standard at a published $290,400, while the [Airstream Interstate 24GLX](/models/airstream-interstate-24glx) is the luxury tourer on the extended chassis, the longest van in the pool, seating seven and sleeping two. Buy a Transit if you want the most interior height, the most builder options, and a lower base cost. Buy a ProMaster if budget is tight and you'll stay on pavement; the [Winnebago Travato](/models/winnebago-travato) is the factory benchmark on that chassis, and the [Winnebago Solis](/models/winnebago-solis) is its family-first sibling, built around sleeping four, while Thor's [Sequence](/models/thor-sequence) and its sister line, the [Tellaro](/models/thor-tellaro), are the value plays on the same chassis, the Tellaro carrying the lowest published starting price of the group, and the [Coachmen Nova](/models/coachmen-nova) is the cold-climate pick, with the best insulation fitted to any ProMaster. Now for the details.",
      },
      {
        type: "h2",
        heading: "How do the interior dimensions compare?",
        text: "This is where the Transit wins decisively. The high-roof Transit delivers 81.5\" (6'10\") of interior standing height — a full 4 inches taller than the high-roof Sprinter, which comes in at 76.7\" (6'4\"). Both are livable, but that gap is noticeable when you're standing at the stove or changing clothes. The ProMaster is the widest of the three (approximately 60\" between wheel wells vs. 48\" for the Sprinter), which makes it excellent for crosswise sleeping arrangements. The manufacturers publish the full specifications: [Mercedes-Benz Sprinter](https://en.wikipedia.org/wiki/Mercedes-Benz_Sprinter), [Ford Transit](https://en.wikipedia.org/wiki/Ford_Transit), and [Ram ProMaster](https://en.wikipedia.org/wiki/Ram_ProMaster).",
      },
      {
        type: "h2",
        heading: "What about drivetrain and off-road capability?",
      },
      {
        type: "ul",
        items: [
          "Sprinter: Gas or diesel (US market). Current models use an on-demand AWD system; the older factory 4x4 with a two-speed transfer case ended with the previous generation. Best ground clearance stock.",
          "Transit: Gas only (US market). AWD option with no low range. Good in slippery conditions, limited on technical terrain.",
          "ProMaster: Gas only. Front-wheel drive exclusively — no AWD or 4x4 available, ever.",
        ],
      },
      {
        type: "h2",
        heading: "Which is most reliable, and cheapest to own?",
        text: "The ProMaster has the simplest mechanicals and lowest service costs. The Transit is a close second — extensive dealer network, cheaper parts, and straightforward maintenance. The Sprinter is the most capable but the most expensive to maintain: diesel service at a Mercedes dealer runs $800–$1,500 for routine work, and major repairs can be significant. That said, well-maintained Sprinters regularly hit 300,000+ miles.",
      },
      {
        type: "h2",
        heading: "Which chassis has the best builder ecosystem?",
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
              "Sprinter-based conversions from reputable builders hold value best, particularly with the AWD or 4x4 option. The Sprinter brand carries a premium in the used market. Storyteller Overland also holds value well due to brand demand. ProMaster builds generally depreciate fastest.",
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
      "The 4x4 option on a Sprinter-based Class B typically adds $10,000–$25,000 to the purchase price and increases your maintenance complexity. It's the right choice for some buyers and completely unnecessary for others. Here's how to decide honestly.",
    relatedSlugs: [
      "sprinter-vs-transit-vs-promaster",
      "storyteller-overland-mode-suspension",
      "class-b-van-buying-guide",
    ],
    blocks: [
      {
        type: "h2",
        heading: "What does 4x4 actually give you?",
        text: "True 4x4 on a Sprinter means a two-speed transfer case with high range (for highway use and mild off-road) and low range (for technical, slow-speed terrain where torque multiplication matters). This is meaningfully different from AWD, which lacks the low range and is primarily useful for traction in slippery conditions rather than technical off-road.",
      },
      {
        type: "callout",
        text: "Key distinction: Sprinter 4x4 = true 4WD with high and low range. Storyteller/Transit AWD = all-wheel drive without low range. These are different systems for different use cases.",
      },
      {
        type: "callout",
        text: "Buying new today? Since the 2023 model year, Mercedes sells this capability as an on-demand AWD system rather than the low-range 4x4 described in this article. Current adventure models like the [Winnebago Revel](/models/winnebago-revel) run that AWD system. The analysis below covers the 4x4 generation, and what AWD does and does not replace.",
      },
      {
        type: "h2",
        heading: "Who actually needs 4x4?",
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
        heading: "Who probably doesn't need it?",
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
        heading: "Does the cost-benefit math work?",
        text: "At the $10,000–$25,000 the option typically adds, a van 4x4 makes financial sense if you'll actually use it OR if you're buying in a market where 4x4 resale commands a premium. If you spend 90% of your time on paved or graded roads and buy a Sprinter 4x4 for 'just in case' scenarios you could navigate with traction boards and a shovel, you've overpaid.",
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
      "The Winnebago Boldt is discontinued. Winnebago built it from 2020 to 2023 on the Mercedes Sprinter, and it earned a loyal following: consistent factory build quality, real warranty support, and an available all-wheel-drive chassis. This review is kept and updated as a used-buying guide. It is not perfect, and used examples are not cheap. Here's everything you need to know.",
    relatedSlugs: [
      "class-b-van-buying-guide",
      "4x4-van-is-it-worth-it",
      "sprinter-vs-transit-vs-promaster",
    ],
    blocks: [
      {
        type: "callout",
        text: "Discontinued: Winnebago no longer produces the Boldt, and it does not appear in [Winnebago's current Class B lineup](https://www.winnebago.com). Everything below describes the 2020-2023 models as built. Shopping new instead? Start with the models in our [current model comparison](/compare).",
      },
      {
        type: "h2",
        heading: "What did the Boldt get right?",
      },
      {
        type: "ul",
        items: [
          "Factory consistency: Unlike custom builds, every Boldt of the same model year is built to the same spec — no builder variability",
          "Warranty: 1-year Winnebago warranty plus underlying Mercedes chassis warranty — real coverage, real dealer network",
          "Storage: Boldt's designers maximized every cubic inch — the overhead and under-bed storage is genuinely impressive for a 144\" wheelbase",
          "Power system: 200W solar + 100Ah lithium standard. Adequate for most users without upgrades",
          "All-wheel drive: Available on the Sprinter chassis and genuinely capable — not a marketing add-on (early model years offered the factory 4x4 system)",
          "Resale: Boldt holds its value extremely well, especially AWD and 4x4 configurations",
        ],
      },
      {
        type: "h2",
        heading: "Where does it fall short?",
      },
      {
        type: "ul",
        items: [
          "Limited customization: You get what Winnebago offers. No custom bed configurations, no alternative floor plans for a given model year",
          "Water capacity: The standard fresh water tank (26 gallons) runs out fast for two people boondocking — most owners add tank capacity",
          "Solar: 200W is starter-tier for off-grid camping. A real off-grid setup needs 400–600W; plan to upgrade",
          "Availability: Production ended in 2023, so you are shopping used inventory and the occasional dealer leftover only",
          "Price for size: At $165K+ when new for a 144\" Sprinter, you paid a quality premium — a comparable custom build might offer more for less",
        ],
      },
      {
        type: "h2",
        heading: "How does the drivetrain perform in the field?",
        text: "The Boldt rides on the Mercedes Sprinter drivetrain: a factory 4x4 system with low range in the early model years, replaced by the Mercedes on-demand AWD in the final years. In real-world use both perform well: stable on rough terrain, good ground clearance stock, and none of the compromises of an aftermarket conversion. The driven Boldt is genuinely capable, not a watered-down version of van 4x4.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Is the Winnebago Boldt still in production?",
            answer:
              "No. Winnebago discontinued the Boldt after the 2023 model year; it does not appear in their current Class B lineup. Used examples remain widely available, which is why this review is maintained as a used-buying guide.",
          },
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
              "Owner reports put the 2WD Boldt at approximately 20–23 MPG on the highway when it was new. The 4x4 model is slightly lower at 18–21 MPG. Both figures are strong for a self-contained campervan of this size.",
          },
        ],
      },
    ],
  },

  "storyteller-overland-mode-suspension": {
    slug: "storyteller-overland-mode-suspension",
    intro:
      "Storyteller Overland's MODE suspension is one of the most-discussed features in the Class B market, and one of the most confused, because the MODE changed platforms. This article covers the original system: a proprietary lift and suspension package on Storyteller's earlier Transit-based vans. The [current MODE](/models/storyteller-overland-mode) is a different vehicle, built on the Sprinter AWD. Both generations are explained below.",
    relatedSlugs: [
      "4x4-van-is-it-worth-it",
      "sprinter-vs-transit-vs-promaster",
      "class-b-van-buying-guide",
    ],
    blocks: [
      {
        type: "h2",
        heading: "What Is the MODE Suspension?",
        text: "MODE (Modular Off-road Drivetrain Enhancements) is Storyteller's proprietary suspension package applied to the Ford Transit AWD platform. It includes a leveling lift of approximately 1.5\" over stock, upgraded shock absorbers, and in some configurations, a front skid plate and all-terrain tires. The result is a Transit that sits noticeably higher than stock and handles rough terrain with more confidence. That describes the Transit generation. [The current MODE](https://storytelleroverland.com/pages/2026-classic-mode-og) rides on the Sprinter 2500 AWD at stock ride height, with 10.5 inches of ground clearance and the advanced suspension reserved for higher trims.",
      },
      {
        type: "h2",
        heading: "What does it actually change?",
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
        text: "On the Transit generation, the MODE suspension makes the Transit a better adventure van. It does not make it a 4x4. For Forest Service road access, beach driving, or technical two-track, a Sprinter 4x4 still has a meaningful capability advantage.",
      },
      {
        type: "h2",
        heading: "How does it perform in the real world?",
        text: "Storyteller owners consistently report that the MODE suspension makes a genuine difference on rough-but-passable terrain: washboard dirt roads, packed gravel with loose sections, rocky two-tracks rated for high-clearance vehicles. The all-terrain tires add traction in loose conditions. For this use case — adventurous but not technical — the MODE system delivers.",
      },
      {
        type: "h2",
        heading: "MODE or Sprinter 4x4: which is the honest pick?",
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
            question: "Is the current Storyteller MODE still built on the Ford Transit?",
            answer:
              "No. Earlier MODE vans were Transit-based, which is the generation this article's suspension details describe. The current MODE is built on the Mercedes Sprinter 2500 with all-wheel drive. See [the 2026 MODE page at Storyteller Overland](https://storytelleroverland.com/pages/2026-classic-mode-og) for the current specification.",
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
        heading: "Lithium or AGM: which should you choose?",
        text: "For most Class B buyers today, lithium (LiFePO4) is the right choice. The price premium has narrowed significantly, and the advantages — deeper usable capacity, longer cycle life, lighter weight, and faster charging — make lithium the better long-term investment for anyone camping more than a few nights at a time.",
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
        heading: "How much battery do you actually need?",
        text: "Sizing your battery bank requires knowing your daily consumption. Run an energy audit: add up watt-hours for your refrigerator (biggest draw), lighting, phone/laptop charging, water pump, fan/ventilation, and any heating system. A couple living in a van full-time typically needs 200–300Ah of lithium capacity as a baseline.",
      },
      {
        type: "h2",
        heading: "How much solar is enough?",
        text: "The standard 200W panel included with many factory builds is a reasonable starting point for weekend use in sunny regions. For full-time boondocking, most experienced van lifers recommend 400–600W of roof-mounted panels. At higher latitudes or in overcast climates, err toward the higher end of that range.",
      },
      {
        type: "h2",
        heading: "What are your charging options?",
      },
      {
        type: "ul",
        items: [
          "Solar: Primary source for most boondocking setups — silent, free fuel, reliable",
          "DC-DC charger (alternator charging): Charges batteries while driving. Essential for multi-day driving stretches without solar. Makers like [Victron Energy](https://www.victronenergy.com) publish the sizing guides most builders follow",
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
              "Quality LiFePO4 batteries ([Battle Born](https://battlebornbatteries.com), Renogy, Victron) typically last 10+ years with 2,000–5,000 full cycles. At one full cycle per day, that's 5–13 years of life — significantly better than the 1–3 years you'd get from a comparable AGM bank under the same use pattern.",
          },
        ],
      },
    ],
  },
  "remote-vans-review": {
    slug: "remote-vans-review",
    intro:
      "Remote Vans is a Cincinnati builder with a focused pitch: take the Mercedes Sprinter all-wheel drive, fit one of the largest battery systems ever put in a Class B, add real off-road hardware and a Starlink dish, and sell it to people who work from the road. The founders' backgrounds, a British Army logistics officer who built overland vehicles in Africa and a tech founder who worked his way around the world without flying, say the pitch is personal. So we checked the substance: the build, the power system, the off-road kit, the prices, and the warranty agreement. The substance is real. So are two catches.",
    relatedSlugs: [
      "off-grid-power-systems-class-b",
      "4x4-van-is-it-worth-it",
      "class-b-van-buying-guide",
    ],
    blocks: [
        {
          type: "callout",
          text: "The short version: if you earn your living from a laptop and want to do it from a forest road, Remote Vans is the most work-ready factory Class B on the market right now. Three of its four models carry a 16.8 kWh battery and a fitted Starlink dish as standard. The trade-offs are equally clear: there is no fixed bathroom in any model, and the conversion warranty is one year. Both are covered in full below.",
        },
        {
          type: "h2",
          heading: "What is Remote Vans?",
          text: "Remote Vans is a Class B motorhome builder headquartered in Cincinnati, Ohio, founded in 2021. Every model is built on the same platform, the Mercedes-Benz Sprinter 144-inch wheelbase in all-wheel drive, and the company is explicit that it does not build on the longer 170-inch Sprinter or the Ford Transit. The vans are RVIA-accredited and sold through a dealer network that includes Johnson RV, Campers Inn, Vogt RV, Happy Daze, Van City RV, and, for North Idaho buyers, Yozzy Overland in Post Falls.",
        },
        {
          type: "p",
          text: "The brand runs on a line that tells you exactly who it is for: work, play, travel, anywhere. Pricing is published on [the manufacturer's own site](https://remotevans.com/2026-remote-vans-series/) under what it calls see-through pricing, a direct price per model with no negotiating. Owners are organized into a community the company calls the Rolling Nomads. Full background is on [Remote Vans' founders and team page](https://remotevans.com/remote-vans-founders-and-team/).",
        },
        {
          type: "h2",
          heading: "Who founded Remote Vans?",
          text: "The two founders bring unusually relevant pasts. Daryn Hillhouse, the co-founder and CEO, served in the British Army in operations and logistics, with tours in Bosnia, Kosovo and Afghanistan, then managed defence contracts and bids worth more than a billion dollars. After the Army he founded the Put Foot Rally, described by the company as the largest road rally in Africa, and his adventure-travel outfit there built vehicles the company now calls early prototypes of Remote Vans.",
        },
        {
          type: "p",
          text: "Tony Alexander, the other co-founder, is the remote-work half of the idea. He founded or co-founded several technology companies, including one of the world's leading online travel registries, ran a major US startup accelerator as its executive director, and once circumnavigated the globe without flying while running his businesses from the road. The founding story the company tells is disarmingly small: during COVID lockdown, Alexander pitched Hillhouse the idea of a technology-packed Sprinter he could work from anywhere, over a bowl of pasta in Cincinnati.",
        },
        {
          type: "p",
          text: "The first vans, roughly twenty of them, were built by a team of less than a handful in a disused brewery, learning as they went. In 2023 the company moved into its current facility, gained RVIA certification, and opened dealer distribution. The Friday, Oasis and Aegis series debuted in early 2024, with the T-45 added later as the entry model. Andrew Cooley, fourth-generation RV family and a former dealership owner, serves as president.",
        },
        {
          type: "h2",
          heading: "How are Remote Vans built?",
          text: "All design and build happens in-house at a 30,000 square foot facility in Cincinnati's St. Bernard neighborhood: carpentry, metalwork, upholstery, engineering and assembly under one roof. The company says every van moves through several build, testing and quality control phases on its production line. The positioning is craft rather than automation, cabinetry, disciplined wiring, and fit and finish learned by hand, and it is worth noting the company makes no robotics claims anywhere in its material.",
        },
        {
          type: "p",
          text: "Four proprietary systems appear across the range. MoPoWa houses the power and water systems in an aluminum enclosure with service panels in the garage. The Vanhalla seat swings 90 degrees and converts to a second bed. The Cyber Shower is a stowable shower system, covered below, and Pennyworth is the van's control system, run from touchscreens up to 11 inches. Named components include lightweight aluminum cabinetry, PEX-A plumbing with brass fittings throughout, an insulation stack of Kilmat sound deadening, Solarcore foam and Havelock wool, Lithionics batteries, Nomadic Cooling air conditioning, Rixen hydronic heat and Van Compass suspension parts.",
        },
        {
          type: "p",
          text: "The vans are fixed-spec rather than custom commissions, with personalization limited to branding kits: exterior and interior accent colors, cabinet inlays and drawer colors. That is how the company can describe its vans as ready in under 30 days, a sharp contrast with the 6 to 18 months its own [FAQ](https://remotevans.com/faq/) quotes for custom conversions generally.",
        },
        {
          type: "h2",
          heading: "How much battery does a Remote Vans camper have?",
          text: "This is the headline, and it earns it. The MoPoWa system is built around a 51-volt Lithionics NEVERDIE battery. The Friday, Oasis and Aegis carry 16.8 kWh of it, which the manufacturer describes as 100 percent usable with a built-in reserve. The entry T-45 carries half that, 8.4 kWh. To put the big bank in Class B terms: most factory vans in this market run battery banks a fraction of that size, sized for a night of lights and furnace. Sixteen point eight kilowatt-hours is sized for air conditioning, for days. Our [guide to off-grid power systems](/blog/off-grid-power-systems-class-b) explains how to compare bank sizes across brands, and note that Remote Vans publishes capacity in kilowatt-hours only; it does not publish an amp-hour figure, so we do not invent one.",
        },
        {
          type: "image",
          src: "/images/remote-vans-lineup.png",
          alt: "Chart of the 2026 Remote Vans lineup showing manufacturer direct prices from $174,900 to $247,900 and battery capacity of 8.4 kWh on the T-45 and 16.8 kWh on the Friday, Oasis and Aegis",
          caption: "The 2026 Remote Vans lineup. Prices are the manufacturer's published direct prices (October 2026). The Friday's window-sticker MSRP is higher, explained in the pricing section below.",
        },
        {
          type: "p",
          text: "The rest of the system is specified like it was designed by people who have actually run out of power. A 3,000-watt inverter and charger with a 5,500-watt boost mode is claimed to run the air conditioner, microwave and cooktop simultaneously. Charging comes from three sources: a 30-amp shore inlet, roof solar, and the component that matters most in practice, a dedicated 48-volt, 100-amp generator alternator that rapidly refills the bank while you drive. Be clear-eyed about the solar: a single 200-watt panel is a maintainer, not a refiller, for a bank this size. The alternator does the heavy lifting, and the company claims multiple nights, three or more, of off-grid air conditioning on a single charge. Full system specs are on [Remote Vans' comparison page](https://remotevans.com/compare-adventure-vans/).",
        },
        {
          type: "h2",
          heading: "How capable is a Remote Vans camper off-road?",
          text: "Every model starts from the right foundation: the Sprinter's all-wheel drive, BFGoodrich KO2 or KO3 all-terrain tires, and uprated rear suspension. From there the hardware climbs a clear ladder by model. The Friday gets Van Compass heavy-duty Opti-Leaf rear springs. The Oasis and Aegis add Van Compass 4.3 adjustable piggyback shocks front and rear, Baja support brackets and upgraded bump stops, plus an ARB twin onboard air compressor, a front bumper and an armor kit. The Aegis alone adds Van Compass Inverted Rally Struts and skid plates under the engine, transmission and rear differential.",
        },
        {
          type: "p",
          text: "Two honesty notes, because this site publishes what manufacturers publish and flags what they do not. Remote Vans does not publish a suspension lift height in inches for any model, and publishes no approach or departure angles, so we do not quote any. The clearance figure it does publish, on the manufacturer's own Oasis window sticker, is 9.5 inches at the rear differential. That is a real, documented number, and it puts these vans in the same working conversation as the established off-road benchmarks in our [compare tool](/compare), the [Winnebago Revel](/models/winnebago-revel) and the [Storyteller MODE](/models/storyteller-overland-mode), both of which take a different route to a similar destination. Whether any van needs this much hardware is a question we take apart in [Is 4x4 worth it?](/blog/4x4-van-is-it-worth-it)",
        },
        {
          type: "h2",
          heading: "What does the Remote Vans lineup cost?",
          text: "Four models, all Sprinter 144 all-wheel drive, all with the same queen bed, the same 30 gallons of fresh water and 24 gallons of heated gray capacity, and the same bathroom arrangement. The 2026 manufacturer direct prices are: T-45 at $174,900, Friday at $194,900, Oasis at $224,900, and Aegis at $247,900. What the steps buy you is mostly battery, air conditioning size, Starlink hardware and off-road kit, detailed in our [comparison of all four](https://remotevans.com/compare-adventure-vans/) and in the Friday and Aegis entries in our [compare tool](/compare). The Friday, the middle step and the model most buyers cross-shop against the Sprinter establishment, gets its own full breakdown in our [Friday Series model guide](/models/remote-vans-friday), and the flagship gets the same treatment in our [Aegis Series model guide](/models/remote-vans-aegis).",
        },
        {
          type: "p",
          text: "One pricing wrinkle deserves plain language, because Remote Vans publishes two numbers for the Friday. Its window sticker prints an MSRP of $272,900 alongside see-through launch pricing of $194,900. The direct price is the headline figure on the manufacturer's site and the one we publish; dealers can and do sell below it, with one dealer advertising a 2026 Friday at $175,610 after a factory rebate and dealer discount. Treat the direct price as the ceiling, not the floor. No 2027 models have been published yet.",
        },
        {
          type: "h2",
          heading: "Can you actually work remotely from a Remote Vans camper?",
          text: "This is the use case the company was founded on, and it shows in the spec sheet rather than the brochure copy. Starlink fitment climbs with the range: the T-45 is compatible but not fitted, the Friday carries a Starlink Mini with a dashboard mount, the Oasis a Standard dish, and the Aegis the High-Performance dish. In every case the account is yours; the company fits the hardware and dealers walk buyers through activation at handover.",
        },
        {
          type: "p",
          text: "The [Aegis](/models/remote-vans-aegis) goes furthest. Its manufacturer's home office section describes multiple workstation setups: both cab seats swivel, L-track on the walls and overhead shelf mounts a second screen, and one side of the bed lowers to create a standing desk. Across the range there is a Lagun-mounted bamboo table, a drop-down bamboo table, five 110-volt outlets, three 12-volt ports and up to six USB-C sockets within reach. Add the power math, a 16.8 kWh bank, an inverter that runs the air conditioner and your gear together, and an alternator that refills the bank on the drive to the next spot, and the full remote workday the company promises is genuinely supported by the hardware. Run your own priorities through [the match quiz](/find-my-van) and the Friday and Aegis are in the pool.",
        },
        {
          type: "h2",
          heading: "What warranty does Remote Vans offer?",
          text: "Read the agreement, not the slogan. The company's material repeatedly describes its warranty as one of the most generous available. The actual published agreement, effective June 1, 2025 and reproduced on [Remote Vans' warranty page](https://remotevans.com/warranty-agreement/), is a materials and workmanship warranty of one year or 20,000 miles, whichever comes first, for the original owner only, with repairs performed by Remote Vans or an authorized provider.",
        },
        {
          type: "p",
          text: "The exclusion that matters most: components and equipment not installed or supplied by Remote Vans are not covered by that warranty, and the agreement names electrical systems and appliances, heaters, refrigerators, plumbing fixtures, fans, air conditioners, light fixtures and windows. Those carry their own component manufacturers' warranties instead, including a genuinely strong 5-year, 2,000-cycle warranty on the Lithionics batteries. The Mercedes chassis carries its own coverage, published by Remote Vans as a 3-year, 36,000-mile vehicle warranty and a 5-year, 100,000-mile powertrain warranty. None of this makes the vans a bad buy. It makes the warranty average for the industry rather than generous, and a buyer should walk in knowing the difference.",
        },
        {
          type: "h2",
          heading: "What are the catches with Remote Vans?",
          text: "The bathroom is the big one, and it is a design choice, not an oversight. No Remote Vans model has a fixed wet bath or a black-water tank. Instead you get the Cyber Shower, a stowable indoor shower that sets up in under 30 seconds with a tray, curtain and quick-connect head, and a portable Thetford cassette toilet that stores in the shower box. On the Friday, Oasis and Aegis the shower can recirculate, which the manufacturer says stretches to 10-plus minute showers on under 3.5 gallons; that function is not available on the T-45. Plenty of owners prefer this arrangement for the space it frees up. Plenty of buyers will not consider a $200,000 van without an enclosed bathroom. Know which one you are before you fall for the battery.",
        },
        {
          type: "ul",
          items: [
            "Sleeps 4 comes with an asterisk: the queen bed sleeps two adults, and the second bed, the Vanhalla swing seat, is sized for two smaller children, or one adult on the Aegis combined with a swivel seat.",
            "The 200-watt solar panel cannot meaningfully refill a 16.8 kWh bank. Budget your power around driving and shore power, with solar as a top-up.",
            "It is a young company, founded in 2021, with a dealer network in the dozens rather than the hundreds. Service access on the road will not match Winnebago's, and the warranty is one year. That is the honest price of the spec sheet.",
          ],
        },
        {
          type: "faq-group",
          faqs: [
            {
              question: "Who founded Remote Vans?",
              answer: "Daryn Hillhouse and Tony Alexander, in Cincinnati in 2021. Hillhouse is a British Army operations and logistics veteran who later founded Africa's Put Foot Rally and built prototype overland vehicles. Alexander is a serial technology founder who ran a major US startup accelerator and once circumnavigated the globe without flying while working remotely. Their backgrounds are detailed on [Remote Vans' founders page](https://remotevans.com/remote-vans-founders-and-team/).",
            },
            {
              question: "Where are Remote Vans built?",
              answer: "Entirely in-house at the company's 30,000 square foot facility in Cincinnati, Ohio, including carpentry, metalwork, upholstery, engineering and assembly. The first vans were built in a disused Cincinnati brewery; the company moved to its current facility and gained RVIA certification in 2023.",
            },
            {
              question: "How much does a Remote Vans camper cost?",
              answer: "For 2026, the manufacturer's published direct prices are $174,900 for the T-45, $194,900 for the Friday, $224,900 for the Oasis and $247,900 for the Aegis. The Friday's window sticker also prints a $272,900 MSRP; the direct price is the manufacturer's headline figure, and dealers sometimes sell below it.",
            },
            {
              question: "Does a Remote Vans camper have a bathroom?",
              answer: "Not a fixed one. Every model uses the Cyber Shower, a stowable indoor shower system (recirculating on the Friday, Oasis and Aegis, but not the T-45), plus a portable Thetford cassette toilet stored in the shower box. There is no enclosed wet bath and no black-water tank in any model.",
            },
            {
              question: "How long is the Remote Vans warranty?",
              answer: "The conversion warranty in the published agreement is 1 year or 20,000 miles for the original owner, covering materials and workmanship. Components Remote Vans did not supply, including the electrical system, appliances and air conditioner, carry their own manufacturers' warranties; the Lithionics batteries are covered for 5 years or 2,000 cycles. The full agreement is on [the manufacturer's warranty page](https://remotevans.com/warranty-agreement/).",
            },
            {
              question: "Where can I see a Remote Vans camper in North Idaho?",
              answer: "Yozzy Overland in Post Falls is a Remote Vans dealer named on the manufacturer's site, about as close to home as this site gets. The full dealer list is on [Remote Vans' site](https://remotevans.com/faq/), and factory pickup at the Cincinnati headquarters is also offered.",
            },
          ],
        },
        {
          type: "p",
          text: "Remote Vans will not be the right answer for everyone, and this site exists to sort that out honestly rather than sell you a van. If the bathroom arrangement is a dealbreaker, the quiz will steer you to enclosed-bath vans automatically, because we treat it as a hard requirement when you say it is. If you work from the road and your current van's battery is the thing that ends your workday, start with [the match quiz](/find-my-van), then put the Friday and Aegis side by side with the rest of the market in [the compare tool](/compare).",
        },
    ],
  },
  "sportsmobile-review": {
    slug: "sportsmobile-review",
    intro:
      "The white Sprinter in this site's hero photo is a Sportsmobile, the author's own 2013 Sprinter 170 EXT, and it is the reason this review can say things the others cannot. Sportsmobile has converted vans one client at a time since 1961, longer than the Class B category has had a name. It sells no production model off any lot, publishes its conversion pricing anyway, and sits squarely between the factory vans and the six-figure custom shops. Here is the company, the process, the real numbers, the warranty, and a durability report from thirteen years of ownership.",
    relatedSlugs: [
      "class-b-van-buying-guide",
      "remote-vans-review",
      "storyteller-overland-mode-suspension",
    ],
    blocks: [
        {
          type: "callout",
          text: "From the author's driveway: the white Sprinter in this site's homepage hero photo is my own Sportsmobile, a 2013 Sprinter 170 EXT. Thirteen model years on, the materials have held up incredibly well and the van has given me zero issues. That is one owner's experience, stated as such. Everything else in this review is checked against Sportsmobile's own published material, the way every review on this site works.",
        },
        {
          type: "image",
          src: "/images/sportsmobile-interior-cab.jpg",
          alt: "Inside the author's 2013 Sportsmobile looking toward the cab: wood cabinetry, a wall-mounted TV, microwave and refrigerator, and the galley counter",
          caption: "The author's 2013 Sportsmobile today, looking toward the cab. The cabinetry, upholstery and systems are the ones Sportsmobile fitted thirteen years ago. Photo: the author, within the last year.",
        },
        {
          type: "h2",
          heading: "What is Sportsmobile?",
          text: "Sportsmobile is the oldest name in American van conversion: a factory-direct converter that has been turning full-size vans into Class B campers since 1961, and still builds every one of them per client. There is no Sportsmobile dealer network and no model-year lineup in the factory sense. You pick a chassis, pick or design a floor plan, choose your roof and options, and they build your van at one of three locations: Huntington, Indiana; Austin, Texas; and Gold Canyon, Arizona. The company states it has completed more than 10,000 conversions.",
        },
        {
          type: "p",
          text: "That model puts Sportsmobile in a gap in the market this site thinks about a lot. Factory vans from Winnebago or Thor are production products: fixed plans, dealer lots, a sticker price. High-end custom shops build rolling commissions at prices that can pass half a million dollars, on timelines measured in years. Sportsmobile sits between them, a tweener: custom enough that the plan is yours, established enough that the converter has outlived most of its customers' vans. Whether that middle position is the sweet spot or a compromise depends on how you buy, which is what the rest of this review is for. The company's own overview is at [sportsmobile.com](https://sportsmobile.com/).",
        },
        {
          type: "h2",
          heading: "How long has Sportsmobile been building camper vans?",
          text: "Since 1961, when Charles Borskey founded the company in El Paso, Texas, with his father Curtis, originally under the name Sportswagon. The first conversions were Volkswagen and Ford vans. Volkswagen of America soon contracted Borskey to install his kits in VW vans, and when that contract ended in 1967, Westfalia adopted several patented features of the Sportsmobile kit, which is about as strong an endorsement as the industry gives.",
        },
        {
          type: "p",
          text: "The milestones explain the company's DNA. In the 1970s Sportsmobile built the first pop-top that raised and lowered from inside the van, the direct ancestor of today's Penthouse top. It offered 4x4 conversions on Ford Econolines from 1971. The Huntington plant opened in 1976 and very nearly closed in 1980; a foreman named Jim Friermood, later a company vice president, persuaded Borskey to keep it open. Austin followed in 1984. Charles Borskey ran the company into his 89th year and died at 90. One correction to older sources you may find: the Fresno plant you will see in older articles was Sportsmobile West, a licensee, and it ended its agreement in 2020 to become the independent company Field Van. The full timeline is on [Wikipedia's Sportsmobile entry](https://en.wikipedia.org/wiki/Sportsmobile).",
        },
        {
          type: "h2",
          heading: "What does Sportsmobile build today?",
          text: "Four chassis families, designated by body code: RB for regular body, EB for extended body, LB for long body. The [Sprinter line](https://sportsmobile.com/models/mercedes-sprinter/) covers the 144-inch RB and the 170-inch EB and LB, built on the factory all-wheel drive and diesel. Ford Transit comes in three lengths with factory AWD and a new Trail Ready off-road package. Ram ProMaster covers the front-wheel-drive value end, and the Chevy Express serves buyers who want a frame chassis and a 4x4 build. The author's van, a 2013 Sprinter 170 EXT, is an EB 170, a platform Sportsmobile still converts today.",
        },
        {
          type: "p",
          text: "Inside, you start from a library of numbered standard plans, codes like EB-110S that combine body and layout, or go fully custom with a DYO, design-your-own, plan drawn up with their designers. Every conversion builds on a standard equipment package that includes an extreme weather and sound insulation package, and the options catalog runs to hundreds of items. Electrical is modern where it counts: a 200 amp-hour AGM bank is standard, and the company offers lithium systems up to 1,600 amp-hours, 24 and 48 volt systems, and roof solar up to about 500 watts.",
        },
        {
          type: "image",
          src: "/images/sportsmobile-interior-door.jpg",
          alt: "The author's 2013 Sportsmobile from the sliding door: galley and sink on the left, a bench seat on the right, and the rear bed at the back of the 170 EXT",
          caption: "The EB 170 layout in the author's van: galley at the door, lounge bench opposite, bed across the rear. Photo: the author.",
        },
        {
          type: "p",
          text: "The signature product deserves its own paragraph. The [Penthouse Pop Top](https://sportsmobile.com/sportsmobile-penthouse-pop-top-a-legacy-of-freedom-space-and-innovation/) is a paint-matched fiberglass top with convertible car-top vinyl sides and a dual U-tube lift, manual or powered, with an optional bed platform upstairs and a roof rack rated to 200 pounds. You do not have to buy a conversion to get one: Sportsmobile installs the top on its own, by appointment, on your existing van. That top-only business is a large part of how the company stays in its owners' lives for decades.",
        },
        {
          type: "h2",
          heading: "What happened to the Sportsmobile Classic 4x4?",
          text: "It is the question longtime followers ask first, so here is the honest answer. When Ford ended the full E-Series van after 2014, Sportsmobile refused to kill its flagship 4x4 camper. Instead it engineered its own steel-reinforced fiberglass camper shell for the E-Series cutaway chassis, with its own serious 4x4 system underneath, and launched it as the Classic at Overland Expo in 2015. [MotorTrend's review](https://www.motortrend.com/reviews/1507-2015-sportsmobile-ford-e-series-classic) of that van is worth reading if you want to understand what this company is capable of when it decides to engineer rather than assemble.",
        },
        {
          type: "p",
          text: "Today, the Classic does not appear in the lineup published on Sportsmobile's site, which covers the Sprinter, Transit, ProMaster and Chevy Express, and the old Classic 4x4 page redirects to the homepage. No announcement of its discontinuation was found, and Ford still builds the E-Series cutaway the Classic sits on. So the accurate statement is: the Classic is absent from the currently published lineup, and whether it can still be special-ordered is something Sportsmobile does not publish. Ask them directly, and know that on the modern vans the 4x4 story is the factories' own AWD systems, not a Sportsmobile-engineered conversion.",
        },
        {
          type: "h2",
          heading: "How does buying a Sportsmobile work?",
          text: "Factory-direct and per client. You work with Sportsmobile's own designers to choose the chassis, the plan and the options. Sportsmobile usually supplies the base van itself, ordering through preferred dealers who know how to spec a van for conversion, with freight and preparation included in the price and any rebates going to you. If you are financing the van and conversion together, the vehicle must be purchased through Sportsmobile. Bringing your own van is possible, and the top-only and modification work assumes it. The company offers RV financing at all three locations, delivers nationwide, does not take trades, and sells pre-owned Sportsmobiles on consignment. The details are in [their FAQ](http://sportsmobile.com/faqs/).",
        },
        {
          type: "p",
          text: "Two refinements to the usual description. First, deposits and build lead times are not published anywhere on the company's site; both are quoted per build, so any timeline a forum gives you is anecdote, not policy. Second, while there is no dealer stock anywhere, Sportsmobile's own site lists a small New Stock inventory of already-built vans at its own lots, alongside the consignment pre-owned listings. The core business is unmistakably build-to-order, but a buyer who cannot wait is not entirely out of luck.",
        },
        {
          type: "h2",
          heading: "What does a Sportsmobile cost?",
          text: "Unusually for a custom converter, Sportsmobile publishes real numbers on its [pricing examples page](http://sportsmobile.com/pricing/pricing-examples/), all plus tax, title and license. Conversion prices for a Sprinter start at $50,000 for a base-level 144 RB two-wheel drive. A well-equipped all-wheel drive conversion runs $77,000 on either the 144 or the 170. Stated conversion ranges are $75,000 to $120,000 for Sprinter and ProMaster, and $80,000 to $125,000 for Transit. The Penthouse top with bed, installed on its own, starts at $13,000.",
        },
        {
          type: "p",
          text: "The worked example on that page is the clearest way to understand the tweener math. A Sprinter EB high-roof diesel AWD: the van itself at $78,400, the EB-110S conversion at $78,500, plus $7,500 of Sportsmobile options, totals $164,400 before tax and title. Pictured complete builds on the same page run $145,000 for a ProMaster, $160,000 for a 144 Sprinter, $180,000 for a Transit and $190,000 for a 170 Sprinter. Set those totals against the factory pool in our [compare tool](/compare) and against the half-million-dollar end of the custom world, and the middle position stops being a metaphor. It is a price band.",
        },
        {
          type: "h2",
          heading: "Where does Sportsmobile sit in the market?",
          text: "Call it the professional middle. Against factory vans, Sportsmobile trades immediacy for authorship: no lot to drive one off today, but the floor plan, the roof and the systems are chosen with a designer rather than accepted from a brochure, and the converter answering your service call is the company that built the van. Against the high-end custom shops, it trades bespoke-everything for a 65-year-old playbook: standard plans refined over thousands of builds, published conversion pricing, and totals that land closer to a Revel than to a rolling commission. Our [buying guide](/blog/class-b-van-buying-guide) argues the first decision is how you will actually use the van. If your answer involves a plan nobody stocks, this is the tier built for you.",
        },
        {
          type: "p",
          text: "It is also worth saying who should not buy one. If you need a fixed bathroom, a fixed price on a window sticker, or a delivery date you can circle this quarter, the production market serves you better, and the [match quiz](/find-my-van) will sort you honestly. Sportsmobile is not in that quiz, deliberately: a per-client build has no single price or spec to rank, and pretending otherwise would break the rule this site runs on. The newest factory take on the same work-from-anywhere idea is covered in our [Remote Vans review](/blog/remote-vans-review).",
        },
        {
          type: "h2",
          heading: "How do Sportsmobiles hold up?",
          text: "Start with the author's evidence, since it is the reason this review exists. My 2013 Sprinter 170 EXT has needed nothing beyond ordinary chassis life in thirteen years: no conversion failures, no leaks, no cabinetry coming apart, and the materials, the top, the cabinets, the systems, still feel put together the way they did at delivery. One van is an anecdote, but it is an anecdote you can check against the company's own construction claims: a fiberglass Penthouse warranted for life against leaks, high-grade and deliberately serviceable components, name-brand appliances that any RV service center can work on, and an insulation package the company markets as four-season.",
        },
        {
          type: "image",
          src: "/images/sportsmobile-interior-rear.jpg",
          alt: "The author's 2013 Sportsmobile through the open rear doors: two facing benches in gray upholstery and warm wood cabinetry in bright sunlight",
          caption: "Through the rear doors: the twin benches and woodwork after thirteen years of use. Photo: the author, within the last year.",
        },
        {
          type: "image",
          src: "/images/sportsmobile-interior-galley.jpg",
          alt: "The galley of the author's 2013 Sportsmobile: stone-pattern countertop and sink, microwave and refrigerator stack, and a tall wood wardrobe cabinet",
          caption: "The galley and wardrobe wall. The tall cabinet is the bathroom and storage core of this floor plan. Photo: the author.",
        },
        {
          type: "image",
          src: "/images/sportsmobile-interior-front.jpg",
          alt: "The front lounge of the author's 2013 Sportsmobile: a gray bench seat facing the swiveling cab seats, with a ceiling fan above",
          caption: "The front lounge, with the cab seats swiveled into the living space. Photo: the author.",
        },
        {
          type: "p",
          text: "The wider record supports the impression, with one honest exception. Sportsmobile says many owners are on their second, third or fourth van from the company, which is the retention pattern you would expect if the product lasted. The BBB profile we could locate, for the former Fresno licensee, shows zero complaints and zero reviews. Google ratings for the current locations run high, roughly 4.3 to 5.0 stars, on small counts of about 9 to 17 reviews each, and RV Insider shows 5.0 from 2 reviews. Calibrate that against the production industry on the same platform: [Thor Motor Coach averages 3.4 stars across 1,225 owner reviews](https://gorvrentals.com/blog/are-thor-motorhomes-any-good), scoring 2.9 for overall quality and 2.6 for factory warranty support, and [Winnebago](https://www.rvinsider.com/Winnebago-RV-Reviews?make=Winnebago), the strongest of the volume brands, averages about 4.2 stars across more than 1,200 reviews. Sportsmobile's 5.0 rests on just 2 reviews, so the samples are not comparable and we will not pretend otherwise. But a converter does not build more than 10,000 vans over 65 years without leaving a complaint trail if the product fails people. The near-absence of one is the evidence. Against that record, exactly one detailed critical review is easy to find: [Wand'rly Magazine's account](https://wandrlymagazine.com/a-sportsmobile-review/) of a 2020 Penthouse installation in Texas, disputing extra charges and follow-up service. Both things belong in a review. The formal record is about as clean as this industry produces, and it is not literally spotless.",
        },
        {
          type: "h2",
          heading: "What warranty does Sportsmobile offer?",
          text: "The conversion is warranted for 3 years or 36,000 miles, stated in [the company FAQ](http://sportsmobile.com/faqs/) and on its Why Sportsmobile page. The Penthouse top carries the same term plus something no factory van in our pool offers: a lifetime warranty against leaks. Appliances and the 4x4 are warranted by their own manufacturers, the chassis by the van maker, and the company states its conversions do not void the chassis warranty. One caution for used-van shoppers and forum readers: older Sportsmobile Texas marketing claimed 50 months and 50,000 miles. That figure no longer appears on the manufacturer's site; the current published term is 3 years and 36,000 miles, and that is the number to plan around.",
        },
        {
          type: "faq-group",
          faqs: [
            {
              question: "Who founded Sportsmobile, and when?",
              answer: "Charles Borskey, with his father Curtis, founded the company in El Paso, Texas in 1961, originally under the name Sportswagon. Charles ran it for roughly six decades, into his 89th year. The company has completed more than 10,000 conversions.",
            },
            {
              question: "Can you buy a Sportsmobile off a dealer's lot?",
              answer: "No. Sportsmobile sells factory-direct from its three locations in Huntington, Indiana; Austin, Texas; and Gold Canyon, Arizona, and builds per client. Its own site does list a small New Stock inventory of completed vans at its own lots, plus pre-owned Sportsmobiles sold on consignment.",
            },
            {
              question: "How much does a Sportsmobile conversion cost?",
              answer: "Published examples on [the manufacturer's pricing page](http://sportsmobile.com/pricing/pricing-examples/) start at a $50,000 base conversion for a Sprinter 144, with well-equipped all-wheel drive conversions at $77,000 and stated conversion ranges of $75,000 to $125,000 depending on platform, all plus tax, title and license and excluding the van itself. A worked complete example, a Sprinter EB diesel AWD, totals $164,400. The Penthouse top alone starts at $13,000 installed.",
            },
            {
              question: "Can Sportsmobile still build the Classic 4x4?",
              answer: "It is not in the lineup currently published on sportsmobile.com, and the company publishes no statement either way about special orders. The Classic was Sportsmobile's own fiberglass camper shell on the Ford E-Series cutaway, built from 2015 after Ford ended the E-Series van. Ask Sportsmobile directly; on current vans, all-wheel drive comes from the chassis factories.",
            },
            {
              question: "What warranty does a Sportsmobile carry?",
              answer: "Three years or 36,000 miles on the conversion, per [the company's FAQ](http://sportsmobile.com/faqs/). The Penthouse top adds a lifetime warranty against leaks. Appliances, the 4x4 system and the chassis are covered by their respective manufacturers.",
            },
            {
              question: "Does Sportsmobile supply the van, or do you bring your own?",
              answer: "Either, with a condition. Sportsmobile usually supplies the base van through preferred dealers, and if you finance the van and conversion together, the vehicle must be purchased through Sportsmobile. Customers can also bring their own van, and standalone work like a Penthouse top installation is offered by appointment.",
            },
          ],
        },
        {
          type: "p",
          text: "Sportsmobile is not the fastest way to buy a camper van, and it is not trying to be. It is the way to buy the exact van you designed, from the company that invented half the category, at a total that sits between the factory sticker and the custom stratosphere. If that is your shape of purchase, start with their [pricing examples](http://sportsmobile.com/pricing/pricing-examples/), then pressure-test the factory alternatives in our [compare tool](/compare) before you commit. The author of this site made his choice in 2013, and the van in the hero photo is still making the case.",
        },
    ],
  },
  "should-you-buy-a-covid-era-used-van": {
    slug: "should-you-buy-a-covid-era-used-van",
    intro: "Everyone says do not buy a COVID RV. The data says the disaster was real but concentrated in trailers, while the van record is supplier-part recalls, a late production peak, and a first owner who already paid for the debugging. Here is the evidence, and the protocol that makes the era almost irrelevant.",
    blocks: [
      { "type": "p", "text": "The short answer: yes, a COVID-era used van can be a smart buy, and for Class B vans specifically, the famous warning about COVID build quality is aimed at the wrong vehicles. The documented quality collapse of 2021 and 2022 is real, but it lives in high-volume towable RVs. The van record looks different: a cluster of recalls caused mostly by supplier parts, no defect-rate penalty anyone can actually measure, and a used market where the first owner has already absorbed both the peak-era price and the debugging. What follows is the evidence, with the receipts, and then the buying protocol that makes the era almost irrelevant." },
      { "type": "h2", "heading": "What counts as a COVID-era build?", "text": "There is no official definition, but the sources converge. A COVID-era RV is one built roughly between June 2020 and December 2022, sold as a 2021 through 2023 model. The first COVID spring shut the plants down; what followed was the largest demand surge the industry has ever seen, met by a workforce that had never been thinner. Owner reporting and the labor data pinpoint the highest-risk window as builds from the second half of 2021 through the first half of 2022, when the shortage bit hardest. You can find any van's actual build month on the manufacturer's label, usually on the driver's door jamb or the entry door frame, and the exact date matters more than the model year on the title." },
      { "type": "h2", "heading": "What actually happened during the COVID RV boom?", "text": "Start with the scale. The [RV Industry Association](https://www.rvia.org) counts 406,070 RVs shipped in 2019. In 2021 the industry shipped 600,240, the biggest year in its history, with a workforce that could not be hired fast enough. Elkhart County, Indiana, where most American RVs are built, saw unemployment sink to 1 percent in late 2021 while average weekly wages jumped 35 percent from early 2020. An IndyStar investigation, later cited by [Hunterbrook's reporting](https://hntrbrk.com) on RV frame defects, quoted a Winnebago employee who went from working on 16 RVs a day to 36 during the pandemic. That reporting is where the nickname was born: COVID trailers. Note the word. Trailers." },
      { "type": "image", "src": "/images/covid-era-shipments.png", "alt": "Bar chart of Class B Type B shipments 2019 to 2023 showing the peak in 2022 at 17,026 units", "caption": "Class B shipments by year (RVIA). The overall RV market peaked in 2021; vans peaked a year later, in far smaller numbers." },
      { "type": "p", "text": "The Class B numbers tell their own story. Van campers went from 4,248 shipments in 2019 to a peak of 17,026 in 2022. That is a surge, but compare it with 544,028 towables shipped in 2021 alone. Vans were a small, late wave, and their peak arrived after the worst of the labor shortage had already begun to ease." },
      { "type": "h2", "heading": "Where does the quality spike actually show up in the data?", "text": "In exactly one place, and it is not vans. An analysis of NHTSA complaints found the spike in complaints containing the word frame concentrated in Grand Design fifth wheels from model years 2020 to 2022, and NHTSA opened a formal investigation, PE24029, into frame flex on those towables, built on Lippert-supplied frames. There is no equivalent investigation, and no complaint spike, for any Class B model. Meanwhile, the towable horror stories from owner forums are specific and grim: wrong adhesives substituted during shortages, tank brackets held by a fraction of their screws, sealing tape omitted, leaks and delamination following. Those are failures of high-speed, piece-rate house construction, which is precisely what a trailer is and a van mostly is not." },
      { "type": "callout", "text": "The honesty box: no public dataset reports defect rates or warranty claim rates by model year, for vans or for RVs generally. Consumer Reports does not cover RV reliability at all. So when a video or a forum post tells you a 2021 build is some specific percentage worse than a 2019, that number was invented. What exists is recall records, complaint data, shipment figures and owner reporting, and this article sticks to those." },
      { "type": "h2", "heading": "Why are Class B vans a different case?", "text": "Three structural reasons. First, the vehicle itself: a Class B's chassis, engine, suspension and crash structure are built by Mercedes-Benz, Ford or Ram on automotive lines with automotive quality control. The RV maker's labor touches only the conversion inside it. Second, scale: at their peak, vans were roughly 3 percent of towable volume, built in smaller runs by smaller teams, closer to the way the custom builders on our [market index](/market) have always worked. Third, timing: the van peak came in 2022, not during the desperate hiring winter of 2021. None of this makes a COVID-era van automatically good. It makes the trailer evidence a poor predictor of any individual van." },
      { "type": "h2", "heading": "What did actually go wrong on COVID-era vans?", "text": "The recalls are real, and a buyer should know them by name. But read the causes before you judge the era:" },
      { "type": "ul", "items": ["Cooktops: 9,720 Winnebago vans (Solis, Travato, Ekko, 2020 to 2023) recalled because Suburban's SDS2 burner tubes can fracture and leak gas. A supplier part. Coachmen recalled a grand total of 12 vans for the same cooktop.", "Generators: 6,536 Winnebago vans recalled over the fuel hose on the Cummins Onan generator, attributed by Cummins to an inadequate hose specification. The window runs to April 2023 builds, past most definitions of the COVID era.", "Awnings: 4,521 Winnebago Revels (2021 to 2023) recalled because the awning can extend while driving. Cause: the gearbox housing from supplier Carefree of Colorado.", "Propane fittings: 3,374 Thor vans (2022 Scope, Tellaro, Sequence, Sanctuary, Tranquility, Rize) recalled for cracked LP quick-disconnect fittings. The NHTSA filing blames porosity and contamination in Enerco's brass.", "The genuine workmanship cases are smaller: a Thor LP line routed too short with an excessive bend (2022 Scope and Rize), and a Winnebago wire harness built incorrectly (2022 Travato). Real, specific, and a short list."] },
      { "type": "p", "text": "Every one of those recalls is a free dealer remedy, and completion is checkable by VIN in two minutes at [nhtsa.gov/recalls](https://www.nhtsa.gov/recalls). By 2026, most have been done, and the biggest ones are one-part swaps, not structural surgery. A recall that has been completed is not a mark against a used van. It is maintenance the seller's era paid for." },
      { "type": "h2", "heading": "What about a COVID-era Class C, or a trailer?", "text": "A Class C deserves a separate sentence because its risk profile is genuinely different from a van's: behind an automotive cab sits an entire plant-built house, walls, roof, and often slide-outs, which is where rushed construction does its damage and where water gets in. That is an argument for inspecting a C harder, not for a proven verdict against it, and the market rendered no verdict either: in [J.D. Power's](https://www.jdpower.com/rvs) 2023 year-end figures, Class C values actually rose 1.3 percent while standard hitch trailers fell 4.0 percent and fifth wheels fell 2.5 percent. For trailers, especially high-volume fifth wheels from the peak window, the caution is earned, and at least one NRVIA-certified inspector quoted by RVtravel advises that his recommended used years for Grand Design fifth wheels stop at 2020. Read that quote carefully when you meet it elsewhere: it is a judgment about one brand of fifth wheel, not about vans, and it is routinely recycled as if it covered everything with wheels." },
      { "type": "h2", "heading": "How do you buy a COVID-era van safely?", "text": "The protocol matters more than the model year. In order:" },
      { "type": "ol", "items": ["Run the VIN before you visit. Check recall status at nhtsa.gov. Open recalls are not a dealbreaker, they are free repairs, but an owner who never bothered tells you something about the van's life.", "Confirm the build month, not just the model year. A van built in March 2021 and one built in November 2021 lived through different factories. The label is on the door jamb.", "Hire a certified inspector. An [NRVIA](https://nrvia.org) inspection runs a few hundred dollars and tests what actually kills used RVs: water intrusion and prior water damage, roof and sealant condition, LP system leak testing, electrical, tire age by DOT date code, and the systems underneath. Weight the water and sealant checks heaviest on any 2021 to 2022 build of anything; sealing failures are the most repeated complaint of the era.", "Ask for the service records, and read them as the van's biography. The best COVID-era buy is the van whose first owner worked the punch list under warranty. That debugging is done, documented, and already paid for. A 2021 van with a fat folder beats a 2019 van with none.", "Price it against the corrected market, not the seller's receipt. Pandemic buyers paid peak prices with limited supply, and lender commentary since has documented their negative equity hangover. Their 2021 purchase price is not evidence of your 2026 value. Check current values for the model in our [comparison tool](/compare) and across the [full market index](/market).", "Walk away from the era's real red flags: water staining or soft floors, musty smells, delamination, a seller who cannot produce records, or open safety recalls the seller refuses to have completed before sale. Those are not COVID problems. They are this-van problems, and they exist in every model year."] },
      { "type": "h2", "heading": "So, is it wise to buy a COVID-era used van?", "text": "Yes, with the protocol, and the reasoning is almost unfair in the buyer's favor. The era's documented sins concentrate in towables. The van-specific defects are dominated by supplier parts that carry free, verifiable fixes. The production peak for vans came late and small. The first owner absorbed the steepest depreciation in RV history and, in the good examples, the entire warranty punch list. What is left is the largest pool of used Class B vans ever to exist, priced in a corrected market, every one of them individually inspectable. The vans to avoid are not a model year. They are the vans, from any year, with water damage, no records and an evasive seller. If you are earlier in the journey than this, start with the [Class B buying guide](/blog/class-b-van-buying-guide), take the [match quiz](/find-my-van) to narrow the field, and if you want proof that a well-built van outlasts eras entirely, read how a [2013 Sportsmobile](/blog/sportsmobile-review) is doing after thirteen years." },
      { "type": "faq-group", "faqs": [{"question": "What years are considered COVID-era RVs?", "answer": "Units built roughly from June 2020 through December 2022, sold as 2021 to 2023 models. The highest-risk window, by labor data and owner reporting, is builds from the second half of 2021 through the first half of 2022. Check the build month on the manufacturer's door jamb label rather than trusting the model year."}, {"question": "Are COVID-era Class B vans less reliable than other years?", "answer": "There is no dataset that shows that. No public source reports defect or warranty rates by model year, and the documented Class B recalls of the era are dominated by supplier components (Suburban cooktops, Cummins generators, Carefree awnings, Enerco LP fittings) rather than conversion workmanship. The quantified quality spike of the era, NHTSA frame complaints and investigation PE24029, concerns Grand Design fifth wheel trailers."}, {"question": "How do I check if a used van's recalls have been completed?", "answer": "Enter the VIN at [nhtsa.gov/recalls](https://www.nhtsa.gov/recalls). It lists every open recall for that specific vehicle. Remedies are free at a dealer, and a seller or dealer can print the completion history. The major COVID-era van recalls (cooktop burner tubes, generator fuel hose, awning gearbox, LP fittings) are single-part replacements."}, {"question": "Should I get a used COVID-era van inspected?", "answer": "Yes, and you should inspect any used van this way. An [NRVIA-certified inspection](https://nrvia.org) costs a few hundred dollars and covers water intrusion and prior damage, roof and sealant condition, LP leak testing, electrical systems, and tire age by DOT code. On a 2021 to 2022 build, weight the water intrusion and sealant findings most heavily."}, {"question": "Are COVID-era vans cheaper than other used vans?", "answer": "They are cheaper than they were, because the whole market corrected after 2022 and pandemic buyers had paid peak prices. J.D. Power's 2023 figures show the correction hit trailers hardest (standard hitch down 4.0 percent) while motorhome values moved least. No valuation source applies a specific quality discount to 2021 to 2022 vans, so the discount a buyer captures is ordinary depreciation, which the first owner already absorbed."}, {"question": "Is a COVID-era Class C riskier than a COVID-era Class B?", "answer": "Its risk sits in a different place. A Class C's house, walls, roof and slide-outs, is entirely plant-built, which is where rushed construction causes the most harm, so inspection matters even more. But there is no Class B versus Class C defect dataset, and Class C values rose 1.3 percent in J.D. Power's 2023 figures. Era is a weaker signal than condition and records for both."}] },
    ],
    relatedSlugs: ["class-b-van-buying-guide", "winnebago-boldt-review", "sportsmobile-review"],
  },
};
