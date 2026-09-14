import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

function Word({ children, progress, range, reduce }: { children: string; progress: MotionValue<number>; range: [number, number]; reduce: boolean | null }) {
  // Function transforms keep this on Motion's JS scroll tracking; the native ViewTimeline path stalled short of 100% at the page end in Chrome.
  const t = useTransform(progress, (v) => Math.min(1, Math.max(0, (v - range[0]) / (range[1] - range[0]))));
  const y = useTransform(t, (v) => `${(1 - v) * 105}%`);
  const opacity = t;

  return (
    <span className="inline-block overflow-hidden align-bottom leading-[1]">
      <motion.span className="inline-block" style={reduce ? { opacity } : { y }}>
        {children}
      </motion.span>
    </span>
  );
}

export function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // 0 when the block's top enters the viewport, 1 when the page is scrolled to the very bottom.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  return (
    <div ref={ref} aria-hidden className="@container mx-3 pb-4 pt-32 sm:mx-4 sm:pb-6 sm:pt-48">
      <p className="hero-type select-none whitespace-nowrap text-[calc(100cqw/9.46)] leading-none">
        <Word progress={scrollYProgress} range={[0.2, 0.8]} reduce={reduce}>
          Suraj
        </Word>{" "}
        <Word progress={scrollYProgress} range={[0.35, 0.95]} reduce={reduce}>
          Patel
        </Word>
      </p>
    </div>
  );
}
