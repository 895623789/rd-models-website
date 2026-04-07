import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact RD Models — +91 96722 32299 | Jaipur HQ",
  description: "Contact RD Models for scale model projects. Phone: +91 96722 32299. Email: rdarmodels@gmail.com. HQ: Jaipur, Rajasthan. Workshops in Delhi, Mumbai, Bangalore.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
