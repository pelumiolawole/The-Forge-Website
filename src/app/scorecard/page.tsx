import type { Metadata } from "next";
import { ScorecardClient } from "@/components/scorecard/ScorecardClient";

export const metadata: Metadata = {
  title: "Petty Habit Scorecard | Pelumi Olawole",
  description:
    "10 questions. 5 domains. One honest result. Discover which petty habits are quietly costing you the most — and the identity shift that fixes them.",
  openGraph: {
    title: "Petty Habit Scorecard | Pelumi Olawole",
    description:
      "Take the 2-minute Petty Habit Scorecard and uncover which 10 habits are quietly running your life.",
  },
};

export default function ScorecardPage() {
  return (
    <main className="bg-white text-[#0f1f20] min-h-screen">
      <ScorecardClient />
    </main>
  );
}
