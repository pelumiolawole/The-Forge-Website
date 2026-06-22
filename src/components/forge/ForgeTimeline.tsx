"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    phase: "01",
    name: "Strip",
    weeks: "Weeks 1–4",
    desc: "We identify the beliefs, patterns, and identities that have been running you without your permission. Nothing is added here. We only look, name, and release.",
    color: "#008e97",
    video: "/videos/forge-strip.webm",
  },
  {
    phase: "02",
    name: "Forge",
    weeks: "Weeks 5–8",
    desc: "You begin to inhabit the identity that was always true of you. Not a new personality. A clearer one. We build the behaviours that flow from who you actually are.",
    color: "#007a82",
    video: "/videos/forge-forge.webm",
  },
  {
    phase: "03",
    name: "Lead",
    weeks: "Weeks 9–12",
    desc: "You practice operating from the new identity under real conditions. Pressure, decisions, relationships. This is where the shift becomes permanent.",
    color: "#006e75",
    video: "/videos/forge-lead.webm",
  },
];

export function ForgeTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const dotRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Animate the connector line growing downward
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 70%",
              scrub: 0.8,
            },
          }
        );
      }

      // Stagger cards in as they scroll into view
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, x: i % 2 === 0 ? -32 : 32, filter: "blur(4px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Pulse dots when they enter
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: dot,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative max-w-3xl mx-auto px-6 lg:px-0">
      {/* Vertical connector line */}
      <div className="absolute left-8 md:left-1/2 top-6 bottom-6 w-px bg-[#d0e8ea] -translate-x-1/2 hidden md:block">
        <div
          ref={lineRef}
          className="absolute inset-0 bg-[#008e97] origin-top"
          style={{ transform: "scaleY(0)" }}
        />
      </div>

      <div className="space-y-10 md:space-y-0">
        {phases.map((item, i) => (
          <div
            key={item.phase}
            className={`relative flex gap-6 md:gap-0 ${
              i % 2 === 0
                ? "md:flex-row md:text-right"
                : "md:flex-row-reverse md:text-left"
            }`}
          >
            {/* Content card — half-width on desktop */}
            <div
              ref={(el) => { if (el) cardRefs.current[i] = el; }}
              className={`flex-1 md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}
            >
              <div className="bg-white border border-[#d0e8ea] rounded-2xl p-6 md:p-8 hover:border-[#008e97] hover:shadow-[0_4px_24px_rgba(0,142,151,0.1)] transition-all duration-300">
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full rounded-xl mb-4 aspect-video object-cover"
                />
                <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#008e97] mb-3 px-3 py-1 bg-[#e6f6f7] rounded-full">
                  {item.weeks}
                </span>
                <h3
                  className="font-['Fraunces'] font-black mb-3"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: item.color }}
                >
                  {item.name}
                </h3>
                <p className="text-[#3d5a5c] text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Central dot — desktop only */}
            <div className="hidden md:flex items-start justify-center w-16 pt-6 flex-shrink-0">
              <div
                ref={(el) => { if (el) dotRefs.current[i] = el; }}
                className="w-12 h-12 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_0_4px_white,0_0_0_6px_#008e97]"
                style={{ backgroundColor: item.color }}
              >
                <span className="text-white font-bold text-sm">{item.phase}</span>
              </div>
            </div>

            {/* Spacer for alternating layout on desktop */}
            <div className="hidden md:block flex-1" />

            {/* Mobile: phase badge */}
            <div
              className="md:hidden w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_0_3px_white,0_0_0_5px_#008e97]"
              style={{ backgroundColor: item.color }}
            >
              <span className="text-white font-bold text-sm">{item.phase}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
