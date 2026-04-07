import type { Metadata } from "next";
import TestimonialsPageClient from "./TestimonialsPageClient";

export const metadata: Metadata = {
  title: "Testimonials — What Our Clients Say About RD Models",
  description: "Read testimonials from 700+ satisfied clients of RD Models — Tata, Vedanta, L&T, PMC Buildskills, and more. India's most trusted model makers.",
};

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}
