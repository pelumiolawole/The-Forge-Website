"use client";

import React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp, VIEWPORT_ONCE } from "@/lib/motion";

const CALENDLY_URL = "https://calendly.com/olawolepelumisunday/30min";

interface PathCard {
  label: string;
  title: string;
  body: string;
  buttonText: string;
  href: string;
  variant: "free" | "featured" | "booking";
}

const paths: PathCard[] = [
  {
    label: "FREE",
    title: "The Petty Audit",
    body: "Not sure where to start? Take the free 25-question diagnostic. Find out exactly which patterns are holding you back and what to do about them.",
    buttonText: "Take the Audit",
    href: "/petty-audit",
    variant: "free",
  },
  {
    label: "12 WEEKS",
    title: "The Forge Program",
    body: "The flagship coaching experience. Identity-based. Structured. Built for professionals who are done explaining why they haven't changed yet.",
    buttonText: "Apply Now",
    href: "/forge-program",
    variant: "featured",
  },
  {
    label: "30 MINUTES",
    title: "Book a Discovery Call",
    body: "Already know you're ready? Book a free 30-minute call and let's talk about what The Forge System looks like for you specifically.",
    buttonText: "Book a Call",
    href: CALENDLY_URL,
    variant: "booking",
  },
];

export default function FindYourPath() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <m.div
          className="text-center mb-12 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <m.span className="section-label block mb-4" variants={staggerItem}>
            What&apos;s Your Next Step
          </m.span>
          <m.h2 className="headline-lg" variants={staggerItem}>
            Find Your Path
          </m.h2>
        </m.div>

        {/* Cards Grid */}
        <m.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {paths.map((path) => (
            <m.div key={path.title} variants={staggerItem}>
              <Link
                href={path.href}
                className={`
                  group relative flex flex-col rounded-2xl p-6 md:p-8 lg:p-10 h-full
                  transition-all duration-300 ease-out cursor-pointer
                  hover:-translate-y-1
                  ${path.variant === "featured"
                    ? "bg-white border-2 border-[#008e97] md:scale-105 hover:shadow-[0_8px_32px_rgba(0,142,151,0.15)]"
                    : "bg-[#f4fafb] border border-[#d0e8ea] hover:border-[#008e97] hover:shadow-[0_4px_16px_rgba(0,142,151,0.08)]"
                  }
                `}
              >
                {/* Label */}
                <span className="inline-block self-start text-xs font-semibold tracking-[0.15em] uppercase mb-5 px-3 py-1 rounded-full bg-[#008e97]/10 text-[#008e97]">
                  {path.label}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0f1f20] mb-3 tracking-tight font-['Fraunces']">
                  {path.title}
                </h3>

                {/* Body */}
                <p className="text-[#3d5a5c] text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  {path.body}
                </p>

                {/* Button */}
                <div className="mt-auto">
                  <span
                    className={`
                      inline-flex items-center justify-center w-full px-6 py-3 md:py-4 rounded-lg font-semibold text-sm tracking-wide
                      transition-all duration-300 ease-out
                      ${path.variant === "featured"
                        ? "bg-[#008e97] text-white group-hover:bg-[#006e75]"
                        : path.variant === "free"
                        ? "bg-[#008e97] text-white group-hover:bg-[#006e75]"
                        : "bg-transparent border-2 border-[#008e97] text-[#008e97] group-hover:bg-[#008e97] group-hover:text-white"
                      }
                    `}
                  >
                    {path.buttonText}
                  </span>
                </div>
              </Link>
            </m.div>
          ))}
        </m.div>

      </div>
    </section>
  );
}
