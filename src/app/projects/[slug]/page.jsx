// src/app/projects/[slug]/page.jsx
"use client";

import React, { use, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/components/portfolio/projectData";

function normalizeGalleryItem(item, projectTitle, index) {
  if (typeof item === "string") {
    return {
      id: `gallery-image-${index}`,
      src: item,
      alt: `${projectTitle} image ${index + 1}`,
    };
  }

  return {
    id: item?.id ?? `gallery-image-${index}`,
    src: item?.src ?? item?.image ?? item?.url ?? "",
    alt: item?.alt ?? item?.title ?? `${projectTitle} image ${index + 1}`,
  };
}

export default function ProjectDetailPage({ params }) {
  const resolvedParams = use(params);
  const project = getProjectBySlug(resolvedParams.slug);

  const galleryItems = useMemo(() => {
    return (project?.gallery || [])
      .map((item, index) =>
        normalizeGalleryItem(item, project?.title || "Project", index)
      )
      .filter((item) => item.src);
  }, [project]);

  const [activeIndex, setActiveIndex] = useState(-1);

  const hasLightbox = activeIndex >= 0 && activeIndex < galleryItems.length;
  const activeItem = hasLightbox ? galleryItems[activeIndex] : null;

  const openLightbox = (index) => {
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(-1);
  };

  const showPrev = (event) => {
    event?.stopPropagation();
    setActiveIndex((prev) =>
      prev <= 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const showNext = (event) => {
    event?.stopPropagation();
    setActiveIndex((prev) =>
      prev >= galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (!hasLightbox) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [hasLightbox, galleryItems.length]);

  if (!project) {
    notFound();
  }

  return (
    <>
      <main className="bg-[#F3EFE8]">
        <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#1F2E23]"
          >
            ← Back to Projects
          </Link>

          <div className="mt-10 max-w-[960px]">
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
          </div>

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

          {galleryItems.length ? (
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[20px] bg-white text-left focus:outline-none focus:ring-2 focus:ring-[#8A6A4A]/40"
                  aria-label={`Open image ${index + 1} of ${galleryItems.length}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </button>
              ))}
            </div>
          ) : null}
        </section>
      </main>

      {hasLightbox && activeItem ? (
        <div
          className="fixed inset-0 z-[9999] flex cursor-zoom-out items-center justify-center bg-black/20 p-3 backdrop-blur-2xl md:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/8 via-black/6 to-black/18" />
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/12" />

          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-6 top-6 z-[10001] flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-2xl text-white backdrop-blur-md transition hover:scale-110 hover:bg-white/20"
            aria-label="Close gallery viewer"
          >
            ×
          </button>

          {galleryItems.length > 1 ? (
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-5 top-1/2 z-[10001] -translate-y-1/2 rounded-full bg-white/12 px-4 py-3 text-white backdrop-blur-md transition hover:scale-110 hover:bg-white/20 md:left-6"
              aria-label="Previous image"
            >
              ‹
            </button>
          ) : null}

          {galleryItems.length > 1 ? (
            <button
              type="button"
              onClick={showNext}
              className="absolute right-5 top-1/2 z-[10001] -translate-y-1/2 rounded-full bg-white/12 px-4 py-3 text-white backdrop-blur-md transition hover:scale-110 hover:bg-white/20 md:right-6"
              aria-label="Next image"
            >
              ›
            </button>
          ) : null}

          <div
            className="relative z-[10000] flex h-[min(88vh,1200px)] w-[min(94vw,1900px)] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative flex h-full w-full items-center justify-center rounded-[24px]">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="animate-[zoomIn_0.35s_ease] h-full w-full object-contain drop-shadow-[0_40px_120px_rgba(0,0,0,0.38)]"
                loading="eager"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-white/10" />
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 z-[10001] -translate-x-1/2 rounded-full bg-white/12 px-4 py-2 text-[12px] tracking-[0.18em] text-white backdrop-blur-md">
            {activeIndex + 1} / {galleryItems.length}
          </div>
        </div>
      ) : null}
    </>
  );
}