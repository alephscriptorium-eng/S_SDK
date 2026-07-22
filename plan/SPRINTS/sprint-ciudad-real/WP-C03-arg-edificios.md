# WP-C03 — Edificios ↔ paquetes (SEMILLA-ARG §A4)

| dato | valor |
|---|---|
| estado | ✅ merge GL `f388451` · CR-1 cierre · listo-R12 |
| track | PACK (GL) |
| depende de | C01 shape · catálogo Z06 ✅ |
| fuente | [SEMILLA-ARG §A4](../sprint-game-city/SEMILLA-ARG.md) |
| issue | LOCAL-ONLY |

## Objetivo

Mapear edificios ↔ submódulos/paquetes; gentes = tools de catálogo Z06.
Invariante: **solo ids de catálogo** (no inventar superficie).

## CA (ejes I·II + ceguera)

- [x] Mapping edificio→id catálogo verificable en test.
- [x] Rechazo de id fuera de catálogo.
- [x] Ceguera obra OK · no toca ACL C02 ni probes C01.

## Fuera

§A5 (ya ✅ A5) · §A6 · Z05 4–6 · E_SDK · reopen city.
