import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founder of IIC Networks (2016). 5,000+ professionals trained across the UK and West Africa. Creator of The Forge System and the Identity-First Leadership approach.",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pelumi Olawole",
  jobTitle: "Founder, The Forge System",
  url: "https://pelumiolawole.com/about",
  sameAs: ["https://www.linkedin.com/in/pelumiolawole/"],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <AboutClient />
    </>
  );
}
