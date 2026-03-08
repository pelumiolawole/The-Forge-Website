'use client';

import { motion } from 'framer-motion';

const phases = [
  {
    number: "01",
    title: "STRIP",
    description: "Remove the habits, beliefs, and patterns that keep you stuck. Identity work starts with honest subtraction."
  },
  {
    number: "02",
    title: "FORGE",
    description: "Build new systems, structures, and standards. This is where discipline becomes automatic."
  },
  {
    number: "03",
    title: "LEAD",
    description: "Step into ownership of your results, your relationships, and your future. Lead yourself first."
  }
];

export default function Solution() {
  return (
    <section className="py-20 bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
            The Forge System
          </h2>
          <p className="text-lg text-[#0A0A0A]/70 max-w-2xl mx-auto">
            Three phases. One purpose: turn intention into identity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm border border-transparent transition-all duration-300 cursor-pointer group"
              whileHover={{ 
                y: -8,
                borderLeftColor: '#008E97',
                borderLeftWidth: '4px'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-[#008E97] text-sm font-bold mb-4">
                PHASE {phase.number}
              </div>
              <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4 group-hover:text-[#008E97] transition-colors">
                {phase.title}
              </h3>
              <p className="text-[#0A0A0A]/70 leading-relaxed">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
