"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function StatementOfArrival() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const playBtnRef = useRef<HTMLButtonElement>(null);
  const bgImgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (bgImgRef.current) {
        gsap.to(bgImgRef.current, {
          yPercent: 12,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (playBtnRef.current) {
        gsap.fromTo(
          playBtnRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: playBtnRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 90%",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPlaying(false);
      }
    };
    if (isPlaying) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isPlaying]);

  return (
    <>
      <section
        id="statement"
        ref={sectionRef}
        className="relative w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black select-none border-t border-white/5"
      >
        {/* Full-Bleed Background Architectural Render */}
        <div ref={bgImgRef} className="absolute inset-0 z-0 will-change-transform">
          <Image
            src="/showcase/statement-of-arrival.webp"
            alt="A Statement of Arrival - Architectural Landmark"
            fill
            priority
            className="object-cover object-center transition-transform duration-[10000ms] ease-out hover:scale-105"
            sizes="100vw"
          />

          {/* Cinematic Vignette Layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70" />
        </div>

        {/* Center Glowing Glass Play Button */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto">
          <button
            ref={playBtnRef}
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Play Brand Architectural Video"
            className="group relative flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-110 active:scale-95"
          >
            {/* Glowing Pulse Rings */}
            <span className="absolute -inset-4 sm:-inset-6 rounded-full bg-white/10 animate-ping opacity-30 pointer-events-none" />
            <span className="absolute -inset-2 sm:-inset-3 rounded-full bg-white/15 backdrop-blur-xs transition-transform duration-500 group-hover:scale-125" />

            {/* Circular Glass Button */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-black/40 group-hover:bg-white backdrop-blur-xl border border-white/40 group-hover:border-white flex items-center justify-center text-white group-hover:text-black shadow-[0_0_50px_rgba(255,255,255,0.25)] transition-all duration-300">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current translate-x-0.5 transition-transform duration-300 group-hover:scale-110" />
            </div>
          </button>
        </div>

        {/* Bottom Headline: A Statement of Arrival */}
        <div
          ref={titleRef}
          className="relative z-10 pb-12 sm:pb-16 text-center px-4 w-full max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.06em] sm:tracking-[0.1em] text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            A Statement of Arrival
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(251,191,36,0.5)]" />
        </div>
      </section>

      {/* Cinematic Video Lightbox Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-in fade-in duration-300">
          {/* Backdrop click to close */}
          <div
            onClick={() => setIsPlaying(false)}
            className="absolute inset-0 cursor-pointer"
            aria-hidden="true"
          />

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsPlaying(false)}
            aria-label="Close Video"
            className="fixed top-6 right-6 z-60 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 cursor-pointer hover:rotate-90"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video Player Container */}
          <div className="relative z-50 w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/20 bg-black">
            <iframe
              src="https://www.youtube.com/embed/uj2JknvDRY4?autoplay=1&rel=0&modestbranding=1"
              title="A Statement of Arrival - Architectural Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </>
  );
}

