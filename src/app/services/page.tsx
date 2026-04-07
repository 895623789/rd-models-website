import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Architectural Scale Model Making Services — RD Models India",
  description:
    "RD Models offers 8+ types of scale model making services: architectural, residential, commercial, industrial, railway, defense, landscape & interior models. CNC, 3D printing, handcraft.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
