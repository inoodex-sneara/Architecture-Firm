"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, MessageSquare } from "lucide-react";

function FacebookOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function YoutubeOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <>
      <footer
        id="contact"
        className="relative w-full overflow-hidden text-white select-none py-16 sm:py-20 lg:py-24 border-t border-white/10"
      >
        {/* Architectural Living Room Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/slide-5.jpg"
            alt="Inoodex Architectural Living Space"
            fill
            priority
            className="object-cover object-center brightness-90"
            sizes="100vw"
          />
          {/* Deep Navy/Purple-Charcoal Vignette (Exact match to Sheltech screenshot) */}
          <div className="absolute inset-0 bg-[#161a29]/88 backdrop-blur-[2px]" />
        </div>

        {/* Center-Aligned Content (Matches Reference Screenshot) */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
          {/* Giant Helpline Hotline Number */}
       

          {/* Social Outline Circles */}
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mt-5 sm:mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 hover:border-white hover:bg-white hover:text-[#161a29] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <FacebookOutline className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 hover:border-white hover:bg-white hover:text-[#161a29] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <InstagramOutline className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 hover:border-white hover:bg-white hover:text-[#161a29] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <LinkedinOutline className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 hover:border-white hover:bg-white hover:text-[#161a29] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <YoutubeOutline className="w-4 h-4" />
            </a>
          </div>

          {/* Corporate Office Address */}
          <div className="mt-5 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-lg mx-auto">
            <p>Inoodex Celebration Point, Plot: 3 &amp; 5, Road: 113/A,</p>
            <p>Gulshan-2, Dhaka-1212, Bangladesh</p>
          </div>

          {/* Horizontal Navigation Links Bar */}
          <nav
            aria-label="Footer Navigation"
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2.5 text-xs sm:text-[13.5px] text-zinc-300 font-light"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/nbr" className="hover:text-white transition-colors">
              NRB
            </Link>
            <Link href="/landowners" className="hover:text-white transition-colors">
              Landowner
            </Link>
            <Link href="/brand-film" className="hover:text-white transition-colors">
              Media Center
            </Link>
            
            <Link href="/contact#inquiry-form" className="hover:text-white transition-colors">
              Customer Enquiry
            </Link>
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Thin Horizontal Divider Rule */}
          <div className="w-full max-w-4xl border-t border-white/15 my-6 sm:my-8" />

          {/* Copyright & Agency Credits */}
          <div className="text-[11px] sm:text-xs text-zinc-400 font-light space-y-1">
            <p>© 2026 Inoodex (Pvt.) Ltd. All Right Reserved</p>
            <p className="text-[10.5px] text-zinc-500">
              Designed &amp; Developed with Architectural Precision
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
