# Comandos `alephscript.*` (familias)

> Fuente: `VsCodeExtension/package.json` contributes.commands. Agrupado; no listar 85 líneas sueltas.

| Familia | Ejemplos | Rol en ciudad |
|---------|----------|---------------|
| `demo` | `demo.runAll`, `demo.stopAll` | Arranque/parada demo multi-barrio (Puente Plaza→Zigurat) |
| `teatro` | `teatro.refresh`, `activateAgent`, `openTeatroPanel`, `openChatParticipant` | Compañía theatrical del Zigurat |
| `mcptree` | `start`, `stop`, `web.open`, `refresh`, `stopAll` | Operar mesh MCP desde IDE |
| `uis` | `start`, `stop`, `openBrowser`, `startAll`, `openAllBrowsers` | UIs de editores/demos |
| `sockets` | `connect`, `disconnect`, `joinRoom`, `sendMessage`, `quickConnect` | Brains / channels |
| `hacker*` | `hackerControlPanel.toggle`, `hackerTasksPanel.*` | Paneles MENU/CMD/SETTINGS/TASKS |
| `agents` | `startAll`, `createNew`, `editContent`, `validateAll` | Gestión agentes theatrical |

## Puente desde Plaza

`@ox`, `@aleph`, `@indice` exponen handoffs:

- 🎬 `alephscript.demo.runAll`
- 🛑 `alephscript.demo.stopAll`

vía `run_vscode_command`.
