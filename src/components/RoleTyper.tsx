import { useEffect, useState } from "react";

export function RoleTyper({ roles }: { roles: string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: number;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = window.setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
      } else {
        timeout = window.setTimeout(() => setPhase("pausing"), 1400);
      }
    } else if (phase === "pausing") {
      timeout = window.setTimeout(() => setPhase("deleting"), 900);
    } else {
      if (text.length > 0) {
        timeout = window.setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => window.clearTimeout(timeout);
  }, [text, phase, roleIndex, roles]);

  return (
    <span className="font-tnum">
      {text}
      <span className="animate-[blink_1.1s_steps(1)_infinite] text-[var(--color-accent)]">▍</span>
    </span>
  );
}
