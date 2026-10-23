import Image from "next/image";
import { MediaSlot } from "@/components/media-slot";
import { WhatsappLink } from "@/components/whatsapp-link";

type ServiceRowProps = {
  name: string;
  description: string;
  whatsappMessage: string;
  imageSrc?: string;
  reverse?: boolean;
};

export function ServiceRow({
  name,
  description,
  whatsappMessage,
  imageSrc,
  reverse = false,
}: ServiceRowProps) {
  return (
    <article
      className={`card grid gap-0 overflow-hidden md:grid-cols-5 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* IMAGEN: Ocupa 3/5 del ancho. h-full para que llegue hasta abajo.
          object-cover para que llene el espacio sin dejar márgenes. */}
      <div className="relative w-full overflow-hidden bg-paper h-[300px] md:h-full md:col-span-3">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`Proceso: ${name}`}
            fill
            // object-cover llena el espacio. Como la columna es ancha (3/5), no recorta mucho.
            className="object-cover object-center" 
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        ) : (
          <MediaSlot
            variant="service"
            label={`Proceso: ${name}`}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      
      {/* TEXTO: Ocupa 2/5 del ancho. Se centra verticalmente. */}
      <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10 md:col-span-2">
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