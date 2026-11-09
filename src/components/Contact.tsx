import { useState } from "react";
import { profile } from "../data/content";
import { PillLink } from "./PillLink";
import { Reveal } from "./Reveal";
import { Rule } from "./Rule";

function CopyEmailButton() {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.setTimeout(() => setState("idle"), 2200);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-block border border-rule px-6 py-3.5 text-[15px] font-normal leading-none text-paper transition-[color,background-color,border-color] duration-300 hover:border-paper hover:bg-paper hover:text-ink"
    >
      {state === "copied" ? "Copied ✓" : state === "failed" ? profile.email : "Copy email"}
    </button>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-y relative scroll-mt-14">
      <Rule />
      <Reveal className="wrap grid gap-x-[var(--space-2xl)] gap-y-[var(--space-xl)] lg:grid-cols-12">
        <h2 className="display max-w-[14ch] text-[3.8rem] sm:text-[6.5rem] lg:col-span-12">Let&rsquo;s build something reliable.</h2>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="max-w-[40ch] body-copy text-mute">
            Open to DevOps, cloud, and SRE roles, and interesting infrastructure problems in general.
          </p>

          <p className="display mt-[var(--space-xl)] text-[1.6rem] leading-none sm:text-[2rem]">
            <a href={`mailto:${profile.email}`} className="border-b border-line-strong pb-1 transition-colors duration-200 hover:border-paper">
              {profile.email}
            </a>
          </p>

          <div className="mt-[var(--space-lg)] flex flex-wrap gap-3">
            <PillLink href={`mailto:${profile.email}`} variant="solid">
              Email me
            </PillLink>
            <CopyEmailButton />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
