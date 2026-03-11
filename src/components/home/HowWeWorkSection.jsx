// src/components/home/HowWeWorkSection.jsx
import React from "react";
import AnimatedSection from "../shared/AnimatedSection";

const STEPS = [
  {
    number: "01",
    title: "Consult",
    body:
      "We begin by listening closely to your home, your lifestyle, and your priorities so the project starts with clarity.",
  },
  {
    number: "02",
    title: "Design",
    body:
      "Our designers shape a precise plan of materials, layout, and details tailored to your space and sensibility.",
  },
  {
    number: "03",
    title: "Craft",
    body:
      "Executed by a skilled team with exacting standards. Every surface, line, and finish is placed with care.",
  },
  {
    number: "04",
    title: "Deliver",
    body:
      "On time. On brief. A finished space that exceeds your expectations and endures for decades.",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="bg-[#F3EEE7] py-10 md:py-12">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <AnimatedSection>
          <div className="text-center">
            <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#A38F7D]">
              Our Approach
            </div>
            <h2 className="mt-4 font-serif-display text-[2rem] font-semibold tracking-[-0.02em] text-[#241D19] md:text-[2.4rem]">
              How We Work
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step, idx) => (
            <AnimatedSection key={step.number} delay={idx * 0.08}>
              <div className="h-full rounded-[24px] bg-[#FFFFFF] px-7 py-8 shadow-[0_18px_40px_rgba(0,0,0,0.06)] border border-[#E8E1D8]">
                <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A38F7D]">
                  {step.number}
                </div>
                <h3 className="mt-4 font-serif-display text-[1.45rem] font-semibold tracking-[-0.02em] text-[#241D19]">
                  {step.title}
                </h3>
                <div className="mt-4 h-px w-10 bg-[#CBBEAF]" />
                <p className="mt-4 text-[13px] leading-[1.8] text-[#574A41]/80">
                  {step.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
