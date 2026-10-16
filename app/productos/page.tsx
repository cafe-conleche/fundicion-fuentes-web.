import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { categories, products, productsByCategory, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Productos",
  description: `Catálogo de productos de ${site.name}, organizado por categorías.`,
};

export default function ProductosPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        as="h1"
        eyebrow="Catálogo"
        title="Productos"
        description={`Se muestran ${products.length} fichas de demostración, todas en estado publicado. Los productos desactivados no aparecerán en este listado cuando exista el panel administrativo.`}
      />

      <nav className="mt-8 flex flex-wrap gap-2" aria-label="Categorías">
        {categories.map((category) => (
          <a
            key={category.slug}
            href={`#${category.slug}`}
            className="border border-mist bg-white px-3 py-2 text-sm text-navy hover:border-steel-mid"
          >
            {category.name}
          </a>
        ))}
      </nav>

      <div className="mt-14 space-y-16">
        {categories.map((category) => (
          <section key={category.slug} id={category.slug} className="scroll-mt-28">
            <h2 className="font-display text-2xl text-navy sm:text-3xl">
              {category.name}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-steel">
              {category.description}
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productsByCategory(category.slug).map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
