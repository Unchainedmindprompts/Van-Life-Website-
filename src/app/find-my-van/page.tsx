import type { Metadata } from "next";
import Quiz from "@/components/quiz/Quiz";

export const metadata: Metadata = {
  title: "Find My Van | Class B Match Questionnaire",
  description:
    "Answer eight questions about how you travel and get matched to the right Class B van. Every price and spec is verified against the manufacturer, with trade-offs stated plainly.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://van-life-website.vercel.app/find-my-van#webpage",
      url: "https://van-life-website.vercel.app/find-my-van",
      name: "Find My Van | Class B Match Questionnaire",
      description:
        "An eight-question consultative questionnaire that matches buyers to Class B camper vans using manufacturer-verified prices and specifications.",
      isPartOf: { "@id": "https://van-life-website.vercel.app/#website" },
    },
    {
      "@type": "Quiz",
      "@id": "https://van-life-website.vercel.app/find-my-van#quiz",
      name: "Find Your Perfect Van",
      description:
        "Eight questions covering usage, terrain, sleeping capacity, winter use, bathroom needs, budget, buying timeline, and priorities. Matches are drawn from a pool of current Class B models with fact-checked prices and specs.",
      about: {
        "@type": "Thing",
        name: "Class B camper vans",
      },
      mainEntityOfPage: { "@id": "https://van-life-website.vercel.app/find-my-van#webpage" },
    },
  ],
};

export default function FindMyVanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Quiz />
    </>
  );
}
