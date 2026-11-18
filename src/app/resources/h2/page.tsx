import type { Metadata } from "next";
import { ResourcePageClient } from "@/components/resources/ResourcePageClient";
import { H2_RESOURCE } from "@/content/resourcePages";

export const metadata: Metadata = {
  title: H2_RESOURCE.metaTitle,
  description: H2_RESOURCE.metaDescription,
  robots: {
    index: false,
    follow: false,
  },
};

export default function H2Page() {
  return <ResourcePageClient config={H2_RESOURCE} />;
}
