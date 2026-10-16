import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { WhatsappLink } from "@/components/whatsapp-link";
import { serviceWhatsappMessage, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description: `Servicios de ${site.name}: fundición, moldeado, maquinado y mantenimiento.`,
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        as="h1"
        eyebrow="Oferta del taller"
        title="Servicios"
        description="Listado de demostración. Cada servicio publicado incluye una consulta por WhatsApp que identifica el nombre seleccionado."
      />

      <div className="mt-12 space-y-6">
        {services.map((service) => (
          <article
            key={service.slug}
            className="grid gap-6 border border-mist bg-white p-6 md:grid-cols-[1fr_auto] md:items-end"
          >
            <div>
              <h2 className="font-display text-2xl text-navy">{service.name}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-steel">
                {service.description}
              </p>
            </div>
            <WhatsappLink message={serviceWhatsappMessage(service.name)}>
              Consultar servicio
            </WhatsappLink>
          </article>
        ))}
      </div>
    </div>
  );
}
