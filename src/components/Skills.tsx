import { skillGroups } from "../data/content";
import { LabelCell } from "./LabelCell";
import { Reveal } from "./Reveal";
import { Rule } from "./Rule";

// Large-screen column spans out of 12, in reading order: rows of 7|5, 5|7, then 4|4|4, so no row ends on a lone group.
const LG_SPAN = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"];

export function Skills() {
  return (
    <section className="pb-[var(--section-gap)]">
      <LabelCell id="toolkit" note={`${skillGroups.length} disciplines`} title="The toolkit" />
      <div className="wrap grid gap-x-[var(--space-xl)] gap-y-[var(--space-xl)] sm:grid-cols-2 lg:grid-cols-12">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} className={`relative pt-6 ${LG_SPAN[i]}`}>
            <Rule side="top" />
            <h3 className="display text-[2rem] leading-none">{group.title}</h3>
            <ul className="mt-5 grid gap-x-6 gap-y-1.5 sm:grid-cols-[repeat(auto-fill,minmax(14rem,1fr))]">
              {group.items.map((item) => (
                <li key={item} className="label text-mute">
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
