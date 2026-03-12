"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/book", label: "The Book" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "/podcast", label: "Podcast" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A0A0A]/70 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-[#008E97] font-bold text-2xl tracking-tight">
                Coach PO
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://calendly.com/olawolepelumisunday/30min "
                target="_blank"
                rel="noopener noreferrer"
                className="teal-button text-sm"
              >
                Book a Call
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 relative z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Full screen overlay with solid background */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Solid background */}
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        
        {/* Menu content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-[#008E97] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://calendly.com/olawolepelumisunday/30min "
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="gold-button text-center mt-4 text-lg"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}