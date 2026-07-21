# WP-M01 · misiones — reporte

| dato | valor |
| ---- | ----- |
| agente | worker · WP-M01 |
| fecha | 2026-07-22 |
| rama | `wp/v1-m01-misiones` (games-library) · reporte en S `wp/v1-m01-misiones` |
| commits | GL `399b25048965b850346fb3574c6912a177ba46c9` (sobre `80f6157`) |
| eje(s) CA | I · II · ceguera (regla 14) |
| estado propuesto | listo para revisión |

## Qué se hizo

Se añadió el módulo PACK canónico `@zeus/ciudad/misiones` (`src/misiones.mjs`):
selección de origen/destino anclada a **verdad del censo** (zona home del
ciudadano + bias a barrio `latente`/`muerto`/`roto`), camino A→B vía
`@zeus/linea-kit/viaje` (`planPath` / `runViaje` / `viajeToWalkIntents` /
`acceptWalks`), e **idle** = `nextIdleWalk` (random-walk sobre enlaces, sin
viaje). Smoke + tests aplican los walks al dominio existente; **cero** diff
en engine / `domain.mjs` / reducer. Dependencia `@zeus/linea-kit` ^0.3.0.

## Archivos tocados

### games-library (`399b250`)

- `packages/ciudad/src/misiones.mjs` (creado) — selección + viaje + idle
- `packages/ciudad/fixtures/misiones-smoke.mjs` (creado) — Eje I smoke
- `packages/ciudad/test/misiones.test.mjs` (creado) — CA selección/viaje/idle/dominio
- `packages/ciudad/package.json` (modificado) — export `./misiones`, script
  `misiones-smoke`, dep `@zeus/linea-kit` ^0.3.0
- `packages/ciudad/README.md` (modificado) — doc misiones
- `package-lock.json` (modificado) — lock de linea-kit 0.3.x

### SCRIPT_SDK (este reporte)

- `plan/REPORTES/WP-M01-misiones.md` (creado)

**No tocados (exclusión M02 / fuera de alcance):** story-board, cronista/dj,
carpeta-dramaturgo, engine, domain/reducer, BACKLOG, `.sync-map.json`.

## Evidencia

```
# env
git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
→ 1086392d67d6398b43ccf5379062713b3c0dd486
git -C HOLONES/01-mythos/games-library rev-parse HEAD   # main pin
→ 80f615774311f903dff8df6af3fabfb827e0c276
git -C HOLONES/01-mythos/games-library/.worktrees/wp-v1-m01-misiones rev-parse HEAD
→ 399b25048965b850346fb3574c6912a177ba46c9
git -C . rev-parse HEAD   # tip gobierno al arrancar brief
→ a8c91318739b2c00029e7923b388317a3f65c0e8

# tests + smoke (worktree GL)
cd HOLONES/01-mythos/games-library/.worktrees/wp-v1-m01-misiones
npm test -w @zeus/ciudad
→ tests 36 / pass 36 / fail 0  (incluye suite «ciudad misiones» 6/6)

npm run misiones-smoke -w @zeus/ciudad
→ ok selection { barrioId: 'stream-desktop', estado: 'muerto',
    origin: 'plaza', destination: 'red-stream',
    path: [ 'plaza', 'zigurat', 'red-stream' ] }
→ ok walk ×3 (zigurat → red-stream → ancla-stream-desktop)
→ ok idle { nodeId: 'zigurat' }
→ MISIONES_SMOKE_OK

# Eje I — comportamiento real (no solo import)
→ smoke aplica walks de viaje al dominio; idle documentado con forceIdle

# Eje II — destino canónico
→ único módulo de selección: packages/ciudad/src/misiones.mjs
  export @zeus/ciudad/misiones · sin duplicar en flows/engine

# Cero engine
git -C HOLONES/01-mythos/zeus-sdk status --short
→ (vacío)

# Ceguera árbol (entregable ciudad, excl. ceguera.test self)
PAT='SCRIPT_SDK|S_SDK|holón|holon|holarquía|juntura|HOLONES|swarm-orquestacion|WP-Z\d+'
rg -c -i "$PAT" packages/ciudad/src packages/ciudad/fixtures \
  packages/ciudad/README.md packages/ciudad/package.json \
  packages/ciudad/test/misiones.test.mjs
→ 0

# Ceguera historial reachable (regla 14)
git log -p 80f6157..HEAD -- packages/ciudad | rg -i \
  'SCRIPT_SDK|S_SDK|HOLONES|swarm-orquestacion|holarqu|juntura|holón|holon'
→ 0 hits

# Marca aleph/scriptorium
→ smoke usa actorId 'aleph' (DC-GC-ceguera-marca OK)
```

## Diffstat / intersección M02 (GATE PRE-MERGE)

```
 package-lock.json                            |  14 +
 packages/ciudad/README.md                    |  13 +-
 packages/ciudad/fixtures/misiones-smoke.mjs  |  96 +
 packages/ciudad/package.json                 |   7 +-
 packages/ciudad/src/misiones.mjs             | 374 +
 packages/ciudad/test/misiones.test.mjs       | 164 +
 6 files changed, 674 insertions(+), 3 deletions(-)
```

Paths M01 (este WP): solo `packages/ciudad/**` + root `package-lock.json`.

Paths M02 esperados (cronista / story-board / dj): **sin intersección** con
los paths de arriba. Si M02 tocó `packages/ciudad/README.md` u otro fichero
ciudad compartido, orquestador resuelve en GATE PRE-MERGE (no se editó
story-board ni actor dj aquí).

Fixture compartido: ninguno nuevo fuera de `@zeus/ciudad`. Seeds
`startpack-ciudad/seeds/gamemap.json` solo lectura.

## Cómo probar

```bash
cd HOLONES/01-mythos/games-library/.worktrees/wp-v1-m01-misiones
npm install -w @zeus/ciudad   # si hace falta (linea-kit ^0.3.0)
npm test -w @zeus/ciudad
npm run misiones-smoke -w @zeus/ciudad
```

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF` (PACK ciudad + este reporte)
- [x] Cero árboles/ficheros copiados de otros mundos; viaje consumido por import
- [x] Sellos con fuente; rutas citadas existentes
- [x] Sin fluff; wiring Z08 flows / cronista = fuera de alcance
- [x] Eje I: smoke aplica misión; Eje II: `misiones.mjs` canónico
- [x] Gates ejecutados de verdad (36/36 + smoke)
- [x] Commit convencional en games-library
- [x] Ceguera árbol + `git log -p` = 0; marca aleph OK
- [x] Cero engine / domain.mjs / BACKLOG / gh issue

## Hallazgos fuera de alcance

- Z08 Node-RED (`flows/helpers/ciudad-intent-stubs.js`) sigue con
  `nextRandomWalk` local; no se cableó F5→`@zeus/ciudad/misiones` (PACK
  primero; adapter flow = candidato WP aparte).
- `package-lock` del worktree puede diverger del checkout main GL si otros
  workers instalaron en paralelo — orquestador al merge.

## Dudas / bloqueos

Ninguno. Worktree GL listo en
`HOLONES/01-mythos/games-library/.worktrees/wp-v1-m01-misiones` — **no** borrar
FS; merge = orquestador (GATE PRE-MERGE vs M02).

---

## Revisión del orquestador

**Aceptado ✅** (R6 · 2026-07-22).

- CA I/II + ceguera (árbol + `git log -p`) PASS en worktree `399b250`.
- Tests: 36/36 · `misiones-smoke` OK · cero engine/`domain.mjs`.
- GATE ∩ M02: `package.json` + `README.md` (lock solo M01; `contract.mjs` solo M02).
- Orden merge: M01 FF → main; M02 rebase; tip GL `84f9d79` · 40/40 + smokes OK.
- Acta: [ACTA-V1-1-aceptacion-M01-M02-2026-07-22.md](ACTA-V1-1-aceptacion-M01-M02-2026-07-22.md).
