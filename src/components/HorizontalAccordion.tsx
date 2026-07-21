"use client";

import Image from "next/image";
import { useState } from "react";

type AccordionItem = {
  title: string;
  copy: string;
  image: string;
  meta?: string;
};

export function HorizontalAccordion({
  items,
  accent = "#C47A3A",
  dark = true,
}: {
  items: AccordionItem[];
  accent?: string;
  dark?: boolean;
}) {
  const [active, setActive] = useState(0);
  const text = dark ? "text-white" : "text-neutral-900";
  const muted = dark ? "text-white/55" : "text-neutral-600";

  return (
    <div className="flex h-[70vh] min-h-[420px] w-full overflow-hidden">
      {items.map((item, i) => {
        const open = active === i;
        return (
          <button
            key={item.title}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className={`group relative overflow-hidden transition-all duration-700 ease-out ${
              open ? "flex-[3.2]" : "flex-[0.85]"
            } ${text}`}
            style={{ minWidth: open ? undefined : "4.5rem" }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="40vw"
              className={`object-cover transition-transform duration-700 ease-out ${
                open ? "scale-100" : "scale-110"
              } ${open ? "opacity-100" : "opacity-70"}`}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                open
                  ? dark
                    ? "bg-gradient-to-t from-black/80 via-black/25 to-transparent"
                    : "bg-gradient-to-t from-white/90 via-white/20 to-transparent"
                  : "bg-black/45"
              }`}
            />
            <div
              className={`absolute inset-0 flex ${
                open
                  ? "flex-col justify-end p-6 md:p-10 text-left"
                  : "items-end justify-center pb-8"
              }`}
            >
              <span
                className={`font-[family-name:var(--font-display)] tracking-tight transition-all duration-500 ${
                  open
                    ? "mb-3 text-3xl md:text-5xl"
                    : "rotate-180 text-sm md:text-base [writing-mode:vertical-rl]"
                }`}
              >
                {item.title}
              </span>
              {open && (
                <div className="max-w-sm animate-in fade-in duration-500">
                  {item.meta && (
                    <p
                      className="mb-2 text-[11px] tracking-[0.22em] uppercase"
                      style={{ color: accent }}
                    >
                      {item.meta}
                    </p>
                  )}
                  <p className={`text-sm leading-relaxed md:text-base ${muted}`}>
                    {item.copy}
                  </p>
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
