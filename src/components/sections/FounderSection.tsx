"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

export default function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[var(--bg-snow)] overflow-hidden">
      <div className="structural-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--shadow-float)] group"
            >
              <Image
                src="/founder.png"
                alt="Ar. Rohitash Daiya - Founder of RD Models"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
            
            {/* Signature Floating Detail */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 border border-[var(--border-subtle)] rounded-[var(--radius-md)] shadow-lg hidden md:block z-20"
            >
              <p className="font-[var(--font-display)] text-xl font-bold italic text-[var(--text-charcoal)]">
                Ar. Rohitash Daiya
              </p>
              <p className="text-[var(--text-muted)] text-[10px] uppercase tracking-widest mt-1">
                Founder & Visionary
              </p>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-12 h-[1px] bg-[var(--border-strong)]" />
                <span className="font-[var(--font-accent)] text-xs tracking-widest uppercase text-[var(--text-muted)]">Meet the Visionary</span>
              </div>
              
              <h2 className="display-section mb-8">
                Turning Architecture <br />
                Into Art.
              </h2>
              
              <div className="relative mb-8">
                <Quote className="absolute -top-6 -left-8 w-12 h-12 text-[var(--border-subtle)]" strokeWidth={1} />
                <p className="text-prose relative z-10">
                  What started as a childhood passion for miniature making has evolved into India's leading architectural model-making studio. As an architect, I understand that a model is not just a scale representation—it is the bridge between a vision and its physical reality.
                </p>
              </div>

              <div className="space-y-6 text-[var(--text-slate)] text-sm md:text-base leading-relaxed">
                <p>
                  Established in 2012, RD Models was born from Ar. Rohitash Daiya's commitment to pushing the boundaries of craftsmanship. From a single workshop in Jaipur, he has expanded RD Models into a nationwide name with a presence in Delhi, Bangalore, Hyderabad, and Mumbai.
                </p>
                <p>
                  His philosophy is simple: **Precision is Paramount.** Under his leadership, the team combines traditional hand-crafting techniques with cutting-edge 3D printing and CNC technology to deliver models that are unmatched in detail and accuracy.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-8">
                <div>
                  <p className="text-2xl font-bold text-[var(--text-charcoal)] tracking-tighter">10+</p>
                  <p className="text-[var(--text-muted)] text-[10px] uppercase tracking-widest">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--text-charcoal)] tracking-tighter">2300+</p>
                  <p className="text-[var(--text-muted)] text-[10px] uppercase tracking-widest">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--text-charcoal)] tracking-tighter">Partner</p>
                  <p className="text-[var(--text-muted)] text-[10px] uppercase tracking-widest">To Global Architects</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
