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
      ? "bg-white text-black hover:bg-transparent hover:text-white"
      : "text-white hover:bg-white hover:text-black";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-block rounded-full border border-white px-5 py-2.5 text-[15px] font-normal leading-none transition-colors duration-300 ${styles}`}
    >
      {children}
    </a>
  );
}
