"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";

const identityTypes = [
  {
    type: "The Overthinker",
    description: "You analyse everything and execute nothing. Your intelligence is real. So is the prison it has built.",
    color: "#008E97",
  },
  {
    type: "The Performer",
    description: "You show up brilliantly for others and disappear when it comes to yourself. The gap between your image and your reality is widening.",
    color: "#C8963E",
  },
  {
    type: "The Avoider",
    description: "You are busy. Always busy. And somehow the most important things never get touched. That is not a schedule problem.",
    color: "#008E97",
  },
  {
    type: "The Drifter",
    description: "You are capable, you are likeable, and you have been coasting on potential for long enough that you have started to wonder if that is all there is.",
    color: "#C8963E",
  },
];

const domains = [
  { name: "Self-Concept", desc: "How you see yourself when no one is watching" },
  { name: "Habits", desc: "The patterns running you without your permission" },
  { name: "Relationships", desc: "What your closest connections reveal about your identity" },
  { name: "Environment", desc: "What your surroundings are quietly reinforcing" },
  { name: "Narrative", desc: "The story you keep telling yourself about why" },
];

export default function PettyAuditPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[#0A0A0A] text-white">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(0,142,151,0.10) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
          <p className="section-label mb-6">Free Diagnostic Tool</p>
          <h1
            className="font-serif font-black mb-8 leading-tight"
            style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
          >
            Find out which 3 habits are quietly
            <br />
            <span className="text-[#008E97]">costing you the most.</span>
          </h1>
          <p className="text-white/70 text-base md:text-xl max-w-2xl mx-auto mb-4 font-light leading-relaxed">
            The Petty Audit is a free 25-question diagnostic built directly from Petty Little Things. Answer honestly. Receive a scored report identifying your top 3 identity-level blockers and the pattern type running your life.
          </p>
          <p className="text-[#C8963E] font-medium mb-10 text-sm md:text-base">
            Takes 5 minutes. The clarity lasts longer.
          </p>
          <a
            href="https://forms.gle/REPLACE_WITH_TYPEFORM_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button inline-flex items-center justify-center gap-2 w-full sm:w-auto text-base px-10 py-4"
          >
            Take the Free Audit
            <ArrowRight size={18} />
          </a>
          <p className="text-white/30 text-sm mt-4">No signup required. Results delivered instantly.</p>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-16 md:py-24 bg-[#F0FAFB]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label text-[#008E97] mb-4">What the Audit Delivers</p>
            <h2 className="headline-lg text-[#0A0A0A]">Not a quiz. A diagnosis.</h2>
            <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto mt-4">
              Most assessments tell you what you already know. This one tells you what has been running you without your permission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                title: "Your score across 5 identity domains",
                body: "Self-concept, habits, relationships, environment, and narrative. You will see exactly where the gaps are, not where you assume they are.",
              },
              {
                title: "Your top 3 Petty Patterns",
                body: "Named, explained, and connected to the identity layer underneath. These are the three habits costing you the most right now.",
              },
              {
                title: "Your identity type",
                body: "The Overthinker, The Performer, The Avoider, or The Drifter. Knowing which one you are is the first step to not being defined by it.",
              },
              {
                title: "A specific next step",
                body: "Not a generic recommendation. A pointed direction based on your results, whether that is the book, the program, or something else entirely.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#008E97] mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-[#0A0A0A] font-bold text-base md:text-lg mb-2">{item.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE 5 DOMAINS */}
      <section className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label mb-4">The Five Domains</p>
            <h2 className="headline-lg">Where the audit looks.</h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mt-4">
              Most people only examine one or two areas of their identity. The Petty Audit covers all five, because a blind spot in any one of them can be running everything else.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {domains.map((d, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 text-center hover:border-[#008E97]/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#008E97]/15 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#008E97] font-bold text-sm">0{i + 1}</span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{d.name}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDENTITY TYPES */}
      <section className="py-16 md:py-24 bg-[#F7F4EF]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label text-[#008E97] mb-4">The Four Identity Types</p>
            <h2 className="headline-lg text-[#0A0A0A]">Which one are you?</h2>
            <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto mt-4">
              Your audit results will identify which pattern type is most dominant. None of them are permanent. All of them can be changed. But you have to see it first.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {identityTypes.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-transparent hover:border-[#008E97]/20 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: t.color }} />
                  <h3 className="text-[#0A0A0A] font-bold text-lg md:text-xl font-serif">{t.type}</h3>
                </div>
                <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-6">How It Works</p>
          <h2 className="headline-lg mb-12">Simple. Honest. Useful.</h2>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-14">
            {[
              { step: "01", title: "Answer 25 questions", body: "Straightforward questions across the five identity domains. No right answers. Just honest ones." },
              { step: "02", title: "Get your scored report", body: "Your results are processed automatically. You receive a PDF report identifying your top 3 patterns and your identity type." },
              { step: "03", title: "Know what to do next", body: "Your report includes a specific recommendation pointing you toward the right next step for where you actually are." },
            ].map((s) => (
              <div key={s.step} className="space-y-3">
                <span className="text-[#008E97] text-sm font-semibold tracking-widest">{s.step}</span>
                <h3 className="text-white font-bold text-base md:text-lg">{s.title}</h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <a
            href="https://forms.gle/REPLACE_WITH_TYPEFORM_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button inline-flex items-center justify-center gap-2 w-full sm:w-auto text-base px-10 py-4"
          >
            Take the Free Audit
            <ArrowRight size={18} />
          </a>
          <p className="text-white/30 text-sm mt-4">Free. Always. No obligation.</p>
        </div>
      </section>

      {/* BRIDGE TO BOOK */}
      <section className="py-16 md:py-20 bg-[#F0FAFB]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label text-[#008E97] mb-4">From Petty Little Things</p>
          <h2 className="headline-lg text-[#0A0A0A] mb-6">The audit names the patterns. The book shows you how to dismantle them.</h2>
          <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Petty Little Things is the companion to everything the audit surfaces. 50 habits examined in full, with the identity shift required to move past each one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="gold-button inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              Get the Book
              <ArrowRight size={18} />
            </Link>
            <Link href="/forge-program" className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#0A0A0A]/20 rounded-lg text-[#0A0A0A] font-semibold hover:border-[#008E97] hover:text-[#008E97] transition-all w-full sm:w-auto text-sm">
              Or apply for The Forge Program
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
