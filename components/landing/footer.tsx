import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border)]/40 py-10 px-5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-display text-[1.35rem] font-light italic text-[var(--marrom)] tracking-wide">
            Face Concept
          </span>
          <span className="font-ui font-light text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-[var(--texto-suave)]">
            Clínica Estética &middot; Harmonização Facial
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/clinicfaceconcept/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-ui font-light text-[12px] md:text-[13px] tracking-[0.12em] uppercase text-[var(--texto-suave)] hover:text-[var(--dourado)] transition-colors duration-200"
            aria-label="Instagram @clinicfaceconcept"
          >
            <Instagram size={13} strokeWidth={1.5} />
            @clinicfaceconcept
          </a>
          <Link
            href="/termos-de-uso"
            className="font-ui font-light text-[12px] md:text-[13px] tracking-[0.12em] uppercase text-[var(--texto-suave)] hover:text-[var(--dourado)] transition-colors duration-200"
          >
            Termos de Uso
          </Link>
          <Link
            href="/politica-de-privacidade"
            className="font-ui font-light text-[12px] md:text-[13px] tracking-[0.12em] uppercase text-[var(--texto-suave)] hover:text-[var(--dourado)] transition-colors duration-200"
          >
            Privacidade
          </Link>
        </div>

        {/* Copy */}
        <p className="font-ui font-light text-[12px] md:text-[13px] text-[var(--texto-suave)] opacity-55">
          &copy; {new Date().getFullYear()} Face Concept. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
