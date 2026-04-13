// src/config/seo.js

import { SITE } from "./site";

export const SEO_DEFAULTS = {
  title: SITE.name,
  description: SITE.description,
  image: SITE.images.og,
  type: "website",
  robots: "index,follow",
};

export const PAGE_SEO = {
  home: {
    path: "/",
    title:
      "Houston's Kitchen & Bathroom Remodeling Experts| Premier Kitchen & Bath | Since 1979",
    description:
      "Houston's most trusted kitchen and bathroom remodeling company since 1979. Premium craftsmanship, custom cabinetry, and beautiful results. Schedule a free consultation at our Houston showroom.",
    h1: "Premier Kitchen & Bath, Houston's Kitchen & Bathroom Remodeling Experts Since 1979",
    schemaType: "HomePage",
    keywords: [
      "houston kitchen bathroom remodeling",
      "kitchen remodeling houston",
      "bathroom remodeling houston tx",
      "houston remodeling company",
      "custom kitchen cabinets houston",
    ],
    ui: {
      eyebrow: "Premier Kitchen & Bath",
      heroTitleLines: ["Houston's Kitchen & Bath", "Remodeling Experts", "Since 1979"],
      heroBody:
        "Thousands of successful kitchen and bathroom remodels. Premium craftsmanship in every detail. Beautifully refined spaces designed around the way you live.",
      philosophyTitle:
        "Premier Kitchen & Bath\nWe don't remodel houses.\nWe refine the spaces you live in.",
      philosophyBody:
        "Since 1979, Premier Kitchen & Bath has shaped the kitchens and bathrooms of Houston's most discerning homes across River Oaks, Memorial, Tanglewood, and the Energy Corridor.",
      services: {
        kitchens: {
          eyebrow: "What We Do",
          title: "Kitchen\nRemodeling",
          body:
            "From custom cabinetry and granite countertops to integrated appliances and kitchen islands, we design Houston kitchens that are as beautiful to cook in as they are to look at.",
          cta: "Explore Kitchens",
        },
        bathrooms: {
          eyebrow: "What We Do",
          title: "Bathroom\nRemodeling",
          body:
            "Spa-like bathroom remodels crafted for Houston homes. We transform ordinary bathrooms into spaces of quiet luxury—walk-in showers, soaking tubs, custom vanities, and precision tile work.",
          cta: "Explore Bathrooms",
        },
      },
      showroomCta: {
        eyebrow: "Houston Showroom",
        title: "Visit Our Kitchen & Bath Showroom",
        body:
          "Explore cabinetry, granite and quartz countertops, tile, and fixture combinations in person at our Houston showroom. Meet with our team, review your goals, and begin planning a kitchen or bathroom remodel tailored to your home.",
      },
    },
  },

  kitchens: {
    path: "/kitchens",
    title:
      "Kitchen Remodeling Houston TX | Custom Cabinets & Countertops | Premier Kitchen & Bath",
    description:
      "Premier Kitchen & Bath designs and builds custom kitchen remodels in Houston, TX. From cabinets and countertops to full layout redesigns. 45+ years of Houston craftsmanship.",
    h1: "Kitchen Remodeling in Houston, TX — Custom Cabinets & Countertops",
    schemaType: "Service",
    keywords: [
      "kitchen remodeling houston",
      "custom kitchen cabinets houston",
      "granite countertops houston",
      "quartz countertops houston",
      "houston kitchen contractor",
    ],
    ui: {
      heroEyebrow: "Our Work",
      heroTitleLines: [
        "Kitchen Remodeling",
        "Custom Cabinets &",
        "Countertops",
      ],
      heroSubtitle:
        "Custom kitchen remodeling in Houston with cabinetry, countertops, layout refinement, and finish coordination built around the way your household lives.",
      introEyebrow: "Crafted in Houston",
      introTitle:
        "Custom Kitchen Remodeling in Houston — Designed for the Way Your Household Lives.",
      introBody:
        "A kitchen should feel as functional as it is refined. We design around how your household lives—bringing together cabinetry, surfaces, appliances, storage, and lighting into one cohesive environment built for daily use and lasting beauty.",
      ctaEyebrow: "Plan Your Kitchen Project",
      ctaTitle:
        "Ready to define layout, cabinetry, materials, and scope with our team?",
      ctaBody:
        "Start with a consultation to review how your kitchen needs to function and the finish combinations that will bring it together.",
      processEyebrow: "Our Process",
      processTitle: "Designed Around the Way You Live",
      processSteps: [
        {
          number: "01",
          title: "Vision Session",
          body: "We define the way your kitchen needs to function, how you entertain, and what aesthetic direction fits your home.",
        },
        {
          number: "02",
          title: "Curated Design",
          body: "Cabinetry, surfaces, fixtures, and appliances are selected into a cohesive plan that balances beauty and utility.",
        },
        {
          number: "03",
          title: "Flawless Build",
          body: "Our team executes with precision so the finished kitchen feels intentional, seamless, and built to endure.",
        },
      ],
      ctaButtonLabel: "Schedule Consultation",
      footerEyebrow: "Houston Showroom",
      footerTitle: "Ready to Reimagine Your Kitchen?",
      footerBody:
        "Visit our Houston showroom, compare cabinetry and surface combinations in person, and begin shaping a kitchen renovation tailored to your home and daily life.",
      footerPrimaryButtonLabel: "Begin Your Project",
      footerSecondaryButtonLabel: "View Portfolio",
    },
  },

  bathrooms: {
    path: "/bathrooms",
    title:
      "Bathroom Remodeling Houston TX | Walk-In Showers & Vanities | Premier Kitchen & Bath",
    description:
      "Transform your bathroom with Premier Kitchen & Bath. Walk-in showers, custom vanities, soaking tubs, and luxury tile work in Houston, TX. Trusted since 1979.",
    h1: "Bathroom Remodeling Houston — Walk-In Showers, Vanities & Tile",
    schemaType: "Service",
    keywords: [
      "bathroom remodeling houston tx",
      "walk in shower remodel houston",
      "custom bathroom vanity houston",
      "master bathroom remodel houston",
      "tile installation houston",
    ],
    ui: {
      heroEyebrow: "Our Work",
      heroTitleLines: [
        "Bathroom Remodeling",
        "Walk-In Showers",
        "Vanities & Tile",
      ],
      heroSubtitle:
        "Luxury bathroom remodeling in Houston with walk-in showers, custom vanities, tile work, soaking tubs, and finish coordination built around daily life.",
      introEyebrow: "Crafted in Houston",
      introTitle:
        "Houston Bathroom Remodeling — Quiet luxury, spa-grade finishes, and spaces built around your daily life.",
      introBody:
        "A bathroom renovation is one of the most personal projects a home can undergo. We approach each one with care—balancing spa-like serenity with practical function. From walk-in showers and soaking tubs to custom vanities and radiant floors, every detail is considered.",
      ctaEyebrow: "Plan Your Bathroom Project",
      ctaTitle: "Ready to define layout, finishes, and budget with our team?",
      ctaBody:
        "Start with a consultation to review your goals, preferred style, and the materials that will shape the finished space.",
      processEyebrow: "Our Process",
      processTitle: "Thoughtful From the First Conversation",
      processSteps: [
        {
          number: "01",
          title: "Vision Session",
          body: "We explore your sense of style, how you use the space, and what would make it feel distinctly yours.",
        },
        {
          number: "02",
          title: "Curated Design",
          body: "Tile, stone, fixtures, lighting, and vanities are selected with purpose and organized into a cohesive design direction.",
        },
        {
          number: "03",
          title: "Flawless Build",
          body: "Our craftsmen bring the design to life with the skill, care, and precision required for a lasting result.",
        },
      ],
      ctaButtonLabel: "Schedule Consultation",
      footerEyebrow: "Houston Showroom",
      footerTitle: "Ready to Reimagine Your Bathroom?",
      footerBody:
        "Visit our Houston showroom, compare bath finishes in person, and begin shaping a bathroom renovation that feels refined, functional, and unmistakably yours.",
      footerPrimaryButtonLabel: "Begin Your Project",
      footerSecondaryButtonLabel: "View Portfolio",
    },
  },

  products: {
    path: "/products",
    title:
      "Kitchen & Bath Products Houston TX | Cabinets, Countertops, Tile & Fixtures | Premier Kitchen & Bath",
    description:
      "Explore kitchen and bath products at Premier Kitchen & Bath in Houston, including cabinetry, granite and quartz countertops, tile, fixtures, and finish selections for luxury remodels.",
    h1: "Kitchen & Bath Products in Houston, TX",
    schemaType: "CollectionPage",
    keywords: [
      "kitchen bath products houston",
      "custom kitchen cabinets houston",
      "granite countertops houston",
      "quartz countertops houston",
      "bath fixtures houston",
    ],
    ui: {
      eyebrow: "What We Carry",
      heroTitleLines: ["Kitchen & Bath Products", "in Houston, TX"],
      heroBody:
        "We work with trusted brand partners across cabinetry, countertops, tile, hardware, plumbing, and lighting to help bring each kitchen and bathroom remodel together with confidence.",
      heroNote:
        "The brands below represent core product partners and frequently specified lines. Availability may vary by project scope, design direction, and showroom selections.",
      sectionBody:
        "We help homeowners compare materials, finishes, and product lines in the context of the full renovation—not as isolated selections. That means better coordination between cabinetry, surfaces, tile, fixtures, hardware, and lighting from the start.",
      ctaEyebrow: "Design Guidance",
      ctaTitle: "See Samples, Finishes, and Combinations in Person",
      ctaBody:
        "The showroom experience helps narrow selections faster and makes it easier to evaluate tone, texture, scale, and coordination across the entire space. We use that process to guide kitchens, bathrooms, and renovation projects toward a more complete result.",
    },
  },

  projects: {
    path: "/projects",
    title: "Kitchen & Bathroom Remodel Portfolio Houston | Premier Kitchen & Bath",
    description:
      "Browse completed kitchen and bathroom remodels by Premier Kitchen & Bath across Houston, TX. Custom luxury, modern, classic, and transitional projects.",
    h1: "Kitchen & Bathroom Remodel Portfolio in Houston",
    schemaType: "CollectionPage",
    keywords: [
      "kitchen remodel portfolio houston",
      "bathroom remodel portfolio houston",
      "houston remodeling projects",
      "custom kitchen houston",
      "bathroom renovation houston",
    ],
    ui: {
      heroEyebrow: "Portfolio",
      heroTitleLines: [
        "Kitchen & Bathroom",
        "Remodel Portfolio",
        " "
      ],
      heroSubtitle:
        "Browse a curated view of kitchen and bathroom remodeling work shaped by craftsmanship, material coordination, and disciplined execution.",
      badgeText:
        "Built for constructability, clarity, and consistent visual standards.",
    },
  },

  reviews: {
    path: "/reviews",
    title: "Premier Kitchen & Bath Reviews | Houston Remodeling Client Feedback",
    description:
      "Read Premier Kitchen & Bath reviews from Houston-area homeowners. See client feedback on kitchen remodeling, bathroom remodeling, communication, craftsmanship, and finished results.",
    h1: "Premier Kitchen & Bath Reviews",
    schemaType: "ReviewPage",
    keywords: [
      "premier kitchen bath reviews",
      "houston remodeling reviews",
      "kitchen remodeling houston reviews",
      "bathroom remodeling houston reviews",
      "houston contractor reviews",
    ],
    ui: {
      heroEyebrow: "Reviews",
      heroTitleLines: ["Premier Kitchen", "& Bath Reviews"],
      heroSubtitle:
        "Read what Houston-area homeowners say about the design process, communication, craftsmanship, and finished results at Premier Kitchen & Bath.",
      introEyebrow: "Client Reviews",
      introTitle:
        "Trusted for disciplined planning and results that hold up over time.",
      introBody:
        "Below are selected reviews from clients who trusted Premier Kitchen & Bath for kitchen remodeling, bathroom remodeling, and related renovation work in Houston.",
    },
  },

  contact: {
    path: "/contact",
    title: "Contact Premier Kitchen & Bath | Houston Remodeling Consultations",
    description:
      "Schedule a kitchen or bathroom remodeling consultation with Premier Kitchen & Bath in Houston, TX. Visit our showroom or contact our team to begin your project.",
    h1: "Schedule a Consultation",
    schemaType: "ContactPage",
    keywords: [
      "contact premier kitchen bath",
      "houston remodeling consultation",
      "kitchen remodeling consultation houston",
      "bathroom remodeling consultation houston",
      "houston showroom consultation",
    ],
    ui: {
      heroEyebrow: "Contact",
      heroTitleLines: ["Schedule a", "Consultation"],
      heroSubtitle:
        "Schedule a kitchen or bathroom remodeling consultation with Premier Kitchen & Bath in Houston, TX. We typically respond within one business day.",
      thankYouTitle: "Thank You",
      thankYouSubtitle:
        "We've received your inquiry and will respond within one business day.",
      companyHeading: "Premier Kitchen & Bath",
      serviceAreaText:
        "We provide remodeling services throughout the Houston area, including Katy, Fulshear, Richmond, Sugar Land, Missouri City, and Cypress. We offer turnkey kitchen remodels, bathroom remodels, and full home renovations.",
    },
  },

  showroom: {
    path: "/showroom",
    title:
      "Kitchen & Bath Showroom Houston TX | 1918 Baker Rd | Premier Kitchen & Bath",
    description:
      "Visit Premier Kitchen & Bath's Houston showroom at 1918 Baker Rd. Explore cabinetry, countertops, tile, and fixture combinations in person. Open Monday through Friday, 8:00–5:00.",
    h1: "Visit Our Kitchen & Bath Showroom",
    schemaType: "LocalBusiness",
    keywords: [
      "kitchen bath showroom houston",
      "houston kitchen showroom",
      "houston bath showroom",
      "cabinetry countertops showroom houston",
      "premier kitchen bath showroom",
    ],
    ui: {
      heroEyebrow: "Showroom",
      heroTitleLines: ["Visit Our", "Kitchen & Bath", "Showroom"],
      heroSubtitle:
        "Explore cabinetry, countertops, tile, fixtures, and finish combinations in person at Premier Kitchen & Bath.",
      introEyebrow: "Why Visit",
      introTitle: "See the materials before the build begins.",
      introBody:
        "Online inspiration helps, but showroom decisions are where a project starts to become real. Visiting in person makes it easier to compare tones, textures, proportions, and finish combinations across the full kitchen or bathroom remodel.",
      guidanceEyebrow: "Design Guidance",
      guidanceTitle: "Compare complete combinations, not isolated samples.",
      guidanceBody:
        "Our showroom process is designed to help clients evaluate how cabinetry, counters, flooring, tile, hardware, and fixtures work together. That leads to more confident decisions and a more cohesive final result.",
    },
  },
};

export function getPageSeo(pageKey, overrides = {}) {
  const page = PAGE_SEO[pageKey] || {};

  return {
    ...SEO_DEFAULTS,
    ...page,
    ...overrides,
  };
}

export function getPageContent(pageKey) {
  const page = PAGE_SEO[pageKey] || {};
  const ui = page.ui || {};

  return {
    ...ui,
    heroTitle: ui.heroTitle || page.h1 || "",
    heroTitleLines: ui.heroTitleLines || (page.h1 ? [page.h1] : []),
    pageH1: page.h1 || "",
  };
}