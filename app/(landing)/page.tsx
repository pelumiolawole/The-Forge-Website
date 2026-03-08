import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Proof from "@/components/sections/Proof";
import EntryPoints from "@/components/sections/EntryPoints";
import Testimonials from "@/components/sections/Testimonials";
import BookStrip from "@/components/sections/BookStrip";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Proof />
      <EntryPoints />
      <Testimonials />
      <BookStrip />
    </main>
  );
}
