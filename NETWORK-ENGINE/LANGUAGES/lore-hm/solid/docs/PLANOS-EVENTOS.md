# Planos de eventos · Room/L2 vs Solid Notifications/L1

Dos planos **separados**. Correlación ≠ reenvío.

| plano | id | transporte típico | NO es |
| ----- | -- | ----------------- | ----- |
| Room | `room-l2` | canal bilateral H/M (peercard, leases, actividades de ceremonia) | notificación Solid |
| Solid Notifications | `solid-l1` | Solid Notifications / webhooks Pod (v3) | mensaje de room |

## Correlación permitida

Campos compartidos de enlace (no de identidad de plano):

- `activityId` (IRI de Activity)
- `traceId`
- `provenance` (PROV-O)

## Prohibiciones

- Reenviar un evento Room como si fuera Solid Notification (o al revés).
- Unificar buses en un solo stream sin discriminador de plano.
- Tratar ack de room como cumplimiento de subscription Solid.
