# Investigación: e-sdk (emmanuel-sdk) y DocumentMachine en Barrio LORE

**Estado:** 2026-07-31 | **Modo:** READ-ONLY, thoroughness=thorough  
**Contexto:** Planificar H/M para operar Barrio LORE como consumidor-wrapper; evaluar qué falta tipar en z-sdk

## Hallazgos Clave

### 1. Estado General de e-sdk
- **Ubicación:** c:\S_LAB\e-sdk (emmanuel-sdk)
- **Estado:** WIP, **fase papel-primero** (2026-07-16) — SIN código en carpetas DocumentMachineSDK, AgentLoreSDK, VectorMachineSDK (vacías)
- **Dependencias Runtime:** Solo @alephscript/skills-scriptorium@0.11.0 (antes 0.2.0 en WP-I60)
- **Protocolo:** Referencia versionada a `@alephscript/skills-scriptorium@0.7.0 › skills/swarm-orquestacion` (registry npm.scriptorium.escrivivir.co)

### 2. Submodules Identificados (punteros git)
```
DocumentMachineSDK       → escrivivir-co/para-la-voz-sdk                    (rama integration/beta/scriptorium)
VectorMachineSDK         → escrivivir-co/aleph-deep-wiki                    (rama integration/beta/scriptorium)
VectorMachineUI          → escrivivir-co/vm-sdk-chromadb-admin              (rama integration/beta/scriptorium)
AgentLoreSDK (Cartógrafo)→ escrivivir-co/mcp-agent-lore-sdk                 (rama principal)
```

### 3. Agentes del SDK (lore-sdk plugin)
**Ubicación:** `.github/plugins/lore-sdk/agents/`

- **@bartleby** — Análisis editorial (/feed): 5 secciones (linaje, taxonomía, mecanismos, emergencias, ausencias)
- **@archivero** — Gestor corpus: /diff-corpus, /merge-corpus, /status
- **@cristalizador** — Diseñador artefactos: /design, propone mod/
- **@portal** — Interfaz adaptativa SDK puro (subsumption protocol)
- **@voz** — Generador cristalizado (lore activo): genera poemas DESDE corpus, no SOBRE él

### 4. DocumentMachine en OASIS (versión anterior)
**Ubicación:** c:\Users\aleph\OASIS\aleph-scriptorium\DocumentMachineSDK (repo remoto: para-la-voz-sdk)

**Cadena Completa (future-machine):**
```
Loreador → Archivero → Grafista → Demiurgo → Dramaturgo
                ↓          ↓          ↓          ↓
           CORPUS_PREVIEW grafo JSON  universo   LORE_F-*.md
```

**Salidas:**
- LORE_INDEX.md
- CORPUS_PREVIEW.md
- grafo/{nodos, arcos, huecos, index}.json (RED SEMÁNTICA)
- universo/universo-N.md (instanciados)
- DRAFTS2/LORE_F-02_CORTO-*.md (literatura)

### 5. Migración: OASIS → e-sdk (Incompletez)
| Componente | OASIS | e-sdk | Estado |
|---|---|---|---|
| DocumentMachine (para-la-voz-sdk) | Operativo (Python + agentes) | Submodule vacío | WP-E12 (TODO) |
| Bartleby | onfalo-asesor-sdk/PROYECTOS/ | Plugin lore-sdk | **Movido 2026-04-16** |
| Cristalizador | Integrado | Plugin lore-sdk | **Operativo en WP-E13** |
| Archivero | Integrado | Plugin lore-sdk | **Operativo** |
| Cartógrafo (LORE) | AgentLoreSDK | mcp-agent-lore-sdk | WP-E10 (motor sin lore) |
| Onfalo | onfalo-asesor-sdk (consejo-asesor) | Planned S05 | **NO integrado en e-sdk** |

### 6. WPs Activos en e-sdk (Roadmap)
**Ola E0 (El contrato):** 
- WP-E00 · Gates del mundo
- WP-E01 · SPEC del contrato de línea (TODO)
- WP-E02 · Starterkit dramaturgo

**Ola E1 (Boca + máquinas):**
- WP-E10 · Cartógrafo como paquete (motor sin lore)
- WP-E11 · Boca firehose → línea → espacio exploratorio
- WP-E12 · @voz personal (DocumentMachine config)
- WP-E13 · Reencarnar plugins gen-1 (Bartleby, Vector, etc.)

**Ola E2/E3 (Bloqueadas):**
- WP-E20/E21 (bloqueado por DA-3: entrada del corpus fundacional)
- WP-E30/E31 (bloqueado por DA-1/DA-2/DA-4: P2P, volúmenes, kenosis)

**Reporte Completado:**
- WP-I60 · activacion-skill (2026-07-19) — Desduplicación de protocolo

### 7. Dependencias @zeus/* en e-sdk
**NO ENCONTRADAS** como dependencia directa en package.json de e-sdk.

**Referencia Indirecta:**
- VISION.md y BACKLOG.md citan zeus-sdk/plan/DATOS.md como "procedencia citada; se relee, jamás se toca"
- Formato de línea compatible POR CONTRATO, NO CONEXIÓN
- Cero llamadas entre mundos (DE-2)

**@zeus/* SÍ en z-sdk:**
- @zeus/linea-system (MCP server)
- @zeus/linea-firehose
- @zeus/protocol (tipos .d.ts)
- @zeus/rooms (WSS outbound-only)
- @zeus/ssb-system
- @zeus/presets-sdk
- Consumidas desde registry npm.scriptorium.escrivivir.co (ADR-0013)

### 8. Decisiones Abiertas en e-sdk (Bloquean)
- **DA-1**: ¿Kenosis y ser-desde-líneas se funden o compiten? → bloquea WP-E31
- **DA-2**: ¿Volúmenes privados: partición per-persona o local files-first? → bloquea WP-E30
- **DA-3**: ¿Cómo entra corpus fundacional? → bloquea WP-E20
- **DA-4**: ¿Quién traza la línea base de una persona? → bloquea WP-E31
- **DA-5**: Nombres de paquetes (@emmanuel/ichthys vs @emmanuel/charis) → bloquea publicaciones

### 9. Arquitectura de Líneas en z-sdk (DATOS.md)
**Tres familias de feeds:**
1. **Estática con autoridad** — Wikipedias (linea-aleph, oldid citables)
2. **Stream** — ATProtocol Firehose, triage raw→candidate→labeled
3. **Gossip & peers** — SSB logs (Tribes, Parliament), replicación peer

**Esquemas JSON (linea-kit/validate.mjs):**
- manifest-tronco.json, manifest-satelite.json
- nodo-meta.json, registro.json, snapshot-meta.json
- ontology-seeds.json (semillas de secciones)
- force.json, cota.json (fuerzas/límites del juego)
- viaje-recorrido.json (recorridos en grafo)
- curation-status.json, volumes.json

**NO ENCONTRADO:** JSON-LD, SOLID, WebID, WAC, ACP (ninguna mención explícita en e-sdk ni z-sdk)

### 10. Onfalo/Consejo-Asesor
- **Ubicación origen:** c:\Users\aleph\OASIS\aleph-scriptorium\onfalo-asesor-sdk/PROYECTOS/
- **Referencia en e-sdk:** `.github/plugins/lore-sdk/manifest.md` (consejo-asesor como dependencia opcional)
- **Integración planeada:** Story S05 en backlog (lore-sdk.instructions.md L57)
- **Estado:** NO integrado en plan/BACKLOG.md de e-sdk
- **Consumidor previsto:** VectorMachine agent menciona ONFALO como consumidor de "proyecto indexable"

### 11. Contratos Públicos de e-sdk
**Exports actuales:**
- Solo referencia versionada a @alephscript/skills-scriptorium (prompts/skills genéricos)
- No hay SDK público publicado aún

**Exports Planeados (WP):**
- WP-E10: paquete motor Cartógrafo (nombre TBD: @emmanuel/ichthys o @emmanuel/charis)
- WP-E12: configuración DocumentMachine como submodule
- WP-E13: plugins operativos (bartleby, vector-machine, lore-sdk, etc.)

### 12. Conexión con Barrio LORE
**Consumidor de e-sdk previsto:**
- VectorMachine agent → "relaciona VectorMachineSDK con ONFALO, Novelist, DocumentMachineSDK, ARCHIVO/PROYECTOS como futuros consumidores de un proyecto indexable"
- LORE = Cartógrafo + nave (firehose → mapa + browser)
- Candalo: La nave ABRE dossiers, no los GENERA

**NO VERIFICABLE aún:**
- Especificación de "H/M" (Human-Machine language)
- Contrato entre Barrio LORE y e-sdk
- Tipos TS para operación wrapper

### 13. DSL/Ontology Patterns en e-sdk

**Comandos del Protocolo DocumentMachine (SDK puro):**
- `/feed` — análisis de editorial → 5 secciones (linaje|taxonomía|mecanismos|emergencias|ausencias)
- `/diff-corpus` — clasificación delta (NUEVO|CONFIRMA|EVOLUCIONA|DISCREPA)
- `/merge-corpus` — integración en corpus.md (solo @archivero)
- `/design` — cristalización de artefactos (propone voz.agent.md, voz-[nick].instructions.md, poema.prompt.md)
- `/status` — verificación del mod + confirmación de nick
- `/universo` — expansión de universos plausibles desde corpus
- `/guion` — scaffold de flujo de trabajo (documento humano)

**Estructura de Análisis (@bartleby):**
- Linaje: citas explícitas con nivel jerárquico
- Taxonomía: árbol de términos con verbos transitivos
- Mecanismos retóricos: conteo + comparación
- Emergencias (E.XX): tensiones sin resolver
- Ausencias estructurales: presencias implícitas en negativo

**Estructura de Corpus (immutable mapa acumulativo):**
- corpus/editoriales/*.md — material fuente (lectura)
- corpus/analisis/*.analisis.md — informes @bartleby (EoA)
- corpus/corpus.md — mapa acumulativo (solo vía /merge-corpus)
- mod/agents/voz.agent.md — agente cristalizado (propuesto por @cristalizador)
- mod/instructions/voz-[nick].instructions.md — 6 marcas del nick + proporciones retóricas

**Patrón Unidireccional (main → mod):**
- SDK puro en `main` (inmutable en integration/beta/scriptorium)
- Cada mod tiene su rama de lore dentro del submódulo
- Los mods hacen `git pull origin main` (herencia)
- Los mods NO hacen PR de vuelta a main

**Subsumption Protocol (perfil-lector):**
- ❌ Prohibido mencionar: IA, LLM, prompt, agente, ChatGPT, VS Code, GitHub Copilot, modelo
- ✅ La aplicación se nombra por su nombre editorial o "la aplicación"
- ✅ El corpus habla; la tecnología es invisible
- En outputs públicos: Solo literatura, datos, análisis

**ARG-Board Protocol (Transmedia):**
- Agentes: Arrakis (Herald), BOE (Mentor), GitARG (Trickster), Decoherence (Shadow), AutomataHeroe (Shapeshifter), ImpressJS (Ally), MBox (Ally), PlatformCom (Communication)
- Sistema de turnos: commits + PRs como movimientos
- Validación: BOE (Boletín Oficial, registro inmutable) + Decoherence (coherencia)
- Arquitectura: Teatro Digital / DevOps Narrativo

**Foro-Scraper Protocol:**
- Estados pausable/reanudable (MCP Playwright)
- Foros: init → parse-pattern → scrape-page → state
- Blogs: init → scrape-entry

### 14. Publicación y Registry

**Registry:** `npm.scriptorium.escrivivir.co`
**Scope configurado:** @alephscript:registry

**Paquetes Planeados (NO publicados aún):**
- @emmanuel/ichthys O @emmanuel/charis (nombre TBD, DA-5)
- Será: motor Cartógrafo (WP-E10)
- Será: paquetes de los plugins gen-1 (WP-E13)

**Dependencias Actuales de e-sdk:**
- @alephscript/skills-scriptorium@0.11.0 (en package.json; actualizado de 0.2.0)
- Referencia interna: @alephscript/skills-scriptorium@0.7.0 › skills/swarm-orquestacion

**Sin Publicaciones Actuales:**
- No hay exports públicos de DocumentMachineSDK, VectorMachineSDK, AgentLoreSDK en e-sdk
- Los submodules viven en repos externos (escrivivir-co/*)
- Las integraciones son solo de diseño/plan (WIP)
