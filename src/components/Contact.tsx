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
      className="inline-block rounded-full border border-white px-5 py-2.5 text-[15px] font-normal leading-none text-white transition-colors duration-300 hover:bg-white hover:text-black"
    >
      {state === "copied" ? "Copied ✓" : state === "failed" ? profile.email : "Copy email"}
    </button>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-14">
      <Rule />
      <div className="flex items-start justify-between px-4 pt-4 sm:px-6">
        <span className="label text-white/50">(05)</span>
        <span className="label text-white/50">Say hello</span>
      </div>
      <Reveal className="grid px-4 pb-24 pt-20 sm:px-6 sm:pb-36 sm:pt-28 lg:grid-cols-12">
        <h2 className="display max-w-[12ch] text-[4rem] leading-[0.88] sm:text-[8rem] lg:col-span-9">
          Let&rsquo;s build something <em>reliable.</em>
        </h2>
        <div className="mt-10 lg:col-span-5 lg:col-start-8 lg:mt-16">
          <p className="max-w-[40ch] text-[15px] leading-[1.6] text-white/70">
            Open to DevOps, cloud, and SRE roles, and interesting infrastructure problems in general.
          </p>

          <p className="display mt-10 text-[1.6rem] leading-none sm:text-[2rem]">
            <a href={`mailto:${profile.email}`} className="border-b border-white/40 pb-1 transition-colors duration-200 hover:border-white">
              {profile.email}
            </a>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
