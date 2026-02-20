import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { postContent } from "@/lib/post-content";
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

  // JSON-LD structured data — comprehensive schema for AEO/GEO optimization
  const isSevenQuestions = slug === "class-b-van-buying-guide";

  const jsonLd = isSevenQuestions
    ? {
        "@context": "https://schema.org",
        "@graph": [
          // ── Article ──────────────────────────────────────────
          {
            "@type": "Article",
            "@id": "https://vanlifewebsite.com/blog/class-b-van-buying-guide#article",
            headline:
              "Class B Van Buying: The 7 Questions You Must Answer Before You Spend a Dime",
            description:
              "The 7 critical questions every Class B campervan buyer must answer before purchasing — covering use case, custom vs manufacturer, 4x4 capability, converter quality, real budget with hidden costs, off-grid power and water, and long-term ownership.",
            datePublished: "2025-02-15",
            dateModified: "2025-02-15",
            wordCount: 2180,
            inLanguage: "en-US",
            isAccessibleForFree: true,
            keywords:
              "Class B van buying guide, campervan buying questions, van life buying mistakes, Sprinter van purchase, custom van builder vs manufacturer, 4x4 van worth it, van converter quality, van life hidden costs, off-grid van power system, Class B van ownership",
            author: {
              "@type": "Person",
              "@id": "https://vanlifewebsite.com/#mark-abplanalp",
              name: "Mark Abplanalp",
            },
            publisher: {
              "@type": "Organization",
              name: "Van Life Website",
              url: "https://vanlifewebsite.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://vanlifewebsite.com/blog/class-b-van-buying-guide",
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [
                "article h2",
                "article h3",
              ],
              xpath: [
                "/html/body//article//h2",
                "/html/body//article//h3",
              ],
            },
            about: [
              { "@type": "Thing", name: "Class B Campervan" },
              { "@type": "Thing", name: "Van Life" },
              { "@type": "Thing", name: "Sprinter Van" },
              { "@type": "Thing", name: "RV Buying Guide" },
            ],
          },

          // ── Person ───────────────────────────────────────────
          {
            "@type": "Person",
            "@id": "https://vanlifewebsite.com/#mark-abplanalp",
            name: "Mark Abplanalp",
            description:
              "Class B van expert, owner of a 2013 Sportsmobile 170 EXT Sprinter van, and longtime explorer of the American West. Mark lives in Post Falls, Idaho with his wife and their rescue dog Roxy. He is committed to helping buyers navigate the Class B van market with honest, experience-based guidance.",
            homeLocation: {
              "@type": "Place",
              name: "Post Falls, Idaho",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Post Falls",
                addressRegion: "Idaho",
                addressCountry: "US",
              },
            },
            knowsAbout: [
              "Class B campervans",
              "Sprinter van conversions",
              "Van life lifestyle",
              "Off-road van capability",
              "Van electrical systems",
              "Custom van builders",
              "RV manufacturer comparison",
            ],
          },

          // ── FAQPage ──────────────────────────────────────────
          {
            "@type": "FAQPage",
            "@id": "https://vanlifewebsite.com/blog/class-b-van-buying-guide#faq",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I decide how I'll actually use my Class B van?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Be specific about your travel style before you shop. Define whether you're solo or a couple, whether you bring pets or bikes, whether you need to work remotely, and whether you'll camp at developed campgrounds with hookups or boondock on forest roads for a week at a time. Your use case determines your floor plan, electrical requirements, storage needs, and budget. A weekend warrior who camps at state parks twice a month has completely different needs than a couple planning to full-time for two years in the backcountry.",
                },
              },
              {
                "@type": "Question",
                name: "Should I buy from a custom van builder or an RV manufacturer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Custom builders like Outside Van or Storyteller Overland offer high personalization and often superior craftsmanship, but with 12-18 month lead times and limited service networks. RV manufacturers like Winnebago, Airstream, and Thor offer established dealer networks, standardized builds, financing options, and warranty infrastructure. Major manufacturers now offer factory 4x4 conversions, Fox suspension upgrades, and off-road packages that used to require a boutique builder — blurring the line significantly.",
                },
              },
              {
                "@type": "Question",
                name: "Is 4x4 worth the cost on a Class B campervan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "4x4 adds $10,000 to $20,000 or more and increases weight and mechanical complexity. It sits unused 95% of the time for many buyers. If you camp at developed campgrounds and drive graded roads, you don't need it. If you chase dispersed camping on unmaintained forest roads, run routes in shoulder season, or overland into genuinely remote terrain, 4x4 stops being a luxury and becomes a safety decision. Don't let marketing make this choice for you.",
                },
              },
              {
                "@type": "Question",
                name: "How do I evaluate a van converter's build quality before buying?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ask for a detailed build sheet, customer references (and actually call them), specifics about the electrical system design and who engineered it, and exactly what the warranty covers including the claims process. Premium builders with years of documented builds answer these questions without hesitation. There are three quality tiers: premium builders with track records and real warranties, mid-tier regional shops with varying quality, and budget converters that look great in photos but fall apart under real use with poorly designed electrical systems, inadequate insulation, and warranties that evaporate.",
                },
              },
              {
                "@type": "Question",
                name: "What hidden costs should I budget for when buying a Class B van?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Add 20-30% to your purchase price. Insurance on a $150,000 Class B varies significantly and some policies don't cover full-time living. Mercedes Sprinter maintenance is expensive and rural service is difficult. Climate-controlled storage runs $200-$400/month if not full-timing. Almost every buyer adds post-purchase upgrades: solar capacity, mattress, bike rack, rooftop gear, communication devices. Depreciation is real — Class B vans hold value better than larger RVs, but they're not investments. Know your exit strategy before you buy.",
                },
              },
              {
                "@type": "Question",
                name: "What should I look for in a van's off-grid power and water system?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The electrical system is the heart of a livable van build — it determines whether you can run your coffee maker, charge laptops, power your refrigerator, and keep medical devices running for days without hookups. Ask about battery capacity in usable amp hours, solar input wattage, shore power charging capability, and inverter size. Lithium batteries are the standard for serious builds. For water, check fresh tank gallons, gray water handling, and hot water availability — these become daily considerations on extended trips.",
                },
              },
              {
                "@type": "Question",
                name: "What does long-term Class B van ownership look like?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Think about year three, not just day one. Custom builder warranties are only as good as the builder's longevity and willingness to stand behind their work. Manufacturer warranties come with dealer support but may have more exclusions than expected. Sprinter dealers are widespread but not universal; Promaster and Transit have broader domestic coverage. Vans from reputable builders and established manufacturers hold resale value well. Unknown converters and budget builds do not. If you might sell in five years, buy accordingly.",
                },
              },
            ],
          },

          // ── HowTo ────────────────────────────────────────────
          {
            "@type": "HowTo",
            "@id": "https://vanlifewebsite.com/blog/class-b-van-buying-guide#howto",
            name: "How to Buy a Class B Campervan: 7 Questions to Answer First",
            description:
              "A structured 7-step process for evaluating and purchasing a Class B campervan. Answer these questions before you shop to avoid the most expensive mistakes in the van life market.",
            totalTime: "P7D",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "USD",
              value: "80000-300000",
            },
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Define how you'll actually use the van",
                text: "Be specific about your travel style. Define whether you're solo or a couple, whether you bring dogs, kids, or bikes, whether you'll work remotely, and whether you camp at developed campgrounds or boondock on forest roads. Your use case drives every other decision — floor plan, electrical, storage, and budget.",
                tip: "A weekend warrior at state parks has completely different needs than a couple planning to full-time for two years in the backcountry. Get this wrong and you'll be living with compromises every single trip.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Decide between a custom builder and an RV manufacturer",
                text: "Custom builders offer personalization and often superior craftsmanship with 12-18 month lead times. Manufacturers like Winnebago, Airstream, and Thor offer dealer networks, standardized builds, and warranty infrastructure. Major manufacturers now offer factory 4x4, Fox suspension, and off-road packages at production scale.",
                tip: "The right answer depends on how much you value personalization versus convenience, and how comfortable you are with the service and warranty experience each path offers.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Determine if you need 4x4 and off-road capability",
                text: "4x4 adds $10,000-$20,000, weight, and mechanical complexity. If you camp at developed campgrounds and drive graded roads, a well-built 2WD Sprinter will get you everywhere. If you chase dispersed camping on unmaintained forest roads or overland into remote terrain, 4x4 becomes a safety decision.",
                tip: "The market trend pushes buyers toward off-road specs because it looks great and sells. Don't let marketing make this decision. Be clear about where you actually drive.",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Vet the converter's build quality",
                text: "Ask for a detailed build sheet, customer references, electrical system design specifics, and warranty details including claims process. Understand the three quality tiers: premium builders with documented track records, mid-tier regional shops, and budget converters that look impressive in photos but fail under real use.",
                tip: "This is the question most buyers skip and the one they regret. A quality builder answers every question without hesitation. A bad one gets vague.",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Calculate your real budget including hidden costs",
                text: "Add 20-30% to your purchase price for insurance, Sprinter maintenance, storage ($200-$400/month), post-purchase upgrades (solar, mattress, bike rack, communication devices), and depreciation. Get insurance quotes before you buy, not after.",
                tip: "Whatever number you have in your head right now — add 20 to 30 percent. Almost every buyer adds things after purchase. Budget for it upfront.",
              },
              {
                "@type": "HowToStep",
                position: 6,
                name: "Evaluate the off-grid power and water systems",
                text: "The electrical system determines livability. Ask about battery capacity in usable amp hours, solar wattage, shore power capability, and inverter size. Lithium batteries are the standard. Check fresh water tank capacity, gray water handling, and hot water availability.",
                tip: "A poorly designed electrical system will leave you frustrated and underpowered. A well-engineered one disappears into the background and just works.",
              },
              {
                "@type": "HowToStep",
                position: 7,
                name: "Plan for long-term ownership",
                text: "Evaluate warranty coverage and who honors it. Consider the service network — Sprinter dealers are widespread but not universal. Promaster and Transit have broader domestic coverage. Assess resale value: reputable builders and manufacturers hold value; unknown converters do not.",
                tip: "The purchase is day one. You need to think about year three. If you think you might sell in five years, buy accordingly.",
              },
            ],
          },

          // ── BreadcrumbList ───────────────────────────────────
          {
            "@type": "BreadcrumbList",
            "@id": "https://vanlifewebsite.com/blog/class-b-van-buying-guide#breadcrumb",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://vanlifewebsite.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://vanlifewebsite.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Class B Van Buying: The 7 Questions You Must Answer Before You Spend a Dime",
                item: "https://vanlifewebsite.com/blog/class-b-van-buying-guide",
              },
            ],
          },

          // ── ItemList ─────────────────────────────────────────
          {
            "@type": "ItemList",
            "@id": "https://vanlifewebsite.com/blog/class-b-van-buying-guide#questions-list",
            name: "The 7 Questions Every Class B Van Buyer Must Answer",
            description:
              "A structured list of the seven critical questions to answer before purchasing a Class B campervan, covering use case, builder selection, 4x4 capability, converter quality, budget, off-grid systems, and long-term ownership.",
            numberOfItems: 7,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "How Do You Actually Plan to Use It?",
                description:
                  "Define your specific travel style — solo or couple, pets, remote work needs, campground vs boondocking — before shopping. Your use case determines floor plan, electrical, storage, and budget.",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Custom Builder or RV Manufacturer?",
                description:
                  "Choose between high personalization from custom builders like Outside Van or Storyteller Overland, or established dealer networks and warranty infrastructure from Winnebago, Airstream, or Thor.",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Do You Need 4x4 and Off-Road Capability?",
                description:
                  "4x4 adds $10,000-$20,000 and significant complexity. Only justified for dispersed camping on unmaintained roads or overlanding into remote terrain. Don't let marketing make this decision.",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Who Converted It and Can They Prove Their Quality?",
                description:
                  "Vet the converter with build sheets, customer references, electrical engineering specifics, and warranty details. Three quality tiers exist: premium, mid-tier, and budget converters.",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "What's Your Real Budget Including Hidden Costs?",
                description:
                  "Add 20-30% for insurance, maintenance, storage, upgrades, and depreciation. Get insurance quotes before buying and budget for post-purchase additions.",
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "How Do You Handle Power and Water Off-Grid?",
                description:
                  "Evaluate battery capacity, solar wattage, shore power, and inverter size. Lithium batteries are the standard. Check fresh water capacity, gray water handling, and hot water systems.",
              },
              {
                "@type": "ListItem",
                position: 7,
                name: "What Does Ownership Look Like Long Term?",
                description:
                  "Plan for warranty coverage, service network access, parts availability, and resale value. Reputable builders and manufacturers hold value; unknown converters do not.",
              },
            ],
          },
        ],
      }
    : {
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
        <header
          className="relative border-b border-charcoal-700 py-20 px-6 overflow-hidden"
          style={{
            backgroundImage: "url('/tire-tread.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/75 via-charcoal-950/60 to-charcoal-950/85" />
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
