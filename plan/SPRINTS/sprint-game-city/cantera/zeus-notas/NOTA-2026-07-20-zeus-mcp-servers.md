# NOTA — Zeus-sdk: servidores MCP propios

| dato | valor |
| ---- | ----- |
| fecha | 2026-07-20 |
| tipo | inventario / captura (no WP) |
| origen | monorepo `zeus-sdk` + library `Z_SDK-games-library` |
| bootstrap | `@zeus/presets-sdk` → `createStandardMcpServer` (Streamable HTTP) |
| estado | asentado para ulterior análisis |
| cadena | [vieja mesh](./NOTA-2026-07-20-mcp-mesh-sdk-launcher.md) → **este nodo** → [puente](./NOTA-2026-07-20-fusion-launcher-zeus-mcp.md) |

## Patrón común

Todos los MCP de mesh/engine pasan por `createStandardMcpServer`
(`presets-sdk/src/mcp/bootstrap.mjs`):

- `McpServer` oficial + Express app (`POST …/mcp`, `GET …/mcp/health`)
- resources/templates/prompts + bridge tools (`getResourcesUris`, etc.)
- server-card opcional; puertos vía `resolveZeusMcpPorts()` / `ZEUS_MCP_*`

Player-MCPs de juego: `createPlayerMcpServer` (`@zeus/player-mcp-kit`) encima
del mismo bootstrap + bridge a rooms.

**No hay** en zeus un MCP Launcher equivalente (spawn/stop de peers vía tools).
Ops de lifecycle = scripts npm / procesos externos / editor que **descubre**
(refresh), no lanza.

## Mesh — `zeus.role: mcp`

| Paquete | `zeus.mcp` | Puertos default (catálogo) |
| ------- | ---------- | -------------------------- |
| `@zeus/solar-system` | `solar` | sun 4101 · moon 4102 · earth 4103 |
| `@zeus/linea-system` | `lineas` | espana 4111 · wpHistoria 4112 |
| `@zeus/force-system` | `forces` | 4113 |
| `@zeus/ssb-system` | `ssb` | 4114 |
| `@zeus/linea-firehose` | `firehose` | **3008** (herencia mesh vieja) |
| `@zeus/console-monitor` | `consoleMonitor` | playerDebug.monitor **3014** |

## Library — MCP por actor (juegos)

| Juego | Paquete / ruta | Puerto default |
| ----- | -------------- | -------------- |
| delta | `arg-player-mcp` | 4121 / 4122 (`argPlayer.uno|dos`) |
| pozo | `pozo/.../player-mcp` | 4131 |
| solve-coagula | `solve-coagula/.../player-mcp` | 4132 |

## Descubrimiento / editor (no lifecycle)

`@zeus/editor-ui` expone REST de catálogo vivo:

- `POST /api/mcp/refresh` · `GET /api/mcp/servers` · `…/tools|resources|prompts`
- Discovery: `data/zeus-discovery.json` + overrides UI

Proyección REST→MCP (agujero negro): `@zeus/http-contract`
(`projectRoutesToMcp`, scheme `rest://…`).

Docs FOSS: [mesh](https://github.com/alephscriptorium-eng/Z_SDK/blob/main/docs/mesh/index.md) ·
[player-mcp-kit](https://github.com/alephscriptorium-eng/Z_SDK/blob/main/docs/engine/player-mcp-kit.md) ·
[mcp-resources](https://github.com/alephscriptorium-eng/Z_SDK/blob/main/docs/contracts/mcp-resources.md) ·
[MCP HTTP OpenAPI](https://z-sdk.escrivivir.co/api/mcp-http.html).

## Notas para análisis

- Zeus = **fleet de MCP ya tipados** + discovery; mesh vieja = **Launcher meta** + fleet.
- Mismo `@alephscript/mcp-core-sdk` en socket-server; MCP HTTP en presets sobre SDK oficial.
- Hueco explícito: ¿quién hace de `launch_mcp_server` / `stop_mcp_server` en el mundo A/B zeus?
