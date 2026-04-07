import type { Metadata } from "next";
import VideosPageClient from "./VideosPageClient";

export const metadata: Metadata = {
  title: "Videos — Our Craft in Motion | RD Models YouTube",
  description: "Watch RD Models' architectural model making process, project walkthroughs, and client testimonials on our YouTube channel.",
};

export default function VideosPage() {
  return <VideosPageClient />;
}
