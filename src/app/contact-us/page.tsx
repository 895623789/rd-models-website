"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/* ============================================================
   DATA CONSTANTS
   ============================================================ */
const LOCATIONS = [
  {
    city: "Mumbai",
    address: "503, Ashirwad CHS, JB Nagar, Andheri East, Mumbai, Maharastra, 400047",
    image: "https://rdmodels.com/wp-content/uploads/2026/04/mumbi_me4vl8.jpg"
  },
  {
    city: "Hyderabad",
    address: "G2, N block, Rainbow Vistas Rock Garden, Hyderabad, Telangana, 500018",
    image: "https://rdmodels.com/wp-content/uploads/2026/04/photo_2_2025-06-21_17-10-41_gx5pmz.jpg"
  },
  {
    city: "Bangalore",
    address: "5, Raja Ram Mohan, Sampangi Rama Nagara, Bengaluru, Karnataka 560025",
    image: "https://rdmodels.com/wp-content/uploads/2026/04/photo_5_2025-06-21_17-10-41_o9rulc.jpg"
  },
  {
    city: "Chennai",
    address: "Near Shaik Ali Subedar St, Park Town, Chennai, Tamil Nadu 600003",
    image: "https://rdmodels.com/wp-content/uploads/2026/04/photo_8_2025-06-21_17-10-41_buvktm.jpg"
  },
  {
    city: "Pune",
    address: "J-556, Tropics Apartments, Near Sameer Lawns, Ravet, Pune. 412101",
    image: "https://rdmodels.com/wp-content/uploads/2026/04/photo_6_2025-06-21_17-10-41_ukvxuy.jpg"
  },
  {
    city: "Ahmedabad",
    address: "89, Behind green park society, New RTO road, Ahemdabad, Gujrat, 382410",
    image: "https://rdmodels.com/wp-content/uploads/2026/04/photo_1_2025-06-21_17-10-41_jpnv3h.jpg"
  },
  {
    city: "Delhi",
    address: "SHED NO. 41, Scheme-1, Okhla Industrial Area, Ph.2, New Delhi-110020",
    image: "https://rdmodels.com/wp-content/uploads/2026/04/photo_7_2025-06-21_17-10-41_gjhgjd.jpg"
  },
  {
    city: "Jaipur",
    address: "84/54, Sector 8, Sector 9, Pratap Nagar, Jaipur, Rajasthan 302033",
    image: "https://rdmodels.com/wp-content/uploads/2026/04/photo_4_2025-06-21_17-10-41_pxkcem.jpg"
  },
  {
    city: "Chandigarh",
    address: "Udyog Path, Sector 22B, Chandigarh, 160022",
    image: "https://rdmodels.com/wp-content/uploads/2026/04/photo_3_2025-06-21_17-10-41_xh6but.jpg"
  },
  {
    city: "Lucknow",
    address: "Seth Ramjas Rd, Hazratganj, Lucknow, Uttar Pradesh 226001",
    image: "https://rdmodels.com/wp-content/uploads/2026/04/photo_2025-06-21_17-33-58_w8mgvp.jpg"
  },
  {
    city: "Indore",
    address: "Tilak Path, Bhangiya, Rajwada, Indore, Madhya Pradesh 452007",
    image: "https://rdmodels.com/wp-content/uploads/2026/04/photo_2025-06-21_17-32-08_kpfqf1.jpg"
  },
  {
    city: "Guwahati",
    address: "AK Dev Rd, GARCHUK, Guwahati, Assam 781035",
    image: "https://rdmodels.com/wp-content/uploads/2026/04/photo_2025-06-21_17-34-53_i1gvlg.jpg"
  }
];

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate API delay
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <main className="pt-32 pb-24 min-h-screen bg-[var(--bg-snow)]">
      {/* ━━━━━━ HEADER ━━━━━━ */}
      <section className="structural-container mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-6">
            Get In Touch
          </p>
          <h1 className="display-hero mb-6 text-[var(--text-charcoal)]">
            Contact Us
          </h1>
          <p className="text-prose max-w-2xl mx-auto">
            Ready to bring your architectural vision to life? Contact our expert team for a consultation and quote.
          </p>
        </motion.div>
      </section>

      {/* ━━━━━━ CONTACT FORM & INFO GRID ━━━━━━ */}
      <section className="structural-container mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div>
              <h3 className="section-title mb-8 relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-12 after:h-[2px] after:bg-[var(--primary)]">
                Contact Information
              </h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[var(--bg-paper)] shadow-sm flex items-center justify-center shrink-0 border border-[var(--border-subtle)] group-hover:border-[var(--primary)] transition-colors">
                    <Mail className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider font-[var(--font-accent)] mb-1">Email Address</p>
                    <a href="mailto:rdarmodels@gmail.com" className="text-lg text-[var(--text-charcoal)] font-medium hover:text-[var(--primary)] transition-colors">
                      rdarmodels@gmail.com
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[var(--bg-paper)] shadow-sm flex items-center justify-center shrink-0 border border-[var(--border-subtle)] group-hover:border-[var(--primary)] transition-colors">
                    <Phone className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider font-[var(--font-accent)] mb-1">Call Us</p>
                    <a href="tel:+919672232299" className="text-lg text-[var(--text-charcoal)] font-medium hover:text-[var(--primary)] transition-colors">
                      +91-9672232299
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-64 md:h-80 rounded-[var(--radius-lg)] overflow-hidden shadow-sm border border-[var(--border-subtle)]">
              <iframe 
                loading="lazy"
                src="https://maps.google.com/maps?q=RD%20Models%20-%203D%20Model%20Making%20Company&t=m&z=10&output=embed&iwloc=near"
                title="RD Models - 3D Model Making Company"
                className="w-full h-full border-0"
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-[var(--bg-paper)] p-8 md:p-12 rounded-[var(--radius-xl)] shadow-lg border border-[var(--border-subtle)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] opacity-[0.03] rounded-bl-full pointer-events-none" />
              
              <h3 className="text-2xl font-semibold text-[var(--text-charcoal)] mb-8">Send us an Enquiry</h3>
              
              {formState === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-semibold text-[var(--text-charcoal)] mb-2">Message Sent!</h4>
                  <p className="text-[var(--text-muted)]">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setFormState("idle")}
                    className="mt-8 text-[var(--primary)] font-medium hover:underline text-sm uppercase tracking-wider"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[var(--text-charcoal)]">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--bg-snow)] border border-[var(--border-subtle)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-[var(--text-charcoal)]">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--bg-snow)] border border-[var(--border-subtle)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-[var(--text-charcoal)]">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required 
                        className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--bg-snow)] border border-[var(--border-subtle)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="project" className="text-sm font-medium text-[var(--text-charcoal)]">Discuss your Project</label>
                    <textarea 
                      id="project" 
                      required 
                      rows={5}
                      className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--bg-snow)] border border-[var(--border-subtle)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors outline-none resize-none"
                      placeholder="Tell us about the scale, timeline, and specifics of your architectural model..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === "submitting"}
                    className="w-full btn-primary py-4 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━ LOCATIONS GRID ━━━━━━ */}
      <section className="structural-container">
        <div className="text-center mb-16">
          <h2 className="display-hero mb-4 text-[var(--text-charcoal)]">Our Locations</h2>
          <p className="text-prose max-w-2xl mx-auto">Find our offices and studios across India.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {LOCATIONS.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className="bg-[var(--bg-paper)] rounded-[var(--radius-lg)] overflow-hidden shadow-sm border border-[var(--border-subtle)] group hover:shadow-md transition-shadow"
            >
              <div className="h-48 w-full relative overflow-hidden bg-gray-100">
                <Image 
                  src={loc.image} 
                  alt={`${loc.city} Office`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-xl font-semibold drop-shadow-md">{loc.city}</h4>
                </div>
              </div>
              <div className="p-5 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {loc.address}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
