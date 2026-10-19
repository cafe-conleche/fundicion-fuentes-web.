export const site = {
  name: "Fundición Fuentes",
  shortName: "Fuentes",
  location: "Masaya, Nicaragua",
  tagline: "Taller de fundición. Piezas y servicios para trabajo industrial.",
  description:
    "Sitio institucional de Fundición Fuentes, taller de fundición en Masaya, Nicaragua. Catálogo, servicios y contacto por WhatsApp.",
  demo: true,
} as const;

/** Vacío hasta que el taller confirme el número oficial. */
export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export type ContactFact = {
  id: "ubicacion" | "whatsapp" | "horario" | "direccion";
  label: string;
  value: string;
  pending: boolean;
  emphasis?: boolean;
};

/** Solo datos presentes en el sitio. Horario y dirección aún no están confirmados. */
export function contactFacts(): ContactFact[] {
  const hasWhatsapp = whatsappNumber.trim().length > 0;
  return [
    {
      id: "ubicacion",
      label: "Ubicación",
      value: site.location,
      pending: false,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: hasWhatsapp ? whatsappNumber : "Pendiente",
      pending: !hasWhatsapp,
      emphasis: true,
    },
    {
      id: "horario",
      label: "Horario",
      value: "Pendiente",
      pending: true,
    },
    {
      id: "direccion",
      label: "Dirección",
      value: "Pendiente",
      pending: true,
    },
  ];
}

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/productos", label: "Productos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
] as const;

/**
 * Iconos de redes. Los href de plataforma son provisionales hasta que el taller
 * entregue el perfil real. WhatsApp usa el enlace de conversación del sitio.
 */
export const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", label: "Facebook de Fundición Fuentes" },
  { name: "Instagram", href: "https://instagram.com", label: "Instagram de Fundición Fuentes" },
  { name: "WhatsApp", href: "https://wa.me/", label: "WhatsApp de Fundición Fuentes" },
  { name: "YouTube", href: "https://youtube.com", label: "YouTube de Fundición Fuentes" },
  { name: "TikTok", href: "https://tiktok.com", label: "TikTok de Fundición Fuentes" },
  { name: "X", href: "https://x.com", label: "X de Fundición Fuentes" },
] as const;

export const categories = [
  {
    slug: "piezas-industriales",
    name: "Piezas industriales",
    description:
      "Elementos de uso en planta y maquinaria. Las fichas técnicas se publicarán cuando el taller las valide.",
  },
  {
    slug: "metalmecanica",
    name: "Metalmecánica",
    description:
      "Piezas asociadas a trabajo metalmecánico. Contenido de demostración, sin datos de aleación ni medidas.",
  },
  {
    slug: "alcantarillado-urbano",
    name: "Alcantarillado y urbano",
    description:
      "Componentes de uso urbano e hidráulico. Las fotografías oficiales faltan; se muestran marcadores de catálogo.",
  },
  {
    slug: "piezas-a-medida",
    name: "Piezas a medida",
    description:
      "Trabajos según requerimiento del cliente. Cada pieza se cotiza de forma particular.",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export const products = [
  {
    slug: "carcasa-industrial-demo",
    name: "Carcasa industrial",
    category: "piezas-industriales" as CategorySlug,
    description:
      "Registro de demostración para el catálogo. Nombre, categoría y foto oficiales se sustituirán con material validado por el taller.",
    imageAlt: "Marcador visual de catálogo para carcasa industrial. Fotografía oficial pendiente.",
  },
  {
    slug: "base-de-maquina-demo",
    name: "Base de máquina",
    category: "piezas-industriales" as CategorySlug,
    description:
      "Pieza de ejemplo para organizar el listado. No se publican materiales, dimensiones ni disponibilidad.",
    imageAlt: "Marcador visual de catálogo para base de máquina. Fotografía oficial pendiente.",
  },
  {
    slug: "componente-metalmecanico-demo",
    name: "Componente metalmecánico",
    category: "metalmecanica" as CategorySlug,
    description:
      "Ficha de demostración. La descripción comercial definitiva la definirá Fundición Fuentes.",
    imageAlt: "Marcador visual de catálogo para componente metalmecánico. Fotografía oficial pendiente.",
  },
  {
    slug: "pieza-de-repuesto-demo",
    name: "Pieza de repuesto",
    category: "metalmecanica" as CategorySlug,
    description:
      "Ejemplo de producto desactivable desde el futuro panel. Hoy solo ilustra la navegación del catálogo.",
    imageAlt: "Marcador visual de catálogo para pieza de repuesto. Fotografía oficial pendiente.",
  },
  {
    slug: "tapa-urbana-demo",
    name: "Tapa urbana",
    category: "alcantarillado-urbano" as CategorySlug,
    description:
      "Categoría urbana de demostración. No se afirma peso, norma ni medida hasta contar con datos del taller.",
    imageAlt: "Marcador visual de catálogo para tapa urbana. Fotografía oficial pendiente.",
  },
  {
    slug: "rejilla-de-piso-demo",
    name: "Rejilla de piso",
    category: "alcantarillado-urbano" as CategorySlug,
    description:
      "Producto de ejemplo para el muestrario. La fotografía real se cargará cuando exista archivo autorizado.",
    imageAlt: "Marcador visual de catálogo para rejilla de piso. Fotografía oficial pendiente.",
  },
  {
    slug: "pieza-segun-plano-demo",
    name: "Pieza según plano",
    category: "piezas-a-medida" as CategorySlug,
    description:
      "Representa trabajos a partir de un requerimiento del cliente. La cotización se hace por WhatsApp.",
    imageAlt: "Marcador visual de catálogo para pieza según plano. Fotografía oficial pendiente.",
  },
  {
    slug: "recuperacion-de-pieza-demo",
    name: "Recuperación de pieza",
    category: "piezas-a-medida" as CategorySlug,
    description:
      "Ejemplo de servicio-producto a medida. Sin plazos ni precios hasta que el taller los confirme.",
    imageAlt: "Marcador visual de catálogo para recuperación de pieza. Fotografía oficial pendiente.",
  },
] as const;

export type Product = (typeof products)[number];

export const services = [
  {
    slug: "fundicion-de-metales",
    name: "Fundición de metales",
    description:
      "Servicio de fundición del taller. Los metales y procesos exactos se publicarán cuando el cliente los autorice. Esta ficha no lista aleaciones.",
  },
  {
    slug: "moldeado-personalizado",
    name: "Moldeado personalizado",
    description:
      "Preparación de moldes según el trabajo solicitado. Alcance y condiciones se confirman en cada consulta.",
  },
  {
    slug: "maquinado",
    name: "Maquinado",
    description:
      "Acabado y ajuste de piezas cuando el trabajo lo requiera. Detalle técnico pendiente de validación.",
  },
  {
    slug: "mantenimiento",
    name: "Mantenimiento",
    description:
      "Apoyo de mantenimiento asociado a piezas y trabajos del taller. Condiciones por confirmar con Fundición Fuentes.",
  },
] as const;

export type Service = (typeof services)[number];

export function getCategory(slug: string) {
  return categories.find((item) => item.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}

export function productsByCategory(slug: CategorySlug) {
  return products.filter((item) => item.category === slug);
}

export function whatsappHref(message: string) {
  const text = encodeURIComponent(message);
  if (whatsappNumber) {
    const digits = whatsappNumber.replace(/\D/g, "");
    return `https://wa.me/${digits}?text=${text}`;
  }
  return `https://wa.me/?text=${text}`;
}

export function productWhatsappMessage(name: string) {
  return `Hola, deseo consultar sobre el producto ${name} de Fundición Fuentes.`;
}

export function serviceWhatsappMessage(name: string) {
  return `Hola, deseo consultar sobre el servicio ${name} de Fundición Fuentes.`;
}

export const generalWhatsappMessage =
  "Hola, deseo cotizar una pieza con Fundición Fuentes.";
