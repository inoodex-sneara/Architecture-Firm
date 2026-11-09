"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface FeaturedProperty {
  id: string;
  name: string;
  location: string;
  image: string;
  logo?: string;
  specs: {
    size: string;
    bed: string;
    bath: string;
    land: string;
  };
}

const featuredProperties: FeaturedProperty[] = [
  {
    id: "the-lighthouse",
    name: "The Lighthouse",
    location: "Block M, Bashundhara R/A, Dhaka",
    image: "/featured/the-lighthouse.webp",
    logo: "/featured/the-lighthouse-logo.webp",
    specs: {
      size: "2050+ sft",
      bed: "3",
      bath: "3",
      land: "10 Katha",
    },
  },
  {
    id: "the-seasons",
    name: "The Seasons",
    location: "Block I, Bashundhara R/A, Dhaka",
    image: "/featured/the-seasons.webp",
    logo: "/featured/the-seasons-logo.png",
    specs: {
      size: "2100+ to 2400+ sft",
      bed: "3-4",
      bath: "3",
      land: "10 Katha",
    },
  },
  {
    id: "emerald-heights",
    name: "Emerald Heights",
    location: "Block K, Bashundhara R/A, Dhaka",
    image: "/featured/emerald-heights.webp",
    logo: "/featured/emerald-heights-logo.png",
    specs: {
      size: "1550+ to 2050+ sft",
      bed: "3-4",
      bath: "4",
      land: "5 Katha",
    },
  },
  {
    id: "magnifico",
    name: "Magnifico",
    location: "Gulshan, Dhaka",
    image: "/featured/magnifico.webp",
    logo: "/featured/magnifico-logo.png",
    specs: {
      size: "3500+ sft",
      bed: "4",
      bath: "4",
      land: "18.62 Katha",
    },
  },
  {
    id: "dew-drops",
    name: "Dew Drops",
    location: "Gulshan 1, Dhaka",
    image: "/featured/dew-drops.webp",
    logo: "/featured/dew-drops-logo.png",
    specs: {
      size: "2850+ sft",
      bed: "4",
      bath: "4",
      land: "14 Katha",
    },
  },
  {
    id: "hillside-haven",
    name: "Hillside Haven",
    location: "Nasirabad H/S, Chattogram",
    image: "/featured/hillside-haven.webp",
    logo: "/featured/hillside-haven-logo.webp",
    specs: {
      size: "2350+ sft",
      bed: "3-4",
      bath: "3",
      land: "12 Katha",
    },
  },
];

export default function FeaturedProperties() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
          }
        );

        Array.from(gridRef.current.children).forEach((child, index) => {
          gsap.to(child, {
            yPercent: index % 3 === 1 ? -6 : index % 3 === 2 ? -10 : -3,
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
      id="featured-properties"
      ref={sectionRef}
      className="w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#191a1d] text-white border-t border-white/5"
    >
      <div className="max-w-[1340px] mx-auto">
        {/* Section Header: "View all properties ->" on Left, "Featured properties" on Right */}
        <div
          ref={headerRef}
          className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12"
        >
          {/* Left Action Button: View all properties */}
          <Link
            href="#properties"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-black/60 hover:bg-black text-white text-xs sm:text-sm font-medium border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg cursor-pointer active:scale-95 group"
          >
            <span>View all properties</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Right Heading: Featured properties */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Featured <span className="font-normal text-white">properties</span>
          </h2>
        </div>

        {/* 3-Column Grid across 2 Rows (6 Cards) */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {featuredProperties.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-[#242528] text-white flex flex-col shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border border-white/5 cursor-pointer"
            >
              {/* Visual Frame */}
              <div className="relative aspect-[16/17] sm:aspect-[4/4.5] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Subtle Shadow Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60" />

                {/* Unhovered State: White circular arrow button on bottom-right of image */}
                <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 z-10 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 pointer-events-none">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-zinc-950 shadow-xl flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                {/* Hovered State: Floating Specs Bar (Matches Reference Exactly) */}
                <div
                  className={`absolute bottom-3 left-3 right-3 z-20 flex flex-col gap-1.5 rounded-2xl border border-white/15 bg-black/85 p-3 shadow-2xl backdrop-blur-md transition-all duration-300 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 sm:p-3.5 ${
                    activeCard === item.id
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
                  }`}
                >
                  {/* Brand / Project Logo Badge on Top Left */}
                  <div className="inline-flex items-center px-2 py-0.5 rounded bg-white/15 backdrop-blur-md border border-white/15 self-start mb-1 max-w-[120px]">
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={`${item.name} badge`}
                        width={80}
                        height={24}
                        className="h-4 sm:h-4.5 w-auto object-contain brightness-0 invert"
                      />
                    ) : (
                      <span className="text-[9px] uppercase font-mono tracking-wider text-white font-semibold">
                        {item.name}
                      </span>
                    )}
                  </div>

                  {/* Horizontal Specs Row with Vertical Dividers and Black Circular Arrow Button */}
                  <div className="flex items-center justify-between gap-1 pt-1 border-t border-white/15">
                    {/* SIZE */}
                    <div className="flex-1 min-w-0 pr-1 text-left">
                      <span className="block text-[8px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">
                        Size
                      </span>
                      <span className="block text-[10px] sm:text-[11px] font-bold text-white whitespace-nowrap truncate">
                        {item.specs.size}
                      </span>
                    </div>

                    <div className="w-px h-6 bg-white/20 shrink-0" />

                    {/* BED */}
                    <div className="px-1.5 sm:px-2 text-center">
                      <span className="block text-[8px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">
                        Bed
                      </span>
                      <span className="block text-[10px] sm:text-[11px] font-bold text-white">
                        {item.specs.bed}
                      </span>
                    </div>

                    <div className="w-px h-6 bg-white/20 shrink-0" />

                    {/* BATH */}
                    <div className="px-1.5 sm:px-2 text-center">
                      <span className="block text-[8px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">
                        Bath
                      </span>
                      <span className="block text-[10px] sm:text-[11px] font-bold text-white">
                        {item.specs.bath}
                      </span>
                    </div>

                    <div className="w-px h-6 bg-white/20 shrink-0" />

                    {/* LAND */}
                    <div className="px-1.5 sm:px-2 text-center">
                      <span className="block text-[8px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">
                        Land
                      </span>
                      <span className="block text-[10px] sm:text-[11px] font-bold text-white whitespace-nowrap">
                        {item.specs.land}
                      </span>
                    </div>

                    {/* Black Circular Arrow Button on Far Right */}
                    <div className="pl-1 shrink-0">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black border border-white/20 flex items-center justify-center text-white hover:border-white transition-all shadow-md">
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveCard((active) => (active === item.id ? null : item.id))
                      }
                      aria-label={`${activeCard === item.id ? "Hide" : "Show"} details for ${item.name}`}
                      aria-expanded={activeCard === item.id}
                      className="absolute right-3 top-3 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white backdrop-blur-md transition-colors hover:bg-black lg:hidden"
                    >
                      {activeCard === item.id ? (
                        <X className="h-5 w-5" />
                      ) : (
                        <Info className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Bottom: Project Title & Location */}
              <div className="flex flex-col justify-center bg-[#242528] p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-white transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 font-light">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
