"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Full Architectural Banner Showcase (Clean view without text overlays) */}
      <section className="relative w-full overflow-hidden border-b border-zinc-200 bg-black pt-16 sm:pt-20">
        <div className="relative w-full aspect-[1.7/1] sm:aspect-[2.6/1] lg:aspect-[3.2/1] max-h-[600px] overflow-hidden bg-[#101114]">
          <Image
            src="/showcase/statement-of-arrival.webp"
            alt="Inoodex Architectural Landmark"
            fill
            priority
            className="object-cover object-center brightness-100 contrast-105"
            sizes="100vw"
          />
          {/* Subtle top vignette for seamless navbar integration */}
          <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-black/85 via-black/30 to-transparent pointer-events-none" />
          {/* Subtle bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent sm:h-20" />
        </div>
      </section>

      {/* Tensa-Style Split Parallax Showcase (Full-Width Alternating 50/50 Layout) */}
      <section className="relative w-full border-b border-zinc-200 bg-white">
        {/* ============================================================ */}
        {/* Block 1: Left Fixed Parallax Image + Right Floating White Box */}
        {/* ============================================================ */}
        <div className="flex flex-col lg:flex-row w-full min-h-[580px] lg:min-h-[720px] border-b border-zinc-200">
          {/* Left Column: Fixed Background Architectural Photo */}
          <div
            className="w-full lg:w-1/2 min-h-[420px] sm:min-h-[480px] lg:min-h-full bg-cover bg-center bg-no-repeat lg:bg-fixed relative overflow-hidden"
            style={{ backgroundImage: "url('/showcase/Our-Legacy-1.webp')" }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Right Column: Clean White Floating Box (Matches Tensa Screenshot) */}
          <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24 z-10">
            {/* Gold Laurel Wreath Award Icon */}
            <div className="mb-5 sm:mb-6">
              <Image
                src="/showcase/tensa-awards-icon.png"
                alt="Award Recognition"
                width={78}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain mx-auto"
              />
            </div>

            {/* Main Headline (All caps, clean tracking, matching Tensa) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-[0.05em] text-zinc-950 uppercase leading-tight max-w-xl">
              Architectural Excellence.
            </h2>

            {/* Subtitle Quote in quotation marks */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-600 font-light italic tracking-wide max-w-md">
              &ldquo;Pioneering Contemporary Architectural Living In Bangladesh Since 1984&rdquo;
            </p>

            {/* Descriptive Inoodex Legacy Story */}
            <p className="mt-6 max-w-md text-sm sm:text-[15px] leading-relaxed text-zinc-700 font-normal">
              Inoodex stands as a pioneering institution in Bangladesh&apos;s architectural landscape, raising benchmarks of craftsmanship, aesthetic purity, and sustainable urban living.
            </p>

            {/* Metrics Row */}
            <div className="mt-8 pt-6 border-t border-zinc-200 w-full max-w-md flex items-center justify-center gap-6 sm:gap-10">
              <div>
                <p className="text-2xl sm:text-3xl font-light font-mono text-zinc-950">40+</p>
                <p className="text-[10.5px] uppercase font-mono tracking-wider text-zinc-500 mt-0.5">Years Legacy</p>
              </div>
              <div className="h-8 w-px bg-zinc-200" />
              <div>
                <p className="text-2xl sm:text-3xl font-light font-mono text-zinc-950">150+</p>
                <p className="text-[10.5px] uppercase font-mono tracking-wider text-zinc-500 mt-0.5">Projects</p>
              </div>
              <div className="h-8 w-px bg-zinc-200" />
              <div>
                <p className="text-2xl sm:text-3xl font-light font-mono text-zinc-950">100%</p>
                <p className="text-[10.5px] uppercase font-mono tracking-wider text-zinc-500 mt-0.5">Delivery Record</p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* Block 2: Left Floating White Box + Right Fixed Parallax Image */}
        {/* ============================================================ */}
        <div className="flex flex-col-reverse lg:flex-row w-full min-h-[580px] lg:min-h-[720px] border-b border-zinc-200">
          {/* Left Column: Clean White Floating Box (Matches Tensa Screenshot) */}
          <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24 z-10">
            {/* Gold Laurel Wreath Award Icon */}
            <div className="mb-5 sm:mb-6">
              <Image
                src="/showcase/tensa-awards-icon.png"
                alt="Award Recognition"
                width={78}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain mx-auto"
              />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-[0.05em] text-zinc-950 uppercase leading-tight max-w-xl">
              Eco Living Space.
            </h2>

            {/* Subtitle Quote in quotation marks */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-600 font-light italic tracking-wide max-w-md">
              &ldquo;Excellence In Sustainable, Biophilic &amp; Climate-Resilient Architecture&rdquo;
            </p>

            {/* Descriptive Story */}
            <p className="mt-6 max-w-md text-sm sm:text-[15px] leading-relaxed text-zinc-700 font-normal">
              Harmonizing natural sunlight, cross-ventilation, and seismic resilience exceeding BNBC standards to craft enduring sanctuaries where human peace thrives.
            </p>

            {/* Highlights Tag Pills */}
            <div className="mt-8 pt-6 border-t border-zinc-200 w-full max-w-md flex flex-wrap items-center justify-center gap-2">
              {["Biophilic Design", "Zero Redundancy", "BNBC Exceeding", "Enduring Sanctuary"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-300 bg-zinc-50 px-3.5 py-1 text-xs font-mono font-medium text-zinc-800 uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Fixed Background Architectural Photo */}
          <div
            className="w-full lg:w-1/2 min-h-[420px] sm:min-h-[480px] lg:min-h-full bg-cover bg-center bg-no-repeat lg:bg-fixed relative overflow-hidden"
            style={{ backgroundImage: "url('/showcase/about-us-legacy-2.webp')" }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* ============================================================ */}
        {/* Block 3: Historical Evolution (Left Image + Right White Box) */}
        {/* ============================================================ */}
        <div className="flex flex-col lg:flex-row w-full min-h-[580px] lg:min-h-[720px] border-b border-zinc-200">
          {/* Left Column: Fixed Background Architectural Photo */}
          <div
            className="w-full lg:w-1/2 min-h-[420px] sm:min-h-[480px] lg:min-h-full bg-cover bg-center bg-no-repeat lg:bg-fixed relative overflow-hidden"
            style={{ backgroundImage: "url('/hero/slide-2.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/15" />
          </div>

          {/* Right Column: Clean White Floating Box (Historical Evolution) */}
          <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24 z-10">
            {/* Gold Laurel Wreath Award Icon */}
            <div className="mb-5 sm:mb-6">
              <Image
                src="/showcase/tensa-awards-icon.png"
                alt="Award Recognition"
                width={78}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain mx-auto"
              />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-[0.05em] text-zinc-950 uppercase leading-tight max-w-xl">
              Four-Decade Evolution.
            </h2>

            {/* Subtitle Quote in quotation marks */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-600 font-light italic tracking-wide max-w-md">
              &ldquo;Milestones Shaping Our Architectural Journey From 1984 To The Present Era&rdquo;
            </p>

            {/* Clean Timeline Eras List */}
            <div className="mt-8 pt-6 border-t border-zinc-200 w-full max-w-lg text-left space-y-4">
              <div className="border-l-2 border-amber-600 pl-4 py-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold">1984 – 1996</span>
                <h4 className="text-sm sm:text-[15px] font-semibold text-zinc-950">Foundation &amp; Modern Residential Pioneers</h4>
                <p className="text-xs sm:text-[13px] text-zinc-600 mt-1 leading-relaxed">
                  Began as a pioneer of contemporary residential living in Bangladesh, establishing unmatched discipline in structural execution and on-time handovers.
                </p>
              </div>

              <div className="border-l-2 border-zinc-300 pl-4 py-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold">1996 – 2011</span>
                <h4 className="text-sm sm:text-[15px] font-semibold text-zinc-950">Urban Communities &amp; Seismic Engineering</h4>
                <p className="text-xs sm:text-[13px] text-zinc-600 mt-1 leading-relaxed">
                  Deepened expertise in high-grade seismic-resistant construction, creating premier residential landmarks and commercial hubs across Gulshan, Banani, and Baridhara.
                </p>
              </div>

              <div className="border-l-2 border-zinc-300 pl-4 py-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold">2011 – Present</span>
                <h4 className="text-sm sm:text-[15px] font-semibold text-zinc-950">Sustainable Skylines &amp; Quiet Luxury</h4>
                <p className="text-xs sm:text-[13px] text-zinc-600 mt-1 leading-relaxed">
                  Emphasized biophilic architecture, expansive glass facades, and bespoke spatial craftsmanship, defining the next era of luxury sanctuary living.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* Block 4: Guiding Philosophy & 7 Pillars (Left White Box + Right Image) */}
        {/* ============================================================ */}
        <div className="flex flex-col-reverse lg:flex-row w-full min-h-[580px] lg:min-h-[720px] border-b border-zinc-200">
          {/* Left Column: Clean White Floating Box (Philosophy & 7 Pillars) */}
          <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24 z-10">
            {/* Gold Laurel Wreath Award Icon */}
            <div className="mb-5 sm:mb-6">
              <Image
                src="/showcase/tensa-awards-icon.png"
                alt="Award Recognition"
                width={78}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain mx-auto"
              />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-[0.05em] text-zinc-950 uppercase leading-tight max-w-xl">
              Guiding Philosophy.
            </h2>

            {/* Subtitle Quote in quotation marks */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-600 font-light italic tracking-wide max-w-md">
              &ldquo;To Sculpt Human-Centric Spatial Environments That Inspire Joyful Living&rdquo;
            </p>

            {/* Core Pillars List */}
            <div className="mt-8 pt-6 border-t border-zinc-200 w-full max-w-lg text-left">
              <ul className="space-y-3">
                {coreValues.map((value, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-900 font-medium">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-600 text-white shadow-xs">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    <span className="leading-snug">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Fixed Background Architectural Photo */}
          <div
            className="w-full lg:w-1/2 min-h-[420px] sm:min-h-[480px] lg:min-h-full bg-cover bg-center bg-no-repeat lg:bg-fixed relative overflow-hidden"
            style={{ backgroundImage: "url('/hero/slide-1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* ============================================================ */}
        {/* Block 5: The Inoodex Standard (Left Image + Right White Box) */}
        {/* ============================================================ */}
        <div className="flex flex-col lg:flex-row w-full min-h-[580px] lg:min-h-[720px]">
          {/* Left Column: Fixed Background Architectural Photo */}
          <div
            className="w-full lg:w-1/2 min-h-[420px] sm:min-h-[480px] lg:min-h-full bg-cover bg-center bg-no-repeat lg:bg-fixed relative overflow-hidden"
            style={{ backgroundImage: "url('/showcase/Our-Legacy-2.webp')" }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Right Column: Clean White Floating Box (The Inoodex Standard) */}
          <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24 z-10">
            {/* Gold Laurel Wreath Award Icon */}
            <div className="mb-5 sm:mb-6">
              <Image
                src="/showcase/tensa-awards-icon.png"
                alt="Award Recognition"
                width={78}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain mx-auto"
              />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-[0.05em] text-zinc-950 uppercase leading-tight max-w-xl">
              The Inoodex Standard.
            </h2>

            {/* Subtitle Quote in quotation marks */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-600 font-light italic tracking-wide max-w-md">
              &ldquo;Why Discerning Clients Choose Inoodex As Their Sanctuary Maker&rdquo;
            </p>

            {/* Descriptive Story */}
            <p className="mt-6 max-w-md text-sm sm:text-[15px] leading-relaxed text-zinc-700 font-normal">
              Visionary spatial planning, rigorous structural engineering, transparent governance, and on-time delivery bring absolute confidence to every stage of your architectural journey.
            </p>

            {/* Highlights Tag Pills */}
            <div className="mt-8 pt-6 border-t border-zinc-200 w-full max-w-md flex flex-wrap items-center justify-center gap-2">
              {["Design-Led", "BNBC Exceeding", "On-Time Handover", "Generational Value"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-300 bg-zinc-50 px-3.5 py-1 text-xs font-mono font-medium text-zinc-800 uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="mt-8">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white transition hover:bg-zinc-800"
              >
                <span>Explore Featured Developments</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
