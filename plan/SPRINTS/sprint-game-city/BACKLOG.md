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
**Ola GC-2 (sobre GC-1):** Z03 · Z06 · Z08-f4..5 · Z12-f1 (catálogo + kit núcleo +
primer barrio encendible, tras Z06 — paralelo acotado como Z10)
**Ola GC-3 (federación y población):** Z04 · Z07 · Z08-f6..7 · Z11 (tras Z04/Z06) ·
Z12-f2 (cascada/zonas) · Z13 (tras Z12-f1 y Z03) · Z05 (por items, cuando duela)

## WPs (estado canónico)

> Lote GC-1 (2026-07-20): brief emitido para **Z01 · Z02 · Z08 (f1–f3)** — proyección
> issues local-only; workers frescos en paralelo. Ver `plan/REPORTES/BRIEF-WP-Z0{1,2,8}-*.md`.

- ✅ **WP-Z01 · Pack mockdatas ciudad → firehose/cache-browser** — track PACK ·
  prio 1 · dep — · eje I (consumidores reales: los 2 browsers arrancados).
  Ficha: [WP-Z01](WP-Z01-mockdatas-browsers.md). Merged games-library
  `8c2e6a6` (+ puntero submodule). Pack `@zeus/mockdatas-ciudad`; ceguera
  cerrada en re-revisión. Viewport HTML pendiente de muestreo.
- ✅ **WP-Z02 · `@zeus/startpack-ciudad` (seeds desde MAPA.md)** — track PACK ·
  prio 1 · dep — · eje I (engine carga seeds); IV cuando `ciudad-model` sea
  compartido con Z01. Ficha: [WP-Z02](WP-Z02-startpack-ciudad.md). Merged
  games-library `fab17c7` (+ puntero submodule). Publish npm/GitHub pendiente
  autorización. Eje IV diferido (ciudad-model compartido con Z01).
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
- ✅ **WP-Z08 · Constelación Node-RED: visor + coordinación + población (169)** —
  track VISOR · prio 2 · eje IV. **Lote GC-1 f1–f3 ✅** (Oreja/Ojo/Ciudad lectura;
  pack `plan/SPRINTS/sprint-game-city/flows/` @ e3daee8). Caveats: re-validar
  dashboard vivo con zeus :3017; F3 volumen re-validar tras Z01. **f4+ pendiente**
  (GC-2/GC-3). Transparencia: authority sin Node-RED-aware.
  Ficha: [WP-Z08](WP-Z08-nodered-visor-ciudad.md).
- ⬜ **WP-Z09 · Mini-clon local VPS Node-RED + pago deuda rooms** — track OPS ·
  prio 2 · dep — · eje I (los nodos 0.3.x republicados con consumidor real: el
  clon los instala). Ficha: [WP-Z09](WP-Z09-miniclon-vps-rooms.md).
- ⬜ **WP-Z10 · «Viaje»: gestor de caminos wiki → lib sobre linea-kit** — track
  ENGINE · prio 2 · dep — (adaptador gamemap espera Z02/Z03) · eje I (consumidor
  real: adaptador/ciudadanos); II en modo concepto (destino canónico de cada
  pieza extraída de wiki-racer; el origen queda intacto como referencia).
  Ficha: [WP-Z10](WP-Z10-viajes-wiki-linea.md).
- ⬜ **WP-Z11 · linea-editor: autoría de líneas como server MCP por horse** —
  track ENGINE · prio 3 · ola GC-3 · dep Z06 (launcher) + Z04 (cliente e2e) +
  Z03 (room); hermano de Z10 (frontera dura: Z10 = caminos/lectura, Z11 =
  autoría/mutación + export) · ejes I (export → story-board real) + IV (2º
  cliente: CLI/editor-ui como gate) + II/III (envolver linea-kit, no duplicar) +
  V (gates de mutación visibles) + ceguera (el paquete no nombra marco/ciudad/
  NovelistEditor). Precondición: glosario «viaje» (regla 5). Asentado de oferta
  ronda 2 (2026-07-20). Ficha: [WP-Z11](WP-Z11-linea-editor.md).
- ⬜ **WP-Z12 · Encendido del árbol de vida (lifecycle XState, start/stop real)** —
  track ENGINE+OPS · prio 2 · **f1 en GC-2** (tras Z06), f2/zonas en GC-3 · dep
  Z06 (actuadores; Z12 = cerebro, Z06 = brazo) + Z02 (sección `arbol`/catálogo en
  seeds) + Z03 (round-trip `wake`); alimenta Z08-f4 y Z13 · ejes I (barrio real
  arrancado e2e, salud confirmada) + IV (dashboard Z08 = 2º cliente del
  vocabulario de mando) + III (una sola implementación de spawn/kill, en Z06) +
  ceguera. Fusión de ofertas r3 + r3-b (arquitectura híbrida no-dogma dentro de
  kit genérico + servicio proyector único).
  Ficha: [WP-Z12](WP-Z12-encendido-arbol-vida.md).
- ⬜ **WP-Z13 · Los tres jugadores: fusión en la trama del SDK** — track PACK
  (lore+flujos) · prio 3 · ola GC-3 · dep Z12-f1 (residentes = edificios en
  `running`) + Z03 + Z04; gancho Z07/Z11 · ejes IV (contrato de mapeo con 2
  clientes y ≥2 tipos de jugador; regla 6) + ceguera (lore ciego al marco).
  Brazo ejecutable de [TRAMA-AGUA](TRAMA-AGUA.md). Fusión r3 + r3-b.
  Ficha: [WP-Z13](WP-Z13-tres-jugadores.md).

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
| [Z11](WP-Z11-linea-editor.md) | linea-editor: autoría MCP por horse | ENGINE | 3 | Z06·Z04·Z03 | I/IV/II/III/V |
| [Z12](WP-Z12-encendido-arbol-vida.md) | Encendido del árbol de vida (XState) | ENGINE+OPS | 2 | Z06·Z02·Z03 | I/IV/III |
| [Z13](WP-Z13-tres-jugadores.md) | Los tres jugadores (trama del SDK) | PACK | 3 | Z12-f1·Z03·Z04 | IV |

## Candidatos GC-4 — profundizar la gamificación (sin abrir; ver [SEMILLA-GAMIFICACION.md](SEMILLA-GAMIFICACION.md))

- **Loop de juego** (objetivos/decay/economía de energía) — hoy hay mecánica sin meta.
- **Estado del juego = estado real del sistema** (barrio ↔ paquete/servicio; salud CI
  alimenta vivo/latente) — la idea más potente del pack, apenas explotada por `wake`.
- **Ciudadanos con misión** (viajes Z10 como quests; no random-walk decorativo).
- **Cronista** (el story-board del dramaturgo vuelve al juego como lore visible).
  Cadena: **Z03 (ledger) + Z07 (validador) + Z11 (export transmedia)** — con Z11
  asentado pasa de manual a pipeline (ledger → cronista → export Z11 → validador
  Z07). No abrir antes de esa cadena (micro-acción 2, ronda 2).
- **Vista 3D** — conectar `operator-ui` (ThreeGamification) como vista de la ciudad
  («varias vistas, un contrato»).
- **Meta-juego del swarm** — proyectar WPs como misiones en la plaza (adaptador
  `ciudad` del exportador de proyección del skill; mismo modelo que backlog→Issues).
- **Trama-agua como mundo del dramaturgo** (ronda 3) — ejes REIC de la instancia
  `ciudad` derivados de [TRAMA-AGUA](TRAMA-AGUA.md) §5.5 (R=agua/caudal,
  E=compuertas/gates, I=ventanas/vasos, C=ciclo/retorno); actos etiquetados por tipo
  de jugador desde el ledger (contrato de mapeo de Z13). Dep: Z07 + Z13.

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
- **NovelistEditor** (micro-acción 3, ronda 2): sugerir al futuro INVENTARIO de
  aleph reclasificarlo de «alinear» a **«absorber-concepto y archivar»** — el
  concepto (interfaz agéntica de autoría) fue portado a zeus vía Z11; evidencia
  del recon 2026-07-20 (boceto experimental, árbol plano, transmedia sin código,
  dep `file:` de lista negra). La decisión es del plan aleph (DAS-1); aquí solo
  queda la evidencia lista.

## Reglas del sprint (además de las del skill)

1. **Regla de los dos mundos:** cero nombres del marco/holones dentro de entregables
   que aterricen en zeus-sdk/games-library (paralela a la "regla de los dos juegos" de
   PRACTICAS zeus §1.11). Este plan puede nombrar lo que quiera; los paquetes no.
2. **Portar el concepto, no el código** (heredada de WP-U81 zeus): wiki-racer,
   MCPLauncherServer y los pythons de NETWORK-ENGINE son referencia, nunca dependencia.
3. **Transparencia para el juego** (Z08): la authority no lleva código Node-RED-aware;
   si un WP lo necesitara, es señal de diseño roto — parar y reabrir el WP.
4. **Cantera → repo:** ningún runtime lee la cantera (anexada en `cantera/`; el
   temporal de origen, sin autoridad, movido a `TEMP\draft\material\`) — los
   generadores (Z01/Z02) copian/transforman a datos versionados del repo destino.
5. **Glosario «viaje» (precondición de Z10/Z11 — micro-acción 1, ronda 2):**
   «**viaje**» = camino origen→destino sobre un grafo (sentido Z10; el que va a
   APIs nuevas). El sentido histórico de `linea-system` («campaña de llenado de
   cache», prompts `propose-viaje`/`execute-viaje`) se renombra «**campaña**» en
   la primera ocasión que un WP toque esos prompts; hasta entonces la ambigüedad
   queda registrada aquí como conocida. Ningún WP nombra tools/APIs nuevas con el
   sentido viejo (homonimia ya mordió una vez: agujero negro, block2 §4.1).
6. **Ningún jugador privilegiado (ronda 3, de TRAMA-AGUA §2):** todo contrato nuevo
   del pack declara **≥2 tipos de jugador** (experto/humano/agente) como consumidores
   previstos; si solo puede nombrarse uno, el contrato vuelve a diseño. Es el eje IV
   del skill elevado a ley de diseño del sprint, no solo CA puntual.
7. Contexto histórico y decisiones de vista: [VISTA.md](VISTA.md),
   [RECAP-NODERED.md](RECAP-NODERED.md) y [TRAMA-AGUA.md](TRAMA-AGUA.md) (lore/flujos).
   Catálogo técnico: [RECURSOS-LIBS.md](RECURSOS-LIBS.md).
