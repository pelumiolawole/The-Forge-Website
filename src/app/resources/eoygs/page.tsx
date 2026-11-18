import type { Metadata } from "next";
import { ResourcePageClient } from "@/components/resources/ResourcePageClient";
import { EOYGS_RESOURCE } from "@/content/resourcePages";

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Pelumi Olawole" title
  // template — the exact requested title already ends in that suffix.
  title: { absolute: EOYGS_RESOURCE.metaTitle },
  description: EOYGS_RESOURCE.metaDescription,
  robots: {
    index: false,
    follow: false,
  },
};

export default function EoygsPage() {
  return <ResourcePageClient config={EOYGS_RESOURCE} />;
}
