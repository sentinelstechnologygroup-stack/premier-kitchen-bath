// src/components/pages/Contact.client.jsx
"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, X } from "lucide-react";
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

  const [submitted, setSubmitted] = useState(false);

  const closeModal = () => setSubmitted(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    // Honeypot check
    if (data.get("company")) return;

    const response = await fetch("https://formspree.io/f/xeevrzko", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setSubmitted(true);
    } else {
      alert("There was an issue submitting the form. Please try again.");
    }
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
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        showCtaStrip={false}
        showBottomCta={false}
      >
        <section className="bg-[#F5F0EA] px-6 py-10 md:px-12 md:py-14 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <Panel className="border border-[#1F2E23]/10 bg-white">
              <div className="grid grid-cols-1 gap-16 px-8 py-14 md:grid-cols-2 md:gap-20 md:px-12 md:py-16 lg:px-16">

                {/* LEFT SIDE */}
                <AnimatedSection>
                  <div>
                    <h2 className="mb-10 font-serif-display text-3xl font-light text-[#1F2E23] md:text-4xl">
                      {content.companyHeading}
                    </h2>

                    <div className="space-y-8">
                      <div className="flex items-start gap-4">
                        <Phone className="mt-1 h-5 w-5 text-[#545E55]" />
                        <div>
                          <div className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                            Phone
                          </div>
                          <a href="tel:12815583700" className="text-lg text-[#1F2E23] hover:text-[#545E55]">
                            (281) 558-3700
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="mt-1 h-5 w-5 text-[#545E55]" />
                        <div>
                          <div className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                            Email
                          </div>
                          <a href="mailto:Info@PremierKitchens.us" className="text-lg text-[#1F2E23] hover:text-[#545E55]">
                            Info@PremierKitchens.us
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MapPin className="mt-1 h-5 w-5 text-[#545E55]" />
                        <div>
                          <div className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                            Address
                          </div>
                          <div className="text-base text-[#1F2E23]">
                            1918 Baker Rd<br />Houston, TX 77094
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* RIGHT SIDE FORM */}
                <AnimatedSection>
                  <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Honeypot */}
                    <input type="text" name="company" className="hidden" />

                    <div>
                      <FieldLabel>Full Name *</FieldLabel>
                      <input name="name" required className={InputBase} />
                    </div>

                    <div>
                      <FieldLabel>Email *</FieldLabel>
                      <input type="email" name="email" required className={InputBase} />
                    </div>

                    <div>
                      <FieldLabel>Phone *</FieldLabel>
                      <input type="tel" name="phone" required className={InputBase} />
                    </div>

                    <div>
                      <FieldLabel>Project Type *</FieldLabel>
                      <select name="projectType" required className={InputBase}>
                        <option value="">Select</option>
                        <option>Kitchen Remodel</option>
                        <option>Bathroom Remodel</option>
                        <option>Full Renovation</option>
                        <option>Showroom Visit</option>
                        <option>Consultation</option>
                      </select>
                    </div>

                    <div>
                      <FieldLabel>Project Details *</FieldLabel>
                      <textarea name="message" required className={`${InputBase} min-h-[140px}`} />
                    </div>

                    <input type="hidden" name="_subject" value="Premier Kitchen & Bath Inquiry" />

                    <Button type="submit" variant="premier">
                      Submit Inquiry
                    </Button>
                  </form>
                </AnimatedSection>

              </div>
            </Panel>
          </div>
        </section>
      </PageShell>

      {/* SUCCESS POPUP */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-8 rounded-xl text-center max-w-md">
            <button onClick={closeModal} className="absolute top-4 right-4">
              <X />
            </button>
            <h3 className="text-2xl mb-4">Thank you</h3>
            <p>We’ve received your inquiry and will contact you shortly.</p>
          </div>
        </div>
      )}
    </>
  );
}