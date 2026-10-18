---
name: rediseno-visual
description: Reestructura el diseño visual de Fundición Fuentes (azul y blanco) para un visitante general: slider de portada, presentación de la empresa, header y footer con redes y datos destacados. Usar al cambiar layout, composición, header, footer, hero, slider, inicio, estilos globales o cuando se pida un sitio más vistoso, llamativo o atractivo.
---

# Rediseño visual — Fundición Fuentes

Sitio institucional en Masaya. El visitante común debe entender en segundos qué hace el taller, ver piezas o el oficio, y encontrar teléfono, ubicación y redes sin buscar. Azul y blanco son los colores principales. Verde solo en WhatsApp.

## Diagnóstico (estado a corregir)

- **Portada:** un solo hero estático, badges sin datos reales y bloques que repiten título + rejilla. La empresa y la información básica llegan tarde y con copy de “pendiente”.
- **Header:** barra superior diminuta y apagada; logo y “Contactar” compiten; el estado activo es débil; en móvil el menú no muestra redes ni datos de contacto con peso.
- **Footer:** tres columnas de texto pequeño sobre degradado. No hay logos de redes, ni números grandes, ni un cierre que se sienta institucional.
- **Ritmo:** casi todas las secciones usan el mismo `max-w-6xl`, el mismo padding y el mismo `SectionHeading`. Falta contraste de altura, fondo y ancho.

No inventar años de experiencia, piezas fabricadas, certificaciones, horarios, dirección ni seguidores. Si el dato no está en `lib/site.ts` (o en contenido validado), mostrar el rótulo honesto ya usado en el proyecto (“pendiente”) en tipografía grande, no un número falso.

## Paleta y tipo

Usar los tokens de `app/globals.css`. No introducir otra familia de color.

| Rol | Token | Uso |
|---|---|---|
| Navy | `--navy` `#1e3a8a`, `--navy-deep` `#0f2060` | Slider overlay, header al scroll, footer, botones primarios |
| Azul | `--blue` `#2563eb`, `--blue-light` `#93c5fd` | Enlaces, estado activo, acentos, números destacados |
| Blanco | `--white` | Header sólido, tarjetas, texto sobre navy |
| Papel | `--paper` `#f8faff` | Fondos de lectura |
| Acero / niebla | `--steel`, `--mist` | Cuerpo secundario y bordes |
| WhatsApp | `--whatsapp` | Solo CTA de conversación |

Display: Barlow Semi Condensed. Cuerpo: Source Sans 3. Inter solo si ya está en un control existente; no añadir una cuarta familia.

Escala vertical entre bloques: 64px móvil, 96px escritorio. Un bloque full-bleed (slider, franja de datos, CTA o footer) alternado con un bloque contenido. Radio máximo 16px en tarjetas; el slider va a sangre, sin marco.

## Header

Dos niveles. El de arriba no puede verse como texto al 50% de opacidad.

1. **Barra de utilidad** (navy, siempre visible en `md+`): ubicación a la izquierda; a la derecha iconos de redes a 32px (Facebook, Instagram y las que existan en datos) y el número o “WhatsApp” en blanco, no en verde apagado. En móvil esta barra no se esconde: sus datos pasan al panel del menú, arriba de los enlaces.
2. **Barra principal** (blanca, sticky): logo más grande, nombre en navy, nav con indicador azul claro. Un solo CTA primario “Contactar”. “Inicio” sigue en `nav`.
3. **Sobre el slider de inicio:** la barra principal puede ser transparente con texto blanco solo mientras el slide está detrás y `scrollY` es bajo. Al hacer scroll, pasa a blanca con sombra. En el resto de rutas empieza blanca.
4. Quitar el punto pulsante del logo. El estado activo es texto navy + línea azul, no una píldora gris.

## Slider de portada

Primer plano de `/`. Carrusel a sangre, altura `min(88vh, 760px)` en escritorio y `78vh` en móvil. Tres slides, no más de cinco:

| Slide | Imagen (o `MediaSlot`) | Texto |
|---|---|---|
| 1 | Taller o pieza grande | Qué es la empresa y dónde está |
| 2 | Catálogo / pieza | Invitación a ver productos |
| 3 | Oficio o plano | Invitación a cotizar por WhatsApp |

Cada slide: overlay navy de abajo hacia arriba, eyebrow, H1 de dos líneas, una frase, dos botones (primario blanco o navy, secundario WhatsApp). Controles: flechas, puntos, pausa al hover y al foco, flechas del teclado, `aria-roledescription="carrusel"`. Respetar `prefers-reduced-motion` (sin autoplay). Autoplay 6s solo si no hay esa preferencia.

No usar rejilla CSS como sustituto de la foto. Si no hay imagen, `MediaSlot` ocupa todo el slide.

## Inicio, después del slider

Orden fijo. No volver al patrón “todas las secciones iguales”.

1. **Franja de datos** (blanco, solapada unos 32px sobre el slider en escritorio): tres o cuatro cifras o datos en azul grande — ubicación, WhatsApp, horario, dirección — con etiqueta pequeña debajo. Es la información básica de la empresa, visible sin scroll largo.
2. **La empresa:** split 45/55. Foto o slot a un lado; al otro, eyebrow, título que diga qué hace el taller, dos frases y enlace a `/nosotros`. En móvil la imagen va arriba.
3. **Categorías:** paneles altos con imagen, no pills. Cuatro columnas en escritorio; en móvil, carrusel de un panel.
4. **Muestrario:** una pieza grande y dos compactas, como ahora, con más aire y un título que hable al visitante (“Piezas que fabricamos”), no al equipo (“Composición de catálogo”).
5. **Servicios:** dos filas como máximo en inicio; el resto vive en `/servicios`.
6. **Cierre:** banda navy con una pregunta concreta y un botón de WhatsApp. El footer va inmediatamente después; no repetir los mismos datos en tipografía pequeña.

Copy visible al público: español claro, sin “demo”, “wireframe”, “slot” ni “validación” en títulos. Esos avisos quedan en el banner de demostración o en el rótulo del `MediaSlot`.

## Footer

Tratarlo como cierre institucional, no como tres listas.

1. **Banda de números** (navy profundo, borde superior azul claro): los mismos datos de la franja de inicio, repetidos más grandes. Teléfono o WhatsApp es el elemento más grande de la banda.
2. **Cuerpo en cuatro zonas** sobre navy: marca y una frase; navegación; contacto (ubicación, horario, dirección); redes en botones circulares blancos de 44px con el glifo de la red, `aria-label` y `target="_blank"`.
3. **Barra legal** más oscura: copyright y una línea. Sin párrafo de “contenido de demostración” si el banner superior ya lo dice.

Enlaces de redes salen de datos del sitio. Hasta que existan URLs reales, los iconos apuntan a los href ya definidos y no se inventan perfiles.

## Otras páginas

Misma cabecera, franja no hace falta, footer idéntico.

- `/nosotros`: foto ancha y texto en columna legible; no dos tarjetas genéricas.
- `/productos` y ficha: fondo claro, imagen protagonista, CTA de WhatsApp. Sin precios.
- `/servicios`: filas imagen + texto, alternando lado.
- `/contacto`: datos grandes (los del footer) y formulario o bloque de WhatsApp al lado.

## Al implementar

1. Leer `lib/site.ts` y no añadir hechos que no estén ahí.
2. Cambiar `SiteHeader`, `SiteFooter` y `app/page.tsx` antes de pulir páginas interiores.
3. Extraer el slider a un componente cliente con estado de slide.
4. Verificar en navegador: inicio, una interior, menú móvil, slider (flechas, puntos, teclado) y que header y footer se vean en todas las rutas.
5. Desktop ~1280px y móvil ~375px.
