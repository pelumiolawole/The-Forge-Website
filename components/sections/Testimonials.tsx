'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Michael",
    role: "Non-Profit Director",
    quote: "I lead an organisation. I thought I knew how. Working with Coach PO showed me the gap between managing people and actually leading them. That distinction changed how I run everything."
  },
  {
    name: "Eyitayo Adeleke",
    role: "Farmer / Agribusiness",
    quote: "I came in running a farm. I left building a business. Coach PO didn't just give me advice. He changed how I saw what I was doing and what it could become."
  },
  {
    name: "Oluwasanmi",
    role: "Entrepreneur",
    quote: "More clarity, more precision, more joy in the work. Those aren't small things. That's the whole point of building something."
  },
  {
    name: "Angela Adeola",
    role: "HR Manager",
    quote: "I'm a multi-potentialite. I needed someone who wouldn't try to narrow me down but help me find the thread running through everything. Coach PO found it. Then helped me pull it."
  },
  {
    name: "Olayinka Michael",
    role: "Client",
    quote: "I've watched him work for over a decade. The consistency is what gets you. Same philosophy, same depth, same results. That's not performance. That's identity."
  },
  {
    name: "Ayomide Ayeni",
    role: "Client",
    quote: "Every session left me different. Not motivated-different. Actually-see-things-differently different. The financial results followed. That's the sequence he teaches and it works."
  },
  {
    name: "Suprano Clothing",
    role: "CEO",
    quote: "He helped us build the business plan that started everything. We didn't just get a document. We got a way of thinking about the business that we still use today."
  },
  {
    name: "Aunty Funmi",
    role: "Young Adult Esteem Coach",
    quote: "I came with a brand I was half-committed to. I left fully in. That shift from hesitation to dedication is what his coaching does."
  },
  {
    name: "Dansu",
    role: "Senior Manager",
    quote: "I wasn't burned out. I was misaligned. Coach PO helped me see the difference. Once I saw it, the balance sorted itself."
  },
  {
    name: "Oye",
    role: "Full Stack Engineer",
    quote: "Fresh out of university, no clarity, no direction. One thing came out of working with Coach PO: I knew exactly what I was building and why. That's everything at that stage."
  },
  {
    name: "James",
    role: "Entrepreneur",
    quote: "More focused. More driven. Better decisions. Revenue followed. I could give you the long version but that's the whole story."
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;

        // Reset when we've scrolled through half (duplicated content)
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-[#F7F4EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
          What Clients Say
        </h2>
        <p className="text-lg text-[#0A0A0A]/70">
          The work speaks. These are the people it spoke to.
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4"
        style={{ scrollBehavior: 'auto' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredIndex(null);
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[350px] md:w-[400px] bg-white rounded-lg p-8 shadow-sm border border-[#0A0A0A]/5"
            onMouseEnter={() => setHoveredIndex(index)}
            animate={{
              scale: hoveredIndex === index ? 1.03 : 1,
              boxShadow: hoveredIndex === index 
                ? '0 20px 40px rgba(0,0,0,0.1)' 
                : '0 4px 6px rgba(0,0,0,0.05)'
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[#0A0A0A]/80 text-base leading-relaxed mb-6">
              "{testimonial.quote}"
            </p>
            <div>
              <p className="font-semibold text-[#0A0A0A]">{testimonial.name}</p>
              <p className="text-sm text-[#0A0A0A]/60">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile indicator */}
      <div className="md:hidden flex justify-center gap-2 mt-6">
        <span className="text-sm text-[#0A0A0A]/50">Swipe to see more</span>
      </div>
    </section>
  );
}
