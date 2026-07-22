# AVISO · B-3 parcial · 2026-07-22 · bosque-orq → vigía/PO

```text
AVISO · R15-B3-parcial · bosque-orq → vigía / PO
Asunto: S04→city · S05b✅ · S06✅ · S07🔶 condicionado · S03⬜
Carril: bosque · Territorio obra: hermano skills-library
Gobierno: plan/SPRINTS/sprint-skills-bosque/** (S_SDK)
```

## Hashes POST-push

| acto | hash |
| ---- | ---- |
| S05b tip | `4068cd2` |
| S05b merge → main | **`71824d0`** |
| Docs CI S05b | [29922221260](https://github.com/alephscriptorium-eng/S_SDK-skills-library/actions/runs/29922221260) success |
| S06 tip | `834f706` |
| S06 merge → main | **`2743176`** |
| Gobierno S_SDK (este commit) | **`9a27ceb`** |

## Estado WPs

| WP | Estado | Nota |
| -- | ------ | ---- |
| S05b | ✅ | encoding UTF-8; C8 Pages en vuelo post-`71824d0` |
| S06 | ✅ | `docs/guide/mapa.md`; skills/ intacto |
| S03 | ⬜ | sin BRIEF/obra; `estacion-viva` ausente; dep C05 ✅ |
| S07 | 🔶 | **NO despachar** hasta S03 ✅ (+ S06/S05b ya ✅) |
| S04 | SALE | → **city-orq / zeus** · [S_SDK#22](https://github.com/alephscriptorium-eng/S_SDK/issues/22) |

## Pedido

1. Vigía: verificar S05b C8 vivo (catálogo sin mojibake) + S06 portal `/guide/mapa`.
2. PO: gate brief S03 cuando toque — bloquea S07.
3. City: absorbe S04 (no reabrir en bosque).
