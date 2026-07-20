# NOTA — Protocolo «agujero negro» (= MCP / REST por debajo)

| dato | valor |
| ---- | ----- |
| fecha | 2026-07-20 |
| tipo | entendimiento de requisitos (no WP) |
| cadena | game\* → monigotil → **este nodo** |
| estado | asentado |
| siguiente | [Launcher mesh vieja](./NOTA-2026-07-20-mcp-mesh-sdk-launcher.md) · [zeus MCP](./NOTA-2026-07-20-zeus-mcp-servers.md) · [fusión](./NOTA-2026-07-20-fusion-launcher-zeus-mcp.md) |

## Entendido

**«Agujero negro»** es el nombre de producto/metáfora del **sumidero de protocolo**: lo que no va por el canal de juego tipado (o queda sin clasificar en la vista) **cae** a la superficie dual **MCP ↔ REST**.

Por debajo no hay un wire distinto: es `@zeus/http-contract` (RouteEntry → OpenAPI + resources MCP, URI `xMcpResource` o `rest://…`) y, para actores, `@zeus/player-mcp-kit` (un MCP por actor → intents + evidencia).

La metáfora viva en mesh: vistas **ecosystem** / **flux** de `@zeus/3d-monitor` (tráfico sin clasificar / buffer de announces → agujero).

## Relación con la cadena

| Nodo previo | Cómo encaja el agujero |
| ----------- | ---------------------- |
| **gamechannel** | Canal tipado del mapa (`GAME_INTENT` / `GAME_STATE`). Lo tipado no cae al agujero. |
| **gamemap** / objects / things | Verdad lógica y contenido; agnósticos al transporte MCP/REST. |
| **gameviewer** | Lee snapshots; el agujero en monitor es *otra* lectura (ops/fauna), no el viewer de escena monigotil. |
| **monigotil / GLB opt-in** | Capa visual; el agujero es capa de **protocolo/ops**, ortogonal al mesh. |
| **playbook / CASOS** | La mitad verificable del agente pasa por MCP (mismo sumidero). |

```
walk/map/watch ──gamechannel──► rooms
actor / UI / agente ──► MCP ⟷ REST  ◄── «agujero negro»
                         ▲
              http-contract + player-mcp-kit
```

## Docs FOSS

- [http-contract](https://github.com/alephscriptorium-eng/Z_SDK/blob/main/docs/engine/http-contract.md) · [resources MCP](https://github.com/alephscriptorium-eng/Z_SDK/blob/main/docs/contracts/mcp-resources.md)
- [player-mcp-kit](https://github.com/alephscriptorium-eng/Z_SDK/blob/main/docs/engine/player-mcp-kit.md)
- Metáfora UI: [3d-monitor README](https://github.com/alephscriptorium-eng/Z_SDK/blob/main/packages/mesh/3d-monitor/README.md)

## Implicación

Completar gamificación no sustituye el agujero: el mapa habla por **gamechannel**; agentes, browsers y ops hablan por **MCP/REST**. Mismo mundo, dos bocas.
