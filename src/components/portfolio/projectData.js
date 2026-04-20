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
    subtitle:
      "Fulshear kitchen remodel featuring Taj Mahal quartzite countertops, painted cabinetry, and a custom bar design.",
    heroImage: "/images/portfolio/kitchen/taj-mahal-quartzite-kitchen/hero.jpg",
    cardImage: "/images/portfolio/kitchen/taj-mahal-quartzite-kitchen/hero.jpg",
    description: [
      "This Fulshear kitchen remodel features 3 cm Taj Mahal quartzite countertops, professionally fabricated and installed for a durable, high-end natural stone finish. The existing cabinetry was refinished with custom paint, delivering a refreshed and cohesive kitchen design without a full cabinet replacement.",
      "A custom-built bar area was added to improve both functionality and flow, anchored by a full-height hex mosaic tile backsplash that creates a clean, textured focal point. Custom floating shelves provide additional storage and display space, completing a modern and highly functional kitchen renovation.",
    ],
    gallery: makeGallery("/images/portfolio/kitchen/taj-mahal-quartzite-kitchen", 12),
  },

  {
    slug: "open-kitchen-with-built-in-pantry",
    title: "Open Kitchen with Built-In Pantry",
    category: "kitchen",
    location: "Houston, TX",
    completionDate: "2025",
    subtitle:
      "Open-concept kitchen remodel featuring white and navy shaker cabinetry, Carrara quartz countertops, and improved storage.",
    heroImage: "/images/portfolio/kitchen/open-kitchen-with-built-in-pantry/hero.jpg",
    cardImage: "/images/portfolio/kitchen/open-kitchen-with-built-in-pantry/hero.jpg",
    description: [
      "This kitchen was fully renovated to create a more open and functional space. We removed the existing pantry and raised bar top to improve layout and flow.",
      "We installed white J&K shaker-style cabinets on the uppers and navy blue lowers. The new cabinet pantry features roll-out drawers below and adjustable shelving above for better storage and accessibility.",
      "In-stock 3 cm Carrara quartz countertops were installed throughout, including a single-level surface for a more usable seating area. The project was completed with new flooring, appliances, lighting, and finishes, resulting in a clean and updated kitchen.",
    ],
    gallery: makeGallery("/images/portfolio/kitchen/open-kitchen-with-built-in-pantry", 6),
  },

  {
    slug: "bellaire-kitchen-master-bath",
    title: "Bellaire Kitchen & Master Bath",
    category: "kitchen",
    location: "Bellaire, TX",
    subtitle:
      "Kitchen transformation centered on layout efficiency and finish cohesion.",
    heroImage: "/images/portfolio/bathroom/bellaire-kitchen-master-bath/hero.jpg",
    cardImage: "/images/portfolio/bathroom/bellaire-kitchen-master-bath/hero.jpg",
    description: [
      "This project focused on modernizing the kitchen through improved circulation, updated cabinetry, and stronger visual continuity across surfaces and fixtures.",
      "This bathroom renovation was designed to create a calmer, more elevated daily-use space through improved layout planning, layered lighting, and refined finish selections.",
    ],
    gallery: makeGallery("/images/portfolio/bathroom/bellaire-kitchen-master-bath", 5),
  },

  {
    slug: "via-lactea-granite-kitchen",
    title: "Via Lactea Granite Kitchen Remodel with Greige Cabinets",
    category: "kitchen",
    location: "Houston, TX",
    completionDate: "2025",
    subtitle:
      "Houston kitchen remodel featuring Via Lactea granite countertops and modern greige cabinetry.",
    heroImage: "/images/portfolio/kitchen/via-lactea-granite-kitchen/hero.jpg",
    cardImage: "/images/portfolio/kitchen/via-lactea-granite-kitchen/hero.jpg",
    description: [
      "This Houston kitchen remodel features 3 cm Via Lactea granite countertops, professionally fabricated and installed for a bold, high-contrast natural stone finish. The space is paired with J&K RTA full overlay, soft-closing cabinets in a greige finish, creating a clean and modern kitchen design.",
      "A black granite composite undermount sink adds a seamless, low-profile look, while the natural movement of the granite introduces depth and visual interest. The combination of materials delivers a refined, durable, and high-end kitchen renovation.",
    ],
    gallery: makeGallery("/images/portfolio/kitchen/via-lactea-granite-kitchen", 8),
  },

  {
    slug: "marble-kitchen-with-custom-navy-island",
    title: "Marble Kitchen with Custom Navy Island",
    category: "kitchen",
    location: "Houston, TX",
    subtitle:
      "Houston kitchen remodel featuring custom cabinetry, marble countertops, and a functional island design.",
    heroImage: "/images/portfolio/kitchen/marble-kitchen-with-custom-navy-island/hero.jpg",
    cardImage: "/images/portfolio/kitchen/marble-kitchen-with-custom-navy-island/hero.jpg",
    description: [
      "This Houston kitchen remodel features 3 cm Fantasy Brown marble countertops, professionally fabricated and installed for a durable, high-end finish. The space is designed with ceiling-height white shaker cabinets and crown molding, delivering a clean, timeless kitchen design.",
      "A custom navy blue island adds bold contrast and includes a butcher block extension for added workspace and functionality. The remodel is completed with a modern tile backsplash and a built-in drop zone with storage and hooks, creating a highly functional and organized kitchen layout.",
    ],
    gallery: makeGallery("/images/portfolio/kitchen/marble-kitchen-with-custom-navy-island", 8),
  },

  {
    slug: "transitional-two-tone-kitchen",
    title: "Transitional Style Kitchen with Two-Tone Cabinets",
    category: "kitchen",
    location: "Houston, TX",
    completionDate: "2025",
    subtitle:
      "Houston kitchen remodel featuring Colonial Cream granite and two-tone transitional cabinetry.",
    heroImage: "/images/portfolio/kitchen/transitional-two-tone-kitchen/hero.jpg",
    cardImage: "/images/portfolio/kitchen/transitional-two-tone-kitchen/hero.jpg",
    description: [
      "This Houston kitchen remodel features 3 cm Colonial Cream granite countertops paired with J&K transitional-style cabinetry in a pearl glazed finish along the perimeter and a contrasting hazel-colored island. The combination of warm tones and clean lines creates a timeless and inviting kitchen design.",
      "Updated recessed lighting and pendant lights above the sink enhance both functionality and ambiance, completing the space with a balanced, polished finish suited for everyday use and entertaining.",
    ],
    gallery: makeGallery("/images/portfolio/kitchen/transitional-two-tone-kitchen", 25),
  },

  {
    slug: "white-carrara-quartz-contemporary-kitchen",
    title: "Contemporary Kitchen with White Carrara Quartz",
    category: "kitchen",
    location: "Houston, TX",
    completionDate: "2025",
    subtitle:
      "Houston kitchen remodel featuring white Carrara quartz countertops and high-contrast cabinetry.",
    heroImage: "/images/portfolio/kitchen/white-carrara-quartz-contemporary-kitchen/hero.jpg",
    cardImage: "/images/portfolio/kitchen/white-carrara-quartz-contemporary-kitchen/hero.jpg",
    description: [
      "This Houston kitchen remodel features 3 cm white Carrara quartz countertops paired with J&K Java Coffee cabinetry, creating a bold, high-contrast modern kitchen design. The clean quartz surface provides durability and a bright, refined finish.",
      "Light tile flooring and a linear glass tile backsplash help open up the space, while the darker cabinetry adds depth and visual balance. Updated lighting completes the remodel, delivering a clean, polished, and contemporary kitchen layout.",
    ],
    gallery: makeGallery("/images/portfolio/kitchen/white-carrara-quartz-contemporary-kitchen", 11),
  },

  {
    slug: "briar-rose-kitchen-remodel",
    title: "Briar Rose Kitchen Remodel",
    category: "kitchen",
    location: "Houston, TX",
    completionDate: "2025",
    subtitle:
      "Open-concept kitchen remodel featuring custom cabinetry, Cristallo quartzite, and major structural layout improvements.",
    heroImage: "/images/portfolio/kitchen/briar-rose-kitchen-remodel/hero.jpg",
    cardImage: "/images/portfolio/kitchen/briar-rose-kitchen-remodel/hero.jpg",
    description: [
      "Originally, the kitchen was fully separated from the living room by a 16-foot wall, limiting both natural light and flow. We removed the wall and installed a structural beam to open the space into a true open-concept layout, completely redefining the feel and functionality of the home.",
      "To create a seamless foundation, we carefully laced in new wood flooring to match the existing solid hardwoods, followed by a full refinish, restain, and reseal across the entire space. The result is a continuous, cohesive floor that ties the home together.",
      "The kitchen was then completely redesigned with custom cabinetry, built to maximize both storage and usability without sacrificing aesthetics. Every detail was intentional, including double spice rack cabinets flanking the range, a concealed pull-out trash cabinet, a built-in microwave cabinet, a rollout pantry, and a custom integrated cabinet for the homeowner’s dog bowls. Pickled oak stained white oak floating shelves were added to introduce warmth and contrast against the cabinetry.",
      "The space is anchored by our in-stock 3 cm Cristallo quartzite countertops, delivering a natural, high-end look with subtle movement and depth. A farmhouse apron-front sink and a full-height subway tile backsplash carried to the ceiling enhance the clean, timeless design, while the same-level bar top maintains open sightlines and a more modern, uninterrupted feel.",
      "Updated lighting and fixtures complete the space, bringing together a kitchen that feels bright, open, and intentionally designed for both everyday living and entertaining.",
    ],
    gallery: makeGallery("/images/portfolio/kitchen/briar-rose-kitchen-remodel", 15),
  },

  {
    slug: "luxury-primary-bath",
    title: "Luxury Primary Bath with Coffered Ceiling",
    category: "bathroom",
    location: "Houston, TX",
    subtitle:
      "High-end primary bathroom renovation featuring extensive tile work, quartz surfaces, and custom architectural detailing.",
    heroImage: "/images/portfolio/bathroom/luxury-primary-bath/hero.jpg",
    cardImage: "/images/portfolio/bathroom/luxury-primary-bath/hero.jpg",
    description: [
      "This primary bathroom was fully renovated to create a space that reflects the client’s goal of a more luxurious, high-end feel while improving overall functionality. The design features charcoal cabinetry paired with marble tile across the floors and walls, along with quartz countertops and a matching tub deck for a clean, cohesive finish.",
      "Extensive tile work was completed throughout the space, including the shower walls, main flooring, and a dedicated backsplash at the makeup area. A checkerboard tile pattern was incorporated into the shower floor to introduce contrast and visual detail. The shower was rebuilt with a new rough-in valve and diverter system, allowing use of the rain head, wall-mounted shower head, or both simultaneously.",
      "A new soaking tub was installed with a custom-built deck, creating a strong focal point within the layout. Additional upgrades include a custom mirror, updated plumbing and lighting fixtures, and a coffered ceiling with crown molding and recessed lighting to add depth and architectural character.",
      "The project was completed with a frameless glass shower enclosure featuring built-in ShowerGuard protection. The final result is a well-executed, high-end primary bathroom that emphasizes quality materials, thoughtful layout, and attention to detail.",
    ],
    gallery: makeGallery("/images/portfolio/bathroom/luxury-primary-bath", 11),
  },

  {
    slug: "walk-in-shower-with-dual-fixtures",
    title: "Walk-In Shower with Dual Fixtures",
    category: "bathroom",
    location: "Houston, TX",
    completionDate: "2025",
    subtitle:
      "Bathroom remodel centered on a large walk-in shower, expanded storage, and a cohesive material palette.",
    heroImage: "/images/portfolio/bathroom/walk-in-shower-with-dual-fixtures/hero.jpg",
    cardImage: "/images/portfolio/bathroom/walk-in-shower-with-dual-fixtures/hero.jpg",
    description: [
      "This customer wanted a large walk-in shower with shower heads on both sides so two people could use it at the same time. The layout was updated to make the shower the main focal point, with a full glass enclosure and tile carried throughout the shower.",
      "We installed a recessed niche and custom tile inset for added detail, along with new flooring throughout the bathroom to create a clean, cohesive look. The dual-sided shower setup provides flexibility while keeping the space open and easy to use.",
      "The vanity area was updated with new cabinetry, countertops, and a tile feature wall behind the mirrors to add contrast. The customer also selected two countertop linen cabinets along with a full-height linen cabinet next to the shower, adding significant storage.",
      "The project was completed with new in-stock 3 cm Calacatta quartz countertops, lighting, fixtures, paint, and a frameless glass enclosure to tie everything together.",
    ],
    gallery: makeGallery("/images/portfolio/bathroom/walk-in-shower-with-dual-fixtures", 21),
  },

  {
    slug: "granite-and-tile-bath-remodel",
    title: "Granite & Tile Bath Remodel",
    category: "bathroom",
    location: "Houston, TX",
    completionDate: "2025",
    subtitle:
      "Bathroom remodel keeping the original footprint while upgrading cabinetry, tile, granite, and fixtures.",
    heroImage: "/images/portfolio/bathroom/granite-and-tile-bath-remodel/hero.jpg",
    cardImage: "/images/portfolio/bathroom/granite-and-tile-bath-remodel/hero.jpg",
    description: [
      "This bathroom remodel maintains the original layout while upgrading the space with new tile, fixtures, full-overlay soft-close cabinetry, and our in-stock 3 cm granite, creating a clean, high-end look on a practical budget.",
      "We installed new tile in both the shower and tub areas, along with a new tub and updated fixtures. The shower was taken down and rebuilt with a new valve, diverter, and trim. A glass tile niche and pebble tile shower floor add contrast and detail, tying the space together.",
      "The vanity was replaced with new cabinetry and topped with our in-stock 3 cm granite countertops for a durable, clean finish. The project was finished with a frameless glass shower enclosure, adding a clean, modern touch.",
      "The project was completed with updated finishes throughout, creating a more modern and cohesive bathroom without changing the original footprint.",
    ],
    gallery: makeGallery("/images/portfolio/bathroom/granite-and-tile-bath-remodel", 24),
  },

  {
    slug: "timeless-primary-bath-with-elegant-finishes",
    title: "Timeless Primary Bath with Elegant Finishes",
    category: "bathroom",
    location: "Fulshear, TX",
    completionDate: "2025",
    subtitle:
      "Fulshear primary bath remodel featuring a curbless shower, refinished cabinetry, and upgraded lighting.",
    heroImage: "/images/portfolio/bathroom/timeless-primary-bath-with-elegant-finishes/hero.jpg",
    cardImage: "/images/portfolio/bathroom/timeless-primary-bath-with-elegant-finishes/hero.jpg",
    description: [
      "This bathroom was designed to create a more open, accessible shower space with a clean, seamless look. The curbless entry and custom bench provide both ease of access and added comfort.",
      "A diverter valve allows for flexible use of the shower, making it convenient whether seated or standing. A custom tile niche and spa-style fixtures complete the shower, adding both function and detail.",
      "The existing cabinetry was refinished with a fresh paint finish and paired with new in-stock 3 cm granite countertops featuring a custom 6 cm edge, giving the vanity a more substantial, high-end appearance.",
      "Updated lighting throughout, including a chandelier above the tub and selectable trim recessed lighting in the shower, helps create a warm and inviting atmosphere. New vanity lights and mirrors were selected to tie the entire space together.",
    ],
    gallery: makeGallery("/images/portfolio/bathroom/timeless-primary-bath-with-elegant-finishes", 15),
  },

  {
    slug: "custom-tile-shower-upgrade-with-pebble-floor",
    title: "Custom Tile Shower Upgrade with Pebble Floor",
    category: "bathroom",
    location: "Sugar Land, TX",
    completionDate: "2025",
    subtitle:
      "Sugar Land shower remodel featuring custom tile work, built-in storage, and a frameless glass enclosure.",
    heroImage: "/images/portfolio/bathroom/custom-tile-shower-upgrade-with-pebble-floor/hero.jpg",
    cardImage: "/images/portfolio/bathroom/custom-tile-shower-upgrade-with-pebble-floor/hero.jpg",
    description: [
      "This project focused on completely remodeling the shower while keeping the rest of the bathroom intact, creating a major upgrade without the cost of a full renovation.",
      "The existing shower was removed and rebuilt with new tile throughout, including a pebble tile floor and matching curb for a more detailed, custom look. We incorporated multiple recessed niches and built-in shelving to provide plenty of storage for shampoos, soaps, and daily use items.",
      "A new shower valve and diverter system was installed, allowing for improved functionality and better reach for the handheld massager. Updated fixtures and finishes complete the space, giving the shower a clean, modern feel while maintaining the original bathroom layout.",
      "The project was finished with a frameless glass enclosure, tying everything together and giving the shower a more open, polished appearance.",
    ],
    gallery: makeGallery("/images/portfolio/bathroom/custom-tile-shower-upgrade-with-pebble-floor", 12),
  },

  {
    slug: "modern-wet-room-bathroom-with-freestanding-tub",
    title: "Modern Wet Room Bathroom with Freestanding Tub",
    category: "bathroom",
    location: "Katy, TX",
    completionDate: "2025",
    subtitle:
      "Modern wet-room bathroom featuring a freestanding tub, floating vanity, and fully tiled shower zone.",
    heroImage: "/images/portfolio/bathroom/modern-wet-room-bathroom-with-freestanding-tub/hero.jpg",
    cardImage: "/images/portfolio/bathroom/modern-wet-room-bathroom-with-freestanding-tub/hero.jpg",
    description: [
      "This bathroom was designed as a true wet room, combining the shower and tub into one open, fully tiled space for a clean, modern look. Instead of a traditional enclosure, we installed a frameless glass panel to shield from the shower area while leaving the tub area open.",
      "The shower and tub area features tile carried from floor to ceiling, along with custom recessed niches for storage and added detail. A freestanding tub was positioned within the wet area to create a spa-like layout that maximizes both function and visual impact.",
      "The vanity was updated with floating cabinetry, wall mounted faucets, and topped with our in-stock 3 cm Calacatta quartz, giving the space a sleek, modern feel. A lighted mirror and contemporary chandelier above the tub were added to enhance lighting and tie the design together.",
      "The result is a highly modern, open-concept bathroom that blends functionality with a clean, high-end aesthetic.",
    ],
    gallery: makeGallery("/images/portfolio/bathroom/modern-wet-room-bathroom-with-freestanding-tub", 18),
  },

  {
    slug: "sable-stone-circle",
    title: "Sable Stone Circle",
    category: "outdoor",
    location: "Houston, TX",
    subtitle:
      "Outdoor living project designed for hosting, flow, and durable finish performance.",
    heroImage: "/images/portfolio/outdoor/sable-stone-circle/hero.jpg",
    cardImage: "/images/portfolio/outdoor/sable-stone-circle/hero.jpg",
    description: [
      "This outdoor project was planned to extend the usable living area of the home with a more intentional environment for gathering, cooking, and entertaining.",
      "Material selections were chosen for durability and visual cohesion, resulting in an outdoor space that feels integrated, substantial, and ready for regular use.",
    ],
    gallery: makeGallery("/images/portfolio/outdoor/sable-stone-circle", 6),
  },

  {
    slug: "orchard-hill-kitchen-laundry-remodel",
    title: "Orchard Hill Kitchen & Laundry Remodel with River Green Onyx",
    category: "kitchen",
    location: "Houston, TX",
    completionDate: "2026",
    subtitle:
      "Custom kitchen and laundry remodel featuring River Green Onyx, Pure White Quartz, custom cabinetry, and full-height backsplash detailing.",
    heroImage: "/images/portfolio/kitchen/orchard-hill-kitchen-laundry-remodel/hero.jpg",
    cardImage: "/images/portfolio/kitchen/orchard-hill-kitchen-laundry-remodel/hero.jpg",
    description: [
      "We designed and built this custom kitchen and laundry remodel to create a brighter, more intentional space with a clean, high-end look.",
      "The kitchen features Primary Kitchen Cabinetry, including pantry cabinets, a built-in spice rack, pull-out trash cabinet, and a custom vent hood. A farmhouse apron-front sink was installed, and the decorative tile backsplash was carried all the way to the ceiling to add depth and character.",
      "The island is topped with in-stock River Green Onyx, creating a bold focal point, while the perimeter countertops and laundry room feature in-stock Pure White Quartz for a clean, consistent finish throughout.",
      "Luxury vinyl plank flooring was installed throughout the kitchen to bring in the warmth of hardwood with the durability and water resistance of vinyl. Under-cabinet lighting was added to highlight the backsplash and improve visibility, and integrated plugmold outlets help keep the backsplash clean and uncluttered.",
      "The project was completed with a fully custom laundry room, including matching cabinetry and quartz countertops to tie everything together.",
    ],
    gallery: makeGallery("/images/portfolio/kitchen/orchard-hill-kitchen-laundry-remodel", 10),
  },

  // src/components/portfolio/projectData.js

{
  slug: "white-shaker-kitchen-remodel-with-quartz-countertops",
  title: "White Shaker Kitchen Remodel with Quartz Countertops",
  category: "kitchen",
  location: "Houston, TX",
  completionDate: "2026",
  subtitle:
    "White shaker kitchen remodel featuring quartz countertops, integrated storage upgrades, real wood flooring, and a distinctive brick accent wall.",
  heroImage:
    "/images/portfolio/kitchen/white-shaker-kitchen-remodel-with-quartz-countertops/hero.jpg",
  cardImage:
    "/images/portfolio/kitchen/white-shaker-kitchen-remodel-with-quartz-countertops/hero.jpg",
  description: [
    "This kitchen features Primary Kitchen white shaker cabinetry, bringing a clean and timeless look to the space while improving overall functionality.",
    "The layout includes thoughtful storage upgrades such as a pull-out trash cabinet, built-in spice rack, and refrigerator surround cabinetry for a more integrated feel. The cabinetry is paired with our in-stock quartz countertops, offering a durable and low-maintenance surface with a soft, natural look.",
    "Real wood flooring adds warmth and contrast, while the light paint tones and cabinetry help brighten the entire space. The brick accent wall creates a unique focal point, adding character and depth that balances the clean finishes throughout the kitchen.",
    "Under-cabinet lighting enhances both visibility and ambiance, highlighting the countertops and backsplash while making the space more enjoyable to use day to day.",
  ],
  gallery: makeGallery(
    "/images/portfolio/kitchen/white-shaker-kitchen-remodel-with-quartz-countertops",
    4
  ),
},
];

export function getProjectsByCategory(category) {
  if (!category || category === "all") return PROJECTS;
  return PROJECTS.filter((project) => project.category === category);
}

export function getProjectBySlug(slug) {
  return PROJECTS.find((project) => project.slug === slug);
}

export function formatCategoryLabel(category) {
  if (category === "kitchen") return "Kitchen";
  if (category === "bathroom") return "Bathroom";
  if (category === "outdoor") return "Outdoor Living";
  return category;
}