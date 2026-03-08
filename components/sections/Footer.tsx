import Link from 'next/link';

const programLinks = [
  { href: "/forge-program", label: "The Forge Program" },
  { href: "/petty-audit", label: "Free Petty Audit" },
  { href: "/petty-little-things", label: "Petty Little Things" }
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/podcast", label: "Podcast" },
  { href: "/contact", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">The Forge System</h3>
            <p className="text-white/60 text-sm">
              Identity-level coaching for people who are done waiting.
            </p>
          </div>

          {/* Program Links */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-[#008E97] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-[#008E97] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">Ready to start?</h4>
            <Link
              href="/contact"
              className="inline-block bg-[#008E97] text-white px-6 py-3 rounded font-medium hover:bg-[#008E97]/90 transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 The Forge System. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white/60 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white/60 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
