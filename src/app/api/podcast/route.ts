import { NextResponse } from 'next/server';

export const revalidate = 3600;

interface Episode {
  id: string;
  title: string;
  description: string;
  pubDate: string;
  duration: string;
  link: string;
  episodeNumber?: number;
}

export async function GET() {
  try {
    const response = await fetch('https://anchor.fm/s/25456800/podcast/rss', {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed');
    }

    const xml = await response.text();
    
    const episodes: Episode[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    
    while ((match = itemRegex.exec(xml)) !== null) {
      const itemContent = match[1];
      
      const title = extractTag(itemContent, 'title') || 'Untitled Episode';
      const description = extractTag(itemContent, 'description') || '';
      const pubDate = extractTag(itemContent, 'pubDate') || '';
      const link = extractTag(itemContent, 'link') || '';
      const duration = extractTag(itemContent, 'itunes:duration') || '';
      const episodeNum = extractTag(itemContent, 'itunes:episode');
      
      const cleanDescription = description
        .replace(/<[^>]*>/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .trim();
      
      episodes.push({
        id: link || Math.random().toString(36).substr(2, 9),
        title,
        description: cleanDescription,
        pubDate: formatDate(pubDate),
        duration: formatDuration(duration),
        link: link || 'https://open.spotify.com/show/1TbCBxMDNYrZj64hcWi3Zg',
        episodeNumber: episodeNum ? parseInt(episodeNum, 10) : undefined,
      });
    }
    
    return NextResponse.json({ episodes });
  } catch (error) {
    console.error('Podcast RSS fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch podcast episodes', episodes: [] },
      { status: 500 }
    );
  }
}

function extractTag(xml: string, tag: string): string | null {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : null;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function formatDuration(duration: string): string {
  if (!duration) return '';
  const parts = duration.split(':').map(Number);
  if (parts.length === 3) {
    return `${parts[0]}h ${parts[1]}m`;
  } else if (parts.length === 2) {
    return `${parts[0]}m ${parts[1]}s`;
  }
  return duration;
}