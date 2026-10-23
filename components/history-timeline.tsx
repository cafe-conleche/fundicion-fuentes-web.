"use client";

import Image from "next/image";
import { useState } from "react";

const chapters = [
  {
    id: "comienzo",
    label: "El comienzo",
    kicker: "Los primeros años",
    title: "El inicio del taller",
    text: "El taller está en Masaya. Aquí empieza cada pieza: el espacio, el horno y el metal por fundir. Los primeros años de trabajo, fundiendo metal con esfuerzo y dedicación.",
    image: "/images/InicioTaller.jpg",
    alt: "Fundadores del taller con una pieza fundida.",
  },
  {
    id: "fundicion",
    label: "La fundición",
    kicker: "El oficio",
    title: "Un oficio que se sostiene",
    text: "La historia del taller es fundir metal y entregar la pieza a quien la necesita. Ese gesto es la base de nuestra casa.",
    image: "/images/InicioTaller3.jpg",
    alt: "Colada en el taller de Fundición Fuentes.",
  },
  {
    id: "evolucion",
    label: "La evolución",
    kicker: "El paso de los años",
    title: "El trabajo se queda en el taller",
    text: "Con el tiempo el torno acompaña a la pieza fundida. Creciendo junto a nuestros clientes, perfeccionando el oficio y ampliando el taller.",
    image: "/images/PinachoMaquina.jpeg", // <-- CAMBIO AQUÍ: Usamos la foto del torno
    alt: "Torno del taller de Fundición Fuentes.",
  },
  {
    id: "presente",
    label: "El presente",
    kicker: "Hoy",
    title: "Quienes siguen el metal",
    text: "El equipo que está en el taller ahora. Un equipo consolidado, con la misma pasión por el metal y el trabajo bien hecho. La pieza sigue saliendo de Masaya, como al inicio.",
    image: "/images/FOTO_ACTUAL.jpg",
    alt: "Equipo actual del taller de Fundición Fuentes.",
  },
] as const;

export function HistoryTimeline() {
  const [index, setIndex] = useState(0);
  const chapter = chapters[index];
  const last = chapters.length - 1;

  function go(next: number) {
    setIndex((next + chapters.length) % chapters.length);
  }

  return (
    <section className="bg-paper" aria-labelledby="historia-titulo">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <p className="eyebrow text-blue">Historia</p>
        <h2 id="historia-titulo" className="mt-3 max-w-2xl font-display text-4xl font-bold text-navy sm:text-5xl">
          Del inicio a hoy
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-steel">
          El taller en cuatro momentos. Se recorre con el ratón, el dedo o las flechas del teclado.
        </p>

        <div
          className="relative mt-10 hidden md:grid md:grid-cols-4"
          role="tablist"
          aria-label="Momentos del taller"
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
          <div className="pointer-events-none absolute top-4 right-[12.5%] left-[12.5%] h-0.5 bg-mist" />
          <div
            className="pointer-events-none absolute top-4 left-[12.5%] h-0.5 bg-blue motion-reduce:transition-none transition-[width] duration-500"
            style={{ width: `${(index / last) * 75}%` }}
          />
          {chapters.map((item, itemIndex) => {
            const active = itemIndex === index;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`historia-tab-${item.id}`}
                aria-selected={active}
                aria-controls="historia-panel"
                tabIndex={active ? 0 : -1}
                className="relative z-10 flex flex-col items-center gap-3"
                onClick={() => setIndex(itemIndex)}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-transform duration-300 ${
                    active ? "scale-110 border-blue bg-blue" : "border-navy/25 bg-white hover:border-blue"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${active ? "bg-white" : "bg-navy/30"}`} />
                </span>
                <span className={`font-display text-lg ${active ? "font-bold text-navy" : "text-steel"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="historia-panel"
          role="tabpanel"
          aria-labelledby={`historia-tab-${chapter.id}`}
          className="history-panel mt-8 hidden gap-8 md:grid lg:grid-cols-12 lg:items-center"
        >
          <ChapterView chapter={chapter} />
        </div>

        <ol className="mt-8 border-l-2 border-blue/30 md:hidden">
          {chapters.map((item, itemIndex) => {
            const active = itemIndex === index;
            return (
              <li key={item.id} className="relative pb-6 pl-6">
                <button
                  type="button"
                  className="absolute top-1 -left-[7px] h-3 w-3 rounded-full border-2 border-blue bg-white"
                  aria-expanded={active}
                  aria-controls={`historia-movil-${item.id}`}
                  onClick={() => setIndex(itemIndex)}
                >
                  <span className="sr-only">{item.label}</span>
                </button>
                <button
                  type="button"
                  className="text-left"
                  aria-expanded={active}
                  onClick={() => setIndex(itemIndex)}
                >
                  <span className="font-display text-xl text-navy">{item.label}</span>
                </button>
                {active ? (
                  <div id={`historia-movil-${item.id}`} className="history-panel mt-4 grid gap-4">
                    <ChapterView chapter={item} />
                  </div>
                ) : null}
              </li>
            );
          })}
        </ol>

        <div className="mt-6 hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-mist bg-white text-2xl text-navy hover:border-blue"
            aria-label="Momento anterior"
            onClick={() => go(index - 1)}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-mist bg-white text-2xl text-navy hover:border-blue"
            aria-label="Momento siguiente"
            onClick={() => go(index + 1)}
          >
            <span aria-hidden="true">›</span>
          </button>
          <p className="text-sm text-steel">
            {index + 1} / {chapters.length}
          </p>
        </div>
      </div>
    </section>
  );
}

function ChapterView({ chapter }: { chapter: (typeof chapters)[number] }) {
  return (
    <>
      {/* CAMBIO CLAVE: aspect-[4/3] en lugar de aspect-[16/10] para que las fotos verticales no se recorten tanto */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:col-span-7">
        <Image
          src={chapter.image}
          alt={chapter.alt}
          fill
          className="object-cover motion-reduce:scale-100 motion-reduce:transition-none transition-transform duration-700 ease-out"
          sizes="(min-width: 1024px) 55vw, 100vw"
        />
      </div>
      <div className="lg:col-span-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{chapter.kicker}</p>
        <h3 className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl">{chapter.title}</h3>
        <p className="mt-4 text-base leading-7 text-steel">{chapter.text}</p>
      </div>
    </>
  );
}