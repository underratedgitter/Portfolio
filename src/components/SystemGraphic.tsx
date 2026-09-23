import { useEffect, useRef } from "react";
import * as m from "motion/react-m";
import { useInView, useReducedMotion } from "motion/react";
import { animate, svg, type JSAnimation } from "animejs";

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

// Request paths through the graph; each one carries a travelling packet. Every hop is an edge above.
const ROUTES = [
  { hops: ["a", "b", "c", "d", "e", "i"], duration: 5200, delay: 1800 },
  { hops: ["h", "g", "f", "i"], duration: 3800, delay: 2600 },
  { hops: ["a", "h", "g", "c", "f"], duration: 4400, delay: 3400 },
];

const routePath = (hops: string[]) => hops.map((id, i) => `${i ? "L" : "M"}${byId[id].x} ${byId[id].y}`).join(" ");

export function SystemGraphic({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<SVGSVGElement>(null);
  // The pulsing nodes repaint this large masked layer every frame; stop them once the hero is scrolled away.
  const onScreen = useInView(ref);
  const packets = useRef<JSAnimation[]>([]);

  useEffect(() => {
    const root = ref.current;
    if (!root || reduceMotion) return;
    packets.current = ROUTES.map((route, i) =>
      animate(root.querySelector(`[data-packet="${i}"]`)!, {
        ...svg.createMotionPath(root.querySelector(`[data-route="${i}"]`)!),
        opacity: [0, 1, 1, 0],
        duration: route.duration,
        delay: route.delay,
        loopDelay: 900 + i * 700,
        loop: true,
        ease: "inOutSine",
      }),
    );
    return () => {
      packets.current.forEach((a) => a.revert());
      packets.current = [];
    };
  }, [reduceMotion]);

  // Same reason as the pulsing nodes: no per-frame work while the hero is out of view.
  useEffect(() => {
    packets.current.forEach((a) => (onScreen ? a.play() : a.pause()));
  }, [onScreen]);

  return (
    <svg ref={ref} aria-hidden viewBox="0 0 640 380" preserveAspectRatio="xMidYMid slice" className={className}>
      <g stroke="currentColor" strokeWidth="0.6">
        {EDGES.map(([from, to], i) => {
          const a = byId[from];
          const b = byId[to];
          return reduceMotion ? (
            <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} strokeOpacity={0.35} />
          ) : (
            <m.line
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
      {!reduceMotion && (
        <g>
          {ROUTES.map((route, i) => (
            <path key={i} data-route={i} d={routePath(route.hops)} fill="none" stroke="none" />
          ))}
          {ROUTES.map((_, i) => (
            <rect key={i} data-packet={i} x={-3} y={-1} width={6} height={2} fill="currentColor" opacity={0} />
          ))}
        </g>
      )}
      <g fill="currentColor">
        {NODES.map((n, i) =>
          reduceMotion ? (
            <circle key={n.id} cx={n.x} cy={n.y} r={n.r} />
          ) : (
            <m.circle
              key={n.id}
              cx={n.x}
              cy={n.y}
              r={n.r}
              initial={{ opacity: 0 }}
              animate={onScreen ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.4 }}
              transition={onScreen ? { duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 } : { duration: 0.4 }}
            />
          ),
        )}
      </g>
    </svg>
  );
}
