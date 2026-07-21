import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getWork, works } from "@/data/works";
import EmberOak from "@/landings/EmberOak";
import Forme from "@/landings/Forme";
import Solstice from "@/landings/Solstice";
import BloomAtelier from "@/landings/BloomAtelier";
import Northside from "@/landings/Northside";
import CasaVerde from "@/landings/CasaVerde";
import ClayKiln from "@/landings/ClayKiln";
import Lumen from "@/landings/Lumen";
import Meridian from "@/landings/Meridian";
import AtelierNorth from "@/landings/AtelierNorth";

const landings = {
  "ember-oak": EmberOak,
  forme: Forme,
  solstice: Solstice,
  "bloom-atelier": BloomAtelier,
  northside: Northside,
  "casa-verde": CasaVerde,
  "clay-kiln": ClayKiln,
  lumen: Lumen,
  meridian: Meridian,
  "atelier-north": AtelierNorth,
} as const;

type Slug = keyof typeof landings;

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return { title: "Work — FIELD" };
  return {
    title: `${work.brand} — FIELD`,
    description: work.summary,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!(slug in landings) || !getWork(slug)) notFound();
  const Landing = landings[slug as Slug];
  return <Landing />;
}
