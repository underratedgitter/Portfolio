import { useState } from "react";
import { projects } from "../data/content";
import { LabelCell } from "./LabelCell";
import { ProjectPlate } from "./ProjectPlate";
import { Reveal } from "./Reveal";
import { Rule } from "./Rule";

type Project = (typeof projects)[number];

function WorkRow({ project, flip }: { project: Project; flip: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group relative grid grid-cols-1 gap-x-[var(--space-xl)] gap-y-[var(--space-lg)] py-[var(--space-2xl)] md:grid-cols-12">
      <Rule />
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.name} on GitHub`}
        className={`block min-w-0 ${flip ? "md:order-2 md:col-span-5" : "md:col-span-7"}`}
      >
        <div className="overflow-hidden border border-line transition-[transform,border-color] duration-700 ease-out-expo group-hover:scale-[1.01] group-hover:border-line-strong">
          <ProjectPlate id={project.id} />
        </div>
      </a>

      <div className={`flex min-w-0 flex-col ${flip ? "md:order-1 md:col-span-7" : "md:col-span-5"}`}>
        <p className="label text-faint">{project.year}</p>

        <h3 className="display mt-[var(--space-lg)] text-[2.9rem] sm:text-[3.6rem]">
          <a href={project.href} target="_blank" rel="noreferrer" className="transition-colors duration-300 group-hover:text-mute">
            {project.name}
          </a>
        </h3>
        <p className="display mt-3 text-[1.5rem] italic leading-[1.05] text-mute">{project.tagline}</p>

        <p className="body-copy mt-[var(--space-lg)] max-w-[54ch] text-paper/85">{project.description}</p>

        {open && (
          <ul className="body-copy mt-5 max-w-[54ch] space-y-3 border-l border-line-strong pl-4 text-mute">
            {project.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
        {project.details.length > 0 && (
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="label mt-5 self-start focus-visible:outline-2 border-b border-line-strong pb-1 transition-colors hover:border-paper"
          >
            {open ? "Less detail" : "More detail"}
          </button>
        )}

        <ul className="mt-auto flex flex-wrap gap-2 pt-[var(--space-xl)]">
          {project.stack.map((tech) => (
            <li key={tech} className="label rounded-full border border-line px-2.5 py-1.5 text-mute">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section>
      <LabelCell id="work" align="end" note={`${featured.length} case studies and ${more.length} more`} title="Selected work" />

      <div className="wrap">
        {featured.map((project, i) => (
          <Reveal key={project.id}>
            <WorkRow project={project} flip={i % 2 === 1} />
          </Reveal>
        ))}

        <div className="relative pb-[var(--section-gap-s)] pt-[var(--space-2xl)]">
          <Rule />
          <table className="w-full border-collapse text-left">
            <caption className="label pb-[var(--space-md)] text-left text-faint">Also built</caption>
            <thead className="sr-only">
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Project</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {more.map((project) => (
                <tr key={project.id} className="group border-t border-line align-baseline">
                  <td className="label w-16 py-5 pr-4 text-faint sm:w-24">{project.year}</td>
                  <td className="py-5 pr-6">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="display text-[2rem] leading-none focus-visible:outline-2 transition-colors duration-300 hover:text-mute"
                    >
                      {project.name}
                    </a>
                  </td>
                  <td className="hidden py-5 text-[15px] text-mute sm:table-cell">{project.tagline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
