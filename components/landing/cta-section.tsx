"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/procedures"

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

export function CTASection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ staggerChildren: 0.14 }}
      className="relative overflow-hidden flex flex-col items-center gap-6 py-20 px-5 text-center"
      aria-labelledby="cta-heading"
    >
      {/* Subtle texture bg */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(168,116,69,0.18) 0%, transparent 70%)",
        }}
      />

      <motion.div variants={itemVariants} className="flex items-center gap-3 w-full max-w-[140px]">
        <span className="flex-1 h-px bg-[var(--dourado)] opacity-40" />
        <span className="w-1 h-1 rounded-full bg-[var(--dourado)]" aria-hidden="true" />
        <span className="flex-1 h-px bg-[var(--dourado)] opacity-40" />
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="font-ui font-light text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[var(--dourado)]"
      >
        Primeiro passo
      </motion.p>

      <motion.h2
        variants={itemVariants}
        id="cta-heading"
        className="font-display text-[clamp(2.2rem,8vw,3.4rem)] font-light italic text-[var(--marrom-escuro)] leading-tight text-balance max-w-[380px]"
      >
        Agende sua avaliação gratuita
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="font-ui font-light text-[16px] md:text-[17px] text-[var(--texto-suave)] leading-relaxed max-w-[360px] text-balance"
      >
        Em uma consulta personalizada, nossos especialistas identificam os tratamentos ideais para revelar a melhor versão de você, sem exageros, sem máscaras.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-3">
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[var(--marrom-escuro)] text-[var(--primary-foreground)] font-ui font-light text-[12px] md:text-[13px] tracking-[0.16em] uppercase px-8 py-4 rounded-full"
          whileHover={{ y: -3, boxShadow: "0 18px 44px rgba(92,53,22,0.40)" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 380 }}
        >
          Agendar via WhatsApp
        </motion.a>

        <motion.a
          href="https://www.instagram.com/clinicfaceconcept/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-ui font-light text-[12px] md:text-[13px] tracking-[0.16em] uppercase px-6 py-4 rounded-full border border-[var(--marrom-escuro)]/40 text-[var(--marrom)] hover:border-[var(--marrom-escuro)] transition-colors duration-200"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 380 }}
        >
          <Instagram size={14} strokeWidth={1.5} />
          Ver resultados
        </motion.a>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="font-ui font-light text-[12px] md:text-[13px] text-[var(--texto-suave)] opacity-60 max-w-[300px] text-balance"
      >
        Consulta sem compromisso. Atendimento humanizado e discreet.
      </motion.p>
    </motion.section>
  )
}
