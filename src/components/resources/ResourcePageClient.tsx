"use client";

import React, { useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { ArrowRight, Loader2, Check } from "lucide-react";
import { BookTilt } from "@/components/book/BookTilt";
import type { ResourcePageConfig } from "@/content/resourcePages";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  staggerItem,
  lineReveal,
  VIEWPORT_ONCE,
} from "@/lib/motion";

export function ResourcePageClient({ config }: { config: ResourcePageConfig }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const reduce = useReducedMotion();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          ...config.subscribeExtra,
          fields: location ? { location } : undefined,
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white">
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0f1f20] pt-24 pb-20">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #008e97 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.08,
          }}
        />
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#008e97] rounded-full blur-[160px] opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#008e97] rounded-full blur-[120px] opacity-[0.07] pointer-events-none" />

        <m.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          variants={staggerContainer}
          initial={reduce ? "visible" : "hidden"}
          animate="visible"
        >
          <m.p
            className="text-[#008e97] text-xs font-semibold uppercase tracking-[0.18em] mb-6"
            variants={fadeIn}
          >
            {config.eyebrow}
          </m.p>

          <m.div
            className="w-12 h-[2px] bg-[#008e97] mx-auto mb-8"
            variants={lineReveal}
          />

          <m.h1
            className="font-['Fraunces'] font-black text-white mb-6 leading-[1.1]"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
            variants={staggerContainer}
          >
            {config.heroHeadlineLines.map((line, i) => (
              <m.span className="block" variants={staggerItem} key={i}>
                {line}
              </m.span>
            ))}
          </m.h1>

          <m.p
            className="text-[#b3dde0] text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-4"
            variants={fadeUp}
          >
            {config.heroSubheading}
          </m.p>

          <m.p
            className="text-[#7a9ea1] text-base leading-relaxed max-w-lg mx-auto mb-10"
            variants={fadeUp}
          >
            {config.heroSupportingLine}
          </m.p>

          <m.div variants={fadeUp}>
            <a
              href="#get-access"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#008e97] text-white text-base font-semibold hover:bg-[#007a82] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("get-access")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {config.heroButtonLabel} <ArrowRight size={18} />
            </a>
          </m.div>
        </m.div>
      </section>

      {/* ── WHAT'S INSIDE ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <m.div
            variants={staggerContainer}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <m.p
              className="text-[#008e97] text-xs font-semibold uppercase tracking-[0.18em] mb-4"
              variants={fadeIn}
            >
              {config.insideEyebrow}
            </m.p>
            <m.div className="w-10 h-[2px] bg-[#008e97] mx-auto mb-8" variants={lineReveal} />
            <m.h2
              className="font-['Fraunces'] font-bold text-[#0f1f20] mb-10"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.015em" }}
              variants={fadeUp}
            >
              {config.insideHeadlineLine1}
              <br />
              <span className="text-[#008e97]">{config.insideHeadlineLine2}</span>
            </m.h2>
            <m.div
              className="space-y-5 text-[#3d5a5c] text-base md:text-lg leading-relaxed text-left max-w-2xl mx-auto"
              variants={staggerContainer}
            >
              {config.insideParagraphs.map((p, i) => (
                <m.p variants={staggerItem} key={i}>
                  {p}
                </m.p>
              ))}
            </m.div>
          </m.div>
        </div>
      </section>

      {/* ── IMAGE ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f4fafb]">
        <div className={`${config.imageSectionMaxWidthClassName} mx-auto px-6`}>
          <m.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={VIEWPORT_ONCE}
          >
            <BookTilt
              src={config.imageSrc}
              alt={config.imageAlt}
              width={config.imageWidth}
              height={config.imageHeight}
              className={config.imageDisplayClassName}
            />
          </m.div>
        </div>
      </section>

      {/* ── FORM ──────────────────────────────────────────────────── */}
      <section id="get-access" className="py-20 md:py-28 bg-white">
        <div className="max-w-lg mx-auto px-6">
          <m.div
            variants={staggerContainer}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <m.p
              className="text-[#008e97] text-xs font-semibold uppercase tracking-[0.18em] mb-4 text-center"
              variants={fadeIn}
            >
              {config.signupLabel}
            </m.p>
            <m.h2
              className="font-['Fraunces'] font-bold text-[#0f1f20] text-center mb-3"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "-0.015em" }}
              variants={fadeUp}
            >
              {config.signupHeadline}
            </m.h2>
            <m.p
              className="text-[#3d5a5c] text-center text-base mb-10 leading-relaxed"
              variants={fadeUp}
            >
              {config.signupCopy}
            </m.p>

            {!success ? (
              <m.form onSubmit={handleSubmit} className="space-y-4" variants={fadeUp}>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className="w-full px-4 py-4 bg-white border-[1.5px] border-[#d0e8ea] rounded-xl text-[#0f1f20] placeholder:text-[#b3dde0] focus:outline-none focus:border-[#008e97] focus:shadow-[0_0_0_3px_rgba(0,142,151,0.08)] transition-all"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                  className="w-full px-4 py-4 bg-white border-[1.5px] border-[#d0e8ea] rounded-xl text-[#0f1f20] placeholder:text-[#b3dde0] focus:outline-none focus:border-[#008e97] focus:shadow-[0_0_0_3px_rgba(0,142,151,0.08)] transition-all"
                />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder={config.locationFieldPlaceholder}
                  className="w-full px-4 py-4 bg-white border-[1.5px] border-[#d0e8ea] rounded-xl text-[#0f1f20] placeholder:text-[#b3dde0] focus:outline-none focus:border-[#008e97] focus:shadow-[0_0_0_3px_rgba(0,142,151,0.08)] transition-all"
                />
                {error && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong &mdash; please try again.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#008e97] text-white text-base font-semibold hover:bg-[#007a82] disabled:opacity-60 transition-colors"
                >
                  {submitting ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending&hellip;</>
                  ) : (
                    <>{config.submitButtonLabel} <ArrowRight size={18} /></>
                  )}
                </button>
                <p className="text-[#b3dde0] text-xs text-center">No spam. Unsubscribe anytime.</p>
              </m.form>
            ) : (
              <m.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#e6f6f7] flex items-center justify-center">
                  <Check className="w-8 h-8 text-[#008e97]" />
                </div>
                <h3 className="font-['Fraunces'] text-2xl font-bold text-[#0f1f20] mb-3">
                  {config.successHeadline}
                </h3>
                <p className="text-[#3d5a5c] text-base leading-relaxed">
                  {config.successBody}
                </p>
              </m.div>
            )}
          </m.div>
        </div>
      </section>
    </div>
  );
}
