# PROVENANCE — mini-clon Z09

| artefacto | origen (solo lectura) | adaptación |
|---|---|---|
| `nodered/settings.js` | `ScriptoriumVps/PATTERN-DOCKER/nodered/settings.js` | copia |
| `nodered/install-contribs.mjs` | idem | copia |
| `nodered/Dockerfile` | derivado del Dockerfile VPS | bake `install-contribs` en build; sin WiringEditor montado |
| `flows/rooms-mvp-candidate.flow.json` | `ScriptoriumVps/node-red-projects/` | copia |
| `flows/pub-room-client.vps.flow.json` | `pub-room-client.flow.json` | rename |
| `flows/pub-room-client.local.flow.json` | derivado | `serverUrl` → `ws://localhost:3010` |
| `packages/node-red-contrib-alephscript-core` | `WiringEditor/packages/...` | version `0.3.0`, dep SDK `^1.5.0` |
| `packages/node-red-dashboard-2-alephscript-rooms` | idem | idem |

No se modificó el árbol WiringEditor ni ScriptoriumVps.
Aterrizaje: `plan/SPRINTS/sprint-game-city/miniclon/` (zeus-sdk A1 pendiente).
