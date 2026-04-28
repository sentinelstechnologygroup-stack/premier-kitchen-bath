// src/app/projects/[slug]/page.jsx

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import GallerySection from "@/components/gallery/GallerySection";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  formatCategoryLabel,
} from "@/components/portfolio/projectData";

function normalizeGalleryItem(item, projectTitle, index) {
  if (typeof item === "string") {
    return {
      id: `gallery-image-${index}`,
      src: item,
      alt: `${projectTitle} image ${index + 1}`,
      caption: `${projectTitle} image ${index + 1}`,
    };
  }

  return {
    id: item?.id ?? `gallery-image-${index}`,
    src: item?.src ?? item?.image ?? item?.url ?? "",
    alt: item?.alt ?? item?.title ?? `${projectTitle} image ${index + 1}`,
    caption:
      item?.caption ?? item?.title ?? `${projectTitle} image ${index + 1}`,
  };
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const galleryItems = (project?.gallery || [])
    .map((item, index) =>
      normalizeGalleryItem(item, project?.title || "Project", index)
    )
    .filter((item) => item.src);

  return (
    <main className="bg-[#F3EFE8]">
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#1F2E23]"
        >
          ← Back to Projects
        </Link>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#8A7F73]">
              {project.location}
            </p>

            <h1 className="mt-3 font-serif text-[42px] leading-[1.05] text-[#1B140F] md:text-[58px]">
              {project.title}
            </h1>

            {project.subtitle ? (
              <p className="mt-5 max-w-[760px] text-[18px] leading-[1.7] text-[#4F463F]">
                {project.subtitle}
              </p>
            ) : null}

            {project.description?.length ? (
              <div className="mt-10 grid max-w-[900px] gap-5">
                {project.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[16px] leading-[1.85] text-[#3E352F]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}
          </div>

          <div className="md:col-span-4">
            <div className="space-y-6 border-t border-[#1F2E23]/10 pt-6 md:border-t-0 md:border-l md:pl-8">
              <div>
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8A7F73]">
                  Category
                </span>
                <span className="text-[15px] text-[#1F2E23]">
                  {formatCategoryLabel(project.category)}
                </span>
              </div>

              <div>
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8A7F73]">
                  Location
                </span>
                <span className="text-[15px] text-[#1F2E23]">
                  {project.location}
                </span>
              </div>

              {project.completionDate ? (
                <div>
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8A7F73]">
                    Completion
                  </span>
                  <span className="text-[15px] text-[#1F2E23]">
                    {project.completionDate}
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {galleryItems.length > 0 ? (
        <GallerySection
          title="Project Gallery"
          description="Click any image to expand. Use the arrows to browse the gallery. Press Escape or click outside the image to close."
          items={galleryItems}
          label={project.title}
          columns={3}
          gap={10}
        />
      ) : null}
    </main>
  );
}