# WP-Z08 · f4–f5 nodered-mano-ciudadano — reporte

| dato | valor |
| ---- | ----- |
| agente | worker · gc-z08-f4-f5-nodered |
| fecha | 2026-07-21 |
| rama | `wp/gc-z08-f4-f5-nodered` |
| worktree | `.worktrees/wp-gc-z08-f4-f5-nodered` |
| commits | `21bd0cf` (obra) · tip `21bd0cf72bd4baf00d2d76192aa44f68e66c98d3` |
| eje(s) CA | IV (intent válido desde inject; ciudadano como client de room; transparency packages/) |
| alcance lote | **solo f4–f5** (Mano · Ciudadano) — f1–f3 ya ✅; **no f6+** |
| estado propuesto | listo para revisión (CA vivo authority ⏳: zeus `:3017` apagado; H1 reinicio ⏳) |

## Qué se hizo

**Apertura §E (obligatoria) antes de f4:** re-smoke f1–f3 contra `:3017` y reinicio H1 `:3015` — ambos **deferred honestos** (evidencia abajo). Igual se entregó Mano + Ciudadano offline.

Se añadieron tabs **F4 Mano** y **F5 Ciudadano** al pack `flows/`: envelopes `walk`/`wake`/`announce` (stubs Z03, `game=ciudad`) vía function-nodes + `alephscript-core-client` (`ROOM_MESSAGE` event=`intent`); port CJS de `@zeus/operator-bridge` en `helpers/`; subflow censo `aleph` con random-walk sobre calles startpack. **No se tocó Z03/Z06 ni BACKLOG.** Pozo no tiene walk/wake en catálogo — documentado; aceptación authority queda ⏳ hasta Z03+fabric.

## Archivos tocados

| archivo | acción |
| --- | --- |
| `plan/SPRINTS/sprint-game-city/flows/flows.json` | modificado — tabs F4/F5 + subflow Ciudadano + UI grupos |
| `plan/SPRINTS/sprint-game-city/flows/settings.js` | modificado — globalContext helpers + `ZEUS_GAME_ID` |
| `plan/SPRINTS/sprint-game-city/flows/package.json` | modificado — v0.2.0 + script test |
| `plan/SPRINTS/sprint-game-city/flows/README.md` | modificado — f1–f5 |
| `plan/SPRINTS/sprint-game-city/flows/helpers/operator-bridge-port.js` | creado — port puro operator-bridge |
| `plan/SPRINTS/sprint-game-city/flows/helpers/ciudad-intent-stubs.js` | creado — stubs walk/wake/announce + wire command |
| `plan/SPRINTS/sprint-game-city/flows/test/intent-shape.test.js` | creado — CA offline forma envelope |
| `plan/REPORTES/WP-Z08-f4-f5-nodered-mano-ciudadano.md` | creado — este reporte |

## Evidencia

### Env checks (§E c)

```
git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
# 29e9d49c08c9cabf7b105c6f83a9fb428aef1d14

git -C HOLONES/01-mythos/games-library rev-parse HEAD
# 8a39ecee49e8abe02f9140bcb541e04c80db55fd

git -C .worktrees/wp-gc-z08-f4-f5-nodered rev-parse HEAD
# (tip post-commit; base ce56d04 al abrir worktree)
```

### Apertura · re-smoke f1–f3 (:3017)

```
curl -s -o /dev/null -w "3017:%{http_code}\n" --connect-timeout 2 http://127.0.0.1:3017/
# 3017:000 → DOWN

# Intento arranque socket-server (Z01 worktree + NODE_PATH ~/.node-red):
# ERR_MODULE_NOT_FOUND: Cannot find package '@alephscript/mcp-core-sdk'
#   imported from .../socket-server/src/create-server.mjs
# 3017 sigue DOWN
```

⏳ **Dashboard rooms + fleet + volumen vivo:** sin fabric `:3017` (ni `:3014`/`:3012`/`:3016`). Re-smoke f1–f3 **deferred** — causa: zeus socket-server no levantable aquí (deps monorepo/checkout sin `node_modules` + worktree Z01 sin `@alephscript/mcp-core-sdk` resoluble por ESM). Pedir custodio: arrancar socket-server checkout + browsers.

### Apertura · H1 cache-browser `:3015`

Estado previo (huérfano): escuchaba en `[::1]:3015` con `basePath` apuntando a worktree borrado  
`games-library\.worktrees\wp-gc-z01-mockdatas-browsers\...` (confirmado vía `/api/lineas`).

```
# Stop-Process -Id 1216 (node src/server.mjs) — OK, puerto liberado
# Reinicio con ZEUS_VOLUMES_ROOT →
#   HOLONES/01-mythos/games-library/packages/mockdatas-ciudad/volumes
# vía scripts/start-cache.mjs / node cache-browser:
# ERR_MODULE_NOT_FOUND @alephscript/mcp-core-sdk (mismo gap deps)
# :3015 queda DOWN tras el intento
```

⏳ **H1 reinicio:** intentado; **no logrado**. Pedir custodio: `npm run start:cache` desde mockdatas-ciudad con `ZEUS_SDK_ROOT` que resuelva deps (o `npm install` en checkout zeus-sdk). Volúmenes canónicos existen en checkout (`DISK_02/LINEAS/ciudad`).

### Node-RED f4–f5 (arranque pack)

```
# PORT=1883 NODE_PATH=$HOME/.node-red/node_modules
# node ~/.node-red/node_modules/node-red/red.js -u .../flows -s .../settings.js

21 Jul 01:17:25 - [info] Server now running at http://127.0.0.1:1883/
21 Jul 01:17:25 - [info] Started flows
21 Jul 01:17:25 - [info] [ui-base:Z08 Visor Ciudad] Node-RED Dashboard 2.0 (v1.30.2) started at /dashboard
# (zeus down → websocket error esperado; Ciudadano client intenta /runtime)

# Instancia :1882 (mismo userDir worktree) — admin API:
curl -s http://127.0.0.1:1882/flows →
# tabs: F1 Oreja | F2 Ojo | F3 Ciudad completa | F4 Mano | F5 Ciudadano
# subflows: Ciudadano (censo) · hasMano true · hasCiudadano true · count 80
# editor:200
```

### CA offline (forma intent + bridge)

```
cd plan/SPRINTS/sprint-game-city/flows && node --test test/intent-shape.test.js
# tests 6 · pass 6 · fail 0
# walk/wake/announce shaped · operator-bridge onState idempotente · random-walk hop válido
```

### Transparencia (eje IV / packages/)

```
rg -i 'node-red|nodered' HOLONES/01-mythos/zeus-sdk/packages --glob '!**/node_modules/**' -l | wc -l
# EXIT_COUNT=0
```

Cero diffs en zeus-sdk / games-library / Z03 / Z06 (solo lectura).

### CA ficha F4–F5 (lote)

| criterio | estado |
| --- | --- |
| F4: inject dispara intent válido (forma `@zeus/protocol` + stubs Z03) | cableado ✅ · offline shape ✅ · authority acepta ⏳ (zeus/Z03 down) |
| F4: operator-bridge portado a function-node / helper | ✅ `helpers/operator-bridge-port.js` + demo onState |
| F5: subflow ciudadano identidad censo (`aleph`) announce + walk | cableado ✅ · client room listo · rastros snapshot/dashboard ⏳ (fabric down) |
| F5: caminos Z10 o random-walk | ✅ random-walk calles startpack (Z10 no disponible) |
| Transparencia: grep node-red en `packages/` = 0 | ✅ |
| No f6+ | ✅ |
| Re-smoke f1–f3 + H1 documentados | ✅ deferred con causa |

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: `flows/**` + este reporte
- [x] Cero árboles/ficheros copiados sin procedencia: port documentado desde operator-bridge; calles citadas del startpack (lectura)
- [x] Sellos con fuente; rutas citadas existentes: sí (helpers, censo path)
- [x] Sin fluff; vivo authority / H1 / re-smoke marcados ⏳ / `<pendiente>` ops custodio
- [x] Eje IV: segundo cliente emite intents (Node-RED Mano/Ciudadano); transparency packages/ = 0
- [x] Gates ejecutados: `node --test` shape; NR Started flows; rg packages/
- [x] Commits convencionales: sí (obra en rama WP)
- [x] Diff solo del alcance del WP: sí; no BACKLOG / no push / no Z03/Z06

## Hallazgos fuera de alcance

- Checkout `zeus-sdk` sin `node_modules` + worktree Z01 sin `@alephscript/mcp-core-sdk` resoluble → no se puede ops-local socket-server/cache-browser sin tick custodio.
- Dashboard path `:1882/dashboard/ciudad` → 404 en un probe (editor 200; Dashboard 2 monta `/dashboard` — verificar path exacto en UI tras fabric up).
- Pozo catálogo ≠ walk/wake: consumidores deben usar `game=ciudad` (stubs) hasta Z03 en room.

## Dudas / bloqueos

1. **Custodio:** reiniciar H1 + socket-server `:3017` con deps sanas → re-smoke f1–f3 vivo + inject Mano aceptado por authority (cuando Z03 mergee o stub authority).
2. Room de juego: ¿mantener `POZO_DEMO` como room transport hasta que Z03 defina room ciudad, o crear `CIUDAD_DEMO` ya?

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-21 · orquestador (merge/gobierno). Caveats deferred.

Obra `21bd0cf` · tip reporte `a60b2bb` · merge `main` @ `cd75428`. Diff = `flows/**` (F4 Mano + F5 Ciudadano + helpers/test) + este reporte. Eje IV offline ✅ (shape intents + transparency `packages/` = 0); authority/fabric vivo ⏳. Z03 ya ✅ en `main` (room ciudad disponible para re-smoke). **f6+ no tocado.**

### Deferred explícitos (no bloquean ✅)

| id | ítem | nota |
| -- | ---- | ---- |
| D1 | Re-smoke f1–f3 contra zeus `:3017` (dashboard rooms/fleet/volumen) | socket-server DOWN; deps `@alephscript/mcp-core-sdk` — custodio |
| D2 | Reinicio H1 cache-browser `:3015` con `ZEUS_VOLUMES_ROOT` canónico | intentado; mismo gap deps; volúmenes en checkout OK |
| D3 | Authority vivo — inject Mano aceptado + rastros Ciudadano | depende D1 (+ Z03 ✅ ya en main); pozo ≠ walk/wake documentado |

Hallazgos fuera de alcance (path dashboard UI; room `POZO_DEMO` vs ciudad) no bloquean. Retomar D1–D3 cuando custodio levante fabric H1/:3017.
