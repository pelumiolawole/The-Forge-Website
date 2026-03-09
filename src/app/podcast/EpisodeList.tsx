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
}

interface EpisodeListProps {
  initialEpisodes: Episode[];
}

export default function EpisodeList({ initialEpisodes }: EpisodeListProps) {
  const [visibleCount, setVisibleCount] = useState(6);
  const episodes = initialEpisodes;
  
  const visibleEpisodes = episodes.slice(0, visibleCount);
  const hasMore = visibleCount < episodes.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, episodes.length));
  };

  const truncateDescription = (text: string, maxLength: number = 140) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#F7F4EF]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase block mb-4">
            Latest Episodes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0A0A0A]">
            Recent conversations
          </h2>
        </div>

        {episodes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#6B6B6B]">Unable to load episodes. Please check back later.</p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {visibleEpisodes.map((episode, index) => (
                <article
                  key={episode.id}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-l-4 border-transparent hover:border-[#008E97]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[#008E97] text-sm font-medium">
                        {episode.episodeNumber ? `Episode ${episode.episodeNumber}` : 'Episode'}
                      </span>
                      <span className="text-[#6B6B6B] text-sm">{episode.duration}</span>
                    </div>
                    
                    <h3 className="font-serif text-xl md:text-2xl text-[#0A0A0A] leading-tight">
                      {episode.title}
                    </h3>
                    
                    <p className="text-[#6B6B6B] text-sm">
                      {episode.pubDate}
                    </p>
                    
                    <p className="text-[#6B6B6B] leading-relaxed line-clamp-2">
                      {truncateDescription(episode.description)}
                    </p>
                    
                    <div className="pt-2 flex justify-end">
                      <Link
                        href={episode.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#008E97] font-medium text-sm hover:gap-3 transition-all"
                      >
                        Listen →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 border-2 border-[#008E97] text-[#008E97] px-8 py-3 rounded-lg font-medium hover:bg-[#008E97] hover:text-white transition-colors"
                >
                  Load more
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}