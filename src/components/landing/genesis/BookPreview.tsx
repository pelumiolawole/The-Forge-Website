"use client";

import { useState } from "react";
import { ArrowRight, Download, X, Loader2, Check } from "lucide-react";
import NextImage from "next/image";

export function BookPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

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
      <section id="book" className="py-24 bg-[#F7F4EF] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4 text-[#008E97]">The Book</div>
              <h2 className="headline-lg text-[#0A0A0A] mb-6">
                Petty Little Things
              </h2>

              <div className="space-y-4 text-[#6B7280] text-lg leading-relaxed">
                <p>
                  Most people don&apos;t fail because of big mistakes. They fail because of small ones
                  they never noticed — repeated daily, compounding quietly, until the gap between
                  who they are and who they could be feels impossible to close.
                </p>
                <p>
                  This book names 50 of those habits. Calls them out. And shows you exactly
                  how to replace them — not with better tactics, but with a better identity.
                </p>
                <p className="text-[#0A0A0A] font-semibold">
                  The book is where the work begins. The Forge System is where it finishes.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="gold-button inline-flex items-center justify-center gap-2">
                  Pre-order Now
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={handleDownloadClick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#0A0A0A]/20 rounded-lg text-[#0A0A0A] font-semibold hover:border-[#008E97] hover:text-[#008E97] transition-all"
                >
                  <Download size={18} />
                  Download Sample Chapter
                </button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative animate-float">
                <div className="relative w-72 h-[28rem] md:w-80 md:h-[32rem] rounded-lg shadow-2xl overflow-hidden">
                  <NextImage
                    src="/images/book-cover.png"
                    alt="Petty Little Things by Pelumi Olawole - 50 Habits Quietly Ruining Your Life"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 288px, 320px"
                    priority
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/20 blur-xl rounded-full" />
              </div>

              <div className="absolute top-1/4 -left-8 w-32 h-32 bg-[#008E97]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 -right-8 w-40 h-40 bg-[#C8963E]/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Modal */}
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
                    Enter your email and we&apos;ll send you the Introduction and Habit #17
                    from Petty Little Things — instantly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#008E97] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gold-button inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Me The Sample
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
                  Your sample is downloading now. Check your inbox for a copy
                  and what comes next.
                </p>
                <button
                  onClick={closeModal}
                  className="teal-button"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
