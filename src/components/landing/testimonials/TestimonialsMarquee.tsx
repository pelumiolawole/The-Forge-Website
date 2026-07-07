"use client";

import React from "react";
import { m, useReducedMotion } from "framer-motion";
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from "@/lib/motion";
import { TESTIMONIALS, type Testimonial } from "@/content/testimonials";

const testimonials = TESTIMONIALS.filter((t) => t.tier === 1);

const row1 = testimonials.slice(0, 3);
const row2 = testimonials.slice(3);

function TestimonialCard({
  testimonial,
  widthClass = "w-[320px] md:w-[400px] mx-2 md:mx-3",
}: {
  testimonial: Testimonial;
  widthClass?: string;
}) {
  return (
    <div className={`flex-shrink-0 ${widthClass} bg-white border border-[#d0e8ea] rounded-2xl p-5 md:p-6 hover:border-[#008e97] hover:shadow-[0_4px_24px_rgba(0,142,151,0.1)] transition-all duration-300`}>
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-[#008e97] flex items-center justify-center text-white font-bold text-xs md:text-sm">
          {testimonial.initials}
        </div>
        <div>
          <div className="font-semibold text-[#0f1f20] text-sm md:text-base">{testimonial.author}</div>
          {testimonial.role && (
            <div className="text-xs md:text-sm text-[#7a9ea1]">{testimonial.role}</div>
          )}
        </div>
      </div>
      <p className="text-[#3d5a5c] text-sm leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
  );
}

function MarqueeRow({ items, direction = "left" }: { items: Testimonial[]; direction?: "left" | "right" }) {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-2">
      <m.div
        className="flex"
        animate={{
          x: direction === "left"
            ? [0, -50 * items.length * 8]
            : [-50 * items.length * 8, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
        style={{ width: "fit-content" }}
      >
        {duplicated.map((testimonial, idx) => (
          <TestimonialCard key={`${testimonial.id}-${idx}`} testimonial={testimonial} />
        ))}
      </m.div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 md:py-24 bg-[#f4fafb] overflow-hidden">
      <m.div
        className="max-w-6xl mx-auto px-6 lg:px-8 mb-10 md:mb-12 text-center"
        variants={staggerContainer}
        initial={reduce ? "visible" : "hidden"}
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
      >
        <m.div className="section-label mb-4" variants={staggerItem}>Testimonials</m.div>
        <m.h2 className="headline-lg" variants={staggerItem}>
          What people say
          <br />
          <span className="italic text-[#008e97]">about the work</span>
        </m.h2>
      </m.div>

      {reduce ? (
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} widthClass="w-full" />
          ))}
        </div>
      ) : (
        <div className="space-y-4 md:space-y-6">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>
      )}
    </section>
  );
}
