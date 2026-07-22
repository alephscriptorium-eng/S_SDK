# Acta · Cierre formal EE-1 EMBAJADOR-ENTRADA · 2026-07-22 (regla 16 · R9.5)

| dato | valor |
| ---- | ----- |
| rol | custodio / gobierno + ops |
| sprint | [sprint-embajador-entrada](../SPRINTS/sprint-embajador-entrada/) → **CERRADO** |
| arco | E02 → f1 → HOTFIX-CEGUERA-EE1 → f2 ∥ A5 |
| higiene | **100%** (worktrees podados · ramas locales `-d` · sin force-push) |
| fuente vigía | handoff R9.5 |

## Runner verificado R9 (regla 16)

| repo | tip | runs |
|------|-----|------|
| Z (zeus-sdk) | `30bfc08` | CI [29883321033](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29883321033) ✅ · Release [29883320991](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29883320991) ✅ |
| GL (games-library) | `b54a2d2` | CI [29883719212](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29883719212) ✅ · Docs [29883322687](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29883322687) ✅ |
| S (S_SDK) | `95a04b7` | Docs [29883781009](https://github.com/alephscriptorium-eng/S_SDK/actions/runs/29883781009) ✅ |

## A1 · Release packages (post-corte · PR #7)

| dato | valor |
| ---- | ----- |
| PR | [Z_SDK #7](https://github.com/alephscriptorium-eng/Z_SDK/pull/7) **MERGED** (merge commit `6a6afab`) |
| CI tip release | [29884597865](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29884597865) ✅ |
| Release tip | [29884597859](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29884597859) ✅ |
| canal | `https://npm.scriptorium.escrivivir.co` (C8) |

### `npm view` (canal real · 2026-07-22T02:03Z)

| paquete | versión |
| ------- | ------- |
| `@zeus/protocol` | **0.3.0** |
| `@zeus/authority-kit` | **0.3.0** |
| `@zeus/webrtc-signaling` | **0.3.0** |
| `@zeus/game-engine` | **0.1.2** |
| `@zeus/ui-3d-kit` | **0.1.2** |
| `@zeus/view-kit` | **0.1.3** |
| `@zeus/volumes-ops` | **0.2.2** |
| `@zeus/operator-bridge` | **0.1.1** |

Nota: `@zeus/embajador-kit` permanece `"private": true` en tip (no published). Seat + peercard viven en `@zeus/protocol@0.3.0` (export `./peer-card-seat`).

## WPs del corte (✅)

| WP | tip / nota |
| -- | ---------- |
| E02 | `25a57a1` · umbrella **#23** → **CLOSED** (R9.5) · Z_SDK **#4 OPEN** |
| E01-f1 | kit embajador (LOCAL→#22) |
| HOTFIX-CEGUERA-EE1 | `bd02d70` |
| E01-f2 | `3ebfce3` peercard TTL |
| A5 | `30bfc08` / GL `b54a2d2` puerta → startpack-ciudad-v0.1.0 |

## Proyección / parked

| id | estado |
| -- | ------ |
| S_SDK **#23** | **CLOSED** (este cierre) |
| S_SDK **#22** | **OPEN** (E01 f3/f4 parked · sin reopen) |
| Z_SDK **#4** / **#5** / **#6** | **OPEN** (citar; no cerrar) |

## A5 · Nota ops (sin remedio)

GL (`Z_SDK-games-library`) **sin** secrets `NPM_USERNAME` / `NPM_PASSWORD`. Sembrar solo cuando se quiera `publish_npm` de startpacks — **decisión futura**, no bloquea este cierre ni tick-cero (consume canal zeus ya publicado).

## Fuera de alcance (NO-GO)

E_SDK / DE-I8 · reopen ✅ city · force-push · 🔶 f3/f4 · cerrar Z_SDK #4/#5/#6.

## Siguiente

Cola DE-I19 ítem 3 → **CIUDAD-REAL** (GO-C1) · sprint
[`sprint-ciudad-real/`](../SPRINTS/sprint-ciudad-real/) · gate vigía **R10**.
