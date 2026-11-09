"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Tag } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { specialOffersData } from "@/data/specialOffers";

const AUTOSLIDE_INTERVAL = 3800; // 3.8s per slide

export default function SpecialOffer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [slideStep, setSlideStep] = useState(0);

  const projects = specialOffersData;
  const maxIndex = Math.max(0, projects.length - visibleCount);
  const activeIndex = Math.min(currentIndex, maxIndex);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild;
    if (!track || !firstCard) return;

    const updateSlideStep = () => {
      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
      setSlideStep(firstCard.getBoundingClientRect().width + gap);
    };

    updateSlideStep();
    const observer = new ResizeObserver(updateSlideStep);
    observer.observe(track);
    observer.observe(firstCard);
    return () => observer.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    if (activeIndex >= maxIndex) {
      setDirection("backward");
      setCurrentIndex(Math.max(maxIndex - 1, 0));
      return;
    }

    setDirection("forward");
    setCurrentIndex(activeIndex + 1);
  }, [activeIndex, maxIndex]);

  const prevSlide = useCallback(() => {
    if (activeIndex <= 0) {
      setDirection("forward");
      setCurrentIndex(Math.min(1, maxIndex));
      return;
    }

    setDirection("backward");
    setCurrentIndex(activeIndex - 1);
  }, [activeIndex, maxIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (direction === "forward") {
        if (activeIndex >= maxIndex) {
          setDirection("backward");
          setCurrentIndex(Math.max(maxIndex - 1, 0));
        } else {
          setCurrentIndex(activeIndex + 1);
        }
      } else if (activeIndex <= 0) {
        setDirection("forward");
        setCurrentIndex(Math.min(1, maxIndex));
      } else {
        setCurrentIndex(activeIndex - 1);
      }
    }, AUTOSLIDE_INTERVAL);

    return () => clearTimeout(timer);
  }, [activeIndex, direction, maxIndex]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 20 },
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
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#fafafa] text-zinc-900 overflow-hidden border-t border-zinc-200"
    >
      <div className="max-w-[1340px] mx-auto">
        {/* Top Header */}
        <div
          ref={headerRef}
          className="mb-8 sm:mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="min-w-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight">
              Special <span className="font-semibold text-zinc-950">offer</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm font-normal text-zinc-500">
              Explore our ongoing projects across Dhaka and Chattogram.
            </p>
          </div>

          {/* Right Action Group: View All Button + Carousel Arrows */}
          <div className="flex shrink-0 items-center gap-3 self-start sm:self-auto">
            {/* View All Button linking to /offers */}
            <Link
              href="/offers"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white hover:bg-zinc-950 text-zinc-800 hover:text-white px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm active:scale-95 group cursor-pointer"
            >
              <span>View all properties</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Left and Right Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Project"
                className="flex h-10 w-10 sm:h-11 sm:w-11 cursor-pointer items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 shadow-sm transition-all duration-300 hover:border-zinc-950 hover:bg-zinc-950 hover:text-white active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Project"
                className="flex h-10 w-10 sm:h-11 sm:w-11 cursor-pointer items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 shadow-sm transition-all duration-300 hover:border-zinc-950 hover:bg-zinc-950 hover:text-white active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Auto-animating Carousel Slider Track */}
        <div className="relative overflow-hidden w-full pb-2">
          <div
            ref={trackRef}
            className="flex gap-5 sm:gap-6 lg:gap-7 transition-transform duration-700 ease-in-out will-change-transform"
            style={{
              transform: `translateX(-${activeIndex * slideStep}px)`,
            }}
          >
            {projects.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-19px)] shrink-0"
              >
                <Link
                  href={`/properties/${item.id}`}
                  className="group rounded-lg overflow-hidden bg-[#1c1c1c] text-white flex flex-col shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 block border border-zinc-200/50 cursor-pointer"
                >
                  {/* Compact Visual Aspect Ratio */}
                  <div className="relative aspect-[4/4.5] sm:aspect-[16/17] w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Gradient Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />

                    {/* Special Offer Pill Badge (Top Left) */}
                    <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md border border-amber-400/40 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold shadow-lg">
                      <Tag className="w-3 h-3 text-amber-400" />
                      <span>{item.offerBadge}</span>
                    </div>

                    {/* Unhovered State: White circular arrow button on bottom right */}
                    <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 z-10 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 pointer-events-none">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-zinc-900 shadow-xl flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Hovered State: Floating Specs Bar */}
                    {item.specs && (
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 rounded-lg bg-black/85 backdrop-blur-md p-3 sm:p-3.5 border border-white/15 flex flex-col gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 shadow-2xl">
                        {/* Emblem Badge on Top Left */}
                        <div className="inline-flex items-center self-start px-2.5 py-0.5 rounded bg-zinc-800/90 border border-white/10 text-[9px] uppercase font-mono tracking-wider text-zinc-200 font-medium">
                          <span>{item.name}</span>
                        </div>

                        {/* Specs Columns with Vertical Dividers and Right Arrow Button */}
                        <div className="flex items-center justify-between gap-1 pt-1.5 border-t border-white/15">
                          {/* SIZE */}
                          <div className="flex-1 min-w-0 pr-1 text-left">
                            <span className="block text-[8px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">
                              SIZE
                            </span>
                            <span className="block text-[10.5px] sm:text-[11.5px] font-bold text-white whitespace-nowrap truncate">
                              {item.specs.size}
                            </span>
                          </div>

                          <div className="w-px h-6 bg-white/20 shrink-0" />

                          {/* BED */}
                          <div className="px-1.5 sm:px-2 text-center">
                            <span className="block text-[8px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">
                              BED
                            </span>
                            <span className="block text-[10.5px] sm:text-[11.5px] font-bold text-white">
                              {item.specs.bed}
                            </span>
                          </div>

                          <div className="w-px h-6 bg-white/20 shrink-0" />

                          {/* BATH */}
                          <div className="px-1.5 sm:px-2 text-center">
                            <span className="block text-[8px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">
                              BATH
                            </span>
                            <span className="block text-[10.5px] sm:text-[11.5px] font-bold text-white">
                              {item.specs.bath}
                            </span>
                          </div>

                          <div className="w-px h-6 bg-white/20 shrink-0" />

                          {/* LAND */}
                          <div className="px-1.5 sm:px-2 text-center">
                            <span className="block text-[8px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">
                              LAND
                            </span>
                            <span className="block text-[10.5px] sm:text-[11.5px] font-bold text-white whitespace-nowrap">
                              {item.specs.land}
                            </span>
                          </div>

                          {/* Circular Dark Arrow Button on Far Right */}
                          <div className="pl-1 shrink-0">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black border border-white/20 flex items-center justify-center text-white hover:border-white transition-all shadow-md">
                              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Info Card */}
                  <div className="flex flex-col justify-center bg-[#1c1c1c] p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-white transition-colors group-hover:text-amber-300">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 font-light">
                      {item.location}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx
                ? "w-8 bg-zinc-950"
                : "w-2 bg-zinc-300 hover:bg-zinc-500"
                }`}
            />
          ))}
        </div>

        {/* Big Centered "View All" Button at Section Bottom */}
        
      </div>
    </section>
  );
}
