"use client";

import { useState, type FormEvent } from "react";
import { quoteEmail } from "@/lib/site";

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
    const subject = encodeURIComponent(`Cotización · ${name}`);
    const body = encodeURIComponent(message);
    const href = quoteEmail
      ? `mailto:${quoteEmail}?subject=${subject}&body=${body}`
      : `mailto:?subject=${subject}&body=${body}`;
    window.location.href = href;
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
        Enviar cotización por correo
      </button>
      {sent ? (
        <p className="text-sm leading-6 text-steel" role="status">
          {quoteEmail
            ? "Se abrió su correo con el mensaje dirigido al taller. Envíelo desde allí. El sitio no guarda la cotización."
            : "Se abrió su correo con el mensaje listo. El correo oficial del taller está pendiente: elija el destinatario al enviar. El sitio no guarda la cotización."}
        </p>
      ) : null}
    </form>
  );
}
