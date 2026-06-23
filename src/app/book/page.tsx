import { HookHero } from "@/components/book/HookHero";
import { BannerCarousel } from "@/components/book/BannerCarousel";
import { ForewoodStory } from "@/components/book/ForewoodStory";
import { BookReveal } from "@/components/book/BookReveal";
import { HabitQuiz } from "@/components/book/HabitQuiz";
import { TableOfContents } from "@/components/book/TableOfContents";
import { MethodPreview } from "@/components/book/MethodPreview";
import { SampleChapterReader } from "@/components/book/SampleChapterReader";
import { SocialProof } from "@/components/book/SocialProof";
import { FinalCTA } from "@/components/book/FinalCTA";

export default function BookPage() {
  return (
    <main>
      <section id="hook-hero"><HookHero /></section>
      <BannerCarousel />
      <section id="foreword-story"><ForewoodStory /></section>
      <section id="book-reveal"><BookReveal /></section>
      <section id="habit-quiz"><HabitQuiz /></section>
      <section id="table-of-contents"><TableOfContents /></section>
      <section id="method-preview"><MethodPreview /></section>
      <section id="sample-reader"><SampleChapterReader /></section>
      <section id="social-proof"><SocialProof /></section>
      <section id="final-cta"><FinalCTA /></section>
    </main>
  );
}
