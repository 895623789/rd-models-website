"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

/* ============================================================
   UTILITIES
   ============================================================ */
function Reveal({ children, delay = 0, y = 30 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

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
      {/* ━━━━━━ HERO ━━━━━━ */}
      <section className="pt-40 pb-20 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="max-w-4xl">
            <Reveal delay={0.1}>
              <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-8">
                Insights & Knowledge
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="display-hero mb-8">
                The Scale Model <br />
                Editorial.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-prose max-w-2xl">
                Expert perspectives on architectural craft, fabrication technology, and project visualization from the engineering team at RD Models.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ BLOG LIST ━━━━━━ */}
      <section className="py-24 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="max-w-4xl flex flex-col gap-8">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="bento-card p-10 bg-[var(--bg-paper)] hover:border-[var(--text-charcoal)] transition-all duration-500">
                    <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-6">
                       <span className="flex items-center gap-2 bg-[var(--bg-snow)] px-3 py-1 rounded-full border border-[var(--border-subtle)]">
                          <BookOpen className="w-3 h-3" /> Blog Post
                       </span>
                       <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {post.readTime}</span>
                       <span className="ml-auto">{post.date}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-[var(--text-charcoal)] mb-4 group-hover:underline transition-all">
                      {post.title}
                    </h2>
                    
                    <p className="text-[var(--text-slate)] leading-relaxed mb-8 max-w-2xl">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-charcoal)] opacity-0 group-hover:opacity-100 transition-opacity">
                       <span>Read Full Insight</span> <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Load More Placeholder */}
          <Reveal delay={0.5}>
            <div className="mt-20 text-center">
               <button className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] border-b border-[var(--border-strong)] pb-1 hover:text-[var(--text-charcoal)] hover:border-[var(--text-charcoal)] transition-all">
                  Show Previous Archives
               </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
