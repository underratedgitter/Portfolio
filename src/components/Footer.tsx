import { profile } from "../data/content";

const LINKS = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "LeetCode", href: profile.leetcode },
  { label: "Email", href: `mailto:${profile.email}` },
];

export function Footer() {
  return (
    <footer>
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="label transition-opacity duration-200 hover:opacity-50"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="label text-white/50">© {new Date().getFullYear()} · Bharuch, India</p>
      </div>
    </footer>
  );
}
