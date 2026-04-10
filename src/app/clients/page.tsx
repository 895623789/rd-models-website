"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
   CLIENT DATA (75+ Logos from rdmodels.com)
   ============================================================ */
const clientLogos = Array.from({ length: 75 }, (_, i) => ({
  id: i + 1,
  url: `https://rdmodels.com/wp-content/uploads/2026/03/${i + 1}.png`,
}));

// Manually highlighted from official list
const topClients = [
  "JDA", "CPWD", "IRCON", "RIICO", "Smart City", "Reliance", "L&T", "Adani"
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
                A Legacy of Trust
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="display-hero mb-8 text-[var(--text-charcoal)]">
                Our Prestigious <br />
                Partnerships.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-prose max-w-xl mx-auto">
                Over 12 years of excellence. Supporting the vision of 700+ government bodies and global corporate firms with museum-grade precision across 8+ national locations.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ CLIENT GRID ━━━━━━ */}
      <section className="py-24 bg-white">
        <div className="structural-container">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
            {clientLogos.map((client, i) => (
              <Reveal key={client.id} delay={(i % 20) * 0.01} y={10}>
                <div className="group border border-[var(--border-subtle)] p-6 aspect-square flex items-center justify-center transition-all duration-300 hover:bg-[var(--bg-snow)] hover:shadow-2xl relative overflow-hidden bg-white">
                  <img 
                    src={client.url} 
                    alt={`Client ${client.id}`} 
                    className="w-full h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Subtle Indicator for Important Clients (Placeholder logic) */}
                  {i < 10 && (
                    <div className="absolute top-1 right-1 w-1 h-1 bg-[var(--text-charcoal)] rounded-full opacity-20"></div>
                  )}
                </div>
              </Reveal>
            ))}
            
            {/* The "+700 More" Badge */}
            <Reveal delay={0.5}>
               <div className="p-6 bg-[var(--text-charcoal)] text-white aspect-square flex flex-col items-center justify-center text-center">
                  <h4 className="text-2xl font-bold tracking-tighter self-center">+700</h4>
                  <p className="text-[8px] font-bold uppercase tracking-widest opacity-60">Success STORIES</p>
               </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ TRUST INDICATOR ━━━━━━ */}
      <section className="py-32 border-t border-[var(--border-subtle)] bg-[var(--bg-snow)]">
         <div className="structural-container text-center">
            <Reveal>
               <h2 className="display-section mb-12 text-[var(--text-charcoal)]">Industry Leading Excellence.</h2>
               <p className="text-prose max-w-2xl mx-auto">
                 With specialized expertise in 5D CNC Carving and Vacuum Forming, we are the trusted partner for massive scale masterplans including the Mahakumbh 2025 and Museum of the Future.
               </p>
            </Reveal>
         </div>
      </section>
    </>
  );
}
