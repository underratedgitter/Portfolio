import { useEffect, useRef } from "react";
import { animate, scrambleText } from "animejs";
import { useReducedMotion } from "motion/react";

type Trigger = "view" | "hover";

// Terminal-style decode for short mono labels. The label font is monospaced and uppercase,
// so the scrambled glyphs never change the text's width.
// "view" decodes once when the text scrolls into sight; "hover" re-decodes whenever the nearest link is hovered.
export function Scramble({ text, trigger = "view", delay = 0 }: { text: string; trigger?: Trigger; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;

    let anim: ReturnType<typeof animate> | undefined;
    const run = (d: number) => {
      anim?.revert();
      anim = animate(el, {
        innerHTML: scrambleText({ text, chars: "A-Z0-9#%_/", settleDuration: 260, revealRate: 45, delay: d }),
      });
    };

    if (trigger === "hover") {
      const host = el.closest("a, button") ?? el;
      const onEnter = () => run(0);
      host.addEventListener("pointerenter", onEnter);
      return () => {
        host.removeEventListener("pointerenter", onEnter);
        anim?.revert();
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        run(delay);
      },
      { rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      anim?.revert();
    };
  }, [text, trigger, delay, reduceMotion]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden>
        {text}
      </span>
    </>
  );
}
