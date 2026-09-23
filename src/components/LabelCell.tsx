import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Rule } from "./Rule";
import { Scramble } from "./Scramble";

type Align = "start" | "indent" | "end";

// Sections don't all hang their heading off the same edge; the shift is only applied once there's room for it.
const ALIGN: Record<Align, string> = {
  start: "",
  indent: "md:pl-[33.333%]",
  end: "md:text-right",
};

export function LabelCell({ index, title, note, id, align = "start" }: { index: string; title: ReactNode; note?: string; id?: string; align?: Align }) {
  return (
    <div id={id} className="relative scroll-mt-14 px-4 pb-6 pt-4 sm:px-6 sm:pb-8">
      <div className="flex items-start justify-between gap-6">
        <span className="label text-white/50">
          <Scramble text={`(${index})`} />
        </span>
        {note && (
          <span className="label text-right text-white/50">
            <Scramble text={note} delay={120} />
          </span>
        )}
      </div>
      <Reveal>
        <h2 className={`display mt-20 text-[3.8rem] sm:mt-28 sm:text-[6.5rem] ${ALIGN[align]}`}>{title}</h2>
      </Reveal>
      <Rule />
    </div>
  );
}
