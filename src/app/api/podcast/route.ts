import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

// Strip CDATA wrappers
function stripCDATA(text: string): string {
  if (!text) return "";
  return text
    .replace(/<!\[CDATA\[/g, '')
    .replace(/\]\]>/g, '')
    .trim();
}

export async function GET() {
  try {
    const response = await fetch("https://anchor.fm/s/25456800/podcast/rss", {
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const xmlData = await response.text();

    // Parse XML to JSON
    const result = await parseStringPromise(xmlData, {
      explicitArray: false,
      mergeAttrs: true
    });

    const channel = result.rss.channel;
    const items = Array.isArray(channel.item) ? channel.item : [channel.item];

    const episodes = items.slice(0, 5).map((item: any) => ({
      title: stripCDATA(item.title),
      description: stripCDATA(item.description),
      pubDate: item.pubDate,
      link: item.link,
      enclosure: item.enclosure ? {
        url: item.enclosure.url,
        type: item.enclosure.type,
        length: item.enclosure.length
      } : null,
      duration: item["itunes:duration"] || null,
      // Episode-level image takes priority over show-level
      image: item["itunes:image"]?.href || channel["itunes:image"]?.href || null
    }));

    return NextResponse.json({
      success: true,
      podcast: {
        title: stripCDATA(channel.title),
        description: stripCDATA(channel.description),
        image: channel["itunes:image"]?.href,
        author: channel["itunes:author"],
        episodes
      }
    });

  } catch (error) {
    console.error("Podcast fetch error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch podcast data",
        message: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}