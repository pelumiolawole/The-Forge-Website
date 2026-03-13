"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#008E97]/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image side — stacks below content on mobile */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden max-w-sm mx-auto lg:max-w-none">
              <Image
                src="/images/pelumi-headshot-1.png"
                alt="Pelumi Olawole — Coach PO"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element — hidden on mobile to avoid overflow */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-48 h-48 border border-[#C8963E]/30 rounded-2xl -z-10" />
            <div className="hidden lg:block absolute -top-6 -left-6 w-24 h-24 bg-[#008E97]/10 rounded-full blur-2xl" />
          </div>

          {/* Content side — first on mobile */}
          <div className="order-1 lg:order-2">
            <div className="section-label mb-4">About</div>
            <h2 className="headline-lg text-white mb-4">
              I spent a decade watching capable people fail.
            </h2>
            <h3 className="text-xl md:text-3xl font-['Fraunces'] text-[#008E97] mb-6 italic">
              Not for lack of trying.
            </h3>

            <div className="space-y-4 body-text">
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
              <p className="text-[#C8963E] font-semibold">
                That work is now The Forge System.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-[#008E97] transition-colors text-sm"
              >
                Read my full story
                <ArrowUpRight size={16} />
              </Link>
              <a
                href="https://www.linkedin.com/in/pelumiolawole/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#008E97] hover:text-[#C8963E] transition-colors font-medium text-sm"
              >
                Connect on LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
