// src/components/pages/Contact.client.jsx
"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import PageShell from "@/components/PageShell";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";
import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";
import { getPageContent } from "@/config/seo";

const MEDIA = {
  hero: "/images/contact/hero.jpg",
};

export default function ContactClient() {
  const content = getPageContent("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (key) => (e) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const FieldLabel = ({ children }) => (
    <div className="mb-2 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/55">
      {children}
    </div>
  );

  const InputBase =
    "w-full border-b border-[#1F2E23]/35 bg-transparent py-3 text-sm font-sans-clean text-[#1F2E23] placeholder:text-[#1F2E23]/45 hover:border-[#1F2E23]/55 focus:border-[#545E55] focus:outline-none md:text-[15px]";

  return (
    <>
      <SEO pageKey="contact" />

      <PageShell
        hero
        heroImage={MEDIA.hero}
        eyebrow={content.heroEyebrow}
        title={submitted ? content.thankYouTitle : content.heroTitle}
        subtitle={submitted ? content.thankYouSubtitle : content.heroSubtitle}
        showCtaStrip={false}
        showBottomCta={false}
      >
        {submitted ? (
          <section className="mx-auto max-w-[1440px] px-6 py-10 text-center md:px-12 md:py-14 lg:px-20">
            <p className="mx-auto max-w-xl text-lg leading-[1.8] text-[#1F2E23]/65">
              If you need to add details, email us directly at{" "}
              <a
                href="mailto:Info@PremierKitchens.us"
                className="text-[#1F2E23] underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                Info@PremierKitchens.us
              </a>
              .
            </p>
          </section>
        ) : (
          <section className="bg-[#F5F0EA] px-6 py-10 md:px-12 md:py-14 lg:px-20">
            <div className="mx-auto max-w-[1440px]">
              <Panel className="border border-[#1F2E23]/10 bg-white">
                <div className="grid grid-cols-1 gap-16 px-8 py-14 md:grid-cols-2 md:gap-20 md:px-12 md:py-16 lg:px-16">
                  <AnimatedSection>
                    <div>
                      <h2 className="mb-10 font-serif-display text-3xl font-light text-[#1F2E23] md:text-4xl">
                        {content.companyHeading}
                      </h2>

                      <div className="space-y-8">
                        <div className="flex items-start gap-4">
                          <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-[#545E55]" />
                          <div>
                            <div className="mb-2 font-sans-clean text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                              Phone
                            </div>
                            <a
                              href="tel:12815583700"
                              className="font-sans-clean text-lg text-[#1F2E23] transition-colors hover:text-[#545E55]"
                            >
                              (281) 558-3700
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-[#545E55]" />
                          <div>
                            <div className="mb-2 font-sans-clean text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                              Email
                            </div>
                            <a
                              href="mailto:Info@PremierKitchens.us"
                              className="font-sans-clean text-lg text-[#1F2E23] transition-colors hover:text-[#545E55]"
                            >
                              Info@PremierKitchens.us
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#545E55]" />
                          <div>
                            <div className="mb-2 font-sans-clean text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                              Address
                            </div>
                            <div className="font-sans-clean text-base leading-relaxed text-[#1F2E23]">
                              1918 Baker Rd
                              <br />
                              Houston, TX 77094
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-[#1F2E23]/10 pt-8">
                          <div className="mb-2 font-sans-clean text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                            Service Area
                          </div>
                          <p className="font-sans-clean text-sm leading-[1.75] text-[#1F2E23]/70">
                            {content.serviceAreaText}
                          </p>
                        </div>

                        <div className="border-t border-[#1F2E23]/10 pt-8">
                          <div className="mb-2 font-sans-clean text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                            Office Hours
                          </div>
                          <p className="font-sans-clean text-sm leading-[1.75] text-[#1F2E23]/70">
                            Monday through Friday, 8:00–5:00
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection>
                    <div>
                      <form
                        id="contact-form"
                        onSubmit={handleSubmit}
                        className="space-y-8"
                      >
                        <div>
                          <FieldLabel>Full Name *</FieldLabel>
                          <input
                            placeholder="Name"
                            value={formData.name}
                            onChange={onChange("name")}
                            required
                            className={InputBase}
                            autoComplete="name"
                          />
                        </div>

                        <div>
                          <FieldLabel>Email *</FieldLabel>
                          <input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={onChange("email")}
                            required
                            className={InputBase}
                            autoComplete="email"
                          />
                        </div>

                        <div>
                          <FieldLabel>Phone *</FieldLabel>
                          <input
                            type="tel"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={onChange("phone")}
                            required
                            className={InputBase}
                            autoComplete="tel"
                          />
                        </div>

                        <div>
                          <FieldLabel>Project Type *</FieldLabel>
                          <select
                            value={formData.projectType}
                            onChange={onChange("projectType")}
                            required
                            className={`${InputBase} appearance-none`}
                          >
                            <option value="" disabled>
                              Select a project type
                            </option>
                            <option value="kitchen-remodel">
                              Kitchen Remodel
                            </option>
                            <option value="bathroom-remodel">
                              Bathroom Remodel
                            </option>
                            <option value="full-renovation">
                              Full Renovation
                            </option>
                            <option value="showroom-visit">
                              Showroom Visit
                            </option>
                            <option value="general-consultation">
                              General Consultation
                            </option>
                          </select>
                        </div>

                        <div>
                          <FieldLabel>Project Details *</FieldLabel>
                          <textarea
                            placeholder="Share scope, timeline, location, and any design direction you already have in mind."
                            value={formData.message}
                            onChange={onChange("message")}
                            required
                            className={`${InputBase} min-h-[140px] resize-y`}
                          />
                        </div>

                        <div className="pt-2">
                          <Button type="submit" variant="premier">
                            Submit Inquiry
                          </Button>
                        </div>
                      </form>
                    </div>
                  </AnimatedSection>
                </div>
              </Panel>
            </div>
          </section>
        )}
      </PageShell>
    </>
  );
}