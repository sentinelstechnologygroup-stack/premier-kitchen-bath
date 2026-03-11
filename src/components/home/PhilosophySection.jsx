// src/components/home/PhilosophySection.jsx
import React from "react";
import AnimatedSection from "../shared/AnimatedSection";

export default function PhilosophySection() {
  return (
    <section className="bg-[#F3EEE7] py-12 md:py-14">
      <div className="mx-auto max-w-[1100px] px-6 text-center md:px-12">
        <AnimatedSection>
          <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#A38F7D]">
            Our Philosophy
          </div>

          <h2 className="mx-auto mt-5 max-w-[760px] font-serif-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[#241D19] md:text-[2.8rem]">
            We don&apos;t remodel houses.
            <br />
            We refine the spaces you live in.
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-[#CBBEAF]" />

          <p className="mx-auto mt-6 max-w-[700px] text-[14px] leading-[1.9] text-[#574A41]/78 md:text-[15px]">
            Since 1979, Premier Kitchens has shaped the interiors of Houston&apos;s
            most discerning homes. Our heritage is built on honest craftsmanship,
            enduring materials, and meticulous attention to detail that elevates a
            space from functional to extraordinary.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
