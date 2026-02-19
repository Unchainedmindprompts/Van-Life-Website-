"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal-950/90 backdrop-blur-sm border-b border-charcoal-700">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Van Life Home"
        >
          <span className="text-earth-400 text-2xl">&#9650;</span>
          <span
            className="font-display font-bold text-xl tracking-widest text-sand-200 uppercase group-hover:text-earth-300 transition-colors"
          >
            VAN LIFE
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/compare"
            className="text-sm font-medium tracking-wider text-sand-300 hover:text-earth-300 uppercase transition-colors"
          >
            Compare Vans
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium tracking-wider text-sand-300 hover:text-earth-300 uppercase transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/find-my-van"
            className="px-5 py-2 text-sm font-display font-bold tracking-wider uppercase bg-earth-600 hover:bg-earth-500 text-sand-100 rounded transition-colors"
          >
            Find My Van
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-sand-200 hover:text-earth-300 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-charcoal-950 border-t border-charcoal-700 px-6 py-6 flex flex-col gap-5">
          <Link
            href="/compare"
            className="text-sm font-medium tracking-wider text-sand-300 hover:text-earth-300 uppercase transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Compare Vans
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium tracking-wider text-sand-300 hover:text-earth-300 uppercase transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/find-my-van"
            className="inline-block w-fit px-5 py-2 text-sm font-display font-bold tracking-wider uppercase bg-earth-600 hover:bg-earth-500 text-sand-100 rounded transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Find My Van
          </Link>
        </div>
      )}
    </header>
  );
}
