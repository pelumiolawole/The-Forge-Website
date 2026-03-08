import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "About", href: "#about" },
    { label: "The Forge Program", href: "#" },
    { label: "Petty Audit", href: "#" },
    { label: "Petty Little Things", href: "#book" },
    { label: "Podcast", href: "#podcast" },
    { label: "Blog", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms and Conditions", href: "#" },
  ],
  connect: [
    { label: "Book a Discovery Call", href: "https://calendly.com/olawolepelumisunday/30min", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pelumiolawole/", external: true },
  ]
};

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-[#008E97] font-bold text-2xl tracking-tight">PO</span>
              <span className="text-white font-semibold text-lg">Pelumi Olawole</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Transforming leadership from the inside out through the FORGE methodology.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/pelumiolawole/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#008E97] hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:hello@pelumiolawole.com"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#008E97] hover:text-white transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-[#008E97] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-[#008E97] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
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
        </div>
      </div>
    </footer>
  );
}
