"use client";

import React, { useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { ArrowRight, Loader2, Check } from "lucide-react";
import { BookTilt } from "@/components/book/BookTilt";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  staggerItem,
  lineReveal,
  VIEWPORT_ONCE,
} from "@/lib/motion";

// TODO: Replace with real cover image once Canva export is complete
const WORKBOOK_COVER = "/images/h2-blueprint-cover.png";

// TODO: swap PDF path if Canva export uses a different filename
const H2_GROUP_ID = "bomwLz";

export function H2PageClient() {
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
          groupId: H2_GROUP_ID,
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
            Personal Mastery &middot; H2 Blueprint
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
            <m.span className="block" variants={staggerItem}>
              Most people spend Q3
            </m.span>
            <m.span className="block" variants={staggerItem}>
              recovering from Q1.
            </m.span>
          </m.h1>

          <m.p
            className="text-[#b3dde0] text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-4"
            variants={fadeUp}
          >
            This is the workbook that ends that cycle.
          </m.p>

          <m.p
            className="text-[#7a9ea1] text-base leading-relaxed max-w-lg mx-auto mb-10"
            variants={fadeUp}
          >
            Forty pages. Five identity domains. One honest reckoning with the gap
            between who you planned to be and who you actually became.
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
              Get the Blueprint &mdash; Free <ArrowRight size={18} />
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
              What&apos;s Inside
            </m.p>
            <m.div className="w-10 h-[2px] bg-[#008e97] mx-auto mb-8" variants={lineReveal} />
            <m.h2
              className="font-['Fraunces'] font-bold text-[#0f1f20] mb-10"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.015em" }}
              variants={fadeUp}
            >
              Identity audit before goal-setting.
              <br />
              <span className="text-[#008e97]">Not another planner.</span>
            </m.h2>
            <m.div
              className="space-y-5 text-[#3d5a5c] text-base md:text-lg leading-relaxed text-left max-w-2xl mx-auto"
              variants={staggerContainer}
            >
              <m.p variants={staggerItem}>
                Before you set a single goal for the second half, you need to know who you&apos;re
                actually setting it for. The H2 Blueprint starts where every other productivity
                tool skips: your identity.
              </m.p>
              <m.p variants={staggerItem}>
                Most people review their H1 results and set better H2 targets. This workbook
                asks the harder question: who were you{" "}
                <em>becoming</em> while you were chasing those targets?
              </m.p>
              <m.p variants={staggerItem}>
                Because the version of you that didn&apos;t follow through on H1 is the same
                version who will write the H2 goals, unless something changes first.
                This workbook changes it first.
              </m.p>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* ── WORKBOOK MOCKUP ───────────────────────────────────────── */}
      <section className="py-16 bg-[#f4fafb]">
        <div className="max-w-xs mx-auto px-6">
          <m.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={VIEWPORT_ONCE}
          >
            {/* TODO: swap src for real cover once Canva export is ready */}
            <BookTilt
              src={WORKBOOK_COVER}
              alt="Personal Mastery H2 Blueprint — workbook cover"
              width={600}
              height={800}
              className="w-56 md:w-64 mx-auto"
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
              Free Download
            </m.p>
            <m.h2
              className="font-['Fraunces'] font-bold text-[#0f1f20] text-center mb-3"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "-0.015em" }}
              variants={fadeUp}
            >
              Get the H2 Blueprint
            </m.h2>
            <m.p
              className="text-[#3d5a5c] text-center text-base mb-10 leading-relaxed"
              variants={fadeUp}
            >
              Enter your details and the workbook lands in your inbox &mdash; ready to use today.
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
                  placeholder="Where are you based? (e.g. Lagos, London)"
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
                    <>Send Me the Blueprint <ArrowRight size={18} /></>
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
                  Check your email.
                </h3>
                <p className="text-[#3d5a5c] text-base leading-relaxed">
                  Your download link is on its way.
                </p>
              </m.div>
            )}
          </m.div>
        </div>
      </section>
    </div>
  );
}
