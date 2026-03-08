export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export interface PodcastEpisode {
  title: string;
  description: string;
  pubDate: string;
  link: string;
  enclosure: {
    url: string;
    type: string;
    length?: string;
  } | null;
  duration?: string;
  image?: string;
}

export interface PodcastData {
  title: string;
  description: string;
  image?: string;
  author?: string;
  episodes: PodcastEpisode[];
}

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}
