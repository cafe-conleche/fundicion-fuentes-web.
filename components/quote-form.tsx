"use client";

import { useState, type FormEvent } from "react";
import { whatsappHref } from "@/lib/site";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("nombre") ?? "").trim();
    const phone = String(data.get("telefono") ?? "").trim();
    const piece = String(data.get("pieza") ?? "").trim();
    const detail = String(data.get("detalle") ?? "").trim();
    const message = [
      "Hola, deseo cotizar una pieza con Fundición Fuentes.",
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Pieza o trabajo: ${piece}`,
      `Detalle: ${detail}`,
    ].join("\n");
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <label className="block text-sm font-semibold text-navy">
        Nombre
        <input
          name="nombre"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-lg border border-mist bg-paper px-3 py-2.5 text-base font-normal text-ink outline-none focus:border-blue"
        />
      </label>
      <label className="block text-sm font-semibold text-navy">
        Teléfono
        <input
          name="telefono"
          type="tel"
          required
          autoComplete="tel"
          className="mt-1 w-full rounded-lg border border-mist bg-paper px-3 py-2.5 text-base font-normal text-ink outline-none focus:border-blue"
        />
      </label>
      <label className="block text-sm font-semibold text-navy">
        Pieza o trabajo
        <input
          name="pieza"
          required
          className="mt-1 w-full rounded-lg border border-mist bg-paper px-3 py-2.5 text-base font-normal text-ink outline-none focus:border-blue"
        />
      </label>
      <label className="block text-sm font-semibold text-navy">
        Detalle
        <textarea
          name="detalle"
          required
          rows={4}
          className="mt-1 w-full rounded-lg border border-mist bg-paper px-3 py-2.5 text-base font-normal text-ink outline-none focus:border-blue"
        />
      </label>
      <button type="submit" className="btn btn-primary w-full">
        Enviar cotización por WhatsApp
      </button>
      {sent ? (
        <p className="text-sm leading-6 text-steel" role="status">
          Se abrió WhatsApp con su mensaje. El sitio no guarda la cotización: hay que enviarla en la aplicación.
        </p>
      ) : null}
    </form>
  );
}
