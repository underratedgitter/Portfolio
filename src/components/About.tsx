import { profile, systemInfo } from "../data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading index="01" title="about" subtitle="cat about.md" />

      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-[var(--color-ink-dim)] sm:text-lg">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-[var(--color-ink)]" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="panel corner-brackets rounded-lg p-5 font-mono text-[13px]">
            <p className="mb-4 text-[var(--color-accent)]">neofetch --minimal</p>
            <dl className="space-y-2.5">
              {systemInfo.map((row) => (
                <div key={row.key} className="flex gap-3">
                  <dt className="w-24 shrink-0 text-[var(--color-ink-faint)]">{row.key}</dt>
                  <dd className="text-[var(--color-ink)]">{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 flex gap-1 border-t border-[var(--color-border)] pt-4">
              {["#34d399", "#fbbf24", "#e6edf3", "#566373"].map((c) => (
                <span key={c} className="h-3 w-3 rounded-sm" style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
