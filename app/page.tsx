"use client"

import { useState } from "react"
import { Hero } from "@/components/landing/hero"
import { ServiceCard } from "@/components/landing/service-card"
import { ProcedureModal } from "@/components/landing/procedure-modal"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { categories, type Procedure } from "@/lib/procedures"

export default function LandingPage() {
  const [selected, setSelected] = useState<Procedure | null>(null)

  return (
    <main className="min-h-dvh flex flex-col bg-[var(--bege-fundo)]">
      {/* Full-width Hero with particle bg + split photo */}
      <Hero />

      {/* Procedures section */}
      <section
        id="procedimentos"
        className="w-full max-w-2xl mx-auto flex flex-col gap-3 px-5 py-12"
        aria-label="Procedimentos disponíveis"
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-[var(--dourado)]" aria-hidden="true" />
          <span className="font-ui text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[var(--dourado)] font-light">
            Nossos procedimentos
          </span>
        </div>

        {categories.map((category) => (
          <ServiceCard
            key={category.id}
            category={category}
            onSelect={setSelected}
          />
        ))}
      </section>

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Procedure detail panel */}
      <ProcedureModal
        procedure={selected}
        onClose={() => setSelected(null)}
      />
    </main>
  )
}
