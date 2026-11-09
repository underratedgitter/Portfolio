import { profile } from "../data/content";

const LINKS = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "LeetCode", href: profile.leetcode },
  { label: "Email", href: `mailto:${profile.email}` },
];

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="surface-paper">
      <ul className="wrap grid grid-cols-2 lg:grid-cols-4">
        {LINKS.map((link) => (
          <li key={link.label} className="border-t border-ink/35">
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="display block py-[var(--space-xl)] text-[2.4rem] transition-colors duration-200 hover:text-ink-mute sm:text-[3.2rem]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="wrap label pb-[var(--space-lg)] text-ink-mute">
        © {YEAR} Suraj Patel, Bharuch, India
      </p>
    </footer>
  );
}
