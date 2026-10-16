export function ProductPlaceholder({ title }: { title: string }) {
  return (
    <div
      className="relative flex aspect-[4/3] items-end overflow-hidden bg-navy-deep"
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-40 steel-grid" />
      <div className="absolute inset-6 border border-steel-mid/35" />
      <span className="relative m-4 max-w-[90%] text-[0.7rem] uppercase tracking-[0.16em] text-mist">
        Foto pendiente · {title}
      </span>
    </div>
  );
}
