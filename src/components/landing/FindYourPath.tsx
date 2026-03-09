"use client";

import Link from "next/link";

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
    title: "The Forge Program™",
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
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#008E97] text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            What&apos;s Your Next Step
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Find Your Path
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {paths.map((path) => (
            <Link
              key={path.title}
              href={path.href}
              className={`
                group relative flex flex-col rounded-2xl p-8 lg:p-10
                transition-all duration-300 ease-out cursor-pointer
                hover:-translate-y-[6px]
                ${path.variant === "featured" 
                  ? "bg-[#0A0A0A] border-2 border-[#C8963E] md:scale-105 hover:shadow-[0_0_24px_rgba(200,150,62,0.25)]" 
                  : "bg-[#111111] border border-[#222222] hover:border-[#008E97]"
                }
              `}
            >
              {/* Label */}
              <span 
                className={`
                  inline-block self-start text-xs font-semibold tracking-[0.15em] uppercase mb-6 px-3 py-1 rounded-full
                  ${path.variant === "featured" 
                    ? "bg-[#C8963E]/10 text-[#C8963E]" 
                    : "bg-[#008E97]/10 text-[#008E97]"
                  }
                `}
              >
                {path.label}
              </span>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
                {path.title}
              </h3>

              {/* Body */}
              <p className="text-[#A0A0A0] text-base leading-relaxed mb-8 flex-grow">
                {path.body}
              </p>

              {/* Button */}
              <div className="mt-auto">
                <span
                  className={`
                    inline-flex items-center justify-center w-full px-6 py-4 rounded-lg font-semibold text-sm tracking-wide
                    transition-all duration-300 ease-out
                    ${path.variant === "featured"
                      ? "bg-[#C8963E] text-[#0A0A0A] group-hover:bg-[#D4A84A]"
                      : path.variant === "free"
                      ? "bg-[#008E97] text-white group-hover:bg-[#00A8B3]"
                      : "bg-transparent border-2 border-[#008E97] text-[#008E97] group-hover:bg-[#008E97] group-hover:text-white"
                    }
                  `}
                >
                  {path.buttonText}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}