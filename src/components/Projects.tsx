import { useState } from "react";
import { projects } from "../data/content";
import { LabelCell } from "./LabelCell";
import { ProjectPlate } from "./ProjectPlate";
import { Reveal } from "./Reveal";
import { Rule } from "./Rule";

type Project = (typeof projects)[number];

// Plate share of the row and how far the copy drops, per row; cycles if there are more projects.
const ROW_SHAPES = [
  { cols: "md:grid-cols-[1.9fr_1fr]", drop: "" },
  { cols: "md:grid-cols-[1fr_1.3fr]", drop: "md:pt-28" },
  { cols: "md:grid-cols-[1.15fr_1fr]", drop: "md:pt-12" },
  { cols: "md:grid-cols-[1fr_2.1fr]", drop: "md:pt-40" },
];

function WorkRow({ project, index, flip }: { project: Project; index: number; flip: boolean }) {
  const [open, setOpen] = useState(false);
  const shape = ROW_SHAPES[index % ROW_SHAPES.length];

  return (
    <article className={`group relative grid ${shape.cols}`}>
      <Rule />
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.name} on GitHub`}
        className={`relative block p-4 sm:p-6 ${flip ? "md:order-2" : ""}`}
      >
        <Rule className="md:hidden" />
        <Rule side={flip ? "left" : "right"} className="hidden md:block" />
        <div className="overflow-hidden border border-line transition-[transform,border-color] duration-700 ease-out-expo group-hover:scale-[1.015] group-hover:border-line-strong">
          <ProjectPlate id={project.id} />
        </div>
      </a>

      <div className={`flex flex-col px-4 pb-6 pt-4 sm:px-6 ${shape.drop} ${flip ? "md:order-1" : ""}`}>
        <div className="flex items-center justify-between">
          <span className="label text-faint">
            <span>{String(index + 1).padStart(2, "0")}</span> / Case
          </span>
          <span className="label text-faint">{project.year}</span>
        </div>

        <h3 className="display mt-10 text-[2.9rem] sm:text-[3.6rem]">
          <a href={project.href} target="_blank" rel="noreferrer" className="transition-colors duration-300 group-hover:text-mute">
            {project.name}
            <span aria-hidden className="ml-3 inline-block font-sans text-[0.5em] font-light transition-transform duration-300 group-hover:translate-x-2">
              ↗
            </span>
          </a>
        </h3>
        <p className="display mt-3 text-[1.5rem] italic leading-[1.05] text-mute">{project.tagline}</p>

        <p className="mt-8 body-copy max-w-[54ch] text-paper/85">{project.description}</p>

        {open && (
          <ul className="mt-5 max-w-[54ch] space-y-3 border-l border-line-strong pl-4 body-copy text-mute">
            {project.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
        {project.details.length > 0 && (
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="label mt-5 self-start border-b border-line-strong pb-1 transition-colors hover:border-paper"
          >
            {open ? "− Less" : "+ More detail"}
          </button>
        )}

        <ul className="mt-auto flex flex-wrap gap-2 pt-10">
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
      <LabelCell
        id="work"
        index="01"
        align="end"
        note={`${featured.length} case studies · ${more.length} more`}
        title={
          <>
            Selected <em>work</em>
          </>
        }
      />

      {featured.map((project, i) => (
        <Reveal key={project.id}>
          <WorkRow project={project} index={i} flip={i % 2 === 1} />
        </Reveal>
      ))}

      <div className="label relative px-4 py-3 text-faint sm:px-6">
        Also built
        <Rule />
      </div>
      {more.map((project) => (
        <a
          key={project.id}
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="group relative grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 px-4 py-5 transition-colors duration-300 hover:bg-paper hover:text-ink sm:grid-cols-[5rem_1fr_1fr_auto] sm:px-6"
        >
          <Rule />
          <span className="label opacity-60">{project.year}</span>
          <span className="display text-[2rem] leading-none">{project.name}</span>
          <span className="col-start-2 mt-2 text-[15px] opacity-75 sm:col-start-3 sm:mt-0">{project.tagline}</span>
          <span aria-hidden className="hidden text-xl transition-transform duration-300 group-hover:translate-x-1 sm:inline">↗</span>
        </a>
      ))}
    </section>
  );
}
