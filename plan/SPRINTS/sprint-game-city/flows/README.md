# Flows Node-RED — WP-Z08 f1–f5 (visor + Mano + Ciudadano)

Instancia **:1880** contra el fabric zeus **:3017** `/runtime`.  
Alcance de este lote: **F1 Oreja · F2 Ojo · F3 Ciudad completa · F4 Mano · F5 Ciudadano**.  
F6+ (población 169 / wishlist) → fuera de alcance.

## Piezas

| paquete | versión | rol |
|---|---|---|
| `node-red-contrib-alephscript-core` | ^0.2.0 | boca Socket.IO hacia zeus |
| `node-red-dashboard-2-alephscript-rooms` | ^0.2.0 | widget clients/rooms |
| `@flowfuse/node-red-dashboard` | ^1.30.2 | Dashboard 2 host |
| `helpers/operator-bridge-port.js` | local | port puro de `@zeus/operator-bridge` |
| `helpers/ciudad-intent-stubs.js` | local | envelopes walk/wake/announce (stubs Z03) |

Instalar desde Verdaccio (`npm.scriptorium.escrivivir.co`) o el registry ya configurado en `~/.npmrc`.  
**Cero forks.** Fuentes de referencia (solo lectura): `WiringEditor/packages/`, `WiringEditor/examples/flows/`, `ScriptoriumVps/node-red-projects/`, `zeus-sdk/packages/mesh/operator-bridge`.

## Auth fabric

```js
{ token: 'dev-secret', room: 'PUBLIC_ROOM', user: 'nr-z08-oreja' }
// ns: /runtime · url: ws://localhost:3017
```

Room de juego por defecto: `POZO_DEMO` (override `ZEUS_GAME_ROOM` / `ZEUS_POZO_ROOM`).  
`ZEUS_GAME_ID` default `ciudad` (stubs Z03). Pozo **no** acepta `walk`/`wake` en su catálogo — la forma del envelope es la del contrato `@zeus/protocol` + args Z03; la authority ciudad los aceptará cuando Z03 mergee.

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
| **F1 Oreja** | f1 | 2× `alephscript-core-client` (PUBLIC_ROOM + POZO_DEMO); filtra `state\|track\|ledger\|SET_STATE`; taxonomía `sys/app/ui/agent/game` |
| **F2 Ojo** | f2 | `alephscript-rooms-*` en modo `external` → `http://localhost:3017`; widget rooms/clients |
| **F3 Ciudad completa** | f3 | `http request` a `/snapshot`, `/api/mcp/servers`, `/api/stats`, `/api/lineas`; join + grupos por distrito; fallback fixture |
| **F4 Mano** | f4 | inject walk/wake → compose envelope → `ROOM_MESSAGE` event=`intent`; demo operator-bridge onState |
| **F5 Ciudadano** | f5 | subflow `Ciudadano (censo)` · id `aleph` · announce + walk periódico (random-walk calles startpack) |

## Helpers locales

```bash
node --test test/intent-shape.test.js   # CA offline: forma envelope + bridge port
```

## Dependencia blanda Z01 / Z03 / Z10

- Z01 browsers: F3 marca `volumeSource: "fixture"` si `:3015`/`:3016` no responden.
- Z03 juego ciudad: envelopes listos; aceptación authority ⏳ hasta merge + zeus arriba.
- Z10 caminos: F5 usa `nextRandomWalk` sobre calles del startpack; sustituir cuando exista viaje.

## Transparencia (regla 3 sprint)

La authority / zeus-sdk **no** lleva código Node-RED-aware. Este pack vive solo bajo `plan/SPRINTS/sprint-game-city/flows/`. Verificar:

```bash
rg -i 'node-red|nodered' HOLONES/01-mythos/zeus-sdk/packages --glob '!**/node_modules/**' -l
# esperado: 0 archivos
```

## Fuera de este lote

- f6 Población 169 · f7 wishlist
- Pack en `games-library` · mini-clon VPS (Z09) · switch `serverUrl` productivo
- Edits a Z03 / Z06
