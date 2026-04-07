"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Upload, ArrowRight, Layers, Target, Clock, Wallet } from "lucide-react";
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
export default function QuotePageClient() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Extract values
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      category: formData.get('category'),
      scale: formData.get('scale'),
      timeline: formData.get('timeline'),
      mission: formData.get('mission'),
      hardware: Array.from(formData.getAll('hardware')).join(', ')
    };

    // Construct WhatsApp Message
    const text = `*New Quote Request - RD Models*%0A%0A` +
      `*Identity:* ${data.name} (${data.company || 'Individual'})%0A` +
      `*Contact:* ${data.phone} | ${data.email}%0A%0A` +
      `*Technical Specs:*%0A` +
      `- Category: ${data.category}%0A` +
      `- Scale: ${data.scale}%0A` +
      `- Timeline: ${data.timeline || 'TBD'}%0A` +
      `- Features: ${data.hardware || 'Standard'}%0A%0A` +
      `*Mission Brief:*%0A${data.mission || 'No mission brief provided.'}`;

    const whatsappUrl = `https://wa.me/919672232299?text=${text}`;
    
    // Redirect
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      {/* ━━━━━━ HERO ━━━━━━ */}
      <section className="pt-40 pb-20 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="max-w-4xl text-center mx-auto">
            <Reveal delay={0.1}>
              <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-8">
                Quote Configuration
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="display-hero mb-8">
                Precision Quote <br />
                Request.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-prose max-w-xl mx-auto">
                Detailed requirements lead to accurate masterpieces. Provide your project parameters for a professional consultation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ QUOTE FORM BENTO ━━━━━━ */}
      <section className="py-24 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="max-w-5xl mx-auto">
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
                    <h3 className="display-section mb-4">Inquiry Received.</h3>
                    <p className="text-[var(--text-muted)] text-lg">Our engineering team will review your specs and contact you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-10 text-xs font-bold underline uppercase tracking-widest">New Request</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-16">
                    
                    {/* Section 1: Identity */}
                    <div className="space-y-10">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold bg-[var(--text-charcoal)] text-white w-6 h-6 rounded-full flex items-center justify-center">1</span>
                        <h3 className="text-xl font-bold uppercase tracking-widest">Identity & Studio</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Full Name</label>
                          <input name="name" type="text" required placeholder="Name" className="w-full bg-transparent border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Entity / Company</label>
                          <input name="company" type="text" placeholder="Organization" className="w-full bg-transparent border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Electronic Mail</label>
                          <input name="email" type="email" required placeholder="email@address.com" className="w-full bg-transparent border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Phone Line</label>
                          <input name="phone" type="tel" required placeholder="+91" className="w-full bg-transparent border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none transition-all" />
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Technical Specs */}
                    <div className="space-y-10">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold bg-[var(--text-charcoal)] text-white w-6 h-6 rounded-full flex items-center justify-center">2</span>
                        <h3 className="text-xl font-bold uppercase tracking-widest">Technical Parameters</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Project Category</label>
                          <select name="category" className="w-full bg-transparent border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none cursor-pointer appearance-none">
                            <option>Architectural Residential</option>
                            <option>Commercial / Township</option>
                            <option>Industrial / Plant</option>
                            <option>Infrastructure / Rail</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Precision Scale</label>
                          <select name="scale" className="w-full bg-transparent border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none cursor-pointer appearance-none">
                            <option>1:100 (High Detail)</option>
                            <option>1:200 (Standard)</option>
                            <option>1:500 (Massing)</option>
                            <option>Custom Dimension</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Advanced Hardware</label>
                          <div className="flex flex-wrap gap-3">
                            {["Integrated LED", "Motorized Systems", "Terrain Topography", "Interior Fit-out"].map((tag) => (
                              <label key={tag} className="flex items-center gap-2 group cursor-pointer">
                                <input name="hardware" value={tag} type="checkbox" className="w-4 h-4 rounded border-[var(--border-strong)] checked:bg-[var(--text-charcoal)]" />
                                <span className="text-xs font-medium text-[var(--text-slate)] group-hover:text-[var(--text-charcoal)]">{tag}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Target Timeline</label>
                          <input name="timeline" type="date" className="w-full bg-transparent border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none" />
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Brief & Assets */}
                    <div className="space-y-10">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold bg-[var(--text-charcoal)] text-white w-6 h-6 rounded-full flex items-center justify-center">3</span>
                        <h3 className="text-xl font-bold uppercase tracking-widest">Digital Assets & Brief</h3>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Project Mission</label>
                        <textarea name="mission" rows={3} placeholder="Describe the soul of the project..." className="w-full bg-transparent border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none resize-none transition-all" />
                      </div>
                      <div className="p-12 border-2 border-dashed border-[var(--border-strong)] rounded-[var(--radius-md)] text-center group cursor-pointer hover:bg-[var(--bg-snow)] transition-colors">
                        <Upload className="w-10 h-10 text-[var(--border-strong)] mx-auto mb-4 group-hover:text-[var(--text-charcoal)] transition-colors" strokeWidth={1} />
                        <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Upload CAD / PDF Assets</p>
                        <p className="text-[10px] text-[var(--text-muted)] mt-2">Max. 50MB combined</p>
                      </div>
                    </div>

                    <div className="">
                      <MagneticButton className="btn-primary w-full py-6 text-sm uppercase tracking-widest font-bold">
                        Request Official Quotation <ArrowRight className="w-4 h-4 ml-2" />
                      </MagneticButton>
                    </div>

                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ SIDE BAR INFO ━━━━━━ */}
      <section className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-paper)]">
        <div className="structural-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Layers, title: "Precision First", desc: "Every quote is reviewed by a master architect for structural feasibility." },
              { icon: Target, title: "Strict Adherence", desc: "We commit to 1:1 scale accuracy guaranteed by CNC laser calibration." },
              { icon: Clock, title: "Time Commitment", desc: "Responses delivered within 24 business hours. No exceptions." },
              { icon: Wallet, title: "Scalable Pricing", desc: "Solutions from boutique villa models to massive city masterplans." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="space-y-4">
                  <item.icon className="w-8 h-8 text-[var(--text-muted)]" strokeWidth={1} />
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-[var(--text-slate)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
