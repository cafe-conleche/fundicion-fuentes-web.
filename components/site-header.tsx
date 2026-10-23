"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SocialLinks } from "@/components/social-links";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overSlider = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="sticky top-0 z-40">
      <div className="top-bar hidden h-11 md:block">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-end px-4 sm:px-6">
          <SocialLinks variant="utility" />
        </div>
      </div>

      <header
        className={`h-[4.5rem] border-b transition-colors duration-300 ${
          overSlider
            ? "border-transparent bg-transparent text-white"
            : "border-mist bg-white text-navy shadow-md"
        }`}
      >
        {/* Volvemos a centrar el contenido con max-w-6xl */}
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            {/* Logo con h-16 para que resalte, y levemente más grande */}
            <Image
              src="/images/logo-taller.png"
              alt="Fundición Fuentes Logo"
              width={200} 
              height={60}
              className="h-16 w-auto object-contain" 
              priority 
            />
            
            <span className="leading-tight">
              <span
                className={`block font-display text-[0.8rem] font-bold uppercase leading-none tracking-normal min-[400px]:text-lg min-[400px]:tracking-[0.08em] sm:text-xl sm:tracking-[0.12em] ${
                  overSlider ? "text-white" : "text-navy"
                }`}
              >
                {site.name}
              </span>
              <span className={`block text-xs font-medium ${overSlider ? "text-blue-light" : "text-steel"}`}>
                {site.location}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {nav.map((item) => {
              const current = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link rounded-lg px-3 py-2 text-sm font-medium ${
                    current
                      ? overSlider
                        ? "font-semibold text-white"
                        : "font-semibold text-navy"
                      : overSlider
                        ? "text-white hover:text-blue-light"
                        : "text-steel hover:text-navy"
                  }`}
                  aria-current={current ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contacto" className="btn btn-primary ml-3 px-5 py-2 text-sm">
              Contactar
            </Link>
          </nav>

          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border lg:hidden ${
              overSlider ? "border-white/50 text-white" : "border-mist text-navy"
            }`}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <span className="flex flex-col gap-[5px]" aria-hidden="true">
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {open ? (
          <nav
            id="menu-movil"
            className="absolute inset-x-0 top-full border-t border-mist bg-white px-4 py-4 text-navy shadow-lg lg:hidden"
            aria-label="Móvil"
          >
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-mist pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">Ubicación</p>
                <p className="font-display text-2xl font-bold text-navy">{site.location}</p>
              </div>
              <SocialLinks variant="menu" />
            </div>
            {nav.map((item) => {
              const current = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-2 py-3 text-base font-medium ${
                    current ? "border-l-2 border-ember pl-3 font-semibold text-navy" : "text-steel"
                  }`}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contacto" className="btn btn-primary mt-3 w-full" onClick={() => setOpen(false)}>
              Contactar
            </Link>
          </nav>
        ) : null}
      </header>
    </div>
  );
}