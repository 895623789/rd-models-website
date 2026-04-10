import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/* Custom SVG social icons */
const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.2 8.38 8.38 0 0 1 3.5 1"/>
    <path d="M16 12l2-1.5L20 12l-2 1.5L16 12z"/>
  </svg>
);

const quickLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Our Process", href: "/services" },
  { name: "Company", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Testimonials", href: "/testimonials" },
];

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/rd.models/", icon: InstagramIcon },
  { name: "YouTube", href: "https://www.youtube.com/@rdmodels", icon: YoutubeIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/rdmodels/posts/", icon: LinkedinIcon },
  { name: "Facebook", href: "https://www.facebook.com/rdarmodels", icon: FacebookIcon },
  { name: "WhatsApp", href: "https://wa.me/+9672232299", icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-snow)] relative mt-20 sm:mt-32">
      {/* Huge Newsletter / CTA area above footer */}
      <div className="structural-container pb-20">
        <div className="bg-[var(--bg-paper)] rounded-[var(--radius-bento)] p-10 md:p-20 text-center border border-[var(--border-subtle)] shadow-[var(--shadow-soft)]">
          <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-[var(--text-charcoal)] mb-6">
            Ready to build something <br className="hidden md:block" /> remarkable together?
          </h2>
          <Link href="/quote" className="btn-primary">
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-[var(--border-subtle)] pt-16 pb-8">
        <div className="structural-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Brand Column */}
            <div className="md:col-span-5 lg:col-span-4">
              <Link href="/" className="inline-block mb-6 relative">
                <Image 
                  src="/logo.png" 
                  alt="RD Models Logo" 
                  width={200} 
                  height={60} 
                  className="object-contain h-12 w-auto"
                />
              </Link>
              <p className="text-sm text-[var(--text-slate)] leading-relaxed mb-8 max-w-sm">
                Leading 3D architectural modeling company based in Jaipur, Rajasthan. Transforming complex building concepts into precision visualizations since 2012.
              </p>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-[var(--text-muted)] hover:text-[var(--text-charcoal)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-1 lg:col-span-2 hidden md:block" /> {/* Spacer */}

            {/* Quick Links */}
            <div className="md:col-span-3 lg:col-span-3">
              <h3 className="font-[var(--font-accent)] text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-6">
                Explore
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-slate)] hover:text-[var(--text-charcoal)] transition-colors duration-300 inline-flex items-center group"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-3 lg:col-span-3">
              <h3 className="font-[var(--font-accent)] text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:rdarmodels@gmail.com" className="text-sm text-[var(--text-slate)] hover:text-[var(--text-charcoal)] transition-colors">
                    rdarmodels@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919672232299" className="text-sm text-[var(--text-slate)] hover:text-[var(--text-charcoal)] transition-colors">
                    +91 96722 32299
                  </a>
                </li>
                <li className="text-sm text-[var(--text-slate)] mt-6">
                  84/54, Sector 8, Pratap Nagar,<br />
                  Jaipur, Rajasthan 302033
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[var(--border-subtle)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
            <p>© {new Date().getFullYear()} RD Models. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[var(--text-charcoal)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[var(--text-charcoal)] transition-colors">
                Terms of Service
              </Link>
            </div>
            <p>Designed for precision.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
