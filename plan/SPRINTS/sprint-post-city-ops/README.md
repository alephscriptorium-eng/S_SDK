# sprint-post-city-ops — **PREP R15-T1/S04** (sin despacho)

> **Estado: montado · 🔶 emitidos · AVISO-R15-T1-S04.** Tick PO 2026-07-22
> (replan R15 · +2 WPs). **NO despachar** T1 ni S04 hasta gate vigía
> propio **R15-T1-S04** PASS (protocolo R7/R10). S04 además **parked**
> hasta T1 ✅ (acta de fricción = insumo).
> Orquestador: city-orq · Contrato convivencia multi-orq v1.1 (DE-I22).

## Partición V2 (elegida · documentada)

| carril city | sprint | territorio obra | gate |
|---|---|---|---|
| **webs** | [`sprint-webs-post-city/`](../sprint-webs-post-city/) | zeus/GL/S **docs** (sites) | **R15-city** (ya AVISO) |
| **ops** (este) | `sprint-post-city-ops/` | runtime zeus/GL + acta gobierno + skill usuario zeus | **R15-T1-S04** |

**Por qué no vivir bajo webs-post-city:** T1 no es «web» (runtime/acta,
paths disjuntos de `docs/**`). **Por qué no PREP en ciudad-real:** CR-1/C05
ya ✅ / listo-R14; abrir micro-sprint evita reabrir ola cerrada y mantiene
V2 (un sprint = un foco). Paralelo pleno con WW-* tras gates respectivos
(∩ paths tentativos = ∅).

## Parámetros del mundo

| parámetro | valor |
|---|---|
| `MUNDO_RAIZ` | `C:\Users\aleph\SCRIPT_SDK` |
| `PLAN_DIR` | `plan\SPRINTS\sprint-post-city-ops\` |
| `ALCANCE_DIFF` | T1: runtime/acta bajo este sprint (+ scratch efímero; **sin commits de obra** salvo acta) · S04: skill usuario zeus (peercard + mapa URLs) + reporte — **veto** `docs/**` webs · `sprint-skills-bosque/**` · hermano skills-library · E_SDK · cerrar Z_SDK #4/#5/#6 |
| `WORKTREE_BASE` | `.worktrees\` del repo dominante (S04); T1 preferí scratch sin rama de obra |
| `RAMA_WP` | `wp/pco-<id>-<slug>` (pco = post-city-ops) |

## Ola PCO-1 (documentada · sin despacho)

| WP | Tema | Deps gate |
|---|---|---|
| **T1** | equipo de testing · acta de fricción | R15-T1-S04 PASS |
| **S04** | skill embajador (re-asignado del bosque) | R15-T1-S04 PASS · **T1 ✅** (acta) |

## Guardarraíles

1. Partición V2: ops ≠ webs; no tocar `sprint-webs-post-city/BRIEFS` ni obra docs.
2. T1 = C8 puro (kits **DEL REGISTRY** · `npm.scriptorium.escrivivir.co`) — no árbol `file:`.
3. T1 **sin commits de obra** salvo el acta de fricción en gobierno.
4. Bosque BACKLOG: **no editar** (regla oro 2) — nota encolada en
   [NOTA-S04-REASIGNADO](REPORTES/NOTA-S04-REASIGNADO-bosque.md).
5. Vetos: E_SDK/DE-I8 · Z_SDK #4/#5/#6 citar-no-cerrar · claim→acta/SHA.
6. REPORTES/BRIEFS viven **bajo este sprint**.

## Dónde está cada cosa

| fichero | rol |
|---|---|
| [BACKLOG.md](BACKLOG.md) | WPs, olas, 🔶. Solo orquestador. |
| [DECISIONES.md](DECISIONES.md) | DC-PCO-* (partición, S04 reasignado, proyección). |
| [WP-T1](WP-T1-equipo-testing.md) · [WP-S04](WP-S04-skill-embajador.md) | Fichas stub. |
| [BRIEFS/](BRIEFS/) | Briefs definitivos (sin despacho). |
| [REPORTES/AVISO-R15-T1-S04.md](REPORTES/AVISO-R15-T1-S04.md) | Pedido gate vigía propio. |
| [REPORTES/NOTA-S04-REASIGNADO-bosque.md](REPORTES/NOTA-S04-REASIGNADO-bosque.md) | Mensaje a bosque-orq. |
| [.sync-map.json](.sync-map.json) | Vacío hasta post-apply. |
