import type { Metadata } from "next";
import { H2PageClient } from "@/components/h2/H2PageClient";

export const metadata: Metadata = {
  title: "Personal Mastery H2 Blueprint | Pelumi Olawole",
  description:
    "A free identity audit workbook for the second half of your year. 40 pages. 5 domains. One honest reckoning.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function H2Page() {
  return <H2PageClient />;
}
