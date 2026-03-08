# The Forge Website

A premium, editorial-style website for Pelumi Olawole - Leadership Coach, Author, and Creator of the FORGE Methodology.

## Brand System

### Typography
- **Headlines:** Fraunces (Google Fonts, weight 700-900)
- **Body & UI:** Inter (weight 400-600)
- **Section Labels:** Inter uppercase, letter-spacing wide, teal, weight 600

### Colors
- **Teal:** #008E97
- **Gold:** #C8963E
- **Dark:** #0A0A0A
- **Off-white:** #F7F4EF
- **Surface:** #F0FAFB
- **Mid-grey:** #6B7280

### Spacing
- All sections: minimum py-24
- Max content width: max-w-6xl
- Cards: rounded-2xl

## Features

### Hero Section
- Full viewport height with dark background
- Large Fraunces headline with teal accent
- Subtle noise/grain texture overlay
- Gold CTA button with shimmer effect
- Parallax scroll effect
- Stats counter

### Navigation
- Transparent on load, transitions to dark with backdrop blur on scroll
- Sticky positioning
- Teal logo, white links, teal "Book a Call" button
- Mobile-responsive hamburger menu

### Testimonials
- Two-row horizontal marquee moving in opposite directions
- Dark section background
- Cards with subtle white border at low opacity
- Hover pauses scroll and scales card to 1.03 with teal border
- All 11 testimonials included

### Worked With (Social Proof)
- Single row infinite marquee on dark background
- Logos in white/greyscale
- Hover reveals color

### Podcast Section
- Fetches latest episode from RSS feed server-side
- Displays episode artwork, title, description, and embedded player
- Auto-updates when new episode publishes
- RSS Feed: https://anchor.fm/s/25456800/podcast/rss

### Book Preview
- Floating book cover animation
- Feature list with gold accent bullets
- Dual CTA buttons (Pre-order + Download Sample)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Lucide React icons
- **Date Formatting:** date-fns
- **RSS Parsing:** xml2js

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pelumiolawole/onegoalclaude.git
cd onegoalclaude/forge-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static site will be generated in the `dist` folder.

## Project Structure

```
forge-site/
├── src/
│   ├── app/
│   │   ├── (landing)/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── podcast/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── landing/
│   │   │   ├── genesis/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── AboutPreview.tsx
│   │   │   │   └── BookPreview.tsx
│   │   │   ├── navigation/
│   │   │   │   ├── Navigation.tsx
│   │   │   │   └── Footer.tsx
│   │   │   ├── testimonials/
│   │   │   │   └── TestimonialsMarquee.tsx
│   │   │   ├── podcast/
│   │   │   │   └── PodcastSection.tsx
│   │   │   └── worked-with/
│   │   │       └── SocialProof.tsx
│   │   └── ui/
│   ├── lib/
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── public/
│   └── images/
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Adding Client Logos
Replace the placeholder logos in `SocialProof.tsx` with actual SVG logos:

```tsx
const clients = [
  { name: "Client Name", logo: "/images/logos/client-logo.svg" },
  // ...
];
```

### Updating Testimonials
Edit the `testimonials` array in `TestimonialsMarquee.tsx`:

```tsx
const testimonials = [
  {
    id: 1,
    quote: "Your testimonial here...",
    author: "Name",
    role: "Position, Company",
    initials: "NA"
  },
  // ...
];
```

### Changing Podcast RSS Feed
Update the RSS URL in `src/app/api/podcast/route.ts` and `src/components/landing/podcast/PodcastSection.tsx`.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy

### Static Hosting
The site is configured for static export. Upload the `dist` folder to any static hosting provider (Netlify, Cloudflare Pages, etc.).

## Performance Considerations

- Images are unoptimized for static export (configure as needed)
- RSS feed is cached for 1 hour (ISR)
- Fonts are loaded from Google Fonts with `display=swap`
- Animations use `transform` and `opacity` for GPU acceleration

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 Pelumi Olawole. All rights reserved.
