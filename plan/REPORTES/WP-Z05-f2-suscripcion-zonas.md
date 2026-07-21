# WP-Z05-f2 · suscripcion-zonas — reporte

| dato | valor |
| ---- | ----- |
| agente | worker · chat f2 |
| fecha | 2026-07-21 |
| rama | `wp/gc-z05-f2-suscripcion-zonas` (zeus + GL) |
| commits | zeus `11bde48` (rebase post-f1 `1d087ee`) · GL `d7f5dfa` · **pushed** |
| base | zeus `af0bad9` · GL `439788f` · S_SDK `a7061ac` |
| eje(s) CA | IV (2º cliente por zona) · II (engine game-agnostic / ids opacos) · ceguera ampliada |
| estado propuesto | listo para revisión |
| issue | LOCAL-ONLY (sin sync-map GitHub) |

## Qué se hizo

Soft-block f1: f1 worktree ya edita `protocol/**` (sin merge). **No se tocó
`protocol/**` ni `authority-kit`.** Filtro lógico + wire rooms mínimo.

- Añadí helpers de interés de zona en `@zeus/game-engine`
  (`filterSnapshotByZones`, `createZoneStateHandler`, catálogo → índices).
- `connectAndJoin({ zones })` emite `CLIENT_SUSCRIBE { room, zones? }`.
- Spec gamechannel (`TOPICS` / `SUBSCRIPTIONS`) documenta firehose físico +
  filtro lógico v0.2.
- Smoke GL: seed 24 anclas / 6 zones; cliente firehose vs cliente
  `editores` (eje IV).
- Fuera de alcance: items 3–6, SEMILLA, ACL, loader, sharding, slice
  server-side en authority.

## Archivos tocados

**zeus `01ba4b1`**
- `packages/engine/game-engine/src/zone-subscription.mjs` — creado (filtro)
- `packages/engine/game-engine/src/index.mjs` — exporta API zona
- `packages/engine/game-engine/test/zone-subscription.test.mjs` — creado
- `packages/engine/game-engine/test/map-engine.test.mjs` — API pública
- `packages/engine/game-engine/spec/gamechannel/TOPICS.md` — firehose vs zona
- `packages/engine/game-engine/spec/gamechannel/SUBSCRIPTIONS.md` — wire + CA
- `packages/engine/rooms/src/index.mjs` — `zones` en CLIENT_SUSCRIBE
- `packages/engine/rooms/test/rooms.test.mjs` — assert wire zones

**GL `d7f5dfa`**
- `packages/ciudad/fixtures/zone-subscription-smoke.mjs` — creado
- `packages/ciudad/package.json` — script `zone-subscription-smoke`

**gobierno (este archivo)** — rama `wp/gc-z05-f2-suscripcion-zonas` (sin merge a main; post-f1)

## Evidencia

```text
# env (inicio / fin)
zeus main af0bad9 · worktree f2 01ba4b1
GL main 439788f · worktree f2 d7f5dfa
S_SDK a7061ac

# @zeus/game-engine npm test
tests 9 · pass 9 · fail 0

# @zeus/rooms npm test
tests 11 · pass 11 · fail 0
  (incluye connectAndJoin emits CLIENT_SUSCRIBE with optional zones)

# zone-subscription-smoke
ZONE_SMOKE_OK {
  barriosSeed: 24,
  zones: 6,
  firehoseActors: 2,
  zoneActors: 1,
  zoneBarrios: 6,
  interest: 'editores',
  ...
}

# ceguera árbol (game-engine + rooms)
grep -c WP-Z[0-9]|SCRIPT_SDK|swarm-orquestacion|BACKLOG|orquestador|holón|holarquía|juntura → 0

# ceguera git log -p reachable (01ba4b1, d7f5dfa)
grep -q mismos tokens → 0 (pass) en ambos commits

# f1 soft-block
f1 worktree wp/gc-z05-f1-game-state-delta: M protocol/** (CONTRATO, event-meta, …)
f2: cero diffs en protocol/** · authority-kit/**
```

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: game-engine + rooms wire + GL smoke + reporte
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia
- [x] Sellos con fuente; rutas citadas existentes
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: slice authority = hallazgo
- [x] Eje IV: 2º cliente (`editores`) vs firehose en test + smoke
- [x] Eje II: ids opacos; sin lógica «ciudad» en engine (solo campos `zone`/`nodeId`/`parent`/`barrios` genéricos + índice inyectado)
- [x] Gates ejecutados de verdad (npm test + smoke)
- [x] Commits convencionales
- [x] Ceguera ampliada árbol + `git log -p`
- [x] No BACKLOG · no push tip gobierno · no items 3–6 · no SEMILLA

## Hallazgos fuera de alcance

1. **Slice server-side** en `authority-kit` `publishState` (unicast / per-peer)
   sigue pendiente — requiere coordinar con f1 si toca el mismo publish path.
   Hoy el ahorro de ancho de banda es lógico (client filter), no físico.
2. f1 aún 🔶 con diffs locales en `protocol/**` — merge order del lote:
   preferí f1 antes si más adelante se unifica envelope `zoneFilter` en wire
   de estado.

## Dudas / bloqueos

Ninguno bloqueante. Rebase post-merge f1 solo si el orquestador unifica
campos de envelope en `protocol`/`authority-kit`.

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-21 · orquestador (merge/gobierno).

zeus-sdk `main` @ `11bde48` (rebase `01ba4b1` onto f1 `1d087ee` · FF + push `origin/main`) · games-library `main` @ `d7f5dfa` (FF + push) · submodules SCRIPT_SDK → zeus `11bde48` + GL `d7f5dfa`. Filtro zona game-engine + `CLIENT_SUSCRIBE.zones` rooms + smoke 24-barrio. Ejes IV/II + ceguera ampliada OK. Slice server-side authority = hallazgo deferred. **Z05-f2 ✅**.

### Verificado (brazo REVISIÓN + merge)
- Ramas `wp/gc-z05-f2-suscripcion-zonas` · zeus tip post-rebase `11bde48` · GL `d7f5dfa` · merge FF → mains; push tip autorizado
- Alcance: game-engine + rooms wire + GL smoke; cero protocol/authority-kit en f2
- Gates reportados: game-engine 9/9 · rooms 11/11 · `ZONE_SMOKE_OK`; ceguera árbol+log-p 0
- Merge order: **después de f1** (overlap TOPICS/SUBSCRIPTIONS/map-engine.test auto-merge limpio en rebase)
- Sin force-push; sin BACKLOG en diffs zeus/GL
