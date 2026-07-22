# BACKLOG — sprint-post-city-ops

> Solo el orquestador city escribe aquí (regla de oro 2). Workers: un WP =
> un chat = rama `wp/pco-<id>-<slug>` (+ worktree si paralelo); NO editar
> este fichero. Estados: ⬜ · 🔶 · ✅.
> Padre: GO PO · WP-F5 · 2026-07-22 · [DECISIONES](DECISIONES.md).
> Gates: [AVISO-R15-T1-S04](REPORTES/AVISO-R15-T1-S04.md) PASS consumido
> (T1 ✅ · S04 ✅). [AVISO-R17-city](REPORTES/AVISO-R17-city.md) consumido
> (F5a∥F5c∥F5b). F5 **✅ cerrado** · camino [AVISO-R19](REPORTES/AVISO-R19.md).
> Acta: [ACTA-F5-cierre-2026-07-22](REPORTES/ACTA-F5-cierre-2026-07-22.md).

## Ola PCO-1 (cerrada · T1 ✅ · S04 ✅)

| Id | Título | Repo / superficie | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|---|
| [T1](WP-T1-equipo-testing.md) | equipo de testing · acta de fricción | runtime zeus/GL + acta gobierno | R15-T1-S04 PASS | I·IV + ceguera | ✅ · merge `ff1cb66` · S `dbadefa` · [acta](REPORTES/ACTA-T1-FRICCION-2026-07-22.md) | LOCAL-ONLY |
| [S04](WP-S04-skill-embajador.md) | skill embajador (lado usuario zeus) | skill zeus + peercard/URLs | R15-T1-S04 PASS · **T1 ✅** | I·V + ceguera | ✅ · tip zeus `cbde42e` → pin F5 `d0d9de1` · [reporte](REPORTES/WP-S04-skill-embajador.md) · [acta](REPORTES/ACTA-S04-aceptacion-2026-07-22.md) | LOCAL-ONLY · cite skills #14 |

### Briefs PCO-1

- [BRIEF-T1](BRIEFS/BRIEF-WP-T1.md) · ✅
- [BRIEF-S04](BRIEFS/BRIEF-WP-S04.md) · ✅ · insumo = [acta T1](REPORTES/ACTA-T1-FRICCION-2026-07-22.md)

## Ola PCO-2 (GO PO · WP-F5 · **cerrada** · 2026-07-22)

> Paraguas [WP-F5](WP-F5.md) · ciudad instanciable + federación.
> F5a ✅ total · F5b ✅ · F5c ✅ · C1–C8:
> [CHECKLIST](REPORTES/CHECKLIST-F5-C1-C8-T1.md).

| Id | Título | Repo / superficie | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|---|
| [F5](WP-F5.md) | **paraguas** ciudad instanciable + federación | gobierno · sub-WPs a/b/c | R17-city PASS | — | ✅ · [acta](REPORTES/ACTA-F5-cierre-2026-07-22.md) · [AVISO-R19](REPORTES/AVISO-R19.md) | LOCAL-ONLY |
| [F5a](WP-F5a.md) | PUBLICAR lote mesh (+ skill/ embajador) | zeus + GL C8 | R17-city PASS | I·V + ceguera | ✅ · zeus `d0d9de1` · GL `d178364` · Publish **29934850683** · sello PO **B** · [reporte](REPORTES/WP-F5a-publish-mesh.md) | LOCAL-ONLY |
| [F5b](WP-F5b.md) | CA ESTRELLA e2e DOS CIUDADES registry puro | scratch A+B · acta | R17-city PASS · **F5a ✅** | I·IV + ceguera | ✅ · [acta](REPORTES/ACTA-F5b-dos-ciudades-2026-07-22.md) · G0–G6 🟢 | LOCAL-ONLY |
| [F5c](WP-F5c.md) | CHECK sidecar→pub oasis | reporte · protocolos PUB | R17-city PASS | V + ceguera | ✅ · protocolos 200 · sidecar `<pendiente>` · [reporte](REPORTES/WP-F5c-sidecar-pub-oasis.md) | LOCAL-ONLY |

### Briefs PCO-2

- [BRIEF-F5a](BRIEFS/BRIEF-WP-F5a.md) · ✅
- [BRIEF-F5b](BRIEFS/BRIEF-WP-F5b.md) · ✅
- [BRIEF-F5c](BRIEFS/BRIEF-WP-F5c.md) · ✅

### Avisos gate

- [AVISO-R15-T1-S04](REPORTES/AVISO-R15-T1-S04.md) · PASS consumido (PCO-1)
- [AVISO-R17-city](REPORTES/AVISO-R17-city.md) · consumido (PCO-2)
- [AVISO-F5a-GL-NPM-secrets](REPORTES/AVISO-F5a-GL-NPM-secrets.md) · **resuelto** (secrets + publish)
- [AVISO-R19](REPORTES/AVISO-R19.md) · **emitido** · cierre arco city

### Notas

- [NOTA-S04-REASIGNADO](REPORTES/NOTA-S04-REASIGNADO-bosque.md) — bosque (PCO-1)
- [NOTA-S04-v2-parked](REPORTES/NOTA-S04-v2-parked.md) — post-F5 · **sin reopen S04**
- [CHECKLIST-F5-C1-C8-T1](REPORTES/CHECKLIST-F5-C1-C8-T1.md) — **cerrada** (todas muertas/documentadas)
- Pins S: zeus `d0d9de1` · GL `d178364`

## Absorción / reasignación

| id | origen | destino | estado |
|---|---|---|---|
| **S04** | bosque B-3 · parked/re-asignable | **city** este sprint | **✅ aceptado** · tip zeus `d0d9de1` |
| **C1–C8 T1** | acta fricción | checklist cierre F5 | ✅ cerrada |
| **S04-v2** | follow-up post-F5 | parked (mapa «federar tu ciudad» + o-sdk `/PUB`) | ⬜ parked · sin reopen S04 |

## Proyección

| fase | política |
|---|---|
| ahora | **LOCAL-ONLY** (DC-PCO-proyeccion) |
| cierre | cite issues vivos (#14 hermano skills · Z_SDK #4/#5/#6) **sin** duplicar ni cerrar OPEN ajenos; sync-map post-apply |

## Parked / fuera

- `sprint-webs-post-city` WW-* — ∩ = ∅
- `sprint-skills-bosque` S03/S06/S07 — **no pisar**
- E_SDK / DE-I8 · reopen ✅ city/CR · cerrar Z_SDK #4/#5/#6
- **S04-v2** — post-F5 · ver nota
- Micro-sprint `sprint-f5-federacion` — **no abierto** (territorio F5 vive aquí · V2)

## Reglas (además del skill)

1. F5a: changesets + Release + `npm view` C8 · ciudad = clase pública semilla (DC-CR-kits-foss).
2. F5b: C8 puro · dos ciudades · claim→acta/SHA.
3. F5c: protocolos PUB · config custodio **fuera** · no bloquea a/b.
4. Claim→acta/SHA · ∩ diffs = ∅ · higiene al aceptar · ceguera r.1.
5. No editar BACKLOG (workers) · Z#4/#5/#6 OPEN · E_SDK veto.
