Research lista para guardar (p.ej. `.cursor/researches/prueba-h-m-future-machine.md`). Solo inventario + diseño propuesto; sin plan formal ni obra.

---

# Research · prueba-h-m = FM simulada + ontologías + barrio LORE/VOZ

## 1. Objetivo (sí / alcance)

Rediseñar **prueba-de-dos → prueba-h-m**: H sostiene autoridad/pods/ciudad; **M = maestro de títeres** del stack que cuelga de **Cristalizador → Future Machine**, orquestada como swarm. La corrida ilumina el distrito **lore-voz** en el censo de ciudad con marionetas cargables (load/debug/stop/start), maximiza ontologías (schemas + JSON-LD, pack SOLID), y deja evidencia útil al grafo de test — no pegotes ad hoc.

Anclas previas (DRY, no repetir cuerpo):
- [mesa_prueba…](c:\S_LAB\s-sdk\.cursor\plans\mesa_prueba_playground_0c3520d6.plan.md)
- [pd2_verbos_json-ld…](c:\S_LAB\s-sdk\.cursor\plans\pd2_verbos_json-ld_9d69d81d.plan.md)
- [futures-machine-and-cristalizador.md](c:\S_LAB\s-sdk\.cursor\researches\futures-machine-and-cristalizador.md)
- [barrio-bartley.md](c:\S_LAB\s-sdk\.cursor\researches\barrio-bartley.md) (mapa ciudad)
- SOLID: [Z_SDK#55](https://github.com/alephscriptorium-eng/Z_SDK/pull/55) (§T3–T6, DIC-2/4, SM05/06/08/09)

---

## 2. Roles H / M (rediseño)

| rol | quién | oficio en prueba-h-m |
|-----|-------|----------------------|
| **H** | Anfitrión-mesa + host | Nodo rooms, autoridad ciudad, **simulador de pods** (reparte pods vía peercard), wake de barrios lore-voz en censo, evidencia L0–L3 |
| **M** | Custodio + **maestro de títeres** | Carga caja AgentLore, manda pipeline DocumentMachine (vía Cristalizador boost), emite verbos TUI/swarm, asigna personajes Novelist a identidades, debug/stop/start slots |

M no “visita” solo: **puppetea** workers. H no escribe lore: **autoriza, hashea, reparte pods, proyecta estado de barrio**.

---

## 3. Targets: Bartleby + Cristalizador

Dos Cristalizadores hoy (unificar en refactor de prueba):

| instancia | ruta | oficio |
|-----------|------|--------|
| DocumentMachine `@cristalizador` | `C:\Users\aleph\OASIS\aleph-scriptorium\DocumentMachineSDK\.github\agents\cristalizador.agent.md` | Infra Copilot (agents/skills/hooks); handoff ← bartleby |
| AgentLore skill `cristalizador` | `…\AgentLoreSDK\.github\skills\cristalizador\SKILL.md` + `/cristalizar` | 4 niveles: mapa · nave · itinerario · customization |

**Bartleby** (análisis RO, 5 secciones): edificio oficial DocumentMachine; en Onfalo también vive lab `PROYECTOS/BARTLEBY/`. En la prueba: **primer worker** que ingiere pistas Onfalo (sin curar) → `.analisis.md` mock.

**Refactor objetivo (diseño, no obra aún):** Cristalizador gana verbos de **setup/boost FM** (`crystallize-pipeline`, `boost-slot`, `spawn-worker`) y deja de ser solo “diseñador silencioso”: orquesta el swarm que *es* la pipeline.

---

## 4. Barrios que la prueba debe iluminar

Censo canónico: `C:\S_LAB\s-sdk\plan\SPRINTS\sprint-game-city\cantera\CIUDAD\CENSO-ESTADOS.md`

| barrio-id | distrito | rol en prueba-h-m | estado censo |
|-----------|----------|-------------------|--------------|
| `document-machine-sdk` | lore-voz | Pipeline FM + Cristalizador/Bartleby | vivo |
| `agent-lore-sdk` | lore-voz | Caja marionetas (parking/swarm workers) | vivo |
| `onfalo-asesor-sdk` | lore-voz | Fuente de **pistas/temas sin curar** | vivo |
| `vector-machine-sdk` (+ ui) | lore-voz | **Fake** vectordb (paso simulado) | vivo |
| `novelist-editor` | **runtime-mcp** (otro barrio) | Personajes por identidad | vivo |

Meta de evidencia: tras corrida, `player_state` / censo mock muestra lore-voz **despierto** con actas de marionetas; Novelist aporta elenco, no el pipeline.

---

## 5. Cadena de datos (mock-friendly)

```
Onfalo pistas (raw)
    → Bartleby.analisis (mock)
    → VectorMachine FAKE (embedding stub / fixture)
    → línea (trunk + satélites)          [zeus linea-kit vocab]
    → grafo (nodos/arcos/huecos)         [Grafista]
    → universo (spec .md/json)           [Demiurgo]
    → cortos = chunks de log ejecución   [Dramaturgo + log-std]
```

Relación que pedías: **línea ↔ grafo + artefacto universo + logs como cortos/chunks** — el “corto” de la demo no es prosa literaria obligatoria; es **fragmento de ejecución narrable** (`engine-log` slice + huella), alineado a SM06 (acta = actividad PROV).

Mock Onfalo útil (ya en disco):  
`…\onfalo-asesor-sdk\PROYECTOS\BARTLEBY\` · `ESCRIBIENTE_TESTLAB\pasadas\*`  
Mock FM log:  
`…\DocumentMachineSDK\tmp\engine-log-2026-04-20-063151.md`  
Parking AgentLore (caja):  
`…\AgentLoreSDK\` — bots `bot-taller` / `bot-parking` / `bot-biblioteca` / Hilbert; skill `parking-naves`.

---

## 6. Identidad → personajes → pods (SOLID)

Pack SOLID (§T9, SM03/SM18): identidad triple WebID ↔ peercard ↔ ssbId.

Propuesta de modelo (schemas playground):

```
Identity (peercard / WebID)
  └── hasCharacter[]  → Novelist Character { id, name, traits… }
        └── hasPuppet[] → Worker slot (Bartleby | Pipeline | Grafista | …)
              └── hasPod    → PodSim { containerIRI, acl, issuedBy: authority }
```

Novelist ya tipa personajes en `novel-data.json` (`id`, `name`, `description`, `traits`, `backstory`) y context schema:  
`C:\Users\aleph\OASIS\aleph-scriptorium\NovelistEditor\scriptorium-context.schema.json`  
Metáfora nativa: D = «marioneta de skills y prompts» (mismo JSON de novela).

**Pod simulator (H):** no CSS real (SM02 fuera); fixture que, con autoridad + peercard, **emite** `pod://…` por marioneta/personaje/máquina. Auth relé (SM09): H no es token-dios; ACL del pod decide.

---

## 7. Schemas a materializar en playground (doble objetivo)

Backbone DIC-2 ✎: AS2 + PROV-O + DCTERMS + `zsdk:` / `fm:` provisional. JSON-LD aditivo (plan delta). Schema.org solo suplementario.

| schema (propuesto) | demuestra ontología | modela FM |
|--------------------|---------------------|-----------|
| `fm-pipeline.schema.json` | grafo de capas | slots READY/MISS + deps |
| `fm-slot.schema.json` | agente como recurso | contrato I/O por capa |
| `fm-command.schema.json` | AS2 Activity | verbos TUI |
| `fm-log-chunk.schema.json` | `prov:Activity` + corto | slice log-std |
| `fm-line-graph-universe.schema.json` | alineación linea→grafo→universo | artefacto Demiurgo |
| `identity-characters.schema.json` | peercard → characters[] | Novelist bridge |
| `pod-lease.schema.json` | LDP container stub | reparto H→marioneta |
| `puppet-worker.schema.json` | AgentLore nave/worker | caja swarm |

Validar con `validate {nodo}` (backlog engine-plan Tier1) en evidencia.

---

## 8. Verbos nuevos (expresividad prueba-h-m)

**A · Ciudad / pods (H-led, hereda PD2)**  
`join` `walk` `announce` `wake` `sleep` `state`  
+ `pod.lease` `pod.revoke` `barrio.illuminate` (wake lore-voz por id censo)

**B · TUI FM (M-led, de engine-plan §15 + Tier1)**  
`boot` `status` `loadMOCK` `run` `run --desde` `inspect` `data` `spec` `gaps` `docs` `exit`  
+ `diff` `history` `validate` `trace` `coverage` `plan`

**C · Swarm / marionetas (M + Cristalizador)**  
`crystallize` (boost setup) `spawn` `attach` `detach` `start` `stop` `debug` `pause` `resume`  
`assign-character` (identity→Novelist) `bind-pod` (character/worker→pod)

**D · Cadena lore (targets Bartleby→…)**  
`ingest-pista` (Onfalo raw) `analyze` (Bartleby) `fake-embed` (Vector stub)  
`line.materialize` `graph.bifurcate` `universe.instantiate` `corto.emit` (= log-chunk)

Cada verbo PASS → `wire.json` + `view.jsonld` (plan delta) + opcional fila en censo/acta barrio.

---

## 9. Diagrama de orquestación (swarm)

```
H (authority + pod-sim)                 M (puppet master)
        |                                      |
        | peercard / pod.lease                 | crystallize + spawn
        v                                      v
   [pods por marioneta] <----- bind-pod ---- [AgentLore parking]
                                               |
                    DocumentMachine pipeline (slots)
         Loreador → Bartleby → Archivero → [fake Vector]
              → Grafista → Demiurgo → Dramaturgo(cortos=log-chunks)
                                               |
                                         @Pipeline TUI
                                      (log-std en playground)
```

Cristalizador: **antes** del run (setup workers/skills) y **en gaps** (proponer artefactos). No sustituye a Pipeline.

---

## 10. Rutas absolutas clave (hornada aleph; v0 espeja bajo SCRIPTORIUM_V0)

| pieza | ruta |
|-------|------|
| engine-plan skill | `C:\Users\aleph\OASIS\aleph-scriptorium\DocumentMachineSDK\.github\skills\engine-plan\SKILL.md` |
| engine-plan prompt | `…\DocumentMachineSDK\.github\prompts\engine-plan.prompt.md` |
| cristalizador DM | `…\DocumentMachineSDK\.github\agents\cristalizador.agent.md` |
| bartleby DM | `…\DocumentMachineSDK\.github\agents\bartleby.agent.md` |
| futures-engine | `…\DocumentMachineSDK\.github\skills\futures-engine\SKILL.md` |
| log demo web | `…\DocumentMachineSDK\tmp\engine-log-2026-04-20-063151.md` |
| AgentLore AGENTS | `C:\Users\aleph\OASIS\aleph-scriptorium\AgentLoreSDK\AGENTS.md` |
| Novelist characters | `…\NovelistEditor\docs\api\novel-data.json` |
| Onfalo Bartleby | `…\onfalo-asesor-sdk\PROYECTOS\BARTLEBY\` |
| cantera ciudad | `C:\S_LAB\s-sdk\plan\SPRINTS\sprint-game-city\cantera\CIUDAD\` |
| playground PD2 | `C:\S\scriptorium\playground\prueba-de-dos\` |

Escritura de corrida: solo `playground/` (cerco mesa). Lectura OASIS RO.

---

## 11. Qué queda abierto (decidir después)

1. ¿Cristalizador unificado vive como skill playground o cita RO a DocumentMachine + AgentLore?  
2. ¿`corto` = solo log-chunk o también prosa mínima Dramaturgo?  
3. ¿Pod-sim emite IRIs locales `pod://mesa/…` o paths playground?  
4. ¿Novelist characters del mock demo (Y/D) o elenco reducido fixture?  
5. Orden de planes: ¿tercer delta `prueba-h-m` anclado a pd2 JSON-LD, o refactor del kit `prueba-de-dos` → `prueba-h-m` en playground?

---

## 12. Criterio de éxito (cuando se ejecute)

- Matriz verbos B+C+D con ≥1 PASS por capa FM.  
- LORE/VOZ barrios `vivo` con evidencia wake + actas marioneta.  
- VectorMachine paso presente pero **fake** declarado.  
- Identidad H/M con ≥2 characters Novelist + pod lease cada uno.  
- Schemas validan wire; vistas JSON-LD expanden (AS2/PROV).  
- Grafo test cita IDs cantera (`document-machine-sdk`, `agent-lore-sdk`, …), no slugs inventados.

Cuando quieras, pasamos a Plan mode con un delta DRY `prueba-h-m` anclado a los dos planes + esta research.