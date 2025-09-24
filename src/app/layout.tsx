import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GlobalCTA from "@/components/global-cta";
import StructuredData from "@/components/structured-data";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import { Toaster } from "@/components/ui/sonner";

const anekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-anek-telugu",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Isma Design & Build - Interior Design & Renovation in Kota Kinabalu",
    template: "%s | Isma Design & Build"
  },
  description: "Professional interior design with Feng Shui, design & build, construction, custom furniture, and flooring services in Kota Kinabalu, Sabah. Transform your space with quality craftsmanship. Free consultation available.",
  keywords: [
    "interior design kk",
    "feng shui kk",
    "feng shui consultant sabah",
    "design and build kk",
    "renovation kk",
    "isma design build",
    "custom furniture kk",
    "built in furniture sabah",
    "flooring kk",
    "curtains kk",
    "construction contractor sabah",
    "local authority approval kk",
    "interior designer kota kinabalu"
  ],
  authors: [{ name: "Isma Design & Build" }],
  creator: "Isma Design & Build",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ismadesignbuild.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Isma Design & Build - Interior Design & Renovation in Kota Kinabalu",
    description: "Professional interior design with Feng Shui, design & build, construction, custom furniture, and flooring services in Kota Kinabalu, Sabah.",
    url: '/',
    siteName: "Isma Design & Build",
    images: [
      {
        url: '/images/hero.svg',
        width: 1920,
        height: 1080,
        alt: 'Isma Design & Build - Interior Design Services',
      },
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Isma Design & Build - Interior Design & Renovation in Kota Kinabalu",
    description: "Professional interior design with Feng Shui, design & build, construction, custom furniture, and flooring services in Kota Kinabalu, Sabah.",
    images: ['/images/hero.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={anekTelugu.variable}>
      <head>
        <StructuredData />
      </head>
      <body className={`${anekTelugu.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
          <GlobalCTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Toaster />
      </body>
    </html>
  );
}
