"use client";

import { useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { fadeIn, VIEWPORT_ONCE } from "@/lib/motion";
import { CLIENTS, type Client } from "@/content/clients";
import { CredentialBand } from "./CredentialBand";

function ClientBadge({ client }: { client: Client }) {
  return (
    <div className="flex items-center justify-center h-16 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
      <div className="flex items-center gap-3 text-[#0f1f20]">
        <div className="w-10 h-10 rounded-lg bg-[#e6f6f7] border border-[#d0e8ea] flex items-center justify-center font-bold text-sm flex-shrink-0 text-[#008e97]">
          {client.initials}
        </div>
        <span className="font-semibold text-sm whitespace-nowrap text-[#3d5a5c]">{client.name}</span>
      </div>
    </div>
  );
}

export function SocialProof() {
  const [isPaused, setIsPaused] = useState(false);
  const reduce = useReducedMotion();

  // Only substantiated engagements render as logos. Until at least one
  // entry in content/clients.ts is verified, the credential band carries
  // this slot instead.
  const verified = CLIENTS.filter((client) => client.verified);
  if (verified.length === 0) return <CredentialBand />;

  if (reduce) {
    return (
      <section className="relative z-0 py-16 bg-[#f4fafb] border-y border-[#d0e8ea]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-8">
          <p className="section-label text-center">Trusted by teams at</p>
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {verified.map((client) => (
            <ClientBadge key={client.name} client={client} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-0 py-16 bg-[#f4fafb] border-y border-[#d0e8ea]">
      <m.div
        className="max-w-6xl mx-auto px-6 lg:px-8 mb-8"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
      >
        <p className="section-label text-center">Trusted by teams at</p>
      </m.div>

      <div
        className="marquee-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-12 ${isPaused ? "" : "animate-marquee-left"}`}
          style={{ width: "max-content" }}
        >
          {[...verified, ...verified].map((client, index) => (
            <ClientBadge key={index} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
