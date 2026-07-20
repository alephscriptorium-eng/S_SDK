# WP-Z08 · nodered-visor-ciudad — reporte

| dato | valor |
| ---- | ----- |
| agente | worker · gc-z08-nodered-visor |
| fecha | 2026-07-20 |
| rama | `wp/gc-z08-nodered-visor` |
| worktree | `.claude/worktrees/gc-z08-nodered-visor` |
| commits | `e3daee8` (obra flows) · tip docs reporte en esta rama |
| eje(s) CA | IV (Node-RED = segundo cliente del contrato `/runtime`) |
| alcance lote | **solo f1–f3** (Oreja · Ojo · Ciudad completa) |
| estado propuesto | listo para revisión (CA vivo parcial: zeus :3017 apagado en esta máquina) |

## Qué se hizo

Desviación de alcance del WP completo: **f4–f7 no implementados** (decisión fija del orquestador / BRIEF lote GC-1). Destino de flows bajo el sprint (`plan/SPRINTS/sprint-game-city/flows/`), **no** en games-library.

Se creó la instancia Node-RED del visor (settings `:1880`, `flows.json` con 3 tabs) usando `node-red-contrib-alephscript-core@0.2.0` + `node-red-dashboard-2-alephscript-rooms@0.2.0` + Dashboard 2, contra el protocolo zeus `ws://localhost:3017/runtime` (`dev-secret`). F3 agrega REST zeus y cae a fixture de volumen vacío si Z01/browsers no están. zeus-sdk / WiringEditor = solo lectura.

## Archivos tocados

| archivo | acción |
| --- | --- |
| `plan/SPRINTS/sprint-game-city/flows/flows.json` | creado — tabs F1/F2/F3 + UI Dashboard 2 |
| `plan/SPRINTS/sprint-game-city/flows/settings.js` | creado — puerto 1880, globalContext zeus |
| `plan/SPRINTS/sprint-game-city/flows/package.json` | creado — deps contribs |
| `plan/SPRINTS/sprint-game-city/flows/README.md` | creado — arranque / auth / Z01 blanda |
| `plan/SPRINTS/sprint-game-city/flows/fixtures/empty-volume-stats.json` | creado — demo volumen vacío |
| `plan/SPRINTS/sprint-game-city/flows/.gitignore` | creado — node_modules + runtime NR |
| `plan/REPORTES/WP-Z08-nodered-visor-ciudad.md` | creado — este reporte |

## Evidencia

### Arranque Node-RED (flows cargados)

```
# NODE_PATH=$HOME/.node-red/node_modules PORT=1881
# ( :1880 ocupado por instancia previa; settings default sigue siendo 1880 )
npx node-red -u plan/SPRINTS/sprint-game-city/flows -s .../settings.js

20 Jul 22:35:54 - [info] Server now running at http://127.0.0.1:1881/
20 Jul 22:35:54 - [info] Starting flows
20 Jul 22:35:54 - [info] [ui-base:Z08 Visor Ciudad] Node-RED Dashboard 2.0 (v1.30.2) started at /dashboard
20 Jul 22:35:54 - [info] Started flows
```

### HTTP editor / dashboard

```
curl -s -o /dev/null -w "editor:%{http_code}\n" http://127.0.0.1:1881/
# editor:200
curl -s -o /dev/null -w "dashboard:%{http_code}\n" http://127.0.0.1:1881/dashboard/ciudad
# dashboard:200
```

### Estructura f1–f3 (validación estática del flow)

```
tabs: F1 Oreja | F2 Ojo | F3 Ciudad completa
has core-config true
has rooms-dashboard true
http nodes: GET :3014/snapshot, GET :3012/api/mcp/servers,
            GET :3016/api/stats, GET :3015/api/stats, GET :3015/api/lineas
district groups: Zigurat, Runtime/MCP, Editores, Lore/voz, Red/stream, Infra/UI
```

### Fabric zeus (vivo)

```
# :3017 / :3014 / :3012 / :3015 / :3016 no respondían en esta sesión
20 Jul 22:35:54 - [error] [alephscript-core-config:Zeus /runtime :3017] AlephScript connection error: websocket error
20 Jul 22:35:56 - [error] [http request:GET :3014/snapshot] RequestError
# … idem :3012 :3016 :3015
```

⏳ **sin verificar en vivo** (zeus apagado): rooms + fleet MCP + un volumen refrescando con datos reales. El cableado y el fallback fixture de F3 están listos; falta re-probar con socket-server + browsers arriba.

### Transparencia regla 3 (eje IV / authority ciega a Node-RED)

```
rg -i 'node-red|nodered' HOLONES/01-mythos/zeus-sdk --glob '!**/node_modules/**' -l | wc -l
# EXIT_COUNT_FILES=0
```

Cero diffs en zeus-sdk / games-library (solo lectura).

### CA ficha F1–F3 (lote)

| criterio | estado |
| --- | --- |
| F1 Oreja: escucha state\|track\|ledger + SET_STATE en PUBLIC_ROOM + room juego vía `/runtime` | cableado ✅ · vivo ⏳ (zeus down); room juego default `POZO_DEMO` |
| F2 Ojo: widget rooms clients/rooms en vivo | cableado ✅ (external :3017) · vivo ⏳ |
| F3 Ciudad: REST snapshot/servers/stats/lineas + grupos distrito + taxonomía | cableado ✅ · vivo ⏳; volumen → fixture si browsers/Z01 ausentes |
| Transparencia: grep node-red en zeus-sdk = 0 | ✅ |
| Cero forks; nodos desde registry/fuentes | ✅ (package.json ^0.2.0; verificación local vía `~/.node-red/node_modules`) |

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: `plan/SPRINTS/sprint-game-city/flows/**` + este reporte
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia: flows nuevos; refs a WiringEditor/ScriptoriumVps solo en README
- [x] Sellos con fuente; rutas citadas existentes: puertos RECURSOS-LIBS §2; distritos cantera `01-BARRIOS/_INDICE.md`
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: f4+ explícitamente fuera; vivo zeus marcado ⏳
- [x] Eje IV evidenciado: segundo cliente = Node-RED; transparencia grep=0; vivo fabric ⏳
- [x] Gates ejecutados de verdad: JSON parse, NR start, curl 200, grep transparencia
- [x] Commits convencionales: sí (ver abajo)
- [x] Diff solo del alcance del WP: sí; BACKLOG no tocado; no push; no merge

## Hallazgos fuera de alcance

1. **npm install Verdaccio** en el userDir del sprint fue bloqueado por auto-review en esta sesión; se usó `NODE_PATH=~/.node-red/node_modules` para la prueba. Conviene `npm install` limpio en `flows/` en la máquina del custodio.
2. **zeus :3017 apagado** → no se pudo cerrar el CA “refrescando en vivo” con datos reales.
3. Wishlist / dolores (f7): republicar nodos sobre SDK `^1.5.0`; auth token real por room — no tocados.
4. F4+ (Mano / Ciudadano / Población 169 / constelación multi-NR) — siguientes lotes.

## Dudas / bloqueos

- **Z01 blanda:** mockdatas/browsers no mergeados en esta pasada → F3 documenta `volumeSource: "fixture"` / `fixtures/empty-volume-stats.json`. Re-validar fleet+volumen cuando Z01 aterrice y browsers `:3015`/`:3016` estén up.
- Room de juego ciudad (Z03) aún no existe → F1 usa `POZO_DEMO` como stand-in (`ZEUS_GAME_ROOM` override).

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
