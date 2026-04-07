"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, UserPlus, Heart } from "lucide-react";
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

const openings = [
  { title: "Senior Architect – Model Design", location: "Jaipur", type: "Full-time", desc: "Lead the design and planning of complex architectural models. B.Arch required." },
  { title: "CNC Machine Operator", location: "Jaipur", type: "Full-time", desc: "Operate CNC laser cutting and milling machines for precision model components." },
  { title: "3D Modeler / CAD Specialist", location: "Jaipur / Remote", type: "Full-time", desc: "Create detailed 3D models in SketchUp, AutoCAD, or Rhino for fabrication." },
  { title: "Workshop Craftsman", location: "Jaipur, Delhi", type: "Full-time", desc: "Hands-on model assembly, finishing, painting, and quality control." },
  { title: "Marketing Executive", location: "Jaipur", type: "Full-time", desc: "Drive digital marketing, social media, and client acquisition strategies." },
  { title: "Internship – Architecture", location: "Jaipur", type: "Internship", desc: "6-month hands-on internship for architecture students interested in model making." },
];

export default function CareersPage() {
  return (
    <>
      {/* ━━━━━━ HERO ━━━━━━ */}
      <section className="pt-40 pb-20 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="max-w-4xl">
            <Reveal delay={0.1}>
              <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-8">
                Join the Forge
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="display-hero mb-8">
                Build The Future, <br />
                At Scale.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-prose max-w-2xl">
                We are looking for precision thinkers, architectural dreamers, and fabrication experts to join India's premier model making studio.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ OPENINGS: Bento Grid ━━━━━━ */}
      <section className="py-24 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openings.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.1}>
                <div className="bento-card p-10 h-full group bg-[var(--bg-paper)]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] bg-[var(--bg-snow)] px-3 py-1 rounded-full border border-[var(--border-subtle)]">{job.type}</span>
                       <span className="flex items-center gap-2 text-[10px] font-bold text-[var(--text-muted)] tracking-widest uppercase"><MapPin className="w-3 h-3" /> {job.location}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[var(--text-charcoal)] mb-4">{job.title}</h3>
                    <p className="text-[var(--text-slate)] leading-relaxed mb-12">
                      {job.desc}
                    </p>
                    
                    <Link href="/contact" className="mt-auto">
                      <MagneticButton className="btn-outline w-full text-xs py-4">
                        Apply for Position <ArrowRight className="w-3 h-3" />
                      </MagneticButton>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Spontaneous Application */}
          <Reveal delay={0.4}>
            <div className="mt-20 p-12 rounded-[var(--radius-lg)] border border-dashed border-[var(--border-strong)] bg-[var(--bg-paper)] text-center max-w-4xl mx-auto">
               <div className="w-16 h-16 bg-[var(--bg-snow)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserPlus className="w-6 h-6 text-[var(--text-muted)]" />
               </div>
               <h4 className="text-2xl font-bold mb-4">Don't See Your Ideal Role?</h4>
               <p className="text-[var(--text-slate)] mb-10 max-w-xl mx-auto">We are always open to meeting world-class talent in CNC, 3D printing, and hand-crafting. Send your portfolio directly to our technical team.</p>
               <a href="mailto:rdarmodels@gmail.com">
                  <MagneticButton className="btn-primary px-10 py-5 text-sm uppercase tracking-widest font-bold inline-flex items-center gap-3">
                     Open Application <Heart className="w-4 h-4" />
                  </MagneticButton>
               </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
