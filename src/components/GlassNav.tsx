"use client";

import Link from "next/link";

export function GlassNav({
  brand,
  links,
  light = false,
  brandClassName = "",
}: {
  brand: string;
  links: { href: string; label: string }[];
  light?: boolean;
  brandClassName?: string;
}) {
  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5">
      <div
        className={`pointer-events-auto flex max-w-full items-center gap-6 rounded-full px-5 py-3 backdrop-blur-xl md:gap-10 md:px-7 ${
          light
            ? "border border-black/10 bg-white/70 text-neutral-900 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
            : "border border-white/15 bg-black/35 text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
        }`}
      >
        <Link
          href="#top"
          className={`shrink-0 text-sm tracking-[0.14em] uppercase md:text-base ${brandClassName}`}
        >
          {brand}
        </Link>
        <div
          className={`hidden items-center gap-6 text-[11px] tracking-[0.18em] uppercase sm:flex ${
            light ? "text-neutral-600" : "text-white/65"
          }`}
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-opacity hover:opacity-100 opacity-80">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
