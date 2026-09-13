import { certifications, education, skillGroups } from "../data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading index="04" title="toolkit" subtitle="cat skills.yaml" />

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 2) * 0.06}>
            <div className="panel rounded-lg p-5">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)]">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-[var(--color-border)] px-2.5 py-1 font-mono text-[12px] text-[var(--color-ink-dim)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
              education
            </p>
            <div className="panel rounded-lg p-5">
              <p className="font-display font-semibold text-[var(--color-ink)]">{education.degree}</p>
              <p className="mt-1 text-sm text-[var(--color-ink-dim)]">{education.school}</p>
              <p className="mt-1 font-mono text-xs text-[var(--color-ink-faint)]">{education.range}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
              certifications
            </p>
            <div className="panel rounded-lg p-5">
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                    <span className="text-sm text-[var(--color-ink)]">{cert.name}</span>
                    <span className="font-mono text-[11px] text-[var(--color-ink-faint)]">
                      {cert.org} · {cert.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
