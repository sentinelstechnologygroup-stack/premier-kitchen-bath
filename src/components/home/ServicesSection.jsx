// src/components/home/ServicesSection.jsx
import React from "react";
import Link from "next/link";
import { getPageContent } from "@/config/seo";

function ImagePanel({ section }) {
  return (
    <div className="overflow-hidden rounded-[26px] bg-[#E7DED3]">
      <div className="aspect-[1.18/1] w-full">
        <img
          src={section.image}
          alt={section.title.replace("\n", " ")}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

function TextPanel({ section }) {
  return (
    <div className="flex h-full items-center rounded-[26px] bg-[#F3EEE7] px-8 py-8 md:px-10 md:py-10">
      <div className="max-w-[360px]">
        <div className="text-[9px] font-semibold uppercase tracking-[0.34em] text-[#B09A86]">
          {section.eyebrow}
        </div>

        <h3 className="mt-4 whitespace-pre-line font-serif-display text-[2.1rem] font-semibold leading-[0.95] tracking-[-0.03em] text-[#241D19] md:text-[2.7rem]">
          {section.title}
        </h3>

        <div className="mt-5 h-px w-12 bg-[#D3C6B8]" />

        <p className="mt-5 text-[14px] leading-[1.9] text-[#6A5A4D]/82 md:text-[15px]">
          {section.body}
        </p>

        <Link
          href={section.href}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-[#D7CCC0] px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8A7563] transition hover:border-[#241D19] hover:bg-[#241D19] hover:text-[#F6F1EA]"
        >
          {section.cta}
        </Link>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const home = getPageContent("home");

  const sections = [
    {
      id: "kitchens",
      eyebrow: home.services?.kitchens?.eyebrow,
      title: home.services?.kitchens?.title,
      body: home.services?.kitchens?.body,
      cta: home.services?.kitchens?.cta,
      href: "/kitchens",
      image: "/images/home/featured-03.jpg",
    },
    {
      id: "bathrooms",
      eyebrow: home.services?.bathrooms?.eyebrow,
      title: home.services?.bathrooms?.title,
      body: home.services?.bathrooms?.body,
      cta: home.services?.bathrooms?.cta,
      href: "/bathrooms",
      image: "/images/home/featured-02.jpg",
    },
  ];

  return (
    <section className="bg-[#F3EEE7] py-6 md:py-8">
      <div className="mx-auto max-w-[1440px] space-y-4 px-6 md:space-y-5 md:px-12 lg:px-20">
        <div id="kitchens" className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <ImagePanel section={sections[0]} />
          <TextPanel section={sections[0]} />
        </div>

        <div id="bathrooms" className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <TextPanel section={sections[1]} />
          <ImagePanel section={sections[1]} />
        </div>
      </div>
    </section>
  );
}