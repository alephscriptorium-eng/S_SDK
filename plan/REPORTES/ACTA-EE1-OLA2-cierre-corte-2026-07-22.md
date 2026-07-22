# Acta · EE-1 ola 2 + cierre corte EMBAJADOR-ENTRADA · 2026-07-22

| dato | valor |
| ---- | ----- |
| ola | EE-1 ola 2 (f2 ∥ A5) + **cierre de corte** pre-R9 |
| WPs | **WP-E01-f2 ✅** · **WP-A5 ✅** (E02+f1+HOTFIX ya ✅) |
| tip zeus | `30bfc088176ec81e08e8217555b6c76cd13e8f06` (`origin/main`) |
| tip GL | `b54a2d2` (`origin/main` · fix CI post-A5) |
| tip S | ver commit gobierno de este acta |
| orden merge | **f2 FF** (`bd02d70..3ebfce3`) → **A5 rebase+squash** sobre tip post-f2 → FF (`3ebfce3..30bfc08`) · GL A5 FF (`84f9d79..d2f5780`) |
| ∩ A5∩f2 | **∅** (operator-ui vs protocol/authority/embajador-kit) |
| remediación pre-merge | scrub `WP-A5` en obra zeus+GL + squash (regla 14) — A5 partía de `aab6a68` pre-hotfix |
| higiene | worktrees podados · ramas locales `-d` · remotas wp inexistentes |
| listo-R9 | **sí** — aviso vigía R9 |

## GATE PRE-MERGE

| check | resultado |
| ----- | --------- |
| CA f2 (I·II + ceguera) | ✅ protocol TTL · authority · embajador · gates OK · `WP-E0`=0 |
| CA A5 (I·IV + ceguera) | ✅ puerta-smoke OK · federation 4/4 · gates OK post-rebase · `WP-A5` scrubbed |
| ∩ name-only | **∅** |
| orden | f2 FF → A5 rebase (base antigua) |
| types-sync tip | flake local Windows CRLF (contenido = gen; peer-card 5/5) |

## Runner (regla 16)

| repo | CI | Release/Docs |
| ---- | --- | --- |
| zeus-sdk `30bfc08` | [29883321033](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29883321033) ✅ | [29883320991](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29883320991) ✅ |
| games-library `b54a2d2` | [29883719212](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29883719212) ✅ | Docs tip A5 OK (homólogo) |

## Tips post-merge

| repo | tip | push |
| ---- | --- | ---- |
| zeus-sdk | `30bfc08` | `bd02d70..30bfc08` main (no force) |
| games-library | `b54a2d2` | `84f9d79..d2f5780` A5 + `d2f5780..b54a2d2` CI fix (no force) |
| S_SDK | pin submodules + BACKLOG ✅ + acta | este movimiento |

## Proyección (regla 17 · post-cierre corte)

| id | mapa | apply |
| -- | ---- | ----- |
| WP-E02 | → #23 (ya existía) | update umbrella |
| WP-E01-f1 / f2 / A5 | → #22 (umbrella) | update umbrella · sync-map sprint |
| E01-f3/f4 | parked #22 | **no** 🔶 · **no** cerrar #22 |
| Z_SDK #4/#5/#6 | — | **OPEN · no cerrar** |

Mapa: `plan/SPRINTS/sprint-embajador-entrada/.sync-map.json`.

## Fuera de este acta

- E01-f3 / f4 🔶 **no** · E_SDK · CIUDAD-REAL · reopen ✅
- Z_SDK #4/#5/#6 **no cerrados**
- Release wait: run-ids CI citados en gobierno S si disponibles al tip

## Nota vigía

**Listo R9** — corte EMBAJADOR-ENTRADA cerrado en tip; paraguas f3/f4 parked.
