import revelFacts from "../../data/facts/winnebago-revel.json";
import travatoFacts from "../../data/facts/winnebago-travato.json";
import solisFacts from "../../data/facts/winnebago-solis.json";
import sequenceFacts from "../../data/facts/thor-sequence.json";
import tellaroFacts from "../../data/facts/thor-tellaro.json";
import storytellerModeFacts from "../../data/facts/storyteller-overland-mode.json";
import fridayFacts from "../../data/facts/remote-vans-friday.json";

/**
 * Model pages: the /models/<slug> guides. Display specs come from
 * src/lib/vans.ts (the comparison pool) and the fact ledger in
 * /data/facts/<slug>.json; this registry holds only the editorial layer:
 * the answer-first intro, who-it-is-for copy, FAQs and related reading.
 *
 * A model gets a page when an entry exists here. The market index links
 * to /models/<slug> for exactly the slugs in MODEL_PAGE_SLUGS, and the
 * sitemap is generated from the same list.
 */

export interface FactAttribute {
  attribute: string;
  value: string | number;
  unit?: string;
  sourceUrl: string;
  sourceType: string;
  status: string;
  retrievedAt: string;
  note?: string;
}

export interface FactLedger {
  model: string;
  name: string;
  builder: string;
  modelYear: number;
  attributes: FactAttribute[];
  conflicts: {
    attribute: string;
    values: { value: number; sourceUrl: string }[];
    chosen: { value: number; source: string };
  }[];
}

export interface ModelPageContent {
  slug: string;
  /** Short line under the H1, e.g. model year + one-line identity. */
  tagline: string;
  /** Answer-first summary, rendered in the intro block. Plain text. */
  intro: string;
  /** Who-it-is-for paragraphs; bestFor bullets come from vans.ts. */
  whoFor: string[];
  /** The price story, in the site's voice. [label](url) links supported. */
  priceStory: string;
  faqs: { question: string; answer: string }[];
  /** Blog slugs for the Keep Reading cards. */
  relatedSlugs: string[];
  ledger: FactLedger;
  /** Date the ledger figures were last re-verified against the manufacturer. */
  verifiedDate: string;
}

export const modelPages: ModelPageContent[] = [
  {
    slug: "winnebago-revel",
    tagline: "2026 · AWD Sprinter adventure van · 44E floor plan",
    intro:
      "The Winnebago Revel is the benchmark factory adventure van: a Class B camper on the all-wheel-drive Mercedes-Benz Sprinter 144 chassis, with a power lift bed over a gear garage, a wet bath with a swiveling cassette toilet, and hydronic heat. Winnebago lists the 2026 Revel 44E from $223,495, base before options. It carries 21 gallons of fresh water, the manufacturer's figure, and it is built for two people who would rather be at a trailhead than in a campground.",
    whoFor: [
      "The Revel is the factory answer to the custom adventure build: Sprinter AWD, diesel torque, a bed that lifts out of the way so bikes and boards live inside, and a dealer network behind it. If your trips start where the pavement gets vague and you boondock more than you plug in, this is the van the rest of the segment is measured against.",
      "It is a two-person van. The interior is compact, the water supply is sized for long weekends rather than weeks, and the price of the capability is real. Buyers who travel as a pair and prioritize where the van can go over how much it can carry will feel right at home. Everyone else should read the trade-offs below before falling for the stance.",
    ],
    priceStory:
      "Winnebago lists the Revel 44E from $223,495, base MSRP before options, tax, title, license and delivery. Dealer pricing runs higher: a major Winnebago dealer publishes a $261,808 base MSRP for the same van, and optioned stickers go up from there. Both figures are documented in our [fact ledger](/about); where sources disagree, this site displays the manufacturer's figure and says so. Its ProMaster sibling, the [Winnebago Travato](/models/winnebago-travato), starts about $40,000 lower at a dealer-listed $183,783, and gives up the all-wheel drive and the diesel to get there.",
    faqs: [
      {
        question: "How much does the 2026 Winnebago Revel cost?",
        answer:
          "Winnebago lists a starting price of $223,495 for the Revel 44E, base before options, taxes and delivery charges. Dealer MSRPs run higher: a major Winnebago dealer publishes a $261,808 base MSRP. Where sources disagree, this site displays the manufacturer's figure.",
      },
      {
        question: "How much fresh water does the Winnebago Revel hold?",
        answer:
          "21 gallons, per Winnebago's published specifications, re-verified on winnebago.com on October 16, 2026. Some dealer spec sheets claim 35 gallons; the disagreement is logged in our fact ledger, and we publish the manufacturer's figure.",
      },
      {
        question: "Does the Winnebago Revel have a bathroom?",
        answer:
          "Yes. A 31 by 26 inch wet bath with a swiveling cassette toilet (5-gallon cassette) and a flexible showerhead, per Winnebago's specifications for the 44E.",
      },
      {
        question: "How many people can sleep in a Winnebago Revel?",
        answer:
          "Winnebago does not publish a sleeping capacity for the Revel. Dealer spec sheets list two, in the power lift bed, and Winnebago offers an optional front cab air mattress that adds a third berth.",
      },
      {
        question: "Is the Winnebago Revel a four-season van?",
        answer:
          "It is equipped for cold weather: hydronic heating, an insulated gray water tank, dual-pane windows and a factory winterization package. But Winnebago's own guidance recommends following its winterization procedures in freezing conditions, so we rate it extended season rather than true four-season.",
      },
    ],
    relatedSlugs: [
      "4x4-van-is-it-worth-it",
      "remote-vans-review",
      "class-b-van-buying-guide",
    ],
    ledger: revelFacts as unknown as FactLedger,
    verifiedDate: "2026-10-16",
  },
  {
    slug: "winnebago-travato",
    tagline: "2026 · Ram ProMaster road-trip van · 59G, 59GL, 59K and 59KL floor plans",
    intro:
      "The Winnebago Travato is the factory benchmark on the Ram ProMaster and is widely described as North America's best-selling camper van: a 21-foot Class B with front-wheel drive and a 3.6L V6 gasoline engine, fully redesigned for 2026 with a lithium power system and gasoline Truma heat and hot water as standard. Winnebago does not publish a Travato price; the best verified dealer base starts at $183,783, and base prices climb to about $216,000 by floorplan. It carries 18 gallons of fresh water on every floorplan, the manufacturer's figure, sleeps two, and trades the Revel's trail hardware for car-like manners, a lower price and the largest dealer network in the segment.",
    whoFor: [
      "The Travato is the road-trip van. It drives like the cargo van it is based on rather than a small truck, parks in a normal space, runs on gasoline instead of diesel, and can be serviced almost anywhere in the country through Ram and Winnebago dealers. If your travel is campgrounds, paved national park roads, visiting family and long highway days strung together, this is the van the rest of the ProMaster segment is measured against.",
      "It is a two-person, pavement-first van. There is no all-wheel drive at any price, the water supply is weekend-sized, and Winnebago's own guidance recommends winterization procedures in freezing conditions, so we rate it extended season rather than true four-season. Buyers who need trail access or cold-weather plumbing should look at the Sprinter-based competition, and everyone should weigh the floorplan spread: the base price moves about $32,000 across the line.",
    ],
    priceStory:
      "Winnebago does not publish a Travato price: its product page lists no MSRP, so the figure in the table is the best verified dealer base, $183,783 from Lichtsinn RV, and it is labeled as a dealer figure wherever it appears on this page. Bases climb by floorplan: 59K window stickers run around $191,000, and a 2026 59KL manufacturer window sticker lists a $216,037 suggested base price before options. Its Sprinter sibling, the [Winnebago Revel](/models/winnebago-revel), starts at $223,495 on Winnebago's own site, roughly $40,000 more, and that gap is the honest price of all-wheel drive, diesel and the adventure hardware. Both models' figures are documented in our [fact ledger](/about); where sources disagree, this site displays the manufacturer's figure and says so.",
    faqs: [
      {
        question: "How much does the 2026 Winnebago Travato cost?",
        answer:
          "Winnebago does not publish a Travato MSRP. The best verified dealer base price is $183,783 (Lichtsinn RV), and base prices climb by floorplan to a $216,037 manufacturer window-sticker base for the 59KL; optioned stickers run higher. This site labels the starting figure as dealer-sourced rather than presenting it as a Winnebago price.",
      },
      {
        question: "How do the Winnebago Travato and the Revel compare on water and price?",
        answer:
          "The Travato carries 18 gallons of fresh water to the Revel's 21, and starts at a dealer-listed $183,783 against the Revel's manufacturer-listed $223,495, a gap of about $40,000. The Travato is front-wheel drive and gasoline on the Ram ProMaster; the Revel is all-wheel drive and diesel on the Mercedes Sprinter. Same company, two different trips: pavement and campgrounds versus trailheads and boondocking.",
      },
      {
        question: "How much fresh water does the Winnebago Travato hold?",
        answer:
          "18 gallons, on every floorplan, per Winnebago's 2026 Travato brochure, re-verified on October 16, 2026.",
      },
      {
        question: "Does the Winnebago Travato have a bathroom?",
        answer:
          "Yes. A wet bath with a shower on every floorplan, with a foot-pedal toilet running to a black tank: 11 gallons on the 59G and 12 on the 59K and 59KL, per Winnebago's brochure. Unlike the Revel, the Travato does not use a cassette toilet.",
      },
      {
        question: "How many people can sleep in a Winnebago Travato?",
        answer:
          "Two, per Winnebago's brochure, on every floorplan: a rear double bed on the 59G and 59GL, and twin beds that join into a Flex Bed on the 59K and 59KL. Dealer listings often say three, counting an optional front cab air mattress; the manufacturer's rated figure is two, and that is the figure this site publishes.",
      },
    ],
    relatedSlugs: [
      "sprinter-vs-transit-vs-promaster",
      "class-b-van-buying-guide",
      "off-grid-power-systems-class-b",
    ],
    ledger: travatoFacts as unknown as FactLedger,
    verifiedDate: "2026-10-16",
  },
  {
    slug: "storyteller-overland-mode",
    tagline: "2026 · AWD Sprinter overland van · Classic MODE OG",
    intro:
      "The Storyteller Overland MODE is the overland benchmark among factory Class B vans: a modular camper on the all-wheel-drive Mercedes-Benz Sprinter 2500 chassis, with a bed that converts to a work surface, a second row that seats four belted and folds out to a twin bed, and a stowable shower in place of a fixed bath. Storyteller lists the 2026 Classic MODE OG at $192,206 under its See-Through pricing. It carries 37 gallons of fresh water inside the cabin, the manufacturer's figure, rides on 10.5 inches of ground clearance, the most in our comparison pool, and sleeps two to three.",
    whoFor: [
      "The MODE is built for travelers who treat the van as a basecamp: overlanders, boondockers and adventure-first couples who drive forest roads to trailheads and sleep where the day ends. The modular interior is the draw. The rear bed folds up into a standing-height workspace over a gear garage, the second row converts between seating, lounging and a second bed, and the systems (diesel-fired heat and hot water, an 8.4 kWh power system, four-season water plumbing) are sized for staying out rather than plugging in.",
      "The compromises are deliberate, and they are real. There is no fixed wet bath: the shower stows away and the toilet is a portable 2.6-gallon unit, which some buyers will love for the space it frees and others will reject on sight. Storyteller's dealer network is smaller than Winnebago's, and the price buys a 20-foot van. Buyers who want a conventional bathroom and a campground-first layout should cross-shop the [Winnebago Revel](/models/winnebago-revel) and the hardwall-bath MODE XO before deciding.",
    ],
    priceStory:
      "Storyteller publishes its pricing outright: the 2026 Classic MODE OG lists at $192,206 under the company's See-Through, no-haggle pricing, base before any added accessories. One wrinkle, documented in our [fact ledger](/about): Storyteller's own comparison page lists the same van at $187,321. Where the manufacturer's pages disagree, this site displays the dedicated model page figure, $192,206, and dealer asking prices cluster near $189,206. The rest of the lineup is published on the same page: the Classic MODE XO, which adds a hardwall bathroom, at $200,801; the DARK MODE OG at $215,108; the BEAST MODE OG at $252,821; the 170-inch TOUR MODE XL at $254,012; and the five-seatbelt CREW MODE XL at $272,208. Against its closest factory rival, the [Winnebago Revel](/models/winnebago-revel) at $223,495, the Classic MODE starts about $31,000 lower and answers with more water, more clearance and a more flexible interior, against a smaller dealer network.",
    faqs: [
      {
        question: "How much does the 2026 Storyteller Overland MODE cost?",
        answer:
          "Storyteller lists the 2026 Classic MODE OG at $192,206 under its See-Through pricing, base before accessories. Storyteller's own comparison page lists $187,321 for the same van; the disagreement is logged in our fact ledger, and this site displays the dedicated model page figure. The wider lineup on the same page runs from the Classic MODE XO at $200,801 to the CREW MODE XL at $272,208.",
      },
      {
        question: "How much fresh water does the Storyteller Overland MODE hold?",
        answer:
          "37 gallons, per Storyteller's published specifications, re-verified on storytelleroverland.com on October 16, 2026. The tank is mounted inside the cabin, which is part of the four-season design, and grey water capacity is 24 gallons.",
      },
      {
        question: "How many people can sleep in a Storyteller Overland MODE?",
        answer:
          "Storyteller rates the Classic MODE OG at sleeps 2-3: an RV queen in the rear DreamWeaver bed, plus an RV twin folded out from the GrooveLounge second row. Four seatbelts mean four can ride belted even though three is the sleeping maximum.",
      },
      {
        question: "Does the Storyteller Overland MODE have a bathroom?",
        answer:
          "Not a fixed one. The Classic MODE OG uses a stowable Halo Shower system with a concealed shower pan, a portable cassette toilet (2.6-gallon capacity) and an exterior shower, per Storyteller's specifications. Buyers who want a hardwall wet bath should look at the Classic MODE XO, which adds one at $200,801.",
      },
      {
        question: "Is the Storyteller Overland MODE a four-season van?",
        answer:
          "Storyteller markets a four-season design, and the hardware backs the claim: diesel-fired cabin heat and water heating, the 37-gallon fresh tank mounted inside the cabin, a heating loop on the grey tank, and polymer insulation throughout. That is why our comparison pool rates it four-season rather than extended season.",
      },
    ],
    relatedSlugs: [
      "remote-vans-review",
      "storyteller-overland-mode-suspension",
      "4x4-van-is-it-worth-it",
    ],
    ledger: storytellerModeFacts as unknown as FactLedger,
    verifiedDate: "2026-10-16",
  },
  {
    slug: "winnebago-solis",
    tagline: "2026 · Ram ProMaster family van · 59P and 59PX floor plans",
    intro:
      "The Winnebago Solis is the family benchmark among factory Class B vans, and the cheapest Winnebago with a fully enclosed bath: a Ram ProMaster camper that sleeps four by stacking two berths in a pop-top loft over the rear bed, with a wet bath and a swiveling cassette toilet where rivals at the price fit a closet or no bath at all. Winnebago lists the 2026 Solis 59P from $156,254 and the longer 59PX from $180,487 on its own site. Both floorplans carry 20 gallons of fresh water, the manufacturer's figure, and both trade all-wheel drive and diesel for front-wheel drive, gasoline power and room for kids.",
    whoFor: [
      "The Solis is the factory answer for families. It seats up to six with seat belts on travel days and sleeps four at night, two in the rear bed and two in the pop-top loft, and it is the only van in our comparison pool rated to sleep four at all. It is also the lowest-priced Winnebago with a full bath. The enclosed wet bath matters more than it sounds: a cassette toilet behind a door, a shower, and no black tank to dump. If your trips are family vacations, school-holiday road trips and state park weekends, this is the van the rest of the value end of the segment is measured against.",
      "The compromises are the price of the price. The pop-top berth suits kids and smaller adults best, the interior is simpler than the Travato's, and there is no all-wheel drive at any price. Winnebago insulates the van ceiling to floor and runs the waterlines inside, but attaches its winter-use-guidelines asterisk rather than claiming a four-season build, so we rate it cold-capable, not four-season. Buyers who travel as a couple and want the nicer road-trip interior should cross-shop the Travato; buyers who need four berths usually end the conversation here.",
    ],
    priceStory:
      "Winnebago publishes Solis pricing on its own site, which is not true of every model it sells: the 59P starts at $156,254 and the 59PX at $180,487, base before options, and dealer stickers agree closely (Camping World has listed the 59P at $156,840). The roughly $24,000 step to the 59PX buys the extended-wheelbase body, rear gear storage and a standard ultra-quiet generator. Against its ProMaster sibling, the [Winnebago Travato](/models/winnebago-travato), which starts at a dealer-listed $183,783 and sleeps two, the Solis undercuts it in both floorplans while sleeping four, and gives up the Travato's bigger lithium power system and more finished interior to do it. Thor's [Sequence](/models/thor-sequence) starts lower still, at $151,060, and answers with three floor plans and up to 35 gallons of fresh water, but sleeps two rather than four and reserves its cassette toilet for one floor plan. All of these figures are documented in our [fact ledger](/about); where sources disagree, this site displays the manufacturer's figure and says so.",
    faqs: [
      {
        question: "How much does the 2026 Winnebago Solis cost?",
        answer:
          "Winnebago lists the Solis 59P from $156,254 and the 59PX from $180,487 on its own site, base before options, taxes and delivery. Dealer stickers track those figures closely; Camping World has listed the 59P at $156,840.",
      },
      {
        question: "Does the Winnebago Solis have a cassette toilet?",
        answer:
          "Yes. Both floorplans have an enclosed wet bath with a swiveling cassette toilet, 5-gallon cassette, per Winnebago's Solis brochure. There is no black-water tank: the cassette lifts out and empties at a dump station or toilet, which is a large part of the Solis's appeal for families and for buyers who do not want to queue at a dump station with a hose.",
      },
      {
        question: "How many people can sleep in a Winnebago Solis?",
        answer:
          "Four, on both floorplans, per Winnebago's rating: two in the rear bed (a Murphy+ bed on the 59P, a fold-down bed on the 59PX) and two in the pop-top sleeping loft. The loft suits kids and smaller adults best. The Solis also seats up to six with seat belts for travel days.",
      },
      {
        question: "How much fresh water does the Winnebago Solis hold?",
        answer:
          "20 gallons, on both floorplans, per Winnebago's Solis brochure, re-verified on October 16, 2026. Gray water is also 20 gallons by the brochure; some dealer spec feeds list 30 gallons, and that disagreement is logged in our fact ledger.",
      },
      {
        question: "Can you use a Winnebago Solis in winter?",
        answer:
          "It is equipped for cold weather: ceiling-to-floor insulation, interior coach waterlines, a freeze-resistant exterior water fill, and Truma Combi Eco heat and hot water. But Winnebago attaches a winter-use-guidelines asterisk and recommends following its winterization procedures in freezing conditions, so we rate the Solis cold-capable and extended season rather than a true four-season van.",
      },
    ],
    relatedSlugs: [
      "class-b-van-buying-guide",
      "sprinter-vs-transit-vs-promaster",
      "off-grid-power-systems-class-b",
    ],
    ledger: solisFacts as unknown as FactLedger,
    verifiedDate: "2026-10-16",
  },
  {
    slug: "thor-sequence",
    tagline: "2027 · Ram ProMaster value van · 20L, 20U and 20Y floor plans",
    intro:
      "The Thor Sequence is the value benchmark among factory Class B vans: a Ram ProMaster camper, built by Thor Motor Coach in three floor plans, with an enclosed wet bath in every one and a published starting price lower than any Winnebago. Thor prices the line from $151,060 on its own Sequence page, for the 20L. Fresh water runs 22, 27 or 35 gallons depending on floor plan, the manufacturer's figures, the toilet is a cassette on the 20U and a gravity flush into a black tank on the 20L and 20Y, and every floor plan sleeps two. It trades the Winnebago name and dealer depth for Thor's dealer network, Thule roof kit as standard, and the lowest entry price in our comparison pool.",
    whoFor: [
      "The Sequence is the factory answer for budget-conscious couples and first-time Class B buyers. It drives like the cargo van it is based on, parks in a normal space, runs on gasoline, and comes with the campground kit already fitted: power awning, roof ladder and rack, a generator, solar on the roof and a Truma system for heat and hot water. If your travel is weekends, state parks and long paved trips for two, and the budget is the budget, this is the van the value end of the segment is measured against.",
      "The compromises are the price of the price. There is no all-wheel drive at any price and no factory winter package: Thor fits heat pads to the holding tanks but publishes no insulation rating, so we rate it three-season. Only the 20U gets a cassette toilet; the 20L and 20Y use black tanks. And buyers who need real sleeping for four should look at the Winnebago Solis, which sleeps four in every floor plan, before falling for the lower sticker.",
    ],
    priceStory:
      "Thor publishes Sequence pricing in the structured data on its own model page: the line runs from $151,060 for the 20L, with the 20U's bases at $162,120 to $165,060 and the 20Y at $162,960, each from Thor's floor plan pages. One wrinkle, documented in our [fact ledger](/about): Thor's class-B lineup page lists a flat $161,560 MSRP for the Sequence. Where the manufacturer's pages disagree, this site displays the dedicated model page figure, $151,060. Against its closest rival, the [Winnebago Solis](/models/winnebago-solis), which starts at $156,254 and sleeps four, the Sequence undercuts it by about $5,000 in base form and answers with a third floor plan and, in the 20Y, nearly twice the fresh water, and gives up the Solis's fourth berth and standard pop-top to do it. Thor's sister line, the [Tellaro](/models/thor-tellaro), shares the Sequence's three floor plans and toilet split, and starts lower, from $140,560.",
    faqs: [
      {
        question: "How much does the Thor Sequence cost?",
        answer:
          "Thor publishes the Sequence line from $151,060 (the 20L) in the structured data on its own model page, re-verified on October 16, 2026. The 20U's published bases run $162,120 to $165,060 and the 20Y's is $162,960. Thor's class-B lineup page lists a flat $161,560 for the line; that disagreement is logged in our fact ledger, and this site displays the model page figure.",
      },
      {
        question: "What is the difference between a Winnebago Solis and a Thor Sequence?",
        answer:
          "They share the Ram ProMaster 3500 chassis, front-wheel drive and the 3.6L V6 gasoline engine, and differ almost everywhere else. The Solis sleeps four in both of its floor plans, two of them in a standard pop-top loft; the Sequence sleeps two in all three of its floor plans, with an optional Sky Bunk pop-top on the 20L. Both have enclosed wet baths, but the Solis uses a cassette toilet throughout, while the Sequence fits a cassette only on the 20U and gravity-flush toilets with black tanks on the 20L and 20Y. The Solis carries 20 gallons of fresh water; the Sequence carries 22, 27 or 35 depending on floor plan. On power, the Solis offers an optional 5 kWh EcoFlow lithium kit, while Thor's standards list gives the Sequence AGM house batteries and a 2,800W generator, with a 400Ah lithium Re(Li)able Power Pack as the factory option. The Sequence starts lower: $151,060 against $156,254.",
      },
      {
        question: "How much fresh water does the Thor Sequence hold?",
        answer:
          "It depends on the floor plan, per Thor's own specification pages: 22 gallons on the 20L, 27 on the 20U and 35 on the 20Y, re-verified on October 16, 2026. Gray water runs 13, 20 and 28 gallons in the same order. Any single-number answer for the Sequence is a floor plan answer in disguise.",
      },
      {
        question: "How many people can sleep in a Thor Sequence?",
        answer:
          "Two, on every floor plan, per Thor's specification tables: an expanding sleeper sofa on the 20L and 20U and a rear bed arrangement on the 20Y. The 20L offers an optional Sky Bunk pop-top that adds a bunk over the cab, but Thor still rates the 20L at two, and two is the figure this site publishes. Families who need four rated berths should look at the Winnebago Solis.",
      },
      {
        question: "Can you use a Thor Sequence in winter?",
        answer:
          "It has cold-weather hardware: heat pads on the holding tanks and a Truma Combi Eco furnace and water heater. But Thor publishes no winter package and no insulation rating for the Sequence, so we rate it three-season: fine for cold nights and shoulder-season trips, not a van to leave plumbed and un-winterized through a northern winter.",
      },
    ],
    relatedSlugs: [
      "class-b-van-buying-guide",
      "sprinter-vs-transit-vs-promaster",
      "off-grid-power-systems-class-b",
    ],
    ledger: sequenceFacts as unknown as FactLedger,
    verifiedDate: "2026-10-16",
  },
  {
    slug: "thor-tellaro",
    tagline: "2027 · Ram ProMaster value van · 20L, 20U and 20Y floor plans",
    intro:
      "The Thor Tellaro is the lowest-priced factory Class B in our comparison pool: a Ram ProMaster camper built by Thor Motor Coach in three floor plans, with an enclosed wet bath in every one. Thor prices the line from $140,560 on its own Tellaro page, for the 20L. Fresh water runs 22, 27 or 35 gallons depending on floor plan, the manufacturer's figures; the toilet is a cassette on the 20U and a gravity flush into a black tank on the 20L and 20Y; and every floor plan sleeps two, with Thor's optional Sky Bunk pop-top on the 20L and 20U raising that to four. It is the sister line to Thor's Sequence: same chassis, same floor plans, same toilet split, a lower starting price.",
    whoFor: [
      "The Tellaro is the factory answer for buyers who want a real enclosed bathroom and a real bed at the lowest published price in the segment. It drives like the cargo van it is based on, parks in a normal space, runs on gasoline, and comes with the campground kit fitted: power awning, Thule roof rack, a generator, solar on the roof and a Truma system for heat and hot water. If your travel is weekends, state parks and long paved trips for two, and the budget leads the decision, this is where the value end of the segment starts.",
      "The compromises are the price of the price. There is no all-wheel drive at any price and no factory winter package: Thor fits heat pads to the holding tanks but publishes no insulation rating, so we rate it extended season. Only the 20U gets a cassette toilet; the 20L and 20Y use black tanks. The base interior is simpler than the Winnebago competition's, and buyers who need four berths as standard should look at the Winnebago Solis, which sleeps four in every floor plan, before falling for the lower sticker.",
    ],
    priceStory:
      "Thor publishes Tellaro pricing in the structured data on its own model page: the line runs from $140,560 for the 20L to $164,500 at the top of the published range, with the 20U at $162,120 and the 20Y at $162,960 on Thor's floor plan pages. One wrinkle, documented in our [fact ledger](/about): Thor's class-B lineup page lists a flat $161,560 MSRP for the Tellaro, the same figure it lists for the Sequence. Where the manufacturer's pages disagree, this site displays the dedicated model page figure, $140,560. Optioned dealer stickers run higher; a 2026 20U has been stickered at $167,426. Against its sister line, the [Thor Sequence](/models/thor-sequence), which shares the Tellaro's chassis, floor plans and toilet split and starts at $151,060, the Tellaro undercuts it by about $10,500 in base form, and Thor's Tellaro brochure lists a Sky Bunk option on the 20U that Thor advertises only on the Sequence 20L. Against the [Winnebago Solis](/models/winnebago-solis) at $156,254, the Tellaro starts about $15,700 lower and gives up the Solis's four-berth layout and standard pop-top to do it.",
    faqs: [
      {
        question: "How much does the Thor Tellaro cost?",
        answer:
          "Thor publishes the Tellaro line from $140,560 (the 20L) in the structured data on its own model page, re-verified on October 16, 2026, in a published range running to $164,500; the 20U is $162,120 and the 20Y is $162,960 on Thor's floor plan pages. Thor's class-B lineup page lists a flat $161,560 for the line; that disagreement is logged in our fact ledger, and this site displays the model page figure. Optioned dealer stickers run higher.",
      },
      {
        question: "How much fresh water does the Thor Tellaro hold?",
        answer:
          "It depends on the floor plan, per Thor's own specification pages: 22 gallons on the 20L, 27 on the 20U and 35 on the 20Y, re-verified on October 16, 2026. The single figure of 27 gallons often quoted for the Tellaro is the 20U's number generalized to the whole line; it overstates the 20L by 5 gallons and understates the 20Y by 8. Gray water runs 13, 20 and 28 gallons in the same order.",
      },
      {
        question: "Does the Thor Tellaro have a cassette toilet?",
        answer:
          "Only on one floor plan. The 20U has a cassette toilet (4.75-gallon cassette) in its enclosed wet bath; the 20L and 20Y use gravity-flush toilets running to black tanks of 13.5 and 14 gallons. Thor states the split outright in its Tellaro brochure. Buyers who want a cassette on every floor plan should look at the Winnebago Solis; the Thor Sequence, the Tellaro's sister line, has the identical split.",
      },
      {
        question: "How many people can sleep in a Thor Tellaro?",
        answer:
          "Two, on every floor plan, per Thor's specification tables: an expanding sleeper sofa on the 20L and 20U and a rear bed arrangement on the 20Y. Thor's brochure also lists an optional Sky Bunk pop-top on the 20L and 20U that raises sleeping capacity to four. Families who need four berths without options should look at the Winnebago Solis, which sleeps four in every floor plan.",
      },
      {
        question: "What is the difference between the Thor Tellaro and the Thor Sequence?",
        answer:
          "Very little underneath, and that is the point: the two are sister lines on the same Ram ProMaster 3500 chassis, with the same three floor plans (20L, 20U, 20Y), the same fresh water figures (22, 27 and 35 gallons), the same toilet split (cassette on the 20U, black tanks on the 20L and 20Y) and the same Truma heat and hot water. The published differences are price and packaging: the Tellaro starts at $140,560 against the Sequence's $151,060, and Thor's Tellaro brochure lists the Sky Bunk pop-top option on both the 20L and 20U, where Thor advertises it on the Sequence 20L. Interior colors and dealer stock differ; the vans underneath are the same program. Read both guides and buy on price, options and the dealer you trust.",
      },
    ],
    relatedSlugs: [
      "class-b-van-buying-guide",
      "sprinter-vs-transit-vs-promaster",
      "off-grid-power-systems-class-b",
    ],
    ledger: tellaroFacts as unknown as FactLedger,
    verifiedDate: "2026-10-16",
  },
  {
    slug: "remote-vans-friday",
    tagline: "2026 · AWD Sprinter remote-work van · Friday Series",
    intro:
      "The Remote Vans Friday is the work-from-the-road benchmark among factory Class B vans: a Cincinnati-built camper on the all-wheel-drive Mercedes-Benz Sprinter 2500 chassis, with a 16.8 kWh battery, the largest in our comparison pool, a fitted Starlink Mini as standard and a stowable Cyber Shower in place of a fixed bath. Remote Vans publishes a manufacturer direct price of $194,900 for the Friday under its see-through pricing; the window sticker prints a $272,900 MSRP. It carries 30 gallons of fresh water, the manufacturer's figure, sleeps two to four, and trades a conventional bathroom and a deep dealer network for the power system and connectivity people who earn a living from the road actually need.",
    whoFor: [
      "The Friday is built for remote workers, boondockers and couples who work from the road. The spec sheet reads like a home office that happens to move: a battery sized for nights of off-grid air conditioning, an inverter that runs the A/C, microwave and cooktop together, an alternator that refills the bank while you drive, and satellite internet fitted at the factory rather than left to the aftermarket. If your travel is forest roads, dispersed camping and long stays away from hookups, with workdays in between, this is the van the connected end of the segment is measured against.",
      "The compromises are deliberate, and they are real. There is no fixed bathroom in any Remote Vans model: the shower stows away and the toilet is a portable cartridge unit, which frees the floor plan and will end the conversation for some buyers on sight. The conversion warranty is one year or 20,000 miles, average rather than generous, and Remote Vans is a young company, founded in 2021, with a dealer network in the dozens rather than the hundreds. Buyers who want an enclosed wet bath and service everywhere should cross-shop the Winnebago Revel; buyers who want the four-season rating should weigh the Storyteller MODE.",
    ],
    priceStory:
      "Remote Vans publishes its pricing outright, under what it calls see-through, Manufacturer Direct pricing: the Friday lists at $194,900, and that is the figure this site displays. One wrinkle, documented in our [fact ledger](/about): the manufacturer's own window sticker for the Friday prints an MSRP of $272,900. The direct price is the headline figure on Remote Vans' site, and dealers can and do sell below it; one dealer has advertised a 2026 Friday at $175,610 after a factory rebate and a dealer discount. Remote Vans publishes no standing rebate of its own, so treat lower figures quoted elsewhere as dealer prices, not the manufacturer's. The rest of the lineup is published on the same comparison page: the entry T-45 at $174,900, the Oasis at $224,900 and the flagship Aegis at $247,900, all on the same Sprinter 144 AWD platform with the same 30 gallons of fresh water. Against its Sprinter rivals, the Friday starts about $28,600 below the [Winnebago Revel](/models/winnebago-revel) at $223,495 and about $2,700 above the [Storyteller Overland MODE](/models/storyteller-overland-mode) at $192,206, and answers both with roughly double the MODE's battery, a battery the Revel does not approach, and factory-fitted satellite internet. Our full [Remote Vans review](/blog/remote-vans-review) covers the range, the warranty agreement and the catches in depth.",
    faqs: [
      {
        question: "How much does the 2026 Remote Vans Friday cost?",
        answer:
          "Remote Vans publishes a Manufacturer Direct price of $194,900 for the Friday Series under its see-through pricing, re-verified on remotevans.com on October 16, 2026. The manufacturer's own window sticker prints a $272,900 MSRP for the same van, and dealers can sell below the direct price; one dealer has advertised $175,610 after a factory rebate and dealer discount. Both manufacturer figures are logged in our fact ledger, and this site displays the direct price.",
      },
      {
        question: "What Class B vans does Remote Vans make, and what do they cost?",
        answer:
          "Four series, all on the Mercedes-Benz Sprinter 144 all-wheel-drive platform, all with 30 gallons of fresh water and the same queen bed and stowable shower arrangement. Per Remote Vans' published direct pricing, re-verified October 16, 2026: the entry T-45 at $174,900, with half the battery at 8.4 kWh; the Friday at $194,900; the Oasis at $224,900; and the flagship Aegis at $247,900. The Friday, Oasis and Aegis carry the 16.8 kWh battery; the steps buy battery, air conditioning size, Starlink hardware and off-road kit.",
      },
      {
        question: "How much water and power does the Remote Vans Friday carry?",
        answer:
          "30 gallons of fresh water and a 24-gallon gray tank with a heating loop, per Remote Vans' published specifications. The power system is the headline: a 16.8 kWh 51V Lithionics battery, 100 percent usable with a built-in reserve, a 3,000W inverter and charger with a 5,500W boost, a 48V 100A generator alternator that refills the bank while driving, and a single 200W roof solar panel with an exterior expansion port. The solar is a maintainer; the alternator does the heavy refilling.",
      },
      {
        question: "How many people can sleep in a Remote Vans Friday?",
        answer:
          "Remote Vans rates the Friday at seats and sleeps four: a queen bed for two adults, plus the Vanhalla rotating sleeper seat, which converts to a second bed sized for two smaller children. We record the figure as 2-4, the manufacturer's rating with its own asterisk attached. Some dealer listings say two or three; the disagreement is logged in our fact ledger.",
      },
      {
        question: "How does the Remote Vans Friday compare to the Winnebago Revel and Storyteller MODE?",
        answer:
          "All three are all-wheel-drive Sprinter 144 vans, and they split on philosophy. The Revel ($223,495, Winnebago's figure) is the factory benchmark with a fixed wet bath, a cassette toilet and the deepest dealer network, and the smallest water and battery of the three at 21 gallons and 320 Ah. The MODE ($192,206, Storyteller's figure) is the overland pick, with 37 gallons of fresh water carried inside the cabin, 10.5 inches of ground clearance and a four-season rating. The Friday ($194,900 direct) answers with the power and connectivity neither rival matches: a 16.8 kWh battery, roughly double the MODE's, and a factory-fitted Starlink Mini, and gives up the Revel's fixed bathroom and both rivals' dealer depth to get it. The Friday also has no fixed bath, like the MODE: a stowable Cyber Shower and a portable cartridge toilet instead.",
      },
    ],
    relatedSlugs: [
      "remote-vans-review",
      "off-grid-power-systems-class-b",
      "4x4-van-is-it-worth-it",
    ],
    ledger: fridayFacts as unknown as FactLedger,
    verifiedDate: "2026-10-16",
  },
];

export const MODEL_PAGE_SLUGS = modelPages.map((m) => m.slug);

export function getModelPage(slug: string) {
  return modelPages.find((m) => m.slug === slug);
}
