import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neven Zdelar - Creative Web Developer",
  description:
    "Personal website of Neven Zdelar, a web developer specializing in delivering high-quality websites. Check out my portfolio and contact me for your next project!",
  keywords:
    "web developer, react, nextjs, portfolio, projects, contact, frontend, developer, neven zdelar, neven, zdelar, frontend developer, front end, design, ai, chatbot, web design, website builder, web designer, website creator, stranica, web stranica",
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
