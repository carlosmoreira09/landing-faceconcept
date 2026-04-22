"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import type { Procedure } from "@/lib/procedures"

import "swiper/css"
import "swiper/css/pagination"

type Props = {
  procedure: Procedure | null
  onClose: () => void
}

/* ─── Shared panel content ──────────────────────────────── */
function PanelContent({ procedure, onClose }: { procedure: Procedure; onClose: () => void }) {
  return (
    <>
      {/* Close */}
      <div className="flex items-start justify-between mb-4">
        <span className="inline-block font-ui text-[11px] md:text-[12px] tracking-[0.18em] uppercase text-[var(--dourado)] border border-[var(--dourado)]/40 px-3 py-1 rounded-full">
          {procedure.badge}
        </span>
        <button
          onClick={onClose}
          className="p-1.5 rounded-full text-[var(--texto-suave)] hover:bg-[var(--muted)] transition-colors ml-2 flex-shrink-0"
          aria-label="Fechar"
        >
          <X size={16} strokeWidth={1.5} />
        </button>
      </div>

      {/* Title */}
      <h2 className="font-display text-[clamp(1.75rem,6vw,2.2rem)] font-light italic text-[var(--marrom-escuro)] leading-tight mb-2 text-balance">
        {procedure.title}
      </h2>

      {/* Divider */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-8 h-px bg-[var(--dourado)] opacity-50" aria-hidden="true" />
        <span className="w-1 h-1 rounded-full bg-[var(--dourado)]" aria-hidden="true" />
        <span className="flex-1 h-px bg-[var(--dourado)] opacity-20" aria-hidden="true" />
      </div>

      {/* Image Swiper */}
      <div className="mb-5 rounded-xl overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          loop
          className="rounded-xl"
        >
          {procedure.images.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`${procedure.title}, imagem ${i + 1}`}
                className="w-full h-40 md:h-44 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Description */}
      <p className="font-ui font-light text-[15px] md:text-[16px] leading-relaxed text-[var(--texto-suave)] mb-5">
        {procedure.desc}
      </p>

      {/* Indications */}
      <div>
        <h3 className="font-ui text-[11px] md:text-[12px] tracking-[0.18em] uppercase text-[var(--dourado)] mb-3">
          Indicações
        </h3>
        <ul className="flex flex-col gap-2.5">
          {procedure.indications.map((ind, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[var(--dourado)]/12 flex items-center justify-center">
                <Check size={9} className="text-[var(--dourado)]" strokeWidth={2.5} />
              </span>
              <span className="font-ui font-light text-[14px] md:text-[15px] text-[var(--texto)] leading-snug">
                {ind}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

/* ─── Main component ────────────────────────────────────── */
export function ProcedureModal({ procedure, onClose }: Props) {
  useEffect(() => {
    if (procedure) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [procedure])

  return (
    <AnimatePresence>
      {procedure && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-[var(--marrom-escuro)]/40 backdrop-blur-[2px] z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* ── Mobile: bottom sheet ──────────────────────── */}
          <motion.div
            key="sheet-mobile"
            role="dialog"
            aria-modal="true"
            aria-label={procedure.title}
            className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--popover)] rounded-t-3xl shadow-2xl max-h-[88dvh] overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 rounded-full bg-[var(--border)]" aria-hidden="true" />
            </div>
            <div className="px-5 pt-1 pb-10">
              <PanelContent procedure={procedure} onClose={onClose} />
            </div>
          </motion.div>

          {/* ── Desktop: centered modal ────────────────────── */}
          <motion.div
            key="modal-desktop"
            role="dialog"
            aria-modal="true"
            aria-label={procedure.title}
            className="hidden md:flex fixed inset-0 z-50 items-center justify-center p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
          >
            <div
              className="bg-[var(--popover)] rounded-3xl shadow-2xl w-full max-w-lg max-h-[88vh] overflow-y-auto p-7"
              onClick={(e) => e.stopPropagation()}
            >
              <PanelContent procedure={procedure} onClose={onClose} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
