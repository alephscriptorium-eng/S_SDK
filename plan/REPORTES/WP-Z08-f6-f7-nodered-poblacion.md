# WP-Z08 · f6–f7 nodered-poblacion — reporte

| dato | valor |
| ---- | ----- |
| agente | worker · gc-z08-f6-f7-nodered |
| fecha | 2026-07-21 |
| rama | `wp/gc-z08-f6-f7-nodered` |
| worktree | `.worktrees/wp-gc-z08-f6-f7-nodered` |
| commits | `cfd7c57` (obra) · `4571be4` · `fcafc06` (anotaciones reporte; HEAD al cierre worker) |
| eje(s) CA | IV (transparencia; ≥2 ámbitos NR; techo `POBLACION_MAX`) · f7 wishlist doc |
| alcance lote | **solo f6(+f7 wishlist)** — f1–f5 ya ✅ |
| estado propuesto | listo para revisión (vivos fabric ⏳: A1/re-smoke D1–D3 deferred con intento) |

## Qué se hizo

**Apertura re-smoke (obligatoria):** intento documentado contra `:3017` / `:3015` / Mano — ver evidencia. A1 `npm ci` sigue frágil → defer OK según brief.

Se añadió **F6 Población**: helper `poblacion-censo` (parse `print-agentes.txt` 169, ámbitos `distritos|locales|plaza-ops`, lote ≤ **`POBLACION_MAX=24`**), fixture congelada, tab F6 (cargar lote / fan-out announce+walk), script `start-constelacion.sh` (≥2 NR `:1884`+`:1885`), demo duo ciudadanos de ámbitos distintos. **F7** = `WISHLIST-f7.md` (no forks). **No BACKLOG. No push.**

## Archivos tocados

| archivo | acción |
| --- | --- |
| `plan/SPRINTS/sprint-game-city/flows/helpers/poblacion-censo.js` | creado — censo → lotes / ámbitos / techo |
| `plan/SPRINTS/sprint-game-city/flows/fixtures/poblacion-lote-max24.json` | creado — lote f6 (24; 13+6+5) |
| `plan/SPRINTS/sprint-game-city/flows/test/poblacion-censo.test.js` | creado — CA offline techo + ≥2 ámbitos |
| `plan/SPRINTS/sprint-game-city/flows/flows.json` | modificado — tab F6 + nodos población |
| `plan/SPRINTS/sprint-game-city/flows/settings.js` | modificado — `Z08_AMBITO` / `POBLACION_MAX` / `loadLoteAmbito` |
| `plan/SPRINTS/sprint-game-city/flows/package.json` | modificado — v0.3.0 + script constelación |
| `plan/SPRINTS/sprint-game-city/flows/README.md` | modificado — f6 techo + constelación |
| `plan/SPRINTS/sprint-game-city/flows/WISHLIST-f7.md` | creado — wishlist zeus←NR → Z05/Z09 |
| `plan/SPRINTS/sprint-game-city/flows/scripts/start-constelacion.sh` | creado — ≥2 instancias ámbito |
| `plan/SPRINTS/sprint-game-city/flows/scripts/patch-f6-flows.js` | creado — patch idempotente F6 |
| `plan/SPRINTS/sprint-game-city/flows/.gitignore` | modificado — ignora `.runtime/` |
| `plan/REPORTES/WP-Z08-f6-f7-nodered-poblacion.md` | creado — este reporte |

## Evidencia

### Env checks (`git … rev-parse HEAD`)

```
git -C .worktrees/wp-gc-z08-f6-f7-nodered rev-parse HEAD
# (base al abrir) cd378493fb5cd9fca747a1f5d79186ff71ec4a08

git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
# fa73062124a10839c3f821d5e61c250ea14f734b

git -C HOLONES/01-mythos/games-library rev-parse HEAD
# 5b5bf4e23e311f05d5e7e96320a74ac253b3faa7
```

### Apertura · re-smoke / A1 (D1–D3)

```
curl … http://127.0.0.1:3017/  → 3017:000 (HTTP)
curl … http://127.0.0.1:3015/  → 3015:000

# Intento 1 socket-server (zeus packages/mesh/socket-server · node src/index.mjs):
# log: "Scriptorium server on http://localhost:3017/runtime"
#      CLIENT_REGISTER type=NodeRedRoomsServerMonitor (instancia :1880 ya viva)
# Luego proceso detenido; curl HTTP root sigue 000 (solo /runtime socket.io).

# Intento 2 re-arranque:
# Error: Cannot find module '.../json-schema-traverse/index.js'
# → A1 npm-ci incompleto / árbol deps frágil (mismo patrón f4–f5 ampliado)

# H1 :3015: DOWN; `npm run start:cache` (mockdatas-ciudad) invocado —
# timeout 8s sin bind audible; puerto sigue 000 (gap A1 / deps).
```

⏳ **D1** dashboard rooms/fleet/volumen vivo · **D2** H1 `:3015` · **D3** Mano/Ciudadano authority — **deferred** con intento (SS llegó a loguear listen + client NR una vez; no estable). Pedir custodio: `npm ci` reproducible en zeus-sdk.

### CA offline (censo + techo)

```
cd plan/SPRINTS/sprint-game-city/flows && node --test test/*.test.js
# tests 10 · pass 10 · fail 0
# F4 shape 6 + F6 poblacion 4 (Total 169 · max 24 · ≥2 ámbitos · fixture)
```

### Constelación ≥2 ámbitos (NR simultáneos)

```
# userDirs .runtime/{distritos,locales} · PORT 1884/1885 · POBLACION_MAX=24
# Started flows (locales + distritos); editors:
curl … :1884/ → 1884:200
curl … :1885/ → 1885:200
# /flows ambos: tabs … | F6 Población | … (94 nodos)
# loadLoteAmbito:
#   distritos 13/24 [archivero, aceleracionista, …]
#   locales    6/24 [lucas, …]
# websocket→:3017 error esperado (fabric down)
```

**Techo vigente anotado:** `POBLACION_MAX = 24` (fixture `13 distritos + 6 locales + 5 plaza-ops`). 169 plenos = meta Z05+f7, no CA duro.

### Transparencia (eje IV / packages/)

```
rg -i 'node-red|nodered' HOLONES/01-mythos/zeus-sdk/packages --glob '!**/node_modules/**' -l | wc -l
# 0
```

### F7 wishlist

Documentada en `flows/WISHLIST-f7.md` (SDK ^1.5 republicar nodos · catalog:servers · token/room · `@zeus/nodered-kit` · escala 169→Z05 · switch Z09). **Cero forks.**

### CA ficha F6(+f7)

| criterio | estado |
| --- | --- |
| F6: ≥2 instancias NR ámbitos distintos con población | ✅ `:1884` distritos + `:1885` locales (F6 tab; lotes 13+6) |
| F6: techo explícito ~24 en reporte | ✅ `POBLACION_MAX=24` |
| F6: escala hacia 169 por lotes (no plenos) | ✅ helper+fixture; subir techo documentado |
| Transparencia: grep node-red en `packages/` = 0 | ✅ |
| F7: wishlist doc (no implementar forks) | ✅ `WISHLIST-f7.md` |
| Re-smoke D1–D3 con intento | ✅ deferred + causa A1 |

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: `flows/**` + este reporte
- [x] Cero árboles/ficheros copiados sin procedencia: censo citado (`print-agentes.txt`); no forks
- [x] Sellos con fuente; rutas citadas existentes: sí
- [x] Sin fluff; vivos fabric/H1 marcados ⏳ / defer A1
- [x] Eje IV: ≥2 clientes NR independientes (ámbitos) + transparency packages/=0
- [x] Gates: `node --test` 10/10; NR Started flows ×2; rg packages/
- [x] Commits convencionales: sí (obra en rama WP)
- [x] Diff solo del alcance del WP: sí; no BACKLOG / no push / no engine

## Hallazgos fuera de alcance

- Zeus `node_modules` parcial: `@alephscript/mcp-core-sdk` presente, pero `json-schema-traverse` roto → SS no re-arranca estable (A1).
- `loadLoteAmbito` en ámbito `locales` puede emitir dos `lucas` (DISCO vs PLUGINS) — ids de censo no únicos globalmente; identidad wire debería usar `agentPath` en Z05/kit.
- Instancia previa `:1880` sigue viva en el host (ajena a este worktree).

## Dudas / bloqueos

1. **Custodio:** completar A1 `npm ci` → re-smoke D1–D3 vivos + fan-out F6 contra authority.
2. ¿Room de juego ya `CIUDAD_*` post-Z03, o seguir `POZO_DEMO` hasta switch explícito?

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
