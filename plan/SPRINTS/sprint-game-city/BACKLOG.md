# BACKLOG — sprint-game-city

> # ═══════════════════════════════════════════════════════════
> # ██  sprint-game-city · CERRADO · 2026-07-21 (C04)  ██
> # ═══════════════════════════════════════════════════════════
> Acta δ10: [ACTA-CIERRE-sprint-game-city-2026-07-21](../../REPORTES/ACTA-CIERRE-sprint-game-city-2026-07-21.md) ·
> Reporte: [CIERRE-sprint-game-city-2026-07-21](../../REPORTES/CIERRE-sprint-game-city-2026-07-21.md).
> **No abrir WPs nuevos en este sprint.** Cola de GOs post-cierre (H2.2 ·
> encolada **sin** 🔶 — ver §Cola de GOs): embajador (#22+#23) → motor #5 →
> SEMILLA §2/§6 → trama-agua. **E_SDK/DE-I8 fuera de cola** (veto hasta GO).

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
**Ola GC-3 (cerrada 2026-07-21 — federación y población):** lote código ✅
  **Z04 ✅** · **Z07 ✅** · **Z08 ✅** · **Z15 ✅** (A2) · **Z12-f2 ✅** (**Z12 completo**) ·
  **Z13 ✅**. Residual ops: **Tick A1b ✅ PASS** (acta).
**Ola GC-4 (cerrada 2026-07-21 — engine techo + autoría):** lote inmediato ✅
  **Z05-f1 ✅** (deltas) · **Z05-f2 ✅** (zonas) · **Z11 ✅** (linea-editor).
  Items Z05 3–6 **parked** · SEMILLA §2–§4/§6 siguen parked (ver GC-5).
  Gate pre-apertura histórico: A1b PASS claim→acta
  [ACTA-A1b-PASS-2026-07-21](../../REPORTES/ACTA-A1b-PASS-2026-07-21.md).
**Ola GC-5 (cerrada 2026-07-21 — GO custodio §1+§5):** lote **Z16 ✅** · **Z17 ✅**.
  **§2–§4/§6 parked** (sin GO). **No reopen Z05-f1.** Z05 items 3–6 parked.
  Briefs: [BRIEF-Z16](../../REPORTES/BRIEF-WP-Z16-loop-juego.md) ·
  [BRIEF-Z17](../../REPORTES/BRIEF-WP-Z17-operator-ui-ciudad.md).
  Proyección issues = **LOCAL-ONLY** (sin apply).
**Ola ARG-1 (cerrada 2026-07-21 — slice masticado GO cerrado):**
  lote ✅ **WP-A01** (§A1 parte-kit) · ✅ **WP-A02** (§A2 presencia) ·
  ✅ **WP-A03** (§A3 acta-barrio). Banner: **A01✅ · A02✅ · A03✅**.
  **§A4–§A6 parked** sin GO — no abrir. Fuente: [SEMILLA-ARG](SEMILLA-ARG.md)
  (hermana de SEMILLA; no enmienda).
  Briefs: [BRIEF-A01](../../REPORTES/BRIEF-WP-A01-parte-kit.md) ·
  [BRIEF-A02](../../REPORTES/BRIEF-WP-A02-presencia.md) ·
  [BRIEF-A03](../../REPORTES/BRIEF-WP-A03-acta-barrio.md).
  **Sigue parked sin GO:** §A4–§A6 · SEMILLA §2–§4/§6 · Z05 items 3–6 ·
  epic embajador.
  DC: [DC-GC-arg-1](DECISIONES.md#dc-gc-arg-1--2026-07-21--cerrada).
  **GO-6a/6b (2026-07-21):** mapa
  [siete plantas](MAPA-SIETE-PLANTAS.md) asentado.
  **CAMPANAS (S-03) ✅** re-scope 2026-07-21 (sonido parte en operator-ui;
  sin DE-I8 / sin E_SDK · tip zeus `1086392`). Acta HOTFIX (i):
  [ACTA-HOTFIX-ARG-1-2026-07-21](../../REPORTES/ACTA-HOTFIX-ARG-1-2026-07-21.md).

## Cola post-GC-2 (higiene de cierre de ola — 2026-07-21)

Fuente: acta vigía `ADDENDAS-GC2-2026-07-21.md` (scratchpad de sesión;
OUT_DIR fuera del mundo — no recrear bajo `TEMP/`).

**Veredictos vigía (sin reabrir ✅):** Z03 aceptable-con-notas · Z06
aceptable-con-notas · Z08-f4..5 aceptable (re-smoke renegociada con intento).

**Paquete mínimo de higiene (ops; GC-2 cerró sobre aplazamientos sin esto):**

- **Práctica de canal (2026-07-21):** toda validación de cierre que el
  orquestador acepte debe llegar en formato **claim → acta/SHA** (F-CANAL
  ACTA-CONSOLIDADA-GC23: claims «re-smoke PASS» / «scrub A3» sin soporte en
  repo). Sin acta/SHA = no cerrado.
- **Tick A1 (infra):** ✅ **cerrado 2026-07-21** — `npm ci` OK medido en
  zeus-sdk @ `fa73062` + games-library @ `5b5bf4e` (tip GL puede ir más
  adelante). Evidencia: EXIT npm ci. **No reabrir A1.** Residual runtime → **Tick A1b**.
- **Tick A1b (runtime deps):** ✅ **PASS 2026-07-21** — claim → acta
  [ACTA-A1b-PASS-2026-07-21](../../REPORTES/ACTA-A1b-PASS-2026-07-21.md).
  Evidencia: mcp-core-sdk server export OK · express 5.2.1 · `:3017`/`:3015`
  UP · re-smoke health/admin 200 · e2e federación **8/8** (wiring ZEUS_* +
  wait authority). SHAs: zeus `af0bad9` · GL `439788f`. **No reabrir A1b.**
  Acta FAIL previo [RESMOKE-post-A1](../../REPORTES/RESMOKE-post-A1-2026-07-21.md)
  se conserva (claim→acta; no reescribir historia).
- **Re-smoke:** f1–f3 `:3017` + H1 `:3015` — **PASS** bajo A1b (misma acta).
  Framing histórico Z08 «pendiente acta» corregido → fue FAIL; ahora cerrado
  con A1b PASS.
- **Push S_SDK:** tip local ahead (~10+) → origin (gate de ola; custodio).
  No bloquea apertura 🔶; anotar en briefs.
- **A2 → WP-Z15:** ✅ **cerrado 2026-07-21** — lectura `intentionalStops` en
  `@zeus/mcp-launcher` + hook lifecycle @ zeus `a4aaf8c`. **Z12-f2 despachable.**
  Ficha: [WP-Z15](WP-Z15-intentional-stops-read.md). Reporte:
  [WP-Z15](../../REPORTES/WP-Z15-intentional-stops-read.md).
- **HOTFIX-GATES:** ✅ zeus `af0bad9` — 17 offenders mcp-launcher cleared;
  `npm run gates` OK. Scrub WP-Z* en launcher + ciudad-lifecycle.
- **HOTFIX-GATES-2:** ✅ CA1 cerrado — zeus `0b566e6` (= `origin/main`).
  Remedio: 48 offenders `two-games`/`\bdelta\b` (colisión léxica `GAME_STATE_DELTA`).
  Excepciones D-8 en `exceptions.mjs` (6 paths). `npm run gates` OK.
  Actions CI run **29839611853** success (job lint+gates verde). Release no corrió.
  **Z05-f1 sigue ✗** (no se reabre).
  Acta: [ACTA-HOTFIX-GATES-2-2026-07-21](../../REPORTES/ACTA-HOTFIX-GATES-2-2026-07-21.md).
- **HOTFIX-GATES-3:** ✅ CA1 cerrado — zeus `48e2062` (= `origin/main`).
  Remedio: 1 offender `[ports]` en
  `packages/mesh/operator-ui/fixtures/ciudad-vista-smoke.mjs` (`:3017` hardcode).
  URL vía `resolveRoomClientConfig` / presets-sdk env (gate no desactivado).
  CI **29857964265** success · Release **29857967650** success (primer Release
  verde post-touch `packages/**` de Z17). **Z17 sigue ✅ — no se reabre.**
  Acta: [ACTA-HOTFIX-GATES-3-2026-07-21](../../REPORTES/ACTA-HOTFIX-GATES-3-2026-07-21.md).
- **GO-5 · Webs + Release:** ✅ 3 webs regeneradas (site-web / `workflow_dispatch`
  Docs) tip zeus `48e2062` + Release **29857967650**. Docs runs:
  Z_SDK **29858825757** · games-library **29858827677** · S_SDK **29858829917**
  (todas success + deploy). URLs: `z-sdk.escrivivir.co` ·
  `games.z-sdk.escrivivir.co` · `s-sdk.escrivivir.co`. Nav C8 ampliado OK.
  GC-1..5 citadas sin reopen. `<pendiente>`: fila `ciudad` en `/startpacks`
  del catálogo GL. Acta:
  [ACTA-GO5-webs-release-2026-07-21](../../REPORTES/ACTA-GO5-webs-release-2026-07-21.md).

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
acta TEMP/ irrecuperable; veredictos absorbidos en este fichero + addendas custodio (GO parcial
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
  acta TEMP/ irrecuperable; veredictos absorbidos en este fichero
  (`REVISION-GC1-2026-07-20` §ADDENDUM Tick A1; vivía en `TEMP/vigia/`).
- **Causa:** limpieza post-GC-1 borró 14 dot-entries de raíz del checkout
  zeus-sdk (incl. gitfile `.git`); módulo git intacto en `7567bf3`.
- **Remedio:** restaurar gitdir links + `git restore` de los 14. Status limpio,
  submodule sano, `linea-kit` + `.npmrc` presentes.
- **Desbloqueados:** Z10 · Z06 · Z12-f1 · re-smoke Z08.

## Higiene / ticks abiertos (ops, no WP)

- **TEMP/ retirada por custodio 2026-07-21** — evita dirty en merges (WP-Z14). No recrear; workers: no escribir bajo `TEMP/`. `.gitignore` ignora `TEMP/`. Acta vigía GC-1: acta TEMP/ irrecuperable; veredictos absorbidos en este fichero.
- **Worktree stale Z01** (`zeus-sdk/.worktrees/wp-gc-z01-mockdatas-browsers`):
  **parcial** 2026-07-20 — `git worktree remove --force` desregistró el WT
  (ya no aparece en `worktree list`); borrado FS falló por paths largos
  (Windows). **Higiene pendiente:** borrar el directorio residual en quietud
  (`rmdir` long-path / custodio). No lo usan Z09/Z14.
- **H1 (abierto):** reiniciar cache-browser `:3015` contra checkout actual
  (`ZEUS_VOLUMES_ROOT`) — **precondición de apertura Z08-f4** (§E b).
- **Publish GL / push tip (✅ tip remoto 2026-07-21 post GC-2):** push tip 2026-07-21 (post GC-2) · S_SDK `990d763` · GL `5b5bf4e` · zeus `fa73062`. CI: GL success @ tip; zeus Docs success, CI/Release fail (known); S_SDK Docs sin run (paths `docs/**`). **Gate tip remoto satisfecho**; residual runner limpio / D2 publish 0.3.x Z09.
- **Tick A1b (runtime deps, abierto 2026-07-21):** post-`npm ci` tree no
  arranca fabric (`mcp-core-sdk` incompleto + `express` missing). Dueño
  custodio/ops. Bloquea vivos/re-smoke D1–D3 / Z04·Z08; **no** merges Z08/Z15.
  No confundir con **A1✅** (`npm ci` OK). Acta `RESMOKE-post-A1-2026-07-21.md`.
- **Re-smoke Z08 (abierto, FAIL 2026-07-21):** intento post-A1 documentado;
  `:3017`/`:3015` DOWN → **A1b**. Residual ops — no reabre ✅ Z08.
- **Higiene doc post-TEMP (§E cola):** VISTA §5 → `CENSO-ESTADOS.md`; README
  linaje; regla 4 BACKLOG — micro-WP / tick custodio, no bloquea GC-2.
- **Cola post-GC-2:** ver §Cola post-GC-2 (**A1✅** npm-ci · **A1b** runtime ·
  re-smoke · push S_SDK · A2→Z15). A1 cerrado; A1b/re-smoke/H1 = ops residual.

## WPs (estado canónico)

> Lote GC-2 (**cerrada 2026-07-21**): **Z03 ✅ · Z06 ✅ · Z08-f4..5 ✅ · Z12-f1 ✅**.
> Lote GC-3 (**cerrada 2026-07-21**): **Z04 ✅ · Z07 ✅ · Z08 ✅ · Z15 ✅ · Z12-f2 ✅**
> (**Z12 completo**) · **Z13 ✅**. Lote GC-4 (**cerrada 2026-07-21**): **Z05-f1 ✅ ·
> Z05-f2 ✅ · Z11 ✅**. Lote GC-5 (**cerrada 2026-07-21 · §1+§5**): **Z16 ✅ · Z17 ✅**.
> A1b ✅. Issues: S_SDK sync-map (LOCAL-ONLY esta ola; sin apply GC-5).

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
- ✅ **WP-Z04 · Rabbits r/s/h como actores externos (e2e)** — track PACK · prio 2 ·
  ola GC-3 · dep Z03 ✅ · Z06 ✅ · eje IV (peer externo = 2º cliente rooms/protocol).
  Federación fixtures + smoke/tests/C-03 · games-library `b020a81` (+ puntero
  submodule). **Aceptado ✅** 2026-07-21 (orquestador) con caveat **A1b**
  (runtime deps / e2e socket vivo deferido; A1✅ npm-ci). Sin conflictos path con Z07. Follow-up: regenerar
  proyección Z07 (D1) — no este merge. Brief:
  [BRIEF-WP-Z04](../../REPORTES/BRIEF-WP-Z04-rabbits-rsh.md). Ficha:
  [WP-Z04](WP-Z04-rabbits-rsh.md). Reporte:
  [WP-Z04](../../REPORTES/WP-Z04-rabbits-rsh.md).
- ✅ **WP-Z05-f1 · `GAME_STATE_DELTA` (protocolo v0.2)** — track ENGINE · prio 3 ·
  ola GC-4 · umbrella [WP-Z05](WP-Z05-engine-evoluciones.md) item 1 · eje IV/II ·
  zeus-sdk `1d087ee` (+ puntero submodule). **Aceptado ✅** 2026-07-21
  (orquestador): merge FF + push `origin/main`; protocol delta helpers +
  authority-kit `stateDelta` + `MapEngine.getDelta`; ejes IV/II + ceguera.
  Brief: [BRIEF-WP-Z05-f1](../../REPORTES/BRIEF-WP-Z05-f1-game-state-delta.md).
  Ficha: [WP-Z05](WP-Z05-engine-evoluciones.md). Reporte:
  [WP-Z05-f1](../../REPORTES/WP-Z05-f1-game-state-delta.md). Rama:
  `wp/gc-z05-f1-game-state-delta`.
- ✅ **WP-Z05-f2 · Suscripción por zona/distrito (gamechannel)** — track ENGINE ·
  prio 3 · ola GC-4 · umbrella [WP-Z05](WP-Z05-engine-evoluciones.md) item 2 ·
  eje IV/II · zeus-sdk `11bde48` (+ puntero) · games-library `d7f5dfa` (+ puntero).
  **Aceptado ✅** 2026-07-21 (orquestador): rebase post-f1 + merge FF + push
  zeus+GL; filtro zona + `CLIENT_SUSCRIBE.zones` + smoke 24-barrio; ejes IV/II +
  ceguera. Slice server-side authority deferred. Brief:
  [BRIEF-WP-Z05-f2](../../REPORTES/BRIEF-WP-Z05-f2-suscripcion-zonas.md).
  Ficha: [WP-Z05](WP-Z05-engine-evoluciones.md). Reporte:
  [WP-Z05-f2](../../REPORTES/WP-Z05-f2-suscripcion-zonas.md). Rama:
  `wp/gc-z05-f2-suscripcion-zonas`.
- ⬜ **WP-Z05 · Evoluciones de engine (paraguas items 3–6 parked)** — ACL /
  loader / sharding / spec launcher — **no abrir** en GC-4 inmediato. Ficha:
  [WP-Z05](WP-Z05-engine-evoluciones.md).
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
  **D2** tipología jugadores → Z13. **D1 Z07 regenerado post-Z04**. Brief:
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
  **f6(+f7) ✅** GC-3 — obra `cfd7c57` · tip rama `1c6eb6d` · merge `7dfff87`.
  **Z08 completo ✅** 2026-07-21 (orquestador). Población por lotes
  (`POBLACION_MAX=24`) + constelación ≥2 NR + wishlist f7. Caveats
  deferred (siguen): **D1** re-smoke f1–f3 `:3017`; **D2** H1 `:3015`;
  **D3** authority vivo Mano/Ciudadano — A1✅ (`npm ci`); vivos bloqueados por
  **Tick A1b** (no bloquea ✅ Z08). Brief:
  [BRIEF-WP-Z08-f6-f7](../../REPORTES/BRIEF-WP-Z08-f6-f7-nodered-poblacion.md).
  Ficha: [WP-Z08](WP-Z08-nodered-visor-ciudad.md). Reportes:
  [f4–f5](../../REPORTES/WP-Z08-f4-f5-nodered-mano-ciudadano.md) ·
  [f6–f7](../../REPORTES/WP-Z08-f6-f7-nodered-poblacion.md).
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
- ✅ **WP-Z11 · linea-editor: autoría de líneas como server MCP por horse** —
  track ENGINE · prio 3 · ola GC-4 · dep Z06 ✅ + Z04 ✅ + Z03 ✅ · hermano de Z10
  (frontera dura: Z10 = caminos/lectura, Z11 = autoría/mutación + export) ·
  ejes I/IV/II/III/V + ceguera · zeus-sdk `f93f163` (+ puntero) · games-library
  `d5548b1` (+ puntero). **Aceptado ✅** 2026-07-21 (orquestador, re-revisión):
  FF+push zeus; rebase GL onto `d7f5dfa` + FF+push; pack `@zeus/linea-editor` +
  smokes; ceguera post-corrección #1. Brief:
  [BRIEF-WP-Z11](../../REPORTES/BRIEF-WP-Z11-linea-editor.md). Ficha:
  [WP-Z11](WP-Z11-linea-editor.md). Reporte:
  [WP-Z11](../../REPORTES/WP-Z11-linea-editor.md). Rama:
  `wp/gc-z11-linea-editor`.
- ✅ **WP-Z12 · Encendido del árbol de vida (XState) — completo vía f1+f2** —
  track ENGINE+OPS · **Z12 completo ✅** (f1 GC-2 · f2 GC-3). Canónico para
  proyección/parser; detalle en bullets f1/f2 debajo. No reabrir.
- ✅ **WP-Z12-f1 · Encendido del árbol de vida (lifecycle XState, start/stop real)** —
  track ENGINE+OPS · prio 2 · **f1 ✅ en GC-2** · dep Z06 ✅ + Z02 ✅ · ejes I/III/IV
  + ceguera. Packs `@zeus/lifecycle-kit` + `@zeus/ciudad-lifecycle` · zeus-sdk
  `fa73062` · games-library `5b5bf4e` (+ punteros submodule). **Aceptado ✅**
  2026-07-21 (orquestador): merge FF + push `origin/main` zeus+GL; e2e barrio
  fixture; frontera actuador(Z06)/cerebro(Z12) intacta. Caveats f2 (wake/cascada/
  rollup) + Z15 intentionalStops → **cerrados en f2/Z15** (no reopen f1).
  Brief: [BRIEF-WP-Z12-f1](../../REPORTES/BRIEF-WP-Z12-f1-encendido-arbol-vida.md).
  Ficha: [WP-Z12](WP-Z12-encendido-arbol-vida.md). Reporte:
  [WP-Z12-f1](../../REPORTES/WP-Z12-f1-encendido-arbol-vida.md).
- ✅ **WP-Z12-f2 · Cascada/zonas + wake Z03 + rollup** — track ENGINE+OPS · prio 2 ·
  ola GC-3 · dep Z12-f1 ✅ + Z03 ✅ + **Z15 ✅** · zeus-sdk `e7d9766` (+ puntero
  submodule). **Aceptado ✅** 2026-07-21 (orquestador): merge FF + push
  `origin/main`; cascada/zonas + rollup + wake bridge + canRetry actuador; ejes
  I/III/IV + ceguera. **Z12 completo ✅ · Z13 despachable.** Brief:
  [BRIEF-WP-Z12-f2](../../REPORTES/BRIEF-WP-Z12-f2-arbol-cascada.md). Ficha:
  [WP-Z12](WP-Z12-encendido-arbol-vida.md). Reporte:
  [WP-Z12-f2](../../REPORTES/WP-Z12-f2-arbol-cascada.md). Rama:
  `wp/gc-z12-f2-arbol-cascada`.
- ✅ **WP-Z13 · Los tres jugadores: fusión en la trama del SDK** — track PACK
  (lore+flujos) · prio 3 · ola GC-3 · dep Z12-f1 ✅ + Z03 ✅ + Z04 ✅ (Z12 completo
  vía f2 ✅) · gancho Z07/Z11 · ejes IV + ceguera. games-library `2b8ed31`
  (+ puntero submodule). **Aceptado ✅** 2026-07-21 (orquestador): merge FF +
  push `origin/main`; mapeo residente/visitante/corriente + acto V ledger→
  story-board; tablero+cronista; ceguera lore. Caveat vivos e2e → **A1b**;
  export Z11 parked. Brazo ejecutable de [TRAMA-AGUA](TRAMA-AGUA.md). Brief:
  [BRIEF-WP-Z13](../../REPORTES/BRIEF-WP-Z13-tres-jugadores.md). Ficha:
  [WP-Z13](WP-Z13-tres-jugadores.md). Reporte:
  [WP-Z13](../../REPORTES/WP-Z13-tres-jugadores.md). Rama:
  `wp/gc-z13-tres-jugadores`.
- ✅ **WP-Z14 · Procedencia estados de barrio → cantera versionada** — track PACK ·
  prio 1 · dep Z02 ✅ · micro-WP D1 vigía · eje I (generador regenera seeds desde
  cantera). **No reabre Z02.** Ficha: [WP-Z14](WP-Z14-procedencia-estados.md).
  Merged games-library `8a39ece` (+ puntero submodule). Cantera
  `CENSO-ESTADOS.md` + regeneración determinista evidenciada. Aceptado ✅
  2026-07-21 (orquestador).
- ✅ **WP-Z15 · Lectura `intentionalStops` en `@zeus/mcp-launcher` (A2)** — track
  OPS · prio **alta** · ola GC-3 · dep Z06 ✅ · **aceptado ✅** 2026-07-21
  (orquestador): merge FF + push `origin/main` zeus @ `a4aaf8c`; API read +
  health + hook lifecycle; ejes I/III. **Z12-f2 despachable.** Brief:
  [BRIEF-WP-Z15](../../REPORTES/BRIEF-WP-Z15-intentional-stops-read.md). Ficha:
  [WP-Z15](WP-Z15-intentional-stops-read.md). Reporte:
  [WP-Z15](../../REPORTES/WP-Z15-intentional-stops-read.md).
- ✅ **WP-Z16 · Loop de juego (SEMILLA §1): decay / energía / objetivo** — track
  PACK · prio 1 · ola **GC-5** · dep Z03 ✅ · eje I (+ IV diferido) · ceguera.
  **aceptado ✅** 2026-07-21 (orquestador): games-library `21a6592` (+ puntero
  submodule); reducer puro `@zeus/ciudad` (decay/energía/`snapshot.objetivo`);
  tests 18/18 + mvp-smoke + loop-smoke; ceguera 0. Eje IV vivo → Z08/Z17.
  Brief: [BRIEF-WP-Z16](../../REPORTES/BRIEF-WP-Z16-loop-juego.md). Ficha:
  [WP-Z16](WP-Z16-loop-juego.md). Reporte:
  [WP-Z16](../../REPORTES/WP-Z16-loop-juego.md).
- ✅ **WP-Z17 · Vista 3D operator-ui → ciudad (SEMILLA §5)** — track VISOR ·
  prio 1 · ola **GC-5** · dep Z02 ✅ · Z03 ✅ (soft Z16) · ejes IV/I · ceguera.
  **aceptado ✅** 2026-07-21 (orquestador): zeus-sdk `8afc0a0` (+ puntero
  submodule); cableado `game:'ciudad'` + proyección barrios/estados en
  operator-bridge/ui; bridge 11/11 · build:all · ciudad-vista-smoke 24 barrios;
  ceguera 0. Brief: [BRIEF-WP-Z17](../../REPORTES/BRIEF-WP-Z17-operator-ui-ciudad.md).
  Ficha: [WP-Z17](WP-Z17-operator-ui-ciudad.md). Reporte:
  [WP-Z17](../../REPORTES/WP-Z17-operator-ui-ciudad.md).
- ✅ **WP-A01 · Parte de plaza (`parte-kit`) · SEMILLA-ARG §A1** — track PACK ·
  prio 1 · ola **ARG-1** · dep Z01·Z02·Z07·Z05-f1 ✅ · ejes I/II · ceguera
  (validarParte = patrón proyector).
  **aceptado ✅** 2026-07-21 (orquestador): zeus-sdk `c7ec7d0` (+ puntero
  submodule); ParteDeCiudad v1 + parte-kit (redactar/render/validar/publicar);
  tests determinismo/pureza/ceguera/consumidores/frontera; ceguera 0. Brief:
  [BRIEF-WP-A01](../../REPORTES/BRIEF-WP-A01-parte-kit.md). Ficha:
  [WP-A01](WP-A01-parte-kit.md). Reporte:
  [WP-A01](../../REPORTES/WP-A01-parte-kit.md).
- ✅ **WP-A02 · Señal de presencia · SEMILLA-ARG §A2** — track PACK · prio 1 ·
  ola **ARG-1** · dep Z16 ✅ · ejes I/II · ceguera.
  **aceptado ✅** 2026-07-21 (orquestador): games-library `2b14d36` (+ puntero
  submodule); SeñalDePresencia v1 + mock + enganche loop Z16; tests 24/24 +
  mvp/loop/presencia-smoke; ceguera 0. Brief:
  [BRIEF-WP-A02](../../REPORTES/BRIEF-WP-A02-presencia.md). Ficha:
  [WP-A02](WP-A02-presencia.md). Reporte:
  [WP-A02](../../REPORTES/WP-A02-presencia.md).
- ✅ **WP-A03 · Acta de barrio + estado `roto` · SEMILLA-ARG §A3** —
  track PACK · prio 1 · ola **ARG-1** · dep A01 ✅ viva · Z10 ✅ · ejes I/II ·
  ceguera.
  **aceptado ✅** 2026-07-21 (orquestador): zeus-sdk `a6381a5` + games-library
  `3288510` (+ punteros submodule); ActaDeBarrio v1 + `@zeus/acta-kit` +
  wake `roto` + reparar vía viaje juguete; tests acta-kit 7/7 · viaje 6/6 ·
  ciudad 30/30; ceguera 0. Cierra slice ARG-1 masticado (A01·A02·A03 ✅);
  §A4–§A6 parked. Brief:
  [BRIEF-WP-A03](../../REPORTES/BRIEF-WP-A03-acta-barrio.md). Ficha:
  [WP-A03](WP-A03-acta-barrio.md). Reporte:
  [WP-A03](../../REPORTES/WP-A03-acta-barrio.md).

## Overview (lectura; sin estado — el estado vive arriba)

| WP | Título | Track | Prio | Depende de | Ejes CA |
|---|---|---|---|---|---|
| [Z01](WP-Z01-mockdatas-browsers.md) | Pack mockdatas ciudad → firehose/cache-browser | PACK | 1 | — | I |
| [Z02](WP-Z02-startpack-ciudad.md) | `@zeus/startpack-ciudad` (seeds desde MAPA.md) | PACK | 1 | — | I (+IV) |
| [Z03](WP-Z03-juego-ciudad.md) | Juego de engine `ciudad` (patrón pozo) | PACK | 2 | Z02 | IV dif. |
| [Z04](WP-Z04-rabbits-rsh.md) | Rabbits r/s/h como actores externos (e2e) | PACK | 2 | Z03 (Z06) | IV |
| [Z05](WP-Z05-engine-evoluciones.md) | Evoluciones de engine (f1 deltas · f2 zonas en GC-4) | ENGINE | 3 | Z04/Z03 señal | IV/II |
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
| [Z16](WP-Z16-loop-juego.md) | Loop de juego (SEMILLA §1) | PACK | 1 | Z03 ✅ | I (+IV dif.) |
| [Z17](WP-Z17-operator-ui-ciudad.md) | operator-ui vista ciudad (SEMILLA §5) | VISOR | 1 | Z02·Z03 ✅ | IV/I |
| [A01](WP-A01-parte-kit.md) | Parte de plaza / parte-kit (§A1) | PACK | 1 | Z01·Z02·Z07·Z05-f1 ✅ | I/II |
| [A02](WP-A02-presencia.md) | Señal de presencia (§A2) | PACK | 1 | Z16 ✅ | I/II |
| [A03](WP-A03-acta-barrio.md) | Acta de barrio + `roto` (§A3) | PACK | 1 | A01 viva + Z10 ✅ | I/II |

## Candidatos SEMILLA — profundizar la gamificación (ver [SEMILLA-GAMIFICACION.md](SEMILLA-GAMIFICACION.md))

> **GC-4 cerrada 2026-07-21** (Z05-f1·f2·Z11 ✅).
> **GC-5 cerrada 2026-07-21 (GO custodio §1+§5):** **Z16 ✅** loop · **Z17 ✅**
> operator-ui. **§2–§4/§6 parked** — no abrir sin GO nuevo. No reopen Z05-f1.
> **ARG-1 cerrada** (slice masticado GO · hermana [SEMILLA-ARG](SEMILLA-ARG.md)):
> **A01✅ · A02✅ · A03✅**. **§A4–§A6 parked** sin GO. No des-aparca SEMILLA §2/§6.

- ✅ **§1 Loop de juego** → **WP-Z16** (objetivos/decay/economía de energía).
- ⬜ **§2 Estado del juego = estado real del sistema** (**parked**) — barrio ↔
  paquete/servicio; salud CI alimenta vivo/latente. Necesita Z06 + guardarraíles.
  (SEMILLA-ARG §A4 lo extiende cuando viva; **no** des-aparca §2 hoy.)
- ⬜ **§3 Ciudadanos con misión** (**parked**) — viajes Z10 como quests.
- ⬜ **§4 Cronista** (**parked**) — story-board vuelve al juego. Cadena
  Z03+Z07+Z11; no abrir antes.
- ✅ **§5 Vista 3D** → **WP-Z17** — `operator-ui` como vista de la ciudad.
- ⬜ **§6 Meta-juego del swarm** (**parked**) — WPs como misiones en la plaza;
  necesita §1–§4 vivos + decisión de gobernanza.
  (SEMILLA-ARG lo roza; **no** des-aparca §6 hoy.)
- ⬜ **Trama-agua como mundo del dramaturgo** (ronda 3, parked) — ejes REIC de
  [TRAMA-AGUA](TRAMA-AGUA.md) §5.5; dep Z07 + Z13.
## Federaciones / externos (parked post-cierre — sin 🔶)

> Sprint **CERRADO**. **No abrir** epic embajador (E01–E02). **E03 ✅**
> (#24 CLOSED). **CAMPANAS ✅** (#25 CLOSED). I75 ✅ / #21 CLOSED · página
> viva; Z_SDK #4/#5/#6 = overlap pack (citar, no cerrar). OPEN parked:
> S_SDK **#22 · #23** (+ **#5** motor).

- ⬜ **WP-E01 · Epic embajador (paraguas)** — **parked** sin GO · no abrir ·
  sin brief. Fases = items del paraguas (patrón Z05): (1) kit · (2) peercard ·
  (3) niveles · (4) visual. Ops pavimentación = GO-4 (acta aparte). ACL Z05
  item 3 se des-aparca cuando este epic abra. Overlap pack: Z_SDK #5/#6 (no
  cerrar). Ficha: [WP-E01](WP-E01-embajador.md). Issue: S_SDK #22.
- ⬜ **WP-E02 · Privacidad de federación** — **parked** · `ssbId` en handshake
  + firma de tarjeta viajera. Overlap pack: Z_SDK #4 (no cerrar). No abre E01.
  Ficha: [WP-E02](WP-E02-privacidad-federacion.md). Issue: S_SDK #23.
- ✅ **WP-E03 · Página pública «tubería protegida» (paraguas)** —
  **aceptado ✅** 2026-07-21 (gobierno V2 / C02): S_SDK #24 **CLOSED** ·
  página viva https://s-sdk.escrivivir.co/guide/tuberia-protegida · merge
  tip `e28439d` / obra `adfb70c` · related **WP-I75 ✅** (#21 CLOSED ·
  `f0e5cc7`). Ficha: [WP-E03](WP-E03-tuberia-protegida.md). Reporte:
  [WP-E03](../../REPORTES/WP-E03-tuberia-protegida.md).

## Candidatas post-ARG-1

> Mapa de decisión: [MAPA-SIETE-PLANTAS.md](MAPA-SIETE-PLANTAS.md) ·
> [DC-GC-siete-plantas](DECISIONES.md#dc-gc-siete-plantas--2026-07-21--cerrada-mapa-sin-wp).
> Cinco spinoffs nombrados: S-02 · **S-03** · S-05 · S-06 · S-J.

- ✅ **WP-CAMPANAS · CAMPANAS-city (S-03 re-scope)** — el parte **SUENA** en
  operator-ui: evento sonoro por clase de titular (**despertar · degradar ·
  roto**) + toggle silencio; fuente parte-kit; **sin** E_SDK / DE-I8.
  **aceptado ✅** 2026-07-21 (gobierno): zeus-sdk `1086392` (+ puntero
  submodule); bridge 13/13 · campanas-smoke OK · build:dev-app OK; ceguera 0.
  Brief: [BRIEF-WP-CAMPANAS](../../REPORTES/BRIEF-WP-CAMPANAS-city.md).
  Reporte: [WP-CAMPANAS-city](../../REPORTES/WP-CAMPANAS-city.md).
  Ficha: [WP-CAMPANAS](WP-CAMPANAS.md). Issue: S_SDK #25 CLOSED.

## Cierre del sprint — **HECHO** (C04 · 2026-07-21)

> **Estado: CERRADO.** No evaporar; no reabrir olas. Evidencia canónica:
> [ACTA-CIERRE δ10](../../REPORTES/ACTA-CIERRE-sprint-game-city-2026-07-21.md) ·
> [CIERRE](../../REPORTES/CIERRE-sprint-game-city-2026-07-21.md).

Retroalimentación a aleph (evidencia, no WP nuevo):

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

## Cola de GOs post-cierre (H2.2 · 2026-07-22)

> **Encolada, no abierta.** Gobierno V2: asiento atómico sin ⬜→🔶.
> Orden revisable por PO. Fuente de decisión: raíz
> [DE-I19](../../DECISIONES.md) · sprint
> [DC-GC-cola-h22](DECISIONES.md#dc-gc-cola-h22--2026-07-22--cerrada-cola-sin-abrir).
> Los bullets de federación / SEMILLA arriba siguen ⬜ parked; esta cola es
> la vista operativa de «qué GO puede venir después».

| # | Ítem | Refs | Estado cola |
| - | ---- | ---- | ----------- |
| 1 | embajador (paraguas E01·E02) | S_SDK **#22** · **#23** | ⬜ encolado — sin brief · sin 🔶 |
| 2 | motor (Z05 items 3–6 / ACL) | Z_SDK **#5** | ⬜ encolado — sin brief · sin 🔶 |
| 3 | SEMILLA §2 / §6 | [SEMILLA-GAMIFICACION](SEMILLA-GAMIFICACION.md) | ⬜ encolado — sin brief · sin 🔶 |
| 4 | trama-agua | [TRAMA-AGUA](TRAMA-AGUA.md) | ⬜ encolado — sin brief · sin 🔶 |

**Fuera de cola (veto explícito hasta GO custodio):** E_SDK / DE-I8 —
horizonte de inflación `HOLONES/03-emmanuel/`; **no** encolar · **no** abrir ·
**no** brief. (Antes figuraba mezclado en «parked sin GO»; H2.2 lo separa.)

## Reglas del sprint (además de las del skill)

1. **Regla de los dos mundos (ceguera):** cero **tokens del método/marco**
   (holones, práctica de gobierno, identificadores del skill/marco contenedor,
   **y** ids de tracking `WP-Z\d+`) dentro de entregables que aterricen en
   zeus-sdk/games-library. Scope mínimo de grep: `packages/` **+** `e2e/` **+**
   `kits/instances/`. **No incluye marca de producto/datos:** `aleph` y
   `scriptorium` son **admisibles** como nombre de ciudad, barrio, registry u
   otros datos de instancia
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
