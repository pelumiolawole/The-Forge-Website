'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Episode {
  id: string;
  title: string;
  description: string;
  pubDate: string;
  duration: string;
  link: string;
  episodeNumber?: number;
  image?: string;
}

interface EpisodeListProps {
  initialEpisodes: Episode[];
  startHereEpisodes?: Episode[];
}

function EpisodeCard({ episode }: { episode: Episode }) {
  const truncateDescription = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const hasImage = episode.image && episode.image.length > 0;

  return (
    <article className="group bg-[#0A0A0A] rounded-2xl overflow-hidden border border-[#1A1A1A] hover:border-[#008E97] transition-all duration-300">
      {/* Image or Placeholder */}
      <div className="aspect-square relative overflow-hidden bg-[#0A0A0A]">
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={episode.image}
            alt={episode.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#0A0A0A] border-b border-[#1A1A1A]">
            <span className="font-serif text-4xl text-[#008E97]">ROI</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-lg text-white leading-tight mb-2 line-clamp-2">
          {episode.title}
        </h3>
        
        <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4 line-clamp-2">
          {truncateDescription(episode.description)}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-[#6B6B6B] text-xs">{episode.duration}</span>
          <Link
            href={episode.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#008E97] text-sm font-medium hover:gap-2 transition-all"
          >
            Listen →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function EpisodeList({ initialEpisodes, startHereEpisodes = [] }: EpisodeListProps) {
  const [visibleCount, setVisibleCount] = useState(6);
  const episodes = initialEpisodes;
  
  const visibleEpisodes = episodes.slice(0, visibleCount);
  const hasMore = visibleCount < episodes.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, episodes.length));
  };

  return (
    <div className="space-y-20 py-20">
      {/* Start Here Section */}
      {startHereEpisodes.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase block mb-2">
                Start Here
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-white">
                Episodes worth your time
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {startHereEpisodes.map((episode) => (
                <EpisodeCard key={`start-${episode.id}`} episode={episode} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Episodes Section */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase block mb-2">
              Latest Episodes
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-white">
              Recent conversations
            </h2>
          </div>

          {episodes.length === 0 ? (
            <div className="text-center py-12 border border-[#1A1A1A] rounded-2xl">
              <p className="text-[#6B6B6B] mb-2">Unable to load episodes.</p>
              <p className="text-[#4A4A4A] text-sm">Please check your connection or try again later.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleEpisodes.map((episode) => (
                  <EpisodeCard key={episode.id} episode={episode} />
                ))}
              </div>

              {hasMore && (
                <div className="mt-12 text-center">
                  <button
                    onClick={handleLoadMore}
                    className="inline-flex items-center gap-2 border-2 border-[#008E97] text-[#008E97] px-8 py-3 rounded-full font-medium hover:bg-[#008E97] hover:text-white transition-colors"
                  >
                    Load more
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}