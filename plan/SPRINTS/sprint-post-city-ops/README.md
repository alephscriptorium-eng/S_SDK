# sprint-post-city-ops — PCO-1 ✅ · **PCO-2 F5 montado** (sin despacho)

> **Estado:** PCO-1 (T1·S04) **cerrada**. PCO-2 **WP-F5** montado · 🔶
> emitidos · [AVISO-R17-city](REPORTES/AVISO-R17-city.md). Tick PO
> 2026-07-22. **NO despachar** F5a/F5b/F5c hasta gate vigía **R17-city**
> PASS. F5b además **parked** hasta F5a ✅. F5c **no bloquea** a/b.
> Orquestador: city-orq · Contrato convivencia multi-orq v1.1 (DE-I22).

## Partición V2

| carril city | sprint | territorio obra | gate |
|---|---|---|---|
| **webs** | [`sprint-webs-post-city/`](../sprint-webs-post-city/) | zeus/GL/S **docs** (sites) | R15-city (consumido) |
| **ops** (este) | `sprint-post-city-ops/` | runtime/acta/skill + **F5** publish/e2e/oasis-check | **R17-city** (F5) |

Territorio F5 vive **aquí** (no micro-sprint `sprint-f5-federacion`) —
un commit V2 por tick gobierno F5.

## Parámetros del mundo

| parámetro | valor |
|---|---|
| `MUNDO_RAIZ` | `C:\Users\aleph\SCRIPT_SDK` |
| `PLAN_DIR` | `plan\SPRINTS\sprint-post-city-ops\` |
| `ALCANCE_DIFF` | F5a: zeus publish lote mesh (+ embajador skill/ opcional) · F5b: scratch + acta · F5c: solo reporte — **veto** `docs/**` webs · bosque · E_SDK · cerrar Z#4/#5/#6 · config custodio |
| `WORKTREE_BASE` | `.worktrees\` del repo dominante (F5a); F5b/F5c preferí scratch |
| `RAMA_WP` | `wp/pco-<id>-<slug>` |

## Olas

| ola | WPs | estado |
|---|---|---|
| PCO-1 | T1 · S04 | ✅ |
| PCO-2 | **F5** (a∥c · b parked) | 🔶 · sin despacho |

## Guardarraíles

1. Partición V2: ops ≠ webs; no tocar obra docs WW-*.
2. F5a = C8 publish real (changesets + `npm view`) — ciudad = clase pública semilla (DC-CR-kits-foss).
3. F5b = C8 puro e2e dos ciudades — parked hasta F5a ✅.
4. F5c = protocolos PUB · config custodio **fuera** · no bloquea a/b.
5. Vetos: E_SDK · Z#4/#5/#6 citar-no-cerrar · ceguera r.1 · claim→acta/SHA.
6. S04 ✅ intacto · S04-v2 parked post-F5.
7. REPORTES/BRIEFS viven **bajo este sprint**.

## Dónde está cada cosa

| fichero | rol |
|---|---|
| [BACKLOG.md](BACKLOG.md) | WPs, olas, 🔶. Solo orquestador. |
| [DECISIONES.md](DECISIONES.md) | DC-PCO-* (incl. F5-apertura · F5-oasis · S04-v2). |
| [WP-F5](WP-F5.md) · [F5a](WP-F5a.md) · [F5b](WP-F5b.md) · [F5c](WP-F5c.md) | Paraguas + stubs. |
| [BRIEFS/](BRIEFS/) | Briefs definitivos F5 (sin despacho). |
| [REPORTES/AVISO-R17-city.md](REPORTES/AVISO-R17-city.md) | Pedido gate vigía F5. |
| [REPORTES/CHECKLIST-F5-C1-C8-T1.md](REPORTES/CHECKLIST-F5-C1-C8-T1.md) | Absorción fricción T1. |
| [REPORTES/NOTA-S04-v2-parked.md](REPORTES/NOTA-S04-v2-parked.md) | Post-F5 parked. |
| [.sync-map.json](.sync-map.json) | LOCAL-ONLY hasta post-apply. |
