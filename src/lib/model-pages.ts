import revelFacts from "../../data/facts/winnebago-revel.json";

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
      "Winnebago lists the Revel 44E from $223,495, base MSRP before options, tax, title, license and delivery. Dealer pricing runs higher: a major Winnebago dealer publishes a $261,808 base MSRP for the same van, and optioned stickers go up from there. Both figures are documented in our [fact ledger](/about); where sources disagree, this site displays the manufacturer's figure and says so.",
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
];

export const MODEL_PAGE_SLUGS = modelPages.map((m) => m.slug);

export function getModelPage(slug: string) {
  return modelPages.find((m) => m.slug === slug);
}
