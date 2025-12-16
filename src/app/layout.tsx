import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Alabi Oluwasegun Akeem — Product-Focused Software Engineer",
  description:
    "Product-focused software engineer with deep QA/automation expertise. I build end-to-end solutions by identifying gaps and shipping reliable products.",
  metadataBase: new URL("https://segunalabi.com"),
  openGraph: {
    title: "Alabi Oluwasegun Akeem — Product-Focused Software Engineer",
    description:
      "Showcasing a portfolio of product-driven engineering solutions with a focus on reliability, automation and thoughtful design.",
    type: "website",
    url: "https://segunalabi.com",
    images: [
      {
        url: "/projects/aether-studio.png",
        width: 1200,
        height: 630,
        alt: "Segunalabi hero image",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}