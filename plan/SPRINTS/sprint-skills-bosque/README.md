# sprint-skills-bosque — **CERRADO**

> **Estado:** **CARRIL BOSQUE CERRADO** · 2026-07-22.
> B-1 ✅ · B-2 S03 ✅ · B-3 S06+S07 ✅ (`v0.5.0`) · residual R-1+R-2a+publish
> **`0.5.1`** ✅ · tip hermano `b51da57` · S04 → city.
> Orquestador: bosque-orq · Contrato convivencia multi-orq v1.1 (DE-I22).
> Obra: paquete `@alephscript/skills-scriptorium` (checkout hermano).
> Acta: [REPORTES/ACTA-FINAL-0.5.1.md](REPORTES/ACTA-FINAL-0.5.1.md).

## Parámetros del mundo

| parámetro | valor |
|---|---|
| `MUNDO_RAIZ` | `C:\Users\aleph\S_SDK-skills-library` |
| `PLAN_DIR` | `plan\SPRINTS\sprint-skills-bosque\` (gobierno en S_SDK) |
| `ALCANCE_DIFF` | `C:\Users\aleph\S_SDK-skills-library\**` · `plan\SPRINTS\sprint-skills-bosque\**` — **veto** zeus · games-library · pins submodules · `plan/DECISIONES.md` raíz · BACKLOGs de otros sprints |
| `WORKTREE_BASE` | `C:\Users\aleph\S_SDK-skills-library\.worktrees\` |
| `RAMA_WP` | `wp/sb-<id>-<slug>` (sb = skills-bosque) |

## Alcance (olas) — todas ✅

| Ola | WPs | Nota |
|---|---|---|
| **B-1** método | S01 · S02 · S05 · S05b | ✅ cerrado |
| **B-2** estacion-viva | S03 | ✅ |
| **B-3** mapa+broche | S06 · S07 | ✅ `v0.5.0` · **S04 → city** |
| residual | R-1 · R-2a · P051 | ✅ `v0.5.1` · carril cerrado |

## Guardarraíles (contrato v1.1)

1. Partición: bosque escribe SOLO este sprint en S_SDK + obra/higiene en el hermano skills-library.
2. V2: un commit de gobierno no mezcla sprints/carriles.
3. E2E: (a) registry limpio · (b) fixture tick-cero copiada.
4. §8 higiene pre-despacho: sin huérfanos conocidos en territorio hermano.
5. REPORTES/BRIEFS viven **bajo este sprint** (§2ter) — no en `plan/REPORTES/` compartido.

## Dónde está cada cosa

| fichero | rol |
|---|---|
| [BACKLOG.md](BACKLOG.md) | WPs, olas, estados. Solo orquestador. **CERRADO.** |
| [DECISIONES.md](DECISIONES.md) | DC-SB-* del sprint. |
| [BRIEFS/](BRIEFS/) | Briefs históricos. |
| [REPORTES/](REPORTES/) | Montaje, proyección, actas · [ACTA-FINAL-0.5.1](REPORTES/ACTA-FINAL-0.5.1.md). |
| [.sync-map.json](.sync-map.json) | Proyección issues (post-apply). |

Proyección issues = opt-in PO · repo hermano · LOCAL markdown = fuente (regla 15).
