"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { fadeUp, fadeIn, lineReveal, staggerContainer, staggerItem, VIEWPORT_ONCE } from "@/lib/motion";
import { IdentityMorph } from "@/components/motion/IdentityMorph";

const IDENTITY_WORDS = [
  "achievers",
  "leaders",
  "the driven",
  "executives",
  "founders",
];

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-[#008e97] font-['Fraunces']">
      {count}{suffix}
    </div>
  );
}

const heroVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-white pt-24 pb-16 md:pt-0 md:pb-0">
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #008e97 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.04,
        }}
      />

      {/* Ambient teal glow — top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[#e6f6f7] rounded-full blur-[120px] opacity-60 pointer-events-none -translate-y-1/4 translate-x-1/4" />

      {/* Ambient — bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f4fafb] rounded-full blur-[100px] opacity-80 pointer-events-none" />

      <m.div
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center"
        variants={heroVariants}
        initial={reduce ? "visible" : "hidden"}
        animate="visible"
      >
        {/* Eyebrow */}
        <m.div className="section-label mb-6" variants={fadeIn}>
          Leadership Coach &amp; Author
        </m.div>

        {/* Teal rule — scaleX reveal */}
        <m.div
          className="w-20 h-[2px] bg-[#008e97] mx-auto mb-8"
          variants={lineReveal}
        />

        {/* Headline — word stagger */}
        <m.h1
          className="font-['Fraunces'] font-black text-[#0f1f20] mb-4 max-w-4xl mx-auto"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
          variants={staggerContainer}
        >
          <m.span className="block" variants={staggerItem}>
            Built for{" "}
            <IdentityMorph
              words={IDENTITY_WORDS}
              className="text-[#008e97] italic"
            />
            .
          </m.span>
          <m.span className="block" variants={staggerItem}>
            You already know what to do.
          </m.span>
          <m.span className="block text-[#008e97]" variants={staggerItem}>
            So why aren&apos;t you doing it?
          </m.span>
        </m.h1>

        <m.p
          className="text-[#3d5a5c] max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
          variants={fadeUp}
        >
          Most people don&apos;t lack knowledge. They lack the identity to act on it.
          I help driven professionals close that gap through The Forge System.
        </m.p>

        <m.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp}
        >
          <a
            href="https://calendly.com/olawolepelumisunday/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button text-base w-full sm:w-auto justify-center"
          >
            Book a Discovery Call
            <ArrowRight size={18} />
          </a>
          <Link
            href="/forge-program"
            className="inline-flex items-center justify-center gap-2 text-[#3d5a5c] hover:text-[#008e97] transition-colors font-medium text-sm w-full sm:w-auto"
          >
            Learn about The Forge Program
          </Link>
        </m.div>

        {/* Stats */}
        <m.div
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
          variants={staggerContainer}
        >
          <m.div className="text-center" variants={staggerItem}>
            <AnimatedNumber target={10} suffix="+" />
            <div className="text-xs md:text-sm text-[#7a9ea1] mt-1">Years Experience</div>
          </m.div>
          <m.div className="text-center border-x border-[#d0e8ea]" variants={staggerItem}>
            <AnimatedNumber target={5000} suffix="+" />
            <div className="text-xs md:text-sm text-[#7a9ea1] mt-1">People Trained</div>
          </m.div>
          <m.div className="text-center" variants={staggerItem}>
            <AnimatedNumber target={2} />
            <div className="text-xs md:text-sm text-[#7a9ea1] mt-1">Continents</div>
          </m.div>
        </m.div>
      </m.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#d0e8ea] flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#008e97] rounded-full opacity-60" />
        </div>
      </div>
    </section>
  );
}
