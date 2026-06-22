"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ForgeTimeline } from "@/components/forge/ForgeTimeline";

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
    <main className="bg-white text-[#0f1f20]">

      {/* HERO */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(0,142,151,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-32 pb-20 md:pt-40 md:pb-32">
          <p className="section-label mb-6">The Forge Program</p>
          <h1
            className="font-serif font-black mb-8 leading-tight"
            style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
          >
            This is not a coaching programme.
            <br />
            <span className="text-[#008E97]">It is a reconstruction.</span>
          </h1>
          <p className="text-[#3d5a5c] text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Twelve weeks. One question. Who are you, now, consistently?
          </p>
          <a
            href="https://calendly.com/olawolepelumisunday/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button inline-flex items-center justify-center w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-4"
          >
            Apply for The Forge Program
          </a>
        </div>
      </section>

      {/* FORGE DESK FULL BLEED */}
      <section className="relative overflow-hidden" style={{ height: "80vh", minHeight: "400px" }}>
        <div className="absolute inset-0">
          <Image
            src="/images/forge-desk.png"
            alt="A man at a desk in quiet, focused reflection"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            placeholder="empty"
          />
          <div className="absolute top-0 left-0 right-0" style={{ height: "120px", background: "linear-gradient(to bottom, #ffffff, transparent)" }} />
          <div className="absolute bottom-0 left-0 right-0" style={{ height: "160px", background: "linear-gradient(to top, #ffffff, transparent)" }} />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.25)" }} />
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">

            <div>
              <p className="section-label mb-6">Why most coaching fails</p>
              <h2 className="headline-lg mb-8">
                You do not have a strategy problem.
              </h2>
              <div className="space-y-5 text-[#3d5a5c] text-base md:text-lg leading-relaxed">
                <p>
                  I have sat across from hundreds of driven, intelligent, capable people who could not explain why they were not moving. They had the plans. They had the skills. They had the reasons. And still, something was not adding up between who they knew they could be and who they actually were in the room.
                </p>
                <p>
                  The issue was never information. It was identity. They were still operating from an older version of themselves, built for a different season, a different level, a different set of threats. The new strategy kept getting processed through an old identity, and old identity always wins.
                </p>
                <p>
                  Most coaching fixes the doing. It gives you better systems, better habits, better techniques. All useful. None of it touches the thing underneath. The Forge works on the being. When your identity shifts, your behaviour follows without you having to force it.
                </p>
              </div>

              <div className="mt-10 pl-6 border-l-4 border-[#008E97]">
                <p className="text-[#0f1f20] text-lg md:text-xl italic font-light leading-relaxed font-serif">
                  "Most coaching fixes the doing. I work on the being."
                </p>
              </div>
            </div>

            {/* Portrait — hidden on mobile */}
            <div className="hidden md:block rounded-2xl overflow-hidden flex-shrink-0" style={{ width: "300px" }}>
              <Image
                src="/images/book-man.png"
                alt="A man reading in focused solitude"
                width={864}
                height={1220}
                className="w-full h-auto block"
                sizes="300px"
              />
            </div>

          </div>
        </div>
      </section>

      {/* THE PROGRAMME */}
      <section className="py-16 md:py-28 bg-[#f4fafb]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label text-[#008E97] mb-6">The Forge System</p>
          <h2 className="headline-lg text-[#0f1f20] mb-6">
            Three phases. Twelve weeks. One identity shift.
          </h2>
          <p className="text-[#7a9ea1] text-base md:text-lg max-w-2xl mx-auto mb-16">
            The programme does not add to who you are. It removes what no longer belongs.
          </p>

          <ForgeTimeline />
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label mb-6">Is this for you?</p>
            <h2 className="headline-lg">This programme is not for everyone.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#008E97]/8 border border-[#008E97]/20 rounded-2xl p-6 md:p-8">
              <p className="text-[#008E97] font-semibold tracking-widest uppercase text-xs mb-6 md:mb-8">
                This is for you if
              </p>
              <div className="space-y-5">
                {[
                  "You are capable and credentialed, but the gap between who you are in your head and who you are in the room is starting to cost you.",
                  "You have tried the systems, the habits, the courses, and you keep reverting. You suspect the problem is not the method.",
                  "You are at a genuine inflection point in your career or life and you know that who you have been will not get you to where you are going.",
                  "You are willing to be honest with yourself. You do not need to be comfortable. You need to be real.",
                ].map((text, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#008E97] mt-2 flex-shrink-0" />
                    <p className="text-[#3d5a5c] leading-relaxed text-sm md:text-base">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f4fafb] border border-[#d0e8ea] rounded-2xl p-6 md:p-8">
              <p className="text-[#7a9ea1] font-semibold tracking-widest uppercase text-xs mb-6 md:mb-8">
                This is not for you if
              </p>
              <div className="space-y-5">
                {[
                  "You are looking for someone to hand you a strategy and tell you what to do. That work exists. This is not it.",
                  "You want quick wins and fast results. The Forge takes twelve weeks because identity does not shift in a weekend.",
                  "You are not ready to look honestly at your own patterns. The work requires it, and I will not pretend otherwise.",
                  "You want to feel better without changing. Feeling better is a side effect. Changing is the work.",
                ].map((text, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#d0e8ea] mt-2 flex-shrink-0" />
                    <p className="text-[#7a9ea1] leading-relaxed text-sm md:text-base">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS INCLUDED */}
      <section className="py-16 md:py-28 bg-[#f4fafb]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label text-[#008E97] mb-6">What you get</p>
            <h2 className="headline-lg text-[#0f1f20]">Everything you need. Nothing you do not.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {[
              { title: "12 Weekly Sessions", desc: "One hour, one to one, every week for twelve weeks. Each session is structured around where you are in the three phases, not a generic agenda." },
              { title: "The Identity Workbook", desc: "A private workbook for reflection between sessions. Not a journal. A structured tool designed to surface the beliefs and patterns we are working on together." },
              { title: "WhatsApp Access", desc: "Direct access between sessions for questions, decisions, and moments where the work is happening in real time. Not unlimited coaching. A line of support when it matters." },
              { title: "Post-Programme Review", desc: "A dedicated review call at the end of twelve weeks to consolidate what has shifted and map out what comes next. You do not leave without a clear picture of where you are going." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#008E97] mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-[#0f1f20] text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                    <p className="text-[#7a9ea1] leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label mb-6">From people who have done the work</p>
            <h2 className="headline-lg">The shift is real.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                quote: "I had been in leadership for eight years and I did not realise how much of what I was doing was performance. The Forge helped me stop performing and start leading. The difference has been felt by everyone around me.",
                name: "Marcus T.",
                role: "Senior Director, Financial Services",
              },
              {
                quote: "I came in thinking I needed a clearer strategy. What I found out was that I had been operating from fear for years and calling it ambition. That realisation alone was worth everything.",
                name: "Adaeze O.",
                role: "Founder and CEO, Tech Startup",
              },
            ].map((t, i) => (
              <div key={i} className="border border-[#d0e8ea] rounded-2xl p-6 md:p-8 flex flex-col gap-5">
                <p className="text-[#3d5a5c] text-base md:text-lg italic leading-relaxed font-serif">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-[#0f1f20] font-semibold text-sm md:text-base">{t.name}</p>
                  <p className="text-[#7a9ea1] text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE INVESTMENT */}
      <section className="relative py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/forge-street.png"
            alt="A man walking forward with quiet confidence at golden hour"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/75" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f4fafb] to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-6">The Investment</p>
          <h2 className="font-serif font-black text-white mb-6" style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}>
            £1,997
          </h2>
          <p className="text-white/80 text-base md:text-2xl font-light leading-relaxed max-w-xl mx-auto mb-10">
            One investment. Twelve weeks. One version of you that does not need this programme anymore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/olawolepelumisunday/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button inline-flex items-center justify-center w-full sm:w-auto text-base px-8 md:px-10 py-4"
            >
              Apply Now
            </a>
            <a
              href="https://calendly.com/olawolepelumisunday/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="teal-button text-base px-8 md:px-10 py-4 w-full sm:w-auto text-center"
            >
              Book a Discovery Call
            </a>
          </div>

          <p className="text-white/40 text-sm mt-6">
            Not sure yet? The Discovery Call is free. No obligation.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-28 bg-[#f4fafb]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label text-[#008E97] mb-6">Common questions</p>
            <h2 className="headline-lg text-[#0f1f20]">Before you decide</h2>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#008E97]/15 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left"
                >
                  <span className="text-[#0f1f20] font-semibold text-sm md:text-base pr-4">
                    {faq.q}
                  </span>
                  <span className={`text-[#008E97] text-xl flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-64" : "max-h-0"}`}>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#7a9ea1] leading-relaxed border-t border-[#008E97]/10 pt-4 text-sm md:text-base">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-28 bg-[#008e97] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="section-label mb-6">Ready to begin</p>
          <h2 className="headline-lg mb-6">
            The next version of you is not a goal.
            <br />
            <span className="italic font-light">It is an identity.</span>
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-10">
            The work starts with one conversation.
          </p>
          <a
            href="https://calendly.com/olawolepelumisunday/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button inline-flex items-center justify-center w-full sm:w-auto text-base px-10 md:px-12 py-4"
          >
            Apply for The Forge Program
          </a>
        </div>
      </section>

    </main>
  );
}
