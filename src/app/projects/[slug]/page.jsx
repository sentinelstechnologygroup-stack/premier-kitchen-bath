// src/app/projects/[slug]/page.jsx

import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/components/portfolio/projectData";

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#F3EFE8]">
      <section className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <a
          href="/portfolio"
          className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#1F2E23]"
        >
          ← Back to Projects
        </a>

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
          <div className="mt-10 grid gap-5 max-w-[900px]">
            {project.description.map((paragraph, index) => (
              <p key={index} className="text-[16px] leading-[1.85] text-[#3E352F]">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}

        {project.gallery?.length ? (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-[20px] bg-white">
                <img
                  src={image.src}
                  alt={image.alt || project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}