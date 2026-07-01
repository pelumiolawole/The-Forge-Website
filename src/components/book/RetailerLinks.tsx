"use client";

/*
 * LOGO PLACEHOLDER INSTRUCTIONS
 * ──────────────────────────────────────────────────────────────────────────────
 * Drop PNG files into public/images/retailers/ before going live.
 * Until they are placed, each row shows the link text only (logo hides on error).
 *
 * apple-books-logo.png       → https://www.apple.com/itunes/marketing-on-music-store/identity-guidelines.html
 * barnes-noble-logo.png      → https://press.barnesandnoble.com  (Assets > Logos)
 * google-play-books-logo.png → https://partnermarketinghub.withgoogle.com  (Google Play Books logo kit)
 * amazon-logo.png            → https://press.aboutamazon.com  (Assets > Amazon Logo)
 * amazon-kindle-logo.png     → https://press.aboutamazon.com  (Assets > Kindle Logo)
 * ──────────────────────────────────────────────────────────────────────────────
 */

import { useState } from "react";
import { m, useReducedMotion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from "@/lib/motion";

type Country = { flag: string; label: string; url: string };

type SimpleRetailer = {
  kind: "simple";
  name: string;
  logo: string;
  text: string;
  url: string;
};

type MultiRetailer = {
  kind: "multi";
  name: string;
  logo: string;
  text: string;
  countries: Country[];
};

type Retailer = SimpleRetailer | MultiRetailer;

const retailers: Retailer[] = [
  {
    kind: "simple",
    name: "Apple Books",
    logo: "/images/retailers/apple-books-logo.png",
    text: "Order ebook on Apple Books",
    url: "https://books.apple.com/us/book/petty-little-things/id6784008007",
  },
  {
    kind: "simple",
    name: "Barnes & Noble",
    logo: "/images/retailers/barnes-noble-logo.svg",
    text: "Order Ebook and Paperback on Barnes & Noble",
    url: "https://www.barnesandnoble.com/w/petty-little-things-pelumi-olawole/1150473408?ean=9798182503242",
  },
  {
    kind: "simple",
    name: "Google Play Books",
    logo: "/images/retailers/google-play-books-logo.png",
    text: "Order Ebook from Google Play Books",
    url: "https://play.google.com/store/books/details?id=bMTtEQAAQBAJ&rdid=book-bMTtEQAAQBAJ&rdot=1",
  },
  {
    kind: "multi",
    name: "Amazon",
    logo: "/images/retailers/amazon-logo.png",
    text: "Order Paperback from Amazon",
    countries: [
      { flag: "🇬🇧", label: "UK",           url: "https://www.amazon.co.uk/dp/B0H4SH4C43" },
      { flag: "🇺🇸", label: "USA",          url: "https://www.amazon.com/dp/B0H4SH4C43" },
      { flag: "🇨🇦", label: "Canada",       url: "https://www.amazon.ca/dp/B0H4SH4C43" },
      { flag: "🇦🇺", label: "Australia",    url: "https://www.amazon.com.au/dp/B0H4SH4C43" },
      { flag: "🇩🇪", label: "Germany",      url: "https://www.amazon.de/dp/B0H4SH4C43" },
      { flag: "🇮🇳", label: "India",        url: "https://www.amazon.in/dp/B0H4SH4C43" },
      { flag: "🌍", label: "Rest of World", url: "https://www.amazon.com/dp/B0H4SH4C43" },
    ],
  },
  {
    kind: "multi",
    name: "Amazon Kindle",
    logo: "/images/retailers/amazon-kindle-logo.png",
    text: "Order Amazon Kindle Edition",
    countries: [
      { flag: "🇬🇧", label: "UK",           url: "https://www.amazon.co.uk/dp/B0H4J1NYBY" },
      { flag: "🇺🇸", label: "USA",          url: "https://www.amazon.com/gp/aw/d/B0H4J1NYBY" },
      { flag: "🇨🇦", label: "Canada",       url: "https://www.amazon.ca/dp/B0H4J1NYBY" },
      { flag: "🇦🇺", label: "Australia",    url: "https://www.amazon.com.au/dp/B0H4J1NYBY" },
      { flag: "🇩🇪", label: "Germany",      url: "https://www.amazon.de/dp/B0H4J1NYBY" },
      { flag: "🇮🇳", label: "India",        url: "https://www.amazon.in/dp/B0H4J1NYBY" },
      { flag: "🌍", label: "Rest of World", url: "https://www.amazon.com/gp/aw/d/B0H4J1NYBY" },
    ],
  },
];

function CountryPills({
  countries,
  onSelect,
}: {
  countries: Country[];
  onSelect: () => void;
}) {
  return (
    <m.div
      key="pills"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="flex flex-wrap gap-2 pb-4 pl-24"
    >
      {countries.map((c) => (
        <a
          key={c.label}
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onSelect}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#008e97] bg-[#f4fafb] text-[#008e97] text-xs font-medium hover:bg-[#008e97] hover:text-white transition-colors"
        >
          <span>{c.flag}</span>
          <span>{c.label}</span>
        </a>
      ))}
    </m.div>
  );
}

export function RetailerLinks() {
  const reduce = useReducedMotion();
  const [openName, setOpenName] = useState<string | null>(null);

  function toggle(name: string) {
    setOpenName((prev) => (prev === name ? null : name));
  }

  return (
    <section className="bg-white py-16 md:py-20 border-t border-[#d0e8ea]">
      <div className="max-w-[640px] mx-auto px-6">
        <m.div
          variants={staggerContainer}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <m.p
            className="text-[#008e97] text-xs font-semibold uppercase tracking-[0.18em] mb-3"
            variants={staggerItem}
          >
            Available Now
          </m.p>
          <m.h2
            className="font-['Fraunces'] font-bold text-[#0f1f20] mb-8 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", letterSpacing: "-0.01em" }}
            variants={staggerItem}
          >
            Get Your Copy
          </m.h2>

          <m.ul className="divide-y divide-[#d0e8ea]" variants={staggerContainer}>
            {retailers.map((r) => (
              <m.li key={r.name} variants={staggerItem}>
                {r.kind === "simple" ? (
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 py-4 group"
                  >
                    <span className="shrink-0 w-20 flex items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.logo}
                        alt={r.name}
                        style={{ height: 32, width: "auto", maxWidth: 80 }}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </span>
                    <span className="flex-1 text-[#3d5a5c] text-sm font-medium group-hover:text-[#008e97] transition-colors">
                      {r.text}
                    </span>
                    <ExternalLink
                      size={14}
                      className="shrink-0 text-[#b3dde0] group-hover:text-[#008e97] transition-colors"
                    />
                  </a>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => toggle(r.name)}
                      className="flex items-center gap-4 py-4 w-full group text-left"
                    >
                      <span className="shrink-0 w-20 flex items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={r.logo}
                          alt={r.name}
                          style={{ height: 32, width: "auto", maxWidth: 80 }}
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                          }}
                        />
                      </span>
                      <span
                        className={`flex-1 text-sm font-medium transition-colors ${
                          openName === r.name ? "text-[#008e97]" : "text-[#3d5a5c] group-hover:text-[#008e97]"
                        }`}
                      >
                        {r.text}
                      </span>
                      <ChevronDown
                        size={15}
                        className={`shrink-0 transition-all ${
                          openName === r.name
                            ? "text-[#008e97] rotate-180"
                            : "text-[#b3dde0] group-hover:text-[#008e97]"
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openName === r.name && (
                        <CountryPills
                          countries={r.countries}
                          onSelect={() => setOpenName(null)}
                        />
                      )}
                    </AnimatePresence>
                  </>
                )}
              </m.li>
            ))}
          </m.ul>
        </m.div>
      </div>
    </section>
  );
}
