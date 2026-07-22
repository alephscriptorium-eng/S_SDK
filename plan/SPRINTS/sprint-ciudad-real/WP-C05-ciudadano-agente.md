# WP-C05 — ciudadano-agente (un MCP = un actor con peercard)

| dato | valor |
|---|---|
| estado | ✅ aceptado · R13-city CADENA VERDE |
| track | PACK (GL) + KIT (zeus player-mcp) |
| depende de | C04 ✅ · CR-1 (C01/C03 ✅) |
| fuente | regla 6 city · E02 / peer-card-seat · checklist C04 v2/v3 |
| issue | [#31](https://github.com/alephscriptorium-eng/S_SDK/issues/31) CLOSED |
| brief | [BRIEF-WP-C05](../../REPORTES/BRIEF-WP-C05-ciudadano-agente.md) |
| acta | [ACTA-C05](../../REPORTES/ACTA-C05-CIUDAD-REAL-cierre-2026-07-22.md) |
| tips | zeus `2aec4cb` · GL `20c095c` (hotfix CI) |

## Objetivo

Agente MCP entra por la misma puerta que el humano: peercard firmada en
bootstrap; presencia/announce suenan campana en operator-ui.

## CA (ejes I·IV + regla 6 + ceguera)

- [x] Peercard (peer-card-seat) en bootstrap room-bridge del actor MCP.
- [x] Wiring ciudad → player-mcp-kit intacto / verificado (reporte v2).
- [x] Respuesta explícita v2/v3 en `WP-C05-ciudadano-agente.md`.
- [x] Ceguera obra OK · no toca C01/C02/C03/C04 paths ajenos.

## Fuera

Z05 4–6 · §6 · trama-agua · E_SDK · reopen ✅ · PRUEBA-DE-DOS (R14).
