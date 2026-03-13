import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import EpisodeList from './EpisodeList';

export const metadata: Metadata = {
  title: 'Influence Podcast | Coach PO',
  description: 'The Influence Podcast is a regular examination of what it takes to become a person of influence. Practical personal and business development thinking with Coach PO.',
};

async function getEpisodes() {
  try {
    const res = await fetch('https://anchor.fm/s/25456800/podcast/rss', {
      next: { revalidate: 3600 }
    });

    if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`);

    const xml = await res.text();
    const episodes: Array<{
      id: string;
      title: string;
      description: string;
      pubDate: string;
      duration: string;
      link: string;
      episodeNumber?: number;
      image?: string;
    }> = [];

    const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/gi) || [];

    for (const itemXml of itemMatches) {
      const title = extractTag(itemXml, 'title');
      const description = extractTag(itemXml, 'description');
      const pubDate = extractTag(itemXml, 'pubDate');
      const link = extractTag(itemXml, 'link');
      const duration = extractTag(itemXml, 'itunes:duration') || extractTag(itemXml, 'duration');
      const episodeNum = extractTag(itemXml, 'itunes:episode');
      const image = extractAttribute(itemXml, 'itunes:image', 'href');

      if (title) {
        episodes.push({
          id: link || Math.random().toString(36).substr(2, 9),
          title: cleanText(title),
          description: cleanText(description),
          pubDate: formatDate(pubDate),
          duration: formatDuration(duration),
          link: link || 'https://open.spotify.com/show/1TbCBxMDNYrZj64hcWi3Zg',
          episodeNumber: episodeNum ? parseInt(episodeNum, 10) : undefined,
          image: image || undefined,
        });
      }
    }

    return episodes;
  } catch (error) {
    console.error('Failed to fetch episodes:', error);
    return [];
  }
}

function extractTag(xml: string, tag: string): string {
  const escaped = tag.replace(':', '\\:');
  const regex = new RegExp(`<${escaped}[^>]*>([\\s\\S]*?)<\\/${escaped}>`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : '';
}

function extractAttribute(xml: string, tag: string, attr: string): string {
  const escaped = tag.replace(':', '\\:');
  const regex = new RegExp(`<${escaped}[^>]*${attr}="([^"]*)"`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : '';
}

function cleanText(text: string): string {
  if (!text) return '';
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function formatDuration(duration: string): string {
  if (!duration) return '';
  if (/^\d+$/.test(duration.trim())) {
    const total = parseInt(duration, 10);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  }
  const parts = duration.split(':').map(Number);
  if (parts.length === 3) return `${parts[0]}h ${parts[1]}m`;
  if (parts.length === 2) return `${parts[0]}m ${parts[1]}s`;
  return duration;
}

const START_HERE_TITLES = [
  'The Identity Gap: Why Most People Never Become Who They Could Be',
  'Self-Leadership Is Not Self-Help',
  'The Cost of Influence',
];

export default async function PodcastPage() {
  const episodes = await getEpisodes();

  const startHereEpisodes = START_HERE_TITLES
    .map(title =>
      episodes.find((ep: { title: string }) =>
        ep.title.toLowerCase().includes(title.toLowerCase())
      )
    )
    .filter((ep): ep is NonNullable<typeof ep> => ep !== undefined && ep !== null);

  const finalStartHere = startHereEpisodes.length > 0
    ? startHereEpisodes.slice(0, 3)
    : [];

  return (
    <main className="min-h-screen bg-[#0A0A0A]">

      {/* HERO */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 142, 151, 0.2) 0%, transparent 60%)'
            }}
          />
        </div>

        <div className="relative z-10 px-6 md:px-12 text-center max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl text-white leading-none mb-6 md:mb-8 tracking-tight">
            Influence Podcast
          </h1>

          <p className="font-serif text-lg md:text-2xl lg:text-3xl text-[#008E97] italic mb-10 md:mb-12">
            Self-leadership. Identity. Influence.
          </p>

          <div className="flex flex-row gap-4 justify-center">
            <Link
              href="https://open.spotify.com/show/1TbCBxMDNYrZj64hcWi3Zg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1A1A1A] px-5 py-4 rounded-full hover:bg-[#252525] transition-colors border border-[#2A2A2A]"
              aria-label="Listen on Spotify"
            >
              <Image
                src="/images/spotify.png"
                alt="Spotify"
                width={32}
                height={32}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </Link>

            <Link
              href="https://podcasts.apple.com/ng/podcast/influence-podcast/id1520163267"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1A1A1A] px-5 py-4 rounded-full hover:bg-[#252525] transition-colors border border-[#2A2A2A]"
              aria-label="Listen on Apple Podcasts"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SHOW DESCRIPTION */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-[#0A0A0A] border-y border-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#A3A3A3] text-base md:text-xl leading-relaxed mb-8">
            A regular examination of what it takes to become a person of influence. Each episode delivers practical thinking on identity, leadership, and performance that puts the responsibility back where it belongs: with you.
          </p>

          <div className="flex items-center justify-center gap-6">
            <span className="text-[#6B6B6B] text-sm">Available on:</span>
            <Link
              href="https://open.spotify.com/show/1TbCBxMDNYrZj64hcWi3Zg"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Spotify"
            >
              <Image
                src="/images/spotify.png"
                alt="Spotify"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </Link>
            <Link
              href="https://podcasts.apple.com/ng/podcast/influence-podcast/id1520163267"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A3A3A3] hover:text-white transition-colors"
              aria-label="Apple Podcasts"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* EPISODES */}
      <EpisodeList
        initialEpisodes={episodes}
        startHereEpisodes={finalStartHere}
      />

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl text-white mb-4">
            The podcast is where the thinking starts.
          </h2>
          <p className="text-[#A3A3A3] text-base md:text-lg mb-8">
            The Forge Program is where it becomes your life.
          </p>
          <Link
            href="/forge-program"
            className="inline-flex items-center gap-2 bg-[#C8963E] text-[#0A0A0A] px-6 md:px-8 py-4 rounded-full font-medium hover:bg-[#B0852E] transition-colors"
          >
            Explore The Forge Program
          </Link>
        </div>
      </section>

    </main>
  );
}
