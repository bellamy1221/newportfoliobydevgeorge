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

const rooms = [
  {
    title: "Garden",
    meta: "From $240",
    copy: "Private patio, linen bedding, morning light through olive leaves.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Courtyard",
    meta: "From $190",
    copy: "Stone floors, azure textiles, doors that open to the fountain.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Terrace",
    meta: "From $280",
    copy: "Upper loft with a wide terrace and sunset over the hills.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
  },
];

const quotes = [
  {
    text: "We came for two nights and stayed quiet the whole time — in the best way.",
    name: "Amelia R.",
    role: "Guest, March 2026",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
  },
  {
    text: "The courtyard at dusk is the entire reason to book.",
    name: "Leo Santos",
    role: "Repeat guest",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
];

export default function CasaVerde() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cv-in", {
        opacity: 0,
        y: 36,
        duration: 1.15,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".cv-rise").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.from(".cv-word", {
        opacity: 0.12,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: ".cv-scrub",
          start: "top 70%",
          end: "bottom 40%",
          scrub: true,
        },
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.to(".cv-right", {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: ".cv-pin",
            start: "top top",
            end: "+=150%",
            pin: ".cv-left",
            scrub: true,
          },
        });
      });
    },
    { scope: root },
  );

  const scrub =
    "Shade. Stone. Water. A hotel that asks you to do less.";

  return (
    <main
      id="top"
      ref={root}
      className="w-full max-w-full overflow-x-hidden bg-[#E6E0D4] text-[#1C2922]"
      style={{ fontFamily: "var(--font-dm), system-ui, sans-serif" }}
    >
      <BackToPortfolio light />
      <GlassNav
        brand="Casa Verde"
        brandClassName="font-[family-name:var(--font-outfit)]"
        links={[
          { href: "#rooms", label: "Rooms" },
          { href: "#grounds", label: "Grounds" },
          { href: "#stay", label: "Stay" },
        ]}
      />

      <section className="grid min-h-screen md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-32 md:px-12 md:py-40">
          <p
            className="cv-in mb-5 text-[clamp(2rem,4vw,3rem)] tracking-tight text-[#3F6F5B]"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            Casa Verde
          </p>
          <h1
            className="cv-in max-w-xl text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            A small hotel that feels like a longer exhale.
          </h1>
          <p className="cv-in mt-7 max-w-md text-[#1C2922]/60">
            Twelve rooms around a quiet courtyard — olive shade, azure water,
            breakfast without hurry.
          </p>
          <div className="cv-in mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#stay"
              className="bg-[#3F6F5B] px-9 py-4 text-[11px] tracking-[0.22em] uppercase text-white"
            >
              Check dates
            </Link>
            <Link
              href="#rooms"
              className="border border-[#1C2922]/25 px-9 py-4 text-[11px] tracking-[0.22em] uppercase"
            >
              View rooms
            </Link>
          </div>
        </div>
        <div className="relative min-h-[50vh] md:min-h-screen">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80"
            alt="Courtyard hotel"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      <div
        className="border-y border-[#1C2922]/10 bg-[#3F6F5B] py-4 text-[clamp(1.3rem,3vw,2.1rem)] text-[#E6E0D4]/85"
        style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
      >
        <Marquee
          items={["Courtyard", "Pool", "Terrace", "Garden", "Breakfast", "Quiet"]}
          speed={50}
        />
      </div>

      <section id="rooms" className="px-6 py-32 md:px-10 md:py-48">
        <div className="cv-rise mx-auto max-w-7xl">
          <HorizontalAccordion items={rooms} accent="#5B8FA8" dark={false} />
        </div>
      </section>

      <section className="cv-scrub px-6 py-32 md:px-10 md:py-48">
        <p
          className="mx-auto max-w-4xl text-center text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.25] tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
        >
          {scrub.split(" ").map((w, i) => (
            <span key={i} className="cv-word mr-[0.3em] inline-block">
              {w}
            </span>
          ))}
        </p>
      </section>

      <section id="grounds" className="cv-pin px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div className="cv-left flex items-center py-32 md:py-48">
            <h2
              className="max-w-md text-[clamp(2.2rem,4vw,3.4rem)] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
            >
              Swim between olives. Read until the lanterns come on.
            </h2>
          </div>
          <div className="cv-right flex flex-col gap-8 pb-32 md:pb-48">
            {[
              "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
            ].map((src) => (
              <div key={src} className="relative aspect-[4/5] overflow-hidden">
                <Image src={src} alt="Grounds" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <div className="cv-rise mx-auto max-w-7xl">
          <QuoteCarousel quotes={quotes} accent="#3F6F5B" light />
        </div>
      </section>

      <section id="stay" className="bg-[#5B8FA8] px-6 py-32 text-white md:px-10 md:py-48">
        <div className="cv-rise mx-auto max-w-4xl text-center">
          <h2
            className="text-[clamp(2.5rem,5.5vw,4.6rem)] leading-[0.98] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            Come for a night. Stay for the quiet.
          </h2>
          <Link
            href="#rooms"
            className="mt-12 inline-block bg-[#E6E0D4] px-10 py-4 text-[11px] tracking-[0.22em] uppercase text-[#1C2922]"
          >
            Reserve a room
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#1C2922]/10 px-6 py-12 md:px-10">
        <p
          className="text-2xl"
          style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
        >
          Casa Verde
        </p>
      </footer>
    </main>
  );
}
