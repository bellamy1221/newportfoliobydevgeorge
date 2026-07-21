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
    text: "Every bowl feels slightly different — and that’s the luxury.",
    name: "Mira Kline",
    role: "Collector",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
  },
  {
    text: "We commissioned a full table set. Still our favorite thing we own.",
    name: "The Ortiz family",
    role: "Commission clients",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
];

export default function ClayKiln() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".ck-in", {
        opacity: 0,
        y: 36,
        duration: 1.15,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.to(".ck-hero-bg", {
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".ck-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".ck-rise").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 48,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.from(".ck-word", {
        opacity: 0.12,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: ".ck-scrub",
          start: "top 70%",
          end: "bottom 40%",
          scrub: true,
        },
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.to(".ck-track", {
          xPercent: -52,
          ease: "none",
          scrollTrigger: {
            trigger: ".ck-horizontal",
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

  const scrub =
    "Throw. Trim. Dry. Fire. Objects meant for hands, not shelves.";

  return (
    <main
      id="top"
      ref={root}
      className="w-full max-w-full overflow-x-hidden bg-[#D6C2A3] text-[#2C2825]"
      style={{ fontFamily: "var(--font-dm), system-ui, sans-serif" }}
    >
      <BackToPortfolio />
      <GlassNav
        light
        brand="Clay & Kiln"
        brandClassName="font-[family-name:var(--font-fraunces)] italic normal-case tracking-normal"
        links={[
          { href: "#collection", label: "Collection" },
          { href: "#making", label: "Making" },
          { href: "#studio", label: "Studio" },
        ]}
      />

      <section className="ck-hero relative flex min-h-screen items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=2400&q=80"
            alt="Ceramics"
            fill
            priority
            sizes="100vw"
            className="ck-hero-bg object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,194,163,0.2),rgba(214,194,163,0.88)_78%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-28 text-center md:px-10">
          <p
            className="ck-in mb-5 text-[clamp(2.2rem,5vw,3.6rem)] italic text-[#5B7C99]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Clay & Kiln
          </p>
          <h1
            className="ck-in max-w-6xl text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.02]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Handmade vessels for everyday rituals.
          </h1>
          <p className="ck-in mx-auto mt-7 max-w-lg text-[#2C2825]/65">
            Wheel-thrown tableware from a neighborhood studio — clay under the
            nails, glaze that catches light.
          </p>
          <div className="ck-in mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#collection"
              className="bg-[#2C2825] px-9 py-4 text-[11px] tracking-[0.22em] uppercase text-[#D6C2A3]"
            >
              Shop collection
            </Link>
            <Link
              href="#studio"
              className="border border-[#2C2825]/30 px-9 py-4 text-[11px] tracking-[0.22em] uppercase"
            >
              Visit studio
            </Link>
          </div>
        </div>
      </section>

      <div
        className="border-y border-[#2C2825]/10 bg-[#5B7C99] py-4 text-[clamp(1.3rem,3vw,2.1rem)] italic text-[#D6C2A3]/9"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
      >
        <Marquee
          items={["Throw", "Trim", "Dry", "Bisque", "Glaze", "Fire"]}
          speed={42}
        />
      </div>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <h2
          className="ck-rise mx-auto max-w-5xl text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.12] italic"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Objects meant to be used
          <span
            className="mx-3 inline-block h-10 w-24 rounded-full bg-cover bg-center align-middle"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=300&q=80)",
            }}
          />
          not dusted.
        </h2>
      </section>

      <section id="collection" className="px-6 py-32 md:px-10 md:py-48">
        <div className="ck-rise mx-auto grid max-w-7xl grid-cols-2 grid-flow-dense gap-4 md:grid-cols-4">
          {[
            {
              n: "Everyday Bowl",
              p: "$48",
              img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
              span: "md:col-span-2 md:row-span-2",
            },
            {
              n: "Pouring Vessel",
              p: "$86",
              img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
              span: "md:col-span-1",
            },
            {
              n: "Dinner Plate",
              p: "$54",
              img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
              span: "md:col-span-1",
            },
            {
              n: "Tea Cup",
              p: "$36",
              img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
              span: "md:col-span-2",
            },
          ].map((item) => (
            <article
              key={item.n}
              className={`group relative overflow-hidden bg-[#cbb595] ${item.span} min-h-[220px]`}
            >
              <div className="relative aspect-[4/5] h-full min-h-[220px]">
                <Image
                  src={item.img}
                  alt={item.n}
                  fill
                  sizes="40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-black/55 to-transparent p-5 text-white">
                <span
                  className="italic"
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                  }}
                >
                  {item.n}
                </span>
                <span>{item.p}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ck-scrub px-6 py-32 md:px-10 md:py-48">
        <p
          className="mx-auto max-w-5xl text-center text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.25] italic"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          {scrub.split(" ").map((w, i) => (
            <span key={i} className="ck-word mr-[0.28em] inline-block">
              {w}
            </span>
          ))}
        </p>
      </section>

      <section id="making" className="ck-horizontal overflow-hidden bg-[#2C2825] text-[#D6C2A3]">
        <div className="ck-track flex w-max gap-8 px-6 py-32 md:gap-10 md:px-10 md:py-40">
          {[
            "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1400&q=80",
            "https://images.unsplash.com/photo-1493106819501-66d381c466f1?auto=format&fit=crop&w=1400&q=80",
            "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=1400&q=80",
          ].map((src, i) => (
            <div
              key={src}
              className="relative h-[55vh] w-[70vw] max-w-[640px] shrink-0 overflow-hidden md:w-[40vw]"
            >
              <Image src={src} alt={`Making ${i + 1}`} fill sizes="40vw" className="object-cover" />
            </div>
          ))}
          <div className="flex w-[50vw] max-w-[420px] shrink-0 flex-col justify-center">
            <h2
              className="text-[clamp(2rem,4vw,3.2rem)] italic"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              From wheel to kiln — the slow part is the point.
            </h2>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <div className="ck-rise mx-auto max-w-7xl">
          <QuoteCarousel quotes={quotes} accent="#5B7C99" light />
        </div>
      </section>

      <section id="studio" className="bg-[#5B7C99] px-6 py-32 text-[#D6C2A3] md:px-10 md:py-48">
        <div className="ck-rise mx-auto max-w-4xl text-center">
          <h2
            className="text-[clamp(2.5rem,5vw,4.4rem)] italic leading-[1]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Bring a handmade piece to your table.
          </h2>
          <p className="mt-6 text-[#D6C2A3]/75">12 Clay Road · Fri–Sun 11–5</p>
          <Link
            href="#collection"
            className="mt-10 inline-block bg-[#2C2825] px-10 py-4 text-[11px] tracking-[0.22em] uppercase text-[#D6C2A3]"
          >
            Shop now
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#2C2825]/10 px-6 py-12 md:px-10">
        <p
          className="text-2xl italic"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Clay & Kiln
        </p>
      </footer>
    </main>
  );
}
