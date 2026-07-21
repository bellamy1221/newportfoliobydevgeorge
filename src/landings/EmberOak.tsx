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

const accordion = [
  {
    title: "Guji",
    meta: "Ethiopia · washed",
    copy: "Jasmine, bergamot, and a honey finish — our clearest morning cup.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "House",
    meta: "Espresso blend",
    copy: "Cocoa and almond built for milk drinks without losing bite.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Huehue",
    meta: "Guatemala · honey",
    copy: "Dark chocolate and orange zest — evening coffee that still lifts.",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Decaf",
    meta: "Sugarcane process",
    copy: "Full body without the buzz. Same drum. Same patience.",
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80",
  },
];

const quotes = [
  {
    text: "The cellar feels like a film set — and the coffee tastes like someone cared.",
    name: "Maya Chen",
    role: "Neighborhood regular",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    text: "We serve their espresso at our café. Guests ask for the bag before the bill.",
    name: "Jonah Reed",
    role: "Café owner",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    text: "Slow roast, sharp cupping, zero ego. Exactly what specialty should feel like.",
    name: "Ava Okonkwo",
    role: "Roaster friend",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
];

export default function EmberOak() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".eo-in", {
        opacity: 0,
        y: 42,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.to(".eo-hero-bg", {
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: ".eo-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".eo-rise").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 56,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.from(".eo-word", {
        opacity: 0.12,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: ".eo-scrub",
          start: "top 70%",
          end: "bottom 35%",
          scrub: true,
        },
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.to(".eo-pin-gallery", {
          yPercent: -40,
          ease: "none",
          scrollTrigger: {
            trigger: ".eo-desire",
            start: "top top",
            end: "+=180%",
            pin: ".eo-pin-title",
            scrub: 0.8,
          },
        });
      });

      gsap.fromTo(
        ".eo-bento img",
        { scale: 0.82, opacity: 0.35 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".eo-bento",
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        },
      );
    },
    { scope: root },
  );

  const scrub =
    "Soil remembers. Fire listens. The cup is where the mountain finally speaks.";

  return (
    <main
      id="top"
      ref={root}
      className="w-full max-w-full overflow-x-hidden bg-[#100e0c] text-[#f3eee6]"
      style={{ fontFamily: "var(--font-dm), system-ui, sans-serif" }}
    >
      <BackToPortfolio light />
      <GlassNav
        brand="Ember & Oak"
        brandClassName="font-[family-name:var(--font-outfit)]"
        links={[
          { href: "#roast", label: "Roast" },
          { href: "#cellar", label: "Cellar" },
          { href: "#visit", label: "Visit" },
        ]}
      />

      {/* ATTENTION — Cinematic Center */}
      <section className="eo-hero relative flex min-h-screen items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2400&q=80"
            alt="Pour-over coffee"
            fill
            priority
            sizes="100vw"
            className="eo-hero-bg object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,14,12,0.25)_0%,rgba(16,14,12,0.72)_70%,rgba(16,14,12,0.92)_100%)]" />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-16 pt-28 text-center md:px-10">
          <p
            className="eo-in mb-6 text-[clamp(2.4rem,6vw,4rem)] tracking-[0.06em] text-[#C47A3A]"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            Ember & Oak
          </p>
          <h1
            className="eo-in max-w-6xl text-[clamp(2.6rem,5.4vw,5.4rem)] leading-[1.02] tracking-[-0.035em]"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            Coffee roasted slow enough to taste the origin.
          </h1>
          <p className="eo-in mt-7 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
            Neighborhood cellar. Twelve-kilo batches. Cups that still remember
            the farm.
          </p>
          <div className="eo-in mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#roast"
              className="bg-[#C47A3A] px-9 py-4 text-[11px] tracking-[0.22em] uppercase text-[#100e0c]"
            >
              Shop the roast
            </Link>
            <Link
              href="#visit"
              className="border border-white/35 px-9 py-4 text-[11px] tracking-[0.22em] uppercase text-white"
            >
              Visit the cellar
            </Link>
          </div>
        </div>
      </section>

      <div
        className="border-y border-white/10 py-5 text-[clamp(1.4rem,3.5vw,2.5rem)] tracking-tight text-white/25"
        style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
      >
        <Marquee
          items={["Ethiopia", "Colombia", "Guatemala", "Kenya", "Brazil", "Costa Rica"]}
          speed={42}
        />
      </div>

      {/* INTEREST — inline typography + gapless bento */}
      <section className="px-6 py-32 md:px-10 md:py-48">
        <div className="eo-rise mx-auto max-w-7xl">
          <h2
            className="max-w-5xl text-[clamp(2.2rem,4.6vw,4.2rem)] leading-[1.08] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            We roast for the people who live
            <span
              className="mx-3 inline-block h-10 w-24 rounded-full bg-cover bg-center align-middle md:h-12 md:w-32"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80)",
              }}
            />
            three blocks away — and anyone who drinks with attention.
          </h2>
        </div>

        <div className="eo-bento mx-auto mt-20 grid max-w-7xl auto-rows-[140px] grid-cols-2 grid-flow-dense gap-3 md:auto-rows-[180px] md:grid-cols-6 md:gap-4">
          <div className="relative col-span-2 row-span-2 overflow-hidden md:col-span-3 md:row-span-3">
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80"
              alt="Espresso pour"
              fill
              sizes="50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative col-span-2 row-span-2 overflow-hidden md:col-span-3 md:row-span-2">
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
              alt="Cafe light"
              fill
              sizes="50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative col-span-1 row-span-2 overflow-hidden md:col-span-2 md:row-span-2">
            <Image
              src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80"
              alt="Latte art"
              fill
              sizes="33vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="flex col-span-1 row-span-2 flex-col justify-end bg-[#C47A3A] p-5 text-[#100e0c] md:col-span-1 md:row-span-2 md:p-6">
            <p
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
            >
              12kg
            </p>
            <p className="mt-2 text-[11px] tracking-[0.18em] uppercase">
              Batch size
            </p>
          </div>
          <div className="relative col-span-2 row-span-2 overflow-hidden md:col-span-3 md:row-span-2">
            <Image
              src="https://images.unsplash.com/photo-1453614512568-c40289a327ad?auto=format&fit=crop&w=1000&q=80"
              alt="Beans"
              fill
              sizes="50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section id="roast" className="px-6 py-32 md:px-10 md:py-48">
        <div className="eo-rise mx-auto mb-14 flex max-w-7xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2
            className="max-w-xl text-[clamp(2.2rem,4vw,3.6rem)] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            Hover the board. Taste the difference.
          </h2>
          <p className="max-w-sm text-sm text-white/45">
            Four active lots. Expanded panels reveal the cup notes.
          </p>
        </div>
        <div className="eo-rise mx-auto max-w-7xl">
          <HorizontalAccordion items={accordion} accent="#C47A3A" />
        </div>
      </section>

      {/* DESIRE — scrub text */}
      <section className="eo-scrub px-6 py-32 md:px-10 md:py-48">
        <p
          className="mx-auto max-w-5xl text-center text-[clamp(1.85rem,4.2vw,3.4rem)] leading-[1.25] tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
        >
          {scrub.split(" ").map((w, idx) => (
            <span key={idx} className="eo-word mr-[0.28em] inline-block">
              {w}
            </span>
          ))}
        </p>
      </section>

      {/* DESIRE — pin split */}
      <section id="cellar" className="eo-desire px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div className="eo-pin-title flex items-center py-32 md:py-48">
            <div>
              <h2
                className="max-w-md text-[clamp(2.2rem,4vw,3.5rem)] tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                Inside the cellar before the city wakes.
              </h2>
              <p className="mt-8 max-w-sm text-white/50">
                Drum heat. First crack. Cupping spoons. Then bags for the street
                upstairs.
              </p>
            </div>
          </div>
          <div className="eo-pin-gallery flex flex-col gap-8 pb-32 md:pb-48">
            {[
              "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
            ].map((src) => (
              <div key={src} className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={src}
                  alt="Cellar atmosphere"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="border-y border-white/10 px-6 py-32 md:px-10 md:py-48">
        <div className="eo-rise mx-auto max-w-7xl">
          <QuoteCarousel quotes={quotes} accent="#C47A3A" />
        </div>
      </section>

      {/* Visit + CTA */}
      <section id="visit" className="px-6 py-32 md:px-10 md:py-48">
        <div className="eo-rise mx-auto grid max-w-7xl gap-10 md:grid-cols-12 md:gap-6">
          <div className="relative aspect-[4/5] overflow-hidden md:col-span-5">
            <Image
              src="https://images.unsplash.com/photo-1453614512568-c40289a327ad?auto=format&fit=crop&w=1200&q=80"
              alt="Visit the shop"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
            <h2
              className="text-[clamp(2.2rem,4vw,3.4rem)] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
            >
              14 Mercer Lane
            </h2>
            <p className="mt-6 max-w-md text-white/55">
              Tue–Sun 7–4. Cupping demos Saturday 9am. Subscriptions ship every
              fortnight.
            </p>
            <Link
              href="#roast"
              className="mt-10 inline-flex w-fit bg-white px-8 py-4 text-[11px] tracking-[0.22em] uppercase text-[#100e0c]"
            >
              Start a subscription
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#C47A3A] px-6 py-32 text-[#100e0c] md:px-10 md:py-48">
        <div className="eo-rise mx-auto max-w-5xl text-center">
          <h2
            className="text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            Taste the next harvest before it leaves the drum.
          </h2>
          <Link
            href="#roast"
            className="mt-12 inline-block bg-[#100e0c] px-10 py-4 text-[11px] tracking-[0.22em] uppercase text-[#f3eee6]"
          >
            Order today
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-12 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:justify-between">
          <p
            className="text-2xl tracking-tight"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            Ember & Oak
          </p>
          <p className="text-sm text-white/40">hello@emberandoak.co</p>
        </div>
      </footer>
    </main>
  );
}
