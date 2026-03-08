'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BookStrip() {
  return (
    <section className="py-20 bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Book Cover with Float Animation */}
          <motion.div 
            className="flex-shrink-0"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-64 h-80 bg-[#008E97] rounded-lg shadow-xl flex items-center justify-center p-8">
              <div className="text-center text-white">
                <div className="text-sm font-bold mb-2 tracking-wider">PETTY LITTLE THINGS</div>
                <div className="text-xs opacity-70">50 habits quietly ruining your life</div>
                <div className="mt-8 text-xs opacity-50">Coming Soon</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
              Start with the book.
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6">
              Continue with the work.
            </h3>
            <p className="text-lg text-[#0A0A0A]/70 mb-8 max-w-xl">
              Petty Little Things names the 50 small habits that keep people stuck. 
              The Forge System changes them. Get the book when it drops. Join the waitlist now.
            </p>
            <Link
              href="/petty-little-things"
              className="inline-block bg-[#008E97] text-white px-8 py-4 rounded font-semibold text-lg hover:bg-[#008E97]/90 transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
