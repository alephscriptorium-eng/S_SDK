# Capa 7 — Validación DRY (ciudad ↔ índices clásicos)

> **Fecha**: 2026-07-20  
> **Contraste**: `.gitmodules`, `.github_V1/plugins/registry.json` + disco, `.github_V1/agents/`, `ARCHIVO/DEVOPS/{Tecnico,Funcional}.md`, `AGENTS.md`, ciudad `CIUDAD/`.  
> **Política**: este informe **documenta** gaps; no reescribe Funcional/Tecnico automáticamente (eso es commit consciente aparte).

---

## Resumen ejecutivo

| Severidad | # | Tema dominante |
|-----------|--:|----------------|
| HIGH | 3 | Conteo barrios 23→24; plugin `scriptorium-vps` huérfano de registry; pack path `.github` vs `.github_V1` |
| MED | 6+ | README-SCRIPTORIUM faltantes; bridges fantasma/omitidos en AGENTS/Funcional; `as-gym` sin plugin en Tecnico |
| LOW | varios | Cascada de rutas legacy en checklists |

La ciudad (`CIUDAD/`) está **más actualizada** que Tecnico/Funcional/AGENTS.md en varios ejes.

---

## Tests DRY (estilo @indice)

| Test | Resultado |
|------|-----------|
| `coherencia_funcional_tecnico` | ⚠️ Parcial: ambos usan `.github/` legacy; Funcional lista más bridges recientes que AGENTS.md |
| `dry_violation` | ⚠️ Duplicación path `.github` vs `.github_V1` (misma info, dos mundos) |
| `indice_desactualizado` | ❌ Tecnico §4.1 (23) y diagrama “23 repos”; omite `scriptorium-vps` |
| `archivo_huerfano` | ❌ `.github_V1/plugins/scriptorium-vps/` sin registry; bridge `plugin_ox_bothubsdk` citado en AGENTS.md **sin archivo** |
| `commit_sin_trazabilidad` | N/A (auditoría) |

---

## HIGH

### H1. Barrios: 23 documentados vs 24 reales

| Fuente | Conteo |
|--------|-------:|
| `.gitmodules` | **24** |
| Ciudad `01-BARRIOS/` | **24** fichas |
| `Tecnico.md` §1.1 / §4.1 | **23** |

**Falta en Tecnico tabla §4.1**: `scriptorium-vps` → path `ScriptoriumVps`.

**Fix propuesto** (no aplicado):
1. Cambiar títulos `(23)` → `(24)`.
2. Añadir fila `| scriptorium-vps | integration/beta/scriptorium | scriptorium-vps* | VPS |`.
3. Nota: `*` plugin en disco, registry pendiente.

### H2. Plugin `scriptorium-vps` en disco, no en registry

| Check | Estado |
|-------|--------|
| `.github_V1/plugins/scriptorium-vps/` | ✅ existe (8 agentes) |
| `registry.json` | ❌ ausente → **Decisión 7.1: SÍ registrar (sin secrets)** |
| Bridge `plugin_ox_scriptoriumvps` | ❌ ausente → crear en paso 5 |
| Ciudad | ✅ ficha barrio 24; vecino `BlockchainComPort` |

**Metáfora**: barrio **remoto/extramuros**, no anexo de Oasis; `BlockchainComPort` es la rampa de aterrizaje en codebase.

**Fix**: ver [`07.1-PLAN-SYNC-DRY.md`](07.1-PLAN-SYNC-DRY.md) pasos 2, 5, 6.
### H3. Ontología viva = `.github_V1`, índices apuntan a `.github/`

`Tecnico.md` y `Funcional.md` referencian masivamente `.github/plugins`, `.github/agents`, etc.  
En este checkout el pack agéntico operativo está en **`.github_V1/`** (`.github/agents` vacío de `*.agent.md`).

**Fix**: nota canónica al inicio de ambos índices:

> Pack agéntico activo: `.github_V1/` (espejo/legacy: `.github/`).

O migrar enlaces gradualmente.

---

## MED

### M1. README-SCRIPTORIUM faltantes

| Barrio | Estado |
|--------|--------|
| `VsCodeExtension` | ❌ → candidata a capa **Zigurat** (plan en curso) |
| `VibeCodingSuite` | ❌ |
| `UISDKThreejs` | ❌ |

### M2. Bridges: AGENTS.md vs disco

| | |
|--|--|
| Bridges en disco | **24** |
| Citados en `AGENTS.md` | **22** ids |

**En disco, ausentes de AGENTS.md**:
- `plugin_ox_consejoasesor`
- `plugin_ox_loresdk`
- `plugin_ox_vectormachine`

**En AGENTS.md, ausente en disco**:
- `plugin_ox_bothubsdk` (**fantasma**; sí existe `plugin_ox_bothubsdk`? → **NO** archivo bridge; plugin `bot-hub-sdk` sí tiene agente en plugins/)

### M3. Bridges: Funcional.md vs disco

**Ausentes en Funcional** (tabla bridges / capacidades):
- `plugin_ox_aaiaeditor`
- `plugin_ox_nodejsnotebooks`
- `plugin_ox_openasyncapieditor`

(Funcional sí documenta consejo / lore / vector en §plugins.)

### M4. Tecnico: `as-gym` sin plugin asociado

Tabla §4.1 marca plugin `—` para `as-gym`, pero registry liga **`aaia-editor`** → `AAIAGallery/as-core`.

### M5. Handoffs casing (capa 5)

Grafo: destinos `Ox` / `Indice` vs emisores `ox` / `indice` → infla in-degree. No rompe runtime VS Code necesariamente, pero ensucia el grafo ciudad.

### M6. Rutas legacy en handoffs de bridges

Muchos bridges apuntan a `.github/plugins/...` aunque el contenido vive en `.github_V1/plugins/...`.

---

## LOW / notas

- Funcional no menciona `ScriptoriumVps` / VPS ops.
- Tecnico checklists de “añadir plugin” asumen solo `.github/`.
- Ciudad ya registra discrepancias; esta capa 7 es la **lista de trabajo** para sincronizar índices clásicos.

---

## Matriz de acción sugerida (prioridad)

| Prio | Acción | Archivos |
|------|--------|----------|
| 1 | Actualizar §4.1 Tecnico 23→24 + fila ScriptoriumVps | `Tecnico.md` |
| 2 | **Registrar** `scriptorium-vps` sin secrets + vecindad Blockchain | `registry.json` / ciudad |
| 3 | Banner `.github_V1` canónico | `Tecnico.md`, `Funcional.md` |
| 4 | Sincronizar tablas bridges AGENTS + Funcional | `AGENTS.md`, `Funcional.md` |
| 5 | Bridge `plugin_ox_scriptoriumvps` + resolver `bothubsdk` | `.github_V1/agents/` |
| 6 | README-SCRIPTORIUM Vibe + UISDK; Zigurat ya absorbió VsCodeExtension | submódulos |
| 7 | Corregir plugin `as-gym` → aaia-editor en Tecnico | `Tecnico.md` |

→ Plan detallado por paso: [`07.1-PLAN-SYNC-DRY.md`](07.1-PLAN-SYNC-DRY.md)

---

## Relación con Zigurat (capa especial)

`VsCodeExtension` deja de tratarse solo como barrio #01: el plan Zigurat (en background) debe:
- reclasificarla como **teatro-orquestador** de la ciudad;
- cubrir el hueco README-SCRIPTORIUM con documentación de plantas/conexiones;
- enlazar demos `alephscript.demo.*`, agentes theatrical y MCP host.

→ Cuando llegue el plan: carpeta `CIUDAD/ZIGURAT/` (o `00-ZIGURAT/`) y ajuste de `_INDICE.md` barrios.

---

## Estado ciudad tras capa 7

| Artefacto | Rol |
|-----------|-----|
| Este archivo | Informe DRY |
| `01-BARRIOS/*` | Fuente path/runtime más fiable que Tecnico §4.1 |
| `02-LOCALES-Y-NAVES` | Fuente plugins (incluye hueco registry) |
| `GRAFO/handoffs.*` | Evidencia bridges/casing |
