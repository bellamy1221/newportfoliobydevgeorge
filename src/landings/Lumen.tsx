"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BackToPortfolio } from "@/components/BackToPortfolio";
import { Marquee } from "@/components/Marquee";
import { GlassNav } from "@/components/GlassNav";
import { HorizontalAccordion } from "@/components/HorizontalAccordion";
import { QuoteCarousel } from "@/components/QuoteCarousel";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const products = [
  {
    title: "Cleanser",
    meta: "$38",
    copy: "Mineral gel that softens without stripping — morning and night.",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Serum",
    meta: "$62",
    copy: "Lightweight hydration with a quiet glow, never greasy.",
    image:
      "https://images.unsplash.com/photo-1620916568352-baad1c1c8e4d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Balm",
    meta: "$48",
    copy: "Dense comfort for dry evenings and cold-city skin.",
    image:
      "https://images.unsplash.com/photo-1570194065650-d99fb26b14b0?auto=format&fit=crop&w=1200&q=80",
  },
];

const quotes = [
  {
    text: "My shelf got quieter. My skin got better. Exactly three products — that’s it.",
    name: "Priya M.",
    role: "Daily user",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    text: "The balm replaced three products I didn’t need.",
    name: "Hannah K.",
    role: "Set owner",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Lumen() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".lm-in", {
        opacity: 0,
        y: 36,
        duration: 1.15,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".lm-rise").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 48,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.fromTo(
        ".lm-scale",
        { scale: 0.84, opacity: 0.35 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".lm-gallery",
            start: "top 75%",
            end: "center center",
            scrub: true,
          },
        },
      );

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.to(".lm-track", {
          xPercent: -55,
          ease: "none",
          scrollTrigger: {
            trigger: ".lm-horizontal",
            start: "top top",
            end: "+=170%",
            pin: true,
            scrub: 1,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <main
      id="top"
      ref={root}
      className="w-full max-w-full overflow-x-hidden bg-[#E8E5DF] text-[#1A1A1A]"
      style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
    >
      <BackToPortfolio />
      <GlassNav
        light
        brand="Lumen"
        brandClassName="font-[family-name:var(--font-newsreader)] italic normal-case tracking-normal text-base"
        links={[
          { href: "#formulas", label: "Formulas" },
          { href: "#ritual", label: "Ritual" },
          { href: "#shop", label: "Shop" },
        ]}
      />

      {/* Artistic Asymmetry — Dix Hectares calm ecommerce vibe */}
      <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="relative z-10 max-w-2xl">
          <p
            className="lm-in mb-5 text-[clamp(2.2rem,4.5vw,3.4rem)] italic text-[#8E9A8B]"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
          >
            Lumen
          </p>
          <h1
            className="lm-in max-w-5xl text-[clamp(2.6rem,5.5vw,5rem)] leading-[1.02]"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
          >
            Skincare rooted in mineral clarity.
          </h1>
          <p className="lm-in mt-7 max-w-md text-[#1A1A1A]/60">
            Small-batch formulas for city skin — clean, luminous, and quiet
            enough for every day.
          </p>
          <div className="lm-in mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#shop"
              className="bg-[#1A1A1A] px-9 py-4 text-[11px] tracking-[0.22em] uppercase text-[#E8E5DF]"
            >
              Shop the set
            </Link>
            <Link
              href="#formulas"
              className="border border-[#1A1A1A]/25 px-9 py-4 text-[11px] tracking-[0.22em] uppercase"
            >
              See formulas
            </Link>
          </div>
        </div>
        <div className="lm-in absolute bottom-0 right-0 h-[50vh] w-[58vw] max-w-[700px] overflow-hidden md:h-[72vh] md:w-[46vw]">
          <Image
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1600&q=80"
            alt="Lumen products"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8E5DF] via-transparent to-transparent" />
        </div>
      </section>

      <div
        className="border-y border-[#1A1A1A]/10 py-4 text-[clamp(1.3rem,3vw,2rem)] tracking-[0.1em] uppercase text-[#8E9A8B]/85"
        style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
      >
        <Marquee
          items={["Mineral", "Hydrate", "Calm", "Glow", "Barrier", "Rest"]}
          speed={46}
        />
      </div>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <h2
          className="lm-rise mx-auto max-w-5xl text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.12] italic"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          Fewer steps
          <span
            className="mx-3 inline-block h-10 w-24 rounded-full bg-cover bg-center align-middle"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=300&q=80)",
            }}
          />
          better skin days.
        </h2>
      </section>

      <section id="formulas" className="px-6 py-32 md:px-10 md:py-48">
        <div className="lm-rise mx-auto max-w-7xl">
          <HorizontalAccordion items={products} accent="#8E9A8B" dark={false} />
        </div>
      </section>

      <section id="ritual" className="lm-horizontal overflow-hidden bg-[#1A1A1A] text-[#E8E5DF]">
        <div className="lm-track flex w-max gap-8 px-6 py-32 md:gap-12 md:px-10 md:py-40">
          {[
            "https://images.unsplash.com/photo-1570194065650-d99fb26b14b0?auto=format&fit=crop&w=1400&q=80",
            "https://images.unsplash.com/photo-1620916568352-baad1c1c8e4d?auto=format&fit=crop&w=1400&q=80",
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1400&q=80",
          ].map((src, i) => (
            <div
              key={src}
              className="relative h-[55vh] w-[70vw] max-w-[640px] shrink-0 overflow-hidden md:w-[40vw]"
            >
              <Image src={src} alt={`Ritual ${i + 1}`} fill sizes="40vw" className="object-cover" />
            </div>
          ))}
          <div className="flex w-[55vw] max-w-[440px] shrink-0 flex-col justify-center">
            <h2
              className="text-[clamp(2rem,4vw,3.2rem)] italic"
              style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
            >
              Cleanse. Serum. Balm. Sleep. Repeat.
            </h2>
          </div>
        </div>
      </section>

      <section className="lm-gallery px-6 py-32 md:px-10 md:py-48">
        <div className="lm-scale mx-auto grid max-w-7xl grid-cols-2 grid-flow-dense gap-3 md:grid-cols-3">
          {[
            "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1570194065650-d99fb26b14b0?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1620916568352-baad1c1c8e4d?auto=format&fit=crop&w=900&q=80",
          ].map((src) => (
            <div key={src} className="relative aspect-[3/4] overflow-hidden">
              <Image src={src} alt="Product" fill sizes="33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <div className="lm-rise mx-auto max-w-7xl">
          <QuoteCarousel quotes={quotes} accent="#8E9A8B" light />
        </div>
      </section>

      <section id="shop" className="bg-[#8E9A8B] px-6 py-32 text-[#E8E5DF] md:px-10 md:py-48">
        <div className="lm-rise mx-auto max-w-4xl text-center">
          <h2
            className="text-[clamp(2.5rem,5.5vw,4.6rem)] leading-[0.98] italic"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
          >
            Start with the full ritual — $132
          </h2>
          <Link
            href="#formulas"
            className="mt-12 inline-block bg-[#E8E5DF] px-10 py-4 text-[11px] tracking-[0.22em] uppercase text-[#1A1A1A]"
          >
            Buy the set
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#1A1A1A]/10 px-6 py-12 md:px-10">
        <p
          className="text-2xl italic"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          Lumen
        </p>
      </footer>
    </main>
  );
}
