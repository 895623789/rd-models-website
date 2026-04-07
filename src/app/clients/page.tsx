"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Globe, Shield, Landmark, GraduationCap, Home, Factory, HardHat, Pickaxe, BookOpen } from "lucide-react";

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

const clients = [
  { name: "Tata Group", tier: "Enterprise", icon: Landmark },
  { name: "Vedanta Limited", tier: "Enterprise", icon: Factory },
  { name: "L&T (Larsen & Toubro)", tier: "Enterprise", icon: HardHat },
  { name: "Reliance Industries", tier: "Enterprise", icon: Globe },
  { name: "Godrej Properties", tier: "Enterprise", icon: Home },
  { name: "Maruti Suzuki", tier: "Enterprise", icon: Factory },
  { name: "IIT Jodhpur", tier: "Institutional", icon: GraduationCap },
  { name: "KGK Realty", tier: "Real Estate", icon: Building2 },
  { name: "Akshat Group", tier: "Real Estate", icon: Building2 },
  { name: "Ashadeep Group", tier: "Real Estate", icon: Building2 },
  { name: "Radisson Group", tier: "Hospitality", icon: Home },
  { name: "EGIS", tier: "Infrastructure", icon: Shield },
  { name: "SARAS", tier: "Government", icon: Landmark },
  { name: "Vanshdeep Builders", tier: "Real Estate", icon: Building2 },
  { name: "Ocube Architects", tier: "Architecture", icon: BookOpen },
  { name: "Atelier Asthete", tier: "Architecture", icon: BookOpen },
  { name: "PMC Buildskills", tier: "Construction", icon: HardHat },
  { name: "Dhanraj School", tier: "Education", icon: GraduationCap },
  { name: "HZL - Vedanta", tier: "Mining", icon: Pickaxe },
];

export default function ClientsPage() {
  return (
    <>
      {/* ━━━━━━ HERO ━━━━━━ */}
      <section className="pt-40 pb-20 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="max-w-4xl text-center mx-auto">
            <Reveal delay={0.1}>
              <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-8">
                Trust & Partnerships
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="display-hero mb-8">
                An Ecosystem Of <br />
                Excellence.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-prose max-w-xl mx-auto">
                Supporting the vision of India's most influential builders, institutions, and government bodies through unparalleled precision.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ CLIENT GRID ━━━━━━ */}
      <section className="py-24 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clients.map((client, i) => (
              <Reveal key={client.name} delay={i * 0.05}>
                <div className="bento-card p-8 group bg-[var(--bg-paper)] aspect-square flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-[var(--text-charcoal)]">
                  <div className="w-12 h-12 bg-[var(--bg-snow)] rounded-xl flex items-center justify-center mb-6 border border-[var(--border-subtle)] group-hover:bg-[var(--text-charcoal)] group-hover:text-white transition-all duration-500">
                    <client.icon className="w-5 h-5" strokeWidth={1} />
                  </div>
                  <h3 className="text-xs font-bold text-[var(--text-charcoal)] tracking-tight line-clamp-1">{client.name}</h3>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--text-muted)] mt-2">{client.tier}</p>
                </div>
              </Reveal>
            ))}
            
            {/* The "+700 More" Badge */}
            <Reveal delay={0.8}>
               <div className="bento-card p-8 bg-[var(--text-charcoal)] text-white aspect-square flex flex-col items-center justify-center text-center">
                  <h4 className="text-2xl font-bold">+700</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Global Clients</p>
               </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ TRUST INDICATOR ━━━━━━ */}
      <section className="py-32 border-t border-[var(--border-subtle)] bg-[var(--bg-paper)]">
         <div className="structural-container text-center">
            <Reveal>
               <h2 className="display-section mb-12">Built For The Best.</h2>
               <p className="text-prose max-w-2xl mx-auto">From 700-acre campuses to sensitive defense facilities, we have delivered more than 2300+ models that serve as the technical backbone for India's biggest architectural presentations.</p>
            </Reveal>
         </div>
      </section>
    </>
  );
}
