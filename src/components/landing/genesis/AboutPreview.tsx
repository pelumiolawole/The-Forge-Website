"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#008E97]/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#008E97]/20 to-[#C8963E]/20">
              {/* Placeholder for Pelumi's image */}
              <div className="w-full h-full flex items-center justify-center text-white/30">
                <span className="text-lg">Photo placeholder</span>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#C8963E]/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#008E97]/10 rounded-full blur-2xl" />
          </div>

          {/* Content side */}
          <div>
            <div className="section-label mb-4">About</div>
            <h2 className="headline-lg text-white mb-6">
              I don't believe in motivation.
              <br />
              <span className="text-[#008E97]">I believe in systems.</span>
            </h2>

            <div className="space-y-4 body-text">
              <p>
                For nearly a decade, I've worked with executives, entrepreneurs, and emerging 
                leaders across three continents. The pattern is always the same: talented people 
                stuck not because they lack desire, but because they lack structure.
              </p>
              <p>
                That's why I built the FORGE methodology—a practical framework that transforms 
                how you approach growth. Not through hype or quick fixes, but through disciplined 
                architecture for your mind, habits, and execution.
              </p>
              <p>
                As a Certified Scrum Master and Customer Operations leader, I bring systems thinking 
                to personal development. My work sits at the intersection of behavioral psychology, 
                operational excellence, and faith-informed perspective.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/pelumiolawole/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#008E97] hover:text-[#C8963E] transition-colors font-medium"
              >
                Connect on LinkedIn
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://twitter.com/pelumiolawole"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#008E97] hover:text-[#C8963E] transition-colors font-medium"
              >
                Follow on X
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
