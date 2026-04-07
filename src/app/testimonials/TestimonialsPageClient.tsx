"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, MessageSquare } from "lucide-react";

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

/* ============================================================
   COMPONENT
   ============================================================ */
export default function TestimonialsPageClient() {
  return (
    <>
      {/* ━━━━━━ HERO ━━━━━━ */}
      <section className="pt-40 pb-20 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="max-w-4xl text-center mx-auto">
            <Reveal delay={0.1}>
              <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-8">
                Trust & Testimonials
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="display-hero mb-8">
                The Verdict Of <br />
                The Visionaries.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-prose max-w-xl mx-auto">
                Discover why India's leading developers, government bodies, and international architects trust RD Models for their most ambitious projects.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ TESTIMONIAL GRID: Editorial Style ━━━━━━ */}
      <section className="py-24 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bento-card p-10 h-full flex flex-col bg-[var(--bg-paper)] hover:shadow-xl transition-shadow duration-700">
                  <div className="flex items-center gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 text-[var(--text-charcoal)] fill-[var(--text-charcoal)]" />
                    ))}
                  </div>

                  <div className="relative mb-12">
                    <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[var(--border-strong)] opacity-10" />
                    <blockquote className="text-xl font-bold text-[var(--text-charcoal)] leading-relaxed relative z-10">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="mt-auto pt-8 border-t border-[var(--border-subtle)] flex items-end justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-[var(--text-charcoal)]">{t.name}</h4>
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mt-1">{t.role}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest bg-[var(--bg-snow)] px-4 py-2 rounded-full border border-[var(--border-subtle)]">
                      <MessageSquare className="w-3 h-3" strokeWidth={1.5} />
                      {t.city}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Call to Trust */}
          <Reveal delay={0.4}>
            <div className="mt-32 text-center border-t border-[var(--border-subtle)] pt-24">
               <h3 className="display-section mb-6">Join 700+ Satisfied Clients.</h3>
               <p className="text-prose mb-12">Experience the precision that defines the modern skyline.</p>
               <div className="flex flex-wrap justify-center gap-12 opacity-40">
                  <span className="font-bold text-2xl tracking-tighter">VEDANTA</span>
                  <span className="font-bold text-2xl tracking-tighter">BUILD SKILLS</span>
                  <span className="font-bold text-2xl tracking-tighter">L&T INFRA</span>
                  <span className="font-bold text-2xl tracking-tighter">TATA</span>
               </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
