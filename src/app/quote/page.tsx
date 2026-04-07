import type { Metadata } from "next";
import QuotePageClient from "./QuotePageClient";

export const metadata: Metadata = {
  title: "Get a Quote — Custom Scale Model Pricing",
  description: "Request a custom quote for your architectural scale model project. Choose project type, scale, size, and special requirements. RD Models India.",
};

export default function QuotePage() {
  return <QuotePageClient />;
}
