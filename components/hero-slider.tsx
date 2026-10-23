"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { WhatsappLink } from "@/components/whatsapp-link";
import { generalWhatsappMessage, site } from "@/lib/site";

const slides = [
  {
    id: "taller-equipo",
    image: "/images/EmpleadosTodos2.jpeg",
    eyebrow: `Taller de fundición · ${site.location}`,
    title: "Piezas fundidas en Masaya",
    text: "Fundición Fuentes fabrica piezas y atiende trabajos industriales. Esta es la puerta de entrada al taller, al catálogo y a la cotización.",
    primaryHref: "/nosotros",
    primaryLabel: "Conocer el taller",
  },
  {
    id: "fundicion",
    image: "/images/Fundicion.jpeg",
    eyebrow: "Proceso de fundición",
    title: "Tradición y fuerza del hierro",
    text: "Nuestro proceso de fundición garantiza piezas resistentes y de alta calidad para la industria.",
    primaryHref: "/servicios",
    primaryLabel: "Ver servicios",
  },
  {
    id: "maquina",
    image: "/images/PinachoMaquina.jpeg",
    eyebrow: "Tecnología",
    title: "Precisión en cada pieza",
    text: "Contamos con maquinaria especializada para garantizar acabados exactos en cada trabajo.",
    primaryHref: "/productos",
    primaryLabel: "Ver productos",
  },
  {
    id: "pieza-arena",
    image: "/images/PiezaArena3.jpeg",
    eyebrow: "Moldeo",
    title: "Artesanía y detalle",
    text: "El moldeo en arena es una de nuestras especialidades, creando formas únicas con precisión.",
    primaryHref: "/contacto",
    primaryLabel: "Cotizar pieza",
  },
  {
    id: "elaboracion",
    image: "/images/ElaboracionMaquina.jpeg",
    eyebrow: "Maquinado",
    title: "Elaboración de componentes",
    text: "Transformamos el metal en componentes funcionales para maquinaria y equipo industrial.",
    primaryHref: "/servicios",
    primaryLabel: "Conocer más",
  },
  {
    id: "pieza-detalle",
    image: "/images/Pieza9.jpeg",
    eyebrow: "Catálogo",
    title: "Piezas a medida",
    text: "Cada pieza cuenta una historia de precisión. Descubra nuestro catálogo de trabajos realizados.",
    primaryHref: "/productos",
    primaryLabel: "Explorar catálogo",
  },
] as const;

const slideDurationMs = 7000;

export function HeroSlider() {
  const [{ index, previous }, setSlide] = useState({ index: 0, previous: 0 });

  const go = useCallback((next: number) => {
    setSlide((current) => {
      const normalized = (next + slides.length) % slides.length;
      if (normalized === current.index) return current;
      return { index: normalized, previous: current.index };
    });
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      go(index + 1);
    }, slideDurationMs);
    return () => window.clearTimeout(timer);
  }, [go, index]);

  return (
    <section
      className="hero-slider relative -mt-[4.5rem] h-[78vh] min-h-[44rem] text-white md:h-[min(88vh,760px)] md:min-h-0"
      aria-roledescription="carrusel"
      aria-label="Presentación de Fundición Fuentes"
      tabIndex={0}
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
        const leaving = slideIndex === previous && !active;
        return (
          <div
            key={slide.id}
            className={`hero-slide${active ? " is-active" : ""}${leaving ? " is-leaving" : ""}`}
            aria-hidden={!active}
            inert={!active}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="hero-photo object-cover"
              priority={slideIndex === 0}
            />

            <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
            <div className="hero-copy absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-6xl px-12 pb-16 pt-24 sm:px-14 md:px-16 md:pb-28 md:pt-28">
                <p className="eyebrow text-blue-light">{slide.eyebrow}</p>
                {active ? (
                  <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                ) : (
                  <p className="mt-4 max-w-3xl font-display text-3xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </p>
                )}
                <p className="mt-4 max-w-xl text-base leading-7 text-white sm:text-lg">
                  {slide.text}
                </p>
                <div className="mt-8 flex flex-col gap-3 md:flex-row">
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

      <div className="slider-progress" key={index} aria-hidden="true" />

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
