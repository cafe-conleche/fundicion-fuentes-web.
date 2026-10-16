import { generalWhatsappMessage, whatsappHref, whatsappNumber } from "@/lib/site";

export function WhatsappFab() {
  return (
    <a
      href={whatsappHref(generalWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 flex h-14 items-center gap-2 bg-whatsapp px-4 text-sm font-semibold text-white shadow-none hover:bg-[#187341] sm:right-6 sm:bottom-6"
    >
      <span aria-hidden="true">WA</span>
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="sr-only">
        {whatsappNumber
          ? "Abrir WhatsApp con mensaje de cotización"
          : "Abrir WhatsApp. El número oficial aún no está confirmado; se abrirá el selector de contacto."}
      </span>
    </a>
  );
}
