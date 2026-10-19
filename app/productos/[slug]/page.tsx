import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaSlot } from "@/components/media-slot";
import { WhatsappLink } from "@/components/whatsapp-link";
import {
  getCategory,
  getProduct,
  products,
  productWhatsappMessage,
  site,
} from "@/lib/site";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/productos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    return { title: "Producto no encontrado" };
  }
  return {
    title: product.name,
    description: `${product.name} en el catálogo de ${site.name}.`,
  };
}

export default async function ProductoPage({
  params,
}: PageProps<"/productos/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const whatsappMessage = productWhatsappMessage(product.name);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 pb-28 sm:px-6 md:py-14 lg:pb-14">
      <p className="text-sm text-steel">
        <Link href="/productos" className="text-blue hover:text-navy">
          Productos
        </Link>
        {category ? (
          <>
            <span aria-hidden="true"> / </span>
            <a href={`/productos#${category.slug}`}>{category.name}</a>
          </>
        ) : null}
      </p>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <MediaSlot variant="product" label={`${product.name} — vista principal`} />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <MediaSlot
              variant="product"
              label="Detalle de acabado"
              className="!aspect-square"
            />
            <MediaSlot
              variant="product"
              label="Contexto en taller"
              className="!aspect-square"
            />
            <MediaSlot
              variant="product"
              label="Otra vista de la pieza"
              className="!aspect-square"
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          {category ? (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">
              {category.name}
            </p>
          ) : null}
          <h1 className="mt-2 font-display text-4xl text-navy">{product.name}</h1>
          <p className="mt-4 text-base leading-7 text-steel">{product.description}</p>
          <p className="mt-4 text-sm text-steel">Sin precio publicado. La cotización se hace por WhatsApp.</p>
          <div className="mt-8 hidden lg:block">
            <WhatsappLink message={whatsappMessage}>
              Consultar este producto por WhatsApp
            </WhatsappLink>
          </div>
        </div>
      </div>

      <div
        className="fixed inset-x-0 bottom-20 z-30 border-t border-mist bg-white/95 p-4 backdrop-blur-sm lg:hidden"
        role="region"
        aria-label="Consulta rápida"
      >
        <WhatsappLink message={whatsappMessage} variant="green" className="w-full">
          Consultar por WhatsApp
        </WhatsappLink>
      </div>
    </div>
  );
}
