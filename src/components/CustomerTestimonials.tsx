"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface TestimonialItem {
  id: number;
  photo: string;
  name: string;
  designation: string;
  quote: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    photo: "/testimonials/photos/photo-1.webp",
    name: "Mr. Anisul Haque & Mrs. Firoza Huq",
    designation: "Homeowners | Dahila Grove, Uttara",
    quote: "Choosing Inoodex was a no-brainer because we have always admired their exemplary designs; a key point in our final buying decision.",
  },
  {
    id: 2,
    photo: "/testimonials/photos/photo-2.webp",
    name: "Zaman Khair",
    designation: "Joint Venture Customer | Silver Pavilion, Uttara R/A",
    quote: "From thoughtful design to timely updates and quality construction, Inoodex made us feel valued at every step.",
  },
  {
    id: 3,
    photo: "/testimonials/photos/photo-3.webp",
    name: "Mrs. Rehana Akter",
    designation: "Homeowner | Meadow View, Bashundhara R/A",
    quote: "I sincerely appreciate the outstanding customer service from Inoodex. The team demonstrated professionalism, responsiveness, & a genuine commitment to customer satisfaction.",
  },
  {
    id: 4,
    photo: "/testimonials/photos/photo-4.webp",
    name: "Md. Elias Hossain",
    designation: "Homeowner | Silver Wood, Aftabnagar",
    quote: "I chose Inoodex from various options. The open concept design where my kids enjoy their childhood is unmatched.",
  },
  {
    id: 5,
    photo: "/testimonials/photos/photo-5.webp",
    name: "Dr. Kazi Mahbubur Rahman",
    designation: "Homeowner | Gulshan Elite Residence",
    quote: "The handover was perfectly on time. Living in an Inoodex residence gives our family unparalleled peace of mind.",
  },
  {
    id: 6,
    photo: "/testimonials/photos/photo-6.webp",
    name: "Engr. Tariqul Islam",
    designation: "Joint Venture Partner | Baridhara Diplomatic Zone",
    quote: "As a joint venture landowner, partnering with Inoodex was the most transparent and rewarding decision.",
  },
];

const AUTOSLIDE_INTERVAL = 5500; // 5.5s per slide

export default function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalItem, setActiveModalItem] = useState<TestimonialItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [slideStep, setSlideStep] = useState(0);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  // Responsive visible count
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1200) {
        setVisibleCount(3.2); // Peeking effect on desktop
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2.1);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Calculate slide step dynamically
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
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play timer
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTOSLIDE_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide]);

  // GSAP Entrance
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
    },
    { scope: sectionRef }
  );

  // ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalItem(null);
    };
    if (activeModalItem) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalItem]);

  return (
    <>
      <section
        id="testimonials"
        ref={sectionRef}
        className="w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#101114] text-white border-t border-white/5 overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Section Header: Title on Left, Circular Arrow Buttons on Right */}
          <div
            ref={headerRef}
            className="flex items-center justify-between gap-4 mb-8 sm:mb-12"
          >
            {/* Left Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
              What do our customers <span className="font-normal text-white">say?</span>
            </h2>

            {/* Right Circular Navigation Arrow Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Testimonial"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Testimonial"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonials Carousel Track */}
          <div className="relative overflow-hidden w-full pb-3">
            <div
              ref={trackRef}
              className="flex gap-5 sm:gap-6 lg:gap-7 transition-transform duration-700 ease-in-out will-change-transform"
              style={{
                transform: `translateX(-${currentIndex * slideStep}px)`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0"
                >
                  <div
                    onClick={() => setActiveModalItem(item)}
                    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white text-zinc-900 border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
                  >
                    {/* Top: Customer Photo with Header Tag */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                      <Image
                        src={item.photo}
                        alt={item.name}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Header Tag on Photo */}
                      <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10 px-2.5 py-1 rounded-md bg-black/55 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-white shadow-lg">
                        <span className="text-[9px] sm:text-[10px] font-mono tracking-wider uppercase font-semibold">
                          OUR CUSTOMERS SPEAK FOR US
                        </span>
                        <span className="text-amber-400 font-serif text-xs font-bold leading-none">”</span>
                      </div>

                      {/* Hover Overlay with Maximize Icon */}
                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                        <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom: White Card Content with Inoodex Typography & Stamp */}
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white select-none">
                      {/* Quote (Guaranteed 100% Inoodex) */}
                      <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-700 font-normal mb-4">
                        &ldquo;{item.quote}&rdquo;
                      </p>

                      {/* Author Info & Inoodex Brand Stamp */}
                      <div className="flex items-end justify-between gap-2 pt-2 border-t border-zinc-100 mt-auto">
                        {/* Author Details */}
                        <div className="min-w-0 pr-1">
                          <h4 className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight truncate">
                            {item.name}
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-zinc-500 font-light truncate mt-0.5">
                            {item.designation}
                          </p>
                        </div>

                        {/* Inoodex Brand Stamp (Replaces old bti stamp) */}
                        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 pb-0.5">
                          {/* 40+ Yrs Excellence */}
                          <div className="flex flex-col items-center justify-center">
                            <span className="text-[7.5px] font-mono font-black text-zinc-900 tracking-tighter border border-zinc-900 px-1 py-[1px] rounded-xs">
                              40+ YRS
                            </span>
                            <span className="text-[5.5px] font-bold text-zinc-600 uppercase tracking-tight mt-0.5">
                              Excellence
                            </span>
                          </div>

                          <div className="w-px h-6 bg-zinc-200" />

                          {/* SCAN HERE QR & inoodex.com */}
                          <div className="flex flex-col items-center">
                            <span className="text-[5px] font-bold text-zinc-700 tracking-wider uppercase">
                              SCAN HERE
                            </span>
                            <div className="w-4 h-4 my-0.5">
                              <svg viewBox="0 0 24 24" className="w-full h-full fill-zinc-900">
                                <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 3h2v3h-2v-3zm0-5h2v2h-2v-2zm-4 0h2v4h-2v-4zm2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4 2h2v2h-2v-2zm4 2h2v2h-2v-2zm-2-6h2v2h-2v-2z" />
                              </svg>
                            </div>
                            <span className="text-[5px] font-bold text-white bg-zinc-900 px-1 py-[1px] tracking-tight rounded-xs uppercase">
                              inoodex.com
                            </span>
                          </div>

                          <div className="w-px h-6 bg-zinc-200" />

                          {/* Circular Inoodex Seal */}
                          <div className="flex flex-col items-center">
                            <div className="w-7 h-7 rounded-full border-[1.5px] border-zinc-900 flex items-center justify-center p-0.5 bg-white shadow-xs">
                              <Image
                                src="/logo/logo.png"
                                alt="Inoodex"
                                width={60}
                                height={20}
                                className="w-auto h-3 object-contain"
                              />
                            </div>
                            <span className="text-[5px] font-serif tracking-tighter text-zinc-600 italic mt-0.5">
                              ...SINCE 1984
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* High-Resolution Testimonial Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-in fade-in duration-300">
          <div
            onClick={() => setActiveModalItem(null)}
            className="absolute inset-0 cursor-pointer"
            aria-hidden="true"
          />

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveModalItem(null)}
            aria-label="Close Lightbox"
            className="fixed top-6 right-6 z-60 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 cursor-pointer hover:rotate-90"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Detailed Modal Card */}
          <div className="relative z-50 max-w-2xl w-full rounded-3xl overflow-hidden bg-white text-zinc-900 shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/20">
            {/* Modal Photo */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
              <Image
                src={activeModalItem.photo}
                alt={activeModalItem.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 700px"
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-2 text-white">
                <span className="text-xs font-mono tracking-wider uppercase font-semibold">
                  OUR CUSTOMERS SPEAK FOR US
                </span>
                <span className="text-amber-400 font-serif text-sm font-bold">”</span>
              </div>
            </div>

            {/* Modal Card Details */}
            <div className="p-6 sm:p-8 bg-white">
              <p className="text-sm sm:text-base leading-relaxed text-zinc-800 font-normal mb-6">
                &ldquo;{activeModalItem.quote}&rdquo;
              </p>

              <div className="flex items-end justify-between gap-4 pt-4 border-t border-zinc-100">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight">
                    {activeModalItem.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 font-light mt-0.5">
                    {activeModalItem.designation}
                  </p>
                </div>

                {/* Inoodex Brand Stamp */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] font-mono font-black text-zinc-900 border border-zinc-900 px-1.5 py-0.5 rounded-xs">
                      40+ YRS
                    </span>
                    <span className="text-[7px] font-bold text-zinc-600 uppercase tracking-tight mt-0.5">
                      Excellence
                    </span>
                  </div>

                  <div className="w-px h-8 bg-zinc-200" />

                  <div className="flex flex-col items-center">
                    <span className="text-[6.5px] font-bold text-zinc-700 uppercase tracking-wider">
                      SCAN HERE
                    </span>
                    <div className="w-5 h-5 my-0.5">
                      <svg viewBox="0 0 24 24" className="w-full h-full fill-zinc-900">
                        <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 3h2v3h-2v-3zm0-5h2v2h-2v-2zm-4 0h2v4h-2v-4zm2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4 2h2v2h-2v-2zm4 2h2v2h-2v-2zm-2-6h2v2h-2v-2z" />
                      </svg>
                    </div>
                    <span className="text-[6.5px] font-bold text-white bg-zinc-900 px-1.5 py-[1px] tracking-tight rounded-xs uppercase">
                      inoodex.com
                    </span>
                  </div>

                  <div className="w-px h-8 bg-zinc-200" />

                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full border-2 border-zinc-900 flex items-center justify-center p-0.5 bg-white">
                      <Image
                        src="/logo/logo.png"
                        alt="Inoodex"
                        width={80}
                        height={25}
                        className="w-auto h-4 object-contain"
                      />
                    </div>
                    <span className="text-[6.5px] font-serif tracking-tighter text-zinc-600 italic mt-0.5">
                      ...SINCE 1984
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
