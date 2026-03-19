// src/pages/ProjectDetail.jsx
"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Tag } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import GallerySection from "@/components/gallery/GallerySection";

/* ===============================
   PROJECT DATA (SOURCE OF TRUTH)
================================ */

const PROJECTS = {
  /* ===============================
     EXISTING PROJECT (UPDATED TONE)
  ============================== */
  "bellaire-kitchen-master-bath": {
    title: "Bellaire Kitchen & Master Bath",
    subtitle: "Custom kitchen, bath, and interior selections for a luxury residence",
    category: "Residential",
    location: "Houston, TX",
    completionDate: "2023",
    heroImage: "/images/projects/all-projects/bellaire-kitchen-master-bath/bellaire-kitchen-master-bath.jpg",
    description: [
      "A full interior renovation focused on elevating the kitchen and primary bath with custom cabinetry, refined material selections, and a cohesive design direction throughout the home.",
      "Each space was carefully composed to balance functionality with visual impact—integrating natural stone, tailored finishes, and layered lighting to create a timeless, high-end living environment.",
    ],
    services: [
      "Kitchen Design",
      "Bathroom Design",
      "Custom Cabinetry",
      "Material Selection",
      "Project Management",
    ],
    gallery: [
      { src: "/images/projects/all-projects/bellaire-kitchen-master-bath/01.jpg", alt: "Project image 01" },
      { src: "/images/projects/all-projects/bellaire-kitchen-master-bath/02.jpg", alt: "Project image 02" },
      { src: "/images/projects/all-projects/bellaire-kitchen-master-bath/03.jpg", alt: "Project image 03" },
      { src: "/images/projects/all-projects/bellaire-kitchen-master-bath/04.jpg", alt: "Project image 03" },
      { src: "/images/projects/all-projects/bellaire-kitchen-master-bath/05.jpg", alt: "Project image 03" },

    ],
  },

  /* ===============================
     NEW — KITCHEN PROJECT
  ============================== */
  "sable-stone-circle": {
    title: "Sable Stone Circle",
    subtitle: "Custom outdoor living space",
    category: "Kitchen",
    location: "Houston, TX",
    completionDate: "2024",
    heroImage: "/images/projects/all-projects/sable-stone-circle/sable-stone-circle.jpg",
    description: [
      "This outdoor kitchen was designed to extend the home’s living space into a fully functional, open-air entertaining environment. The layout centers around a custom-built island with integrated grilling, prep space, and seating—creating a natural gathering point for hosting and everyday use.",
      "Durable material selections were chosen to perform in the elements while maintaining a refined aesthetic—natural stone cladding, polished granite surfaces, and weather-resistant finishes. The result is an outdoor kitchen that feels substantial, cohesive, and built for both longevity and elevated entertaining.",
],
    services: [
      "Kitchen Design",
      "Custom Cabinetry",
      "Countertop Selection",
      "Appliance Integration",
      "Project Management",
    ],
    gallery: [
      { src: "/images/projects/all-projects/sable-stone-circle/01.jpg", alt: "Kitchen renovation 01" },
      { src: "/images/projects/all-projects/sable-stone-circle/02.jpg", alt: "Kitchen renovation 02" },
      { src: "/images/projects/all-projects/sable-stone-circle/03.jpg", alt: "Kitchen renovation 03" },
      { src: "/images/projects/all-projects/sable-stone-circle/04.jpg", alt: "Kitchen renovation 04" },
      { src: "/images/projects/all-projects/sable-stone-circle/05.jpg", alt: "Kitchen renovation 05" },
      { src: "/images/projects/all-projects/sable-stone-circle/06.jpg", alt: "Kitchen renovation 06" },
    ],
  },

  /* ===============================
     NEW — BATHROOM PROJECT
  ============================== */
  "memorial-master-bath": {
    title: "Memorial Master Bath",
    subtitle: "Spa-inspired bathroom design with layered materials and custom detailing",
    category: "Residential",
    location: "Houston, TX",
    completionDate: "2024",
    heroImage: "/images/projects/all-projects/memorial-bath.jpg",
    description: [
      "This master bathroom renovation was designed to create a calm, spa-like environment within the home. The layout was reworked to improve flow and introduce a more open, balanced composition anchored by a freestanding tub and expanded walk-in shower.",
      "Material selections emphasize texture and restraint—large-format tile, natural stone surfaces, and custom vanities with refined hardware. Lighting was layered to enhance both functionality and atmosphere, resulting in a space that feels quiet, elevated, and intentional.",
    ],
    services: [
      "Bathroom Design",
      "Tile & Surface Selection",
      "Custom Vanity Design",
      "Shower Planning",
      "Lighting Design",
    ],
    gallery: [
      { src: "/images/projects/all-projects/memorial-bath-1.jpg", alt: "Bathroom renovation 01" },
      { src: "/images/projects/all-projects/memorial-bath-2.jpg", alt: "Bathroom renovation 02" },
      { src: "/images/projects/all-projects/memorial-bath-3.jpg", alt: "Bathroom renovation 03" },
    ],
  },
};

/* ===============================
   COMPONENT
================================ */

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS[slug];

  const galleryItems = useMemo(
    () => (project?.gallery || []).filter(Boolean),
    [project]
  );

  if (!project) {
    return (
      <PageShell
        eyebrow="Projects"
        title="Project not found"
        subtitle="The project you're looking for doesn't exist."
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-sans-clean font-medium text-[#1F2E23] hover:text-[#6B7F5E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </PageShell>
    );
  }

  return (
    <PageShell
      hero
      heroImage={project.heroImage}
      eyebrow="Project"
      title={project.title}
      subtitle={project.subtitle}
    >
      {/* DETAILS */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <AnimatedSection>
          <div className="mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-sans-clean font-medium text-[#1F2E23] hover:text-[#6B7F5E]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* MAIN */}
            <div className="md:col-span-7">
              {project.description.map((para, idx) => (
                <p
                  key={idx}
                  className="text-[#1F2E23]/60 font-sans-clean text-base md:text-lg leading-[1.8] mb-6"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* SIDEBAR */}
            <div className="md:col-span-5">
              <div className="border-t border-[#1F2E23]/10 pt-8 space-y-6">
                {/* CATEGORY */}
                <div className="flex items-start gap-4">
                  <Tag className="w-5 h-5 text-[#6B7F5E] mt-1" />
                  <div>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#1F2E23]/40 font-semibold block mb-1">
                      Category
                    </span>
                    <span className="text-[#1F2E23] text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#6B7F5E] mt-1" />
                  <div>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#1F2E23]/40 font-semibold block mb-1">
                      Location
                    </span>
                    <span className="text-[#1F2E23] text-sm">
                      {project.location}
                    </span>
                  </div>
                </div>

                {/* COMPLETION */}
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-[#6B7F5E] mt-1" />
                  <div>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#1F2E23]/40 font-semibold block mb-1">
                      Completion
                    </span>
                    <span className="text-[#1F2E23] text-sm">
                      {project.completionDate}
                    </span>
                  </div>
                </div>

                {/* SERVICES */}
                <div className="pt-6 border-t border-[#1F2E23]/10">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#1F2E23]/40 font-semibold block mb-3">
                    Services
                  </span>
                  <ul className="space-y-2">
                    {project.services.map((service) => (
                      <li
                        key={service}
                        className="text-[#1F2E23]/60 text-sm flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-[#6B7F5E] rounded-full" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* GALLERY */}
      {galleryItems.length > 0 && (
        <GallerySection
          title="Project Gallery"
          description="Click any image to expand. Use arrows to browse. Click off the image (or press Escape) to close."
          items={galleryItems}
          label={project.title}
          columns={3}
          gap={6}
        />
      )}
    </PageShell>
  );
}