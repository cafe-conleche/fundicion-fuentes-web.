# Dirección visual — dos conceptos y entregables de validación

**Proyecto:** Sitio institucional Fundición Fuentes  
**Fecha:** 16 de octubre de 2026  
**Estado del código:** Etapa 2 con estructura funcional (rutas, catálogo demo, WhatsApp). La capa visual actual es **provisional** y coincide con lo descrito en la revisión: hero tipográfico, rejilla repetida, tarjetas blancas homogéneas y marcadores “foto pendiente” sin narrativa industrial.

**Decisión de proceso:** No se avanza a implementación definitiva de componentes hasta aprobar **un solo concepto** (A o B) y las composiciones de inicio, catálogo, ficha de producto, servicios y contacto.

### Decisión aprobada (16-oct-2026) — **Híbrido**

| Zona | Concepto | Motivo |
|---|---|---|
| Hero inicio, paneles de categoría | **B** (pantalla completa, imagen protagonista) | Comunica oficio industrial aunque aún no haya fotos reales |
| Catálogo, fichas, rail de categorías | **A** (claro, asimétrico, comercial) | Legibilidad y consulta por WhatsApp sin parecer e-commerce |
| Servicios | Filas editoriales con slot de foto | Rompe el grid de tarjetas iguales |
| Placeholders | `MediaSlot` con badge «Foto del taller pendiente» | Sustituir por material del cliente antes de publicación |

**Contexto:** el taller aún no entregó fotografías; el híbrido permite validar composiciones y brief de shots sin bloquear el desarrollo.

---

## Diagnóstico breve (situación actual)

| Aspecto | Qué hay hoy | Por qué no alcanza |
|---|---|---|
| Hero | Texto + rejilla CSS sobre azul | No comunica oficio, proceso ni producto; podría ser cualquier B2B |
| Imágenes | Placeholders con etiqueta | No cumplen “imagen con propósito” |
| Secciones | Mismo patrón: título + grid de tarjetas | Patrón de plantilla corporativa |
| Catálogo | Tarjetas idénticas 4:3 | Poco protagonismo comercial; parece grid de e-commerce light |
| Identidad | Azul/blanco/gris correctos en color, débiles en composición | Paleta sin sistema de fotografía, ritmo ni jerarquía por sección |
| Móvil | Menú y stack funcionan | Misma genericidad; hero no aprovecha pantalla completa |

Lo construido **sí sirve** como wireframe técnico (navegación, RF de WhatsApp, categorías, demo). Lo que falta es **dirección de arte aplicada** antes de pulir CSS en todo el repo.

---

## Concepto A — «Taller claro» (luminoso, técnico, confianza)

### Idea

Sitio **claro y legible**, con sensación de plano de taller y orden industrial. El azul marino del logo estructura; el blanco y el gris acero respiran; la **fotografía real** (o referencia temporal etiquetada) hace el trabajo emocional. Sin modo oscuro global ni efectos metálicos.

### Atributos (§2)

| Atributo | Cómo se traduce |
|---|---|
| Solidez | Bloques con bordes rectos, tipografía condensada en títulos, mucho aire horizontal |
| Experiencia | Banda “Proceso” con 3–4 pasos (molde → fundición → acabado → entrega) **solo cuando el cliente valide textos** |
| Capacidad técnica | Fotos de piezas y maquinaria, no iconos genéricos |
| Industrial | Rejilla sutil solo en **un** hero o pie de sección, no en toda la página |
| Moderno | Espaciado amplio, una sola familia display + sans legible |

### Paleta (anclada al logo)

| Token | Hex | Uso |
|---|---|---|
| Navy | `#0A2F5C` | Marca, encabezados fuertes, footer |
| Blue | `#1B4F8A` | Enlaces, hover |
| Paper | `#F4F7FA` | Fondo general |
| White | `#FFFFFF` | Tarjetas y header |
| Steel | `#5C6773` | Cuerpo |
| Mist | `#E6EBF1` | Bordes, separadores |
| WhatsApp | `#1F8A4C` | Solo CTAs de contacto |

### Tipografía propuesta

| Rol | Familia | Motivo |
|---|---|---|
| Display / H1–H2 | **Barlow Semi Condensed** (600–700) | Industrial, compacta, legible en móvil |
| Cuerpo | **Source Sans 3** (400–600) | Neutral técnica, ya integrada |
| Datos / etiquetas | Source Sans 3, caps tracking amplio | Categorías y “PIEZAS INDUSTRIALES” |

Alternativa si se busca más carácter: **Oswald** (títulos) + Source Sans 3 (cuerpo). Se elige una pareja en la reunión de validación.

### Fotografía

- Estilo: luz natural o taller, contraste medio, **piezas y procesos** nítidos; evitar stock “hombre con casco sonriendo”.
- Tratamiento: esquinas rectas o radio 4px máximo; sin filtros sepia ni “metal brushed”.
- Placeholders: foto de referencia con franja **“Sustituir antes de publicación”** (no grid abstracto).

---

### A — Inicio (escritorio)

```
┌─────────────────────────────────────────────────────────────────┐
│ [demo banner]  Header: logo | nav | Contactar (navy)            │
├──────────────────────────────┬──────────────────────────────────┤
│  EYEBROW: Masaya · Fundición │                                  │
│  H1: Piezas fundidas y        │   FOTO HERO (60%)               │
│      soluciones a su medida   │   taller / pieza / colada       │
│  Lead: mensaje comercial      │   ratio 4:5 o 16:10             │
│  [Ver catálogo] [WhatsApp]    │                                  │
├──────────────────────────────┴──────────────────────────────────┤
│  BANDA IMAGEN full-bleed (ancho) — instalaciones o piezas       │
│  overlay navy 40% + frase corta validada por cliente            │
├─────────────────────────────────────────────────────────────────┤
│  “Qué hacemos” — 2 columnas texto + lista procesos (no 3 cards) │
├─────────────────────────────────────────────────────────────────┤
│  CATÁLOGO — rail categorías horizontal + 2 productos destacados  │
│            layout asimétrico: 1 grande + 2 pequeños             │
├─────────────────────────────────────────────────────────────────┤
│  SERVICIOS — fila con foto recorte izquierda + texto derecha     │
│              (una fila por servicio, no 4 cajas iguales)         │
├─────────────────────────────────────────────────────────────────┤
│  CTA navy: ¿Tiene plano o pieza? → WhatsApp                      │
└─────────────────────────────────────────────────────────────────┘
```

### A — Inicio (móvil)

- Hero: **foto arriba** (45vh), texto debajo; botones apilados ancho completo.
- Categorías: **scroll horizontal** con snap (pills navy outline).
- Productos destacados: **carrusel** 1 tarjeta por vista, swipe.
- Servicios: acordeón o lista con miniatura 72px (no grid 2×2).
- FAB WhatsApp se mantiene; no compite con hero.

---

### A — Catálogo y ficha producto

**Catálogo**

- Cabecera con H1 + párrafo corto (no solo SectionHeading genérico).
- **Un bloque por categoría:** título a la izquierda, enlace “ver todos” a la derecha; debajo grid **asimétrico** (en desktop: 2+1 o masonry ligero).
- Tarjeta producto: imagen **3:4** dominante, nombre, categoría, una línea de aplicación; botones “Ficha” y “Consultar” (verde solo en WhatsApp).

**Ficha producto**

- Desktop: galería izquierda (foto grande + miniaturas si hay); derecha sticky con nombre, categoría, descripción, **sin precio**, CTA WhatsApp primario.
- Móvil: galería swipe; CTA fijo inferior **barra** “Consultar por WhatsApp” (encima del safe area).

---

### A — Servicios y contacto

**Servicios:** página tipo **índice editorial** — cada servicio = fila con imagen 40% + texto 60%, separador mist (no tarjetas apiladas idénticas).

**Contacto:** dos bloques desiguales — (1) WhatsApp con mensaje explicativo del maestro; (2) ubicación con mapa solo cuando exista dirección; hasta entonces bloque gris con copy “pendiente”, no mapa falso.

---

## Concepto B — «Forja y pieza» (fotografía protagonista, ritmo editorial)

### Idea

El sitio se siente como **catálogo industrial de autor**: grandes fotos, texto en bandas sobre degradado navy, secciones de **alturas distintas**. Más dramático que A, pero **fondo claro en lectura larga** (catálogo y textos en paper/blanco) para no fatigar.

### Paleta

Misma base azul/blanco/gris. Añade:

| Token | Hex | Uso |
|---|---|---|
| Navy deep | `#071F3D` | Overlays sobre fotos |
| Warm gray | `#D8DCE2` | Separadores en bloques con foto |

### Tipografía propuesta

| Rol | Familia | Motivo |
|---|---|---|
| Display | **Barlow** 700, tracking tight | Títulos con peso “pieza pesada” |
| Cuerpo | **Source Sans 3** | Consistencia con implementación actual |

### Fotografía

- Hero **full-bleed** obligatorio (mín. 1200px ancho fuente).
- Recortes: detalle de textura metal + plano general de pieza terminada alternados por sección.

---

### B — Inicio (escritorio)

```
┌─────────────────────────────────────────────────────────────────┐
│ Header transparente sobre hero → sólido al scroll                 │
├─────────────────────────────────────────────────────────────────┤
│ HERO 85vh: foto fundición/pieza                                 │
│ gradient navy abajo 50%                                         │
│ H1 + lead + 2 CTAs en esquina inferior izquierda (max-width)    │
├─────────────────────────────────────────────────────────────────┤
│ Franja paper: “Sobre el taller” — texto ancho + cita cliente    │
│ (cuando exista)                                                 │
├─────────────────────────────────────────────────────────────────┤
│ CATEGORÍAS: 4 paneles verticales (hover zoom foto) — no pills  │
├─────────────────────────────────────────────────────────────────┤
│ PRODUCTO DESTACADO: 1 pieza full-width split 50/50              │
├─────────────────────────────────────────────────────────────────┤
│ SERVICIOS: 2 columnas alternadas (zigzag imagen/texto)          │
├─────────────────────────────────────────────────────────────────┤
│ Contacto integrado: banda con tel/WhatsApp + horario (validado)  │
└─────────────────────────────────────────────────────────────────┘
```

### B — Inicio (móvil)

- Hero full viewport con título 2 líneas máximo; scroll hint sutil.
- Categorías: **lista vertical** con imagen lateral 96px (más táctil que paneles).
- Producto destacado: una sola ficha grande por pantalla.
- Zigzag servicios se convierte en **stack** imagen full-width arriba, texto abajo.

---

### B — Catálogo y ficha

**Catálogo:** primera pantalla = **producto “portada”** de la categoría seleccionada; debajo listado compacto (miniatura + nombre + flecha). Sensación de **muestrario**, no de tienda.

**Ficha:** layout **revista** — imagen a sangre arriba en móvil; en desktop texto en columna estrecha centrada bajo imagen ancha (lectura de ficha técnica sin inventar datos).

---

### B — Servicios y contacto

**Servicios:** cada ítem con **foto de proceso** distinta (fundición vs maquinado); título grande, párrafo, un solo botón WhatsApp por fila.

**Contacto:** mitad pantalla foto taller (o referencia), mitad datos + CTA; en móvil, foto 30vh luego bloque contacto.

---

## Comparación para elegir concepto

| Criterio | A «Taller claro» | B «Forja y pieza» |
|---|---|---|
| Legibilidad / mantenimiento | Muy alta | Alta (más dependiente de buenas fotos) |
| Impacto visual inicial | Medio-alto | Alto |
| Riesgo con pocas fotos del cliente | Menor (más texto estructurado) | Mayor |
| Esfuerzo de implementación | Medio | Medio-alto |
| Sensación “fundición” | Orden, taller, catálogo técnico | Oficio, material, pieza heroica |
| Rendimiento | Bueno (menos hero gigante) | Cuidado con peso de imágenes (next/image, tamaños) |

**Recomendación de equipo:** validar **A** si el material fotográfico inicial es escaso; **B** si el taller entrega pronto 8–12 fotos de calidad. Híbrido posible: hero y categorías de B, catálogo y fichas de A.

---

## Justificación de recursos (entregable 5)

| Recurso | Decisión | Por qué |
|---|---|---|
| Paleta | Azul marino + blanco + gris del logo; verde solo WhatsApp | Marca ya acordada; evita confusión con retail |
| Tipografía | Barlow (condensada o no) + Source Sans 3 | Industrial sin ser “stencil”; buena lectura en NI |
| Fotografía | Real > referencia etiquetada > nada abstracto | Comunica sector; placeholders actuales se retiran |
| Iconografía | Mínima: WhatsApp, menú, flechas; **sin** set de iconos industria genéricos | Reduce look plantilla |
| Botones | Primario navy, secundario outline, WhatsApp verde | Jerarquía clara hacia cotización |
| Espaciado | Escala 4px: 16 / 24 / 40 / 64 / 96 entre secciones | Ritmo distinto por tipo de bloque |
| Texturas | Una sola: rejilla muy suave **o** borde 1px mist; nunca ambas en el mismo bloque | Evita ruido visual |

---

## Materiales a solicitar a Fundición Fuentes (entregable 6)

Prioridad **alta** (bloquean identidad visual creíble):

1. Logotipo vectorial o PNG alta resolución (versiones color y monocromo).
2. Fotografías **propias** (mínimo sugerido):
   - 1 hero (taller, pieza grande o proceso en acción).
   - 4 por categoría de catálogo (o 8–12 piezas representativas).
   - 1 por servicio (4 servicios).
   - 1 instalaciones / fachada (nosotros).
   - 1 detalle material (textura metal) opcional para B.
3. Textos validados: historia, valores, descripción de actividad (nosotros).
4. Lista oficial de servicios y redacción aprobada.
5. Nombres y descripciones de productos reales por categoría (sin datos técnicos no confirmados).
6. Número de WhatsApp oficial.
7. Dirección, horario y autorización de mapa.
8. Persona administradora del panel (para copy de contacto).

Prioridad **media:** video corto loop para hero (opcional, solo si peso y hosting acordados).  
**No solicitar** para diseño: precios, stock, certificaciones no confirmadas.

Formato fotos: JPG/WebP, largo mínimo 1600px lado largo; evitar marcas de agua.

---

## Componentes: reutilizables vs composición única (entregable 7)

### Reutilizables (design system)

| Componente | Uso |
|---|---|
| `SiteHeader` / `SiteFooter` | Global; variante header transparente (B) |
| `DemoBanner` | Hasta validación de contenidos |
| `WhatsappLink` / `WhatsappFab` | Todos los CTAs comerciales |
| `Button` (primario / secundario / whatsapp) | Unificar estilos actuales dispersos |
| `Container` | max-width y padding responsive |
| `Eyebrow` | Etiquetas de sección |
| `Section` | wrapper con padding vertical tokenizado |
| `ProductCard` | Variantes `featured` / `compact` / `list-row` |
| `CategoryPill` / `CategoryPanel` | A pills / B paneles |
| `ImageWithFallback` | Foto real + badge “referencia temporal” |
| `Breadcrumb` | Ficha producto |

### Composición particular por página (no forzar misma tarjeta)

| Página / bloque | Layout propio |
|---|---|
| Hero inicio | A split o B full-bleed — **único** |
| Banda proceso / sobre nosotros | Timeline o 2 col — **único** |
| Destacados catálogo inicio | Asimétrico o 1 hero producto — **único** |
| Listado `/productos` | Por categoría con cabecera distinta |
| Ficha `/productos/[slug]` | Galería + sticky CTA |
| `/servicios` | Filas editoriales o zigzag |
| `/contacto` | Split foto + datos |
| `/nosotros` | Historia + foto instalaciones (no 2 cards genéricas) |

### Componentes actuales a **reemplazar o retirar** tras aprobación

- `ProductPlaceholder` (rejilla abstracta) → `ImageWithFallback` con brief de shot.
- Repetición de `SectionHeading` + grid 3 cols en inicio.
- Hero `steel-grid` como único recurso gráfico.

---

## Criterios de aprobación (checklist §5)

Antes de implementar en `main` / sustituir `app/page.tsx` definitivo:

- [ ] Concepto A o B (o híbrido documentado) firmado por jefe de proyecto / cliente.
- [ ] Mockups o capturas de referencia acordadas (Figma, captura de ruta `/concepto-*` si se construyen prototipos).
- [ ] Al menos 1 foto hero real o referencia con fecha de reemplazo.
- [ ] Catálogo y ficha revisados en móvil 375px y desktop 1280px.
- [ ] Copy demo sigue sin datos técnicos inventados.
- [ ] Plan maestro: WhatsApp, sin e-commerce, sin “consulta registrada” falsa.

---

## Próximo paso de implementación (tras aprobación)

1. Crear rama `feature/visual-concepto-{a|b}`.
2. Implementar **solo** inicio + catálogo + 1 ficha como referencia visual.
3. Revisión con taller (enlace preview).
4. Extender servicios, contacto, nosotros con el mismo sistema.
5. Retirar banner demo cuando el cliente valide contenidos.

**No** refactorizar el resto del sitio hasta el paso 1 aprobado.

---

## Referencia visual comparativa

Ver canvas en el IDE: [Dirección visual — conceptos A y B](C:\Users\leota\.cursor\projects\c-Users-leota-OneDrive-Documents-Fundicion-Fuentes-Landing-Page-fundicion-fuentes-web\canvases\direccion-visual-conceptos.canvas.tsx).
