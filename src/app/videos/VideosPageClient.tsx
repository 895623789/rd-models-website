"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  );
}

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

export default function VideosPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[var(--bg-atelier)]">
        <div className="absolute inset-0 bg-[var(--gradient-spotlight)] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <Reveal>
            <p className="eyebrow">See Us in Action</p>
            <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
              Our Craft{" "}<span className="text-shimmer">in Motion</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Featured Video */}
          <Reveal>
            <div className="mb-12">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--border-gold-low)] bg-[var(--bg-pedestal)] group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-20 h-20 rounded-full bg-[var(--gold-core)]/20 backdrop-blur-lg border border-[var(--gold-core)]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Play className="w-8 h-8 text-[var(--gold-core)] fill-[var(--gold-core)]" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--bg-abyss)] z-10">
                  <p className="text-xs text-[var(--gold-core)] font-[var(--font-accent)] tracking-wider uppercase mb-1">Featured</p>
                  <h3 className="text-xl font-semibold text-[var(--platinum)]">{videos[0].title}</h3>
                  <p className="text-sm text-[var(--silver-slate)] mt-1">{videos[0].desc}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Video Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videos.slice(1).map((video, i) => (
              <Reveal key={video.title} delay={i * 0.08}>
                <div className="glass-card overflow-hidden group cursor-pointer">
                  <div className="relative aspect-video bg-[var(--bg-pedestal)] flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--gold-core)]/15 border border-[var(--gold-core)]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-6 h-6 text-[var(--gold-core)] fill-[var(--gold-core)]" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-[var(--platinum)] text-sm mb-1">{video.title}</h3>
                    <p className="text-xs text-[var(--silver-slate)] leading-relaxed">{video.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="text-center mt-12">
              <a href="https://www.youtube.com/@rdmodels" target="_blank" rel="noopener noreferrer" className="btn-gold">
                Visit YouTube Channel <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
