type Side = "top" | "bottom" | "left" | "right";

const POSITION: Record<Side, string> = {
  top: "inset-x-0 top-0 h-px",
  bottom: "inset-x-0 bottom-0 h-px",
  left: "inset-y-0 left-0 w-px",
  right: "inset-y-0 right-0 w-px",
};

const TONE = {
  paper: ["bg-rule", "bg-line"],
  ink: ["bg-ink/35", "bg-ink/15"],
};

/** A static 1px hairline along one edge. The parent must be `relative`. Pass `ink` on paper bands. */
export function Rule({ side = "bottom", className = "", soft = false, ink = false }: { side?: Side; className?: string; soft?: boolean; ink?: boolean }) {
  const [strong, light] = ink ? TONE.ink : TONE.paper;
  return <span aria-hidden className={`pointer-events-none absolute z-10 ${POSITION[side]} ${soft ? light : strong} ${className}`} />;
}
