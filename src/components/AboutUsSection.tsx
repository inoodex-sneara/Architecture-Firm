"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Shield, Eye, Award, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const pillars = [
  {
    icon: Leaf,
    title: "Biophilic Design",
    description: "Harmonizing expansive natural daylight corridors, cross-ventilation, and living vertical gardens.",
  },
  {
    icon: Shield,
    title: "Structural Resilience",
    description: "Engineered to exceed BNBC standards using ultra-grade rebar and deep foundation piling systems.",
  },
  {
    icon: Eye,
    title: "Bespoke Spatial Geometry",
    description: "Every square foot is conceived to inspire tranquility, featuring double-height atriums and fluid spaces.",
  },
];

const metrics = [
  { value: "40+", label: "Years of Legacy" },
  { value: "150+", label: "Iconic Landmarks" },
  { value: "100%", label: "On-Time Handover" },
  { value: "32+", label: "Architectural Awards" },
];

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { opacity: 0, x: -35 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { opacity: 0, x: 35 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rightColRef.current,
              start: "top 80%",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 bg-[#090a0c] text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Brand Legacy & Philosophy */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-6">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10.5px] font-mono uppercase tracking-[0.2em] text-amber-400/90">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Heritage & Vision</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-light tracking-[-0.02em] text-white leading-snug">
                Architecture is the{" "}
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
                  Poetry of Space.
                </span>
              </h2>
            </div>

            <p className="text-zinc-400 text-xs sm:text-[13.5px] leading-relaxed font-light max-w-xl">
              Founded on the belief that spaces shape human experience, our studio unites
              visionary architectural thinking with uncompromising structural engineering. Over
              four decades, we have continuously redefined metropolitan living in Bangladesh,
              crafting residential sanctuaries and commercial landmarks that stand as testaments
              to enduring craftsmanship.
            </p>

            {/* 3 Core Design Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-4.5 rounded-xl bg-white/[0.02] backdrop-blur-md border border-white/10 space-y-2 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xs sm:text-[13px] font-medium text-white leading-snug">{pillar.title}</h3>
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Metrics Counters Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {metrics.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <p className="text-xl sm:text-2xl font-light font-mono text-white tracking-tight">
                    {m.value}
                  </p>
                  <p className="text-[10.5px] uppercase tracking-wider text-zinc-500 font-normal">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Visual & Quote Frame */}
          <div
            ref={rightColRef}
            className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-900 border border-white/10 shadow-2xl group"
          >
            <Image
              src="/hero/craftsmanship.jpg"
              alt="Architectural Craftsmanship"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

            {/* Floating Quote Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-4 sm:p-5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15">
              <p className="text-[11.5px] sm:text-xs font-light italic text-zinc-200 leading-relaxed">
                “Simplicity in architecture is not merely about subtracting elements; it is about uncovering the essence of light, proportion, and quiet elegance.”
              </p>
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-medium text-white">Lead Design Director</p>
                  <p className="text-[9.5px] text-amber-400 font-mono uppercase tracking-wider">Inoodex Spatial Studio</p>
                </div>
                <Link
                  href="#properties"
                  className="inline-flex items-center gap-1 text-[11px] text-zinc-300 hover:text-white transition-colors"
                >
                  <span>Explore Portfolio</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

