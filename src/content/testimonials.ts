// Single source of truth for testimonials.
// Quotes are verbatim and must never be edited — only labels, ordering,
// and tier assignment may change.
// tier 1 → homepage marquee (senior / strategic-authority register).
// tier 2 → /forge-program testimonial slot.
export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role?: string;
  initials: string;
  tier: 1 | 2;
};

export const TESTIMONIALS: Testimonial[] = [
  // ——— Tier 1 — homepage ———
  {
    id: 1,
    quote: "I lead an organisation. I thought I knew how. Working with Coach PO showed me the gap between managing people and actually leading them. That distinction changed how I run everything.",
    author: "Michael",
    role: "Non-Profit Director",
    initials: "M",
    tier: 1,
  },
  {
    id: 2,
    quote: "I wasn't burned out. I was misaligned. Coach PO helped me see the difference. Once I saw it, the balance sorted itself.",
    author: "Dansu",
    role: "Senior Manager",
    initials: "D",
    tier: 1,
  },
  {
    id: 3,
    quote: "I'm a multi-potentialite. I needed someone who wouldn't try to narrow me down but help me find the thread running through everything. Coach PO found it. Then helped me pull it.",
    author: "Angela Adeola",
    role: "HR Manager",
    initials: "AA",
    tier: 1,
  },
  {
    id: 4,
    quote: "I've watched him work for over a decade. The consistency is what gets you. Same philosophy, same depth, same results. That's not performance. That's identity.",
    author: "Olayinka Michael",
    role: "Long-term client, 10+ years",
    initials: "OM",
    tier: 1,
  },
  {
    id: 5,
    quote: "Every session left me different. Not motivated-different. Actually-see-things-differently different. The financial results followed. That's the sequence he teaches and it works.",
    author: "Ayomide Ayeni",
    initials: "AA",
    tier: 1,
  },
  {
    id: 6,
    quote: "More clarity, more precision, more joy in the work. Those aren't small things. That's the whole point of building something.",
    author: "Oluwasanmi",
    role: "Entrepreneur",
    initials: "O",
    tier: 1,
  },

  // ——— Tier 2 — /forge-program ———
  {
    id: 7,
    quote: "I had been in leadership for eight years and I did not realise how much of what I was doing was performance. The Forge helped me stop performing and start leading. The difference has been felt by everyone around me.",
    author: "Marcus T.",
    role: "Senior Director, Financial Services",
    initials: "MT",
    tier: 2,
  },
  {
    id: 8,
    quote: "I came in thinking I needed a clearer strategy. What I found out was that I had been operating from fear for years and calling it ambition. That realisation alone was worth everything.",
    author: "Adaeze O.",
    role: "Founder and CEO, Tech Startup",
    initials: "AO",
    tier: 2,
  },
  {
    id: 9,
    quote: "I came in running a farm. I left building a business. Coach PO didn't just give me advice. He changed how I saw what I was doing and what it could become.",
    author: "Eyitayo Adeleke",
    role: "Farmer / Agribusiness",
    initials: "EA",
    tier: 2,
  },
  {
    id: 10,
    quote: "He helped us build the business plan that started everything. We didn't just get a document. We got a way of thinking about the business that we still use today.",
    author: "Suprano Clothing",
    role: "CEO",
    initials: "SC",
    tier: 2,
  },
  {
    id: 11,
    quote: "I came with a brand I was half-committed to. I left fully in. That shift from hesitation to dedication is what his coaching does.",
    author: "Ma Funmi",
    role: "Young Adult Esteem Coach",
    initials: "FO",
    tier: 2,
  },
  {
    id: 12,
    quote: "Fresh out of university, no clarity, no direction. One thing came out of working with Coach PO: I knew exactly what I was building and why. That's everything at that stage.",
    author: "Oye",
    role: "Full Stack Engineer",
    initials: "O",
    tier: 2,
  },
  {
    id: 13,
    quote: "More focused. More driven. Better decisions. Revenue followed. I could give you the long version but that's the whole story.",
    author: "James",
    role: "Entrepreneur",
    initials: "J",
    tier: 2,
  },
];
