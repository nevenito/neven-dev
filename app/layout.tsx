import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neven Zdelar | Web, mobile, and desktop apps that feel finished",
  description:
    "Neven Zdelar builds web, mobile, and desktop apps with eight years of hands-on delivery, strong frontend taste, and a track record of shipping AI-heavy products for real clients.",
  keywords:
    "neven zdelar, web app developer, mobile app developer, desktop app developer, ai product ui, frontend engineer, upwork top rated plus, product design implementation, creative frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " flex h-screen w-screen flex-col overflow-x-hidden bg-gray-950"
        }
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
