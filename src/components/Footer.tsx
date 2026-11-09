"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ArrowUp, Send, Check, MessageSquare } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#0a0a0c] text-white border-t border-white/10 overflow-hidden pt-16 sm:pt-24 pb-12 select-none">
      {/* Background Architectural Monogram Watermark */}
    

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Newsletter / Stay Updated Bar */}
        <div className="mb-16 sm:mb-20 pb-12 sm:pb-16 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 block mb-2 font-semibold">
              STAY INFORMED
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
              Never miss an <span className="font-semibold text-white">architectural update</span>
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 font-light">
              Subscribe to receive exclusive previews of newly launched penthouses, progress digests, and private viewing invitations.
            </p>
          </div>

          {/* Newsletter Form */}
          <form
            onSubmit={handleSubscribe}
            className="w-full sm:w-auto flex-1 max-w-md flex items-center bg-white/[0.05] border border-white/15 rounded-full p-1.5 sm:p-2 backdrop-blur-md focus-within:border-amber-400/80 transition-all shadow-xl"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full bg-transparent px-4 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none font-light"
            />
            <button
              type="submit"
              className="px-6 py-2.5 sm:py-3 rounded-full bg-white hover:bg-amber-400 text-zinc-950 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 shadow-md shrink-0 cursor-pointer active:scale-95 group"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Legacy Description (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block w-[110px] sm:w-[125px]">
              <Image
                src="/logo/logo.png"
                alt="Inoodex Architecture"
                width={2790}
                height={828}
                priority
                className="h-auto w-full object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
              Shaping Dhaka&apos;s urban skyline for four decades through biophilic geometry, structural engineering excellence, and enduring generational landmarks.
            </p>

            {/* Helpline & WhatsApp Quick Connect */}
          
          </div>

          {/* Column 2: Flagship Developments (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-300 font-semibold">
              Flagship Developments
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 font-light">
              <li>
                <Link href="#featured-properties" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-amber-400/80 rounded-full" />
                  <span>The Lighthouse — Bashundhara</span>
                </Link>
              </li>
              <li>
                <Link href="#featured-properties" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-amber-400/80 rounded-full" />
                  <span>The Seasons — Bashundhara</span>
                </Link>
              </li>
              <li>
                <Link href="#featured-properties" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-amber-400/80 rounded-full" />
                  <span>Emerald Heights — Bashundhara</span>
                </Link>
              </li>
              <li>
                <Link href="#properties" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-amber-400/80 rounded-full" />
                  <span>ICON 100 Commercial Tower</span>
                </Link>
              </li>
              <li>
                <Link href="#properties" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-amber-400/80 rounded-full" />
                  <span>JCX President Park</span>
                </Link>
              </li>
              <li>
                <Link href="#properties" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-amber-400/80 rounded-full" />
                  <span>JCX Lakewood Residences</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-300 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 font-light">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Our Studio
                </Link>
              </li>
              <li>
                <Link href="#landowner" className="hover:text-white transition-colors">
                  Landowner JV
                </Link>
              </li>
              <li>
                <Link href="#construction-status" className="hover:text-white transition-colors">
                  Construction Status
                </Link>
              </li>
              <li>
                <Link href="#statement" className="hover:text-white transition-colors">
                  Architectural Film
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-white transition-colors">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact & Viewing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Corporate Headquarters & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-300 font-semibold">
              Corporate Headquarters
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-400 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Celebration Point, Plot 3 &amp; 5, Road 113/A, Gulshan 2, Dhaka 1212, Bangladesh
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono text-zinc-300">concierge@inoodex.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono text-zinc-300">+880 9612-008822</span>
              </div>
            </div>

            {/* Social Network Pills */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white text-zinc-300 hover:text-black flex items-center justify-center transition-all border border-white/10"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white text-zinc-300 hover:text-black flex items-center justify-center transition-all border border-white/10"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white text-zinc-300 hover:text-black flex items-center justify-center transition-all border border-white/10"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white text-zinc-300 hover:text-black flex items-center justify-center transition-all border border-white/10"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <p>© 2026 Inoodex Architecture &amp; Development Ltd. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="#privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#sitemap" className="hover:text-zinc-300 transition-colors">
              Sitemap
            </Link>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] hover:bg-white hover:text-black text-zinc-400 border border-white/10 transition-all cursor-pointer active:scale-95 ml-2"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
