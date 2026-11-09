"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const faqData = [
  {
    id: 1,
    question: "How's the project starting process?",
    answer:
      "Our process begins with an initial consultation to understand your vision, needs, and budget. From there, we create a custom design proposal, including moodboards, floor plans, and 3D visualizations. Once approved, we move into the execution phase, handling everything from material selection to project management. We keep you informed at every step to ensure the final result exceeds your expectations.",
  },
  {
    id: 2,
    question: "Is it possible work remotely or local?",
    answer:
      "Yes, we collaborate seamlessly with both local and international clients through virtual VR walkthroughs, 3D architectural renderings, and disciplined digital project governance. Our on-site engineering team handles ground execution while keeping you updated in real-time.",
  },
  {
    id: 3,
    question: "How you make sustainable design?",
    answer:
      "We integrate natural daylight corridors, biophilic vertical greenery, passive cross-ventilation, and high-efficiency material palettes exceeding national building codes and international green building benchmarks.",
  },
  {
    id: 4,
    question: "What is your on-time delivery & handover record?",
    answer:
      "Backed by a four-decade legacy since 1984, Inoodex maintains a 100% on-time delivery record. Every milestone is governed by rigorous engineering timelines and zero-redundancy scheduling.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: "",
  });

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        subject: "",
        email: "",
        message: "",
      });
    }, 4500);
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white pt-24 sm:pt-32">
      {/* ============================================================ */}
      {/* SECTION 1: Top Hero & Contact Form (Split 50/50 - Pure White Theme) */}
      {/* ============================================================ */}
      <section className="relative w-full px-5 sm:px-10 lg:px-16 pt-6 sm:pt-10 pb-16 sm:pb-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Subtitle & Crisp Light Form */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-normal text-zinc-950 uppercase tracking-tight leading-[1.08]">
                LET&apos;S ELEVATE
                <br />
                YOUR SPACE.
              </h1>
              <p className="mt-4 text-sm sm:text-base text-zinc-600 font-normal">
                Build your dreams living home come true.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-zinc-200 bg-[#fafafa] p-8 text-center space-y-4 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-950">Message Sent Successfully</h3>
                <p className="text-sm text-zinc-600 font-normal max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-zinc-900">{formData.firstName}</span>. Our architectural consulting team will connect with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-950 focus:bg-white focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-950 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Row 2: Subject */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-950 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Row 3: Email */}
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-950 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Row 4: Message */}
                <div>
                  <textarea
                    rows={5}
                    required
                    placeholder="Your message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-950 focus:bg-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button (Solid Black Button with White Text) */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-sm py-4 uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.99]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Architectural Sofa Photo + Overlapping Stay Connected Box */}
          <div className="space-y-6">
            <div className="relative aspect-[1/1.08] w-full overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                alt="Contemporary Architectural Interior Sofa & Living Space"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              {/* Overlapping "Stay connected" Card */}
              <div className="absolute bottom-0 right-0 sm:right-4 bg-zinc-950 text-white p-5 sm:p-6 shadow-2xl rounded-tl-2xl border border-zinc-800">
                <p className="text-sm font-medium text-white mb-3 tracking-wide">Stay connected</p>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 bg-white text-zinc-950 flex items-center justify-center rounded-sm hover:bg-zinc-200 transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 bg-white text-zinc-950 flex items-center justify-center rounded-sm hover:bg-zinc-200 transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 bg-white text-zinc-950 flex items-center justify-center rounded-sm hover:bg-zinc-200 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="w-9 h-9 bg-white text-zinc-950 flex items-center justify-center rounded-sm hover:bg-zinc-200 transition-colors"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Description Paragraph under Image */}
            <p className="text-sm sm:text-[14.5px] text-zinc-600 font-normal leading-relaxed max-w-xl">
              From residential, living home, and commercial projects, we blend your brand&apos;s vision seamlessly in both precise and aesthetic interior work.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: 3 Direct Contact Cards (Clean Light Cards) */}
      {/* ============================================================ */}
      <section className="relative w-full px-5 sm:px-10 lg:px-16 py-14 max-w-[1440px] mx-auto border-t border-zinc-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Email */}
          <div className="rounded-2xl bg-[#fafafa] p-8 sm:p-10 border border-zinc-200 shadow-sm transition-all duration-300 hover:border-zinc-400 hover:shadow-md">
            <h3 className="text-2xl font-semibold text-zinc-950 mb-3 tracking-tight">Email.</h3>
            <a
              href="mailto:info@inoodex.com"
              className="text-xs sm:text-sm font-mono tracking-wider text-zinc-600 hover:text-zinc-950 uppercase transition-colors"
            >
              INFO@INOODEX.COM
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="rounded-2xl bg-[#fafafa] p-8 sm:p-10 border border-zinc-200 shadow-sm transition-all duration-300 hover:border-zinc-400 hover:shadow-md">
            <h3 className="text-2xl font-semibold text-zinc-950 mb-3 tracking-tight">Phone.</h3>
            <a
              href="tel:16604"
              className="text-xs sm:text-sm font-mono tracking-wider text-zinc-600 hover:text-zinc-950 uppercase transition-colors"
            >
              16604 / +880 9613 191919
            </a>
          </div>

          {/* Card 3: Address */}
          <div className="rounded-2xl bg-[#fafafa] p-8 sm:p-10 border border-zinc-200 shadow-sm transition-all duration-300 hover:border-zinc-400 hover:shadow-md">
            <h3 className="text-2xl font-semibold text-zinc-950 mb-3 tracking-tight">Address.</h3>
            <p className="text-xs sm:text-sm font-mono tracking-wider text-zinc-600 uppercase leading-relaxed">
              PLOT: 3 &amp; 5, ROAD: 113/A, GULSHAN-2, DHAKA
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: Frequently Ask & Question (Clean Light Theme) */}
      {/* ============================================================ */}
      <section className="relative w-full px-5 sm:px-10 lg:px-16 py-16 sm:py-24 max-w-[1440px] mx-auto border-t border-zinc-200">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Architectural Chair Photo */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-zinc-950 tracking-tight uppercase leading-[1.08]">
              FREQUENTLY
              <br />
              ASK &amp; QUESTION
            </h2>

            <div className="relative aspect-[16/12] w-full overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
                alt="Contemporary Minimalist Chair and Interior Space"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="space-y-4">
            {faqData.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-[#fafafa] border border-zinc-200 overflow-hidden shadow-xs transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer hover:bg-zinc-100/70 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-medium text-zinc-950 tracking-tight pr-4">
                      {faq.question}
                    </span>
                    <span className="text-zinc-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm text-zinc-700 font-normal leading-relaxed border-t border-zinc-200 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: Full-Width Embedded Interactive Google Map */}
      {/* ============================================================ */}
      <section className="relative w-full border-t border-zinc-200">
        <div className="w-full h-[450px] sm:h-[550px] relative bg-zinc-100">
          <iframe
            title="Inoodex Gulshan Office Location Map"
            src="https://maps.google.com/maps?q=Gulshan-2%20Dhaka%201212&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
