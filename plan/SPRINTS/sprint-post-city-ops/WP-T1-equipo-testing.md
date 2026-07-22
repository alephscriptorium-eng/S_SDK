# WP-T1 — equipo de testing · acta de fricción

| dato | valor |
|---|---|
| estado | 🔶 brief emitido · **sin despacho** (R15-T1-S04) |
| track | OPS / runtime (zeus + GL) · acta gobierno |
| depende de | R15-T1-S04 PASS · C05 ✅ · kits FOSS en registry C8 |
| fuente | GO PO R15 · replan +2 · hito campana live / PRUEBA-DE-DOS |
| issue | LOCAL-ONLY |
| brief | [BRIEF-T1](BRIEFS/BRIEF-WP-T1.md) |
| entregable | **ACTA DE FRICCIÓN** → insumo S04 |

## Objetivo

Levantar **authority + operator-ui + actor MCP** con kits **DEL REGISTRY**
(C8 puro, no árbol `file:`). Ejercer flujo vivo:

1. entrada humana por la puerta
2. agente MCP (ciudadano-agente / peercard)
3. presencia + announce
4. **CA diferido C05** «campana suena» (operator-ui del humano)
5. misiones / partes de paso

Documentar fricción real (qué costó, qué confunde, qué falta) en acta bajo
este sprint. **Sin commits de obra** en zeus/GL salvo el acta en gobierno.

∥ webs: paths disjuntos — T1 = runtime/acta; WW-* = `docs/**`.

## CA (ejes I·IV + ceguera)

- [ ] Kits resueltos vía registry C8 (`npm.scriptorium.escrivivir.co`) —
      `npm view` citable; cero `file:` / árbol local como fuente de verdad.
- [ ] Flujo vivo ejecutado (humano + MCP + presencia/announce + campana
      diferida + misiones/partes) o gaps explícitos en el acta.
- [ ] **ACTA DE FRICCIÓN** en
      `plan/SPRINTS/sprint-post-city-ops/REPORTES/ACTA-T1-FRICCION-*.md`
      (único entregable commiteable de obra).
- [ ] Ceguera: tokens método/`WP-*` = 0 en cualquier scratch de producto
      que accidentalmente se versionara (preferí no versionar scratch).
- [ ] Z_SDK #4/#5/#6 citados OPEN — **no cerrar**. E_SDK veto.

## Fuera

- Commits de obra en zeus/GL (excepto si el orq autoriza hotfix mínimo —
  default: **prohibido**; solo acta).
- Editar `docs/**` webs (WW-*).
- Despachar S04 antes de acta ✅.
- Tocar `sprint-skills-bosque/**` · hermano skills-library · E_SDK.
