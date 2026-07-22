# sprint-post-city-ops — **CERRADO / IDLE**

> # ██  sprint-post-city-ops · CERRADO · IDLE · 2026-07-22 (R19 PASS)  ██
>
> **Arco city cerrado.** PCO-1 (T1·S04) ✅ · PCO-2 (F5a·F5b·F5c) ✅.
> Acta: [ACTA-R19-cierre-arco-2026-07-22](REPORTES/ACTA-R19-cierre-arco-2026-07-22.md).
> F5: [ACTA-F5-cierre-2026-07-22](REPORTES/ACTA-F5-cierre-2026-07-22.md).
> Pins: zeus `d0d9de1` · GL `d178364`. S04-v2 **parked**. Z#4/#5/#6 **OPEN**.
> **NO despachar.** Orquestador: city-orq · v1.1.

## Partición V2

| carril city | sprint | territorio obra | estado |
|---|---|---|---|
| **webs** | [`sprint-webs-post-city/`](../sprint-webs-post-city/) | zeus/GL/S **docs** (sites) | **CERRADO / IDLE** |
| **ops** (este) | `sprint-post-city-ops/` | runtime/acta/skill + F5 publish/e2e/oasis-check | **CERRADO / IDLE** |

## Parámetros del mundo

| parámetro | valor |
|---|---|
| `MUNDO_RAIZ` | `C:\Users\aleph\SCRIPT_SDK` |
| `PLAN_DIR` | `plan\SPRINTS\sprint-post-city-ops\` |
| `ALCANCE_DIFF` | (histórico) F5a zeus/GL publish · F5b scratch+acta · F5c reporte — **veto** docs WW · bosque · E_SDK · cerrar Z#4/#5/#6 |
| `WORKTREE_BASE` | `.worktrees\` (scratch F5b no versionado) |
| `RAMA_WP` | `wp/pco-<id>-<slug>` |

## Olas

| ola | WPs | estado |
|---|---|---|
| PCO-1 | T1 · S04 | ✅ |
| PCO-2 | F5 (a·b·c) | ✅ · R19 PASS |

## Guardarraíles (post-cierre)

1. Carril **IDLE** · sin 🔶 vivos · sin despachos.
2. S04 ✅ intacto · S04-v2 parked.
3. Vetos: E_SDK · Z#4/#5/#6 citar-no-cerrar · ceguera r.1.
4. Próximo arco solo con GO nuevo del PO vía gate del vigía.

## Dónde está cada cosa

| fichero | rol |
|---|---|
| [BACKLOG.md](BACKLOG.md) | WPs · **CERRADO / IDLE**. Solo orquestador. |
| [DECISIONES.md](DECISIONES.md) | DC-PCO-* |
| [REPORTES/ACTA-R19-cierre-arco-2026-07-22.md](REPORTES/ACTA-R19-cierre-arco-2026-07-22.md) | Acta formal R19. |
| [REPORTES/ACTA-F5-cierre-2026-07-22.md](REPORTES/ACTA-F5-cierre-2026-07-22.md) | Acta obra F5. |
| [REPORTES/AVISO-R19.md](REPORTES/AVISO-R19.md) | Gate vigía · consumido PASS. |
| [REPORTES/NOTA-S04-v2-parked.md](REPORTES/NOTA-S04-v2-parked.md) | Parked post-F5. |
| [.sync-map.json](.sync-map.json) | Sync-map **final** regla 17. |
