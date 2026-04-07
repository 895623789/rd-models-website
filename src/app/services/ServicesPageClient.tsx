"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Building2, Home, Factory, Train, Shield, TreePine, Layers, Landmark, CheckCircle } from "lucide-react";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  );
}

const services = [
  { slug: "architectural-scale-models", icon: Building2, name: "Architectural Scale Models", desc: "Precision models for architects, developers & construction companies. From concept to presentation-grade masterpieces.", features: ["Residential complexes", "Commercial towers", "Institutional buildings", "Mixed-use developments"] },
  { slug: "residential-housing-models", icon: Home, name: "Residential & Housing Models", desc: "Luxury villas, apartment complexes, and housing society models crafted with obsessive attention to detail.", features: ["Villa models", "Apartment layouts", "Housing societies", "Interior details"] },
  { slug: "commercial-township-models", icon: Landmark, name: "Commercial & Township Models", desc: "Large-scale township models, shopping malls, business parks, and integrated commercial complexes.", features: ["Township master plans", "Shopping malls", "Business parks", "IT campus models"] },
  { slug: "industrial-factory-models", icon: Factory, name: "Industrial & Factory Models", desc: "Factory layout models, machinery visualizations, and industrial complex representations for planning.", features: ["Factory layouts", "Machinery models", "Plant visualization", "Production line models"] },
  { slug: "railway-infrastructure-models", icon: Train, name: "Railway & Infrastructure", desc: "Station designs, rail network models, metro systems, and civic infrastructure visualization.", features: ["Railway stations", "Metro systems", "Bridge models", "Infrastructure planning"] },
  { slug: "defense-government-models", icon: Shield, name: "Defense & Government", desc: "High-security facility models, military base planning, and sensitive government project visualizations.", features: ["Military facilities", "Government buildings", "Security planning", "Strategic models"] },
  { slug: "landscape-site-models", icon: TreePine, name: "Landscape & Site Models", desc: "Terrain models, vegetation layouts, water features, and complete site planning visualizations.", features: ["Terrain contours", "Site planning", "Landscape design", "Water features"] },
  { slug: "interior-concept-models", icon: Layers, name: "Interior Concept Models", desc: "Space planning, furniture layouts, color scheme visualizations, and interior design presentations.", features: ["Space planning", "Furniture layouts", "Design visualization", "Color exploration"] },
];

export default function ServicesPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[var(--bg-atelier)]">
        <div className="absolute inset-0 bg-[var(--gradient-spotlight)] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <Reveal>
            <p className="eyebrow">What We Craft</p>
            <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
              We Craft More Than Models —{" "}
              <span className="text-shimmer">We Craft Visions</span>
            </h1>
            <p className="text-[var(--silver-slate)] text-lg mt-6 max-w-2xl mx-auto">
              8 specialized service areas. Scale range from 1:20,000 to life-size 1:1. Delivered with precision using CNC, 3D printing & master craftsmanship.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-8">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.08}>
                <div className="glass-card p-8 md:p-10 grid md:grid-cols-[auto,1fr,auto] gap-8 items-center group">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--gold-core)]/8 flex items-center justify-center shrink-0 group-hover:bg-[var(--gold-core)]/15 transition-colors">
                    <service.icon className="w-7 h-7 text-[var(--gold-core)]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[var(--platinum)] mb-2">{service.name}</h2>
                    <p className="text-[var(--silver-slate)] leading-relaxed mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {service.features.map((f) => (
                        <span key={f} className="inline-flex items-center gap-1.5 text-xs text-[var(--silver-slate)] bg-[var(--bg-pedestal)] px-3 py-1.5 rounded-full border border-[var(--border-subtle)]">
                          <CheckCircle className="w-3 h-3 text-[var(--gold-core)]" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href="/quote" className="btn-ghost text-xs shrink-0">
                    Get Quote <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
