import { useEffect, useRef } from "react";
import * as m from "motion/react-m";
import { useMotionValue, useReducedMotion, useTransform, type MotionValue } from "motion/react";

function Word({ children, progress, range, reduce }: { children: string; progress: MotionValue<number>; range: [number, number]; reduce: boolean | null }) {
  const t = useTransform(progress, (v) => Math.min(1, Math.max(0, (v - range[0]) / (range[1] - range[0]))));
  const y = useTransform(t, (v) => `${(1 - v) * 105}%`);
  const opacity = t;

  return (
    <span className="inline-block overflow-hidden align-bottom leading-[1]">
      <m.span className="inline-block" style={reduce ? { opacity } : { y }}>
        {children}
      </m.span>
    </span>
  );
}

export function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // 0 when the block's top enters the viewport, 1 when the page is scrolled to the very bottom.
  const progress = useMotionValue(0);

  // Motion's useScroll re-measures the page (offsetTop/offsetLeft, scrollHeight) on every scroll event,
  // forcing a layout mid-scroll. Measure once, and again only when the page resizes; each scroll then
  // maps window.scrollY (which never forces layout) with plain arithmetic.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = 0;
    let end = 1;

    const update = () => progress.set(Math.min(1, Math.max(0, (window.scrollY - start) / Math.max(1, end - start))));
    const measure = () => {
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      start = top - window.innerHeight;
      // Capped at the real scroll limit so the end state is always reachable (the old native timeline stalled short of it).
      end = Math.min(top + rect.height - window.innerHeight, maxScroll);
      update();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", update);
    };
  }, [progress]);

  return (
    <div ref={ref} aria-hidden className="@container mx-3 pb-4 pt-32 sm:mx-4 sm:pb-6 sm:pt-48">
      <p className="hero-type select-none whitespace-nowrap text-[calc(100cqw/9.46)] leading-none">
        <Word progress={progress} range={[0.2, 0.8]} reduce={reduce}>
          Suraj
        </Word>{" "}
        <Word progress={progress} range={[0.35, 0.95]} reduce={reduce}>
          Patel
        </Word>
      </p>
    </div>
  );
}
