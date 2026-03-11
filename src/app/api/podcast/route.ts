import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://anchor.fm/s/25456800/podcast/rss', {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error(`RSS fetch failed: ${res.status}`);
    }

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

    return NextResponse.json({ episodes });
  } catch (error) {
    console.error('Podcast API error:', error);
    return NextResponse.json({ episodes: [] }, { status: 200 });
  }
}

function extractTag(xml: string, tag: string): string {
  // Use non-greedy match, handle self-closing and CDATA
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
  
  // Plain seconds integer e.g. "766"
  if (/^\d+$/.test(duration.trim())) {
    const total = parseInt(duration, 10);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  }

  // HH:MM:SS or MM:SS
  const parts = duration.split(':').map(Number);
  if (parts.length === 3) return `${parts[0]}h ${parts[1]}m`;
  if (parts.length === 2) return `${parts[0]}m ${parts[1]}s`;
  return duration;
}