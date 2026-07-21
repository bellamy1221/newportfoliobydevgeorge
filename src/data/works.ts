export type Work = {
  slug: string;
  brand: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  accent: string;
  cover: string;
  coverAlt: string;
};

export const works: Work[] = [
  {
    slug: "ember-oak",
    brand: "Ember & Oak",
    title: "Specialty coffee, roasted for the neighborhood",
    category: "Coffee Roaster",
    year: "2026",
    summary:
      "A cinematic landing for a local specialty roaster — ritual, origin, and the morning cup.",
    accent: "#C47A3A",
    cover:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Freshly poured specialty coffee in a ceramic cup",
  },
  {
    slug: "forme",
    brand: "Forme",
    title: "Pilates that rebuilds how you move",
    category: "Fitness Studio",
    year: "2026",
    summary:
      "Soft editorial energy for a boutique pilates studio focused on strength and presence.",
    accent: "#6B8F71",
    cover:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Pilates studio with natural light and mats",
  },
  {
    slug: "solstice",
    brand: "Solstice Bakehouse",
    title: "Bread baked with patience, not shortcuts",
    category: "Artisan Bakery",
    year: "2026",
    summary:
      "Warm, tactile storytelling for a neighborhood bakehouse and its daily sourdough ritual.",
    accent: "#B88A44",
    cover:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Artisan bread loaves on a wooden board",
  },
  {
    slug: "bloom-atelier",
    brand: "Bloom Atelier",
    title: "Florals composed like quiet architecture",
    category: "Florist",
    year: "2026",
    summary:
      "An airy, botanical landing for a local florist arranging events and weekly stems.",
    accent: "#C97B8A",
    cover:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Soft pink and white floral arrangement",
  },
  {
    slug: "northside",
    brand: "Northside",
    title: "Cuts with precision. Atmosphere included.",
    category: "Barbershop",
    year: "2026",
    summary:
      "Ink-black editorial for a modern barbershop that treats grooming as craft.",
    accent: "#8A9BA8",
    cover:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Barbershop interior with classic chairs",
  },
  {
    slug: "casa-verde",
    brand: "Casa Verde",
    title: "A small hotel that feels like a longer exhale",
    category: "Boutique Stay",
    year: "2026",
    summary:
      "Mediterranean calm for a boutique stay — rooms, courtyard, and slow mornings.",
    accent: "#3F6F5B",
    cover:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Boutique hotel courtyard with plants",
  },
  {
    slug: "clay-kiln",
    brand: "Clay & Kiln",
    title: "Handmade vessels for everyday rituals",
    category: "Ceramics Studio",
    year: "2026",
    summary:
      "Raw material poetry for a ceramics studio selling wheel-thrown tableware.",
    accent: "#5B7C99",
    cover:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Handmade ceramic bowls on a studio table",
  },
  {
    slug: "lumen",
    brand: "Lumen",
    title: "Skincare rooted in mineral clarity",
    category: "Local Skincare",
    year: "2026",
    summary:
      "Clean, luminous product storytelling for a small-batch skincare brand.",
    accent: "#8E9A8B",
    cover:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Minimal skincare bottles on stone surface",
  },
  {
    slug: "meridian",
    brand: "Meridian",
    title: "Wine, low light, and conversations that linger",
    category: "Wine Bar",
    year: "2026",
    summary:
      "Night-forward atmosphere for a neighborhood wine bar with a rotating cellar.",
    accent: "#A34B4B",
    cover:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Wine glasses and bottles in warm light",
  },
  {
    slug: "atelier-north",
    brand: "Atelier North",
    title: "Interiors shaped around how people actually live",
    category: "Interior Studio",
    year: "2026",
    summary:
      "Architectural clarity for a local interior design practice and residential work.",
    accent: "#B08968",
    cover:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Modern living room with natural materials",
  },
];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}
