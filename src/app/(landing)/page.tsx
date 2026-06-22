import { Hero } from "@/components/landing/genesis/Hero";
import { SocialProof } from "@/components/landing/worked-with/SocialProof";
import { TestimonialsMarquee } from "@/components/landing/testimonials/TestimonialsMarquee";
import { PodcastSection } from "@/components/landing/podcast/PodcastSection";
import { AboutPreview } from "@/components/landing/genesis/AboutPreview";
import { BookPreview } from "@/components/landing/genesis/BookPreview";
import FindYourPath from "@/components/landing/FindYourPath";
import { EmailCapture } from "@/components/ui/EmailCapture";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <AboutPreview />
      <BookPreview />
      <TestimonialsMarquee />
      <FindYourPath />
      <PodcastSection />

      {/* NEWSLETTER STRIP */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#0f1f20]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#008e97] mb-4">The List</p>
          <h2 className="font-['Fraunces'] text-3xl md:text-4xl text-white font-bold mb-4 leading-tight">
            Ideas that move people.<br className="hidden md:block" /> Delivered when they're ready.
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
            Essays, frameworks, and the thinking behind The Forge System. No noise.
          </p>
          <EmailCapture
            list="newsletter"
            placeholder="your@email.com"
            cta="Join the List"
            successMessage="You're in. Check your inbox."
            note="No spam. Unsubscribe anytime."
            theme="dark"
            className="max-w-md mx-auto"
          />
        </div>
      </section>
    </>
  );
}
