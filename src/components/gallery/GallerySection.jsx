// src/components/gallery/GallerySection.jsx
import React from "react";
import Link from "next/link";
import GalleryGrid from "./GalleryGrid";

export default function GallerySection({
  title = "Gallery",
  description,
  backHref,
  backLabel = "Back",
  items = [],
  label = "Gallery",
  columns = 3,
  gap = 6,
}) {
  const safeItems = Array.isArray(items) ? items.filter(Boolean) : [];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-24 md:px-12 md:pt-10 md:pb-28 lg:px-20">
        {backHref && (
          <div className="mb-6">
            <Link
              href={backHref}
              className="inline-flex items-center gap-3 text-[11px] font-sans-clean font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/70 transition-colors hover:text-[#1F2E23]"
            >
              <span className="text-base leading-none">←</span>
              {backLabel}
            </Link>
          </div>
        )}

        {(title || description) && (
          <header className="mb-8 md:mb-10">
            {title && (
              <h2 className="font-serif-display text-3xl font-light leading-[1.1] text-[#1F2E23] md:text-4xl">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-3 max-w-2xl font-sans-clean text-sm leading-[1.9] text-[#1F2E23]/60 md:text-base">
                {description}
              </p>
            )}
          </header>
        )}

        <GalleryGrid
          items={safeItems}
          label={label}
          columns={columns}
          gap={gap}
          tileAspect="aspect-[4/3]"
        />
      </div>
    </section>
  );
}