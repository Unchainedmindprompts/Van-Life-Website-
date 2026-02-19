import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Van Life | Find Your Perfect Class B Adventure Van",
  description:
    "Discover and compare Class B adventure vans with our consultative guide. From Sprinter conversions to the Winnebago Boldt — find the van that fits your life.",
};

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/DSC_0795.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/50 to-charcoal-950/90" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-display text-earth-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6">
            Class B Adventure Vans
          </p>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-sand-100 leading-[1.05] tracking-tight mb-6">
            Find Your
            <br />
            <span className="text-earth-400">Perfect Van.</span>
          </h1>
          <p className="text-sand-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Not just a purchase — a lifestyle shift. We help you navigate the Class B
            van world with honest, consultative guidance so you buy the right rig the
            first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/compare"
              className="px-8 py-4 font-display font-bold text-sm tracking-widest uppercase bg-earth-600 hover:bg-earth-500 text-sand-100 rounded transition-colors"
            >
              Compare Vans
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 font-display font-bold text-sm tracking-widest uppercase border border-sand-300/40 hover:border-earth-400 text-sand-200 hover:text-earth-300 rounded transition-colors"
            >
              Read the Blog
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-sand-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── Intro ────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-charcoal-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-earth-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Our Approach
          </p>
          <h2 className="font-display font-black text-3xl md:text-4xl text-sand-100 leading-tight mb-6">
            The Class B market is crowded.
            <br />
            We help you cut through it.
          </h2>
          <p className="text-sand-300 text-lg leading-relaxed">
            From Mercedes Sprinter conversions to purpose-built platforms like the
            Winnebago Boldt and Airstream Interstate — every van has a different
            answer for how you live. We break down the real differences: chassis
            options, 4x4 availability, off-road suspension, build quality, and
            long-term ownership costs. No fluff, no dealer spin.
          </p>
        </div>
      </section>

      {/* ─── Feature Cards ────────────────────────────────────── */}
      <section className="py-20 px-6 bg-charcoal-800">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-earth-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center">
            What We Offer
          </p>
          <h2 className="font-display font-black text-3xl md:text-4xl text-sand-100 text-center mb-14">
            Everything You Need to Decide.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 — Compare Vans */}
            <div className="group bg-charcoal-700 border border-charcoal-600 rounded-lg p-8 flex flex-col hover:border-earth-600 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <svg className="w-8 h-8 text-earth-500 group-hover:text-earth-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
                <span className="font-display text-[10px] font-bold tracking-widest uppercase text-earth-600 bg-earth-900/60 px-2 py-1 rounded">
                  Compare
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-sand-100 mb-3">Compare Vans</h3>
              <p className="text-sand-400 text-sm leading-relaxed flex-1 mb-8">
                Side-by-side breakdowns of the most popular Class B adventure vans — price, capability,
                off-road specs, sleep setup, and build quality.
              </p>
              <Link
                href="/compare"
                className="inline-block w-fit text-sm font-display font-bold tracking-wider uppercase text-earth-400 hover:text-earth-300 transition-colors"
              >
                See Comparisons &rarr;
              </Link>
            </div>

            {/* Card 2 — Find Your Match */}
            <div className="group bg-charcoal-700 border border-charcoal-600 rounded-lg p-8 flex flex-col hover:border-earth-600 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <svg className="w-8 h-8 text-earth-500 group-hover:text-earth-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="font-display text-[10px] font-bold tracking-widest uppercase text-earth-600 bg-earth-900/60 px-2 py-1 rounded">
                  Questionnaire
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-sand-100 mb-3">Find Your Match</h3>
              <p className="text-sand-400 text-sm leading-relaxed flex-1 mb-8">
                Answer five questions about how you live, travel, and camp — and we&apos;ll match you
                to the ideal Class B platform for your adventure style.
              </p>
              <Link
                href="/find-my-van"
                className="inline-block w-fit text-sm font-display font-bold tracking-wider uppercase text-earth-400 hover:text-earth-300 transition-colors"
              >
                Take the Quiz &rarr;
              </Link>
            </div>

            {/* Card 3 — Van Life Blog */}
            <div className="group bg-charcoal-700 border border-charcoal-600 rounded-lg p-8 flex flex-col hover:border-earth-600 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <svg className="w-8 h-8 text-earth-500 group-hover:text-earth-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="font-display text-[10px] font-bold tracking-widest uppercase text-earth-600 bg-earth-900/60 px-2 py-1 rounded">
                  Blog
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-sand-100 mb-3">Van Life Blog</h3>
              <p className="text-sand-400 text-sm leading-relaxed flex-1 mb-8">
                In-depth guides, buying advice, and real-world van life stories. Built for SEO — every
                post is structured to answer the questions you&apos;re actually searching.
              </p>
              <Link
                href="/blog"
                className="inline-block w-fit text-sm font-display font-bold tracking-wider uppercase text-earth-400 hover:text-earth-300 transition-colors"
              >
                Read the Blog &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Lifestyle Strip ──────────────────────────────────── */}
      <section
        className="relative py-28 px-6 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-charcoal-950/78" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl md:text-5xl text-sand-100 leading-tight mb-6">
            The right van changes{" "}
            <span className="text-earth-400">everything.</span>
          </h2>
          <p className="text-sand-300 text-lg leading-relaxed mb-10">
            Weekend warrior or full-timer, off-grid overlander or coastal cruiser —
            there is a Class B built specifically for the way you want to move through
            the world.
          </p>
          <Link
            href="/find-my-van"
            className="inline-block px-8 py-4 font-display font-bold text-sm tracking-widest uppercase bg-earth-600 hover:bg-earth-500 text-sand-100 rounded transition-colors"
          >
            Find My Van
          </Link>
        </div>
      </section>
    </>
  );
}
