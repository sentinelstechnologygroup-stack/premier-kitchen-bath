// src/components/portfolio/SelectedBathroomProjectsCarousel.jsx
"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/components/portfolio/projectData";

const PROJECTS_TO_SHOW = [
  "chenenceaux",
  "walk-in-shower-with-dual-fixtures",
  "granite-and-tile-bath-remodel",
  "timeless-primary-bath-with-elegant-finishes",
  "custom-tile-shower-upgrade-with-pebble-floor",
];

const SELECTED_BATHROOM_PROJECTS = PROJECTS_TO_SHOW
  .map((slug) => PROJECTS.find((project) => project.slug === slug))
  .filter(Boolean)
  .map((project) => ({
    title: project.title,
    image: project.cardImage || project.heroImage,
    href: `/projects/${project.slug}`,
  }));

export default function SelectedBathroomProjectsCarousel() {
  const track = [...SELECTED_BATHROOM_PROJECTS, ...SELECTED_BATHROOM_PROJECTS];

  return (
    <section className="overflow-hidden py-12 md:py-14">
      <div className="mx-auto mb-8 max-w-[1440px] px-6 md:px-12 lg:px-20">
        <h2 className="font-serif-display text-[2rem] font-semibold tracking-[-0.02em] text-[#241D19] md:text-[2.5rem]">
          Selected Projects
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="projects-track flex gap-6 md:gap-8">
          {track.map((project, index) => (
            <Link
              key={`${project.title}-${index}`}
              href={project.href}
              className="group min-w-[320px] md:min-w-[380px] lg:min-w-[420px]"
            >
              <div className="relative h-[240px] w-[320px] overflow-hidden rounded-[10px] bg-[#F8F4ED] md:h-[280px] md:w-[380px] lg:h-[320px] lg:w-[420px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7A6552]">
                {project.title}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-track {
          width: max-content;
          animation: slideProjects 42s linear infinite;
        }

        .projects-track:hover {
          animation-play-state: paused;
        }

        @keyframes slideProjects {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}