import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  verification: {
    google: 'GsV_3_triVwZXNnffPNiN2nGANIvZVbi97EbnbTJ29s',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
