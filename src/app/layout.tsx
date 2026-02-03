import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GK-8 | Gestes-Clés × 8",
  description: "Formation prévention TMS et gestes & postures pour le terrain. 8 gestes pour protéger votre dos et votre carrière.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlobalLoader } from "@/components/layout/GlobalLoader";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} antialiased min-h-screen bg-gk-black text-gk-white flex flex-col`}>
        <Suspense fallback={null}>
          <GlobalLoader />
        </Suspense>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
