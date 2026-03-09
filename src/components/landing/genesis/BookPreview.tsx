"use client";

import { ArrowRight, Download } from "lucide-react";

export function BookPreview() {
  return (
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
                Petty Little Things names the 50 small habits that keep capable people stuck. 
                The patterns they do not notice until someone points them out. 
                The book is the entry point to The Forge System. 
                Read it first. Then do the work.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="gold-button inline-flex items-center justify-center gap-2">
                Pre-order Now
                <ArrowRight size={18} />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#0A0A0A]/20 rounded-lg text-[#0A0A0A] font-semibold hover:border-[#008E97] hover:text-[#008E97] transition-all">
                <Download size={18} />
                Download Sample Chapter
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative animate-float">
              <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-r-lg shadow-2xl bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] border-l-4 border-[#C8963E] flex flex-col items-center justify-center p-8 text-center">
                <div className="text-[#C8963E] text-sm font-bold tracking-widest mb-4">PELUMI OLAWOLE</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white font-['Fraunces'] mb-2">PETTY</h3>
                <h3 className="text-3xl md:text-4xl font-bold text-white font-['Fraunces'] mb-2">LITTLE</h3>
                <h3 className="text-3xl md:text-4xl font-bold text-white font-['Fraunces'] mb-4">THINGS</h3>
                <div className="w-16 h-1 bg-[#008E97] my-4" />
                <p className="text-white/60 text-sm">50 Habits Quietly Ruining Your Life</p>

                <div className="absolute top-8 right-8 w-12 h-12 border border-[#008E97]/30 rounded-full" />
                <div className="absolute bottom-12 left-8 w-8 h-8 bg-[#C8963E]/20 rounded-full" />
              </div>

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/20 blur-xl rounded-full" />
            </div>

            <div className="absolute top-1/4 -left-8 w-32 h-32 bg-[#008E97]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-8 w-40 h-40 bg-[#C8963E]/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}