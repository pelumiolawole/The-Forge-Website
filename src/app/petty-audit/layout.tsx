import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Petty Audit",
  description:
    "Find out which 3 habits are quietly costing you the most. 25 questions. 5 identity domains. One honest result.",
};

export default function PettyAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
