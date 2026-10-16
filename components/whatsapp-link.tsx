import type { ReactNode } from "react";
import { whatsappHref } from "@/lib/site";

type WhatsappLinkProps = {
  message: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "green" | "ghost";
};

const variants = {
  primary:
    "inline-flex items-center justify-center gap-2 bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue",
  green:
    "inline-flex items-center justify-center gap-2 bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#187341]",
  ghost:
    "inline-flex items-center justify-center gap-2 border border-mist bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-steel-mid hover:bg-paper",
};

export function WhatsappLink({
  message,
  children,
  className = "",
  variant = "green",
}: WhatsappLinkProps) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
