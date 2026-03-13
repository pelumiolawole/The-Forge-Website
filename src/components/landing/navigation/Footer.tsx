import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "About", href: "/about" },
    { label: "The Forge Program", href: "/forge-program" },
    { label: "Petty Audit", href: "/petty-audit" },
    { label: "Petty Little Things", href: "/book" },
    { label: "Podcast", href: "/podcast" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms" },
  ],
  connect: [
    { label: "Book a Discovery Call", href: "https://calendly.com/olawolepelumisunday/30min", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pelumiolawole/", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative h-9 w-32">
                <Image
                  src="/images/logo-main.png"
                  alt="Pelumi Olawole"
                  fill
                  className="object-contain object-left"
                  sizes="128px"
                />
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Identity coaching for growth-driven professionals. Based in the UK. Building globally.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/pelumiolawole/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#008E97] hover:text-white transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:hello@pelumiolawole.com"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#008E97] hover:text-white transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 hover:text-[#008E97] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 hover:text-[#008E97] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/50 hover:text-[#008E97] transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ArrowUpRight size={12} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Pelumi Olawole. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            The Forge System. Identity coaching for growth-driven professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
