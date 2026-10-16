import { site } from "@/lib/site";

export function DemoBanner() {
  if (!site.demo) return null;

  return (
    <p className="border-b border-mist bg-navy text-center text-xs leading-5 text-white px-4 py-2 sm:text-sm">
      Contenido de demostración. Textos, catálogo y datos de contacto se
      sustituirán cuando Fundición Fuentes los valide.
    </p>
  );
}
