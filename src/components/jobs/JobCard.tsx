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
          <h2 className="font-['Fraunces'] font-bold text-[#0f1f20] text-lg md:text-xl mb-1.5 group-hover:text-[#008e97] transition-colors">
            {job.title}
          </h2>
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
