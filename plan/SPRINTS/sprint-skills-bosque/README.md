# sprint-skills-bosque — **MONTAJE** (gate R13-bosque · sin despacho)

> **Estado: MONTAJE.** Esqueleto + briefs B-1 + higiene hermano.
> **SIN workers** hasta gate vigía **R13-bosque** PASS.
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
| **B-1** método | S01 swarm vNext · S02 vigilancia vNext · S05 site-web | briefs 🔶 · **sin despacho** hasta R13 |
| **B-2** estacion-viva | S03 | dep C05 ciudad-real · parked |
| **B-3** embajador+mapa+broche | S04 · S06 · S07 | S04 lado embajador re-asignable · parked |

## Guardarraíles (contrato v1.1)

1. Partición: bosque escribe SOLO este sprint en S_SDK + obra/higiene en el hermano skills-library.
2. V2: un commit de gobierno no mezcla sprints/carriles.
3. E2E hasta C05 ✅: solo (a) registry limpio · (b) fixture tick-cero **copiada** a scratch. No peercard/GAME_MCP aún.
4. §8 higiene pre-despacho: sin huérfanos conocidos en territorio hermano.
5. REPORTES/BRIEFS viven **bajo este sprint** (§2ter) — no en `plan/REPORTES/` compartido.

## Dónde está cada cosa

| fichero | rol |
|---|---|
| [BACKLOG.md](BACKLOG.md) | WPs, olas, estados. Solo orquestador. |
| [DECISIONES.md](DECISIONES.md) | DC-SB-* del sprint. |
| [BRIEFS/](BRIEFS/) | Briefs B-1 (S01/S02/S05). |
| [REPORTES/](REPORTES/) | Montaje, proyección, actas. |
| [.sync-map.json](.sync-map.json) | Proyección issues (post-apply). |

Proyección issues = opt-in PO · repo hermano · LOCAL markdown = fuente (regla 15).
