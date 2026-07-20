# WP-Z10 · viajes-wiki-linea — reporte

| dato | valor |
| ---- | ----- |
| agente | worker · gc-z10 |
| fecha | 2026-07-21 |
| rama | `wp/gc-z10-viajes-wiki-linea` (zeus-sdk) · `wp/gc-z10-viajes-wiki-linea` (SCRIPT_SDK reporte) |
| commits | zeus-sdk `29e9d49c08c9cabf7b105c6f83a9fb428aef1d14` (sobre `7567bf3`) · reporte (este commit) |
| eje(s) CA | I · II |
| estado propuesto | listo para revisión |

## Qué se hizo

Se eligió **subpath** `@zeus/linea-kit/viaje` (no paquete hermano): el kit no engordó lo suficiente como para separar. Se portó el **concepto** de camino (origen→destino, candidatos, poda, etapas, cache curada), no código de wiki-racer ni Puppeteer.

Familia `viaje`: `GraphSource` + `planPath`/`runViaje`, adaptadores `linea` / `wiki` / `gamemap`, materialización `viaje-recorrido` con `CURATION_STATUSES`, snapshots vía `fetchSnapshot` (gate `approve`), segmentación con `applyMilestoneRules`. Schema nuevo `viaje-recorrido` registrado en el validador; schemas previos de tronco/satélite/sidecar **no se modificaron**.

Gamemap: walks + `acceptWalksPozo` (stub). Consumo de `linea://*`: documentado — viaje no reimplementa MCP; el caller resuelve nodos en el mesh y pasa ids al adaptador linea. Homónimo histórico «viaje»=campaña en linea-system **no** se renombró (regla 5: primera ocasión que un WP toque esos prompts).

## Archivos tocados

- `packages/engine/linea-kit/src/viaje/**` (creado): modelo, plan, cache, run, segmentar, adapters
- `packages/engine/linea-kit/schemas/viaje-recorrido.json` (creado): schema de recorrido materializado
- `packages/engine/linea-kit/src/validate.mjs` (modificado): registra `viaje-recorrido`
- `packages/engine/linea-kit/package.json` (modificado): export `./viaje`, versión `0.3.0`
- `packages/engine/linea-kit/README.md` (modificado): doc del subpath
- `packages/engine/linea-kit/test/viaje.test.mjs` (creado): CA línea sintética + wiki + gamemap pozo
- `plan/REPORTES/WP-Z10-viajes-wiki-linea.md` (este reporte, superproyecto)

## Evidencia

```
# worktree zeus
cd HOLONES/01-mythos/zeus-sdk/.worktrees/wp-gc-z10-viajes-wiki-linea
git rev-parse HEAD
→ 29e9d49c08c9cabf7b105c6f83a9fb428aef1d14

# tests CA (viaje + suites kit sin depender de mesh)
cd packages/engine/linea-kit
node --test test/viaje.test.mjs test/tools.test.mjs test/validate-loader.test.mjs \
  test/curation-resolve.test.mjs test/force-activation.test.mjs
→ tests 26 / pass 26 / fail 0

# viaje solo
node --test test/viaje.test.mjs
→ ok línea sintética N01→N03 + cache viaje-recorrido
→ ok wiki Alpha→Gamma (2 hops) + fetch.approval_required sin approve + 3 snapshots cache-sidecar-meta
→ ok gamemap walks + acceptWalksPozo
→ ok segmentarViaje milestones

# ceguera método (pack viaje)
PAT='SCRIPT_SDK|HOLONES|holón|holarquía|juntura|swarm-orquestacion|sprint-game-city|wiki-racer|WiringApp|Puppeteer'
rg -c "$PAT" src/viaje schemas/viaje-recorrido.json test/viaje.test.mjs
→ 0

# package.json sin wiki-racer
rg wiki-racer package.json → 0

# starterkit-e2e (linea-system) en este worktree
npm test  # suite completa
→ fail 1: starterkit-e2e no encuentra zod en node_modules del worktree (deps mesh incompletas)
→ no es regresión de viaje; suites kit locales 26/26 verdes
```

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF` (linea-kit + este reporte)
- [x] Cero árboles copiados de otros mundos; concepto citado, no código
- [x] Sellos con fuente; schemas previos intactos; `viaje-recorrido` nuevo
- [x] Sin fluff; gap Z03 / rename campaña / starterkit-e2e deps marcados
- [x] Eje I: e2e línea sintética + wiki con fetchSnapshot evidenciado en test
- [x] Eje II: envuelve kit (`fetchSnapshot`, curation, milestone rules, validate); no duplica
- [x] Gates ejecutados de verdad (salida arriba)
- [x] Commit convencional en zeus-sdk
- [x] Ceguera método = 0 en entregables viaje; marca aleph/scriptorium no usada ni prohibida

## Hallazgos fuera de alcance

- Prompts `propose-viaje`/`execute-viaje` en linea-system siguen con sentido «campaña» (homónimo registrado en BACKLOG regla 5) — rename pendiente del WP que los toque.
- `starterkit-e2e` necesita `zod` (y resto mesh) en el worktree; no se instaló monorepo completo aquí.
- Refs `linea://*` ya listadas por `conectar-satelite` / linea-system; montaje de refs pendientes en linea-system sigue siendo deuda de mesh, no de este subpath.

## Dudas / bloqueos

- Ninguno bloqueante para revisión. Gamemap authority live = pozo hasta Z03.

## Conflictos Z09 / Z14 / i70–i74

- Ninguno: no se tocaron delta/miniclon, cantera/CENSO/startpack, ni worktrees i70–i74.

## CA ejes I / II

| eje | criterio | estado | evidencia |
| --- | -------- | ------ | --------- |
| I | Viaje e2e línea sintética + materialización que valida schemas | ✅ | `viaje.test.mjs` · N01→N03 · `validate('viaje-recorrido')` + trunk schemas intactos |
| I | Wiki corto 2–3 saltos + `fetchSnapshot` + gate | ✅ | Alpha→Gamma · `fetch.approval_required` sin approve · 3 snapshots |
| I | Consumidor real del API nuevo | ✅ | el test e2e + starterkit `createLineaJuguete` como productor de grafo (payload planificado/cacheado, no solo import) |
| II | Envolver linea-kit; no duplicar schemas/curación | ✅ | reusa `fetchSnapshot`, `CURATION_STATUSES`, `applyMilestoneRules`, `validate`; sidecars `cache-sidecar-meta` |
| — | Gamemap → walks | ✅ pozo | `viajeToWalkIntents` + `acceptWalksPozo`; authority Z03 `<pendiente>` |
| — | Cero dep wiki-racer | ✅ | `package.json` limpio |
| — | Engine sin nombres de juego | ✅ | anchors/streets/walk genéricos |

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-21 · orquestador (merge/gobierno).

Obra zeus-sdk `29e9d49` (FF `main` sobre padre `7567bf3`) · reporte `46ba729` · bump submodule SCRIPT_SDK → `29e9d49`. Diff = `@zeus/linea-kit` subpath `./viaje` + schema `viaje-recorrido` + tests (26/26 kit) + este reporte. Ejes **I/II** ✅ (e2e línea sintética + wiki `fetchSnapshot`/gate + envoltorio kit sin duplicar schemas). Gamemap walks en pozo hasta Z03 (no bloquea). Ceguera método = 0 en entregables viaje. Homónimo campaña `propose-viaje`/`execute-viaje` en linea-system queda fuera de alcance (regla 5). Z09/Z14/i70–i74 intactos.
