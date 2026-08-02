# Veredicto · intento flat config

| criterio | resultado |
| -------- | --------- |
| ¿JSON Schema de `phase: string enum` acepta `ready` tras `declared`? | **sí** (`acceptedByFlatSchema: true` — sin motor de estados) |
| ¿Hay lease en la corrida? | **no** (`lease: null`) |
| ¿Tipestate LORE-HM acepta `transition(declared, 'ready')`? | **no** — error de tipos (`@ts-expect-error`) **y** rechazo runtime (`reject-flat-illegal.mjs`) |
| ¿Config plana puede expresar “solo sucesor legal”? | **no** sin motor de estados externo (= otra lengua) |

**Conclusión:** ≥1 regla imposible con config plana. El intento flat queda
documentado; el rechazo tipestate es **mecanismo** (tabla de sucesores + script
rojo), no autodeclaración en markdown.
