import Link from "next/link";
import { MediaSlot } from "@/components/media-slot";
import { WhatsappLink } from "@/components/whatsapp-link";
import {
  getCategory,
  productWhatsappMessage,
  type Product,
} from "@/lib/site";

type ProductCardProps = {
  product: Product;
  variant?: "default" | "featured" | "compact" | "row";
};

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
  const category = getCategory(product.category);
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";
  const isRow = variant === "row";

  return (
    <article
      className={`card flex flex-col ${
        isFeatured ? "lg:flex-row" : ""
      } ${isRow ? "md:flex-row" : ""}`}
    >
      <Link
        href={`/productos/${product.slug}`}
        className={`block overflow-hidden ${
          isFeatured ? "lg:w-[55%] shrink-0" : ""
        } ${isRow ? "md:w-[42%] md:max-w-xs shrink-0" : ""}`}
      >
        <MediaSlot
          variant={isRow ? "catalog" : "product"}
          label={product.name}
          quiet={isRow}
          className={`transition-transform duration-300 hover:scale-105 ${
            isFeatured ? "lg:min-h-full lg:aspect-auto lg:h-full" : ""
          } ${isRow ? "md:h-full" : ""}`}
        />
      </Link>
      <div
        className={`flex flex-1 flex-col gap-3 ${
          isFeatured ? "justify-center p-6 sm:p-8 lg:p-10" : isRow ? "justify-center p-5 md:p-6" : "p-5"
        }`}
      >
        {category ? (
          <p className="eyebrow text-[0.68rem]">
            {category.name}
          </p>
        ) : null}
        <h3
          className={`font-display text-navy ${
            isFeatured ? "text-2xl sm:text-3xl" : isRow ? "text-2xl" : isCompact ? "text-lg" : "text-xl"
          }`}
        >
          <Link
            href={`/productos/${product.slug}`}
            className="transition-colors hover:text-blue"
          >
            {product.name}
          </Link>
        </h3>
        {!isCompact ? (
          <p className="flex-1 text-sm leading-6 text-steel">{product.description}</p>
        ) : null}
        <div className={`flex flex-col gap-2 ${isCompact ? "sm:flex-row" : "sm:flex-row"}`}>
          <Link
            href={`/productos/${product.slug}`}
            className="btn btn-outline flex-1 py-2 text-sm"
          >
            Ver ficha
          </Link>
          <WhatsappLink
            message={productWhatsappMessage(product.name)}
            variant="green"
            className="flex-1 py-2 text-sm"
          >
            Consultar
          </WhatsappLink>
        </div>
      </div>
    </article>
  );
}
