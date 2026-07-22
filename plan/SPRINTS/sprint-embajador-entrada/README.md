# sprint-embajador-entrada — **ABIERTO** (GO-E1 · 🔶 emitidos)

> **Estado: ABIERTO · corte de entrada 🔶.** GO-E1 (2026-07-22).
> Workers **aún NO despachados** — gate siguiente = **vigía R7** pre-despacho.
>
> Norte CA: **un amigo entra con su peercard y arranca con
> `startpack-ciudad-v0.1.0` como base default.**
>
> Dolor: peers federados (Z04 viva) esperan peercard + handshake + puerta.

## Parámetros

| parámetro | valor |
|---|---|
| `MUNDO_RAIZ` | `C:\Users\aleph\SCRIPT_SDK` |
| `PLAN_DIR` | `plan\SPRINTS\sprint-embajador-entrada\` |
| `ALCANCE_DIFF` | zeus-sdk mesh/fed/protocol/signaling/kits (acotado por brief) + reportes de este sprint |
| `WORKTREE_BASE` | `HOLONES\01-mythos\zeus-sdk\.worktrees\` (obra tipica) |
| `RAMA_WP` | `wp/ee-<id>-<slug>` (ee = embajador-entrada) |

## Corte autorizado (🔶)

| Pieza | Qué | Overlap | Brief |
|---|---|---|---|
| **E02** | `ssbId` handshake + firma tarjeta = cripto peercard | Z_SDK **#4** (citar, no cerrar) | [BRIEF-E02](../../REPORTES/BRIEF-WP-E02-privacidad-federacion.md) |
| **E01 f1** | Kit embajador | base | [BRIEF-E01-f1](../../REPORTES/BRIEF-WP-E01-f1-kit.md) |
| **E01 f2** | Peercard (TTL / ciclo) | firma → E02 / #4 | [BRIEF-E01-f2](../../REPORTES/BRIEF-WP-E01-f2-peercard.md) |
| **ARG §A5** | Puerta externos | **Z17-zeus** dominante (+ Z04-GL · webs/S_SDK); sin superficie nueva; E02+f1 reales | [BRIEF-A5](../../REPORTES/BRIEF-WP-A5-puerta.md) |

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
