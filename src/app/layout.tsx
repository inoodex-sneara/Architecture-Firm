import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { GsapProvider } from "@/providers/GsapProvider";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Archiform | Architecture & Design Studio",
  description: "Contemporary architecture and spatial design studio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-black selection:text-white font-sans antialiased">
        <GsapProvider>
          <SmoothScrollProvider>
            <Navbar />
            {children}
            <Footer />
            <FloatingActions />
          </SmoothScrollProvider>
        </GsapProvider>
      </body>
    </html>
  );
}
