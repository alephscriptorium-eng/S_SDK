# Investigación Z_SDK — linea-kit Tipado & Lane D Freeze

## Contexto
- **Investigación READ-ONLY**: c:\S_LAB\z-sdk (z-sdk monorepo)
- **Fecha**: 2026-07-31
- **Propósito**: Diseñar campaña de tipos públicos para @zeus/linea-kit y consumidores H/M-LORE

## 1. LINEA-KIT — Paquete y Estructura

**Ruta**: c:\S_LAB\z-sdk\packages\engine\linea-kit

### 1.1 Identificación
- **Nombre npm**: `@zeus/linea-kit`
- **Versión actual**: 0.3.0
- **Descripción**: "Canonical VOLUMES formats (DATOS.md §2/§8): JSON Schemas, curation model, validator, line loader, dramaturg segmentation tools, and viaje path manager"
- **Rol**: `lib` (engine library)
- **Publicabilidad**: P0 (sí, pipeline vigente)
- **Registry**: https://npm.scriptorium.escrivivir.co

### 1.2 Estructura de Exports Actuales
```
"exports": {
  ".": "./src/index.mjs",
  "./curation": "./src/curation.mjs",
  "./resolve": "./src/resolve.mjs",
  "./force-activation": "./src/force-activation.mjs",
  "./validate": "./src/validate.mjs",
  "./loader": "./src/loader.mjs",
  "./tools": "./src/tools/index.mjs",
  "./starterkits": "./src/starterkits/index.mjs",
  "./viaje": "./src/viaje/index.mjs",
  "./schemas/*": "./schemas/*"
}
```
**9 subpaths públicos** (8 JS + 1 glob schemas)

### 1.3 Estado de Tipado (CRÍTICO)
**linea-kit CARECE DE TIPOS .d.ts** — NO apareció en U155-U158
- U155: protocol (8 subpaths)
- U156: deferido (presets-sdk, webrtc-signaling, ui-3d-kit)
- U157: 9 paquetes grafo cercano (NO incluye linea-kit)
- U158: smoke registry (verificó protocol, rooms, webrtc-signaling)

**linea-kit está TIPADO por defecto (JSDoc)** pero sin condición "types" en exports.

### 1.4 Firmas Exportadas (browser-safe runtime)
Capa 1 - index.mjs (re-exports):
- CURATION_STATUSES, CURATION_STATUS_KEYS
- normalizeCurationStatus, isCurationStatus, isCanonStatus
- readCurationStatus, curationStatusFromCorpus, isCuratedSidecarPath
- parseWpTimestamp, slimRegistro, buildSectionIndex
- resolveNodo, resolveParte, resolveOldid, resolveRegistrosForNodo, resolveRegistrosForYear, validateNodoSectionMappings
- normalizeForceRegistry, initialActiveForces, forceAnchorTrackRef, cotasSnapshot
- explainActivate, explainDeactivate, applyActivate, applyDeactivate

Capa 2 - subpaths (node-only):
- ./validate: Ajv instance, loadSchemaObjects, SCHEMA_FILES, validate, validateFile, validateVolumesTree, resolveVolumesRoot
- ./loader: loadLineaData, readLineaManifest, readRegistro, readWikitext, etc.
- ./tools: crearLinea, segmentar, conectarSatelite, fetchSnapshot, segmentarForce, crearCotas
- ./starterkits: createLineaJuguete, createForceJuguete
- ./viaje: createLineaGraphSource, createWikiGraphSource, runViaje, viajeToWalkIntents, acceptWalks

### 1.5 Dificultad de .d.ts
**BAJA-MEDIA**: JSDoc ya existe, transición sencilla
- Generadores como en U155-U157 pueden aplicarse directamente
- 9 subpaths requieren condiciones "types" en package.json
- Schemas JSON son neutrales (no requieren tipos)
- **Riesgo técnico**: cero — sin breaking changes, solo adición

## 2. Precedentes U155-U158 — Exactitud

### 2.1 WP-U155 (protocol-types-subpaths)
- **Ejecutor**: Worker-U155
- **Fecha**: 2026-07-23
- **Rama**: wp/u155-protocol-types-subpaths
- **Status**: ✅ CERRADO
- **Qué hizo**: 10 subpaths con condiciones "types" + generador types:generate
- **Técnica**: buildSubpathTypeDeclarations + TYPED_SUBPATHS array
- **Tests**: smoke Eje IV (tsc --noEmit, dos consumidores TS independientes)
- **Changesets**: patch @zeus/protocol
- **Resultado**: 40/40 tests pass, gate OK

### 2.2 WP-U157 (dts-grafo-cercano)
- **Ejecutor**: Worker-U157
- **Fecha**: 2026-07-23
- **Rama**: wp/u157-dts-grafo-cercano
- **Status**: ✅ CERRADO
- **Qué hizo**: 9 paquetes (view-kit, game-engine, authority-kit, room-client-browser, http-contract, ui-kit, app-shell, player-mcp-kit, socket-server)
- **Técnica**: Mismo generador que U155, aplicado en paralelo
- **Tests**: smoke Eje IV, dos consumidores TS independientes
- **Changesets**: patch ×9
- **Residuales**: Fans protocol (acta-kit, parte-kit, embajador-kit, reparto-kit) + U156 deferidos
- **Resultado**: 127/127 tests pass, gate OK

### 2.3 WP-U158 (smoke-ts-registry)
- **Ejecutor**: Worker-U158
- **Fecha**: 2026-07-24
- **Rama**: wp/u158-smoke-ts-registry
- **Status**: ✅ CERRADO
- **Qué hizo**: Smoke nuevo (`smoke:ts-registry`) que instala desde registry real
- **Técnica**: `scripts/smoke-ts-registry.mjs` — probe registry → install → assert lock → tsc --noEmit
- **Consumidores probados**: @zeus/protocol + @zeus/rooms + @zeus/webrtc-signaling
- **CI**: job con skip limpio (⏳) si registry ausente
- **Resultado**: GREEN — 7 @zeus/* resueltos desde registry, tsc --noEmit exit 0

### 2.4 WP-U156 (deferido)
- **Estado**: RESIDUAL (NO EJECUTADO EN SPRINT 7)
- **Candidatos**: presets-sdk (subpaths ./horse, ./presets/contract, ./mcp/http-contract) + webrtc-signaling + ui-3d-kit
- **Razón diferimiento**: "No inflación de L"

### 2.5 Generados vs Manuales (U155-U158)
- **Generados**: protocol subpaths via buildSubpathTypeDeclarations (types:generate script)
- **Manuales**: NO hay typing manual — todo generado del JSDoc + re-exports
- **Smokers**: Dos consumidores TS independientes escriben `.ts` → tsc --noEmit
- **Registry smoke**: Consumidor limpio instala desde registry real, valida .d.ts presentes, compila

## 3. Consumidores de linea-kit (dossier actual)

| Paquete | Ruta | Versión | Tipado? | Publicable? | Status |
|---------|------|---------|---------|------------|--------|
| @zeus/linea-system | packages/mesh/linea-system | 0.1.1 | U157-Y (grafo cercano? NO) | P0 | ✅ |
| @zeus/force-system | packages/mesh/force-system | 0.1.1 | Tipos? NO | P0 | ✅ |
| @zeus/linea-editor | packages/mesh/linea-editor | 0.1.0 | Tipos? NO | P1 | ⏳ PAUSA |
| @zeus/editor-ui | packages/editor/editor-ui | — | Tipos? NO (private) | No | ✅ |
| @zeus/volumes-ops | packages/engine/volumes-ops | — | Tipos? NO (private) | No | ✅ |
| @zeus/ssb-system | packages/mesh/ssb-system | 0.1.1 | Tipos? NO | ? | ? |
| @zeus/webrtc-viewer | packages/mesh/webrtc-viewer | — | Tipos? NO (private) | No | ✅ |
| @zeus/feed-kit | packages/engine/feed-kit | — | Tipos? NO (private) | No | ✅ |

**Hallazgo crítico**: Ningún consumidor de linea-kit fue tipado en U155-U158 (excepto las 9 del grafo cercano en U157, pero linea-kit no está en esa lista).

## 4. Otros Paquetes sin Tipos (Dossier Extendido)

### 4.1 Kits BARE (protocol dependencies, no u155-u158)
- @zeus/acta-kit (protocol)
- @zeus/parte-kit (protocol)
- @zeus/embajador-kit (protocol)
- @zeus/reparto-kit (protocol, view-kit)

### 4.2 Librerías de Negocio sin Tipos
- @zeus/lifecycle-kit (XState)
- @zeus/story-board-schema (AJV)
- @zeus/firehose-core (lib pura)
- @zeus/test-utils (helpers)

### 4.3 MCPs sin Tipos (potencial P1)
- @zeus/linea-system (usa linea-kit, publicable P0)
- @zeus/force-system (usa linea-kit, publicable P0)
- @zeus/linea-editor (usa linea-kit, candidato P1, PAUSA)
- @zeus/linea-firehose (NO usa linea-kit, usa firehose-core)
- @zeus/solar-system (demo)
- @zeus/ssb-system (usa linea-kit)
- @zeus/console-monitor (exporta API mínima)
- @zeus/operator-bridge (lib pura)

## 5. Lane D Freeze U203→U204

### 5.1 Estado Carril D (plano de datos)
**Ruta en backlog**: packages/engine/volumes-ops + VOLUMES/* (DISK_01-04)

**Eslabon U203 (Driver FORCES)**:
- Status: ✅ CERRADO (2026-07-31, rama wp/u203-driver-forces)
- Implementación: volumes-ops/src/driver-forces.mjs
- Característica: RO-inmutable (H-01 §④)
- Criterio: idéntica no-op, distinta = error
- **Cierre del carril**: "**carril D CONGELADO aquí (freeze); siguiente eslabón U204 al reinicio**"

**Eslabon U204 (Driver FIREHOSE)**:
- Status: ⬜ PENDIENTE
- Definición: "es flujo: definir **unidad** (cursor/clave) antes de tocar transporte; unión, nunca sobrescritura"
- Criterio: import incremental idiopotente sobre los 8.388 del censo
- **Requisito previo**: U203 ✅ CERRADO
- **Siguiente**: U205 (Driver SSB)

### 5.2 Impacto Scope de Freeze
**Lo que SÍ puede cambiar (antes de U203→U204)**:
- U199-U202: Sellado manifiesto, resolver único, contrato import, driver LINEAS ✅ TODOS CERRADOS
- Tipado de dependencias ajeno a volumes (U155-U158)
- UIs y MCPs consumidores (siempre que no toquen path-drivers)

**Lo que NO puede cambiar (esperando U204)**:
- VOLUMES.json en disco (U199 sellado por hash)
- Lectura/escritura de FIREHOSE (U204 debe definir unidad)
- SSB export (U205 after U204)
- Sincronización (U207 futuro, after U206)

### 5.3 Riesgos de Merge U203→U204
1. **Unidad de FIREHOSE indefinida**: U204 debe definir cursor/clave ANTES de tocar transporte
2. **Falta de idempotencia**: import incremental debe no-op si ya presente
3. **Escritor legado**: jetstream-sync.mjs:119 escribe syncedAt (U204 riesgo citado)
4. **Validación tardía**: si driver de FIREHOSE no valida contra schema, colisión silenciosa

### 5.4 Precedentes Cerrados Pre-Freeze (P0)
- U199: C-3 + sellado-hash ✅ 2026-07-31
- U200: Resolver único ✅ 2026-07-31
- U201: Contrato import v1 ✅ 2026-07-31
- U202: Driver LINEAS ✅ 2026-07-31
- U203: Driver FORCES ✅ 2026-07-31

## 6. Aislabilidad de Tipado de linea-kit

### 6.1 Archivos Tocados (Campana Mínima)
```
packages/engine/linea-kit/
  package.json                  — agregar "types" en exports
  src/index.mjs                 — sin cambios runtime
  types/
    index.d.ts                  — generado (re-exports)
    curation.d.ts              — generado
    resolve.d.ts               — generado
    force-activation.d.ts      — generado
    validate.d.ts              — generado (node-only)
    loader.d.ts                — generado (node-only)
    tools/index.d.ts           — generado (node-only)
    starterkits/index.d.ts     — generado (node-only)
    viaje/index.d.ts           — generado (node-only)
  
Changesets/
  .changeset/wp-uXXX-linea-kit-types.md — patch @zeus/linea-kit
  
Tests/
  test/types-sync.test.mjs     — sync + exports CA
  test/subpath-types-smoke.test.mjs — smoke Eje IV (tsc --noEmit)
  test/fixtures/ts-linea-kit-smoke/
    consumer-a.ts              — consumidor A
    consumer-b.ts              — consumidor B
```

### 6.2 Dependencias Semánticas
- **linea-kit ← ninguna** (dependencies = ajv, yaml — no @zeus)
- **linea-kit → linea-system, force-system, linea-editor, editor-ui, volumes-ops, ssb-system, webrtc-viewer, feed-kit**

**Conclusión**: AISLABLE 100% — Tipado de linea-kit es ortogonal al carril D freeze.

### 6.3 Gates Aplicables
- `npm run gates` (linting, sin cambios)
- `npm run test -w @zeus/linea-kit` (tipos sync + exports)
- `npm run smoke:ts-registry` (consumidor limpio desde registry)

### 6.4 Alcance de Archivos
- **Generados**: types/*.d.ts (cero mano)
- **Modificados**: package.json (1 sección "types")
- **Nuevos tests**: types-sync.test.mjs, fixtures/ts-*
- **Changesets**: 1 patch
- **Sin cambios**: src/ (runtime intacto), schemas/ (JSON neutrales)

## 7. Consumidores sin Tipos (Candidatos H/M-LORE)

### Definiciones
- **H-LORE** = Consumidor humano (dramaturgo, editor)
- **M-LORE** = Consumidor máquina (MCP, sistema)

### Consumidores linea-kit que necesitan tipos

| Consumidor | Tipo | Uso | Tipado | Acción |
|-----------|------|-----|--------|--------|
| linea-system | MCP | loader, resolve | NO | Añadir tipos (U15X+1) |
| force-system | MCP | linea-kit loader | NO | Añadir tipos (U15X+2) |
| linea-editor | MCP | tools, loader | NO | Añadir tipos (U178, P1) |
| editor-ui | UI | loader, tools | NO | NO publicable — private |
| volumes-ops | lib | import driver | NO | NO publicable — private |
| ssb-system | MCP | linea-kit | NO | Añadir tipos (candidato) |

### Otros sin Tipos (no linea-kit pero dossier)
- @zeus/embajador-kit (protocol, peer-card)
- @zeus/parte-kit (protocol)
- @zeus/acta-kit (protocol)
- @zeus/reparto-kit (protocol, view-kit)
- @zeus/firehose-core (lib)
- @zeus/lifecycle-kit (XState)

## 8. Secuencia de Branch/Worktree/Publish (Propuesta)

### Fase 1: Tipos linea-kit (independiente)
```
git worktree add --detach ../wp-linea-kit-types
  → branches: wp/uXXX-linea-kit-types
  → commits: feat + types:generate + tests + changeset
  → tests: npm test -w @zeus/linea-kit ✅
  → gates: npm run gates ✅
  → review: PR → merge → main
  → publish: CI changesets ✅ (minor patch)
```

### Fase 2: Consumidores (paralelo)
```
git worktree add --detach ../wp-linea-system-types
git worktree add --detach ../wp-force-system-types
  → cada uno: exports + types condiciones + smoke Eje IV
  → tests: npm test -w @zeus/{linea,force}-system ✅
  → gates: npm run gates ✅
  → merges: independientes
  → publish: CI changesets ✅
```

### Fase 3: Registry Smoke
```
npm run smoke:ts-registry
  → install: @zeus/linea-kit + @zeus/linea-system + @zeus/force-system desde registry
  → compile: consumidor TypeScript externo
  → result: exit 0 ✅
```

### No hacer
- NO reabrir U178 (linea-editor, PAUSA, P1 separada)
- NO tocar Lane D carril (U203 locked, U204 esperando)
- NO mezclar con cambios de runtime

## 9. Publish Constraints (Actuales & Addendum)

### Allowlist Status
- linea-kit: class A (engine library) — publicable pipeline vigente
- linea-system, force-system: class C P0 — candidatos, GO publish condicionado D-42
- linea-editor: class C P1 — candidato, GO publish condicionado, publish-ready U178 ⏳

### Registry
- Target: https://npm.scriptorium.escrivivir.co
- Auth: basic-auth `_password` base64 (no JWT, per D-24)
- Semver: patch para tipos (non-breaking)
- Changesets: required, CI-driven

### Smoke Tests (Requisito C8)
- local: `npm test -w @zeus/linea-kit` ✅
- local: `npm run smoke:ts-registry` ✅
- CI: `.github/workflows/ci.yml` — job smoke-ts-registry

### Versioning Post-Publish
- linea-kit: 0.3.0 → 0.3.1 (patch, tipos agregados)
- linea-system, force-system: minor bump (new exports types)
- linea-editor: pendiente U178 GO

## Matriz Resumen — Paquetes & Tipado

| Paquete | Ruta | Versión | Publicable | Tipado | Falta Tipos | Acción |
|---------|------|---------|------------|--------|-------------|--------|
| linea-kit | engine/ | 0.3.0 | P0 sí | JSDoc ✓ | .d.ts exports | NUEVA CAMPAÑA |
| linea-system | mesh/ | 0.1.1 | P0 sí | NO | .d.ts exports | NUEVA CAMPAÑA |
| force-system | mesh/ | 0.1.1 | P0 sí | NO | .d.ts exports | NUEVA CAMPAÑA |
| linea-editor | mesh/ | 0.1.0 | P1 cand. | NO | .d.ts exports | U178 (P1, ⏳) |
| editor-ui | editor/ | — | NO privado | NO | N/A | No acción |
| volumes-ops | engine/ | — | NO privado | NO | N/A | No acción |
| ssb-system | mesh/ | 0.1.1 | ? | NO | .d.ts exports | Candidato P1 |
| embajador-kit | engine/ | — | NO privado | NO | N/A | No acción |
| firehose-core | engine/ | — | NO privado | NO | N/A | No acción |

---

**Investigación completada 2026-07-31**
