import { Headphones } from "lucide-react";
import { format } from "date-fns";

interface PodcastEpisode {
  title: string;
  description: string;
  pubDate: string;
  enclosure: { url: string; type: string };
  itunes?: { image?: string; duration?: string };
  link: string;
}

function stripCDATA(text: string): string {
  if (!text) return "";
  return text.replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "").trim();
}

async function fetchLatestEpisode(): Promise<PodcastEpisode | null> {
  try {
    const response = await fetch("https://anchor.fm/s/25456800/podcast/rss", {
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error(`RSS fetch failed: ${response.status}`);
    const xmlText = await response.text();
    const itemMatch = xmlText.match(/<item>([\s\S]*?)<\/item>/);
    if (!itemMatch) return null;
    const itemContent = itemMatch[1];
    const titleMatch = itemContent.match(/<title>([\s\S]*?)<\/title>/);
    const descMatch = itemContent.match(/<description>([\s\S]*?)<\/description>/);
    const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const enclosureMatch = itemContent.match(/<enclosure url="(.*?)"[\s\S]*?type="(.*?)"/);
    const episodeImageMatch = itemContent.match(/<itunes:image[\s\S]*?href="(.*?)"/);
    const durationMatch = itemContent.match(/<itunes:duration>([\s\S]*?)<\/itunes:duration>/);
    const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/);
    if (!titleMatch) return null;
    const rawDescription = descMatch ? descMatch[1] : "";
    const cleanDescription = stripCDATA(rawDescription).replace(/<[^>]*>/g, "").substring(0, 150) + "...";
    const showImageMatch = xmlText.match(/<itunes:image[\s\S]*?href="(.*?)"/);
    const imageUrl = episodeImageMatch ? episodeImageMatch[1] : showImageMatch ? showImageMatch[1] : undefined;
    return {
      title: stripCDATA(titleMatch[1]).trim(),
      description: cleanDescription,
      pubDate: pubDateMatch ? stripCDATA(pubDateMatch[1]).trim() : new Date().toISOString(),
      enclosure: { url: enclosureMatch ? enclosureMatch[1] : "", type: enclosureMatch ? enclosureMatch[2] : "audio/mpeg" },
      itunes: { image: imageUrl, duration: durationMatch ? stripCDATA(durationMatch[1]).trim() : undefined },
      link: linkMatch ? stripCDATA(linkMatch[1]).trim() : "https://podcasts.apple.com/ng/podcast/influence-podcast/id1520163267",
    };
  } catch (error) {
    console.error("Podcast fetch error:", error);
    return null;
  }
}

export async function PodcastSection() {
  const episode = await fetchLatestEpisode();

  const fallbackEpisode: PodcastEpisode = {
    title: "Influence Podcast",
    description: "A monthly podcast about identity, leadership, and what it actually takes to change.",
    pubDate: new Date().toISOString(),
    enclosure: { url: "", type: "audio/mpeg" },
    link: "https://podcasts.apple.com/ng/podcast/influence-podcast/id1520163267",
  };

  const displayEpisode = episode || fallbackEpisode;
  const formattedDate = displayEpisode.pubDate ? format(new Date(displayEpisode.pubDate), "MMMM d, yyyy") : "";

  return (
    <section id="podcast" className="py-16 md:py-24 bg-[#F0FAFB] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

          <div>
            <div className="section-label mb-4 text-[#008E97]">The Podcast</div>
            <h2 className="headline-lg text-[#0A0A0A] mb-6">
              Influence
              <br />
              <span className="italic">Podcast</span>
            </h2>

            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-8">
              A monthly podcast about identity, leadership, and what it actually takes to change.
              Each episode goes deeper than tactics. We talk about the patterns, the person,
              and the work underneath the work.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://podcasts.apple.com/ng/podcast/influence-podcast/id1520163267"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#008E97] transition-colors text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Apple Podcasts
              </a>
              <a
                href="https://open.spotify.com/show/1TbCBxMDNYrZj64hcWi3Zg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1DB954] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#1ed760] transition-colors text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Spotify
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#008E97]/10">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gradient-to-br from-[#008E97] to-[#C8963E] flex items-center justify-center flex-shrink-0 overflow-hidden">
                {displayEpisode.itunes?.image ? (
                  <img src={displayEpisode.itunes.image} alt="Episode artwork" className="w-full h-full object-cover" />
                ) : (
                  <Headphones className="w-10 h-10 text-white" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-xs text-[#008E97] font-semibold uppercase tracking-wider mb-2">Latest Episode</div>
                <h3 className="text-lg md:text-xl font-bold text-[#0A0A0A] mb-2 font-['Fraunces'] leading-snug">
                  {displayEpisode.title}
                </h3>
                <p className="text-[#6B7280] text-sm mb-3 line-clamp-2">{displayEpisode.description}</p>
                <div className="flex items-center gap-4 text-xs text-[#6B7280]">
                  <span>{formattedDate}</span>
                  {displayEpisode.itunes?.duration && <span>{displayEpisode.itunes.duration}</span>}
                </div>
              </div>
            </div>

            {displayEpisode.enclosure.url && (
              <div className="mt-5 md:mt-6">
                <audio controls className="w-full" src={displayEpisode.enclosure.url}>
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
