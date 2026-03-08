"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.3;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      <div className="noise-overlay z-10" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#0f1419]" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#008E97]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C8963E]/5 rounded-full blur-[120px]" />

      <div ref={heroRef} className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="section-label mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Leadership Coach & Author
        </div>

        <h1 className="headline-xl text-white mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          What if the gap between{" "}
          <span className="text-[#008E97]">who you are</span>
          <br className="hidden md:block" />
          {" "}and{" "}
          <span className="text-[#008E97]">who you could become</span>
          <br className="hidden md:block" />
          {" "}is not talent{" "}
          <span className="italic">it is structure?</span>
        </h1>

        <p className="body-text max-w-2xl mx-auto mb-10 text-white/70 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          I help growth-driven professionals and leaders build the internal architecture 
          for sustained excellence through the FORGE methodology, executive coaching, 
          and practical tools that actually work.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://calendly.com/olawolepelumisunday/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button inline-flex items-center gap-2 text-base"
          >
            Book a Discovery Call
            <ArrowRight size={18} />
          </a>

          <Link
            href="#about"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#008E97] group-hover:bg-[#008E97]/10 transition-all">
              <Play size={18} className="ml-1" />
            </span>
            <span className="font-medium">Watch the story</span>
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#C8963E] font-['Fraunces']">10+</div>
            <div className="text-sm text-white/50 mt-1">Years Experience</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-[#C8963E] font-['Fraunces']">500+</div>
            <div className="text-sm text-white/50 mt-1">Leaders Coached</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#C8963E] font-['Fraunces']">3</div>
            <div className="text-sm text-white/50 mt-1">Continents</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
