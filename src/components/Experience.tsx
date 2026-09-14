import { experience } from "../data/content";
import { LabelCell } from "./LabelCell";
import { Reveal } from "./Reveal";
import { Rule } from "./Rule";

export function Experience() {
  return (
    <section>
      <LabelCell
        id="experience"
        index="02"
        align="indent"
        note="2023 — now"
        title={
          <>
            Where I&rsquo;ve <em>been</em>
          </>
        }
      />
      {experience.map((item) => (
        <Reveal
          key={item.id}
          className="relative grid gap-x-6 gap-y-4 px-4 pb-8 pt-5 sm:px-6 md:grid-cols-[13rem_1fr_1.25fr]"
        >
          <Rule />
          <div className="flex items-center gap-2 self-start md:pt-3">
            {item.status === "current" && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
            <p className="label text-white/70">{item.range}</p>
          </div>
          <div>
            <h3 className="display text-[2.1rem] leading-[0.98] sm:text-[2.5rem]">{item.role}</h3>
            <p className="label mt-3 text-white/50">
              {item.org} · {item.location}
            </p>
          </div>
          <p className="max-w-[58ch] text-[15px] leading-[1.55] text-white/80">{item.description}</p>
        </Reveal>
      ))}
    </section>
  );
}
