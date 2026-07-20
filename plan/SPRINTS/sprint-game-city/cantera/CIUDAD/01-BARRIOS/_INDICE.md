# Barrios — `.gitmodules` → ciudad

> **Regla**: 1 entrada `[submodule]` = 1 barrio.  
> **Fuente**: `.gitmodules` (2026-07-20) → **24 barrios**.  
> **Contraste**: `ARCHIVO/DEVOPS/Tecnico.md` §4.1 aún dice 23 y no lista `ScriptoriumVps`.

## Tabla maestra

| # | Barrio (path) | Nombre git | Branch | Distrito | Locales/naves nativos | Agentes* | Skills | Prompts |
|---|---------------|------------|--------|----------|----------------------|---------:|-------:|--------:|
| 1 | `VsCodeExtension` | vscode-alephscript-extension | integration/beta/scriptorium | **🏛️ Zigurat (host)** | — (ver `00-ZIGURAT/`) | 6 | 0 | 0 |
| 2 | `MCPGallery` | alephscript-mcp-presets-site | integration/beta/scriptorium | Runtime/MCP | mcp-presets *(afinidad)* | 10 | 0 | 13 |
| 3 | `VibeCodingSuite` | as-utils-sdk | integration/beta/scriptorium | Infra/UI | — | 0† | 0 | 0 |
| 4 | `AAIAGallery` | as-gym | integration/beta/scriptorium | Runtime/MCP | aaia-editor (`AAIAGallery/as-core`) | 0 | 0 | 0 |
| 5 | `BlockchainComPort` | alephscript-network-sdk | integration/beta/scriptorium | Red/stream | network | 0 | 0 | 0 |
| 6 | `StreamDesktop` | kick-aleph-bot | integration/beta/scriptorium | Red/stream | — | 0 | 0 | 0 |
| 7 | `StreamDesktopAppCronos` | kick-aleph-crono-bot | integration/beta/scriptorium | Red/stream | — | 0 | 0 | 0 |
| 8 | `NovelistEditor` | mcp-novelist | integration/beta/scriptorium | Runtime/MCP | novelist | 4 | 1 | 1 |
| 9 | `BlocklyEditor` | blockly-alephscript-sdk | integration/beta/scriptorium | Editores | blockly-editor | 0 | **21** | 10 |
| 10 | `WiringEditor` | node-red-alephscript-sdk | integration/beta/scriptorium | Editores | wire-editor, escribiente | 0 | 0 | 0 |
| 11 | `PrologEditor` | iot-sbr-logica-para-bots | integration/beta/scriptorium | Editores | prolog-editor | 0 | 0 | 0 |
| 12 | `TypedPromptsEditor` | alephscript-typed-prompting | integration/beta/scriptorium | Editores | typed-prompting | 0 | 0 | 0 |
| 13 | `WorkflowEditor` | alephscript-n8n-like-editor | integration/beta/scriptorium | Editores | n8n-editor | 0 | 0 | 0 |
| 14 | `WiringAppHypergraphEditor` | wiki-racer | integration/beta/scriptorium | Editores | wiring-app, arg-board-app, hypergraph-editor | 0 | 0 | 0 |
| 15 | `CopilotEngine` | CopilotEngine | integration/beta/scriptorium | Runtime/MCP | — | 1 | 0 | 1 |
| 16 | `StateMachine` | StateMachine | integration/beta/scriptorium | Runtime/MCP | — | 0 | 0 | 0 |
| 17 | `AgentLoreSDK` | AgentLoreSDK | *(sin branch)* | Lore/voz | — | 5 | 6 | 6 |
| 18 | `BotHubSDK` | BotHubSDK | integration/beta/scriptorium | Red/stream | bot-hub-sdk | 0 | 0 | 8 |
| 19 | `UISDKThreejs` | UISDKThreejs | *(sin branch)* | Infra/UI | — | 0 | 0 | 0 |
| 20 | `DocumentMachineSDK` | DocumentMachineSDK | integration/beta/scriptorium | Lore/voz | lore-sdk | 13 | 6 | **57** |
| 21 | `onfalo-asesor-sdk` | onfalo-asesor-sdk | integration/beta/scriptorium | Lore/voz | consejo-asesor | 33‡ | 1 | 12 |
| 22 | `VectorMachineSDK` | VectorMachineSDK | integration/beta/scriptorium | Lore/voz | vector-machine | 4 | 6 | 1 |
| 23 | `VectorMachineUI` | VectorMachineUI | integration/beta/scriptorium | Lore/voz | vector-machine (auxiliar) | 0 | 0 | 0 |
| 24 | `ScriptoriumVps` | scriptorium-vps | integration/beta/scriptorium | Infra remota | scriptorium-vps | 0§ | 0 | 0 |

\* Conteos full-tree `find` (2026-07-20): `*.agent.md` / `SKILL.md` / `*.prompt.md` dentro del path (sin `node_modules`).  
† `VibeCodingSuite` tiene **2** `.chatmode.md` (no agentes). `MCPGallery` tiene **3** chatmodes.  
‡ Incluye laboratorio FUNDACION y PROYECTOS/BARTLEBY; núcleo consejo = 16.  
§ Agentes del plugin viven en plaza: `.github_V1/plugins/scriptorium-vps/agents/` (8).  
Extra fuera de barrios: `ARCHIVO/` 8 agentes.

## Zonificación de edificaciones

| Tipo de barrio | Qué se puede construir |
|----------------|------------------------|
| **Con local nativo** | Solo tipologías del plugin ligado (p.ej. en `WiringEditor` → wire-editor / escribiente) |
| **Sin local nativo** | Infra / runtime / host; los locales llegan como **franquicia** desde plaza |
| **Multi-local** | `WiringAppHypergraphEditor` (wiki-racer) aloja 3 tipologías; `WiringEditor` aloja wire + escribiente |

## Discrepancias capa 1

1. ~~Tecnico.md: 23 barrios~~ → **cerrado 7.1** (24 + fila scriptorium-vps).
2. `AgentLoreSDK` y `UISDKThreejs` sin `branch=` en `.gitmodules`.
3. ~~Plugin `scriptorium-vps` fuera de registry~~ → **cerrado 7.1**.

## Fichas profundas (capa 6)

→ Catálogo: [`_FICHAS.md`](_FICHAS.md) (24 fichas `NN-{path}.md`).

Regenerar: `python ARCHIVO/DEVOPS/CIUDAD/01-BARRIOS/_gen_fichas.py`  
**Nota**: tras regenerar, restaurar stub Zigurat en `01-VsCodeExtension.md` (o ajustar el generador).
