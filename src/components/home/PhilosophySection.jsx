// src/components/home/PhilosophySection.jsx
import React from "react";
import AnimatedSection from "../shared/AnimatedSection";
import { getPageContent } from "@/config/seo";

function renderMultiline(text = "") {
  return String(text)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => (
      <span key={`${line}-${index}`} className="block">
        {line}
      </span>
    ));
}

export default function PhilosophySection() {
  const content = getPageContent("home");

  return (
    <section className="bg-[#F3EEE7] py-12 md:py-14">
      <div className="mx-auto max-w-[1100px] px-6 text-center md:px-12">
        <AnimatedSection>
          <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#A38F7D]">
            {content.philosophyEyebrow}
          </div>

          <h2 className="mx-auto mt-5 max-w-[900px] font-serif-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[#241D19] md:text-[2.8rem]">
            {renderMultiline(content.philosophyTitle)}
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-[#CBBEAF]" />

          <p className="mx-auto mt-6 max-w-[700px] text-[14px] leading-[1.9] text-[#574A41]/78 md:text-[15px]">
            {content.philosophyBody}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}