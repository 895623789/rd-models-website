"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Maximize2, X } from "lucide-react";

/* ============================================================
   DATA
   ============================================================ */
const categories = [
  "All",
  "High Rise Residential",
  "Low Rise Residential",
  "Landscape & Resort",
  "Commercial Models",
  "Institutional Models",
  "Industrial Townships"
];

// Curated sample images based on the provided WordPress structure
const projects = [
  { id: 1, title: "Skyline Tower A", category: "High Rise Residential", img: "https://rdmodels.com/wp-content/uploads/2026/04/5-14.jpg" },
  { id: 2, title: "Oasis Resort Masterplan", category: "Landscape & Resort", img: "https://rdmodels.com/wp-content/uploads/2026/04/6-11.jpg" },
  { id: 3, title: "Tech Park Campus", category: "Institutional Models", img: "https://rdmodels.com/wp-content/uploads/2026/04/4-16.jpg" },
  { id: 4, title: "Modern Villa 01", category: "Low Rise Residential", img: "https://rdmodels.com/wp-content/uploads/2026/04/1-17.jpg" },
  { id: 5, title: "Luxury Condos", category: "High Rise Residential", img: "https://rdmodels.com/wp-content/uploads/2026/04/2-16.jpg" },
  { id: 6, title: "City Mall", category: "Commercial Models", img: "https://rdmodels.com/wp-content/uploads/2026/04/3-17.jpg" },
  { id: 7, title: "Eco Township", category: "Industrial Townships", img: "https://rdmodels.com/wp-content/uploads/2026/04/1-19.jpg" },
  { id: 8, title: "Suburban Complex", category: "Low Rise Residential", img: "https://rdmodels.com/wp-content/uploads/2026/04/2-18.jpg" },
  
  { id: 9, title: "Medical Research Center", category: "Institutional Models", img: "https://rdmodels.com/wp-content/uploads/2026/04/5-14.jpg" },
  { id: 10, title: "Mountain Retreat", category: "Landscape & Resort", img: "https://rdmodels.com/wp-content/uploads/2026/04/6-11.jpg" },
  { id: 11, title: "Global Corporate HQ", category: "Commercial Models", img: "https://rdmodels.com/wp-content/uploads/2026/04/4-16.jpg" },
  { id: 12, title: "Boutique Housing", category: "Low Rise Residential", img: "https://rdmodels.com/wp-content/uploads/2026/04/1-17.jpg" },
  { id: 13, title: "Twin Towers", category: "High Rise Residential", img: "https://rdmodels.com/wp-content/uploads/2026/04/2-16.jpg" },
  { id: 14, title: "SEZ Masterplan", category: "Industrial Townships", img: "https://rdmodels.com/wp-content/uploads/2026/04/3-17.jpg" },
  { id: 15, title: "Valley Resort", category: "Landscape & Resort", img: "https://rdmodels.com/wp-content/uploads/2026/04/1-19.jpg" },
  { id: 16, title: "Financial District", category: "Commercial Models", img: "https://rdmodels.com/wp-content/uploads/2026/04/2-18.jpg" },
];

/* ============================================================
   PAGE COMPONENT
   ============================================================ */
export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filterRef = useRef(null);
  const isInView = useInView(filterRef, { once: true, margin: "-50px" });

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="pt-32 pb-24 min-h-screen bg-[var(--bg-snow)]">
      {/* ━━━━━━ HEADER ━━━━━━ */}
      <section className="structural-container mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-6">
            The Masterpieces
          </p>
          <h1 className="display-hero mb-6 text-[var(--text-charcoal)]">
            Our Portfolio
          </h1>
          <p className="text-prose max-w-2xl mx-auto">
            Explore our extensive gallery of over 2000+ precision-crafted architectural scale models across residential, commercial, industrial, and institutional sectors.
          </p>
        </motion.div>
      </section>

      {/* ━━━━━━ FILTER TABS ━━━━━━ */}
      <section className="structural-container mb-12" ref={filterRef}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300
                ${activeCategory === cat 
                  ? "bg-[var(--text-charcoal)] text-white shadow-lg" 
                  : "bg-white text-[var(--text-slate)] border border-[var(--border-subtle)] hover:bg-[var(--bg-paper)] hover:text-[var(--text-charcoal)]"}
              `}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ━━━━━━ GALLERY GRID ━━━━━━ */}
      <section className="structural-container">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className="group relative w-full aspect-[4/3] bg-[var(--bg-paper)] rounded-[var(--radius-md)] overflow-hidden cursor-pointer border border-[var(--border-subtle)]"
                onClick={() => setLightboxImg(project.img)}
              >
                {/* Fallback pattern / loading state could go here */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.img} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback visually if image fails to load from the remote server
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&background=f0f5fa&color=94a3b8&size=500`;
                  }}
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1">{project.category}</p>
                    <h3 className="text-white text-lg font-semibold leading-tight">{project.title}</h3>
                  </div>
                  
                  {/* Expand icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[var(--text-muted)]">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* ━━━━━━ LIGHTBOX MODAL ━━━━━━ */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 sm:p-10"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setLightboxImg(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl aspect-[16/9] rounded-[var(--radius-lg)] overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={lightboxImg} 
                alt="Enlarged Project View" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
