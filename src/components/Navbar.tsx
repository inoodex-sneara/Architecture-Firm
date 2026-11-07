"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  ChevronRight, 
  ExternalLink,
  Headphones,
  Phone,
  Search
} from "lucide-react";

interface MenuItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Properties", href: "#properties" },
  { name: "Landowner", href: "#landowner" },
  { name: "Construction status", href: "#construction-status" },
  { name: "Referral program", href: "#referral", isExternal: true },
  { name: "NRB", href: "#nrb" },
  { name: "Contact us", href: "#contact" },
  { name: "Arshi Haider", href: "#arshi-haider", isExternal: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when menu drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#181818]/90 backdrop-blur-md shadow-lg py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo (bti inspired) */}
          <Link href="/" className="flex items-center gap-3.5 group">
            {/* Oval Logo Emblem */}
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-xs group-hover:border-white/60 transition-colors">
              <span className="font-serif font-black tracking-tighter text-xl text-white">
                bti
              </span>
            </div>

            {/* Brand Title & Tagline */}
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-white leading-tight uppercase">
                building technology <br className="hidden sm:inline" />
                & ideas ltd.
              </span>
              <span className="text-[10px] sm:text-[11px] font-serif italic text-zinc-400 tracking-wider">
                in pursuit of excellence
              </span>
            </div>
          </Link>

          {/* Right: Hamburger / Menu Toggle Button */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-3 px-4 py-2 rounded-md bg-black/40 hover:bg-black/60 border border-white/20 hover:border-white/40 text-white backdrop-blur-sm transition-all cursor-pointer focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <span className="text-xs uppercase tracking-widest font-medium hidden sm:inline text-zinc-200 group-hover:text-white">
                Menu
              </span>
              <div className="w-8 h-8 rounded flex items-center justify-center text-white">
                <Menu className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Menu Drawer & Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Dimmed Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
            aria-hidden="true"
          />

          {/* Right-Side Drawer */}
          <div
            className="relative w-full sm:w-[420px] md:w-[460px] h-full bg-[#181818] text-white shadow-2xl flex flex-col z-10 overflow-y-auto animate-in slide-in-from-right duration-300"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                linear-gradient(135deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%),
                linear-gradient(225deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%),
                linear-gradient(45deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%),
                linear-gradient(315deg, rgba(255, 255, 255, 0.02) 25%, #181818 25%)
              `,
              backgroundSize: "28px 28px, 28px 28px, 28px 28px, 28px 28px, 28px 28px",
              backgroundPosition: "0 0, 14px 0, 14px -14px, 0 14px, 0 0"
            }}
          >
            {/* Drawer Header with Close Button */}
            <div className="flex items-center justify-end p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-full border border-white/60 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 px-8 sm:px-12 pb-10">
              {/* Menu Title */}
              <h2 className="text-2xl font-bold tracking-tight text-white mb-8 border-b border-white/10 pb-4">
                Menu
              </h2>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-3 py-2 text-zinc-300 hover:text-white transition-all duration-200"
                  >
                    {/* Chevron Indicator */}
                    <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />

                    {/* Link Label */}
                    <span className="text-base font-normal tracking-wide group-hover:translate-x-1 transition-transform">
                      {item.name}
                    </span>

                    {/* External Link Icon if applicable */}
                    {item.isExternal && (
                      <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-white ml-1 opacity-80" />
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Footer Details */}
            <div className="p-8 border-t border-white/10 bg-black/40 text-xs text-zinc-400 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-300" />
                <span className="font-mono">16604 / +880 9612-008822</span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-1">
                © 2026 Building Technology & Ideas Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Support / Inquiry Headset Button (as seen in bti bottom-right) */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-30 w-12 h-12 rounded-full bg-black/80 hover:bg-black border border-white/30 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer backdrop-blur-xs"
        aria-label="Customer Support & Quick Menu"
        title="Menu & Inquiries"
      >
        <Headphones className="w-5 h-5 text-white" />
      </button>
    </>
  );
}
