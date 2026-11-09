import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Align = "start" | "indent" | "end";

// Sections don't all hang their heading off the same edge; the shift is only applied once there's room for it.
const ALIGN: Record<Align, string> = {
  start: "",
  indent: "md:pl-[33.333%]",
  end: "md:text-right",
};

/** A section head: the serif title at section scale with an optional plain-text note beneath. Inherits the surface's colours. */
export function LabelCell({ title, note, id, align = "start" }: { title: ReactNode; note?: string; id?: string; align?: Align }) {
  return (
    <div id={id} className="wrap scroll-mt-14 pb-[var(--space-xl)] pt-[var(--section-gap-s)]">
      <Reveal>
        <h2 className={`display text-[3.8rem] sm:text-[6.5rem] ${ALIGN[align]}`}>{title}</h2>
        {note && <p className={`label mt-[var(--space-lg)] opacity-60 ${align === "end" ? "md:text-right" : ""}`}>{note}</p>}
      </Reveal>
    </div>
  );
}
