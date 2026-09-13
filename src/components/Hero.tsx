import { motion, useReducedMotion, type Easing } from "framer-motion";
import { profile } from "../data/content";
import { RoleTyper } from "./RoleTyper";

const EASE: Easing = [0.16, 1, 0.3, 1];

const SOCIALS = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "LeetCode", href: profile.leetcode },
  { label: "Email", href: `mailto:${profile.email}` },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const fadeUp = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  return (
    <section id="top" className="relative flex min-h-screen items-center pt-14">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <motion.p
              {...fadeUp(0)}
              className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              status: available for interesting problems
            </motion.p>

            <motion.h1
              {...fadeUp(0.08)}
              className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--color-ink)] sm:text-6xl"
            >
              Suraj Patel
            </motion.h1>

            <motion.div
              {...fadeUp(0.16)}
              className="mt-4 h-8 font-mono text-lg text-[var(--color-ink-dim)] sm:text-xl"
            >
              <RoleTyper roles={profile.roles} />
            </motion.div>

            <motion.p
              {...fadeUp(0.24)}
              className="mt-6 max-w-[62ch] text-base leading-relaxed text-[var(--color-ink-dim)] sm:text-lg"
            >
              I build the pipeline that ships the code, the telemetry that tells you it broke, and the
              system that works out why. Currently a Software &amp; Solutions Architect building software
              that keeps manufacturing lines running.
            </motion.p>

            <motion.div {...fadeUp(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded border border-[var(--color-accent)] bg-[var(--color-accent-soft)] px-5 py-2.5 font-mono text-sm font-medium text-[var(--color-accent)] transition-transform duration-150 hover:-translate-y-0.5"
              >
                view projects
              </a>
              <a
                href="#contact"
                className="rounded border border-[var(--color-border-strong)] px-5 py-2.5 font-mono text-sm text-[var(--color-ink)] transition-colors duration-150 hover:border-[var(--color-ink)]"
              >
                get in touch
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.4)}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-[var(--color-ink-faint)]"
            >
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="transition-colors duration-150 hover:text-[var(--color-accent)]"
                >
                  {s.label} ↗
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.2)} className="panel corner-brackets rounded-lg p-4 font-mono text-[13px] leading-relaxed shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
            <div className="mb-3 flex items-center gap-1.5 border-b border-[var(--color-border)] pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-[var(--color-ink-faint)]">whoami.sh</span>
            </div>
            <p className="text-[var(--color-ink-dim)]">
              <span className="text-[var(--color-accent)]">$</span> whoami
            </p>
            <p className="mt-1 text-[var(--color-ink)]">suraj_patel</p>
            <p className="mt-3 text-[var(--color-ink-dim)]">
              <span className="text-[var(--color-accent)]">$</span> cat focus.txt
            </p>
            <p className="mt-1 text-[var(--color-ink)]">
              observability · incident response
              <br />
              CI/CD · cloud infra · reliability
            </p>
            <p className="mt-3 text-[var(--color-ink-dim)]">
              <span className="text-[var(--color-accent)]">$</span> curl status.suraj/health
            </p>
            <p className="mt-1 text-[var(--color-accent)]">200 OK — all systems nominal</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
