"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, ChevronDown, CheckCircle } from "lucide-react";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  );
}

const faqs = [
  { q: "What areas do you serve?", a: "While based in Jaipur, we serve clients pan-India and internationally, including US, UK, and UAE. With workshops in Jaipur, Delhi, Mumbai, Bangalore, Hyderabad, and Ahmedabad." },
  { q: "How long does a typical project take?", a: "Simple residential models: 7-14 days. Complex commercial projects: 14-21 days. Large-scale township/institutional models: 21-30+ days." },
  { q: "Do you work with international clients?", a: "Yes! We serve clients in 8+ countries with white-glove international shipping and customs handling." },
  { q: "Can you handle rush projects?", a: "Yes, we offer expedited services for urgent projects. Contact us directly for rush timelines and pricing." },
  { q: "What scale ranges do you work with?", a: "From 1:20,000 (city master plans) to 1:1 life-size models. Most common: 1:100 to 1:500 for architectural presentations." },
  { q: "Do you provide revisions?", a: "We include up to 3 rounds of revisions. Additional revisions at nominal charge." },
];

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
      <section className="relative pt-32 pb-20 bg-[var(--bg-atelier)]">
        <div className="absolute inset-0 bg-[var(--gradient-spotlight)] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <Reveal>
            <p className="eyebrow">Connect With Us</p>
            <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
              Let&apos;s Create Something{" "}
              <span className="text-shimmer">Extraordinary</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr,420px] gap-12">
            {/* Form */}
            <Reveal>
              <div className="glass-card p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-[var(--gold-core)] mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-[var(--platinum)] mb-2">Message Sent!</h3>
                    <p className="text-[var(--silver-slate)]">We&apos;ll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-[var(--silver-slate)] mb-2">Full Name *</label>
                        <input type="text" required className="w-full bg-[var(--bg-pedestal)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-[var(--platinum)] placeholder:text-[var(--muted)] focus:border-[var(--gold-core)] focus:ring-1 focus:ring-[var(--gold-core)] outline-none transition-all" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm text-[var(--silver-slate)] mb-2">Company</label>
                        <input type="text" className="w-full bg-[var(--bg-pedestal)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-[var(--platinum)] placeholder:text-[var(--muted)] focus:border-[var(--gold-core)] focus:ring-1 focus:ring-[var(--gold-core)] outline-none transition-all" placeholder="Company name" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-[var(--silver-slate)] mb-2">Email *</label>
                        <input type="email" required className="w-full bg-[var(--bg-pedestal)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-[var(--platinum)] placeholder:text-[var(--muted)] focus:border-[var(--gold-core)] focus:ring-1 focus:ring-[var(--gold-core)] outline-none transition-all" placeholder="email@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm text-[var(--silver-slate)] mb-2">Phone *</label>
                        <input type="tel" required className="w-full bg-[var(--bg-pedestal)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-[var(--platinum)] placeholder:text-[var(--muted)] focus:border-[var(--gold-core)] focus:ring-1 focus:ring-[var(--gold-core)] outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-[var(--silver-slate)] mb-2">Project Type</label>
                        <select className="w-full bg-[var(--bg-pedestal)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-[var(--platinum)] focus:border-[var(--gold-core)] outline-none transition-all appearance-none">
                          <option>Select type...</option>
                          <option>Architectural</option>
                          <option>Residential</option>
                          <option>Commercial</option>
                          <option>Industrial</option>
                          <option>Railway</option>
                          <option>Defense</option>
                          <option>Landscape</option>
                          <option>Interior</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-[var(--silver-slate)] mb-2">City</label>
                        <input type="text" className="w-full bg-[var(--bg-pedestal)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-[var(--platinum)] placeholder:text-[var(--muted)] focus:border-[var(--gold-core)] outline-none transition-all" placeholder="Project city" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-[var(--silver-slate)] mb-2">Message *</label>
                      <textarea rows={4} required className="w-full bg-[var(--bg-pedestal)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-[var(--platinum)] placeholder:text-[var(--muted)] focus:border-[var(--gold-core)] focus:ring-1 focus:ring-[var(--gold-core)] outline-none transition-all resize-none" placeholder="Tell us about your project..." />
                    </div>
                    <button type="submit" className="btn-gold w-full">
                      <Send className="w-4 h-4" /> Send Enquiry
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Sidebar */}
            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="glass-card p-6 space-y-5">
                  <h3 className="font-semibold text-[var(--platinum)]">Contact Information</h3>
                  <a href="mailto:rdarmodels@gmail.com" className="flex items-center gap-3 text-sm text-[var(--silver-slate)] hover:text-[var(--platinum)] transition-colors">
                    <Mail className="w-4 h-4 text-[var(--gold-core)] shrink-0" /> rdarmodels@gmail.com
                  </a>
                  <a href="tel:+919672232299" className="flex items-center gap-3 text-sm text-[var(--silver-slate)] hover:text-[var(--platinum)] transition-colors">
                    <Phone className="w-4 h-4 text-[var(--gold-core)] shrink-0" /> +91 96722 32299
                  </a>
                  <div className="flex items-start gap-3 text-sm text-[var(--silver-slate)]">
                    <MapPin className="w-4 h-4 text-[var(--gold-core)] shrink-0 mt-0.5" />
                    <span>84/54, Sector 8, Pratap Nagar, Jaipur, Rajasthan 302033</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[var(--silver-slate)]">
                    <Clock className="w-4 h-4 text-[var(--gold-core)] shrink-0" /> Mon–Sat · 9AM–7PM IST
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-xl overflow-hidden border border-[var(--border-gold-low)] h-[280px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2052695673024!2d75.81643971278447!3d26.8015918683031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9e7de90cdc3%3A0xc17bd1f80529b56f!2sRD%20Models%20-%203D%20Model%20Making%20Company!5e0!3m2!1sen!2sin!4v1775582066079!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1) grayscale(20%)" }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RD Models Location"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--bg-atelier)]">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">FAQ</p>
              <h2>Frequently Asked Questions</h2>
              <div className="gold-divider" />
            </div>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="glass-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-[var(--platinum)] pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[var(--gold-core)] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-[var(--silver-slate)] leading-relaxed">{faq.a}</p>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
