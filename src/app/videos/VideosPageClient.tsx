"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Play, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/effects/MagneticButton";

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

/* ============================================================
   DATA
   ============================================================ */
const videos = [
  { title: "RD Models — Company Showreel 2024", desc: "A cinematic walkthrough of our workshop, technology, and premium craftsmanship.", featured: true },
  { title: "IIT Jodhpur Campus Model — 700 Acres", desc: "Our largest institutional project: a 13×23 ft model of IIT Jodhpur." },
  { title: "CNC Laser Cutting Process", desc: "Watch precision CNC laser cutting transform raw material into architectural art." },
  { title: "Luxury Villa Model — Jaipur", desc: "A detailed residential villa model with LED interior lighting and landscape." },
  { title: "Defense Facility Scale Model", desc: "High-security facility model crafted for defense planning and visualization." },
  { title: "3D Printing in Model Making", desc: "How we use SLA 3D printing for ultra-fine architectural model components." },
  { title: "Township Model for Vedanta", desc: "Large-scale township model featuring roads, landscape, and building clusters." },
  { title: "Client Testimonials Compilation", desc: "Hear from Tata, L&T, Vedanta and other satisfied clients about our work." },
  { title: "Railway Station Model Process", desc: "Behind the scenes: building a detailed railway station from scratch." },
];

/* ============================================================
   COMPONENT
   ============================================================ */
export default function VideosPageClient() {
  return (
    <>
      {/* ━━━━━━ HERO ━━━━━━ */}
      <section className="pt-40 pb-20 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="max-w-4xl text-center mx-auto">
            <Reveal delay={0.1}>
              <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-8">
                Visual Showcase
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="display-hero mb-8">
                Precision <br />
                In Motion.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-prose max-w-xl mx-auto">
                Witness the surgical precision of our CNC tools and the dedicated artistry of our craftsmen through our cinematic archive.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ FEATURED SHOWREEL ━━━━━━ */}
      <section className="py-24 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <Reveal>
            <div className="relative aspect-video rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-paper)] group cursor-pointer shadow-[var(--shadow-float)]">
              {/* Abstract Video Placeholder Background */}
              <div className="absolute inset-0 bg-[var(--bg-stone)] flex items-center justify-center opacity-30">
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <MagneticButton className="w-24 h-24 rounded-full bg-white border border-[var(--border-subtle)] shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                  <Play className="w-8 h-8 text-[var(--text-charcoal)] fill-[var(--text-charcoal)]" />
                </MagneticButton>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-white/90 via-white/40 to-transparent z-10">
                <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-2">Featured Showreel</p>
                <h3 className="text-3xl font-bold text-[var(--text-charcoal)]">{videos[0].title}</h3>
                <p className="text-[var(--text-slate)] text-base mt-2 max-w-xl">{videos[0].desc}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━ VIDEO BENTO GRID ━━━━━━ */}
      <section className="py-24 bg-[var(--bg-snow)] border-t border-[var(--border-subtle)]">
        <div className="structural-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.slice(1).map((video, i) => (
              <Reveal key={video.title} delay={i * 0.1}>
                <div className="bento-card p-0 overflow-hidden group cursor-pointer h-full flex flex-col">
                  {/* Thumbnail Placeholder */}
                  <div className="aspect-video bg-[var(--bg-stone)] border-b border-[var(--border-subtle)] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(17,17,17,1)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,1)_1px,transparent_1px)] bg-[size:30px_30px]" />
                    <Play className="w-10 h-10 text-[var(--border-strong)] opacity-50 group-hover:scale-125 transition-transform duration-700" strokeWidth={1} />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 bg-white group-hover:bg-[var(--bg-snow)] transition-colors duration-500 flex-grow">
                    <h3 className="text-lg font-bold text-[var(--text-charcoal)] mb-2 line-clamp-1">{video.title}</h3>
                    <p className="text-sm text-[var(--text-slate)] leading-relaxed">{video.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Stream Internal</span> <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Social Call to Action */}
          <Reveal delay={0.4}>
            <div className="mt-20 p-12 rounded-[var(--radius-lg)] border border-[var(--border-strong)] text-center bg-[var(--bg-paper)] shadow-[var(--shadow-float)]">
              <h4 className="text-2xl font-bold mb-4">Explore More on Our Channel.</h4>
              <p className="text-[var(--text-slate)] mb-10 text-lg">Join 10k+ architects and enthusiasts on our YouTube platform.</p>
              <a href="https://www.youtube.com/@rdmodels" target="_blank" rel="noopener noreferrer">
                <MagneticButton className="btn-primary px-12 py-5 text-sm uppercase tracking-widest font-bold inline-flex items-center gap-3">
                  Visit YouTube <ExternalLink className="w-4 h-4" />
                </MagneticButton>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
