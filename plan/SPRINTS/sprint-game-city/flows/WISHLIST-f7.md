# Wishlist zeus←node-red (WP-Z08 f7) — alimenta Z05 / Z09

> **No implementar aquí.** Solo documentación de carencias → wishlist, cero forks.
> Fuente: ficha [WP-Z08](../WP-Z08-nodered-visor-ciudad.md) fase 7.

## Ítems

| # | Ítem | Destino | Notas |
|---|------|---------|-------|
| 1 | Republicar nodos `contrib-alephscript-core` + `dashboard-2-alephscript-rooms` sobre SDK `^1.5.0` | Z09 / Verdaccio | Hoy pins `^0.2.0` en este pack; miniclon apunta 0.3.x |
| 2 | Documentar `catalog:servers` + envelope `@zeus/protocol` para consumidores externos | Z05 / docs zeus | Contrato ya usado por Mano/Ciudadano; falta doc canónica exportable |
| 3 | Token real por room (ownership) | Z05 item 3 | Hoy `dev-secret` global; ownership por room desbloquea multi-tenant |
| 4 | Opcional `@zeus/nodered-kit` (subflow ciudadano + plantillas empaquetadas) | Z09 / kit | Justificado tras f5–f6: subflow censo + lote población |
| 5 | Escala 169 plenos + snapshots | Z05 items 1–2 | `GAME_STATE_DELTA` + suscripción por zona; dolor de techo f6 = señal esperada |
| 6 | Switch `serverUrl` → mini-clon / VPS | Z09 | Constelación ya parametriza `ZEUS_SCRIPTORIUM_URL` |

## Fuera de wishlist (no-fork)

- No clonar ni parchear `node-red-contrib-*` dentro de S_SDK.
- Carencias → fila arriba o issue; no `file:` overrides locales salvo tick custodio.
