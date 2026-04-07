"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarDays, CheckCircle, Send } from "lucide-react";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  );
}

const inputClass = "w-full bg-[var(--bg-pedestal)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-[var(--platinum)] placeholder:text-[var(--muted)] focus:border-[var(--gold-core)] focus:ring-1 focus:ring-[var(--gold-core)] outline-none transition-all";

export default function BookingPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-[var(--bg-atelier)]">
        <div className="absolute inset-0 bg-[var(--gradient-spotlight)] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <Reveal>
            <p className="eyebrow">Schedule a Meeting</p>
            <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
              Book Your{" "}<span className="text-shimmer">Consultation</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-2xl">
          <Reveal>
            <div className="glass-card p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-[var(--gold-core)] mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-[var(--platinum)] mb-2">Meeting Booked!</h3>
                  <p className="text-[var(--silver-slate)]">We&apos;ll confirm your meeting via email and WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div><label className="block text-sm text-[var(--silver-slate)] mb-2">Full Name *</label><input type="text" required className={inputClass} placeholder="Your name" /></div>
                    <div><label className="block text-sm text-[var(--silver-slate)] mb-2">Company</label><input type="text" className={inputClass} placeholder="Company" /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div><label className="block text-sm text-[var(--silver-slate)] mb-2">Email *</label><input type="email" required className={inputClass} placeholder="email@example.com" /></div>
                    <div><label className="block text-sm text-[var(--silver-slate)] mb-2">Phone *</label><input type="tel" required className={inputClass} placeholder="+91 XXXXX XXXXX" /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div><label className="block text-sm text-[var(--silver-slate)] mb-2">Preferred Date *</label><input type="date" required className={inputClass} /></div>
                    <div>
                      <label className="block text-sm text-[var(--silver-slate)] mb-2">Time Slot *</label>
                      <select required className={inputClass + " appearance-none"}>
                        <option value="">Select slot...</option>
                        <option>9:00 AM – 12:00 PM</option>
                        <option>12:00 PM – 3:00 PM</option>
                        <option>3:00 PM – 6:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--silver-slate)] mb-2">Meeting Type *</label>
                    <select required className={inputClass + " appearance-none"}>
                      <option value="">Select type...</option>
                      <option>Video Call (Google Meet / Zoom)</option>
                      <option>In-Person at Jaipur Workshop</option>
                      <option>Site Visit</option>
                    </select>
                  </div>
                  <div><label className="block text-sm text-[var(--silver-slate)] mb-2">City of Project</label><input type="text" className={inputClass} placeholder="e.g., Mumbai" /></div>
                  <div><label className="block text-sm text-[var(--silver-slate)] mb-2">Project Brief</label><textarea rows={3} className={inputClass + " resize-none"} placeholder="Tell us about your project..." /></div>
                  <button type="submit" className="btn-gold w-full"><CalendarDays className="w-4 h-4" /> Book My Meeting</button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
