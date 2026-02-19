import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-700 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-earth-400 text-xl">&#9650;</span>
              <span className="font-display font-bold text-lg tracking-widest text-sand-200 uppercase">
                VAN LIFE
              </span>
            </div>
            <p className="text-sand-400 text-sm leading-relaxed">
              Your consultative guide to the Class B adventure van world. We help
              you find the right rig for the life you want to live.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-display font-bold text-xs tracking-widest uppercase text-earth-400 mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/compare", label: "Compare Vans" },
                { href: "/blog", label: "Van Life Blog" },
                { href: "/find-my-van", label: "Find My Van" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sand-300 hover:text-earth-300 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="font-display font-bold text-xs tracking-widest uppercase text-earth-400 mb-4">
              Topics
            </h3>
            <ul className="space-y-2">
              {[
                "Class B Vans",
                "4x4 Capability",
                "Off-Grid Living",
                "Van Buying Guide",
                "Sprinter Conversions",
              ].map((topic) => (
                <li key={topic}>
                  <span className="text-sand-400 text-sm">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sand-400 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Van Life. All rights reserved.
          </p>
          <p className="text-sand-400 text-xs">
            Built for adventure seekers, by adventure seekers.
          </p>
        </div>
      </div>
    </footer>
  );
}
