import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createClient } from "@sanity/client";
import { format } from "date-fns";

const client = createClient({
  projectId: "9f18pqec",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export const dynamic = "force-dynamic";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
}

const categories = ["All", "Identity", "Petty Patterns", "Leadership", "Foundation", "The Forge System"];

async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      category,
      excerpt,
      readTime,
      publishedAt
    }`
  );
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-[#0A0A0A]">

      {/* HERO */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-16 md:pt-40 md:pb-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase">
            Writing
          </span>
          <h1
            className="font-serif font-black text-white mt-4 mb-6 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Ideas worth sitting with.
          </h1>
          <p className="text-white/60 text-base md:text-xl max-w-2xl leading-relaxed">
            Essays on identity, leadership, and the habits that quietly shape both. No content calendar. Written when something is worth saying.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER — static display */}
      <section className="px-6 md:px-12 lg:px-20 pb-10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium border transition-colors ${
                  i === 0
                    ? "bg-[#008E97] text-white border-[#008E97]"
                    : "bg-transparent text-white/50 border-white/10 hover:border-[#008E97]/50 hover:text-white/80"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/30 text-lg">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group block border border-[#1A1A1A] rounded-2xl p-6 md:p-8 hover:border-[#008E97]/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[#008E97] text-xs font-semibold tracking-widest uppercase">
                      {post.category}
                    </span>
                    {post.readTime && (
                      <span className="text-white/30 text-xs">{post.readTime}</span>
                    )}
                  </div>

                  <h2 className="font-serif text-white text-xl md:text-2xl font-bold mb-4 leading-snug group-hover:text-[#008E97] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-white/30 text-xs">
                      {post.publishedAt
                        ? format(new Date(post.publishedAt), "MMMM yyyy")
                        : ""}
                    </span>
                    <span className="text-[#008E97] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-white/30 text-sm">
              More essays coming. Follow on{" "}
              <a
                href="https://www.linkedin.com/in/pelumiolawole/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008E97] hover:underline"
              >
                LinkedIn
              </a>{" "}
              to get them first.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#F0FAFB]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-[#008E97] mb-4">Go Deeper</p>
          <h2 className="font-serif text-2xl md:text-4xl text-[#0A0A0A] font-bold mb-6">
            The audit is free. Start there.
          </h2>
          <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            If the writing resonates, the Petty Audit will show you exactly where these patterns are showing up in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/petty-audit" className="gold-button inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              Take the Free Petty Audit
              <ArrowRight size={18} />
            </Link>
            <Link href="/book" className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#0A0A0A]/20 rounded-lg text-[#0A0A0A] font-semibold hover:border-[#008E97] hover:text-[#008E97] transition-all w-full sm:w-auto text-sm">
              Get the Book
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}