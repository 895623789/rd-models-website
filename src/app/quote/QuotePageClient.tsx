"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, Upload } from "lucide-react";

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

export default function QuotePageClient() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-[var(--bg-atelier)]">
        <div className="absolute inset-0 bg-[var(--gradient-spotlight)] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <Reveal>
            <p className="eyebrow">Get Your Quote</p>
            <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
              Let&apos;s Build Your{" "}<span className="text-shimmer">Vision</span>
            </h1>
            <p className="text-[var(--silver-slate)] text-lg mt-6 max-w-xl mx-auto">
              Fill in your project details and we&apos;ll get back to you within 24 hours with a custom quote.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="glass-card p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-[var(--gold-core)] mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-[var(--platinum)] mb-2">Quote Request Submitted!</h3>
                  <p className="text-[var(--silver-slate)]">Our team will reach out within 24 hours with a custom quote.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div><label className="block text-sm text-[var(--silver-slate)] mb-2">Full Name *</label><input type="text" required className={inputClass} placeholder="Your name" /></div>
                    <div><label className="block text-sm text-[var(--silver-slate)] mb-2">Company</label><input type="text" className={inputClass} placeholder="Company name" /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div><label className="block text-sm text-[var(--silver-slate)] mb-2">Email *</label><input type="email" required className={inputClass} placeholder="email@example.com" /></div>
                    <div><label className="block text-sm text-[var(--silver-slate)] mb-2">Phone *</label><input type="tel" required className={inputClass} placeholder="+91 XXXXX XXXXX" /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-[var(--silver-slate)] mb-2">Project Type *</label>
                      <select required className={inputClass + " appearance-none"}>
                        <option value="">Select type...</option>
                        <option>Architectural</option><option>Residential</option><option>Commercial / Township</option>
                        <option>Industrial / Factory</option><option>Railway / Infrastructure</option><option>Defense / Government</option>
                        <option>Landscape / Site</option><option>Interior Concept</option>
                      </select>
                    </div>
                    <div><label className="block text-sm text-[var(--silver-slate)] mb-2">City of Project</label><input type="text" className={inputClass} placeholder="e.g., Mumbai" /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-[var(--silver-slate)] mb-2">Scale Required</label>
                      <select className={inputClass + " appearance-none"}>
                        <option value="">Select scale...</option>
                        <option>1:500</option><option>1:200</option><option>1:100</option><option>1:50</option><option>Custom</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-[var(--silver-slate)] mb-2">Budget Range</label>
                      <select className={inputClass + " appearance-none"}>
                        <option value="">Select range...</option>
                        <option>₹50K – ₹1 Lakh</option><option>₹1L – ₹3 Lakhs</option><option>₹3L – ₹10 Lakhs</option><option>₹10 Lakhs+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--silver-slate)] mb-2">Special Requirements</label>
                    <div className="flex flex-wrap gap-3">
                      {["LED Lighting", "Motorized Parts", "Landscape Details", "Interior Details", "Water Features"].map((r) => (
                        <label key={r} className="flex items-center gap-2 text-sm text-[var(--silver-slate)] cursor-pointer">
                          <input type="checkbox" className="accent-[var(--gold-core)]" />{r}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div><label className="block text-sm text-[var(--silver-slate)] mb-2">Deadline</label><input type="date" className={inputClass} /></div>
                  <div><label className="block text-sm text-[var(--silver-slate)] mb-2">Project Brief</label><textarea rows={4} className={inputClass + " resize-none"} placeholder="Describe your project..." /></div>
                  <div>
                    <label className="block text-sm text-[var(--silver-slate)] mb-2">Upload Drawings / References</label>
                    <div className="border-2 border-dashed border-[var(--border-subtle)] rounded-lg p-8 text-center cursor-pointer hover:border-[var(--gold-core)]/30 transition-colors">
                      <Upload className="w-8 h-8 text-[var(--muted)] mx-auto mb-2" />
                      <p className="text-sm text-[var(--muted)]">PDF, JPG, PNG accepted (Max 10MB)</p>
                    </div>
                  </div>
                  <button type="submit" className="btn-gold w-full"><Send className="w-4 h-4" /> Submit Quote Request</button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
