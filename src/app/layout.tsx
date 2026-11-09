import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-dm-serif", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Dlombi's Guesthouse | Dennilton, South Africa",
  description: "A warm welcome and township and rural accommodation in Dennilton, South Africa. Enquire directly with Dlombi's Guesthouse about your stay.",
  ...(siteUrl ? {
    metadataBase: new URL(siteUrl),
    alternates: { canonical: "/" },
    openGraph: {
      url: siteUrl,
      images: [{
        url: "/images/client/courtyard.webp",
        width: 1024,
        height: 768,
        alt: "The covered courtyard at Dlombi's Guesthouse",
      }],
    },
  } : {}),
  openGraph: {
    title: "Dlombi's Guesthouse | Dennilton, South Africa",
    description: "A warm welcome and township and rural accommodation in Dennilton, South Africa.",
    type: "website",
    locale: "en_ZA",
    ...(siteUrl ? { url: siteUrl } : {}),
    ...(siteUrl ? { images: [{
      url: "/images/client/courtyard.webp",
      width: 1024,
      height: 768,
      alt: "The covered courtyard at Dlombi's Guesthouse",
    }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Dlombi's Guesthouse | Dennilton, South Africa",
    description: "A warm welcome and township and rural accommodation in Dennilton, South Africa.",
    ...(siteUrl ? { images: ["/images/client/courtyard.webp"] } : {}),
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
    <html lang="en-ZA" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }} />
      </body>
    </html>
  );
}
