import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "About",          href: "/about" },
    { label: "The Forge Program", href: "/forge-program" },
    { label: "Petty Audit",    href: "/petty-audit" },
    { label: "Petty Little Things", href: "/book" },
    { label: "Podcast",        href: "/podcast" },
    { label: "Blog",           href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy",     href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms" },
  ],
  connect: [
    { label: "Book a Discovery Call", href: "https://calendly.com/olawolepelumisunday/30min", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pelumiolawole/", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#f4fafb] border-t border-[#d0e8ea]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative h-12 w-44">
                <Image
                  src="/images/logo-main.png"
                  alt="Pelumi Olawole"
                  fill
                  className="object-contain object-left"
                  sizes="176px"
                />
              </div>
            </Link>
            <p className="text-[#7a9ea1] text-sm leading-relaxed mb-6">
              Identity coaching for growth-driven professionals. Based in the UK. Building globally.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/pelumiolawole/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#e6f6f7] border border-[#d0e8ea] flex items-center justify-center text-[#7a9ea1] hover:bg-[#008e97] hover:text-white hover:border-[#008e97] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="mailto:coach@pelumiolawole.com"
                className="w-9 h-9 rounded-full bg-[#e6f6f7] border border-[#d0e8ea] flex items-center justify-center text-[#7a9ea1] hover:bg-[#008e97] hover:text-white hover:border-[#008e97] transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[#0f1f20] font-semibold mb-4 text-sm">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#7a9ea1] hover:text-[#008e97] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#0f1f20] font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#7a9ea1] hover:text-[#008e97] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[#0f1f20] font-semibold mb-4 text-sm">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-[#7a9ea1] hover:text-[#008e97] transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ArrowUpRight size={12} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-[#d0e8ea] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#7a9ea1] text-sm">
            &copy; {new Date().getFullYear()} Pelumi Olawole. All rights reserved.
          </p>
          <p className="text-[#b3dde0] text-xs">
            The Forge System. Identity coaching for growth-driven professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
