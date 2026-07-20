# WP-Z01 — Pack mockdatas ciudad → firehose-browser + cache-browser

| dato | valor |
|---|---|
| estado | ⬜ |
| track / prio | PACK / 1 |
| depende de | — (cero código de engine; el WP de arranque) |
| base zeus | `packages\mesh\firehose-browser` (`@zeus/firehose-browser` — microposts sobre DISK_01) · `packages\mesh\cache-browser` (`@zeus/cache-browser` — árbol DISK_02/LINEAS, double-viewer dispatch) |
| cantera | `TEMP\material\CIUDAD\` (fichas, MAPA.md, `GRAFO\handoffs*.tsv` — 513 edges) |

## Objetivo

Dar a los dos browsers de zeus su **primer caso de uso con contenido real**: la ciudad
Scriptorium como datos. Decisión del usuario (handoff): «preparar packs de mockdatas para
flujos habituales que busquen modelizar la ciudad y sus usos. Centrar en el uso de
firehose browser y el cache browser».

## Entregables

1. **Generador** (`.mjs`, en games-library o carpeta `tools/` de zeus): lee la cantera
   CIUDAD y produce dos volúmenes:
   - **DISK_01 (firehose):** microposts = el **pulso de la ciudad**. Cada edge del grafo
     de handoffs (barrio→barrio, zigurat→barrio…) se convierte en micropost fechado;
     los estados del censo (vivo/latente/muerto/roto) marcan cadencia e intensidad
     (un barrio muerto no postea; uno vivo postea su actividad).
   - **DISK_02/LINEAS (cache):** árbol navegable = **la ciudad como filesystem**.
     Distrito/ → barrio/ → ficha.md + metadatos; MAPA.md y las capas como raíz.
2. **Flujos habituales documentados** (README del pack): 3-4 recorridos tipo
   («ver el pulso de un distrito», «abrir la ficha de un barrio desde el cache»,
   «cruzar micropost → ficha»).
3. Scripts de arranque: cada browser con `npm start` apuntando a su volumen generado.

## Criterios de aceptación

- [ ] `firehose-browser` arranca y muestra microposts del pulso ciudad con preview.
- [ ] `cache-browser` arranca y navega distritos → barrios → fichas (double-viewer).
- [ ] El generador es idempotente: regenerar desde la cantera da el mismo volumen.
- [ ] Los estados del censo (block1 §4, drenados como datos) son visibles en ambos
      browsers (p. ej. cadencia en firehose, metadato en cache).
- [ ] Cero dependencia de aleph-scriptorium: cantera copiada/transformada, no referenciada
      en runtime.

## Notas

- Es también banco de pruebas para Z02/Z03: los mismos datos que aquí son microposts y
  árbol, en el startpack son `seeds/gamemap.json`. Un solo modelo fuente, tres vistas.
- Contrastar con `spec\openapi.yaml` de cada browser antes de inventar formato.
