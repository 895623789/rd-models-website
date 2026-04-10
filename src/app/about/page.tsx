"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Globe, Users, Trophy, MapPin, Target, History, Cpu } from "lucide-react";
import Reveal from "@/components/common/Reveal";

/* ============================================================
   DATA
   ============================================================ */
const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    value: "2,000+",
    label: "Models Delivered",
    desc: "From small block study models to some of the world's largest and most intricate projects, showcasing versatility from 1:20,000 to life-size scales."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    value: "3+",
    label: "Countries",
    desc: "An efficient global delivery system ensuring timely and secure transport of models to international clients across 3+ countries."
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "700+",
    label: "Global Clients",
    desc: "Building lasting relationships with top-tier corporations, government agencies, and scientific institutions based on trust and excellence."
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    value: "8+",
    label: "Locations in India",
    desc: "A synchronized network of workshops in Jaipur, Delhi, Bangalore, Hyderabad, Ahmedabad, and Mumbai, ensuring high-quality standards nationwide."
  }
];

const technologies = [
  "CNC Laser Cutting",
  "CNC Milling",
  "5D CNC Carving",
  "Vacuum Forming",
  "Large 3D Scanning"
];

/* ============================================================
   PAGE COMPONENT
   ============================================================ */
export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen">
      {/* ━━━━━━ HERO SECTION ━━━━━━ */}
      <section className="relative py-24 bg-[var(--bg-snow)] overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[60vh] bg-[var(--border-subtle)] blur-3xl opacity-20 rounded-bl-full pointer-events-none" />
        <div className="structural-container relative z-10">
          <Reveal>
            <p className="font-[var(--font-accent)] text-xs tracking-widest uppercase text-[var(--text-muted)] mb-4">Crafting Reality</p>
            <h1 className="display-hero mb-8">About RD Models</h1>
            <p className="text-prose max-w-2xl">
              India's premier destination for high-fidelity scale models, committed to innovation, precision, and unmatched quality for over 12 years.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━ ACHIEVEMENTS SECTION ━━━━━━ */}
      <section className="py-32 border-y border-[var(--border-subtle)]">
        <div className="structural-container">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="display-section mb-4">Our Achievements</h2>
              <p className="text-[var(--text-muted)]">A snapshot of our growth and impact in the 3D modeling industry</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <div className="bento-card p-8 h-full bg-white border border-[var(--border-subtle)] hover:shadow-[var(--shadow-float)] transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-full bg-[var(--bg-snow)] flex items-center justify-center mb-6 text-[var(--text-charcoal)] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-1">{item.value}</h3>
                  <p className="font-[var(--font-accent)] text-xs tracking-widest uppercase text-[var(--text-muted)] mb-4">{item.label}</p>
                  <p className="text-sm text-[var(--text-slate)] leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━ STORY & MISSION SECTIONS ━━━━━━ */}
      <section className="py-32 overflow-hidden">
        <div className="structural-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <Reveal x={-50}>
              <div className="relative aspect-video rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--shadow-float)]">
                <Image 
                  src="/hero-about.jpg" 
                  alt="RD Models Workshop" 
                  fill 
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex items-center gap-2 mb-6">
                <History className="w-5 h-5 text-[var(--text-muted)]" />
                <span className="font-[var(--font-accent)] text-xs tracking-widest uppercase text-[var(--text-muted)]">Our Story</span>
              </div>
              <h2 className="display-section mb-8">12 Years of Innovation</h2>
              <div className="space-y-6 text-prose">
                <p>
                  Welcome to RD Models, India's foremost model-making company under the visionary leadership of Ar. Rohitash Daiya. Over the past 12 years, we have been committed to innovation, precision, and unmatched quality.
                </p>
                <p>
                  From our humble beginnings in Jaipur, we have expanded nationwide with workshops in Delhi, Bangalore, Hyderabad, Ahmedabad, and Mumbai. Our relentless pursuit of excellence has established us as the go-to model maker for top-tier companies and institutions globally.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center flex-row-reverse">
            <div className="order-2 lg:order-1">
              <Reveal>
                <div className="flex items-center gap-2 mb-6">
                  <Target className="w-5 h-5 text-[var(--text-muted)]" />
                  <span className="font-[var(--font-accent)] text-xs tracking-widest uppercase text-[var(--text-muted)]">Our Mission</span>
                </div>
                <h2 className="display-section mb-8">Setting Global Benchmarks</h2>
                <div className="space-y-6 text-prose mb-10">
                  <p>
                    Our mission is to push the boundaries of scale model making by leveraging the latest technologies to create detailed, accurate, and aesthetically pleasing models. We aim to be the industry benchmark, continually setting new standards of quality and craftsmanship.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, i) => (
                    <div key={tech} className="flex items-center gap-2 text-sm text-[var(--text-slate)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-charcoal)]" />
                      {tech}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            
            <div className="order-1 lg:order-2">
              <Reveal x={50} delay={0.2}>
                <div className="bg-[var(--bg-paper)] p-12 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] relative overflow-hidden group">
                  <Cpu className="absolute -top-10 -right-10 w-40 h-40 opacity-5 group-hover:opacity-10 transition-opacity" />
                  <h3 className="text-2xl font-bold mb-6">Advanced Production</h3>
                  <p className="text-sm text-[var(--text-slate)] leading-relaxed mb-8">
                    Our extensive in-house capabilities include high-precision 5D CNC carving, vacuum forming, and large-scale 3D scanning, enabling us to execute projects with unparalleled complexity.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-1 flex-grow bg-[var(--border-subtle)] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-[var(--text-charcoal)]"
                      />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold">Industry 4.0</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
