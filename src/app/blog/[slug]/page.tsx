import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";

const client = createClient({
  projectId: "9f18pqec",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  body: any[];
}

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      excerpt,
      readTime,
      publishedAt,
      body
    }`,
    { slug }
  );
}

// Skip static generation - render on server
export const dynamic = "force-dynamic";

const ptComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6">{children}</p>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-serif text-white text-2xl md:text-3xl font-bold mt-12 mb-6 leading-snug">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-serif text-white text-xl md:text-2xl font-bold mt-10 mb-4 leading-snug">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#008E97] pl-6 my-8">
        <p className="font-serif text-white text-xl md:text-2xl italic font-light leading-relaxed">{children}</p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-white/85">{children}</em>
    ),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-12 md:pt-40 md:pb-16 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#008E97] text-sm hover:gap-3 transition-all mb-10"
          >
            <ArrowLeft size={16} />
            Back to Writing
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#008E97] text-xs font-semibold tracking-widest uppercase">
              {post.category}
            </span>
            {post.readTime && (
              <span className="text-white/30 text-xs">{post.readTime}</span>
            )}
          </div>

          <h1
            className="font-serif font-black text-white mb-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {post.title}
          </h1>

          <p className="text-white/60 text-base md:text-xl leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-6 text-white/30 text-sm border-t border-white/10 pt-6">
            <span>
              {post.publishedAt
                ? format(new Date(post.publishedAt), "MMMM d, yyyy")
                : ""}
            </span>
            <span>Pelumi Olawole</span>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-28 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          {post.body && post.body.length > 0 ? (
            <PortableText value={post.body} components={ptComponents} />
          ) : (
            <p className="text-white/40 italic">Content coming soon.</p>
          )}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#F0FAFB] border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-[#008E97] mb-4">Go Deeper</p>
          <h2 className="font-serif text-2xl md:text-3xl text-[#0A0A0A] font-bold mb-6">
            See where these patterns show up in your own life.
          </h2>
          <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            The Petty Audit is a free 25-question diagnostic that identifies your top 3 identity-level blockers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/petty-audit"
              className="gold-button inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Take the Free Petty Audit
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#0A0A0A]/20 rounded-lg text-[#0A0A0A] font-semibold hover:border-[#008E97] hover:text-[#008E97] transition-all w-full sm:w-auto text-sm"
            >
              Read More Essays
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}