# WP-Z05-f1 · game-state-delta — reporte

| dato | valor |
| ---- | ----- |
| agente | worker gc-z05-f1 (swarm fresco) |
| fecha | 2026-07-21 |
| rama | `wp/gc-z05-f1-game-state-delta` (zeus-sdk) |
| commits | zeus `1d087ee2fbd575ccc221040f8e9169aa14de64c1` |
| eje(s) CA | **IV** (2º cliente = apply delta sin dominio) · **II** (engine game-agnostic) |
| estado propuesto | listo para revisión |
| issue | LOCAL-ONLY (proyección; sync-map ⏳ sin verificar → #5) |

## Qué se hizo

Solo **item 1** del umbrella Z05: contrato `GAME_STATE_DELTA` (gamechannel
v0.2). Se añadieron helpers puros en `@zeus/protocol` (`diffGameState` /
`applyGameStateDelta` / shape + mensaje wire), opt-in `stateDelta` en
`@zeus/authority-kit` (full en boot/heartbeat; parches entre medias; alias
`events.DELTA`), `MapEngine.getDelta` + specs gamechannel/gamemap, tests de
no-regresión. **Sin** zonas/ACL/SEMILLA, **sin** BACKLOG, **sin** push tip
gobierno. Ciudad no se cableó aún (opt-in del kit; consumidor activa
`stateDelta: true`).

## Archivos tocados

- `packages/engine/protocol/src/game-state-delta.mjs` (creado): diff/apply/shape
- `packages/engine/protocol/src/index.mjs` + `event-meta.mjs` + `types*` + AsyncAPI: export + `mode` en state
- `packages/engine/protocol/spec/CONTRATO.md` §6 + CHANGELOG
- `packages/engine/protocol/test/game-state-delta.test.mjs` (creado): eje IV apply
- `packages/engine/authority-kit/src/create-authority.mjs`: `stateDelta`, `resolveStateDeltaSnapshotOpts`, `events.DELTA`
- `packages/engine/authority-kit/test|README|CHANGELOG`: wire test + docs
- `packages/engine/game-engine/src/map-engine.mjs` + test + spec gamechannel/STATE
- `plan/REPORTES/WP-Z05-f1-game-state-delta.md` (este reporte, superproyecto)

## Evidencia

> Worktree zeus: `…/zeus-sdk/.worktrees/wp-gc-z05-f1-game-state-delta`  
> Env (rev-parse, nunca `test -d .git`):

```
git -C …/zeus-sdk/.worktrees/wp-gc-z05-f1-game-state-delta rev-parse HEAD
→ 1d087ee2fbd575ccc221040f8e9169aa14de64c1

git -C …/games-library rev-parse HEAD
→ 439788f103e0463ff038796bf890c5a3d06c3904

git -C …/SCRIPT_SDK rev-parse HEAD
→ a7061ac5c3669f03f47ed6bcb13ce4609a9d45e4  (tip gobierno al arranque; sin push)
```

### Gates

```
$ npm test -w @zeus/protocol
# tests 25 · pass 25 · fail 0

$ npm test -w @zeus/authority-kit
# tests 14 · pass 14 · fail 0
  (incluye stateDelta → GAME_STATE_DELTA entre heartbeats)

$ npm test -w @zeus/game-engine
# tests 5 · pass 5 · fail 0
  (incluye getDelta actor walk)
```

### Ceguera ampliada (árbol + log-p)

```
# packages/ + e2e/ — grep -c (método/marco/WP-Z\d+)
holón|holarqu|SCRIPT_SDK|S_SDK|juntura|WP-Z[0-9]|swarm-orquestacion|BACKLOG|orquestador → 0

$ git log -p af0bad9..HEAD -- packages e2e | rg -i 'WP-Z[0-9]|SCRIPT_SDK|…'
→ PASS (0 hits)
# marca aleph/scriptorium admisible (DC-GC-ceguera-marca)
```

### Eje IV

Viewer/2º cliente: `applyGameStateDelta` en test de protocol (sin mutar
dominio). Wire: authority-kit publica `GAME_STATE_DELTA` con envelope
`kind:'state'` + `mode:'delta'`.

### Eje II

Cero lógica «ciudad» en engine; deltas operan sobre mapas genéricos
`actors`/`anchors`.

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: protocol / authority-kit / game-engine + reporte; sin f2 zonas, items 3–6, BACKLOG, SEMILLA
- [x] Cero árboles copiados de otros mundos
- [x] Sellos con fuente; preticket A1b citado en brief (no reabierto)
- [x] Sin fluff; cableado ciudad `stateDelta` = `<pendiente>` consumidor
- [x] Ejes IV/II evidenciados (tests)
- [x] Gates ejecutados de verdad
- [x] Commits convencionales (zeus)
- [x] Diff solo del alcance del WP

## Hallazgos fuera de alcance

- Ciudad aún publica full vía `contentRev` sin `stateDelta: true` — activar
  en paquete juego cuando se quiera el beneficio (no es f1 obligatorio).
- Suscripción por zona = f2 (no tocado).

## Dudas / bloqueos

Ninguno bloqueante. Issue sync-map #5 ⏳ sin verificar.

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-21 · orquestador (merge/gobierno).

zeus-sdk `main` @ `1d087ee` (FF sobre `af0bad9` · push `origin/main`) · submodule SCRIPT_SDK → `1d087ee`. Contrato `GAME_STATE_DELTA` + helpers protocol + opt-in `stateDelta` authority-kit + `MapEngine.getDelta`. Ejes IV/II + ceguera ampliada OK. Ciudad `stateDelta: true` / f2 zonas = fuera de alcance (no bloquean). **Z05-f1 ✅**.

### Verificado (brazo REVISIÓN + merge)
- Rama `wp/gc-z05-f1-game-state-delta` tip `1d087ee` · merge FF → `main`; push tip autorizado
- Alcance: protocol / authority-kit / game-engine; sin f2 zonas, items 3–6, SEMILLA
- Gates reportados: protocol 25/25 · authority-kit 14/14 · game-engine 5/5; ceguera árbol+log-p 0
- Sin force-push; sin BACKLOG en diff zeus
