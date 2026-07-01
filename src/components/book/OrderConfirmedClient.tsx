"use client";

import { useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function OrderConfirmedClient() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("/api/nigeria-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
      <div className="max-w-[560px] mx-auto px-6">
        <m.div
          variants={staggerContainer}
          initial={reduce ? "visible" : "hidden"}
          animate="visible"
        >
          <m.p
            className="text-[#008e97] text-xs font-semibold uppercase tracking-[0.18em] mb-4"
            variants={staggerItem}
          >
            Nigeria Orders
          </m.p>

          <m.h1
            className="font-['Fraunces'] font-bold text-[#0f1f20] mb-4 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", letterSpacing: "-0.02em" }}
            variants={staggerItem}
          >
            You&rsquo;re in. Let&rsquo;s get your book to you.
          </m.h1>

          <m.p className="text-[#3d5a5c] text-base leading-relaxed mb-10" variants={staggerItem}>
            Complete your delivery details below so we can confirm your order and get in touch about
            delivery.
          </m.p>

          {!success ? (
            <m.form onSubmit={handleSubmit} className="space-y-4" variants={staggerItem}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className={inputClass}
                />
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className={inputClass}
                />
              </div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className={inputClass}
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className={inputClass}
              />
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Delivery Address (include city and state)"
                required
                rows={4}
                className={`${inputClass} resize-none`}
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
                  <>Confirm My Details <ArrowRight size={18} /></>
                )}
              </button>
            </m.form>
          ) : (
            <m.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#e6f6f7] flex items-center justify-center">
                <Check className="w-8 h-8 text-[#008e97]" />
              </div>
              <h2 className="font-['Fraunces'] text-2xl font-bold text-[#0f1f20] mb-3">
                Thank you, {form.firstName}. Your details are confirmed.
              </h2>
              <p className="text-[#3d5a5c] text-base leading-relaxed">
                Check your email for your order confirmation &mdash; it includes a WhatsApp link
                to finalise your delivery.
              </p>
            </m.div>
          )}
        </m.div>
      </div>
    </main>
  );
}
