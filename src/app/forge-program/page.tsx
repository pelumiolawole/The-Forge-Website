"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    q: "Is this therapy?",
    a: "No. The Forge Program is coaching, not clinical therapy. We work on identity, decisions, and behaviour patterns. If you are dealing with a clinical mental health condition, I will be honest with you about whether coaching is the right fit.",
  },
  {
    q: "How is this different from other coaching?",
    a: "Most coaching works on strategy: what to do, how to do it, when to do it. The Forge works on identity: who you are being while you do it. The difference is the difference between a productivity system you use for three weeks and a person who is consistently disciplined. One is a tool. The other is an identity.",
  },
  {
    q: "What commitment does this require from me?",
    a: "One one-hour session per week for twelve weeks. Between sessions, there is reflection work through the identity workbook. It is not heavy. But it does require honesty, and it does require you to show up.",
  },
  {
    q: "What if I cannot afford the full investment?",
    a: "A payment plan is available on request. Bring it up on the Discovery Call and we will find a way that works.",
  },
  {
    q: "What happens after twelve weeks?",
    a: "You leave with clarity about who you are, how you operate, and what your next season looks like. Some people continue with ongoing coaching. Most do not need to. That is the point.",
  },
  {
    q: "How do I know if I am ready?",
    a: "If you are asking that question, you probably are. The people who are not ready for this work are the ones who are not yet willing to look at themselves honestly. If you are willing, the rest follows.",
  },
];

export default function ForgeProgramPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[#0A0A0A] text-white">

      {/* ── SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Teal radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(0,142,151,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-40 pb-32">
          <p className="section-label mb-6">The Forge Program</p>
          <h1 className="headline-xl mb-8 leading-tight">
            This is not a coaching programme.
            <br />
            <span className="text-[#008E97]">It is a reconstruction.</span>
          </h1>
          <p className="text-white/70 text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Twelve weeks. One question. Who are you, now, consistently?
          </p>
          <a
            href="https://calendly.com/olawolepelumisunday/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button text-base md:text-lg px-10 py-4"
          >
            Apply for The Forge Program
          </a>
        </div>
      </section>

      {/* ── SECTION 1B: FORGE-DESK FULL BLEED */}
      <section
        className="relative overflow-hidden"
        style={{ height: "80vh", minHeight: "500px" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/forge-desk.png"
            alt="A man at a desk in quiet, focused reflection"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Top fade from hero */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: "120px",
              background: "linear-gradient(to bottom, #0A0A0A, transparent)",
            }}
          />
          {/* Bottom fade into next section */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "160px",
              background: "linear-gradient(to top, #0A0A0A, transparent)",
            }}
          />
          {/* Subtle dark overlay */}
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.25)" }} />
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM */}
      <section className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="grid gap-16 items-start"
            style={{ gridTemplateColumns: "1fr auto" }}
          >

            {/* Copy left */}
            <div>
              <p className="section-label mb-6">Why most coaching fails</p>
              <h2 className="headline-lg mb-10">
                You do not have a strategy problem.
              </h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  I have sat across from hundreds of driven, intelligent, capable people who could not explain why they were not moving. They had the plans. They had the skills. They had the reasons. And still, something was not adding up between who they knew they could be and who they actually were in the room.
                </p>
                <p>
                  The issue was never information. It was identity. They were still operating from an older version of themselves, a version built for a different season, a different level, a different set of threats. The new strategy kept getting processed through an old identity, and old identity always wins.
                </p>
                <p>
                  Most coaching fixes the doing. It gives you better systems, better habits, better techniques. All useful. None of it touches the thing underneath. The Forge works on the being. When your identity shifts, your behaviour follows without you having to force it.
                </p>
              </div>

              {/* Blockquote */}
              <div className="mt-10 pl-6 border-l-4 border-[#008E97]">
                <p
                  className="text-white text-xl italic font-light leading-relaxed"
                  style={{ fontFamily: "Fraunces, serif" }}
                >
                  "Most coaching fixes the doing. I work on the being."
                </p>
              </div>
            </div>

            {/* book-man portrait — natural aspect ratio, fixed width column */}
            <div
              className="hidden md:block rounded-2xl overflow-hidden flex-shrink-0"
              style={{ width: "340px" }}
            >
              <Image
                src="/images/book-man.png"
                alt="A man reading in focused solitude"
                width={864}
                height={1220}
                className="w-full h-auto block"
                sizes="340px"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE PROGRAMME */}
      <section className="py-24 md:py-32 bg-[#F0FAFB]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label text-[#008E97] mb-6">The Forge System</p>
          <h2 className="headline-lg text-[#0A0A0A] mb-6">
            Three phases. Twelve weeks. One identity shift.
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto mb-20">
            The programme does not add to who you are. It removes what no longer belongs.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal line desktop */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-[#008E97]/30" />

            <div className="grid md:grid-cols-3 gap-12 relative">
              {[
                {
                  phase: "01",
                  name: "Strip",
                  weeks: "Weeks 1 to 4",
                  desc: "We identify the beliefs, patterns, and identities that have been running you without your permission. Nothing is added here. We only look, name, and release.",
                },
                {
                  phase: "02",
                  name: "Forge",
                  weeks: "Weeks 5 to 8",
                  desc: "You begin to inhabit the identity that was always true of you. Not a new personality. A clearer one. We build the behaviours that flow from who you actually are.",
                },
                {
                  phase: "03",
                  name: "Lead",
                  weeks: "Weeks 9 to 12",
                  desc: "You practice operating from the new identity under real conditions. Pressure, decisions, relationships. This is where the shift becomes permanent.",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center relative">
                  {/* Dot */}
                  <div className="w-12 h-12 rounded-full bg-[#008E97] flex items-center justify-center mb-8 relative z-10 flex-shrink-0">
                    <span className="text-white font-bold text-sm">{item.phase}</span>
                  </div>
                  <p className="text-[#008E97] text-xs font-semibold tracking-widest uppercase mb-2">
                    {item.weeks}
                  </p>
                  <h3 className="text-[#0A0A0A] text-2xl font-bold mb-4" style={{ fontFamily: "Fraunces, serif" }}>
                    {item.name}
                  </h3>
                  <p className="text-[#6B7280] text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHO IT'S FOR */}
      <section className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-6">Is this for you?</p>
            <h2 className="headline-lg">This programme is not for everyone.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* IS FOR */}
            <div className="bg-[#008E97]/8 border border-[#008E97]/20 rounded-2xl p-8">
              <p className="text-[#008E97] font-semibold tracking-widest uppercase text-xs mb-8">
                This is for you if
              </p>
              <div className="space-y-6">
                {[
                  "You are capable and credentialed, but the gap between who you are in your head and who you are in the room is starting to cost you.",
                  "You have tried the systems, the habits, the courses, and you keep reverting. You suspect the problem is not the method.",
                  "You are at a genuine inflection point in your career or life and you know that who you have been will not get you to where you are going.",
                  "You are willing to be honest with yourself. You do not need to be comfortable. You need to be real.",
                ].map((text, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#008E97] mt-2 flex-shrink-0" />
                    <p className="text-white/80 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* IS NOT FOR */}
            <div className="bg-white/3 border border-white/8 rounded-2xl p-8">
              <p className="text-[#6B7280] font-semibold tracking-widest uppercase text-xs mb-8">
                This is not for you if
              </p>
              <div className="space-y-6">
                {[
                  "You are looking for someone to hand you a strategy and tell you what to do. That work exists. This is not it.",
                  "You want quick wins and fast results. The Forge takes twelve weeks because identity does not shift in a weekend.",
                  "You are not ready to look honestly at your own patterns. The work requires it, and I will not pretend otherwise.",
                  "You want to feel better without changing. Feeling better is a side effect. Changing is the work.",
                ].map((text, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-white/30 mt-2 flex-shrink-0" />
                    <p className="text-white/50 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHAT'S INCLUDED */}
      <section className="py-24 md:py-32 bg-[#F7F4EF]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label text-[#008E97] mb-6">What you get</p>
            <h2 className="headline-lg text-[#0A0A0A]">Everything you need. Nothing you do not.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "12 Weekly Sessions",
                desc: "One hour, one to one, every week for twelve weeks. Each session is structured around where you are in the three phases, not a generic agenda.",
              },
              {
                title: "The Identity Workbook",
                desc: "A private workbook for reflection between sessions. Not a journal. A structured tool designed to surface the beliefs and patterns we are working on together.",
              },
              {
                title: "WhatsApp Access",
                desc: "Direct access between sessions for questions, decisions, and moments where the work is happening in real time. Not unlimited coaching. A line of support when it matters.",
              },
              {
                title: "Post-Programme Review",
                desc: "A dedicated review call at the end of twelve weeks to consolidate what has shifted and map out what comes next. You do not leave the programme without a clear picture of where you are going.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#008E97] mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-[#0A0A0A] text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-6">From people who have done the work</p>
            <h2 className="headline-lg">The shift is real.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "I had been in leadership for eight years and I did not realise how much of what I was doing was performance. The Forge helped me stop performing and start leading. The difference has been felt by everyone around me.",
                name: "Marcus T.",
                role: "Senior Director, Financial Services",
              },
              {
                quote:
                  "I came in thinking I needed a clearer strategy. What I found out was that I had been operating from fear for years and calling it ambition. That realisation alone was worth everything.",
                name: "Adaeze O.",
                role: "Founder and CEO, Tech Startup",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-2xl p-8 flex flex-col gap-6"
              >
                <p
                  className="text-white/85 text-lg italic leading-relaxed"
                  style={{ fontFamily: "Fraunces, serif" }}
                >
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-[#6B7280] text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: THE INVESTMENT */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Full-bleed image background */}
        <div className="absolute inset-0">
          <Image
            src="/images/forge-street.png"
            alt="A man walking forward with quiet confidence at golden hour"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0A0A0A]/75" />
          {/* Bottom fade to dark */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-6">The Investment</p>
          <h2
            className="text-7xl md:text-8xl font-black text-[#C8963E] mb-8"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            £1,997
          </h2>
          <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed max-w-xl mx-auto mb-12">
            One investment. Twelve weeks. One version of you that does not need this programme anymore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/olawolepelumisunday/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button text-base px-10 py-4"
            >
              Apply Now
            </a>
            <a
              href="https://calendly.com/olawolepelumisunday/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="teal-button text-base px-10 py-4"
            >
              Book a Discovery Call
            </a>
          </div>

          <p className="text-white/40 text-sm mt-6">
            Not sure yet? The Discovery Call is free. No obligation.
          </p>
        </div>
      </section>

      {/* ── SECTION 8: FAQ */}
      <section className="py-24 md:py-32 bg-[#F0FAFB]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label text-[#008E97] mb-6">Common questions</p>
            <h2 className="headline-lg text-[#0A0A0A]">Before you decide</h2>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-[#008E97]/15 rounded-xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-[#0A0A0A] font-semibold text-base pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`text-[#008E97] text-xl flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-64" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-[#6B7280] leading-relaxed border-t border-[#008E97]/10 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="section-label mb-6">Ready to begin</p>
          <h2 className="headline-lg mb-6">
            The next version of you is not a goal.
            <br />
            <span className="text-[#008E97]">It is an identity.</span>
          </h2>
          <p className="text-white/60 text-lg mb-12">
            The work starts with one conversation.
          </p>
          <a
            href="https://calendly.com/olawolepelumisunday/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button text-base px-12 py-4"
          >
            Apply for The Forge Program
          </a>
        </div>
      </section>

    </main>
  );
}
