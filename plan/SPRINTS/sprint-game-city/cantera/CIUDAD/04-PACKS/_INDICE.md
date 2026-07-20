# Packs — prompts, instructions, skills, templates

> Escaneo `.github_V1` + nota de packs en barrios. Ligados como “talleres” de los edificios.

## Plaza — packs raíz

| Tipo | Ruta | Conteo | Rol ciudad |
|------|------|-------:|------------|
| Prompts | `.github_V1/prompts/*.prompt.md` | 31 | Talleres municipales (release, sala, índice, banderas…) |
| Instructions | `.github_V1/instructions/` | 2 | `plan-attribution`, `sala-protocolo` |
| Skills | `.github_V1/skills/` | 1 | `dossier-feature/SKILL.md` |
| Templates | `.github_V1/templates/` | 4+ | `sala-dossier/`, `sala-*.template.md` |
| Workflows | `.github_V1/workflows/` | (CI) | Infra de calle, no edificio |

## Packs por local/nave (`.github_V1/plugins/{id}/`)

Convención tipológica: cada plugin puede tener `prompts/`, `instructions/`, a veces `docs/`, `meta/`.

| Plugin | prompts | instructions | Notas |
|--------|--------:|-------------:|-------|
| scriptorium-pack | 3 | 10 | Pack municipal más denso |
| agent-creator | 9 | 3 | |
| arg-board | 7 | 1 | |
| consejo-asesor | 6 | 1 | |
| foro-scraper | 6 | 1 | |
| gh-pages | 6 | 2 | |
| scrum | 6 | 1 | |
| nodejs-notebooks | 5 | 1 | |
| openasyncapi-editor | 5 | 2 | |
| prolog-editor | 5 | 1 | |
| teatro | 5 | 2 | |
| wire-editor | 5 | 1 | |
| blockly-editor | 4 | 1 | |
| mcp-presets | 4 | 1 | |
| n8n-editor | 4 | 1 | |
| network | 4 | 1 | |
| typed-prompting | 4 | 1 | |
| lore-sdk | 3 | 1 | |
| enciclopedia | 3 | 1 | |
| aaia-editor | 2 | 1 | |
| vector-machine | 2 | 1 | |
| arg-board-app | 1 | 1 | |
| hypergraph-editor | 1 | 1 | |
| wiring-app | 1 | 1 | |
| bot-hub-sdk | 0 | 1 | |
| escribiente | 0 | 1 | |
| novelist | 0 | 1 | registry desalineado |
| scriptorium-vps | 0 | 1 | |

## Skills (packs compuestos)

| Skill | Ruta | Liga a |
|-------|------|--------|
| dossier-feature | `.github_V1/skills/dossier-feature/SKILL.md` | prompt `dossier.prompt.md`, templates `sala-dossier/`, espejo `sala/plantilla-dossier/` |

Tratado por @ox como espejo DRY sala/dossier.

### Skills densas en barrios (full-tree)

| Barrio | SKILL.md | Prompts |
|--------|--------:|--------:|
| `BlocklyEditor` | **21** | 10 |
| `DocumentMachineSDK` | 6 | **57** |
| `AgentLoreSDK` | 6 | 6 |
| `VectorMachineSDK` | 6 | 1 |
| `onfalo-asesor-sdk` | 1 | 12 |
| `NovelistEditor` | 1 | 1 |
| `BotHubSDK` | 0 | 8 |
| `MCPGallery` | 0 | 13 |

La plaza V1 solo expone 1 skill; el grueso vive en barrios (sobre todo Blockly + lore/vector).

## Resources / template-resources

En V1 no hay carpetas literales `resources/` / `template-resources/` a escala plaza.  
Equivalentes:

| Equivalente | Dónde |
|-------------|--------|
| Templates sala | `.github_V1/templates/` |
| Data de plugins | `ARCHIVO/PLUGINS/{PLUGIN}/` (data_directory del registry) |
| Context packs MCP | DevOps Server (:3003) — no filesystem V1 |

## Packs en barrios (muestreo)

| Barrio | Señales agénticas extra |
|--------|-------------------------|
| DocumentMachineSDK | `COPILOT/`, agentes `.github/agents`, `mod/agents` |
| onfalo-asesor-sdk | `PLUGIN_SCRIPTORIUM/consejo-asesor/` (prompts/agentes SDK) |
| VsCodeExtension | `theatrical-content/`, agentes theatrical |
| CopilotEngine | `assets/agents/` |

## Ligazón

```
Skill / Instruction / Prompt  →  taller del edificio
Template                      →  solar edificable (scaffold)
data_directory ARCHIVO/…      →  almacén del local
```
