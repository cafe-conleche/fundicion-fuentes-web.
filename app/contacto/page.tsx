import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { WhatsappLink } from "@/components/whatsapp-link";
import { contactFacts, generalWhatsappMessage, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacto y cotización de ${site.name} en ${site.location}.`,
};

export default function ContactoPage() {
  const whatsapp = contactFacts().find((fact) => fact.id === "whatsapp");

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div>
        <p className="eyebrow">Contacto</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">
          Hable con el taller
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-steel">
          El número y el horario están aquí. La cotización se arma en el formulario y se envía por WhatsApp.
        </p>
        <dl className="mt-8 grid max-w-md grid-cols-2 gap-6">
          <div className="min-w-0">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">Número</dt>
            <dd className="mt-2 font-display text-2xl font-bold leading-tight text-navy">
              {whatsapp?.pending ? "Pendiente" : whatsapp?.value}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">Horario</dt>
            <dd className="mt-2 font-display text-2xl font-bold leading-tight text-navy">Pendiente</dd>
          </div>
        </dl>
        <WhatsappLink message={generalWhatsappMessage} variant="green" className="mt-6 w-fit">
          Abrir WhatsApp
        </WhatsappLink>
      </div>

      <div id="cotizacion" className="scroll-mt-28 rounded-2xl border border-mist bg-white p-6 shadow-md sm:p-8">
        <h2 className="font-display text-3xl text-navy">Formulario de cotización</h2>
        <p className="mt-3 text-sm leading-6 text-steel">
          Complete los datos. Al enviar se abre WhatsApp con el mensaje listo. El sitio no lo guarda.
        </p>
        <QuoteForm />
      </div>
    </div>
  );
}
