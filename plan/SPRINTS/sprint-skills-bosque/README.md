# sprint-skills-bosque — B-3 parcial (S06 GO · S07 condicionado)

> **Estado:** B-1 ✅ · S05b ✅ (`71824d0`) · **S06 ✅** (`2743176` /
> tip `834f706`) · S07 🔶 condicionado (falta S03) · **S04 → city**.
> Orquestador: bosque-orq · Contrato convivencia multi-orq v1.1 (DE-I22).
> Obra: paquete `@alephscript/skills-scriptorium` (checkout hermano).

## Parámetros del mundo

| parámetro | valor |
|---|---|
| `MUNDO_RAIZ` | `C:\Users\aleph\S_SDK-skills-library` |
| `PLAN_DIR` | `plan\SPRINTS\sprint-skills-bosque\` (gobierno en S_SDK) |
| `ALCANCE_DIFF` | `C:\Users\aleph\S_SDK-skills-library\**` · `plan\SPRINTS\sprint-skills-bosque\**` — **veto** zeus · games-library · pins submodules · `plan/DECISIONES.md` raíz · BACKLOGs de otros sprints |
| `WORKTREE_BASE` | `C:\Users\aleph\S_SDK-skills-library\.worktrees\` |
| `RAMA_WP` | `wp/sb-<id>-<slug>` (sb = skills-bosque) |

## Alcance (olas)

| Ola | WPs | Nota |
|---|---|---|
| **B-1** método | S01 · S02 · S05 · S05b | ✅ cerrado (+ encoding) |
| **B-2** estacion-viva | S03 | dep C05 ✅ · sin BRIEF/obra aún |
| **B-3** mapa+broche | S06 · S07 | S06 ✅ · S07 condicionado · **S04 → city** |

## Guardarraíles (contrato v1.1)

1. Partición: bosque escribe SOLO este sprint en S_SDK + obra/higiene en el hermano skills-library.
2. V2: un commit de gobierno no mezcla sprints/carriles.
3. E2E: (a) registry limpio · (b) fixture tick-cero copiada. peercard/GAME_MCP con S03.
4. §8 higiene pre-despacho: sin huérfanos conocidos en territorio hermano.
5. REPORTES/BRIEFS viven **bajo este sprint** (§2ter) — no en `plan/REPORTES/` compartido.
6. S06 ∩ S03 = ∅ si S06 solo toca `docs/**` (o raíz) y S03 solo `skills/estacion-viva/**`.

## Dónde está cada cosa

| fichero | rol |
|---|---|
| [BACKLOG.md](BACKLOG.md) | WPs, olas, estados. Solo orquestador. |
| [DECISIONES.md](DECISIONES.md) | DC-SB-* del sprint. |
| [BRIEFS/](BRIEFS/) | Briefs (S06 GO · S07 nota condicionada). |
| [REPORTES/](REPORTES/) | Montaje, proyección, actas. |
| [.sync-map.json](.sync-map.json) | Proyección issues (post-apply). |

Proyección issues = opt-in PO · repo hermano · LOCAL markdown = fuente (regla 15).
