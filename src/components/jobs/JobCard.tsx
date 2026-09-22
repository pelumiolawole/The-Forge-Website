"use client";

import { m } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { JobPosting } from "@/content/jobs";
import { staggerItem } from "@/lib/motion";

export function JobCard({ job, onSelect }: { job: JobPosting; onSelect: () => void }) {
  return (
    <m.li variants={staggerItem}>
      <button
        type="button"
        onClick={onSelect}
        className="w-full text-left flex items-center gap-4 py-6 group"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
            <h2 className="font-['Fraunces'] font-bold text-[#0f1f20] text-lg md:text-xl group-hover:text-[#008e97] transition-colors">
              {job.title}
            </h2>
            {job.status === "closed" && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#e6f6f7] border border-[#d0e8ea] text-[#7a9ea1] text-[10px] font-semibold uppercase tracking-[0.18em]">
                Closed
              </span>
            )}
          </div>
          <p className="text-[#3d5a5c] text-sm md:text-base leading-relaxed mb-3">
            {job.oneLiner}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {job.glance.map((g) => (
              <span key={g.label} className="text-[#7a9ea1] text-xs font-medium">
                <span className="text-[#008e97] font-semibold">{g.label}:</span> {g.value}
              </span>
            ))}
          </div>
        </div>
        <ChevronRight
          size={20}
          className="shrink-0 text-[#b3dde0] group-hover:text-[#008e97] group-hover:translate-x-0.5 transition-all"
        />
      </button>
    </m.li>
  );
}
