// src/components/pages/Contact.client.jsx
"use client";

import React, { useRef, useState } from "react";
import Script from "next/script";
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

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeevrzko";
const TURNSTILE_SITE_KEY = "0x4AAAAAADAzts7sUT-gN21G"; // 🔥 replace with your actual Turnstile site key

export default function ContactClient() {
  const content = getPageContent("contact");

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const widgetIdRef = useRef(null);
  const renderedRef = useRef(false);

  const closeModal = () => setSubmitted(false);

  const renderTurnstile = () => {
    if (
      typeof window === "undefined" ||
      !window.turnstile ||
      !TURNSTILE_SITE_KEY ||
      TURNSTILE_SITE_KEY === "YOUR_REAL_TURNSTILE_SITE_KEY" ||
      renderedRef.current
    ) {
      return;
    }

    const container = document.getElementById("cf-turnstile-container");
    if (!container) return;

    container.innerHTML = "";

    try {
      widgetIdRef.current = window.turnstile.render("#cf-turnstile-container", {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "light",
        appearance: "always",
        callback: (token) => {
          setTurnstileToken(token || "");
          setErrorMessage("");
        },
        "expired-callback": () => {
          setTurnstileToken("");
        },
        "error-callback": () => {
          setTurnstileToken("");
          setErrorMessage(
            "Captcha could not be verified. Please refresh the page and try again."
          );
        },
      });

      renderedRef.current = true;
      setTurnstileLoaded(true);
    } catch (error) {
      console.error("Turnstile render error:", error);
      setErrorMessage(
        "Captcha could not be loaded. Please refresh the page and try again."
      );
    }
  };

  const resetTurnstile = () => {
    if (
      typeof window !== "undefined" &&
      window.turnstile &&
      widgetIdRef.current !== null
    ) {
      try {
        window.turnstile.reset(widgetIdRef.current);
      } catch (error) {
        console.error("Turnstile reset error:", error);
      }
    }

    setTurnstileToken("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("company")) return;

    if (!turnstileToken) {
      setErrorMessage("Captcha verification is required before submitting.");
      return;
    }

    formData.set("cf-turnstile-response", turnstileToken);

    setSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const text = await response.text();
      let result = null;

      try {
        result = text ? JSON.parse(text) : null;
      } catch {
        result = { raw: text };
      }

      if (!response.ok) {
        console.error("Formspree error:", response.status, result);
        throw new Error(
          result?.errors?.[0]?.message ||
            result?.error ||
            result?.raw ||
            `Submission failed with status ${response.status}.`
        );
      }

      console.log("Formspree success:", result);
      form.reset();
      resetTurnstile();
      setSubmitted(true);
    } catch (error) {
      console.error("Submit failure:", error);
      resetTurnstile();
      setErrorMessage(
        error?.message ||
          "There was an issue submitting the form. Please try again."
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

      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderTurnstile}
      />

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
                        <Phone className="mt-1 h-5 w-5 text-[#545E55]" />
                        <div>
                          <div className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                            Phone
                          </div>
                          <a
                            href="tel:12815583700"
                            className="text-lg text-[#1F2E23] hover:text-[#545E55]"
                          >
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
                          <a
                            href="mailto:Info@PremierKitchens.us"
                            className="text-lg text-[#1F2E23] hover:text-[#545E55]"
                          >
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
                            1918 Baker Rd
                            <br />
                            Houston, TX 77094
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-[#1F2E23]/10 pt-8">
                        <div className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                          Service Area
                        </div>
                        <p className="text-sm leading-[1.75] text-[#1F2E23]/70">
                          {content.serviceAreaText}
                        </p>
                      </div>

                      <div className="border-t border-[#1F2E23]/10 pt-8">
                        <div className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                          Office Hours
                        </div>
                        <p className="text-sm leading-[1.75] text-[#1F2E23]/70">
                          Monday through Friday, 8:00–5:00
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection>
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-8">
                    <input
                      type="text"
                      name="company"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div>
                      <FieldLabel>Full Name *</FieldLabel>
                      <input
                        name="name"
                        required
                        className={InputBase}
                        autoComplete="name"
                      />
                    </div>

                    <div>
                      <FieldLabel>Email *</FieldLabel>
                      <input
                        type="email"
                        name="email"
                        required
                        className={InputBase}
                        autoComplete="email"
                      />
                    </div>

                    <div>
                      <FieldLabel>Phone *</FieldLabel>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className={InputBase}
                        autoComplete="tel"
                      />
                    </div>

                    <div>
                      <FieldLabel>Project Type *</FieldLabel>
                      <select name="projectType" required className={InputBase} defaultValue="">
                        <option value="" disabled>
                          Select a project type
                        </option>
                        <option value="Kitchen Remodel">Kitchen Remodel</option>
                        <option value="Bathroom Remodel">Bathroom Remodel</option>
                        <option value="Full Renovation">Full Renovation</option>
                        <option value="Showroom Visit">Showroom Visit</option>
                        <option value="Consultation">Consultation</option>
                      </select>
                    </div>

                    <div>
                      <FieldLabel>Project Details *</FieldLabel>
                      <textarea
                        name="message"
                        required
                        className={`${InputBase} min-h-[140px]`}
                        placeholder="Share scope, timeline, location, and any design direction you already have in mind."
                      />
                    </div>

                    <input
                      type="hidden"
                      name="_subject"
                      value="Premier Kitchen & Bath Inquiry"
                    />

                    <div>
                      <FieldLabel>Security Check</FieldLabel>
                      <div id="cf-turnstile-container" className="min-h-[66px]" />
                    </div>

                    {!turnstileLoaded ? (
                      <div className="text-sm text-[#1F2E23]/60">
                        Loading security check...
                      </div>
                    ) : null}

                    {errorMessage ? (
                      <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {errorMessage}
                      </div>
                    ) : null}

                    <Button
                      type="submit"
                      variant="premier"
                      disabled={submitting || !turnstileLoaded}
                    >
                      {submitting ? "Submitting..." : "Submit Inquiry"}
                    </Button>
                  </form>
                </AnimatedSection>
              </div>
            </Panel>
          </div>
        </section>
      </PageShell>

      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="relative w-full max-w-md rounded-xl bg-white p-8 text-center shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-[#1F2E23]/55 hover:text-[#1F2E23]"
              aria-label="Close"
            >
              <X />
            </button>

            <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/45">
              Inquiry Received
            </div>

            <h3 className="mb-4 text-2xl font-serif-display text-[#1F2E23]">
              Thank you
            </h3>

            <p className="text-[#1F2E23]/70">
              We’ve received your inquiry and will contact you shortly.
            </p>
          </div>
        </div>
      )}
    </>
  );
}