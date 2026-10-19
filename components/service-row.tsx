import { MediaSlot } from "@/components/media-slot";
import { WhatsappLink } from "@/components/whatsapp-link";

type ServiceRowProps = {
  name: string;
  description: string;
  whatsappMessage: string;
  reverse?: boolean;
};

export function ServiceRow({
  name,
  description,
  whatsappMessage,
  reverse = false,
}: ServiceRowProps) {
  return (
    <article
      className={`card grid gap-0 overflow-hidden md:grid-cols-2 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="overflow-hidden">
        <MediaSlot
          variant="service"
          label={`Proceso: ${name}`}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10">
        <p className="eyebrow">Servicio</p>
        <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">{name}</h2>
        <p className="text-sm leading-7 text-steel">{description}</p>
        <WhatsappLink message={whatsappMessage} className="w-fit">
          Consultar por WhatsApp
        </WhatsappLink>
      </div>
    </article>
  );
}
