import { projects } from "../data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading index="03" title="projects" subtitle="ls -la ./systems" />

      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-16">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
          more systems
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {more.map((project) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="corner-brackets group rounded-lg border border-[var(--color-border)] p-4 transition-colors duration-150 hover:border-[var(--color-border-strong)]"
            >
              <p className="font-display text-sm font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)]">
                {project.name} ↗
              </p>
              <p className="mt-1 text-[13px] text-[var(--color-ink-faint)]">{project.tagline}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 3).map((t) => (
                  <span key={t} className="font-mono text-[10px] text-[var(--color-ink-faint)]">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
