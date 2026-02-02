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
  metadataBase: new URL("https://fe-dev.vercel.app"),
  title: {
    default: "Fe-Dev | Sviluppo Web & Automazioni AI",
    template: "%s | Fe-Dev"
  },
  description: "Web Developer & AI Specialist. Sviluppo siti web moderni, e-commerce e soluzioni di automazione AI per scalare il tuo business. Esperti in Next.js e integrazioni n8n.",
  keywords: ["web developer", "full stack developer", "sviluppo siti web", "automazioni AI", "AI automation", "Next.js developer", "Federico Lardieri", "Fe-Dev"],
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
    url: "https://fe-dev.vercel.app",
    title: "Fe-Dev | Sviluppo Web & Automazioni AI",
    description: "Web Developer & AI Specialist. Sviluppo siti web, e-commerce e automazioni AI su misura.",
    siteName: "Fe-Dev",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Fe-Dev - Sviluppo Web & Automazioni AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fe-Dev | Sviluppo Web & Automazioni AI",
    description: "Sviluppo siti web moderni e soluzioni di automazione AI per aziende.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/logo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://fe-dev.vercel.app/#person",
      "name": "Federico Lardieri",
      "jobTitle": "Web Developer & AI Specialist",
      "url": "https://fe-dev.vercel.app",
      "sameAs": [
        "https://www.linkedin.com/in/federico-lardieri-403282315/",
        "https://github.com/federicolardieri"
      ],
      "image": "https://fe-dev.vercel.app/logo.jpg"
    },
    {
      "@type": "WebSite",
      "@id": "https://fe-dev.vercel.app/#website",
      "url": "https://fe-dev.vercel.app",
      "name": "Fe-Dev",
      "description": "Studio di Sviluppo Web e Automazioni AI",
      "publisher": { "@id": "https://fe-dev.vercel.app/#person" }
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
