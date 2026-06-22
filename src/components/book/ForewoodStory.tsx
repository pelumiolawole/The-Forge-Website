"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";
import { VIEWPORT_ONCE } from "@/lib/motion";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: "easeOut" as const } },
});

export function ForewoodStory() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#f4fafb] py-20 md:py-28 border-l-4 border-[#008e97]">
      <div className="max-w-[680px] mx-auto px-8 md:px-20">
        {/* Decorative quote mark */}
        <div
          className="text-[#b3dde0] font-serif leading-none mb-4 select-none"
          style={{ fontSize: 80, lineHeight: 1 }}
          aria-hidden
        >
          &ldquo;
        </div>

        {/* Para 1 */}
        <m.p
          className="text-[#3d5a5c] mb-6"
          style={{ fontSize: "1.125rem", lineHeight: 1.85 }}
          variants={fadeUp(0)}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          It was 10:47 PM. I was driving home from the office. My phone had just died — but before it did, I saw the video my wife had sent me. Our daughter was standing on stage at her kindergarten graduation. Singing. Looking into the audience for me. Not finding me.
        </m.p>

        {/* Para 2 */}
        <m.p
          className="text-[#3d5a5c] mb-6"
          style={{ fontSize: "1.125rem", lineHeight: 1.85 }}
          variants={fadeUp(0.15)}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          I wasn&rsquo;t there. I had been in back-to-back meetings. I checked my inbox one more time before leaving work. Then another message came in. Then I thought, I&rsquo;ll just finish this one thing. That one thing became three things. By the time I looked up, it was 7 PM. The graduation had started at 6 PM.
        </m.p>

        {/* Para 3 */}
        <m.p
          className="text-[#3d5a5c] mb-10"
          style={{ fontSize: "1.125rem", lineHeight: 1.85 }}
          variants={fadeUp(0.3)}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          I was not lazy. I was not undisciplined. I had systems. Strategy. Frameworks. By every external measure, I was successful. But there was a gap — between what I knew and who I actually was.
        </m.p>

        {/* Pivot callout */}
        <m.div
          className="border-l-[3px] border-[#008e97] bg-[#e6f6f7] rounded-r-lg px-6 py-5 mb-10"
          variants={fadeUp(0.45)}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <p className="text-[#0f1f20] font-semibold" style={{ fontSize: "1.2rem", lineHeight: 1.7 }}>
            The problem wasn&rsquo;t laziness. It was a gap — between the person he knew he was and the way he was actually living.
          </p>
        </m.div>

        {/* Attribution */}
        <m.div
          variants={fadeUp(0.55)}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <p className="text-[#7a9ea1] text-[13px] leading-relaxed">
            — Kehinde Fawumi<br />
            Director, Global Product Development at Mastercard<br />
            <em>Foreword, Petty Little Things</em>
          </p>
        </m.div>
      </div>
    </section>
  );
}
