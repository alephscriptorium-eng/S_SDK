# WP-Z04 — Rabbits r/s/h como actores externos (e2e de federación)

| dato | valor |
|---|---|
| estado | ⬜ |
| track / prio | PACK / 2 |
| depende de | Z03 (el juego debe existir para entrar en él) |
| base zeus | `@zeus/protocol` + `@zeus/rooms` (namespace `/runtime`, auth `{token,room,user}`, kinds `intent|state|track|ledger`, campo `game`) · `@zeus/player-mcp-kit` · precedente `tap-horse` (games-library `packages\delta\...`, responder HORSE → `tools/call` → intent → estado) |
| contrato peers | r/s/h canónicos de `mcp-core-sdk` (rabbit=presencia, spider=federación RNFP, horse=transporte MCP; `POST /bots {role}`, `GET /peers`, `GET /actor-registry`) |

## Objetivo

Primera federación real de peers externos contra el gamemap ciudad: los rabbits entran
como actores de fuera, se anuncian, federan y aportan capacidades vía horse. Es el caso
de uso que demuestra que la base zeus habla con el mundo exterior.

## Coreografía

1. **Rabbit** (presencia): peer externo se conecta por el canal sancionado y hace
   `announce` en la plaza.
2. **Spider** (federación): gate RNFP `active` como **rito de entrada al distrito** —
   sin capacidad activa no se cruza la frontera de zona.
3. **Horse** (transporte): dentro del distrito, el peer encarna horse y ejecuta
   `tools/call` → intent `wake` del catálogo de Z03. **Horse nunca lleva bytes**
   (SPEC-horse-blobs-v0 — contrato zeus, se respeta).

## Entregables

1. Demo/cliente peer (script o mini-app) que ejecuta la coreografía completa contra
   la authority de Z03.
2. Mock del control-plane r/s/h si el real no está servido (la spec OpenAPI de
   mcp-core-sdk basta como contrato; no esperamos a que aleph lo despliegue).
3. Caso e2e reproducible en `spec\CASOS.md` de Z03 (caso «federación»).

## Criterios de aceptación

- [ ] e2e completo: rabbit entra → announce en plaza → RNFP active → cruza a distrito →
      horse `tools/call` → barrio despierta → cambio visible en snapshot.
- [ ] El peer usa SOLO el contrato sancionado (`protocol`+`rooms` o `player-mcp-kit`);
      cero acceso directo al estado de la authority.
- [ ] El caso corre en local sin ningún servicio del lado aleph vivo.

## Notas

- No confundir roles: player-MCP = agente de juego; Launcher (Z06) = orquestador de
  procesos. Este WP es lo primero, no lo segundo.
