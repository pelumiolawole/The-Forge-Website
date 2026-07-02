"use client";

import React, { useState } from "react";
import { ArrowRight, Download, X, Loader2, Check } from "lucide-react";
import Link from "next/link";
import { m } from "framer-motion";
import { fadeRight, staggerContainer, staggerItem, VIEWPORT_ONCE } from "@/lib/motion";
import { BookTilt } from "@/components/book/BookTilt";

const PLATFORMS = [
  { label: "Amazon", links: [
    { text: "UK", url: "https://www.amazon.co.uk/dp/B0H4J1NYBY" },
    { text: "US", url: "https://www.amazon.com/dp/B0H4J1NYBY" },
  ]},
  { label: "Apple Books", links: [{ text: null, url: "https://books.apple.com/us/book/petty-little-things/id6784008007" }] },
  { label: "Kobo", links: [] },
  { label: "Google Play", links: [{ text: null, url: "https://play.google.com/store/books/details?id=bMTtEQAAQBAJ" }] },
  { label: "Barnes & Noble", links: [{ text: null, url: "https://www.barnesandnoble.com/w/petty-little-things-pelumi-olawole/1150473408?ean=9798182503242" }] },
];

export function BookPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail]             = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]     = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
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
    setEmail("");
    setIsSuccess(false);
  };

  return (
    <>
      <section id="book" className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Ambient glow accents */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e6f6f7] rounded-full blur-[100px] opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#f4fafb] rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <m.div
              className="order-1"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              <m.div className="section-label mb-4" variants={staggerItem}>The Book</m.div>
              <m.h2 className="headline-lg mb-6" variants={staggerItem}>
                Petty Little Things
              </m.h2>

              <m.div className="space-y-4 text-[#3d5a5c] text-base md:text-lg leading-relaxed" variants={staggerItem}>
                <p>
                  Most people don&apos;t fail because of big mistakes. They fail because
                  of small ones they never noticed, repeated daily, compounding quietly,
                  until the gap between who they are and who they could be feels impossible
                  to close.
                </p>
                <p>
                  This book names 50 of those habits. Calls them out. And shows you exactly
                  how to replace them, not with better tactics, but with a better identity.
                </p>
                <p className="text-[#0f1f20] font-semibold">
                  The book is where the work begins. The Forge System is where it finishes.
                </p>
              </m.div>

              {/* Platform availability */}
              <m.div className="mt-6" variants={staggerItem}>
                <p className="text-[#3d5a5c] text-sm leading-relaxed">
                  Available now on{" "}
                  {PLATFORMS.map((p, i) => (
                    <React.Fragment key={p.label}>
                      {i > 0 && <span className="text-[#b3dde0] mx-1">&middot;</span>}
                      {p.links.length === 0 ? (
                        <span className="text-[#3d5a5c]">{p.label}</span>
                      ) : p.links.length === 1 ? (
                        <a
                          href={p.links[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#008e97] hover:underline"
                        >
                          {p.label}
                        </a>
                      ) : (
                        <span>
                          {p.label}{" "}
                          <span className="text-[#b3dde0]">(</span>
                          {p.links.map((l, j) => (
                            <React.Fragment key={l.text}>
                              {j > 0 && <span className="text-[#b3dde0] mx-0.5">&middot;</span>}
                              <a
                                href={l.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#008e97] hover:underline"
                              >
                                {l.text}
                              </a>
                            </React.Fragment>
                          ))}
                          <span className="text-[#b3dde0]">)</span>
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                  .
                </p>
                <p className="mt-2 text-[#7a9ea1] text-sm">
                  In Nigeria? Physical copies ship from mid-July.{" "}
                  <Link href="/book" className="text-[#008e97] hover:underline">
                    Full details on the book page.
                  </Link>
                </p>
              </m.div>

              <m.div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4" variants={staggerItem}>
                <Link
                  href="/book"
                  className="primary-button inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Order Your Copy
                  <ArrowRight size={18} />
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="ghost-button inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Download size={18} />
                  Free Sample Chapter
                </button>
              </m.div>
            </m.div>

            {/* Book cover */}
            <m.div
              className="relative flex justify-center order-2"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              <BookTilt
                src="/images/book-cover.png"
                alt="Petty Little Things by Pelumi Olawole"
                width={640}
                height={960}
                className="w-56 md:w-72 lg:w-80 mx-auto"
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-[#008e97]/10 blur-xl rounded-full" />
              <div className="absolute top-1/4 -left-8 w-32 h-32 bg-[#e6f6f7] rounded-full blur-3xl" />
            </m.div>

          </div>
        </div>
      </section>

      {/* Sample chapter modal — light theme */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#0f1f20]/40 backdrop-blur-sm">
          <div className="relative w-full sm:max-w-md bg-white border border-[#d0e8ea] rounded-t-2xl sm:rounded-2xl p-6 md:p-8 shadow-[0_24px_64px_rgba(0,142,151,0.15)]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#7a9ea1] hover:text-[#0f1f20] transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {!isSuccess ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#e6f6f7] flex items-center justify-center">
                    <Download className="text-[#008e97]" size={28} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-['Fraunces'] font-bold text-[#0f1f20] mb-2">
                    Read the First Chapter Free
                  </h3>
                  <p className="text-[#7a9ea1] text-sm">
                    Enter your email and we will send you a sample chapter from Petty Little Things instantly.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-white border-[1.5px] border-[#d0e8ea] rounded-lg text-[#0f1f20] placeholder:text-[#b3dde0] focus:outline-none focus:border-[#008e97] focus:shadow-[0_0_0_3px_rgba(0,142,151,0.1)] transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full primary-button inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><Loader2 size={18} className="animate-spin" />Sending...</>
                    ) : (
                      <>Send Me The Sample<ArrowRight size={18} /></>
                    )}
                  </button>
                </form>
                <p className="text-[#b3dde0] text-xs text-center mt-4">No spam. Unsubscribe anytime.</p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#e6f6f7] flex items-center justify-center">
                  <Check className="w-8 h-8 text-[#008e97]" />
                </div>
                <h3 className="text-2xl font-['Fraunces'] font-bold text-[#0f1f20] mb-2">It is on its way.</h3>
                <p className="text-[#7a9ea1] text-sm mb-4">
                  Your sample is downloading now. Check your inbox for a copy and what comes next.
                </p>
                <button onClick={closeModal} className="ghost-button text-sm px-6 py-2">Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
