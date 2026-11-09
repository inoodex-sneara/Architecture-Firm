"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import OurPerfections from "@/components/OurPerfections";
import SpecialOffer from "@/components/SpecialOffer";

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 sm:pt-28">
      {/* Architectural Breadcrumb Header */}
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 pt-6 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-zinc-300">Properties</span>
        </div>
      </div>

      <OurPerfections />
      <SpecialOffer />
    </div>
  );
}

