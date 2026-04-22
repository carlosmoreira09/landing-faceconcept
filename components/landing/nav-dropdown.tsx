"use client"

import { useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { type Category, type Procedure, WHATSAPP_LINK } from "@/lib/procedures"

interface NavDropdownProps {
  category: Category
}

const panelVariants = {
  hidden: { opacity: 0, y: -10, scaleY: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -6,
    scaleY: 0.97,
    transition: { duration: 0.18, ease: "easeIn" },
  },
}

const detailVariants = {
  hidden: { opacity: 0, x: 14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.22, ease: "easeOut" } },
  exit: { opacity: 0, x: -8, transition: { duration: 0.14, ease: "easeIn" } },
}

export function NavDropdown({ category }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<Procedure>(category.items[0])
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleEnter = useCallback(() => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    setOpen(true)
  }, [])

  const handleLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setOpen(false), 140)
  }, [])

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger */}
      <button
        className="flex items-center gap-1.5 font-ui font-light text-[11px] tracking-[0.18em] uppercase text-[var(--marrom-escuro)] hover:text-[var(--dourado)] transition-colors duration-200 py-1"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {category.label}
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 3.5L5 6.5L8 3.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute -left-16 top-full mt-4 w-[860px] rounded-2xl border border-[var(--dourado)]/20 shadow-2xl overflow-hidden z-50"
            style={{
              background: "rgba(250,247,243,0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              originY: 0,
              boxShadow: "0 24px 60px rgba(80,50,20,0.14), 0 4px 16px rgba(80,50,20,0.08)",
            }}
            role="region"
            aria-label={`Menu ${category.label}`}
          >
            {/* Top gold accent line */}
            <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[var(--dourado)]/70 to-transparent" />

            <div className="flex min-h-[360px]">

              {/* Col 1 — category header + procedure list */}
              <div className="w-64 flex-shrink-0 flex flex-col border-r border-[var(--dourado)]/10">
                <div className="px-6 pt-5 pb-3">
                  <p className="font-ui font-light text-[9px] tracking-[0.3em] uppercase text-[var(--dourado)]">
                    Tratamentos
                  </p>
                  <h2 className="font-display italic text-[1.1rem] font-light text-[var(--marrom-escuro)] mt-0.5 leading-tight">
                    {category.label}
                  </h2>
                </div>
                <div className="h-px mx-6 bg-[var(--dourado)]/10 mb-1" />

                <ul className="flex flex-col py-2 px-3 flex-1" role="list">
                  {category.items.map((proc) => {
                    const isActive = active.id === proc.id
                    return (
                      <li key={proc.id}>
                        <button
                          onMouseEnter={() => setActive(proc)}
                          className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-150 flex items-center justify-between gap-3 group ${
                            isActive
                              ? "bg-[var(--marrom-escuro)] text-[var(--primary-foreground)]"
                              : "text-[var(--marrom)] hover:bg-[var(--dourado)]/10"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                                isActive
                                  ? "bg-[var(--dourado)]"
                                  : "bg-[var(--dourado)]/35 group-hover:bg-[var(--dourado)]"
                              }`}
                            />
                            <span className="font-ui font-light text-[11.5px] tracking-[0.06em]">
                              {proc.title}
                            </span>
                          </div>
                          {isActive && (
                            <ArrowUpRight
                              size={12}
                              className="text-[var(--dourado)] flex-shrink-0"
                              aria-hidden="true"
                            />
                          )}
                        </button>
                      </li>
                    )
                  })}
                </ul>

                {/* CTA at bottom of list */}
                <div className="px-5 py-4 border-t border-[var(--dourado)]/10">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-[var(--marrom-escuro)] font-ui font-light text-[9px] tracking-[0.2em] uppercase text-[var(--marrom-escuro)] hover:bg-[var(--marrom-escuro)] hover:text-[var(--primary-foreground)] transition-all duration-300"
                  >
                    Agendar avaliação
                  </a>
                </div>
              </div>

              {/* Col 2 — procedure detail */}
              <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    variants={detailVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex h-full"
                  >
                    {/* Detail text */}
                    <div className="flex-1 flex flex-col justify-start px-8 py-6 gap-4">
                      <div>
                        <p className="font-ui font-light text-[9px] tracking-[0.3em] uppercase text-[var(--dourado)] mb-1">
                          {active.badge}
                        </p>
                        <h3 className="font-display italic text-[1.7rem] font-light text-[var(--marrom-escuro)] leading-tight">
                          {active.title}
                        </h3>
                      </div>

                      <p className="font-ui font-light text-[12.5px] leading-relaxed text-[var(--texto-suave)] max-w-sm">
                        {active.desc}
                      </p>

                      <div>
                        <p className="font-ui font-light text-[9px] tracking-[0.24em] uppercase text-[var(--marrom)] mb-2.5">
                          Indicado para
                        </p>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5" role="list">
                          {active.indications.slice(0, 6).map((ind) => (
                            <li key={ind} className="flex items-start gap-2">
                              <span
                                className="mt-[6px] w-1 h-1 rounded-full bg-[var(--dourado)] flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span className="font-ui font-light text-[11px] text-[var(--texto-suave)] leading-snug">
                                {ind}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Procedure image */}
                    <div className="w-56 flex-shrink-0 relative self-stretch">
                      <Image
                        src={active.images[0]}
                        alt={active.title}
                        fill
                        className="object-cover"
                        sizes="224px"
                      />
                      {/* subtle overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to right, rgba(250,247,243,0.45) 0%, transparent 40%)",
                        }}
                        aria-hidden="true"
                      />
                      {/* badge */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block font-ui font-light text-[9px] tracking-[0.2em] uppercase text-white/90 bg-[var(--marrom-escuro)]/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          {active.badge}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom gold accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--dourado)]/30 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
