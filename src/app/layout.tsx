import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MouseAura } from "@/components/ui/MouseAura";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://federicolardieri.com"),
  title: {
    default: "Federico Lardieri | AI Automation Specialist",
    template: "%s | Federico Lardieri"
  },
  description: "Federico Lardieri — AI Automation Specialist. Progetto e implemento sistemi di automazione AI per aziende che vogliono ridurre il lavoro manuale, aumentare il fatturato e scalare senza assumere.",
  keywords: ["AI automation", "automazioni AI", "AI specialist", "Federico Lardieri", "n8n", "automazione processi", "intelligenza artificiale aziende", "web developer"],
  authors: [{ name: "Federico Lardieri" }],
  creator: "Federico Lardieri",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://federicolardieri.com",
    title: "Federico Lardieri | AI Automation Specialist",
    description: "Federico Lardieri — AI Automation Specialist. Sistemi di automazione AI su misura per aziende italiane.",
    siteName: "Federico Lardieri",
    images: [
      {
        url: "/federico-lardieri.png",
        width: 1200,
        height: 630,
        alt: "Federico Lardieri - AI Automation Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Federico Lardieri | AI Automation Specialist",
    description: "Sistemi di automazione AI per aziende che vogliono crescere senza assumere nuovo personale.",
    images: ["/federico-lardieri.png"],
  },
  verification: {
    google: "rpMCnEIDGVNr98N2vA0Zu9l_n-zRDCYEI1bs6z2FHSE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://federicolardieri.com/#person",
      "name": "Federico Lardieri",
      "jobTitle": "AI Automation Specialist",
      "url": "https://federicolardieri.com",
      "sameAs": [
        "https://www.linkedin.com/in/federico-lardieri-403282315/",
        "https://github.com/federicolardieri"
      ],
      "image": "https://federicolardieri.com/federico-lardieri.png"
    },
    {
      "@type": "WebSite",
      "@id": "https://federicolardieri.com/#website",
      "url": "https://federicolardieri.com",
      "name": "Federico Lardieri — AI Automation",
      "description": "Sistemi di automazione AI per aziende italiane",
      "publisher": { "@id": "https://federicolardieri.com/#person" }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground flex min-h-screen flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MouseAura />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
