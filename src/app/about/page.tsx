"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* SECTION 1 — HERO (dark) */}
      <section className="relative px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo Placeholder - Styled intentionally */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] rounded-2xl bg-[#0A0A0A] border-2 border-[#008E97] flex items-center justify-center shadow-2xl"
            >
              <span className="text-[#6B6B6B] text-lg font-medium">Photo coming soon</span>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">
                About Coach PO
              </span>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Coach. Author. Builder.
              </h1>
              
              <p className="text-[#C8963E] text-xl md:text-2xl font-serif italic">
                Founder of The Forge System™.
              </p>
              
              <p className="text-[#A3A3A3] text-lg leading-relaxed max-w-xl">
                I help driven professionals close the gap between who they are and who they&apos;re capable of becoming — not by giving them better systems, but by helping them become a different kind of person altogether. Based in the United Kingdom. Building globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CREDENTIALS (off-white) */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#F7F4EF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">
              The Work In Numbers
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Stat 1 */}
            <div className="space-y-2">
              <span className="font-serif text-4xl md:text-5xl text-[#0A0A0A]">10+</span>
              <p className="text-[#6B6B6B] text-sm uppercase tracking-wider">Years Coaching</p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2">
              <span className="font-serif text-4xl md:text-5xl text-[#0A0A0A]">5,000+</span>
              <p className="text-[#6B6B6B] text-sm uppercase tracking-wider">Professionals Trained</p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2">
              <span className="font-serif text-4xl md:text-5xl text-[#0A0A0A]">2</span>
              <p className="text-[#6B6B6B] text-sm uppercase tracking-wider">Continents</p>
            </div>

            {/* Stat 4 - UPDATED */}
            <div className="space-y-2">
              <span className="font-serif text-4xl md:text-5xl text-[#0A0A0A]">1</span>
              <p className="text-[#6B6B6B] text-sm uppercase tracking-wider">Book Coming Soon</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#E5E5E5]">
            <p className="text-[#6B6B6B] text-lg">
              Founder, IIC Networks (2016). Creator, The Forge System™. Author, Petty Little Things.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PHILOSOPHY (dark) */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">
              What I Believe
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mt-4 leading-tight">
              The doing follows the being. It always does.
            </h2>
          </div>

          <div className="max-w-3xl mb-16">
            <p className="text-[#A3A3A3] text-lg leading-relaxed mb-6">
              I&apos;ve spent a decade sitting across from people who had every reason to succeed and weren&apos;t. Not because they lacked intelligence or ambition. Because they were still operating as the old version of themselves — running patterns that belonged to who they used to be, not who they were trying to become.
            </p>
            <p className="text-[#A3A3A3] text-lg leading-relaxed mb-6">
              Most coaching fixes the doing. I work on the being.
            </p>
            <p className="text-white text-lg leading-relaxed">
              Three principles sit underneath everything I do:
            </p>
          </div>

          {/* Three Principles - UPDATED COPY */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Principle 01 */}
            <div className="space-y-4">
              <span className="text-[#008E97] text-sm font-medium tracking-widest">01 /</span>
              <h3 className="font-serif text-2xl text-white">Know God.</h3>
              <p className="text-[#A3A3A3] leading-relaxed">
                &quot;Ambition without a divine foundation is just noise with direction. The clearest leaders I know are anchored to something larger than their own appetite. That anchor is what holds when everything else shifts.&quot;
              </p>
            </div>

            {/* Principle 02 */}
            <div className="space-y-4">
              <span className="text-[#008E97] text-sm font-medium tracking-widest">02 /</span>
              <h3 className="font-serif text-2xl text-white">Know yourself.</h3>
              <p className="text-[#A3A3A3] leading-relaxed">
                &quot;Most people know their strengths. The work is knowing what lives in the shadow — the avoidance patterns, the blind spots, the version of you that shows up under pressure. You cannot govern what you haven&apos;t faced.&quot;
              </p>
            </div>

            {/* Principle 03 */}
            <div className="space-y-4">
              <span className="text-[#008E97] text-sm font-medium tracking-widest">03 /</span>
              <h3 className="font-serif text-2xl text-white">Know people.</h3>
              <p className="text-[#A3A3A3] leading-relaxed">
                &quot;Every result you want in life comes through someone. Understand what drives people — their fears, their needs, their unspoken logic — and you stop pushing against resistance and start moving with it.&quot;
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#1A1A1A]">
            <p className="text-[#6B6B6B] text-lg">
              Get those three right and the rest tends to fall into place.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE METHOD (teal-tinted surface) */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#F0FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">
              The Forge System™
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A] mt-4 leading-tight">
              This is what ten years of coaching built.
            </h2>
          </div>

          <div className="max-w-3xl mb-16">
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
              The Forge System™ is an identity-based coaching process. Not a productivity framework. Not a mindset hack. A structured path for becoming the kind of person whose results follow naturally from who they are.
            </p>
            <p className="text-[#0A0A0A] text-lg leading-relaxed">
              Three phases. Twelve weeks. One question answered by the end:
            </p>
            <p className="font-serif text-2xl text-[#008E97] mt-4 italic">
              Who are you now, consistently?
            </p>
          </div>

          {/* Three Phase Cards - REDESIGNED AS HORIZONTAL TIMELINE */}
          <div className="relative">
            {/* Horizontal line - desktop */}
            <div className="hidden lg:block absolute top-[2rem] left-0 right-0 h-px bg-[#008E97]/30" />
            
            {/* Vertical line - mobile */}
            <div className="lg:hidden absolute top-0 bottom-0 left-[1.5rem] w-px bg-[#008E97]/30" />

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative">
              {/* Phase 1 */}
              <div className="relative pl-12 lg:pl-0">
                {/* Timeline dot */}
                <div className="absolute left-0 lg:left-0 top-[1.5rem] lg:top-[1.5rem] w-3 h-3 rounded-full bg-[#008E97] lg:relative lg:mb-8" />
                
                <div className="space-y-3">
                  <span className="text-[#008E97] text-sm font-medium">01</span>
                  <h3 className="font-serif text-3xl text-[#0A0A0A]">STRIP</h3>
                  <p className="text-[#6B6B6B] text-xs uppercase tracking-widest">Weeks 1–3</p>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    Honest diagnosis. What patterns are actually running you?
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative pl-12 lg:pl-0">
                {/* Timeline dot */}
                <div className="absolute left-0 lg:left-0 top-[1.5rem] lg:top-[1.5rem] w-3 h-3 rounded-full bg-[#008E97] lg:relative lg:mb-8" />
                
                <div className="space-y-3">
                  <span className="text-[#008E97] text-sm font-medium">02</span>
                  <h3 className="font-serif text-3xl text-[#0A0A0A]">FORGE</h3>
                  <p className="text-[#6B6B6B] text-xs uppercase tracking-widest">Weeks 4–9</p>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    Identity architecture. Who are you becoming?
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative pl-12 lg:pl-0">
                {/* Timeline dot */}
                <div className="absolute left-0 lg:left-0 top-[1.5rem] lg:top-[1.5rem] w-3 h-3 rounded-full bg-[#008E97] lg:relative lg:mb-8" />
                
                <div className="space-y-3">
                  <span className="text-[#008E97] text-sm font-medium">03</span>
                  <h3 className="font-serif text-3xl text-[#0A0A0A]">LEAD</h3>
                  <p className="text-[#6B6B6B] text-xs uppercase tracking-widest">Weeks 10–12</p>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    Sustained self-leadership. Who are you now, every day?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="/forge-program"
              className="inline-flex items-center gap-2 text-[#008E97] font-medium hover:gap-3 transition-all"
            >
              Apply for The Forge Program →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — ROLE CARDS (dark) */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">
              What I Build
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 — COACH */}
            <div className="group p-8 border border-[#1A1A1A] rounded-xl hover:border-[#008E97] transition-colors duration-300">
              <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">Coach</span>
              <p className="text-[#A3A3A3] mt-4 mb-6">
                Identity-based coaching for professionals and leaders.
              </p>
              <Link
                href="/forge-program"
                className="inline-flex items-center gap-2 text-white text-sm hover:text-[#008E97] transition-colors"
              >
                → The Forge Program
              </Link>
            </div>

            {/* Card 2 — AUTHOR */}
            <div className="group p-8 border border-[#1A1A1A] rounded-xl hover:border-[#008E97] transition-colors duration-300">
              <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">Author</span>
              <p className="text-[#A3A3A3] mt-4 mb-6">
                Petty Little Things — 50 habits quietly ruining your life.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 text-white text-sm hover:text-[#008E97] transition-colors"
              >
                → The Book
              </Link>
            </div>

            {/* Card 3 — SPEAKER */}
            <div className="group p-8 border border-[#1A1A1A] rounded-xl hover:border-[#008E97] transition-colors duration-300">
              <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">Speaker</span>
              <p className="text-[#A3A3A3] mt-4 mb-6">
                Available for corporate workshops and leadership events.
              </p>
              <Link
                href="https://calendly.com/olawolepelumi/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white text-sm hover:text-[#008E97] transition-colors"
              >
                → Book a Call
              </Link>
            </div>

            {/* Card 4 — BUILDER */}
            <div className="group p-8 border border-[#1A1A1A] rounded-xl hover:border-[#008E97] transition-colors duration-300">
              <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">Builder</span>
              <p className="text-[#A3A3A3] mt-4 mb-6">
                Founder of IIC Networks. Creator of OneGoal Pro.
              </p>
              <span className="text-[#6B6B6B] text-sm">
                About IIC Networks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA STRIP (dark - UPDATED) */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#008E97] mb-6">
            Ready to close the gap?
          </h2>
          <p className="text-[#A3A3A3] text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Book a free 30-minute Discovery Call. No pitch. Just an honest conversation.
          </p>
          <Link
            href="https://calendly.com/olawolepelumi/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C8963E] text-[#0A0A0A] px-8 py-4 rounded-lg font-medium hover:bg-[#B0852E] transition-colors"
          >
            Book a Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}