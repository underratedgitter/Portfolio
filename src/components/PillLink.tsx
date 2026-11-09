import type { ReactNode } from "react";

type Variant = "outline" | "solid" | "ink";

const STYLES: Record<Variant, string> = {
  solid: "border-accent bg-accent text-ink hover:border-ink hover:bg-ink hover:text-accent",
  outline: "border-rule text-paper hover:border-paper hover:bg-paper hover:text-ink",
  // The outline button for paper bands.
  ink: "border-ink text-ink hover:bg-ink hover:text-paper",
};

export function PillLink({
  href,
  children,
  external,
  variant = "outline",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: Variant;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-block border px-6 py-3.5 text-[15px] font-normal leading-none whitespace-nowrap transition-[color,background-color,border-color] duration-300 ${STYLES[variant]}`}
    >
      {children}
    </a>
  );
}
