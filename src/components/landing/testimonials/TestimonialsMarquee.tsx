"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "I lead an organisation. I thought I knew how. Working with Coach PO showed me the gap between managing people and actually leading them. That distinction changed how I run everything.",
    author: "Michael",
    role: "Non-Profit Director",
    initials: "M"
  },
  {
    id: 2,
    quote: "I came in running a farm. I left building a business. Coach PO didn't just give me advice. He changed how I saw what I was doing and what it could become.",
    author: "Eyitayo Adeleke",
    role: "Farmer / Agribusiness",
    initials: "EA"
  },
  {
    id: 3,
    quote: "More clarity, more precision, more joy in the work. Those aren't small things. That's the whole point of building something.",
    author: "Oluwasanmi",
    role: "Entrepreneur",
    initials: "O"
  },
  {
    id: 4,
    quote: "I'm a multi-potentialite. I needed someone who wouldn't try to narrow me down but help me find the thread running through everything. Coach PO found it. Then helped me pull it.",
    author: "Angela Adeola",
    role: "HR Manager",
    initials: "AA"
  },
  {
    id: 5,
    quote: "I've watched him work for over a decade. The consistency is what gets you. Same philosophy, same depth, same results. That's not performance. That's identity.",
    author: "Olayinka Michael",
    role: "Client",
    initials: "OM"
  },
  {
    id: 6,
    quote: "Every session left me different. Not motivated-different. Actually-see-things-differently different. The financial results followed. That's the sequence he teaches and it works.",
    author: "Ayomide Ayeni",
    role: "Client",
    initials: "AA"
  },
  {
    id: 7,
    quote: "He helped us build the business plan that started everything. We didn't just get a document. We got a way of thinking about the business that we still use today.",
    author: "Suprano Clothing",
    role: "CEO",
    initials: "SC"
  },
  {
    id: 8,
    quote: "I came with a brand I was half-committed to. I left fully in. That shift from hesitation to dedication is what his coaching does.",
    author: "Ma Funmi",
    role: "Young Adult Esteem Coach",
    initials: "FO"
  },
  {
    id: 9,
    quote: "I wasn't burned out. I was misaligned. Coach PO helped me see the difference. Once I saw it, the balance sorted itself.",
    author: "Dansu",
    role: "Senior Manager",
    initials: "D"
  },
  {
    id: 10,
    quote: "Fresh out of university, no clarity, no direction. One thing came out of working with Coach PO: I knew exactly what I was building and why. That's everything at that stage.",
    author: "Oye",
    role: "Full Stack Engineer",
    initials: "O"
  },
  {
    id: 11,
    quote: "More focused. More driven. Better decisions. Revenue followed. I could give you the long version but that's the whole story.",
    author: "James",
    role: "Entrepreneur",
    initials: "J"
  }
];

const row1 = testimonials.slice(0, 6);
const row2 = testimonials.slice(6);

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] md:w-[400px] bg-[#111111] border border-[#F7F4EF]/10 rounded-2xl p-5 md:p-6 mx-2 md:mx-3 hover:border-[#008E97]/50 transition-all duration-300 group">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-[#C8963E] flex items-center justify-center text-white font-bold text-xs md:text-sm">
          {testimonial.initials}
        </div>
        <div>
          <div className="font-semibold text-[#F7F4EF] text-sm md:text-base">{testimonial.author}</div>
          <div className="text-xs md:text-sm text-[#6B7280]">{testimonial.role}</div>
        </div>
      </div>
      <p className="text-[#F7F4EF]/80 text-sm leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
  );
}

function MarqueeRow({ items, direction = "left" }: { items: typeof testimonials; direction?: "left" | "right" }) {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-2">
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? [0, -50 * items.length * 8] : [-50 * items.length * 8, 0]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear"
          }
        }}
        style={{ width: "fit-content" }}
      >
        {duplicated.map((testimonial, idx) => (
          <TestimonialCard key={`${testimonial.id}-${idx}`} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsMarquee() {
  return (
    <section className="py-16 md:py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-10 md:mb-12 text-center">
        <div className="section-label mb-4 text-[#008E97]">Testimonials</div>
        <h2 className="headline-lg text-white">
          What people say
          <br />
          <span className="italic text-[#C8963E]">about the work</span>
        </h2>
      </div>

      <div className="space-y-4 md:space-y-6">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </section>
  );
}
