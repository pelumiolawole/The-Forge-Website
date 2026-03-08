'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EF]">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#008E97] font-semibold tracking-wide uppercase text-sm mb-4">
                About Coach PO
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A0A0A] leading-tight mb-6">
                I don't help people find themselves.
              </h1>
              <p className="text-xl text-[#0A0A0A]/80 leading-relaxed mb-8">
                I help them build who they decide to be.
              </p>
            </motion.div>

            {/* Image Placeholder - Speaking Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-[#008E97]/20 to-[#C8963E]/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-[#008E97]/30">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#008E97]/10 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#008E97]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-[#0A0A0A]/60 font-medium">Speaking Photo</p>
                  <p className="text-sm text-[#0A0A0A]/40 mt-2">Add your speaking to a room photo here</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-8">The Backstory</h2>

            <div className="space-y-6 text-[#0A0A0A]/80 leading-relaxed">
              <p>
                I grew up in Nigeria, trained as a Customer Operations professional, and spent years building systems for businesses across West Africa. I was good at it. The work was steady, the logic was clear, and the results were measurable.
              </p>

              <p>
                But I noticed something. The same people who were struggling at work were also struggling with themselves. Not because they lacked strategy. Not because they didn't know what to do. But because they kept not doing it.
              </p>

              <p>
                I moved to the UK and kept seeing the same pattern. High performers burning out. Leaders managing people they didn't know how to lead. Entrepreneurs building businesses they secretly resented. Everyone trying to outwork a problem that wasn't actually about work.
              </p>

              <p>
                That's when I stopped consulting on operations and started coaching on identity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IIC Networks Section */}
      <section className="py-20 bg-[#F0FAFB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-8">IIC Networks</h2>

            <div className="space-y-6 text-[#0A0A0A]/80 leading-relaxed">
              <p>
                I founded IIC Networks to train professionals in customer operations, project management, and business systems. Over the years, we've trained more than 5,000 people across two continents. The work was practical, the results were real, and the methodology was solid.
              </p>

              <p>
                But the deeper I went into behavioural change, the clearer it became: systems only work when the person running them is aligned with what they're actually building. You can teach someone the perfect framework. If their identity doesn't match the outcome, the framework fails.
              </p>

              <p>
                That's the gap The Forge System closes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-8">What I Actually Do</h2>

            <div className="space-y-6 text-[#0A0A0A]/80 leading-relaxed">
              <p>
                I'm not a motivational speaker. I'm not here to make you feel better about your current situation. I'm here to help you change it by changing who you're being in it.
              </p>

              <p>
                The Forge System is a 12-week identity-to-performance framework. It starts with stripping away the inherited beliefs and unconscious patterns that are running your decisions. Then we forge a new identity — one that matches what you actually want to build. Finally, we install the leadership capacity to sustain it.
              </p>

              <p>
                This isn't about finding your passion. It's about building your capacity to execute on what you've already decided matters.
              </p>
            </div>

            {/* The Three Phases */}
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {[
                {
                  phase: '01',
                  title: 'STRIP',
                  desc: 'Remove inherited patterns and unconscious defaults'
                },
                {
                  phase: '02',
                  title: 'FORGE',
                  desc: 'Build identity that matches your actual goals'
                },
                {
                  phase: '03',
                  title: 'LEAD',
                  desc: 'Sustain the work without burning out'
                }
              ].map((item, index) => (
                <div key={index} className="bg-[#F7F4EF] p-6 rounded-xl">
                  <span className="text-[#C8963E] font-bold text-sm tracking-wider">{item.phase}</span>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mt-2 mb-3">{item.title}</h3>
                  <p className="text-[#0A0A0A]/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For / Not For */}
      <section className="py-20 bg-[#0A0A0A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-[#008E97]">This is for you if...</h3>
              <ul className="space-y-4">
                {[
                  'You already know what to do, but you're not doing it',
                  'You've outgrown your current identity but haven't built the new one yet',
                  'You're tired of motivational content that doesn't change behaviour',
                  'You want systems, not inspiration',
                  'You're ready to do the actual work'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#008E97] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-[#6B7280]">This is NOT for you if...</h3>
              <ul className="space-y-4">
                {[
                  'You're looking for someone to motivate you',
                  'You want to talk about your goals without executing on them',
                  'You're not willing to examine your own patterns',
                  'You're committed to blaming circumstances',
                  'You're not ready to invest in the work'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#6B7280] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F7F4EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-6">
              Ready to build who you decide to be?
            </h2>
            <p className="text-lg text-[#0A0A0A]/70 mb-10 max-w-2xl mx-auto">
              Book a 30-minute discovery call. We'll look at where you are, where you want to be, and whether The Forge System is the right path to get you there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/olawolepelumisunday/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#008E97] text-white font-semibold rounded-lg hover:bg-[#008E97]/90 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              >
                Book a Discovery Call
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/forge-program"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0A0A0A] text-[#0A0A0A] font-semibold rounded-lg hover:bg-[#0A0A0A] hover:text-white transition-all duration-200"
              >
                Explore The Forge Program
              </Link>
            </div>
            <p className="mt-6 text-sm text-[#0A0A0A]/50">
              No pressure. No sales pitch. Just a conversation about what you're building and whether I can help.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
