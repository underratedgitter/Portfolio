import { Scramble } from "./Scramble";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  // Solid rather than a translucent backdrop-blur: the blur re-rendered the full-width strip on every
  // scroll frame, which dropped frames on Retina screens with integrated graphics. On this all-black
  // site it looks the same.
  return (
    <header className="sticky top-0 z-50 border-b border-white bg-black">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="display text-[1.35rem] leading-none transition-opacity duration-200 hover:opacity-60">
          Suraj <em>Patel</em>
        </a>
        <nav className="flex items-center gap-5 sm:gap-7">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`label transition-opacity duration-200 hover:opacity-50 ${link.href === "#experience" ? "hidden sm:inline" : ""}`}
            >
              <Scramble text={link.label} trigger="hover" />
            </a>
          ))}
          <a
            href="/Suraj_Patel_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="label hidden transition-opacity duration-200 hover:opacity-50 sm:inline"
          >
            <Scramble text="Résumé" trigger="hover" /> <span aria-hidden>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
