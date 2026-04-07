"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/effects/MagneticButton";

const links = [
  { name: "Models", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > 200 && currentScrollY > lastScrollY) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY || currentScrollY < 200) {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden && !mobileMenuOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 ${
          isScrolled
            ? "bg-[var(--bg-snow)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="structural-container">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="relative z-[101] flex items-center"
            >
              <Image 
                src="/logo.png" 
                alt="RD Models Logo" 
                width={160} 
                height={50} 
                className="object-contain h-10 md:h-12 w-auto drop-shadow-sm"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group text-sm font-medium text-[var(--text-charcoal)]"
                >
                  {link.name}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-[var(--text-charcoal)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <div className="w-[1px] h-4 bg-[var(--border-strong)] mx-2" />
              <Link href="/quote">
                <MagneticButton intensity={0.2} className="btn-primary py-2.5 px-6 rounded-full text-xs tracking-wide">
                  Order a Model
                </MagneticButton>
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden relative z-[101] p-2 text-[var(--text-charcoal)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <motion.span
                  animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 0 : -4 }}
                  className="absolute w-full h-[2px] bg-current transform origin-center transition-all duration-300"
                />
                <motion.span
                  animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                  className="absolute w-full h-[2px] bg-current transition-opacity duration-300"
                />
                <motion.span
                  animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? 0 : 4 }}
                  className="absolute w-full h-[2px] bg-current transform origin-center transition-all duration-300"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[var(--bg-snow)] pt-24 px-6 flex flex-col"
          >
            <nav className="flex-1 flex flex-col justify-center gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group font-[var(--font-display)] text-5xl font-bold text-[var(--text-charcoal)] flex items-center gap-4"
                  >
                    {link.name}
                    <ArrowUpRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--text-charcoal)] text-white font-medium rounded-full text-sm"
                >
                  Start a Project
                </Link>
              </motion.div>
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="py-10 border-t border-[var(--border-subtle)] flex flex-col gap-2"
            >
              <p className="font-[var(--font-accent)] text-xs tracking-widest uppercase text-[var(--text-muted)]">Get in touch</p>
              <a href="mailto:rdarmodels@gmail.com" className="text-lg font-medium text-[var(--text-charcoal)]">rdarmodels@gmail.com</a>
              <a href="tel:+919672232299" className="text-lg font-medium text-[var(--text-charcoal)]">+91 96722 32299</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
