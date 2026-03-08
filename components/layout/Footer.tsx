import Link from "next/link";

const footerLinks = {
  program: [
    { href: "/forge-program/", label: "The Forge Program" },
    { href: "/petty-audit/", label: "Free Petty Audit" },
    { href: "/petty-little-things/", label: "Petty Little Things" },
  ],
  company: [
    { href: "/about/", label: "About Coach PO" },
    { href: "/podcast/", label: "Podcast" },
    { href: "/blog/", label: "Blog" },
  ],
  legal: [
    { href: "/privacy/", label: "Privacy Policy" },
    { href: "/terms/", label: "Terms & Conditions" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-teal">Coach PO</Link>
            <p className="mt-4 text-white/60 text-sm">
              The Forge System™ — Identity coaching for growth-driven professionals.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Program</h3>
            <ul className="space-y-3">
              {footerLinks.program.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-teal transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-teal transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Get in Touch</h3>
            <p className="text-white/60 text-sm mb-4">Ready to become who your goals require?</p>
            <Link href="/contact/" className="btn-gold text-sm inline-block">Book a Discovery Call</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Coach PO. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/40 hover:text-teal transition-colors text-sm">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
