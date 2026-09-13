export function SectionHeading({ index, title, subtitle }: { index: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-mono text-sm text-[var(--color-accent)]">{index}</span>
      <div>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
          {title}
        </h2>
        {subtitle && <p className="mt-1 text-sm text-[var(--color-ink-faint)]">{subtitle}</p>}
      </div>
      <div className="ml-auto hidden h-px flex-1 bg-[var(--color-border)] sm:block" />
    </div>
  );
}
