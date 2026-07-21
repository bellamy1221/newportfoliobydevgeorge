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

const services = [
  {
    title: "Weekly",
    meta: "From $68",
    copy: "Seasonal wraps that never repeat the same composition twice.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Weddings",
    meta: "By inquiry",
    copy: "Architectural florals for ceremonies that feel composed, not crowded.",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Events",
    meta: "Tables & lobbies",
    copy: "Installations with negative space — color as conversation.",
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=80",
  },
];

const quotes = [
  {
    text: "They treat flowers like architecture. My apartment finally breathes.",
    name: "Clara M.",
    role: "Stem subscriber",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    text: "Our wedding florals felt quiet and intentional — never loud.",
    name: "James & Priya",
    role: "Wedding clients",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
];

export default function BloomAtelier() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".bl-in", {
        opacity: 0,
        y: 38,
        duration: 1.15,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.to(".bl-hero-bg", {
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".bl-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".bl-rise").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.fromTo(
        ".bl-stack",
        { y: 80, opacity: 0.3 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          ease: "none",
          scrollTrigger: {
            trigger: ".bl-stacks",
            start: "top 70%",
            end: "bottom 50%",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        ".bl-fade img",
        { scale: 0.85, opacity: 0.35 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".bl-fade",
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <main
      id="top"
      ref={root}
      className="w-full max-w-full overflow-x-hidden bg-[#FAF6F2] text-[#2A2422]"
      style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
    >
      <BackToPortfolio />
      <GlassNav
        light
        brand="BLOOM"
        brandClassName="font-[family-name:var(--font-bebas)] text-2xl tracking-[0.12em]"
        links={[
          { href: "#work", label: "Work" },
          { href: "#services", label: "Services" },
          { href: "#visit", label: "Visit" },
        ]}
      />

      <section className="bl-hero relative flex min-h-screen items-end justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2400&q=80"
            alt="Floral field"
            fill
            priority
            sizes="100vw"
            className="bl-hero-bg object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,246,242,0.15),rgba(250,246,242,0.85)_75%)]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-32 text-center md:px-10 md:pb-28">
          <p
            className="bl-in mb-4 text-5xl tracking-[0.14em] text-[#C97B8A] md:text-6xl"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            BLOOM ATELIER
          </p>
          <h1
            className="bl-in max-w-6xl text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.02] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Florals composed like quiet architecture.
          </h1>
          <p className="bl-in mx-auto mt-6 max-w-lg text-base text-[#2A2422]/65">
            Local atelier for weekly stems, weddings, and arrangements with room
            to breathe.
          </p>
          <div className="bl-in mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#visit"
              className="bg-[#C97B8A] px-9 py-4 text-[11px] tracking-[0.22em] uppercase text-white"
            >
              Order stems
            </Link>
            <Link
              href="#services"
              className="border border-[#2A2422]/25 px-9 py-4 text-[11px] tracking-[0.22em] uppercase"
            >
              Plan an event
            </Link>
          </div>
        </div>
      </section>

      <div
        className="border-y border-[#2A2422]/10 py-4 text-[clamp(1.5rem,3.5vw,2.4rem)] tracking-[0.08em] text-[#4F6F5A]/70"
        style={{ fontFamily: "var(--font-bebas), sans-serif" }}
      >
        <Marquee
          items={["PEONY", "RANUNCULUS", "OLIVE", "ROSE", "EUCALYPTUS", "TULIP"]}
          speed={44}
        />
      </div>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <h2
          className="bl-rise mx-auto max-w-5xl text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.1] tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
        >
          COLOR IS A CONVERSATION
          <span
            className="mx-3 inline-block h-10 w-24 rounded-full bg-cover bg-center align-middle"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=300&q=80)",
            }}
          />
          NEGATIVE SPACE IS PART OF THE SENTENCE.
        </h2>
      </section>

      <section id="work" className="bl-fade px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto grid max-w-7xl grid-cols-2 grid-flow-dense gap-3 md:grid-cols-6 md:gap-4">
          <div className="relative col-span-2 row-span-2 aspect-square overflow-hidden md:col-span-3 md:row-span-2 md:aspect-auto md:min-h-[420px]">
            <Image src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=80" alt="Arrangement" fill sizes="50vw" className="object-cover" />
          </div>
          <div className="relative col-span-2 row-span-1 overflow-hidden md:col-span-3 md:min-h-[200px]">
            <Image src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80" alt="Bouquet" fill sizes="50vw" className="object-cover" />
          </div>
          <div className="relative col-span-1 overflow-hidden md:col-span-2 md:min-h-[200px]">
            <Image src="https://images.unsplash.com/photo-1455659817273-f96807726540?auto=format&fit=crop&w=800&q=80" alt="Detail" fill sizes="33vw" className="object-cover" />
          </div>
          <div className="relative col-span-1 overflow-hidden md:col-span-1 md:min-h-[200px]">
            <Image src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=700&q=80" alt="Stem" fill sizes="20vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-32 md:px-10 md:py-48">
        <div className="bl-rise mx-auto max-w-7xl">
          <HorizontalAccordion items={services} accent="#C97B8A" dark={false} />
        </div>
      </section>

      <section className="bl-stacks px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          {["Condition at dawn", "Compose with restraint", "Deliver with stillness"].map(
            (t, i) => (
              <div
                key={t}
                className="bl-stack border border-[#2A2422]/10 bg-white/70 p-8 backdrop-blur-sm md:p-10"
                style={{ transform: `translateY(${i * 8}px)` }}
              >
                <p
                  className="text-3xl tracking-tight md:text-4xl"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {t}
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <div className="bl-rise mx-auto max-w-7xl">
          <QuoteCarousel quotes={quotes} accent="#C97B8A" light />
        </div>
      </section>

      <section id="visit" className="bg-[#4F6F5A] px-6 py-32 text-[#FAF6F2] md:px-10 md:py-48">
        <div className="bl-rise mx-auto max-w-4xl text-center">
          <h2
            className="text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[0.95] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            BRING THE SEASON INDOORS
          </h2>
          <p className="mx-auto mt-6 max-w-md text-white/70">
            21 Petal Lane · Wed–Sat 10–6
          </p>
          <Link
            href="#services"
            className="mt-10 inline-block bg-[#FAF6F2] px-10 py-4 text-[11px] tracking-[0.22em] uppercase text-[#2A2422]"
          >
            Start a subscription
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#2A2422]/10 px-6 py-12 md:px-10">
        <p
          className="text-3xl tracking-[0.1em]"
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
        >
          BLOOM
        </p>
      </footer>
    </main>
  );
}
