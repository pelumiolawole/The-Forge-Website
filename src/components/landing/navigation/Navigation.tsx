"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/book", label: "The Book" },
  { href: "/forge-program", label: "The Forge" },
  { href: "/podcast", label: "Podcast" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
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

            {/* Logo — signature image, generous container */}
            <Link href="/" className="flex items-center">
              <div className="relative h-25 w-80">
                <Image
                  src="/images/logo-main.png"
                  alt="Pelumi Olawole"
                  fill
                  className="object-contain object-left"
                  sizes="208px"
                  priority
                />
              </div>
            </Link>

            {/* Desktop nav */}
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
                href="https://calendly.com/olawolepelumisunday/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="teal-button text-sm"
              >
                Book a Call
              </a>
            </div>

            {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
          {/* Logo in mobile menu */}
          <div className="relative h-14 w-52 mb-12">
            <Image
              src="/images/logo-main.png"
              alt="Pelumi Olawole"
              fill
              className="object-contain"
              sizes="208px"
            />
          </div>
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
              href="https://calendly.com/olawolepelumisunday/30min"
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

