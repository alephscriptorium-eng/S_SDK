# Flows Node-RED — WP-Z08 f1–f3 (visor ciudad)

Instancia **:1880** contra el fabric zeus **:3017** `/runtime`.  
Alcance de este lote: **solo F1 Oreja · F2 Ojo · F3 Ciudad completa**.  
F4+ (Mano / Ciudadano / Población / wishlist) → fuera de alcance.

## Piezas

| paquete | versión | rol |
|---|---|---|
| `node-red-contrib-alephscript-core` | ^0.2.0 | boca Socket.IO hacia zeus |
| `node-red-dashboard-2-alephscript-rooms` | ^0.2.0 | widget clients/rooms |
| `@flowfuse/node-red-dashboard` | ^1.30.2 | Dashboard 2 host |

Instalar desde Verdaccio (`npm.scriptorium.escrivivir.co`) o el registry ya configurado en `~/.npmrc`.  
**Cero forks.** Fuentes de referencia (solo lectura): `WiringEditor/packages/`, `WiringEditor/examples/flows/`, `ScriptoriumVps/node-red-projects/`.

## Auth fabric

```js
{ token: 'dev-secret', room: 'PUBLIC_ROOM', user: 'nr-z08-oreja' }
// ns: /runtime · url: ws://localhost:3017
```

Room de juego por defecto: `POZO_DEMO` (override `ZEUS_GAME_ROOM` / `ZEUS_POZO_ROOM`).  
Hasta que Z03 entregue el pack ciudad, pozo es el latido de referencia (HEARTBEAT 5 s).

## Arranque

Precondiciones: socket-server zeus en `:3017`. Opcional para F3: console-monitor `:3014`, editor-ui `:3012`, firehose-browser `:3016`, cache-browser `:3015`.

```bash
cd plan/SPRINTS/sprint-game-city/flows
npm install   # Verdaccio / registry con core@0.2.0 + rooms@0.2.0 + @flowfuse/node-red-dashboard
npx --yes node-red -u "$(pwd)" -s "$(pwd)/settings.js"
```

Si ya tenés los contribs en `~/.node-red/node_modules` (dev local), alternativa sin reinstall:

```bash
export NODE_PATH="$HOME/.node-red/node_modules"
# opcional: PORT=1881 si :1880 está ocupado
npx --yes node-red -u "$(pwd)" -s "$(pwd)/settings.js"
```

- Editor: <http://127.0.0.1:1880> (o `PORT`)
- Dashboard: <http://127.0.0.1:1880/dashboard/ciudad>

## Tabs

| tab | fase | qué hace |
|---|---|---|
| **F1 Oreja** | f1 | 2× `alephscript-core-client` (PUBLIC_ROOM + POZO_DEMO); filtra `state\|track\|ledger\|SET_STATE`; taxonomía `sys/app/ui/agent/game` (patrón 3d-monitor) |
| **F2 Ojo** | f2 | `alephscript-rooms-*` en modo `external` → `http://localhost:3017`; widget rooms/clients |
| **F3 Ciudad completa** | f3 | `http request` a `/snapshot`, `/api/mcp/servers`, `/api/stats`, `/api/lineas`; join + grupos por distrito; fallback fixture si Z01/browsers ausentes |

## Dependencia blanda Z01

Si mockdatas/browsers de Z01 no están mergeados o `:3015`/`:3016` no responden, F3 marca `volumeSource: "fixture"` y usa el contenido de [`fixtures/empty-volume-stats.json`](fixtures/empty-volume-stats.json) (volumen vacío de demo). No bloquea el lote.

## Transparencia (regla 3 sprint)

La authority / zeus-sdk **no** lleva código Node-RED-aware. Este pack vive solo bajo `plan/SPRINTS/sprint-game-city/flows/`. Verificar:

```bash
rg -i 'node-red|nodered' HOLONES/01-mythos/zeus-sdk --glob '!**/node_modules/**' -c
# esperado: 0
```

## Fuera de este lote

- f4 Mano (emitir intents) · f5 Ciudadano · f6 Población 169 · f7 wishlist
- Pack en `games-library` · mini-clon VPS (Z09) · switch `serverUrl` productivo
