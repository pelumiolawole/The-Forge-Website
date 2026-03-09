import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coach PO | About",
  description: "Coach, author, and builder. Founder of The Forge System™. Helping driven professionals close the gap between who they are and who they're capable of becoming.",
};

const CALENDLY_URL = "https://calendly.com/olawolepelumi/30min";

// Section Label Component
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#008E97] text-sm font-semibold tracking-[0.2em] uppercase mb-6 block">
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* SECTION 1 — HERO (dark) */}
      <section className="bg-[#0A0A0A] py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[3/4] bg-[#1A1A1A] rounded-2xl flex items-center justify-center border border-[#222222] max-w-md mx-auto lg:mx-0">
                <span className="text-[#666666] text-sm uppercase tracking-wider">{`{headshot placeholder}`}</span>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <SectionLabel>About Coach PO</SectionLabel>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
                Coach. Author. Builder.
              </h1>

              <p className="font-serif text-[#008E97] text-xl md:text-2xl italic mb-8">
                Founder of The Forge System™.
              </p>

              <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I help driven professionals close the gap between who they are and who they&apos;re capable of becoming — not by giving them better systems, but by helping them become a different kind of person altogether. Based in the United Kingdom. Building globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CREDENTIALS (off-white) */}
      <section className="bg-[#F7F4EF] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>The Work In Numbers</SectionLabel>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            {/* Stat 1 */}
            <div className="text-center">
              <span className="text-[#0A0A0A] text-5xl md:text-6xl font-bold block mb-2">10+</span>
              <span className="text-[#666666] text-sm uppercase tracking-wider">Years Coaching</span>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center">
              <span className="text-[#0A0A0A] text-5xl md:text-6xl font-bold block mb-2">5,000+</span>
              <span className="text-[#666666] text-sm uppercase tracking-wider">Professionals Trained</span>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center">
              <span className="text-[#0A0A0A] text-5xl md:text-6xl font-bold block mb-2">2</span>
              <span className="text-[#666666] text-sm uppercase tracking-wider">Continents</span>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center">
              <span className="text-[#0A0A0A] text-5xl md:text-6xl font-bold block mb-2">1</span>
              <span className="text-[#666666] text-sm uppercase tracking-wider">Book Published</span>
            </div>
          </div>

          <p className="font-serif text-[#0A0A0A] text-xl md:text-2xl italic text-center">
            Founder, IIC Networks (2016). Creator, The Forge System™. Author, Petty Little Things.
          </p>
        </div>
      </section>

      {/* SECTION 3 — PHILOSOPHY (dark) */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>What I Believe</SectionLabel>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8">
            The doing follows the being. It always does.
          </h2>

          <div className="space-y-6 text-[#CCCCCC] text-lg leading-relaxed mb-16">
            <p>
              I&apos;ve spent a decade sitting across from people who had every reason to succeed and weren&apos;t. Not because they lacked intelligence or ambition. Because they were still operating as the old version of themselves — running patterns that belonged to who they used to be, not who they were trying to become.
            </p>
            
            <p className="text-white font-semibold">
              Most coaching fixes the doing. I work on the being.
            </p>
            
            <p>
              Three principles sit underneath everything I do:
            </p>
          </div>

          {/* Three Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {/* Principle 01 */}
            <div>
              <span className="text-[#008E97] text-5xl font-bold block mb-4">01</span>
              <h3 className="text-white text-xl font-bold mb-3">Know God.</h3>
              <p className="text-[#A0A0A0] leading-relaxed">
                Purpose without a foundation is ambition with no anchor.
              </p>
            </div>

            {/* Principle 02 */}
            <div>
              <span className="text-[#008E97] text-5xl font-bold block mb-4">02</span>
              <h3 className="text-white text-xl font-bold mb-3">Know yourself.</h3>
              <p className="text-[#A0A0A0] leading-relaxed">
                You cannot lead others past where you have led yourself.
              </p>
            </div>

            {/* Principle 03 */}
            <div>
              <span className="text-[#008E97] text-5xl font-bold block mb-4">03</span>
              <h3 className="text-white text-xl font-bold mb-3">Know people.</h3>
              <p className="text-[#A0A0A0] leading-relaxed">
                Every result you want comes through someone.
              </p>
            </div>
          </div>

          <p className="font-serif text-[#C8963E] text-xl md:text-2xl italic text-center">
            Get those three right and the rest tends to fall into place.
          </p>
        </div>
      </section>

      {/* SECTION 4 — THE METHOD (teal-tinted surface) */}
      <section className="bg-[#F0FAFB] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>The Forge System™</SectionLabel>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] tracking-tight mb-8">
            This is what ten years of coaching built.
          </h2>

          <div className="space-y-6 text-[#333333] text-lg leading-relaxed mb-12 max-w-3xl">
            <p>
              The Forge System™ is an identity-based coaching process. Not a productivity framework. Not a mindset hack. A structured path for becoming the kind of person whose results follow naturally from who they are.
            </p>
            
            <p className="text-[#0A0A0A] font-semibold">
              Three phases. Twelve weeks. One question answered by the end:
            </p>
            
            <p className="font-serif text-[#008E97] text-xl italic">
              Who are you now, consistently?
            </p>
          </div>

          {/* Three Phase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phase 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[#E0E0E0]">
              <span className="text-[#008E97] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">Weeks 1–3</span>
              <h3 className="text-[#0A0A0A] text-2xl font-bold mb-3">STRIP</h3>
              <p className="text-[#666666] leading-relaxed">
                Honest diagnosis. What patterns are actually running you?
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[#E0E0E0]">
              <span className="text-[#008E97] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">Weeks 4–9</span>
              <h3 className="text-[#0A0A0A] text-2xl font-bold mb-3">FORGE</h3>
              <p className="text-[#666666] leading-relaxed">
                Identity architecture. Who are you becoming?
              </p>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-2xl p-8 border border-[#E0E0E0]">
              <span className="text-[#008E97] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">Weeks 10–12</span>
              <h3 className="text-[#0A0A0A] text-2xl font-bold mb-3">LEAD</h3>
              <p className="text-[#666666] leading-relaxed">
                Sustained self-leadership. Who are you now, every day?
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/forge-program"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C8963E] text-[#0A0A0A] font-semibold rounded-lg hover:bg-[#D4A84A] transition-colors duration-300"
            >
              Apply for The Forge Program →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — ROLE CARDS (dark) */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>What I Build</SectionLabel>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 — COACH */}
            <div className="bg-[#111111] border border-[#222222] rounded-2xl p-8 hover:border-[#008E97] transition-colors duration-300 group">
              <span className="text-[#008E97] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">COACH</span>
              <p className="text-[#CCCCCC] mb-6 leading-relaxed">
                Identity-based coaching for professionals and leaders.
              </p>
              <Link 
                href="/forge-program" 
                className="text-[#008E97] font-semibold text-sm group-hover:underline"
              >
                → The Forge Program
              </Link>
            </div>

            {/* Card 2 — AUTHOR */}
            <div className="bg-[#111111] border border-[#222222] rounded-2xl p-8 hover:border-[#008E97] transition-colors duration-300 group">
              <span className="text-[#008E97] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">AUTHOR</span>
              <p className="text-[#CCCCCC] mb-6 leading-relaxed">
                Petty Little Things — 50 habits quietly ruining your life.
              </p>
              <Link 
                href="/book" 
                className="text-[#008E97] font-semibold text-sm group-hover:underline"
              >
                → The Book
              </Link>
            </div>

            {/* Card 3 — SPEAKER */}
            <div className="bg-[#111111] border border-[#222222] rounded-2xl p-8 hover:border-[#008E97] transition-colors duration-300 group">
              <span className="text-[#008E97] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">SPEAKER</span>
              <p className="text-[#CCCCCC] mb-6 leading-relaxed">
                Available for corporate workshops and leadership events.
              </p>
              <Link 
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008E97] font-semibold text-sm group-hover:underline"
              >
                → Book a Call
              </Link>
            </div>

            {/* Card 4 — BUILDER */}
            <div className="bg-[#111111] border border-[#222222] rounded-2xl p-8 hover:border-[#008E97] transition-colors duration-300">
              <span className="text-[#008E97] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">BUILDER</span>
              <p className="text-[#CCCCCC] leading-relaxed">
                Founder of IIC Networks. Creator of OneGoal Pro.
              </p>
              <span className="text-[#666666] font-semibold text-sm block mt-6">
                About IIC Networks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA STRIP (teal) */}
      <section className="bg-[#008E97] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to close the gap?
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Book a free 30-minute Discovery Call. No pitch. Just an honest conversation.
          </p>

          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0A0A0A] text-white font-semibold rounded-lg hover:bg-[#1A1A1A] transition-colors duration-300"
          >
            Book a Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}