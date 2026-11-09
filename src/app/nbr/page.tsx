"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Home,
  Building,
  Video,
  FileText,
  Key,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  MapPin,
  Calendar,
  Phone,
  MessageSquare,
  Check,
  X,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { allPropertiesData } from "@/data/properties";

// Location data for Investment Opportunity Section
interface LocationOutlookData {
  name: string;
  description: string;
  checkpoints: string[];
  historicalPrices: { year: number; price: number }[];
}

const locationOutlookMap: Record<string, LocationOutlookData> = {
  "Bashundhara R/A": {
    name: "Bashundhara R/A",
    description:
      "Explore a variety of apartments in Blocks D, I, and J, with different sizes and layouts to suit your lifestyle. Compare homes for your family or your investment plans.",
    checkpoints: [
      "Discover apartment options across Blocks D, I, and J",
      "Compare sizes, layouts, and project amenities",
      "Request current prices, availability, and handover timelines",
    ],
    historicalPrices: [
      { year: 2021, price: 7900 },
      { year: 2022, price: 8700 },
      { year: 2023, price: 9900 },
      { year: 2024, price: 11000 },
      { year: 2025, price: 12100 },
      { year: 2026, price: 13000 },
    ],
  },
  "Gulshan & Banani": {
    name: "Gulshan & Banani",
    description:
      "Dhaka's prime diplomatic and commercial center. Premium residential towers with international embassy security, lakefront views, and elite lifestyle conveniences.",
    checkpoints: [
      "Ultra-luxury penthouses and single-floor private residences",
      "Proximity to American Club, Nordic Club, and international schools",
      "Unmatched capital appreciation and high foreign tenant demand",
    ],
    historicalPrices: [
      { year: 2021, price: 18500 },
      { year: 2022, price: 20500 },
      { year: 2023, price: 22800 },
      { year: 2024, price: 25000 },
      { year: 2025, price: 27500 },
      { year: 2026, price: 30000 },
    ],
  },
  Uttara: {
    name: "Uttara",
    description:
      "Strategic suburban haven connected directly to the Hazrat Shahjalal International Airport, Dhaka Elevated Expressway, and Metro Rail Line-6.",
    checkpoints: [
      "Fast commute to airport and major highways for frequent travelers",
      "Wide planned sectors with parks, lakes, and modern healthcare",
      "Excellent rental yield from multinational transit executives",
    ],
    historicalPrices: [
      { year: 2021, price: 7200 },
      { year: 2022, price: 7900 },
      { year: 2023, price: 8900 },
      { year: 2024, price: 9800 },
      { year: 2025, price: 10900 },
      { year: 2026, price: 11800 },
    ],
  },
};

const nrbProperties = [
  {
    id: "allegra",
    name: "Allegra",
    location: "Block K, Bashundhara R/A, Dhaka",
    image: "/featured/emerald-heights.webp",
    area: "Bashundhara R/A",
  },
  {
    id: "amabilia",
    name: "Amabilia",
    location: "Mohakhali, Dhaka",
    image: "/featured/the-seasons.webp",
    area: "Adabor",
  },
  {
    id: "amberwood",
    name: "Amberwood",
    location: "Tejgaon, Dhaka",
    image: "/featured/magnifico.webp",
    area: "Mirpur",
  },
  {
    id: "the-seasons",
    name: "The Seasons",
    location: "Block I, Bashundhara R/A, Dhaka",
    image: "/featured/the-seasons.webp",
    area: "Bashundhara R/A",
  },
  {
    id: "the-lighthouse",
    name: "The Lighthouse",
    location: "Block M, Bashundhara R/A, Dhaka",
    image: "/featured/the-lighthouse.webp",
    area: "Bashundhara R/A",
  },
  {
    id: "hillside-haven",
    name: "Hillside Haven",
    location: "Khulshi Hills, Chattogram",
    image: "/featured/hillside-haven.webp",
    area: "Chattogram",
  },
];

const faqs = [
  {
    question: "Can I begin the process while living abroad?",
    answer:
      "Yes, absolutely. The entire process from choosing a property, reviewing architectural floor plans, booking allocation, to executing digital legal documentation can be completed remotely. Our specialized NRB desk assists you across all global time zones.",
  },
  {
    question: "Can someone visit a project on my behalf?",
    answer:
      "Yes. You can nominate a family member, trusted friend, or legal representative in Bangladesh. We will host them for an exclusive guided on-site visit and provide you with high-definition video streaming, 360-degree tours, and real-time walk-throughs.",
  },
  {
    question: "How do I get a price and payment plan?",
    answer:
      "You can request an itemized quotation including base apartment price, dedicated parking, utility connections, and flexible installment schedules aligned with your foreign currency remittances. We also assist with NRB banking accounts and FC account repatriation rules.",
  },
  {
    question: "Can Inoodex help with rental or property management?",
    answer:
      "Yes. Through our comprehensive post-handover property care service, we assist overseas owners with tenant screening, rental collection, periodic maintenance inspections, and bespoke interior furnishing so your asset generates seamless returns.",
  },
  {
    question: "What legal documents are required for an NRB buyer?",
    answer:
      "Typically you will need a copy of your valid Passport, Visa/Work Permit, recent photographs, Nominee identification (NID/Passport), and TIN certificate (if available). Our legal advisory team helps guide you through every paperwork milestone smoothly.",
  },
];

export default function NRBPage() {
  // Location filter state for Section 2 (Find Your Place)
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const carouselRef = useRef<HTMLDivElement>(null);

  // Investment Section State
  const [activeOutlookTab, setActiveOutlookTab] = useState("Bashundhara R/A");
  const outlookData = locationOutlookMap[activeOutlookTab] || locationOutlookMap["Bashundhara R/A"];

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // NRB Advisor Modal State
  const [advisorModalOpen, setAdvisorModalOpen] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientCountry, setClientCountry] = useState("United States");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [preferredMethod, setPreferredMethod] = useState("WhatsApp");
  const [clientMessage, setClientMessage] = useState(
    "Hello InooDex, I am a Non-Resident Bangladeshi looking to invest in property. Please connect me with an NRB Advisor."
  );
  const [submitted, setSubmitted] = useState(false);

  // Filter properties
  const filteredProperties =
    selectedLocation === "All Locations"
      ? nrbProperties
      : nrbProperties.filter((p) => p.area === selectedLocation);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 340;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleAdvisorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-amber-100 selection:text-amber-950">
      {/* ========================================================= */}
      {/* SECTION 1: HERO BANNER & LEGACY STRIP (Image 1) */}
      {/* ========================================================= */}
      <section className="relative w-full min-h-[580px] sm:min-h-[680px] lg:min-h-[760px] flex flex-col justify-between overflow-hidden bg-zinc-950 text-white">
        {/* Background Cinema Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/slide-5.jpg"
            alt="Non-Resident Bangladeshi Home Living Space"
            fill
            priority
            className="object-cover object-center brightness-75 scale-105 transition-transform duration-1000"
            sizes="100vw"
          />
          {/* Subtle Warm Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-16 pt-36 sm:pt-44 lg:pt-48 pb-16">
          <div className="max-w-2xl">
            {/* Top Monospace Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-amber-400" />
              <span className="text-xs sm:text-sm font-mono tracking-widest text-zinc-300 uppercase">
                Non-Resident Bangladeshi
              </span>
            </div>

            {/* Authentic Bengali Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-light text-white leading-[1.12] tracking-tight mb-6 break-words">
              নিজের দেশে <br />
              <span className="font-bold text-white drop-shadow-sm">আপন ঠিকানা</span>
            </h1>

            {/* Sub-location */}
            <p className="text-xs sm:text-base font-light text-zinc-300 mb-6 sm:mb-10 tracking-wide">
              Dhaka / Chattogram
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#find-your-place"
                className="px-6 sm:px-7 py-3 rounded-full bg-zinc-950 border border-white/20 hover:bg-white hover:text-zinc-950 text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-lg cursor-pointer active:scale-95 text-center justify-center inline-flex items-center"
              >
                Explore Apartments
              </a>

              <button
                type="button"
                onClick={() => setAdvisorModalOpen(true)}
                className="px-6 sm:px-7 py-3 rounded-full bg-white/95 hover:bg-white text-zinc-950 text-xs sm:text-sm font-medium transition-all duration-300 shadow-lg cursor-pointer active:scale-95 text-center justify-center"
              >
                Talk to an NRB Advisor
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Feature & Legacy Strip (Image 1 Bottom) */}
        <div className="relative z-10 w-full bg-white text-zinc-900 border-t border-zinc-200">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-6 sm:py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
              {/* Column 1: Legacy Year */}
              <div className="flex items-center gap-4 pr-4">
                <span className="text-3xl sm:text-4xl font-light text-zinc-950 font-serif">
                  1984
                </span>
                <div className="text-xs sm:text-sm">
                  <p className="font-semibold text-zinc-900 leading-snug">
                    A legacy of building homes
                  </p>
                  <p className="text-zinc-500 text-xs mt-0.5">
                    InooDex Architecture &amp; Development Ltd.
                  </p>
                </div>
              </div>

              {/* Column 2: Always Connected */}
              <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-800">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm">
                  <p className="font-semibold text-zinc-900 leading-snug">Always Connected</p>
                  <p className="text-zinc-500 text-xs mt-0.5">
                    Dedicated support for buyers living abroad
                  </p>
                </div>
              </div>

              {/* Column 3: For Living */}
              <div className="flex items-center gap-4 md:pl-6 pt-4 md:pt-0">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-800">
                  <Home className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm">
                  <p className="font-semibold text-zinc-900 leading-snug">
                    For living. For the future.
                  </p>
                  <p className="text-zinc-500 text-xs mt-0.5">
                    Explore homes curated around your priorities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: "FIND YOUR PLACE" PROPERTY SHOWCASE (Image 2) */}
      {/* ========================================================= */}
      <section id="find-your-place" className="py-16 sm:py-24 bg-white border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Section Header */}
          <div className="mb-8">
            <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              — FIND YOUR PLACE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight">
              A home that&apos;s all yours.
            </h2>
          </div>

          {/* Location Filter Pills & Arrow Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              {[
                "All Locations",
                "Bashundhara R/A",
                "Adabor",
                "Mirpur",
                "Uttara",
                "Chattogram",
              ].map((loc) => {
                const isActive = selectedLocation === loc;
                return (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setSelectedLocation(loc)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-zinc-950 text-white shadow-sm"
                        : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
                    }`}
                  >
                    {loc}
                  </button>
                );
              })}
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                aria-label="Previous properties"
                className="w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-950 hover:text-white text-zinc-800 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                aria-label="Next properties"
                className="w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-950 hover:text-white text-zinc-800 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Properties Carousel Strip */}
          <div
            ref={carouselRef}
            className="flex items-stretch gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          >
            {filteredProperties.map((prop) => (
              <Link
                key={prop.id}
                href={`/properties/${prop.id}`}
                className="group relative flex-none w-[280px] sm:w-[340px] lg:w-[380px] rounded-lg overflow-hidden bg-zinc-900 border border-zinc-200 shadow-md hover:shadow-2xl transition-all duration-300 snap-start flex flex-col cursor-pointer"
              >
                {/* Main Image Frame with hover zoom */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-800">
                  <Image
                    src={prop.image}
                    alt={prop.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 280px, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Property Details Overlay at bottom of card */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <h3 className="text-xl sm:text-2xl font-light tracking-tight group-hover:translate-x-1 transition-transform">
                      {prop.name}
                    </h3>
                    <p className="flex items-center gap-1.5 text-xs text-zinc-300 mt-1.5 font-light">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{prop.location}</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full bg-zinc-100 h-1 rounded-full overflow-hidden mt-4">
            <div className="bg-zinc-950 h-full w-1/3 rounded-full" />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: "INVESTMENT OPPORTUNITY" (Image 3 - Clean White Theme) */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
            <div className="lg:col-span-7">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                — INVESTMENT OPPORTUNITY
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-zinc-950 tracking-tight leading-tight">
                A home today. <br />
                <span className="font-semibold text-zinc-950">Possibilities for tomorrow.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                Look beyond the apartment. Consider the neighbourhood, your ownership costs and
                the support you&apos;ll need while living abroad.
              </p>
            </div>
          </div>

          {/* Location Selector Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {Object.keys(locationOutlookMap).map((tab) => {
              const isActive = activeOutlookTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveOutlookTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-zinc-950 text-white font-semibold shadow-sm"
                      : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* White Card: Location Outlook & Growth Chart */}
          <div className="rounded-2xl bg-[#fafafa] text-zinc-900 p-6 sm:p-10 lg:p-12 shadow-md border border-zinc-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Location Outlook Copy */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                    LOCATION OUTLOOK
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-zinc-950">
                    {outlookData.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                  {outlookData.description}
                </p>

                {/* Checkpoints */}
                <div className="space-y-3 pt-2">
                  {outlookData.checkpoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setClientMessage(
                        `I would like to discuss investment options and historical growth in ${outlookData.name}.`
                      );
                      setAdvisorModalOpen(true);
                    }}
                    className="px-6 py-3 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-950 hover:border-zinc-950 text-zinc-900 hover:text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer active:scale-95 flex items-center gap-2"
                  >
                    <span>Discuss Investment Options</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Historical Price Appreciation SVG Chart */}
              <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 border border-zinc-200 shadow-sm">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-zinc-200">
                  <h4 className="text-sm sm:text-base font-semibold text-zinc-950">
                    Average apartment price — BDT/sft
                  </h4>
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-medium">
                    +64.5% Growth (5-Yr)
                  </span>
                </div>

                {/* Growth SVG Curve */}
                <div className="relative aspect-[16/9] w-full flex items-center justify-center">
                  <svg viewBox="0 0 500 240" className="w-full h-full overflow-visible">
                    {/* Horizontal Grid lines */}
                    <line x1="40" y1="30" x2="480" y2="30" stroke="#e4e4e7" strokeDasharray="3 3" />
                    <line x1="40" y1="80" x2="480" y2="80" stroke="#e4e4e7" strokeDasharray="3 3" />
                    <line x1="40" y1="130" x2="480" y2="130" stroke="#e4e4e7" strokeDasharray="3 3" />
                    <line x1="40" y1="180" x2="480" y2="180" stroke="#e4e4e7" strokeDasharray="3 3" />

                    {/* Gradient Area under curve */}
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#e11d48" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#e11d48" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Shaded Area */}
                    <path
                      d="M 50,185 Q 130,165 210,135 T 370,80 T 460,45 L 460,200 L 50,200 Z"
                      fill="url(#chartGradient)"
                    />

                    {/* Growth trajectory line */}
                    <path
                      d="M 50,185 Q 130,165 210,135 T 370,80 T 460,45"
                      fill="none"
                      stroke="#dc2626"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Data Points with tooltips */}
                    {/* Point 1: 2021 */}
                    <circle cx="50" cy="185" r="5" fill="#ffffff" stroke="#dc2626" strokeWidth="3" />
                    <text x="35" y="168" fill="#18181b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                      7,900
                    </text>
                    <text x="38" y="218" fill="#71717a" fontSize="10" fontFamily="sans-serif">
                      2021
                    </text>

                    {/* Point 2: 2022 */}
                    <circle cx="132" cy="165" r="5" fill="#ffffff" stroke="#dc2626" strokeWidth="3" />
                    <text x="117" y="148" fill="#18181b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                      8,700
                    </text>
                    <text x="120" y="218" fill="#71717a" fontSize="10" fontFamily="sans-serif">
                      2022
                    </text>

                    {/* Point 3: 2023 */}
                    <circle cx="214" cy="135" r="5" fill="#ffffff" stroke="#dc2626" strokeWidth="3" />
                    <text x="199" y="118" fill="#18181b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                      9,900
                    </text>
                    <text x="202" y="218" fill="#71717a" fontSize="10" fontFamily="sans-serif">
                      2023
                    </text>

                    {/* Point 4: 2024 */}
                    <circle cx="296" cy="105" r="5" fill="#ffffff" stroke="#dc2626" strokeWidth="3" />
                    <text x="278" y="88" fill="#18181b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                      11,000
                    </text>
                    <text x="284" y="218" fill="#71717a" fontSize="10" fontFamily="sans-serif">
                      2024
                    </text>

                    {/* Point 5: 2025 */}
                    <circle cx="378" cy="75" r="5" fill="#ffffff" stroke="#dc2626" strokeWidth="3" />
                    <text x="360" y="58" fill="#18181b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                      12,100
                    </text>
                    <text x="366" y="218" fill="#71717a" fontSize="10" fontFamily="sans-serif">
                      2025
                    </text>

                    {/* Point 6: 2026 */}
                    <circle cx="460" cy="45" r="6" fill="#dc2626" stroke="#ffffff" strokeWidth="2.5" />
                    <text x="435" y="28" fill="#dc2626" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                      13,000
                    </text>
                    <text x="448" y="218" fill="#71717a" fontSize="10" fontFamily="sans-serif">
                      2026
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Footnote (Image 3 Footnote) */}
            <div className="mt-8 pt-6 border-t border-zinc-200 text-[11px] text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p>
                Compare like-for-like apartments and include parking, utilities, registration,
                maintenance and other applicable costs. Historical prices do not guarantee future
                returns.
              </p>
              <span className="font-medium text-zinc-700 shrink-0">
                Investment support for NRB buyers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: "CLOSER THAN THE DISTANCE" (Image 4) */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          {/* Header */}
          <div className="max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              — CLOSER THAN THE DISTANCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight mb-4">
              Buying from abroad? <br />
              <span className="font-semibold text-zinc-950">We&apos;re here to help.</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-light max-w-lg mx-auto">
              From exploring your options to planning life after handover, connect with the right
              support at every step.
            </p>
          </div>

          {/* 3 Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 text-left">
            {/* Card 1: 01 / EXPLORE */}
            <div className="p-8 rounded-xl border border-zinc-200 bg-[#fdfdfd] hover:shadow-xl hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900">
                    <Video className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest text-zinc-400 font-semibold">
                    01 / EXPLORE
                  </span>
                </div>

                <h3 className="text-xl font-medium text-zinc-950 mb-3 tracking-tight">
                  Explore remotely.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  Discuss project layouts and your priorities with an advisor. Ask about virtual
                  viewing or arrange a visit for your representative.
                </p>
              </div>
            </div>

            {/* Card 2: 02 / UNDERSTAND */}
            <div className="p-8 rounded-xl border border-zinc-200 bg-[#fdfdfd] hover:shadow-xl hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest text-zinc-400 font-semibold">
                    02 / UNDERSTAND
                  </span>
                </div>

                <h3 className="text-xl font-medium text-zinc-950 mb-3 tracking-tight">
                  Plan your purchase.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  Request a complete quotation, discuss payment options and get guidance on the
                  documentation for your purchase.
                </p>
              </div>
            </div>

            {/* Card 3: 03 / LOOK AHEAD */}
            <div className="p-8 rounded-xl border border-zinc-200 bg-[#fdfdfd] hover:shadow-xl hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900">
                    <Key className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest text-zinc-400 font-semibold">
                    03 / LOOK AHEAD
                  </span>
                </div>

                <h3 className="text-xl font-medium text-zinc-950 mb-3 tracking-tight">
                  Think beyond handover.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  Explore rental, property management and interior support, so you can plan how
                  your apartment will be used while you&apos;re abroad.
                </p>
              </div>
            </div>
          </div>

          {/* Center Action Button */}
          <button
            type="button"
            onClick={() => {
              setClientMessage(
                "I would like to request a convenient video call / consultation to discuss buying property from abroad."
              );
              setAdvisorModalOpen(true);
            }}
            className="px-8 py-3.5 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-950 hover:border-zinc-950 text-zinc-900 hover:text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer active:scale-95 inline-flex items-center gap-2.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Request a Convenient Call</span>
          </button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: "A LITTLE MORE CLARITY" (FAQ Accordion, Image 5) */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading & Ask Advisor */}
            <div className="lg:col-span-5 space-y-6">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400">
                — A LITTLE MORE CLARITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight leading-tight">
                Your questions. <br />
                <span className="font-semibold text-zinc-950">A good place to start.</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                Every purchase is different. Our team can help you understand the next steps for
                yours.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setClientMessage(
                      "Hello, I have specific legal and purchase questions regarding buying an apartment as an NRB."
                    );
                    setAdvisorModalOpen(true);
                  }}
                  className="px-7 py-3.5 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-950 hover:border-zinc-950 text-zinc-900 hover:text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer active:scale-95 inline-flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask an NRB Advisor</span>
                </button>
              </div>

              {/* Direct Hotline Pill */}
              <div className="pt-6 border-t border-zinc-200">
                <p className="text-[11px] font-mono uppercase text-zinc-400">Direct Global Line</p>
                <div className="flex items-center gap-3 mt-1.5">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-mono font-medium text-zinc-800">
                    +880 1313-401405
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Accordion FAQs */}
            <div className="lg:col-span-7 divide-y divide-zinc-200 border-t border-b border-zinc-200 bg-white rounded-xl shadow-sm overflow-hidden px-6 sm:px-8">
              {faqs.map((faq, index) => {
                const isOpen = expandedFaq === index;
                return (
                  <div key={index} className="py-5 sm:py-6">
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(isOpen ? null : index)}
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
        </div>
      </section>

      {/* ========================================================= */}
      {/* NRB ADVISOR CONSULTATION MODAL */}
      {/* ========================================================= */}
      {advisorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-5 sm:p-8 text-zinc-900 border border-zinc-200">
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => {
                setAdvisorModalOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-zinc-200 hover:bg-zinc-100 flex items-center justify-center text-zinc-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-zinc-950">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong className="text-zinc-900">{clientName}</strong>. Our senior NRB
                  portfolio director will contact you via {preferredMethod} within 24 hours.
                </p>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/8801313401405?text=${encodeURIComponent(
                      `Hello InooDex, my name is ${clientName} (${clientCountry}). ${clientMessage}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    EXPAT SERVICES
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light text-zinc-950">
                    Talk to an <span className="font-semibold">NRB Advisor</span>
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Direct confidential guidance on investments, taxes, and remittance channels.
                  </p>
                </div>

                <form onSubmit={handleAdvisorSubmit} className="space-y-3.5 text-xs sm:text-sm">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-500 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Dr. Fahim Rahman"
                      className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:border-zinc-950"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-500 mb-1">
                        Country of Residence *
                      </label>
                      <input
                        type="text"
                        required
                        value={clientCountry}
                        onChange={(e) => setClientCountry(e.target.value)}
                        placeholder="e.g. United Kingdom"
                        className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:border-zinc-950"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-500 mb-1">
                        Preferred Contact
                      </label>
                      <select
                        value={preferredMethod}
                        onChange={(e) => setPreferredMethod(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:border-zinc-950"
                      >
                        <option value="WhatsApp">WhatsApp Call / Chat</option>
                        <option value="Zoom">Zoom Video Meeting</option>
                        <option value="Email">Email Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-500 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:border-zinc-950"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-500 mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="+44 7911 123456"
                        className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:border-zinc-950"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-500 mb-1">
                      Notes or Inquiries
                    </label>
                    <textarea
                      rows={3}
                      value={clientMessage}
                      onChange={(e) => setClientMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:border-zinc-950 resize-none text-zinc-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-medium transition-all shadow-md cursor-pointer active:scale-95 flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Submit Consultation Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

