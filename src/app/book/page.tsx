"use client";

import { useState } from "react";
import { ArrowRight, Download, X, Loader2, Check } from "lucide-react";
import NextImage from "next/image";

export default function BookPage() {
  // Chapter download modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chapterEmail, setChapterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Waitlist state
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSubmitting, setWaitlistSubmitting] = useState(false);
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);

  // Sender.net group IDs
  const CHAPTER_GROUP_ID = "bYYgWK";
  const WAITLIST_GROUP_ID = "REPLACE_WITH_WAITLIST_GROUP_ID"; // update once created in Sender.net

  const handleChapterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://api.sender.net/v2/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDER_API_TOKEN}`,
        },
        body: JSON.stringify({ email: chapterEmail, groups: [CHAPTER_GROUP_ID] }),
      });
    } catch (e) {
      console.error(e);
    }

    setIsSuccess(true);
    setIsSubmitting(false);

    // Trigger PDF download
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/PDFs/PLT_SampleChapter_v2.pdf";
      link.download = "PLT_SampleChapter_v2.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setChapterEmail("");
    setIsSuccess(false);
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistSubmitting(true);
    try {
      await fetch("https://api.sender.net/v2/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDER_API_TOKEN}`,
        },
        body: JSON.stringify({ email: waitlistEmail, groups: [WAITLIST_GROUP_ID] }),
      });
      setWaitlistSuccess(true);
    } catch (e) {
      console.error(e);
    } finally {
      setWaitlistSubmitting(false);
    }
  };

  return (
    <main className="bg-[#0A0A0A] text-[#F7F4EF]">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <NextImage
            src="/images/book-hero.png"
            alt="Petty Little Things — The habits holding you back don't feel like habits"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        {/* Blend bottom edge into page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#0A0A0A]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-32">
          <p className="section-label text-[#008E97] mb-6">
            Pelumi Olawole — Debut Book
          </p>
          <h1 className="headline-xl text-white max-w-3xl mb-8">
            The habits holding you back don&apos;t feel like habits.
          </h1>
          <p className="text-[#F7F4EF]/80 text-xl md:text-2xl font-light max-w-xl mb-12 leading-relaxed">
            <em className="text-[#008E97] not-italic font-semibold">Petty Little Things</em> — coming soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#waitlist"
              className="gold-button inline-flex items-center justify-center gap-2"
            >
              Join the Waitlist
              <ArrowRight size={18} />
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#F7F4EF]/30 text-[#F7F4EF] font-semibold hover:border-[#008E97] hover:text-[#008E97] transition-all"
            >
              <Download size={18} />
              Read a Sample Chapter
            </button>
          </div>
        </div>
      </section>

      {/* ─── HOOK ─────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="border-l-2 border-[#008E97] pl-8">
            <p className="text-[#F7F4EF]/90 text-2xl md:text-3xl font-light leading-relaxed mb-6">
              You know what you should be doing. You&apos;ve read the books, listened to the podcasts, made the plans. But somehow, you&apos;re still not where you want to be.
            </p>
            <p className="text-[#F7F4EF]/60 text-xl md:text-2xl font-light leading-relaxed mb-6">
              The problem isn&apos;t your strategy. It&apos;s the 50 small habits quietly destroying your progress every single day — and they don&apos;t feel like problems. They feel like personality.
            </p>
            <p className="text-[#008E97] text-xl md:text-2xl font-semibold leading-relaxed">
              This book names them. And then it shows you how to become someone who doesn&apos;t need them anymore.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BOOK SHOWCASE ────────────────────────────────────── */}
      <section className="bg-[#F0FAFB] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Book mockup */}
            <div className="relative flex justify-center">
              <div className="relative animate-float">
                <div className="relative w-full max-w-md h-[28rem] md:h-[36rem]">
                  <NextImage
                    src="/images/book-mock.png"
                    alt="Petty Little Things — book cover front, back and spine"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/15 blur-xl rounded-full" />
              </div>
              <div className="absolute top-1/4 -left-8 w-32 h-32 bg-[#008E97]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 -right-8 w-40 h-40 bg-[#C8963E]/10 rounded-full blur-3xl" />
            </div>

            {/* Copy */}
            <div>
              <p className="section-label text-[#008E97] mb-4">What&apos;s Inside</p>
              <h2 className="headline-lg text-[#0A0A0A] mb-8">
                50 habits quietly ruining your life — and how to fix them.
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "The 50 Habits",
                    body: "Named, examined, and connected to the identity pattern underneath. Not productivity tips — identity diagnosis.",
                  },
                  {
                    title: "Real Client Stories",
                    body: "People who recognised themselves in these pages and changed. Not case studies — honest accounts.",
                  },
                  {
                    title: "The 30-Day Identity Reset",
                    body: "A structured challenge to close the gap between who you are and who you need to become.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#008E97]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#008E97]" />
                    </div>
                    <div>
                      <p className="text-[#0A0A0A] font-semibold mb-1">{item.title}</p>
                      <p className="text-[#6B7280] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[#6B7280] text-sm italic border-t border-[#0A0A0A]/10 pt-6">
                &ldquo;Because someone had to say it.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHAPTER DOWNLOAD ─────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div>
              <p className="section-label text-[#008E97] mb-4">Free Sample</p>
              <h2 className="headline-lg text-white mb-6">
                Read the first chapter free.
              </h2>
              <p className="text-[#F7F4EF]/60 text-lg leading-relaxed mb-8">
                Not sure if this book is for you? Read Chapter 1 and decide for yourself. No fluff. No filler. Just the first habit — and it might already sound familiar.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#F7F4EF]/20 text-[#F7F4EF] font-semibold hover:border-[#008E97] hover:text-[#008E97] transition-all"
              >
                <Download size={18} />
                Download Sample Chapter
              </button>
            </div>

            {/* Flat lay image */}
            <div className="relative">
              <div className="relative w-full h-[28rem] md:h-[36rem] overflow-hidden shadow-2xl">
                <NextImage
                  src="/images/book-page.png"
                  alt="Petty Little Things open book on desk with coffee and notebook"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#008E97]/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── LIFESTYLE / EMOTIONAL ────────────────────────────── */}
      <section className="bg-[#F7F4EF] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative w-full h-[36rem] md:h-[44rem] overflow-hidden shadow-xl">
                <NextImage
                  src="/images/book-man.png"
                  alt="Man reading Petty Little Things in a home library"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Copy */}
            <div>
              <p className="section-label text-[#008E97] mb-4">
                For the person who already knows
              </p>
              <h2 className="headline-lg text-[#0A0A0A] mb-6">
                This book isn&apos;t for people who lack information.
              </h2>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
                It&apos;s for the person who has absorbed every podcast, every framework, every morning routine — and still finds themselves falling back into the same patterns.
              </p>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
                Because the issue was never knowledge. It was identity. And identity doesn&apos;t change through information alone — it changes when you see yourself clearly enough to decide to be different.
              </p>
              <p className="text-[#0A0A0A] text-lg font-semibold leading-relaxed">
                That&apos;s what this book is for.
              </p>
              <div className="mt-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="gold-button inline-flex items-center justify-center gap-2"
                >
                  Read the First Chapter
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT THE AUTHOR ─────────────────────────────────── */}
      <section className="bg-[#F0FAFB] py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label text-[#008E97] mb-4">About the Author</p>
          <p className="text-[#0A0A0A] text-xl md:text-2xl font-light leading-relaxed mb-6">
            Pelumi Olawole has spent nearly 10 years coaching people through the same habits he struggles with himself. He&apos;s not selling you a perfect system. He&apos;s sharing what he&apos;s learned from falling, adjusting, and trying again.
          </p>
          <p className="text-[#6B7280] text-lg leading-relaxed">
            This book is his journey — and the lessons he&apos;s gathered from others who&apos;ve done the work. No expertise. Just experience.
          </p>
        </div>
      </section>

      {/* ─── WAITLIST CTA ─────────────────────────────────────── */}
      <section id="waitlist" className="bg-[#0A0A0A] py-24 md:py-32 border-t border-[#F7F4EF]/10">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label text-[#008E97] mb-4">Coming Soon</p>
          <h2 className="headline-lg text-white mb-6">
            Be first to know when it drops.
          </h2>
          <p className="text-[#F7F4EF]/60 text-lg leading-relaxed mb-10">
            Join the waitlist and get early access, behind-the-scenes updates, and a launch discount when the book goes live.
          </p>

          {waitlistSuccess ? (
            <div className="border border-[#C8963E] p-8">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#C8963E]/10 flex items-center justify-center">
                <Check className="text-[#C8963E]" size={28} />
              </div>
              <p className="text-[#C8963E] font-semibold text-xl mb-2">
                You&apos;re on the list.
              </p>
              <p className="text-[#F7F4EF]/60">
                We&apos;ll be in touch when the book is ready. Watch this space.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleWaitlistSubmit}
              className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-[#F7F4EF]/10 border border-[#F7F4EF]/20 text-[#F7F4EF] placeholder-[#F7F4EF]/40 px-5 py-4 text-base focus:outline-none focus:border-[#C8963E] transition-colors"
              />
              <button
                type="submit"
                disabled={waitlistSubmitting}
                className="gold-button inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {waitlistSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Joining…
                  </>
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-[#F7F4EF]/30 text-sm mt-6">
            No spam. Unsubscribe any time.
          </p>
        </div>
      </section>

      {/* ─── CHAPTER DOWNLOAD MODAL ───────────────────────────── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {!isSuccess ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#008E97]/10 flex items-center justify-center">
                    <Download className="text-[#008E97]" size={28} />
                  </div>
                  <h3 className="text-2xl font-['Fraunces'] font-bold text-white mb-2">
                    Read the First Chapter Free
                  </h3>
                  <p className="text-white/60 text-sm">
                    Enter your email and we&apos;ll send you Chapter 1 from{" "}
                    <em>Petty Little Things</em> — plus trigger the download instantly.
                  </p>
                </div>

                <form onSubmit={handleChapterSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={chapterEmail}
                    onChange={(e) => setChapterEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#008E97] transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gold-button inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Me the Sample
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-white/30 text-xs text-center mt-4">
                  No spam. No noise. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#008E97]/20 flex items-center justify-center">
                  <Check className="w-8 h-8 text-[#008E97]" />
                </div>
                <h3 className="text-2xl font-['Fraunces'] font-bold text-white mb-2">
                  It&apos;s on its way.
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  Your sample is downloading now. Check your inbox for a copy and what comes next.
                </p>
                <button onClick={closeModal} className="teal-button">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
