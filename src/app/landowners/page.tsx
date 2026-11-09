"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  TrendingUp,
  Building2,
  Clock,
  CheckCircle2,
  ArrowRight,
  Send,
  Check,
  Plus,
  Minus,
  Sparkles,
  Calculator,
  Compass,
  FileText,
  Phone,
  MessageSquare,
  Award,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

// Estimated FAR metrics for Dhaka prime zones
interface ZoneMetrics {
  name: string;
  avgPricePerSft: number;
  estFAR: number;
  growthRate: string;
}

const zoneData: Record<string, ZoneMetrics> = {
  "Gulshan & Banani": {
    name: "Gulshan & Banani",
    avgPricePerSft: 28000,
    estFAR: 4.5,
    growthRate: "+14.2% Annually",
  },
  "Baridhara Diplomatic": {
    name: "Baridhara Diplomatic",
    avgPricePerSft: 34000,
    estFAR: 4.0,
    growthRate: "+16.5% Annually",
  },
  "Bashundhara R/A": {
    name: "Bashundhara R/A",
    avgPricePerSft: 13000,
    estFAR: 3.8,
    growthRate: "+12.8% Annually",
  },
  Dhanmondi: {
    name: "Dhanmondi",
    avgPricePerSft: 21000,
    estFAR: 4.2,
    growthRate: "+11.5% Annually",
  },
  Uttara: {
    name: "Uttara",
    avgPricePerSft: 12000,
    estFAR: 3.7,
    growthRate: "+13.1% Annually",
  },
};

const comparisonPoints = [
  {
    feature: "Architectural Vision",
    inoodex: "Bespoke signature architecture crafted for maximum light, wind-flow, and premier street presence.",
    traditional: "Generic cookie-cutter templates with cramped parking and standardized elevations.",
  },
  {
    feature: "Handover & Timeline",
    inoodex: "100% on-time delivery backed by independent bank escrow & contractual delay compensation.",
    traditional: "Uncertain execution schedules frequently suffering 18 to 36 months of prolonged delays.",
  },
  {
    feature: "Landowner Revenue Share",
    inoodex: "Maximum allowable FAR optimization yielding higher buildable area and premium market pricing.",
    traditional: "Conservative designs resulting in lower net usable square footage and slower sales velocity.",
  },
  {
    feature: "Engineering & Material Grades",
    inoodex: "Seismic 8.0 compliant RCC structure, BSRM Xtreme 500W steel, and imported European elevator systems.",
    traditional: "Unverified grade compromises on non-visible structural concrete, plumbing, and electrical lines.",
  },
  {
    feature: "Post-Handover Property Care",
    inoodex: "5-year comprehensive structural warranty with dedicated facility management & maintenance support.",
    traditional: "Immediate developer withdrawal after key handover with zero long-term maintenance infrastructure.",
  },
];

const developmentStages = [
  {
    step: "01",
    title: "Feasibility & Soil Diligence",
    description:
      "Our structural engineers execute thorough soil investigation, topographic surveying, and RAJUK FAR yield calculations completely free of cost.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Bespoke Architectural Masterplan",
    description:
      "Our lead architects present photorealistic 3D elevations, floor layouts, and dual-parking plans created to honor your family's personal spatial needs.",
    icon: Building2,
  },
  {
    step: "03",
    title: "Transparent Legal Agreement",
    description:
      "Mutually agreed joint venture contract with zero ambiguous clauses, verified bank-guaranteed signing money, and dedicated escrow protection.",
    icon: FileText,
  },
  {
    step: "04",
    title: "Engineering & Generational Handover",
    description:
      "Rigorous construction supervised by senior project directors with real-time video progress reports and guaranteed on-schedule completion.",
    icon: Award,
  },
];

const successShowcase = [
  {
    id: "the-seasons",
    name: "The Seasons",
    location: "Block I, Bashundhara R/A, Dhaka",
    landSize: "10 Katha",
    floors: "G+9",
    image: "/featured/the-seasons.webp",
    highlight: "Award-winning organic luxury façade with 100% landowner satisfaction.",
  },
  {
    id: "emerald-heights",
    name: "Emerald Heights",
    location: "Block K, Bashundhara R/A, Dhaka",
    landSize: "12 Katha",
    floors: "B+G+12",
    image: "/featured/emerald-heights.webp",
    highlight: "High-yield residential condominium commanding premier market valuation.",
  },
  {
    id: "the-lighthouse",
    name: "The Lighthouse",
    location: "Block M, Bashundhara R/A, Dhaka",
    landSize: "14 Katha",
    floors: "2B+G+14",
    image: "/featured/the-lighthouse.webp",
    highlight: "Iconic illuminated tower featuring double-height entrance and infinity roof garden.",
  },
];

const faqs = [
  {
    question: "How is the Landowner Share and Signing Money determined?",
    answer:
      "The sharing ratio and signing money are calculated scientifically based on your plot's exact location, frontage road width, RAJUK setback regulations, and prevailing market sales velocity. We provide a transparent breakdown showing projected gross realization so you get the maximum legal value.",
  },
  {
    question: "Can our family keep custom apartment units designed to our preferences?",
    answer:
      "Yes. As the landowner, you have first priority to select preferred floors and layouts. Our architectural team will customize your personal apartments — including room configurations, interior finishes, and private terrace gardens — to suit your family's exact lifestyle.",
  },
  {
    question: "What financial guarantees protect the landowner against project delays?",
    answer:
      "InooDex provides legally binding completion guarantees backed by banking financial covenants. Our JV contracts include pre-agreed monthly delay compensation clauses ensuring you are fully protected financially at every stage of development.",
  },
  {
    question: "Who manages the approvals from RAJUK, Civil Aviation, and utility bodies?",
    answer:
      "InooDex handles 100% of the regulatory liaison, including RAJUK plan clearance, Fire Service approval, Department of Environment permits, and DESCO/WASA connections at our own responsibility and expense.",
  },
  {
    question: "What documents are required to begin an initial feasibility assessment?",
    answer:
      "An initial discussion requires only your plot address and approximate size in Katha. If available, a copy of the deed (Dalil), Mutation (Khatian), or CS/RS/BS records will help our legal team verify title viability quickly.",
  },
];

export default function LandownersPage() {
  // Calculator State
  const [selectedZone, setSelectedZone] = useState("Bashundhara R/A");
  const [plotKatha, setPlotKatha] = useState(10);

  // Form State
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [plotAddress, setPlotAddress] = useState("");
  const [plotSize, setPlotSize] = useState("");
  const [landCategory, setLandCategory] = useState("Residential");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Derived Calculator Calculations
  const currentZone = zoneData[selectedZone] || zoneData["Bashundhara R/A"];
  // 1 Katha = 720 sft. Total Land SFT = plotKatha * 720
  const landAreaSft = plotKatha * 720;
  const estimatedBuiltSft = Math.round(landAreaSft * currentZone.estFAR);
  const estimatedGrossValue = Math.round(estimatedBuiltSft * currentZone.avgPricePerSft);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerName || !ownerPhone) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-950 selection:text-white">
      {/* ========================================================= */}
      {/* 1. HERO: SOPHISTICATED EDITORIAL ARCHITECTURAL STYLE */}
      {/* ========================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 bg-white border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-mono uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-zinc-950" />
                <span>Joint Venture Partnerships</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-zinc-950 tracking-tight leading-[1.12]">
                Your Land. <br />
                <span className="font-semibold text-zinc-950">A Generational Landmark.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-zinc-600 font-light max-w-xl leading-relaxed">
                We collaborate with visionary landowners across Dhaka to transform prime urban plots
                into architecturally distinguished, commercially superior landmarks that command
                premier market valuation and honor family heritage.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#calculator"
                  className="px-7 py-3.5 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-950 hover:border-zinc-950 text-zinc-900 hover:text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer active:scale-95 inline-flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate Land Yield</span>
                </a>

                <a
                  href="#evaluate-form"
                  className="px-7 py-3.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer active:scale-95 inline-flex items-center gap-2"
                >
                  <span>Request VIP Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Key Highlights Pill Row */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-zinc-200 text-left">
                <div>
                  <span className="block text-2xl sm:text-3xl font-light text-zinc-950 font-serif">
                    100%
                  </span>
                  <p className="text-xs text-zinc-500 font-light mt-0.5">
                    On-Time Delivery Record
                  </p>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-light text-zinc-950 font-serif">
                    40+ Yrs
                  </span>
                  <p className="text-xs text-zinc-500 font-light mt-0.5">
                    Engineering Heritage
                  </p>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-light text-zinc-950 font-serif">
                    Max FAR
                  </span>
                  <p className="text-xs text-zinc-500 font-light mt-0.5">
                    Yield Optimization
                  </p>
                </div>
              </div>
            </div>

            {/* Right Architectural Visual Cinema Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200 shadow-2xl bg-zinc-900">
                <Image
                  src="/hero/slide-1.jpg"
                  alt="Modern architectural masterpiece by InooDex"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md text-zinc-900 border border-zinc-200 shadow-lg">
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                    FEATURED LANDOWNER COLLABORATION
                  </span>
                  <h3 className="text-base font-semibold text-zinc-950 mt-0.5">
                    The Seasons • 10 Katha Joint Venture
                  </h3>
                  <p className="text-xs text-zinc-600 mt-1 font-light">
                    Transforming a vacant plot into a signature 9-story luxury residence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. INTERACTIVE LAND FEASIBILITY & YIELD CALCULATOR */}
      {/* ========================================================= */}
      <section id="calculator" className="py-20 sm:py-28 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Section Header */}
          <div className="max-w-2xl mb-12">
            <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              — INTERACTIVE YIELD ESTIMATOR
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
              Calculate Your Land&apos;s Development Potential.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-light mt-3 leading-relaxed">
              Explore immediate estimates for buildable square footage and gross market valuation
              based on RAJUK FAR standards and prime Dhaka micro-markets.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="rounded-2xl bg-white border border-zinc-200 p-6 sm:p-10 lg:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Controls */}
              <div className="lg:col-span-6 space-y-8">
                {/* 1. Zone Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                    1. Select Plot Location
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {Object.keys(zoneData).map((zone) => {
                      const isActive = selectedZone === zone;
                      return (
                        <button
                          key={zone}
                          type="button"
                          onClick={() => setSelectedZone(zone)}
                          className={`px-4 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "bg-zinc-950 text-white font-semibold shadow-sm"
                              : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200"
                          }`}
                        >
                          {zone}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Plot Size Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                      2. Plot Size in Katha
                    </label>
                    <span className="text-xl font-bold font-serif text-zinc-950">
                      {plotKatha} <span className="text-xs font-sans font-normal text-zinc-500">Katha ({landAreaSft.toLocaleString()} sft)</span>
                    </span>
                  </div>

                  <input
                    type="range"
                    min="3"
                    max="40"
                    step="0.5"
                    value={plotKatha}
                    onChange={(e) => setPlotKatha(parseFloat(e.target.value))}
                    className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-950"
                  />
                  <div className="flex justify-between text-[11px] text-zinc-400 font-mono mt-2">
                    <span>3 Katha</span>
                    <span>10 Katha</span>
                    <span>20 Katha</span>
                    <span>40 Katha</span>
                  </div>
                </div>

                {/* Micro-market insights */}
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Benchmark Sales Price:</span>
                    <strong className="text-zinc-950 font-mono">
                      ৳ {currentZone.avgPricePerSft.toLocaleString()} / sft
                    </strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Estimated RAJUK FAR Ratio:</span>
                    <strong className="text-zinc-950 font-mono">
                      {currentZone.estFAR}x Plot Area
                    </strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">5-Year Capital Appreciation:</span>
                    <strong className="text-emerald-700 font-mono font-semibold">
                      {currentZone.growthRate}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Right Column: Calculated Yield Display */}
              <div className="lg:col-span-6 bg-[#fafafa] rounded-2xl p-6 sm:p-8 lg:p-10 border border-zinc-200 space-y-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                  ESTIMATED PROJECT YIELD
                </span>

                <div className="space-y-4">
                  {/* Built-up Potential */}
                  <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm">
                    <span className="text-xs text-zinc-500 block">
                      Estimated Total Built-Up Area
                    </span>
                    <p className="text-3xl sm:text-4xl font-light text-zinc-950 font-serif mt-1">
                      {estimatedBuiltSft.toLocaleString()}{" "}
                      <span className="text-sm font-sans font-normal text-zinc-500">sft</span>
                    </p>
                  </div>

                  {/* Project Realization Value */}
                  <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm">
                    <span className="text-xs text-zinc-500 block">
                      Projected Gross Realization Value
                    </span>
                    <p className="text-3xl sm:text-4xl font-light text-zinc-950 font-serif mt-1">
                      ৳ {(estimatedGrossValue / 10000000).toFixed(2)}{" "}
                      <span className="text-sm font-sans font-normal text-zinc-500">Crore</span>
                    </p>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                  *Preliminary estimation. Exact buildable area and sharing percentages are finalized
                  following physical soil exploration, setback clearance, and RAJUK master planning.
                </p>

                <div className="pt-2">
                  <a
                    href="#evaluate-form"
                    onClick={() => {
                      setPlotAddress(`${selectedZone}, Dhaka`);
                      setPlotSize(`${plotKatha} Katha`);
                    }}
                    className="w-full py-3.5 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-950 hover:border-zinc-950 text-zinc-900 hover:text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Request Full Feasibility Dossier for This Plot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. INOODEX VS. TRADITIONAL DEVELOPER (Comparison Table) */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Header */}
          <div className="max-w-2xl mb-14 sm:mb-16">
            <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              — WHY LANDOWNERS CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
              The Architectural Partnership Standard.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-light mt-3 leading-relaxed">
              We operate not as a commercial speculative builder, but as an architectural design
              and development firm where your land is treated as an enduring legacy.
            </p>
          </div>

          {/* Comparison Cards / Table */}
          <div className="border border-zinc-200 rounded-2xl overflow-hidden shadow-sm bg-white divide-y divide-zinc-200">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-zinc-50 p-4 sm:p-6 text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              <div className="col-span-4 sm:col-span-3">Development Dimension</div>
              <div className="col-span-4 sm:col-span-5 text-zinc-950 font-bold">
                InooDex Joint Venture
              </div>
              <div className="col-span-4 sm:col-span-4 text-zinc-400">
                Typical Commercial Developer
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisonPoints.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-6 items-start gap-3 sm:gap-4 hover:bg-zinc-50/50 transition-colors"
              >
                <div className="col-span-12 sm:col-span-3 text-xs sm:text-sm font-semibold text-zinc-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-zinc-950 shrink-0" />
                  <span>{item.feature}</span>
                </div>
                <div className="col-span-12 sm:col-span-5 text-xs sm:text-sm text-zinc-800 leading-relaxed font-medium">
                  {item.inoodex}
                </div>
                <div className="col-span-12 sm:col-span-4 text-xs sm:text-sm text-zinc-500 leading-relaxed font-light">
                  {item.traditional}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. FOUR-STAGE COLLABORATIVE DEVELOPMENT JOURNEY */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mb-14 sm:mb-16">
            <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              — A CLEAR, TRANSPARENT PATH
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
              From Private Land to Completed Landmark.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-light mt-3 leading-relaxed">
              Every milestone is guided by transparent governance, independent engineering reviews,
              and open communication with the landowner&apos;s family.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-light font-serif text-zinc-400">
                        {stage.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-medium text-zinc-950 mb-2.5 tracking-tight">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. LANDOWNER SUCCESS SHOWCASE */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                — LANDOWNER SUCCESS STORIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
                Landmarks We Created Together.
              </h2>
            </div>
            <Link
              href="/properties"
              className="text-xs sm:text-sm font-medium text-zinc-900 hover:text-zinc-600 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Explore all completed developments</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {successShowcase.map((project) => (
              <Link
                key={project.id}
                href={`/properties/${project.id}`}
                className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 text-[11px] font-mono uppercase tracking-wider font-medium">
                    {project.landSize}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-light text-zinc-950 group-hover:translate-x-1 transition-transform">
                      {project.name}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 font-light">{project.location}</p>
                    <p className="text-xs text-zinc-600 mt-3 font-light leading-relaxed">
                      {project.highlight}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-medium text-zinc-950">
                    <span>View Project Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CONFIDENTIAL LAND EVALUATION SUITE (The Form) */}
      {/* ========================================================= */}
      <section id="evaluate-form" className="py-20 sm:py-28 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Proposition */}
            <div className="lg:col-span-5 space-y-6">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400">
                — CONFIDENTIAL EVALUATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight leading-tight">
                Submit Your Land for a <br />
                <span className="font-semibold text-zinc-950">Complimentary Study.</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                Our senior acquisitions director and lead structural architect will inspect your
                property, evaluate zoning parameters, and deliver a comprehensive feasibility dossier
                within 5 business days.
              </p>

              {/* VIP Contact Hotlines */}
              <div className="pt-4 space-y-3">
                <div className="p-4 rounded-xl bg-white border border-zinc-200 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                      Direct Landowner Hotline
                    </span>
                    <a
                      href="tel:+8801313401405"
                      className="text-sm font-mono font-bold text-zinc-950 hover:text-zinc-600 transition-colors"
                    >
                      +880 1313-401405
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-zinc-200 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                      Executive WhatsApp Desk
                    </span>
                    <a
                      href="https://wa.me/8801313401405?text=Hello%20InooDex,%20I%20am%20a%20landowner%20interested%20in%20discussing%20a%20joint%20venture."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      Chat on WhatsApp (+880 1313-401405)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Submission Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-zinc-200 p-6 sm:p-10 shadow-xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-light text-zinc-950">Feasibility Request Received</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-zinc-950">{ownerName}</strong>. Our senior director
                    of acquisitions will contact you directly at <strong className="text-zinc-950">{ownerPhone}</strong> to
                    coordinate the site visit and feasibility report.
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-lg border border-zinc-300 text-xs font-medium text-zinc-800 hover:bg-zinc-100 transition-colors"
                    >
                      Submit Another Property
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-2 border-b border-zinc-200">
                    <h3 className="text-xl font-light text-zinc-950 tracking-tight">
                      Submit Your Property for Assessment
                    </h3>
                    <p className="text-xs text-zinc-500 font-light mt-0.5">
                      All land submissions are handled under strict non-disclosure privacy.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-500 mb-1">
                      Landowner Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="e.g. Syed Rafiqul Islam"
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-zinc-950"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-500 mb-1">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={ownerPhone}
                        onChange={(e) => setOwnerPhone(e.target.value)}
                        placeholder="+880 1700-000000"
                        className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-zinc-950"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-500 mb-1">
                        Approximate Plot Size *
                      </label>
                      <input
                        type="text"
                        required
                        value={plotSize}
                        onChange={(e) => setPlotSize(e.target.value)}
                        placeholder="e.g. 10 Katha"
                        className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-zinc-950"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-500 mb-1">
                        Plot Location / Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={plotAddress}
                        onChange={(e) => setPlotAddress(e.target.value)}
                        placeholder="e.g. Road 79, Gulshan-2, Dhaka"
                        className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-zinc-950"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-500 mb-1">
                        Zoning / Property Type
                      </label>
                      <select
                        value={landCategory}
                        onChange={(e) => setLandCategory(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-zinc-950"
                      >
                        <option value="Residential">Residential Residence</option>
                        <option value="Commercial">Commercial / Mixed-Use</option>
                        <option value="Condominium">Luxury High-Rise Condominium</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-950 hover:border-zinc-950 text-zinc-900 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer active:scale-95 flex items-center justify-center gap-2"
                    >
                      <span>Request Confidential Feasibility Study</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mb-12">
            <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              — ESSENTIAL CLARITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
              Frequently Asked Questions.
            </h2>
          </div>

          <div className="max-w-4xl divide-y divide-zinc-200 border-t border-b border-zinc-200">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                  >
                    <span className="text-sm sm:text-base font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">
                      {faq.question}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-zinc-100 group-hover:bg-zinc-200 flex items-center justify-center shrink-0 transition-colors">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-zinc-900" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-zinc-900" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-3.5 pr-8 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
