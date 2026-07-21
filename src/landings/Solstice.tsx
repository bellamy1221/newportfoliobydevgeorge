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
import { QuoteCarousel } from "@/components/QuoteCarousel";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const quotes = [
  {
    text: "The crust crackles before it reaches the plate. That’s the whole point.",
    name: "Rosa Almeida",
    role: "Head baker",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    text: "We sell out by noon — and that feels like the right kind of scarcity.",
    name: "Tom Ellison",
    role: "Regular since opening",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Solstice() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".so-in", {
        opacity: 0,
        y: 36,
        duration: 1.1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".so-rise").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 48,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.fromTo(
        ".so-scale",
        { scale: 0.82, opacity: 0.4 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".so-gallery",
            start: "top 75%",
            end: "bottom 40%",
            scrub: true,
          },
        },
      );

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.to(".so-track", {
          xPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: ".so-horizontal",
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
      className="w-full max-w-full overflow-x-hidden bg-[#241912] text-[#F4EBDD]"
      style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
    >
      <BackToPortfolio light />
      <GlassNav
        brand="Solstice"
        brandClassName="font-[family-name:var(--font-newsreader)] italic normal-case tracking-normal text-base"
        links={[
          { href: "#board", label: "Board" },
          { href: "#ovens", label: "Ovens" },
          { href: "#visit", label: "Visit" },
        ]}
      />

      {/* Editorial Split */}
      <section className="grid min-h-screen md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-32 md:px-12 md:py-40">
          <p
            className="so-in mb-5 text-[clamp(2rem,4vw,3rem)] italic text-[#B88A44]"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
          >
            Solstice Bakehouse
          </p>
          <h1
            className="so-in max-w-xl text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02]"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
          >
            Bread baked with patience, not shortcuts.
          </h1>
          <p className="so-in mt-7 max-w-md text-base leading-relaxed text-white/55">
            A neighborhood bakehouse where dough rests for days and the ovens
            wake before the streetlights go out.
          </p>
          <div className="so-in mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#board"
              className="bg-[#B88A44] px-9 py-4 text-[11px] tracking-[0.22em] uppercase text-[#241912]"
            >
              Today’s loaves
            </Link>
            <Link
              href="#visit"
              className="border border-white/30 px-9 py-4 text-[11px] tracking-[0.22em] uppercase"
            >
              Find the yard
            </Link>
          </div>
        </div>
        <div className="relative min-h-[50vh] md:min-h-screen">
          <Image
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1800&q=80"
            alt="Artisan loaves"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      <div
        className="border-y border-white/10 py-5 text-[clamp(1.4rem,3.5vw,2.3rem)] italic text-white/30"
        style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
      >
        <Marquee
          items={["Levain", "Rye", "Batard", "Croissant", "Focaccia", "Brioche"]}
          speed={48}
        />
      </div>

      <section id="board" className="px-6 py-32 md:px-10 md:py-48">
        <h2
          className="so-rise mx-auto mb-16 max-w-7xl text-[clamp(2.2rem,4vw,3.4rem)] italic"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          From the board — until it’s gone
        </h2>
        <div className="so-rise mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {[
            ["Country Levain", "72-hour ferment", "$9"],
            ["Seeded Rye", "Caraway depth", "$10"],
            ["Olive Batard", "Castelvetrano", "$11"],
            ["Milk Bread", "Morning toast", "$8"],
          ].map(([n, d, p]) => (
            <div
              key={n}
              className="group flex items-end justify-between gap-6 border border-white/10 p-8 transition-colors hover:border-[#B88A44]/60"
            >
              <div>
                <h3
                  className="text-2xl italic md:text-3xl"
                  style={{
                    fontFamily: "var(--font-newsreader), Georgia, serif",
                  }}
                >
                  {n}
                </h3>
                <p className="mt-2 text-sm text-white/45">{d}</p>
              </div>
              <span className="text-[#B88A44] transition-transform duration-500 group-hover:translate-x-1">
                {p}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <h2
          className="so-rise mx-auto mb-12 max-w-5xl text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.15] italic"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          Flour
          <span
            className="mx-3 inline-block h-9 w-20 rounded-full bg-cover bg-center align-middle md:h-11 md:w-28"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=300&q=80)",
            }}
          />
          water, salt, and time — nothing rushing them.
        </h2>
      </section>

      <section id="ovens" className="so-horizontal overflow-hidden bg-[#1a120d]">
        <div className="so-track flex w-max gap-8 px-6 py-32 md:gap-10 md:px-10 md:py-40">
          {[
            "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1400&q=80",
            "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1400&q=80",
            "https://images.unsplash.com/photo-1517433670267-41aa1adb5e5e?auto=format&fit=crop&w=1400&q=80",
            "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=1400&q=80",
          ].map((src, i) => (
            <div
              key={src}
              className="relative h-[55vh] w-[70vw] max-w-[640px] shrink-0 overflow-hidden md:w-[38vw]"
            >
              <Image src={src} alt={`Bake ${i + 1}`} fill sizes="40vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="so-gallery px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto grid max-w-7xl grid-cols-2 grid-flow-dense gap-3 md:grid-cols-4 md:gap-4">
          {[
            { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80", span: "col-span-2 row-span-2" },
            { src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80", span: "col-span-1 row-span-1" },
            { src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=700&q=80", span: "col-span-1 row-span-1" },
            { src: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=900&q=80", span: "col-span-2 row-span-1" },
          ].map((item) => (
            <div
              key={item.src}
              className={`so-scale relative aspect-square overflow-hidden ${item.span}`}
            >
              <Image src={item.src} alt="Bakery detail" fill sizes="40vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <div className="so-rise mx-auto max-w-7xl">
          <QuoteCarousel quotes={quotes} accent="#B88A44" />
        </div>
      </section>

      <section id="visit" className="bg-[#B88A44] px-6 py-32 text-[#241912] md:px-10 md:py-48">
        <div className="so-rise mx-auto max-w-4xl text-center">
          <h2
            className="text-[clamp(2.5rem,5vw,4.4rem)] italic leading-[1]"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
          >
            Come early. The best loaves leave first.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[#241912]/70">
            8 Oven Yard · Wed–Sun 7:30–2 or until sold out.
          </p>
          <Link
            href="#board"
            className="mt-10 inline-block bg-[#241912] px-10 py-4 text-[11px] tracking-[0.22em] uppercase text-[#F4EBDD]"
          >
            See the board
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-12 md:px-10">
        <p
          className="text-2xl italic"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          Solstice Bakehouse
        </p>
      </footer>
    </main>
  );
}
