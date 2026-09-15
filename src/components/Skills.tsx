import { skillGroups } from "../data/content";
import { LabelCell } from "./LabelCell";
import { Reveal } from "./Reveal";
import { Rule } from "./Rule";

// Large-screen column spans out of 12, in reading order: rows of 7|5, 4|8, then 3|5|4.
const SPANS = [7, 5, 4, 8, 3, 5, 4];
const LG_SPAN: Record<number, string> = { 3: "lg:col-span-3", 4: "lg:col-span-4", 5: "lg:col-span-5", 7: "lg:col-span-7", 8: "lg:col-span-8" };

// A cell gets a right-hand rule on large screens unless it closes its row of 12.
// Derived once from the constant spans, so render stays free of mutation.
const ENDS_ROW = SPANS.map((_, i) => SPANS.slice(0, i + 1).reduce((sum, span) => sum + span, 0) % 12 === 0);

export function Skills() {
  return (
    <section>
      <LabelCell
        id="toolkit"
        index="03"
        note={`${skillGroups.length} disciplines`}
        title={
          <>
            The <em>toolkit</em>
          </>
        }
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-12">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} className={`relative px-4 pb-8 pt-4 sm:px-6 ${LG_SPAN[SPANS[i % SPANS.length]]}`}>
            <Rule />
            <Rule
              side="right"
              className={`hidden ${i % 2 === 0 ? "sm:block" : "sm:hidden"} ${ENDS_ROW[i % SPANS.length] ? "lg:hidden" : "lg:block"}`}
            />
            <p className="label text-white/55">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="display mt-8 text-[2rem] leading-none">{group.title}</h3>
            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-[14px] leading-snug text-white/70">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
