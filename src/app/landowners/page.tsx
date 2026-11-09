import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, Handshake, Landmark, ShieldCheck, TrendingUp } from "lucide-react";
import LandownerSection from "@/components/LandownerSection";

const steps = [
  {
    number: "01",
    title: "Share your property",
    description: "Tell us about your plot, its location, and what you hope to achieve.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Explore a partnership",
    description: "Our team reviews the opportunity and discusses a transparent JV proposal with you.",
    icon: Handshake,
  },
  {
    number: "03",
    title: "Build lasting value",
    description: "Together, we shape a considered development designed for long-term value.",
    icon: Landmark,
  },
];

const partnershipBenefits = [
  {
    icon: TrendingUp,
    title: "Unlock your land’s potential",
    description: "Explore a development plan designed around your location, plot, and long-term goals.",
  },
  {
    icon: ShieldCheck,
    title: "A transparent process",
    description: "Understand the key steps, responsibilities, and terms before moving forward together.",
  },
  {
    icon: Landmark,
    title: "Built with lasting care",
    description: "Bring thoughtful architecture and considered construction together in one shared vision.",
  },
];

const faqs = [
  {
    question: "What happens after I submit my land details?",
    answer: "The team can review the location and basic plot information, then contact you to discuss the property and possible next steps.",
  },
  {
    question: "What information should I prepare?",
    answer: "A plot address, approximate land size, and your contact details are a helpful start. Any available ownership or property documents can be discussed during the initial conversation.",
  },
  {
    question: "How are joint venture terms decided?",
    answer: "Terms depend on the specific property and are discussed with the landowner as part of the feasibility and proposal process.",
  },
  {
    question: "Is there a fee to request an initial discussion?",
    answer: "Use the form to request a conversation with the team. Any project-specific costs or obligations should be clarified directly before proceeding.",
  },
];

export default function LandownersPage() {
  return (
    <main className="relative z-10 flex-1 overflow-hidden bg-white text-zinc-900 selection:bg-zinc-950 selection:text-white">
      {/* 1. HERO ARCHITECTURAL BANNER */}
      <section
        aria-label="Landowner partnership architectural banner"
        className="relative isolate h-[42vh] sm:h-[52vh] lg:h-[62vh] min-h-[300px] sm:min-h-[360px] max-h-[700px] overflow-hidden bg-[#111315]"
      >
        <Image
          src="/hero/slide-5.jpg"
          alt="Contemporary residence illuminated at dusk"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/70" />
      </section>

      {/* 2. WHY CHOOSE INOODEX */}
      <section className="bg-white px-4 sm:px-8 md:px-10 py-14 sm:py-20 lg:px-16 border-b border-zinc-200">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-2xl sm:rounded-[26px] border border-zinc-200 bg-white p-2 shadow-xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-[20px]">
              <Image
                src="/testimonials/review-6.webp"
                alt="A homeowner sharing their experience with Inoodex"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 460px"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500">A trusted partnership</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-zinc-950">
              Why choose Inoodex as your land development partner?
            </h2>
            <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-600 font-light">
              Developing land can involve many important decisions. We bring design, planning, and project experience together to help you understand the opportunity and make informed decisions at every step.
            </p>
            <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {partnershipBenefits.map(({ icon: Icon, title }) => (
                <div key={title} className="rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white p-4 shadow-sm hover:border-zinc-400 transition-all">
                  <Icon className="h-5 w-5 text-zinc-900" strokeWidth={1.6} />
                  <h3 className="mt-3 text-sm sm:text-base font-medium leading-snug text-zinc-950">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. A CLEAR PATH FORWARD (3 STEPS) */}
      <section id="partnership" className="border-b border-zinc-200 bg-[#fafafa] px-4 sm:px-8 md:px-10 py-14 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-8 sm:mb-10 max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500">A clear path forward</p>
            <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950">
              From first conversation to shared vision.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <article
                key={number}
                className="group rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.16em] text-zinc-400">{number}</span>
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 transition-transform group-hover:scale-110">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                </div>
                <h3 className="mt-5 text-lg sm:text-xl font-medium text-zinc-950">{title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600 font-light">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE INOODEX DIFFERENCE */}
      <section className="bg-white border-b border-zinc-200 px-4 sm:px-8 md:px-10 py-14 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500">The Inoodex difference</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950">
              Experience that helps you move forward.
            </h2>
            <div className="mt-5 space-y-3.5 text-sm sm:text-base leading-relaxed text-zinc-600 font-light">
              <p>
                A successful joint venture starts with listening. We take time to understand your priorities, answer questions, and explore what may be possible for your property.
              </p>
              <p>
                From early feasibility conversations to an agreed project plan, our aim is to make the process considered, collaborative, and clear.
              </p>
            </div>
            <div className="mt-6 sm:mt-7">
              <Link
                href="#landowner"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-950 hover:border-zinc-950 text-zinc-900 hover:text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
              >
                <span>Start a conversation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl sm:rounded-[26px] border border-zinc-200 bg-white shadow-xl">
            <div className="relative aspect-[16/10]">
              <Image
                src="/featured/the-seasons.webp"
                alt="The Seasons residential development"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-300">Thoughtful development</p>
                <p className="mt-0.5 text-base sm:text-xl font-light text-white">Designed for lasting value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-[#fafafa] border-b border-zinc-200 px-4 sm:px-8 md:px-10 py-14 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500">Good to know</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950">Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group rounded-xl border border-zinc-200 bg-white shadow-sm open:border-zinc-400 transition-colors">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 sm:px-6 py-4 text-sm sm:text-base font-medium text-zinc-900 marker:content-none">
                  <span>{question}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition group-open:rotate-45">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </summary>
                <p className="px-4 sm:px-6 pb-5 text-xs sm:text-sm leading-relaxed text-zinc-600 font-light">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LANDOWNER FORM SECTION */}
      <LandownerSection variant="light" />
    </main>
  );
}
