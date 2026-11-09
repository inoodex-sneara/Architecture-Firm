"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Tag,
  ArrowRight,
  Search,
  X,
  SlidersHorizontal,
  RotateCcw,
  MapPin,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
  Check,
} from "lucide-react";
import { allPropertiesData } from "@/data/properties";

const ITEMS_PER_PAGE = 10;

const AREA_OPTIONS = [
  { id: "All", label: "All Locations" },
  { id: "Gulshan & Baridhara", label: "Gulshan & Baridhara" },
  { id: "Bashundhara R/A", label: "Bashundhara R/A" },
  { id: "Uttara & Mirpur", label: "Uttara & Mirpur" },
  { id: "Chattogram & Other", label: "Chattogram & Other" },
] as const;

const STATUS_OPTIONS = [
  "All",
  "Under Construction",
  "Nearly Ready",
  "Newly Launched",
  "Ready",
] as const;

export default function PropertiesPage() {
  const [selectedArea, setSelectedArea] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Accordion open/close state for each filter section
  const [openSections, setOpenSections] = useState({
    search: true,
    location: true,
    status: true,
  });

  // Overall sidebar collapse state (allows full-width grid view)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedArea, selectedStatus, searchQuery]);

  // Area counts
  const areaCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: allPropertiesData.length,
      "Gulshan & Baridhara": 0,
      "Bashundhara R/A": 0,
      "Uttara & Mirpur": 0,
      "Chattogram & Other": 0,
    };

    allPropertiesData.forEach((item) => {
      if (item.area === "Gulshan & Baridhara") counts["Gulshan & Baridhara"]++;
      else if (item.area === "Bashundhara R/A") counts["Bashundhara R/A"]++;
      else if (item.area === "Uttara & Mirpur") counts["Uttara & Mirpur"]++;
      else counts["Chattogram & Other"]++;
    });

    return counts;
  }, []);

  // Status counts
  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: allPropertiesData.length,
      "Under Construction": 0,
      "Nearly Ready": 0,
      "Newly Launched": 0,
      Ready: 0,
    };

    allPropertiesData.forEach((item) => {
      if (counts[item.status] !== undefined) {
        counts[item.status]++;
      }
    });

    return counts;
  }, []);

  // Filtered dataset
  const filteredProperties = useMemo(() => {
    return allPropertiesData.filter((item) => {
      // Area match
      let areaMatch = true;
      if (selectedArea !== "All") {
        areaMatch = item.area === selectedArea;
      }

      // Status match
      const statusMatch = selectedStatus === "All" || item.status === selectedStatus;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const searchMatch =
        query === "" ||
        item.name.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.tag.toLowerCase().includes(query);

      return areaMatch && statusMatch && searchMatch;
    });
  }, [selectedArea, selectedStatus, searchQuery]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE) || 1;
  const validPage = Math.min(Math.max(currentPage, 1), totalPages);

  const paginatedProperties = useMemo(() => {
    const startIndex = (validPage - 1) * ITEMS_PER_PAGE;
    return filteredProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProperties, validPage]);

  const startIndex = filteredProperties.length === 0 ? 0 : (validPage - 1) * ITEMS_PER_PAGE + 1;
  const endIndex = Math.min(validPage * ITEMS_PER_PAGE, filteredProperties.length);

  const activeFiltersCount =
    (selectedArea !== "All" ? 1 : 0) +
    (selectedStatus !== "All" ? 1 : 0) +
    (searchQuery.trim() !== "" ? 1 : 0);

  const handleResetFilters = () => {
    setSelectedArea("All");
    setSelectedStatus("All");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-24 sm:pt-28 pb-24">
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
          <Link href="/" className="hover:text-zinc-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-zinc-900 font-semibold">Properties</span>
        </div>

        {/* Page Top Heading */}
        <div className="mb-8 sm:mb-10 pb-6 border-b border-zinc-200/80 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight">
              Featured <span className="font-semibold text-zinc-950">Properties</span>
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-500 font-normal">
              Explore our prestigious residential portfolio, luxury penthouses, and architectural landmarks across Dhaka and Chattogram.
            </p>
          </div>

          {/* Quick Toggle for Collapsing the Whole Filter Sidebar */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-xs font-mono text-zinc-700 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              {isSidebarCollapsed ? (
                <>
                  <PanelLeftOpen className="w-3.5 h-3.5 text-zinc-900" />
                  <span>Show Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
                </>
              ) : (
                <>
                  <PanelLeftClose className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Hide Sidebar</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 transition-all duration-300">
          {/* LEFT SIDEBAR: FILTERS */}
          <aside
            className={`transition-all duration-300 shrink-0 ${
              isSidebarCollapsed
                ? "hidden"
                : "w-full lg:w-72 xl:w-80 lg:sticky lg:top-24"
            }`}
          >
            <div className="rounded-2xl border border-zinc-200/90 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden divide-y divide-zinc-100">
              {/* Filter Top Header */}
              <div className="p-5 sm:p-6 bg-gradient-to-b from-zinc-50/80 to-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-zinc-100 text-zinc-950 border border-zinc-200 flex items-center justify-center shadow-sm">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 block leading-tight">
                      Filters
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">
                      {activeFiltersCount > 0 ? `${activeFiltersCount} active` : "All developments"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {activeFiltersCount > 0 && (
                    <button
                      type="button"
                      onClick={handleResetFilters}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 transition-colors cursor-pointer"
                      title="Clear all filters"
                    >
                      <RotateCcw className="w-2.5 h-2.5" />
                      <span>Reset</span>
                    </button>
                  )}

                  {/* Collapse Sidebar Button on mobile / tablet */}
                  <button
                    type="button"
                    onClick={() => setIsSidebarCollapsed(true)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors lg:hidden"
                    title="Close filters"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 1. COLLAPSIBLE SEARCH SECTION */}
              <div className="p-4 sm:p-5">
                <button
                  type="button"
                  onClick={() => toggleSection("search")}
                  className="w-full flex items-center justify-between text-left text-xs font-mono font-semibold uppercase tracking-wider text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                    <span>Search</span>
                  </div>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-300 ${
                      openSections.search ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openSections.search && (
                  <div className="mt-3 relative transition-all duration-300">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Property name or keyword..."
                      className="w-full pl-9 pr-8 py-2 text-xs rounded-lg border border-zinc-200 bg-zinc-50/70 focus:bg-white focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all placeholder:text-zinc-400 text-zinc-800"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-800"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* 2. COLLAPSIBLE LOCATION / AREA FILTER */}
              <div className="p-4 sm:p-5">
                <button
                  type="button"
                  onClick={() => toggleSection("location")}
                  className="w-full flex items-center justify-between text-left text-xs font-mono font-semibold uppercase tracking-wider text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                    <span>Location</span>
                    {selectedArea !== "All" && (
                      <span className="w-2 h-2 rounded-full bg-amber-500 ring-2 ring-amber-200 shrink-0" />
                    )}
                  </div>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-300 ${
                      openSections.location ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openSections.location && (
                  <div className="mt-3 space-y-1.5 transition-all duration-300">
                    {AREA_OPTIONS.map((area) => {
                      const isActive = selectedArea === area.id;
                      const count = areaCounts[area.id] ?? 0;
                      return (
                        <button
                          key={area.id}
                          type="button"
                          onClick={() => setSelectedArea(area.id)}
                          className={`w-full group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all text-left cursor-pointer ${
                            isActive
                              ? "bg-white text-zinc-950 border-2 border-zinc-950 shadow-sm font-bold"
                              : "bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 border border-zinc-200/80 font-medium"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            {/* Radio ring */}
                            <div
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                                isActive
                                  ? "border-zinc-950 bg-zinc-950"
                                  : "border-zinc-300 group-hover:border-zinc-400 bg-transparent"
                              }`}
                            >
                              {isActive && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="truncate">{area.label}</span>
                          </div>

                          <span
                            className={`ml-2 px-2 py-0.5 rounded-md text-[10px] font-mono shrink-0 transition-colors ${
                              isActive
                                ? "bg-zinc-100 text-zinc-950 font-bold border border-zinc-300"
                                : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200 group-hover:text-zinc-800"
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 3. COLLAPSIBLE CONSTRUCTION STATUS FILTER */}
              <div className="p-4 sm:p-5">
                <button
                  type="button"
                  onClick={() => toggleSection("status")}
                  className="w-full flex items-center justify-between text-left text-xs font-mono font-semibold uppercase tracking-wider text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                    <span>Status</span>
                    {selectedStatus !== "All" && (
                      <span className="w-2 h-2 rounded-full bg-amber-500 ring-2 ring-amber-200 shrink-0" />
                    )}
                  </div>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-300 ${
                      openSections.status ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openSections.status && (
                  <div className="mt-3 space-y-1.5 transition-all duration-300">
                    {STATUS_OPTIONS.map((status) => {
                      const isActive = selectedStatus === status;
                      const count = statusCounts[status] ?? 0;
                      return (
                        <button
                          key={status}
                          type="button"
                          onClick={() => setSelectedStatus(status)}
                          className={`w-full group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all text-left cursor-pointer ${
                            isActive
                              ? "bg-white text-zinc-950 border-2 border-zinc-950 shadow-sm font-bold"
                              : "bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 border border-zinc-200/80 font-medium"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            {/* Check circle */}
                            <div
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                                isActive
                                  ? "border-zinc-950 bg-zinc-950 text-white"
                                  : "border-zinc-300 group-hover:border-zinc-400 bg-transparent"
                              }`}
                            >
                              {isActive && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </div>
                            <span className="truncate">
                              {status === "All" ? "All Statuses" : status}
                            </span>
                          </div>

                          <span
                            className={`ml-2 px-2 py-0.5 rounded-md text-[10px] font-mono shrink-0 transition-colors ${
                              isActive
                                ? "bg-zinc-100 text-zinc-950 font-bold border border-zinc-300"
                                : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200 group-hover:text-zinc-800"
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Sidebar Footer Info */}
              <div className="p-4 bg-zinc-50/70 text-center">
                <p className="text-[11px] font-mono text-zinc-500">
                  Total <strong className="text-zinc-950">{filteredProperties.length}</strong> properties
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE: PROPERTIES GRID */}
          <main className="flex-1 min-w-0 w-full">
            {/* If sidebar is collapsed on desktop, show a top trigger bar */}
            {isSidebarCollapsed && (
              <div className="mb-6 flex items-center justify-between p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
                <button
                  type="button"
                  onClick={() => setIsSidebarCollapsed(false)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-950 text-white text-xs font-mono font-medium hover:bg-zinc-800 transition-colors shadow-sm cursor-pointer"
                >
                  <PanelLeftOpen className="w-3.5 h-3.5" />
                  <span>Open Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
                </button>

                
              </div>
            )}

            {/* Active Filter Chips (if any filter is applied) */}
            {activeFiltersCount > 0 && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Active:
                </span>

                {selectedArea !== "All" && (
                  <button
                    type="button"
                    onClick={() => setSelectedArea("All")}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-mono transition-colors group cursor-pointer"
                  >
                    <span>{selectedArea}</span>
                    <X className="w-3 h-3 text-zinc-400 group-hover:text-zinc-800" />
                  </button>
                )}

                {selectedStatus !== "All" && (
                  <button
                    type="button"
                    onClick={() => setSelectedStatus("All")}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-mono transition-colors group cursor-pointer"
                  >
                    <span>{selectedStatus}</span>
                    <X className="w-3 h-3 text-zinc-400 group-hover:text-zinc-800" />
                  </button>
                )}

                {searchQuery.trim() !== "" && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-mono transition-colors group cursor-pointer"
                  >
                    <span>&ldquo;{searchQuery}&rdquo;</span>
                    <X className="w-3 h-3 text-zinc-400 group-hover:text-zinc-800" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs font-mono text-amber-700 hover:underline font-semibold ml-1 cursor-pointer"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Empty State */}
            {filteredProperties.length === 0 ? (
              <div className="py-24 text-center rounded-lg bg-zinc-50 border border-zinc-200 p-8">
                <Tag className="w-10 h-10 mx-auto text-zinc-400 mb-3" />
                <h3 className="text-base sm:text-lg font-medium text-zinc-800">
                  No matching properties found
                </h3>
                <p className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto">
                  Try clearing the search query or selecting a different location.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-4 px-5 py-2.5 rounded-lg bg-zinc-950 text-white text-xs font-mono font-medium hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <>
                {/* Property Grid: 10 per page */}
                <div
                  className={`grid gap-6 sm:gap-7 transition-all duration-300 ${
                    isSidebarCollapsed
                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                      : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3"
                  }`}
                >
                  {paginatedProperties.map((item) => (
                    <Link
                      key={item.id}
                      href={`/properties/${item.id}`}
                      className="group rounded-lg overflow-hidden bg-[#1c1c1c] text-white flex flex-col shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 border border-zinc-200/50 cursor-pointer block"
                    >
                      {/* Visual Aspect Ratio */}
                      <div className="relative aspect-[4/4.5] sm:aspect-[16/17] w-full overflow-hidden bg-zinc-900">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        {/* Gradient Depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

                        {/* Property Tag Pill Badge (Top Left) */}
                        <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-white font-semibold shadow-lg">
                          <Tag className="w-3 h-3 text-amber-400" />
                          <span>{item.tag}</span>
                        </div>

                        {/* Unhovered State: White circular arrow button on bottom right */}
                        <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 z-10 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 pointer-events-none">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-zinc-900 shadow-xl flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                          </div>
                        </div>

                        {/* Hovered State: Floating Specs Bar */}
                        {item.specs && (
                          <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 rounded-lg bg-black/85 backdrop-blur-md p-3 sm:p-3.5 border border-white/15 flex flex-col gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 shadow-2xl">
                            {/* Emblem Badge on Top Left */}
                            <div className="inline-flex items-center self-start px-2.5 py-0.5 rounded bg-zinc-800/90 border border-white/10 text-[9px] uppercase font-mono tracking-wider text-zinc-200 font-medium">
                              <span>{item.name}</span>
                            </div>

                            {/* Specs Columns with Vertical Dividers and Right Arrow Button */}
                            <div className="flex items-center justify-between gap-1 pt-1.5 border-t border-white/15">
                              {/* SIZE */}
                              <div className="flex-1 min-w-0 pr-1 text-left">
                                <span className="block text-[8px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">
                                  SIZE
                                </span>
                                <span className="block text-[10.5px] sm:text-[11.5px] font-bold text-white whitespace-nowrap truncate">
                                  {item.specs.size}
                                </span>
                              </div>

                              <div className="w-px h-6 bg-white/20 shrink-0" />

                              {/* BED */}
                              <div className="px-1.5 sm:px-2 text-center">
                                <span className="block text-[8px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">
                                  BED
                                </span>
                                <span className="block text-[10.5px] sm:text-[11.5px] font-bold text-white">
                                  {item.specs.bed}
                                </span>
                              </div>

                              <div className="w-px h-6 bg-white/20 shrink-0" />

                              {/* BATH */}
                              <div className="px-1.5 sm:px-2 text-center">
                                <span className="block text-[8px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">
                                  BATH
                                </span>
                                <span className="block text-[10.5px] sm:text-[11.5px] font-bold text-white">
                                  {item.specs.bath}
                                </span>
                              </div>

                              <div className="w-px h-6 bg-white/20 shrink-0" />

                              {/* LAND */}
                              <div className="px-1.5 sm:px-2 text-center">
                                <span className="block text-[8px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">
                                  LAND
                                </span>
                                <span className="block text-[10.5px] sm:text-[11.5px] font-bold text-white whitespace-nowrap">
                                  {item.specs.land}
                                </span>
                              </div>

                              {/* Circular Dark Arrow Button on Far Right */}
                              <div className="pl-1 shrink-0">
                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black border border-white/20 flex items-center justify-center text-white hover:border-white transition-all shadow-md">
                                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom Info Card */}
                      <div className="flex flex-col justify-center bg-[#1c1c1c] p-4 sm:p-5">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-base sm:text-lg font-bold tracking-tight text-white transition-colors group-hover:text-amber-300">
                            {item.name}
                          </h3>
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 shrink-0">
                            {item.status}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 font-light">
                          {item.location}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* PAGINATION BAR (Per page 10 items) */}
                {totalPages > 1 && (
                  <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    

                    <div className="flex items-center gap-2">
                      {/* Prev Button */}
                      <button
                        type="button"
                        disabled={validPage <= 1}
                        onClick={() => handlePageChange(validPage - 1)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-zinc-200 bg-white text-xs font-mono font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm active:scale-95"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Previous</span>
                      </button>

                      {/* Numbered Page Buttons */}
                      <div className="flex items-center gap-1.5">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                          const isActive = pageNum === validPage;
                          return (
                            <button
                              key={pageNum}
                              type="button"
                              onClick={() => handlePageChange(pageNum)}
                              className={`w-9 h-9 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center justify-center ${
                                isActive
                                  ? "bg-white text-zinc-950 border-2 border-zinc-950 shadow-sm font-bold"
                                  : "bg-white text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 border border-zinc-200"
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                      </div>

                      {/* Next Button */}
                      <button
                        type="button"
                        disabled={validPage >= totalPages}
                        onClick={() => handlePageChange(validPage + 1)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-zinc-200 bg-white text-xs font-mono font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm active:scale-95"
                      >
                        <span className="hidden sm:inline">Next</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
