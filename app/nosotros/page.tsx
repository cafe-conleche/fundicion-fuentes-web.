import type { Metadata } from "next";
import Link from "next/link";
import { MediaSlot } from "@/components/media-slot";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `Presentación institucional de ${site.name}, taller de fundición en ${site.location}.`,
};

const points = [
  {
    title: "El oficio",
    text: "Piezas fundidas y servicios del taller para trabajo industrial, con un interlocutor en Masaya.",
  },
  {
    title: "El catálogo",
    text: "Las piezas se recorren por categoría. Cada ficha abre una consulta, sin precios publicados.",
    href: "/productos",
    action: "Ver productos",
  },
  {
    title: "La cotización",
    text: "El formulario de contacto arma el mensaje con su nombre, teléfono y el trabajo que necesita.",
    href: "/contacto#cotizacion",
    action: "Pedir cotización",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:py-14">
          <p className="eyebrow text-blue-light">El taller</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-light">
            Taller de fundición en {site.location}. {site.tagline}
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-2">
        <MediaSlot
          variant="banner"
          label="Instalaciones del taller en Masaya"
          className="min-h-64 rounded-2xl"
        />
        <div>
          <h2 className="font-display text-3xl font-semibold text-navy">Qué hace el taller</h2>
          <p className="mt-4 text-base leading-7 text-steel">
            Fabricamos piezas y atendemos servicios para quien necesita un interlocutor local:
            recorrer el catálogo y pedir una cotización.
          </p>
          <p className="mt-3 text-base leading-7 text-steel">
            La historia, las fotos del equipo y los textos de trayectoria se publicarán cuando
            el taller los entregue. Esta página no afirma capacidades que aún no están confirmadas.
          </p>
        </div>
      </section>

      <section className="border-t border-mist bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-10 sm:grid-cols-3 sm:px-6 md:py-12">
          {points.map((point) => (
            <article key={point.title} className="rounded-2xl border border-mist bg-paper p-6">
              <h2 className="font-display text-2xl text-navy">{point.title}</h2>
              <p className="mt-3 text-sm leading-6 text-steel">{point.text}</p>
              {point.href ? (
                <Link href={point.href} className="mt-4 inline-block text-sm font-semibold text-blue hover:text-navy">
                  {point.action}
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
