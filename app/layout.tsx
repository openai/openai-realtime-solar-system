import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

const metadataBase = new URL(
  siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`,
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase,
  title: "Realtime Solar System",
  description: "Realtime API demo",
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Realtime Solar System",
    description: "Realtime API demo",
    images: ["/screenshot.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Realtime Solar System",
    description: "Realtime API demo",
    images: ["/screenshot.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
