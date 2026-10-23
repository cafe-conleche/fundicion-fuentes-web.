import type { Metadata } from "next";
import Link from "next/link";
import { WorkshopFilm } from "@/components/workshop-film";
// CAMBIO 1: Importamos el nuevo video
import { services, site, nosotrosVideoSrc } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `Presentación institucional de ${site.name}, taller de fundición en ${site.location}.`,
};

const steps = [
  {
    title: "Mire el tipo de pieza",
    text: "El catálogo agrupa el trabajo por categoría. Cada ficha abre una consulta, sin precios publicados.",
    href: "/productos",
    action: "Abrir el catálogo",
  },
  {
    title: "Cuente qué necesita",
    text: "En contacto deja su nombre, teléfono, correo y el trabajo. El formulario abre el mensaje en su correo.",
    href: "/contacto#cotizacion",
    action: "Ir al formulario",
  },
  {
    title: "El taller responde",
    text: "La conversación sigue en WhatsApp. El sitio no registra la cotización ni confirma plazos.",
    href: "/contacto",
    action: "Ver datos de contacto",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <p
          className="pointer-events-none absolute -bottom-6 right-0 select-none font-display text-[28vw] font-bold leading-none text-white/[0.05] sm:text-[12rem]"
          aria-hidden="true"
        >
          Masaya
        </p>
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-12 lg:items-start">
          <div className="min-w-0 lg:col-span-5 lg:pt-4">
            <p className="eyebrow text-blue-light">Nosotros</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[0.92] sm:text-6xl">
              {site.name}
            </h1>
            <p className="mt-5 max-w-md text-lg leading-8 text-blue-light">
              Taller de fundición en {site.location}. Piezas y servicios para
              trabajo industrial, con un interlocutor local.
            </p>
            <p className="mt-5 max-w-md text-base leading-7 text-white/80">
              La historia del taller es la de un oficio en Masaya: fundir metal y
              entregar piezas a quien las necesita. Los años, quién lo inició y
              cómo creció se publicarán con el relato del propio taller. Esta
              página no inventa esa trayectoria.
            </p>
          </div>
          <WorkshopFilm
            src={nosotrosVideoSrc} // CAMBIO 2: Usamos el video de elaboración
            label="Video institucional: instalaciones, equipo o una colada"
            className="min-w-0 lg:col-span-7 [&_figcaption]:text-blue-light/80"
          />
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <section className="grid gap-6 border-b border-mist pb-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="font-display text-sm font-bold tracking-[0.18em] text-blue">01</p>
            <h2 className="mt-2 font-display text-4xl font-semibold text-navy">El oficio</h2>
          </div>
          <div className="max-w-2xl lg:col-span-8">
            <p className="text-lg leading-8 text-ink">
              El taller funde metal, prepara moldes y entrega piezas para planta,
              metalmecánica, uso urbano y trabajos a medida.
            </p>
            <p className="mt-4 text-base leading-7 text-steel">
              Esta página presenta la empresa. La historia, las fotos del equipo y
              los años de trayectoria se publicarán cuando el taller los entregue.
              Hasta entonces no se afirman capacidades, aleaciones ni certificaciones.
            </p>
          </div>
        </section>

        <section className="border-b border-mist py-12">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="font-display text-sm font-bold tracking-[0.18em] text-blue">02</p>
              <h2 className="mt-2 font-display text-4xl font-semibold text-navy">
                Cómo encargar un trabajo
              </h2>
            </div>
            <ol className="grid gap-4 lg:col-span-8 lg:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title} className="flex flex-col rounded-2xl bg-paper p-5">
                  <span className="font-display text-3xl font-bold text-navy">{index + 1}</span>
                  <h3 className="mt-3 font-display text-xl text-navy">{step.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-steel">{step.text}</p>
                  <Link
                    href={step.href}
                    className="mt-4 text-sm font-semibold text-blue hover:text-navy"
                  >
                    {step.action}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pt-12">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="font-display text-sm font-bold tracking-[0.18em] text-blue">03</p>
              <h2 className="mt-2 font-display text-4xl font-semibold text-navy">
                Lo que puede pedir
              </h2>
            </div>
            <ul className="divide-y divide-mist border-y border-mist lg:col-span-8">
              {services.map((service, index) => (
                <li key={service.slug}>
                  <Link
                    href="/servicios"
                    className="group grid gap-1 py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-4"
                  >
                    <span className="font-display text-xl font-bold text-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="font-display text-2xl text-navy group-hover:text-blue">
                        {service.name}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-steel">
                        {service.description}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
