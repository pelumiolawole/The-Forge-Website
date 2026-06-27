"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about",         label: "About" },
  { href: "/book",          label: "The Book" },
  { href: "/scorecard",     label: "Scorecard" },
  { href: "/forge-program", label: "The Forge" },
  { href: "/podcast",       label: "Podcast" },
  { href: "/blog",          label: "Blog" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#d0e8ea] shadow-[0_1px_16px_rgba(0,142,151,0.06)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-16 w-64">
                <Image
                  src="/images/logo-main.png"
                  alt="Pelumi Olawole"
                  fill
                  className="object-contain object-left"
                  sizes="256px"
                  priority
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#3d5a5c] hover:text-[#008e97] text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200 hover:bg-[#e6f6f7]"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://calendly.com/olawolepelumisunday/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="teal-button text-sm ml-4"
              >
                Book a Call
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#0f1f20] p-2 relative z-50 hover:bg-[#e6f6f7] rounded-md transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
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
        <div className="absolute inset-0 bg-white" />
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
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#0f1f20] text-2xl font-medium hover:text-[#008e97] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://calendly.com/olawolepelumisunday/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="primary-button mt-4 text-base"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
