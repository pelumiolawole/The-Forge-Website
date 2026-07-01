"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";

const fadeUpVariant = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: "easeOut" as const } },
});

const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, delay: 0.1, ease: "easeOut" as const } },
};

const ruleAfterHook: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, delay: 1.0, ease: "easeOut" as const } },
};

export function HookHero() {
  const reduce = useReducedMotion();
  const init = reduce ? "visible" : "hidden";

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #008e97 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.05,
        }}
      />

      <div className="relative z-10 max-w-[720px] mx-auto px-6 text-center">
        <m.div
          className="w-[60px] h-[2px] bg-[#008e97] mx-auto mb-10"
          variants={lineReveal}
          initial={init}
          animate="visible"
        />

        <m.p
          className="text-[#3d5a5c] italic leading-relaxed mb-4"
          style={{ fontSize: "1.25rem" }}
          variants={fadeUpVariant(0)}
          initial={init}
          animate="visible"
        >
          &ldquo;There&rsquo;s a version of you that&rsquo;s organised, focused, present, and consistent.&rdquo;
        </m.p>

        <m.p
          className="text-[#3d5a5c] italic leading-relaxed mb-8"
          style={{ fontSize: "1.25rem" }}
          variants={fadeUpVariant(0.3)}
          initial={init}
          animate="visible"
        >
          &ldquo;You&rsquo;ve met them. In your head. In your best moments. In the plans you make on Sunday nights.&rdquo;
        </m.p>

        <m.p
          className="text-[#0f1f20] font-bold mb-3"
          style={{ fontSize: "2rem" }}
          variants={fadeUpVariant(0.7)}
          initial={init}
          animate="visible"
        >
          This book closes the gap.
        </m.p>

        <m.div
          className="w-[60px] h-[2px] bg-[#008e97] mx-auto"
          variants={ruleAfterHook}
          initial={init}
          animate="visible"
        />
      </div>
    </section>
  );
}
