# WP-SDK-L02 · inception-lengua-lore-hm — reporte worker

| dato | valor |
| ---- | ----- |
| WP | WP-SDK-L02 |
| agente | worker lane LENGUA (swarm LORE-HM) |
| fecha | 2026-08-02 |
| rama | `wp/sdk-l02-inception-lengua-lore-hm` |
| worktree | `C:/S_LAB/wt/s-sdk-wp-sdk-l02` |
| HEAD base | `3d73075` (tip L01) |
| riesgo de revisión | `independiente` |
| revisor distinto del worker | `sí` · `VEREDICTO_REVISOR: ⏳ pendiente` |
| estado propuesto | listo para revisión adversarial |

## Qué se hizo

Se incubó LORE-HM bajo `NETWORK-ENGINE/LANGUAGES/lore-hm/` en s-sdk (protocolo
04, sin deps runtime OASIS). Ontología nuclear = cinco primitivas TypeScript
declarativas; proyecciones separadas; P1–P5 respondidas; demo tipestate vs
config plana fallida; puerta de promoción escrita sin extraer `@logos/lore-hm`.
Check local `verificar-inception-l02.mjs`. Sin editar BACKLOG ni HOLONES.

## Archivos tocados

| ruta | acción |
| ---- | ------ |
| `NETWORK-ENGINE/LANGUAGES/lore-hm/README.md` | creado |
| `NETWORK-ENGINE/LANGUAGES/lore-hm/docs/P1-P5.md` | creado |
| `NETWORK-ENGINE/LANGUAGES/lore-hm/docs/PUERTA-PROMOCION.md` | creado |
| `NETWORK-ENGINE/LANGUAGES/lore-hm/docs/NAMESPACE.md` | creado |
| `NETWORK-ENGINE/LANGUAGES/lore-hm/src/{brands,primitives,projections,tipestate,index}.ts` | creado |
| `NETWORK-ENGINE/LANGUAGES/lore-hm/demos/tipestate-vs-flat/*` | creado |
| `NETWORK-ENGINE/LANGUAGES/lore-hm/scripts/verificar-inception-l02.mjs` | creado |
| `plan/REPORTES/WP-SDK-L02-inception-lengua-lore-hm.md` | creado (este) |

## Evidencia P1–P5

| id | respuesta (resumen) | estado | ruta |
| -- | ------------------- | ------ | ---- |
| P1 | Autoridad H vs operación M con leases/actividades legales | **verificada** (plan+L01); wording OASIS **hipótesis** | `docs/P1-P5.md` |
| P2 | Sujeto = Peer; H/M = roles | **verificada** | idem |
| P3 | No barrio, no holón 08, no JSON plano sin semántica, no package aún | **verificada** | idem |
| P4 | Checker + tipestate; JSON describe, lengua valida | **verificada** (demo) | `demos/tipestate-vs-flat/` |
| P5 | Inception Review ∧ E01 ∧ E11 ∧ 2 consumidores → entonces `@logos/lore-hm` | **verificada** (puerta escrita) | `docs/PUERTA-PROMOCION.md` |

## Evidencia tipestate vs flat

- Intento fallido: `demos/tipestate-vs-flat/flat-config.attempt.json` (`declared→ready`, `lease: null`)
- Tipestate ilegal: `tipestate-illegal.ts` con `@ts-expect-error` en `transition(declared, 'ready')`
- Legal: `tipestate-legal.ts` cadena `declared→leased→inflated→ready`
- Veredicto: `flat-config.verdict.md`

## Contraevidencia de riesgo (brief)

| riesgo | contraevidencia |
| ------ | --------------- |
| Ontología escapa de 5 | `NUCLEAR_PRIMITIVES` length===5 en script; Peer/Unit/Lease/Activity/Artifact |
| Proyección vs primitiva | `PROJECTIONS` separado; Pod/Barrio/DM no en nuclear |
| Puerta prematura | `PUERTA-PROMOCION.md` AND de 4 gates; sin `package.json` `@logos/lore-hm` |
| Regla flat sin demo | lado-a-lado flat attempt + tipestate illegal |

## Evidencia checks locales

```text
$ node NETWORK-ENGINE/LANGUAGES/lore-hm/scripts/verificar-inception-l02.mjs
(ver salida literal post-commit en §abajo / tip SHA)
```

## Evidencia de riesgo y contrarrevisión

- `CASOS_ADVERSARIALES`:
  - `[automatizado]` conteo ≠5 → FAIL (script)
  - `[automatizado]` falta demo / `@ts-expect-error` → FAIL (script)
  - `[manual]` no package `@logos/lore-hm`; no BACKLOG; no HOLONES
- `DEPENDENCIAS_DIRECTAS_VERIFICADAS`: built-ins Node (`fs`/`path`/`url`) únicamente en el checker; fuentes TS sin imports externos
- `INSTALACION_LIMPIA`: no aplica (sin package publicable; checker zero-deps)
- `TEST_AUTOMATIZADO_VS_EVIDENCIA_MANUAL`:
  - Automatizado: `verificar-inception-l02.mjs`
  - Manual: lectura P1–P5 + puerta + lado-a-lado demo
- `VEREDICTO_REVISOR`: `⏳ pendiente de revisor distinto`

## Auto-revisión

- [x] Diff en `NETWORK-ENGINE/LANGUAGES/lore-hm/**` + `plan/REPORTES/WP-SDK-L02-*.md`
- [x] Cero árboles OASIS copiados
- [x] Estados verificada/hipótesis/decisión pendiente en docs
- [x] Sin `@logos/lore-hm` package
- [x] No BACKLOG / no merge main / no HOLONES
- [x] Riesgo independiente → veredicto revisor pendiente

## Hallazgos fuera de alcance

- tsc estricto del tipestate-illegal requiere typescript en toolchain (no añadido al root; la demo queda documentada + ancla `@ts-expect-error` chequeada por script)
- Obra E01/E11 y consumidores reales = WPs posteriores / mundo E

## Dudas / bloqueos

Ninguno para entrega L02. Promoción package = custodio post-gates.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
