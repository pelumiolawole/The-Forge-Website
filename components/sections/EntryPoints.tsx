'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const paths = [
  {
    title: "Free Petty Audit",
    description: "A 5-minute diagnostic that reveals which of the 50 habits quietly sabotaging your life you're actually doing.",
    price: "Free",
    cta: "Take the Audit",
    href: "/petty-audit",
    featured: false
  },
  {
    title: "The Forge Program",
    description: "12 weeks of structured identity work. Weekly coaching, daily systems, and a community of people who don't make excuses.",
    price: "£1,997",
    cta: "Apply Now",
    href: "/contact",
    featured: true
  },
  {
    title: "Book a Call",
    description: "Not sure where to start? Book a 30-minute discovery call. We'll figure out what you actually need.",
    price: "Free",
    cta: "Book Now",
    href: "/contact",
    featured: false
  }
];

export default function EntryPoints() {
  return (
    <section id="path" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
            Find Your Path
          </h2>
          <p className="text-lg text-[#0A0A0A]/70 max-w-2xl mx-auto">
            Three ways in. One way forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <motion.div
              key={index}
              className={`rounded-lg p-8 border-2 transition-all duration-300 ${
                path.featured 
                  ? 'bg-[#008E97] text-white border-[#008E97]' 
                  : 'bg-white border-[#0A0A0A]/10 hover:border-[#008E97]'
              }`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <span className={`text-sm font-bold ${
                  path.featured ? 'text-[#C8963E]' : 'text-[#008E97]'
                }`}>
                  {path.price}
                </span>
              </div>

              <h3 className={`text-2xl font-bold mb-4 ${
                path.featured ? 'text-white' : 'text-[#0A0A0A]'
              }`}>
                {path.title}
              </h3>

              <p className={`mb-8 leading-relaxed ${
                path.featured ? 'text-white/90' : 'text-[#0A0A0A]/70'
              }`}>
                {path.description}
              </p>

              <Link
                href={path.href}
                className={`block w-full text-center py-3 px-6 rounded font-semibold transition-colors ${
                  path.featured
                    ? 'bg-[#0A0A0A] text-[#C8963E] hover:bg-[#0A0A0A]/90'
                    : 'bg-[#008E97] text-white hover:bg-[#008E97]/90'
                }`}
              >
                {path.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
