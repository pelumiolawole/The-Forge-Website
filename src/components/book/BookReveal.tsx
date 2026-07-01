"use client";

import { m, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import { BookTilt } from "@/components/book/BookTilt";
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from "@/lib/motion";

export function BookReveal() {
  const reduce = useReducedMotion();

  return (
    <section id="book-reveal" className="relative bg-white py-24 md:py-32 overflow-hidden">
      <video
        src="/videos/book-hero.webm"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.06 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-center">

          <m.div
            className="flex justify-center"
            variants={staggerItem}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <BookTilt
              src="/images/book-cover.png"
              alt="Petty Little Things by Pelumi Olawole"
              width={640}
              height={960}
              className="w-56 md:w-72 lg:w-80 mx-auto"
            />
          </m.div>

          <m.div
            variants={staggerContainer}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <m.p
              className="font-bold tracking-[0.15em] text-[#008e97] uppercase mb-4"
              style={{ fontSize: 11 }}
              variants={staggerItem}
            >
              Available Now
            </m.p>

            <m.h2
              className="font-extrabold text-[#0f1f20] mb-3 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              variants={staggerItem}
            >
              Petty Little Things
            </m.h2>

            <m.p className="text-[#3d5a5c] mb-2" style={{ fontSize: "1.1rem" }} variants={staggerItem}>
              50 Habits Quietly Ruining Your Life and How to Fix Them
            </m.p>

            <m.p className="text-[#7a9ea1] italic mb-6" variants={staggerItem}>
              &ldquo;Because someone had to say it.&rdquo;
            </m.p>

            <m.div className="h-px bg-[#d0e8ea] mb-6" variants={staggerItem} />

            <m.p className="text-[#0f1f20] font-semibold mb-1" variants={staggerItem}>
              Pelumi Olawole
            </m.p>
            <m.p className="text-[#7a9ea1] text-[13px] mb-6" variants={staggerItem}>
              Leadership coach. Author. Founder of The Forge System.
            </m.p>

            <m.div className="h-px bg-[#d0e8ea] mb-8" variants={staggerItem} />

            <m.div variants={staggerItem}>
              <a
                href="#sample-reader"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border-[1.5px] border-[#008e97] text-[#008e97] font-semibold rounded-lg hover:bg-[#e6f6f7] transition-colors text-sm"
              >
                <Download size={16} />
                Read the First Chapter Free
              </a>
            </m.div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
