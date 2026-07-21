"use client";

import Image from "next/image";
import { useState } from "react";

type Quote = {
  text: string;
  name: string;
  role: string;
  image: string;
};

export function QuoteCarousel({
  quotes,
  accent = "#C47A3A",
  light = false,
}: {
  quotes: Quote[];
  accent?: string;
  light?: boolean;
}) {
  const [i, setI] = useState(0);
  const q = quotes[i];
  const fg = light ? "text-neutral-900" : "text-white";
  const muted = light ? "text-neutral-500" : "text-white/45";

  return (
    <div className={`grid items-center gap-10 md:grid-cols-12 ${fg}`}>
      <div className="relative flex h-56 items-center justify-center md:col-span-4 md:h-72">
        {quotes.map((item, idx) => (
          <div
            key={item.name}
            className={`absolute overflow-hidden rounded-full border-2 transition-all duration-700 ${
              idx === i
                ? "z-20 h-40 w-40 scale-100 opacity-100 md:h-52 md:w-52"
                : idx === (i + 1) % quotes.length
                  ? "z-10 h-28 w-28 translate-x-16 opacity-50 md:h-36 md:w-36 md:translate-x-24"
                  : "z-0 h-24 w-24 -translate-x-14 opacity-30 md:h-28 md:w-28 md:-translate-x-20"
            }`}
            style={{ borderColor: idx === i ? accent : "transparent" }}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="md:col-span-8">
        <p
          className="max-w-3xl text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.25]"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          “{q.text}”
        </p>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-base">{q.name}</p>
            <p className={`mt-1 text-sm ${muted}`}>{q.role}</p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous quote"
              onClick={() => setI((v) => (v - 1 + quotes.length) % quotes.length)}
              className={`h-11 w-11 border text-lg transition-opacity hover:opacity-60 ${
                light ? "border-neutral-300" : "border-white/25"
              }`}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next quote"
              onClick={() => setI((v) => (v + 1) % quotes.length)}
              className={`h-11 w-11 border text-lg transition-opacity hover:opacity-60 ${
                light ? "border-neutral-300" : "border-white/25"
              }`}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
