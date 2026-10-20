import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import {
  categories,
  productsByCategory,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Productos",
  description: `Catálogo de productos de ${site.name}, organizado por categorías.`,
};

export default function ProductosPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:py-14">
      <SectionHeading
        as="h1"
        eyebrow="Catálogo"
        title="Productos"
        description="Recorra las piezas por categoría. Cada ficha tiene foto y un botón para consultar por WhatsApp. No hay precios en el sitio."
      />

      <nav className="mt-6 flex flex-wrap gap-2" aria-label="Categorías">
        {categories.map((category) => (
          <a
            key={category.slug}
            href={`#${category.slug}`}
            className="rounded-full border border-blue/30 bg-white px-4 py-2 text-sm font-semibold text-navy hover:border-navy hover:bg-navy hover:text-white"
          >
            {category.name}
          </a>
        ))}
      </nav>

      <div className="mt-8 space-y-10">
        {categories.map((category) => {
          const items = productsByCategory(category.slug);
          return (
            <section key={category.slug} id={category.slug} className="scroll-mt-28">
              <h2 className="font-display text-2xl text-navy sm:text-3xl">{category.name}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-steel">{category.description}</p>
              <div className="mt-5 flex flex-col gap-4">
                {items.map((product) => (
                  <ProductCard key={product.slug} product={product} variant="row" />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
