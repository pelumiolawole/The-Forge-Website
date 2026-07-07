import type { Metadata } from "next";
import { HookHero } from "@/components/book/HookHero";
import { BannerCarousel } from "@/components/book/BannerCarousel";
import { RetailerLinks } from "@/components/book/RetailerLinks";
import { NigeriaOrder } from "@/components/book/NigeriaOrder";
import { ForewoodStory } from "@/components/book/ForewoodStory";
import { BookReveal } from "@/components/book/BookReveal";
import { HabitQuiz } from "@/components/book/HabitQuiz";
import { TableOfContents } from "@/components/book/TableOfContents";
import { MethodPreview } from "@/components/book/MethodPreview";
import { SampleChapterReader } from "@/components/book/SampleChapterReader";
import { SocialProof } from "@/components/book/SocialProof";
import { BulkOrders } from "@/components/book/BulkOrders";
import { FinalCTA } from "@/components/book/FinalCTA";

const description =
  "50 habits quietly ruining your life — and how to fix them. Order now on Kindle, Paperback, Apple Books, Barnes & Noble, and Google Play Books.";

export const metadata: Metadata = {
  title: "Petty Little Things — 50 Habits Quietly Ruining Your Life",
  description,
  openGraph: {
    title: "Petty Little Things by Pelumi Olawole",
    description,
    type: "book",
    images: [
      {
        url: "/images/book/plt-og.png",
        width: 1200,
        height: 630,
        alt: "Petty Little Things — 50 Habits Quietly Ruining Your Life, by Pelumi Olawole",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petty Little Things by Pelumi Olawole",
    description,
    images: ["/images/book/plt-og.png"],
  },
};

const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Petty Little Things",
  alternateName: "Petty Little Things — 50 Habits Quietly Ruining Your Life",
  author: {
    "@type": "Person",
    name: "Pelumi Olawole",
    sameAs: "https://www.linkedin.com/in/pelumiolawole/",
  },
  isbn: "9798182503242",
  datePublished: "2026-07-01",
  bookFormat: "https://schema.org/Paperback",
  inLanguage: "en",
  image: "https://pelumiolawole.com/images/book-cover.png",
  url: "https://pelumiolawole.com/book",
  offers: {
    "@type": "Offer",
    url: "https://www.amazon.co.uk/dp/B0H4SH4C43",
    availability: "https://schema.org/InStock",
  },
};

export default function BookPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      <section id="hook-hero"><HookHero /></section>
      <BannerCarousel />
      <section id="retailer-links"><RetailerLinks /></section>
      <section id="nigeria-order"><NigeriaOrder /></section>
      <section id="foreword-story"><ForewoodStory /></section>
      <section id="book-reveal"><BookReveal /></section>
      <section id="habit-quiz"><HabitQuiz /></section>
      <section id="table-of-contents"><TableOfContents /></section>
      <section id="method-preview"><MethodPreview /></section>
      <section id="sample-reader"><SampleChapterReader /></section>
      <section id="social-proof"><SocialProof /></section>
      <section id="bulk-orders"><BulkOrders /></section>
      <section id="final-cta"><FinalCTA /></section>
    </main>
  );
}
