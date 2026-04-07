import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Architectural Model Making Insights & Guides",
  description: "Expert articles on architectural scale model making, CNC technology, 3D printing, and industry insights from RD Models India.",
};

const posts = [
  { slug: "what-is-architectural-scale-model", title: "What is an Architectural Scale Model? Complete Guide", excerpt: "Everything you need to know about architectural scale models — types, uses, materials, and how they help in project visualization.", date: "Jan 15, 2025", readTime: "8 min" },
  { slug: "best-model-maker-india", title: "Best Architectural Scale Model Makers in India 2025", excerpt: "A comprehensive guide to India's top model making companies, their technologies, and what sets them apart.", date: "Feb 02, 2025", readTime: "10 min" },
  { slug: "cnc-vs-3d-printing", title: "CNC Laser Cutting vs 3D Printing for Scale Models", excerpt: "Understanding the strengths of CNC and 3D printing technology in architectural model making.", date: "Mar 12, 2025", readTime: "7 min" },
  { slug: "scale-model-real-estate", title: "Why Real Estate Developers Need Scale Models", excerpt: "How architectural scale models boost sales, impress investors, and streamline project approvals.", date: "Mar 20, 2025", readTime: "6 min" },
  { slug: "how-to-order-scale-model", title: "How to Order a Custom Scale Model — Step by Step", excerpt: "A clear guide from initial concept to final delivery — what to expect when ordering a custom model.", date: "Apr 01, 2025", readTime: "5 min" },
  { slug: "model-making-cost-india", title: "How Much Does an Architectural Scale Model Cost in India?", excerpt: "Breaking down the pricing factors: scale, complexity, materials, timeline, and special features.", date: "Apr 10, 2025", readTime: "9 min" },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[var(--bg-atelier)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--gold-core)] mb-4">Insights & Guides</p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[var(--platinum)]">
            The RD Models <span className="bg-gradient-to-r from-[var(--gold-core)] via-[var(--gold-ambient)] to-[var(--gold-core)] bg-clip-text text-transparent">Blog</span>
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div className="glass-card p-6 md:p-8 transition-all duration-500 group-hover:border-[rgba(212,168,67,0.35)]">
                  <div className="flex items-center gap-4 text-xs text-[var(--muted)] font-[var(--font-accent)] tracking-wider uppercase mb-3">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--platinum)] group-hover:text-[var(--gold-core)] transition-colors mb-2">{post.title}</h2>
                  <p className="text-sm text-[var(--silver-slate)] leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-[var(--gold-core)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-[var(--font-accent)] tracking-wider uppercase">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
