import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About RD Models — Rohitash Daiya's Vision | Since 2014",
  description:
    "Learn about RD Models, India's leading architectural model making company. Founded by Ar. Rohitash Daiya in 2014 in Jaipur. 100+ craftsmen, 6 workshops across India.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
