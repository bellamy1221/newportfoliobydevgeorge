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

const phases = [
  {
    title: "Discover",
    meta: "Week 1–2",
    copy: "We walk the space, listen hard, and map how you actually live.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Design",
    meta: "Week 3–8",
    copy: "Plans, materials, lighting — edited until it feels inevitable.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Realize",
    meta: "Build",
    copy: "Site visits, vendors, and final styling that holds up on Tuesdays.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
  },
];

const quotes = [
  {
    text: "They designed a home we actually use — beautiful without being precious.",
    name: "The Avery family",
    role: "Harbor Residence",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    text: "Material choices that still look right two years later.",
    name: "Jonah & Mei",
    role: "Oak Loft",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
];

export default function AtelierNorth() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".an-in", {
        opacity: 0,
        y: 36,
        duration: 1.15,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.to(".an-hero-bg", {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".an-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".an-rise").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 48,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.fromTo(
        ".an-card",
        { y: 100, opacity: 0.2 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.14,
          ease: "none",
          scrollTrigger: {
            trigger: ".an-stack",
            start: "top 70%",
            end: "bottom 45%",
            scrub: true,
          },
        },
      );

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.to(".an-gallery", {
          yPercent: -32,
          ease: "none",
          scrollTrigger: {
            trigger: ".an-pin",
            start: "top top",
            end: "+=160%",
            pin: ".an-pin-left",
            scrub: true,
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
      className="w-full max-w-full overflow-x-hidden bg-[#EAE6DF] text-[#1A1A1A]"
      style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
    >
      <BackToPortfolio />
      <GlassNav
        light
        brand="Atelier North"
        brandClassName="font-[family-name:var(--font-display)] tracking-[0.06em]"
        links={[
          { href: "#projects", label: "Projects" },
          { href: "#process", label: "Process" },
          { href: "#inquire", label: "Inquire" },
        ]}
      />

      <section className="an-hero relative flex min-h-screen items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=80"
            alt="Interior"
            fill
            priority
            sizes="100vw"
            className="an-hero-bg object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,230,223,0.2),rgba(234,230,223,0.88)_75%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-28 text-center md:px-10">
          <p
            className="an-in mb-5 text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-[0.08em] text-[#B08968]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            Atelier North
          </p>
          <h1
            className="an-in max-w-6xl text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.02] tracking-[-0.035em]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            Interiors shaped around how people actually live.
          </h1>
          <p className="an-in mx-auto mt-7 max-w-lg text-[#1A1A1A]/60">
            Residential design with architectural clarity — materials that age
            well, plans with room to breathe.
          </p>
          <div className="an-in mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#inquire"
              className="bg-[#1A1A1A] px-9 py-4 text-[11px] tracking-[0.22em] uppercase text-[#EAE6DF]"
            >
              Start a project
            </Link>
            <Link
              href="#projects"
              className="border border-[#1A1A1A]/25 px-9 py-4 text-[11px] tracking-[0.22em] uppercase"
            >
              View work
            </Link>
          </div>
        </div>
      </section>

      <div
        className="border-y border-[#1A1A1A]/10 bg-[#B8B4AD] py-4 text-[clamp(1.3rem,3vw,2.1rem)] tracking-[0.08em] text-[#1A1A1A]/55"
        style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
      >
        <Marquee
          items={["Space", "Light", "Material", "Scale", "Detail", "Calm"]}
          speed={50}
        />
      </div>

      <section id="projects" className="an-stack px-6 py-32 md:px-10 md:py-48">
        <h2
          className="an-rise mx-auto mb-14 max-w-7xl text-[clamp(2.2rem,4vw,3.4rem)] tracking-[-0.03em]"
          style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
        >
          Selected residences
        </h2>
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          {[
            {
              n: "Harbor Residence",
              m: "2025",
              img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
            },
            {
              n: "Oak Loft",
              m: "2025",
              img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
            },
            {
              n: "North Library",
              m: "2024",
              img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
            },
          ].map((p) => (
            <article
              key={p.n}
              className="an-card group relative min-h-[280px] overflow-hidden md:min-h-[360px]"
            >
              <Image
                src={p.img}
                alt={p.n}
                fill
                sizes="80vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white md:p-10">
                <h3
                  className="text-3xl tracking-tight md:text-4xl"
                  style={{
                    fontFamily: "var(--font-display), system-ui, sans-serif",
                  }}
                >
                  {p.n}
                </h3>
                <span className="text-sm text-white/70">{p.m}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="px-6 py-32 md:px-10 md:py-48">
        <div className="an-rise mx-auto max-w-7xl">
          <HorizontalAccordion items={phases} accent="#B08968" dark={false} />
        </div>
      </section>

      <section className="an-pin px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div className="an-pin-left flex items-center py-32 md:py-48">
            <h2
              className="max-w-md text-[clamp(2.2rem,4vw,3.4rem)] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
              }}
            >
              Materials we return to — oak, limestone, brass, linen.
            </h2>
          </div>
          <div className="an-gallery flex flex-col gap-8 pb-32 md:pb-48">
            {[
              "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1600210492499-8449578f0d6e?auto=format&fit=crop&w=1200&q=80",
            ].map((src) => (
              <div key={src} className="relative aspect-[4/5] overflow-hidden">
                <Image src={src} alt="Material" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <div className="an-rise mx-auto max-w-7xl">
          <QuoteCarousel quotes={quotes} accent="#B08968" light />
        </div>
      </section>

      <section id="inquire" className="bg-[#B08968] px-6 py-32 text-[#1A1A1A] md:px-10 md:py-48">
        <div className="an-rise mx-auto max-w-4xl text-center">
          <h2
            className="text-[clamp(2.5rem,5.5vw,4.6rem)] leading-[0.98] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            Tell us about the rooms you’re ready to change.
          </h2>
          <Link
            href="mailto:studio@ateliernorth.co"
            className="mt-12 inline-block bg-[#1A1A1A] px-10 py-4 text-[11px] tracking-[0.22em] uppercase text-[#EAE6DF]"
          >
            studio@ateliernorth.co
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#1A1A1A]/10 px-6 py-12 md:px-10">
        <p
          className="text-xl tracking-[0.06em]"
          style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
        >
          Atelier North
        </p>
      </footer>
    </main>
  );
}
