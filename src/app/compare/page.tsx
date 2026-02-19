import type { Metadata } from "next";
import Link from "next/link";
import { vans } from "@/lib/vans";
import type { CapabilityLevel, BuildQuality } from "@/lib/vans";

export const metadata: Metadata = {
  title: "Compare Class B Vans | Van Life",
  description:
    "Side-by-side comparison of the top Class B adventure vans — Sprinter conversions, Winnebago Boldt, Airstream Interstate, Storyteller Overland, and more.",
};

const offRoadColors: Record<CapabilityLevel, string> = {
  "Low": "text-red-400 bg-red-950/40",
  "Moderate": "text-yellow-400 bg-yellow-950/40",
  "High": "text-forest-400 bg-forest-900/40",
  "Very High": "text-forest-400 bg-forest-900/60",
};

const buildQualityColors: Record<BuildQuality, string> = {
  "Budget": "text-sand-400",
  "Mid-Range": "text-sand-300",
  "Premium": "text-earth-400",
  "Luxury": "text-yellow-400",
};

export default function ComparePage() {
  return (
    <div className="pt-20 bg-charcoal-900 min-h-screen">
      {/* Page Header */}
      <section className="py-16 px-6 bg-charcoal-950 border-b border-charcoal-700">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-earth-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Side-by-Side
          </p>
          <h1 className="font-display font-black text-4xl md:text-5xl text-sand-100 leading-tight mb-4">
            Compare Class B Vans
          </h1>
          <p className="text-sand-400 text-lg max-w-2xl leading-relaxed">
            The most popular Class B adventure van platforms — compared across the
            specs that actually matter: capability, price, off-road readiness, and
            build quality.
          </p>
        </div>
      </section>

      {/* Van Cards Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-xs tracking-[0.3em] uppercase text-earth-500 mb-8">
            All Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {vans.map((van) => (
              <article
                key={van.id}
                className="bg-charcoal-800 border border-charcoal-600 rounded-lg overflow-hidden hover:border-earth-700 transition-colors flex flex-col"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-charcoal-700">
                  <div className="flex items-start justify-between mb-1">
                    <p className="font-display text-[10px] font-bold tracking-widest uppercase text-earth-500">
                      {van.maker}
                    </p>
                    <span
                      className={`font-display text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded ${offRoadColors[van.offRoadCapability]}`}
                    >
                      {van.offRoadCapability} off-road
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-sand-100">
                    {van.name}
                  </h3>
                  <p className="text-sand-400 text-sm mt-1">{van.chassis}</p>
                </div>

                {/* Key Specs */}
                <div className="p-6 grid grid-cols-2 gap-4 border-b border-charcoal-700">
                  <div>
                    <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-1">
                      Price Range
                    </p>
                    <p className="text-earth-300 font-semibold text-sm">{van.priceRange}</p>
                  </div>
                  <div>
                    <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-1">
                      4x4
                    </p>
                    <p className={`font-semibold text-sm ${van.has4x4 ? "text-forest-400" : "text-sand-400"}`}>
                      {van.has4x4 ? "Available" : "Not Available"}
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-1">
                      Sleeps
                    </p>
                    <p className="text-sand-200 font-semibold text-sm">{van.sleepingCapacity}</p>
                  </div>
                  <div>
                    <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-1">
                      Build Quality
                    </p>
                    <p className={`font-semibold text-sm ${buildQualityColors[van.buildQuality]}`}>
                      {van.buildQuality}
                    </p>
                  </div>
                </div>

                {/* Best For */}
                <div className="p-6 border-b border-charcoal-700 flex-1">
                  <p className="font-display text-[10px] font-bold tracking-widest uppercase text-charcoal-600 mb-3">
                    Best For
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {van.bestFor.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-sand-300 bg-charcoal-700 border border-charcoal-600 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="p-6 border-b border-charcoal-700">
                  <p className="font-display text-[10px] font-bold tracking-widest uppercase text-earth-600 mb-3">
                    Highlights
                  </p>
                  <ul className="space-y-1.5">
                    {van.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-sand-300">
                        <span className="text-earth-500 mt-0.5 shrink-0">+</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Considerations */}
                <div className="p-6">
                  <p className="font-display text-[10px] font-bold tracking-widest uppercase text-sand-400/50 mb-3">
                    Considerations
                  </p>
                  <ul className="space-y-1.5">
                    {van.considerations.map((c) => (
                      <li key={c} className="flex gap-2 text-sm text-sand-400">
                        <span className="text-charcoal-600 mt-0.5 shrink-0">–</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full Comparison Table */}
      <section className="py-16 px-6 bg-charcoal-950 border-t border-charcoal-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-xs tracking-[0.3em] uppercase text-earth-500 mb-2">
            Quick Reference
          </h2>
          <h3 className="font-display font-black text-2xl md:text-3xl text-sand-100 mb-10">
            All Models at a Glance
          </h3>

          <div className="overflow-x-auto rounded-lg border border-charcoal-700">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="bg-charcoal-800 border-b border-charcoal-700">
                  <th className="text-left p-4 font-display text-[10px] font-bold tracking-widest uppercase text-earth-500">
                    Model
                  </th>
                  <th className="text-left p-4 font-display text-[10px] font-bold tracking-widest uppercase text-earth-500">
                    Price Range
                  </th>
                  <th className="text-left p-4 font-display text-[10px] font-bold tracking-widest uppercase text-earth-500">
                    4x4
                  </th>
                  <th className="text-left p-4 font-display text-[10px] font-bold tracking-widest uppercase text-earth-500">
                    Off-Road
                  </th>
                  <th className="text-left p-4 font-display text-[10px] font-bold tracking-widest uppercase text-earth-500">
                    Sleeps
                  </th>
                  <th className="text-left p-4 font-display text-[10px] font-bold tracking-widest uppercase text-earth-500">
                    Build Quality
                  </th>
                  <th className="text-left p-4 font-display text-[10px] font-bold tracking-widest uppercase text-earth-500">
                    Chassis
                  </th>
                </tr>
              </thead>
              <tbody>
                {vans.map((van, i) => (
                  <tr
                    key={van.id}
                    className={`border-b border-charcoal-700 last:border-b-0 ${
                      i % 2 === 0 ? "bg-charcoal-900/50" : "bg-charcoal-800/30"
                    }`}
                  >
                    <td className="p-4">
                      <p className="font-display font-bold text-sm text-sand-100">{van.name}</p>
                      <p className="text-xs text-sand-400">{van.maker}</p>
                    </td>
                    <td className="p-4 text-sm text-earth-300 font-semibold">{van.priceRange}</td>
                    <td className="p-4">
                      <span
                        className={`inline-block text-xs font-bold px-2 py-0.5 rounded ${
                          van.has4x4
                            ? "text-forest-400 bg-forest-900/40"
                            : "text-sand-500 bg-charcoal-700"
                        }`}
                      >
                        {van.has4x4 ? "Yes" : "No"}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-block text-xs font-bold px-2 py-0.5 rounded ${offRoadColors[van.offRoadCapability]}`}
                      >
                        {van.offRoadCapability}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-sand-200">{van.sleepingCapacity}</td>
                    <td className="p-4">
                      <span className={`text-sm font-semibold ${buildQualityColors[van.buildQuality]}`}>
                        {van.buildQuality}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-sand-400">{van.chassis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-charcoal-900 text-center">
        <p className="font-display text-earth-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
          Not Sure Yet?
        </p>
        <h2 className="font-display font-black text-3xl md:text-4xl text-sand-100 mb-6">
          Let us match you to the right van.
        </h2>
        <p className="text-sand-400 text-lg max-w-xl mx-auto mb-8">
          Our questionnaire — coming soon — will ask about your travel style, camping habits,
          and budget to recommend the perfect platform.
        </p>
        <Link
          href="/blog"
          className="inline-block px-8 py-4 font-display font-bold text-sm tracking-widest uppercase border border-earth-600 hover:bg-earth-600 text-earth-400 hover:text-sand-100 rounded transition-colors"
        >
          Read the Van Life Blog
        </Link>
      </section>
    </div>
  );
}
