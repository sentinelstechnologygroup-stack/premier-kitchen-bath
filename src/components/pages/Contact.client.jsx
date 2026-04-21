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

// Replace this with your actual Formspree endpoint after you create the form
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeevrzko";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
  company: "", // honeypot field for spam bots
};

export default function ContactClient() {
  const content = getPageContent("contact");

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (key) => (e) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const closeModal = () => {
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setErrorMessage("");

    // Honeypot spam trap: if filled, silently stop
    if (formData.company) {
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          message: formData.message,
          _subject: `Premier Kitchen & Bath Inquiry — ${formData.projectType || "New Lead"}`,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const message =
          result?.errors?.[0]?.message ||
          "We couldn't submit your inquiry right now. Please try again or email us directly at Info@PremierKitchens.us.";
        throw new Error(message);
      }

      setSubmitted(true);
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      setErrorMessage(
        error?.message ||
          "We couldn't submit your inquiry right now. Please try again."
      );
    } finally {
      setSubmitting(false);
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
                      {/* Honeypot field for spam bots */}
                      <div className="hidden" aria-hidden="true">
                        <label htmlFor="company">Company</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          value={formData.company}
                          onChange={onChange("company")}
                        />
                      </div>

                      <div>
                        <FieldLabel>Full Name *</FieldLabel>
                        <input
                          name="name"
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
                          name="email"
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
                          name="phone"
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
                          name="projectType"
                          value={formData.projectType}
                          onChange={onChange("projectType")}
                          required
                          className={`${InputBase} appearance-none`}
                        >
                          <option value="" disabled>
                            Select a project type
                          </option>
                          <option value="Kitchen Remodel">Kitchen Remodel</option>
                          <option value="Bathroom Remodel">Bathroom Remodel</option>
                          <option value="Full Renovation">Full Renovation</option>
                          <option value="Showroom Visit">Showroom Visit</option>
                          <option value="General Consultation">General Consultation</option>
                        </select>
                      </div>

                      <div>
                        <FieldLabel>Project Details *</FieldLabel>
                        <textarea
                          name="message"
                          placeholder="Share scope, timeline, location, and any design direction you already have in mind."
                          value={formData.message}
                          onChange={onChange("message")}
                          required
                          className={`${InputBase} min-h-[140px] resize-y`}
                        />
                      </div>

                      {errorMessage ? (
                        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                          {errorMessage}
                        </div>
                      ) : null}

                      <div className="pt-2">
                        <Button
                          type="submit"
                          variant="premier"
                          disabled={submitting}
                        >
                          {submitting ? "Submitting..." : "Submit Inquiry"}
                        </Button>
                      </div>
                    </form>
                  </div>
                </AnimatedSection>
              </div>
            </Panel>
          </div>
        </section>
      </PageShell>

      {submitted ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-6">
          <div className="relative w-full max-w-md rounded-[24px] bg-white p-8 shadow-2xl">
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close thank you popup"
              className="absolute right-4 top-4 text-[#1F2E23]/55 transition hover:text-[#1F2E23]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <div className="mb-3 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/45">
                Inquiry Received
              </div>

              <h3 className="mb-4 font-serif-display text-3xl font-light text-[#1F2E23]">
                Thank you for submitting your inquiry
              </h3>

              <p className="mx-auto mb-6 max-w-sm font-sans-clean text-sm leading-[1.8] text-[#1F2E23]/70">
                We’ve received your request and a member of our team will be in
                touch shortly.
              </p>

              <div className="flex justify-center">
                <Button type="button" variant="premier" onClick={closeModal}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}