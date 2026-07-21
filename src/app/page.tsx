"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works } from "@/data/works";
import { Marquee } from "@/components/Marquee";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".hub-fade", {
        opacity: 0,
        y: 36,
        duration: 1.15,
        stagger: 0.07,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".hub-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <main
      ref={root}
      className="field-grain relative min-h-screen overflow-x-hidden bg-[#0c0c0b] text-[#f2efe8]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,_rgba(196,122,58,0.18),_transparent_50%),radial-gradient(ellipse_at_90%_20%,_rgba(90,110,130,0.12),_transparent_45%)]" />

      <header className="hub-fade relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <p className="font-[family-name:var(--font-display)] text-xl tracking-[0.12em]">
          FIELD
        </p>
        <div className="flex items-center gap-8 text-[11px] tracking-[0.22em] uppercase text-white/45">
          <span>Selected works</span>
          <span className="hidden sm:inline">2026</span>
        </div>
      </header>

      <section className="relative z-10 flex min-h-[78vh] flex-col justify-end px-6 pb-16 pt-24 md:px-12 md:pb-24">
        <p className="hub-fade mb-8 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
          Full brand websites for cafés, studios, shops, and places with a pulse —
          cinematic, conversion-minded, and unmistakably local.
        </p>
        <h1 className="hub-fade font-[family-name:var(--font-display)] max-w-6xl text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.04em]">
          Ten worlds.
          <br />
          One craft.
        </h1>
        <div className="hub-fade mt-10 flex flex-wrap gap-4">
          <a
            href="#works"
            className="bg-[#f2efe8] px-8 py-4 text-[11px] tracking-[0.22em] uppercase text-[#0c0c0b] transition-opacity hover:opacity-80"
          >
            View works
          </a>
          <p className="flex items-center text-sm text-white/40">
            Next.js · GSAP · Art-directed systems
          </p>
        </div>
      </section>

      <div className="hub-fade relative z-10 border-y border-white/10 py-5 text-[clamp(1.5rem,4vw,2.75rem)] font-[family-name:var(--font-display)] tracking-tight text-white/25">
        <Marquee
          items={[
            "Coffee",
            "Pilates",
            "Bakery",
            "Florist",
            "Barber",
            "Hotel",
            "Ceramics",
            "Skincare",
            "Wine",
            "Interiors",
          ]}
          speed={55}
        />
      </div>

      <section id="works" className="relative z-10 px-6 py-28 md:px-12 md:py-40">
        <div className="mb-16 flex flex-col gap-4 md:mb-24 md:flex-row md:items-end md:justify-between">
          <h2 className="font-[family-name:var(--font-display)] max-w-2xl text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight">
            Selected brand sites
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-white/45">
            Each project is a complete multi-section experience — hero, story,
            offer, atmosphere, and a clear path to visit or buy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-20">
          {works.map((work, index) => (
            <Link
              key={work.slug}
              href={`/work/${work.slug}`}
              className={`hub-card group block ${
                index % 3 === 0 ? "md:col-span-2" : ""
              }`}
            >
              <article>
                <div
                  className={`relative mb-6 overflow-hidden bg-[#1a1917] ${
                    index % 3 === 0 ? "aspect-[21/9]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={work.cover}
                    alt={work.coverAlt}
                    fill
                    sizes={
                      index % 3 === 0
                        ? "100vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span
                    className="absolute bottom-5 left-5 text-[11px] tracking-[0.22em] uppercase"
                    style={{ color: work.accent }}
                  >
                    {String(index + 1).padStart(2, "0")} — {work.category}
                  </span>
                </div>
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
                      {work.brand}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/55">
                      {work.title}
                    </p>
                  </div>
                  <span className="text-[11px] tracking-[0.18em] uppercase text-white/30 transition-colors group-hover:text-white/70">
                    Open project →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 py-32 md:px-12 md:py-48">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em]">
            Built to feel like the brand already exists.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/50">
            Speculative sites with real atmosphere — designed as portfolio proof
            for modern landings that convert without looking like templates.
          </p>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-12 md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="font-[family-name:var(--font-display)] text-4xl tracking-tight">
            FIELD
          </p>
          <p className="max-w-md text-sm leading-relaxed text-white/45">
            Portfolio of ten speculative brand websites. Typography, motion, and
            conversion clarity for local businesses.
          </p>
        </div>
      </footer>
    </main>
  );
}
