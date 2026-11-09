import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import StatementOfArrival from "@/components/StatementOfArrival";

export default function BrandFilmPage() {
  return (
    <main className="relative z-10 flex-1 bg-[#090a0d] text-white">
      <StatementOfArrival />

      <section className="border-t border-white/10 bg-[#0b0c10] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-amber-400">
              The Inoodex story
            </p>
            <h1 className="mt-3 text-3xl font-light tracking-tight sm:text-4xl">
              A film about the feeling of arriving.
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              Architecture is more than what we build. It is the light, calm, and
              sense of belonging we create for the people who live in it. Watch
 our brand film and discover the ideas behind every Inoodex space.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <a
                href="#statement"
                className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-amber-300"
              >
                Watch the film
                <ArrowDown className="h-4 w-4" />
              </a>
              <Link
                href="/#properties"
                className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 transition-colors hover:text-amber-300"
              >
                Explore our work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}
