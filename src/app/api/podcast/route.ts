import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

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

export async function GET() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const response = await fetch('https://anchor.fm/s/25456800/podcast/rss', {
      signal: controller.signal,
      headers: {
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
      },
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.status}`);
    }

    const xml = await response.text();
    
    // Parse episodes using regex (no external dependencies)
    const episodes: Episode[] = [];
    
    // Split by item tags
    const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/gi);
    
    if (!itemMatches) {
      return NextResponse.json({ episodes: [] });
    }
    
    for (const itemXml of itemMatches) {
      const title = extractContent(itemXml, 'title');
      const description = extractContent(itemXml, 'description');
      const pubDate = extractContent(itemXml, 'pubDate');
      const link = extractContent(itemXml, 'link');
      const duration = extractContent(itemXml, 'itunes:duration') || extractContent(itemXml, 'duration');
      const episodeNum = extractContent(itemXml, 'itunes:episode');
      const image = extractAttribute(itemXml, 'itunes:image', 'href') || extractContent(itemXml, 'itunes:image');
      
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
    
    return NextResponse.json({ episodes });
  } catch (error) {
    console.error('Podcast RSS fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch podcast episodes', episodes: [] },
      { status: 200 }
    );
  }
}

function extractContent(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : '';
}

function extractAttribute(xml: string, tag: string, attr: string): string {
  const regex = new RegExp(`<${tag}[^>]*${attr}="([^"]*)"`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : '';
}

function cleanText(text: string): string {
  if (!text) return '';
  return text
    .replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
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
  const parts = duration.split(':').map(Number);
  if (parts.length === 3) {
    return `${parts[0]}h ${parts[1]}m`;
  } else if (parts.length === 2) {
    return `${parts[0]}m ${parts[1]}s`;
  }
  return duration;
}