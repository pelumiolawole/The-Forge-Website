"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { JOBS } from "@/content/jobs";
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from "@/lib/motion";
import { JobCard } from "@/components/jobs/JobCard";
import { JobDetail } from "@/components/jobs/JobDetail";

export function JobsPageClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeJobs = useMemo(() => JOBS.filter((j) => j.active), []);

  const selectedSlug = searchParams.get("role");
  const selectedJob = useMemo(
    () => activeJobs.find((j) => j.slug === selectedSlug) ?? null,
    [activeJobs, selectedSlug]
  );

  const selectRole = useCallback(
    (slug: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("role", slug);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const clearRole = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("role");
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [pathname, router, searchParams]);

  return (
    <section className="bg-white py-16 md:py-24 min-h-[70vh]">
      <div className="max-w-[720px] mx-auto px-6">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <m.p
            className="text-[#008e97] text-xs font-semibold uppercase tracking-[0.18em] mb-3"
            variants={staggerItem}
          >
            Join the Team
          </m.p>
          <m.h1
            className="font-['Fraunces'] font-bold text-[#0f1f20] mb-10 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.01em" }}
            variants={staggerItem}
          >
            Open Roles.
          </m.h1>
        </m.div>

        <AnimatePresence mode="wait">
          {selectedJob ? (
            <m.div
              key={selectedJob.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <JobDetail job={selectedJob} onBack={clearRole} />
            </m.div>
          ) : activeJobs.length > 0 ? (
            <m.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <m.ul
                className="divide-y divide-[#d0e8ea]"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
              >
                {activeJobs.map((job) => (
                  <JobCard key={job.slug} job={job} onSelect={() => selectRole(job.slug)} />
                ))}
              </m.ul>
            </m.div>
          ) : (
            <m.p key="empty" className="text-[#7a9ea1] text-base py-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              No open roles right now — check back soon.
            </m.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
