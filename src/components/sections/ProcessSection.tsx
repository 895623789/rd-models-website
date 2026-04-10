"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Layout, Hammer, Sparkles } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="w-10 h-10" />,
    title: "Concept",
    desc: "We begin with your architectural vision, analyzing blueprints and design intent to define the perfect scale and detail level.",
    color: "bg-blue-50"
  },
  {
    icon: <Layout className="w-10 h-10" />,
    title: "Planning",
    desc: "Precise digital mapping and resource allocation. We synchronize our 6 national workshops to ensure parallel production.",
    color: "bg-indigo-50"
  },
  {
    icon: <Hammer className="w-10 h-10" />,
    title: "Building",
    desc: "The core phase where traditional craftsmanship meets CNC precision, 3D printing, and high-fidelity finishing.",
    color: "bg-orange-50"
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Masterpiece",
    desc: "Rigorous quality checks and final detailing. The model is delivered as a museum-grade architectural masterpiece.",
    color: "bg-green-50"
  }
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[var(--bg-paper)] overflow-hidden">
      <div className="structural-container">
        <div className="mb-20">
          <p className="font-[var(--font-accent)] text-xs tracking-widest uppercase text-[var(--text-muted)] mb-4">Our Methodology</p>
          <h2 className="display-section">From Concept to Masterpiece.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 relative">
          {/* Horizontal line for desktop */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--border-subtle)] hidden lg:block -translate-y-1/2" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative z-10 p-10 bg-white border border-[var(--border-subtle)] hover:bg-[var(--bg-snow)] transition-colors group"
            >
              <div className={`w-20 h-20 ${step.color} rounded-[var(--radius-md)] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] font-bold text-[var(--text-muted)] mb-2">PHASE 0{i + 1}</p>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-sm text-[var(--text-slate)] leading-relaxed">{step.desc}</p>
              
              {/* Connector dot */}
              <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-[var(--border-subtle)] hidden lg:block -translate-y-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
