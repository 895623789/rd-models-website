"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Building2, 
  Home, 
  Factory, 
  Train, 
  Shield, 
  TreePine, 
  Layers, 
  Landmark, 
  CheckCircle, 
  Play,
  Hammer
} from "lucide-react";
import MagneticButton from "@/components/effects/MagneticButton";

/* ============================================================
   UTILITIES
   ============================================================ */
function Reveal({ children, delay = 0, y = 40 }: { children: React.ReactNode; delay?: number; y?: number }) {
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
const services = [
  { 
    slug: "architectural-scale-models", 
    icon: Building2, 
    name: "Architectural Models", 
    desc: "Precision presentation-grade masterpieces for developers and architects. We turn complex blueprints into tangible reality.", 
    features: ["Residential complexes", "Commercial towers", "Mixed-use developments"],
    colSpan: "md:col-span-8" 
  },
  { 
    slug: "industrial-factory-models", 
    icon: Factory, 
    name: "Industrial & Plant", 
    desc: "Highly detailed factory layouts and machinery visualizations for engineering and planning.", 
    features: ["Machine visualization", "Plant layouts", "Production flows"],
    colSpan: "md:col-span-4" 
  },
  { 
    slug: "railway-infrastructure-models", 
    icon: Train, 
    name: "Infrastructure & Railway", 
    desc: "Visualizing civic infrastructure—from metro systems to bridges—with extreme scale accuracy.", 
    features: ["Metro stations", "Bridge models", "Civic layouts"],
    colSpan: "md:col-span-4" 
  },
  { 
    slug: "defense-government-models", 
    icon: Shield, 
    name: "Defense & Strategic", 
    desc: "High-security facility planning and sensitive military installation models built under strict confidentiality.", 
    features: ["Case-planning", "Security visualization", "Strategic layouts"],
    colSpan: "md:col-span-8" 
  },
  { 
    slug: "landscape-site-models", 
    icon: TreePine, 
    name: "Landscape & Terrain", 
    desc: "Topographical accuracy combined with master-level greenery and water body crafting.", 
    features: ["Terrain contours", "Site planning", "Water features"],
    colSpan: "md:col-span-6" 
  },
  { 
    slug: "interior-concept-models", 
    icon: Layers, 
    name: "Interior Visualization", 
    desc: "Space planning and material exploration. A physical deep-dive into interior layouts and color schemes.", 
    features: ["Furniture layouts", "Space planning", "Finish exploration"],
    colSpan: "md:col-span-6" 
  },
];

/* ============================================================
   COMPONENT
   ============================================================ */
export default function ServicesPageClient() {
  return (
    <>
      {/* ━━━━━━ HERO ━━━━━━ */}
      <section className="pt-40 pb-24 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="max-w-4xl text-center mx-auto">
            <Reveal delay={0.1}>
              <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-8">
                Capabilities & Expertise
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="display-hero mb-8">
                We Build Visions <br />
                Into Solid Reality.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-prose max-w-2xl mx-auto">
                8 specialized domains. 10 years of precision craftsmanship. 2300+ models delivered with obsession over the smallest detail.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ BENTO SERVICES GRID ━━━━━━ */}
      <section className="py-24 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {services.map((service, i) => (
              <div key={service.slug} className={`${service.colSpan}`}>
                <Reveal delay={i * 0.1}>
                  <div className="bento-card p-10 h-full group bg-[var(--bg-paper)]">
                    <div className="flex flex-col h-full">
                      <div className="w-12 h-12 bg-[var(--bg-stone)] rounded-xl flex items-center justify-center mb-8 border border-[var(--border-subtle)] group-hover:bg-[var(--text-charcoal)] group-hover:text-white transition-all duration-500">
                        <service.icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                      <p className="text-[var(--text-slate)] text-base leading-relaxed mb-12">
                        {service.desc}
                      </p>
                      
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-10">
                          {service.features.map((f) => (
                            <span key={f} className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] bg-[var(--bg-snow)] px-3 py-2 rounded-full border border-[var(--border-subtle)]">
                              <CheckCircle className="w-2.5 h-2.5" /> {f}
                            </span>
                          ))}
                        </div>
                        
                        <Link href="/quote">
                          <MagneticButton className="btn-outline w-full md:w-auto text-xs py-3">
                            Initiate Project <ArrowRight className="w-3 h-3" />
                          </MagneticButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━ THE PROCESS (QUICK MINI SECTION) ━━━━━━ */}
      <section className="py-32 border-t border-[var(--border-subtle)] bg-[var(--bg-paper)]">
        <div className="structural-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div>
                <h2 className="display-section mb-6">Our Workflow.</h2>
                <p className="text-prose mb-12">From initial 2D CAD files to a final 3D masterpiece, our process is built on surgical precision and rigorous quality checks.</p>
                <div className="space-y-4">
                  {['Digital Blueprint Analysis', 'CNC & 3D Fabrication', 'Hand-Crafted Finishing', 'Nuclear Packaging & Global Delivery'].map((step, idx) => (
                    <div key={step} className="flex gap-4 items-center p-6 border border-[var(--border-subtle)] rounded-[var(--radius-md)] bg-[var(--bg-snow)]">
                      <span className="text-xs font-bold w-6 h-6 rounded-full bg-[var(--text-charcoal)] text-white flex items-center justify-center shrink-0">{idx + 1}</span>
                      <span className="font-bold text-[var(--text-charcoal)]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="relative aspect-square rounded-[var(--radius-lg)] bg-[var(--bg-snow)] border border-[var(--border-strong)] flex items-center justify-center overflow-hidden group">
                {/* Abstract Lines Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(17,17,17,1)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,1)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <Hammer className="w-32 h-32 text-[var(--border-strong)] group-hover:scale-110 transition-transform duration-700" strokeWidth={0.5} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
