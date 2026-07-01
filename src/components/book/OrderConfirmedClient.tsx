"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

export function OrderConfirmedClient() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, list: "newsletter" }),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full px-4 py-3 bg-white border-[1.5px] border-[#d0e8ea] rounded-xl text-[#0f1f20] placeholder:text-[#b3dde0] focus:outline-none focus:border-[#008e97] focus:shadow-[0_0_0_3px_rgba(0,142,151,0.08)] transition-all text-sm";

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-[520px] mx-auto px-6">
        <p className="text-[#008e97] text-xs font-semibold uppercase tracking-[0.18em] mb-6">
          Petty Little Things
        </p>

        <div
          className="w-10 h-[2px] bg-[#008e97] mb-8"
        />

        <h1
          className="font-['Fraunces'] font-bold text-[#0f1f20] mb-5 leading-tight"
          style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", letterSpacing: "-0.02em" }}
        >
          Your order is confirmed. Welcome to the PLT family.
        </h1>

        <p className="text-[#3d5a5c] text-base leading-relaxed mb-3">
          Your copy of Petty Little Things is on its way. Dispatch begins mid-July &mdash; you&rsquo;ll hear from us before then.
        </p>

        <p className="text-[#3d5a5c] text-base leading-relaxed mb-10">
          Want to stay in the loop with Coach PO? Drop your name and email below.
        </p>

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
              className={inputClass}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className={inputClass}
            />

            {error && (
              <p className="text-red-500 text-sm text-center">
                Something went wrong. Please try again or email{" "}
                <a href="mailto:coach@pelumiolawole.com" className="underline">
                  coach@pelumiolawole.com
                </a>{" "}
                directly.
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#008e97] text-white text-base font-semibold hover:bg-[#007a82] disabled:opacity-60 transition-colors"
            >
              {submitting ? (
                <><Loader2 size={18} className="animate-spin" /> Submitting&hellip;</>
              ) : (
                "Yes, keep me updated"
              )}
            </button>

            <p className="text-[#b3dde0] text-xs text-center leading-relaxed">
              No spam. Coaching insights, book updates, and the occasional truth you didn&rsquo;t ask for.
            </p>
          </form>
        ) : (
          <div className="py-10">
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#e6f6f7] flex items-center justify-center">
              <Check className="w-7 h-7 text-[#008e97]" />
            </div>
            <p className="font-['Fraunces'] text-xl font-bold text-[#0f1f20] mb-3 text-center">
              You&rsquo;re on the list, {firstName}.
            </p>
            <p className="text-[#3d5a5c] text-base text-center leading-relaxed">
              Check your inbox &mdash; something&rsquo;s coming.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
