"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, ChevronDown, CheckCircle, ArrowRight } from "lucide-react";
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
   DATA
   ============================================================ */
const faqs = [
  { q: "What areas do you serve?", a: "While based in Jaipur, we serve clients pan-India and internationally including US, UK, and UAE. Workshops in 6 major Indian cities." },
  { q: "How long does a typical project take?", a: "Residential: 7-14 days. Commercial/Township: 14-30+ days depending on complexity and scale." },
  { q: "What scale ranges do you work with?", a: "From city-scale 1:20,000 to life-size 1:1 components. Precision is maintained at every level." },
  { q: "Do you handle international shipping?", a: "Yes, we provide 'Nuclear Packaging' and white-glove international logistics for global delivery." },
];

/* ============================================================
   COMPONENT
   ============================================================ */
export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* ━━━━━━ HERO ━━━━━━ */}
      <section className="pt-40 pb-20 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="max-w-4xl text-center mx-auto">
            <Reveal delay={0.1}>
              <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-8">
                Get In Touch
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="display-hero mb-8">
                Initiate Your <br />
                Masterpiece.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-prose max-w-2xl mx-auto">
                Ready to bring your vision to life? Connect with our precision consultants to discuss your project requirements.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ CONTACT MESH ━━━━━━ */}
      <section className="py-24 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Form Side */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="bento-card p-10 bg-[var(--bg-paper)]">
                  {submitted ? (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-20"
                    >
                      <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Transmitted.</h3>
                      <p className="text-[var(--text-muted)]">Our technicians will respond within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Full Name</label>
                          <input type="text" required placeholder="John Doe" className="w-full bg-[var(--bg-snow)] border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none transition-all placeholder:text-[var(--border-strong)]" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Email Address</label>
                          <input type="email" required placeholder="john@studio.com" className="w-full bg-[var(--bg-snow)] border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none transition-all placeholder:text-[var(--border-strong)]" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Phone / WhatsApp</label>
                          <input type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full bg-[var(--bg-snow)] border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none transition-all placeholder:text-[var(--border-strong)]" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Sector</label>
                          <select className="w-full bg-[var(--bg-snow)] border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none transition-all appearance-none cursor-pointer">
                            <option>Architectural</option>
                            <option>Industrial</option>
                            <option>Infrastructure</option>
                            <option>Defense</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Message Brief</label>
                        <textarea rows={4} required placeholder="Describe your vision..." className="w-full bg-[var(--bg-snow)] border-b border-[var(--border-strong)] py-4 focus:border-[var(--text-charcoal)] outline-none transition-all resize-none placeholder:text-[var(--border-strong)]" />
                      </div>

                      <div className="pt-4">
                        <MagneticButton className="btn-primary w-full md:w-auto px-12 py-5 text-sm uppercase tracking-widest font-bold">
                          Transmit Inquiry <Send className="w-4 h-4 ml-2" />
                        </MagneticButton>
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Info Side */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <Reveal delay={0.2}>
                <div className="bento-card p-10 h-full border-none shadow-none">
                  <h3 className="text-xl font-bold mb-10">Direct Channels.</h3>
                  <div className="space-y-10">
                    <div className="flex gap-6">
                      <Mail className="w-6 h-6 text-[var(--text-muted)] shrink-0" strokeWidth={1} />
                      <div>
                        <p className="text-[10px] font-bold uppercase text-[var(--text-muted)] mb-1">Email</p>
                        <a href="mailto:rdarmodels@gmail.com" className="text-lg font-bold hover:underline">rdarmodels@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <Phone className="w-6 h-6 text-[var(--text-muted)] shrink-0" strokeWidth={1} />
                      <div>
                        <p className="text-[10px] font-bold uppercase text-[var(--text-muted)] mb-1">WhatsApp / Call</p>
                        <a href="tel:+919672232299" className="text-lg font-bold hover:underline">+91 96722 32299</a>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <MapPin className="w-6 h-6 text-[var(--text-muted)] shrink-0" strokeWidth={1} />
                      <div>
                        <p className="text-[10px] font-bold uppercase text-[var(--text-muted)] mb-1">HQ Address</p>
                        <p className="text-lg font-bold">84/54, Sector 8, Pratap Nagar, Jaipur, Rajasthan 302033</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-subtle)] h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2052695673024!2d75.81643971278447!3d26.8015918683031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9e7de90cdc3%3A0xc17bd1f80529b56f!2sRD%20Models%20-%203D%20Model%20Making%20Company!5e0!3m2!1sen!2sin!4v1775582066079!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(1) contrast(1.1) opacity(0.8)" }}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━ FAQ: Structural Accordion ━━━━━━ */}
      <section className="py-32 bg-[var(--bg-paper)] border-t border-[var(--border-subtle)]">
        <div className="structural-container max-w-4xl">
          <Reveal>
            <div className="mb-20 text-center">
              <h2 className="display-section">Common Inquiries.</h2>
            </div>
          </Reveal>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border border-[var(--border-subtle)] rounded-[var(--radius-md)] bg-[var(--bg-snow)] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-8 text-left group"
                  >
                    <span className="font-bold text-lg group-hover:text-[var(--text-muted)] transition-colors">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-8 pb-8 text-[var(--text-slate)] leading-relaxed border-t border-[var(--border-subtle)] pt-6">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
