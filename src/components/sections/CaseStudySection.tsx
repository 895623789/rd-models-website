"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Play, Clock, Zap, CheckCircle2 } from "lucide-react";
import MagneticButton from "@/components/effects/MagneticButton";

export default function CaseStudySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-white overflow-hidden">
      <div className="structural-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-[var(--bg-snow)] rounded-full border border-[var(--border-subtle)]">
                <Clock className="w-4 h-4 text-orange-500" />
                <span className="font-[var(--font-accent)] text-[10px] tracking-widest uppercase text-[var(--text-muted)]">Record Breaking Delivery</span>
              </div>
              
              <h2 className="display-section mb-6">
                From Concept to Reality <br />
                <span className="text-[var(--text-muted)]">In Just 24 Hours.</span>
              </h2>
              
              <p className="text-prose mb-10">
                When PM Narendra Modi visited the new airport, RD Models was tasked with a challenge most deemed impossible: building a high-fidelity airport scale model in identical 24 hours.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4 p-6 bg-[var(--bg-snow)] rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Zap className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Rapid Prototyping</h4>
                    <p className="text-xs text-[var(--text-slate)] leading-relaxed">Leveraging synchronized workflows across 3 workshops to work in parallel on different sections of the model.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-[var(--bg-snow)] rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Precision at Speed</h4>
                    <p className="text-xs text-[var(--text-slate)] leading-relaxed">Maintaining architectural integrity and detail under extreme time pressure using advanced CNC automation.</p>
                  </div>
                </div>
              </div>

              <a href="https://www.youtube.com/watch?v=QfpSmCgI31s" target="_blank" rel="noopener noreferrer">
                <MagneticButton className="btn-primary">
                  <Play className="w-4 h-4" /> Watch the Story
                </MagneticButton>
              </a>
            </motion.div>
          </div>

          {/* Video/Image Column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[16/9] rounded-[var(--radius-lg)] overflow-hidden shadow-2xl group cursor-pointer"
            >
              <Image 
                src="/airport-model-featured.jpg" 
                alt="Airport Model Case Study" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:bg-black/20 transition-all">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-[var(--radius-md)]">
                <p className="text-white text-xs font-bold uppercase tracking-widest">Featured Project</p>
                <p className="text-white/80 text-[10px] mt-1">Airport Terminal Model for VIP Visit</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
