"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Building,
  Home,
  Maximize2,
  Bed,
  Bath,
  ArrowRight,
  ExternalLink,
  Download,
  CheckCircle2,
  X,
  MessageSquare,
  ZoomIn,
} from "lucide-react";
import { getPropertyById, allPropertiesData, type FloorPlanItem } from "@/data/properties";

// Realistic White Architectural CAD Floor Plan Blueprint Graphic
function RealisticFloorPlanCard({
  plan,
  onClick,
}: {
  plan: FloorPlanItem;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-xl p-3 sm:p-4 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      {/* CAD Blueprint Drawing Header */}
      <div className="relative aspect-[4/3] w-full bg-[#fdfdfd] rounded-lg border border-zinc-200 overflow-hidden flex items-center justify-center p-2">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

        {/* Detailed CAD Architectural Floor Plan SVG */}
        <svg
          viewBox="0 0 240 180"
          className="w-full h-full stroke-zinc-900 fill-zinc-50"
        >
          {/* Outer Boundary Wall (Thick) */}
          <rect x="15" y="15" width="210" height="150" strokeWidth="3" fill="#ffffff" />

          {/* Master Bedroom (Top Left) */}
          <rect x="15" y="15" width="85" height="75" strokeWidth="2" fill="#f8fafc" />
          <text x="25" y="45" fill="#1e293b" fontSize="8" fontWeight="600" fontFamily="sans-serif">MASTER BED</text>
          <text x="25" y="56" fill="#64748b" fontSize="6.5" fontFamily="sans-serif">14&apos;-0&quot; x 12&apos;-6&quot;</text>
          {/* Master Bath */}
          <rect x="15" y="65" width="35" height="25" strokeWidth="1.5" fill="#f1f5f9" />
          <text x="20" y="78" fill="#475569" fontSize="5.5" fontFamily="sans-serif">M.BATH</text>
          {/* Master Balcony */}
          <rect x="15" y="15" width="22" height="40" strokeWidth="1.2" strokeDasharray="2,2" fill="#e2e8f0" />
          <text x="18" y="36" fill="#64748b" fontSize="5" fontFamily="sans-serif">BAL</text>

          {/* Living & Dining Hall (Top Right & Center) */}
          <rect x="100" y="15" width="125" height="100" strokeWidth="2" fill="#ffffff" />
          <text x="125" y="50" fill="#0f172a" fontSize="10" fontWeight="700" fontFamily="sans-serif">LIVING &amp; DINING</text>
          <text x="145" y="64" fill="#64748b" fontSize="7" fontFamily="sans-serif">24&apos;-8&quot; x 14&apos;-2&quot;</text>
          {/* Main Entrance Door Swing */}
          <path d="M210,115 A 25 25 0 0 1 185,115" fill="none" strokeWidth="1" strokeDasharray="2,2" stroke="#64748b" />
          <line x1="210" y1="115" x2="210" y2="90" strokeWidth="1.5" />
          <text x="175" y="112" fill="#94a3b8" fontSize="6" fontFamily="sans-serif">ENTRY</text>

          {/* Bedroom 2 (Bottom Left) */}
          <rect x="15" y="90" width="85" height="75" strokeWidth="2" fill="#f8fafc" />
          <text x="30" y="125" fill="#1e293b" fontSize="8" fontWeight="600" fontFamily="sans-serif">BEDROOM 2</text>
          <text x="30" y="136" fill="#64748b" fontSize="6.5" fontFamily="sans-serif">12&apos;-0&quot; x 11&apos;-4&quot;</text>
          {/* Bed 2 Balcony */}
          <rect x="15" y="130" width="35" height="35" strokeWidth="1.2" strokeDasharray="2,2" fill="#e2e8f0" />
          <text x="22" y="150" fill="#64748b" fontSize="5.5" fontFamily="sans-serif">VER</text>

          {/* Kitchen (Bottom Center) */}
          <rect x="100" y="115" width="60" height="50" strokeWidth="1.5" fill="#f8fafc" />
          <text x="115" y="142" fill="#334155" fontSize="7.5" fontWeight="600" fontFamily="sans-serif">KITCHEN</text>
          <text x="115" y="151" fill="#64748b" fontSize="6" fontFamily="sans-serif">9&apos;-0&quot; x 7&apos;-6&quot;</text>

          {/* Common Bath (Bottom Right) */}
          <rect x="160" y="115" width="65" height="50" strokeWidth="1.5" fill="#f1f5f9" />
          <text x="175" y="142" fill="#334155" fontSize="7.5" fontWeight="600" fontFamily="sans-serif">C. BATH</text>
          <text x="175" y="151" fill="#64748b" fontSize="6" fontFamily="sans-serif">7&apos;-0&quot; x 5&apos;-0&quot;</text>

          {/* North Direction Compass */}
          <g transform="translate(205, 30)">
            <circle cx="0" cy="0" r="10" fill="#ffffff" strokeWidth="1" stroke="#94a3b8" />
            <polygon points="0,-8 3,-1 0,1 -3,-1" fill="#0f172a" />
            <polygon points="0,8 3,1 0,-1 -3,1" fill="#94a3b8" />
            <text x="-2.5" y="-11" fontSize="6" fontWeight="bold" fill="#0f172a">N</text>
          </g>
        </svg>

        {/* Hover Zoom Icon */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="px-3 py-1.5 rounded-full bg-white text-zinc-950 text-xs font-mono font-medium flex items-center gap-1.5 shadow-lg">
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Enlarge Plan</span>
          </div>
        </div>
      </div>

      {/* Plan Card Label */}
      <div className="pt-3 text-center">
        <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider font-mono">
          {plan.title}
        </h4>
        <p className="text-[11px] text-zinc-500 mt-0.5 font-sans font-medium">
          {plan.size} • {plan.type}
        </p>
      </div>
    </div>
  );
}

export default function PropertyDetailPage() {
  const params = useParams();
  const propertyId = (params?.id as string) || "the-seasons";
  const property = getPropertyById(propertyId) || allPropertiesData[0];

  const galleryImages = property.gallery?.length ? property.gallery : [property.image];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeFloorPlan, setActiveFloorPlan] = useState<FloorPlanItem | null>(null);

  // Form states
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientMessage, setClientMessage] = useState(
    `I am interested in your property named "${property.name}".`
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-amber-100 selection:text-amber-950">
      {/* 1. HERO & GALLERY CAROUSEL (Clean White Theme) */}
      <section className="pt-24 sm:pt-28 pb-8 sm:pb-10 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          {/* Top Breadcrumb Navigation */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-zinc-950 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/properties" className="hover:text-zinc-950 transition-colors">
                Properties
              </Link>
              <span>/</span>
              <span className="text-zinc-900 font-semibold">{property.name}</span>
            </div>

            <Link
              href="/properties"
              className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-950 transition-colors text-xs font-mono"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Properties</span>
            </Link>
          </div>

          {/* Main Photo Cinema Frame */}
          <div className="relative w-full h-[380px] sm:h-[500px] lg:h-[580px] bg-zinc-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-zinc-200/80">
            {/* Background blurred ambiance layer for tall / portrait images */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                src={galleryImages[selectedImageIndex] || property.image}
                alt=""
                fill
                className="object-cover blur-2xl opacity-30 scale-110"
              />
            </div>

            {/* Sharp Foreground Image */}
            <Image
              src={galleryImages[selectedImageIndex] || property.image}
              alt={`${property.name} display`}
              fill
              priority
              className="object-contain object-center transition-all duration-700"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />

            {/* Subtle corner badge for property status */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 text-zinc-900 font-mono text-xs uppercase tracking-wider shadow-sm font-medium">
                {property.status}
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-950 text-white font-bold font-mono text-xs uppercase tracking-wider shadow-sm">
                {property.tag}
              </span>
            </div>
          </div>

          {/* Thumbnails Carousel Bar (Clean `<` and `>` arrow navigation) */}
          <div className="relative mt-4 flex items-center justify-between gap-3 sm:gap-4">
            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous image"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-zinc-950 hover:text-white text-zinc-800 flex items-center justify-center shrink-0 border border-zinc-300 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Thumbnail Cards Strip */}
            <div className="flex-1 flex items-center gap-3 sm:gap-4 overflow-x-auto py-1 scrollbar-none justify-center">
              {galleryImages.map((img, idx) => {
                const isActive = idx === selectedImageIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative aspect-[16/10] w-24 sm:w-36 md:w-44 rounded-lg overflow-hidden shrink-0 transition-all cursor-pointer ${
                      isActive
                        ? "border-2 border-zinc-950 ring-2 ring-zinc-300 scale-105 opacity-100 shadow-md"
                        : "border border-zinc-200 opacity-60 hover:opacity-100 hover:scale-102"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="180px"
                    />
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-zinc-950 hover:text-white text-zinc-800 flex items-center justify-center shrink-0 border border-zinc-300 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN BODY (White Theme) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT COLUMN: TITLE, STORY, FLOOR PLANS, LOCATION MAP */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-12">
              {/* Project Title and Story Paragraph */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight mb-4">
                  {property.name}
                </h1>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
                  {property.description}
                </p>
              </div>

              {/* Floor Plan Section (White Architectural Blueprint CAD Cards) */}
              <div className="pt-8 border-t border-zinc-200">
                <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 tracking-tight mb-6">
                  Floor <span className="font-semibold text-zinc-950">plan</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {property.floorPlans?.map((plan) => (
                    <RealisticFloorPlanCard
                      key={plan.id}
                      plan={plan}
                      onClick={() => setActiveFloorPlan(plan)}
                    />
                  ))}
                </div>
              </div>

              {/* Location Section with Map and Pin Popover Card */}
              <div className="pt-8 border-t border-zinc-200">
                <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 tracking-tight mb-6">
                  Location
                </h2>

                <div className="relative rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 aspect-[16/9] w-full shadow-md">
                  {/* Embedded Google Map */}
                  <iframe
                    title={`${property.name} Location`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      `${property.name}, ${property.atAGlance.address}`
                    )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    className="w-full h-full border-0 filter contrast-[1.02]"
                    loading="lazy"
                    allowFullScreen
                  />

                  {/* Custom Map Pin Overlay Card */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex flex-col items-center">
                    <div className="bg-white/95 backdrop-blur-md text-zinc-900 border border-zinc-200 p-2.5 rounded-xl shadow-xl flex items-center gap-3 mb-2 max-w-xs pointer-events-auto">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-zinc-100">
                        <Image src={property.image} alt="marker view" fill className="object-cover" />
                      </div>
                      <div className="text-left min-w-0 pr-1">
                        <span className="block text-[9px] font-mono text-zinc-400 uppercase">Address:</span>
                        <p className="text-[11px] font-semibold text-zinc-900 leading-tight truncate">
                          {property.atAGlance.address}
                        </p>
                      </div>
                    </div>

                    {/* Animated Pulsing Pin */}
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-rose-500 opacity-75" />
                      <div className="relative w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                        <MapPin className="w-4 h-4 fill-white" />
                      </div>
                    </div>
                  </div>

                  {/* Open in Google Maps Link */}
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${property.name}, ${property.atAGlance.address}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors shadow-lg cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: SCHEDULE A VISIT, AT A GLANCE TABLE, INQUIRY FORM */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Schedule a Visit Button (Clean white pill button) */}
              <button
                type="button"
                onClick={() => {
                  const elem = document.getElementById("inquiry-box");
                  elem?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-3.5 px-6 rounded-full border border-zinc-300 bg-white hover:bg-zinc-950 hover:text-white hover:border-zinc-950 text-zinc-900 text-xs sm:text-sm font-sans font-medium transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm cursor-pointer active:scale-95"
              >
                <span>Schedule a visit</span>
                <Calendar className="w-4 h-4" />
              </button>

              {/* At a Glance Table Card (Clean White Design) */}
              <div className="rounded-2xl border border-zinc-200 bg-[#fafafa] p-6 shadow-sm space-y-5">
                <div className="pb-3 border-b border-zinc-200">
                  <h3 className="text-xl font-medium text-zinc-950 tracking-tight">
                    At a Glance
                  </h3>
                </div>

                {/* Structured Table with inner dividers */}
                <div className="border border-zinc-200 rounded-xl overflow-hidden divide-y divide-zinc-200 text-xs bg-white">
                  {/* Row: Address */}
                  <div className="flex divide-x divide-zinc-200">
                    <div className="w-[45%] p-3 text-zinc-500 flex items-center gap-2 font-medium bg-zinc-50/50">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>Address</span>
                    </div>
                    <div className="w-[55%] p-3 text-zinc-900 font-medium leading-snug">
                      {property.atAGlance.address}
                    </div>
                  </div>

                  {/* Row: Land Area */}
                  <div className="flex divide-x divide-zinc-200">
                    <div className="w-[45%] p-3 text-zinc-500 flex items-center gap-2 font-medium bg-zinc-50/50">
                      <Maximize2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>Land Area</span>
                    </div>
                    <div className="w-[55%] p-3 text-zinc-900 font-medium">
                      {property.atAGlance.landArea}
                    </div>
                  </div>

                  {/* Row: No. of Floors */}
                  <div className="flex divide-x divide-zinc-200">
                    <div className="w-[45%] p-3 text-zinc-500 flex items-center gap-2 font-medium bg-zinc-50/50">
                      <Building className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>No. of Floors</span>
                    </div>
                    <div className="w-[55%] p-3 text-zinc-900 font-medium">
                      {property.atAGlance.noOfFloors}
                    </div>
                  </div>

                  {/* Row: Apartment/Floor */}
                  <div className="flex divide-x divide-zinc-200">
                    <div className="w-[45%] p-3 text-zinc-500 flex items-center gap-2 font-medium bg-zinc-50/50">
                      <Home className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>Apartment/Floor</span>
                    </div>
                    <div className="w-[55%] p-3 text-zinc-900 font-medium">
                      {property.atAGlance.apartmentsPerFloor}
                    </div>
                  </div>

                  {/* Row: Apartment Size */}
                  <div className="flex divide-x divide-zinc-200">
                    <div className="w-[45%] p-3 text-zinc-500 flex items-center gap-2 font-medium bg-zinc-50/50">
                      <Maximize2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>Apartment Size (sft)</span>
                    </div>
                    <div className="w-[55%] p-3 text-zinc-900 font-medium">
                      {property.atAGlance.apartmentSize}
                    </div>
                  </div>

                  {/* Row: Bedroom */}
                  <div className="flex divide-x divide-zinc-200">
                    <div className="w-[45%] p-3 text-zinc-500 flex items-center gap-2 font-medium bg-zinc-50/50">
                      <Bed className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>Bedroom</span>
                    </div>
                    <div className="w-[55%] p-3 text-zinc-900 font-medium">
                      {property.atAGlance.bedrooms}
                    </div>
                  </div>

                  {/* Row: Bathroom */}
                  <div className="flex divide-x divide-zinc-200">
                    <div className="w-[45%] p-3 text-zinc-500 flex items-center gap-2 font-medium bg-zinc-50/50">
                      <Bath className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>Bathroom</span>
                    </div>
                    <div className="w-[55%] p-3 text-zinc-900 font-medium">
                      {property.atAGlance.bathrooms}
                    </div>
                  </div>

                  {/* Row: Launch Date */}
                  <div className="flex divide-x divide-zinc-200">
                    <div className="w-[45%] p-3 text-zinc-500 flex items-center gap-2 font-medium bg-zinc-50/50">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>Launch Date</span>
                    </div>
                    <div className="w-[55%] p-3 text-zinc-900 font-medium">
                      {property.atAGlance.launchDate}
                    </div>
                  </div>

                  {/* Row: Expected Completion date */}
                  <div className="flex divide-x divide-zinc-200">
                    <div className="w-[45%] p-3 text-zinc-500 flex items-center gap-2 font-medium bg-zinc-50/50">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>Expected Completion date</span>
                    </div>
                    <div className="w-[55%] p-3 text-zinc-900 font-medium">
                      {property.atAGlance.expectedCompletionDate}
                    </div>
                  </div>
                </div>

                {/* Two Action Buttons: Construction Status + Brochure */}
                <div className="pt-2 grid grid-cols-2 gap-3">
                  <Link
                    href={`/construction-status/${property.id}`}
                    className="py-2.5 px-4 rounded-lg bg-zinc-950 text-white hover:bg-zinc-800 text-xs font-sans font-medium transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                  >
                    <span>Construction Status</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`/brochures/${property.id}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-900 text-xs font-sans font-medium transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                  >
                    <span>Brochure</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Inquiry Form: "I am interested in this property" (Clean White Design) */}
              <div
                id="inquiry-box"
                className="rounded-2xl border border-zinc-200 bg-[#fafafa] p-6 shadow-sm space-y-4"
              >
                <div className="pb-3 border-b border-zinc-200">
                  <h3 className="text-xl font-medium text-zinc-950 tracking-tight">
                    I am interested in this property
                  </h3>
                </div>

                {formSubmitted ? (
                  <div className="py-6 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-base font-semibold text-zinc-950">Inquiry Received</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed max-w-xs mx-auto">
                      Thank you, <strong className="text-zinc-900">{clientName}</strong>. Our portfolio manager will contact you shortly regarding{" "}
                      <strong className="text-zinc-900 font-semibold">{property.name}</strong>.
                    </p>

                    <a
                      href={`https://wa.me/8801700000000?text=${encodeURIComponent(
                        `Hello inooDex, I am interested in ${property.name}. My name is ${clientName}. Please share details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-medium transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Name"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-zinc-950 transition-all placeholder:text-zinc-400"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-zinc-950 transition-all placeholder:text-zinc-400"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-zinc-950 transition-all placeholder:text-zinc-400"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        value={clientMessage}
                        onChange={(e) => setClientMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-zinc-950 transition-all resize-none text-zinc-700"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 text-xs sm:text-sm font-sans font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-95 mt-2"
                    >
                      <span>Submit</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox / Modal for Enlarged Floor Plan */}
      {activeFloorPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white rounded-2xl p-6 shadow-2xl text-zinc-900 border border-zinc-200">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-mono uppercase tracking-wider text-zinc-900">
                  {activeFloorPlan.title}
                </h3>
                <p className="text-xs text-zinc-500 font-sans mt-0.5">
                  {property.name} • {activeFloorPlan.size} • {activeFloorPlan.type}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveFloorPlan(null)}
                className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Enlarged CAD Plan Drawing */}
            <div className="aspect-[16/11] w-full bg-[#fcfcfc] rounded-xl border border-zinc-300 p-4 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 240 180" className="w-full h-full stroke-zinc-900 fill-zinc-50">
                <rect x="15" y="15" width="210" height="150" strokeWidth="3" fill="#ffffff" />
                <rect x="15" y="15" width="85" height="75" strokeWidth="2" fill="#f8fafc" />
                <text x="25" y="45" fill="#1e293b" fontSize="8" fontWeight="600" fontFamily="sans-serif">MASTER BED</text>
                <text x="25" y="56" fill="#64748b" fontSize="6.5" fontFamily="sans-serif">14&apos;-0&quot; x 12&apos;-6&quot;</text>
                <rect x="15" y="65" width="35" height="25" strokeWidth="1.5" fill="#f1f5f9" />
                <text x="20" y="78" fill="#475569" fontSize="5.5" fontFamily="sans-serif">M.BATH</text>
                <rect x="15" y="15" width="22" height="40" strokeWidth="1.2" strokeDasharray="2,2" fill="#e2e8f0" />
                <text x="18" y="36" fill="#64748b" fontSize="5" fontFamily="sans-serif">BAL</text>

                <rect x="100" y="15" width="125" height="100" strokeWidth="2" fill="#ffffff" />
                <text x="125" y="50" fill="#0f172a" fontSize="10" fontWeight="700" fontFamily="sans-serif">LIVING &amp; DINING</text>
                <text x="145" y="64" fill="#64748b" fontSize="7" fontFamily="sans-serif">24&apos;-8&quot; x 14&apos;-2&quot;</text>
                <path d="M210,115 A 25 25 0 0 1 185,115" fill="none" strokeWidth="1" strokeDasharray="2,2" stroke="#64748b" />
                <line x1="210" y1="115" x2="210" y2="90" strokeWidth="1.5" />
                <text x="175" y="112" fill="#94a3b8" fontSize="6" fontFamily="sans-serif">ENTRY</text>

                <rect x="15" y="90" width="85" height="75" strokeWidth="2" fill="#f8fafc" />
                <text x="30" y="125" fill="#1e293b" fontSize="8" fontWeight="600" fontFamily="sans-serif">BEDROOM 2</text>
                <text x="30" y="136" fill="#64748b" fontSize="6.5" fontFamily="sans-serif">12&apos;-0&quot; x 11&apos;-4&quot;</text>
                <rect x="15" y="130" width="35" height="35" strokeWidth="1.2" strokeDasharray="2,2" fill="#e2e8f0" />
                <text x="22" y="150" fill="#64748b" fontSize="5.5" fontFamily="sans-serif">VER</text>

                <rect x="100" y="115" width="60" height="50" strokeWidth="1.5" fill="#f8fafc" />
                <text x="115" y="142" fill="#334155" fontSize="7.5" fontWeight="600" fontFamily="sans-serif">KITCHEN</text>
                <text x="115" y="151" fill="#64748b" fontSize="6" fontFamily="sans-serif">9&apos;-0&quot; x 7&apos;-6&quot;</text>

                <rect x="160" y="115" width="65" height="50" strokeWidth="1.5" fill="#f1f5f9" />
                <text x="175" y="142" fill="#334155" fontSize="7.5" fontWeight="600" fontFamily="sans-serif">C. BATH</text>
                <text x="175" y="151" fill="#64748b" fontSize="6" fontFamily="sans-serif">7&apos;-0&quot; x 5&apos;-0&quot;</text>

                <g transform="translate(205, 30)">
                  <circle cx="0" cy="0" r="10" fill="#ffffff" strokeWidth="1" stroke="#94a3b8" />
                  <polygon points="0,-8 3,-1 0,1 -3,-1" fill="#0f172a" />
                  <polygon points="0,8 3,1 0,-1 -3,1" fill="#94a3b8" />
                  <text x="-2.5" y="-11" fontSize="6" fontWeight="bold" fill="#0f172a">N</text>
                </g>
              </svg>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono">
                Official Structural Layout • Subject to architectural verification
              </span>
              <button
                type="button"
                onClick={() => setActiveFloorPlan(null)}
                className="px-5 py-2 rounded-lg bg-zinc-950 text-white text-xs font-mono font-medium hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
