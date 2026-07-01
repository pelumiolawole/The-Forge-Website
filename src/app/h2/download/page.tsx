import type { Metadata } from "next";
import { H2DownloadClient } from "@/components/h2/H2DownloadClient";

export const metadata: Metadata = {
  title: "Downloading Your H2 Blueprint | Coach PO",
  robots: { index: false, follow: false },
};

export default function H2DownloadPage() {
  return <H2DownloadClient />;
}
