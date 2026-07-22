# WP-C01 — Salud real ↔ mapa (SEMILLA §2)

| dato | valor |
|---|---|
| estado | ✅ merge GL `19317c1` · OLA 1 |
| track | PACK (GL) + consumo tip zeus publicado |
| depende de | EE-1 ✅ · tick-cero canal real |
| fuente | [SEMILLA-GAMIFICACION §2](../sprint-game-city/SEMILLA-GAMIFICACION.md) |
| issue | LOCAL-ONLY |

## Objetivo

Cerrar el círculo censo↔servicios: salud real (CI / `npm view` / status)
alimenta estado de barrio; despertar = acción **read-only o idempotente**
acotada (smoke, view, status). Sin capability destructiva.

## CA (ejes I·IV + ceguera)

- [ ] Barrio refleja señal real verificable (al menos 1 smoke/`npm view`).
- [ ] Acciones default idempotentes; documentado qué exigiría capability.
- [ ] Ceguera: 0 `WP-[A-Z]{1,2}\d` en obra tocada.
- [ ] No toca ACL engine (C02) ni mapping §A4 (C03) salvo consumo.

## Fuera

Z05 4–6 · §6 · trama-agua · E_SDK · reopen city · Z_SDK #5 obra.
