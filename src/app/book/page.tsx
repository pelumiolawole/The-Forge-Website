"use client";

import React, { useState } from "react";
import { ArrowRight, Download, X, Loader2, Check } from "lucide-react";
import NextImage from "next/image";

export default function BookPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chapterEmail, setChapterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSubmitting, setWaitlistSubmitting] = useState(false);
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);

  const CHAPTER_GROUP_ID = "bYYgWK";
  const WAITLIST_GROUP_ID = "REPLACE_WITH_WAITLIST_GROUP_ID";

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

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <NextImage
            src="/images/book-hero-3d.png"
            alt="Petty Little Things by Pelumi Olawole"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-lg">
            <p className="section-label text-[#008E97] mb-6">
              Pelumi Olawole — Debut Book
            </p>
            <h1 className="headline-xl text-white mb-4">
              Petty Little Things
            </h1>
            <p className="text-[#F7F4EF]/60 text-base md:text-xl leading-relaxed mb-8 md:mb-10">
              50 habits quietly ruining your life and how to fix them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#waitlist"
                className="gold-button inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Join the Waitlist
                <ArrowRight size={18} />
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#F7F4EF]/20 text-[#F7F4EF] font-semibold hover:border-[#008E97] hover:text-[#008E97] transition-all rounded-lg w-full sm:w-auto"
              >
                <Download size={18} />
                Free Sample Chapter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HOOK */}
      <section className="bg-[#0A0A0A] py-16 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="border-l-2 border-[#008E97] pl-6 md:pl-8">
            <p className="text-[#F7F4EF]/90 text-xl md:text-3xl font-light leading-relaxed mb-6">
              You know what you should be doing. You have read the books, listened to the podcasts, made the plans. But somehow, you are still not where you want to be.
            </p>
            <p className="text-[#F7F4EF]/60 text-lg md:text-2xl font-light leading-relaxed mb-6">
              The problem is not your strategy. It is the 50 small habits quietly destroying your progress every single day. They do not feel like problems. They feel like personality.
            </p>
            <p className="text-[#008E97] text-lg md:text-2xl font-semibold leading-relaxed">
              This book names them. And then shows you how to become someone who does not need them anymore.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS INSIDE */}
      <section className="bg-[#F0FAFB] py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Flat lay image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full h-72 md:h-[38rem] overflow-hidden shadow-2xl rounded-2xl">
                <NextImage
                  src="/images/book-page.png"
                  alt="Petty Little Things open book"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* What is inside */}
            <div className="order-1 lg:order-2">
              <p className="section-label text-[#008E97] mb-4">What is Inside</p>
              <h2 className="headline-lg text-[#0A0A0A] mb-8">
                50 habits quietly ruining your life and how to fix them.
              </h2>

              <div className="space-y-5 md:space-y-6 mb-8 md:mb-10">
                {[
                  { title: "The 50 Habits", body: "Named, examined, and connected to the identity pattern underneath. Not productivity tips. Identity diagnosis." },
                  { title: "Real Client Stories", body: "People who recognised themselves in these pages and changed. Not case studies. Honest accounts." },
                  { title: "The 30-Day Identity Reset", body: "A structured challenge to close the gap between who you are and who you need to become." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#008E97]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#008E97]" />
                    </div>
                    <div>
                      <p className="text-[#0A0A0A] font-semibold mb-1 text-sm md:text-base">{item.title}</p>
                      <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#0A0A0A]/10 pt-6 md:pt-8">
                <p className="text-[#6B7280] text-sm md:text-base leading-relaxed mb-5 md:mb-6">
                  Not sure if this book is for you? Read a free chapter and decide for yourself.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="gold-button inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Download size={18} />
                  Read a Free Chapter
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOR THE PERSON WHO KNOWS */}
      <section className="bg-[#F7F4EF] py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full h-72 md:h-[44rem] overflow-hidden shadow-xl rounded-2xl">
                <NextImage
                  src="/images/book-man.png"
                  alt="Man reading Petty Little Things"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <p className="section-label text-[#008E97] mb-4">
                For the person who already knows
              </p>
              <h2 className="headline-lg text-[#0A0A0A] mb-6">
                This book is not for people who lack information.
              </h2>
              <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-5">
                It is for the person who has absorbed every podcast, every framework, every morning routine and still finds themselves falling back into the same patterns.
              </p>
              <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-5">
                Because the issue was never knowledge. It was identity. And identity does not change through information alone. It changes when you see yourself clearly enough to decide to be different.
              </p>
              <p className="text-[#0A0A0A] text-base md:text-lg font-semibold leading-relaxed">
                That is what this book is for.
              </p>
              <div className="mt-8 md:mt-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="gold-button inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Read a Free Chapter
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT THE AUTHOR */}
      <section className="bg-[#F0FAFB] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label text-[#008E97] mb-4">About the Author</p>
          <p className="text-[#0A0A0A] text-lg md:text-2xl font-light leading-relaxed mb-6">
            Pelumi Olawole has spent nearly 10 years coaching people through the same habits he struggles with himself. He is not selling you a perfect system. He is sharing what he has learned from falling, adjusting, and trying again.
          </p>
          <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
            This book is his journey and the lessons he has gathered from others who have done the work. No expertise. Just experience.
          </p>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="bg-[#0A0A0A] py-16 md:py-28 border-t border-[#F7F4EF]/10">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label text-[#008E97] mb-4">Coming Soon</p>
          <h2 className="headline-lg text-white mb-6">
            Be first to know when it drops.
          </h2>
          <p className="text-[#F7F4EF]/60 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
            Join the waitlist and get early access, behind-the-scenes updates, and a launch discount when the book goes live.
          </p>

          {waitlistSuccess ? (
            <div className="border border-[#C8963E] rounded-xl p-6 md:p-8">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#C8963E]/10 flex items-center justify-center">
                <Check className="text-[#C8963E]" size={28} />
              </div>
              <p className="text-[#C8963E] font-semibold text-lg md:text-xl mb-2">
                You are on the list.
              </p>
              <p className="text-[#F7F4EF]/60 text-sm md:text-base">
                We will be in touch when the book is ready. Watch this space.
              </p>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
              <input
                type="email"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-[#F7F4EF]/10 border border-[#F7F4EF]/20 text-[#F7F4EF] placeholder-[#F7F4EF]/40 px-5 py-4 text-base focus:outline-none focus:border-[#C8963E] transition-colors rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
              />
              <button
                type="submit"
                disabled={waitlistSubmitting}
                className="gold-button inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none"
              >
                {waitlistSubmitting ? (
                  <><Loader2 size={18} className="animate-spin" />Joining...</>
                ) : (
                  <><ArrowRight size={18} />Join the Waitlist</>
                )}
              </button>
            </form>
          )}

          <p className="text-[#F7F4EF]/30 text-sm mt-5 md:mt-6">
            No spam. Unsubscribe any time.
          </p>
        </div>
      </section>

      {/* CHAPTER MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full sm:max-w-md bg-[#0A0A0A] border border-white/10 rounded-t-2xl sm:rounded-2xl p-6 md:p-8 shadow-2xl">
            <button onClick={closeModal} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
              <X size={24} />
            </button>

            {!isSuccess ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#008E97]/10 flex items-center justify-center">
                    <Download className="text-[#008E97]" size={26} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
                    Read a Free Chapter
                  </h3>
                  <p className="text-white/60 text-sm">
                    Enter your email and we will trigger the download instantly and send a copy to your inbox.
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
                      <><Loader2 size={18} className="animate-spin" />Sending...</>
                    ) : (
                      <>Send Me the Sample<ArrowRight size={18} /></>
                    )}
                  </button>
                </form>

                <p className="text-white/30 text-xs text-center mt-4">No spam. Unsubscribe anytime.</p>
              </>
            ) : (
              <div className="text-center py-6 md:py-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#008E97]/20 flex items-center justify-center">
                  <Check className="w-7 h-7 text-[#008E97]" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
                  It is on its way.
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  Your sample is downloading now. Check your inbox for a copy and what comes next.
                </p>
                <button onClick={closeModal} className="teal-button">Close</button>
              </div>
            )}
          </div>
        </div>
      )}

    </main>
  );
}
