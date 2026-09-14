import { motion, useReducedMotion } from "motion/react";

const NODES = [
  { id: "a", x: 70, y: 110, r: 3 },
  { id: "b", x: 210, y: 60, r: 2.5 },
  { id: "c", x: 330, y: 160, r: 4 },
  { id: "d", x: 470, y: 70, r: 2.5 },
  { id: "e", x: 580, y: 200, r: 3 },
  { id: "f", x: 390, y: 290, r: 2.5 },
  { id: "g", x: 210, y: 260, r: 2.5 },
  { id: "h", x: 60, y: 300, r: 2.5 },
  { id: "i", x: 530, y: 330, r: 3 },
];

const EDGES: [string, string][] = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
  ["d", "e"],
  ["c", "f"],
  ["f", "g"],
  ["g", "h"],
  ["h", "a"],
  ["c", "g"],
  ["e", "i"],
  ["f", "i"],
];

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

export function SystemGraphic({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <svg aria-hidden viewBox="0 0 640 380" preserveAspectRatio="xMidYMid slice" className={className}>
      <g stroke="currentColor" strokeWidth="0.6">
        {EDGES.map(([from, to], i) => {
          const a = byId[from];
          const b = byId[to];
          return reduceMotion ? (
            <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} strokeOpacity={0.35} />
          ) : (
            <motion.line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              initial={{ pathLength: 0, strokeOpacity: 0 }}
              animate={{ pathLength: 1, strokeOpacity: 0.35 }}
              transition={{ duration: 1.6, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            />
          );
        })}
      </g>
      <g fill="currentColor">
        {NODES.map((n, i) =>
          reduceMotion ? (
            <circle key={n.id} cx={n.x} cy={n.y} r={n.r} />
          ) : (
            <motion.circle
              key={n.id}
              cx={n.x}
              cy={n.y}
              r={n.r}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            />
          ),
        )}
      </g>
    </svg>
  );
}
