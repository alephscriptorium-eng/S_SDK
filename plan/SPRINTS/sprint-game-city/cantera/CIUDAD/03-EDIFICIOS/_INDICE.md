# Edificios — agentes y chatmodes

> Escaneo recursivo contrastado 2026-07-20.  
> Print completo de rutas: [`../GRAFO/print-agentes.txt`](../GRAFO/print-agentes.txt) (**133** paths).

## Resumen por territorio

| Territorio | Paths | Qué son |
|------------|------:|---------|
| 🏛️ Plaza `.github_V1/agents/` | 37 | 13 core + 24 bridges `plugin_ox_*` |
| 🏪/🚢 Plugins `.github_V1/plugins/*/agents/` | 43 | Agentes reales de locales/naves |
| 📦 Total `.github_V1` | 80 | Plaza + plugins |
| 🏘️ `onfalo-asesor-sdk` | 33 | Consejo + lab FUNDACION + Bartleby |
| 🏘️ `DocumentMachineSDK` | 13 | `.github/agents` + `mod/agents` |
| 🏘️ `MCPGallery` | 10 | (+ 3 chatmodes) |
| 📁 `ARCHIVO/` | 8 | Artefactos / réplicas |
| 🏘️ `VsCodeExtension` | 6 | Theatrical agents |
| 🏘️ `AgentLoreSDK` | 5 | |
| 🏘️ `VectorMachineSDK` | 4 | |
| 🏘️ `NovelistEditor` | 4 | |
| 🏘️ `CopilotEngine` | 1 | `Plan.agent.md` |
| **Total print (capa 5)** | **169** | `GRAFO/print-agentes.txt` (rg `--hidden`) |
| Handoffs plaza+plugins | **513** edges | `GRAFO/handoffs.md` |

## Plaza Central — capas (core)

| Capa | Edificios | Archivos |
|------|-----------|----------|
| 🟢 UI | Aleph, Revisor, Periódico | `aleph`, `revisor`, `periodico` |
| 🔵⚫🔴🟡🟠 Backend | 5 Banderas | `blueflag` … `orangeflag` |
| ⚪ Sistema | Vestíbulo, Cartas-Puerta | `vestibulo`, `cartas-puerta` |
| ⚙️ Meta | Ox, Índice, Plugin-Manager | `ox`, `indice`, `plugin-manager` |

→ Detalle operativo: `.github_V1/agents/AGENTS.md` (útil pero **desactualizado** vs bridges reales).

## Plaza — bridges (puertas a locales)

Presentes en disco (24 bridges `plugin_ox_*`):

`aaiaeditor`, `agentcreator`, `argboard`, `argboardapp`, `blocklyeditor`, `consejoasesor`, `enciclopedia`, `foroscraper`, `ghpages`, `hypergrapheditor`, `loresdk`, `mcppresets`, `n8neditor`, `network`, `nodejsnotebooks`, `novelist`, `openasyncapieditor`, `prologeditor`, `scrum`, `teatro`, `typedprompting`, `vectormachine`, `wireeditor`, `wiringapp`

**Ausentes / gaps**:
- No bridge `plugin_ox_escribiente` (usa bridge de wire-editor).
- No bridge `plugin_ox_scriptoriumvps` (nave VPS sin puerta).
- No bridge dedicado `scriptorium-pack` en `plugin_ox_*` (agente en plugin dir).

## Naves multi-edificio (plugins)

| Nave / local | Edificios en `.github_V1/plugins/.../agents/` |
|--------------|-----------------------------------------------|
| arg-board | arrakis, boe, decoherence, git-arg, heroe, impressjs, mbox, platform-com |
| scriptorium-vps | vps-ops, nodered-curator, verdaccio-keeper, anfitrion, hackeria-soporte, mc-parlament, notario-boe, publicador |
| enciclopedia | bibliotecario + `tomos/hdf-ernesto-castro` |
| resto plugins | 1 agente homónimo cada uno |

## Barrios con edificios propios

### DocumentMachineSDK (lore)
- Oficiales: `bartleby`, `archivero`, `cristalizador`, `portal`, `dramaturgo` (`.github/agents/`)
- Mod: `voz`, `puzzle`, `portal`, `pipeline`, `grafista`, `dramaturgo`, `demiurgo`, `archivero-lore`

### onfalo-asesor-sdk (consejo)
Categorías: voz, antagonistas (5), auditores (4), produccion (2), navegacion, inteligencia (3) → 16 núcleo.  
Extra: laboratorio FUNDACION (réplicas banderas + personajes) y `PROYECTOS/BARTLEBY`.

### VsCodeExtension
`indra`, `isaac`, `backend-agent`, `capitan-didac`, `don-alvaro` (+ copia content `isaac`).

### CopilotEngine
`assets/agents/Plan.agent.md`

## Ligazón metáfora

| Elemento filesystem | Rol en ciudad |
|---------------------|---------------|
| `.github_V1/agents/*.agent.md` (core) | Edificios de gobierno / auditoría |
| `plugin_ox_*.agent.md` | Puertas/puentes a locales |
| `plugins/{id}/agents/*.agent.md` | Interiores del local/nave |
| `{barrio}/**/*.agent.md` | Edificios del barrio (a veces réplicas o labs) |

## Siguiente (capa 5)

Grafo de handoffs: de cada edificio → edges a otros (parse frontmatter `handoffs:`).
