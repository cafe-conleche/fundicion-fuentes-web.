import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { WhatsappLink } from "@/components/whatsapp-link";
import {
  categories,
  generalWhatsappMessage,
  products,
  services,
  site,
} from "@/lib/site";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="steel-grid text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-steel-mid">
            Taller de fundición · {site.location}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Piezas de fundición con oficio de taller.
          </h1>
          <p className="max-w-xl text-base leading-7 text-mist sm:text-lg">
            {site.name} presenta su trabajo, organiza el catálogo por categorías y
            atiende consultas por WhatsApp. La historia, las fotos y las fichas
            técnicas oficiales se incorporarán cuando el taller las entregue.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/productos"
              className="inline-flex items-center justify-center bg-white px-5 py-3 text-sm font-semibold text-navy hover:bg-mist"
            >
              Ver catálogo
            </Link>
            <WhatsappLink message={generalWhatsappMessage} variant="green">
              Solicitar cotización por WhatsApp
            </WhatsappLink>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="La empresa"
          title="Oficio de fundición en Masaya"
          description="Espacio institucional para conocer el taller, su actividad y la forma de concertar un trabajo. Los textos definitivos de trayectoria y valores se cargarán desde el panel cuando estén validados."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Catálogo ordenado",
              text: "Productos agrupados por categoría, con ficha y consulta directa.",
            },
            {
              title: "Servicios del taller",
              text: "Fundición, moldeado, maquinado y mantenimiento, según se confirme.",
            },
            {
              title: "Contacto inmediato",
              text: "WhatsApp con mensaje preparado. No registramos la conversación en una base de datos.",
            },
          ].map((item) => (
            <article key={item.title} className="border border-mist bg-white p-6">
              <h2 className="font-display text-xl text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-steel">{item.text}</p>
            </article>
          ))}
        </div>
        <Link
          href="/nosotros"
          className="mt-8 inline-flex text-sm font-semibold text-blue hover:text-navy"
        >
          Leer más sobre el taller
        </Link>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading
            eyebrow="Catálogo"
            title="Productos por categoría"
            description="Muestrario de demostración. No incluye precios, aleaciones ni medidas."
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <a
                  href={`/productos#${category.slug}`}
                  className="inline-flex border border-mist bg-paper px-3 py-2 text-sm text-navy hover:border-steel-mid"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <Link
            href="/productos"
            className="mt-8 inline-flex text-sm font-semibold text-blue hover:text-navy"
          >
            Ver catálogo completo
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Servicios"
          title="Qué puede solicitar al taller"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="border border-mist bg-white p-6">
              <h3 className="font-display text-xl text-navy">{service.name}</h3>
              <p className="mt-3 text-sm leading-6 text-steel">{service.description}</p>
            </article>
          ))}
        </div>
        <Link
          href="/servicios"
          className="mt-8 inline-flex text-sm font-semibold text-blue hover:text-navy"
        >
          Ver servicios y consultar
        </Link>
      </section>

      <section className="border-t border-mist bg-navy text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl">¿Tiene una pieza o un plano?</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-mist">
              Escriba por WhatsApp. El sitio abre la conversación; no confirma que
              el mensaje haya llegado hasta que usted lo envíe en la aplicación.
            </p>
          </div>
          <WhatsappLink message={generalWhatsappMessage} variant="green">
            Abrir WhatsApp
          </WhatsappLink>
        </div>
      </section>
    </>
  );
}
