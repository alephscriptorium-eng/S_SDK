# NOTA — Fusión mental: Launcher (mesh vieja) × MCP zeus

| dato | valor |
| ---- | ----- |
| fecha | 2026-07-20 |
| tipo | cruce / hipótesis (no WP, no diseño) |
| entradas | [mcp-mesh-sdk Launcher](./NOTA-2026-07-20-mcp-mesh-sdk-launcher.md) · [zeus MCP](./NOTA-2026-07-20-zeus-mcp-servers.md) |
| cadena previa | game\* → monigotil → [agujero negro](./NOTA-2026-07-20-agujero-negro-mcp-rest.md) |
| estado | asentado para ulterior análisis |
| siguiente | [índice-ciudad / handoff remoto](./NOTA-2026-07-20-ciudad-scriptorium-handoff.md) |

## Existen los dos

| Mundo | Qué aporta |
| ----- | ---------- |
| **mcp-mesh-sdk** | MCP **Launcher** (:3050): tools de lifecycle (`launch`/`stop`/`restart`/`launch_all`/`health`/VS Code config) sobre un catálogo de servers (wiki, devops, prolog, firehose, …). |
| **zeus-sdk (+ library)** | Fleet MCP **Streamable HTTP** (`createStandardMcpServer`) + player-MCPs por juego + editor que **lista/refresca**, no spawnea. Sumidero REST↔MCP = agujero negro. |

Ambos conviven en el OASIS del operador; zeus **no** absorbió aún el rol Launcher.

## Solapes observables

| Señal | Vieja mesh | Zeus |
| ----- | ---------- | ---- |
| Firehose MCP puerto | 3008 | `ZEUS_MCP` firehose.disk **3008** |
| UI «zeus» | `web:zeus` → :3012 | editor-ui default :3012 |
| Core rooms | `@alephscript/mcp-core-sdk` | mismo en `socket-server` |
| Protocolo agente | tools MCP | MCP + proyección REST (`http-contract`) |

## Huecos (candidatos a análisis / WP futuro — no decidir aquí)

1. **Meta-ops ausente en zeus:** no hay `launch_mcp_server` / `stop_mcp_server` como MCP; solo npm scripts + discovery.
2. **¿Dónde vive el Launcher en la cadena?** Candidato natural: encima del agujero negro (ops MCP) y al lado del editor-ui (hoy solo refresh).
3. **Catálogo divergente:** mesh vieja (wiki/prolog/aaia/state-machine) vs zeus (solar/lineas/forces/ssb/player-\*). Fusión = tabla de ids + puertos + quién spawnea.
4. **Player-MCP vs Launcher:** el primero es *agente de juego*; el segundo es *orquestador de procesos*. No confundir roles.

## Lectura corta

```
[Launcher MCP] --spawn/stop--> [MCP peers…]     ← mesh vieja
[editor refresh / discovery] --probe--> [MCP peers…]  ← zeus hoy
[player-mcp / tools] --intent--> rooms / ledger ← zeus juego
[http-contract] --REST⟷MCP--> «agujero negro»   ← zeus protocolo
```

Ulterior análisis: si el Launcher se reintroduce, ¿como paquete mesh
(`@zeus/mcp-launcher`), como tools del editor, o como skill/ops fuera del SDK?
