"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { m } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, lineReveal, VIEWPORT_ONCE } from "@/lib/motion";

export function AboutPreview() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#f4fafb] relative overflow-hidden">
      {/* Subtle teal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e6f6f7] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image side */}
          <m.div
            className="relative order-2 lg:order-1"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden max-w-sm mx-auto lg:max-w-none shadow-[0_8px_40px_rgba(0,142,151,0.1)]">
              <Image
                src="/images/pelumi-headshot-1.png"
                alt="Pelumi Olawole — Coach PO"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-48 h-48 border border-[#d0e8ea] rounded-2xl -z-10" />
            <div className="hidden lg:block absolute -top-6 -left-6 w-24 h-24 bg-[#e6f6f7] rounded-full blur-2xl" />
          </m.div>

          {/* Content side */}
          <m.div
            className="order-1 lg:order-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <m.div className="section-label mb-4" variants={staggerItem}>About</m.div>
            <m.h2 className="headline-lg mb-4" variants={staggerItem}>
              I spent a decade watching capable people fail.
            </m.h2>
            <m.div variants={lineReveal}>
              <div className="w-12 h-[2px] bg-[#008e97] mb-4" />
            </m.div>
            <m.h3 className="text-xl md:text-3xl font-['Fraunces'] text-[#008e97] mb-6 italic" variants={staggerItem}>
              Not for lack of trying.
            </m.h3>

            <m.div className="space-y-4 text-[#3d5a5c] text-base md:text-lg leading-relaxed" variants={staggerItem}>
              <p>
                Not for lack of information. They failed because they were still
                the old version of themselves, running patterns that belonged to
                who they used to be.
              </p>
              <p>
                I&apos;m Pelumi Olawole. I founded IIC Networks in 2016 and have
                trained thousands of professionals and leaders across West Africa
                and the UK. The work has never been about skills or strategies.
                It&apos;s always been about identity.
              </p>
              <p className="text-[#008e97] font-semibold">
                That work is now The Forge System.
              </p>
            </m.div>

            <m.div className="mt-8 flex flex-col sm:flex-row gap-4" variants={fadeUp}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#0f1f20] font-medium hover:text-[#008e97] transition-colors text-sm"
              >
                Read my full story
                <ArrowUpRight size={16} />
              </Link>
              <a
                href="https://www.linkedin.com/in/pelumiolawole/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#008e97] hover:text-[#006e75] transition-colors font-medium text-sm"
              >
                Connect on LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </m.div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
