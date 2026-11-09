import * as m from "motion/react-m";
import { useReducedMotion, type Easing } from "motion/react";
import { profile } from "../data/content";
import { PillLink } from "./PillLink";

const EASE: Easing = [0.16, 1, 0.3, 1];

function MaskedLine({ children, delay, className = "" }: { children: string; delay: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <span className={`block overflow-hidden leading-[1.04] ${className}`}>
      <m.span
        className="inline-block"
        initial={reduceMotion ? false : { y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </m.span>
    </span>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const fade = (delay: number) =>
    reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1, delay, ease: EASE } };

  return (
    <section id="top" className="flex min-h-[calc(100svh-var(--nav-height))] flex-col">
      <div className="wrap flex flex-1 items-center py-[var(--space-2xl)]">
        <div className="@container w-full">
          <h1 className="hero-type max-w-none whitespace-nowrap text-[min(calc(100cqw/5.9),20svh)]">
            <MaskedLine delay={0.15}>Suraj</MaskedLine>
            <MaskedLine delay={0.28} className="-mt-[0.08em] text-right">
              Patel
            </MaskedLine>
          </h1>
        </div>
      </div>

      <m.div {...fade(0.5)} className="surface-paper">
        <div className="wrap grid items-end gap-x-[var(--space-2xl)] gap-y-[var(--space-xl)] py-[var(--space-2xl)] lg:grid-cols-12">
          <p className="display max-w-[30ch] text-[2.2rem] leading-[1] sm:text-[3rem] lg:col-span-8">
            I build the pipelines, telemetry and systems that explain why code broke.
          </p>
          <div className="flex flex-wrap items-center gap-[var(--space-md)] lg:col-span-4 lg:justify-end">
            <PillLink href={`mailto:${profile.email}`} variant="solid">
              Start a conversation
            </PillLink>
            <PillLink href="/Suraj_Patel_Resume.pdf" external variant="ink">
              Résumé
            </PillLink>
          </div>
        </div>
      </m.div>
    </section>
  );
}
