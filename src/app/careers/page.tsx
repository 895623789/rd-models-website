import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at RD Models — Join India's Premier Model Making Studio",
  description: "Join the RD Models team. We're looking for architects, designers, CNC operators, 3D printing specialists, and craftsmen passionate about precision.",
};

const openings = [
  { title: "Senior Architect – Model Design", location: "Jaipur", type: "Full-time", desc: "Lead the design and planning of complex architectural models. B.Arch required." },
  { title: "CNC Machine Operator", location: "Jaipur", type: "Full-time", desc: "Operate CNC laser cutting and milling machines for precision model components." },
  { title: "3D Modeler / CAD Specialist", location: "Jaipur / Remote", type: "Full-time", desc: "Create detailed 3D models in SketchUp, AutoCAD, or Rhino for fabrication." },
  { title: "Workshop Craftsman", location: "Jaipur, Delhi", type: "Full-time", desc: "Hands-on model assembly, finishing, painting, and quality control." },
  { title: "Marketing Executive", location: "Jaipur", type: "Full-time", desc: "Drive digital marketing, social media, and client acquisition strategies." },
  { title: "Internship – Architecture", location: "Jaipur", type: "Internship", desc: "6-month hands-on internship for architecture students interested in model making." },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[var(--bg-atelier)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--gold-core)] mb-4">Join Our Team</p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[var(--platinum)]">
            Build Your Career at{" "}
            <span className="bg-gradient-to-r from-[var(--gold-core)] via-[var(--gold-ambient)] to-[var(--gold-core)] bg-clip-text text-transparent">RD Models</span>
          </h1>
          <p className="text-[var(--silver-slate)] text-lg mt-6 max-w-xl mx-auto">
            We&apos;re always looking for talented individuals passionate about architecture, craftsmanship, and innovation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="space-y-5">
            {openings.map((job) => (
              <div key={job.title} className="group border border-[rgba(255,255,255,0.06)] bg-gradient-to-br from-[#0F0F18] to-[#141420] rounded-xl p-6 md:p-8 hover:border-[rgba(212,168,67,0.35)] transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--platinum)]">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-[var(--muted)]">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.type}</span>
                    </div>
                    <p className="text-sm text-[var(--silver-slate)] mt-3 leading-relaxed">{job.desc}</p>
                  </div>
                  <Link href="/contact" className="btn-ghost text-xs shrink-0 self-start">
                    Apply <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 p-8 border border-[rgba(255,255,255,0.06)] rounded-xl">
            <Briefcase className="w-10 h-10 text-[var(--gold-core)] opacity-30 mx-auto mb-4" />
            <p className="text-[var(--platinum)] font-medium mb-2">Don&apos;t see your role?</p>
            <p className="text-sm text-[var(--silver-slate)] mb-4">Send your resume to rdarmodels@gmail.com</p>
            <a href="mailto:rdarmodels@gmail.com" className="btn-gold text-xs">Send Resume <ArrowRight className="w-3 h-3" /></a>
          </div>
        </div>
      </section>
    </>
  );
}
