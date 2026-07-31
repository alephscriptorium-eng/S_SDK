# Investigación Z-SDK: 17 Paquetes — Matriz de Análisis

**Contexto:** LORE-HM (H=autoridad, M=operador), leases/pods, Activity+provenance, línea→grafo→universo→corto, capa SOLID planificada, playground consumidor-wrapper. Proyecto: ceremonia v1 (core + opcional MCP).

**Datos recolectados:**
- 17 paquetes documentados en plan/ARQUITECTURA.md y READMEs propios
- Dependencias reales vía grep de imports actuales
- Tipos: inspección de directorio `types/` vs solo .mjs
- Publicación: tous tienen `publishConfig.registry` + `exports` + `files`

## MATRIZ MÍNIMA (v1 core absoluto)

| Paquete | Función Pública Real | Necesidad v1 | Tipos Completos | Publicable | Acción Tipado |
|---------|------|-------|-----------|----------|-------|
| **protocol** | Envelope state\|intent\|track\|ledger; makeIntent; roles/gates/ACL; AsyncAPI gen | **CORE** | ✅ (types/*.d.ts para todos subpaths) | ✅ | *Ya hecho* — exportados en types/ |
| **authority-kit** | Tick loop + reducer registry (dominio inyectado) + snapshot + state/ledger/track emisión | **CORE** | ✅ (types/index.d.ts + create-authority.d.ts) | ✅ | *Ya hecho* — subpaths tipados |
| **rooms** | Cliente envelope ZEUS_SCRIPTORIUM_URL (wrapper mcp-core-sdk) + env resolver | **CORE** | ✅ (types/index.d.ts) | ✅ | *Ya hecho* |
| **presets-sdk** | Catálogo MCP + discovery + HORSE + env resolvers (columna vertebral) | **CORE** | ✅ (types en src/ para subpaths: env, docs, paths, discovery, mcp, volumes) | ✅ | *Ya hecho* — exports con types/ |

## MATRIZ AMPLIADA (v1 engine + v1 optional MCP)

### ENGINE PUBLICABLES (v1)

| Paquete | Función Pública Real | Necesidad v1 | Tipos | Publicable | Acción Tipado |
|---------|------|-------|-------|--------|------|
| **lifecycle-kit** | XState 5 leaf/aggregate/cascade genérico (start/stop/health/supervision) | Opcional* | ❌ **FALTA** | ✅ | **URGENTE:** `types/leaf.d.ts`, `types/aggregate.d.ts`, `types/transitions.d.ts`, `types/project.d.ts` |
| **story-board-schema** | JSON Schema contrato + AJV validator (dialectos solve/aleph; refs personajes) | Opcional* | ❌ **FALTA** | ✅ | **URGENTE:** `types/validate.d.ts`, `types/schema.d.ts` (AJV ValidationError, dialect enum) |
| **linea-kit** | Curation + resolve + force-activation + validate (node) + loader (node) + tools (node) + viaje (path manager) | Opcional* | ❌ **FALTA** | ✅ | **URGENTE:** `types/curation.d.ts`, `types/resolve.d.ts`, `types/loader.d.ts`, `types/viaje.d.ts`, `types/validate.d.ts` |
| **game-engine** | Gamemap motor puro + helpers node para GLB (browser-safe src/) | Opcional* | ✅ (types/index.d.ts + types/node.d.ts) | ✅ | *Ya hecho* |
| **player-mcp-kit** | MCP-por-actor pattern: room bridge + confirmIntent + standard resources (player/scene/casos) | Opcional* | ✅ (types/index.d.ts) | ✅ | *Ya hecho* |

*Opcional en v1 **engine** — consumidor (juego) elige adoptarlos, no requieren en ceremony core.

### KIT DE DOMINIO (v1 optional, domain-specific)

| Paquete | Función Pública Real | Necesidad v1 | Tipos | Publicable | Acción Tipado |
|---------|------|-------|-------|--------|------|
| **acta-kit** | ActaDeBarrio v1: emit/adopt via plaza ledger (pure, no LLM, no channel) | **Opcional MCP** | ❌ **FALTA** | ✅ | `types/tipos.d.ts`, `types/emitir.d.ts`, `types/validar.d.ts`, `types/adoptar.d.ts` |
| **parte-kit** | ParteDeCiudad v1: redactar/render/validar plaza bulletin (reading role, pure) | **Opcional MCP** | ❌ **FALTA** | ✅ | `types/tipos.d.ts`, `types/redactar.d.ts`, `types/render.d.ts`, `types/validar.d.ts` |
| **embajador-kit** | Peer-credential minimal: emit+consume peercard con startpack-ciudad (no crypto, stubs) | **Opcional MCP** | ❌ **FALTA** | ✅ | `types/tipos.d.ts`, `types/emitir.d.ts`, `types/consumir.d.ts` |
| **reparto-kit** | Reparto narrativo: personajes/roles, permisos dominio (sobre peer-card/seat) | **Opcional MCP** | ✅ (types/*.d.ts para todos subpaths) | ✅ | *Ya hecho* — tipos completos |

### MESH/MCP OPERACIONAL (v1 optional, deployment)

| Paquete | Función Pública Real | Necesidad v1 | Tipos | Publicable | Acción Tipado |
|---------|------|-------|-------|--------|------|
| **linea-system** | MCP loader read-only: DISK_02/LINEAS (espana trunk + wp/historia satélite) | **Opcional MCP** | ❌ (no types/) | ✅ | `types/index.d.ts`, `types/loader.d.ts` — recursos `linea://` |
| **force-system** | MCP loader read-only: DISK_03/FORCES (registry/info/force/{id}/scene/{session}/{slug}) | **Opcional MCP** | ❌ (no types/) | ✅ | `types/index.d.ts`, `types/loader.d.ts` — recursos `force://` |
| **socket-server** | Socket.io runtime (E2 slot): rooms + presets-sdk integration | **Opcional MCP** | ✅ (types/index.d.ts) | ✅ | *Ya hecho* |
| **ciudad-lifecycle** | City lifecycle composition: XState brain over mcp-launcher actuators | **Opcional MCP** | ❌ (no types/) | ✅ | `types/index.d.ts`, `types/runtime.d.ts` — export compose functions |
| **mcp-launcher** | Meta-ops fleet actuator: launch/stop/restart/health (catalog-only, Z06) | **Opcional MCP** | ❌ (no types/) | ✅ | `types/index.d.ts`, `types/catalog.d.ts` — ProcessManager, capabilities |

## HALLAZGOS CLAVE

### ✅ Ciclos de Dependencia Confirmados (v1 OK)
- `protocol` → nada (base)
- `authority-kit` → `protocol`, `rooms` (OK)
- `lifecycle-kit` → `xstate` (lib externa)
- `player-mcp-kit` → `rooms`, `presets-sdk` (OK)
- `story-board-schema` → `ajv` (lib externa)
- `game-engine` → `protocol` (OK)
- Mesh MCPs → `presets-sdk`, `protocol` cuando necesario (OK)
- **Cero ciclos inversos engine←mesh** (ARQUITECTURA regla 1 cumplida)

### 🔴 Deficit de Tipos (8 paquetes)

**URGENTE (impiden consumo TypeScript):**
1. **lifecycle-kit** — usado por `ciudad-lifecycle`, falta TypeScript completo
2. **story-board-schema** — consumido por `editor-ui`, schema/validate no tipados
3. **linea-kit** — columna vertebral lineas, tools/loader/viaje sin tipos
4. **acta-kit** — emisión de intents, sin tipos
5. **parte-kit** — lectura de bulletin, sin tipos
6. **embajador-kit** — peer-card emit/consume, sin tipos

**OPCIONAL (ops mesh, menos urgente):**
7. **linea-system** — MCP read-only, recursos resueltos dinámicamente
8. **force-system** — MCP read-only, recursos resueltos dinámicamente
9. **ciudad-lifecycle** — orquestación, tipos ayudarían pero no bloquean (la lógica es node-only)
10. **mcp-launcher** — meta-ops, ProcessManager + catalog, tipos benefician pero opcional

### 📦 Publicación: Todos Listos (v1 OK)
- Todos tienen `publishConfig.registry` = `https://npm.scriptorium.escrivivir.co`
- Todos tienen `exports` con subpaths (v1.9+ compatible)
- Todos tienen `files` declarados
- **NO hay bloqueos de publicación**, solo deficit de tipos

### 🎯 Preguntas: Lifecycle-Kit vs Story-Board-Schema Evitan Implementación Local

**lifecycle-kit:**
- Usado por `@zeus/ciudad-lifecycle` (XState brain wrapper)
- Define máquinas genéricas leaf/aggregate/cascade (reutilizable)
- **SÍ evita** implementación local: el consumidor inyecta actuators, kit provee la FSM
- **Si no existiera en v1:** consumidor tendría que copiar/adaptar la máquina XState

**story-board-schema:**
- Usado por `editor-ui` (validación dialectos solve/aleph) 
- Define contrato único JSON Schema + AJV validator
- **SÍ evita** implementación local: es single source of truth (no duplica schema en juegos)
- **Si no existiera en v1:** cada juego reimplementaría validación + refs de personajes

**Veredicto:** Ambos son **imprescindibles en v1 core** si se quiere evitar: (a) replicación de máquinas XState en cada orquestador, (b) replicación de schema story-board en cada editor/juego.

### 🏗️ Capa SOLID + Playground Consumidor-Wrapper

**Implicación para v1:**
- `presets-sdk` (env resolvers) = **inversión de control** (consumidor inyecta puerto/URL)
- `authority-kit` (reducer registry) = dominio inyectado (pattern SOLID)
- `lifecycle-kit` (actuators inyectados) = no nombra procesos concretos
- **Playground wrapper** (futuro): probablemente en `examples/` (no engine/)

## RECOMENDACIONES (sin editar runtime)

### Acción Inmediata (bloquea v1)
1. **Generar tipos** para 8 paquetes deficit (prioridad: lifecycle-kit → story-board-schema → linea-kit → acta/parte/embajador)
   - Usar `spec:generate` existente (protocol/spec/) como template
   - O tsconfig.json + tsc (algunos exportan tipos con `.d.ts` inline, otros no)

2. **Verificar completitud de exports** en package.json
   - Todos tienen `exports.` subpaths → OK
   - Algunos exports no declaran `types` → añadir si genera `.d.ts`

3. **Testing de subpaths** 
   - `@zeus/linea-kit/tools` → importan? Types correctos?
   - `@zeus/story-board-schema/schemas/*` → tipos para directorios JSON Schema?

### Matriz de Decisión v1 (consumidor/ceremonia)

| Paquete | v1 Core | v1 Optional | Bloqueo Tipos | Acción |
|---------|---------|-----------|---------------|--------|
| protocol | ✅ CORE | — | ❌ No | *Lanzar como está* |
| authority-kit | ✅ CORE | — | ❌ No | *Lanzar como está* |
| rooms | ✅ CORE | — | ❌ No | *Lanzar como está* |
| presets-sdk | ✅ CORE | — | ❌ No | *Lanzar como está* |
| lifecycle-kit | ⏸️ Depende juego | ✅ Ofrecida | ✅ SÍ | **Tipado ANTES de lanzar** |
| story-board-schema | ⏸️ Depende juego | ✅ Ofrecida | ✅ SÍ | **Tipado ANTES de lanzar** |
| linea-kit | ⏸️ Depende juego | ✅ Ofrecida | ✅ SÍ | **Tipado ANTES de lanzar** |
| game-engine | ⏸️ Depende juego | ✅ Ofrecida | ❌ No | *Lanzar como está* |
| player-mcp-kit | ⏸️ Depende juego | ✅ Ofrecida | ❌ No | *Lanzar como está* |
| acta-kit | Fuera core | ✅ Opcional | ✅ SÍ | **Tipado o marcar beta** |
| parte-kit | Fuera core | ✅ Opcional | ✅ SÍ | **Tipado o marcar beta** |
| embajador-kit | Fuera core | ✅ Opcional | ✅ SÍ | **Tipado o marcar beta** |
| reparto-kit | Fuera core | ✅ Opcional | ❌ No | *Lanzar como está* |
| linea-system | Fuera core | ✅ Opcional | ✅ SÍ (MCP) | *Tipado o MCP sin tipos (comum)* |
| force-system | Fuera core | ✅ Opcional | ✅ SÍ (MCP) | *Tipado o MCP sin tipos (comum)* |
| socket-server | Fuera core | ✅ Opcional | ❌ No | *Lanzar como está* |
| ciudad-lifecycle | Fuera core | ✅ Opcional | ✅ SÍ (orquestación) | **Tipado para consumidor** |
| mcp-launcher | Fuera core | ✅ Opcional | ✅ SÍ (ops) | **Tipado para consumidor** |

**Síntesis:** 10 paquetes listos hoy (4 core, 4 engine sin tipos bloqueantes, 2 sin deficit). 7 paquetes necesitan tipos antes de ser "oficiales v1" (pero pueden lanzarse como 0.x.x beta sin tipos si el consumidor es internista).
