'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EF]">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#008E97] font-semibold tracking-wide uppercase text-sm mb-4">
              Book a Call
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A0A0A] leading-tight mb-6">
              Let's talk about what you're building
            </h1>
            <p className="text-xl text-[#0A0A0A]/70 max-w-2xl mx-auto">
              30 minutes. No pitch. Just a conversation about where you are, where you want to be, and whether The Forge System can bridge the gap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="aspect-[4/3] md:aspect-[16/9] w-full">
              <iframe
                src="https://calendly.com/olawolepelumisunday/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a discovery call"
                className="w-full h-full min-h-[600px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-white border-t border-[#0A0A0A]/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4">
              Prefer to email?
            </h2>
            <p className="text-[#0A0A0A]/70 mb-6">
              If the calendar doesn't work for your timezone or you have specific questions before booking, send a direct message.
            </p>
            <a
              href="mailto:pelumi@iicnetworks.com"
              className="inline-flex items-center px-6 py-3 border-2 border-[#008E97] text-[#008E97] font-semibold rounded-lg hover:bg-[#008E97] hover:text-white transition-all duration-200"
            >
              pelumi@iicnetworks.com
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
