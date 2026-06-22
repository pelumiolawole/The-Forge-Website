"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem, fadeUp, VIEWPORT_ONCE } from "@/lib/motion";

const boxes = [
  { num: "5", label: "Questions that expose the habit at its root" },
  { num: "1", label: "Identity statement that replaces it" },
  { num: "1", label: "Non-negotiable daily action that proves you've changed" },
];

const blocks = [
  {
    label: "The Roast",
    bg: "#ffffff",
    border: "#0f1f20",
    text: "#3d5a5c",
    body: "You set an alarm. It goes off. And then you negotiate with it like you're haggling at a market. You're not resting. You're not sleeping. You're teaching yourself that your commitments are optional.",
  },
  {
    label: "The Psychology",
    bg: "#ffffff",
    border: "#0f1f20",
    text: "#3d5a5c",
    body: "Hitting snooze isn't about being tired. It's about identity. Every time you hit snooze, you complete a tiny act of self-betrayal.",
  },
  {
    label: "The Shift",
    bg: "#008e97",
    border: "#008e97",
    text: "#ffffff",
    labelColor: "rgba(255,255,255,0.7)",
    body: "From 'I need more sleep' to 'I honour my commitments, starting with the first one.'",
    highlight: true,
  },
  {
    label: "Who You Become",
    bg: "#f4fafb",
    border: "#d0e8ea",
    text: "#3d5a5c",
    body: "Someone who does what they say they'll do. Someone whose first decision of the day is integrity, not convenience.",
  },
];

export function MethodPreview() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#f4fafb] py-20 md:py-28">
      <div className="max-w-[760px] mx-auto px-6">
        {/* Heading */}
        <m.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <m.h2
            className="text-[#0f1f20] font-extrabold mb-3"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            variants={staggerItem}
          >
            The 5-1-1 Identity Shift Method
          </m.h2>
          <m.p className="text-[#3d5a5c]" variants={staggerItem}>
            Every habit chapter follows the same structure. Here&rsquo;s what it looks like.
          </m.p>
        </m.div>

        {/* 3 stat boxes */}
        <m.div
          className="grid grid-cols-3 gap-4 mb-14"
          variants={staggerContainer}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {boxes.map((b, i) => (
            <m.div
              key={i}
              className="bg-white border border-[#d0e8ea] rounded-lg p-6 text-center"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: i * 0.1 } },
              }}
            >
              <p className="text-[#008e97] font-bold leading-none mb-3" style={{ fontSize: "3rem" }}>
                {b.num}
              </p>
              <p className="text-[#7a9ea1] text-[13px] leading-snug">{b.label}</p>
            </m.div>
          ))}
        </m.div>

        {/* Chapter label */}
        <m.p
          className="text-[#008e97] font-bold tracking-[0.15em] uppercase mb-6 text-center"
          style={{ fontSize: 11 }}
          variants={fadeUp}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          Habit #01 — Hitting Snooze
        </m.p>

        {/* 4 content blocks */}
        <div className="space-y-4">
          {blocks.map((b, i) => (
            <m.div
              key={i}
              className="rounded-lg px-6 py-5 border-l-[3px]"
              style={{ background: b.bg, borderLeftColor: b.border }}
              variants={fadeUp}
              initial={reduce ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <p
                className="font-bold tracking-[0.15em] uppercase mb-2"
                style={{ fontSize: 11, color: b.labelColor ?? "#008e97" }}
              >
                {b.label}
              </p>
              <p className="leading-relaxed" style={{ color: b.text, fontSize: "1rem", lineHeight: 1.75 }}>
                {b.body}
              </p>
            </m.div>
          ))}
        </div>

        {/* Kicker */}
        <m.div
          className="mt-12 text-center"
          variants={fadeUp}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <p className="text-[#0f1f20] font-semibold mb-1">Identity first. Strategy second. Results inevitable.</p>
          <p className="text-[#7a9ea1] mb-8">This is one habit. There are fifty.</p>
          <a
            href="https://www.amazon.co.uk/dp/B0H4J1NYBY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 bg-[#008e97] text-white font-semibold rounded-lg hover:bg-[#007a82] transition-colors text-sm"
          >
            Get all 50
            <ArrowRight size={16} />
          </a>
        </m.div>
      </div>
    </section>
  );
}
