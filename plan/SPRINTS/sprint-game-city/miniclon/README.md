# Mini-clon local — Pub.Rooms / Node-RED (WP-Z09)

Aterrizaje en `plan/SPRINTS/sprint-game-city/miniclon/` porque el checkout
`HOLONES/01-mythos/zeus-sdk` está desmaterializado (tick A1 del custodio).
Tras A1 el orquestador puede mover este árbol a `zeus-sdk/delta/` si conviene.

## Qué incluye

| pieza | ruta | rol |
|---|---|---|
| Flows rooms (server) | `flows/rooms-mvp-candidate.flow.json` | mesh managed-port `:3010` + Dashboard 2 `/dashboard/rooms` |
| Flow cliente VPS | `flows/pub-room-client.vps.flow.json` | `serverUrl` = `wss://rooms.scriptorium.escrivivir.co` |
| Flow cliente local | `flows/pub-room-client.local.flow.json` | mismo flow; `serverUrl` = `ws://localhost:3010` |
| Settings Node-RED | `nodered/settings.js` | editor `/red`, Dashboard 2 `/dashboard` |
| Manifiesto contribs | `nodered/node-red-contribs.json` | registry 0.3.x + dashboard host |
| Paquetes 0.3.0 (staging) | `packages/*` | bump a `@alephscript/mcp-core-sdk@^1.5.0` |
| Compose/Dockerfile | `docker-compose.yml`, `nodered/Dockerfile` | base pin `nodered/node-red:5.0.1` (VPS) |

Procedencia de flows/settings/scripts: copias de
`ScriptoriumVps/PATTERN-DOCKER/nodered/` y `ScriptoriumVps/node-red-projects/`
(solo lectura en origen). Staging de nodos: `WiringEditor/packages/` → bump
local 0.3.0 (no se toca el monorepo WiringEditor).

## Nodos 0.3.x desde registry

Objetivo CA: `node-red-contrib-alephscript-core@0.3.0` y
`node-red-dashboard-2-alephscript-rooms@0.3.0` con dep
`@alephscript/mcp-core-sdk@^1.5.0`, instalables desde
`https://npm.scriptorium.escrivivir.co`.

Estado (GO-4 · 2026-07-21):

- Staging local: versiones **0.3.0** + dep **^1.5.0** en `packages/*/package.json`.
- Registry: **0.3.0** publicado (D2 PASS) — dep `@alephscript/mcp-core-sdk@^1.5.0`.
- Auth de escritura: **DE-I12** — `NPM_USERNAME` / `NPM_PASSWORD` (o
  `VERDACCIO_ADMIN_*` del VPS secrets file). **No** `_authToken`.
- Base image: **`nodered/node-red:5.0.1`** (versión exacta del VPS al corte).

```bash
# Instalar como consumidor (cuando 0.3.x esté en Verdaccio):
npm install --prefix ./data \
  --registry https://npm.scriptorium.escrivivir.co \
  node-red-contrib-alephscript-core@0.3.0 \
  node-red-dashboard-2-alephscript-rooms@0.3.0 \
  @flowfuse/node-red-dashboard

# O vía manifiesto:
node nodered/install-contribs.mjs nodered/node-red-contribs.json
```

Publish (CI / estación con secrets DE-I12):

```bash
export NPM_USERNAME=… NPM_PASSWORD=…   # o secrets del workflow
./scripts/publish-nodes-0.3.sh
```

## Switch local ↔ VPS ↔ zeus (tabla operativa)

| Nivel | Campo | Clon local | VPS | Zeus socket-server |
|---|---|---|---|---|
| Servidor rooms | `mode` / `managedPort` | `managed-port` / `3010` | igual | n/a (fabric externo) |
| Cliente federado | `serverUrl` | `ws://localhost:3010` | `wss://rooms.scriptorium.escrivivir.co` | `ws://localhost:3017` |
| Env cliente | `ROOMS_USER` / `ROOMS_ROOM` / `ROOMS_SECRET` | locales | del owner | `dev-secret` / room zeus |

Cambiar **solo** `serverUrl` en el nodo `alephscript-core-config` (o usar el
flow `.local` vs `.vps`). Secretos siempre vía `$(ROOMS_*)`, nunca en claro
en el JSON.

**Gap zeus `:3017`:** requiere checkout zeus-sdk sano (A1). Hasta entonces el
brazo local del switch es clon `:3010` ↔ VPS wss; zeus queda documentado
como bonus post-A1.

## Docker

Base image pin: **`nodered/node-red:5.0.1`** (`NODE_RED_VERSION=v5.0.1` en
la imagen `latest` del VPS al corte GO-4). Override:
`NODERED_BASE_IMAGE` en `.env`.

Smoke `/dashboard/rooms` (D1): requiere daemon Docker vivo. Si
`com.docker.service` está Stopped → FAIL/defer (ver acta GO-4).

Cuando el daemon esté up:

1. `cp secrets/rooms-secrets.json.example secrets/rooms-secrets.json` y
   rellenar `ROOMS_LAB`.
2. `cp .env.example .env` (`NODERED_CREDENTIAL_SECRET` obligatorio).
3. `docker compose up --build` → `http://localhost:1880/dashboard/rooms`.
4. Publicar `1880` y `3010`; sin red externa `oasis_pub_*` (omitida en el clon).

## Arranque offline (sin Docker)

Con Node-RED en el host (si hay puerto libre; `:1880` puede estar ocupado):

```bash
export NODERED_CREDENTIAL_SECRET=dev-local-secret
export ROOMS_SECRETS_FILE="$(pwd)/secrets/rooms-secrets.json"
export ROOMS_USER=miniclon-client ROOMS_ROOM=ROOMS_LAB ROOMS_SECRET=lab-dev-token
# tras instalar contribs 0.3.x (registry o packages/ build+pack)
npx --yes node-red -u "$(pwd)/data" -s "$(pwd)/nodered/settings.js"
```

Importar `flows/rooms-mvp-candidate.flow.json` (+ cliente local o VPS).

## Ceguera

Entregables sin tokens de método/marco. `aleph` / `scriptorium` admisibles
como datos de instancia (DC-GC-ceguera-marca).
