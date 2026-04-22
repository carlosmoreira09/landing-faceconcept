interface LegalSectionProps {
  title: string
  children: React.ReactNode
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-[1.45rem] font-light italic text-[var(--marrom-escuro)] mb-3 pb-2 border-b border-[var(--dourado)]/30">
        {title}
      </h2>
      <div className="font-ui font-light text-[13px] leading-relaxed text-[var(--texto)] space-y-3">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-none space-y-1.5 pl-0">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 items-start">
          <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[var(--dourado)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function LegalHighlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--card)] border border-[var(--dourado)]/20 rounded-xl px-5 py-4 text-[12px] text-[var(--texto-suave)]">
      {children}
    </div>
  )
}
