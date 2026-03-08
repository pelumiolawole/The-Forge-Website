'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const headlineWords = ["You", "already", "know", "what", "to", "do.", "So", "why", "aren't", "you", "doing", "it?"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="bg-[#008E97] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            The Forge System helps you close the gap between knowing and doing. 
            No motivation. Just identity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <Link 
              href="#path"
              className="inline-block bg-[#C8963E] text-[#0A0A0A] px-8 py-4 rounded font-semibold text-lg hover:bg-[#C8963E]/90 transition-colors"
            >
              Find Your Path
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
