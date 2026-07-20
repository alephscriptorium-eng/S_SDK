# Plantas del Zigurat

> Contraste: `VsCodeExtension/package.json` contributes.views + providers en `src/views/`.

| Planta UI | viewId | Provider / notas |
|-----------|--------|------------------|
| MENU | `alephscript.hackerControlPanel` | `HackerControlPanelProvider` |
| CMD | `alephscript.hackerCommandPanel` | `HackerCommandPanelProvider` |
| SETTINGS | `alephscript.hackerConfigPanel` | `HackerConfigPanelProvider` — settings `arrakisTheater.*` |
| TASKS | `alephscript.hackerTasksPanel` | `HackerTasksPanelProvider` — lee tasks workspace + PREFIX_METADATA |
| Automatons | `alephscript.teatro` | Theatrical agents tree |
| MCP | `alephscript.mcptree` | Árbol servidores MCP |
| UIs | `alephscript.uis` | Árbol UIs (parte mock / paths legacy — verificar) |
| Configs | `alephscript.configs` | Configs tree |
| Brains | `alephscript.sockets` | Socket.IO / channels |
| Logs | `alephscript.logs` | Logs panel |
| Copilot Metrics | `copilotMetrics.panel` | Métricas Copilot |

## Settings del Zigurat

| Key | Rol |
|-----|-----|
| `arrakisTheater.configPath` | Path config teatro |
| `arrakisTheater.autoStart` | Auto-start servicios al abrir workspace |
| `arrakisTheater.hackerMode` | Estética terminal “hacker” |

## Dualidad de nombre

Display / activity: **Arrakis Theater** (legacy).  
Producto ciudad: **Scriptorium / Zigurat**. Documentar ambas; no reescribir la extensión en esta capa.
