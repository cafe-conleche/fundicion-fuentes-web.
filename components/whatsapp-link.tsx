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
    "btn btn-primary",
  green:
    "btn btn-whatsapp",
  ghost:
    "btn btn-outline",
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
