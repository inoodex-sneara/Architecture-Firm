"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Info, MapPin, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface PerfectionSpecs {
  orientation: string;
  frontRoad: string;
  address: string;
  landSize: string;
  floorSize: string;
  parking: string;
  architect: string;
  floors: string;
}

interface PerfectionItem {
  id: string;
  name: string;
  location: string;
  size: string;
  image: string;
  specs: PerfectionSpecs;
}

const perfections: PerfectionItem[] = [
  {
    id: "lakewood",
    name: "JCX LAKEWOOD RESIDENCES",
    location: "Jalshiri Abashon",
    size: "2850 Sq. Ft.",
    image: "/projects/project-1.jpg",
    specs: {
      orientation: "South - East facing",
      frontRoad: "80 feet",
      address: "Sector 03, Road 105, Jalshiri Abashon, Dhaka",
      landSize: "20.5 Katha",
      floorSize: "2850 Sq. Ft.",
      parking: "48",
      architect: "Studio Morphogenesis",
      floors: "2B+ G+ 14",
    },
  },
  {
    id: "olympus",
    name: "JCX OLYMPUS",
    location: "Bashundhara R/A, Dhaka",
    size: "1790-2210 Sq. Ft",
    image: "/projects/project-2.jpg",
    specs: {
      orientation: "South facing",
      frontRoad: "60 feet",
      address: "Block G, Road 07, Bashundhara R/A, Dhaka",
      landSize: "15 Katha",
      floorSize: "1790 - 2210 Sq. Ft.",
      parking: "36",
      architect: "Inoodex Architecture Studio",
      floors: "B+ G+ 12",
    },
  },
  {
    id: "icon-100",
    name: "ICON 100",
    location: "Bashundhara R/A",
    size: "6900 - 15300 SFT",
    image: "/projects/project-3.jpg",
    specs: {
      orientation: "North - East facing",
      frontRoad: "130 feet",
      address: "Plot 2323 f & G, North-South avenue 03, Block I Ext., Bashundhara R/A, Dhaka",
      landSize: "38.66 Katha",
      floorSize: "6900 - 15300 SFT",
      parking: "120",
      architect: "FORM.3 architects",
      floors: "3B+ G+ 24",
    },
  },
  {
    id: "president-park",
    name: "JCX PRESIDENT PARK",
    location: "Bashundhara R/A, Dhaka",
    size: "4395 Sq. Ft. (Approx)",
    image: "/projects/project-4.jpg",
    specs: {
      orientation: "North - South facing",
      frontRoad: "100 feet",
      address: "Block I, Main Boulevard, Bashundhara R/A, Dhaka",
      landSize: "28.5 Katha",
      floorSize: "4395 Sq. Ft. (Approx)",
      parking: "64",
      architect: "Vitti Sthapati Vrindo",
      floors: "2B+ G+ 18",
    },
  },
];

export default function OurPerfections() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
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
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 82%",
            },
          }
        );

        Array.from(cardsRef.current.children).forEach((child, index) => {
          gsap.to(child, {
            yPercent: index % 2 === 0 ? -5 : -10,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="properties"
      ref={sectionRef}
      className="relative z-20 -mt-6 sm:-mt-10 rounded-t-[32px] sm:rounded-t-[44px] w-full pt-16 sm:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-white text-zinc-900 border-t border-zinc-200/80 shadow-[0_-15px_40px_rgba(0,0,0,0.05)]"
    >
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="flex flex-col items-center justify-center mb-8 sm:mb-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[10.5px] font-mono tracking-widest text-zinc-600 uppercase mb-2">
            <span>Curated Developments</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-zinc-900">
            OUR PERFECTIONS
          </h2>
          <div className="h-0.5 w-12 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 mt-2.5 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.3)]" />
        </div>

        {/* 4 Compact Columns Grid - Sleek, compact proportions on laptops and desktops */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4"
        >
          {perfections.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col cursor-pointer"
            >
              {/* Compact Tall Image Frame with Luxury Glass Border */}
              <div className="relative aspect-[3/4] sm:aspect-[9/13] w-full overflow-hidden bg-zinc-100 mb-2.5 rounded-2xl border border-zinc-200 transition-all duration-500 group-hover:border-zinc-400 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                />

                {/* Hover Specs Overlay - Razor-sharp, luxury editorial architectural typography */}
                <div
                  className={`absolute inset-0 z-10 flex select-none flex-col justify-between rounded-2xl border border-white/20 bg-[#07080a]/95 p-3.5 text-white transition-opacity duration-300 sm:p-4 lg:p-4.5 ${
                    activeCard === item.id
                      ? "opacity-100"
                      : "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
                  }`}
                >
                  {/* Detailed Specs Bullet List with Razor-Sharp Square Bullets */}
                  <ul className="space-y-2 lg:space-y-2.5 text-[10px] sm:text-[10.5px] lg:text-[11px] leading-relaxed font-sans">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white shrink-0 mt-[5.5px] rounded-[1px]" />
                      <span className="leading-snug">
                        <span className="font-semibold text-white">Orientation</span>
                        <span className="text-zinc-400 mx-1">:</span>
                        <span className="text-zinc-200 font-light">{item.specs.orientation}</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white shrink-0 mt-[5.5px] rounded-[1px]" />
                      <span className="leading-snug">
                        <span className="font-semibold text-white">Front Road</span>
                        <span className="text-zinc-400 mx-1">:</span>
                        <span className="text-zinc-200 font-light">{item.specs.frontRoad}</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white shrink-0 mt-[5.5px] rounded-[1px]" />
                      <span className="leading-snug">
                        <span className="font-semibold text-white">Address</span>
                        <span className="text-zinc-400 mx-1">:</span>
                        <span className="text-zinc-200 font-light">{item.specs.address}</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white shrink-0 mt-[5.5px] rounded-[1px]" />
                      <span className="leading-snug">
                        <span className="font-semibold text-white">Land Size</span>
                        <span className="text-zinc-400 mx-1">:</span>
                        <span className="text-zinc-200 font-light">{item.specs.landSize}</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white shrink-0 mt-[5.5px] rounded-[1px]" />
                      <span className="leading-snug">
                        <span className="font-semibold text-white">Floor Size</span>
                        <span className="text-zinc-400 mx-1">:</span>
                        <span className="text-zinc-200 font-light">{item.specs.floorSize}</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white shrink-0 mt-[5.5px] rounded-[1px]" />
                      <span className="leading-snug">
                        <span className="font-semibold text-white">Number of Parking</span>
                        <span className="text-zinc-400 mx-1">:</span>
                        <span className="text-zinc-200 font-light">{item.specs.parking}</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white shrink-0 mt-[5.5px] rounded-[1px]" />
                      <span className="leading-snug">
                        <span className="font-semibold text-white">Architect</span>
                        <span className="text-zinc-400 mx-1">:</span>
                        <em className="italic text-zinc-200 font-normal">{item.specs.architect}</em>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white shrink-0 mt-[5.5px] rounded-[1px]" />
                      <span className="leading-snug">
                        <span className="font-semibold text-white">Number of Floors</span>
                        <span className="text-zinc-400 mx-1">:</span>
                        <span className="text-zinc-200 font-light">{item.specs.floors}</span>
                      </span>
                    </li>
                  </ul>

                  {/* Explore Button Framed with Bold Gold/Amber Lines - Exact Match to Reference */}
                  <div className="pt-2.5 mt-auto">
                    <Link
                      href={`#${item.id}`}
                      className="group/btn block w-full border-t-2 border-b-2 border-amber-500 py-2 sm:py-2.5 text-center transition-all duration-300 hover:border-amber-400 hover:bg-amber-500/10 cursor-pointer"
                    >
                      <span className="text-xs sm:text-[12.5px] font-black tracking-[0.35em] uppercase text-amber-400 group-hover/btn:text-amber-300 transition-colors drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]">
                        EXPLORE
                      </span>
                    </Link>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setActiveCard((active) => (active === item.id ? null : item.id))
                  }
                  aria-label={`${activeCard === item.id ? "Hide" : "Show"} details for ${item.name}`}
                  aria-expanded={activeCard === item.id}
                  className="absolute right-3 top-3 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white backdrop-blur-md transition-colors hover:bg-black xl:hidden"
                >
                  {activeCard === item.id ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Info className="h-5 w-5" />
                  )}
                </button>
              </div>

              {/* Text Info Below Image */}
              <div className="space-y-0.5 px-0.5">
                {/* Location */}
                <div className="flex items-center gap-1 text-[10.5px] text-zinc-500 font-light tracking-wide">
                  <MapPin className="w-2.5 h-2.5 text-red-500 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>

                {/* Project Name */}
                <h3 className="text-xs sm:text-[13px] font-bold text-zinc-900 tracking-wider uppercase group-hover:text-amber-600 transition-colors truncate">
                  {item.name}
                </h3>

                {/* Size / SFT */}
                <p className="text-[10px] text-zinc-500 font-light font-mono">
                  {item.size}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
