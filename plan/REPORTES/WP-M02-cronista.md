# WP-M02 · cronista — reporte

| dato | valor |
| ---- | ----- |
| agente | worker WP-M02 (cronista) |
| fecha | 2026-07-22 |
| rama | `wp/v1-m02-cronista` (games-library) · reporte S_SDK `wp/v1-m02-cronista` |
| commits | games-library `bf58781834e2f2958f7d106e3c3e054d918e117f` (base `80f6157`) |
| eje(s) CA | **I** (cronista consume board) · **II** (destino canónico único) · ceguera regla 14 |
| estado propuesto | listo para revisión |
| issue | LOCAL-ONLY (sin `gh issue create`; apply+sync-map post-lote · regla 17) |

## Qué se hizo

Actor **cronista** (rol `dj`) en pack `@zeus/ciudad`: lee el
`story-board.json` canónico de la instancia dramaturgo ciudad y re-emite
actos como `announce` en plaza (join+announce autorizados para `dj` en
catálogo; **sin** tocar `domain.mjs` / engine). Contrato de lectura
multi-agente documentado (≥2 lectores: cronista + `story-board-reader`).
Cursor de idempotencia por `act.id`. Campanas / audio **no** reabiertos
(dep ✅; bridge ya formatea ledger `announce` para HUD).

**Desviaciones:** ninguna del alcance. Audio de `parte` ≠ `announce`
(evidencia literal del bridge); el brief «suena vía campanas» se cubre
como dep cerrada + camino plaza visible vía ledger announce, sin reopen.

## Archivos tocados (GL `bf58781`)

| path | cambio |
| ---- | ------ |
| `packages/ciudad/src/cronista.mjs` | creado — carga/inspección board, proyección announce, cursor |
| `packages/ciudad/src/contract.mjs` | `join`/`announce` admiten rol `dj` |
| `packages/ciudad/fixtures/cronista-smoke.mjs` | creado — smoke ≥1 announce trazable a acto |
| `packages/ciudad/fixtures/story-board-reader.mjs` | creado — 2º lector (solo lectura) |
| `packages/ciudad/test/cronista.test.mjs` | creado — 4 tests |
| `packages/ciudad/package.json` | export `./cronista` + scripts smoke/reader |
| `packages/ciudad/README.md` | puntero roles/smoke |
| `kits/.../ciudad/readerapp/CONTRATO-LECTURA.md` | creado — contrato multi-agente |
| `kits/.../ciudad/ledger/MAPEO.md` | filas contrato + cronista |
| `plan/REPORTES/WP-M02-cronista.md` | este reporte (S_SDK) |

**No tocados:** `packages/ciudad/src/domain.mjs` · zeus-sdk · engine ·
BACKLOG · paths M01 (misiones / censo-origen-destino / idle walk).

## GATE PRE-MERGE · ∩ M01 (ficheros compartidos / riesgo)

| fichero | riesgo si M01 también lo edita |
| -------- | ------------------------------ |
| `packages/ciudad/src/contract.mjs` | **alto** — roles `join`/`announce` |
| `packages/ciudad/package.json` | medio — exports/scripts |
| `packages/ciudad/README.md` | bajo — docs |
| `kits/.../ciudad/ledger/MAPEO.md` | bajo — 2 líneas de puntero |

Resto de la obra M02 es exclusivo (`cronista.mjs`, fixtures/tests
cronista, `CONTRATO-LECTURA.md`). Orquestador: merge con ojo a
`contract.mjs` si M01 lo tocó.

## Evidencia

> Worktree GL:
> `C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-v1-m02-cronista`

```
# Env (brief)
git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
→ 1086392d67d6398b43ccf5379062713b3c0dd486

git -C HOLONES/01-mythos/games-library/.worktrees/wp-v1-m02-cronista rev-parse HEAD
→ bf58781834e2f2958f7d106e3c3e054d918e117f

git -C . rev-parse HEAD   # tip briefs a8c9131; rama reporte wp/v1-m02-cronista
→ a8c91318739b2c00029e7923b388317a3f65c0e8  (padre; tip reporte = este commit)

# Tests / smokes (worktree GL tras npm install)
node --test packages/ciudad/test/cronista.test.mjs
→ 4 pass / 0 fail

npm test -w @zeus/ciudad
→ 34 pass / 0 fail

npm run cronista-smoke -w @zeus/ciudad
→ CRONISTA_SMOKE_OK {"actorId":"cronista","role":"dj","actId":"act-1",
   "message":"[act-1] plaza abierta","ledgerSeq":1,"announced":true,...}

npm run story-board-reader -w @zeus/ciudad
→ STORY_BOARD_READER { slug: 'ciudad', actCount: 4,
   announceableActIds: [ 'act-1', 'act-2', 'act-3' ], ok: true }

node kits/carpeta-dramaturgo/scripts/validate-story-board.mjs \
  kits/carpeta-dramaturgo/instances/ciudad/readerapp/story-board.json
→ ✅ dialect=solve-inline …

# Ceguera regla 14 (árbol entregables + git log -p tip)
rg -i 'SCRIPT_SDK|S_SDK|holón|holarquía|juntura|HOLONES|swarm-orquestacion|WP-Z\d+' \
  (paths obra M02) → 0 hits
git log -1 -p → 0 hits método
marca aleph/scriptorium: OK (DC-GC-ceguera-marca)
```

### Criterios de aceptación

| CA | evidencia |
| -- | --------- |
| Cronista lee board → ≥1 announce trazable | smoke `act-1` / `[act-1] plaza abierta` · test join+announce |
| Contrato lectura multi-agente | `CONTRATO-LECTURA.md` · reader + cronista |
| Sin engine / sin canal nuevo / sin reopen CAMPANAS·Z07 | diff sin `domain.mjs`; audio no tocado |
| Eje **I** | consumidor real = cronista (`cronista.mjs` + smoke) |
| Eje **II** | destino único `…/readerapp/story-board.json` (`CANONICAL_STORY_BOARD`) |
| Ceguera árbol + `git log -p` | 0 hits · marca OK |
| Diff en `ALCANCE_DIFF` | GL pack/instancia + este reporte |

## Cómo probar

```bash
cd HOLONES/01-mythos/games-library/.worktrees/wp-v1-m02-cronista
# si falta deps: npm install --no-fund --no-audit
npm test -w @zeus/ciudad
npm run cronista-smoke -w @zeus/ciudad
npm run story-board-reader -w @zeus/ciudad
```

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: pack ciudad + instancia readerapp/MAPEO + reporte
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia
- [x] Sellos con fuente; rutas citadas existentes (worktree + SHA)
- [x] Sin fluff: gap announce≠parte audio documentado sin reopen
- [x] Ejes I/II evidenciados
- [x] Gates ejecutados de verdad: test + smokes + validate-story-board
- [x] Commits convencionales: `feat(ciudad): …`
- [x] Diff solo del alcance del WP: sí · domain intacto

## Hallazgos fuera de alcance

- Main GL checkout carecía de `@zeus/protocol` hasta `npm install` en el
  worktree (entorno local; no es CA del WP).
- ∩ M01 en `contract.mjs` — gate pre-merge arriba.

## Dudas / bloqueos

Ninguno. Push GL tip / bump submodule / merge = orquestador.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
