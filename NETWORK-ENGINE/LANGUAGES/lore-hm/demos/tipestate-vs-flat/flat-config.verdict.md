# Veredicto · intento flat config

| criterio | resultado |
| -------- | --------- |
| ¿JSON Schema de `phase: string enum` acepta `ready` tras `declared`? | **sí** (falla la regla de lengua) |
| ¿Hay lease en la corrida? | **no** (`lease: null`) |
| ¿Tipestate LORE-HM acepta `transition(declared, 'ready')`? | **no** — error de tipos |
| ¿Config plana puede expresar “solo sucesor legal”? | **no** sin motor de estados externo (= otra lengua) |

**Conclusión:** ≥1 regla imposible con config plana, con intento fallido al
lado (`flat-config.attempt.json` vs `tipestate-illegal.ts`).
