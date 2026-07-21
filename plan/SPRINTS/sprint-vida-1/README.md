# sprint-vida-1 — SEMILLA §3 misiones + §4 cronista

> Sprint hijo post–`sprint-game-city` (C04 cerrado). Protocolo
> `swarm-orquestacion` (patrón city). Objetivo: ciudadanos con misión sobre
> grafo Z10 + cronista que re-emite story-board en plaza. **Coste bajo, cero
> engine.** City permanece cerrado e intocado (solo cola/puntero).

## Parámetros del mundo

| parámetro | valor |
|---|---|
| `MUNDO_RAIZ` | `C:\Users\aleph\SCRIPT_SDK` |
| `PLAN_DIR` | `plan\SPRINTS\sprint-vida-1\` |
| `ALCANCE_DIFF` | `HOLONES\01-mythos\games-library\**` (PACK) · `plan\SPRINTS\sprint-vida-1\**` · reportes — **sin** `packages/engine` / domain reducer |
| `WORKTREE_BASE` | `.worktrees\` del repo donde ejecute cada WP (games-library) |
| `RAMA_WP` | `wp/v1-<id>-<slug>` (prefijo `v1-` = vida-1) |

## Aislamiento

1. **No toca BACKLOG de city** ni reabre ✅.
2. **No toca engine** (dominio / reducer / linea-kit core).
3. Fuente SEMILLA: [`../sprint-game-city/SEMILLA-GAMIFICACION.md`](../sprint-game-city/SEMILLA-GAMIFICACION.md) §3 / §4 (lectura; no enmienda city).
4. Cola padre: [DE-I19 v2](../../DECISIONES.md).

## Dónde está cada cosa

| fichero | rol |
|---|---|
| [BACKLOG.md](BACKLOG.md) | Operable: WPs, estados, ejes. Solo orquestador. |
| [DECISIONES.md](DECISIONES.md) | Decisiones del sprint (DC-V1-*). |
| [WP-M01-misiones.md](WP-M01-misiones.md) | Ficha §3. |
| [WP-M02-cronista.md](WP-M02-cronista.md) | Ficha §4. |

Proyección issues = **LOCAL-ONLY** hasta cierre de lote; apply + sync-map
post-apply (regla 17) después. No `gh issue create` ahora.
