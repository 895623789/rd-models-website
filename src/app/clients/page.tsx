import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients — Tata, Vedanta, L&T & 700+ More Trust RD Models",
  description: "RD Models is trusted by India's top companies: Tata, Vedanta, L&T, Reliance, Godrej, Maruti, IIT Jodhpur and 700+ clients across 8+ countries.",
};

const clients = [
  { name: "Tata Group", tier: "Enterprise" },
  { name: "Vedanta Limited", tier: "Enterprise" },
  { name: "L&T (Larsen & Toubro)", tier: "Enterprise" },
  { name: "Reliance Industries", tier: "Enterprise" },
  { name: "Godrej Properties", tier: "Enterprise" },
  { name: "Maruti Suzuki", tier: "Enterprise" },
  { name: "IIT Jodhpur", tier: "Institutional" },
  { name: "KGK Realty", tier: "Real Estate" },
  { name: "Akshat Group", tier: "Real Estate" },
  { name: "Ashadeep Group", tier: "Real Estate" },
  { name: "Radisson Group", tier: "Hospitality" },
  { name: "EGIS", tier: "Infrastructure" },
  { name: "SARAS", tier: "Government" },
  { name: "Vanshdeep Builders", tier: "Real Estate" },
  { name: "Samurai Group", tier: "Real Estate" },
  { name: "Lalit Roongta Group", tier: "Real Estate" },
  { name: "Ocube Architects", tier: "Architecture" },
  { name: "First Stone", tier: "Real Estate" },
  { name: "Atelier Asthete", tier: "Architecture" },
  { name: "Mojika Ultima", tier: "Real Estate" },
  { name: "PMC Buildskills", tier: "Construction" },
  { name: "Dhanraj School", tier: "Education" },
  { name: "HZL - Vedanta", tier: "Mining" },
  { name: "Sudama Plywood", tier: "Industrial" },
];

const tiers = ["All", "Enterprise", "Real Estate", "Institutional", "Architecture", "Infrastructure", "Government", "Hospitality", "Construction", "Education", "Mining", "Industrial"];

export default function ClientsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[var(--bg-atelier)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--gold-core)] mb-4">Trusted by Industry Leaders</p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[var(--platinum)]">
            700+ Clients,{" "}
            <span className="bg-gradient-to-r from-[var(--gold-core)] via-[var(--gold-ambient)] to-[var(--gold-core)] bg-clip-text text-transparent">Infinite Trust</span>
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group border border-[rgba(255,255,255,0.06)] rounded-xl p-6 text-center hover:border-[rgba(212,168,67,0.35)] hover:bg-[var(--bg-pedestal)] transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-xl bg-[var(--bg-pedestal)] border border-[rgba(255,255,255,0.06)] flex items-center justify-center mx-auto mb-3 group-hover:border-[rgba(212,168,67,0.2)] transition-colors">
                  <span className="text-lg font-bold text-[var(--gold-core)] opacity-40 group-hover:opacity-100 transition-opacity">{client.name.charAt(0)}</span>
                </div>
                <h3 className="font-medium text-sm text-[var(--platinum)]">{client.name}</h3>
                <span className="text-[10px] font-[var(--font-accent)] tracking-wider uppercase text-[var(--muted)] mt-1 block">{client.tier}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
