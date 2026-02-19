import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Van Life Blog | Class B Van Guides, Reviews & Buying Advice",
  description:
    "In-depth Class B van guides, model reviews, and real buying advice. Built for AEO and GEO — every post is structured to answer the questions you're actually searching.",
};

const categoryColors: Record<string, string> = {
  "Buying Guide": "text-earth-400 bg-earth-900/50",
  "Van Comparison": "text-forest-400 bg-forest-900/40",
  "Off-Road": "text-yellow-400 bg-yellow-950/40",
  "Van Review": "text-sand-300 bg-charcoal-700",
  "Tech Deep Dive": "text-blue-400 bg-blue-950/40",
  "Systems & Gear": "text-sand-400 bg-charcoal-700",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <div className="pt-20 bg-charcoal-900 min-h-screen">
      {/* Page Header */}
      <section
        className="relative py-24 px-6 border-b border-charcoal-700 overflow-hidden"
        style={{
          backgroundImage: "url('/IMG_1329.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center 50%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/75 via-charcoal-950/60 to-charcoal-950/85" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="font-display text-earth-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Van Life Blog
          </p>
          <h1 className="font-display font-black text-4xl md:text-5xl text-sand-100 leading-tight mb-4">
            Guides, Reviews & Buying Advice
          </h1>
          <p className="text-sand-300 text-lg max-w-2xl leading-relaxed">
            Deep dives written to actually help you decide — not to sell you something.
            Schema-structured for search, written for humans.
          </p>

          {/* Category Filter (visual only for now) */}
          <div className="flex flex-wrap gap-2 mt-8">
            <button className="px-3 py-1.5 text-xs font-display font-bold tracking-wider uppercase text-sand-100 bg-earth-600 rounded transition-colors">
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-3 py-1.5 text-xs font-display font-bold tracking-wider uppercase text-sand-300 bg-charcoal-700 hover:bg-charcoal-600 border border-charcoal-600 rounded transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-xs tracking-[0.3em] uppercase text-earth-500 mb-8">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {featured.map((post) => (
              <article
                key={post.slug}
                className="group bg-charcoal-800 border border-charcoal-600 rounded-lg overflow-hidden hover:border-earth-700 transition-colors flex flex-col"
                itemScope
                itemType="https://schema.org/Article"
              >
                {/* Schema microdata */}
                <meta itemProp="headline" content={post.schema.headline} />
                <meta itemProp="description" content={post.schema.description} />
                <meta itemProp="datePublished" content={post.date} />

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`font-display text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded ${
                        categoryColors[post.category] ?? "text-sand-400 bg-charcoal-700"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-sand-500">{post.readTime} read</span>
                  </div>

                  <h3 className="font-display font-black text-xl md:text-2xl text-sand-100 leading-snug mb-3 group-hover:text-earth-300 transition-colors" itemProp="name">
                    {post.title}
                  </h3>

                  <p className="text-sand-400 text-sm leading-relaxed flex-1 mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <time
                      dateTime={post.date}
                      className="text-xs text-sand-500"
                      itemProp="datePublished"
                    >
                      {formatDate(post.date)}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-display font-bold tracking-wider uppercase text-earth-400 hover:text-earth-300 transition-colors"
                    >
                      Read &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Rest of Posts */}
          <h2 className="font-display font-bold text-xs tracking-[0.3em] uppercase text-earth-500 mb-8">
            More Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group bg-charcoal-800 border border-charcoal-600 rounded-lg overflow-hidden hover:border-earth-700 transition-colors flex flex-col"
                itemScope
                itemType="https://schema.org/Article"
              >
                <meta itemProp="headline" content={post.schema.headline} />
                <meta itemProp="description" content={post.schema.description} />
                <meta itemProp="datePublished" content={post.date} />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`font-display text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded ${
                        categoryColors[post.category] ?? "text-sand-400 bg-charcoal-700"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-sand-500">{post.readTime} read</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-sand-100 leading-snug mb-3 group-hover:text-earth-300 transition-colors" itemProp="name">
                    {post.title}
                  </h3>

                  <p className="text-sand-400 text-sm leading-relaxed flex-1 mb-5">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <time dateTime={post.date} className="text-xs text-sand-500">
                      {formatDate(post.date)}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-display font-bold tracking-wider uppercase text-earth-400 hover:text-earth-300 transition-colors"
                    >
                      Read &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Strip */}
      <section className="py-16 px-6 bg-charcoal-950 border-t border-charcoal-700">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-earth-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            More Coming Soon
          </p>
          <h2 className="font-display font-black text-2xl md:text-3xl text-sand-100 mb-4">
            New guides dropping regularly.
          </h2>
          <p className="text-sand-400 mb-8">
            We&apos;re building out the most complete resource for Class B buyers on the internet.
            Check back often — or compare vans now while you wait.
          </p>
          <Link
            href="/compare"
            className="inline-block px-8 py-4 font-display font-bold text-sm tracking-widest uppercase bg-earth-600 hover:bg-earth-500 text-sand-100 rounded transition-colors"
          >
            Compare Vans
          </Link>
        </div>
      </section>
    </div>
  );
}
