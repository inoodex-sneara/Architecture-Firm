"use client";

import { useRef } from "react";
import Image from "next/image";
import { CheckCircle2, Clock, Calendar, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface ConstructionProject {
  id: string;
  name: string;
  location: string;
  image: string;
  totalProgress: number;
  expectedHandover: string;
  status: "On Schedule" | "Ahead of Schedule" | "Final Finishing";
  milestones: {
    label: string;
    percentage: number;
  }[];
}

const ongoingProjects: ConstructionProject[] = [
  {
    id: "lumina",
    name: "The Lumina Residences",
    location: "Gulshan 2, Dhaka",
    image: "/hero/slide-1.jpg",
    totalProgress: 78,
    expectedHandover: "December 2026",
    status: "On Schedule",
    milestones: [
      { label: "Piling & Foundation", percentage: 100 },
      { label: "RCC Superstructure", percentage: 88 },
      { label: "Brickwork & Plaster", percentage: 70 },
      { label: "Interior & Finishing", percentage: 54 },
    ],
  },
  {
    id: "apex-summit",
    name: "Apex Summit Commercial Hub",
    location: "Banani 11, Dhaka",
    image: "/hero/slide-4.jpg",
    totalProgress: 92,
    expectedHandover: "August 2026",
    status: "Final Finishing",
    milestones: [
      { label: "Structural Framing", percentage: 100 },
      { label: "Glass Curtain Wall", percentage: 95 },
      { label: "HVAC & Electrical", percentage: 90 },
      { label: "Lobby & Handover Prep", percentage: 82 },
    ],
  },
  {
    id: "botanica-manor",
    name: "Botanica Green Enclave",
    location: "Dhanmondi 9/A, Dhaka",
    image: "/hero/slide-2.jpg",
    totalProgress: 52,
    expectedHandover: "June 2027",
    status: "On Schedule",
    milestones: [
      { label: "Deep Foundation", percentage: 100 },
      { label: "RCC Slab Casting", percentage: 65 },
      { label: "Thermal Insulation", percentage: 35 },
      { label: "Facade Landscaping", percentage: 20 },
    ],
  },
];

export default function ConstructionStatusSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="construction-status"
      ref={sectionRef}
      className="w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#111111] text-white border-t border-white/10"
    >
      <div className="max-w-[1380px] mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Real-Time Milestone Tracking</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
              Construction <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Status</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-light">
              Track ongoing engineering milestones and structural progress with complete transparency.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Updated Weekly • Site Inspection Live</span>
          </div>
        </div>

        {/* 3 Ongoing Projects Progress Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {ongoingProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white/[0.04] backdrop-blur-md border border-white/10 flex flex-col shadow-xl transition-all duration-300 hover:border-white/25 hover:-translate-y-1"
            >
              {/* Visual Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Status Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Overall Progress Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 text-right">
                  <span className="block text-[9px] text-zinc-400 uppercase font-mono">Completed</span>
                  <span className="text-lg font-bold text-white font-mono">{project.totalProgress}%</span>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 right-28 flex min-w-0 items-center gap-1.5 text-xs leading-tight text-zinc-300">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                  <span className="min-w-0 break-words">{project.location}</span>
                </div>
              </div>

              {/* Progress Milestones Body */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1 font-light">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Target Handover: {project.expectedHandover}</span>
                  </div>
                </div>

                {/* Progress Breakdown Bars */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  {project.milestones.map((m, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-start justify-between gap-3 text-xs text-zinc-300">
                        <span className="min-w-0 font-light leading-snug">{m.label}</span>
                        <span className="shrink-0 font-mono text-zinc-400">{m.percentage}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-400 to-amber-200 rounded-full transition-all duration-1000"
                          style={{ width: `${m.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
