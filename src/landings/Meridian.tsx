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

const pours = [
  {
    title: "Crémant",
    meta: "$14 glass",
    copy: "Bright orchard fruit — the open that starts the night.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Etna",
    meta: "$16 glass",
    copy: "Volcanic rosso with wild cherry and soft grip.",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Chenin",
    meta: "$13 glass",
    copy: "Honey and wet stone — linger-worthy white.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Nebbiolo",
    meta: "$18 glass",
    copy: "Rose, tar, and the long second glass.",
    image:
      "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Meridian() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".mr-in", {
        opacity: 0,
        y: 36,
        duration: 1.15,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".mr-rise").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.fromTo(
        ".mr-scale",
        { scale: 0.86, opacity: 0.35 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".mr-gallery",
            start: "top 75%",
            end: "center center",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        ".mr-card",
        { y: 90, opacity: 0.25 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          ease: "none",
          scrollTrigger: {
            trigger: ".mr-stack",
            start: "top 70%",
            end: "bottom 45%",
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
      className="w-full max-w-full overflow-x-hidden bg-[#160C0C] text-[#F2E8E0]"
      style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
    >
      <BackToPortfolio light />
      <GlassNav
        brand="MERIDIAN"
        brandClassName="font-[family-name:var(--font-bebas)] text-2xl tracking-[0.14em]"
        links={[
          { href: "#wines", label: "Wines" },
          { href: "#night", label: "Night" },
          { href: "#reserve", label: "Reserve" },
        ]}
      />

      <section className="grid min-h-screen md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-32 md:px-12 md:py-40">
          <p
            className="mr-in mb-4 text-5xl tracking-[0.12em] text-[#C4A15A] md:text-6xl"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            MERIDIAN
          </p>
          <h1
            className="mr-in max-w-xl text-[clamp(2.6rem,5.2vw,4.6rem)] leading-[0.98] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            WINE, LOW LIGHT, AND CONVERSATIONS THAT LINGER.
          </h1>
          <p className="mr-in mt-7 max-w-md text-white/55">
            Neighborhood wine bar. Rotating cellar. Candlelit corners. Small
            plates meant for sharing.
          </p>
          <div className="mr-in mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#reserve"
              className="bg-[#A34B4B] px-9 py-4 text-[11px] tracking-[0.22em] uppercase text-white"
            >
              Reserve a table
            </Link>
            <Link
              href="#wines"
              className="border border-[#C4A15A]/50 px-9 py-4 text-[11px] tracking-[0.22em] uppercase text-[#C4A15A]"
            >
              Tonight’s pours
            </Link>
          </div>
        </div>
        <div className="relative min-h-[50vh] md:min-h-screen">
          <Image
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1800&q=80"
            alt="Wine night"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#160C0C]/50" />
        </div>
      </section>

      <div
        className="border-y border-white/10 py-4 text-[clamp(1.5rem,3.5vw,2.5rem)] tracking-[0.1em] text-[#C4A15A]/45"
        style={{ fontFamily: "var(--font-bebas), sans-serif" }}
      >
        <Marquee
          items={["NATURAL", "CLASSIC", "SPARKLING", "OXIDATIVE", "CELLAR", "LATE"]}
          speed={40}
        />
      </div>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <h2
          className="mr-rise mx-auto max-w-5xl text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
        >
          BUILT FOR THE SECOND GLASS
          <span
            className="mx-3 inline-block h-10 w-24 rounded-full bg-cover bg-center align-middle"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1528823872057-9c018a7a4529?auto=format&fit=crop&w=300&q=80)",
            }}
          />
          WHEN THE ROOM SOFTENS.
        </h2>
      </section>

      <section id="wines" className="px-6 py-32 md:px-10 md:py-48">
        <div className="mr-rise mx-auto max-w-7xl">
          <HorizontalAccordion items={pours} accent="#C4A15A" />
        </div>
      </section>

      <section id="night" className="mr-gallery px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto grid max-w-7xl grid-cols-2 grid-flow-dense gap-3 md:grid-cols-4">
          {[
            { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80", span: "col-span-2 row-span-2" },
            { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=700&q=80", span: "col-span-1" },
            { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80", span: "col-span-1" },
            { src: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=900&q=80", span: "col-span-2" },
          ].map((item) => (
            <div
              key={item.src}
              className={`mr-scale relative min-h-[180px] overflow-hidden ${item.span}`}
            >
              <Image src={item.src} alt="Night" fill sizes="40vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mr-stack px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto flex max-w-2xl flex-col gap-5">
          {[
            ["Marinated olives", "$9"],
            ["Whipped ricotta", "$14"],
            ["Sourdough & oil", "$8"],
            ["Cured meats", "$22"],
          ].map(([n, p]) => (
            <div
              key={n}
              className="mr-card flex justify-between border border-white/10 bg-[#1f1212] px-6 py-6"
            >
              <span
                className="text-2xl tracking-tight"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                {n}
              </span>
              <span className="text-[#C4A15A]">{p}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="reserve" className="bg-[#A34B4B] px-6 py-32 text-white md:px-10 md:py-48">
        <div className="mr-rise mx-auto max-w-4xl text-center">
          <h2
            className="text-[clamp(2.6rem,5.5vw,4.8rem)] leading-[0.95] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            SAVE A SEAT FOR TONIGHT
          </h2>
          <p className="mt-6 text-white/75">33 West Meridian · Wed–Sun from 5</p>
          <Link
            href="#wines"
            className="mt-10 inline-block bg-[#160C0C] px-10 py-4 text-[11px] tracking-[0.22em] uppercase text-[#F2E8E0]"
          >
            Reserve now
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-12 md:px-10">
        <p
          className="text-3xl tracking-[0.12em]"
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
        >
          MERIDIAN
        </p>
      </footer>
    </main>
  );
}
