# WP-Z11 — linea-editor: autoría de líneas como servidor MCP ofertado por horse

| dato | valor |
|---|---|
| estado | ✅ aceptado GC-4 (deps Z06·Z04·Z03 ✅) |
| track / prio | ENGINE (mesh server) / 3 · **ola GC-4** |
| depende de | Z06 ✅ (launcher) · Z04 ✅ (rabbit = cliente e2e) · Z03 ✅ (room) · hermano de Z10 (comparte `linea-kit`; Z10 asienta modelo de camino y salda `linea:*`) |
| referencia a portar | `NovelistEditor` (aleph, `aleph-mcp`): patrón de interfaz agéntica — CRUD por tools MCP + resources con `ResourceTemplate` y URIs propias + prompts con plantillas + "tool que persiste y delega export en script versionado". **Solo el concepto** (regla 2): es boceto experimental, árbol plano sin noción de línea, transmedia sin código, dep `file:` tgz de `mcp-core-sdk` (lista negra aleph) |
| base zeus | `@zeus/linea-kit` `/tools` (`crearLinea`, `segmentar`, `conectarSatelite`, `crearCotas`, `segmentarForce`) + `/loader` `/validate` · `createStandardMcpServer` (presets-sdk) · `approval-gate` (`mcpApprovalGateLine`/`resolveMcpApprovalToken`, patrón `cache_wikitext` de linea-system) · horse: `PresetHorseProxy` + `resolvePresetOffer`/`broadcastPresetOffer` (presets-sdk `src\horse\`) + `horse-client` (view-kit) · contrato `TransmediaEvent`/`transmedia.json` (zeus `plan\DATOS.md` §2) · `CURATION_STATUSES` |
| deuda que toca | refs `linea:*` no montadas (`mountedLineaIds`) — precondición de integridad referencial; la salda Z10 (entregable 5), Z11 la consume |

## Objetivo

Dar a zeus la superficie de **autoría** de líneas que hoy no existe: `linea-system` solo
lee (+ `cache_wikitext`); las tools de mutación de `linea-kit` son CLI sin cara agéntica.
El linea-editor es un servidor MCP de **mutación gateada** que envuelve `linea-kit/tools`
(cargar / manipular / exportar líneas) y se **oferta por horse** en la room, de modo que
cualquier peer del juego (rabbits de Z04, agentes del launcher de Z06) pueda editar
líneas por `tools/call` con evidencia y gate. Export a transmedia como productor de
`TransmediaEvents` → `story-board.json` (consumible por Z07).

## Entregables

1. **Server `linea-editor`** (candidato `packages\mesh\linea-editor`; decisión de
   convivencia con `linea-system` por eje III: sibling que comparte `/loader`+`/validate`,
   jamás duplica resolución). Tools de mutación gateadas que **envuelven** — no
   reimplementan — `linea-kit/tools`; toda escritura con approval-gate (patrón
   `cache_wikitext`).
2. **Oferta horse:** preset curado `linea-editor` + `broadcastPresetOffer` en la room;
   registro en el catálogo de servers y en el mcp-launcher (Z06) para levantarlo a
   demanda.
3. **Export transmedia:** tool que emite `TransmediaEvents` desde una línea (cadena
   `raw→triaged→canon` = `CURATION_STATUSES`) y compone `story-board.json` validable —
   el productor que le faltaba a la capa lectura (Z07). Por horse viajan **referencias**
   (`linea://…`, `preset://…`), nunca corpus.
4. **Saneamiento semántico aplicado:** sus tools usan el vocabulario acordado en la
   micro-acción 1 (campaña-de-cache vs recorrido) — sin heredar la ambigüedad «viaje».

## Criterios de aceptación

- [ ] **Slice e2e (primero y bloqueante):** un rabbit (cadena Z04: presencia → RNFP
      `active` → horse) ejecuta `tools/call` de UNA tool de edición gateada; el token
      `approve` queda evidenciado; la mutación aterriza en el volumen y **valida contra
      los schemas del kit sin tocarlos**.
- [ ] **Eje IV (contrato):** segundo cliente independiente del mismo contrato — el CLI
      `zeus-linea-kit` o editor-ui ejercita la misma operación; programado como gate,
      no feature tardía.
- [ ] **Eje I (consumidor real):** la tool de export produce un `story-board.json` desde
      una línea real (starterkit U81 vale) que pasa `validate-story-board.mjs`.
- [ ] **Horse sin bytes:** inspección del payload JSON-RPC de export → solo URIs/refs
      (SPEC-horse-blobs-v0); medida con `grep -c`/`grep -q`, no `grep | head`.
- [ ] **Eje II/III (envolver, no duplicar):** grep por operación de mutación → una sola
      definición (en `linea-kit/tools`); el server solo orquesta.
- [ ] **Eje V:** los gates de mutación son visibles y auditables (se esconde la capa de
      escritura, no el gate).
- [ ] **Regla de los dos mundos + ceguera:** el paquete no nombra novela / NovelistEditor
      / ciudad / marco; árbol e historial reachable a 0 (reglas 13-14 del skill).

## Riesgos y guardas (van al BRIEF)

1. **Colisión «viaje»** — `linea-system` ya usa «viaje» = campaña de fetch de cache
   (`propose-viaje`/`execute-viaje`); Z10 lo usa como camino en grafo. Precondición:
   micro-acción 1 (glosario) resuelta ANTES de nombrar tools.
2. **Solape con Z10** — delimitación dura: Z10 = modelo/cómputo de caminos (lib pura,
   lectura); Z11 = autoría/mutación + export (server). Dos WPs tocando `linea-kit` sin
   esta frontera violan eje II.
3. **Scope creep** — cargador+manipulador+exportador+agéntico+transmedia cruza engine,
   mesh, presets y games-library. Este WP entrega el **slice** y el export mínimo; el
   resto (cronista, misiones) son candidatos GC-4 (semilla §3-§4).
4. **Deuda `linea:*`** — sin `mountedLineaIds`, los `pairs_with linea:*` caen a
   `pending` y el editor produce refs colgantes: coordinar con Z10-e5.

## Notas

- NovelistEditor queda como referencia citada e intacta (patrón WP-Z10 con wiki-racer).
  Su evidencia de estado (boceto, dep lista negra) alimenta la línea de retroalimentación
  a aleph — ver MICRO-ACCIONES.md §3.
