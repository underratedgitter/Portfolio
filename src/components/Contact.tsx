import { profile } from "../data/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <Reveal>
        <div className="panel corner-brackets rounded-2xl px-6 py-14 text-center sm:px-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
            05 // contact
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Building something that needs to stay up? Let's talk.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[var(--color-ink-dim)]">
            Open to DevOps, cloud, and SRE roles, and interesting infrastructure problems in general.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded border border-[var(--color-accent)] bg-[var(--color-accent-soft)] px-6 py-3 font-mono text-sm font-medium text-[var(--color-accent)] transition-transform duration-150 hover:-translate-y-0.5"
            >
              {profile.email}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-sm text-[var(--color-ink-faint)]">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">
              LinkedIn ↗
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">
              LeetCode ↗
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
