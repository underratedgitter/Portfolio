import { experience } from "../data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const STATUS_STYLES: Record<string, string> = {
  current: "text-[var(--color-accent)] border-[var(--color-accent)]/40 bg-[var(--color-accent-soft)]",
  merged: "text-[var(--color-warn)] border-[var(--color-warn)]/40 bg-[var(--color-warn-soft)]",
  complete: "text-[var(--color-ink-faint)] border-[var(--color-border-strong)] bg-transparent",
};

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading index="02" title="experience" subtitle="git log --oneline --graph" />

      <div className="relative">
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-[var(--color-border)] sm:left-[7px]" />

        <ul className="space-y-10">
          {experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <li className="relative pl-8">
                <span
                  className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 ${
                    item.status === "current"
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/20"
                      : "border-[var(--color-border-strong)] bg-[var(--color-bg)]"
                  }`}
                />
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-[var(--color-ink-faint)]">{item.range}</span>
                  <span
                    className={`rounded border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide ${STATUS_STYLES[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-[var(--color-ink)] sm:text-xl">
                  {item.role}
                </h3>
                <p className="font-mono text-sm text-[var(--color-ink-dim)]">
                  {item.org} · {item.location}
                </p>
                <p className="mt-2.5 max-w-[70ch] text-[15px] leading-relaxed text-[var(--color-ink-dim)]">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
