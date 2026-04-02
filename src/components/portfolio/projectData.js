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
  slug: "taj-mahal-quartzite-kitchen",
  title: "Taj Mahal Quartzite Kitchen",
  category: "kitchen",
  location: "Fulshear, TX",
  // completionDate: "2025",
  subtitle: "Fulshear kitchen remodel featuring Taj Mahal quartzite countertops, painted cabinetry, and a custom bar design.",
  heroImage: "/images/portfolio/kitchen/taj-mahal-quartzite-kitchen/hero.jpg",
  cardImage: "/images/portfolio/kitchen/taj-mahal-quartzite-kitchen/hero.jpg",
  description: [
    "This Fulshear kitchen remodel features 3 cm Taj Mahal quartzite countertops, professionally fabricated and installed for a durable, high-end natural stone finish. The existing cabinetry was refinished with custom paint, delivering a refreshed and cohesive kitchen design without a full cabinet replacement.",
    "A custom-built bar area was added to improve both functionality and flow, anchored by a full-height hex mosaic tile backsplash that creates a clean, textured focal point. Custom floating shelves provide additional storage and display space, completing a modern and highly functional kitchen renovation."
  ],
  gallery: makeGallery("/images/portfolio/kitchen/taj-mahal-quartzite-kitchen", 12),
},

  {
    slug: "bellaire-kitchen-master-bath",
    title: "Bellaire Kitchen & Master Bath",
    category: "kitchen",
    location: "Houston, TX",
    // completionDate: "2025",
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
    // completionDate: "2025",
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
    // completionDate: "2025",
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
  slug: "via-lactea-granite-kitchen",
  title: "Via Lactea Granite Kitchen Remodel with Greige Cabinets",
  category: "kitchen",
  location: "Houston, TX",
  completionDate: "2025",
  subtitle: "Houston kitchen remodel featuring Via Lactea granite countertops and modern greige cabinetry.",
  heroImage: "/images/portfolio/kitchen/via-lactea-granite-kitchen/hero.jpg",
  cardImage: "/images/portfolio/kitchen/via-lactea-granite-kitchen/hero.jpg",
  description: [
    "This Houston kitchen remodel features 3 cm Via Lactea granite countertops, professionally fabricated and installed for a bold, high-contrast natural stone finish. The space is paired with J&K RTA full overlay, soft-closing cabinets in a greige finish, creating a clean and modern kitchen design.",
    "A black granite composite undermount sink adds a seamless, low-profile look, while the natural movement of the granite introduces depth and visual interest. The combination of materials delivers a refined, durable, and high-end kitchen renovation."
  ],
  gallery: makeGallery("/images/portfolio/kitchen/via-lactea-granite-kitchen", 8),
},

      {
    slug: "Place-Holder",
    title: "Place Holder",
    category: "outdoor",
    location: "Houston, TX",
    // completionDate: "2025",
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
  slug: "marble-kitchen-with-custom-navy-island",
  title: "Marble Kitchen with Custom Navy Island",
  category: "kitchen",
  location: "Houston, TX",
  // completionDate: "2025",
  subtitle: "Houston kitchen remodel featuring custom cabinetry, marble countertops, and a functional island design.",
  heroImage: "/images/portfolio/kitchen/marble-kitchen-with-custom-navy-island/hero.jpg",
  cardImage: "/images/portfolio/kitchen/marble-kitchen-with-custom-navy-island/hero.jpg",
  description: [
    "This Houston kitchen remodel features 3 cm Fantasy Brown marble countertops, professionally fabricated and installed for a durable, high-end finish. The space is designed with ceiling-height white shaker cabinets and crown molding, delivering a clean, timeless kitchen design.",
    "A custom navy blue island adds bold contrast and includes a butcher block extension for added workspace and functionality. The remodel is completed with a modern tile backsplash and a built-in drop zone with storage and hooks, creating a highly functional and organized kitchen layout."
  ],
  gallery: makeGallery("/images/portfolio/kitchen/marble-kitchen-with-custom-navy-island", 8),
},
{
  slug: "transitional-two-tone-kitchen",
  title: "Transitional Style Kitchen with Two-Tone Cabinets",
  category: "kitchen",
  location: "Houston, TX",
  completionDate: "2025",
  subtitle: "Houston kitchen remodel featuring Colonial Cream granite and two-tone transitional cabinetry.",
  heroImage: "/images/portfolio/kitchen/transitional-two-tone-kitchen/hero.jpg",
  cardImage: "/images/portfolio/kitchen/transitional-two-tone-kitchen/hero.jpg",
  description: [
    "This Houston kitchen remodel features 3 cm Colonial Cream granite countertops paired with J&K transitional-style cabinetry in a pearl glazed finish along the perimeter and a contrasting hazel-colored island. The combination of warm tones and clean lines creates a timeless and inviting kitchen design.",
    "Updated recessed lighting and pendant lights above the sink enhance both functionality and ambiance, completing the space with a balanced, polished finish suited for everyday use and entertaining."
  ],
  gallery: makeGallery("/images/portfolio/kitchen/transitional-two-tone-kitchen", 25),
},
{
  slug: "white-carrara-quartz-contemporary-kitchen",
  title: "Contemporary Kitchen with White Carrara Quartz",
  category: "kitchen",
  location: "Houston, TX",
  completionDate: "2025",
  subtitle: "Houston kitchen remodel featuring white Carrara quartz countertops and high-contrast cabinetry.",
  heroImage: "/images/portfolio/kitchen/white-carrara-quartz-contemporary-kitchen/hero.jpg",
  cardImage: "/images/portfolio/kitchen/white-carrara-quartz-contemporary-kitchen/hero.jpg",
  description: [
    "This Houston kitchen remodel features 3 cm white Carrara quartz countertops paired with J&K Java Coffee cabinetry, creating a bold, high-contrast modern kitchen design. The clean quartz surface provides durability and a bright, refined finish.",
    "Light tile flooring and a linear glass tile backsplash help open up the space, while the darker cabinetry adds depth and visual balance. Updated lighting completes the remodel, delivering a clean, polished, and contemporary kitchen layout."
  ],
  gallery: makeGallery("/images/portfolio/kitchen/white-carrara-quartz-contemporary-kitchen", 11),
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