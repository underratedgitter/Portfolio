const LEFT = [
  { href: "#work", label: "Work", mobile: true },
  { href: "#experience", label: "Experience", mobile: false },
  { href: "#about", label: "About", mobile: true },
];

const LINK = "label transition-colors duration-200 hover:text-mute";

export function NavBar() {
  // Solid rather than a translucent backdrop-blur: the blur re-rendered the full-width strip on every
  // scroll frame, which dropped frames on Retina screens with integrated graphics.
  return (
    <header className="sticky top-0 z-50 bg-ink">
      <nav aria-label="Sections" className="wrap relative grid h-14 grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="flex items-center gap-5 sm:gap-7">
          {LEFT.map((link) => (
            <a key={link.href} href={link.href} className={`${LINK} ${link.mobile ? "" : "hidden sm:inline"}`}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="#top" className="display text-[1.5rem] leading-none transition-colors duration-200 hover:text-mute">
          Suraj Patel
        </a>
        <div className="flex items-center justify-end gap-5 sm:gap-7">
          <a href="#contact" className={LINK}>
            Contact
          </a>
          <a href="/Suraj_Patel_Resume.pdf" target="_blank" rel="noreferrer" className={`${LINK} hidden sm:inline`}>
            Résumé
          </a>
        </div>
      </nav>
    </header>
  );
}
