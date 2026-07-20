# Grafo 5.1 — Handoffs en barrios

> Scope: YAML handoffs en agentes fuera de `.github_V1` (DocumentMachine, onfalo, MCPGallery, Zigurat theatrical, …).

**Edges**: 206

## Por root

| Root | Agentes escaneados | Edges handoff |
|------|-------------------:|--------------:|
| `AgentLoreSDK` | 5 | 28 |
| `BotHubSDK` | 0 | 0 |
| `CopilotEngine` | 1 | 2 |
| `DocumentMachineSDK` | 13 | 47 |
| `MCPGallery` | 13 | 0 |
| `NovelistEditor` | 4 | 15 |
| `VectorMachineSDK` | 4 | 15 |
| `VibeCodingSuite` | 0 | 0 |
| `VsCodeExtension` | 6 | 0 |
| `onfalo-asesor-sdk` | 33 | 99 |

## Top emisores (barrios)

| Agente | Salidas |
|--------|--------:|
| `portal` | 18 |
| `escritor` | 12 |
| `bot-parking` | 7 |
| `pipeline` | 6 |
| `blueflag` | 6 |
| `calibrador` | 6 |
| `bot-biblioteca` | 6 |
| `bot-taller` | 6 |
| `albacea` | 6 |
| `editor` | 6 |
| `lector` | 6 |
| `dramaturgo` | 5 |
| `blackflag` | 5 |
| `orangeflag` | 5 |
| `redflag` | 5 |

## Top destinos

| Agente | Entradas |
|--------|--------:|
| `protagonista` | 9 |
| `bot-biblioteca` | 9 |
| `sombra` | 8 |
| `verdad` | 7 |
| `registro` | 7 |
| `Bartleby` | 6 |
| `Portal` | 6 |
| `Pipeline` | 6 |
| `Revisor` | 6 |
| `articulador` | 6 |
| `bot-parking` | 6 |
| `escritor` | 6 |
| `Cristalizador` | 5 |
| `Aleph` | 5 |
| `Orangeflag` | 5 |

## Muestra de edges (máx 60)

- `archivero` → `Bartleby` — Re-analizar con Bartleby _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/.github/agents/archivero.agent.md`
- `archivero` → `Cristalizador` — Proponer cristalización agéntica _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/.github/agents/archivero.agent.md`
- `bartleby` → `Archivero` — Archivar análisis en corpus _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/.github/agents/bartleby.agent.md`
- `bartleby` → `Cristalizador` — Proponer cristalización agéntica _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/.github/agents/bartleby.agent.md`
- `cristalizador` → `Archivero` — Volver al corpus _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/.github/agents/cristalizador.agent.md`
- `dramaturgo` → `Bartleby` — Anclar nodo con análisis documental _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/.github/agents/dramaturgo.agent.md`
- `dramaturgo` → `Cristalizador` — Materializar el universo como artefacto _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/.github/agents/dramaturgo.agent.md`
- `dramaturgo` → `Portal` — Volver al portal _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/.github/agents/dramaturgo.agent.md`
- `portal` → `Bartleby` — Analizar nuevo documento _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/.github/agents/portal.agent.md`
- `portal` → `Archivero` — Ver estado del corpus _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/.github/agents/portal.agent.md`
- `portal` → `Cristalizador` — Diseñar mejoras agénticas _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/.github/agents/portal.agent.md`
- `portal` → `Portal` — Generar guion de ciclo _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/.github/agents/portal.agent.md`
- `portal` → `Voz` — Generar poema desde el corpus _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/.github/agents/portal.agent.md`
- `portal` → `Dramaturgo` — Crear universo propio _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/.github/agents/portal.agent.md`
- `archivero-lore` → `Grafista` — Pasar corpus al grafista _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/archivero-lore.agent.md`
- `archivero-lore` → `Bartleby` — Analizar pieza con Bartleby _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/archivero-lore.agent.md`
- `archivero-lore` → `Pipeline` — Refrescar pipeline _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/archivero-lore.agent.md`
- `archivero-lore` → `Puzzle` — Pedir validación de piezas _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/archivero-lore.agent.md`
- `demiurgo` → `Dramaturgo Cortos` — Generar corto desde universo _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/demiurgo.agent.md`
- `demiurgo` → `Grafista` — Actualizar grafo _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/demiurgo.agent.md`
- `demiurgo` → `Pipeline` — Refrescar pipeline _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/demiurgo.agent.md`
- `dramaturgo` → `Pipeline` — Ejecutar refresh del pipeline _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/dramaturgo.agent.md`
- `dramaturgo` → `Demiurgo` — Pedir universo actualizado _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/dramaturgo.agent.md`
- `grafista` → `Demiurgo` — Diseñar universo desde grafo _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/grafista.agent.md`
- `grafista` → `Archivero Lore` — Volver al corpus _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/grafista.agent.md`
- `grafista` → `Pipeline` — Refrescar pipeline _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/grafista.agent.md`
- `pipeline` → `Puzzle` — Validar pack de lore _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/pipeline.agent.md`
- `pipeline` → `Archivero Lore` — Re-ingestar lore _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/pipeline.agent.md`
- `pipeline` → `Grafista` — Regenerar grafo _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/pipeline.agent.md`
- `pipeline` → `Demiurgo` — Diseñar universo _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/pipeline.agent.md`
- `pipeline` → `Dramaturgo Cortos` — Generar corto desde universo-1 _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/pipeline.agent.md`
- `pipeline` → `Archivero` — Ver estado del corpus _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/pipeline.agent.md`
- `portal` → `Portal` — 🗺️ Empieza aquí — mapa del taller _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/portal.agent.md`
- `portal` → `Portal` — 📊 Estado del lore — dashboard completo _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/portal.agent.md`
- `portal` → `Archivero Lore` — 📥 Ingestar piezas de lore _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/portal.agent.md`
- `portal` → `Grafista` — 🔀 Ver o generar el grafo de futuros _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/portal.agent.md`
- `portal` → `Demiurgo` — 🌍 Diseñar un universo _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/portal.agent.md`
- `portal` → `Dramaturgo Cortos` — 🎬 Generar un corto _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/portal.agent.md`
- `portal` → `Pipeline` — 🔄 Refrescar el pipeline _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/portal.agent.md`
- `portal` → `Bartleby` — 🔬 Analizar un documento _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/portal.agent.md`
- `portal` → `Cristalizador` — 💎 Proponer cristalización _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/portal.agent.md`
- `portal` → `Portal` — 🎯 Activar orquestador (sala) _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/portal.agent.md`
- `portal` → `Portal` — 🔧 Entrar en sala como agente _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/portal.agent.md`
- `puzzle` → `Archivero Lore` — Pasar pack verificado al Archivero Lore _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/puzzle.agent.md`
- `puzzle` → `Pipeline` — Refrescar pipeline _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/puzzle.agent.md`
- `voz` → `Bartleby` — ¿Por qué este poema dice lo que dice? _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/voz.agent.md`
- `voz` → `Portal Editorial` — Adaptar para otro perfil de lector _(scope DocumentMachineSDK)_
  - `DocumentMachineSDK/mod/agents/voz.agent.md`
- `aceleracionista` → `Penitente` — Turno del Penitente _(scope onfalo-asesor-sdk)_
  - `…ROYECTO_FUNDACION/FUNDACION/.claude/agents/aceleracionista.agent.md`
- `articulista` → `Santome` — Revision literaria _(scope onfalo-asesor-sdk)_
  - `…IO/PROYECTO_FUNDACION/FUNDACION/.claude/agents/articulista.agent.md`
- `articulista` → `Revisor` — Revision doctrinal _(scope onfalo-asesor-sdk)_
  - `…IO/PROYECTO_FUNDACION/FUNDACION/.claude/agents/articulista.agent.md`
- `blackflag` → `Aleph` — Llevar crítica a redacción _(scope onfalo-asesor-sdk)_
  - `…ORIO/PROYECTO_FUNDACION/FUNDACION/.claude/agents/blackflag.agent.md`
- `blackflag` → `Redflag` — Tensionar con Bandera Roja _(scope onfalo-asesor-sdk)_
  - `…ORIO/PROYECTO_FUNDACION/FUNDACION/.claude/agents/blackflag.agent.md`
- `blackflag` → `yellowflag` — Tensionar con Bandera Amarilla _(scope onfalo-asesor-sdk)_
  - `…ORIO/PROYECTO_FUNDACION/FUNDACION/.claude/agents/blackflag.agent.md`
- `blackflag` → `Orangeflag` — Tensionar con Bandera Naranja _(scope onfalo-asesor-sdk)_
  - `…ORIO/PROYECTO_FUNDACION/FUNDACION/.claude/agents/blackflag.agent.md`
- `blackflag` → `Revisor` — Verificar coherencia doctrinal _(scope onfalo-asesor-sdk)_
  - `…ORIO/PROYECTO_FUNDACION/FUNDACION/.claude/agents/blackflag.agent.md`
- `blueflag` → `Aleph` — Llevar crítica a redacción _(scope onfalo-asesor-sdk)_
  - `…TORIO/PROYECTO_FUNDACION/FUNDACION/.claude/agents/blueflag.agent.md`
- `blueflag` → `Blackflag` — Tensionar con Bandera Negra _(scope onfalo-asesor-sdk)_
  - `…TORIO/PROYECTO_FUNDACION/FUNDACION/.claude/agents/blueflag.agent.md`
- `blueflag` → `Redflag` — Tensionar con Bandera Roja _(scope onfalo-asesor-sdk)_
  - `…TORIO/PROYECTO_FUNDACION/FUNDACION/.claude/agents/blueflag.agent.md`
- `blueflag` → `yellowflag` — Tensionar con Bandera Amarilla _(scope onfalo-asesor-sdk)_
  - `…TORIO/PROYECTO_FUNDACION/FUNDACION/.claude/agents/blueflag.agent.md`
- `blueflag` → `Orangeflag` — Tensionar con Bandera Naranja _(scope onfalo-asesor-sdk)_
  - `…TORIO/PROYECTO_FUNDACION/FUNDACION/.claude/agents/blueflag.agent.md`
- … +146 más (ver TSV)
