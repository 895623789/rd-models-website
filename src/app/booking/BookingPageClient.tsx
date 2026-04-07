"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CalendarDays, CheckCircle, Send, Clock, Video, MapPin, User, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/effects/MagneticButton";

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
   COMPONENT
   ============================================================ */
export default function BookingPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      {/* ━━━━━━ HERO ━━━━━━ */}
      <section className="pt-40 pb-20 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="max-w-4xl text-center mx-auto">
            <Reveal delay={0.1}>
              <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-8">
                Consultation Scheduling
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="display-hero mb-8">
                Secure Your <br />
                Time Slot.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-prose max-w-xl mx-auto">
                Connect with our master architects and engineers to align your project vision with our precision fabrication workflow.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ BOOKING FORM ━━━━━━ */}
      <section className="py-24 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="bento-card p-10 md:p-16 bg-[var(--bg-paper)]">
                {submitted ? (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <h3 className="display-section mb-4">Consultation Slotted.</h3>
                    <p className="text-[var(--text-muted)] text-lg">A confirmation and calendar invite have been dispatched to your email.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-10 text-xs font-bold underline uppercase tracking-widest">Schedule Another</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Full Name</label>
                          <input type="text" required placeholder="John Doe" className="w-full bg-transparent border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none transition-all" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Company</label>
                          <input type="text" placeholder="Studio" className="w-full bg-transparent border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none transition-all" />
                       </div>
                    </div>

                    {/* Schedule */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Preferred Date</label>
                          <input type="date" required className="w-full bg-transparent border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Time Slot</label>
                          <select required className="w-full bg-transparent border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none cursor-pointer appearance-none">
                             <option>09:00 - 12:00 IST</option>
                             <option>12:00 - 15:00 IST</option>
                             <option>15:00 - 18:00 IST</option>
                          </select>
                       </div>
                    </div>

                    {/* Meeting Type */}
                    <div className="space-y-6">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Engagement Format</label>
                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {[
                             { id: 'video', label: 'Video Call', icon: Video },
                             { id: 'studio', label: 'Studio Visit', icon: MapPin },
                             { id: 'site', label: 'Site Brief', icon: User },
                          ].map((type) => (
                             <label key={type.id} className="relative group cursor-pointer">
                                <input type="radio" name="meeting-type" className="peer sr-only" defaultChecked={type.id === 'video'} />
                                <div className="p-6 border border-[var(--border-strong)] rounded-[var(--radius-md)] flex flex-col items-center gap-3 peer-checked:border-[var(--text-charcoal)] peer-checked:bg-[var(--bg-snow)] transition-all">
                                   <type.icon className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--text-charcoal)] transition-colors" strokeWidth={1} />
                                   <span className="text-[10px] font-bold uppercase tracking-widest">{type.label}</span>
                                </div>
                             </label>
                          ))}
                       </div>
                    </div>

                    <div className="pt-6">
                       <MagneticButton className="btn-primary w-full py-6 text-sm uppercase tracking-widest font-bold">
                          Confirm Secure Slot <CalendarDays className="w-4 h-4 ml-2" />
                       </MagneticButton>
                    </div>

                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ FOOTNOTE ━━━━━━ */}
      <section className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-paper)]">
         <div className="structural-container text-center">
            <Reveal>
               <div className="flex justify-center gap-16">
                  <div className="text-center">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">Duration</p>
                     <p className="text-lg font-bold">30 - 45 Minutes</p>
                  </div>
                  <div className="text-center">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">Lead Analyst</p>
                     <p className="text-lg font-bold">Direct Consulting</p>
                  </div>
               </div>
            </Reveal>
         </div>
      </section>
    </>
  );
}
