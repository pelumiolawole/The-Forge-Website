import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coach PO — About | Pelumi Olawole",
  description: "Coach, author, and founder of The Forge System™. From Lagos to the UK — the story behind the work.",
};

const CALENDLY_URL = "https://calendly.com/olawolepelumisunday/30min";

// Pull Quote Component
function PullQuote({ 
  children, 
  color = "teal",
  className = "" 
}: { 
  children: React.ReactNode; 
  color?: "teal" | "gold";
  className?: string;
}) {
  const colorClasses = {
    teal: "text-[#008E97]",
    gold: "text-[#C8963E]",
  };

  return (
    <blockquote 
      className={`
        font-serif text-2xl md:text-3xl lg:text-4xl italic leading-relaxed text-center max-w-4xl mx-auto my-12 md:my-16
        ${colorClasses[color]}
        ${className}
      `}
    >
      "{children}"
    </blockquote>
  );
}

// Section Label Component
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#008E97] text-sm font-semibold tracking-[0.2em] uppercase mb-6 block">
      {children}
    </span>
  );
}

// Section Headline Component
function SectionHeadline({ 
  children, 
  light = false,
  className = "" 
}: { 
  children: React.ReactNode; 
  light?: boolean;
  className?: string;
}) {
  return (
    <h2 className={`
      text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8
      ${light ? "text-[#0A0A0A]" : "text-white"}
      ${className}
    `}>
      {children}
    </h2>
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
              <div className="aspect-square bg-[#1A1A1A] rounded-2xl flex items-center justify-center border border-[#222222]">
                <span className="text-[#666666] text-sm uppercase tracking-wider">{`{headshot placeholder}`}</span>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <SectionLabel>About Coach PO</SectionLabel>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="text-white block mb-2">I wasn&apos;t born knowing this.</span>
                <span className="text-[#C8963E] italic font-serif">I learned it the hard way.</span>
              </h1>

              <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
                Coach, author, and builder. Founder of IIC Networks. Creator of The Forge System™.
                Based in the United Kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ORIGIN STORY (off-white) */}
      <section className="bg-[#F7F4EF] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Where It Started</SectionLabel>
          
          <SectionHeadline light>
            Lagos gave me ambition.
            <br />
            <span className="italic font-serif text-[#0A0A0A]/80">Kwara taught me what actually matters.</span>
          </SectionHeadline>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#333333] leading-relaxed mb-6">
              I grew up in Lagos — the loudest, most alive city in the country. We were comfortable. My father was educated, disciplined, and exacting. He collected books and newspapers the way other men collect receipts, stacked years deep in a large box that I used to dig through for hours as a boy. Nobody told me to read. I just couldn&apos;t leave the box alone.
            </p>

            <p className="text-[#333333] leading-relaxed mb-6">
              Then, when I was around eight or nine, everything changed. My father&apos;s business collapsed. Not slowly — suddenly. Properties gone, money gone, the life we knew gone with it. We moved to Kwara State, and the contrast was total. Where there had been abundance, there was now scarcity. We farmed to eat. My mother went from distributing for Cadbury to running a small kiosk in front of our house.
            </p>

            <p className="text-[#333333] leading-relaxed mb-6">
              I was the first son. That meant something. It meant you were supposed to model the standard, hold the structure, carry the expectation without being asked to.
            </p>

            <p className="text-[#333333] leading-relaxed mb-8">
              What that period actually taught me had nothing to do with resilience as a concept. It taught me something more specific:
            </p>
          </div>

          <PullQuote color="teal">
            You can have everything and lose it in a day. And if what you had was only material — you had nothing to fall back on.
          </PullQuote>

          <p className="text-[#333333] leading-relaxed text-lg">
            The real question is what you&apos;ve built inside yourself — spiritually, psychologically, practically. That&apos;s what stays. That understanding has shaped everything I&apos;ve built since.
          </p>
        </div>
      </section>

      {/* SECTION 3 — THE PATTERN (dark) */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>The Work</SectionLabel>
          
          <SectionHeadline>
            Everywhere I&apos;ve worked,
            <br />
            <span className="italic font-serif text-white/80">the same thing happens.</span>
          </SectionHeadline>

          <div className="space-y-6 text-[#CCCCCC] text-lg leading-relaxed">
            <p>
              I studied Mathematics at the Federal University of Technology, Akure. I wasn&apos;t a serious student — not because I couldn&apos;t do the work, but because my brain was somewhere else entirely. Sitting with friends who had small businesses. Helping them set up processes, manage finances, think about structure. I did it for free, mostly. It didn&apos;t feel like work. It felt obvious.
            </p>

            <p>
              By the time I finished university, I already knew: the work of my life would be making people better. Not in a vague inspirational sense — practically, structurally, across every dimension of who they are.
            </p>

            <p>
              In 2016, I founded IIC Networks — Influence, Impact, Change. Through that practice I worked privately with firms across different industries, designed and led people development programmes, and trained over five thousand professionals and leaders across West Africa.
            </p>

            <p className="text-white">
              The through line in all of it has always been the same:
            </p>
          </div>

          <PullQuote color="gold">
            I walk into a room, understand what&apos;s breaking, and make it better. The room notices.
          </PullQuote>

          <p className="text-[#CCCCCC] leading-relaxed text-lg">
            In 2023, my family relocated to the United Kingdom. I started at the bottom again. Within a year, I had moved into an IT support team, restructured how it operated, and was leading it in every practical sense before I had the title.
          </p>

          <p className="text-white font-semibold text-xl mt-8">
            The pattern holds. It always has.
          </p>
        </div>
      </section>

      {/* SECTION 4 — THE SHIFT (off-white) */}
      <section className="bg-[#F7F4EF] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>The Real Problem</SectionLabel>
          
          <SectionHeadline light>
            I had the knowledge.
            <br />
            <span className="italic font-serif text-[#0A0A0A]/80">I just wasn&apos;t living it.</span>
          </SectionHeadline>

          <div className="space-y-6 text-[#333333] text-lg leading-relaxed">
            <p>
              A few years into coaching, I had to face an uncomfortable truth about myself. I knew things. I understood psychology, productivity, human behaviour. I could diagnose anyone&apos;s problems in minutes.
            </p>

            <p className="text-[#0A0A0A] font-semibold text-xl">
              My own results didn&apos;t match any of it.
            </p>

            <p>
              I was guilty of the exact patterns I was coaching people out of. Over-planning until the plan became the procrastination. Saying yes until I had no time for my own priorities. Waiting for the right moment that never arrived.
            </p>

            <p>
              The gap between what I knew and what I had to show for it wasn&apos;t just an achievement problem. It was an integrity problem. I wasn&apos;t living in alignment with what I claimed to value.
            </p>

            <p className="text-[#0A0A0A] font-semibold">
              So I stopped focusing on what I needed to do. And started focusing on who I needed to become.
            </p>
          </div>

          <PullQuote color="teal">
            Strategy without identity is just exhausting cosplay.
          </PullQuote>

          <p className="text-[#333333] leading-relaxed text-lg">
            That shift — from to-do to to-be — changed everything. Not overnight. Progressively. And it became the foundation of everything I now build and teach.
          </p>
        </div>
      </section>

      {/* SECTION 5 — WHAT I BELIEVE (dark) */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>The Foundation</SectionLabel>
            
            <SectionHeadline className="text-center">
              Three principles.
              <br />
              <span className="italic font-serif text-white/80">Everything else follows.</span>
            </SectionHeadline>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Belief 01 */}
            <div className="text-center md:text-left">
              <span className="text-[#008E97] text-5xl font-bold block mb-4">01</span>
              <h3 className="text-white text-xl font-bold mb-4">Know God.</h3>
              <p className="text-[#A0A0A0] leading-relaxed">
                Purpose without a foundation is just ambition with no anchor. Faith is not a background detail in my life — it is the frame through which I make decisions, understand my calling, and return to myself when I&apos;ve drifted.
              </p>
            </div>

            {/* Belief 02 */}
            <div className="text-center md:text-left">
              <span className="text-[#008E97] text-5xl font-bold block mb-4">02</span>
              <h3 className="text-white text-xl font-bold mb-4">Know yourself.</h3>
              <p className="text-[#A0A0A0] leading-relaxed">
                You cannot lead others past where you have led yourself. Self-knowledge is not introspection for its own sake — it is the intelligence that makes every other decision sharper.
              </p>
            </div>

            {/* Belief 03 */}
            <div className="text-center md:text-left">
              <span className="text-[#008E97] text-5xl font-bold block mb-4">03</span>
              <h3 className="text-white text-xl font-bold mb-4">Know people.</h3>
              <p className="text-[#A0A0A0] leading-relaxed">
                Every result you want in life comes through someone. Understanding people — their fears, their patterns, their capacity — is not manipulation. It is the most practical skill you can develop.
              </p>
            </div>
          </div>

          <p className="text-[#C8963E] text-xl md:text-2xl italic font-serif text-center mt-16 max-w-3xl mx-auto">
            Get those three right and the rest — decisions, relationships, work, direction — tends to fall into place.
          </p>
        </div>
      </section>

      {/* SECTION 6 — THE FORGE SYSTEM (teal-tinted surface) */}
      <section className="bg-[#F0FAFB] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>The Work Today</SectionLabel>
          
          <SectionHeadline light>
            This is what a decade
            <br />
            <span className="italic font-serif text-[#0A0A0A]/80">of coaching built.</span>
          </SectionHeadline>

          <div className="space-y-6 text-[#333333] text-lg leading-relaxed mb-12">
            <p>
              The Forge System™ is the distillation of everything I&apos;ve learned — about identity, about change, about what it actually takes to close the gap between who you are and who you&apos;re capable of becoming.
            </p>

            <p>
              It is not a productivity system. It is not a mindset framework. It is an identity architecture — a structured process for becoming the kind of person whose results are a natural consequence of who they are.
            </p>

            <p>
              The clients I work with are not struggling because they lack intelligence or ambition. They are struggling because they are still operating from an older version of themselves — running patterns that belong to who they used to be, not who they&apos;re trying to become.
            </p>

            <p className="text-[#0A0A0A] font-semibold text-xl">
              My job is to close that gap. Not by adding more to their plate. By changing who is holding the plate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="/forge-program"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C8963E] text-[#0A0A0A] font-semibold rounded-lg hover:bg-[#D4A84A] transition-colors duration-300"
            >
              Work With Me →
            </Link>
            
            <Link
              href="/petty-audit"
              className="inline-flex items-center justify-center px-8 py-4 text-[#008E97] font-semibold hover:underline transition-all duration-300"
            >
              Take the free Petty Audit →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CLOSING / PERSONAL (dark) */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>The Honest Version</SectionLabel>
          
          <SectionHeadline>
            I wasn&apos;t just told how this works.
            <br />
            <span className="italic font-serif text-white/80">I know.</span>
          </SectionHeadline>

          <div className="space-y-6 text-[#CCCCCC] text-lg leading-relaxed mb-12">
            <p>
              I&apos;ve gone from privileged to lacking. From abundance to scarcity. I&apos;ve failed. I&apos;ve watched my wife carry our family financially while I built something that wasn&apos;t paying yet — and she didn&apos;t just tolerate it, she believed in it. I&apos;ve moved countries in my mid-thirties and started from the bottom again.
            </p>

            <p className="text-white">
              None of that is the inspirational version. It&apos;s the actual version.
            </p>

            <p>
              The reason it matters is this: when I sit across from someone who is stuck, I&apos;m not theorizing. I&apos;ve been broke. I&apos;ve struggled through school fees. I&apos;ve farmed for food. I&apos;ve had to restructure who I am, not just what I do.
            </p>

            <p>
              One of the primary reasons I build what I build is to give my wife the freedom to pursue her own vision without the constraint of obligation to income. She has earned that and more.
            </p>

            <p>
              I&apos;m building toward a simple thing: millions of people who became who they were always capable of becoming — because somewhere along the way they encountered something I built that helped them close the gap.
            </p>

            <p className="text-white font-semibold">
              That&apos;s what this is all for.
            </p>
          </div>

          <p className="text-[#C8963E] text-2xl md:text-3xl italic font-serif text-center max-w-3xl mx-auto leading-relaxed">
            &ldquo;On any given Tuesday, even after all of it is built — I&apos;ll still be working on the next thing. That&apos;s not a compulsion. That&apos;s just who I am.&rdquo;
          </p>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA STRIP (teal) */}
      <section className="bg-[#008E97] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to close the gap?
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Book a free 30-minute Discovery Call. No pitch. No pressure. Just an honest conversation about where you are and what&apos;s possible.
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