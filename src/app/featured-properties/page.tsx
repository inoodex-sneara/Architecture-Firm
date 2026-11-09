"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FeaturedProperties from "@/components/FeaturedProperties";

export default function FeaturedPropertiesPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-20 sm:pt-24">
      {/* Architectural Breadcrumb Header */}
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 pt-6 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="text-zinc-900 font-medium">Featured Properties</span>
        </div>
      </div>

      <FeaturedProperties />
    </div>
  );
}
