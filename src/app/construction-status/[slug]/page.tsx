import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import { projectDetails } from "../projects";

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails[slug] ?? projectDetails.valencia;

  return (
    <main className="min-h-screen bg-white px-4 py-8 text-zinc-900 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1380px]">
        {/* Header */}
        <header className="mb-10 flex items-center justify-between gap-6 border-b border-zinc-200/80 pb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-zinc-100 text-lg font-bold text-zinc-900 shadow-sm">
              bt
            </div>
            <div className="leading-none text-[10px] uppercase tracking-[0.24em] text-zinc-500">
              <div className="font-semibold text-zinc-800">building</div>
              <div>technology</div>
            </div>
          </div>

          <Link
            href="/construction-status"
            className="text-sm font-medium text-zinc-600 transition hover:text-black"
          >
            Properties
          </Link>
        </header>

        {/* Project Info & Image Section */}
        <section className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1 pt-4 lg:pt-8">
            <h1 className="text-3xl font-light tracking-[-0.03em] text-zinc-900 sm:text-4xl lg:text-5xl leading-[1.1]">
              {project.name}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-base text-zinc-600">
              <MapPin className="h-4 w-4 text-zinc-400" />
              <span>{project.location}</span>
            </div>

            <div className="mt-10 grid max-w-[620px] gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-[#f8f9fa] p-5 shadow-sm">
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Expected Completion Date
                </div>
                <div className="mt-3 text-2xl font-light text-zinc-900">
                  {project.expectedCompletionDate}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-[#f8f9fa] p-5 shadow-sm">
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Status Updated
                </div>
                <div className="mt-3 text-2xl font-light text-zinc-900">
                  {project.statusUpdated}
                </div>
              </div>
            </div>

            <Link
              href="/construction-status"
              className="mt-8 inline-flex items-center gap-2 text-lg font-medium text-[#9a7e3a] transition hover:text-[#7d6428]"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to all projects
            </Link>
          </div>

          <div className="w-full max-w-[420px] overflow-hidden rounded-[30px] border border-zinc-200/90 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <img
              src={project.image}
              alt={project.name}
              className="h-[360px] w-full rounded-[24px] object-cover object-center"
            />
          </div>
        </section>

        {/* Construction progress details */}
        <section className="mt-16 rounded-[28px] border border-zinc-200 bg-[#fafafa] p-6 shadow-[0_12px_45px_rgba(0,0,0,0.04)] sm:p-8 lg:p-10">
          <div className="mb-6">
            <h2 className="text-2xl font-normal tracking-tight text-zinc-900 sm:text-[28px]">
              Construction progress details
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              The progress table comes directly from the WordPress post content.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[760px] overflow-hidden rounded-xl border border-zinc-200 shadow-sm">
              {/* Table Header */}
              <div className="grid grid-cols-[84px_340px_1fr] border-b border-[#302b21] bg-[#3d382b] text-[15px] font-semibold text-white">
                <div className="border-r border-[#4e4839] px-5 py-3.5">
                  SL. No
                </div>
                <div className="border-r border-[#4e4839] px-5 py-3.5">
                  Name of the work
                </div>
                <div className="px-5 py-3.5">
                  Progress details
                </div>
              </div>

              {/* Table Rows */}
              {project.progressRows.map((row, index) => {
                const progressText =
                  row.progress || row.details || row.percentage || "";
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={`${row.name}-${index}`}
                    className={`grid grid-cols-[84px_340px_1fr] border-b border-zinc-200 last:border-b-0 transition-colors duration-150 hover:bg-[#fbf7ed] ${
                      isEven ? "bg-white" : "bg-[#f7f8f9]"
                    }`}
                  >
                    <div className="border-r border-zinc-200 px-5 py-4 text-sm font-medium text-zinc-400">
                      {row.slNo ?? ""}
                    </div>
                    <div className="border-r border-zinc-200 px-5 py-4 text-[15px] font-medium leading-relaxed text-zinc-900">
                      {row.name}
                    </div>
                    <div className="px-5 py-4 text-sm leading-relaxed text-zinc-700 whitespace-pre-line">
                      {progressText}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
