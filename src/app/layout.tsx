import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import { Providers } from "../../components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://akhileshw.xyz'),
  title: {
    default: "Akhilesh Waghmare",
    template: '%s • Akhilesh Waghmare',
  },
  description: "Front-end Developer",
  openGraph: {
    title: "Akhilesh Waghmare",
    description: "Frontend Developer",
    url: "https://akhileshw.xyz",
    siteName: "Akhilesh Waghmare",
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
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.className} min-h-screen transition-colors duration-300`}>
          <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
            {children}
          </div>
          <SpeedInsights />
          <Analytics />
        </body>
      </Providers>
    </html >
  );
}
