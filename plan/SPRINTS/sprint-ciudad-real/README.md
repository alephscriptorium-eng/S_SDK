# sprint-ciudad-real — **ACTIVO** (GO-C1 · cola v3 ratificada)

> **Estado: ACTIVO.** Apertura GO-C1 tras cierre formal EMBAJADOR-ENTRADA
> (R9.5). **CR-1 ✅** · **C05 ✅** · **listo-R14** (PRUEBA-DE-DOS).
> Pins: zeus `2aec4cb` · GL `20c095c`. Cola v3 **ratificada**
> (DE-I19 · DC-CR-cola-v3). Padre: [DE-I19](../../DECISIONES.md) ·
> embajador cerrado: [sprint-embajador-entrada](../sprint-embajador-entrada/).

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
3. Proyección = **apply** (GO PROYECCIÓN-ARCO · DE-I23 /
   DC-CR-proyeccion-arco). Umbrella CR-1+C04 closed · C05 CLOSED ·
   sync-map post-apply (regla 17). Antecedente LOCAL-ONLY superseded.
4. Vetos: E_SDK / DE-I8 · reopen ✅ city · force-push · claim→acta/SHA.

## Parked / post CR-1

| pieza | nota |
|---|---|
| **C05** ciudadano-agente | ✅ · [ACTA-C05](../../REPORTES/ACTA-C05-CIUDAD-REAL-cierre-2026-07-22.md) · #31 CLOSED |
| PRUEBA-DE-DOS | **listo-R14** (custodio+vigía · campana live) |
| Z05 items **4–6** | parked (sin GO) |
| SEMILLA **§6** | meta-juego · cola v3 post PRUEBA-DE-DOS |
| trama-agua | cola v3 final |
| E01 f3/f4 | S_SDK **#22** OPEN parked |

## Hito observación (no bloqueante · sin WP)

«**Primer amigo entra de verdad**» — documentar fricción en acta futura.
Ningún CA del sprint depende de este hito. Ver [BACKLOG](BACKLOG.md)
(PRUEBA-DE-DOS).

## Tick cero (gate GO-C1)

e2e local entrada completa con peer externo **SIMULADO** (proceso aparte):
peercard firmada → puerta → `startpack-ciudad-v0.1.0` default.
Instala del **canal real** `npm.scriptorium.escrivivir.co` (no `file:`).
Fixture: [`fixtures/tick-cero/`](fixtures/tick-cero/).

## Dónde está cada cosa

| fichero | rol |
|---|---|
| [BACKLOG.md](BACKLOG.md) | WPs, estados, R11/R12. Solo orquestador. |
| [DECISIONES.md](DECISIONES.md) | DC-CR-* · cola v3. |
| [WP-C01-semilla-salud.md](WP-C01-semilla-salud.md) | §2 |
| [WP-C02-acl-direccional.md](WP-C02-acl-direccional.md) | Z05#3 / Z_SDK #5 |
| [WP-C03-arg-edificios.md](WP-C03-arg-edificios.md) | §A4 |
| [WP-C05-ciudadano-agente.md](WP-C05-ciudadano-agente.md) | peercard MCP |
