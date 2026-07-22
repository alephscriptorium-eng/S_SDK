# Acta · CR-1 CIUDAD-REAL cierre · 2026-07-22

| dato | valor |
| ---- | ----- |
| ola | **CR-1** (C01 ∥ C02 + C03) · arco completo |
| WPs | **C01 ✅** · **C02 ✅** · **C03 ✅** · C04 paralelo (tip zeus citado) |
| tip GL | `f388451f9aa7d1ffcd140d4c0b9460dc29bca71f` (`origin/main`) |
| tip zeus pin | `73cb0c22204017f45bddf7f0da348d5a2451ff05` (C02 `1df2fd2` + PR#8 C04 + PR#9 release) |
| tip S | ver commit gobierno de este acta |
| orden merge | OLA 1: C01 FF GL · C02 FF zeus · **C03 FF** GL (`19317c1..f388451`) |
| ∩ C01∩C02∩C03 | **∅** (C01/C03 = GL ciudad · C02 = zeus protocol/authority · exclusion-paths OK) |
| higiene | wt C03 removido · rama local `-d` · remota wp inexistente · C04 wt ya ausente |
| listo-R12 | **sí** — re-verif C03 + cierre CR-1 · **no** despachar C05 aquí |

## GATE PRE-MERGE (C03)

| check | resultado |
| ----- | --------- |
| CA C03 (I·II + ceguera δ12) | ✅ 57/57 · `EDIFICIOS_SMOKE_OK` · destino `edificios.mjs` · rechazo fuera catálogo |
| Ceguera δ12 + regla 14 | ✅ obra `packages/ciudad` `WP-*`=0 (excl. ceguera.test) · diff+log-p =0 |
| ∩ C01 / C02 | ✅ ∅ (solo mapping; probes C01 intactos · ACL C02 no tocado) |
| Z_SDK #5 / #6 | OPEN · **no cerrar** |
| E_SDK / force | no tocados |

## Runner (regla 16)

| repo | CI | Release/Docs |
| ---- | --- | ------------ |
| games-library C01 `19317c1` | [29886600585](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29886600585) ✅ | Docs no disparó (homólogo = CI verde) |
| games-library C03 `f388451` | [29888361565](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29888361565) ✅ | — |
| zeus-sdk C02 `1df2fd2` | CI cancelado concurrency ([29886602452](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29886602452)) | [29886602469](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29886602469) ✅ |
| zeus-sdk tip `73cb0c2` (PR#9 · pin) | [29887037469](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29887037469) ✅ | [29887037565](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29887037565) ✅ |

## Tips post-merge

| repo | tip | push |
| ---- | --- | ---- |
| games-library | `f388451` | `19317c1..f388451` main (no force) |
| zeus-sdk | pin S → `73cb0c2` | ya en `origin/main` (PR#9) |
| S_SDK | pins + BACKLOG C03 ✅ + reporte + sync-map + acta | este movimiento |

## Proyección (regla 17 · LOCAL-ONLY)

| id | mapa | apply |
| -- | ---- | ----- |
| C01 | LOCAL | **no** `gh issue create` |
| C02 | LOCAL · overlap Z_SDK #5 | citar #5 · **no cerrar** |
| C03 | LOCAL | **no** `gh issue create` |
| C04 | LOCAL | paralelo · tip en pin zeus |
| C05 | LOCAL | 🔶 · **sin despacho** hasta R12 |
| Z_SDK #5 / #6 | — | **OPEN · no cerrar** |

Mapa: `plan/SPRINTS/sprint-ciudad-real/.sync-map.json`.

## C04 paralelo (citado · fuera de CA CR-1)

PR#8 + PR#9 → zeus `main` @ `73cb0c2` durante/tras OLA 1. Checklist prep
R10.6 / reporte C04 viven en su propio ciclo. **No** se reabre aquí.

## Arco CR-1

```text
tick-cero (GO-C1) → C01 salud real↔mapa → C02 ACL direccional (#5 OPEN)
  → R11 → C03 edificios↔catálogo fleet → pin zeus 73cb0c2
  → listo-R12 (C05 🔶 sin despacho)
```

## Fuera de este acta

- **C05 no despachado** — aviso **listo-R12** (re-verif C03 + este cierre + gate C05)
- E_SDK · force-push · cierre #5/#6

## Nota vigía

**Listo R12** — CR-1 cerrado; C05 arranca solo tras R12 PASS (gate brief +
deps C04 + peercard room-bridge).
