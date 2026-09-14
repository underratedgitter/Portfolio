import { proofs } from "../data/content";
import { LabelCell } from "./LabelCell";
import { Reveal } from "./Reveal";
import { Rule } from "./Rule";

// Column spans out of 12; each pair of cells shares a row, and no row splits evenly.
const SPANS = ["md:col-span-7 lg:col-span-8", "md:col-span-5 lg:col-span-4", "md:col-span-5 lg:col-span-4", "md:col-span-7 lg:col-span-8", "md:col-span-7", "md:col-span-5"];

export function Proofs() {
  return (
    <section>
      <LabelCell
        index="00"
        note={`${proofs.length} receipts`}
        title={
          <>
            What the work <em>shows</em>
          </>
        }
      />
      <div className="grid md:grid-cols-12">
        {proofs.map((proof, i) => (
          <Reveal
            key={proof.source}
            className={`relative flex min-h-56 flex-col justify-between gap-12 px-4 pb-5 pt-5 sm:px-6 ${SPANS[i % SPANS.length]}`}
          >
            <Rule />
            {i % 2 === 0 && <Rule side="right" className="hidden md:block" />}
            <p className="display max-w-[22ch] text-[2rem] leading-[1] sm:text-[2.35rem]">{proof.claim}</p>
            <div className="flex items-center justify-between gap-4">
              <p className="label text-white/60">{proof.source}</p>
              <p className="label text-white/50">{String(i + 1).padStart(2, "0")}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
