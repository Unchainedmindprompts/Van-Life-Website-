import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Find My Van | Van Life — Questionnaire Coming Soon",
  description:
    "Tell us how you live, travel, and camp — we'll match you to the perfect Class B adventure van. Questionnaire launching soon.",
};

export default function FindMyVanPage() {
  return (
    <div className="pt-20 min-h-screen bg-charcoal-900 flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <span className="inline-block font-display text-[10px] font-bold tracking-[0.3em] uppercase text-forest-500 bg-forest-900/40 px-3 py-1.5 rounded mb-8">
          Coming Soon
        </span>
        <h1 className="font-display font-black text-4xl md:text-5xl text-sand-100 leading-tight mb-6">
          Find Your{" "}
          <span className="text-earth-400">Perfect Van.</span>
        </h1>
        <p className="text-sand-400 text-lg leading-relaxed mb-4">
          We&apos;re building an AI-powered questionnaire that matches you to the ideal Class B
          adventure van based on how you live, travel, and camp.
        </p>
        <p className="text-sand-500 text-base leading-relaxed mb-10">
          How long do you stay off-grid? Do you need 4x4? Are you solo or a couple?
          Full-timer or weekend warrior? We&apos;ll use your answers to cut through the noise
          and give you a direct recommendation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/compare"
            className="px-8 py-4 font-display font-bold text-sm tracking-widest uppercase bg-earth-600 hover:bg-earth-500 text-sand-100 rounded transition-colors"
          >
            Compare Vans Now
          </Link>
          <Link
            href="/blog"
            className="px-8 py-4 font-display font-bold text-sm tracking-widest uppercase border border-charcoal-600 hover:border-earth-600 text-sand-300 hover:text-earth-300 rounded transition-colors"
          >
            Read the Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
