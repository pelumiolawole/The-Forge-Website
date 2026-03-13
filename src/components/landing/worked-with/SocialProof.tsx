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

const duplicated = [...brands, ...brands, ...brands];

export function SocialProof() {
  return (
    <section className="py-12 md:py-16 bg-[#0A0A0A] border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-8 md:mb-10">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#9CA3AF]">
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
              className="flex-shrink-0 flex items-center justify-center mx-8 md:mx-12"
              style={{ minWidth: "160px" }}
            >
              {/* White backing so dark logos are visible on dark bg */}
              <div
                className="relative flex items-center justify-center rounded-lg px-4 py-2 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", minWidth: "140px", height: "56px" }}
              >
                <div className="relative w-28 h-10">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain brightness-150 opacity-80 hover:opacity-100 hover:brightness-200 transition-all duration-300"
                    sizes="112px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
