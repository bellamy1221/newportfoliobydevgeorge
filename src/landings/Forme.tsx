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

const classes = [
  {
    title: "Reformer",
    meta: "45 min",
    copy: "Spring resistance for quiet strength — coached, never crowded.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mat Flow",
    meta: "50 min",
    copy: "Bodyweight sequences that rebuild posture from the inside.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Private",
    meta: "55 min",
    copy: "One body. One coach. A plan that actually fits you.",
    image:
      "https://images.unsplash.com/photo-1599901860904-17d82bddea55?auto=format&fit=crop&w=1200&q=80",
  },
];

const quotes = [
  {
    text: "I stopped chasing intensity and started collecting control.",
    name: "Elena V.",
    role: "Member since 2024",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    text: "The room is quiet on purpose. You can finally hear your breath.",
    name: "Noah Park",
    role: "Reformer regular",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Forme() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".fm-in", {
        opacity: 0,
        y: 40,
        duration: 1.15,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".fm-rise").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.from(".fm-word", {
        opacity: 0.12,
        stagger: 0.06,
        ease: "none",
        scrollTrigger: {
          trigger: ".fm-scrub",
          start: "top 70%",
          end: "bottom 40%",
          scrub: true,
        },
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.to(".fm-track", {
          xPercent: -58,
          ease: "none",
          scrollTrigger: {
            trigger: ".fm-horizontal",
            start: "top top",
            end: "+=190%",
            pin: true,
            scrub: 1,
          },
        });
      });
    },
    { scope: root },
  );

  const scrubWords =
    "Strength without spectacle. Precision without punishment. A body that holds itself.";

  return (
    <main
      id="top"
      ref={root}
      className="w-full max-w-full overflow-x-hidden bg-[#F4F0E8] text-[#1A1A18]"
      style={{ fontFamily: "var(--font-dm), system-ui, sans-serif" }}
    >
      <BackToPortfolio />
      <GlassNav
        light
        brand="Forme"
        brandClassName="font-[family-name:var(--font-fraunces)] italic"
        links={[
          { href: "#classes", label: "Classes" },
          { href: "#studio", label: "Studio" },
          { href: "#book", label: "Book" },
        ]}
      />

      {/* Artistic Asymmetry hero */}
      <section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-36">
        <div className="relative z-10 max-w-3xl">
          <p
            className="fm-in mb-5 text-[clamp(2.4rem,5vw,3.8rem)] italic text-[#6B8F71]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Forme
          </p>
          <h1
            className="fm-in max-w-5xl text-[clamp(2.6rem,5.5vw,5rem)] leading-[1.02] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Pilates that rebuilds how you move through a day.
          </h1>
          <p className="fm-in mt-7 max-w-md text-base leading-relaxed text-[#1A1A18]/60">
            Boutique sessions in soft northern light — reformer, mat, and private
            coaching that actually watches you.
          </p>
          <div className="fm-in mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#book"
              className="bg-[#6B8F71] px-9 py-4 text-[11px] tracking-[0.22em] uppercase text-white"
            >
              Book a class
            </Link>
            <Link
              href="#classes"
              className="border border-[#1A1A18]/25 px-9 py-4 text-[11px] tracking-[0.22em] uppercase"
            >
              Explore classes
            </Link>
          </div>
        </div>
        <div className="fm-in pointer-events-none absolute -right-8 bottom-0 h-[55vh] w-[58vw] max-w-[720px] overflow-hidden md:right-0 md:h-[70vh] md:w-[48vw]">
          <Image
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80"
            alt="Pilates practice"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F0E8] via-transparent to-transparent" />
        </div>
      </section>

      <div
        className="border-y border-[#1A1A18]/10 bg-[#6B8F71] py-4 text-[clamp(1.3rem,3vw,2.1rem)] italic text-white/85"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
      >
        <Marquee
          items={["Breath", "Control", "Precision", "Flow", "Center", "Length"]}
          speed={40}
        />
      </div>

      <section id="classes" className="px-6 py-32 md:px-10 md:py-48">
        <h2
          className="fm-rise mx-auto mb-14 max-w-7xl text-[clamp(2.2rem,4vw,3.5rem)] italic"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Expand a class. Feel the room.
        </h2>
        <div className="fm-rise mx-auto max-w-7xl">
          <HorizontalAccordion items={classes} accent="#6B8F71" dark={false} />
        </div>
      </section>

      <section className="fm-scrub px-6 py-32 md:px-10 md:py-48">
        <p
          className="mx-auto max-w-5xl text-center text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.25] italic"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          {scrubWords.split(" ").map((w, i) => (
            <span key={i} className="fm-word mr-[0.28em] inline-block">
              {w}
            </span>
          ))}
        </p>
      </section>

      <section id="studio" className="fm-horizontal overflow-hidden bg-[#1A1A18] text-[#F4F0E8]">
        <div className="fm-track flex w-max gap-8 px-6 py-32 md:gap-12 md:px-10 md:py-40">
          {[
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80",
            "https://images.unsplash.com/photo-1593810450967-f9c42742e326?auto=format&fit=crop&w=1400&q=80",
            "https://images.unsplash.com/photo-1574680096145-d05b974e3047?auto=format&fit=crop&w=1400&q=80",
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80",
          ].map((src, i) => (
            <div
              key={src}
              className="relative h-[58vh] w-[72vw] max-w-[700px] shrink-0 overflow-hidden md:w-[40vw]"
            >
              <Image src={src} alt={`Studio ${i + 1}`} fill sizes="45vw" className="object-cover" />
            </div>
          ))}
          <div className="flex w-[55vw] max-w-[460px] shrink-0 flex-col justify-center pr-8">
            <h2
              className="text-[clamp(2rem,4vw,3.2rem)] italic"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Soft floors. Wide windows. Enough room to listen.
            </h2>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <div className="fm-rise mx-auto max-w-7xl">
          <QuoteCarousel quotes={quotes} accent="#6B8F71" light />
        </div>
      </section>

      <section id="book" className="bg-[#6B8F71] px-6 py-32 text-white md:px-10 md:py-48">
        <div className="fm-rise mx-auto max-w-4xl text-center">
          <h2
            className="text-[clamp(2.5rem,5.5vw,4.6rem)] leading-[0.98] italic"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Book your intro reformer this week.
          </h2>
          <Link
            href="#classes"
            className="mt-12 inline-block bg-[#F4F0E8] px-10 py-4 text-[11px] tracking-[0.22em] uppercase text-[#1A1A18]"
          >
            Reserve a spot
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#1A1A18]/10 px-6 py-12 md:px-10">
        <div className="mx-auto flex max-w-7xl justify-between gap-6">
          <p
            className="text-2xl italic"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Forme
          </p>
          <p className="text-sm text-[#1A1A18]/45">Willow Street · Daily from 6:30</p>
        </div>
      </footer>
    </main>
  );
}
