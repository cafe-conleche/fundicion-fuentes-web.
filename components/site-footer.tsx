import Link from "next/link";
import { CopyrightYear } from "@/components/copyright-year";
import { SocialLinks } from "@/components/social-links";
import { contactFacts, nav, site } from "@/lib/site";

export function SiteFooter() {
  const facts = contactFacts().filter((fact) => fact.id !== "whatsapp");

  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 md:py-12">
        <div>
          <p className="font-display text-2xl font-bold uppercase tracking-[0.12em]">
            {site.name}
          </p>
          <div className="accent-line mt-4" />
          <p className="mt-4 max-w-xs text-base leading-7 text-blue-light">{site.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-light">
            Navegación
          </p>
          <ul className="mt-4 space-y-2.5 text-base">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white hover:text-blue-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-light">
            Contacto
          </p>
          <ul className="mt-4 space-y-2.5 text-base">
            {facts.map((fact) => (
              <li key={fact.id}>
                <span className="block text-xs uppercase tracking-[0.14em] text-blue-light">
                  {fact.label}
                </span>
                <span className="text-white">{fact.value}</span>
              </li>
            ))}
            <li>
              <Link href="/contacto#cotizacion" className="font-semibold text-white hover:text-blue-light">
                Formulario de cotización
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-light">
            Redes
          </p>
          <div className="mt-4">
            <SocialLinks variant="footer" />
          </div>
        </div>
      </div>

      <div className="bg-navy-darker px-4 py-4 pb-24 text-sm text-blue-light sm:px-6 md:pb-4">
        <p className="mx-auto max-w-6xl">
          © <CopyrightYear /> {site.name}. {site.location}.
        </p>
      </div>
    </footer>
  );
}
