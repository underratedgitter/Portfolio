import { useState } from "react";
import type { projects } from "../data/content";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="panel corner-brackets group flex flex-col rounded-lg p-6 transition-colors duration-200 hover:border-[var(--color-border-strong)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">{project.name}</h3>
          <p className="mt-1 font-mono text-sm text-[var(--color-accent)]">{project.tagline}</p>
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name} on GitHub`}
          className="shrink-0 rounded border border-[var(--color-border-strong)] px-2.5 py-1.5 font-mono text-xs text-[var(--color-ink-dim)] transition-colors duration-150 group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]"
        >
          repo ↗
        </a>
      </div>

      <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-dim)]">{project.description}</p>

      {project.details.length > 0 && (
        <>
          {expanded && (
            <ul className="mt-3 space-y-2 border-l border-[var(--color-border)] pl-4 text-sm leading-relaxed text-[var(--color-ink-dim)]">
              {project.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 self-start font-mono text-xs text-[var(--color-ink-faint)] underline decoration-dotted underline-offset-4 transition-colors duration-150 hover:text-[var(--color-accent)]"
          >
            {expanded ? "show less" : "read more →"}
          </button>
        </>
      )}

      {project.metrics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.metrics.map((m) => (
            <span
              key={m}
              className="rounded border border-[var(--color-warn)]/30 bg-[var(--color-warn-soft)] px-2 py-1 font-mono text-[11px] text-[var(--color-warn)]"
            >
              {m}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-[var(--color-border)] px-2 py-1 font-mono text-[11px] text-[var(--color-ink-faint)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
