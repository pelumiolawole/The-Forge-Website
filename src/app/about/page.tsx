"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">

      {/* SECTION 1 — HERO */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-28 pb-16 md:pt-36 md:pb-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 max-w-sm mx-auto lg:max-w-none w-full"
            >
              <Image
                src="/images/pelumi-headshot-2.png"
                alt="Coach PO — Pelumi Olawole"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5 order-1 lg:order-2"
            >
              <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">
                About Coach PO
              </span>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
                Coach. Author. Builder.
              </h1>
              <p className="text-[#C8963E] text-lg md:text-2xl font-serif italic">
                Founder of The Forge System.
              </p>
              <p className="text-[#A3A3A3] text-base md:text-lg leading-relaxed max-w-xl">
                I help driven professionals close the gap between who they are and who they are capable of becoming. Not by giving them better systems, but by helping them become a different kind of person altogether. Based in the United Kingdom. Building globally.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — CREDENTIALS */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#F7F4EF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">
              The Work In Numbers
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {[
              { num: "10+", label: "Years Coaching" },
              { num: "5,000+", label: "Professionals Trained" },
              { num: "2", label: "Continents" },
              { num: "1", label: "Book Coming Soon" },
            ].map((s) => (
              <div key={s.label} className="space-y-2">
                <span className="font-serif text-3xl md:text-5xl text-[#0A0A0A]">{s.num}</span>
                <p className="text-[#6B6B6B] text-xs md:text-sm uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-[#E5E5E5]">
            <p className="text-[#6B6B6B] text-base md:text-lg">
              Founder, IIC Networks (2016). Creator, The Forge System. Author, Petty Little Things.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE STORY */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">
              The Story
            </span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white mt-4 leading-tight">
              I did not stumble into this work.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6 text-[#A3A3A3] text-base md:text-lg leading-relaxed">
              <p>
                I started coaching in 2016, not because I had everything figured out, but because I kept meeting people who had every credential, every advantage, and still could not make sense of why they were stuck. That gap troubled me enough to do something about it.
              </p>
              <p>
                I founded IIC Networks that year with a simple conviction: influence, impact, and change are not things that happen to people. They are the result of becoming a particular kind of person. Over the next several years I trained over 5,000 professionals across Nigeria and the UK in personal development, leadership, and what it actually takes to operate at a higher level.
              </p>
              <p>
                In 2023 I relocated to the United Kingdom. I work full-time while building The Forge System, which is not a side project. It is the thing I have been building towards for ten years, piece by piece, client by client, insight by insight.
              </p>
            </div>
            <div className="space-y-6 text-[#A3A3A3] text-base md:text-lg leading-relaxed">
              <p>
                The Forge System came out of a pattern I kept seeing. My clients were not failing for lack of information. They were failing because their identity had not caught up with their ambition. They were trying to execute at a new level while still operating from an old self-concept. Strategy kept bouncing off identity.
              </p>
              <p>
                So I built a process that goes after the root. Strip the old patterns. Forge a clearer identity. Then lead from that place, consistently, under pressure, in the real world.
              </p>
              <p className="text-white">
                That is what the work is. That is what it has always been trying to be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PHILOSOPHY */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#F7F4EF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">
              What I Believe
            </span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#0A0A0A] mt-4 leading-tight">
              The doing follows the being. It always does.
            </h2>
          </div>

          <div className="max-w-3xl mb-12">
            <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-6">
              I have spent a decade sitting across from people who had every reason to succeed and were not moving. Not because they lacked intelligence or ambition. Because they were still operating as the old version of themselves, running patterns that belonged to who they used to be, not who they were trying to become.
            </p>
            <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-6">
              Most coaching fixes the doing. I work on the being.
            </p>
            <p className="text-[#0A0A0A] text-base md:text-lg leading-relaxed font-medium">
              Three principles sit underneath everything I do:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                num: "01 /",
                title: "Know God.",
                body: "Ambition without a divine foundation is just noise with direction. The clearest leaders I know are anchored to something larger than their own appetite. That anchor is what holds when everything else shifts.",
              },
              {
                num: "02 /",
                title: "Know yourself.",
                body: "Most people know their strengths. The work is knowing what lives in the shadow: the avoidance patterns, the blind spots, the version of you that shows up under pressure. You cannot govern what you have not faced.",
              },
              {
                num: "03 /",
                title: "Know people.",
                body: "Every result you want in life comes through someone. Understand what drives people, their fears, their needs, their unspoken logic, and you stop pushing against resistance and start moving with it.",
              },
            ].map((p) => (
              <div key={p.num} className="space-y-4">
                <span className="text-[#008E97] text-sm font-medium tracking-widest">{p.num}</span>
                <h3 className="font-serif text-xl md:text-2xl text-[#0A0A0A]">{p.title}</h3>
                <p className="text-[#6B6B6B] leading-relaxed text-sm md:text-base">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-[#E5E5E5]">
            <p className="text-[#6B6B6B] text-base md:text-lg">
              Get those three right and the rest tends to fall into place.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE METHOD */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#F0FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">
              The Forge System
            </span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#0A0A0A] mt-4 leading-tight">
              This is what ten years of coaching built.
            </h2>
          </div>

          <div className="max-w-3xl mb-12">
            <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-6">
              The Forge System is an identity-based coaching process. Not a productivity framework. Not a mindset hack. A structured path for becoming the kind of person whose results follow naturally from who they are.
            </p>
            <p className="text-[#0A0A0A] text-base md:text-lg leading-relaxed">
              Three phases. Twelve weeks. One question answered by the end:
            </p>
            <p className="font-serif text-xl md:text-2xl text-[#008E97] mt-4 italic">
              Who are you now, consistently?
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[2rem] left-0 right-0 h-px bg-[#008E97]/30" />
            <div className="lg:hidden absolute top-0 bottom-0 left-[1.5rem] w-px bg-[#008E97]/30" />
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 relative">
              {[
                { num: "01", name: "STRIP", weeks: "Weeks 1 to 3", desc: "Honest diagnosis. What patterns are actually running you?" },
                { num: "02", name: "FORGE", weeks: "Weeks 4 to 9", desc: "Identity architecture. Who are you becoming?" },
                { num: "03", name: "LEAD", weeks: "Weeks 10 to 12", desc: "Sustained self-leadership. Who are you now, every day?" },
              ].map((item) => (
                <div key={item.num} className="relative pl-12 lg:pl-0">
                  <div className="absolute left-0 top-[1.5rem] lg:top-[1.5rem] w-3 h-3 rounded-full bg-[#008E97] lg:relative lg:mb-8" />
                  <div className="space-y-3">
                    <span className="text-[#008E97] text-sm font-medium">{item.num}</span>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#0A0A0A]">{item.name}</h3>
                    <p className="text-[#6B6B6B] text-xs uppercase tracking-widest">{item.weeks}</p>
                    <p className="text-[#6B6B6B] leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link href="/forge-program" className="inline-flex items-center gap-2 text-[#008E97] font-medium hover:gap-3 transition-all text-sm md:text-base">
              Apply for The Forge Program
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — ROLE CARDS */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">What I Build</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              { role: "Coach", desc: "Identity-based coaching for professionals and leaders.", href: "/forge-program", cta: "The Forge Program" },
              { role: "Author", desc: "Petty Little Things. 50 habits quietly ruining your life.", href: "/book", cta: "The Book" },
            ].map((c) => (
              <div key={c.role} className="group p-6 md:p-8 border border-[#1A1A1A] rounded-xl hover:border-[#008E97] transition-colors duration-300">
                <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">{c.role}</span>
                <p className="text-[#A3A3A3] mt-3 mb-5 text-sm md:text-base">{c.desc}</p>
                <Link href={c.href} className="inline-flex items-center gap-2 text-white text-sm hover:text-[#008E97] transition-colors">{c.cta}</Link>
              </div>
            ))}
            <div className="group p-6 md:p-8 border border-[#1A1A1A] rounded-xl hover:border-[#008E97] transition-colors duration-300">
              <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">Speaker</span>
              <p className="text-[#A3A3A3] mt-3 mb-5 text-sm md:text-base">Available for corporate workshops and leadership events.</p>
              <Link href="https://calendly.com/olawolepelumisunday/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white text-sm hover:text-[#008E97] transition-colors">Book a Call</Link>
            </div>
            <div className="group p-6 md:p-8 border border-[#1A1A1A] rounded-xl hover:border-[#008E97] transition-colors duration-300">
              <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">Builder</span>
              <p className="text-[#A3A3A3] mt-3 mb-5 text-sm md:text-base">Founder of IIC Networks. Creator of OneGoal Pro.</p>
              <span className="text-[#6B6B6B] text-sm">IIC Networks</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#008E97] mb-6">
            Ready to close the gap?
          </h2>
          <p className="text-[#A3A3A3] text-base md:text-xl mb-8 max-w-2xl mx-auto">
            Book a free 30-minute Discovery Call. No pitch. Just an honest conversation.
          </p>
          <Link
            href="https://calendly.com/olawolepelumisunday/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>

    </main>
  );
}
