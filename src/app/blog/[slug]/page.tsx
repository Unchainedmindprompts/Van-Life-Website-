import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { postContent } from "@/lib/post-content";
import { SITE_URL, resolveEntity } from "@/lib/entities";
import type { ContentBlock } from "@/lib/post-content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Starry Van`,
    description: post.schema.description,
    keywords: post.schema.keywords,
    openGraph: {
      title: post.title,
      description: post.schema.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: [{ url: post.image.src, alt: post.image.alt }],
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

/* Renders text with inline markdown-style links:
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

function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <div className="mt-10 mb-4">
          <h2 className="font-display font-black text-2xl text-sand-100">
            {block.heading}
          </h2>
          {block.text && (
            <p className="text-sand-300 leading-relaxed mt-3"><RichText text={block.text} /></p>
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
            <p className="text-sand-300 leading-relaxed mt-2"><RichText text={block.text} /></p>
          )}
        </div>
      );

    case "p":
      return (
        <p className="text-sand-300 leading-relaxed my-4"><RichText text={block.text} /></p>
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
                <span><RichText text={item} /></span>
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
                <span><RichText text={item} /></span>
              </li>
            ))}
          </ol>
        </div>
      );

    case "callout":
      return (
        <div className="my-6 border-l-4 border-earth-600 bg-earth-900/20 rounded-r-lg px-5 py-4">
          <p className="text-sand-200 text-sm leading-relaxed italic"><RichText text={block.text} /></p>
        </div>
      );

    case "faq-group":
      return (
        <div className="mt-10">
          <h2 className="font-display font-black text-xl text-sand-100 mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {block.faqs?.map((faq, i) => (
              <div
                key={i}
                className="bg-charcoal-800 border border-charcoal-700 rounded-lg p-5"
              >
                <h3 className="font-display font-bold text-base text-sand-100 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sand-400 text-sm leading-relaxed">
                  <RichText text={faq.answer} />
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    case "image":
      return (
        <figure className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt ?? ""}
            className="w-full rounded-lg border border-charcoal-700"
            loading="lazy"
          />
          {block.caption && (
            <figcaption className="text-sand-500 text-xs mt-2 text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  const content = postContent[slug];

  if (!post || !content) notFound();

  const related = content.relatedSlugs
    .map((s) => posts.find((p) => p.slug === s))
    .filter(Boolean);

  // ── Structured data: one @graph generator for every article ──
  // WebPage + BlogPosting + ImageObject + BreadcrumbList, plus an FAQPage
  // generated from the article's own FAQ section when it has one. The
  // author is the site's Person entity; about/mentions resolve from the
  // entity registry (src/lib/entities.ts). Single source of truth: the
  // visible content. No per-article hand-written schema.
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const faqs = content.blocks.find((b) => b.type === "faq-group")?.faqs ?? [];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: post.title,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        primaryImageOfPage: { "@id": `${pageUrl}#image` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#article` },
      },
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        headline: post.schema.headline,
        description: post.schema.description,
        image: { "@id": `${pageUrl}#image` },
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        author: { "@id": `${SITE_URL}/#mark-abplanalp` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: { "@id": pageUrl },
        keywords: post.schema.keywords.join(", "),
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".article-intro"],
        },
        about: post.about.map(resolveEntity),
        ...(post.mentions.length > 0
          ? { mentions: post.mentions.map(resolveEntity) }
          : {}),
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#image`,
        url: `${SITE_URL}${post.image.src}`,
        caption: post.image.caption,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
        ],
      },
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ]
        : []),
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#mark-abplanalp`,
        name: "Mark Abplanalp",
        url: `${SITE_URL}/about`,
        jobTitle: "Class B camper van owner and buyer's guide author",
        homeLocation: { "@type": "Place", name: "Post Falls, Idaho" },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Starry Van",
        url: SITE_URL,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Starry Van",
        publisher: { "@id": `${SITE_URL}/#organization` },
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
        {/* Header: solid background, title never sits on top of the hero image.
            The hero renders as a full figure below the header (see below), so
            any image, photo or data chart, displays whole and legible. */}
        <header className="relative border-b border-charcoal-700 py-16 px-6 bg-gradient-to-b from-charcoal-950 to-charcoal-900">
          <div className="relative z-10 max-w-3xl mx-auto">
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
            {post.updated && post.updated !== post.date && (
              <span className="text-sm text-sand-500">
                {" "}
                · Updated{" "}
                <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </span>
            )}
          </div>
        </header>

        {/* Hero figure: the post image shown whole, never cropped, never
            behind text. Wider than the text column so charts stay legible. */}
        <figure className="max-w-5xl mx-auto px-6 pt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image.src}
            alt={post.image.alt}
            className="w-full h-auto rounded-lg border border-charcoal-700"
          />
          {post.image.caption && (
            <figcaption className="text-xs text-sand-500 mt-2">
              {post.image.caption}
            </figcaption>
          )}
        </figure>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Intro */}
          <p className="article-intro text-sand-200 text-lg leading-relaxed border-l-4 border-earth-700 pl-5 mb-8">
            {content.intro}
          </p>

          {/* Content blocks */}
          <article className="prose-custom">

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
              Price, AWD and 4x4 capability, sleeping capacity, build quality — all in one place.
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
