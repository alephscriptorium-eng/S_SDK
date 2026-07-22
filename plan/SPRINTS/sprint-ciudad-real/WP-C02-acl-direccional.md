# WP-C02 — ACL direccional / ownership (Z05 item 3)

| dato | valor |
|---|---|
| estado | ⬜ brief listo · **sin 🔶** hasta R10 |
| track | ENGINE (zeus) |
| depende de | shape C01 · dolor real ownership |
| fuente | [WP-Z05 item 3](../sprint-game-city/WP-Z05-engine-evoluciones.md) |
| overlap | [Z_SDK #5](https://github.com/alephscriptorium-eng/Z_SDK/issues/5) **OPEN** — citar; **no cerrar** |
| issue | LOCAL-ONLY |

## Objetivo

Ownership / ACL por gameobject (o peer direccional): default deny donde hay
poder real. El juego anota el límite; el engine lo resuelve (game-agnostic).

## CA (ejes I·II + ceguera)

- [ ] Default deny documentado + test rojo→verde.
- [ ] Nada destructivo sin capability explícita.
- [ ] Z_SDK #5 citado en reporte; issue permanece OPEN.
- [ ] Ceguera obra OK · no cierra #6.

## Fuera

Z05 items 4–6 · health probes C01 · mapping §A4 C03 · E_SDK.
