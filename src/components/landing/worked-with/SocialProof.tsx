"use client";

import React from "react";
import Image from "next/image";

const brands = [
  { name: "Seven30 Real Estate Ltd", logo: "/images/logo-1.png" },
  { name: "Eyitayo Agri Hub", logo: "/images/logo-2.png" },
  { name: "Eden Designs", logo: "/images/logo-3.png" },
  { name: "Aphrodite", logo: "/images/logo-4.png" },
  { name: "IIC Networks", logo: "/images/logo-5.png" },
  { name: "Zoe Choosers Foundation", logo: "/images/logo-6.png" },
  { name: "Young Adult Coach", logo: "/images/logo-7.png" },
  { name: "Suprano Clothing", logo: "/images/logo-8.png" },
];

// Triplicate for seamless infinite scroll
const duplicated = [...brands, ...brands, ...brands];

export function SocialProof() {
  return (
    <section className="py-10 md:py-14 bg-[#0A0A0A] border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-6 md:mb-8">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#6B7280]">
          Trusted by teams at
        </p>
      </div>

      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {duplicated.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center mx-6 md:mx-10"
              style={{ minWidth: "120px" }}
            >
              <div className="relative h-8 md:h-10 w-24 md:w-32 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
