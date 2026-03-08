"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#008E97]/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-label mb-6 text-[#008E97]">About</div>
              
              <h2 className="headline-lg text-white mb-4">
                I spent a decade watching capable people fail.
              </h2>
              
              <h3 className="text-2xl md:text-3xl font-['Fraunces'] text-[#008E97] mb-8 italic">
                Not for lack of trying.
              </h3>
              
              <div className="space-y-6 text-[#F7F4EF]/80 text-lg leading-relaxed max-w-3xl">
                <p>
                  Not for lack of information. They failed because they were still the old version of themselves, 
                  running patterns that belonged to who they used to be.
                </p>
                
                <p>
                  I'm Pelumi Olawole. I founded IIC Networks in 2016 and have trained thousands of professionals 
                  and leaders across West Africa and the UK. The work has never really been about skills or strategies. 
                  It's always been about identity.
                </p>
                
                <p className="text-[#C8963E] font-semibold">
                  That work is now The Forge System.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#008E97] font-semibold hover:text-[#C8963E] transition-colors group"
                >
                  Read the full story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Stats/Visual Element */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-[#F7F4EF]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#008E97]/20">
                <div className="text-5xl font-['Fraunces'] font-bold text-[#008E97] mb-2">2016</div>
                <div className="text-[#F7F4EF]/60 text-sm uppercase tracking-wider">IIC Networks Founded</div>
              </div>
              
              <div className="bg-[#F7F4EF]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#C8963E]/20">
                <div className="text-5xl font-['Fraunces'] font-bold text-[#C8963E] mb-2">1000s</div>
                <div className="text-[#F7F4EF]/60 text-sm uppercase tracking-wider">Leaders Trained</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}