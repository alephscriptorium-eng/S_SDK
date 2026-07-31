## Sí

Hubo esa visión: **aleph-scriptorium como ciudad**, barrios = submódulos, agentes = edificios, ~**169** paths de agente (~“ciento y mitad”), repartidos por distritos/barrios.

**Mapa canónico (copia en LAB):**  
`C:\S_LAB\s-sdk\plan\SPRINTS\sprint-game-city\cantera\CIUDAD\`  
(espejo histórico en hornada: `aleph-scriptorium\ARCHIVO\DEVOPS\CIUDAD\`)

Entradas: [`MAPA.md`](c:\S_LAB\s-sdk\plan\SPRINTS\sprint-game-city\cantera\CIUDAD\MAPA.md) · [`01-BARRIOS/_INDICE.md`](c:\S_LAB\s-sdk\plan\SPRINTS\sprint-game-city\cantera\CIUDAD\01-BARRIOS\_INDICE.md) · [`03-EDIFICIOS/_INDICE.md`](c:\S_LAB\s-sdk\plan\SPRINTS\sprint-game-city\cantera\CIUDAD\03-EDIFICIOS\_INDICE.md) · [`GRAFO/`](c:\S_LAB\s-sdk\plan\SPRINTS\sprint-game-city\cantera\CIUDAD\GRAFO) · visión spinoff: `C:\Users\aleph\OASIS\aleph-scriptorium\plan\VISION.md`

Conteos contrastados 2026-07-20: **24 barrios**, print agentes **169**, handoffs V1 **513**.

---

## Overview ASCII (distritos)

```
                         PLAZA (.github_V1)
                    ox · indice · aleph · flags
                              |
                           ZIGURAT
                      VsCodeExtension
                              |
     +------------+-----------+-----------+------------+
     |            |           |           |            |
  EDITORES    RED/STREAM  RUNTIME/MCP  LORE/VOZ    INFRA/UI
  Blockly       Blockchain  MCPGallery  DocumentMach  VibeCoding
  Wiring        Stream*     AAIAGallery onfalo-asesor UISDKThreejs
  Prolog        BotHubSDK   Novelist    AgentLore     ScriptoriumVps
  TypedPrompts              CopilotEng  VectorMach*
  Workflow                  StateMach
  WiringAppHG
```

**LORE/VOZ — barrio DocumentMachineSDK** (aquí viven FM + Cristalizador):

```
  DocumentMachineSDK (nave lore-sdk)     ~13 agents / 57 prompts
  ├── oficiales: bartleby, archivero, cristalizador, portal, dramaturgo
  └── mod/FM:    puzzle, archivero-lore, grafista, demiurgo,
                 dramaturgo, pipeline, portal, voz
                 (+ skill engine-plan / futures-engine = packs, no edificios)
```

Handoffs ya cartografiados en `GRAFO/handoffs-barrios.md`: bartleby→cristalizador, grafista→demiurgo→dramaturgo, pipeline refresca, etc.

---

## Retrato FM / Cristalizador en ese mapa

| pieza | dónde en ciudad | rol urbano |
|-------|-----------------|------------|
| **Cristalizador** | edificio oficial del barrio DocumentMachine | diseñador de infra agéntica (no slot de simulación) |
| **Future-machine** | cadena de edificios **mod/** del mismo barrio + skill `engine-plan` | pipeline Loreador…Dramaturgo; TUI = pack, no barrio aparte |
| Bridge plaza | `plugin_ox_loresdk` | puerta Plaza → nave lore |

No están en plaza ni en Zigurat: son **barrio Lore/voz**, tipología nativa.

---

## Encaje con PD2 → ciudad (grafo de test)

El startpack jugable (`24` barrios, 6 distritos) es el **runtime**; la cantera CIUDAD es el **diseño de consumo**. Para no pegotes ad hoc:

1. Anclar evidencia PD2/grafo a IDs de cantera (`DocumentMachineSDK`, distrito Lore/voz), no inventar barrios.
2. Ticks TUI (`run`/`inspect`/…) = visita/wake del **edificio** correspondiente en ese barrio (Cristalizador ≠ Pipeline).
3. Marcas grafo holón-7 / starterkit: citar `cantera/CIUDAD/GRAFO/` + handoff real si la corrida toca lore; Z intacto como ya dice el plan mesa.

Si quieres, el siguiente research corto puede ser solo: tabla `comando engine-plan ↔ edificio cantera ↔ tick PD2` (una pantalla), para meterla en el plan delta sin reabrir la cantera.