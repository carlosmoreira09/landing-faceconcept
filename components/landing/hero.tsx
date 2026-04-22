"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import { WHATSAPP_LINK, categories } from "@/lib/procedures"
import { NavDropdown } from "@/components/landing/nav-dropdown"
import { Logo } from "@/components/landing/logo"

/* ─── Particle canvas ─────────────────────────────────────── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const W = () => canvas.offsetWidth
    const H = () => canvas.offsetHeight

    canvas.width = W()
    canvas.height = H()

    const particles: {
      x: number
      y: number
      r: number
      vx: number
      vy: number
      alpha: number
    }[] = []

    const N = 38

    for (let i = 0; i < N; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        alpha: Math.random() * 0.5 + 0.15,
      })
    }

    let raf: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connecting lines
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(168,116,69,${0.18 * (1 - dist / 90)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(168,116,69,${p.alpha})`
        ctx.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      }

      raf = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      canvas.width = W()
      canvas.height = H()
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

/* ─── Stagger variants ────────────────────────────────────── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

/* ─── Hero ────────────────────────────────────────────────── */
export function Hero() {
  return (
    <section className="relative w-full min-h-dvh flex flex-col">

      {/* Particle background layer */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* Photo — right half, fades out on the left */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/hero-botox.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.72) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* Warm tint overlay */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(135deg, rgba(207,199,184,0.92) 0%, rgba(207,199,184,0.6) 45%, rgba(207,199,184,0.10) 100%)",
        }}
      />

      {/* ── Navbar ─────────────────────────────────────────── */}
      <nav
        className="relative z-50 flex items-center justify-between px-6 md:px-12 pt-6 pb-2"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a href="/" aria-label="Face Concept, página inicial">
          <Logo size="md" />
        </a>

        {/* Center: dropdown menus — desktop only */}
        <div className="hidden md:flex items-center gap-8">
          {categories.map((cat) => (
            <NavDropdown key={cat.id} category={cat} />
          ))}
        </div>

        {/* Right: social + CTA */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/clinicfaceconcept/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @clinicfaceconcept"
            className="text-[var(--marrom)] hover:text-[var(--dourado)] transition-colors duration-200"
          >
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center font-ui font-light text-[11px] lg:text-[14px] tracking-[0.18em] uppercase px-5 py-2.5 rounded-full border border-[var(--marrom-escuro)] text-[var(--marrom-escuro)] hover:bg-[var(--marrom-escuro)] hover:text-[var(--primary-foreground)] transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Agendar avaliação
          </motion.a>
        </div>
      </nav>

      {/* ── Hero copy ──────────────────────────────────────── */}
      <div className="relative z-10 flex-1 md:m-50 flex items-center px-6 md:px-12 py-12 md:py-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 max-w-[520px]"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="w-6 h-px bg-[var(--dourado)]" aria-hidden="true" />
            <span className="font-ui text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[var(--dourado)] font-light">
              Harmonização Facial &amp; Estética Dermatológica
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-[clamp(3rem,10vw,6rem)] font-light leading-[1.0] text-[var(--marrom-escuro)] text-balance"
            style={{ fontStyle: "italic" }}
          >
            Sua beleza,<br />
            <span style={{ fontStyle: "normal" }} className="font-light text-[var(--dourado)]">
              redefinida.
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div variants={item} className="flex items-center gap-3 w-28">
            <span className="flex-1 h-px bg-[var(--dourado)] opacity-60" aria-hidden="true" />
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--dourado)]" aria-hidden="true" />
          </motion.div>

          {/* Sub-copy */}
          <motion.p
            variants={item}
            className="font-ui font-light text-[16px] md:text-[17px] leading-relaxed text-[var(--texto-suave)] max-w-[420px] text-balance"
          >
            Protocolo exclusivo de harmonização facial com técnicas minimamente invasivas. Resultados naturais, expressão preservada, porque a melhor versão de você ainda deve parecer você.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-ui font-light text-[12px] md:text-[13px] tracking-[0.16em] uppercase px-7 py-3.5 rounded-full bg-[var(--marrom-escuro)] text-[var(--primary-foreground)]"
              whileHover={{ y: -3, boxShadow: "0 18px 40px rgba(92,53,22,0.38)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380 }}
            >
              Agendar avaliação gratuita
            </motion.a>
            <motion.a
              href="#procedimentos"
              className="inline-flex items-center font-ui font-light text-[12px] md:text-[13px] tracking-[0.16em] uppercase px-7 py-3.5 rounded-full border border-[var(--marrom-escuro)]/50 text-[var(--marrom-escuro)]"
              whileHover={{ borderColor: "var(--marrom-escuro)", y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380 }}
            >
              Ver procedimentos
            </motion.a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={item}
            className="flex items-center gap-2 pt-3"
          >
            <div className="flex -space-x-2" aria-hidden="true">
              {["#c9944e", "#a87445", "#7a4f2e"].map((c, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-[var(--bege-fundo)] flex items-center justify-center text-[8px] font-bold text-white"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span className="font-ui font-light text-[13px] md:text-[14px] text-[var(--texto-suave)]">
              Mais de <strong className="font-normal text-[var(--marrom)]">500 pacientes</strong> atendidos
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="relative z-10 flex justify-center pb-8"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="font-ui text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[var(--texto-suave)] opacity-60">
            Explorar
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--dourado)] to-transparent opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
