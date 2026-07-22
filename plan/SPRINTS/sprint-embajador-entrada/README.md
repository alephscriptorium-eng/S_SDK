# sprint-embajador-entrada — **CERRADO** (R9.5 formal)

> **Estado: CERRADO.** GO-E1 + ola 2 (f2∥A5) mergeados · release #7
> publicado · #23 CLOSED. Tips corte: zeus `30bfc08` · GL `b54a2d2` · S
> `95a04b7`. Acta formal:
> [ACTA-EE1-cierre-formal](../../REPORTES/ACTA-EE1-cierre-formal-2026-07-22.md).
> Paraguas f3/f4 parked (#22 OPEN). Z_SDK #4 OPEN. Siguiente:
> [sprint-ciudad-real](../sprint-ciudad-real/) (GO-C1 · R10).
>
> Norte CA: **un amigo entra con su peercard y arranca con
> `startpack-ciudad-v0.1.0` como base default** — cumplido en tip.

## Parámetros

| parámetro | valor |
|---|---|
| `MUNDO_RAIZ` | `C:\Users\aleph\SCRIPT_SDK` |
| `PLAN_DIR` | `plan\SPRINTS\sprint-embajador-entrada\` |
| `ALCANCE_DIFF` | zeus-sdk mesh/fed/protocol/signaling/kits (acotado por brief) + reportes de este sprint |
| `WORKTREE_BASE` | `HOLONES\01-mythos\zeus-sdk\.worktrees\` (obra tipica) |
| `RAMA_WP` | `wp/ee-<id>-<slug>` (ee = embajador-entrada) |

## Corte (✅ cerrado)

| Pieza | Qué | Overlap | Estado |
|---|---|---|---|
| **E02** | `ssbId` handshake + firma tarjeta | Z_SDK **#4** OPEN | ✅ |
| **E01 f1** | Kit embajador | #22 | ✅ |
| **E01 f2** | Peercard (TTL / ciclo) | firma → E02 / #4 | ✅ |
| **ARG §A5** | Puerta externos | Z17 + Z04-GL + webs | ✅ |

## Paraguas (NO 🔶)

| Pieza | Nota |
|---|---|
| E01 f3 niveles | Z_SDK #6 = guardarraíl; parked |
| E01 f4 visual | parked · no confundir con Z17 |

## Secuencia (documentada · sin despacho)

```text
E02 ──► E01-f2 ──► A5 (E02+f1 reales; no stubs)
 ╲
  E01-f1 (∥ E02 si paths no se pisan)
```

Paths A5 pineados: [BRIEF-A5](../../REPORTES/BRIEF-WP-A5-puerta.md) · DC-EE-A5-paths.
## Fuentes (lectura; city cerrado)

- [`../sprint-game-city/WP-E01-embajador.md`](../sprint-game-city/WP-E01-embajador.md) (fuente parked)
- [`../sprint-game-city/WP-E02-privacidad-federacion.md`](../sprint-game-city/WP-E02-privacidad-federacion.md)
- [`../sprint-game-city/SEMILLA-ARG.md`](../sprint-game-city/SEMILLA-ARG.md) §A5
- [DECISIONES.md](DECISIONES.md) · [BACKLOG.md](BACKLOG.md)
- Acta pavimentación: `plan/REPORTES/ACTA-OPS-GO4-embajador-pavement-2026-07-21.md`
- Umbrellas: S_SDK [#22](https://github.com/alephscriptorium-eng/S_SDK/issues/22) · [#23](https://github.com/alephscriptorium-eng/S_SDK/issues/23)

## Checklist R7 pre-despacho (para vigía)

Ver tabla en [BACKLOG.md](BACKLOG.md) §R7.
