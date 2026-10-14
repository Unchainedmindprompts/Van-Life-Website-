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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-sv-lockup.png"
            alt="Starry Van logo: the SV monogram with two stars and a camper van"
            className="h-40 w-auto mb-10"
          />
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
            <h2 className="font-display font-bold text-2xl text-sand-100 pt-4">
              Why Starry Van exists
            </h2>
            <p>
              A decade ago I started looking for a van with zero experience in the
              RV world. I didn&apos;t grow up camping, and I didn&apos;t have an
              unlimited budget. There were so many choices, and I had no idea where
              to start.
            </p>
            <p>
              My first van was a Ford Transit that doubled as my work van. I built
              a platform bed, added a Rixen petrol heater, a 50 amp-hour lithium
              battery and a portable toilet, and called it good. It worked for a
              couple of years, but my wife and I wanted something that wasn&apos;t a
              work van, with more space.
            </p>
            <p>
              What followed was two years of investigation, mostly because I was
              disappointed in what I found. I&apos;d see a van I liked, then read
              the customer reviews and half of them were horrific. Cabinets stapled
              together. Water lines run on the outside of the van, which matters a
              great deal if you want to use it three or four seasons. Water
              capacity, power, on and on. Just so many options, and no straight
              answers.
            </p>
            <p>
              In 2019 we pulled the trigger on a 2013 Mercedes Sprinter 170 EXT
              built by Sportsmobile. It had only 54,000 miles on it when we bought
              it, and it has been amazing ever since.
            </p>
            <p>
              Starry Van exists to be an easy way to explore the options, whether
              that&apos;s a custom bespoke builder, a factory brand off the lot, or
              something in the middle, and whether you&apos;re buying new or used.
              Van life has brought my wife and me so much joy and so many amazing
              experiences. We don&apos;t live in our van. We&apos;re weekend
              warriors, and we&apos;re thrilled to share what we&apos;ve learned: a
              comprehensive guide to help you through the van purchasing journey,
              the guide I wished existed when I started.
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
