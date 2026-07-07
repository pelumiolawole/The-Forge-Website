import type { Metadata } from "next";
import { ForgeProgramClient } from "./ForgeProgramClient";

export const metadata: Metadata = {
  title: "The Forge Program",
  description:
    "A 12-week identity reset for professionals stepping into strategic authority. STRIP → FORGE → LEAD.",
};

export default function ForgeProgramPage() {
  return <ForgeProgramClient />;
}
