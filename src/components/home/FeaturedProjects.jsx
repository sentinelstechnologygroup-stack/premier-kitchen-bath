// src/components/home/FeaturedProjects.jsx
import React from "react";
import Link from "next/link";
import AnimatedSection from "../shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";

const PROJECTS = [
  {
    title: "Traditional Kitchen Renovation",
    category: "Kitchen Remodel",
    image: "/images/home/hero-01.jpg",
  },
  {
    title: "Light-Filled Bathroom Refresh",
    category: "Bathroom Remodel",
    image: "/images/home/featured-02.jpg",
  },
  {
    title: "Contemporary Interior Upgrade",
    category: "Full Interior Renovation",
    image: "/images/home/featured-03.jpg",
  },
  {
    title: "Luxury Home Transformation",
    category: "Custom Remodeling",
    image: "/images/home/featured-04.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#F6F1EA] py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <AnimatedSection>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#A38F7D]">
                Selected Work
              </div>
              <h2 className="mt-4 font-serif-display text-[2.1rem] font-semibold tracking-[-0.02em] text-[#241D19] md:text-[2.7rem]">
                Featured Projects
              </h2>
            </div>

            <Link
              href={ROUTES.projects}
              className="inline-flex items-center justify-center self-start rounded-full border border-[#241D19]/14 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#241D19] transition hover:bg-[#241D19] hover:text-[#F6F1EA]"
            >
              View Portfolio
            </Link>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PROJECTS.map((project, idx) => (
            <AnimatedSection key={project.title} delay={idx * 0.08}>
              <Link href={ROUTES.projects} className="group block">
                <div className="overflow-hidden rounded-[26px] bg-[#E6DDD2]">
                  <div className="aspect-[1.12/1] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="bg-[#F3EEE7] px-6 py-5">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A38F7D]">
                      {project.category}
                    </div>
                    <h3 className="mt-3 font-serif-display text-[1.45rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#241D19]">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
