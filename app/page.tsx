import Link from "next/link";
import { CategoryPanel } from "@/components/category-panel";
import { ContactFacts } from "@/components/contact-facts";
import { HeroSlider } from "@/components/hero-slider";
import { MediaSlot } from "@/components/media-slot";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceRow } from "@/components/service-row";
import { WhatsappLink } from "@/components/whatsapp-link";
import {
  categories,
  generalWhatsappMessage,
  products,
  serviceWhatsappMessage,
  services,
  whatsappNumber,
} from "@/lib/site";

export default function Home() {
  const previewServices = services.slice(0, 2);

  return (
    <>
      <HeroSlider />

      <section className="relative z-20 -mt-8">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-mist bg-white px-6 py-8 shadow-lg sm:px-8">
            <ContactFacts />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)]">
          <MediaSlot
            variant="banner"
            label="Fachada o interior del taller"
            className="rounded-2xl"
          />
          <div>
            <SectionHeading
              eyebrow="La empresa"
              title="Fundición de metales para trabajo industrial"
              description="En Masaya el taller fabrica piezas fundidas y atiende servicios asociados. El catálogo muestra el tipo de trabajo; la cotización se conversa por WhatsApp."
            />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/nosotros" className="btn btn-primary px-8 py-3 text-base">
            Conocer el taller
          </Link>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:py-14">
          <SectionHeading
            eyebrow="Catálogo"
            title="Elija una categoría"
            description="Cuatro líneas de trabajo. Abra la que se parece a la pieza que necesita."
          />
          <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
            {categories.map((category) => (
              <div
                key={category.slug}
                className="w-[86%] shrink-0 snap-center sm:w-[46%] lg:w-auto"
              >
                <CategoryPanel
                  slug={category.slug}
                  name={category.name}
                  description={category.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:py-14">
        <SectionHeading
          eyebrow="Muestrario"
          title="Piezas que fabricamos"
          description="Tres piezas del catálogo, en el mismo formato. El listado completo está en Productos."
        />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/productos" className="btn btn-primary px-8 py-3 text-base">
            Ver el catálogo
          </Link>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:py-14">
          <SectionHeading
            eyebrow="Servicios"
            title="Qué puede solicitar"
            description="Dos servicios para empezar. El resto está en la página de servicios."
          />
          <div className="mt-6 space-y-6">
            {previewServices.map((service, index) => (
              <ServiceRow
                key={service.slug}
                name={service.name}
                description={service.description}
                whatsappMessage={serviceWhatsappMessage(service.name)}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/servicios" className="btn btn-primary px-8 py-3 text-base">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 md:pb-14">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-navy text-white shadow-xl md:grid-cols-2">
          <div className="p-8 sm:p-10">
            <p className="eyebrow text-blue-light">Cotización</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Cuéntenos la pieza que necesita
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-blue-light">
              Nombre, teléfono y el trabajo. El formulario arma el mensaje y lo abre en WhatsApp.
            </p>
            <Link href="/contacto#cotizacion" className="btn mt-6 bg-white text-navy hover:bg-blue-light">
              Llenar el formulario
            </Link>
          </div>
          <div className="flex flex-col justify-center bg-navy-deep p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-light">
              Línea directa
            </p>
            <p className="mt-2 font-display text-4xl font-bold">
              {whatsappNumber.trim() ? whatsappNumber : "WhatsApp pendiente"}
            </p>
            <p className="mt-3 text-sm leading-6 text-blue-light">
              Si prefiere no llenar el formulario, abra la conversación directo.
            </p>
            <WhatsappLink message={generalWhatsappMessage} variant="green" className="mt-6 w-fit px-6 py-3">
              Abrir WhatsApp
            </WhatsappLink>
          </div>
        </div>
      </section>
    </>
  );
}
