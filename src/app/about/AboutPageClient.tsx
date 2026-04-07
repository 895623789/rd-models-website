"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Users,
  MapPin,
  Cpu,
  Printer,
  Scan,
  Cog,
  Wrench,
  Layers,
  Star,
  Quote,
  TrendingUp,
  Globe,
  Building2,
} from "lucide-react";

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
const timeline = [
  { year: "2014", event: "Founded in Jaipur by Ar. Rohitash Daiya" },
  { year: "2016", event: "Expansion to Delhi with a dedicated workshop" },
  { year: "2018", event: "Reached milestone of 500+ successful models" },
  { year: "2020", event: "Successfully entered Defense and Infrastructure sectors" },
  { year: "2022", event: "Present in 6 cities with 100+ skilled craftsmen" },
  { year: "2024", event: "2300+ models delivered globally" },
];

const team = [
  { name: "Ar. Rohitash Daiya", role: "Founder & CEO", icon: Award, desc: "Architect by profession, craftsman by heart." },
  { name: "CA. Avinash Daiya", role: "CFO", icon: TrendingUp, desc: "Managing financial strategy and sustainable growth." },
  { name: "Ar. Deeksha Vyas", role: "CMO", icon: Globe, desc: "Leading global market reach and client relations." },
  { name: "Er. Pushpkant Yadav", role: "CTO", icon: Cpu, desc: "Innovation lead for CNC and 3D fabrication tech." },
];

const tech = [
  { name: "CNC Laser Cutting", icon: Layers, desc: "Micron-level precision for intricate components." },
  { name: "CNC Milling", icon: Cog, desc: "High-speed carving for complex 3D topography." },
  { name: "3D Printing", icon: Printer, desc: "SLA & FDM printing for ultra-fine architectural detail." },
  { name: "Hand Craftsmanship", icon: Wrench, desc: "The human touch that adds soul to every structure." },
];

const workshops = [
  { city: "Jaipur", tag: "HQ", address: "Principal Studio & R&D" },
  { city: "Delhi", tag: "NCR", address: "Regional Operations" },
  { city: "Mumbai", tag: "West", address: "Excellence Center" },
  { city: "Bengaluru", tag: "South", address: "Innovation Hub" },
  { city: "Hyderabad", tag: "South", address: "Technical Center" },
  { city: "Ahmedabad", tag: "West", address: "Operations Hub" },
];

/* ============================================================
   COMPONENT
   ============================================================ */
export default function AboutPageClient() {
  return (
    <>
      {/* ━━━━━━ HERO: Architectural & Massive ━━━━━━ */}
      <section className="pt-40 pb-24 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="max-w-4xl">
            <Reveal delay={0.1}>
              <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-8">
                The RD Models Story
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="display-hero mb-8">
                Precision in Every <br />
                Single Dimension.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-prose max-w-2xl">
                Founded on the belief that visions should be tangible. From a single workbench to India's most trusted architectural modeling studio.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ FOUNDER SECTION (REFINE) ━━━━━━ */}
      <section className="py-32 border-y border-[var(--border-subtle)] bg-[var(--bg-paper)]">
        <div className="structural-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            
            <div className="lg:col-span-5 relative">
              <Reveal>
                <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--shadow-float)] group">
                  <Image
                    src="/founder.png"
                    alt="Ar. Rohitash Daiya"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <div className="mb-12">
                  <Quote className="w-12 h-12 text-[var(--border-strong)] mb-6" strokeWidth={1} />
                  <h2 className="display-section mb-8">Architect by Training, <br />Craftsman by Choice.</h2>
                  <p className="text-prose italic mb-8 border-l-2 border-[var(--text-charcoal)] pl-6">
                    "I believe a model is the soul of an architect's vision. It's the moment where a thought becomes concrete structure."
                  </p>
                  <p className="text-[var(--text-slate)] leading-relaxed mb-6">
                    Ar. Rohitash Daiya founded RD Models in 2014 to revolutionize how architectural concepts are presented. Balancing technical precision with artistic soul, he has grown the studio from a humble Jaipur operation to a nationwide benchmark in scale modeling.
                  </p>
                  <p className="text-[var(--text-slate)] leading-relaxed">
                    Under his leadership, RD Models has served over 700+ global clients, delivering more than 2300+ masterpieces that bridge the gap between imagination and reality.
                  </p>
                </div>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* ━━━━━━ THE TIMELINE: Architectural Vertical ━━━━━━ */}
      <section className="py-32 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <Reveal>
            <div className="mb-20 text-center">
              <h2 className="display-section">The Journey.</h2>
              <div className="w-12 h-1 bg-[var(--text-charcoal)] mx-auto mt-6" />
            </div>
          </Reveal>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-[var(--border-strong)]" />
            
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.1}>
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1.5 w-[31px] h-[31px] bg-[var(--bg-snow)] border border-[var(--border-strong)] rounded-full flex items-center justify-center z-10">
                      <div className="w-1.5 h-1.5 bg-[var(--text-charcoal)] rounded-full" />
                    </div>
                    <span className="font-[var(--font-accent)] text-lg font-bold text-[var(--text-charcoal)]">{item.year}</span>
                    <p className="text-[var(--text-slate)] mt-2 text-lg">{item.event}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━ LEADERSHIP: Bento Style ━━━━━━ */}
      <section className="py-32 border-t border-[var(--border-subtle)] bg-[var(--bg-paper)]">
        <div className="structural-container">
          <Reveal>
            <div className="mb-20">
                <p className="font-[var(--font-accent)] text-xs tracking-widest uppercase text-[var(--text-muted)] mb-4">Our Core</p>
                <h2 className="display-section">The Leadership.</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="bento-card p-10 h-full group">
                  <div className="w-12 h-12 bg-[var(--bg-stone)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--text-charcoal)] group-hover:text-white transition-colors duration-500">
                    <member.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-charcoal)] mb-1">{member.name}</h3>
                  <p className="text-[var(--text-muted)] text-[10px] font-bold uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-[var(--text-slate)] text-sm leading-relaxed">{member.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━ TECH & PRESENCE ━━━━━━ */}
      <section className="py-32 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            
            {/* Tech Column */}
            <div>
              <Reveal>
                <h2 className="display-section mb-12">Precision Tools.</h2>
              </Reveal>
              <div className="grid gap-8">
                {tech.map((t, i) => (
                  <Reveal key={t.name} delay={i * 0.1}>
                    <div className="flex gap-6 items-start pb-8 border-b border-[var(--border-subtle)]">
                      <t.icon className="w-6 h-6 text-[var(--text-muted)] shrink-0" strokeWidth={1} />
                      <div>
                        <h4 className="text-lg font-bold mb-2">{t.name}</h4>
                        <p className="text-[var(--text-slate)] text-sm">{t.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Presence Column */}
            <div>
              <Reveal>
                <h2 className="display-section mb-12">Our Presence.</h2>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {workshops.map((w, i) => (
                  <Reveal key={w.city} delay={i * 0.1}>
                    <div className="bento-card p-8 bg-[var(--bg-paper)]">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold">{w.city}</h4>
                        {w.tag === "HQ" && <span className="text-[9px] font-bold px-2 py-0.5 bg-[var(--text-charcoal)] text-white rounded-full">HQ</span>}
                      </div>
                      <p className="text-[var(--text-muted)] text-sm">{w.address}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.4}>
                <div className="mt-12 p-8 border border-dashed border-[var(--border-strong)] rounded-[var(--radius-md)] flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-sm font-medium">100+ Craftsmen active across India</p>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
