import type { Metadata } from "next";
import Image from "next/image";
import { ContactFacts } from "@/components/contact-facts";
import { QuoteForm } from "@/components/quote-form";
import { WhatsappLink } from "@/components/whatsapp-link";
import { generalWhatsappMessage, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacto y cotización de ${site.name} en ${site.location}.`,
};

// CAMBIO: Buscamos el nombre del taller en Google Maps en lugar de solo "Masaya"
const mapSrc =
  "https://maps.google.com/maps?q=Fundicion+Fuentes+Masaya&z=16&hl=es&output=embed";

export default function ContactoPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <p className="eyebrow text-blue-light">Contacto</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
            Hable con el taller
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-light">
            Fundición Fuentes está en {site.location}. El número, el horario y la
            dirección se muestran abajo. La cotización se arma en el formulario y
            se abre en su correo.
          </p>
        </div>
      </section>

      <section className="border-b border-mist bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:py-12">
          <ContactFacts />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="font-display text-3xl font-semibold text-navy">Dónde está el taller</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-steel">
            El mapa ubica {site.location}. Nuestra dirección exacta es Km 30.8 Masaya-Granada, Masaya.
          </p>
          
          <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/images/FOTOempresa.jpeg"
              alt="Fachada del taller de Fundición Fuentes"
              fill
              className="object-cover"
              priority
            />
          </div>

          <figure className="mt-6 overflow-hidden rounded-2xl border border-mist bg-paper shadow-md">
            <iframe
              title={`Mapa de ${site.location}`}
              src={mapSrc}
              className="h-80 w-full border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <figcaption className="px-4 py-3 text-sm text-steel">
              {site.location}. Dirección: Km 30.8 Masaya-Granada, Masaya.
            </figcaption>
          </figure>

          {/* CAMBIO: Botón para abrir Waze */}
          <div className="mt-4 flex justify-center">
            <a
              href="https://waze.com/ul?q=Fundicion+Fuentes+Masaya&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-700"
            >
              Abrir en Waze
            </a>
          </div>
        </div>

        <div id="cotizacion" className="scroll-mt-28 rounded-2xl border border-mist bg-white p-6 shadow-md sm:p-8">
          <h2 className="font-display text-3xl text-navy">Cotización por correo</h2>
          <p className="mt-3 text-sm leading-6 text-steel">
            Complete los datos. Al enviar se abre su correo con el mensaje listo.
            El sitio no lo guarda.
          </p>
          <QuoteForm />
          <div className="mt-8 border-t border-mist pt-6">
            <p className="text-sm leading-6 text-steel">
              Si prefiere no usar el correo, abra la conversación por WhatsApp.
            </p>
            <WhatsappLink message={generalWhatsappMessage} variant="green" className="mt-4 w-fit">
              Abrir WhatsApp
            </WhatsappLink>
          </div>
        </div>
      </section>
    </>
  );
}