// src/pages/Projects.jsx
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import { ROUTES, createProjectUrl } from "@/components/utils/routes";
import { Panel } from "@/components/ui/panel";
import BottomCTA from "@/components/shared/BottomCTA";

const CATEGORIES = [
  "All Projects",
  "Bathroom",
  "Counter Tops",
  "Cabinetry",
  "Bathrooms",
];

const PROJECTS = [
  {
    title: "Carlton Woods Estate",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
    slug: "carlton-woods-estate",
    location: "The Woodlands, TX",
  },
  {
    title: "Harper’s Landing",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1600566753190-17fbaa2a6c3b?w=1600&q=80",
    slug: "harpers-landing",
    location: "Houston, TX",
  },
  {
    title: "Spring Creek Residence",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    slug: "spring-creek-residence",
    location: "Spring, TX",
  },
  {
    title: "Woodlands Commons",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80",
    slug: "woodlands-commons",
    location: "The Woodlands, TX",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All Projects");

  const filtered = useMemo(() => {
    if (active === "All Projects") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <PageShell
      currentPageName="Projects"
      hero
      heroImage="/images/projects/all-projects/projects-hero.jpg"
      eyebrow="Portfolio"
      title={
        <>
          Featured
          <br />
          <span className="text-[#D4C5A9]">Projects.</span>
        </>
      }
      subtitle="Explore a curated view of our work across residential, commercial, and construction coordination."
    >
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36 lg:px-20">
        <AnimatedSection>
          <div className="mb-10 flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={[
                    "rounded-full border px-4 py-2 text-[11px] font-sans-clean uppercase tracking-[0.22em]",
                    isActive
                      ? "border-[#1F2E23]/20 bg-[#1F2E23] text-[#F5F0EA]"
                      : "border-[#1F2E23]/15 bg-white/60 text-[#1F2E23] hover:bg-white",
                  ].join(" ")}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((p) => (
                <Link
                  key={p.slug}
                  href={
                    typeof createProjectUrl === "function"
                      ? createProjectUrl(p.slug)
                      : ROUTES.projects
                  }
                  className="block"
                >
                  <Panel
                    variant="light"
                    className="group cursor-pointer overflow-hidden rounded-2xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#E5DED4]">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#1F2E23]/0 transition-all duration-500 group-hover:bg-[#1F2E23]/40" />
                    </div>

                    <div className="p-6">
                      <span className="font-sans-clean text-[9px] uppercase tracking-[0.22em] text-[#1F2E23]/55">
                        {p.category}
                      </span>

                      <h3 className="mt-3 mb-3 font-serif-display text-2xl font-light text-[#1F2E23] transition-colors group-hover:text-[#6B7F5E]">
                        {p.title}
                      </h3>

                      <div className="flex items-center gap-2 font-sans-clean text-sm text-[#1F2E23]/55">
                        <MapPin className="h-4 w-4" />
                        <span>{p.location}</span>
                      </div>

                      <div className="mt-5 inline-flex items-center gap-2 font-sans-clean text-[11px] uppercase tracking-[0.22em] text-[#1F2E23]/70 transition-colors group-hover:text-[#1F2E23]">
                        View Project <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Panel>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-14 flex items-center gap-3 text-[#1F2E23]/70">
            <Award className="h-5 w-5" />
            <span className="font-sans-clean text-sm">
              Built for constructability, clarity, and consistent visual
              standards.
            </span>
          </div>
        </AnimatedSection>
      </section>

      <BottomCTA variant="projects" />
    </PageShell>
  );
}
