import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/components/Providers";
import { ConsoleSignature } from "@/components/ConsoleSignature";
import CommandPalette from "@/components/CommandPalette";
import { Schema } from "@/components/Schema";
import { siteConfig } from "@/utils/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s • ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
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
  alternates: {
    types: {
      'application/rss+xml': '/rss',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "jobTitle": "Frontend Developer",
    "sameAs": [
      "https://github.com/akhilesh-w",
      "https://twitter.com/akhileshw_xyz",
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen transition-colors duration-300`}>
        <Schema data={personSchema} />
        <Providers>
          <div className="bg-white dark:bg-gray-900 text-neutral-800 dark:text-neutral-400 min-h-screen transition-colors duration-300">
            {children}
          </div>
          <SpeedInsights />
          <Analytics />
          <ConsoleSignature />
          <CommandPalette />
        </Providers>
      </body>
    </html>
  );
}
