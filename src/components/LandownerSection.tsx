"use client";

import { useState, useRef } from "react";
import { Handshake, TrendingUp, ShieldCheck, Clock, Send, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Maximum Land Value Appreciation",
    description: "Our signature architectural designs command premier market valuations and generational returns.",
  },
  {
    icon: ShieldCheck,
    title: "100% Transparent Legal Process",
    description: "Comprehensive regulatory clearances, RAJUK approvals, structural soil testing, and clear contracts.",
  },
  {
    icon: Clock,
    title: "Guaranteed On-Time Handover",
    description: "Backed by rigorous engineering project timelines and financial stability for zero delays.",
  },
];

export default function LandownerSection({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="landowner"
      ref={sectionRef}
      className={`relative w-full border-t px-6 py-20 sm:px-10 sm:py-28 lg:px-16 ${
        isLight
          ? "border-black/10 bg-[#f7f6f3] text-[#191919]"
          : "border-white/10 bg-[#0e0e0e] text-white"
      }`}
    >
      <div
        ref={contentRef}
        className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
      >
        {/* Left Column: Proposition & Pillars */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider ${
              isLight ? "bg-amber-500/10 text-amber-800" : "bg-white/10 text-amber-400"
            }`}>
              <Handshake className="w-3.5 h-3.5" />
              <span>Joint Venture Development</span>
            </div>
            <h2 className={`text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl ${isLight ? "text-[#191919]" : "text-white"}`}>
              Transform Your Land into an <br className="hidden sm:inline" />
              <span className={`bg-clip-text font-semibold text-transparent ${
                isLight
                  ? "bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-500"
                  : "bg-gradient-to-r from-white via-zinc-200 to-zinc-400"
              }`}>
                Architectural Landmark.
              </span>
            </h2>
          </div>

          <p className={`max-w-xl font-light leading-relaxed ${isLight ? "text-base text-zinc-600 sm:text-lg" : "text-sm text-zinc-300 sm:text-base"}`}>
            Partner with pioneers of contemporary architecture. We collaborate with
            landowners across prime urban locations in Dhaka, turning private plots
            into prestigious landmarks that yield superior commercial value.
          </p>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`space-y-2.5 rounded-2xl border p-4 backdrop-blur-md transition-colors sm:p-5 ${
                    isLight
                      ? "border-black/[0.08] bg-white hover:border-amber-600/30"
                      : "border-white/10 bg-white/[0.04] hover:border-white/20"
                  }`}
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                    isLight ? "bg-amber-500/10 text-amber-800" : "bg-amber-400/10 text-amber-400"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className={`font-semibold leading-snug ${isLight ? "text-base text-[#222]" : "text-sm text-white"}`}>{item.title}</h3>
                  <p className={`font-light leading-relaxed ${isLight ? "text-sm text-zinc-600" : "text-xs text-zinc-400"}`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Quick Land Submission Form */}
        <div className={`space-y-5 rounded-3xl border p-6 shadow-2xl backdrop-blur-md sm:p-8 lg:col-span-5 ${
          isLight ? "border-black/[0.08] bg-white" : "border-white/10 bg-white/[0.04]"
        }`}>
          <div className="space-y-1">
            <h3 className={`text-xl font-light tracking-tight sm:text-2xl ${isLight ? "text-[#191919]" : "text-white"}`}>
              Submit Your Land for Evaluation
            </h3>
            <p className={`font-light ${isLight ? "text-sm text-zinc-600" : "text-xs text-zinc-400"}`}>
              Our feasibility team will assess your plot and share a complimentary proposal.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className={`mb-1 block font-medium ${isLight ? "text-sm text-zinc-700" : "text-xs text-zinc-300"}`}>
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Tanvir Ahmed"
                className={`w-full rounded-xl border px-4 py-2.5 transition-colors focus:outline-none ${
                  isLight
                    ? "border-zinc-300 bg-zinc-50 text-base text-zinc-900 placeholder-zinc-500 focus:border-zinc-800"
                    : "border-white/15 bg-black/50 text-sm text-white placeholder-zinc-500 focus:border-white"
                }`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className={`mb-1 block font-medium ${isLight ? "text-sm text-zinc-700" : "text-xs text-zinc-300"}`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+880 1700-000000"
                  className={`w-full rounded-xl border px-4 py-2.5 transition-colors focus:outline-none ${
                    isLight
                      ? "border-zinc-300 bg-zinc-50 text-base text-zinc-900 placeholder-zinc-500 focus:border-zinc-800"
                      : "border-white/15 bg-black/50 text-sm text-white placeholder-zinc-500 focus:border-white"
                  }`}
                />
              </div>
              <div>
                <label className={`mb-1 block font-medium ${isLight ? "text-sm text-zinc-700" : "text-xs text-zinc-300"}`}>
                  Plot Size (Katha)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 8.5 Katha"
                  className={`w-full rounded-xl border px-4 py-2.5 transition-colors focus:outline-none ${
                    isLight
                      ? "border-zinc-300 bg-zinc-50 text-base text-zinc-900 placeholder-zinc-500 focus:border-zinc-800"
                      : "border-white/15 bg-black/50 text-sm text-white placeholder-zinc-500 focus:border-white"
                  }`}
                />
              </div>
            </div>

            <div>
              <label className={`mb-1 block font-medium ${isLight ? "text-sm text-zinc-700" : "text-xs text-zinc-300"}`}>
                Plot Location / Address
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Road 79, Gulshan 2"
                className={`w-full rounded-xl border px-4 py-2.5 transition-colors focus:outline-none ${
                  isLight
                    ? "border-zinc-300 bg-zinc-50 text-base text-zinc-900 placeholder-zinc-500 focus:border-zinc-800"
                    : "border-white/15 bg-black/50 text-sm text-white placeholder-zinc-500 focus:border-white"
                }`}
              />
            </div>

            <button
              type="submit"
              className={`mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold shadow-md transition-all duration-300 active:scale-95 ${
                isLight ? "bg-amber-400 text-base text-zinc-950 hover:bg-amber-300" : "bg-white text-sm text-zinc-950 hover:bg-zinc-200"
              }`}
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  <span>Proposal Requested Successfully!</span>
                </>
              ) : (
                <>
                  <span>Request Feasibility Study</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>

          <p className={`text-center font-mono ${isLight ? "text-xs text-zinc-500" : "text-[11px] text-zinc-500"}`}>
            Direct Landowner Helpline: 16604 / +880 9612-008822
          </p>
        </div>
      </div>
    </section>
  );
}
