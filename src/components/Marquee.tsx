"use client";

type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: number;
};

export function Marquee({ items, className = "", speed = 40 }: MarqueeProps) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-flex w-max"
        style={{
          animation: `field-marquee ${speed}s linear infinite`,
        }}
      >
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="mx-8 inline-flex items-center gap-8">
            <span>{item}</span>
            <span aria-hidden className="opacity-35">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
