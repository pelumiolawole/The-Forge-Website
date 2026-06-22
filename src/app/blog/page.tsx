import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { getAllPosts } from "@/lib/posts";
import { EmailCapture } from "@/components/ui/EmailCapture";

const categories = ["All", "Identity", "Petty Patterns", "Leadership"];

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-[100dvh] bg-white">

      {/* HERO */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="section-label block mb-4">Writing</span>
          <h1
            className="font-['Fraunces'] font-black text-[#0f1f20] mt-4 mb-6 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Ideas worth sitting with.
          </h1>
          <p className="text-[#3d5a5c] text-base md:text-xl max-w-2xl leading-relaxed">
            Essays on identity, leadership, and the habits that quietly shape both. No content calendar. Written when something is worth saying.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="px-6 md:px-12 lg:px-20 pb-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium border transition-colors ${
                  i === 0
                    ? "bg-[#008e97] text-white border-[#008e97]"
                    : "bg-transparent text-[#7a9ea1] border-[#d0e8ea] hover:border-[#008e97]/50 hover:text-[#3d5a5c]"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-28 bg-white">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#b3dde0] text-lg">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block border border-[#d0e8ea] rounded-2xl overflow-hidden hover:border-[#008e97] hover:shadow-[0_4px_24px_rgba(0,142,151,0.08)] transition-all duration-300 hover:-translate-y-1"
                >
                  {post.coverImage && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[#008e97] text-xs font-semibold tracking-widest uppercase">
                        {post.category}
                      </span>
                      {post.readTime && (
                        <span className="text-[#b3dde0] text-xs">{post.readTime}</span>
                      )}
                    </div>

                    <h2 className="font-['Fraunces'] text-[#0f1f20] text-xl md:text-2xl font-bold mb-4 leading-snug group-hover:text-[#008e97] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-[#3d5a5c] text-sm md:text-base leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-[#b3dde0] text-xs">
                        {post.publishedAt
                          ? format(new Date(post.publishedAt), "MMMM yyyy")
                          : ""}
                      </span>
                      <span className="text-[#008e97] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-[#7a9ea1] text-sm">
              More essays coming. Follow on{" "}
              <a
                href="https://www.linkedin.com/in/pelumiolawole/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008e97] hover:underline"
              >
                LinkedIn
              </a>{" "}
              to get them first.
            </p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-[#0f1f20]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#008e97] mb-4">Stay in the Room</p>
          <h2 className="font-['Fraunces'] text-2xl md:text-3xl text-white font-bold mb-4">
            Essays. Thinking. The occasional hard truth.
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            No content calendar. Written when something is worth saying. Straight to your inbox.
          </p>
          <EmailCapture
            list="newsletter"
            placeholder="your@email.com"
            cta="Subscribe"
            successMessage="You're in. Watch your inbox."
            note="No spam. Unsubscribe anytime."
            theme="dark"
            className="max-w-md mx-auto"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#f4fafb] border-t border-[#d0e8ea]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">Go Deeper</p>
          <h2 className="font-['Fraunces'] text-2xl md:text-4xl text-[#0f1f20] font-bold mb-6">
            The audit is free. Start there.
          </h2>
          <p className="text-[#7a9ea1] text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            If the writing resonates, the Petty Audit will show you exactly where these patterns are showing up in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/petty-audit" className="primary-button inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              Take the Free Petty Audit
              <ArrowRight size={18} />
            </Link>
            <Link href="/book" className="ghost-button inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              Get the Book
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
