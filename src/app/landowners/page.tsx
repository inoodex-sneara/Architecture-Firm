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
    <main className="relative z-10 flex-1 overflow-hidden bg-[#f7f6f3] text-[#191919]">
      <section aria-label="Landowner partnership architectural banner" className="relative isolate h-[55vh] min-h-[360px] max-h-[700px] overflow-hidden bg-[#111315] sm:h-[62vh]">
        <Image
          src="/hero/slide-5.jpg"
          alt="Contemporary residence illuminated at dusk"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#f7f6f3]/50" />
      </section>

      <section className="bg-[#f7f6f3] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-[26px] border border-black/10 bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
              <Image
                src="/testimonials/review-6.webp"
                alt="A homeowner sharing their experience with Inoodex"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 460px"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-amber-700">A trusted partnership</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-light leading-tight tracking-tight text-[#191919] sm:text-5xl">
              Why choose Inoodex as your land development partner?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              Developing land can involve many important decisions. We bring design, planning, and project experience together to help you understand the opportunity and make informed decisions at every step.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {partnershipBenefits.map(({ icon: Icon, title }) => (
                <div key={title} className="rounded-xl border border-black/[0.08] bg-white/80 p-4 shadow-sm">
                  <Icon className="h-5 w-5 text-amber-700" strokeWidth={1.6} />
                  <h3 className="mt-3 text-base font-medium leading-snug text-[#222]">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="partnership" className="border-y border-black/[0.06] bg-[#eeece8] px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-9 max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-amber-700">A clear path forward</p>
            <h2 className="mt-3 text-3xl font-light tracking-tight text-[#191919] sm:text-4xl lg:text-5xl">
              From first conversation to shared vision.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <article
                key={number}
                className="group rounded-2xl border border-black/[0.08] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-600/30 hover:shadow-lg sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.16em] text-zinc-500">{number}</span>
                  <Icon className="h-5 w-5 text-amber-700 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                </div>
                <h3 className="mt-7 text-xl font-medium text-[#222]">{title}</h3>
                <p className="mt-2 text-base leading-7 text-zinc-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f3] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-amber-700">The Inoodex difference</p>
            <h2 className="mt-3 text-4xl font-light tracking-tight text-[#191919] sm:text-5xl">
              Experience that helps you move forward.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              <p>
                A successful joint venture starts with listening. We take time to understand your priorities, answer questions, and explore what may be possible for your property.
              </p>
              <p>
                From early feasibility conversations to an agreed project plan, our aim is to make the process considered, collaborative, and clear.
              </p>
            </div>
            <Link
              href="#landowner"
              className="mt-7 inline-flex items-center gap-2 text-base font-medium text-amber-800 transition-colors hover:text-amber-600"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
            <div className="relative aspect-[16/10]">
              <Image
                src="/featured/the-seasons.webp"
                alt="The Seasons residential development"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-amber-300">Thoughtful development</p>
                <p className="mt-1 text-xl font-light text-white">Designed for lasting value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eeece8] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-amber-700">Good to know</p>
            <h2 className="mt-3 text-4xl font-light tracking-tight text-[#191919] sm:text-5xl">Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group rounded-xl border border-black/[0.08] bg-white open:border-amber-600/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-medium text-zinc-800 marker:content-none sm:text-lg">
                  {question}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/15 text-amber-700 transition group-open:rotate-45">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                </summary>
                <p className="px-5 pb-5 text-base leading-7 text-zinc-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <LandownerSection variant="light" />
    </main>
  );
}
