"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface SlideData {
  id: number;
  image: string;
  name: string;
  location: string;
}

const slides: SlideData[] = [
  { id: 1, image: "/hero/slide-1.jpg", name: "The Lumina Residences", location: "Gulshan 2, Dhaka" },
  { id: 2, image: "/hero/slide-2.jpg", name: "Botanica Green Enclave", location: "Banani 11, Dhaka" },
  { id: 3, image: "/hero/slide-3.jpg", name: "Elysian Crown Penthouse", location: "Baridhara Diplomatic Zone" },
  { id: 4, image: "/hero/slide-4.jpg", name: "Apex Commercial Hub", location: "Dhanmondi, Dhaka" },
  { id: 5, image: "/hero/slide-5.jpg", name: "Skyline Waterfront", location: "Bashundhara R/A, Dhaka" },
  { id: 6, image: "/hero/slide-6.jpg", name: "Lakewood Pavilion", location: "Jalshiri Abashon" },
  { id: 7, image: "/hero/slide-7.jpg", name: "Parkview Grand Manor", location: "Uttara Sector 4, Dhaka" },
];

const AUTOPLAY_INTERVAL = 4800; // 4.8s per slide

const statusOptions = [
  "All Status",
  "Coming Soon",
  "Newly Launched",
  "Ongoing",
  "Ready to Move",
];

const locationOptions = [
  "All Locations",
  "Gulshan",
  "Banani",
  "Baridhara",
  "Dhanmondi",
  "Uttara",
  "Bashundhara",
  "Chattogram",
];

interface SearchFilterProps {
  label: string;
  value: string;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  onChange: (value: string) => void;
}

interface MenuPosition {
  top: number;
  left: number;
  width: number;
  maxHeight: number;
  placement: "above" | "below";
}

function SearchFilter({
  label,
  value,
  options,
  isOpen,
  onToggle,
  onChange,
}: SearchFilterProps) {
  const filterRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);
  const listboxId = `search-filter-${label.toLowerCase().replaceAll(" ", "-")}`;

  useEffect(() => {
    if (!isOpen) return;

    const updateMenuPosition = () => {
      const trigger = triggerRef.current;
      if (!trigger) return;

      const rect = trigger.getBoundingClientRect();
      const viewportPadding = 12;
      const gap = 8;
      const width = Math.min(
        Math.max(rect.width, 200),
        window.innerWidth - viewportPadding * 2,
      );
      const left = Math.min(
        Math.max(rect.left, viewportPadding),
        window.innerWidth - width - viewportPadding,
      );
      const desiredHeight = Math.min(options.length * 44 + 16, 304);
      const spaceAbove = rect.top - viewportPadding - gap;
      const spaceBelow = window.innerHeight - rect.bottom - viewportPadding - gap;
      const placement =
        spaceBelow >= desiredHeight || spaceBelow >= spaceAbove ? "below" : "above";
      const maxHeight = Math.max(
        96,
        Math.min(desiredHeight, placement === "below" ? spaceBelow : spaceAbove),
      );
      const top =
        placement === "below"
          ? rect.bottom + gap
          : Math.max(viewportPadding, rect.top - gap - maxHeight);

      setMenuPosition({ top, left, width, maxHeight, placement });
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !filterRef.current?.contains(target) &&
        !listboxRef.current?.contains(target)
      ) {
        onToggle();
      }
    };

    updateMenuPosition();
    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen, onToggle, options.length]);

  const focusOption = (index: number) => {
    optionRefs.current[index]?.focus();
  };

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!isOpen) {
        onToggle();
        requestAnimationFrame(() => focusOption(options.indexOf(value)));
      }
    } else if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      onToggle();
    }
  };

  const handleOptionKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      focusOption((index + direction + options.length) % options.length);
    } else if (event.key === "Escape") {
      event.preventDefault();
      onToggle();
      triggerRef.current?.focus();
    }
  };

  return (
    <div
      ref={filterRef}
      className="relative min-w-0 flex-1"
      onBlur={(event) => {
        if (
          isOpen &&
          !(
            event.relatedTarget instanceof Node &&
            (filterRef.current?.contains(event.relatedTarget) ||
              listboxRef.current?.contains(event.relatedTarget))
          )
        ) {
          onToggle();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-label={`${label}: ${value}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        onClick={onToggle}
        onKeyDown={handleTriggerKeyDown}
        className={`flex min-h-[60px] w-full items-center gap-3 rounded-2xl border px-4 py-2.5 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/20 ${
          isOpen
            ? "border-zinc-400 bg-white shadow-sm"
            : "border-zinc-200/80 bg-zinc-50/80 hover:border-zinc-300 hover:bg-white"
        }`}
      >
        <span className="min-w-0 flex-1">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            {label}
          </span>
          <span className="mt-0.5 block truncate text-sm font-semibold text-zinc-900">
            {value}
          </span>
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen &&
        menuPosition &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={listboxRef}
            id={listboxId}
            role="listbox"
            aria-label={label}
            style={{
              position: "fixed",
              top: menuPosition.top,
              left: menuPosition.left,
              width: menuPosition.width,
              maxHeight: menuPosition.maxHeight,
            }}
            className="z-[100] overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-2 shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
          >
            {options.map((option, index) => {
              const isSelected = option === value;

              return (
                <button
                  key={option}
                  ref={(element) => {
                    optionRefs.current[index] = element;
                  }}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option);
                    onToggle();
                    triggerRef.current?.focus();
                  }}
                  onKeyDown={(event) => handleOptionKeyDown(event, index)}
                  className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-xl px-3.5 text-left text-sm transition-colors ${
                    isSelected
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-700 hover:bg-zinc-100 focus:bg-zinc-100"
                  }`}
                >
                  <span>{option}</span>
                  {isSelected && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
                </button>
              );
            })}
          </div>,
          document.body,
        )}
    </div>
  );
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [openFilter, setOpenFilter] = useState<"status" | "location" | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Continuous Auto-animate with timer reset on manual interaction
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlide, nextSlide]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      status: selectedStatus !== "All Status" ? selectedStatus : "",
      location: selectedLocation !== "All Locations" ? selectedLocation : "",
    }).toString();
    window.location.href = `#properties?${query}`;
  };


  const heroSectionRef = useRef<HTMLElement>(null);
  const slidesWrapperRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (slidesWrapperRef.current) {
        gsap.to(slidesWrapperRef.current, {
          yPercent: 18,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (searchBarRef.current) {
        gsap.to(searchBarRef.current, {
          yPercent: -12,
          opacity: 0.85,
          ease: "none",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: heroSectionRef }
  );

  return (
    <section
      ref={heroSectionRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-end overflow-hidden bg-black select-none pb-8 sm:pb-12"
    >
      {/* Background Slides with Smooth Crossfade & Cinematic Ken-Burns Zoom */}
      <div ref={slidesWrapperRef} className="absolute inset-0 z-0">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-[clip-path] duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] motion-reduce:duration-0 ${
                isActive ? "z-10" : "z-0 pointer-events-none"
              }`}
              style={{
                clipPath: isActive ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
              }}
            >
              <div
                className={`relative w-full h-full transform transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-100" : "scale-106"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.name}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              {/* Multi-layered Soft Luxury Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            </div>
          );
        })}

        {/* Minimal Precision Architectural Grid Texture */}
        <div
          className="absolute inset-0 z-10 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "75px 75px",
          }}
        />
      </div>



    

      {/* Floating Left Navigation Arrow (<) */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="group absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/35 hover:bg-black/80 active:scale-95 text-white flex items-center justify-center backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>

      {/* Floating Right Navigation Arrow (>) */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="group absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/35 hover:bg-black/80 active:scale-95 text-white flex items-center justify-center backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>

      {/* Bottom Floating Luxury Property Search Bar */}
      <div
        ref={searchBarRef}
        className="relative z-20 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center justify-center will-change-transform"
      >
        <div className="w-full max-w-4xl flex flex-col items-center">
          <form
            onSubmit={handleSearch}
            className="grid w-full grid-cols-1 gap-2 rounded-[26px] border border-white/70 bg-white/95 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-3 sm:rounded-[30px] sm:p-3"
          >
            <SearchFilter
              label="Project status"
              value={selectedStatus}
              options={statusOptions}
              isOpen={openFilter === "status"}
              onToggle={() =>
                setOpenFilter((current) => (current === "status" ? null : "status"))
              }
              onChange={setSelectedStatus}
            />
            <SearchFilter
              label="Prime location"
              value={selectedLocation}
              options={locationOptions}
              isOpen={openFilter === "location"}
              onToggle={() =>
                setOpenFilter((current) => (current === "location" ? null : "location"))
              }
              onChange={setSelectedLocation}
            />
            <button
              type="submit"
              className="flex min-h-[56px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-zinc-950 px-7 text-sm font-semibold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:bg-zinc-800 active:scale-[0.98] sm:w-auto sm:min-w-[150px]"
            >
              <Search className="h-4 w-4 stroke-[2.5]" />
              <span>Search</span>
            </button>
          </form>

          {/* Minimal Slide Dots Indicator below Search Bar */}
          <div className="flex items-center gap-1.5 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
                  i === currentSlide
                    ? "w-7 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
