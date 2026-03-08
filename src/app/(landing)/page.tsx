import { Hero } from "@/components/landing/genesis/Hero";
import { SocialProof } from "@/components/landing/worked-with/SocialProof";
import { TestimonialsMarquee } from "@/components/landing/testimonials/TestimonialsMarquee";
import { PodcastSection } from "@/components/landing/podcast/PodcastSection";
import { AboutPreview } from "@/components/landing/genesis/AboutPreview";
import { BookPreview } from "@/components/landing/genesis/BookPreview";
import { Footer } from "@/components/landing/navigation/Footer";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <AboutPreview />
      <BookPreview />
      <TestimonialsMarquee />
      <PodcastSection />
      <Footer />
    </>
  );
}
