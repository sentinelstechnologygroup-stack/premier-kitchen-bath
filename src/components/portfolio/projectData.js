// src/components/portfolio/projectData.js

export const PROJECT_CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "kitchen", label: "Kitchens" },
  { key: "bathroom", label: "Bathrooms" },
  { key: "outdoor", label: "Outdoor Living" },
];

function makeGallery(basePath, count) {
  return Array.from({ length: count }, (_, index) => {
    const num = String(index + 1).padStart(2, "0");
    return {
      src: `${basePath}/${num}.jpg`,
      alt: `Project image ${num}`,
    };
  });
}

/*
  IMAGE STRUCTURE

  /public/images/portfolio/<category>/<slug>/
    hero.jpg
    01.jpg
    02.jpg
    03.jpg
    ...

  Example:
  /public/images/portfolio/kitchen/bellaire-kitchen/
    hero.jpg
    01.jpg
    02.jpg
    03.jpg
    04.jpg
    05.jpg
    06.jpg
*/

export const PROJECTS = [
  {
    slug: "westin-lakes-kitchen",
    title: "Westin Lakes Kitchen",
    category: "kitchen",
    location: "Houston, TX",
    completionDate: "2025",
    subtitle: "Custom kitchen renovation with elevated finishes and functional planning.",
    heroImage: "/images/portfolio/kitchen/westin-lakes-kitchen/hero.jpg",
    cardImage: "/images/portfolio/kitchen/westin-lakes-kitchen/hero.jpg",
    description: [
      "This kitchen renovation was designed to improve flow, storage, and daily usability while creating a more polished architectural presence throughout the main living space.",
      "The finished space balances warm material selections, cleaner sightlines, and a more intentional layout—resulting in a kitchen that feels both refined and highly livable.",
    ],
    gallery: makeGallery("/images/portfolio/kitchen/westin-lakes-kitchen", 12),
  },

  {
    slug: "bellaire-kitchen-master-bath",
    title: "Bellaire Kitchen & Master Bath",
    category: "kitchen",
    location: "Houston, TX",
    completionDate: "2025",
    subtitle: "Kitchen transformation centered on layout efficiency and finish cohesion.",
    heroImage: "/images/portfolio/bathroom/bellaire-kitchen-master-bath/hero.jpg",
    cardImage: "/images/portfolio/bathroom/bellaire-kitchen-master-bath/hero.jpg",
    description: [
      "This project focused on modernizing the kitchen through improved circulation, updated cabinetry, and stronger visual continuity across surfaces and fixtures.",
      "This bathroom renovation was designed to create a calmer, more elevated daily-use space through improved layout planning, layered lighting, and refined finish selections.",
    ],
    gallery: makeGallery("/images/portfolio/bathroom/bellaire-kitchen-master-bath", 5),
  },

  {
    slug: "chenenceaux",
    title: "Chenenceaux Master Bath",
    category: "bathroom",
    location: "Houston, TX",
    completionDate: "2025",
    subtitle: "Primary bath renovation with spa-inspired finishes and improved spatial flow.",
    heroImage: "/images/portfolio/bathroom/chenenceaux/hero.jpg",
    cardImage: "/images/portfolio/bathroom/chenenceaux/hero.jpg",
    description: [
      "This bathroom renovation was designed to create a calmer, more elevated daily-use space through improved layout planning, layered lighting, and refined finish selections.",
      "The final design emphasizes comfort, clarity, and material balance—bringing together functional upgrades with a more timeless visual character.",
    ],
    gallery: makeGallery("/images/portfolio/bathroom/chenenceaux", 11),
  },

  {
    slug: "sable-stone-circle",
    title: "Sable Stone Circle",
    category: "outdoor",
    location: "Houston, TX",
    completionDate: "2025",
    subtitle: "Outdoor living project designed for hosting, flow, and durable finish performance.",
    heroImage: "/images/portfolio/outdoor/sable-stone-circle/hero.jpg",
    cardImage: "/images/portfolio/outdoor/sable-stone-circle/hero.jpg",
    description: [
      "This outdoor project was planned to extend the usable living area of the home with a more intentional environment for gathering, cooking, and entertaining.",
      "Material selections were chosen for durability and visual cohesion, resulting in an outdoor space that feels integrated, substantial, and ready for regular use.",
    ],
    gallery: makeGallery("/images/portfolio/outdoor/sable-stone-circle", 6),
  },

    {
    slug: "Place-Holder",
    title: "Place-Holder",
    category: "bathroom",
    location: "Houston, TX",
    completionDate: "2025",
    subtitle: "Bathroom remodel focused on brighter finishes, better function, and cleaner detailing.",
    heroImage: "/images/portfolio/bathroom/place-holder/hero.jpg",
    cardImage: "/images/portfolio/bathroom/place-holder/hero.jpg",
    description: [
      "This project reworked the bathroom into a more open and usable space with improved fixture placement, finish consistency, and a more intentional visual hierarchy.",
      "The completed room feels brighter, more composed, and better suited to daily use without sacrificing the custom character of the design.",
    ],
    gallery: makeGallery("/images/portfolio/bathroom/place-holder", 8),
  },

      {
    slug: "Place-Holder",
    title: "Place-Holder",
    category: "outdoor",
    location: "Houston, TX",
    completionDate: "2025",
    subtitle: "Bathroom remodel focused on brighter finishes, better function, and cleaner detailing.",
    heroImage: "/images/portfolio/outdoor/place-holder/hero.jpg",
    cardImage: "/images/portfolio/outdoor/place-holder/hero.jpg",
    description: [
    "This outdoor project was planned to extend the usable living area of the home with a more intentional environment for gathering, cooking, and entertaining.",
    "Material selections were chosen for durability and visual cohesion, resulting in an outdoor space that feels integrated, substantial, and ready for regular use.",
    ],
    gallery: makeGallery("/images/portfolio/outdoor/place-holder", 8),
  },

      {
    slug: "Place-Holder",
    title: "Place-Holder",
    category: "kitchen",
    location: "Houston, TX",
    completionDate: "2025",
    subtitle: "Bathroom remodel focused on brighter finishes, better function, and cleaner detailing.",
    heroImage: "/images/portfolio/kitchen/place-holder/hero.jpg",
    cardImage: "/images/portfolio/kitchen/place-holder/hero.jpg",
    description: [
"This project reworked the bathroom into a more open and usable space with improved fixture placement, finish consistency, and a more intentional visual hierarchy.",
      "The completed room feels brighter, more composed, and better suited to daily use without sacrificing the custom character of the design.",
    ],
    gallery: makeGallery("/images/portfolio/kitchen/place-holder", 8),
  },
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category) {
  if (!category || category === "all") return PROJECTS;
  return PROJECTS.filter((project) => project.category === category);
}

export function formatCategoryLabel(category) {
  if (category === "kitchen") return "Kitchen";
  if (category === "bathroom") return "Bathroom";
  if (category === "outdoor") return "Outdoor Living";
  return category;
}