# BACKLOG — sprint-ciudad-real (GO-C1 · listo R10)

> Solo el orquestador escribe aquí. Workers: un WP = un chat = rama
> `wp/cr-<id>-<slug>` (+ worktree si paralelo); NO editar este fichero.
> Estados: ⬜ · 🔶 · ✅.
> Padre: [DE-I19](../../DECISIONES.md) · [DECISIONES sprint](DECISIONES.md).
> Embajador **CERRADO**. Proyección: **LOCAL-ONLY** · Z_SDK **#5** citar
> OPEN. **No despachar** hasta vigía **R10**.

## Gate tick-cero (GO-C1)

- ✅ e2e `fixtures/tick-cero/` — peer SIMULADO proceso aparte · canal real
  `@zeus/protocol@0.3.0` · peercard firmada → puerta →
  `startpack-ciudad-v0.1.0`. Evidencia en acta GO-C1 / salida `TICK_CERO_OK`.

## Hito observación (no bloqueante · sin WP · sin CA)

> «**Primer amigo entra de verdad**» → documentar fricción en acta futura.
> Ningún CA de C01/C02/C03 depende.

## Ola CR-1 (candidata · briefs listos · **sin 🔶 hasta R10**)

> Patrón olas como R7: exclusion-paths + gate vigía **antes** de despacho.

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| [C01](WP-C01-semilla-salud.md) | Salud real ↔ mapa (§2) | EE-1 ✅ · tick-cero | I·IV + ceguera | ⬜ brief listo | LOCAL |
| [C02](WP-C02-acl-direccional.md) | ACL direccional (Z05#3) | C01 shape · Z_SDK #5 | I·II + ceguera | ⬜ brief listo | LOCAL · Z_SDK #5 |
| [C03](WP-C03-arg-edificios.md) | Edificios ↔ paquetes (§A4) | C01 · catálogo Z06 | I·II + ceguera | ⬜ brief listo | LOCAL |

Briefs (listos R10 · **sin despachar**):

- [BRIEF-WP-C01](../../REPORTES/BRIEF-WP-C01-semilla-salud.md)
- [BRIEF-WP-C02](../../REPORTES/BRIEF-WP-C02-acl-direccional.md)
- [BRIEF-WP-C03](../../REPORTES/BRIEF-WP-C03-arg-edificios.md)

## Parked / fuera

- Z05 items **4–6** · SEMILLA **§6** · trama-agua · E01 f3/f4 (#22)
- E_SDK / DE-I8 · reopen ✅ city · force-push

## Checklist R10 pre-despacho (para vigía)

| check | esperado |
| ----- | -------- |
| tick-cero canal real | `TICK_CERO_OK` + `@zeus/protocol@0.3.0` |
| ∩ paths C01∩C02∩C03 | documentado en DC-CR-exclusion-paths |
| Z_SDK #5 | OPEN (citar; no cerrar) |
| LOCAL-ONLY | sin `gh issue create` de filas nuevas |
| ceguera DE-I20 | gate δ12 recordado en briefs |
| workers | **no** despachados hasta R10 PASS |
