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
  title: "Segun Alabi — Founder of Tiwaton & Product-Focused Software Engineer",
  description:
    "Founder of Tiwaton and product-focused software engineer building practical AI-powered products across worship, media, enterprise and finance.",
  metadataBase: new URL("https://segunalabi.co.uk"),
  verification: {
    google: "uq_c1G77a6QiQH47sNYSBfPsezyuC1aXENFOExZ5QBc",
  },
  openGraph: {
    title: "Segun Alabi — Founder of Tiwaton",
    description:
      "Product-focused software engineer building practical AI-powered tools, starting with Lumina Presenter.",
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
    title: "Segun Alabi — Founder of Tiwaton",
    description:
      "Building practical AI-powered products across worship, media, enterprise and finance.",
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
