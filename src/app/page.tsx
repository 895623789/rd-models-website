"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Building2, ExternalLink } from "lucide-react";
import TiltCard3D from "@/components/effects/TiltCard3D";
import MagneticButton from "@/components/effects/MagneticButton";
import FounderSection from "@/components/sections/FounderSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import ProcessSection from "@/components/sections/ProcessSection";

/* ============================================================
   DATA
   ============================================================ */
const stats = [
  { value: 2300, suffix: "+", label: "Projects Delivered" },
  { value: 700, suffix: "+", label: "Global Clients" },
  { value: 8, suffix: "+", label: "Workshop Network" },
  { value: 12, suffix: "+", label: "Years Experience" },
];

const clientLogos = [
  "GODREJ", "L&T", "VEDANTA", "TATA", "RELIANCE", "JDA", "CPWD", "IRCON", "GODREJ",
  "RADISSON", "EGIS", "MARUTI", "IIT JODHPUR", "ASHADEEP", "SANKALP",
];

const projects = [
  { title: "Mahakumbh 2025 Masterplan", city: "Prayagraj", type: "Masterplan", colSpan: "md:col-span-8" },
  { title: "Museum of The Future", city: "Dubai", type: "Art Model", colSpan: "md:col-span-4" },
  { title: "IIT Jodhpur Campus", city: "Jodhpur", type: "Institutional", colSpan: "md:col-span-4" },
  { title: "PM Modi Airport Model", city: "24-Hour Delivery", type: "Precision High-Speed", colSpan: "md:col-span-8" },
];

/* ============================================================
   COMPONENTS
   ============================================================ */
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(easeOut * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Reveal({ children, delay = 0, y = 40 }: { children: React.ReactNode; delay?: number; y?: number }) {
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
   PAGE COMPONENT
   ============================================================ */
export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <>
      {/* ━━━━━━ HERO SECTION: Architectural & Clean ━━━━━━ */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[40vw] h-[60vh] bg-[var(--border-subtle)] mix-blend-multiply blur-3xl opacity-30 rounded-bl-full pointer-events-none" />
        
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="structural-container relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-12 xl:col-span-7">
              <Reveal delay={0.1}>
                <p className="font-[var(--font-accent)] text-xs tracking-widest uppercase text-[var(--text-muted)] mb-6">
                  India's Premier Scale Model Maker
                </p>
              </Reveal>
              
              <Reveal delay={0.2}>
                <h1 className="display-hero mb-6">
                  Where Vision <br className="hidden md:block" />
                  Becomes Structure.
                </h1>
              </Reveal>

              {/* Mobile Only: Modern Brand Image Integration */}
              <div className="lg:hidden mb-12">
                <Reveal delay={0.3} y={10}>
                  <div className="w-full aspect-square max-h-[350px] mx-auto bg-white border border-[var(--border-subtle)] rounded-[var(--radius-lg)] shadow-lg overflow-hidden relative group">
                    <Image 
                      src="/rd-brand-img.png" 
                      alt="RD Models Brand Showcase" 
                      fill 
                      className="object-contain p-4 transition-transform duration-[2000ms] group-hover:scale-105"
                      priority
                    />
                  </div>
                </Reveal>
              </div>
              
              <Reveal delay={0.3}>
                <p className="text-prose max-w-xl mb-12">
                  "Where Ideas Take Shape." Crafting high-fidelity architectural models for real estate, industry, and defense. From 24-hour rapid delivery feats for PM Modi to global iconic structures.
                </p>
              </Reveal>
              
              <Reveal delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/portfolio">
                    <MagneticButton className="btn-primary w-full sm:w-auto">
                      Explore Our Work
                    </MagneticButton>
                  </Link>
                  <a href="https://www.youtube.com/@rdmodels" target="_blank" rel="noopener noreferrer">
                    <MagneticButton className="btn-outline w-full sm:w-auto">
                      <Play className="w-4 h-4" /> The Process
                    </MagneticButton>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Desktop Only 3D Visual */}
            <div className="lg:col-span-12 xl:col-span-5 hidden lg:block">
              <Reveal delay={0.5} y={0}>
                <TiltCard3D intensity={10}>
                  <div className="w-full aspect-[4/5] bg-white border border-[var(--border-subtle)] rounded-[var(--radius-lg)] shadow-[var(--shadow-float)] relative overflow-hidden group">
                    <Image 
                      src="/rd-brand-img.png" 
                      alt="RD Models Brand Showcase Desktop" 
                      fill 
                      className="object-contain p-8 transform group-hover:scale-105 transition-transform duration-1000"
                      priority
                    />
                  </div>
                </TiltCard3D>
              </Reveal>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ━━━━━━ THE METRICS (Quiet Numbers) ━━━━━━ */}
      <section className="py-20 border-y border-[var(--border-subtle)] bg-[var(--bg-paper)]">
        <div className="structural-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-[var(--border-subtle)]">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="text-center md:px-4">
                  <div className="font-[var(--font-display)] text-5xl md:text-6xl font-light text-[var(--text-charcoal)] tracking-tighter mb-2">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="font-[var(--font-sans)] text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━ CASE STUDY: PM MODI AIRPORT MODEL ━━━━━━ */}
      <CaseStudySection />

      {/* ━━━━━━ PROCESS: CONCEPT TO MASTERPIECE ━━━━━━ */}
      <ProcessSection />

      {/* ━━━━━━ BENTO GRID SERVICES (Ngrok Style) ━━━━━━ */}
      <section className="py-32" id="services">
        <div className="structural-container">
          <Reveal>
            <div className="mb-20">
              <p className="font-[var(--font-accent)] text-xs tracking-widest uppercase text-[var(--text-muted)] mb-4">Core Capabilites</p>
              <h2 className="display-section">Precision Engineering.</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Bento Block 1 */}
            <div className="md:col-span-8">
              <Reveal delay={0.1} y={20}>
                <div className="bento-card p-10 md:p-16 h-full min-h-[400px] flex flex-col justify-end relative bg-[var(--bg-snow)] group cursor-default">
                  <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <Building2 className="w-24 h-24" />
                  </div>
                  <div className="relative z-10 w-full md:w-2/3">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Architectural Models</h3>
                    <p className="text-[var(--text-slate)] leading-relaxed">
                      Hyper-detailed scale models for real estate developers, architects, and city planners. Precision cut using advanced CNC and 3D printing technologies.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Bento Block 2 */}
            <div className="md:col-span-4">
              <Reveal delay={0.2} y={20}>
                <Link href="/services">
                  <div className="bento-card p-10 h-full min-h-[400px] flex flex-col bg-[var(--bg-alabaster)] hover:bg-[var(--bg-paper)]">
                    <h3 className="text-xl font-bold mb-4 mt-auto">Industrial & Defense</h3>
                    <p className="text-[var(--text-slate)] text-sm mb-8">
                      Complex facility layouts and classified military installations built with extreme accuracy.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span>View All Services</span> <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━ PORTFOLIO (Asymmetric Masonry/Gallery) ━━━━━━ */}
      <section className="py-32 bg-[var(--bg-paper)]" id="work">
        <div className="structural-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <Reveal>
              <div>
                <p className="font-[var(--font-accent)] text-xs tracking-widest uppercase text-[var(--text-muted)] mb-4">Selected Works</p>
                <h2 className="display-section">The Archives.</h2>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/portfolio">
                <MagneticButton className="btn-outline">
                  View Full Archive
                </MagneticButton>
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {projects.map((project, i) => (
              <div key={project.title} className={`${project.colSpan}`}>
                <Reveal delay={i * 0.1}>
                  <Link href="/portfolio">
                    <div className="group block cursor-pointer">
                      <div className="aspect-[4/3] md:aspect-auto md:h-[400px] w-full bg-[var(--bg-snow)] rounded-[var(--radius-md)] border border-[var(--border-subtle)] overflow-hidden relative mb-4">
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700">
                          <Building2 className="w-16 h-16 text-[var(--text-charcoal)]" strokeWidth={1} />
                        </div>
                      </div>
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-bold text-[var(--text-charcoal)] group-hover:text-[var(--text-slate)] transition-colors">{project.title}</h4>
                          <p className="font-[var(--font-accent)] text-xs tracking-widest uppercase text-[var(--text-muted)] mt-1">{project.city}</p>
                        </div>
                        <span className="text-xs font-medium px-3 py-1 bg-[var(--bg-stone)] rounded-full">{project.type}</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━ FOUNDER SECTION ━━━━━━ */}
      <FounderSection />

      {/* ━━━━━━ CLIENT MARQUEE (Quiet Style) ━━━━━━ */}
      <section className="py-24 border-y border-[var(--border-subtle)] bg-[var(--bg-snow)] overflow-hidden" id="clients">
        <Reveal>
          <p className="font-[var(--font-accent)] text-xs tracking-widest text-center uppercase text-[var(--text-muted)] mb-12">
            Trusted by Industry Leaders
          </p>
        </Reveal>
        <div className="relative flex animate-[marquee_40s_linear_infinite] gap-16 whitespace-nowrap">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={`${logo}-${i}`} className="flex items-center justify-center shrink-0">
              <span className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--border-strong)] hover:text-[var(--text-charcoal)] transition-colors duration-500 select-none">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
