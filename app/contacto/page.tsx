import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { WhatsappLink } from "@/components/whatsapp-link";
import { generalWhatsappMessage, site, whatsappNumber } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacto de ${site.name} en ${site.location}. WhatsApp y ubicación.`,
};

export default function ContactoPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        as="h1"
        eyebrow="Contacto"
        title="Hable con el taller"
        description="La vía comercial principal es WhatsApp. El número, el correo y la dirección exacta se publicarán cuando Fundición Fuentes los confirme."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="border border-mist bg-white p-8">
          <h2 className="font-display text-2xl text-navy">WhatsApp</h2>
          <p className="mt-3 text-sm leading-6 text-steel">
            Al pulsar el botón se abre WhatsApp con un mensaje preparado. El sitio
            no afirma que la consulta haya sido recibida o guardada: solo abre la
            conversación.
          </p>
          <p className="mt-3 text-sm text-steel">
            Número oficial:{" "}
            {whatsappNumber ? whatsappNumber : "pendiente de confirmación"}
          </p>
          <div className="mt-6">
            <WhatsappLink message={generalWhatsappMessage}>
              Cotizar una pieza
            </WhatsappLink>
          </div>
        </article>

        <article className="border border-mist bg-white p-8">
          <h2 className="font-display text-2xl text-navy">Ubicación</h2>
          <p className="mt-3 text-sm leading-6 text-steel">
            {site.location}. La dirección exacta y el mapa se mostrarán cuando
            existan autorización y coordenadas confirmadas. No se publica una
            ubicación provisional.
          </p>
          <div className="mt-6 flex min-h-48 items-center justify-center border border-dashed border-steel-mid bg-paper text-center text-sm text-steel">
            Mapa pendiente de confirmación de dirección
          </div>
        </article>
      </div>
    </div>
  );
}
