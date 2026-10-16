import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">
        Error 404
      </p>
      <h1 className="mt-2 font-display text-4xl text-navy">
        No encontramos esa página
      </h1>
      <p className="mt-3 text-steel">
        El enlace no corresponde a una sección del sitio institucional.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-blue"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
