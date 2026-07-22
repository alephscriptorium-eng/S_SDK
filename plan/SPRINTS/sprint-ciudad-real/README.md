# sprint-ciudad-real — **ACTIVO** (GO-C1 · listo R10)

> **Estado: ACTIVO.** Apertura GO-C1 tras cierre formal EMBAJADOR-ENTRADA
> (R9.5). Workers **no** despachados hasta vigía **R10** PASS.
> Padre: [DE-I19](../../DECISIONES.md) · embajador cerrado:
> [sprint-embajador-entrada](../sprint-embajador-entrada/).

## Parámetros

| parámetro | valor |
|---|---|
| `MUNDO_RAIZ` | `C:\Users\aleph\SCRIPT_SDK` |
| `PLAN_DIR` | `plan\SPRINTS\sprint-ciudad-real\` |
| `ALCANCE_DIFF` | acotado por brief (zeus engine/ACL · GL ciudad pack · reportes) |
| `WORKTREE_BASE` | `.worktrees\` del repo dominante de cada WP |
| `RAMA_WP` | `wp/cr-<id>-<slug>` (cr = ciudad-real) |

## Alcance (GO-C1)

| Pieza | Fuente | Overlap |
|---|---|---|
| SEMILLA **§2** | salud real ↔ mapa; acciones juego | [SEMILLA-GAMIFICACION §2](../sprint-game-city/SEMILLA-GAMIFICACION.md) |
| Motor Z05 item **3** | ACL / ownership direccional | [Z_SDK #5](https://github.com/alephscriptorium-eng/Z_SDK/issues/5) **OPEN** (citar; **no cerrar**) |
| SEMILLA-ARG **§A4** | edificios ↔ submódulos/paquetes; ids catálogo | [SEMILLA-ARG §A4](../sprint-game-city/SEMILLA-ARG.md) |

## Guardarraíles

1. Acciones de juego = **read-only / idempotentes** por defecto (smoke,
   `npm view`, status). Nada destructivo sin capability explícita
   ([Z_SDK #5](https://github.com/alephscriptorium-eng/Z_SDK/issues/5) /
   [#6](https://github.com/alephscriptorium-eng/Z_SDK/issues/6)).
2. Ceguera obra: `WP-[A-Z]{1,2}\d` → 0 hits en `packages/`+`e2e/`+`kits`
   (DE-I20 / PRACTICAS δ12).
3. Proyección = **LOCAL-ONLY** hasta cierre de lote + sync-map post-apply
   (regla 17). No `gh issue create` de filas bajo umbrella ahora.
4. Vetos: E_SDK / DE-I8 · reopen ✅ city · force-push · claim→acta/SHA.

## Parked (fuera de este sprint)

| pieza | nota |
|---|---|
| Z05 items **4–6** | parked (sin GO) |
| SEMILLA **§6** | meta-juego · cola DE-I19 ítem 4 |
| trama-agua | cola DE-I19 ítem 5 |
| E01 f3/f4 | S_SDK **#22** OPEN parked |

## Hito observación (no bloqueante · sin WP)

«**Primer amigo entra de verdad**» — documentar fricción en acta futura.
Ningún CA del sprint depende de este hito. Ver [BACKLOG](BACKLOG.md).

## Tick cero (gate GO-C1)

e2e local entrada completa con peer externo **SIMULADO** (proceso aparte):
peercard firmada → puerta → `startpack-ciudad-v0.1.0` default.
Instala del **canal real** `npm.scriptorium.escrivivir.co` (no `file:`).
Fixture: [`fixtures/tick-cero/`](fixtures/tick-cero/).

## Dónde está cada cosa

| fichero | rol |
|---|---|
| [BACKLOG.md](BACKLOG.md) | WPs, estados, R10. Solo orquestador. |
| [DECISIONES.md](DECISIONES.md) | DC-CR-*. |
| [WP-C01-semilla-salud.md](WP-C01-semilla-salud.md) | §2 |
| [WP-C02-acl-direccional.md](WP-C02-acl-direccional.md) | Z05#3 / Z_SDK #5 |
| [WP-C03-arg-edificios.md](WP-C03-arg-edificios.md) | §A4 |
