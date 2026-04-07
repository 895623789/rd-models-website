"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Building2, ArrowRight, X } from "lucide-react";
import Link from "next/link";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  );
}

const cities = ["All", "Jaipur", "Mumbai", "Delhi", "Ahmedabad", "Bangalore", "Hyderabad", "Chennai", "Pune", "Lucknow"];
const categories = ["All", "Residential", "Commercial", "Industrial", "Institutional", "Township", "Defense", "Railway", "Landscape"];

const projects = [
  { title: "Royal Heritage Villa Complex", city: "Jaipur", category: "Residential", scale: "1:100" },
  { title: "Pratap Nagar Commercial Hub", city: "Jaipur", category: "Commercial", scale: "1:200" },
  { title: "IIT Jodhpur Master Campus", city: "Jaipur", category: "Institutional", scale: "1:500" },
  { title: "Vedanta Mining Facility", city: "Jaipur", category: "Industrial", scale: "1:250" },
  { title: "Marine Drive Towers", city: "Mumbai", category: "Commercial", scale: "1:150" },
  { title: "Bandra Luxury Residences", city: "Mumbai", category: "Residential", scale: "1:100" },
  { title: "Lower Parel Business Park", city: "Mumbai", category: "Commercial", scale: "1:300" },
  { title: "South Mumbai Township", city: "Mumbai", category: "Township", scale: "1:500" },
  { title: "Connaught Place Redevelopment", city: "Delhi", category: "Commercial", scale: "1:200" },
  { title: "New Delhi Metro Station", city: "Delhi", category: "Railway", scale: "1:100" },
  { title: "Defense Ministry Complex", city: "Delhi", category: "Defense", scale: "1:300" },
  { title: "Gurgaon IT Campus Phase II", city: "Delhi", category: "Institutional", scale: "1:400" },
  { title: "Sabarmati Riverfront Hotel", city: "Ahmedabad", category: "Commercial", scale: "1:150" },
  { title: "Thaltej Industrial Zone", city: "Ahmedabad", category: "Industrial", scale: "1:250" },
  { title: "SG Highway Township", city: "Ahmedabad", category: "Township", scale: "1:500" },
  { title: "Electronic City Tech Park", city: "Bangalore", category: "Commercial", scale: "1:200" },
  { title: "Whitefield Luxury Villas", city: "Bangalore", category: "Residential", scale: "1:100" },
  { title: "Sarjapur Layout Plan", city: "Bangalore", category: "Landscape", scale: "1:500" },
  { title: "HITECH City Office Complex", city: "Hyderabad", category: "Commercial", scale: "1:200" },
  { title: "Gachibowli Residential Tower", city: "Hyderabad", category: "Residential", scale: "1:150" },
  { title: "Jubilee Hills Villa Model", city: "Hyderabad", category: "Residential", scale: "1:75" },
  { title: "OMR IT Corridor Campus", city: "Chennai", category: "Commercial", scale: "1:300" },
  { title: "Anna Nagar Apartments", city: "Chennai", category: "Residential", scale: "1:100" },
  { title: "ECR Beach Resort Model", city: "Chennai", category: "Commercial", scale: "1:200" },
  { title: "Hinjewadi Phase III Hub", city: "Pune", category: "Commercial", scale: "1:250" },
  { title: "Baner Housing Society", city: "Pune", category: "Residential", scale: "1:100" },
  { title: "Kharadi Township Plan", city: "Pune", category: "Township", scale: "1:500" },
  { title: "Gomti Nagar Extension", city: "Lucknow", category: "Township", scale: "1:400" },
  { title: "Hazratganj Heritage", city: "Lucknow", category: "Commercial", scale: "1:200" },
  { title: "Lucknow Metro Station", city: "Lucknow", category: "Railway", scale: "1:100" },
];

export default function PortfolioPageClient() {
  const [activeCity, setActiveCity] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = projects.filter(
    (p) =>
      (activeCity === "All" || p.city === activeCity) &&
      (activeCategory === "All" || p.category === activeCategory)
  );

  return (
    <>
      <section className="relative pt-32 pb-20 bg-[var(--bg-atelier)]">
        <div className="absolute inset-0 bg-[var(--gradient-spotlight)] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <Reveal>
            <p className="eyebrow">Our Portfolio</p>
            <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
              2300+ Models,{" "}
              <span className="text-shimmer">Infinite Precision</span>
            </h1>
            <p className="text-[var(--silver-slate)] text-lg mt-6 max-w-2xl mx-auto">
              Explore our portfolio of architectural masterpieces from across India and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filters */}
          <Reveal>
            <div className="mb-6">
              <p className="text-xs font-[var(--font-accent)] text-[var(--muted)] tracking-wider uppercase mb-3">Filter by City</p>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <button key={city} onClick={() => setActiveCity(city)}
                    className={`px-4 py-2 rounded-full text-xs font-medium font-[var(--font-accent)] tracking-widest uppercase transition-all duration-300 ${activeCity === city ? "bg-[var(--gold-core)] text-[var(--bg-abyss)]" : "border border-[var(--border-gold-low)] text-[var(--silver-slate)] hover:bg-[var(--gold-core)]/10"}`}>
                    {city}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-10">
              <p className="text-xs font-[var(--font-accent)] text-[var(--muted)] tracking-wider uppercase mb-3">Filter by Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-medium font-[var(--font-accent)] tracking-widest uppercase transition-all duration-300 ${activeCategory === cat ? "bg-[var(--gold-core)] text-[var(--bg-abyss)]" : "border border-[var(--border-gold-low)] text-[var(--silver-slate)] hover:bg-[var(--gold-core)]/10"}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--bg-pedestal)] border border-[var(--border-subtle)] cursor-pointer"
                  onClick={() => setLightbox(i)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-abyss)] via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="w-12 h-12 text-[var(--gold-core)] opacity-15 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-bold bg-[var(--gold-core)] text-[var(--bg-abyss)] font-[var(--font-accent)] tracking-widest uppercase">{project.city}</span>
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-medium bg-[var(--bg-glass)] backdrop-blur-lg text-[var(--platinum)] font-[var(--font-accent)] tracking-wider border border-[var(--border-subtle)]">{project.scale}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                    <p className="text-xs text-[var(--gold-ambient)] font-[var(--font-accent)] tracking-wider uppercase mb-1">{project.category}</p>
                    <h3 className="text-base font-semibold text-[var(--platinum)]">{project.title}</h3>
                  </div>
                  <div className="absolute inset-0 bg-[var(--bg-abyss)]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <span className="btn-ghost text-xs">View Details <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[var(--muted)]">No projects found for this filter combination.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[rgba(5,5,8,0.95)] backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-[var(--platinum)] hover:text-[var(--gold-core)] transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card p-8 max-w-lg w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-[var(--bg-pedestal)] rounded-xl mb-6 flex items-center justify-center">
                <Building2 className="w-16 h-16 text-[var(--gold-core)] opacity-20" />
              </div>
              <h3 className="text-2xl font-[var(--font-display)] font-bold text-[var(--platinum)] mb-2">{filtered[lightbox]?.title}</h3>
              <div className="flex justify-center gap-3 mt-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs bg-[var(--gold-core)] text-[var(--bg-abyss)] font-bold uppercase tracking-widest">{filtered[lightbox]?.city}</span>
                <span className="px-3 py-1 rounded-full text-xs border border-[var(--border-gold-low)] text-[var(--silver-slate)] uppercase tracking-widest">{filtered[lightbox]?.category}</span>
                <span className="px-3 py-1 rounded-full text-xs border border-[var(--border-gold-low)] text-[var(--silver-slate)] uppercase tracking-widest">{filtered[lightbox]?.scale}</span>
              </div>
              <Link href="/quote" className="btn-gold text-xs">Get a Quote for Similar Project <ArrowRight className="w-3 h-3" /></Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
