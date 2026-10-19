"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { MediaSlot } from "@/components/media-slot";
import { WhatsappLink } from "@/components/whatsapp-link";
import { generalWhatsappMessage, site } from "@/lib/site";

const slides = [
  {
    id: "taller",
    imageLabel: "Vista del taller o una pieza grande",
    eyebrow: `Taller de fundición · ${site.location}`,
    title: "Piezas fundidas en Masaya",
    text: "Fundición Fuentes fabrica piezas y atiende trabajos industriales. Esta es la puerta de entrada al taller, al catálogo y a la cotización.",
    primaryHref: "/nosotros",
    primaryLabel: "Conocer el taller",
  },
  {
    id: "catalogo",
    imageLabel: "Pieza del catálogo",
    eyebrow: "Catálogo",
    title: "Vea el tipo de pieza que necesita",
    text: "Industriales, metalmecánica, componentes urbanos y trabajos a medida. Elija una categoría y abra la ficha.",
    primaryHref: "/productos",
    primaryLabel: "Ver productos",
  },
  {
    id: "cotizar",
    imageLabel: "Oficio del taller o plano de una pieza",
    eyebrow: "Cotización",
    title: "¿Tiene un plano o una pieza?",
    text: "Cuéntenos qué necesita. La conversación de cotización se abre por WhatsApp.",
    primaryHref: "/contacto",
    primaryLabel: "Ir a contacto",
  },
] as const;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const paused = hovering || focusWithin;

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  return (
    <section
      className="hero-slider relative -mt-[4.5rem] h-[78vh] text-white md:h-[min(88vh,760px)]"
      aria-roledescription="carrusel"
      aria-label="Presentación de Fundición Fuentes"
      tabIndex={0}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocusWithin(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocusWithin(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(index + 1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(index - 1);
        }
      }}
    >
      {slides.map((slide, slideIndex) => {
        const active = slideIndex === index;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 ${active ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"} ${reduceMotion ? "" : "transition-opacity duration-700"}`}
            aria-hidden={!active}
            inert={!active}
          >
            <MediaSlot
              variant="hero"
              label={slide.imageLabel}
              className="!absolute inset-0 h-full !min-h-0 w-full"
            />
            <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
            <div className="absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-6xl px-14 pb-28 pt-28 sm:px-16">
                <p className="eyebrow text-blue-light">{slide.eyebrow}</p>
                {active ? (
                  <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
                    {slide.title}
                  </h1>
                ) : (
                  <p className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
                    {slide.title}
                  </p>
                )}
                <p className="mt-4 max-w-xl text-base leading-7 text-white sm:text-lg">
                  {slide.text}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={slide.primaryHref}
                    className="btn bg-white text-navy hover:bg-blue-light"
                  >
                    {slide.primaryLabel}
                  </Link>
                  <WhatsappLink message={generalWhatsappMessage} variant="green">
                    Cotizar por WhatsApp
                  </WhatsappLink>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-2 sm:px-4 pointer-events-none">
        <button
          type="button"
          className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy shadow-md hover:bg-white"
          aria-label="Diapositiva anterior"
          onClick={() => go(index - 1)}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy shadow-md hover:bg-white"
          aria-label="Diapositiva siguiente"
          onClick={() => go(index + 1)}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="absolute bottom-14 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.id}
            type="button"
            className={`slider-dot ${slideIndex === index ? "active" : ""}`}
            aria-label={`Ir a la diapositiva ${slideIndex + 1}`}
            aria-current={slideIndex === index ? "true" : undefined}
            onClick={() => go(slideIndex)}
          />
        ))}
      </div>
    </section>
  );
}
