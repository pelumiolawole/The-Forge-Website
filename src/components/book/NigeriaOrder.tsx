"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from "@/lib/motion";

export function NigeriaOrder() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#f4fafb] py-16 md:py-20 border-t border-[#d0e8ea]">
      <div className="max-w-[640px] mx-auto px-6">
        <m.div
          variants={staggerContainer}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <m.p
            className="text-[#008e97] text-xs font-semibold uppercase tracking-[0.18em] mb-4"
            variants={staggerItem}
          >
            Nigeria Orders
          </m.p>

          <m.h2
            className="font-['Fraunces'] font-bold text-[#0f1f20] mb-5 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", letterSpacing: "-0.01em" }}
            variants={staggerItem}
          >
            Order Your Physical Copy&nbsp;&mdash; Nigeria
          </m.h2>

          <m.div className="space-y-2 mb-6" variants={staggerItem}>
            <p className="text-[#3d5a5c] text-base leading-relaxed">
              Paperback copies are available for delivery across Nigeria.
            </p>
            <p className="text-[#3d5a5c] text-base leading-relaxed">
              Copies ship mid to end of July 2026.
            </p>
          </m.div>

          {/* Delivery pricing */}
          <m.div
            className="bg-white border border-[#d0e8ea] rounded-xl p-5 mb-6"
            variants={staggerItem}
          >
            <p className="text-[#0f1f20] font-semibold text-sm mb-3">Delivery</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[#3d5a5c] text-sm">Delivery within Lagos</span>
                <span className="text-[#0f1f20] font-semibold text-sm">&#8358;5,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#3d5a5c] text-sm">Delivery outside Lagos</span>
                <span className="text-[#0f1f20] font-semibold text-sm">&#8358;7,500</span>
              </div>
            </div>
            <p className="text-[#7a9ea1] text-xs mt-3">Delivery cost is paid separately after purchase.</p>
          </m.div>

          {/* Disclaimer — above CTA */}
          <m.div
            className="bg-[#e6f6f7] border border-[#b3dde0] rounded-xl p-4 mb-6"
            variants={staggerItem}
          >
            <p className="text-[#3d5a5c] text-sm leading-relaxed">
              Delivery cost is not included in your order. Your location and delivery fee will be
              confirmed via WhatsApp after purchase. Delivery timeline is mid-July to early August 2026.
            </p>
          </m.div>

          {/* Primary CTA */}
          <m.div variants={staggerItem}>
            <a
              href="https://selar.com/84957u1r65"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#008e97] text-white font-semibold rounded-xl hover:bg-[#007a82] transition-colors text-base mb-4"
            >
              Order Now &mdash; &#8358;12,500
              <ExternalLink size={16} />
            </a>
          </m.div>

          {/* Secondary CTA */}
          <m.div className="text-center mb-5" variants={staggerItem}>
            <a
              href="/order-confirmed"
              className="text-[#008e97] text-sm font-medium hover:underline inline-flex items-center gap-1"
            >
              Confirm your delivery details after payment <ArrowRight size={14} />
            </a>
          </m.div>

          {/* Refund line */}
          <m.p className="text-[#7a9ea1] text-xs text-center leading-relaxed" variants={staggerItem}>
            Refunds are available within 48 hours of purchase if your order cannot be fulfilled. Contact{" "}
            <a
              href="mailto:coach@pelumiolawole.com"
              className="underline hover:text-[#008e97] transition-colors"
            >
              coach@pelumiolawole.com
            </a>
          </m.p>
        </m.div>
      </div>
    </section>
  );
}
