# WP-Z12-f2 · arbol-cascada — reporte

| dato | valor |
| ---- | ----- |
| agente | worker · gc-z12-f2 (fresco) |
| fecha | 2026-07-21 |
| rama | `wp/gc-z12-f2-arbol-cascada` (zeus-sdk) |
| commits | zeus-sdk `e7d9766` (base `a4aaf8c` Z15) · **sin push** |
| eje(s) CA | **I** (cascada/zonas e2e) · **III** (spawn solo Z06) · **IV** (wake Z03 + mando cascada) · ceguera kit |
| estado propuesto | listo para revisión |

## Qué se hizo

Implementación **solo f2** sobre Z15/Z12-f1 (sin reopen):

1. **`@zeus/lifecycle-kit`**: `runCascade` + `CASCADE_CONCURRENCY_DEFAULT=24`;
   `projectTreeLife`; `provideLeafActors({ isIntentionalStop })` hace que
   `canRetry` / `retriesExhausted` prefieran señal del actuador (OR contexto);
   `PROCESO_TERMINADO` intencional → `parada` sin auto-restart.
2. **`@zeus/ciudad-lifecycle`**: `rollupCiudad` / `snapshot().ciudad`;
   `dispatchCascade` + tools `city_cascade_start/stop` (techo `POBLACION_MAX=24`);
   leaf `isIntentionalStop` cableado a `ProcessManager.isIntentionalStop`;
   `buildWakeMap` + `wakeAndStart` / `roundTripWake` con **domain Z03 inyectado**
   (un cerebro; sin segundo reducer).
3. Tests f2 (cascada, rollup, wake dual-snapshot, eje III) + regresión e2e f1.

**Desviaciones:** domain Z03 real (`@zeus/ciudad` + startpack) no cableado como
dep hard — inyección + mock de contrato en test (round-trip wake→process
demostrado). Tablero NR Z08 = consumidor; gate IV vía `mandoClientCall` cascada
(sin feature NR). Tip **sin push** (gate custodio).

## Archivos tocados

- `packages/engine/lifecycle-kit/src/cascade.mjs` (creado) — cascada genérica
- `packages/engine/lifecycle-kit/src/leaf-machine.mjs` — canRetry actuador + exit intencional
- `packages/engine/lifecycle-kit/src/project.mjs` · `index.mjs` · `intent-signal.mjs` · `README.md`
- `packages/engine/lifecycle-kit/test/cascade-intent.test.mjs` (creado)
- `packages/mesh/ciudad-lifecycle/src/runtime.mjs` — cascade/rollup/wake
- `packages/mesh/ciudad-lifecycle/src/wake-sync.mjs` (creado) — bridge inyectado
- `packages/mesh/ciudad-lifecycle/src/project.mjs` · `catalog-extend.mjs` · `mando*.mjs` · `tools.mjs` · `index.mjs` · `README.md`
- `packages/mesh/ciudad-lifecycle/test/f2-cascada-wake.test.mjs` (creado)
- `plan/REPORTES/WP-Z12-f2-arbol-cascada.md` (este reporte)

## Evidencia

```
# env
git -C …/zeus-sdk/.worktrees/wp-gc-z12-f2-arbol-cascada rev-parse HEAD
→ e7d9766c0d9c7ad19111fac9f018f04db751a1e8
git -C …/zeus-sdk rev-parse origin/main
→ a4aaf8c23c1817df9635b3ad9dfa950902debc32
git -C …/SCRIPT_SDK rev-parse HEAD
→ 895687808065073534e48e78609c4fad1cdb022d

# lifecycle-kit
node --test test/*.test.mjs
→ tests 16 / pass 16 / fail 0
  ok CASCADE_CONCURRENCY_DEFAULT is 24
  ok runCascade respects concurrency ceiling
  ok canRetry prefers actuator isIntentionalStop
  ok ceguera kit: sin ciudad/barrio/marco

# ciudad-lifecycle f2 + hook
node --test test/f2-cascada-wake.test.mjs test/intentional-stop-hook.test.mjs
→ tests 9 / pass 9 / fail 0
  ok rollup ciudad latente→vivo
  ok cascada + mandoClientCall (eje IV)
  ok wake Z03 inyectada → process → dual snapshot vivo
  ok eje III sin child_process

# regresión e2e f1
node --test test/e2e-barrio.test.mjs
→ tests 6 / pass 6 / fail 0

# ceguera / frontera
rg -i '\bciudad\b|\bbarrio\b|\bmarco\b' packages/engine/lifecycle-kit/src → 0
rg 'from ["'\'']node:child_process' packages/mesh/ciudad-lifecycle/src → 0
rg -i '\b(SCRIPT_SDK|S_SDK|holón|holarquía|juntura)\b' (src f2) → 0

# A1b deps
Intento: xstate/package.json ausente en tip zeus mid-ci → restaurado desde
games-library node_modules; yaml corrupt → restaurado desde GL. Suites verdes
tras restore. npm ci pleno worktree ⏳ no re-ejecutado (carrera ENOTEMPTY
documentada Z15).
```

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: lifecycle-kit · ciudad-lifecycle · reporte; sin BACKLOG; sin reopen Z12-f1/Z15; sin reimplementar ProcessManager
- [x] Cero árboles copiados de otros mundos
- [x] Sellos con fuente; SHAs vía `rev-parse`
- [x] Domain Z03 hard-dep / NR dashboard marcados; wake inyectado documentado
- [x] Ejes I/III/IV + ceguera kit evidenciados
- [x] Gates ejecutados de verdad (arriba); A1b restore documentado
- [x] Commits convencionales
- [x] Push tip: **no** (gate custodio / brief)

## Hallazgos fuera de alcance

- Dep workspace `@zeus/ciudad` en ciudad-lifecycle + escena startpack para wake
  con barrios ARBOL_F1 reales (hoy mock de contrato / inyección)
- Tablero Z08-f4 como 2º cliente visual de cascada (gate IV ya cubierto por
  `mandoClientCall`)
- Cascada multi-barrio con fixtures reales prolog/aaia (e2e actual = 1 zona
  fixture + techo concurrency)

## Dudas / bloqueos

Ninguno bloqueante. Pedir push tip zeus al orquestador cuando revise.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
