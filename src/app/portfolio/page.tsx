import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio — 2300+ Architectural Scale Model Projects",
  description: "Explore RD Models' portfolio of 2300+ architectural scale models across Jaipur, Mumbai, Delhi, Bangalore, Hyderabad, Ahmedabad, Chennai, Pune & Lucknow.",
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
