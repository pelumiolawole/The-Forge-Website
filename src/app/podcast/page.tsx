import { Metadata } from 'next';
import Link from 'next/link';
import EpisodeList from './EpisodeList';

export const metadata: Metadata = {
  title: 'Influence Podcast | Coach PO',
  description: 'The Influence Podcast is a regular examination of what it takes to become a person of influence. Practical personal and business development thinking with Coach PO.',
};

async function getEpisodes() {
  try {
    // Fetch from local API route (server-side, no CORS issues)
    const res = await fetch('http://localhost:3000/api/podcast', { 
      next: { revalidate: 3600 }
    }).catch(() => null);
    
    // If localhost fails (production), try relative URL
    if (!res) {
      const prodRes = await fetch('/api/podcast', { 
        next: { revalidate: 3600 }
      });
      if (!prodRes.ok) return [];
      const data = await prodRes.json();
      return data.episodes || [];
    }
    
    if (!res.ok) return [];
    const data = await res.json();
    return data.episodes || [];
  } catch (error) {
    console.error('Failed to fetch episodes:', error);
    return [];
  }
}

// Hardcoded "Start Here" episode titles to match against
const START_HERE_TITLES = [
  'The Identity Gap: Why Most People Never Become Who They Could Be',
  'Self-Leadership Is Not Self-Help',
  'The Cost of Influence',
];

export default async function PodcastPage() {
  const episodes = await getEpisodes();
  
  // Find "Start Here" episodes from the full list
  const startHereEpisodes = START_HERE_TITLES.map(title => 
    episodes.find((ep: { title: string }) => 
      ep.title.toLowerCase().includes(title.toLowerCase())
    )
  ).filter(Boolean).slice(0, 3);
  
  // If we don't have enough matches, fill with first available episodes
  const finalStartHere = startHereEpisodes.length >= 3 
    ? startHereEpisodes 
    : [...startHereEpisodes, ...episodes.slice(0, 3 - startHereEpisodes.length)];

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* SECTION 1 — HERO with pt-36 to fix nav overlap */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-36 pb-20">
        {/* Radial gradient background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 142, 151, 0.2) 0%, transparent 60%)'
            }}
          />
        </div>
        
        <div className="relative z-10 px-6 md:px-12 text-center max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-8 tracking-tight">
            Influence Podcast
          </h1>
          
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-[#008E97] italic mb-12">
            Self-leadership. Identity. Influence.
          </p>
          
          {/* Platform buttons - pill shaped, dark */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://open.spotify.com/show/1TbCBxMDNYrZj64hcWi3Zg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#252525] transition-colors border border-[#2A2A2A]"
            >
              <svg className="w-5 h-5 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </Link>
            
            <Link
              href="https://podcasts.apple.com/ng/podcast/influence-podcast/id1520163267"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#252525] transition-colors border border-[#2A2A2A]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Apple Podcasts
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SHOW DESCRIPTION (no heading, new copy) */}
      <section className="px-6 md:px-12 lg:px-20 py-16 bg-[#0A0A0A] border-y border-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#A3A3A3] text-lg md:text-xl leading-relaxed mb-8">
            The Influence Podcast is a regular examination of what it takes to become a person of influence. Each episode delivers practical personal and business development thinking that takes the mystery out of success and puts the responsibility back where it belongs: with you. You will learn to lead yourself better, think more clearly, and build the kind of identity that produces results without needing to be forced.
          </p>
          
          <div className="flex items-center justify-center gap-6">
            <span className="text-[#6B6B6B] text-sm">Available on:</span>
            <Link
              href="https://open.spotify.com/show/1TbCBxMDNYrZj64hcWi3Zg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A3A3A3] hover:text-[#1DB954] transition-colors"
              aria-label="Spotify"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
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

      {/* SECTION 3 — EPISODE CARDS (Start Here + Latest) */}
      <EpisodeList 
        initialEpisodes={episodes} 
        startHereEpisodes={finalStartHere}
      />

      {/* SECTION 4 — CTA STRIP (dark with gold button) */}
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
            className="inline-flex items-center gap-2 bg-[#C8963E] text-[#0A0A0A] px-8 py-4 rounded-full font-medium hover:bg-[#B0852E] transition-colors"
          >
            Explore The Forge Program →
          </Link>
        </div>
      </section>
    </main>
  );
}