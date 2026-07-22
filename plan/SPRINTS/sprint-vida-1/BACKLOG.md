# BACKLOG — sprint-vida-1

> Solo el orquestador del sprint escribe aquí (regla de oro 2). Workers: un WP =
> un chat = una rama `wp/v1-<id>-<slug>` (+ worktree si paralelo); reporte con
> plantilla del skill; NO editar este fichero.
> Estados: ⬜ pendiente · 🔶 brief emitido / en curso · ✅ aceptado.
> Padre: [DE-I19 v2](../../DECISIONES.md) · city cerrado
> ([sprint-game-city](../sprint-game-city/) — solo puntero).
> Decisiones: [DECISIONES.md](DECISIONES.md).

## Olas

**Ola V1-1 (GO-V2 · 2026-07-22 — SEMILLA §3+§4):** lote **cerrado**
**WP-M01 ✅** · **WP-M02 ✅**. Track PACK. Cero engine. Tip GL `84f9d79`
(merge FF M01→M02 rebase). Acta:
[ACTA-V1-1-M01-M02](../../REPORTES/ACTA-V1-1-aceptacion-M01-M02-2026-07-22.md).
Proyección: apply + sync-map post-lote (regla 17) en el mismo cierre.

## WPs

- ✅ **WP-M01 · Ciudadanos con misión** — SEMILLA §3 · track PACK · dep
  Z10 ✅ (grafo) · Z08 población · censo/cantera (verdad zona / barrio que
  decae). Origen/destino sobre grafo; random-walk = idle. **Sin tocar
  engine.** CA: ejes I/II + ceguera. Ficha: [WP-M01](WP-M01-misiones.md).
  Brief: [BRIEF-M01](../../REPORTES/BRIEF-WP-M01-misiones.md).
  Reporte: [WP-M01](../../REPORTES/WP-M01-misiones.md).
  Rama: `wp/v1-m01-misiones` · GL SHA `399b250` · tip lote `84f9d79`.

- ✅ **WP-M02 · Cronista** — SEMILLA §4 · track PACK · dep Z07 ✅
  story-board · CAMPANAS ✅ (announce suena). Actor rol `dj` lee
  `story-board.json` → re-emite actos como `announce` en plaza.
  **Contrato vinculante:** story-board = sustrato multi-agente (no
  decoración). CA: ejes I/II + ceguera. Ficha: [WP-M02](WP-M02-cronista.md).
  Brief: [BRIEF-M02](../../REPORTES/BRIEF-WP-M02-cronista.md).
  Reporte: [WP-M02](../../REPORTES/WP-M02-cronista.md).
  Rama: `wp/v1-m02-cronista` · GL SHA post-rebase `84f9d79`.

## Overview

| Id | Título | Track | Deps | Ejes | Estado |
|---|---|---|---|---|---|
| [M01](WP-M01-misiones.md) | Ciudadanos con misión (§3) | PACK | Z10·Z08·censo | I/II + ceguera | ✅ |
| [M02](WP-M02-cronista.md) | Cronista (§4) | PACK | Z07·CAMPANAS | I/II + ceguera | ✅ |

## Parked / fuera de este sprint

- SEMILLA §2 / §6 · trama-agua → cola DE-I19.
- **CIUDAD-REAL** → [sprint-ciudad-real](../sprint-ciudad-real/) **ACTIVO** (GO-C1 · R10).
- EMBAJADOR-ENTRADA → [sprint-embajador-entrada](../sprint-embajador-entrada/) **CERRADO** (R9.5).
- E_SDK / DE-I8 → veto. No reopen ✅ city.

## Reglas (además del skill)

1. Ceguera método/marco en entregables zeus/GL (DC-GC-ceguera-marca: marca OK).
2. Cero engine / `domain.mjs` / reducer.
3. No editar BACKLOG city ni fichas Z*/A*/E* de city.
4. Claim→acta/SHA en cierres. LOCAL-ONLY proyección hasta GO apply (lote V1-1 cerrado → apply).
