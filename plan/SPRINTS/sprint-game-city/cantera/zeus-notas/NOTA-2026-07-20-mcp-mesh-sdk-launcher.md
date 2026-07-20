# NOTA — Vieja mesh: mcp-mesh-sdk + MCP Launcher

| dato | valor |
| ---- | ----- |
| fecha | 2026-07-20 |
| tipo | inventario / captura (no WP) |
| origen | `aleph-scriptorium/MCPGallery/mcp-mesh-sdk` (fuera de este monorepo) |
| paquete npm | `alephscript-mcp-mesh-sdk` @ 0.0.1 |
| estado | asentado para ulterior análisis |
| cadena | … → agujero negro → **este nodo** → [zeus MCP](./NOTA-2026-07-20-zeus-mcp-servers.md) → [puente](./NOTA-2026-07-20-fusion-launcher-zeus-mcp.md) |

## Qué es

Mesh experimental («MCPGaia») donde varios **MCP servers** conviven y un
**Launcher** —él mismo un MCP server— **lanza / para / reinicia** a los demás
como procesos hijos (`tsx` + spawn), con catálogo en config y tools MCP.

Entrada canónica: `src/MCPLauncherServer.ts` · script `npm run start:launcher`
· puerto default **3050** (`mcp-service-launcher`).

## Launcher — superficie MCP

| Tools | Resources (URI) |
| ----- | ----------------- |
| `launch_mcp_server` | `launcher://session/current` |
| `stop_mcp_server` | `launcher://servers/available` |
| `restart_mcp_server` | `launcher://status/global` |
| `launch_all_servers` | `launcher://vscode/mcp-config` |
| `get_server_status` | |
| `generate_vscode_mcp_config` | |
| `health_check_servers` | |
| `check_port_availability` | |

Modelo: **MCP meta-ops** (lifecycle de peers) + generación de `.vscode/mcp.json`.

## Catálogo de servers (DEFAULT_APP_CONFIG)

| id | puerto default | script npm |
| -- | -------------- | ---------- |
| `mcp-service-launcher` | 3050 | `start:launcher` |
| `wiki-mcp-browser` | 3002 | `start:wiki` |
| `devops-mcp-server` | 3003 | `start` / DevOps |
| `state-machine-server` | 3004 | `start:state` |
| `prolog-mcp-server` | 3006 | `start:prolog` |
| `aaia-mcp-server` | 3007 | `start:aaia` |
| `firehose-mcp-server` | 3008 | `start:firehose` |
| `typed-prompt-mcp-server` | 3020 | `start:typed-prompt` |
| `bothub-mcp-server` | 3010 | `start:bothub` (comentado en config) |

Dependencia viva: `@alephscript/mcp-core-sdk` (tarball local en el clone
histórico) + `@modelcontextprotocol/sdk`.

## Notas para análisis (sin resolver aquí)

- El Launcher **es** un MCP que opera otros MCP (jerarquía meta).
- Arranque también vía VS Code task `MCP: Start [Launcher]` (doc en
  `src/MCPLauncherServer.md` — transcript Copilot, no spec formal).
- Continuidad con zeus: el id `firehose` @ **3008** reaparece en
  `DEFAULT_ZEUS_MCP.firehose.disk`.
- Continuidad de marca: script `web:zeus` → `:3012` (hoy editor-ui en zeus).
