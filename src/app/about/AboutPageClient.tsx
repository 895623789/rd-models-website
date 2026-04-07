"use client";
import { useRef } from "react";
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
  Building2,
} from "lucide-react";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

const timeline = [
  { year: "2014", event: "Founded in Jaipur by Ar. Rohitash Daiya" },
  { year: "2015", event: "First major commercial project delivered" },
  { year: "2016", event: "Expanded to Delhi workshop" },
  { year: "2018", event: "500 models milestone achieved" },
  { year: "2020", event: "Entered defense & railway sectors" },
  { year: "2021", event: "Expanded to 6 cities across India" },
  { year: "2023", event: "Serving 8+ countries internationally" },
  { year: "2024", event: "2000+ models delivered worldwide" },
  { year: "2025", event: "2300+ models · 700+ clients milestone" },
];

const team = [
  { name: "Ar. Rohitash Daiya", role: "Founder & CEO", desc: "Visionary architect who turned passion into India's premier model making studio.", icon: Award },
  { name: "CA. Avinash Daiya", role: "Chief Financial Officer", desc: "10+ years of financial expertise ensuring strategic growth.", icon: Star },
  { name: "Ar. Deeksha Vyas", role: "Chief Marketing Officer", desc: "Architect by profession, leading client relationships & marketing.", icon: Users },
  { name: "Er. Pushpkant Yadav", role: "Chief Technology Officer", desc: "Driving innovation with CNC, 3D printing & advanced fabrication.", icon: Cpu },
];

const tech = [
  { name: "CNC Laser Cutting", icon: Layers, desc: "Micron-level precision cutting for acrylic, wood & MDF" },
  { name: "CNC Milling", icon: Cog, desc: "High-speed machining for complex 3D shapes & topography" },
  { name: "5D CNC Carving", icon: Wrench, desc: "Multi-axis carving for intricate architectural details" },
  { name: "3D Printing", icon: Printer, desc: "SLA, FFF & SLS printing for ultra-fine model components" },
  { name: "3D Scanning", icon: Scan, desc: "Large-format scanning for reverse engineering & replication" },
  { name: "Hand Craftsmanship", icon: Building2, desc: "100+ artisans adding soul through manual finishing & painting" },
];

const workshops = [
  { city: "Jaipur", tag: "HQ", desc: "Head Office & Primary Workshop" },
  { city: "Delhi", tag: "NCR", desc: "Regional Workshop" },
  { city: "Mumbai", tag: "West", desc: "Regional Workshop" },
  { city: "Bengaluru", tag: "South", desc: "Regional Workshop" },
  { city: "Hyderabad", tag: "South", desc: "Regional Workshop" },
  { city: "Ahmedabad", tag: "West", desc: "Regional Workshop" },
];

export default function AboutPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[var(--bg-atelier)]">
        <div className="absolute inset-0 bg-[var(--gradient-spotlight)] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <Reveal>
            <p className="eyebrow">Know Us</p>
            <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
              The Story Behind{" "}
              <span className="text-shimmer">the Craft</span>
            </h1>
            <p className="text-[var(--silver-slate)] text-lg max-w-2xl mx-auto mt-6">
              From a small workbench in Jaipur to India&apos;s most trusted model making studio — this is the RD Models journey.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="aspect-[3/4] rounded-2xl bg-[var(--bg-pedestal)] border border-[var(--border-gold-low)] flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-20 h-20 mx-auto mb-4 text-[var(--gold-core)] opacity-20" />
                  <p className="text-sm text-[var(--muted)]">Ar. Rohitash Daiya</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <p className="eyebrow">The Founder</p>
                <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight mb-6">
                  An Architect Who Chose{" "}
                  <span className="text-gold-gradient">Hobby as a Profession</span>
                </h2>
                <blockquote className="font-[var(--font-display)] text-xl italic text-[var(--gold-ambient)] border-l-2 border-[var(--gold-core)] pl-6 mb-6">
                  &ldquo;We don&apos;t just build models — we tell stories through them.&rdquo;
                </blockquote>
                <p className="text-[var(--silver-slate)] leading-relaxed mb-4">
                  At the heart of RD Models is an architect whose love for miniature making turned into a lifelong commitment. Ar. Rohitash Daiya, a B.Arch graduate from Aayojan School of Architecture, started not in a boardroom, but at a workbench — where models came to life with patience, skill, and purpose.
                </p>
                <p className="text-[var(--silver-slate)] leading-relaxed">
                  Driven by curiosity and guided by creativity, RD Models was founded in 2014 with a bold aim: to set a new benchmark in the world of architectural model making. Every curve, every landscape, and every detail is thoughtfully crafted to reflect the soul of the structure.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-[var(--bg-atelier)]">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">Our Journey</p>
              <h2>Milestones of Excellence</h2>
              <div className="gold-divider" />
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--gold-core)] via-[var(--border-gold-low)] to-transparent" />
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.08}>
                <div className={`relative flex items-center gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--gold-core)] border-2 border-[var(--bg-atelier)] z-10" />
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <span className="font-[var(--font-accent)] text-sm font-bold text-[var(--gold-core)]">{item.year}</span>
                    <p className="text-[var(--platinum)] mt-1">{item.event}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">Our Leadership</p>
              <h2>Meet the Team</h2>
              <div className="gold-divider" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="glass-card p-6 text-center group">
                  <div className="w-20 h-20 rounded-full bg-[var(--bg-pedestal)] border border-[var(--border-gold-low)] flex items-center justify-center mx-auto mb-4 group-hover:border-[var(--border-gold-mid)] transition-colors">
                    <member.icon className="w-8 h-8 text-[var(--gold-core)] opacity-40" />
                  </div>
                  <h3 className="font-semibold text-[var(--platinum)]">{member.name}</h3>
                  <p className="text-xs text-[var(--gold-core)] font-[var(--font-accent)] tracking-wider uppercase mt-1">{member.role}</p>
                  <p className="text-sm text-[var(--silver-slate)] mt-3 leading-relaxed">{member.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="glass-card p-8 mt-8 text-center">
              <h3 className="text-2xl font-[var(--font-display)] font-bold text-[var(--platinum)]">100+</h3>
              <p className="text-[var(--silver-slate)] mt-2">Skilled craftsmen across 6 workshops bringing visions to life</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Technology */}
      <section className="section bg-[var(--bg-atelier)]">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">Our Technology</p>
              <h2>Precision at Every Scale</h2>
              <div className="gold-divider" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tech.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="glass-card p-6 group">
                  <t.icon className="w-8 h-8 text-[var(--gold-core)] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-[var(--platinum)] mb-2">{t.name}</h3>
                  <p className="text-sm text-[var(--silver-slate)] leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">Our Presence</p>
              <h2>Workshops Across India</h2>
              <div className="gold-divider" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workshops.map((w, i) => (
              <Reveal key={w.city} delay={i * 0.08}>
                <div className="glass-card p-6 flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-[var(--gold-core)] shrink-0" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-[var(--platinum)]">{w.city}</h3>
                      {w.tag === "HQ" && (
                        <span className="text-[9px] font-bold bg-[var(--gold-core)] text-[var(--bg-abyss)] px-2 py-0.5 rounded-full tracking-widest uppercase">HQ</span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--silver-slate)]">{w.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
