import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ServiceRow } from "@/components/service-row";
import { serviceWhatsappMessage, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description: `Servicios de ${site.name}: fundición, moldeado, maquinado y mantenimiento.`,
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:py-14">
      <SectionHeading
        as="h1"
        eyebrow="Oferta del taller"
        title="Servicios"
        description="Cada servicio abre una consulta por WhatsApp con el nombre que usted eligió."
      />

      <div className="mt-8 space-y-6">
        {services.map((service, index) => (
          <ServiceRow
            key={service.slug}
            name={service.name}
            description={service.description}
            whatsappMessage={serviceWhatsappMessage(service.name)}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
