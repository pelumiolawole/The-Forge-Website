"use client";

import { useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function FinalCTA() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senderGroupId: "e7yoL1" }),
      });
    } catch {
      // fail silently
    }
    setSuccess(true);
    setSubmitting(false);
  }

  return (
    <section className="bg-[#008e97] py-24 md:py-32">
      <div className="max-w-[640px] mx-auto px-6 text-center">
        <m.div
          variants={staggerContainer}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <m.h2
            className="text-white font-extrabold leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            variants={staggerItem}
          >
            The habits are already running your life.
          </m.h2>

          <m.p
            className="mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", lineHeight: 1.7 }}
            variants={staggerItem}
          >
            The only question is whether they&rsquo;re running it for you or against you.
          </m.p>

          <m.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" variants={staggerItem}>
            <a
              href="https://www.amazon.co.uk/dp/B0H4J1NYBY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#008e97] font-bold rounded-lg hover:bg-white/90 transition-colors text-sm"
            >
              Kindle Edition &mdash; Order on Amazon
              <ArrowRight size={16} />
            </a>
          </m.div>

          <m.div variants={staggerItem}>
            {!success ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-white font-medium placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all text-sm"
                  style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-3 bg-white text-[#008e97] font-bold rounded-lg hover:bg-white/90 transition-colors text-sm disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {submitting ? <Loader2 size={15} className="animate-spin" /> : null}
                  Notify Me
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-white font-medium">
                <Check size={16} />
                You&rsquo;re on the list.
              </div>
            )}
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
