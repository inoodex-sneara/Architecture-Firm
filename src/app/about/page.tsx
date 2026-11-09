"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";

const storyYears = [1984, 1986, 1990, 1996, 2000, 2006, 2011, 2016, 2019];

const timelineContent: Record<number, { title: string; subtitle: string; text: string }> = {
  1984: {
    title: "1984–1985",
    subtitle: "The Foundation of Inoodex",
    text: "In 1984, Inoodex began as a pioneer of contemporary architectural living in Bangladesh, guided by an unwavering commitment to structural integrity, timeless aesthetics, and enduring client trust.",
  },
  1986: {
    title: "1986–1990",
    subtitle: "Pioneering Modern Residential Concepts",
    text: "The studio expanded its architectural footprint with innovative residential concepts and built an unmatched reputation for disciplined project execution and on-time handovers.",
  },
  1990: {
    title: "1990–1996",
    subtitle: "Urban Communities & Master Planning",
    text: "Conceived new urban communities and multi-unit sanctuaries in Dhaka, responding to the growing aspiration for serene, light-filled, and functional contemporary residences.",
  },
  1996: {
    title: "1996–2000",
    subtitle: "Structural Resilience & Architectural Ambition",
    text: "An ambitious portfolio emerged, blending biophilic architectural elements with precision engineering to deliver enduring generational value for families and investors.",
  },
  2000: {
    title: "2000–2006",
    subtitle: "Landmark Residential & Commercial Spaces",
    text: "Deepened expertise in high-grade seismic-resistant construction, creating iconic residential addresses and commercial hubs throughout Dhaka's prime avenues.",
  },
  2006: {
    title: "2006–2011",
    subtitle: "Refining the Luxury Skyline",
    text: "Strategic architectural refinement and bespoke spatial design elevated the brand, defining premier addresses across Gulshan, Banani, and Baridhara.",
  },
  2011: {
    title: "2011–2016",
    subtitle: "Contemporary Urban Identity",
    text: "Emphasized sustainable architecture, expansive glass facades, and curated material palettes, setting new benchmarks for high-end luxury developments in Bangladesh.",
  },
  2016: {
    title: "2016–2019",
    subtitle: "Bespoke Design-Led Philosophy",
    text: "Adopted a design-first philosophy where every project is treated as an individual piece of sculpture, harmonizing human emotion with architectural serenity.",
  },
  2019: {
    title: "2019–Present",
    subtitle: "The Next Era of Architecture",
    text: "Today, Inoodex continues to sculpt the future with purpose—crafting iconic sustainable landmarks that celebrate craftsmanship, visionary design, and quiet luxury.",
  },
};

const coreValues = [
  "Win the Customer's Heart through Sincere Dedication",
  "Uncompromising Architectural Craftsmanship & Engineering Precision",
  "Pioneer Sustainable, Biophilic & Climate-Resilient Spaces",
  "Respect, Empower & Foster Visionary Talent Density",
  "Unwavering Transparency, Morals & Corporate Integrity",
  "Speed of Execution, Disciplined Delivery & Zero Redundancy",
  "Relentless Pursuit of Spatial Perfection & Aesthetic Purity",
];

export default function AboutPage() {
  const [selectedYear, setSelectedYear] = useState(1984);

  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#191919]">
      {/* Full Architectural Banner Showcase (Clean image view without text overlays) */}
      <section className="relative w-full overflow-hidden border-b border-black/10 bg-black pt-16 sm:pt-20">
        <div className="relative w-full aspect-[1.7/1] sm:aspect-[2.6/1] lg:aspect-[3.2/1] max-h-[600px] overflow-hidden bg-[#101114]">
          <Image
            src="/hero/slide-5.jpg"
            alt="Contemporary home framed by warm architectural lighting"
            fill
            priority
            className="object-cover object-[center_56%] brightness-[0.92] contrast-105 saturate-[0.9]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />
          {/* Subtle top vignette for seamless navbar integration */}
          <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-black/85 via-black/30 to-transparent pointer-events-none" />
          {/* Subtle bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f7f6f3] to-transparent sm:h-20" />
        </div>
      </section>

      {/* Legacy & History Section */}
      <section className="border-b border-black/10 bg-[#f7f6f3] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Visual Mosaic */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
                <div className="relative h-[340px] w-full sm:h-[420px]">
                  <Image
                    src="/showcase/Our-Legacy-1.webp"
                    alt="Modern Inoodex Architecture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              <div className="absolute -bottom-8 left-6 w-[55%] overflow-hidden rounded-xl border border-white bg-white p-1.5 shadow-2xl sm:w-[50%]">
                <div className="relative h-[180px] sm:h-[220px] rounded-lg overflow-hidden">
                  <Image
                    src="/showcase/about-us-legacy-2.webp"
                    alt="Interior Spatial Geometry"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 55vw, 25vw"
                  />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="pt-6 sm:pt-8 lg:pt-0 lg:pl-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                <span>Our Heritage</span>
              </div>

              <h2 className="text-2xl font-light tracking-tight text-[#191919] sm:text-3xl lg:text-4xl">
                Four Decades of Architectural Excellence
              </h2>

              <div className="space-y-3 text-sm font-light leading-relaxed text-zinc-600 sm:text-[15px]">
                <p>
                  Inoodex stands as a pioneering institution in Bangladesh&apos;s architectural landscape, raising benchmarks of professionalism, aesthetic purity, and sustainable urban living.
                </p>
                <p>
                  With a proud legacy of disciplined on-time deliveries, structural resilience exceeding national building codes, and bespoke spatial curation, we have shaped prominent skylines for over 40 years.
                </p>
                <p>
                  Our collaborative practice unites award-winning architects, senior structural consultants, and landscape artists driven by a single purpose: crafting spaces that inspire human peace.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-6">
                <div>
                  <p className="text-2xl font-light font-mono text-[#191919] sm:text-3xl">40+</p>
                  <p className="text-[11px] uppercase font-mono tracking-wider text-zinc-500">Years of Legacy</p>
                </div>
                <div className="h-8 w-px bg-black/10" />
                <div>
                  <p className="text-2xl font-light font-mono text-[#191919] sm:text-3xl">150+</p>
                  <p className="text-[11px] uppercase font-mono tracking-wider text-zinc-500">Curated Projects</p>
                </div>
                <div className="h-8 w-px bg-black/10" />
                <div>
                  <p className="text-2xl font-light font-mono text-[#191919] sm:text-3xl">100%</p>
                  <p className="text-[11px] uppercase font-mono tracking-wider text-zinc-500">Delivery Record</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="border-b border-black/10 bg-[#eeece8] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center mb-8 sm:mb-10 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-800">Historical Evolution</span>
            <h2 className="text-2xl font-light tracking-tight text-[#191919] sm:text-3xl lg:text-4xl">
              Milestones Shaping Our Four-Decade Journey
            </h2>
          </div>

          <div className="rounded-2xl border border-black/[0.08] bg-white/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-md sm:p-6">
            {/* Year Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
              {storyYears.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setSelectedYear(year)}
                  className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-mono transition-all duration-200 cursor-pointer ${
                    selectedYear === year
                      ? "border-amber-600 bg-amber-500/10 text-amber-800 shadow-sm"
                      : "border-black/10 bg-white text-zinc-600 hover:border-amber-600/30 hover:text-zinc-900"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Active Milestone Card */}
            <div className="mt-4 overflow-hidden rounded-xl border border-black/10 bg-white">
              <div className="grid lg:grid-cols-[1.4fr_0.9fr]">
                <div className="relative min-h-[300px] sm:min-h-[360px] w-full">
                  <Image
                    src="/hero/slide-2.jpg"
                    alt="Inoodex Historic Milestone"
                    fill
                    className="object-cover grayscale opacity-80"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-black/65" />
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-amber-300">Landmark Era</span>
                      <p className="text-xl sm:text-[1.65rem] font-light tracking-wide text-white mt-1">FORUM ARCHITECTURAL RESIDENCES</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center border-t border-black/10 bg-white p-6 sm:p-8 lg:border-l lg:border-t-0">
                  <div className="space-y-3">
                    <span className="inline-block text-xs font-mono uppercase tracking-wider text-amber-800">
                      {timelineContent[selectedYear].title}
                    </span>
                    <h3 className="text-lg font-medium leading-snug text-[#191919] sm:text-xl">
                      {timelineContent[selectedYear].subtitle}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-zinc-600 sm:text-[14px]">
                      {timelineContent[selectedYear].text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Core Values Section */}
      <section className="bg-[#f7f6f3] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 items-start">
            {/* Left: Purpose & Values */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-800">Guiding Philosophy</span>
                <h2 className="text-2xl font-light tracking-tight text-[#191919] sm:text-3xl lg:text-4xl">Vision &amp; Core Principles</h2>
                <p className="max-w-lg text-sm font-light leading-relaxed text-zinc-600 sm:text-[15px]">
                  To sculpt human-centric spatial environments and make the experience of living in an architectural sanctuary joyful, fulfilling, and timeless.
                </p>
              </div>

              <div className="border-t border-black/10 pt-2">
                <div className="flex items-center justify-between pb-3">
                  <h3 className="text-base font-medium tracking-wide text-[#191919] sm:text-lg">Our Core Pillars</h3>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">01 — 07</span>
                </div>

                <ul className="divide-y divide-black/[0.08]">
                  {coreValues.map((value, idx) => (
                    <li key={idx} className="flex items-start gap-3 py-2.5 text-sm font-light text-zinc-700 sm:py-3 sm:text-[14px]">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-amber-700/30 bg-amber-600/10 text-amber-800">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      <span className="leading-relaxed">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Architectural Feature Frame */}
            <div className="space-y-6">
              <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src="/hero/slide-1.jpg"
                    alt="Inoodex Contemporary Living"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 text-white">
                    <p className="text-[11px] uppercase font-mono tracking-[0.2em] text-amber-300">Quiet Luxury</p>
                    <p className="text-base sm:text-lg font-light tracking-wide mt-0.5">Spaces that breathe with light.</p>
                  </div>
                </div>
              </div>

              {/* Callout Box */}
              <div className="space-y-3 rounded-2xl border border-black/[0.08] bg-white p-5 shadow-sm sm:p-6">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-800">The Inoodex Standard</span>
                <h3 className="text-base font-medium text-[#191919] sm:text-lg">
                  Why Discerning Clients Choose Inoodex
                </h3>
                <p className="text-sm font-light leading-relaxed text-zinc-600 sm:text-[14px]">
                  Visionary spatial planning, rigorous structural engineering, transparent governance, and on-time delivery bring absolute confidence to every stage of your architectural journey.
                </p>

                <div className="pt-1 flex flex-wrap items-center gap-2">
                  {["Design-Led", "BNBC Exceeding", "On-Time Handover", "Generational Value"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-[#f7f6f3] px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/#properties"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 transition-colors hover:text-amber-600"
                  >
                    <span>View Our Featured Developments</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
