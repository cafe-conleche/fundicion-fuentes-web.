import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-mist bg-navy text-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold uppercase tracking-[0.14em] text-white">
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-steel-mid">
            Taller de fundición en {site.location}. Sitio institucional y catálogo
            en construcción administrable.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-mid">
            Navegación
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white hover:text-mist">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-mid">
            Contacto
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white">
            <li>{site.location}</li>
            <li>WhatsApp: número oficial pendiente de confirmación</li>
            <li>Dirección exacta y mapa: pendientes de autorización</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-xs text-steel-mid">
        {site.name}. Contenido de demostración para validación del sitio público.
      </p>
    </footer>
  );
}
