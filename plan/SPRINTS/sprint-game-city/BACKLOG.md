# BACKLOG — sprint-game-city

> Solo el orquestador del sprint escribe aquí (regla de oro 2). Workers: un WP = un
> chat = una rama `wp/gc-<id>-<slug>` (+ worktree si hay paralelo); reporte con la
> plantilla del skill; NO editar este fichero.
> Estados: ⬜ pendiente · 🔶 brief emitido / en curso · ✅ aceptado. Los bloqueos se
> anotan en prosa dentro del WP («Bloqueado por Zxx»), no con glifo propio — vocabulario
> del skill (`swarm-orquestacion` 0.3.4), parseable por sus gates/proyección.
> **El estado canónico vive en la lista de abajo** (formato bullet del skill); la tabla
> es overview de lectura y no lleva estado (una sola fuente, sin drift).

## Olas

**Ola GC-1 (arrancable hoy, sin dependencias):** Z01 · Z02 · Z08-f1..3 · Z10 (lib pura) · Z09
**Ola GC-2 (sobre GC-1):** Z03 · Z06 · Z08-f4..5
**Ola GC-3 (federación y población):** Z04 · Z07 · Z08-f6..7 · Z05 (por items, cuando duela)

## WPs (estado canónico)

- ⬜ **WP-Z01 · Pack mockdatas ciudad → firehose/cache-browser** — track PACK ·
  prio 1 · dep — · eje I (consumidores reales: los 2 browsers arrancados).
  Ficha: [WP-Z01](WP-Z01-mockdatas-browsers.md).
- ⬜ **WP-Z02 · `@zeus/startpack-ciudad` (seeds desde MAPA.md)** — track PACK ·
  prio 1 · dep — · eje I (engine carga seeds); IV cuando `ciudad-model` sea
  compartido con Z01. Ficha: [WP-Z02](WP-Z02-startpack-ciudad.md).
- ⬜ **WP-Z03 · Juego de engine `ciudad` (patrón pozo)** — track PACK · prio 2 ·
  dep Z02 · eje IV diferido (segundos clientes del catálogo de intents: Z04 y
  Z08). Ficha: [WP-Z03](WP-Z03-juego-ciudad.md).
- ⬜ **WP-Z04 · Rabbits r/s/h como actores externos (e2e)** — track PACK · prio 2 ·
  dep Z03 (y Z06 para capacidad real) · eje IV (el peer externo ES el segundo
  cliente del contrato rooms/protocol). Ficha: [WP-Z04](WP-Z04-rabbits-rsh.md).
- ⬜ **WP-Z05 · Evoluciones de engine (deltas, zonas, ACL, loader, sharding)** —
  track ENGINE · prio 3 · disparo: Z08-f6 · eje IV por item; II si un item
  sustituye mecanismo vigente (destino canónico).
  Ficha: [WP-Z05](WP-Z05-engine-evoluciones.md).
- ⬜ **WP-Z06 · `@zeus/mcp-launcher` — habilitador r/s/h + meta-ops** — track OPS ·
  prio 2 · dep — · eje I (consumidor real: linea-system+satélite arrancados por
  tool call). Ficha: [WP-Z06](WP-Z06-mcp-launcher.md).
- ⬜ **WP-Z07 · Instancia dramaturgo `ciudad` (capa lectura)** — track PACK ·
  prio 4 · dep Z03 (ledger) · CA propios del kit (validador story-board).
  Ficha: [WP-Z07](WP-Z07-dramaturgo-ciudad.md).
- ⬜ **WP-Z08 · Constelación Node-RED: visor + coordinación + población (169)** —
  track VISOR · prio 2 · dep — (f1 hoy) · eje IV (Node-RED = segundo cliente
  independiente del contrato `/runtime`).
  Ficha: [WP-Z08](WP-Z08-nodered-visor-ciudad.md).
- ⬜ **WP-Z09 · Mini-clon local VPS Node-RED + pago deuda rooms** — track OPS ·
  prio 2 · dep — · eje I (los nodos 0.3.x republicados con consumidor real: el
  clon los instala). Ficha: [WP-Z09](WP-Z09-miniclon-vps-rooms.md).
- ⬜ **WP-Z10 · «Viaje»: gestor de caminos wiki → lib sobre linea-kit** — track
  ENGINE · prio 2 · dep — (adaptador gamemap espera Z02/Z03) · eje I (consumidor
  real: adaptador/ciudadanos); II en modo concepto (destino canónico de cada
  pieza extraída de wiki-racer; el origen queda intacto como referencia).
  Ficha: [WP-Z10](WP-Z10-viajes-wiki-linea.md).

## Overview (lectura; sin estado — el estado vive arriba)

| WP | Título | Track | Prio | Depende de | Ejes CA |
|---|---|---|---|---|---|
| [Z01](WP-Z01-mockdatas-browsers.md) | Pack mockdatas ciudad → firehose/cache-browser | PACK | 1 | — | I |
| [Z02](WP-Z02-startpack-ciudad.md) | `@zeus/startpack-ciudad` (seeds desde MAPA.md) | PACK | 1 | — | I (+IV) |
| [Z03](WP-Z03-juego-ciudad.md) | Juego de engine `ciudad` (patrón pozo) | PACK | 2 | Z02 | IV dif. |
| [Z04](WP-Z04-rabbits-rsh.md) | Rabbits r/s/h como actores externos (e2e) | PACK | 2 | Z03 (Z06) | IV |
| [Z05](WP-Z05-engine-evoluciones.md) | Evoluciones de engine | ENGINE | 3 | Z08-f6 | IV/II |
| [Z06](WP-Z06-mcp-launcher.md) | `@zeus/mcp-launcher` | OPS | 2 | — | I |
| [Z07](WP-Z07-dramaturgo-ciudad.md) | Instancia dramaturgo `ciudad` | PACK | 4 | Z03 | kit |
| [Z08](WP-Z08-nodered-visor-ciudad.md) | Constelación Node-RED (169) | VISOR | 2 | — | IV |
| [Z09](WP-Z09-miniclon-vps-rooms.md) | Mini-clon local VPS + deuda rooms | OPS | 2 | — | I |
| [Z10](WP-Z10-viajes-wiki-linea.md) | «Viaje»: caminos wiki → linea-kit | ENGINE | 2 | — | I/II |

## Candidatos GC-4 — profundizar la gamificación (sin abrir; ver [SEMILLA-GAMIFICACION.md](SEMILLA-GAMIFICACION.md))

- **Loop de juego** (objetivos/decay/economía de energía) — hoy hay mecánica sin meta.
- **Estado del juego = estado real del sistema** (barrio ↔ paquete/servicio; salud CI
  alimenta vivo/latente) — la idea más potente del pack, apenas explotada por `wake`.
- **Ciudadanos con misión** (viajes Z10 como quests; no random-walk decorativo).
- **Cronista** (el story-board del dramaturgo vuelve al juego como lore visible).
- **Vista 3D** — conectar `operator-ui` (ThreeGamification) como vista de la ciudad
  («varias vistas, un contrato»).
- **Meta-juego del swarm** — proyectar WPs como misiones en la plaza (adaptador
  `ciudad` del exportador de proyección del skill; mismo modelo que backlog→Issues).

## Cierre del sprint (parte final — no evaporar)

Al cerrar GC-3, el reporte de cierre incluye la **retroalimentación a aleph**
(aporte 3 del feedback; es evidencia, no un WP nuevo): mapear lo logrado contra
block2 §6 —

- **Z04 es WP-S20 de facto** (peer externo federando contra el contrato
  rooms/protocol).
- **El pack ciudad es el primer consumidor cruzado** de la constelación del
  holón 06.
- Lo que la juntura 05-06 pueda citar como evidencia, citarlo ahí con rutas de
  reporte (la juntura no re-excava; lee el cierre).

## Reglas del sprint (además de las del skill)

1. **Regla de los dos mundos:** cero nombres del marco/holones dentro de entregables
   que aterricen en zeus-sdk/games-library (paralela a la "regla de los dos juegos" de
   PRACTICAS zeus §1.11). Este plan puede nombrar lo que quiera; los paquetes no.
2. **Portar el concepto, no el código** (heredada de WP-U81 zeus): wiki-racer,
   MCPLauncherServer y los pythons de NETWORK-ENGINE son referencia, nunca dependencia.
3. **Transparencia para el juego** (Z08): la authority no lleva código Node-RED-aware;
   si un WP lo necesitara, es señal de diseño roto — parar y reabrir el WP.
4. **Cantera → repo:** ningún runtime lee la cantera (anexada en `cantera/`;
   `TEMP\material\` = origen histórico sin autoridad) — los generadores (Z01/Z02)
   copian/transforman a datos versionados del repo destino.
5. Contexto histórico y decisiones de vista: [VISTA.md](VISTA.md) y
   [RECAP-NODERED.md](RECAP-NODERED.md). Catálogo técnico: [RECURSOS-LIBS.md](RECURSOS-LIBS.md).
