export type GalleryImage = {
  src: string;
  alt: string;
  label: string;
  kind: "property" | "context";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/client/courtyard.webp",
    alt: "Paved courtyard and covered outdoor seating at Dlombi's Guesthouse",
    label: "Outdoor spaces",
    kind: "property",
  },
  {
    src: "/images/client/bedroom.webp",
    alt: "Guest room with a neatly made bed and dark upholstered headboard",
    label: "A place to rest",
    kind: "property",
  },
  {
    src: "/images/client/garden.webp",
    alt: "Landscaped garden with paths, shrubs and mature trees",
    label: "Garden",
    kind: "property",
  },
  {
    src: "/images/client/patio.webp",
    alt: "Covered patio with outdoor seating beside the courtyard",
    label: "A moment outdoors",
    kind: "property",
  },
  {
    src: "/images/client/bathroom.webp",
    alt: "Bathroom with a bathtub and tiled floor",
    label: "Bathroom",
    kind: "property",
  },
  {
    src: "/images/client/sitting-area.webp",
    alt: "Guest room sitting area with a television and small refrigerator",
    label: "Room details",
    kind: "property",
  },
  {
    src: "/images/stock/piet-retief-landscape.webp",
    alt: "Illustrative South African countryside landscape near Piet Retief; not a photograph of the guesthouse",
    label: "South African countryside · illustrative",
    kind: "context",
  },
];
