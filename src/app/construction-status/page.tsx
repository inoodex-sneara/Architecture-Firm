"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  ChevronRight,
} from "lucide-react";

import { constructionProjects } from "./projects";

const projects = constructionProjects.map(({ slug, name, image }) => ({
  slug,
  name,
  image,
}));

const pageSize = 8;

export default function ConstructionStatusPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filteredProjects = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return projects;
    }

    return projects.filter((project) =>
      project.name.toLowerCase().includes(term)
    );
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visibleProjects = filteredProjects.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const paginationNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <main className="min-h-screen bg-white pt-16 text-zinc-900">
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-[1600px] px-4 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-28">
          <div className="mb-10 flex items-center justify-between gap-4 md:mb-12">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/80">
                  Building
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Technology
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[1100px] pb-8 pt-12 text-center md:pt-16">
            <h1 className="text-xl font-semibold tracking-[-0.06em] text-white sm:text-5xl md:text-6xl lg:text-[5.2rem]">
              Construction status
            </h1>
            <p className="mx-auto mt-6 max-w-[760px] text-sm leading-7 text-white/90 sm:text-lg">
              Explore the latest construction progress updates for projects across luxury,
              classic, wellness, and commercial collections.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1460px] px-4 pb-16 pt-12 sm:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visibleProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/construction-status/${project.slug}`}
              className="group overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-[360px] overflow-hidden rounded-b-[28px]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <h3 className="truncate text-lg sm:text-xl font-medium tracking-tight text-white">
                    {project.name}
                  </h3>
                  <span
                    aria-label={`Open ${project.name}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-10 text-center text-zinc-500">
            No projects match “{query}”. Try a different property name.
          </div>
        )}

        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="flex items-center gap-3">
            {(totalPages <= 3 ? paginationNumbers : paginationNumbers.slice(0, 3)).map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                onClick={() => setPage(pageNumber)}
                className={[
                  "flex h-12 w-12 items-center justify-center rounded-full border text-lg font-medium transition-all shadow-sm",
                  pageNumber === currentPage
                    ? "border-transparent bg-[#bca670] text-black font-semibold"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 hover:text-black hover:bg-zinc-50",
                ].join(" ")}
              >
                {pageNumber}
              </button>
            ))}

            {totalPages > 3 && (
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 bg-white text-lg text-zinc-500"
              >
                ...
              </button>
            )}

            {totalPages > 3 && (
              <button
                type="button"
                onClick={() => setPage(totalPages)}
                className={[
                  "flex h-12 w-12 items-center justify-center rounded-full border text-lg font-medium transition-all shadow-sm",
                  totalPages === currentPage
                    ? "border-transparent bg-[#bca670] text-black font-semibold"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 hover:text-black hover:bg-zinc-50",
                ].join(" ")}
              >
                {totalPages}
              </button>
            )}

            <button
              type="button"
              onClick={() => setPage((currentPage) => Math.min(currentPage + 1, totalPages))}
              className="ml-1 flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-base font-medium text-zinc-800 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
