import { Metadata } from 'next';
import Link from 'next/link';
import EpisodeList from './EpisodeList';

export const metadata: Metadata = {
  title: 'Ripples of Influence | Coach PO',
  description: 'Practical insights on self-leadership, personal mastery, and influence. A podcast by Coach PO — Pelumi Olawole.',
};

async function getEpisodes() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/podcast`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.episodes || [];
  } catch {
    return [];
  }
}

export default async function PodcastPage() {
  const episodes = await getEpisodes();

  return (
    <main className="min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="relative px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase block mb-6">
            The Podcast
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Ripples of Influence
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-[#C8963E] italic mb-8">
            A regular examination of what it means to be a person of influence.
          </p>
          
          <p className="text-[#A3A3A3] text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Practical personal development for people who are serious about leading themselves well. No hype. No hustle culture. Just honest thinking on identity, discipline, and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://open.spotify.com/show/1TbCBxMDNYrZj64hcWi3Zg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#008E97] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#007A82] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Listen on Spotify
            </Link>
            
            <Link
              href="https://podcasts.apple.com/ng/podcast/influence-podcast/id1520163267"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#008E97] text-[#008E97] px-8 py-4 rounded-lg font-medium hover:bg-[#008E97] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Listen on Apple Podcasts
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — LATEST EPISODES */}
      <EpisodeList initialEpisodes={episodes} />

      {/* SECTION 3 — WHAT THE SHOW IS ABOUT */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase block mb-6">
            About The Show
          </span>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6">
              <p className="text-white text-lg leading-relaxed">
                Ripples of Influence started as a simple question: what does it actually take to become a person of influence?
              </p>
              <p className="text-[#A3A3A3] leading-relaxed">
                Not influence in the social media sense — follower counts and personal brand strategy. Influence in the original sense: the quiet, consistent effect that a well-led life has on everyone it touches.
              </p>
              <p className="text-[#A3A3A3] leading-relaxed">
                Each episode explores one aspect of that question — through the lens of identity, self-leadership, discipline, faith, and personal mastery. Sometimes solo. Sometimes with guests. Always practical.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-[#1A1A1A] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🎙</span>
                  <div>
                    <h3 className="text-white font-medium mb-1">Solo Episodes</h3>
                    <p className="text-[#A3A3A3] text-sm">Honest teaching on the principles that govern a well-led life.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📖</span>
                  <div>
                    <h3 className="text-white font-medium mb-1">Book Reviews</h3>
                    <p className="text-[#A3A3A3] text-sm">Key lessons from books worth your time — applied, not just summarised.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🔁</span>
                  <div>
                    <h3 className="text-white font-medium mb-1">Practical Challenges</h3>
                    <p className="text-[#A3A3A3] text-sm">Every episode ends with one thing to do. Not just think about — do.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SUBSCRIBE STRIP */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-[#F0FAFB]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-[#0A0A0A] mb-8">
            Listen wherever you get your podcasts
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://open.spotify.com/show/1TbCBxMDNYrZj64hcWi3Zg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1A1A1A] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#1DB954]"></span>
              Spotify
            </Link>
            
            <Link
              href="https://podcasts.apple.com/ng/podcast/influence-podcast/id1520163267"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1A1A1A] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Apple Podcasts
            </Link>
            
            <Link
              href="https://anchor.fm/s/25456800/podcast/rss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#008E97] text-[#008E97] px-6 py-3 rounded-lg font-medium hover:bg-[#008E97] hover:text-white transition-colors"
            >
              RSS Feed
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA STRIP */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            The podcast is where the thinking starts.
          </h2>
          <p className="text-[#A3A3A3] text-lg mb-8">
            The Forge Program is where it becomes your life.
          </p>
          <Link
            href="/forge-program"
            className="inline-flex items-center gap-2 bg-[#C8963E] text-[#0A0A0A] px-8 py-4 rounded-lg font-medium hover:bg-[#B0852E] transition-colors"
          >
            Explore The Forge Program →
          </Link>
        </div>
      </section>
    </main>
  );
}