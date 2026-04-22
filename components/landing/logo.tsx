import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  /** visual size variant */
  size?: "sm" | "md" | "lg"
  /** hide the wordmark, show only the monogram */
  iconOnly?: boolean
  className?: string
}

const sizes = {
  sm: { icon: 20, wordmark: "text-[1.1rem]", sub: "text-[6px]" },
  md: { icon: 26, wordmark: "text-[1.45rem]", sub: "text-[8px]" },
  lg: { icon: 34, wordmark: "text-[1.8rem]", sub: "text-[9px]" },
}

export function Logo({ size = "md", iconOnly = false, className }: LogoProps) {
  const s = sizes[size]

  return (
    <span className={cn("inline-flex items-center gap-2 leading-none", className)}>
      {/* Monogram icon — uses the 32x32 favicon as the brand mark */}
      <Image
        src="/favicon-32x32.png"
        alt="Face Concept monogram"
        width={s.icon}
        height={s.icon}
        className="shrink-0 object-contain"
        style={{ mixBlendMode: "multiply" }}
        priority
      />

      {!iconOnly && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display font-light italic text-[var(--marrom-escuro)] tracking-wide",
              s.wordmark,
            )}
          >
            Face Concept
          </span>
          <span
            className={cn(
              "font-ui font-light tracking-[0.32em] uppercase text-[var(--dourado)]",
              s.sub,
            )}
          >
            Clínica Estética
          </span>
        </span>
      )}
    </span>
  )
}
