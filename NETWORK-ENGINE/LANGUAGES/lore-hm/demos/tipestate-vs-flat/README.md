# Demo · tipestate vs config plana (WP-SDK-L02)

## Regla imposible en config plana

**Unit no puede alcanzar `ready` sin haber pasado por `leased` → `inflated`.**

Un JSON Schema / config plana tipa `"phase": "ready"` como string válido
aunque la corrida nunca tuvo lease. La gramática tipestate hace esa transición
**irrepresentable** en tipos.

## Lado a lado

| artefacto | qué demuestra |
| --------- | ------------- |
| [`flat-config.attempt.json`](flat-config.attempt.json) | Intento fallido: schema-plano aceptaría `declared → ready` |
| [`flat-config.verdict.md`](flat-config.verdict.md) | Por qué el flat falla la regla de lengua |
| [`tipestate-legal.ts`](tipestate-legal.ts) | Cadena legal con phantom states |
| [`tipestate-illegal.ts`](tipestate-illegal.ts) | Transición ilegal marcada `@ts-expect-error` |

## Conclusión

El JSON describe una corrida; la lengua decide si es legal. Config plana no
puede imponer tipestate; tipestate TypeScript sí (en compile-time).
