"use client";

import { useState } from "react";

// Placeholder logos - will be replaced with actual client logos
const clients = [
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

export function SocialProof() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative z-0 py-16 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-8">
        <p className="section-label text-center">Trusted by teams at</p>
      </div>

      <div 
        className="marquee-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className={`flex gap-12 ${isPaused ? '' : 'animate-marquee-left'}`}
          style={{ width: "max-content" }}
        >
          {/* Double the items for seamless loop */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-40 h-16 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            >
              {/* Placeholder logo - replace with actual SVG logos */}
              <div className="flex items-center gap-3 text-white/60">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-bold text-sm">
                  {client.initials}
                </div>
                <span className="font-semibold text-lg">{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}