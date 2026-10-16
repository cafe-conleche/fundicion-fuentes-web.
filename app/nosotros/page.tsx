import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { WhatsappLink } from "@/components/whatsapp-link";
import { generalWhatsappMessage, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `Presentación institucional de ${site.name}, taller de fundición en ${site.location}.`,
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        as="h1"
        eyebrow="Institucional"
        title={site.name}
        description={`Taller de fundición con sede en ${site.location}. Esta página reúne la presentación de la empresa. Historia, fotografías de instalaciones y textos de trayectoria se publicarán cuando el cliente los entregue validados.`}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <article className="border border-mist bg-white p-8">
          <h2 className="font-display text-2xl text-navy">Actividad</h2>
          <p className="mt-4 text-base leading-7 text-steel">
            El taller trabaja piezas de fundición y servicios asociados para
            quienes necesitan un interlocutor local. El sitio permite conocer la
            oferta, recorrer el catálogo por categorías y abrir una consulta
            comercial por WhatsApp.
          </p>
          <p className="mt-4 text-base leading-7 text-steel">
            No se describen aquí procesos, capacidades ni materiales que el taller
            no haya confirmado. Lo que aparece como demostración está marcado
            como tal.
          </p>
        </article>
        <article className="steel-grid p-8 text-white">
          <h2 className="font-display text-2xl">Pendiente de validación</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-mist">
            <li>Historia y años de trayectoria</li>
            <li>Fotografías oficiales del taller</li>
            <li>Valores y compromiso de calidad, con redacción del cliente</li>
            <li>Identidad visual definitiva (logotipo original)</li>
          </ul>
        </article>
      </div>

      <div className="mt-10">
        <WhatsappLink message={generalWhatsappMessage}>
          Hablar con el taller
        </WhatsappLink>
      </div>
    </div>
  );
}
