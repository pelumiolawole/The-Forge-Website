import type { Metadata } from "next";
import { Suspense } from "react";
import { JOBS } from "@/content/jobs";
import { JobsPageClient } from "@/components/jobs/JobsPageClient";

const description = "Open roles working on The Forge System and Petty Little Things.";

export const metadata: Metadata = {
  title: "Careers",
  description,
  openGraph: {
    title: "Careers | Pelumi Olawole",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Careers | Pelumi Olawole",
    description,
  },
};

const jobPostingsJsonLd = JOBS.filter((j) => j.active).map((job) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: job.title,
  description: job.intro.join(" "),
  datePosted: "2026-09-19",
  employmentType: "PART_TIME",
  hiringOrganization: {
    "@type": "Person",
    name: "Pelumi Olawole",
    sameAs: "https://www.linkedin.com/in/pelumiolawole/",
  },
  jobLocationType: "TELECOMMUTE",
  applicantLocationRequirements: {
    "@type": "Country",
    name: "Nigeria",
  },
  ...(job.status === "closed" && job.closedDate ? { validThrough: job.closedDate } : {}),
}));

export default function JobsPage() {
  return (
    <main>
      {jobPostingsJsonLd.map((jsonLd, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}
      <Suspense fallback={null}>
        <JobsPageClient />
      </Suspense>
    </main>
  );
}
