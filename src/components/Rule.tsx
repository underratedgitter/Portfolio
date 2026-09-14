type Side = "top" | "bottom" | "left" | "right";

const POSITION: Record<Side, string> = {
  top: "inset-x-0 top-0 h-px",
  bottom: "inset-x-0 bottom-0 h-px",
  left: "inset-y-0 left-0 w-px",
  right: "inset-y-0 right-0 w-px",
};

/** A static 1px white hairline along one edge. The parent must be `relative`. */
export function Rule({ side = "bottom", className = "", soft = false }: { side?: Side; className?: string; soft?: boolean }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-10 ${POSITION[side]} ${soft ? "bg-white/30" : "bg-white"} ${className}`}
    />
  );
}
