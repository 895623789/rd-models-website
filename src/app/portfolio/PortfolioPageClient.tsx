"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Building2, ArrowRight, X, Filter } from "lucide-react";
import MagneticButton from "@/components/effects/MagneticButton";
import TiltCard3D from "@/components/effects/TiltCard3D";

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

/* ============================================================
   COMPONENT
   ============================================================ */
export default function PortfolioPageClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCity, setActiveCity] = useState('All');
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 200 && currentScrollY > lastScrollY) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const categories = ["All", "Residential", "Commercial", "Industrial", "Institutional", "Township", "Defense", "Railway", "Landscape"];
  const cities = ["All", "Jaipur", "Mumbai", "Delhi", "Ahmedabad", "Bangalore", "Hyderabad", "Chennai", "Pune", "Lucknow"];

  const filtered = projects.filter(
    (p) =>
      (activeCity === "All" || p.city === activeCity) &&
      (activeCategory === "All" || p.category === activeCategory)
  );

  return (
    <>
      {/* ━━━━━━ HERO ━━━━━━ */}
      <section className="pt-40 pb-20 bg-[var(--bg-snow)]">
        <div className="structural-container">
          <div className="max-w-4xl">
            <Reveal delay={0.1}>
              <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-8">
                Selected Works
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="display-hero mb-8">
                The Scale Model <br />
                Archive.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-prose max-w-2xl">
                A definitive collection of architectural, industrial, and infrastructure milestones crafted with absolute precision.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━ ARCHIVE CONTROL PANEL (Ultra-Premium Redesign) ━━━━━━ */}
      <section 
        className="sticky z-30 transition-all duration-500 group/filters"
        style={{ 
          top: isNavbarHidden ? '0px' : 'clamp(80px, 12vw, 96px)' 
        }}
      >
        <div className="bg-white/90 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          <div className="structural-container">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between min-h-[70px] py-4 lg:py-0 gap-8">
              
              {/* Left: Sector Selection (Technical Links) */}
              <div className="flex items-center gap-6 lg:gap-10 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-3 shrink-0 py-4 lg:py-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-charcoal)] animate-pulse" />
                  <p className="text-[10px] font-bold text-[var(--text-charcoal)] uppercase tracking-[0.25em]">Sectors</p>
                </div>
                
                <div className="flex items-center gap-6 lg:gap-8 min-w-max">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className="group/link relative py-4 lg:py-6 flex flex-col items-center justify-center transition-all duration-300"
                    >
                      <span className={`text-[10px] lg:text-[11px] font-medium uppercase tracking-widest transition-colors duration-300 ${activeCategory === cat ? 'text-[var(--text-charcoal)] font-bold' : 'text-[var(--text-muted)] group-hover/link:text-[var(--text-charcoal)]'}`}>
                        {cat}
                      </span>
                      {activeCategory === cat && (
                        <motion.div 
                          layoutId="cat-indicator"
                          className="absolute bottom-0 w-full h-[2px] bg-[var(--text-charcoal)]"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Center/Divider: Technical ID */}
              <div className="hidden xl:flex items-center gap-3 text-[10px] font-mono text-[var(--text-muted)] opacity-40">
                <span>[ INDEX_REF: RD_ARCHIVE_2024 ]</span>
                <div className="w-[40px] h-[1px] bg-[var(--border-subtle)]" />
              </div>

              {/* Right: Regions & Global Stats */}
              <div className="flex items-center gap-8 lg:gap-12">
                <div className="flex items-center gap-4 py-2 px-4 bg-[var(--bg-snow)] rounded-md border border-[var(--border-subtle)]">
                  <span className="text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-widest">Region:</span>
                  <select 
                    value={activeCity}
                    onChange={(e) => setActiveCity(e.target.value)}
                    className="bg-transparent text-[11px] font-bold text-[var(--text-charcoal)] uppercase tracking-wider outline-none cursor-pointer"
                  >
                    {cities.map(city => <option key={city} value={city}>{city}</option>)}
                  </select>
                </div>

                <div className="flex flex-col items-end shrink-0">
                  <span className="text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-widest leading-none mb-1">Total Assets</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-light font-mono leading-none">{filtered.length.toString().padStart(2, '0')}</span>
                    <span className="text-[9px] font-bold text-[var(--text-muted)]">/ {projects.length}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━ PROJECT GRID ━━━━━━ */}
      <section className="py-24 bg-[var(--bg-snow)] min-h-[60vh]">
        <div className="structural-container">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltCard3D intensity={15}>
                    <div 
                      className="group cursor-pointer bento-card p-0 h-[400px] flex flex-col relative"
                      onClick={() => setLightbox(i)}
                    >
                      {/* Placeholder Image Space */}
                      <div className="flex-grow bg-[var(--bg-paper)] relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] group-hover:opacity-10 transition-opacity">
                          <Building2 className="w-24 h-24" />
                        </div>
                        
                        {/* Overlay Badges */}
                        <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
                          <span className="bg-white/80 backdrop-blur-md border border-[var(--border-subtle)] text-[9px] font-bold uppercase px-3 py-1 rounded-full">{project.scale}</span>
                          <span className="bg-[var(--text-charcoal)] text-white text-[9px] font-bold uppercase px-3 py-1 rounded-full">{project.city}</span>
                        </div>
                      </div>

                      {/* Content Lower */}
                      <div className="p-8 border-t border-[var(--border-subtle)] bg-white group-hover:bg-[var(--bg-snow)] transition-colors duration-500">
                        <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-2">{project.category}</p>
                        <h3 className="text-lg font-bold text-[var(--text-charcoal)] line-clamp-1">{project.title}</h3>
                        <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-[var(--text-charcoal)] opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Explore Details</span> <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </TiltCard3D>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-40 border border-dashed border-[var(--border-strong)] rounded-[var(--radius-lg)]">
              <p className="text-[var(--text-muted)] italic">No results found for current filter criteria.</p>
              <button 
                onClick={() => { setActiveCity("All"); setActiveCategory("All"); }}
                className="mt-6 text-xs font-bold underline decoration-[var(--border-strong)] hover:decoration-[var(--text-charcoal)]"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ━━━━━━ LIGHTBOX ━━━━━━ */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-white/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setLightbox(null)}
          >
            <motion.button 
              className="absolute top-10 right-10 p-4 hover:rotate-90 transition-transform duration-500"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" strokeWidth={1} />
            </motion.button>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/3] bg-[var(--bg-stone)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] flex items-center justify-center overflow-hidden">
                <Building2 className="w-32 h-32 text-[var(--border-strong)] opacity-20" strokeWidth={0.5} />
              </div>
              
              <div>
                <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-6">Case Study / Portfolio</p>
                <h2 className="display-section mb-6">{projects[lightbox].title}</h2>
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-[var(--border-subtle)] mb-10">
                  <div>
                    <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase mb-2">Location</p>
                    <p className="text-lg font-bold">{projects[lightbox].city}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase mb-2">Sector</p>
                    <p className="text-lg font-bold">{projects[lightbox].category}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase mb-2">Precision Scale</p>
                    <p className="text-lg font-bold">{projects[lightbox].scale}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase mb-2">Project ID</p>
                    <p className="text-lg font-bold">RD-{1000 + lightbox}</p>
                  </div>
                </div>
                
                <Link href="/quote">
                  <MagneticButton className="btn-primary w-full py-5">
                    Request Similar Build <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
