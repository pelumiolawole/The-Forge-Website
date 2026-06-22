"use client";

import { m, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp, VIEWPORT_ONCE } from "@/lib/motion";

const stats = [
  { num: "50", label: "Habits exposed" },
  { num: "5", label: "Identity domains" },
  { num: "1", label: "Method to fix them all" },
];

export function SocialProof() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#f4fafb] py-20 md:py-28">
      <div className="max-w-[760px] mx-auto px-6">
        {/* Decorative quote mark */}
        <div
          className="text-[#b3dde0] font-serif leading-none mb-2 select-none"
          style={{ fontSize: 100, lineHeight: 0.8 }}
          aria-hidden
        >
          &ldquo;
        </div>

        {/* Pull quote */}
        <m.blockquote
          className="text-[#0f1f20] italic font-medium mb-8"
          style={{ fontSize: "1.4rem", lineHeight: 1.7 }}
          variants={fadeUp}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          The people who transform their lives are not the ones with the best strategies.
          They are the ones with the best habits. Not the complicated ones. The petty ones.
          The small ones. The ones you do before anyone else wakes up.
        </m.blockquote>

        <m.div
          className="mb-12"
          variants={fadeUp}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <p className="text-[#7a9ea1] text-[13px]">
            Kehinde Fawumi<br />
            Director, Global Product Development at Mastercard<br />
            <em>Foreword, Petty Little Things</em>
          </p>
        </m.div>

        <div className="h-px bg-[#d0e8ea] mb-12" />

        {/* Stats */}
        <m.div
          className="grid grid-cols-3 gap-4"
          variants={staggerContainer}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {stats.map((s, i) => (
            <m.div
              key={i}
              className="bg-white border border-[#d0e8ea] rounded-lg p-6 text-center"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: i * 0.1 } },
              }}
            >
              <p className="text-[#008e97] font-bold leading-none mb-2" style={{ fontSize: "3rem" }}>
                {s.num}
              </p>
              <p className="text-[#7a9ea1] text-[12px]">{s.label}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
