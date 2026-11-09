import { experience } from "../data/content";
import { LabelCell } from "./LabelCell";
import { Reveal } from "./Reveal";
import { Rule } from "./Rule";

export function Experience() {
  return (
    <section className="surface-paper">
      <LabelCell id="experience" note="2023 to now" title={"Where I\u2019ve been"} />
      <div className="wrap pb-[var(--section-gap-s)]">
        {experience.map((item) => (
          <Reveal
            key={item.id}
            className="relative grid gap-x-[var(--space-xl)] gap-y-[var(--space-md)] py-[var(--space-xl)] lg:grid-cols-12"
          >
            <Rule side="top" ink />
            <p className="label text-ink-mute lg:col-span-4">{item.range}</p>
            <div className="lg:col-span-4">
              <h3 className="display text-[2.1rem] leading-[1] sm:text-[2.5rem]">{item.role}</h3>
              <p className="label mt-[var(--space-sm)] text-ink-mute">
                {item.org}, {item.location}
              </p>
            </div>
            <p className="body-copy max-w-[58ch] text-ink-mute lg:col-span-4">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
