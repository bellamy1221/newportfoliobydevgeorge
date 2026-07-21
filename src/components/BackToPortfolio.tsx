import Link from "next/link";

export function BackToPortfolio({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`fixed top-5 left-5 z-50 text-[11px] tracking-[0.22em] uppercase transition-opacity hover:opacity-60 ${
        light ? "text-white/80" : "text-black/55"
      }`}
    >
      Field / Works
    </Link>
  );
}
