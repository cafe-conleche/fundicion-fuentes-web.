type MediaSlotProps = {
  /** Qué debería mostrarse cuando el taller entregue la foto. */
  label: string;
  variant?: "hero" | "category" | "product" | "service" | "banner";
  className?: string;
};

const aspect: Record<NonNullable<MediaSlotProps["variant"]>, string> = {
  hero: "min-h-full w-full",
  category: "aspect-[4/5] min-h-[12rem] w-full sm:min-h-[14rem]",
  product: "aspect-[3/4] w-full",
  service: "aspect-[16/10] w-full md:aspect-auto md:min-h-[12rem]",
  banner: "aspect-[21/9] w-full min-h-[10rem]",
};

export function MediaSlot({
  label,
  variant = "product",
  className = "",
}: MediaSlotProps) {
  return (
    <div
      className={`relative overflow-hidden bg-navy-deep ${aspect[variant]} ${className}`}
      role="img"
      aria-label={`Espacio reservado para fotografía: ${label}. Imagen del taller pendiente de entrega.`}
    >
      <div className="absolute inset-0 opacity-30 steel-grid" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy/20 via-transparent to-navy-deep/80"
        aria-hidden="true"
      />
      <div className="absolute inset-4 border border-white/15" aria-hidden="true" />
      <div className={`absolute left-4 right-4 ${variant === "hero" ? "top-24" : "top-4"}`}>
        <span className="inline-block bg-navy/90 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-mist">
          Foto del taller pendiente
        </span>
      </div>
      <p className="absolute bottom-4 left-4 right-4 text-sm leading-snug text-white/90">
        {label}
      </p>
    </div>
  );
}
