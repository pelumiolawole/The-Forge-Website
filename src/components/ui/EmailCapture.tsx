"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";

type List = "newsletter" | "waitlist" | "book";

interface Props {
  list?: List;
  placeholder?: string;
  cta?: string;
  successMessage?: string;
  note?: string;
  className?: string;
  theme?: "light" | "dark";
}

export function EmailCapture({
  list = "newsletter",
  placeholder = "your@email.com",
  cta = "Join the List",
  successMessage = "You're in. Check your inbox.",
  note = "No spam. Unsubscribe anytime.",
  className,
  theme = "light",
}: Props) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const reduce = useReducedMotion();

  const isDark = theme === "dark";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || state === "loading") return;
    setState("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, list }),
      });

      if (!res.ok) throw new Error("Failed");
      setState("success");
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 4000);
    }
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <m.div
            key="success"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-[#008e97] flex items-center justify-center flex-shrink-0">
              <Check size={16} className="text-white" />
            </div>
            <p className={`text-sm font-medium ${isDark ? "text-white" : "text-[#0f1f20]"}`}>
              {successMessage}
            </p>
          </m.div>
        ) : (
          <m.form
            key="form"
            onSubmit={handleSubmit}
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              required
              aria-label="Email address"
              className={`flex-1 px-4 py-3 rounded-lg text-sm border focus:outline-none focus:ring-2 transition-colors ${
                isDark
                  ? "bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white/60 focus:ring-white/20"
                  : "bg-white border-[#d0e8ea] text-[#0f1f20] placeholder:text-[#b3dde0] focus:border-[#008e97] focus:ring-[#008e97]/20"
              }`}
            />
            <button
              type="submit"
              disabled={state === "loading"}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
                isDark
                  ? "bg-white text-[#008e97] hover:bg-[#e6f6f7]"
                  : "bg-[#008e97] text-white hover:bg-[#006e75]"
              }`}
            >
              {state === "loading" ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>
                  {cta}
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </m.form>
        )}
      </AnimatePresence>

      {state === "error" && (
        <p className="text-red-600 text-xs mt-2">Something went wrong. Please try again.</p>
      )}

      {state !== "success" && note && (
        <p className={`text-xs mt-3 ${isDark ? "text-white/40" : "text-[#b3dde0]"}`}>{note}</p>
      )}
    </div>
  );
}
