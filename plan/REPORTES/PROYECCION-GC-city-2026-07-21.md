# PROYECCIÓN GitHub — sprint-game-city · 2026-07-21

| dato | valor |
| ---- | ----- |
| modo | **completa** en S_SDK (`--alcance todos`); **trazo gordo** en Z_SDK (1 issue panorámico) |
| dry-run | OK previo (14 WP parseados; ceguera OK) |
| opt-in | DC-15 activado (`PROYECCION_GITHUB=1` + `--habilitar-github`) — GO custodio |
| mapa | `plan/SPRINTS/sprint-game-city/.sync-map.json` (propio del sprint; no reusa I74) |
| push git | **NO** |

## Por qué este modo

- Dry-run: **14** issues finos (bajo umbral ~20) → proyección **completa** al tracker de gobierno (`alephscriptorium-eng/S_SDK`).
- En zeus (`alephscriptorium-eng/Z_SDK`): sin backlog markdown espejo → **1 issue panorámico** (qué aterriza en packs/libs) + enlace a S_SDK #1–#14; sin duplicar prosa del plan.

## Dry-run (resumen)

```
[proyectar] ceguera OK (14 WP validados contra el patrón del mundo).
[proyectar] export (DRY-RUN) · alcance=todos · 14 proyectado(s), 0 a cerrar
  · crear WP-Z01 → closed … WP-Z14 → closed
  · abiertos: Z03 Z04 Z05 Z06 Z07 Z11 Z12 Z13
[proyectar] OK.
```

Patrón de ceguera (solo env, **no** committeado): tokens de método/marco.
Marca `aleph` / `scriptorium` admisible (DC-GC-ceguera-marca) — no metidas como fuga.

## SCRIPT_SDK → `alephscriptorium-eng/S_SDK`

| WP | estado plan | issue | URL |
| -- | ----------- | ----- | --- |
| Z01 | ✅ | #1 closed | https://github.com/alephscriptorium-eng/S_SDK/issues/1 |
| Z02 | ✅ | #2 closed | https://github.com/alephscriptorium-eng/S_SDK/issues/2 |
| Z03 | ⬜ | #3 open | https://github.com/alephscriptorium-eng/S_SDK/issues/3 |
| Z04 | ⬜ | #4 open | https://github.com/alephscriptorium-eng/S_SDK/issues/4 |
| Z05 | ⬜ | #5 open | https://github.com/alephscriptorium-eng/S_SDK/issues/5 |
| Z06 | ⬜ | #6 open | https://github.com/alephscriptorium-eng/S_SDK/issues/6 |
| Z07 | ⬜ | #7 open | https://github.com/alephscriptorium-eng/S_SDK/issues/7 |
| Z08 | ✅ | #8 closed | https://github.com/alephscriptorium-eng/S_SDK/issues/8 |
| Z09 | ✅ | #9 closed | https://github.com/alephscriptorium-eng/S_SDK/issues/9 |
| Z10 | ✅ | #10 closed | https://github.com/alephscriptorium-eng/S_SDK/issues/10 |
| Z11 | ⬜ | #11 open | https://github.com/alephscriptorium-eng/S_SDK/issues/11 |
| Z12 | ⬜ | #12 open | https://github.com/alephscriptorium-eng/S_SDK/issues/12 |
| Z13 | ⬜ | #13 open | https://github.com/alephscriptorium-eng/S_SDK/issues/13 |
| Z14 | ✅ | #14 closed | https://github.com/alephscriptorium-eng/S_SDK/issues/14 |

Herramienta: `node_modules/@alephscript/skills-scriptorium/…/proyectar-backlog.mjs` export real.

## zeus-sdk → `alephscriptorium-eng/Z_SDK`

| tipo | issue | URL |
| ---- | ----- | --- |
| panorámica (trazo gordo) | #2 open | https://github.com/alephscriptorium-eng/Z_SDK/issues/2 |

Contenido: tabla de aterrizaje (packs mockdatas/startpack, `linea-kit/viaje`, mcp-launcher, lifecycle, …) + olas GC-1..3 + link a S_SDK. **No** 14 issues de prosa de plan.

## Limitaciones / pendiente

- No hay epic separado «sprint-game-city» en S_SDK: los 14 WP son el panorama (lista completa).
- Z_SDK: solo espejo panorámico; issues finos viven en S_SDK. Re-export idempotente vía sync-map del sprint.
- Ops del BACKLOG (H1 cache-browser, publish GL, re-smoke Z08, residual worktree Z01) **no** son issues de proyección.
- `CEGUERA_PATTERN` no se committea; npm `scrum:preview:city` documenta dry-run del sprint (patrón por env).
- **Sin push** de repos git.

## Remotes

- SCRIPT_SDK origin → `https://github.com/alephscriptorium-eng/S_SDK.git`
- zeus-sdk origin → `https://github.com/alephscriptorium-eng/Z_SDK.git`
