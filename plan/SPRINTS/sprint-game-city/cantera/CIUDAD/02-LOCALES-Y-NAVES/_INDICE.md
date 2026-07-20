# Locales y naves — plugins → ciudad

> **Regla de tamaño** (heurística capa 2):  
> - 🚢 **Nave**: `agents_count ≥ 5` **o** multi-agente real en disco **o** hub/SDK de distrito.  
> - 🏪 **Local**: resto (mono-agente / conector).  
> **Reuso**:  
> - 🔒 **Nativo**: tiene `submodule` / `source.path` → solo edificable en ese barrio.  
> - 🔁 **Franquicia**: sin submódulo → plaza o varios barrios según naturaleza.

**Fuentes**: `.github_V1/plugins/registry.json` (**28**) + disco (**28**).

## Catálogo

| Tipo | Plugin | Barrio nativo / afinidad | Agents disk | Prompts | Instr | Notas |
|------|--------|--------------------------|-------------|---------|-------|-------|
| 🚢 | `arg-board` | 🔁 Plaza / Teatro | 8 | 7 | 1 | Motor ARG; tipología propia de distrito narrativa |
| 🚢 | `scriptorium-vps` | 🔒 `ScriptoriumVps` (remoto; vecino BlockchainComPort) | 8 | 0 | 1 | ✅ en registry 7.1 · sin secrets |
| 🚢 | `consejo-asesor` | 🔒 `onfalo-asesor-sdk` | 1+16 | 6 | 1 | Bridge 1; consejo vivo en barrio (16) |
| 🚢 | `lore-sdk` | 🔒 `DocumentMachineSDK` | 1+13 | 3 | 1 | Bridge 1; SDK editorial en barrio |
| 🚢 | `scriptorium-pack` | 🔁 Plaza | 1 | 3 | 10 | Almacén municipal de instructions |
| 🚢 | `teatro` | 🔁 Plaza / ARG | 1 | 5 | 2 | Orquestador transmedia (complejo) |
| 🏪 | `aaia-editor` | 🔒 `AAIAGallery/as-core` | 1 | 2 | 1 | |
| 🏪 | `agent-creator` | 🔁 Plaza | 1 | 9 | 3 | Franquicia creación de edificios |
| 🏪 | `arg-board-app` | 🔒 `WiringAppHypergraphEditor` | 1 | 1 | 1 | sm registry: wiki-racer |
| 🏪 | `blockly-editor` | 🔒 `BlocklyEditor` | 1 | 4 | 1 | |
| 🏪 | `bot-hub-sdk` | 🔒 `BotHubSDK` | 1 | 0 | 1 | |
| 🏪 | `enciclopedia` | 🔁 Plaza | 2‡ | 3 | 1 | ‡bibliotecario + tomo hdf |
| 🏪 | `escribiente` | 🔒 `WiringEditor` | 1 | 0 | 1 | Depende de wire-editor |
| 🏪 | `foro-scraper` | 🔁 Plaza | 1 | 6 | 1 | |
| 🏪 | `gh-pages` | 🔁 Plaza (`docs/`) | 1 | 6 | 2 | |
| 🏪 | `hypergraph-editor` | 🔒 `WiringAppHypergraphEditor` | 1 | 1 | 1 | |
| 🏪 | `mcp-presets` | 🔁→`MCPGallery` | 1 | 4 | 1 | Afinidad barrio sin sm en registry |
| 🏪 | `n8n-editor` | 🔒 `WorkflowEditor` | 1 | 4 | 1 | |
| 🏪 | `network` | 🔒 `BlockchainComPort` | 1 | 4 | 1 | |
| 🏪 | `nodejs-notebooks` | 🔁 Plaza | 1 | 5 | 1 | |
| 🏪 | `novelist` | 🔒 `NovelistEditor` | 1 | 0§ | 1 | §registry dice prompts=4; disco 0 |
| 🏪 | `openasyncapi-editor` | 🔁 Plaza | 1 | 5 | 2 | |
| 🏪 | `prolog-editor` | 🔒 `PrologEditor` | 1 | 5 | 1 | |
| 🏪 | `scrum` | 🔁 Plaza | 1 | 6 | 1 | |
| 🏪 | `typed-prompting` | 🔒 `TypedPromptsEditor` | 1 | 4 | 1 | |
| 🏪 | `vector-machine` | 🔒 `VectorMachineSDK` (+UI) | 1 | 2 | 1 | UI auxiliar en `VectorMachineUI` |
| 🏪 | `wire-editor` | 🔒 `WiringEditor` | 1 | 5 | 1 | |
| 🏪 | `wiring-app` | 🔒 `WiringAppHypergraphEditor` | 1 | 1 | 1 | |

## Reuso por naturaleza

| Naturaleza | Plugins | Dónde pueden “abrir local” |
|------------|---------|----------------------------|
| Narrativa / ARG | arg-board, teatro, novelist, agent-creator, enciclopedia | Distrito lore + plaza; novelist solo en su barrio |
| Editores | blockly, wire, escribiente, prolog, typed, n8n, wiring/hypergraph/arg-board-app | Solo su barrio editor |
| Red | network, bot-hub-sdk | Solo su barrio |
| Runtime MCP | aaia-editor, mcp-presets, vector-machine | Barrio runtime / vector |
| Meta municipal | scriptorium-pack, scrum, gh-pages, nodejs-notebooks, openasyncapi, foro-scraper | Plaza (franquicia) |
| Infra VPS | scriptorium-vps | Solo `ScriptoriumVps` |

## Bridges en plaza (puertas a locales)

Cada local/nave con bridge tiene puerta en `.github_V1/agents/plugin_ox_*.agent.md`.  
**Hueco**: no hay `plugin_ox_scriptoriumvps` ni entrada registry → la nave VPS está “sin puerta oficial” en el ayuntamiento.

## Discrepancias capa 2

1. ~~`scriptorium-vps` en disco, ausente en registry~~ → **cerrado 7.1** (registrado + bridge `plugin_ox_scriptoriumvps`).
2. `novelist`: registry `prompts_count` puede desalinearse vs disco.
3. `enciclopedia`: agentes en `agents/` + `agents/tomos/`.
4. Varios conteos registry vs disco: preferir disco para gamificación fina.
