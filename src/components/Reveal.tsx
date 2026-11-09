import * as m from "motion/react-m";
import { useReducedMotion, type Easing } from "motion/react";
import type { ReactNode } from "react";

const EASE: Easing = [0.16, 1, 0.3, 1];

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      // A full `transform` (not Motion's `y`) lets Motion hand the animation to the browser's compositor,
      // so reveals stay smooth while the page scrolls even if the main thread is busy.
      initial={{ opacity: 0, transform: "translateY(20px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      {children}
    </m.div>
  );
}
