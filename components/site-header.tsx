"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-mist bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-navy"
          onClick={() => setOpen(false)}
        >
          <BrandMark className="h-10 w-10 shrink-0" />
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold uppercase tracking-[0.14em] sm:text-base">
              {site.name}
            </span>
            <span className="block text-[0.7rem] text-steel">{site.location}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const current =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  current ? "text-navy" : "text-steel hover:text-navy"
                }`}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            className="ml-2 bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-blue"
          >
            Contactar
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-mist text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="menu-movil"
          className="border-t border-mist bg-white px-4 py-3 lg:hidden"
          aria-label="Móvil"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-b border-mist py-3 text-base text-navy"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
