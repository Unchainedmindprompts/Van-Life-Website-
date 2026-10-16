import revelFacts from "../../data/facts/winnebago-revel.json";
import travatoFacts from "../../data/facts/winnebago-travato.json";

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
];

export const MODEL_PAGE_SLUGS = modelPages.map((m) => m.slug);

export function getModelPage(slug: string) {
  return modelPages.find((m) => m.slug === slug);
}
