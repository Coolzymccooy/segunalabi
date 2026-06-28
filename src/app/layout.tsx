import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { Fraunces, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata = {
  title: "Tiwaton Product Studio — Lumina Presenter, Church Presentation Software",
  description:
    "Product studio behind Lumina Presenter, church presentation software for live services, worship teams, Bible slides, lyrics, stage display and AI-assisted service planning.",
  metadataBase: new URL("https://segunalabi.co.uk"),
  verification: {
    google: "uq_c1G77a6QiQH47sNYSBfPsezyuC1aXENFOExZ5QBc",
  },
  openGraph: {
    title: "Tiwaton Product Studio — Lumina Presenter",
    description:
      "Explore Lumina Presenter, church presentation software for live services, plus practical AI-powered products for worship, media and enterprise teams.",
    type: "website",
    url: "https://segunalabi.co.uk",
    images: [
      {
        url: "https://luminalive.co.uk/og/lumina-home.png",
        width: 1200,
        height: 630,
        alt: "Lumina Presenter church presentation software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiwaton Product Studio — Lumina Presenter",
    description:
      "Church presentation software and practical AI-powered products for worship, media and enterprise teams.",
    images: ["https://luminalive.co.uk/og/lumina-home.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} min-h-screen bg-paper font-sans text-ink antialiased`}
      >
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
