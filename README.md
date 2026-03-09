# The Forge Website — pelumiolawole.com

Personal website and client acquisition platform for **Coach PO (Pelumi Olawole)** — identity coach, author, and founder of The Forge System™.

Built with Next.js 14. Deployed on Vercel. Designed to convert.

---

## What This Is

This is not a portfolio site. It is a client acquisition machine.

Every page has one job: take a stranger who found Coach PO on LinkedIn and move them one step closer to a Discovery Call, a book purchase, or entry into The Forge System™. The site is built around a single premise — the same premise behind the coaching itself — that clarity of identity drives everything downstream.

---

## Pages

| Route | Page | Primary Action |
|---|---|---|
| `/` | Home | Book Discovery Call / Take Petty Audit |
| `/about` | About | Book Discovery Call |
| `/forge-program` | The Forge Program™ | Apply / Book Call |
| `/petty-audit` | Petty Audit | Complete Audit / Enter Email |
| `/petty-little-things` | Petty Little Things (Book) | Pre-order / Free Chapter |
| `/podcast` | The Podcast | Listen / Subscribe |
| `/blog` | Blog | Read / Subscribe |
| `/blog/[slug]` | Individual Post | Read / Subscribe |
| `/contact` | Contact & Book | Book Discovery Call |

---

## The Offer Ladder

The site is architected around a six-tier offer ladder. Every page feeds into it.

| Tier | Product | Price |
|---|---|---|
| 0 | Petty Audit (free diagnostic) | Free |
| 1 | Forge Starter Kit | £47 |
| 2 | Identity Reset (4-week self-paced) | £297 |
| 3 | The Forge Program™ (12-week flagship) | £1,997 |
| 4 | Forge Intensive | £4,997 |
| 5 | Forge Private (1:1) | £9,997–£14,997 |
| 6 | Corporate Workshops | £7,500–£15,000 |

---

## Brand System

### Colors

| Token | Hex | Use |
|---|---|---|
| `brand-teal` | `#008E97` | Primary brand, buttons, links |
| `brand-gold` | `#C8963E` | CTAs, highlights, premium accents |
| `brand-dark` | `#0A0A0A` | Headlines, body text |
| `brand-off-white` | `#F7F4EF` | Page backgrounds |
| `brand-surface` | `#F0FAFB` | Teal-tinted section backgrounds |
| `brand-mid` | `#6B7280` | Subtext, secondary copy |

### Typography
- **Headlines:** Fraunces (Google Fonts, weight 700–900)
- **Body & UI:** Inter (weight 400–600)
- **Section Labels:** Inter uppercase, letter-spacing wide, teal, weight 600

### Spacing
- All sections: minimum `py-24`
- Max content width: `max-w-6xl`
- Cards: `rounded-2xl`

Brand assets and logo live in `/public/brand/`.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| CMS (Blog) | Sanity.io |
| Email & Automations | Sender.net |
| Booking | Calendly (embedded) |
| Audit PDF Generation | @react-pdf/renderer |
| Podcast | Spotify iframe embed |
| UI Icons | Lucide React |
| Date Formatting | date-fns |
| RSS Parsing | xml2js |
| Hosting | Vercel |
| Domain | pelumiolawole.com (Hostinger DNS → Vercel) |

---

## Project Structure

```
/app
  /page.tsx                        → Home
  /about/page.tsx
  /forge-program/page.tsx
  /petty-audit/page.tsx
  /petty-little-things/page.tsx
  /podcast/page.tsx
  /blog/page.tsx
  /blog/[slug]/page.tsx
  /contact/page.tsx
  /api
    /audit-submit/route.ts         → Handles Petty Audit form submission
    /subscribe/route.ts            → Sender.net email capture endpoint
    /podcast/route.ts              → RSS feed proxy (cached 1 hour)

/components
  /landing/
    /genesis/
      /Hero.tsx
      /AboutPreview.tsx
      /BookPreview.tsx
    /navigation/
      /Navigation.tsx
      /Footer.tsx
    /testimonials/
      /TestimonialsMarquee.tsx
    /podcast/
      /PodcastSection.tsx
    /worked-with/
      /SocialProof.tsx
  /ui/                             → Reusable primitives (Button, Card, Badge)
  /sections/                       → Larger page sections
  /layout/                         → Navbar, Footer

/lib
  /sanity.ts                       → Sanity client and query helpers
  /sender.ts                       → Sender.net API integration
  /audit-data.ts                   → Petty Audit questions, domains, scoring logic
  /audit-pdf.tsx                   → PDF template for audit results
  /utils.ts

/public
  /brand/                          → Logo, colour swatches
  /images/                         → Photos, book cover, og-image
  /PDFs/                           → Downloadable assets (sample chapter etc.)

/sanity
  /schemas/                        → Blog post schema, author schema

tailwind.config.ts                 → Custom brand tokens
```

---

## Key Features

### Navigation
- Transparent on load, transitions to dark with backdrop blur on scroll
- Sticky positioning
- Teal logo (`Coach PO`), white links, teal "Book a Call" CTA button
- Mobile-responsive hamburger menu

### Hero Section
- Full viewport height, dark background
- Large Fraunces headline with teal/gold accent
- Subtle noise/grain texture overlay
- Gold CTA button with shimmer effect
- Parallax scroll effect
- Animated stats counter

### Testimonials
- Two-row horizontal marquee moving in opposite directions
- Dark section background
- Cards with subtle white border
- Hover pauses scroll and scales card to 1.03 with teal border
- All 11 real client testimonials included

### Social Proof (Worked With)
- Single-row infinite marquee on dark background
- Logos in white/greyscale, reveal colour on hover

### Podcast Section
- Fetches latest episode from RSS feed server-side (cached 1 hour via ISR)
- Displays episode artwork, title, description, and embedded player
- Auto-updates when new episode publishes
- RSS Feed: `https://anchor.fm/s/25456800/podcast/rss`

### Book Preview
- Floating book cover animation
- Email capture modal gates the free sample chapter download
- Sample PDF located at `/public/PDFs/PLT_SampleChapter_v2.pdf`
- Email submitted to Sender.net group on download

### The Petty Audit
The primary lead generation tool. A free 25-question diagnostic across five identity domains.

**Domains:** Identity, Discipline, Clarity, Leadership, Performance

**Output profiles:** The Overthinker, The Performer, The Avoider, The Drifter

**Flow:**
1. Visitor completes 25 questions on `/petty-audit`
2. Submits name and email to receive results
3. Email captured and added to Sender.net nurture sequence
4. Results page shows dominant profile and top three patterns
5. PDF report generated via `@react-pdf/renderer` and sent by email
6. Soft CTA: *"Want to do something about this? Book a call."*

All questions, domain mappings, and scoring logic live in `/lib/audit-data.ts`.

---

## Environment Variables

Create a `.env.local` file in the root. Never commit this file.

```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Sender.net
SENDER_API_KEY=your_api_key
SENDER_GROUP_ID=your_group_id

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/olawolepelumisunday/30min

# Spotify
NEXT_PUBLIC_SPOTIFY_SHOW_URL=your_spotify_show_embed_url
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/pelumiolawole/The-Forge-Website
cd The-Forge-Website

# Install dependencies
npm install

# Add environment variables
cp .env.example .env.local
# Fill in your values

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

---

## Deployment

The site deploys automatically to Vercel on every push to `main`.

**Domain setup:**
1. In Vercel project settings → Domains → add `pelumiolawole.com`
2. In Hostinger DNS → update A record and CNAME to Vercel's values
3. Vercel provisions SSL automatically

**Branch strategy:**

| Branch | Environment | URL |
|---|---|---|
| `main` | Production | pelumiolawole.com |
| `dev` | Preview | auto-generated Vercel URL |

All development work happens on `dev`. Merge to `main` only when ready to go live.

---

## Launch Sequence

| Phase | What Goes Live | Target |
|---|---|---|
| Phase 1 | Home, About, Contact/Book — domain live | Week 1 |
| Phase 2 | Forge Program, Petty Little Things, Podcast | Week 2 |
| Phase 3 | Petty Audit, Blog, Email sequences | Week 3 |

LinkedIn content push begins in Phase 2. Nothing goes out until there is somewhere for traffic to land.

---

## Performance Notes

- Images unoptimized for static export — configure per deployment target as needed
- RSS feed cached for 1 hour via ISR
- Fonts loaded from Google Fonts with `display=swap`
- Animations use `transform` and `opacity` for GPU acceleration

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## The System Behind the Site

> *"You don't build a better life by doing better things. You build it by becoming a different person."*
> — Coach PO

The Forge Framework™ takes clients through three sequential phases:

- **STRIP** (Weeks 1–3) — Honest diagnosis. Who have you been?
- **FORGE** (Weeks 4–9) — Identity architecture. Who are you becoming?
- **LEAD** (Weeks 10–12) — Sustained self-leadership. Who are you now, consistently?

This website is the front door to that work.

---

## Legal

- Privacy Policy and Cookie Policy required before Petty Audit goes live (GDPR)
- ICO registration required before any email capture is active
- © 2026 Pelumi Olawole. The Forge System™ and The Forge Framework™ are proprietary.