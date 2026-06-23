"use client";

import { useState } from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

type Page = { content: React.ReactNode; darkBg?: boolean };

function pages(): Page[] {
  return [
    // Page 1 — Cover
    {
      darkBg: true,
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center py-12">
          <p className="text-white/50 font-semibold tracking-[0.2em] uppercase text-[11px] mb-8">Pelumi Olawole</p>
          <h1 className="text-white font-extrabold leading-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Petty Little Things
          </h1>
          <p className="text-white/70 text-lg mb-6">
            50 Habits Quietly Ruining Your Life and How to Fix Them
          </p>
          <div className="w-12 h-[1px] bg-[#008e97] mx-auto mb-6" />
          <p className="text-white/40 italic text-sm">&ldquo;Because someone had to say it.&rdquo;</p>
        </div>
      ),
    },
    // Page 2 — Dedication
    {
      content: (
        <div className="flex flex-col justify-center h-full py-8">
          <p className="text-[#3d5a5c] leading-relaxed mb-8 italic" style={{ lineHeight: 2 }}>
            DEDICATION

            To God — for the calling.<br />
            To my family — for the foundation.<br />
            To my friends — for the fuel.
          </p>
          <div className="border-l-2 border-[#d0e8ea] pl-5">
            <p className="text-[#3d5a5c] italic leading-relaxed mb-2">
              &ldquo;You do not rise to the level of your goals. You fall to the level of your systems.&rdquo;
            </p>
            <p className="text-[#7a9ea1] text-sm">— James Clear</p>
          </div>
        </div>
      ),
    },
    // Page 3 — Foreword (paras 1–3)
    {
      content: (
        <div>
          <p className="text-[#008e97] font-bold tracking-[0.15em] uppercase text-[11px] mb-6">Foreword</p>
          <p className="text-[#3d5a5c] leading-relaxed mb-5" style={{ lineHeight: 1.85 }}>
            It was 10:47 PM. I was driving home from the office. My phone had just died — but before it did, I saw the video my wife had sent me. Our daughter was standing on stage at her kindergarten graduation. Singing. Looking into the audience for me. Not finding me.
          </p>
          <p className="text-[#3d5a5c] leading-relaxed mb-5" style={{ lineHeight: 1.85 }}>
            I wasn&rsquo;t there. I had been in back-to-back meetings. I checked my inbox one more time before leaving work. Then another message came in. Then I thought, I&rsquo;ll just finish this one thing. That one thing became three things. By the time I looked up, it was 7 PM. The graduation had started at 6 PM.
          </p>
          <p className="text-[#3d5a5c] leading-relaxed" style={{ lineHeight: 1.85 }}>
            I was not lazy. I was not undisciplined. I had systems. Strategy. Frameworks. By every external measure, I was successful. But there was a gap — between what I knew and who I actually was.
          </p>
        </div>
      ),
    },
    // Page 4 — Foreword continued
    {
      content: (
        <div>
          <p className="text-[#008e97] font-bold tracking-[0.15em] uppercase text-[11px] mb-6">Foreword — continued</p>
          <p className="text-[#3d5a5c] leading-relaxed mb-5" style={{ lineHeight: 1.85 }}>
            The drive home that night was one of the longest of my life. Not because of traffic. Because of clarity. For the first time in years, I could see the gap between who I was pretending to be and who I was actually showing up as.
          </p>
          <p className="text-[#3d5a5c] leading-relaxed mb-5" style={{ lineHeight: 1.85 }}>
            The problem wasn&rsquo;t laziness. It was a pattern I had never named. A series of small, petty decisions — none of which seemed significant on their own — that had accumulated into a life that didn&rsquo;t reflect my values.
          </p>
          <p className="text-[#3d5a5c] leading-relaxed mb-5" style={{ lineHeight: 1.85 }}>
            The people who transform their lives are not the ones with the best strategies. They are the ones with the best habits. Not the complicated ones. The petty ones. The small ones. The ones you do before anyone else wakes up.
          </p>
          <p className="text-[#0f1f20] font-semibold leading-relaxed" style={{ lineHeight: 1.85 }}>
            That is why this book matters.
          </p>
        </div>
      ),
    },
    // Page 5 — Why This Book Exists (first half)
    {
      content: (
        <div>
          <p className="text-[#008e97] font-bold tracking-[0.15em] uppercase text-[11px] mb-4">From To-Do to To-Be</p>
          <h2 className="text-[#0f1f20] font-extrabold mb-6" style={{ fontSize: "1.5rem" }}>Why This Book Exists</h2>
          <p className="text-[#3d5a5c] leading-relaxed mb-5" style={{ lineHeight: 1.85 }}>
            This book is not a productivity manual. It is not a time management system. It is not a morning routine checklist or a goal-setting framework. There are plenty of those. You have probably read most of them.
          </p>
          <p className="text-[#3d5a5c] leading-relaxed mb-5" style={{ lineHeight: 1.85 }}>
            This book is about the gap. The gap between who you know you are and who you are actually showing up as. The gap between the decisions you intend to make and the ones you end up making. The gap between the life you have planned and the one you are living.
          </p>
          <p className="text-[#3d5a5c] leading-relaxed" style={{ lineHeight: 1.85 }}>
            That gap has a name. It is not laziness. It is not lack of discipline. It is identity. Specifically, it is the distance between the identity you have adopted and the one you need to inhabit to become the person you say you want to be.
          </p>
        </div>
      ),
    },
    // Page 6 — Why This Book Exists (second half)
    {
      content: (
        <div>
          <p className="text-[#3d5a5c] leading-relaxed mb-5" style={{ lineHeight: 1.85 }}>
            Most people try to close this gap by adding more — more information, more systems, more accountability, more tools. This book takes a different approach. It closes the gap by removing what is in the way.
          </p>
          <p className="text-[#3d5a5c] leading-relaxed mb-5" style={{ lineHeight: 1.85 }}>
            The 50 habits in this book are not moral failures. They are not signs that you are broken. They are patterns — well-intentioned, often unconscious, frequently invisible — that are quietly, consistently, and effectively keeping you from becoming who you actually are.
          </p>
          <div className="border-l-[3px] border-[#008e97] bg-[#e6f6f7] rounded-r-lg px-5 py-4 mb-5">
            <p className="text-[#0f1f20] font-semibold leading-relaxed" style={{ lineHeight: 1.75 }}>
              You already know what to do. This book is about helping you become the person who actually does it.
            </p>
          </div>
          <p className="text-[#3d5a5c] leading-relaxed" style={{ lineHeight: 1.85 }}>
            Consider this your wake-up call.
          </p>
        </div>
      ),
    },
    // Page 7 — How to Use This Book
    {
      content: (
        <div>
          <p className="text-[#008e97] font-bold tracking-[0.15em] uppercase text-[11px] mb-4">How to Use This Book</p>
          <h2 className="text-[#0f1f20] font-extrabold mb-6" style={{ fontSize: "1.5rem" }}>Three Paths</h2>
          <div className="space-y-5">
            {[
              { num: "01", title: "The Honest Read", body: "Start at habit one and read straight through. Circle every habit you recognise. Be ruthless. The more you circle, the more you will get from this book." },
              { num: "02", title: "The Targeted Fix", body: "Go to the habit you know is costing you the most right now. Do the 5-1-1 method. Live with it for a week before moving on." },
              { num: "03", title: "The 30-Day Reset", body: "Follow the structured programme at the back of the book. One habit per day for 30 days. Full protocol included." },
            ].map((path) => (
              <div key={path.num} className="flex gap-4">
                <span className="text-[#b3dde0] font-extrabold text-sm flex-shrink-0 mt-1">{path.num}</span>
                <div>
                  <p className="text-[#0f1f20] font-bold mb-1">{path.title}</p>
                  <p className="text-[#3d5a5c] text-sm leading-relaxed">{path.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Page 8 — The 5-1-1 Method
    {
      content: (
        <div>
          <p className="text-[#008e97] font-bold tracking-[0.15em] uppercase text-[11px] mb-4">The Method</p>
          <h2 className="text-[#0f1f20] font-extrabold mb-2" style={{ fontSize: "1.5rem" }}>The 5-1-1 Identity Shift Method</h2>
          <p className="text-[#3d5a5c] mb-6 text-sm">Every habit chapter follows the same structure.</p>
          <div className="space-y-4">
            {[
              { n: "5", desc: "Five questions that expose the habit at its root.", detail: "These are not rhetorical. Answer them in writing." },
              { n: "1", desc: "One identity statement that replaces it.", detail: "Not an affirmation. An accurate description of who you are becoming." },
              { n: "1", desc: "One non-negotiable daily action that proves you've changed.", detail: "Small. Specific. Non-optional." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-[#f4fafb] border border-[#d0e8ea] rounded-lg px-5 py-4">
                <span className="text-[#008e97] font-extrabold" style={{ fontSize: "2rem", lineHeight: 1 }}>{item.n}</span>
                <div>
                  <p className="text-[#0f1f20] font-semibold mb-1">{item.desc}</p>
                  <p className="text-[#7a9ea1] text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#0f1f20] font-semibold text-center mt-6">Identity first. Strategy second. Results inevitable.</p>
        </div>
      ),
    },
    // Page 9 — Part 1 Introduction
    {
      content: (
        <div>
          <p className="text-[#008e97] font-bold tracking-[0.15em] uppercase text-[11px] mb-2">Part One</p>
          <h2 className="text-[#0f1f20] font-extrabold mb-6" style={{ fontSize: "1.5rem" }}>
            How to Ruin Your Day Before Breakfast
          </h2>
          <p className="text-[#3d5a5c] leading-relaxed mb-4" style={{ lineHeight: 1.85 }}>
            Your morning is a declaration of war. Whether you know it or not.
          </p>
          <p className="text-[#3d5a5c] leading-relaxed mb-4" style={{ lineHeight: 1.85 }}>
            Every decision you make in the first 90 minutes of your day tells your brain who you are. Not who you want to be. Who you actually are, based on the evidence of your behaviour.
          </p>
          <p className="text-[#3d5a5c] leading-relaxed mb-4" style={{ lineHeight: 1.85 }}>
            Snooze the alarm and you have told yourself: my commitments are negotiable. Check your phone before your feet touch the floor and you have told yourself: other people&rsquo;s urgencies matter more than my intentions.
          </p>
          <p className="text-[#0f1f20] font-semibold leading-relaxed" style={{ lineHeight: 1.85 }}>
            The five habits in this section are ruining your day before it starts.
          </p>
        </div>
      ),
    },
    // Page 10 — Habit #1 (Roast + Fallout)
    {
      content: (
        <div>
          <p className="text-[#008e97] font-bold tracking-[0.15em] uppercase text-[11px] mb-2">Habit #01</p>
          <h2 className="text-[#0f1f20] font-extrabold mb-6" style={{ fontSize: "1.5rem" }}>Hitting Snooze</h2>
          <div className="border-l-[3px] border-[#0f1f20] bg-white px-5 py-4 mb-5">
            <p className="text-[#008e97] font-bold tracking-[0.15em] uppercase text-[11px] mb-2">The Roast</p>
            <p className="text-[#3d5a5c] leading-relaxed" style={{ lineHeight: 1.85 }}>
              You set an alarm. It goes off. And then you negotiate with it like you&rsquo;re haggling at a market. Five more minutes. Just five. Those five become fifteen. Fifteen become forty. And you&rsquo;re not resting. You&rsquo;re not sleeping. You&rsquo;re teaching yourself that your commitments are optional.
            </p>
          </div>
          <div className="border-l-[3px] border-[#0f1f20] bg-white px-5 py-4">
            <p className="text-[#008e97] font-bold tracking-[0.15em] uppercase text-[11px] mb-2">The Fallout</p>
            <p className="text-[#3d5a5c] leading-relaxed" style={{ lineHeight: 1.85 }}>
              You start the day behind. Not by 9 minutes. By intention. You had a plan. You overrode it before you were even conscious. The rest of your day carries that energy — the small, quiet knowledge that when it counted, you chose comfort over commitment.
            </p>
          </div>
        </div>
      ),
    },
    // Page 11 — Habit #1 (Psychology + Shift + Become)
    {
      content: (
        <div className="space-y-4">
          <div className="border-l-[3px] border-[#0f1f20] bg-white px-5 py-4">
            <p className="text-[#008e97] font-bold tracking-[0.15em] uppercase text-[11px] mb-2">The Psychology</p>
            <p className="text-[#3d5a5c] leading-relaxed" style={{ lineHeight: 1.85 }}>
              Hitting snooze isn&rsquo;t about being tired. It&rsquo;s about identity. Every time you hit snooze, you complete a tiny act of self-betrayal. Small enough to ignore. Significant enough to compound.
            </p>
          </div>
          <div className="rounded-lg bg-[#008e97] px-5 py-4 border-l-[3px] border-[#008e97]">
            <p className="font-bold tracking-[0.15em] uppercase text-[11px] mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>The Shift</p>
            <p className="text-white leading-relaxed" style={{ lineHeight: 1.85 }}>
              From &ldquo;I need more sleep&rdquo; to &ldquo;I honour my commitments, starting with the first one.&rdquo;
            </p>
          </div>
          <div className="border-l-[3px] border-[#d0e8ea] bg-[#f4fafb] px-5 py-4">
            <p className="text-[#008e97] font-bold tracking-[0.15em] uppercase text-[11px] mb-2">Who You Become</p>
            <p className="text-[#3d5a5c] leading-relaxed" style={{ lineHeight: 1.85 }}>
              Someone who does what they say they&rsquo;ll do. Someone whose first decision of the day is integrity, not convenience.
            </p>
          </div>
          <div className="text-center pt-2">
            <p className="text-[#7a9ea1] text-sm italic">Continue reading in the full book →</p>
          </div>
        </div>
      ),
    },
  ];
}

const TOTAL = 11;

export function SampleChapterReader() {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(1);
  const allPages = pages();
  const pageData = allPages[current - 1];
  const isLast = current === TOTAL;

  return (
    <section id="sample-reader" className="bg-white py-20 md:py-28">
      <div className="max-w-[760px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[#0f1f20] font-extrabold mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
            Read the First Chapter Free
          </h2>
          <p className="text-[#3d5a5c]">No email required. No download. Just read.</p>
        </div>

        {/* Reader container */}
        <div
          className="relative border border-[#d0e8ea] rounded-lg overflow-hidden"
          style={{
            boxShadow: "0 8px 40px rgba(0,142,151,0.10), 0 2px 8px rgba(0,0,0,0.06)",
            minHeight: 520,
            background: pageData.darkBg ? "#0f1f20" : "#ffffff",
          }}
        >
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d0e8ea] z-10">
            <m.div
              className="h-full bg-[#008e97]"
              animate={{ width: `${(current / TOTAL) * 100}%` }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>

          {/* Page indicator */}
          <div className="absolute top-4 left-0 right-0 text-center z-10">
            <span className="text-[#7a9ea1] text-[12px]" style={{ opacity: pageData.darkBg ? 0.5 : 1 }}>
              Page {current} of {TOTAL}
            </span>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <m.div
              key={current}
              className="px-10 md:px-16 pt-14 pb-20"
              style={{ minHeight: 520 }}
              initial={reduce ? { opacity: 1 } : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {pageData.content}
            </m.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-10 md:px-16">
            <button
              onClick={() => setCurrent((p) => Math.max(1, p - 1))}
              className="flex items-center gap-2 text-[#3d5a5c] text-sm font-medium transition-opacity hover:opacity-70"
              style={{ opacity: current === 1 ? 0 : 1, pointerEvents: current === 1 ? "none" : "auto" }}
              aria-hidden={current === 1}
            >
              <ArrowLeft size={15} />
              Previous
            </button>
            {isLast ? (
              <a
                href="https://www.amazon.co.uk/dp/B0H4J1NYBY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#008e97] text-white font-semibold rounded-lg hover:bg-[#007a82] transition-colors text-sm"
              >
                Start Reading the Book
                <ArrowRight size={15} />
              </a>
            ) : (
              <button
                onClick={() => setCurrent((p) => Math.min(TOTAL, p + 1))}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#008e97] text-white font-semibold rounded-lg hover:bg-[#007a82] transition-colors text-sm"
              >
                Next Page
                <ArrowRight size={15} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
