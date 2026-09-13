import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

export function NavBar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "border-b border-[var(--color-border)] bg-[#05070a]/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-[var(--color-ink)]"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded border border-[var(--color-border-strong)] text-[var(--color-accent)]">
            &gt;
          </span>
          suraj<span className="text-[var(--color-accent)]">@</span>patel
        </a>

        <nav className="hidden items-center gap-1 font-mono text-[13px] md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded px-3 py-1.5 transition-colors duration-150 ${
                active === link.id
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]"
              }`}
            >
              {active === link.id ? "// " : ""}
              {link.label}
            </a>
          ))}
          <a
            href="/Suraj_Patel_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded border border-[var(--color-border-strong)] px-3 py-1.5 text-[var(--color-ink)] transition-colors duration-150 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            resume.pdf
          </a>
        </nav>

        <button
          className="flex h-8 w-8 items-center justify-center rounded border border-[var(--color-border-strong)] text-[var(--color-ink)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="font-mono text-sm">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-[var(--color-border)] bg-[#05070a] px-5 py-3 font-mono text-sm md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`border-b border-[var(--color-border)] py-3 last:border-none ${
                active === link.id ? "text-[var(--color-accent)]" : "text-[var(--color-ink-dim)]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Suraj_Patel_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="py-3 text-[var(--color-ink)]"
          >
            resume.pdf ↗
          </a>
        </nav>
      )}
    </header>
  );
}
