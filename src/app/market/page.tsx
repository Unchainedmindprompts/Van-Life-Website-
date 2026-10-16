import Link from "next/link";
import type { Metadata } from "next";
import { MARKET, MODEL_COUNT, BRAND_COUNT, VERIFIED_COUNT, type MarketBrand } from "@/lib/market";
import { MODEL_PAGE_SLUGS } from "@/lib/model-pages";
import { SITE_URL } from "@/lib/entities";
import CompareRequest from "@/components/CompareRequest";

export const metadata: Metadata = {
  title: "Every Class B Camper Van You Can Buy | Starry Van",
  description:
    "The complete Class B market index: every current factory model and builder camper van, with manufacturer links. Fact-checked models carry full comparisons; request the comparison you want next.",
};

function BrandSection({ brand }: { brand: MarketBrand }) {
  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <h3 className="font-display font-bold text-xl text-sand-100">{brand.brand}</h3>
        <a
          href={brand.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-earth-400 hover:text-earth-300 shrink-0"
        >
          Manufacturer site ↗
        </a>
      </div>
      {brand.note && <p className="text-sm text-sand-500 mb-2">{brand.note}</p>}
      <ul className="divide-y divide-charcoal-700 border-y border-charcoal-700">
        {brand.models.map((m) => (
          <li
            key={m.id}
            className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_180px_170px_130px] items-center gap-2 md:gap-4 py-3"
          >
            <span className="text-sand-200 font-medium">
              {MODEL_PAGE_SLUGS.includes(m.id) ? (
                <Link href={`/models/${m.id}`} className="hover:text-earth-300 underline decoration-charcoal-600 underline-offset-4">
                  {m.name}
                </Link>
              ) : (
                m.name
              )}
            </span>
            <span className="hidden md:block text-sm text-sand-500">
              {m.chassis ? `${m.chassis} chassis` : "Chassis: see manufacturer"}
            </span>
            {m.verified ? (
              <span className="font-display text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded text-earth-300 bg-earth-900/40 border border-earth-700 text-center">
                Full comparison
              </span>
            ) : (
              <span className="font-display text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded text-sand-400 bg-charcoal-700 text-center">
                Listed
              </span>
            )}
            {m.verified ? (
              <Link href="/compare" className="text-sm text-earth-400 hover:text-earth-300 text-right">
                Compare →
              </Link>
            ) : (
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-sand-400 hover:text-sand-300 text-right"
              >
                Manufacturer ↗
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function MarketPage() {
  const factory = MARKET.filter((b) => b.type === "factory");
  const builders = MARKET.filter((b) => b.type === "builder");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/market#webpage`,
        url: `${SITE_URL}/market`,
        name: "Every Class B Camper Van You Can Buy",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/market#list`,
        name: "Class B camper van market index",
        numberOfItems: MODEL_COUNT,
        itemListElement: MARKET.flatMap((b) =>
          b.models.map((m, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: `${b.brand} ${m.name}`,
              brand: { "@type": "Brand", name: b.brand },
              url: b.url,
            },
          }))
        ),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Market Index", item: `${SITE_URL}/market` },
        ],
      },
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
              <span className="text-sand-400">Market Index</span>
            </nav>
            <p className="font-display text-earth-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              The Market Index
            </p>
            <h1 className="font-display font-black text-3xl md:text-5xl text-sand-100 leading-tight mb-5">
              Every Class B camper van you can buy
            </h1>
            <p className="text-sand-300 text-lg leading-relaxed max-w-3xl">
              {MODEL_COUNT} current models from {BRAND_COUNT} factory brands and builders,
              in one place. {VERIFIED_COUNT} of them carry our full fact-checked comparison,
              built from a documented ledger of manufacturer sources. The rest are listed
              with a link to the manufacturer, and they join the verification queue in the
              order readers request them.
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-6 text-sm text-sand-400 border border-charcoal-700 rounded-lg p-5 mb-12 bg-charcoal-800/50">
            <p>
              <span className="font-display text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded text-earth-300 bg-earth-900/40 border border-earth-700 mr-2">
                Full comparison
              </span>
              Fact-checked against manufacturer sources. In the{" "}
              <Link href="/compare" className="text-earth-400 underline">
                comparison tool
              </Link>{" "}
              and the{" "}
              <Link href="/find-my-van" className="text-earth-400 underline">
                match quiz
              </Link>
              .
            </p>
            <p>
              <span className="font-display text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded text-sand-400 bg-charcoal-700 mr-2">
                Listed
              </span>
              On sale now, not yet fact-checked. We publish no specifications for listed
              models, only the basics and the manufacturer&apos;s own page.
            </p>
          </div>

          <h2 className="font-display font-black text-2xl md:text-3xl text-sand-100 mb-8">
            Factory brands
          </h2>
          {factory.map((b) => (
            <BrandSection key={b.brand} brand={b} />
          ))}

          <h2 className="font-display font-black text-2xl md:text-3xl text-sand-100 mt-16 mb-8">
            Builders and production upfitters
          </h2>
          {builders.map((b) => (
            <BrandSection key={b.brand} brand={b} />
          ))}

          <h2 className="font-display font-black text-2xl md:text-3xl text-sand-100 mt-16 mb-4">
            Want a comparison that isn&apos;t here yet?
          </h2>
          <p className="text-sand-300 leading-relaxed mb-6 max-w-3xl">
            Pick any two vans from the index. If both already have full comparisons we will
            send you straight there. If not, your request joins the queue, and requests are
            how we decide which model gets the full fact-ledger treatment next.
          </p>
          <CompareRequest />

          <p className="text-sm text-sand-500 leading-relaxed mt-12">
            Deliberately excluded: discontinued models such as the Winnebago Boldt and
            Pleasure-Way Tofino (covered as used buys in our{" "}
            <Link href="/blog" className="text-earth-400 underline">
              articles
            </Link>
            ), and Class B+ models that are marketed as vans but built on cutaway chassis.
            How we verify:{" "}
            <Link href="/about" className="text-earth-400 underline">
              the rule this site runs on
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
