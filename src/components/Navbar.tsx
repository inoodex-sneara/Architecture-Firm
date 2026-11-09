"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Headphones,
  Phone,
  X,
  Globe,
} from "lucide-react";

interface MenuItem {
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Special Offers", href: "/offers" },
  { name: "About Us", href: "/about" },
  { name: "Landowner", href: "/landowners" },
  { name: "Construction Status", href: "/construction-status" },
  { name: "NBR", href: "/nbr" },
  { name: "Contact", href: "/contact" },
];

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isWhiteTopPage =
    pathname?.startsWith("/construction-status/") ||
    pathname === "/properties" ||
    pathname?.startsWith("/properties/") ||
    pathname === "/featured-properties" ||
    pathname === "/offers" ||
    pathname?.startsWith("/offers/") ||
    pathname === "/contact" ||
    pathname === "/about" ||
    pathname === "/landowners";

  const isLightGlass = isScrolled || isWhiteTopPage;

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
        className={`fixed top-0 left-0 right-0 z-40 h-16 transition-all duration-300 backdrop-blur-2xl backdrop-saturate-150 border-b ${
          isLightGlass
            ? "bg-white/70 border-black/[0.07] shadow-[0_8px_30px_rgba(0,0,0,0.03)] text-zinc-900"
            : "bg-black/30 border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.2)] text-white"
        }`}
      >
        <div className="max-w-[1600px] h-full mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            aria-label="Inoodex home"
            className="w-[85px] shrink-0 sm:w-[105px]"
          >
            <Image
              src="/logo/logo.png"
              alt="Inoodex"
              width={2790}
              height={828}
              priority
              className={`h-auto w-full object-contain ${
                isLightGlass ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* MENU Toggle Button (as shown in user screenshot: MENU ≡) */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className={`group flex items-center gap-2.5 sm:gap-3 transition-all hover:opacity-75 cursor-pointer py-1.5 focus:outline-none ${
              isLightGlass ? "text-zinc-900" : "text-white"
            }`}
            aria-label="Open Navigation Menu"
            aria-expanded={isOpen}
          >
            <span className="text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase select-none">
              MENU
            </span>
            <div className="flex flex-col items-center justify-center gap-[4.5px]">
              <span className="h-[1.5px] w-6 bg-current rounded-full" />
              <span className="h-[1.5px] w-6 bg-current rounded-full" />
              <span className="h-[1.5px] w-6 bg-current rounded-full" />
            </div>
          </button>
        </div>
      </header>

      {/* Slide-over Menu Drawer (Silver / Chrome Glass Luxury Theme) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Dimmed Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
            aria-hidden="true"
          />

          {/* Right-Side Luxury Drawer */}
          <div className="relative w-full sm:w-[420px] md:w-[460px] h-full bg-[#0d0e11] text-white shadow-2xl flex flex-col z-10 overflow-y-auto animate-in slide-in-from-right duration-300 border-l border-white/10 selection:bg-white/20">
            {/* Background Architecture Building Silhouette on the right side */}
            <div className="absolute right-0 bottom-16 w-[78%] h-[60%] pointer-events-none opacity-35 overflow-hidden">
              <Image
                src="/hero/slide-1.jpg"
                alt="Luxury building silhouette"
                fill
                className="object-cover object-bottom filter contrast-125 saturate-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e11] via-transparent to-[#0d0e11]" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0d0e11]/85 to-[#0d0e11]" />
            </div>

            {/* Smoky Silver Curved Wave Ribbons (Top Right & Bottom Left) */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/[0.08] pointer-events-none blur-[0.5px]" />
            <div className="absolute -top-14 -right-14 w-72 h-72 rounded-full border border-white/[0.12] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-white/[0.08] pointer-events-none blur-[0.5px]" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border border-white/[0.12] pointer-events-none" />

            {/* Top Bar with Brand Identity and Close Button */}
            <div className="relative z-10 px-6 sm:px-8 pt-8 pb-6 flex items-start justify-between">
              {/* Brand Logo & Tagline (inoodex - Build • Grow • Innovate) */}
              <div className="flex items-center gap-4">
                {/* 3D Chrome / Silver Faceted Ribbon Monogram Emblem */}
                <div className="relative w-14 h-12 shrink-0">
                  <svg
                    viewBox="0 0 120 100"
                    className="w-full h-full drop-shadow-[0_4px_16px_rgba(255,255,255,0.3)]"
                  >
                    <defs>
                      <linearGradient id="chromeLight" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="35%" stopColor="#f1f5f9" />
                        <stop offset="70%" stopColor="#cbd5e1" />
                        <stop offset="100%" stopColor="#94a3b8" />
                      </linearGradient>
                      <linearGradient id="chromeMid" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e2e8f0" />
                        <stop offset="50%" stopColor="#64748b" />
                        <stop offset="100%" stopColor="#334155" />
                      </linearGradient>
                      <linearGradient id="chromeDark" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#475569" />
                        <stop offset="50%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </linearGradient>
                    </defs>

                    {/* Left vertical faceted pillars */}
                    <polygon points="12,74 24,74 24,34 12,42" fill="url(#chromeMid)" />
                    <polygon points="24,74 36,74 36,26 24,34" fill="url(#chromeLight)" />

                    {/* Upward angled ribbons forming apex */}
                    <polygon points="36,26 60,8 60,18 36,36" fill="url(#chromeLight)" />
                    <polygon points="60,8 84,26 84,36 60,18" fill="url(#chromeMid)" />

                    {/* Interlocking faceted inner diagonals */}
                    <polygon points="36,44 60,26 60,36 36,54" fill="url(#chromeLight)" />
                    <polygon points="60,26 84,44 84,54 60,36" fill="url(#chromeDark)" />

                    <polygon points="36,62 60,44 60,54 36,72" fill="url(#chromeLight)" />
                    <polygon points="60,44 84,62 84,72 60,54" fill="url(#chromeMid)" />

                    {/* Right vertical leg & anchor */}
                    <polygon points="84,26 96,34 96,74 84,74" fill="url(#chromeDark)" />
                    <polygon points="96,34 108,42 108,74 96,74" fill="url(#chromeMid)" />

                    {/* Ground plinth base lines */}
                    <polygon points="8,74 112,74 112,77 8,77" fill="url(#chromeLight)" />
                  </svg>
                </div>

                {/* Brand Name & Tagline */}
                <div>
                  <h2 className="text-2xl sm:text-[28px] font-sans font-bold tracking-tight text-white leading-none lowercase">
                    inoodex
                  </h2>
                  <p className="text-[11px] font-sans text-zinc-400 tracking-wide mt-1.5 font-light">
                    Build • Grow • Innovate
                  </p>
                </div>
              </div>

              {/* Circular Close Button (from image) */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full border border-white/30 bg-white/5 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md focus:outline-none"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Menu Items List (No Icons & No Arrows - Clean Minimalist Text) */}
            <div className="relative z-10 flex-1 px-6 sm:px-8 py-3 overflow-y-auto space-y-2 scrollbar-none">
              {menuItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      (item.href === "/nbr" && pathname === "/nrb") ||
                      pathname?.startsWith(item.href + "/");

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-white/10 backdrop-blur-md border border-white/50 text-white shadow-[0_0_25px_rgba(255,255,255,0.18)] font-semibold"
                        : "text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent hover:translate-x-1.5 font-normal"
                    }`}
                  >
                    <span className="text-sm sm:text-[15px] tracking-wide">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Section: Need Help Card, Socials & Copyright */}
            <div className="relative z-10 p-6 sm:px-8 pt-4 pb-6 border-t border-white/10 bg-[#0a0b0e]/95 backdrop-blur-md">
              {/* Need Help Card (from image) */}
              <div className="rounded-2xl border border-white/20 bg-gradient-to-r from-black/80 to-zinc-900/80 p-3.5 sm:p-4 flex items-center justify-between shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="text-white">
                    <Headphones className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-sans text-zinc-400 font-normal tracking-wide">
                      Need Help?
                    </span>
                    <a
                      href="tel:+8801812888222"
                      className="text-xs sm:text-sm font-bold text-white tracking-wider hover:text-zinc-200 transition-colors"
                    >
                      +880 1812-888222
                    </a>
                  </div>
                </div>

                {/* Solid White Phone Call Button with Black Phone Icon */}
                <a
                  href="tel:+8801812888222"
                  aria-label="Call Helpline"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-black flex items-center justify-center shadow-[0_4px_16px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-black stroke-black" />
                </a>
              </div>

              {/* Social Media Circular Icons with side dividing lines (from image) */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5">
                <div className="w-8 sm:w-12 h-[1px] bg-white/20" />

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/25 bg-white/5 hover:bg-white hover:text-black text-white flex items-center justify-center text-xs font-bold transition-all hover:scale-110 cursor-pointer"
                >
                  <span>f</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/25 bg-white/5 hover:bg-white hover:text-black text-white flex items-center justify-center text-xs transition-all hover:scale-110 cursor-pointer"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/25 bg-white/5 hover:bg-white hover:text-black text-white flex items-center justify-center text-xs font-bold transition-all hover:scale-110 cursor-pointer"
                >
                  <span>in</span>
                </a>
                <a
                  href="https://inoodex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/25 bg-white/5 hover:bg-white hover:text-black text-white flex items-center justify-center text-xs transition-all hover:scale-110 cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>

                <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
              </div>

              {/* Footer Copyright Text */}
              <p className="text-center text-[10.5px] text-zinc-400 font-light mt-3 tracking-wide">
                © 2026 inoodex. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
