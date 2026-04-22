import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Instagram } from "lucide-react"
import { Logo } from "@/components/landing/logo"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[var(--bege-fundo)] flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-[var(--border)]/40 bg-[var(--bege-fundo)]/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-ui font-light text-[11px] tracking-[0.2em] uppercase text-[var(--texto-suave)] hover:text-[var(--dourado)] transition-colors duration-200"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Voltar
          </Link>

          <Link href="/" aria-label="Face Concept, página inicial">
            <Logo size="sm" />
          </Link>

          <a
            href="https://www.instagram.com/clinicfaceconcept/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @clinicfaceconcept"
            className="text-[var(--texto-suave)] hover:text-[var(--dourado)] transition-colors duration-200"
          >
            <Instagram size={16} strokeWidth={1.5} />
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)]/40 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-ui font-light text-[10px] tracking-[0.15em] uppercase text-[var(--texto-suave)] opacity-60">
            &copy; {new Date().getFullYear()} Face Concept. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/termos-de-uso"
              className="font-ui font-light text-[10px] tracking-[0.15em] uppercase text-[var(--texto-suave)] hover:text-[var(--dourado)] transition-colors duration-200"
            >
              Termos de Uso
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="font-ui font-light text-[10px] tracking-[0.15em] uppercase text-[var(--texto-suave)] hover:text-[var(--dourado)] transition-colors duration-200"
            >
              Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
