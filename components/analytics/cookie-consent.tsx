"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Cookie, X } from "lucide-react"
import { useCookieConsent } from "@/hooks/use-cookie-consent"

export function CookieConsent() {
  const { consent, grant, deny } = useCookieConsent()

  const visible = consent === "pending"

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-banner"
          role="dialog"
          aria-live="polite"
          aria-label="Consentimento de cookies"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[100]"
        >
          <div
            className="rounded-2xl border border-[var(--dourado)]/25 p-5 shadow-2xl"
            style={{
              background: "rgba(248,245,240,0.97)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <Cookie size={16} className="text-[var(--dourado)] shrink-0" strokeWidth={1.5} />
                <span className="font-ui font-light text-[10px] tracking-[0.22em] uppercase text-[var(--dourado)]">
                  Cookies & Privacidade
                </span>
              </div>
              <button
                onClick={deny}
                aria-label="Recusar cookies e fechar"
                className="text-[var(--texto-suave)] hover:text-[var(--texto)] transition-colors"
              >
                <X size={14} strokeWidth={1.5} />
              </button>
            </div>

            {/* Body */}
            <p className="font-ui font-light text-xs leading-relaxed text-[var(--texto-suave)] mb-4">
              Utilizamos cookies para analisar o tráfego e melhorar sua
              experiência. Nenhum dado é compartilhado com terceiros para fins
              publicitários.{" "}
              <a
                href="/politica-de-privacidade"
                className="text-[var(--dourado)] underline underline-offset-2 hover:text-[var(--marrom)]"
              >
                Saiba mais
              </a>
              .
            </p>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={grant}
                className="flex-1 py-2 rounded-full bg-[var(--marrom-escuro)] text-[var(--primary-foreground)] font-ui font-light text-[10px] tracking-[0.18em] uppercase hover:bg-[var(--marrom)] transition-colors"
              >
                Aceitar
              </button>
              <button
                onClick={deny}
                className="flex-1 py-2 rounded-full border border-[var(--marrom-escuro)]/40 text-[var(--texto)] font-ui font-light text-[10px] tracking-[0.18em] uppercase hover:border-[var(--marrom-escuro)] transition-colors"
              >
                Recusar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
