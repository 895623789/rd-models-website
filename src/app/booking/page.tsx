import type { Metadata } from "next";
import BookingPageClient from "./BookingPageClient";

export const metadata: Metadata = {
  title: "Book a Meeting — RD Models Scale Model Studio",
  description: "Book a meeting, video call, or site visit with RD Models. Schedule your architectural scale model consultation today.",
};

export default function BookingPage() {
  return <BookingPageClient />;
}
