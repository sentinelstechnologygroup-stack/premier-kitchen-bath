// src/components/portfolio/SelectedKitchenProjectsCarousel.jsx

"use client";

import React from "react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Custom Luxury Kitchen",
    image: "/images/projects/carousel/kitchen-01.jpg",
    href: "/projects/luxury-kitchen",
  },
  {
    title: "Modern Kitchen Remodel",
    image: "/images/projects/carousel/kitchen-02.jpg",
    href: "/projects/modern-kitchen",
  },
  {
    title: "Classic Kitchen Design",
    image: "/images/projects/carousel/kitchen-03.jpg",
    href: "/projects/classic-kitchen",
  },
  {
    title: "Transitional Kitchen",
    image: "/images/projects/carousel/kitchen-04.jpg",
    href: "/projects/transitional-kitchen",
  },
];

export default function ProjectsCarousel() {
  const track = [...PROJECTS, ...PROJECTS]; // duplicate for seamless loop

  return (
    <section className="py-28 bg-[#F6F1EA] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-14">
        <h2 className="font-serif-display text-[42px] tracking-[-0.02em] text-[#1E1A17]">
          Selected Projects
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="projects-track flex gap-10">
          {track.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className="min-w-[420px] group"
            >
              <div className="overflow-hidden rounded-[6px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-4 text-[14px] tracking-[0.08em] uppercase text-[#7A6552]">
                {project.title}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-track {
          animation: slideProjects 40s linear infinite;
        }

        @keyframes slideProjects {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
