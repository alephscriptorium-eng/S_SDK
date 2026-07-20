# Conexiones Zigurat ↔ ciudad

## A. `alephscript.demo.runAll` (contrastado)

Fuente: `VsCodeExtension/src/core/extensionBootstrap.ts`.

| Terminal | cwd | Comando | Barrio |
|----------|-----|---------|--------|
| Jekyll Site | workspace root | `./scripts/serve-site.sh` | Plaza / `docs` |
| MCP Launcher | `MCPGallery` | `npm run start:launcher` | MCPGallery |
| MCP Model | `MCPGallery` | `npm run start:model` | MCPGallery |
| Zeus | `MCPGallery` | `npm run start:zeus` | MCPGallery |
| Novelist | `NovelistEditor` | `npm start` | NovelistEditor |
| Novelist UI | `NovelistEditor` | `npm run docs:serve` | NovelistEditor |

**Gap**: mensaje dice “5 servers”; el array abre **6** terminales.  
**Gap**: `demo.stopAll` no incluye el nombre `📝 Novelist UI` en el filtro de dispose.

## B. HackerTasks — PREFIX_METADATA

Fuente: `HackerTasksPanelProvider.ts`.

| Prefijo | Nombre | Barrio / destino típico |
|---------|--------|-------------------------|
| SCP | Scriptorium | raíz / compuestos |
| MCP | MCP Servers | MCPGallery |
| BHS | BotHub | BotHubSDK |
| AIA | AAIA Gallery | AAIAGallery |
| APB | Agent Prolog Brain | PrologEditor |
| NOV | Novelist | NovelistEditor |
| TPE | TypedPrompts | TypedPromptsEditor |
| OAE | OpenAsyncAPI | (plugin openasyncapi; sin barrio propio) |
| NRE | Node-RED | WiringEditor |
| BLE | Blockly | BlocklyEditor |
| JKL | Jekyll | docs / site |
| ZEU / ZEUS | Zeus | MCPGallery |
| INS | Inspector | MCPGallery |
| CHS | Channels | sockets / mesh |
| DMO / DEMO | Demo | compuestos |

## C. Fuerza de cableado

| Destino | Cableado | Nota |
|---------|----------|------|
| MCPGallery, NovelistEditor | 🟢 fuerte | demo + tasks |
| Prolog, Blockly, Wiring, AAIA, BotHub, TypedPrompts | 🟢 tasks | vía prefijos |
| Plugin `teatro` / `arg-board` (plaza) | 🔴 débil | casi no en extensión |
| Stream / Blockchain / Lore SDKs | 🟡 parcial | poca UI Zigurat |
| UISDKThreejs | 🟡 aspiracional | UI tree puede listarlo; verificar paths |

## D. Fuera de grafo capa 5

Los edges `alephscript.*` **no** están en `GRAFO/handoffs.tsv` (solo YAML handoffs).  
Esta tabla es la fuente de conexiones Zigurat hasta un eventual grafo 5.1.
