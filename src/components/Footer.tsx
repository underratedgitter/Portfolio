export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-8 sm:pb-20">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--color-border)] pt-6 font-mono text-xs text-[var(--color-ink-faint)] sm:flex-row">
        <span>© {new Date().getFullYear()} Suraj Patel — built from scratch, deployed with care.</span>
        <span>designed &amp; built with React · Tailwind · Framer Motion</span>
      </div>
    </footer>
  );
}
