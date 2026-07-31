# INVESTIGACION: prueba-de-H-M y Barrio LORE
## Status: ANÁLISIS COMPLETADO — DATOS PRIMARIOS

### Rutas y Archivos Críticos Localizados

#### Dossier Target
- **Ruta:** `c:\S_LAB\s-sdk\.cursor\dossiers\prueba-de-h-m-barrio-lore\`
- **Archivos:** README.md, PLAN.md (5 fases, 37 puntos), FUENTES.md (referencias resueltas)

#### Planes y Researches (internos)
- `mesa_prueba_playground_0c3520d6.plan.md` — cerco, mesa PD2, fases 0-3
- `pd2_verbos_json-ld_9d69d81d.plan.md` — delta envelope L0-L3, AS2/PROV-O/DCTERMS
- `barrio-bartley.md` — mapa 24 barrios, cantera ciudad, handoffs
- `futures-machine-and-cristalizador.md` — FM simulada, Cristalizador/Bartleby, 10 verbos nuevos
- `solid-city.md` — identidad triple WebID↔peercard↔ssbId, pods, personajes Novelist

#### Contratos Externos (absolutos, OASIS)
- DocumentMachineSDK: `cristalizador.agent.md`, `bartleby.agent.md`, engine-plan SKILL.md
- onfalo-asesor-sdk: corpus BARTLEBY, pistas raw
- cantera ciudad: `20-DocumentMachineSDK.md` (barrio 20, lore-voz), `MAPA.md`, `GRAFO/handoffs-barrios.md`
- prueba-de-dos: manual.md, handoffs bilaterales, GRAFO-STARTERKIT.md

### Paketes @zeus/* Disponibles (z-sdk/packages/engine/)

**Núcleo:**
- `@zeus/protocol` v0.4.1 — envelope state|intent|track|ledger, roles, ACL, PeerCard
- `@zeus/linea-kit` v0.3.0 — schemas VOLUMES, curation, loader, validador, herramientas Dramaturgo
- `@zeus/acta-kit` v0.1.1 — ActaDeBarrio, emit/adopt vía plaza ledger

**Infraestructura:**
- `@zeus/game-engine` v0.1.4 — gamemap engine, scenes, game-agnostic
- `@zeus/authority-kit` — autoridad rooms, permisos
- `@zeus/rooms` — cliente/servidor rooms, transportes
- `@zeus/player-mcp-kit` — MCP player agent (tools: join/walk/announce/wake/state/sleep)
- `@zeus/ciudad` — scene ciudad-v0, startpack
- `@zeus/playbook-kit`, `@zeus/app-shell`, `@zeus/feed-kit` — utilidades

### Estructura del Dossier: Diseño vs Implementación

**Modelo:** No es *nuevo lenguaje de dominio* sino **kit autocontenido con 3 capas:**
1. **Ontología/Dominio** — barrio LORE, unidades, verbos, schemas, JSON-LD
2. **Infraestructura** — pods, generador, PodStore, CLI, ceremonia
3. **Evidencia** — wire JSON + vista JSON-LD, huellas, reports, verificación

**No es un lenguaje DSL:** Es un **escenario de prueba** (scenario.json) + schemas + infraestructura H/M/pods + eventos tipados + ontología adicional.

---

## 1. CONCEPTOS PRIMITIVOS, ESTADOS, EVENTOS/VERBOS, ROLES, INVARIANTES, ARTEFACTOS

### Conceptos Primitivos

**Unidades (diez estáticas + dinámicas):**
- loreador, bartleby (analista 5 secciones), archivero, cristalizador, grafista, demiurgo, dramaturgo, pipeline, portal, vector-mock
- Dinámicos: universe-runner-<id> (creados durante ceremonia)

**Artefactos esperados:**
- Pista Onfalo (raw, sin curar) → documento primario
- Análisis Bartleby (.analisis.md, 5 secciones: corriente, taxonomía, mecanismos retóricos, aporte, vista hueco)
- Vector mock (determinista, marca `mock=true`, sin embedding real)
- Línea (`linea://…` vía linea-kit, tronco + satélites, nodos/arcos)
- Grafo (bifurcación universos, nodos/arcos/huecos, curación)
- Universo (spec .md/json, instancia dinámica con runner propio)
- Corto (= chunk de log ejecución, narrable, slice `engine-log-std` + huella, NO prosa literaria obligatoria)
- Pod (descriptor.jsonld, state.json, events.ndjson, artifacts/inbox/outbox)
- Pod Lease (ACL, emitida por H, válida vía peercard)

### Estados

**Pod:** `declared → leased → inflated → ready → running → [paused|stopped|failed]`

**Barrio (censo mock):** `dormido → despierto → corriendo → shutdown`

**Ceremonia:** 
1. preflight + identidad H/M
2. room + autoridad
3. leases + inflación Bartleby/Cristalizador
4. machine manifest + despliegue
5. ingest Onfalo + análisis
6. VectorMock
7. líneas validadas
8. grafo enlazado
9. universos + runners
10. cortos/queries
11. trace + shutdown

### Eventos/Verbos (Matriz de Contexto)

**A · Base H/M (hereda PD2):**
- `peer.join`, `peer.announce`, `state.inspect`, `session.exit`

**B · Pods:**
- `pod.lease`, `pod.revoke`, `unit.inflate`, `unit.start`, `unit.pause`, `unit.resume`, `unit.stop`, `unit.debug`, `machine.deploy`

**C · LORE (cadena datos):**
- `source.ingest` (Onfalo), `document.analyze` (Bartleby), `vector.mock-index` (VectorMock)
- `line.materialize`, `graph.bifurcate`, `universe.instantiate`, `corto.emit`

**D · Diagnóstico:**
- `machine.status`, `unit.inspect`, `artifact.data`, `artifact.spec`, `pipeline.gaps`, `artifact.validate`, `provenance.trace`, `coverage.measure`, `corto.query`

**E · TUI históricos (alias):**
- `boot`, `status`, `loadMOCK`, `run`, `run --desde`, `inspect`, `data`, `spec`, `gaps`, `docs`, `validate`, `trace`, `coverage`, `exit`

**F · Swarm (M + Cristalizador):**
- `crystallize` (boost setup), `spawn`, `attach`, `detach`, `start`, `stop`, `debug`, `pause`, `resume`
- `assign-character` (identity→Novelist), `bind-pod` (character/worker→pod)

**Envelope (L0-L3):**
- L0: URL nodo, room, tool name
- L1 header: v, game, kind, from, ts, actorId, role?, peerCard?
- L2 body: args intent/snapshot + archivo *.jsonld con @context/@type
- L3 footer: ledger, huellaLedger, tick, traceparent

### Roles

**H (Anfitrión):** nodo/autoridad, valida identidad, emite/revoca leases, observa, simula pods, autoriza barrios, verifica reporte externo

**M (Maestro de títeres / Machine):** controla Future Machine pipeline (via Cristalizador), emite verbos TUI/swarm, asigna Novelist characters, debug/stop/start workers

**Unidades:**
- Cristalizador: prepara infraestructura, propone agentes/skills antes de run y en gaps (NO ejecuta pipeline)
- Bartleby: analista, 5 secciones fijas, no juzga
- Pipeline: orquesta Loreador → Bartleby → Archivero → [Vector] → Grafista → Demiurgo → Dramaturgo
- Dramaturgo: genera cortos (= log-chunks) desde universo

### Invariantes

1. Una unidad, un pod (sin estado global implícito)
2. JSON wire manda; JSON-LD es vista semántica verificable (no hasheada)
3. Pod se materializa solo tras peercard + lease válida
4. Cristalizador genera infra, no la ejecuta
5. VectorMachine permanece mock `mock=true` en v1
6. Ningún paso continúa si falta upstream o deja estado parcial
7. H y M conservan handoffs bilaterales, sign solo su mitad
8. Onfalo es import-once (RO, no mutación runtime)
9. No hay CSS/SOLID/LDP reales en v1 (fixture local)
10. Corto ≠ prosa literaria; es chunk ejecución + huella + provenance

---

## 2. DOMINIO/ONTOLOGÍA vs INFRAESTRUCTURA

### Dominio/Ontología (c:\S\scriptorium\playground\prueba-de-H-M/)

**Schemas a materializar:**
- `fm-pipeline.schema.json` — grafo capas, slots READY/MISS + deps
- `fm-slot.schema.json` — agente como recurso, contrato I/O
- `fm-command.schema.json` — AS2 Activity (verbos TUI)
- `fm-log-chunk.schema.json` — prov:Activity + corto (slice log-std)
- `fm-line-graph-universe.schema.json` — alineación linea→grafo→universo
- `identity-characters.schema.json` — peercard → characters[] (Novelist bridge)
- `pod-lease.schema.json` — LDP container stub
- `puppet-worker.schema.json` — AgentLore nave/worker
- Scenario: `scenarios/barrio-lore/scenario.json` (barrioId, distrito lore-voz, unidades, verbos, cleanup, CA)

**Vocabularios:**
- AS2 (ActivityStreams 2.0) — verbos, actividades, actores
- PROV-O (Provenance Ontology) — wasGeneratedBy, wasAssociatedWith, actedOnBehalfOf
- DCTERMS (Dublin Core Terms) — created, creator, issued, modified, etc.
- `zsdk:` (provisional) — namespace Zeus SDK
- `fm:` (provisional) — namespace Future Machine
- `hm:` (provisional) — namespace H/M

**Ontología vertical (5 secciones Bartleby):**
- Corriente (linaje, tradición)
- Taxonomía (clases, jerarquía)
- Mecanismos retóricos (autoridad, demarcación, ethos)
- Aportes (diagnósticos nuevos)
- Vista desde hueco (ausencias estructurales)

### Infraestructura

**PodStore (file-backed):**
- IRI lógica: `urn:scriptorium:hm:<run-id>:pod:<unit-id>`
- Adaptador SOLID futuro (SM02 fuera v1)
- ACL positiva, omitida, inválida, expirada (tests)
- Contenido mínimo: descriptor.jsonld, state.json, events.ndjson, artifacts/manifest.json, inbox/, outbox/

**Generador (scripts/generar.mjs):**
- Crea `.runs/<run-id>/H` y `.runs/<run-id>/M`
- Opciones: `--scenario`, `--run`, `--sin-install`, `--force-new`
- No sobrescribe: reanuda solo si manifest coincide
- Drift falla ruidoso
- Genera env sin defaults silenciosos, handoffs vivos, room, manifest sellado, raíz evidencia

**CLI / Ceremonia:**
- `scripts/importar-onfalo.mjs` — import-once build-time, selecciona 2 piezas, verifica licencia, genera source.manifest.json
- `scripts/ejecutar-ceremonia.mjs` — 11 pasos bloqueantes
- `scripts/verificar-evidencia.mjs` — verificador externo, sin acceso H/M vivos

**Testeo:**
- `node:test`, unitarias + E2E offline
- Coverage: schemas, verbos, JSON-LD, idempotencia, drift, PodStore/ACL, VectorMock, línea/grafo/universo/corto, queries
- Negativos: corpus/hash/schema, pod/lease, VectorMock no declarado, upstream ausente, runner caído

---

## 3. QUÉ CONSUMIR DE @zeus/* vs PLAYGROUND

### Consumo directo @zeus/* (publishConfig: npm.scriptorium.escrivivir.co)

1. **@zeus/protocol** v0.4.1
   - Envelope (state|intent|track|ledger)
   - makeIntent, roles, gates, ACL, PeerCard
   - NO modificar, usar literal

2. **@zeus/linea-kit** v0.3.0
   - Schemas VOLUMES (tronco, satélites, nodos)
   - Curation, resolve, force-activation, loader
   - `validateVolumesTree`, `resolveNodo`, `explainActivate`
   - Herramientas: `crearLinea`, `segmentar`, `conectarSatelite`, `fetchSnapshot`
   - URIs: `linea://…`

3. **@zeus/acta-kit** v0.1.1
   - `emitirActa`, `validarActa`, `adoptarActaDesdePlaza`
   - Ledger plaza como único canal
   - Shape frozen, no agregar fields

4. **@zeus/game-engine** v0.1.4
   - Gamemap engine, scenes
   - Game-agnostic (consumers suministran scenes/content)

5. **@zeus/authority-kit**
   - Permisos, autoridad rooms

6. **@zeus/rooms** + **@zeus/player-mcp-kit**
   - Cliente/servidor rooms
   - Player MCP agent (tools: join/walk/announce/wake/state/sleep)

### Contingencia Playground (NO publicar)

- **Customizations locales:**
  - `customizations/agents/` — agentes especializados (Cristalizador boost, Bartleby mock)
  - `customizations/prompts/` — prompts HM-boot, HM-inflate, HM-deploy, HM-run, HM-inspect
  - `customizations/skills/` — skills prueba-hm, future-machine, pod-state, barrio-lore
  - Tras segundo consumidor, proponer promoción skills-library

- **Schemas locales:**
  - `schemas/scenario.schema.json`
  - `schemas/unit.schema.json`, `machine.schema.json`, `activity.schema.json`, `pod.schema.json`
  - `schemas/artifact-chain.schema.json`, `graph.schema.json`, `universe.schema.json`, `corto.schema.json`
  - `schemas/evidence-report.schema.json`

- **Ontología local:**
  - `ontology/hm-v1.context.jsonld` (AS2+PROV-O+DCTERMS+zsdk:+fm:)
  - `ontology/hm-v1.ttl` (Turtle)
  - `reference/VERBOS.md` (catálogo)

- **PodStore + infraestructura:**
  - `src/pod-store.mjs` — file-backed, IRI lógica
  - `src/machine-runtime.mjs` — orquestación unidades
  - `src/vector-mock.mjs` — determinista + seed declarado
  - `src/linea-adapter.mjs` — bridge a linea-kit
  - `src/artifact-chain.mjs` — cadena Onfalo → corto
  - `src/evidence.mjs` — generación wire + view.jsonld + reports

---

## 4. PAQUETES EXACTOS Z-SDK + SUPERFICIES TS

### Paquetes minimales requeridos (package.json)

```json
{
  "dependencies": {
    "@zeus/protocol": "0.4.1",
    "@zeus/linea-kit": "0.3.0",
    "@zeus/acta-kit": "0.1.1",
    "@zeus/game-engine": "0.1.4",
    "@zeus/authority-kit": "latest",
    "@zeus/rooms": "latest",
    "@zeus/player-mcp-kit": "latest",
    "@zeus/ciudad": "latest",
    "@zeus/startpack-ciudad": "latest",
    "@zeus/startpack-kit": "latest",
    "@zeus/presets-sdk": "latest"
  },
  "devDependencies": {
    "@zeus/test-utils": "latest",
    "ajv": "^8.17.1",
    "yaml": "^2.8.0"
  }
}
```

### Superficies TypeScript CRÍTICAS (tipos a definir localmente)

**Interfaces dominio:**
- `Scenario` — barrioId, distrito, roles, unidades, verbos, fixtures, cleanup, CA
- `Unit` — type (agent|machine), id, inputs[], outputs[], dependencias[], verbos[], schema estado, condición (bootstrap|deployed|dynamic)
- `Pod` — IRI, descriptor, state, events, artifacts, acl, leaseInfo
- `PodLease` — emitterIRI, receiverIRI, permissions, expiresAt, signature
- `Activity` — id, actor, verb, object, target, context, instrument, timestamps, result, provenance, digest
- `Artifact` — type, id, uri, hash, provenance, refs
- `Evidence` — wire (JSON), view (JSON-LD), hash, timestamp, actor
- `Universe` — id, graphDigest, runner (ProcessHandle), state, events
- `Corto` — universeId, graphDigest, lineaRefs[], vectorRefs[], interval, events[], huella
- `Report` — matrix[verb][actor][object], pods[], artifacts[], hashes[], coverage%, fallos[], procesos_residuales[]

**Tipos @zeus/protocol (reusar):**
- `Envelope` — estado|intento|track|ledger
- `Intent` — room, tool, args
- `PeerCard` — id, issuer, capabilities, validThrough
- `ACL` — rules (positive), omitted, invalid, expired

**Tipos @zeus/linea-kit (reusar):**
- `Linea` — tronco + satélites
- `Nodo` — id, refs[], content
- `Force` — escenas (prompt/think/output)
- `CurationStatus` — enum (raw/candidate/labeled/…)

**Enums locales:**
- `VerbCategory` — base|pods|lore|diagnostico|tui|swarm
- `PodState` — declared|leased|inflated|ready|running|paused|stopped|failed
- `BarrioState` — dormido|despierto|corriendo|shutdown
- `VectorMockMode` — algo (algoritmo + seed)

**Validadores (Ajv):**
- `validateScenario(json): { ok, errors }`
- `validateUnit(json): { ok, errors }`
- `validateActivity(json): { ok, errors }`
- `validateEvidence(wire, view): { ok, errors, hashMatch }`
- `validateUniverseSpec(spec): { ok, errors }`

---

## 5. CONTRADICCIONES Y AMBIGÜEDADES DEL DOSSIER

### Ambigüedades Explícitas (Abiertas deliberadamente)

1. **¿Cristalizador unificado vive como skill playground o cita RO a DocumentMachine+AgentLore?**
   - Dossier propone "unificar" pero ambas existen (DocumentMachine `.github/agents/cristalizador` + AgentLore skill `cristalizador`)
   - Decisión posterga para refactor post-v1

2. **¿Corto = solo log-chunk o también prosa mínima Dramaturgo?**
   - Plan dice "chunk inmutable y consultable del log" (NO prosa literaria obligatoria)
   - Pero Dramaturgo historicamente emite "cortos literarios"
   - Resolución: corto = log-chunk + metadatos narrativos opcionales

3. **¿Pod-sim emite IRIs locales `pod://mesa/…` o paths playground?**
   - Plan especifica `urn:scriptorium:hm:<run-id>:pod:<unit-id>` (URN lógica)
   - Implementación adapter juega con paths físicos transparentes a H/M
   - Decisión: URN lógica, adaptador resuelve a filesystem

4. **¿Novelist characters del mock demo (Y/D) o elenco reducido fixture?**
   - Onfalo trae 2 piezas raw (primero-de-mayo, auge-educacion-emocional)
   - No especifica cuántos personajes Novelist mapear
   - Criterio: mínimo 2 (1 por universo) + marionetas pipeline

5. **¿Orden de planes: tercer delta `prueba-h-m` anclado a pd2 JSON-LD o refactor kit `prueba-de-dos`?**
   - FUENTES.md cita plan pd2_verbos_json-ld como ancla
   - PLAN.md propone kit NUEVO `C:\S\scriptorium\playground\prueba-de-H-M`
   - NO reescribir prueba-de-dos
   - Orden: Delta PD2 verifica L0-L3; luego nuevo kit prueba-H-M con escenarios

### Contradicciones Menores (Wrappers resolvió)

- "Barrio LORE" ≠ ancla 25 ni fusiona distrito (FUENTES.md §Correcciones)
- JSON-LD es vista aditiva, wire JSON sigue ejecutable
- VectorMachine es mock v1 (no real)
- Pods locales con IRI lógica, CSS/WebID v0 futuro

### Gaps Sin Resolver

1. ¿Qué sucede si verificador externo Y H/M divergen en reporte? (procedimiento dispute)
2. ¿Identidad peercard reutilización entre niveles? (issue conocida, solo anotar si aparece)
3. ¿CSS real en v2/v3? (fuera alcance, nota para SM02+)
4. ¿Machine.deploy actual vs Future Machine mock? (FM = simulada vía Cristalizador)
5. ¿Correlación Onfalo pistas → Bartleby secciones? (análisis libre Bartleby, no binding fijo)

---

## 6. RUTAS ABSOLUTAS Y EVIDENCIA PRECISA

### Dossier Core (Source of Truth)

```
c:\S_LAB\s-sdk\.cursor\dossiers\prueba-de-h-m-barrio-lore\
  ├── README.md                  (estado, autoría, cerco)
  ├── PLAN.md                    (5 fases, 37 puntos, árbol objetivo, CA, fronteras)
  └── FUENTES.md                 (trazabilidad, rutas cites, correcciones wrapper)
```

### Planes Internos (Anclas)

```
c:\S_LAB\s-sdk\.cursor\plans\
  ├── mesa_prueba_playground_0c3520d6.plan.md         (PD2, fases 0-3, cerco RO)
  └── pd2_verbos_json-ld_9d69d81d.plan.md             (L0-L3, envelope, AS2+PROV-O+DCTERMS)

c:\S_LAB\s-sdk\.cursor\researches\
  ├── barrio-bartley.md                                (mapa 24 barrios, cantera)
  ├── futures-machine-and-cristalizador.md             (FM simulada, 10 verbos)
  └── solid-city.md                                    (identidad WebID, pods, Novelist)
```

### Contratos Externos (Verificación)

**cantera ciudad (Lectura RO):**
```
c:\S_LAB\s-sdk\plan\SPRINTS\sprint-game-city\cantera\CIUDAD\
  ├── 01-BARRIOS\20-DocumentMachineSDK.md              (barrio 20, lore-voz, edificios)
  ├── 02-LOCALES-Y-NAVES\_INDICE.md
  ├── MAPA.md                                          (distritos, Plaza, Zigurat)
  ├── CENSO-ESTADOS.md                                 (24 barrios, estado)
  └── GRAFO\
      ├── _INDICE.md
      ├── handoffs-barrios.md                          (206 edges, top emisores/destinos)
      └── ...
```

**DocumentMachineSDK (Lectura RO):**
```
c:\Users\aleph\OASIS\aleph-scriptorium\DocumentMachineSDK\
  ├── .github\agents\
  │   ├── bartleby.agent.md                            (5 secciones fijas, no juzga)
  │   ├── cristalizador.agent.md                       (diseñador agéntico, protocolo lectura)
  │   ├── archivero.agent.md
  │   ├── dramaturgo.agent.md
  │   └── portal.agent.md
  ├── .github\skills\
  │   ├── engine-plan\SKILL.md                         (verbos TUI §15)
  │   └── futures-engine\SKILL.md
  ├── .github\prompts\
  │   └── engine-plan.prompt.md
  ├── tmp\
  │   └── engine-log-2026-04-20-063151.md              (demo log-std fake)
  ├── mod\agents\                                      (archivero-lore, grafista, demiurgo, dramaturgo, pipeline, puzzle, etc.)
  └── README-SCRIPTORIUM.md
```

**onfalo-asesor-sdk (Lectura RO):**
```
c:\Users\aleph\OASIS\aleph-scriptorium\onfalo-asesor-sdk\
  ├── PROYECTOS\BARTLEBY\
  │   └── corpus\
  │       ├── editoriales\                             (pistas raw)
  │       │   ├── 2024-05-01_primero-de-mayo.md        (fixture import-once)
  │       │   └── 2026-05-01_auge-de-la-educacion-emocional.md
  │       └── analisis\
  └── ESCRIBIENTE_TESTLAB\pasadas\                     (lab mock)
```

**prueba-de-dos (Lectura RO + Modelo):**
```
c:\S\scriptorium\playground\prueba-de-dos\
  ├── manual.md                                        (§5 CA bilateral, handoff registro)
  ├── SKILL.md
  ├── GRAFO-STARTERKIT.md                              (U187 marcado, Z intacto)
  ├── handoffs\
  │   ├── handoff-H.md                                 (operador A, anfitrión)
  │   └── handoff-M.md                                 (operador B, visitante)
  ├── scripts\
  │   └── generar.mjs
  ├── reference\
  │   └── PEERCARD.md
  └── H\ M\                                            (no git, regenerables)
```

**z-sdk (Lectura RO, @zeus/**):**
```
c:\S_LAB\z-sdk\packages\engine\
  ├── protocol\
  │   ├── package.json (@zeus/protocol v0.4.1)
  │   ├── spec\CONTRATO.md                             (envelope L1 header)
  │   └── src\
  │       ├── contract.mjs                             (state|intent|track|ledger)
  │       ├── acl.mjs
  │       ├── peer-card.mjs
  │       └── roles.mjs
  ├── linea-kit\
  │   ├── package.json (@zeus/linea-kit v0.3.0)
  │   ├── schemas\
  │   │   ├── nodos.schema.json
  │   │   ├── force.schema.json
  │   │   └── ...
  │   ├── src\
  │   │   ├── curation.mjs
  │   │   ├── loader.mjs
  │   │   └── tools\
  │   └── README.md
  ├── acta-kit\
  │   ├── package.json (@zeus/acta-kit v0.1.1)
  │   └── src\
  │       ├── emitir.mjs
  │       ├── validar.mjs
  │       └── huella.mjs
  ├── game-engine\ (@zeus/game-engine v0.1.4)
  ├── authority-kit\
  ├── rooms\
  ├── player-mcp-kit\
  └── ... (otros 20+ paquetes)
```

### Target (Escritura permitida — playground v1)

```
c:\S\scriptorium\playground\prueba-de-H-M\
  ├── package.json
  ├── SKILL.md
  ├── manual.md + CEREMONIA.md + PODS.md + ONTOLOGIA-Y-VERBOS.md + ...
  ├── handoffs\ (plantillas inmutables)
  ├── ontology\
  │   ├── hm-v1.context.jsonld
  │   ├── hm-v1.ttl
  │   └── VERBOS.md
  ├── schemas\
  │   ├── scenario.schema.json
  │   ├── unit.schema.json
  │   ├── fm-pipeline.schema.json
  │   ├── fm-log-chunk.schema.json
  │   ├── pod-lease.schema.json
  │   ├── identity-characters.schema.json
  │   └── evidence-report.schema.json
  ├── scenarios\barrio-lore\
  │   ├── scenario.json
  │   └── fixtures\onfalo\raw\ (import-once, 2 piezas sealed)
  ├── units\catalog\
  │   └── (manifests de 10 unidades estáticas)
  ├── customizations\
  │   ├── agents\ (Cristalizador boost, Bartleby mock)
  │   ├── prompts\
  │   └── skills\
  ├── scripts\
  │   ├── generar.mjs
  │   ├── importar-onfalo.mjs
  │   ├── ejecutar-ceremonia.mjs
  │   └── verificar-evidencia.mjs
  ├── src\
  │   ├── pod-store.mjs
  │   ├── machine-runtime.mjs
  │   ├── vector-mock.mjs
  │   ├── linea-adapter.mjs
  │   ├── artifact-chain.mjs
  │   ├── evidence.mjs
  │   └── cli.mjs
  └── test\ (node:test)

  `.runs\<run-id>\H\ .runs\<run-id>\M\ (regenerables, no git)
```

---

## RESUMEN: ¿Nuevo lenguaje o escenario de kit?

**RESPUESTA:** NO es nuevo lenguaje DSL (sintaxis parsed). ES:

1. **Escenario** (scenario.json) + **Unidades** + **Verbos tipados**
2. **Infraestructura** (pods, generador, PodStore, CLI)
3. **Ontología** (AS2+PROV-O+DCTERMS+zsdk:, JSON-LD aditivo)
4. **Evidencia** (wire JSON + view JSON-LD + huellas + reports)

**Model-driven, no DSL-driven.** Consumir @zeus/*, definir ontología local, tests + validación. El "lenguaje" es la **gramática de eventos** (verbos tipados) + **schemas** + **roles bilaterales** (H/M).

**Viabilidad:** Posible con @zeus/*. Requiere:
- 8 schemas dominio
- 40+ tipos TS (interfaces + enums)
- 5 módulos infraestructura (pod-store, runtime, vector-mock, evidence, adapter linea)
- Generador determinista + validador externo
- Import Onfalo v0 (seleccionar 2 piezas, seal, NO mutar OASIS)
- VectorMock determinista (NO real) + seed declarado
- linea-kit adapter (URIs `linea://…` + manifests)
- Tests offline: unitarias + E2E ceremonia

# Investigación FREEZE/CONGELAMIENTO - Vigilancia Z y S

## RESUMEN EJECUTIVO

**Estado operativo actual (2026-07-26):** Múltiples freezes **parcialmente levantados** en Z (carril dominante). Freeze normativo sigue vigente en S (backstage sin remoto). Última ronda SOL (gorro Dionisos) completó R20-Z PASS = tercer frente DONE.

### Freezes Identificados

| Freeze | Estado Normativo | Estado Operativo | Levanta | Desde | Por qué |
|--------|-----------------|------------------|---------|-------|---------|
| **PAUSA / CORTE TÉCNICO Z** | Vigente (D-42/D-43) | **Parcialmente levantada** (U168-U171 autorizado R15+) | custodio vía orquestador | 2026-07-24 | Pausa técnica + R13-Z HOLD operativo |
| **HOLD R13-Z autoridad** | Vigente originalmente | **LEVANTADO** (DA-S21 · `2eb4784`) | custodio (Vigía S) | 2026-07-24 | DA-S21 asentada en scriptorium |
| **HOLD R15-Z publish** | HOLD vigente | **RESUELTO** (R15-Z PASS + Release 30134579637) | custodio relanzar | 2026-07-25 | GO publish FINAL levantado |
| **CANAL BACKSTAGE S** | Declarado durable | **CONGELADO** (67 commits sin push) | operador S (vigía) | 2026-07-23 20:33 (station down) | Rama `scriptorium-vigilancia` sin upstream |
| **GATE TERRITORIO==MAPA** | Prescrito en ESTACION.md | **INOPERANTE** (desde consumo 0.8.0) | carril librería + S | NC (metodológico) | Script no maneja co-localización mapas/territorio |

## ESTADO NORMATIVO vs OPERATIVO

### Skill / Protocolo Swarm

**Ubicación:** [C:\S_LAB\skills-library\skills\swarm-orquestacion\SKILL.md](C:\S_LAB\skills-library\skills\swarm-orquestacion\SKILL.md)

**Versión:** Protocolo v0.7 (5 costuras: sucesión gorro, claim carril, poda worktrees, hostil-omite, enmascarado público)

**Regla crítica (§Preflight):** "Antes de crear directorios, escribir, arrancar watchers, ejecutar git mutable, **verificá la identidad de la raíz con el detector canónico de `vigilancia`**. Si LOCK, devolver **sin efectos**."

---

## FREEZE 1: PAUSA / CORTE TÉCNICO (Z)

### Estado Normativo

**Decisiones vigentes:**
- **D-42** (2026-07-24): GO publish **condicionado** P0×4 (4 runtimes mesh)
  - Condiciones: skills 0.10.0 ✅, R12-Z PASS ✅, U168–U171 ✅, major-band+gate ✅, contrarrevisión ✅, changesets+CI ✅, gate C8 ✅
  - **Cumplidas todas** → publish FINAL sin nuevo GO (NO requiere autorización adicional)
  - Acto 2026-07-25: custodio elevó GO publish FINAL con R14-Z PASS
  - **RESULTADO:** Release 30134579637 ✅ → @zeus/* 0.1.1 ×4 en registry propio

- **D-43** (2026-07-24): GO de **planificación** R13-Z (tercer frente Dramaturgo)
  - HOLD autoridad **levantado** (DA-S21 · `2eb4784`)
  - Alcance: **solo ola A (U172 ∥ U173)** después de R13-Z PASS
  - Resto (U174–U178, U73): ⬜ sin despacho

**Pausa formal:** [AVISO-PAUSA-CORTE-TECNICO.md](c:\S_LAB\vigilancia\z\AVISO-PAUSA-CORTE-TECNICO.md)

Emitido por: custodio → todos workers Z
Motivo: "Corte técnico — pausa obligatoria de obra"
Mandato:
```
- PAUSAR todo trabajo en curso
- No despachar workers
- No merge/publish salvo emergencia documentada
- No reanudar sin aviso explícito
```

Worktrees: `C:\S_LAB\.worktrees\z` **vacío** (0 entradas) — confirmado en higiene literal

### Estado Operativo

**Levantemientos ejecutados:**

1. **R12-Z PASS** (2026-07-24) → **PAUSA parcial autorizada** U168–U171
   - [AVISO-PAUSA-PARCIAL-U168-U171.md](c:\S_LAB\vigilancia\z\AVISO-PAUSA-PARCIAL-U168-U171.md)
   - Olas: U168 ∥ U170 → U169 → U171
   - Contrarrevisiones: U168, U169, U171 **PASS** (archivadas)
   - **Resultado:** U168–U171 ✅ acepta (cierre R12)

2. **R13-Z PASS** (2026-07-24) → planificación desbloqueada
   - Petición enviada con DA-S21 asentada
   - Gate [GATE-R13-Z-PASS.md](c:\S_LAB\vigilancia\z\GATE-R13-Z-PASS.md) emitido
   - Ola A (U172–U173) autorizada **con contrarrevisión activa**
   - Resto permanece ⬜

3. **R14-Z PASS** (2026-07-25) → R14 (prep pub/changesets dry)
   - U171 acepta ✅
   - Changesets + matriz CI/Release completados
   - Gate online C8 pre-publicación verde

4. **R15-Z HOLD → PASS** (2026-07-25)
   - Originalmente: Release 30133867581 **cancelada deliberadamente** (pausa custodio)
   - Asiento: `7400e86` plan(gobierno): PAUSA publish FINAL
   - Resolución: custodio ordena relanzar (post-pausa)
   - Ejecutado: rerun Release 30134579637 → success
   - Resultado: @zeus/* 0.1.1 ×4 **publicados** en C8 online

5. **R16–R20 PASS** (2026-07-25)
   - R16–R19: progresión de Ola A (U172–U177)
   - **R20-Z PASS** (2026-07-25): **Épica U73 Zigurat CERRADA-POR-DISEÑO**
     - 6 WPs ejecutados (U172, U173, U174, U175, U176, U177)
     - 6 contrarrevisiones independientes PASS
     - 5 devoluciones con hallazgo real (4 bloqueantes seguridad + 1 documental)
     - Gate: [GATE-R20-Z-PASS.md](c:\S_LAB\vigilancia\z\GATE-R20-Z-PASS.md)

**PAUSA sigue vigente formalmente para:**
- U174–U177: Ola B, C, D, E (aunque U172–U177 completados)
- U178: publish-ready `linea-editor` (GO separado)
- U73: épica (aunque U172–U177 ejecutada, cierre formal en D-43)
- Demoliciones, merges fuera de secuencia

### Quién Levanta

- **Custodio:** levanta PAUSA mediante orden explícita (orden `7400e86`, orden relanzar R14+R15)
- **Orquestador-Z:** ejecuta despacho bajo GO custodio, mantiene BACKLOG
- **Vigía Z:** valida gates y reporta incidentes (doble-conductor detectado en R15-HOLD)

### Qué Acciones Están Prohibidas (Frontera Dura)

```
- 0 npm publish manual (solo CI/changesets)
- 0 Release publish efectivo hasta cumplir D-42 (cumplidas)
- 0 flip private adicional
- 0 force push
- 0 Issues nuevos (DC-15 LOCAL-ONLY acotada)
- 0 despacho de U174–U178 sin GO por ola
- 0 reabrir U165 / Sprint 8 (CERRADO)
```

---

## FREEZE 2: HOLD R13-Z (AUTORIDAD)

### Antes de Levantarse

Archivos históricos:
- [AVISO-R13-Z-plan-hold.md](c:\S_LAB\vigilancia\z\AVISO-R13-Z-plan-hold.md) — **HISTÓRICO / SUPERADO**
  - Hold operativo: «no pedir R13 / espera R12»
  - Hold autoridad: DA-S21 **pendiente**

### Levantamiento (2026-07-24)

**Decisión D-43 + DA-S21:**
- Archivo: [ADDENDA-R27-S-interna.md](c:\S\vigilancia\ADDENDA-R27-S-interna.md)
  - Línea: "DA-S21 · `2eb4784` asentada"
  - Alcance: GO de **planificación** tercer frente (no implementación, workers, publicación)
  - Commit: `2eb4784` (scriptorium main, plan/DECISIONES.md)
  - Fecha: 2026-07-24 (posterior al asiento)
  - Texto literal en R27: "HOLD de R13-Z levantable con la entrega de `2eb4784`"

**Hold operativo permanece:**
- PAUSA global + secuencia: R12-Z PASS ✅ → petición R13-Z ✅ → sin despacho hasta R13-Z PASS + GO impl.

---

## FREEZE 3: GATE TERRITORIO==MAPA (INOPERANTE)

### Ubicación

Prescrito en: [C:\S_LAB\z-sdk\plan\ESTACION.md](c:\S_LAB\z-sdk\plan\ESTACION.md)
Comando: `verificar-territorio-mapa.sh --root "$WORLD_ROOT"`

### Problema Operativo

Documentado en: [ADDENDA-R28-S-interna.md](c:\S\vigilancia\ADDENDA-R28-S-interna.md), líneas 50–70

**Hallazgo severidad ALTA:**

> El script asume mapas y territorio co-localizados; la calibración S los separa deliberadamente (mapas versionados en el repo, territorio en `C:\S`). Ninguna de las dos invocaciones puede dar un PASS legítimo: **el gate lleva desde el consumo 0.8.0 declarado y nunca ha comprobado nada.**

Resultados reales:
- `--root C:/S` → `SKIP: no hay plan/MAPA-*.md` (mapas viven en repo, no raíz)
- `--root C:/S/scriptorium` → 12 falsos «sin fila» (`codebase`, `plan`, `docs`, `node_modules`, …) + `FALLO`

**Estado:** INOPERANTE desde adopción 0.8.0 (NC actual: no comprueba nada)

**Quién levanta:** Carril librería (método) + S (calibración)
- Método: `--maps` separado de `--root`, o documentar co-localización como requisito
- Calibración: corrección en territorio S / decisión custodio

---

## FREEZE 4: CANAL BACKSTAGE S LOCAL-ONLY

### Ubicación

Rama: `scriptorium-vigilancia` (en `C:/S/_fuentes/cuadernos-vigia-S`)
Upstream: **sin configurar** — debería ser `origin/script_sdk-vigilancia`

### Estado Operativo

Documentado en: [ADDENDA-R28-S-interna.md](c:\S\vigilancia\ADDENDA-R28-S-interna.md), línea 149 + [HANDOFF-S-COLA-LIMPIEZA-post-R5V.md](c:\S_LAB\vigilancia\v\HANDOFF-S-COLA-LIMPIEZA-post-R5V.md), línea 149

**Evidencia literal:**

```text
S-01 · Canal backstage sin remoto: rama `scriptorium-vigilancia` 
(tip `b66f032`) sin upstream, 67 adelante / 9 detrás de 
`origin/script_sdk-vigilancia` (congelado en `ac12ab7` — EPÍLOGO R1-S fin de línea)
```

**Consecuencia:**

> La memoria privada entera de este carril — 67 asientos, todas las addendas y veredictos desde R1-S — existe en un solo disco. Es la misma clase de fallo que elevé para `a-sdk` (46 commits sin empujar).

**Decisión:** [plan/DECISIONES.md → D-2 (2026-07-15)](c:\S_LAB\z-sdk\plan\DECISIONES.md)

```
D-2 · 2026-07-15 · Un solo contrato
```

Pero decisión operativa sobre canal backstage S: asentada como **«decisión D-2 de custodia»** en handoff (sin número de decisión aparte; marca §interna).

**Quién levanta:** Operador S (vigía) con push a `origin/script_sdk-vigilancia`
**Barrera:** Sin upstream configurado; requiere manual `git push --set-upstream origin scriptorium-vigilancia`

---

## INSTRUCCIONES: PROTOCOLO SWARM PARA LEVANTAR FREEZE

### Paso 1: Verificar Identidad (Obligatorio)

Script: `../vigilancia/scripts/verificar-identidad-raiz.mjs`
Contrato: `../vigilancia/reference/ESTACION.md`

```bash
# Para Z:
node verificar-identidad-raiz.mjs --world-root "C:/S_LAB/z-sdk"
# Debe retornar: PASS

# Para S:
node verificar-identidad-raiz.mjs --world-root "C:/S"
# Debe retornar: PASS
```

Si LOCK: **devolver sin efectos** (protocolo swarm §preflight)

### Paso 2: Autorización (Custodio)

El custodio (autoridad) emite **orden explícita** en formato:
- Asentamiento en `plan/DECISIONES.md` (D-n)
- O aviso de custodio → vigía → orquestador (síncrono en sesión)

**Ejemplo vigente:**
- D-42: GO publish (condiciones) + R14-Z PASS elevación → FINAL
- D-43: GO planificación R13 + DA-S21 levanta hold autoridad

### Paso 3: Orquestador Ejecuta Despacho

Orquestador-Z mantiene `plan/BACKLOG.md` y emite TICK copiable:
- Identidad: `WORLD_ROOT=C:/S_LAB/z-sdk` + `CANONICAL_WORLD_ROOT` + `READ_ONLY_ROOTS` + `DOWNSTREAM_PATTERNS`
- Despacho: solo WPs en alcance (U168–U171, luego Ola A)
- Contrarrevisión: activa en contratos (U172, U173, U175)

### Paso 4: Vigía Reporta Gates

Vigía Z (Dionisos, gorro de SOL) emite `Rn-Z` gates:
- Verifica condiciones de D-42/D-43
- Reporta anomalías (p. ej. identidad placeholder = observación + nota)
- Marca asientos de gobierno en el archivo gate

**Ciclo:** Orquestador → BRIEF → Worker → Revisión → ✅/devolución → Merge → Gate Rn-Z

---

## AUTORIDADES Y PERMISOS

| Rol | Puede Levantar | Restringido | Autoridad |
|-----|-----------------|------------|-----------|
| **Custodio** | PAUSA global, HOLD autoridad, GO publish/impl., orden relanzar | Sin cambios a-sdk/o-sdk, sin arquitectura | Suprema (ejecutivo) |
| **Vigía S (Dionisos)** | Asentar DA-n, reportar halazgos, elevar anomalías | No despachar, no code | Reporte + control |
| **Vigía Z (Dionisos, gorro SOL)** | Emitir gates Rn-Z, verificar condiciones, elevar conflictos | No despachar, no implementar | Gates + resolución conflictos (custodio) |
| **Orquestador-Z** | Editar BACKLOG, escribir briefs, despachar workers, fusionar (✅ post-rev) | No cambios metodología, no DA-n | Planificación + ejecución |
| **Operador S** | Push canal backstage, actualizar MAPA, limpiar ESTACION | No cambios D-n, no gobierno cross-carril | Gestión estación |

---

## CONDICIONES QUE LEVANTAN CADA FREEZE

### PAUSA Z → Levantamiento Parcial

- ✅ R12-Z PASS (2026-07-24) → autoriza U168–U171
- ✅ R13-Z PASS (2026-07-24) → autoriza Ola A (U172–U173)
- ✅ R14-Z PASS (2026-07-25) + GO custodio → autoriza publish FINAL
- ✅ R15-Z PASS (2026-07-25) → publish P0×4 DONE

**Próximas condiciones (pendientes):**
- R16–R20: progresión Ola A (en curso/completada)
- Ola B (U174) + Ola C + Ola D: requiere GO custodio aparte
- U178: GO publish-ready separado (WP propio)

### HOLD R13-Z → Levantado

- ✅ DA-S21 asentada (`2eb4784`, scriptorium)
- ✅ R12-Z PASS vigente
- ✅ Adopción skills 0.10.0 (`b348c59`)
- Condición siguiente: R13-Z PASS → sin despacho hasta **GO implementación** separado

### CANAL BACKSTAGE → Levantar

Acción: `git push --set-upstream origin scriptorium-vigilancia` (desde `C:/S/_fuentes/cuadernos-vigia-S`)
Prerequisito: upstream `origin/script_sdk-vigilancia` debe existir

**Nota:** Rama existe en remoto (`ac12ab7`); necesita merge de 67 commits locales + resolución de 9 commits remotos que faltan.

---

## ARCHIVO CRÍTICO DEFINIENDO ESTADO

- [C:\S_LAB\vigilancia\z\SUCESION-VIGIA-Z-gorro-de-sol-2026-07-25.md](c:\S_LAB\vigilancia\z\SUCESION-VIGIA-Z-gorro-de-sol-2026-07-25.md) — **Estado heredado actual** (Dionisos asume estación Z desde SOL)
  - GO R13 Ola A con contrarrevisión activa
  - P0×4 suspensión debida (⬜ sin obra)
  - PAUSA/CORTE TÉCNICO vigente, U73+U172–U178 sin despacho

