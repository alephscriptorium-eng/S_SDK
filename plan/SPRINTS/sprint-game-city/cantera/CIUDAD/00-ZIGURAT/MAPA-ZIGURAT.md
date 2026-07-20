# Mapa del Zigurat

```
 ┌─────────────────────────────┐
 │  PLAZA CENTRAL (.github_V1) │
 │  @ox · @aleph · @indice     │
 │  run_vscode_command ────────┼──► alephscript.demo.* / teatro.*
 └──────────────┬──────────────┘
                │
 ┌──────────────▼──────────────┐
 │  🏛️ ZIGURAT (VsCodeExtension)│
 │  Activity bar: Arrakis Theater│
 │  MENU · CMD · SETTINGS · TASKS│
 │  Automatons · MCP · UIs · …   │
 └───┬──────┬──────┬──────┬──────┘
     │      │      │      │
  demo   TASKS   MCP    UIs
     │   prefixes  │      │
     ▼      ▼      ▼      ▼
 MCPGallery  Prolog  MCPGallery  Blockly/Node-RED/…
 Novelist    AAIA    Zeus        (ver 03-CONEXIONES)
 Jekyll      BotHub  …
```

## Plantas (activity bar)

Fuente: `VsCodeExtension/package.json` → `views.arrakisTheater`.

| Planta | viewId | Tipo |
|--------|--------|------|
| 🚀 MENU | `alephscript.hackerControlPanel` | webview |
| ⚡ CMD | `alephscript.hackerCommandPanel` | webview |
| ⚙️ SETTINGS | `alephscript.hackerConfigPanel` | webview |
| 📋 TASKS | `alephscript.hackerTasksPanel` | webview |
| 🤖 Automatons | `alephscript.teatro` | tree |
| 🤖 MCP | `alephscript.mcptree` | tree |
| 🖥️ UIs | `alephscript.uis` | tree |
| ⚙️ Configs | `alephscript.configs` | tree |
| 🔌 Brains | `alephscript.sockets` | tree |
| 📡 Logs | `alephscript.logs` | tree |
| 📊 Copilot Metrics | `copilotMetrics.panel` | webview |

Explorer (condicional): `arrakisTheater` — “Theater Engine”.

Detalle: [`01-PLANTAS.md`](01-PLANTAS.md).
