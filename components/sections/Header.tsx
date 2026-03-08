'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/forge-program", label: "The Program" },
  { href: "/petty-little-things", label: "The Book" },
  { href: "/podcast", label: "Podcast" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#0A0A0A]/10 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-[#0A0A0A]">
            The Forge System
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0A0A0A]/70 hover:text-[#008E97] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#008E97] text-white px-4 py-2 rounded font-medium hover:bg-[#008E97]/90 transition-colors"
            >
              Book a Call
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-[#0A0A0A] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#0A0A0A] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#0A0A0A]"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#0A0A0A]/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#0A0A0A]/70 hover:text-[#008E97] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[#008E97] text-white px-4 py-2 rounded font-medium text-center hover:bg-[#008E97]/90 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
