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

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  {
    title: "Fade",
    meta: "50 min · $50",
    copy: "Skin-tight precision with a soft blend — never rushed.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cut",
    meta: "45 min · $45",
    copy: "Consultation first. Classic or textured — your call.",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Shave",
    meta: "40 min · $40",
    copy: "Hot towel, straight razor, quiet finish.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Northside() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".ns-in", {
        opacity: 0,
        y: 34,
        duration: 1.1,
        stagger: 0.09,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".ns-rise").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 48,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.fromTo(
        ".ns-card",
        { y: 100, opacity: 0.2 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: ".ns-stack",
            start: "top 75%",
            end: "bottom 45%",
            scrub: true,
          },
        },
      );

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.to(".ns-gallery", {
          yPercent: -35,
          ease: "none",
          scrollTrigger: {
            trigger: ".ns-pin",
            start: "top top",
            end: "+=160%",
            pin: ".ns-pin-left",
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
      className="w-full max-w-full overflow-x-hidden bg-[#080808] text-white"
      style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
    >
      <BackToPortfolio light />
      <GlassNav
        brand="NORTHSIDE"
        brandClassName="font-[family-name:var(--font-display)] tracking-[0.16em]"
        links={[
          { href: "#menu", label: "Menu" },
          { href: "#shop", label: "Shop" },
          { href: "#book", label: "Book" },
        ]}
      />

      {/* Artistic Asymmetry */}
      <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="relative z-10 max-w-2xl">
          <p
            className="ns-in mb-4 text-5xl tracking-[0.1em] text-[#8A9BA8] md:text-6xl"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            NORTHSIDE
          </p>
          <h1
            className="ns-in max-w-5xl text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.95] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            Cuts with precision. Atmosphere included.
          </h1>
          <p className="ns-in mt-7 max-w-md text-white/55">
            Modern barbering with old-school patience — limited chairs, sharp
            lines, no queue energy.
          </p>
          <div className="ns-in mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#book"
              className="bg-white px-9 py-4 text-[11px] tracking-[0.22em] uppercase text-black"
            >
              Book a chair
            </Link>
            <Link
              href="#menu"
              className="border border-white/30 px-9 py-4 text-[11px] tracking-[0.22em] uppercase"
            >
              Service menu
            </Link>
          </div>
        </div>
        <div className="ns-in absolute bottom-0 right-0 h-[52vh] w-[62vw] max-w-[780px] overflow-hidden md:h-[75vh] md:w-[50vw]">
          <Image
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80"
            alt="Barbershop"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/20 to-transparent" />
        </div>
      </section>

      <div
        className="border-y border-white/10 py-4 text-[clamp(1.6rem,4vw,2.8rem)] tracking-[0.12em] text-white/25"
        style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
      >
        <Marquee
          items={["FADE", "SHAVE", "BEARD", "LINEUP", "CLASSIC", "TEXTURE"]}
          speed={36}
        />
      </div>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <h2
          className="ns-rise mx-auto max-w-5xl text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.03em]"
          style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
        >
          Grooming as craft
          <span
            className="mx-3 inline-block h-10 w-24 rounded-full bg-cover bg-center align-middle"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=300&q=80)",
            }}
          />
          not a conveyor belt.
        </h2>
      </section>

      <section id="menu" className="px-6 py-32 md:px-10 md:py-48">
        <div className="ns-rise mx-auto max-w-7xl">
          <HorizontalAccordion items={services} accent="#8A9BA8" />
        </div>
      </section>

      <section className="ns-stack px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto flex max-w-2xl flex-col gap-5">
          {[
            ["Signature Cut", "$45"],
            ["Skin Fade", "$50"],
            ["Beard Sculpt", "$28"],
            ["Hot Towel Shave", "$40"],
            ["Cut + Beard", "$68"],
          ].map(([n, p]) => (
            <div
              key={n}
              className="ns-card flex items-center justify-between border border-white/10 bg-[#111] px-6 py-6 md:px-8"
            >
              <span
                className="text-2xl tracking-tight md:text-3xl"
                style={{
                  fontFamily: "var(--font-display), system-ui, sans-serif",
                }}
              >
                {n}
              </span>
              <span className="text-[#8A9BA8]">{p}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="shop" className="ns-pin px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div className="ns-pin-left flex items-center py-32 md:py-48">
            <div>
              <h2
                className="text-[clamp(2.2rem,4vw,3.5rem)] tracking-[-0.03em]"
                style={{
                  fontFamily: "var(--font-display), system-ui, sans-serif",
                }}
              >
                The shop after hours looks like a set. The cuts don’t.
              </h2>
              <p className="mt-8 max-w-sm text-white/50">
                Steel, leather, soft towels. Chairs limited on purpose.
              </p>
            </div>
          </div>
          <div className="ns-gallery flex flex-col gap-8 pb-32 md:pb-48">
            {[
              "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80",
            ].map((src) => (
              <div key={src} className="relative aspect-[4/5] overflow-hidden">
                <Image src={src} alt="Shop" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="bg-[#8A9BA8] px-6 py-32 text-black md:px-10 md:py-48">
        <div className="ns-rise mx-auto max-w-4xl text-center">
          <h2
            className="text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            Reserve your chair. Leave sharper.
          </h2>
          <p className="mt-6 text-black/65">90 North Avenue · Tue–Sat 10–7</p>
          <Link
            href="#menu"
            className="mt-10 inline-block bg-black px-10 py-4 text-[11px] tracking-[0.22em] uppercase text-white"
          >
            Book now
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-12 md:px-10">
        <p
          className="text-3xl tracking-[0.12em]"
          style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
        >
          NORTHSIDE
        </p>
      </footer>
    </main>
  );
}
