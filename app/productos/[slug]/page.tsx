import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductPlaceholder } from "@/components/product-placeholder";
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

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
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

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <ProductPlaceholder title={product.name} />
        <div>
          {category ? (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">
              {category.name}
            </p>
          ) : null}
          <h1 className="mt-2 font-display text-4xl text-navy">{product.name}</h1>
          <p className="mt-4 text-base leading-7 text-steel">{product.description}</p>
          <p className="mt-4 text-sm text-steel">
            Estado: publicado (demostración). Sin precio, existencias ni datos
            técnicos.
          </p>
          <div className="mt-8">
            <WhatsappLink message={productWhatsappMessage(product.name)}>
              Consultar este producto por WhatsApp
            </WhatsappLink>
          </div>
        </div>
      </div>
    </div>
  );
}
