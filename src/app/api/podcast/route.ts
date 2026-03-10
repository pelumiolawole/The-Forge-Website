import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://anchor.fm/s/25456800/podcast/rss', {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    
    const xml = await res.text();
    
    // Parse the XML manually
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
    
    // Extract items
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
    
    return NextResponse.json({ episodes });
  } catch (error) {
    console.error('Podcast API error:', error);
    return NextResponse.json({ episodes: [] }, { status: 200 });
  }
}

function extractTag(xml: string, tag: string): string {
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