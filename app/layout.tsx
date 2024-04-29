import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neven Zdelar",
  description: "Neven Zdelar's personal website",
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
