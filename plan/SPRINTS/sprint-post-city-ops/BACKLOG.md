# BACKLOG — sprint-post-city-ops

> Solo el orquestador city escribe aquí (regla de oro 2). Workers: un WP =
> un chat = rama `wp/pco-<id>-<slug>` (+ worktree si paralelo); NO editar
> este fichero. Estados: ⬜ · 🔶 · ✅.
> Padre: GO PO R15 · +2 WPs · 2026-07-22 · [DECISIONES](DECISIONES.md).
> Gate: [AVISO-R15-T1-S04](REPORTES/AVISO-R15-T1-S04.md) — PASS consumido
> (re-check higiene al despachar S04; **sin gate nuevo**). T1 ✅ · S04 en obra.

## Ola PCO-1 (GO PO · 2026-07-22 — T1 ✅ · S04 despachable)

> T1 ∥ webs (paths disjuntos). S04 tras acta T1. Cierre futuro = GO-5/GO-6.

| Id | Título | Repo / superficie | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|---|
| [T1](WP-T1-equipo-testing.md) | equipo de testing · acta de fricción | runtime zeus/GL + acta gobierno | R15-T1-S04 PASS | I·IV + ceguera | ✅ · merge `ff1cb66` · S `dbadefa` · [acta](REPORTES/ACTA-T1-FRICCION-2026-07-22.md) | LOCAL-ONLY |
| [S04](WP-S04-skill-embajador.md) | skill embajador (lado usuario zeus) | skill zeus + peercard/URLs | R15-T1-S04 PASS · **T1 ✅** | I·V + ceguera | 🔶 **listo revisión** · zeus `3c9387b` · [reporte](REPORTES/WP-S04-skill-embajador.md) | LOCAL-ONLY · cite skills #14 |

### Briefs

- [BRIEF-T1](BRIEFS/BRIEF-WP-T1.md) · ✅
- [BRIEF-S04](BRIEFS/BRIEF-WP-S04.md) · despachado · insumo = [acta T1](REPORTES/ACTA-T1-FRICCION-2026-07-22.md)

### Aviso gate

- [AVISO-R15-T1-S04](REPORTES/AVISO-R15-T1-S04.md)

### Nota bosque (S04 re-asignado)

- [NOTA-S04-REASIGNADO](REPORTES/NOTA-S04-REASIGNADO-bosque.md) — **no** tocamos
  `sprint-skills-bosque/BACKLOG` (regla oro 2); bosque-orq aplica la línea.

## Absorción / reasignación

| id | origen | destino | estado |
|---|---|---|---|
| **S04** | bosque B-3 · parked/re-asignable | **city** este sprint | **re-asignado** · nota encolada · sin despacho |

## Proyección

| fase | política |
|---|---|
| ahora | **LOCAL-ONLY** (DC-PCO-proyeccion) |
| cierre | cite issues vivos (#14 hermano skills · Z_SDK #4/#5/#6) **sin** duplicar ni cerrar OPEN ajenos; sync-map post-apply |

## Parked / fuera

- `sprint-webs-post-city` WW-* (docs) — paralelo tras R15-city; ∩ = ∅
- `sprint-skills-bosque` S03/S06/S07 — **no pisar**
- E_SDK / DE-I8 · reopen ✅ city/CR · cerrar Z_SDK #4/#5/#6
- PRUEBA-DE-DOS cola v3: **T1 es el vehículo** del acta de fricción (campana live)

## Reglas (además del skill)

1. T1: kits **registry C8** solamente · flujo vivo · acta = único commit de entrega.
2. S04: ceguera regla 1 en repo producto · URLs estables anti-deprecated (DRY semver).
3. Claim→acta/SHA · ∩ diffs = ∅ · higiene al aceptar.
4. No editar BACKLOG (workers) · no push tip gobierno desde worker · **NO despachar** aquí.
