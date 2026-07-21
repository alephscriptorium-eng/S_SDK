# WP-Z15 · intentional-stops-read — reporte

| dato | valor |
| ---- | ----- |
| agente | worker · gc-z15 (fresco) |
| fecha | 2026-07-21 |
| rama | `wp/gc-z15-intentional-stops-read` (zeus-sdk) |
| commits | zeus-sdk `a4aaf8c` (base `origin/main` `fa73062`) · **sin push** |
| eje(s) CA | **I** (contrato read tras stop/launch) · **III** (actuador único) · ceguera |
| estado propuesto | listo para revisión |

## Qué se hizo

Expuesta **lectura** de `intentionalStops` en `@zeus/mcp-launcher` (antes
write-only en `stop` / clear en `launch`):

1. `ProcessManager.isIntentionalStop(serverId)` · `listIntentionalStops()`
2. `health()` incluye `intentionalStop` por fila + `intentionalGroups`
3. Contrato documentado en README launcher (§Z12)
4. Hook mínimo: `@zeus/lifecycle-kit` `resolveIntentionalStop` /
   `readActuatorIntentionalStop`; `CityLifecycleRuntime.isIntentionalStop` +
   watch etiqueta `intentional_stop` cuando el actuador marca
5. **Gap → f2 (literal):** cascada/zonas y `canRetry` del leaf **no** sustituyen
   aún el flag interno del actor por la señal del actuador como única fuente

Sin XState en mcp-launcher. Sin Z12-f2. Sin BACKLOG. Sin push tip gobierno.

## Archivos tocados

- `packages/mesh/mcp-launcher/src/process-manager.mjs` — API read + health
- `packages/mesh/mcp-launcher/README.md` — contrato intentionalStops
- `packages/mesh/mcp-launcher/test/intentional-stops-read.test.mjs` — contrato
- `packages/engine/lifecycle-kit/src/intent-signal.mjs` — hook composición
- `packages/engine/lifecycle-kit/src/index.mjs` · `README.md` · test hook
- `packages/mesh/ciudad-lifecycle/src/runtime.mjs` — consumo mínimo actuador
- `packages/mesh/ciudad-lifecycle/README.md` — gap f2 literal
- `packages/mesh/ciudad-lifecycle/test/intentional-stop-hook.test.mjs`
- `plan/REPORTES/WP-Z15-intentional-stops-read.md` (este reporte, superproyecto)

## Evidencia

```
# env (A1: rev-parse, nunca test -d .git)
git -C …/wp-gc-z15-intentional-stops-read rev-parse HEAD
→ a4aaf8c23c1817df9635b3ad9dfa950902debc32
git -C …/zeus-sdk rev-parse origin/main
→ fa73062124a10839c3f821d5e61c250ea14f734b

# contrato mcp-launcher (cuando deps resolvían)
node --test test/intentional-stops-read.test.mjs
→ ok intentionalStops: stop marks, launch clears, health tells truth
→ ok intentionalStops: crash without stop ≠ intentional
→ pass 2 / fail 0

# suite mcp-launcher (ventana sana + NODE_PATH tip main)
node --test test/*.mjs
→ tests 13 / pass 12 / fail 0 / skipped 1 (linea-espana live)

# lifecycle-kit
node --test test/intent-signal.test.mjs → pass 2
node --test test/*.test.mjs (ventana sana) → pass 12 / fail 0

# ciudad-lifecycle hook
node --test test/intentional-stop-hook.test.mjs → pass 1
# e2e barrio (ventana sana previa Z12) — re-run pleno:
→ ⏳ diferido: npm ci worktree + tip main node_modules corruptos mid-ci
   concurrente (xstate/package.json ausente; ENOTEMPTY / ERR_INVALID_PACKAGE_CONFIG).
   Intento: npm ci en worktree (falló ENOTEMPTY / carrera) + junction a main.

# frontera Z06
rg 'from ["'\'']xstate|createMachine|interpret\(' packages/mesh/mcp-launcher/src → 0
# ceguera método
rg -i '\b(SCRIPT_SDK|S_SDK|holón|holarquía|juntura)\b' (src Z15) → 0
```

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: mcp-launcher · lifecycle-kit hook ·
      ciudad-lifecycle cableado mínimo · reporte; sin Z12-f2 cascada; sin BACKLOG
- [x] Cero árboles copiados de otros mundos
- [x] Sellos con fuente; SHAs vía `rev-parse`
- [x] Gap f2 marcado literal; vivos A1 diferidos con intento documentado
- [x] Eje I: read tras stop / clear tras launch / crash ≠ intentional (tests)
- [x] Eje III: spawn/kill siguen solo en ProcessManager; kit/ciudad solo leen
- [x] Ceguera método 0 en entregables
- [x] Commits convencionales
- [x] Push tip: **no** (gate custodio / brief)

## Hallazgos fuera de alcance

- Z12-f2: cascada/zonas + `canRetry` alimentado solo por actuador
- A1 npm-ci tip zeus: `node_modules` inestable bajo installs concurrentes
  (worktrees paralelos) — re-smoke e2e ciudad tras ci limpio

## Dudas / bloqueos

Ninguno bloqueante para el contrato read. E2e ciudad pleno ⏳ A1.

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-21 · orquestador (merge/gobierno).

zeus-sdk `main` @ `a4aaf8c` (FF sobre `fa73062` · push `origin/main`) · submodule SCRIPT_SDK → `a4aaf8c`. API read `ProcessManager.isIntentionalStop` / `listIntentionalStops` + `health.intentionalStop`/`intentionalGroups`; hook `lifecycle-kit` + consumo mínimo `ciudad-lifecycle`. Ejes I/III + ceguera OK. Gap cascada/zonas/`canRetry` → **Z12-f2**. E2e ciudad pleno ⏳ A1b (no bloquea). **Z15 ✅ — Z12-f2 despachable** (deps f1 ✅ + Z15 ✅).

### Verificado (brazo REVISIÓN + merge)
- Rama `wp/gc-z15-intentional-stops-read` tip `a4aaf8c` · merge FF → `main`; push tip autorizado
- Frontera Z06 actuador intacta (0 XState en mcp-launcher/src); sin cascada f2
- Contrato tests: stop marks / launch clears / crash ≠ intentional; hook kit+runtime
- Sin force-push; sin BACKLOG en diff zeus
