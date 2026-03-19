// src/components/pages/Projects.jsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Award, MapPin } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import SEO from "@/components/shared/SEO";
import { ROUTES, createProjectUrl } from "@/components/utils/routes";
import { Panel } from "@/components/ui/panel";
import BottomCTA from "@/components/shared/BottomCTA";
import { getPageContent } from "@/config/seo";

const CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "kitchen", label: "Kitchens" },
  { key: "bathroom", label: "Bathrooms" },
];

const PROJECTS = [
  {
    title: "Bellaire Kitchen & Master Bath",
    category: "bathroom",
    image: "/images/projects/all-projects/bellaire-kitchen-master-bath/bellaire-kitchen-master-bath.jpg",
    slug: "bellaire-kitchen-master-bath",
    location: "The Woodlands, TX",
  },
  {
    title: "Sable Stone Circle",
    category: "kitchen",
    image: "/images/projects/all-projects/sable-stone-circle/sable-stone-circle.jpg",
    slug: "sable-stone-circle",
    location: "Houston, TX",
  },
  {
    title: "Spring Creek Residence",
    category: "kitchen",
    image: "/images/projects/all-projects/spring-creek-residence.jpg",
    slug: "spring-creek-residence",
    location: "Spring, TX",
  },
  {
    title: "Woodlands Commons",
    category: "bathroom",
    image: "/images/projects/all-projects/woodlands-commons.jpg",
    slug: "woodlands-commons",
    location: "The Woodlands, TX",
  },
];

function SectionEyebrow({ children }) {
  if (!children) return null;

  return (
    <div className="mb-4 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/45">
      {children}
    </div>
  );
}

function formatCategoryLabel(category) {
  if (category === "kitchen") return "Kitchen";
  if (category === "bathroom") return "Bathroom";
  return category;
}

export default function Projects() {
  const content = getPageContent("projects");
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <SEO pageKey="projects" />

      <PageShell
        hero
        heroImage="/images/projects/all-projects/projects-hero.jpg"
        eyebrow={content.heroEyebrow}
        title={
          Array.isArray(content.heroTitleLines) && content.heroTitleLines.length
            ? content.heroTitleLines
            : content.heroTitle
        }
        subtitle={content.heroSubtitle}
      >
        <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-12 lg:px-20">
          <AnimatedSection>
            <div className="mb-10 flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => {
                const isActive = active === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActive(cat.key)}
                    className={[
                      "rounded-full border px-4 py-2 text-[11px] font-sans-clean uppercase tracking-[0.22em]",
                      isActive
                        ? "border-[#1F2E23]/20 bg-[#1F2E23] text-[#F5F0EA]"
                        : "border-[#1F2E23]/15 bg-white/60 text-[#1F2E23] hover:bg-white",
                    ].join(" ")}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
            <div>
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
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
                        className="group h-full cursor-pointer overflow-hidden rounded-2xl"
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
                            {formatCategoryLabel(p.category)}
                          </span>

                          <h3 className="mb-3 mt-3 font-serif-display text-2xl font-light text-[#1F2E23] transition-colors group-hover:text-[#6B7F5E]">
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
            </div>

            <AnimatedSection delay={0.1}>
              <Panel className="border border-[#1F2E23]/10 bg-[#F8F4ED] p-8 md:p-10">
                <SectionEyebrow>Project Standards</SectionEyebrow>
                <h2 className="font-serif-display text-3xl font-light text-[#1F2E23] md:text-4xl">
                  Built around clarity, coordination, and execution.
                </h2>

                <p className="mt-5 font-sans-clean text-sm leading-[1.85] text-[#1F2E23]/68 md:text-base">
                  {content.heroSubtitle}
                </p>

                <div className="mt-8 flex items-start gap-3 text-[#1F2E23]/70">
                  <Award className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="font-sans-clean text-sm leading-[1.8]">
                    {content.badgeText}
                  </span>
                </div>
              </Panel>
            </AnimatedSection>
          </div>
        </section>

        <BottomCTA variant="projects" />
      </PageShell>
    </>
  );
}