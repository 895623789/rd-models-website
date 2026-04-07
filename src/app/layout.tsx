import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Providers & Components
import LenisProvider from "@/components/providers/LenisProvider";
import ScrollProgress from "@/components/effects/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/common/WhatsAppFAB";

// Fonts setup
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rdmodels.com"),
  title: {
    template: "%s | RD Models",
    default: "RD Models | Premium Architectural Model Maker in India",
  },
  description:
    "India's premier 3D architectural scale model making company. Specializing in highly detailed residential, commercial, industrial, and miniature landscape models since 2014.",
  keywords: [
    "architectural models",
    "model maker Delhi",
    "model maker Mumbai",
    "building model",
    "Rohitash Daiya",
    "CNC model making",
    "3D printing architectural models",
    "real estate scale model",
    "defense model making",
    "railway model India",
  ],
  authors: [{ name: "RD Models", url: "https://rdmodels.com" }],
  creator: "RD Models",
  publisher: "RD Models",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "https://rdmodels.com" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rdmodels.com",
    siteName: "RD Models",
    title: "RD Models — India's Premier 3D Architectural Model Making Studio",
    description:
      "2300+ models delivered. 700+ happy clients. 8+ countries served. Tata, Vedanta, L&T, Reliance trust us.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RD Models - Architectural Scale Models India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RD Models — India's #1 Architectural Scale Model Maker",
    description:
      "2300+ models. 700+ clients. Crafting architectural masterpieces since 2014.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://rdmodels.com/#organization",
                  name: "RD Models",
                  alternateName: [
                    "R D Models",
                    "RD Model",
                    "RDModels",
                    "RD Models Jaipur",
                  ],
                  url: "https://rdmodels.com",
                  logo: "https://rdmodels.com/logo.png",
                  description:
                    "India's premier 3D architectural scale model making company. 2300+ models, 700+ clients across 8+ countries.",
                  foundingDate: "2014",
                  founder: {
                    "@type": "Person",
                    name: "Rohitash Daiya",
                    jobTitle: "Architect & Founder",
                    alumniOf: "Aayojan School of Architecture",
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "84/54, Sector 8, Pratap Nagar",
                    addressLocality: "Jaipur",
                    addressRegion: "Rajasthan",
                    postalCode: "302033",
                    addressCountry: "IN",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 26.8015918,
                    longitude: 75.8164397,
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-9672232299",
                    email: "rdarmodels@gmail.com",
                    contactType: "customer service",
                  },
                  sameAs: [
                    "https://www.instagram.com/rd.models/",
                    "https://www.youtube.com/@rdmodels",
                    "https://www.facebook.com/rdarmodels",
                  ],
                  numberOfEmployees: {
                    "@type": "QuantitativeValue",
                    value: 100,
                  },
                  areaServed: [
                    "India",
                    "United States",
                    "United Kingdom",
                    "UAE",
                  ],
                  openingHours: "Mo-Sa 09:00-19:00",
                  priceRange: "₹₹₹",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://rdmodels.com/#website",
                  url: "https://rdmodels.com",
                  name: "RD Models",
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://rdmodels.com/search?q={search_term_string}",
                    "query-input":
                      "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-[var(--font-sans)] bg-[var(--bg-snow)] text-[var(--text-charcoal)] antialiased">
        <LenisProvider>
          <ScrollProgress />
          <Navbar />
          <main className="relative z-10 flex min-h-screen flex-col">{children}</main>
          <Footer />
          <WhatsAppFAB />
        </LenisProvider>
      </body>
    </html>
  );
}
