import Link from "next/link";
import { MediaSlot } from "@/components/media-slot";

type CategoryPanelProps = {
  slug: string;
  name: string;
  description: string;
};

export function CategoryPanel({ slug, name, description }: CategoryPanelProps) {
  return (
    <Link
      href={`/productos#${slug}`}
      className="group relative block overflow-hidden rounded-xl border border-mist bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-light hover:shadow-lg"
    >
      <MediaSlot
        variant="category"
        label={`Piezas de ${name.toLowerCase()} — material del taller`}
        className="transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/40 to-transparent transition-opacity duration-300 group-hover:from-navy/90"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
        <p className="eyebrow text-[0.6rem] text-blue-light/80">
          Categoría
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">{name}</h3>
        <p className="mt-1 line-clamp-2 text-xs leading-snug text-mist/80">{description}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white">
          Ver piezas
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
