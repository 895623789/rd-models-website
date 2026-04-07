"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  );
}

const testimonials = [
  { quote: "RD Models delivered exceptional work for our IIT Jodhpur project — a 13×23 feet model capturing 700 acres of land. They exceeded expectations and raised the bar.", name: "Manish Garg", role: "Director, PMC Buildskills Pvt Ltd", city: "Jaipur" },
  { quote: "RD models delivered us the model in less than a week's time. The precision in every aspect of the model is beyond words. Seeing the model every day inspires us to build a world-class school.", name: "Sachin Bhati", role: "Managing Director, Dhanraj School", city: "Jaipur" },
  { quote: "The model made by RD was so impressive that it was appreciated by our top management and government authorities. It's a mirror image of the actual mine.", name: "Ramshanker Sharma", role: "AGM & Mine Manager, HZL - Vedanta Limited", city: "Rajasthan" },
  { quote: "RD Models delivered exceptional 3D models for Vanshdeep Builders. Their attention to detail, professionalism, and timely delivery exceeded my expectations.", name: "Vanshdeep Builders", role: "Real Estate Developer", city: "Jaipur" },
  { quote: "I am thoroughly impressed with the model making services provided by this company. The team is highly skilled and professional in their approach.", name: "Satisfied Client", role: "Google Review", city: "India" },
  { quote: "Excellent workmanship and on-time delivery. The architectural model helped us close a major deal with investors. Highly recommended for real estate developers.", name: "Real Estate Developer", role: "Client", city: "Mumbai" },
  { quote: "The railway station model was incredibly detailed — down to the platform benches and signage. Government officials were thoroughly impressed.", name: "Government Client", role: "Railway Infrastructure", city: "Delhi" },
  { quote: "Working with RD Models was a seamless experience. Their team understood our requirements perfectly and delivered a stunning township model.", name: "Akshat Group", role: "Real Estate Developer", city: "Ahmedabad" },
];

export default function TestimonialsPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[var(--bg-atelier)]">
        <div className="absolute inset-0 bg-[var(--gradient-spotlight)] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <Reveal>
            <p className="eyebrow">Client Voices</p>
            <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
              Words That{" "}<span className="text-shimmer">Inspire Us</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="glass-card p-8 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-[var(--gold-core)] opacity-30 mb-4" />
                  <blockquote className="font-[var(--font-display)] text-lg italic text-[var(--platinum)] leading-relaxed flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-1 mb-3">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 text-[var(--gold-core)] fill-[var(--gold-core)]" />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm text-[var(--platinum)]">{t.name}</p>
                      <p className="text-xs text-[var(--silver-slate)]">{t.role}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold border border-[var(--border-gold-low)] text-[var(--gold-core)] tracking-widest uppercase">{t.city}</span>
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
