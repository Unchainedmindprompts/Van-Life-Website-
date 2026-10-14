import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/entities";

export const metadata: Metadata = {
  title: "About Mark Abplanalp | Starry Van",
  description:
    "Mark Abplanalp is a Class B camper van owner in Post Falls, Idaho. He writes Starry Van, a buyer's guide built on manufacturer-verified facts, from years of traveling the American West in his Sportsmobile Sprinter.",
  openGraph: {
    title: "About Mark Abplanalp | Starry Van",
    description:
      "The person behind Starry Van: a Class B owner in Post Falls, Idaho, writing the buyer's guide he wished existed.",
    type: "profile",
    images: [{ url: "/DSC_0795.jpeg", alt: "Mark Abplanalp's Sportsmobile Sprinter at a coastal campsite" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/about`,
      url: `${SITE_URL}/about`,
      name: "About Mark Abplanalp",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#mark-abplanalp` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#mark-abplanalp`,
      name: "Mark Abplanalp",
      url: `${SITE_URL}/about`,
      jobTitle: "Class B camper van owner and buyer's guide author",
      homeLocation: { "@type": "Place", name: "Post Falls, Idaho" },
      image: `${SITE_URL}/DSC_0795.jpeg`,
      description:
        "Owner of a 2013 Sportsmobile Sprinter camper van. Writes Starry Van, a Class B buyer's guide whose specifications are cross-checked against manufacturer sources.",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-20 bg-charcoal-900 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <p className="font-display font-bold text-xs tracking-[0.3em] uppercase text-earth-500 mb-4">
            About
          </p>
          <h1 className="font-display font-black text-3xl md:text-4xl text-sand-100 leading-tight mb-8">
            The guide is written by someone who sleeps in the product.
          </h1>

          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-charcoal-700 mb-10">
            <Image
              src="/DSC_0795.jpeg"
              alt="Mark Abplanalp's Sportsmobile Sprinter camper van at a coastal campsite"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-5 text-sand-300 leading-relaxed">
            <p>
              I&apos;m Mark Abplanalp. I live in Post Falls, Idaho with my wife and our
              rescue dog Roxy, and I own a 2013 Sportsmobile Sprinter van that has
              carried us across the American West for years. Starry Van exists because
              buying a Class B was harder than it should have been: glossy brochures,
              contradictory spec sheets, and reviews written by people who had never
              spent a night in the vehicle.
            </p>
            <p>
              So this site runs on a rule I can be held to. Every specification
              published here is cross-checked and documented, and where a fact
              matters, it links to the manufacturer&apos;s own page so you can
              corroborate it yourself. When sources disagree, the manufacturer&apos;s
              figure is the one we publish, and the disagreement is recorded rather
              than hidden. When a model is discontinued, the page says so.
            </p>
            <p>
              Start with the{" "}
              <Link href="/find-my-van" className="text-earth-400 underline hover:text-earth-300">
                match quiz
              </Link>{" "}
              if you want a recommendation shaped by your budget and how you actually
              travel, or{" "}
              <Link href="/compare" className="text-earth-400 underline hover:text-earth-300">
                compare the current models
              </Link>{" "}
              side by side. The{" "}
              <Link href="/blog" className="text-earth-400 underline hover:text-earth-300">
                guides and reviews
              </Link>{" "}
              go deeper on the decisions in between.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
