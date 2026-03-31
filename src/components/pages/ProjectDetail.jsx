// src/pages/ProjectDetail.jsx
"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Tag } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import GallerySection from "@/components/gallery/GallerySection";
import {
  getProjectBySlug,
  formatCategoryLabel,
} from "@/components/portfolio/projectData";

export default function ProjectDetail() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const project = getProjectBySlug(slug);

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
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 lg:px-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-sans-clean font-medium text-[#1F2E23] hover:text-[#6B7F5E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      hero
      heroImage={project.heroImage}
      eyebrow={formatCategoryLabel(project.category)}
      title={project.title}
      subtitle={project.subtitle}
    >
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
        <AnimatedSection>
          <div className="mb-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-sans-clean font-medium text-[#1F2E23] hover:text-[#6B7F5E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-8">
              {project.description?.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-6 font-sans-clean text-base leading-[1.8] text-[#1F2E23]/60 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="md:col-span-4">
              <div className="space-y-6 border-t border-[#1F2E23]/10 pt-6">
                <div className="flex items-start gap-4">
                  <Tag className="mt-1 h-5 w-5 text-[#6B7F5E]" />
                  <div>
                    <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.3em] text-[#1F2E23]/40">
                      Category
                    </span>
                    <span className="text-sm text-[#1F2E23]">
                      {formatCategoryLabel(project.category)}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-[#6B7F5E]" />
                  <div>
                    <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.3em] text-[#1F2E23]/40">
                      Location
                    </span>
                    <span className="text-sm text-[#1F2E23]">
                      {project.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="mt-1 h-5 w-5 text-[#6B7F5E]" />
                  <div>
                    <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.3em] text-[#1F2E23]/40">
                      Completion
                    </span>
                    <span className="text-sm text-[#1F2E23]">
                      {project.completionDate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {galleryItems.length > 0 && (
        <GallerySection
          title="Project Gallery"
          description="Click any image to expand. Use arrows to browse. Click off the image or press Escape to close."
          items={galleryItems}
          label={project.title}
          columns={3}
          gap={6}
        />
      )}
    </PageShell>
  );
}