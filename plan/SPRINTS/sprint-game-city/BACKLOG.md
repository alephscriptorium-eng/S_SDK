# BACKLOG — sprint-game-city

> Solo el orquestador del sprint escribe aquí (regla de oro 2). Workers: un WP = un
> chat = una rama `wp/gc-<id>-<slug>` (+ worktree si hay paralelo); reporte con la
> plantilla del skill; NO editar este fichero.
> Estados: ⬜ pendiente · 🔶 brief emitido / en curso · ✅ aceptado. Los bloqueos se
> anotan en prosa dentro del WP («Bloqueado por …»), no con glifo propio — vocabulario
> del skill (`swarm-orquestacion` 0.3.4), parseable por sus gates/proyección.
> **El estado canónico vive en la lista de abajo** (formato bullet del skill); la tabla
> es overview de lectura y no lleva estado (una sola fuente, sin drift).
> Decisiones del sprint: [DECISIONES.md](DECISIONES.md).

## Olas

**Ola GC-1 (cerrada de facto 2026-07-20, vigía):** Z01 · Z02 · Z08-f1..3 ✅ —
  matices en §Replan post-vigía. Z09 entra en lote inmediato.
**Ola GC-1.5 (cerrada 2026-07-21):** Z14 · Z09 ✅ — paralelo; paths no se pisan.
  **Tick A1 cerrado** → Z10 brief → **Z10 ✅** (cierra lote post-A1 Z14+Z09+Z10).
**Ola GC-2 (cerrada 2026-07-21):** Z03 ✅ · Z06 ✅ · Z08-f4..5 ✅ · Z12-f1 ✅ —
  lote completo; higiene de cierre = §Cola post-GC-2 (A1/re-smoke/push; A2→Z15).
**Ola GC-3 (abierta 2026-07-21 — federación y población):** lote 🔶
  Z04 · **Z07 ✅** · Z08-f6(+f7) · **Z15 (A2, prio alta)**. Parked ⬜: Z11 (tras Z04) ·
  Z12-f2 (tras **Z15 ✅** + f1 ✅) · Z13 (tras Z12-f1·Z03·Z04) · Z05 (por items).
  Criterio custodio: no abrir Z12-f2/Z13 hasta Z15 ≥🔶/✅; A1 no bloquea 🔶 código.

## Cola post-GC-2 (higiene de cierre de ola — 2026-07-21)

Fuente: acta vigía `ADDENDAS-GC2-2026-07-21.md` (scratchpad de sesión;
OUT_DIR fuera del mundo — no recrear bajo `TEMP/`).

**Veredictos vigía (sin reabrir ✅):** Z03 aceptable-con-notas · Z06
aceptable-con-notas · Z08-f4..5 aceptable (re-smoke renegociada con intento).

**Paquete mínimo de higiene (ops; GC-2 cerró sobre aplazamientos sin esto):**

- **Tick A1 (infra):** `npm ci` reproducible en zeus-sdk + games-library
  (causa raíz de verificaciones vivas aplazadas). Custodio/ops — no bloquea
  🔶 de WPs de código; cada BRIEF GC-3 exige env robusto + «A1 pendiente →
  vivos deferibles con intento».
- **Re-smoke:** f1–f3 `:3017` + H1 `:3015` + Mano/Ciudadano authority
  (D1–D3 Z08) **tras A1**.
- **Push S_SDK:** tip local ahead (~10+) → origin (gate de ola; custodio).
  No bloquea apertura 🔶; anotar en briefs.
- **A2 → WP-Z15:** exponer lectura de `intentionalStops` en
  `@zeus/mcp-launcher` (hoy write-only) + consumo/hook lifecycle. **Prio
  alta** pre-Z12-f2. Ficha: [WP-Z15](WP-Z15-intentional-stops-read.md).

## Replan post-vigía GC-1.5 (2026-07-21)

Fuente: acta vigía `REVISION-GC15-2026-07-21.md` (scratchpad de sesión del
vigía; OUT_DIR fuera del mundo — no recrear bajo `TEMP/`). §E copiable:

1. GC-1.5 confirmada de facto (Z14 limpio; Z10/Z09 aceptables-con-notas).
2. **GO GC-2** (Z03 · Z06 · Z08-f4..5 · Z12-f1) sin condiciones bloqueantes,
   con 3 recomendaciones de BRIEF:
   - **(a) Push + runner limpio como gate temprano de la ola** (no de
     apertura): tip `main` ahead ~33 sin CI = mayor riesgo; desbloquea D2
     publish 0.3.x. Custodio/ops: push GL+SDK pronto; workers: CA «tip en
     origin o pedir push» antes de afirmar CI/runner.
   - **(b) BRIEF Z08-f4 abre con re-smoke f1–f3** (:3017 tras A1) + reinicio
     cache-browser :3015 (H1).
   - **(c) Chequeos de entorno:** `git -C <path> rev-parse HEAD` (nunca
     `test -d .git`); frontera actuador(Z06)/comportamiento(Z12) en fichas.
3. Micro-acciones no bloqueantes: higiene doc post-TEMP (VISTA §5 →
   CENSO-ESTADOS, README linaje, regla 4); rename `acceptWalksPozo` →
   `acceptWalksLocal` (barrido); borrar residual WT z01; atribución
   `8a39ece` = Z14 (no Z09).

## Replan post-vigía GC-1 (2026-07-20)

Fuente: acta vigía `REVISION-GC1-2026-07-20` (antes `TEMP/vigia/…`) —
<pendiente custodio: reubicar acta vigía> + addendas custodio (GO parcial
Z09/Z10; DC-GC-ceguera-marca).

| Id | Hallazgo | Acción |
|---|---|---|
| — | GC-1 confirmada de facto; Z01/Z02/Z08 ✅ se sostienen | nada se reabre |
| D1 | Procedencia `estado` de barrios sin fuente en cantera | **WP-Z14** (nuevo) |
| H2 | ¿Ceguera incluye marca aleph/scriptorium? | **DC-GC-ceguera-marca** cerrada — solo método; **no** WP scrub-marca |
| H1 | cache-browser :3015 huérfano (ZEUS_VOLUMES_ROOT → worktree borrado) | nota ops custodio (reinicio); no bloquea lote |
| A1 | Submódulo zeus-sdk desregistrado / checkout desmaterializado | **cerrado 2026-07-20** — ver §Higiene / Tick A1 |
| M2 | Drift `estado` en fichas WP | higiene: campo quitado; canónico = este BACKLOG |
| M1 | grep transparencia Z08 demasiado ancho | nota en ficha Z08: acotar a `packages/` |
| ops | push GL + runner limpio; re-smoke :3017 | custodio / publish; no bloquea Z09·Z14 |

**Scrub-de-marca:** propuesto como F-candidata por el vigía → **cancelado** por
[DC-GC-ceguera-marca](DECISIONES.md#dc-gc-ceguera-marca--2026-07-20--cerrada).

## Tick A1 (cerrado 2026-07-20)

- **Estado:** cerrado. SHA submodule `7567bf3`. Acta:
  <pendiente custodio: reubicar acta vigía>
  (`REVISION-GC1-2026-07-20` §ADDENDUM Tick A1; vivía en `TEMP/vigia/`).
- **Causa:** limpieza post-GC-1 borró 14 dot-entries de raíz del checkout
  zeus-sdk (incl. gitfile `.git`); módulo git intacto en `7567bf3`.
- **Remedio:** restaurar gitdir links + `git restore` de los 14. Status limpio,
  submodule sano, `linea-kit` + `.npmrc` presentes.
- **Desbloqueados:** Z10 · Z06 · Z12-f1 · re-smoke Z08.

## Higiene / ticks abiertos (ops, no WP)

- **TEMP/ retirada por custodio 2026-07-21** — evita dirty en merges (WP-Z14). No recrear; workers: no escribir bajo `TEMP/`. `.gitignore` ignora `TEMP/`. Acta vigía GC-1: <pendiente custodio: reubicar acta vigía>.
- **Worktree stale Z01** (`zeus-sdk/.worktrees/wp-gc-z01-mockdatas-browsers`):
  **parcial** 2026-07-20 — `git worktree remove --force` desregistró el WT
  (ya no aparece en `worktree list`); borrado FS falló por paths largos
  (Windows). **Higiene pendiente:** borrar el directorio residual en quietud
  (`rmdir` long-path / custodio). No lo usan Z09/Z14.
- **H1 (abierto):** reiniciar cache-browser `:3015` contra checkout actual
  (`ZEUS_VOLUMES_ROOT`) — **precondición de apertura Z08-f4** (§E b).
- **Publish GL / push tip (✅ tip remoto 2026-07-21 post GC-2):** push tip 2026-07-21 (post GC-2) · S_SDK `990d763` · GL `5b5bf4e` · zeus `fa73062`. CI: GL success @ tip; zeus Docs success, CI/Release fail (known); S_SDK Docs sin run (paths `docs/**`). **Gate tip remoto satisfecho**; residual runner limpio / D2 publish 0.3.x Z09.
- **Re-smoke Z08 (abierto, prosa → CA de Z08-f4):** dashboard vivo zeus
  `:3017` tras A1✅ — **apertura obligatoria del BRIEF Z08-f4** (§E b).
- **Higiene doc post-TEMP (§E cola):** VISTA §5 → `CENSO-ESTADOS.md`; README
  linaje; regla 4 BACKLOG — micro-WP / tick custodio, no bloquea GC-2.
- **Cola post-GC-2:** ver §Cola post-GC-2 (A1 npm-ci · re-smoke · push S_SDK ·
  A2→Z15). Supersede ticks sueltos de re-smoke/H1 cuando A1 avance.

## WPs (estado canónico)

> Lote GC-2 (**cerrada 2026-07-21**): **Z03 ✅ · Z06 ✅ · Z08-f4..5 ✅ · Z12-f1 ✅**.
> Lote GC-3 (**abierta**): **Z04 🔶 · Z07 ✅ · Z08-f6(+f7) 🔶 · Z15 🔶** · parked
> Z11·Z12-f2(tras Z15)·Z13·Z05. Issues: S_SDK #3 #6 #8 #12 (sync-map).

- ✅ **WP-Z01 · Pack mockdatas ciudad → firehose/cache-browser** — track PACK ·
  prio 1 · dep — · eje I (consumidores reales: los 2 browsers arrancados).
  Ficha: [WP-Z01](WP-Z01-mockdatas-browsers.md). Merged games-library
  `8c2e6a6` (+ puntero submodule). Pack `@zeus/mockdatas-ciudad`; ceguera
  de método cerrada (DC-GC-ceguera-marca: marca admisible). Viewport HTML
  pendiente de muestreo. Caveat: re-smoke cache-browser tras H1.
- ✅ **WP-Z02 · `@zeus/startpack-ciudad` (seeds desde MAPA.md)** — track PACK ·
  prio 1 · dep — · eje I (engine carga seeds); IV cuando `ciudad-model` sea
  compartido con Z01. Ficha: [WP-Z02](WP-Z02-startpack-ciudad.md). Merged
  games-library `fab17c7` (+ puntero submodule). Publish npm/GitHub pendiente
  autorización. Eje IV diferido. **Remedio procedencia → Z14** (no reabre ✅).
- ✅ **WP-Z03 · Juego de engine `ciudad` (patrón pozo)** — track PACK · prio 2 ·
  dep Z02 ✅ · eje I ✅ · IV diferido (segundos clientes: Z04 y Z08). Pack
  `@zeus/ciudad` · games-library `0d7d821` (+ puntero submodule). **Aceptado ✅**
  2026-07-21 (orquestador): e2e join→walk→wake + smoke; horse físico = gap Z06.
  Nota vigía (`ADDENDAS-GC2`): aceptable-con-notas — estados=glosario Z12,
  escena de una sola fuente, reducer puro.
  Brief: [BRIEF-WP-Z03](../../REPORTES/BRIEF-WP-Z03-juego-ciudad.md). Ficha:
  [WP-Z03](WP-Z03-juego-ciudad.md). Reporte:
  [WP-Z03](../../REPORTES/WP-Z03-juego-ciudad.md).
- 🔶 **WP-Z04 · Rabbits r/s/h como actores externos (e2e)** — track PACK · prio 2 ·
  ola GC-3 · dep Z03 ✅ · Z06 ✅ · eje IV (el peer externo ES el segundo cliente
  del contrato rooms/protocol). Brief:
  [BRIEF-WP-Z04](../../REPORTES/BRIEF-WP-Z04-rabbits-rsh.md). Ficha:
  [WP-Z04](WP-Z04-rabbits-rsh.md).
- ⬜ **WP-Z05 · Evoluciones de engine (deltas, zonas, ACL, loader, sharding)** —
  track ENGINE · prio 3 · parked GC-3 · disparo: Z08-f6 · eje IV por item; II si
  un item sustituye mecanismo vigente (destino canónico).
  Ficha: [WP-Z05](WP-Z05-engine-evoluciones.md).
- ✅ **WP-Z06 · `@zeus/mcp-launcher` — habilitador r/s/h + meta-ops** — track OPS ·
  prio 2 · dep — · eje I ✅ (tool call tronco+satélite fixture). Pack
  `@zeus/mcp-launcher` · zeus-sdk `03350a2` (+ puntero submodule). **Aceptado ✅**
  2026-07-21 (orquestador): merge FF + push `origin/main`; frontera Z12 intacta;
  live linea-espana skipped (volumen demo). Nota vigía (`ADDENDAS-GC2`):
  aceptable-con-notas — frontera actuador limpia (cero xstate; `tree.*`
  reservados). Follow-up A2→**Z15** (intentionalStops read).
  Brief: [BRIEF-WP-Z06](../../REPORTES/BRIEF-WP-Z06-mcp-launcher.md). Ficha:
  [WP-Z06](WP-Z06-mcp-launcher.md). Reporte:
  [WP-Z06](../../REPORTES/WP-Z06-mcp-launcher.md).
- ✅ **WP-Z07 · Instancia dramaturgo `ciudad` (capa lectura)** — track PACK ·
  prio 4 · ola GC-3 · dep Z03 ✅ · CA kit (instantiate + validate-story-board ✅).
  Instancia `kits/carpeta-dramaturgo/instances/ciudad/` · games-library
  `006aef1` (+ puntero submodule). **Aceptado ✅** 2026-07-21 (orquestador)
  con caveats: **D1** regenerar proyección ledger→story-board al cerrar Z04;
  **D2** tipología jugadores → Z13. Brief:
  [BRIEF-WP-Z07](../../REPORTES/BRIEF-WP-Z07-dramaturgo-ciudad.md). Ficha:
  [WP-Z07](WP-Z07-dramaturgo-ciudad.md). Reporte:
  [WP-Z07](../../REPORTES/WP-Z07-dramaturgo-ciudad.md).
- ✅ **WP-Z08 · Constelación Node-RED: visor + coordinación + población (169)** —
  track VISOR · prio 2 · eje IV. **Lote GC-1 f1–f3 ✅** (Oreja/Ojo/Ciudad lectura;
  pack `plan/SPRINTS/sprint-game-city/flows/` @ e3daee8). **f4–f5 ✅** (Mano +
  Ciudadano) — obra `21bd0cf` · merge `cd75428`. **Aceptado ✅** 2026-07-21
  (orquestador) con caveats deferred: **D1** re-smoke f1–f3 `:3017`; **D2** H1
  `:3015`; **D3** authority vivo Mano/Ciudadano (fabric). Nota vigía
  (`ADDENDAS-GC2`): aceptable — re-smoke renegociada con intento documentado.
  Caveats f1–f3: grep transparencia acotado a `packages/`.
  **🔶 f6(+f7)** GC-3 — Brief:
  [BRIEF-WP-Z08-f6-f7](../../REPORTES/BRIEF-WP-Z08-f6-f7-nodered-poblacion.md).
  Ficha: [WP-Z08](WP-Z08-nodered-visor-ciudad.md). Reporte f4–f5:
  [WP-Z08-f4-f5](../../REPORTES/WP-Z08-f4-f5-nodered-mano-ciudadano.md).
- ✅ **WP-Z09 · Mini-clon local VPS Node-RED + pago deuda rooms** — track OPS ·
  prio 2 · dep — · eje I parcial (pins 0.3.0 + scripts; sin Docker vivo ni
  publish 0.3.x). Aterrizaje `miniclon/` (zeus-sdk A1). **Aceptado ✅**
  2026-07-21 (orquestador) con caveats deferred: **D1** Docker compose/up
  dashboard; **D2** publish 0.3.x Verdaccio (DE-I12); **D3** smoke
  dashboard+cliente federado; **D4** smoke switch→VPS. Ficha:
  [WP-Z09](WP-Z09-miniclon-vps-rooms.md). Reporte:
  [WP-Z09](../../REPORTES/WP-Z09-miniclon-vps-rooms.md).
- ✅ **WP-Z10 · «Viaje»: gestor de caminos wiki → lib sobre linea-kit** — track
  ENGINE · prio 2 · dep — (adaptador gamemap espera Z02/Z03; pozo hasta Z03) ·
  eje I/II. Subpath `@zeus/linea-kit/viaje` · zeus-sdk `29e9d49` (+ puntero
  submodule). **Aceptado ✅** 2026-07-21 (orquestador): e2e línea+wiki+gate;
  ceguera método 0; gamemap walks pozo. Brief:
  [BRIEF-WP-Z10](../../REPORTES/BRIEF-WP-Z10-viajes-wiki-linea.md). Ficha:
  [WP-Z10](WP-Z10-viajes-wiki-linea.md). Reporte:
  [WP-Z10](../../REPORTES/WP-Z10-viajes-wiki-linea.md).
- ⬜ **WP-Z11 · linea-editor: autoría de líneas como server MCP por horse** —
  track ENGINE · prio 3 · parked GC-3 · dep Z06 ✅ + Z04 (cliente e2e) + Z03 ✅;
  hermano de Z10 (frontera dura: Z10 = caminos/lectura, Z11 = autoría/mutación
  + export) · ejes I/IV/II/III/V + ceguera. Precondición: glosario «viaje»
  (regla 5). Ficha: [WP-Z11](WP-Z11-linea-editor.md).
- ✅ **WP-Z12-f1 · Encendido del árbol de vida (lifecycle XState, start/stop real)** —
  track ENGINE+OPS · prio 2 · **f1 ✅ en GC-2** · dep Z06 ✅ + Z02 ✅ · ejes I/III/IV
  + ceguera. Packs `@zeus/lifecycle-kit` + `@zeus/ciudad-lifecycle` · zeus-sdk
  `fa73062` · games-library `5b5bf4e` (+ punteros submodule). **Aceptado ✅**
  2026-07-21 (orquestador): merge FF + push `origin/main` zeus+GL; e2e barrio
  fixture; frontera actuador(Z06)/cerebro(Z12) intacta. **Caveat → f2 ⬜:** wake
  authority Z03 / ledger · cascada/zonas · rollup · tablero Z08; **señal
  intentionalStops → Z15** (A2; no reopen f1).
  Brief: [BRIEF-WP-Z12-f1](../../REPORTES/BRIEF-WP-Z12-f1-encendido-arbol-vida.md).
  Ficha: [WP-Z12](WP-Z12-encendido-arbol-vida.md). Reporte:
  [WP-Z12-f1](../../REPORTES/WP-Z12-f1-encendido-arbol-vida.md).
- ⬜ **WP-Z12-f2 · Cascada/zonas + wake Z03 + rollup** — track ENGINE+OPS · prio 2 ·
  parked GC-3 · dep Z12-f1 ✅ + Z03 ✅ + **Z15 ✅** (intentionalStops read). Ficha:
  [WP-Z12](WP-Z12-encendido-arbol-vida.md).
- ⬜ **WP-Z13 · Los tres jugadores: fusión en la trama del SDK** — track PACK
  (lore+flujos) · prio 3 · parked GC-3 · dep Z12-f1 ✅ + Z03 ✅ + Z04; gancho
  Z07/Z11 · ejes IV + ceguera. Brazo ejecutable de [TRAMA-AGUA](TRAMA-AGUA.md).
  Ficha: [WP-Z13](WP-Z13-tres-jugadores.md).
- ✅ **WP-Z14 · Procedencia estados de barrio → cantera versionada** — track PACK ·
  prio 1 · dep Z02 ✅ · micro-WP D1 vigía · eje I (generador regenera seeds desde
  cantera). **No reabre Z02.** Ficha: [WP-Z14](WP-Z14-procedencia-estados.md).
  Merged games-library `8a39ece` (+ puntero submodule). Cantera
  `CENSO-ESTADOS.md` + regeneración determinista evidenciada. Aceptado ✅
  2026-07-21 (orquestador).
- 🔶 **WP-Z15 · Lectura `intentionalStops` en `@zeus/mcp-launcher` (A2)** — track
  OPS · prio **alta** · ola GC-3 · dep Z06 ✅ · desbloquea Z12-f2 · eje I/III.
  Follow-up post-GC-2 (addenda A2; no reopen Z06/Z12-f1). Brief:
  [BRIEF-WP-Z15](../../REPORTES/BRIEF-WP-Z15-intentional-stops-read.md). Ficha:
  [WP-Z15](WP-Z15-intentional-stops-read.md).

## Overview (lectura; sin estado — el estado vive arriba)

| WP | Título | Track | Prio | Depende de | Ejes CA |
|---|---|---|---|---|---|
| [Z01](WP-Z01-mockdatas-browsers.md) | Pack mockdatas ciudad → firehose/cache-browser | PACK | 1 | — | I |
| [Z02](WP-Z02-startpack-ciudad.md) | `@zeus/startpack-ciudad` (seeds desde MAPA.md) | PACK | 1 | — | I (+IV) |
| [Z03](WP-Z03-juego-ciudad.md) | Juego de engine `ciudad` (patrón pozo) | PACK | 2 | Z02 | IV dif. |
| [Z04](WP-Z04-rabbits-rsh.md) | Rabbits r/s/h como actores externos (e2e) | PACK | 2 | Z03 (Z06) | IV |
| [Z05](WP-Z05-engine-evoluciones.md) | Evoluciones de engine | ENGINE | 3 | Z08-f6 | IV/II |
| [Z06](WP-Z06-mcp-launcher.md) | `@zeus/mcp-launcher` | OPS | 2 | — (A1✅) | I |
| [Z07](WP-Z07-dramaturgo-ciudad.md) | Instancia dramaturgo `ciudad` | PACK | 4 | Z03 | kit |
| [Z08](WP-Z08-nodered-visor-ciudad.md) | Constelación Node-RED (169) | VISOR | 2 | — | IV |
| [Z09](WP-Z09-miniclon-vps-rooms.md) | Mini-clon local VPS + deuda rooms | OPS | 2 | — | I |
| [Z10](WP-Z10-viajes-wiki-linea.md) | «Viaje»: caminos wiki → linea-kit | ENGINE | 2 | — (A1✅) | I/II |
| [Z11](WP-Z11-linea-editor.md) | linea-editor: autoría MCP por horse | ENGINE | 3 | Z06·Z04·Z03 | I/IV/II/III/V |
| [Z12](WP-Z12-encendido-arbol-vida.md) | Encendido del árbol de vida (XState) | ENGINE+OPS | 2 | Z06·Z02·Z03 (A1✅) | I/IV/III |
| [Z13](WP-Z13-tres-jugadores.md) | Los tres jugadores (trama del SDK) | PACK | 3 | Z12-f1·Z03·Z04 | IV |
| [Z14](WP-Z14-procedencia-estados.md) | Procedencia estados → cantera | PACK | 1 | Z02 ✅ | I |
| [Z15](WP-Z15-intentional-stops-read.md) | Lectura intentionalStops (A2→launcher) | OPS | alta | Z06 ✅ | I/III |

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

1. **Regla de los dos mundos (ceguera):** cero **tokens del método/marco**
   (holones, práctica de gobierno, identificadores del skill/marco contenedor)
   dentro de entregables que aterricen en zeus-sdk/games-library. **No incluye
   marca de producto/datos:** `aleph` y `scriptorium` son **admisibles** como
   nombre de ciudad, barrio, registry u otros datos de instancia
   ([DC-GC-ceguera-marca](DECISIONES.md#dc-gc-ceguera-marca--2026-07-20--cerrada)).
   Este plan puede nombrar lo que quiera; los paquetes no nombran el método.
2. **Portar el concepto, no el código** (heredada de WP-U81 zeus): wiki-racer,
   MCPLauncherServer y los pythons de NETWORK-ENGINE son referencia, nunca dependencia.
3. **Transparencia para el juego** (Z08): la authority no lleva código Node-RED-aware;
   si un WP lo necesitara, es señal de diseño roto — parar y reabrir el WP.
   Verificación: acotar búsquedas a `packages/`.
4. **Cantera → repo:** ningún runtime lee la cantera (anexada en `cantera/`; el
   temporal de origen, sin autoridad, movido a `TEMP\draft\material\`) — los
   generadores (Z01/Z02/Z14) copian/transforman a datos versionados del repo destino.
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
   [RECAP-NODERED.md](RECAP-NODERED.md), [TRAMA-AGUA.md](TRAMA-AGUA.md) (lore/flujos),
   [DECISIONES.md](DECISIONES.md). Catálogo técnico: [RECURSOS-LIBS.md](RECURSOS-LIBS.md).
