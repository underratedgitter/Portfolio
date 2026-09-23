import { useEffect, useState } from "react";
import * as m from "motion/react-m";
import { useReducedMotion, type Easing } from "motion/react";
import { profile } from "../data/content";
import { SystemGraphic } from "./SystemGraphic";
import { PillLink } from "./PillLink";
import { Rule } from "./Rule";
import { Scramble } from "./Scramble";

const EASE: Easing = [0.16, 1, 0.3, 1];

const INDEX = [
  { n: "01", label: "Selected work", href: "#work" },
  { n: "02", label: "Experience", href: "#experience" },
  { n: "03", label: "Toolkit", href: "#toolkit" },
  { n: "04", label: "About", href: "#about" },
  { n: "05", label: "Contact", href: "#contact" },
];

function formatIST(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function LocalTime() {
  const [time, setTime] = useState(() => formatIST(new Date()));
  useEffect(() => {
    const id = window.setInterval(() => setTime(formatIST(new Date())), 1000);
    return () => window.clearInterval(id);
  }, []);
  return <>{time} IST</>;
}

function MaskedLine({ children, delay, className = "", tracking }: { children: string; delay: number; className?: string; tracking: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <span className={`block overflow-hidden leading-[1] ${className}`}>
      <m.span
        className="inline-block"
        style={{ letterSpacing: tracking }}
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

  const meta = [
    { k: "Discipline", v: "DevOps · Cloud · SRE" },
    { k: "Currently", v: "D-Tech Solution Integrators" },
    { k: "Based in", v: "Bharuch, India" },
    { k: "Local time", v: <LocalTime /> },
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      <m.dl {...fade(0.1)} className="relative grid grid-cols-2 md:grid-cols-[1fr_1.6fr_1.15fr_0.75fr]">
        {meta.map((m, i) => (
          <div key={m.k} className="relative px-4 py-3 sm:px-6">
            {i !== 3 && <Rule side="right" className={i === 1 ? "hidden md:block" : ""} />}
            {i < 2 && <Rule className="md:hidden" />}
            <dt className="label text-white/50">{m.k}</dt>
            <dd className="label mt-1.5 text-white">{typeof m.v === "string" ? <Scramble text={m.v} delay={250 + i * 120} /> : m.v}</dd>
          </div>
        ))}
        <Rule />
      </m.dl>

      <div className="relative">
        <SystemGraphic className="pointer-events-none absolute inset-0 h-full w-full text-white opacity-45 [mask-composite:intersect] [mask-image:linear-gradient(to_left,#000_28%,transparent_62%),linear-gradient(to_bottom,#000_55%,transparent_80%)]" />

        <div className="relative px-4 pt-10 sm:px-6 sm:pt-14">
          <m.p {...fade(0.2)} className="label -ml-2 inline-flex items-center gap-2 bg-black px-2 py-1.5 text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Open to DevOps, cloud &amp; SRE roles
          </m.p>

          <div className="@container mt-6 sm:mt-8">
            <h1 className="hero-type whitespace-nowrap text-[min(calc(100cqw/5.9),18svh)]">
              <MaskedLine delay={0.15} tracking="0em">
                Suraj
              </MaskedLine>
              <MaskedLine delay={0.28} tracking="0em" className="-mt-[0.26em] text-right">
                Patel
              </MaskedLine>
            </h1>
          </div>

          <m.div {...fade(0.45)} className="label relative mt-6 flex items-center justify-between pb-4 pt-3 text-white/55 sm:mt-8">
            <Rule side="top" soft />
            <span>Portfolio · {new Date().getFullYear()}</span>
            <span className="hidden sm:inline">Pipelines · Telemetry · Reliability</span>
            <span>Scroll ↓</span>
          </m.div>
        </div>
      </div>

      <div className="relative grid bg-black lg:grid-cols-12">
        <Rule side="top" />
        <m.div {...fade(0.55)} className="relative px-4 pb-10 pt-6 sm:px-6 lg:col-span-8">
          <Rule className="lg:hidden" />
          <Rule side="right" className="hidden lg:block" />
          <p className="label text-white/50">Statement</p>
          <p className="display mt-5 max-w-[20ch] text-[2.4rem] leading-[0.98] sm:text-[3.4rem]">
            I build the <em>pipelines</em> that ship code, the <em>telemetry</em> that says it broke, and the <em>systems</em> that work out why.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PillLink href={`mailto:${profile.email}`} variant="solid">
              Start a conversation
            </PillLink>
            <PillLink href="/Suraj_Patel_Resume.pdf" external>
              Résumé <span aria-hidden>↗</span>
            </PillLink>
          </div>
        </m.div>

        <m.nav {...fade(0.7)} aria-label="Sections" className="flex flex-col lg:col-span-4">
          <p className="label relative px-4 py-3 text-white/50 sm:px-6">
            Index
            <Rule />
          </p>
          {INDEX.map((item, i) => (
            <a
              key={item.n}
              href={item.href}
              className="group relative flex flex-1 items-center justify-between px-4 py-4 transition-colors duration-300 hover:bg-white hover:text-black sm:px-6"
            >
              {i < INDEX.length - 1 && <Rule />}
              <span className="flex items-baseline gap-5">
                <span className="label opacity-50">{item.n}</span>
                <span className="display text-[2rem] leading-none sm:text-[2.4rem]">{item.label}</span>
              </span>
              <span aria-hidden className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          ))}
        </m.nav>
      </div>
      <Rule />
    </section>
  );
}
