# WP-F5 — ciudad instanciable + federación (paraguas)

| dato | valor |
|---|---|
| estado | 🔶 · **sin despacho** hasta gate **R17-city** PASS |
| track | OPS / publish · e2e federación · check oasis |
| depende de | T1 ✅ · S04 ✅ · gate [AVISO-R17-city](REPORTES/AVISO-R17-city.md) |
| fuente | GO PO · WP-F5 · 2026-07-22 |
| issue | LOCAL-ONLY |
| sub-WPs | [F5a](WP-F5a.md) · [F5b](WP-F5b.md) · [F5c](WP-F5c.md) |
| cierre | checklist [C1–C8 T1](REPORTES/CHECKLIST-F5-C1-C8-T1.md) (muertas o documentadas) |

## Objetivo (paraguas)

Hacer la **ciudad instanciable desde registry** y demostrar **federación
e2e de dos ciudades** en canal C8 puro. Sub-WPs:

| id | foco | bloquea a/b? |
|---|---|---|
| **F5a** | PUBLICAR lote mesh (+ embajador-kit `skill/` si cabe) | — |
| **F5b** | CA ESTRELLA e2e DOS CIUDADES registry puro | espera F5a publicado |
| **F5c** | CHECK sidecar→pub oasis (custodio) | **no** |

Guía clase: [DC-CR-kits-foss](../sprint-ciudad-real/DECISIONES.md#dc-cr-kits-foss--2026-07-22--cerrada-go-c1b)
— **ciudad = clase pública semilla** (kit/contrato de juego, no app
privada por defecto). Operator-ui: worker propone publish `dist/` vs
build-doc; **PO sella**.

## Post-F5 (parked · sin reopen S04)

Candidato **S04-v2** parked: mapa «federar tu ciudad» citando
`o-sdk.escrivivir.co/PUB` — ver [NOTA-S04-v2-parked](REPORTES/NOTA-S04-v2-parked.md).
**No** reabrir S04 ✅.

## Vetos (heredados)

- Z_SDK #4/#5/#6 — **citar, no cerrar**
- E_SDK — veto
- Ceguera regla 1 en obra producto
- **NO despachar** workers desde montaje / este stub
