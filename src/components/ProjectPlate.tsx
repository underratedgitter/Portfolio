import type { ReactNode } from "react";
import { motion, useReducedMotion, type Easing, type Variants } from "motion/react";

const FONT = "'Geist Mono', ui-monospace, monospace";
const SERIF = "'Instrument Serif', 'Times New Roman', serif";
const EASE: Easing = [0.65, 0, 0.35, 1];
const STEP = 0.14;

// Every element takes a `custom` step number; its delay is step × STEP, so drawings build in reading order.
const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (s: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.8, delay: s * STEP, ease: EASE }, opacity: { duration: 0.1, delay: s * STEP } },
  }),
};

const fade: Variants = {
  hidden: { opacity: 0 },
  show: (s: number) => ({ opacity: 1, transition: { duration: 0.5, delay: s * STEP + 0.3 } }),
};

const arrowHead: Variants = {
  hidden: { opacity: 0 },
  show: (s: number) => ({ opacity: 1, transition: { duration: 0.15, delay: s * STEP + 0.7 } }),
};

const bar: Variants = {
  hidden: { width: 0 },
  show: ({ w, s, dur }: { w: number; s: number; dur: number }) => ({ width: w, transition: { duration: dur, delay: s * STEP, ease: "easeOut" } }),
};

function Box({ x, y, w, h, label, dashed, s }: { x: number; y: number; w: number; h: number; label: string; dashed?: boolean; s: number }) {
  return (
    <g>
      <motion.rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="#000"
        stroke="#fff"
        strokeWidth="1"
        strokeDasharray={dashed ? "4 4" : undefined}
        variants={dashed ? fade : draw}
        custom={s}
      />
      <motion.text
        x={x + w / 2}
        y={y + h / 2 + 4}
        textAnchor="middle"
        fontSize="12"
        fill="#fff"
        fontFamily={FONT}
        letterSpacing="0.02em"
        variants={fade}
        custom={s}
      >
        {label}
      </motion.text>
    </g>
  );
}

function Note({ x, y, children, anchor = "start", s }: { x: number; y: number; children: ReactNode; anchor?: "start" | "middle" | "end"; s: number }) {
  return (
    <motion.text x={x} y={y} fontSize="16" fill="#fff" fillOpacity="0.6" fontFamily={SERIF} fontStyle="italic" textAnchor={anchor} variants={fade} custom={s}>
      {children}
    </motion.text>
  );
}

function Mono({ x, y, children, anchor = "start", dim, s }: { x: number; y: number; children: ReactNode; anchor?: "start" | "middle" | "end"; dim?: boolean; s: number }) {
  return (
    <motion.text x={x} y={y} fontSize={dim ? 11 : 12} fill="#fff" fillOpacity={dim ? 0.55 : 1} fontFamily={FONT} textAnchor={anchor} variants={fade} custom={s}>
      {children}
    </motion.text>
  );
}

function Headline({ x, y, children, anchor = "start", s }: { x: number; y: number; children: ReactNode; anchor?: "start" | "middle"; s: number }) {
  return (
    <motion.text x={x} y={y} fontSize="22" fill="#fff" fontFamily={SERIF} textAnchor={anchor} variants={fade} custom={s}>
      {children}
    </motion.text>
  );
}

function Arrow({ d, id, dashed, s }: { d: string; id: string; dashed?: boolean; s: number }) {
  return (
    <g>
      <motion.path d={d} stroke="#fff" strokeWidth="1" fill="none" strokeDasharray={dashed ? "4 4" : undefined} variants={dashed ? fade : draw} custom={s} />
      <motion.path d={d} stroke="#fff" strokeOpacity={0} fill="none" markerEnd={`url(#arrow-${id})`} variants={arrowHead} custom={s} />
    </g>
  );
}

function Frame({ id, fig, title, children }: { id: string; fig: string; title: string; children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 640 480"
      className="block h-auto w-full"
      role="img"
      aria-label={`${title} diagram`}
      initial={reduce ? false : "hidden"}
      animate={reduce ? "show" : undefined}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.35 }}
    >
      <defs>
        <marker id={`arrow-${id}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#fff" />
        </marker>
      </defs>
      <rect width="640" height="480" fill="#000" />
      <Mono x={24} y={36} dim s={0}>
        {fig}
      </Mono>
      <Mono x={616} y={36} anchor="end" dim s={0}>
        {title}
      </Mono>
      {children}
    </motion.svg>
  );
}

function AegisPlate() {
  const id = "aegis";
  const stages = [
    { y: 98, label: "01  detect", note: "threshold + rolling z-score" },
    { y: 178, label: "02  correlate", note: "one incident, not ten alerts" },
    { y: 258, label: "03  investigate", note: "metrics · logs · runbooks" },
    { y: 338, label: "04  approve", note: "named approver, second call", dashed: true },
  ];
  return (
    <Frame id={id} fig="Fig. 01" title="Incident flow">
      <Box x={40} y={130} w={120} h={40} label="checkout" s={0} />
      <Box x={40} y={210} w={120} h={40} label="inventory" s={0.4} />
      <motion.path d="M160 150 H195 V120 M160 230 H195 V120" stroke="#fff" fill="none" variants={draw} custom={1} />
      <Arrow id={id} d="M195 120 H228" s={1.5} />
      {stages.map((stage, i) => {
        const s = 2 + i * 1.2;
        return (
          <g key={stage.label}>
            <Box x={230} y={stage.y} w={180} h={44} label={stage.label} dashed={stage.dashed} s={s} />
            <Note x={428} y={stage.y + 27} s={s + 0.5}>
              {stage.note}
            </Note>
            <Arrow id={id} d={`M320 ${stage.y + 44} V${i < stages.length - 1 ? stage.y + 78 : 420}`} s={s + 0.6} />
          </g>
        );
      })}
      <Note x={428} y={303} s={5.1}>
        · incident timeline
      </Note>
      <Headline x={320} y={446} anchor="middle" s={7.2}>
        bounded remediation
      </Headline>
    </Frame>
  );
}

function PipelinePlate() {
  const id = "cicd";
  const reduce = useReducedMotion();
  const stages = [
    { x: 100, w: 110, label: "lint & test" },
    { x: 230, w: 110, label: "audit" },
    { x: 360, w: 120, label: "build · scan" },
    { x: 500, w: 110, label: "deploy" },
  ];
  const ticks = [0, 1, 2, 3, 4, 5];

  return (
    <Frame id={id} fig="Fig. 02" title="Push to production">
      <motion.circle cx="50" cy="200" r="16" fill="#000" stroke="#fff" variants={draw} custom={0} />
      <Mono x={50} y={243} anchor="middle" s={0}>
        push
      </Mono>
      <Arrow id={id} d="M66 200 H98" s={0.6} />
      {stages.map((stage, i) => {
        const s = 1 + i * 0.9;
        return (
          <g key={stage.label}>
            <Box x={stage.x} y={176} w={stage.w} h={48} label={stage.label} s={s} />
            {i < stages.length - 1 && <Arrow id={id} d={`M${stage.x + stage.w} 200 H${stages[i + 1].x - 2}`} s={s + 0.5} />}
          </g>
        );
      })}
      <Note x={420} y={160} anchor="middle" s={2.8}>
        Trivy scan
      </Note>
      <Arrow id={id} d="M155 224 V300 H300" dashed s={2} />
      <Note x={308} y={305} s={2.4}>
        pull requests stop after the gates
      </Note>
      <Note x={555} y={255} anchor="middle" s={4.2}>
        by digest,
      </Note>
      <Note x={555} y={272} anchor="middle" s={4.2}>
        not by tag
      </Note>

      <Headline x={100} y={368} s={4.6}>
        push → live, under five minutes
      </Headline>
      <motion.line x1="100" y1="390" x2="610" y2="390" stroke="#fff" variants={draw} custom={5} />
      {ticks.map((t) => (
        <g key={t}>
          <motion.line x1={100 + t * 102} y1="384" x2={100 + t * 102} y2="396" stroke="#fff" variants={draw} custom={5.3 + t * 0.2} />
          <Mono x={100 + t * 102} y={420} anchor="middle" dim s={5.3 + t * 0.2}>
            {`${t} min`}
          </Mono>
        </g>
      ))}
      {!reduce && (
        <motion.circle
          cy="390"
          r="5"
          fill="#fff"
          variants={{
            hidden: { cx: 100, opacity: 0 },
            show: {
              cx: [100, 610],
              opacity: [0, 1, 1, 0],
              transition: { delay: 2.2, duration: 2.8, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" },
            },
          }}
        />
      )}
    </Frame>
  );
}

function TerraformPlate() {
  const id = "tf";
  return (
    <Frame id={id} fig="Fig. 03" title="AWS environment">
      <Mono x={370} y={78} anchor="middle" s={0}>
        internet
      </Mono>
      <Arrow id={id} d="M370 86 V118" s={0.4} />
      <motion.rect x="170" y="100" width="420" height="300" fill="none" stroke="#fff" strokeDasharray="4 4" variants={fade} custom={0.6} />
      <Note x={582} y={392} anchor="end" s={0.8}>
        VPC
      </Note>
      <motion.rect x="190" y="180" width="190" height="190" fill="none" stroke="#fff" strokeOpacity="0.45" strokeDasharray="2 4" variants={fade} custom={1.2} />
      <motion.rect x="390" y="180" width="180" height="190" fill="none" stroke="#fff" strokeOpacity="0.45" strokeDasharray="2 4" variants={fade} custom={1.4} />
      <Note x={200} y={360} s={1.4}>
        zone a
      </Note>
      <Note x={400} y={360} s={1.6}>
        zone b
      </Note>
      <Box x={210} y={120} w={340} h={40} label="application load balancer" s={2} />
      <Arrow id={id} d="M285 160 V238" s={2.8} />
      <Arrow id={id} d="M480 160 V238" s={3} />
      <Box x={215} y={240} w={140} h={56} label="ECS · EC2" s={3.4} />
      <Box x={410} y={240} w={140} h={56} label="ECS · EC2" s={3.6} />
      <Note x={380} y={220} anchor="middle" s={3.6}>
        ingress: ALB only
      </Note>
      <Box x={24} y={180} w={120} h={40} label="ECR" s={4.2} />
      <Box x={24} y={260} w={120} h={40} label="CloudWatch" s={4.5} />
      <Box x={24} y={340} w={120} h={40} label="S3 + lock" s={4.8} />
      <motion.path d="M215 268 H170 V200 H144 M170 268 V280 H144" stroke="#fff" strokeOpacity="0.6" fill="none" variants={draw} custom={5.2} />
      <Headline x={320} y={446} anchor="middle" s={6}>
        CI plans every pull request through OIDC. No long-lived keys.
      </Headline>
    </Frame>
  );
}

function RagPlate() {
  const id = "rag";
  const gpuWidth = Math.round(510 * (20 / 300));
  const barStep = 5.4;
  const cpuDuration = 2.6;

  return (
    <Frame id={id} fig="Fig. 04" title="Lecture to answer">
      <Box x={24} y={96} w={126} h={44} label="lecture.mp4" s={0} />
      <Arrow id={id} d="M150 118 H174" s={0.4} />
      <Box x={176} y={96} w={126} h={44} label="transcribe" s={0.7} />
      <Arrow id={id} d="M302 118 H326" s={1.1} />
      <Box x={328} y={96} w={126} h={44} label="chunk · embed" s={1.4} />
      <Arrow id={id} d="M454 118 H478" s={1.8} />
      <Box x={480} y={96} w={136} h={44} label="vector index" s={2.1} />
      <Note x={548} y={168} s={2.6}>
        1,000+ chunks
      </Note>
      <Arrow id={id} d="M548 140 V190 H391 V224" s={2.8} />

      <Box x={24} y={226} w={126} h={44} label="question" s={3.2} />
      <Arrow id={id} d="M150 248 H326" s={3.6} />
      <Note x={238} y={240} anchor="middle" s={3.9}>
        under one second
      </Note>
      <Box x={328} y={226} w={126} h={44} label="search" s={3.9} />
      <Arrow id={id} d="M454 248 H478" s={4.3} />
      <Box x={480} y={226} w={136} h={44} label="answer @ 12:48" s={4.6} />

      <Mono x={24} y={352} s={barStep - 1}>
        CPU
      </Mono>
      <motion.rect x="90" y="340" height="16" fill="#fff" fillOpacity="0.25" variants={bar} custom={{ w: 510, s: barStep, dur: cpuDuration }} />
      <Mono x={606} y={376} anchor="end" dim s={barStep + cpuDuration / STEP - 1.5}>
        5:00
      </Mono>
      <Mono x={24} y={412} s={barStep - 1}>
        GPU
      </Mono>
      <motion.rect x="90" y="400" height="16" fill="#fff" variants={bar} custom={{ w: gpuWidth, s: barStep, dur: 0.35 }} />
      <Mono x={100 + gpuWidth} y={413} s={barStep + 0.4}>
        0:20 — 15× faster
      </Mono>
    </Frame>
  );
}

const PLATES: Record<string, () => ReactNode> = {
  aegis: AegisPlate,
  cicd: PipelinePlate,
  terraform: TerraformPlate,
  rag: RagPlate,
};

export function ProjectPlate({ id }: { id: string }) {
  const Plate = PLATES[id];
  return Plate ? <Plate /> : null;
}
