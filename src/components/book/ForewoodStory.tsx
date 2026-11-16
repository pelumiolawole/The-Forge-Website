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
          I&rsquo;m going to start this foreword by telling you about the night I cried in my car.
        </m.p>

        {/* Para 2 */}
        <m.p
          className="text-[#3d5a5c] mb-6"
          style={{ fontSize: "1.125rem", lineHeight: 1.85 }}
          variants={fadeUp(0.1)}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          It was 10:47 PM. I was driving home from the office. My phone had just died, but before it did, I saw the video my wife had sent me. Our daughter was standing on stage at her kindergarten graduation. Singing. Looking into the audience for me. Not finding me.
        </m.p>

        {/* Para 3 */}
        <m.p
          className="text-[#3d5a5c] mb-6"
          style={{ fontSize: "1.125rem", lineHeight: 1.85 }}
          variants={fadeUp(0.2)}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          I wasn&rsquo;t there.
        </m.p>

        {/* Para 4 */}
        <m.p
          className="text-[#3d5a5c] mb-6"
          style={{ fontSize: "1.125rem", lineHeight: 1.85 }}
          variants={fadeUp(0.3)}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          I had been in back-to-back meetings. I checked my inbox one more time before leaving work. Then another message came in. Then I thought, I&rsquo;ll just finish this one thing. That one thing became three things. By the time I looked up, it was 7 PM. The graduation had started at 6 PM.
        </m.p>

        {/* Para 5 */}
        <m.p
          className="text-[#3d5a5c] mb-6"
          style={{ fontSize: "1.125rem", lineHeight: 1.85 }}
          variants={fadeUp(0.4)}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          I called my wife from the car. She put the phone to our daughter&rsquo;s ear. I heard her voice - confused, then disappointed. &ldquo;Daddy, where are you?&rdquo;
        </m.p>

        {/* Para 6 */}
        <m.p
          className="text-[#3d5a5c] mb-6"
          style={{ fontSize: "1.125rem", lineHeight: 1.85 }}
          variants={fadeUp(0.5)}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          I told her I was sorry. I told her I loved her. I told her I was coming home. Then I hung up. And cried for the next thirty minutes. Now here is what you should understand. I wasn&rsquo;t lazy. I wasn&rsquo;t undisciplined. I had systems. Strategy. Frameworks. I was building products, leading teams, and optimizing everything for excellence. By every external measure, I was successful. But I was losing everything that actually mattered.
        </m.p>

        {/* Para 7 */}
        <m.p
          className="text-[#3d5a5c] mb-6"
          style={{ fontSize: "1.125rem", lineHeight: 1.85 }}
          variants={fadeUp(0.6)}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          The problem wasn&rsquo;t that I didn&rsquo;t know what to do. I knew exactly what to do. I&rsquo;d read the books. I understood work-life balance. But there was a gap - The gap between what I knew and who I actually was. I opened my inbox before I opened my eyes. I skipped breakfast because I was &ldquo;too busy.&rdquo; I stayed up late being &ldquo;productive&rdquo; while slowly burning out. I compared my progress to everyone else&rsquo;s highlight reel. And through it all I told myself a comforting story:
        </m.p>

        {/* Para 8 */}
        <m.p
          className="text-[#3d5a5c] mb-10"
          style={{ fontSize: "1.125rem", lineHeight: 1.85 }}
          variants={fadeUp(0.7)}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          This is what dedication looks like. It wasn&rsquo;t. It was what self-sabotage looks like, dressed up as ambition.
        </m.p>

        {/* Attribution */}
        <m.div
          variants={fadeUp(0.8)}
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
