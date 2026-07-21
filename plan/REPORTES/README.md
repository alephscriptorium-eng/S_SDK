# REPORTES — actas y briefs del holón 07

**Plantilla canónica de acta:** skill `swarm-orquestacion`
`reference/plantilla-reporte.md` (`S_SDK-skills-library` @ `019a90b` /
`@alephscript/skills-scriptorium@0.1.0`).

Puntero del ensayo (no canónico): `TEST-SWARM/plan/REPORTES/PLANTILLA.md`.

Plantilla de brief: skill `reference/roles/BRIEF.md` (puntero ensayo:
`TEST-SWARM/plan/roles/BRIEF.md`).

## Convención de nombres

| Tipo | Patrón | Quién escribe |
| --- | --- | --- |
| Brief (lanzamiento) | `BRIEF-WP-<id>-<slug>.md` | **orquestador** (en main, al marcar 🔶) |
| Acta / reporte | `WP-<id>-<slug>.md` | **worker** (en la rama del WP) |

Convención elegida 2026-07-19: los briefs viven **aquí** (`plan/REPORTES/`),
no en `plan/briefs/` — un solo directorio de entrega del ciclo.

Evidencia literal siempre; `⏳ sin verificar` existe; inventar observaciones,
no.

## Gates (checklist obligatorio — HOTFIX-GATES-3)

Si el WP toca el submódulo **zeus-sdk** (`packages/` / `scripts/`):

- [ ] `npm run gates` en zeus-sdk → `gates: OK` (salida literal en el reporte)
- [ ] No desactivar reglas del gate; excepciones solo en `scripts/gates/exceptions.mjs` con razón (D-8 / PRACTICAS §5)
- [ ] Tras push: CI/Release Actions verde (anotar `run_id` + SHA)
