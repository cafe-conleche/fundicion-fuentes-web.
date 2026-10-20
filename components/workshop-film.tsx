"use client";

import { MediaSlot } from "@/components/media-slot";

type WorkshopFilmProps = {
  src: string;
  label: string;
  className?: string;
};

function filmSource(src: string): { kind: "file" | "iframe"; src: string } | null {
  const value = src.trim();
  if (!value) return null;

  const youtube = value.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/,
  );
  if (youtube) {
    return {
      kind: "iframe",
      src: `https://www.youtube-nocookie.com/embed/${youtube[1]}?rel=0`,
    };
  }

  const vimeo = value.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) {
    return { kind: "iframe", src: `https://player.vimeo.com/video/${vimeo[1]}` };
  }

  return { kind: "file", src: value };
}

export function WorkshopFilm({ src, label, className = "" }: WorkshopFilmProps) {
  const film = filmSource(src);

  return (
    <figure className={`relative ${className}`}>
      <div className="overflow-hidden rounded-2xl bg-navy-darker shadow-xl ring-1 ring-white/10">
        {film?.kind === "iframe" ? (
          <div className="aspect-video w-full">
            <iframe
              src={film.src}
              title={label}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : null}

        {film?.kind === "file" ? (
          <video
            className="aspect-video w-full bg-navy-darker object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src={film.src} />
            Su navegador no reproduce este video.
          </video>
        ) : null}

        {!film ? (
          <div className="relative">
            <MediaSlot
              variant="banner"
              label={label}
              quiet
              className="min-h-56 rounded-none sm:min-h-72"
            />
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy-deep/35">
              <span
                className="grid h-16 w-16 place-items-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-sm"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current">
                  <path d="M8 5.5v13l11-6.5-11-6.5z" />
                </svg>
              </span>
              <span className="rounded-full bg-navy/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white">
                Video del taller pendiente
              </span>
            </div>
          </div>
        ) : null}
      </div>
      <figcaption className="mt-3 text-sm text-steel-mid">{label}</figcaption>
    </figure>
  );
}
