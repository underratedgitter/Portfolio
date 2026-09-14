const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white bg-black/85 backdrop-blur-md">
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
              {link.label}
            </a>
          ))}
          <a
            href="/Suraj_Patel_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="label hidden transition-opacity duration-200 hover:opacity-50 sm:inline"
          >
            Résumé <span aria-hidden>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
