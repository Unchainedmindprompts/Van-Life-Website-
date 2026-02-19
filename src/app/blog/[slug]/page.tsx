import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { postContent } from "@/lib/post-content";
import type { ContentBlock } from "@/lib/post-content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Van Life`,
    description: post.schema.description,
    keywords: post.schema.keywords,
    openGraph: {
      title: post.title,
      description: post.schema.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <div className="mt-10 mb-4">
          <h2 className="font-display font-black text-2xl text-sand-100">
            {block.heading}
          </h2>
          {block.text && (
            <p className="text-sand-300 leading-relaxed mt-3">{block.text}</p>
          )}
        </div>
      );

    case "h3":
      return (
        <div className="mt-7 mb-3">
          <h3 className="font-display font-bold text-lg text-sand-200">
            {block.heading}
          </h3>
          {block.text && (
            <p className="text-sand-300 leading-relaxed mt-2">{block.text}</p>
          )}
        </div>
      );

    case "p":
      return (
        <p className="text-sand-300 leading-relaxed my-4">{block.text}</p>
      );

    case "ul":
      return (
        <div className="my-4">
          {block.heading && (
            <p className="font-display font-bold text-sm tracking-wider text-earth-400 uppercase mb-2">
              {block.heading}
            </p>
          )}
          <ul className="space-y-2">
            {block.items?.map((item, i) => (
              <li key={i} className="flex gap-3 text-sand-300 text-sm leading-relaxed">
                <span className="text-earth-500 mt-1 shrink-0">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case "ol":
      return (
        <div className="my-4">
          {block.heading && (
            <p className="font-display font-bold text-sm tracking-wider text-earth-400 uppercase mb-2">
              {block.heading}
            </p>
          )}
          <ol className="space-y-2 list-none">
            {block.items?.map((item, i) => (
              <li key={i} className="flex gap-3 text-sand-300 text-sm leading-relaxed">
                <span className="font-display font-bold text-earth-500 shrink-0 w-5">
                  {i + 1}.
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      );

    case "callout":
      return (
        <div className="my-6 border-l-4 border-earth-600 bg-earth-900/20 rounded-r-lg px-5 py-4">
          <p className="text-sand-200 text-sm leading-relaxed italic">{block.text}</p>
        </div>
      );

    case "faq-group":
      return (
        <div
          className="mt-10"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <h2 className="font-display font-black text-xl text-sand-100 mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {block.faqs?.map((faq, i) => (
              <div
                key={i}
                className="bg-charcoal-800 border border-charcoal-700 rounded-lg p-5"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3
                  className="font-display font-bold text-base text-sand-100 mb-2"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-sand-400 text-sm leading-relaxed" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

const categoryColors: Record<string, string> = {
  "Buying Guide": "text-earth-400 bg-earth-900/50",
  "Van Comparison": "text-forest-400 bg-forest-900/40",
  "Off-Road": "text-yellow-400 bg-yellow-950/40",
  "Van Review": "text-sand-300 bg-charcoal-700",
  "Tech Deep Dive": "text-blue-400 bg-blue-950/40",
  "Systems & Gear": "text-sand-400 bg-charcoal-700",
};

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);
  const content = postContent[params.slug];

  if (!post || !content) notFound();

  const related = content.relatedSlugs
    .map((s) => posts.find((p) => p.slug === s))
    .filter(Boolean);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.schema.headline,
    description: post.schema.description,
    datePublished: post.date,
    keywords: post.schema.keywords.join(", "),
    author: {
      "@type": "Organization",
      name: "Van Life",
    },
    publisher: {
      "@type": "Organization",
      name: "Van Life",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-20 bg-charcoal-900 min-h-screen">
        {/* Header */}
        <header className="bg-charcoal-950 border-b border-charcoal-700 py-12 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-sand-500 mb-6">
              <Link href="/" className="hover:text-earth-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-earth-400 transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-sand-400 truncate max-w-[200px]">{post.title}</span>
            </nav>

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

            <h1 className="font-display font-black text-3xl md:text-4xl text-sand-100 leading-tight mb-4">
              {post.title}
            </h1>
            <time dateTime={post.date} className="text-sm text-sand-500">
              {formatDate(post.date)}
            </time>
          </div>
        </header>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Intro */}
          <p className="text-sand-200 text-lg leading-relaxed border-l-4 border-earth-700 pl-5 mb-8">
            {content.intro}
          </p>

          {/* Content blocks */}
          <article
            itemScope
            itemType="https://schema.org/Article"
            className="prose-custom"
          >
            <meta itemProp="headline" content={post.schema.headline} />
            <meta itemProp="description" content={post.schema.description} />
            <meta itemProp="datePublished" content={post.date} />

            {content.blocks.map((block, i) => (
              <RenderBlock key={i} block={block} />
            ))}
          </article>

          {/* Divider */}
          <hr className="border-charcoal-700 my-12" />

          {/* Compare CTA */}
          <div className="bg-charcoal-800 border border-charcoal-600 rounded-lg p-6 mb-12">
            <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-earth-500 mb-2">
              Ready to Compare?
            </p>
            <h3 className="font-display font-black text-xl text-sand-100 mb-2">
              See all Class B vans side-by-side.
            </h3>
            <p className="text-sand-400 text-sm mb-4">
              Price, 4x4 availability, off-road capability, build quality — all in one place.
            </p>
            <Link
              href="/compare"
              className="inline-block px-6 py-3 font-display font-bold text-sm tracking-wider uppercase bg-earth-600 hover:bg-earth-500 text-sand-100 rounded transition-colors"
            >
              Compare Vans &rarr;
            </Link>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div>
              <h2 className="font-display font-bold text-xs tracking-[0.3em] uppercase text-earth-500 mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.map((rel) =>
                  rel ? (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group bg-charcoal-800 border border-charcoal-600 hover:border-earth-700 rounded-lg p-5 flex flex-col transition-colors"
                    >
                      <span
                        className={`font-display text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded w-fit mb-3 ${
                          categoryColors[rel.category] ?? "text-sand-400 bg-charcoal-700"
                        }`}
                      >
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
