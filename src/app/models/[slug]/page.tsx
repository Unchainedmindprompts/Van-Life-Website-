import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { modelPages, getModelPage, type FactAttribute } from "@/lib/model-pages";
import { vans } from "@/lib/vans";
import { posts } from "@/lib/posts";
import { SITE_URL, entityId, resolveEntity } from "@/lib/entities";

export function generateStaticParams() {
  return modelPages.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getModelPage(slug);
  const van = vans.find((v) => v.id === slug);
  if (!content || !van) return {};
  return {
    title: `${van.maker} ${van.name} (${content.ledger.modelYear}): Price, Specs & Trade-Offs | Starry Van`,
    description: `${van.maker} ${van.name} model guide: verified starting price, the full specification table, strengths and trade-offs. Every figure is sourced from the manufacturer's published data and recorded in our fact ledger.`,
    openGraph: {
      title: `${van.maker} ${van.name} (${content.ledger.modelYear})`,
      description: content.tagline,
      type: "website",
    },
  };
}

/* Same inline-link renderer as the article template:
   [label](/internal-path) or [label](https://external.example) */
function RichText({ text }: { text?: string }) {
  if (!text) return null;
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <span key={i}>{part}</span>;
        const [, label, href] = m;
        return href.startsWith("/") ? (
          <Link key={i} href={href} className="text-earth-400 underline hover:text-earth-300">
            {label}
          </Link>
        ) : (
          <a key={i} href={href} target="_blank" rel="noreferrer" className="text-earth-400 underline hover:text-earth-300">
            {label}
          </a>
        );
      })}
    </>
  );
}

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/* Manufacturer sources include the spec pages and the manufacturer's own
   published brochures; anything else (dealer listings) is labeled as such. */
function isManufacturerSource(sourceType: string): boolean {
  return sourceType.startsWith("manufacturer");
}

function formatValue(attr: FactAttribute): string {  if (typeof attr.value === "number") {
    const n = attr.value.toLocaleString("en-US");
    return attr.unit ? `${n} ${attr.unit}` : n;
  }
  return attr.value;
}

/* Spec table rows render in this order when the ledger carries them.
   The starting price is prepended from the ledger's price record. */
const SPEC_ORDER: { key: string; label: string }[] = [
  { key: "chassis", label: "Chassis" },
  { key: "drivetrain", label: "Drivetrain" },
  { key: "exteriorLength", label: "Exterior length" },
  { key: "interiorHeight", label: "Interior height" },
  { key: "sleeps", label: "Sleeps" },
  { key: "bathroom", label: "Bathroom" },
  { key: "wetBath", label: "Wet bath size" },
  { key: "freshWaterGal", label: "Fresh water" },
  { key: "grayWaterGal", label: "Gray water" },
  { key: "cassetteToiletGal", label: "Cassette toilet" },
  { key: "fuelGal", label: "Fuel capacity" },
  { key: "gvwr", label: "GVWR" },
  { key: "groundClearance", label: "Ground clearance" },
  { key: "battery", label: "House battery" },
  { key: "inverter", label: "Inverter" },
  { key: "winter", label: "Cold-weather equipment" },
  { key: "warranty", label: "Basic warranty" },
];

export default async function ModelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getModelPage(slug);
  const van = vans.find((v) => v.id === slug);
  if (!content || !van) notFound();

  const ledger = content.ledger;
  const pageUrl = `${SITE_URL}/models/${slug}`;
  const modelKey = `model:${slug}`;
  const orgKey = `org:${van.maker.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  const manufacturerUrl = van.sourceUrl;

  const priceConflict = ledger.conflicts.find((c) => c.attribute === "startingPrice");
  const priceAttr = ledger.attributes.find((a) => a.attribute === "startingPrice");
  const startingPrice = priceConflict?.chosen.value ?? (typeof priceAttr?.value === "number" ? priceAttr.value : undefined);
  const priceSourceUrl = priceConflict?.values[0]?.sourceUrl ?? priceAttr?.sourceUrl ?? manufacturerUrl;
  const priceIsManufacturer = priceConflict
    ? true
    : priceAttr
      ? isManufacturerSource(priceAttr.sourceType)
      : true;

  const specRows = SPEC_ORDER.map((row) => {
    const attr = ledger.attributes.find((a) => a.attribute === row.key);
    return attr ? { ...row, attr } : null;
  }).filter(Boolean) as { key: string; label: string; attr: FactAttribute }[];

  const ledgerNotes = ledger.attributes.filter((a) => a.note);
  const dealerSourced = specRows.filter((r) => !isManufacturerSource(r.attr.sourceType));

  const related = content.relatedSlugs
    .map((s) => posts.find((p) => p.slug === s))
    .filter(Boolean);

  const headlineProps = ["freshWaterGal", "sleeps", "exteriorLength", "gvwr"]
    .map((key) => {
      const attr = ledger.attributes.find((a) => a.attribute === key);
      const label = SPEC_ORDER.find((r) => r.key === key)?.label;
      return attr && label
        ? { "@type": "PropertyValue", name: label, value: formatValue(attr) }
        : null;
    })
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${van.maker} ${van.name} (${ledger.modelYear}): Price, Specs & Trade-Offs`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": entityId(modelKey) },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".article-intro"],
        },
      },
      {
        ...resolveEntity(modelKey),
        description: content.intro,
        brand: { "@id": entityId(orgKey) },
        manufacturer: { "@id": entityId(orgKey) },
        sameAs: [manufacturerUrl],
        ...(startingPrice
          ? {
              offers: {
                "@type": "Offer",
                price: startingPrice,
                priceCurrency: "USD",
                url: priceSourceUrl,
                seller: { "@id": entityId(orgKey) },
              },
            }
          : {}),
        ...(headlineProps.length > 0 ? { additionalProperty: headlineProps } : {}),
      },
      resolveEntity(orgKey),
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Market Index", item: `${SITE_URL}/market` },
          { "@type": "ListItem", position: 3, name: `${van.maker} ${van.name}`, item: pageUrl },
        ],
      },
      ...(content.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              mainEntity: content.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-20 bg-charcoal-900 min-h-screen">
        <header className="border-b border-charcoal-700 py-16 px-6 bg-gradient-to-b from-charcoal-950 to-charcoal-900">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-xs text-sand-500 mb-6">
              <Link href="/" className="hover:text-earth-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/market" className="hover:text-earth-400 transition-colors">
                Market Index
              </Link>
              <span>/</span>
              <span className="text-sand-400">
                {van.maker} {van.name}
              </span>
            </nav>
            <p className="font-display text-earth-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Model Guide · {van.maker}
            </p>
            <h1 className="font-display font-black text-3xl md:text-5xl text-sand-100 leading-tight mb-4">
              {van.maker} {van.name}
            </h1>
            <p className="text-sand-400 text-sm tracking-wide mb-6">{content.tagline}</p>
            <p className="article-intro text-sand-200 text-lg leading-relaxed border-l-4 border-earth-700 pl-5">
              {content.intro}
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="font-display font-black text-2xl md:text-3xl text-sand-100 mb-5">
            Who is the {van.name} for?
          </h2>
          {content.whoFor.map((para, i) => (
            <p key={i} className="text-sand-300 leading-relaxed my-4">
              {para}
            </p>
          ))}
          <ul className="space-y-2 my-6">
            {van.bestFor.map((item, i) => (
              <li key={i} className="flex gap-3 text-sand-300 text-sm leading-relaxed">
                <span className="text-earth-500 mt-0.5 shrink-0">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display font-black text-2xl md:text-3xl text-sand-100 mt-14 mb-5">
            What are the {van.name}&apos;s verified specifications?
          </h2>
          <p className="text-sand-300 leading-relaxed mb-6">
            Every figure below is the manufacturer&apos;s published number, recorded in our
            fact ledger with its source. Where a figure comes from somewhere else, the
            source column says so.
          </p>
          <div className="border border-charcoal-700 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-charcoal-700">
                {startingPrice && (
                  <tr className="bg-charcoal-800/60">
                    <td className="py-3 px-4 text-sand-500 font-medium w-2/5 align-top">
                      Starting price
                    </td>
                    <td className="py-3 px-4 text-sand-100 font-semibold align-top">
                      ${startingPrice.toLocaleString("en-US")}
                      <span className="block text-xs font-normal text-sand-500 mt-0.5">
                        Base MSRP, before options
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right align-top">
                      <a
                        href={priceSourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-earth-400 hover:text-earth-300 whitespace-nowrap"
                      >
                        {priceIsManufacturer ? `${van.maker} ↗` : "Dealer listing ↗"}
                      </a>
                    </td>
                  </tr>
                )}
                {specRows.map(({ key, label, attr }) => (
                  <tr key={key} className="bg-charcoal-800/30">
                    <td className="py-3 px-4 text-sand-500 font-medium align-top">{label}</td>
                    <td className="py-3 px-4 text-sand-200 align-top">{formatValue(attr)}</td>
                    <td className="py-3 px-4 text-right align-top">
                      <a
                        href={attr.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-earth-400 hover:text-earth-300 whitespace-nowrap"
                      >
                        {isManufacturerSource(attr.sourceType)
                          ? `${van.maker} ↗`
                          : "Dealer listing ↗"}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sand-500 mt-3">
            Specs verified {formatDate(content.verifiedDate)} against {van.maker}&apos;s
            published data.
          </p>
          {dealerSourced.length > 0 && (
            <p className="text-xs text-sand-500 mt-2 leading-relaxed">
              Honesty note: {van.maker} does not publish a figure for{" "}
              {dealerSourced.map((r) => r.label.toLowerCase()).join(", ")}. The value shown
              comes from dealer spec sheets and is labeled as such, never presented as a
              manufacturer figure.
            </p>
          )}
          {ledgerNotes.map((a) => (
            <p key={a.attribute} className="text-xs text-sand-500 mt-2 leading-relaxed">
              {a.note}
            </p>
          ))}

          <h2 className="font-display font-black text-2xl md:text-3xl text-sand-100 mt-14 mb-5">
            What does the {van.name} actually cost?
          </h2>
          <p className="text-sand-300 leading-relaxed">
            <RichText text={content.priceStory} />
          </p>
          <p className="text-sand-300 leading-relaxed my-4">
            {van.priceNote} See where it lands against the rest of the segment in the{" "}
            <Link href="/compare" className="text-earth-400 underline hover:text-earth-300">
              full comparison
            </Link>
            .
          </p>

          <h2 className="font-display font-black text-2xl md:text-3xl text-sand-100 mt-14 mb-6">
            Where does the {van.name} shine, and where does it compromise?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-charcoal-800 border border-charcoal-700 rounded-lg p-6">
              <p className="font-display font-bold text-sm tracking-wider text-earth-400 uppercase mb-4">
                Strengths
              </p>
              <ul className="space-y-3">
                {van.highlights.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sand-300 text-sm leading-relaxed">
                    <span className="text-earth-500 mt-0.5 shrink-0">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-charcoal-800 border border-charcoal-700 rounded-lg p-6">
              <p className="font-display font-bold text-sm tracking-wider text-sand-400 uppercase mb-4">
                Trade-offs
              </p>
              <ul className="space-y-3">
                {van.considerations.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sand-300 text-sm leading-relaxed">
                    <span className="text-sand-500 mt-0.5 shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-display font-black text-2xl md:text-3xl text-sand-100 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {content.faqs.map((faq, i) => (
                <div key={i} className="bg-charcoal-800 border border-charcoal-700 rounded-lg p-5">
                  <h3 className="font-display font-bold text-base text-sand-100 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sand-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-charcoal-700 my-12" />

          <div className="bg-charcoal-800 border border-charcoal-600 rounded-lg p-6 mb-12">
            <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-earth-500 mb-2">
              Ready to Compare?
            </p>
            <h3 className="font-display font-black text-xl text-sand-100 mb-2">
              See the {van.name} against every other Class B.
            </h3>
            <p className="text-sand-400 text-sm mb-4">
              Price, AWD and 4x4 capability, sleeping capacity, cold-weather rating: the
              whole verified pool, side by side.
            </p>
            <Link
              href="/compare"
              className="inline-block px-6 py-3 font-display font-bold text-sm tracking-wider uppercase bg-earth-600 hover:bg-earth-500 text-sand-100 rounded transition-colors"
            >
              Compare Vans &rarr;
            </Link>
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="font-display font-bold text-xs tracking-[0.3em] uppercase text-earth-500 mb-6">
                Keep Reading
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.map((rel) =>
                  rel ? (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group bg-charcoal-800 border border-charcoal-600 hover:border-earth-700 rounded-lg p-5 flex flex-col transition-colors"
                    >
                      <span className="font-display text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded w-fit mb-3 text-sand-400 bg-charcoal-700">
                        {rel.category}
                      </span>
                      <span className="font-display font-bold text-sm text-sand-100 group-hover:text-earth-300 transition-colors leading-snug">
                        {rel.title}
                      </span>
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
