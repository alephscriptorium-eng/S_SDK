# BACKLOG — sprint-ciudad-real (GO-C1 · tick PO cierre CR-1)

> Solo el orquestador escribe aquí. Workers: un WP = un chat = rama
> `wp/cr-<id>-<slug>` (+ worktree si paralelo); NO editar este fichero.
> Estados: ⬜ · 🔶 · ✅.
> Padre: [DE-I19](../../DECISIONES.md) · [DECISIONES sprint](DECISIONES.md).
> Embajador **CERRADO**. Proyección: **apply** (DE-I23 · DC-CR-proyeccion-arco)
> · umbrella [#30](https://github.com/alephscriptorium-eng/S_SDK/issues/30)
> CLOSED · C05 [#31](https://github.com/alephscriptorium-eng/S_SDK/issues/31)
> OPEN · Z_SDK **#5/#6** citar OPEN. **CR-1 ✅** · **listo-R12** · C05 **🔶**.
> C04 tip en pin zeus `73cb0c2`.

## Gate tick-cero (GO-C1)

- ✅ e2e `fixtures/tick-cero/` — peer SIMULADO proceso aparte · canal real
  `@zeus/protocol@0.3.0` · peercard firmada → puerta →
  `startpack-ciudad-v0.1.0`. Evidencia en acta GO-C1 / salida `TICK_CERO_OK`.

## Hito observación (no bloqueante · sin WP · sin CA)

> «**Primer amigo entra de verdad**» → documentar fricción en acta futura.
> Ningún CA de C01/C02/C03 depende. Englobado en **PRUEBA-DE-DOS**
> (cola v3 ratificada).

## Ola CR-1 (✅ cierre · listo-R12)

> Exclusion-paths: [DC-CR-exclusion-paths](DECISIONES.md). Actas:
> [ACTA-OLA1](../../REPORTES/ACTA-OLA1-CIUDAD-REAL-cierre-2026-07-22.md) ·
> [ACTA-CR1](../../REPORTES/ACTA-CR1-CIUDAD-REAL-cierre-2026-07-22.md).

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| [C01](WP-C01-semilla-salud.md) | Salud real ↔ mapa (§2) | EE-1 ✅ · tick-cero | I·IV + ceguera | ✅ GL `19317c1` | → [#30](https://github.com/alephscriptorium-eng/S_SDK/issues/30) |
| [C02](WP-C02-acl-direccional.md) | ACL direccional (Z05#3) | C01 shape · Z_SDK #5 | I·II + ceguera | ✅ zeus `1df2fd2` | → [#30](https://github.com/alephscriptorium-eng/S_SDK/issues/30) · Z_SDK #5 OPEN |
| [C03](WP-C03-arg-edificios.md) | Edificios ↔ paquetes (§A4) | C01 · catálogo Z06 | I·II + ceguera | ✅ GL `f388451` | → [#30](https://github.com/alephscriptorium-eng/S_SDK/issues/30) |

Briefs CR-1:

- [BRIEF-WP-C01](../../REPORTES/BRIEF-WP-C01-semilla-salud.md)
- [BRIEF-WP-C02](../../REPORTES/BRIEF-WP-C02-acl-direccional.md)
- [BRIEF-WP-C03](../../REPORTES/BRIEF-WP-C03-arg-edificios.md)

## C04 · kits FOSS / públicos (paralelo · tip en pin)

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| C04 | Kits juego/contratos → public (DE-I21) | DC-CR-kits-foss | I + ceguera | tip zeus `73cb0c2` (PR#8+#9) · reporte ciclo cerrado | → [#30](https://github.com/alephscriptorium-eng/S_SDK/issues/30) |

Checklist prep R10.6 (v1/v2/v3) queda como handoff hacia C05.

### Checklist cierre C04 (barato · PREP R10.6)

Hallazgos tip main read-only (zeus `30bfc08` · GL `b54a2d2` · 2026-07-22).
Re-correr sobre tip post-merge si hace falta.

| id | check | hallazgo prep | acción cierre C04 |
| -- | ----- | ------------- | ----------------- |
| **v1** | ¿`@zeus/player-mcp-kit` `"private": true`? | **NO** — campo ausente; `publishConfig` + `0.1.2` en `packages/engine/player-mcp-kit/package.json`. Contraste: `embajador-kit` sí `private:true` (obra C04). | **No** entra clase kit C04. Confirmar tip post-merge sigue sin `private:true`. |
| **v2** | ¿cableado ciudad → player-mcp-kit (instancia/config)? | **EXISTE** — `HOLONES/01-mythos/games-library/packages/ciudad/package.json` dep `@zeus/player-mcp-kit@^0.1.2` · instancia `packages/ciudad/src/player-mcp/` (`server`/`room-bridge`/`logic`; resources vía `GAME_ID='ciudad'` → `ciudad://player/state`·`scene`·`casos`). | Anotar path en reporte C04 / handoff C05. |
| **v3** | ¿room-bridge del kit presenta peercard en bootstrap? | **NO-EXISTE** — `player-mcp-kit/src/room-bridge.mjs` `connect()` → `connectAndJoin({ type, features, room })` sin peercard; `rooms` `CLIENT_REGISTER` solo type/features. Ciudad wrapper idem (`CiudadPlayerMcp`). | Gap → **C05** (no bloquear merge C04). |

## C05 · ciudadano-agente (🔶 · sin despacho · R12)

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| [C05](WP-C05-ciudadano-agente.md) | ciudadano-agente | C04 · tras CR-1 (C01/C03 ✅) | I·IV + regla 6 + ceguera | 🔶 brief · **sin despacho** (R12) | [#31](https://github.com/alephscriptorium-eng/S_SDK/issues/31) OPEN |

Brief: [BRIEF-WP-C05](../../REPORTES/BRIEF-WP-C05-ciudadano-agente.md).
Al cerrar: responder **v2/v3** (wiring ciudad→MCP · peercard room-bridge)
en el reporte. **No** abrir worktree ni chat worker en este tick.

## Parked / fuera

Otros parked:

- Z05 items **4–6** · SEMILLA **§6** · trama-agua · E01 f3/f4 (#22)
- E_SDK / DE-I8 · reopen ✅ city · force-push
- **PRUEBA-DE-DOS** (hito observación + acta fricción; custodio+vigía) —
  cola v3 ratificada (post C05)

## Cola v3 (ratificada · DE-I19 · DC-CR-cola-v3)

> Tick PO cierre CR-1. Espejo: [DC-CR-cola-v3](DECISIONES.md).

**CR-1 → C04 → C05 → PRUEBA-DE-DOS** (hito observación + acta fricción;
protagonistas custodio+vigía) → **§6** meta-juego → **trama-agua**.

## R12 (sin cambio de alcance) · **listo**

Re-verif C03 (tips arriba) + cierre CR-1 + gate C05.
**C05 no despachado** — arranca solo tras **R12** PASS.

## Checklist R10 pre-despacho (histórico · vigía)

| check | esperado |
| ----- | -------- |
| tick-cero canal real | `TICK_CERO_OK` + `@zeus/protocol@0.3.0` |
| ∩ paths C01∩C02∩C03 | documentado en DC-CR-exclusion-paths |
| Z_SDK #5 | OPEN (citar; no cerrar) |
| proyección arco | #30 CLOSED · #31 OPEN · sync-map post-apply |
| ceguera DE-I20 | gate δ12 recordado en briefs |
| workers | gate R10; C05 🔶 sin despacho hasta R12 |
