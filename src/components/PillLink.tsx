import type { ReactNode } from "react";

export function PillLink({
  href,
  children,
  external,
  variant = "outline",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: "outline" | "solid";
}) {
  const styles =
    variant === "solid"
      ? "border-paper bg-paper text-ink hover:bg-transparent hover:text-paper"
      : "border-rule text-paper hover:border-paper hover:bg-paper hover:text-ink";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-block rounded-full border px-5 py-3 text-[15px] font-normal leading-none transition-[color,background-color,border-color] duration-300 ${styles}`}
    >
      {children}
    </a>
  );
}
