# Acta δ10 · Cierre sprint-game-city — 2026-07-21

| dato | valor |
| ---- | ----- |
| rol | gobierno orquestador (C04 · cierre real) |
| regla | método v0.5 · **regla 16** (run-id VERDE CI + Release/homólogo por repo tocado) |
| sprint | **sprint-game-city CERRADO** |
| tip S_SDK (cierre) | ver §Tips tras commit de esta acta |
| tip Z_SDK | `1086392` (`1086392d67d6398b43ccf5379062713b3c0dd486`) |
| tip GL | `3288510` (`32885103bd66b0855d971872a5997fa6aba59c70`) |
| reporte | [CIERRE-sprint-game-city-2026-07-21.md](CIERRE-sprint-game-city-2026-07-21.md) |
| BACKLOG | banner **CERRADO** en `plan/SPRINTS/sprint-game-city/BACKLOG.md` |

## 1. Arco cerrado (sin reopen)

| tramo | estado | evidencia |
| ----- | ------ | --------- |
| GC-1 .. GC-5 | cerradas | BACKLOG §Olas · Z01–Z17 (Z05 items 3–6 parked) |
| ARG-1 (A01–A03) | cerrada | #18/#19/#20 CLOSED · SEMILLA-ARG §A4–§A6 parked |
| HOTFIX-GATES-2 | ✅ | [ACTA-HOTFIX-GATES-2](ACTA-HOTFIX-GATES-2-2026-07-21.md) |
| HOTFIX-GATES-3 | ✅ | [ACTA-HOTFIX-GATES-3](ACTA-HOTFIX-GATES-3-2026-07-21.md) |
| HOTFIX-ARG-1 | ✅ | [ACTA-HOTFIX-ARG-1](ACTA-HOTFIX-ARG-1-2026-07-21.md) |
| GO-5 webs | ✅ | [ACTA-GO5](ACTA-GO5-webs-release-2026-07-21.md) |
| GO-6 webs | ✅ | [ACTA-GO6](ACTA-GO6-webs-refresh-HOTFIX-ARG-1-2026-07-21.md) |
| CAMPANAS-city | ✅ | zeus `1086392` · S_SDK #25 CLOSED · [WP-CAMPANAS-city](WP-CAMPANAS-city.md) |
| I75 / E03 tubería | ✅ | #21/#24 CLOSED · tip gov `6a5fdd0` / merge página `e28439d` |
| C03 quietud | ✅ | tip `8f5436c` · Z_SDK #2 regenerada · D1 defer · [ACTA-OPS-C03](ACTA-OPS-C03-quietud-2026-07-21.md) |

## 2. Tabla tip SHA ↔ run-ids VERDES (regla 16)

### Tips de cierre del arco (canónicos)

| repo | tip SHA | CI (o homólogo) | Release (o homólogo) | nota |
| ---- | ------- | --------------- | -------------------- | ---- |
| **Z_SDK** | `1086392` | [29869646271](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29869646271) **success** | [29869646289](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29869646289) **success** | CAMPANAS |
| **GL** | `3288510` | [29862352062](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29862352062) **success** | Docs [29865824398](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29865824398) **success** | *Release startpack* sin run verde en tip (histórico failure; no disparado en ARG tip) — homólogo Docs |
| **S_SDK** | tip post-cierre C04 | Docs (dispatch C04) | Docs (mismo workflow — único pipeline activo) | sin workflow CI/Release; homólogo = Docs |

### Hitos runner del arco (actas citadas)

| hito | tip | CI | Release / Docs |
| ---- | --- | -- | -------------- |
| HOTFIX-GATES-3 | Z `48e2062` | [29857964265](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29857964265) | Rel [29857967650](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29857967650) |
| GO-5 Docs ×3 | Z `48e2062` · GL `21a6592` · S `087d81d` | — | Docs Z [29858825757](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29858825757) · GL [29858827677](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29858827677) · S [29858829917](https://github.com/alephscriptorium-eng/S_SDK/actions/runs/29858829917) |
| HOTFIX-ARG-1 | Z `fe75269` | [29865037586](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29865037586) | Rel [29865037568](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29865037568) |
| GO-6 Docs ×3 | Z `fe75269` · GL `3288510` · S `d7a422c` | — | Docs Z [29865822370](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29865822370) · GL [29865824398](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29865824398) · S [29866044815](https://github.com/alephscriptorium-eng/S_SDK/actions/runs/29866044815) |
| E03 merge página | S `e28439d` | — | Docs [29869108546](https://github.com/alephscriptorium-eng/S_SDK/actions/runs/29869108546) |
| ARG-1 GL A03 | GL `3288510` | [29862352062](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29862352062) | (Docs GO-6 arriba) |
| ARG-1 GL A02 | GL `2b14d36` | [29860506751](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29860506751) | — |
| ARG-1 GL A01/loop | GL `21a6592` | [29852765006](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29852765006) | Docs GO-5 |

### Docs refresh final (C04) — rellenar tras dispatch

| repo | Docs run-id | headSha | conclusion |
| ---- | ----------- | ------- | ---------- |
| Z_SDK | `<pendiente dispatch>` | `1086392` | — |
| Z_SDK-games-library | `<pendiente dispatch>` | `3288510` | — |
| S_SDK | `<pendiente dispatch>` | tip C04 | — |

## 3. Proyección issues (foto)

| tracker | CLOSED (obra sprint) | OPEN parked (no cerrar en C04) |
| ------- | -------------------- | ------------------------------ |
| S_SDK | #1–#4, #6–#21, #24, #25 | **#5** Z05 items 3–6 · **#22** E01 embajador · **#23** E02 privacidad |
| Z_SDK | panorámica **#2** (regenerada; se actualiza en C04) | **#4/#5/#6** overlap pack embajador (citar, no cerrar) |

## 4. Parked sin GO post-cierre

- sprint **EMBAJADOR** — S_SDK #22 (fases) + #23
- horizonte **E_SDK** (campanas-juntura; tick DE-I8) — **no** abrir
- motor **#5** (Z05 items 3–6)
- SEMILLA §2/§6 (+ §3–§4 parked)
- trama-agua

## 5. Checklist higiene (regla 16 + v0.5)

```text
[x] worktrees huérfanos → solo tip (C03)
[x] issues obra sprint → CLOSED (#25/#24/#21 + Z*)
[x] parked embajador #22/#23 → OPEN (honrado)
[x] run-id verde Z_SDK tip 1086392 → CI+Release citados
[x] run-id verde GL tip 3288510 → CI + Docs (homólogo Release)
[ ] Docs ×3 C04 → tras dispatch (tabla §2)
[x] sync-map post-apply → sin IDs especulativos
[x] sin abrir embajador / sin DE-I8
```

## 6. NO hechos

- No abrir embajador / E01–E02
- No tick DE-I8 / no E_SDK
- No force-push
- No reopen WPs ✅
