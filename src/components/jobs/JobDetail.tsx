"use client";

import { m } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";
import type { JobPosting } from "@/content/jobs";
import { fadeUp } from "@/lib/motion";

function buildMailtoHref(job: JobPosting): string {
  const recipients = job.applyEmail.to.join(",");
  const subject = encodeURIComponent(job.applyEmail.subjectTemplate);
  const body = encodeURIComponent(job.applyEmail.bodyTemplate.replace(/\n/g, "\r\n"));
  return `mailto:${recipients}?subject=${subject}&body=${body}`;
}

export function JobDetail({ job, onBack }: { job: JobPosting; onBack: () => void }) {
  return (
    <m.div variants={fadeUp} initial="hidden" animate="visible">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-[#008e97] text-sm font-medium hover:gap-3 transition-all mb-8"
      >
        <ArrowLeft size={16} />
        All roles
      </button>

      {job.status === "closed" && (
        <div className="mb-8 p-5 rounded-xl bg-[#e6f6f7] border border-[#d0e8ea]">
          <p className="text-[#006e75] text-sm font-bold uppercase tracking-[0.1em]">
            Applications Closed
          </p>
          <p className="text-[#7a9ea1] text-sm mt-1.5">
            Thank you for the interest — check back for future openings.
          </p>
        </div>
      )}

      <div>
        <p className="text-[#008e97] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
          Open Role
        </p>
        <h2
          className="font-['Fraunces'] font-bold text-[#0f1f20] mb-4 leading-tight"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-0.01em" }}
        >
          {job.title}
        </h2>
        <p className="text-[#3d5a5c] text-base md:text-lg leading-relaxed mb-8">
          {job.oneLiner}
        </p>

        {/* At a glance */}
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-5 rounded-xl bg-[#f4fafb] border border-[#d0e8ea]">
          {job.glance.map((g) => (
            <div key={g.label}>
              <dt className="text-[#7a9ea1] text-xs font-semibold uppercase tracking-[0.1em] mb-1">
                {g.label}
              </dt>
              <dd className="text-[#0f1f20] text-sm font-semibold">{g.value}</dd>
            </div>
          ))}
        </dl>

        {/* Intro */}
        <div className="space-y-4 text-[#3d5a5c] text-base leading-relaxed mb-10">
          {job.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Responsibilities */}
        <div className="mb-10">
          <h3 className="font-['Fraunces'] font-bold text-[#0f1f20] text-xl mb-5">
            What you&apos;ll do
          </h3>
          <div className="space-y-6">
            {job.responsibilities.map((r) => (
              <div key={r.group}>
                <h4 className="text-[#008e97] text-sm font-semibold uppercase tracking-[0.1em] mb-3">
                  {r.group}
                </h4>
                <ul className="space-y-2">
                  {r.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[#3d5a5c] text-base leading-relaxed">
                      <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#008e97]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How we work */}
        <div className="mb-10">
          <h3 className="font-['Fraunces'] font-bold text-[#0f1f20] text-xl mb-5">
            How we work
          </h3>
          <ul className="space-y-2">
            {job.howWeWork.map((item, i) => (
              <li key={i} className="flex gap-3 text-[#3d5a5c] text-base leading-relaxed">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#008e97]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Who we're looking for */}
        <div className="mb-10">
          <h3 className="font-['Fraunces'] font-bold text-[#0f1f20] text-xl mb-5">
            Who we&apos;re looking for
          </h3>
          <ul className="space-y-2">
            {job.whoWereLookingFor.map((item, i) => (
              <li key={i} className="flex gap-3 text-[#3d5a5c] text-base leading-relaxed">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#008e97]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Compensation */}
        <div className="mb-10 p-5 rounded-xl bg-[#e6f6f7] border border-[#d0e8ea]">
          <h3 className="text-[#7a9ea1] text-xs font-semibold uppercase tracking-[0.1em] mb-2">
            Compensation
          </h3>
          <p className="text-[#0f1f20] text-base font-medium">{job.compensation}</p>
        </div>

        {/* Apply */}
        <div>
          {job.status === "closed" ? (
            <p className="text-[#7a9ea1] text-sm">
              This role is no longer accepting applications.
            </p>
          ) : (
            <a
              href={buildMailtoHref(job)}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#008e97] text-white font-bold rounded-lg hover:bg-[#006e75] transition-colors text-sm"
            >
              <Mail size={16} />
              Apply for this Role
            </a>
          )}
        </div>
      </div>
    </m.div>
  );
}
