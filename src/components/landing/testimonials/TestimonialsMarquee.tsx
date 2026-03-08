"use client";

import { useState } from "react";
import { Quote } from "lucide-react";

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
    quote: "He helped us build the business plan that started everything. Three years later we're still running on the foundations he helped us lay.",
    author: "Suprano Clothing",
    role: "CEO",
    initials: "SC"
  },
  {
    id: 8,
    quote: "I came with a brand I was half-committed to. I left fully in. That shift from hesitation to dedication is what his coaching does.",
    author: "Aunty Funmi",
    role: "Young Adult Esteem Coach",
    initials: "AF"
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
    quote: "More focused. More driven. Better decisions. I could give you the long version but that's the whole story.",
    author: "James",
    role: "Entrepreneur",
    initials: "J"
  }
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="card-hover w-[400px] flex-shrink-0 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
      <Quote className="w-8 h-8 text-[#008E97] mb-4" />
      <p className="text-white/80 text-base leading-relaxed mb-6">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#008E97] to-[#C8963E] flex items-center justify-center text-white font-semibold text-sm">
          {testimonial.initials}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{testimonial.author}</div>
          <div className="text-white/50 text-xs">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  const row1 = testimonials.slice(0, 6);
  const row2 = testimonials.slice(5, 11);

  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0a0f14] to-[#0A0A0A]" />

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16 text-center">
          <div className="section-label mb-4">Testimonials</div>
          <h2 className="headline-lg text-white">
            Leaders who have transformed<br />
            <span className="text-[#008E97]">their trajectory</span>
          </h2>
        </div>

        <div 
          className="space-y-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="marquee-container">
            <div 
              className={`flex gap-6 ${isPaused ? '' : 'animate-marquee-left'}`}
              style={{ width: "max-content" }}
            >
              {[...row1, ...row1].map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          <div className="marquee-container">
            <div 
              className={`flex gap-6 ${isPaused ? '' : 'animate-marquee-right'}`}
              style={{ width: "max-content" }}
            >
              {[...row2, ...row2].map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
