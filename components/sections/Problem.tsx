'use client';

import { motion } from 'framer-motion';

export default function Problem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The gap isn't information. It's identity.
          </motion.h2>

          <motion.p 
            className="text-lg text-[#0A0A0A]/70 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            You have read the books. You have watched the videos. You know what you should be doing. 
            But something keeps stopping you. It is not a knowledge problem. It is not a strategy problem. 
            It is an identity problem.
          </motion.p>

          <motion.p 
            className="text-lg text-[#0A0A0A]/70 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Forge System closes that gap. Not with more motivation. With better systems. 
            Not with positive thinking. with identity-level change.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
