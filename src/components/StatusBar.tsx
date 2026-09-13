import { useISTClock, useUptime } from "../hooks/useClock";

export function StatusBar({ active }: { active: string }) {
  const time = useISTClock();
  const uptime = useUptime();

  return (
    <div className="fixed bottom-0 z-40 hidden w-full border-t border-[var(--color-border)] bg-[#05070a]/90 backdrop-blur-md sm:block">
      <div className="mx-auto flex h-8 max-w-6xl items-center justify-between px-5 font-mono text-[11px] text-[var(--color-ink-faint)] sm:px-8">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[var(--color-accent)]">
            <span className="h-1.5 w-1.5 animate-[pulse-dot_2.4s_cubic-bezier(0.16,1,0.3,1)_infinite] rounded-full bg-[var(--color-accent)]" />
            operational
          </span>
          <span className="hidden md:inline">Bharuch, IN · 21.7°N 72.9°E</span>
        </div>
        <div className="flex items-center gap-4 font-tnum">
          <span className="hidden md:inline">uptime {uptime}</span>
          <span>section: {active || "top"}</span>
          <span>{time} IST</span>
        </div>
      </div>
    </div>
  );
}
