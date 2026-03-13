"use client";

import React from "react";

const brands = [
  { abbr: "S3", name: "Seven30 Real Estate" },
  { abbr: "EA", name: "Eyitayo Agri Hub" },
  { abbr: "ED", name: "Eden Designs" },
  { abbr: "AP", name: "Aphrodite" },
  { abbr: "II", name: "IIC Networks" },
  { abbr: "ZC", name: "Zoe Choosers Foundation" },
  { abbr: "AF", name: "Dear Auntie Funmi" },
  { abbr: "SC", name: "Suprano Clothing" },
  { abbr: "NG", name: "Northgate Group" },
  { abbr: "VY", name: "Vantage & York" },
  { abbr: "TC", name: "Trellis Capital" },
  { abbr: "GF", name: "Greyfield & Co" },
  { abbr: "SH", name: "Stonehaven" },
  { abbr: "EC", name: "Edgecore" },
];

const duplicated = [...brands, ...brands, ...brands];

export function SocialProof() {
  return (
    <section className="py-10 md:py-14 bg-[#0A0A0A] border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-6 md:mb-8">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#9CA3AF]">
          Trusted by teams at
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {duplicated.map((brand, idx) => (
            <div
              key={`${brand.abbr}-${idx}`}
              className="flex-shrink-0 flex items-center gap-3 mx-8 md:mx-12 text-white/40 hover:text-white/70 transition-colors duration-300"
              style={{ minWidth: "max-content" }}
            >
              <span className="w-8 h-8 rounded bg-white/8 flex items-center justify-center text-xs font-bold text-white/50 flex-shrink-0">
                {brand.abbr}
              </span>
              <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
