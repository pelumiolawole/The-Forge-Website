"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function FinalCTA() {
  const reduce = useReducedMotion();

  function scrollToRetailers() {
    document.getElementById("retailer-links")?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
    });
  }

  return (
    <section className="bg-[#008e97] py-24 md:py-32">
      <div className="max-w-[640px] mx-auto px-6 text-center">
        <m.div
          variants={staggerContainer}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <m.h2
            className="text-white font-extrabold leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            variants={staggerItem}
          >
            The habits are already running your life.
          </m.h2>

          <m.p
            className="mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", lineHeight: 1.7 }}
            variants={staggerItem}
          >
            The only question is whether they&rsquo;re running it for you or against you.
          </m.p>

          <m.div variants={staggerItem}>
            <button
              onClick={scrollToRetailers}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#008e97] font-bold rounded-lg hover:bg-white/90 transition-colors text-sm"
            >
              <ArrowUp size={16} />
              Order Now
            </button>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
