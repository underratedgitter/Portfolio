import { proofs } from "../data/content";
import { LabelCell } from "./LabelCell";
import { Reveal } from "./Reveal";
import { Rule } from "./Rule";

export function Proofs() {
  return (
    <section className="pb-[var(--section-gap-s)]">
      <LabelCell note={`${proofs.length} receipts`} title="What the work shows" />
      <div className="wrap relative">
        <Rule side="top" />
        {proofs.map((proof) => (
          <Reveal
            key={proof.source}
            className="relative grid gap-x-[var(--space-xl)] gap-y-[var(--space-sm)] py-[var(--space-xl)] md:grid-cols-12 md:items-baseline"
          >
            <p className="display text-[1.9rem] leading-[1.08] md:col-span-8 md:text-[2.4rem]">{proof.claim}</p>
            <p className="label text-mute md:col-span-4">{proof.source}</p>
            <Rule />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
