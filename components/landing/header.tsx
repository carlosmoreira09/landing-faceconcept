"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export function Header() {
  return (
    <header className="w-full pt-12 pb-10 px-5 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-4"
      >
        {/* Nav Tags */}
        <motion.nav variants={itemVariants} aria-label="Valores da clínica">
          <ul className="flex items-center gap-2 text-[12px] md:text-[13px] tracking-[0.2em] uppercase font-ui font-light text-[var(--texto-suave)]">
            <li>Beleza</li>
            <li aria-hidden="true" className="w-1 h-1 rounded-full bg-[var(--dourado)] inline-block" />
            <li>Harmonia</li>
            <li aria-hidden="true" className="w-1 h-1 rounded-full bg-[var(--dourado)] inline-block" />
            <li>Confiança</li>
          </ul>
        </motion.nav>

        {/* Hero Title */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-[clamp(3rem,12vw,5.5rem)] font-light leading-[1.05] text-[var(--marrom-escuro)] text-balance"
          style={{ fontStyle: "italic" }}
        >
          Cuidados<br />que<br />Transformam
        </motion.h1>

        {/* Decorative divider */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 w-full max-w-[200px]">
          <span className="flex-1 h-px bg-[var(--dourado)] opacity-50" />
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--dourado)]" aria-hidden="true" />
          <span className="flex-1 h-px bg-[var(--dourado)] opacity-50" />
        </motion.div>

        {/* Hero Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-ui font-light text-[15px] md:text-[16px] tracking-[0.1em] text-[var(--texto-suave)] uppercase max-w-[320px] leading-relaxed text-balance"
        >
          Procedimentos estéticos e odontológicos de excelência
        </motion.p>
      </motion.div>
    </header>
  )
}
