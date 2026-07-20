# WP-Z01 · mockdatas-browsers — reporte

| dato | valor |
| ---- | ----- |
| agente | worker · gc-z01 |
| fecha | 2026-07-20 |
| rama | `wp/gc-z01-mockdatas-browsers` (games-library) · `wp/gc-z01-mockdatas-browsers` (SCRIPT_SDK reporte) |
| commits | games-library `8c2e6a633d112f36dc2602e61c93da7ec194508d` (sobre `fab17c7`) · reporte corrección (este commit) |
| eje(s) CA | I |
| estado propuesto | devuelto-corregido / listo para re-revisión |

## Qué se hizo

Se creó el pack `@zeus/mockdatas-ciudad` en games-library: generador build-time que lee una cantera CIUDAD (CLI `--cantera`) y produce `DISK_01/FIREHOSE` + `DISK_02/LINEAS/ciudad`. Censo en `data/censo.json`. Scripts `start:firehose` / `start:cache` con `ZEUS_VOLUMES_ROOT`. Sin `ciudad-model` compartido; sin tocar Node-RED.

## Corrección (devolución orquestador)

Corregido en games-library `8c2e6a6` (rewrite limpio vía `reset --soft` sobre `fab17c7`; SHAs previos `8ff4f86` / `301cdb9` fuera de la rama).

1. **Ceguera:** eliminados paths `plan/SPRINTS/sprint-game-city/cantera/CIUDAD` del test. Solo `CIUDAD_CANTERA` env y/o fixture `fixtures/cantera-min/` dentro del pack. Historial reachable `git log -p fab17c7..HEAD` sin esos strings.
2. **Start scripts:** quitado candidate hardcodeado `…/.worktrees/wp-gc-z01-mockdatas-browsers`. Quedan `ZEUS_SDK_ROOT` + siblings genéricos (`.deps/zeus-sdk`, `../zeus-sdk`, `../../zeus-sdk`).
3. **Rebase:** rama sobre GL `fab17c7` (incluye `startpack-ciudad`). Root `package.json`: `test:startpack` conserva `startpack-ciudad`; workspace + `test:mockdatas-ciudad` añadidos.

## Archivos tocados

- `packages/mockdatas-ciudad/**` (creado): generador, censo, volúmenes, fixture test, README, start scripts, tests
- `package.json` (modificado): workspace `mockdatas-ciudad` + `test:mockdatas-ciudad` (junto a startpack-ciudad)
- `plan/REPORTES/WP-Z01-mockdatas-browsers.md` (superproyecto)

## Evidencia

```
# idempotencia (fixture pack-local; sin path de plan)
npm test -w @zeus/mockdatas-ciudad
→ ok 1 - generator is idempotent (same cantera → same volume hash)  (~933ms)
→ ok 2 - pack volumes.json declares firehose corpora…
→ tests 2 / pass 2 / fail 0

# ceguera (patrón sprint + fugas de la devolución)
PAT='SCRIPT_SDK|HOLONES|holón|holarquía|juntura|plan/SPRINTS|sprint-game-city|wp-gc-z01-mockdatas-browsers'
rg -c "$PAT" packages/mockdatas-ciudad  → 0
git log -p fab17c7..HEAD | rg -c "$PAT" → 0

# smoke browsers post-corrección
curl http://localhost:3016/health → {"status":"ok","service":"firehose-browser",…}
curl http://localhost:3015/health → {"status":"ok","service":"cache-browser",…}
curl …/api/corpora → candidate files:666
curl …/api/browse?linea=ciudad&path=distritos → Editores, Infra-UI, Lore-voz, …
```

UI HTML viewport: `<pendiente>`.

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`
- [x] Runtime no lee cantera; test usa fixture del pack / `CIUDAD_CANTERA`
- [x] Ceguera pack + historial reachable = 0 (`grep -c`)
- [x] Eje I re-evidenciado tras corrección
- [x] Commit único limpio sobre `fab17c7`
- [x] `startpack-ciudad` conservado en workspace/`test:startpack`

## Hallazgos fuera de alcance

- Browsers en `localhost` (::1) vs `127.0.0.1` en este host.
- `listPosts` topea el total interno; no siempre refleja 666.
- Arranque local necesita `@alephscript/mcp-core-sdk` vía Verdaccio.

## Dudas / bloqueos

- Ninguno.

## Conflictos Z02 / Z08

- Rebase sobre `fab17c7` (obra Z02 mergeada en GL main de trabajo). Paths Z02 no modificados en este commit.
- Z08 no tocado.

## CA eje I

| criterio | estado | evidencia |
|---|---|---|
| firehose-browser + microposts | **cumplido** | smoke health + corpora 666 |
| cache-browser distrito→ficha | **cumplido** | browse distritos ok |
| generador idempotente | **cumplido** | test fixture local |
| censo visible | **cumplido** | (entrega original; volúmenes intactos) |
| cero dep runtime cantera | **cumplido** | solo volumes del pack |

**Veredicto eje I: cumplido** (viewport HTML `<pendiente>`).

---

## Revisión del orquestador

**Aceptado ✅** (2026-07-20; nota: corrección ceguera + rebase).
