# WP-Z02 — `@zeus/startpack-ciudad`

| dato | valor |
|---|---|
| track / prio | PACK / 1 |
| depende de | — (paralelo a Z01; comparte modelo fuente) |
| base zeus | games-library `packages\startpack-*` (patrón manifest `zeus.startpack/v0` + `seeds/gamemap.json`); `startpack-plaza` ya existe — **revisar solape antes de crear** |
| cantera | `cantera\CIUDAD\MAPA.md` (topología) + censo de estados (fuente versionada vía [WP-Z14](WP-Z14-procedencia-estados.md); hasta Z14, seeds llevan el atributo sin cita de cantera) |

> **Estado canónico:** solo en [BACKLOG.md](BACKLOG.md). Esta ficha no lleva glifo de estado.

## Objetivo

Startpack publicable con la ciudad como escena: la topología real convertida en seeds
que cualquier juego o demo de zeus puede cargar.

## Entregables

1. Paquete `startpack-ciudad` en games-library, manifest `zeus.startpack/v0`.
2. `seeds/gamemap.json` generado desde MAPA.md:
   - **Plaza** y **Zigurat** como nodos-gobierno (Plaza gobierna · Zigurat opera ·
     Barrios ejecutan).
   - **6 distritos** como zonas (Zigurat, Editores visuales, Red/stream, Runtime/MCP,
     Lore/voz, Infra/UI).
   - **24 barrios** como gamethings/anchors con atributo `estado`
     (vivo/latente/muerto/roto) — dato del censo, primer atributo jugable.
   - Calles DRY como enlaces walk entre anchors.
   - **Sección `arbol`** (fusión r3, para Z12): por barrio, sus edificios (locales/
     naves de las fichas de cantera) y **maquinarias** = servicios declarados
     (`id → {cmd, puerto, health, autoRestart, deps, barrio, edificio}` — esquema
     portado del catálogo de la mesh vieja, un solo campo por dato, validado por
     schema). Consumida por Z12; **ignorada por el engine de juego** (D-8 intacto).
3. Nota de solape con `startpack-plaza`: qué reutiliza, qué extiende, qué no duplica.

## Criterios de aceptación

- [ ] Manifest válido contra el patrón de los startpacks existentes.
- [ ] `seeds/gamemap.json` carga en `@zeus/game-engine` sin error (grafo plano, límite
      actual respetado: sin pathfinding).
- [ ] Sin colisión de ids/slug con `startpack-plaza`; el solape queda documentado.
- [ ] Release por el mismo canal que los demás startpacks (`release-startpack.yml`).

## Notas

- El generador de seeds puede compartir código con el de Z01 (mismo modelo fuente,
  otra proyección). Preferible un módulo común `ciudad-model` que ambos consuman.
