import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

const title = "Dlombi's Guesthouse | Dennilton, South Africa";
const description = "A warm welcome and peaceful township and rural accommodation in Dennilton, South Africa. Enquire directly by WhatsApp, phone or email.";
const shareImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "The landscaped garden at Dlombi's Guesthouse in Dennilton",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Dlombi's Guesthouse",
    type: "website",
    locale: "en_ZA",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage.url],
  },
};
export const viewport: Viewport = {
  themeColor: "#f6f4ef",
  width: "device-width",
  initialScale: 1,
};

const businessData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Dlombi's Guesthouse",
  description: "Township and rural accommodation in Dennilton, South Africa.",
  telephone: "+27 79 925 5959",
  email: "engadinibb@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dennilton",
    addressCountry: "ZA",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA" className={dmSans.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }} />
      </body>
    </html>
  );
}
