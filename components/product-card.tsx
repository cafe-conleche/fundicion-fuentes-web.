import Link from "next/link";
import { ProductPlaceholder } from "@/components/product-placeholder";
import { WhatsappLink } from "@/components/whatsapp-link";
import {
  getCategory,
  productWhatsappMessage,
  type Product,
} from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);

  return (
    <article className="flex h-full flex-col border border-mist bg-white">
      <Link href={`/productos/${product.slug}`} className="block">
        <ProductPlaceholder title={product.name} />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        {category ? (
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-steel">
            {category.name}
          </p>
        ) : null}
        <h3 className="font-display text-xl text-navy">
          <Link href={`/productos/${product.slug}`} className="hover:text-blue">
            {product.name}
          </Link>
        </h3>
        <p className="flex-1 text-sm leading-6 text-steel">{product.description}</p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link
            href={`/productos/${product.slug}`}
            className="inline-flex flex-1 items-center justify-center border border-mist px-4 py-2.5 text-sm font-semibold text-navy hover:bg-paper"
          >
            Ver ficha
          </Link>
          <WhatsappLink
            message={productWhatsappMessage(product.name)}
            variant="green"
            className="flex-1"
          >
            Consultar
          </WhatsappLink>
        </div>
      </div>
    </article>
  );
}
