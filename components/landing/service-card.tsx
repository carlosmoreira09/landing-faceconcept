"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import type { Category, Procedure } from "@/lib/procedures"

type Props = {
  category: Category
  onSelect: (procedure: Procedure) => void
}

/* ─── Dropdown list ─────────────────────────────────────── */
const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scaleY: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -6,
    scaleY: 0.94,
    transition: { duration: 0.16, ease: "easeIn" },
  },
}

/* ─── ServiceCard ───────────────────────────────────────── */
export function ServiceCard({ category, onSelect }: Props) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* Desktop: hover intent with small delay to avoid flicker */
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120)
  }

  /* Mobile / click toggle */
  const handleToggle = () => setOpen((v) => !v)

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Trigger button ─────────────────────────────── */}
      <motion.button
        onClick={handleToggle}
        className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-[var(--card)] border border-[var(--border)]/40 shadow-sm group"
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 340, damping: 22 }}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <div className="flex flex-col items-start gap-0.5">
          <span className="font-ui text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[var(--dourado)] font-light">
            Serviços
          </span>
          <span className="font-display text-[1.35rem] md:text-[1.5rem] font-light italic text-[var(--marrom-escuro)] leading-tight">
            {category.label}
          </span>
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          className="flex-shrink-0 ml-3 text-[var(--dourado)] opacity-70"
        >
          <ChevronDown size={17} strokeWidth={1.5} />
        </motion.div>
      </motion.button>

      {/* ── Dropdown ────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.ul
            key="dropdown"
            role="listbox"
            aria-label={`Procedimentos de ${category.label}`}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transformOrigin: "top center" }}
            className="absolute left-0 right-0 z-30 mt-1.5 rounded-2xl bg-[var(--popover)] border border-[var(--border)]/40 shadow-xl overflow-hidden"
          >
            {category.items.map((procedure, idx) => (
              <li key={procedure.id} role="option" aria-selected={false}>
                <motion.button
                  onClick={() => {
                    onSelect(procedure)
                    setOpen(false)
                  }}
                  className="w-full flex items-center justify-between px-5 py-3.5 text-left group hover:bg-[var(--muted)]/60 transition-colors duration-150"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.045, duration: 0.22 }}
                  aria-label={`Ver detalhes de ${procedure.title}`}
                >
                  <div className="flex flex-col">
                    <span className="font-ui font-light text-[15px] md:text-[16px] tracking-[0.02em] text-[var(--texto)] group-hover:text-[var(--marrom)] transition-colors duration-150">
                      {procedure.title}
                    </span>
                    <span className="font-ui font-light text-[13px] md:text-[14px] text-[var(--texto-suave)] opacity-70 leading-snug line-clamp-1 mt-0.5">
                      {procedure.desc.split(".")[0]}.
                    </span>
                  </div>
                  <ArrowRight
                    size={13}
                    className="flex-shrink-0 ml-3 text-[var(--dourado)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150"
                  />
                </motion.button>
                {idx < category.items.length - 1 && (
                  <div className="mx-5 h-px bg-[var(--border)]/30" aria-hidden="true" />
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
