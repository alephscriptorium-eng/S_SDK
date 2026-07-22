# Acta · C05 CIUDAD-REAL cierre · R13-city CADENA VERDE · 2026-07-22

| dato | valor |
| ---- | ----- |
| WP | **C05 ✅** ciudadano-agente (peercard MCP bootstrap) |
| hotfix | **HOTFIX-C05-CI** (resolución kit en test · sin lógica) |
| tip zeus | `2aec4cb7d049861a5ea29bdc207c46fad1c22856` (post-version PR#10) |
| tip GL | `20c095cf698ed5b09a18fe409c8a7de37eb003bf` (hotfix @ `e03f11a`+fix) |
| obra C05 | zeus `05d70fd` · GL `e03f11a` |
| version bot | tip `822a13e` → merge PR [#10](https://github.com/alephscriptorium-eng/Z_SDK/pull/10) |
| issue | [S_SDK #31](https://github.com/alephscriptorium-eng/S_SDK/issues/31) → **CLOSED** |
| listo-R14 | **sí** — PRUEBA-DE-DOS en cola (campana live); **no** abrir aún |
| vetos | no E_SDK · no force · no reopen C05 · Z_SDK #5/#6 OPEN |

## CADENA VERDE (1–3)

| # | paso | tip / evidencia | resultado |
| - | ---- | --------------- | --------- |
| **1** | Zeus changesets | PR#10 `822a13e` → main `2aec4cb` · Release [29890841579](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29890841579) ✅ · CI [29890841565](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29890841565) ✅ | `@zeus/player-mcp-kit@0.1.3` · `@zeus/rooms@0.1.1` (registry scriptorium) |
| **2** | GL HOTFIX-C05-CI | rama `wp/cr-hotfix-c05-ci` @ `20c095c` · FF main · CI branch [29891167026](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29891167026) ✅ · CI main [29891318380](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29891318380) ✅ | test resuelve kit vía `resolveZeusSdkRoot` + paquete instalado (patrón `b54a2d2`); higiene rama/wt |
| **3** | Aceptación | pins S → zeus `2aec4cb` · GL `20c095c` · reporte `a45402e` · BACKLOG C05 ✅ · #31 CLOSED | listo-R14 · S01 encolada (bosque) |

## Runner (regla 16)

| repo | tip | CI | Release / homólogo |
| ---- | --- | --- | ------------------ |
| **zeus-sdk** | `2aec4cb` | [29890841565](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29890841565) ✅ | [29890841579](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29890841579) ✅ |
| **games-library** hotfix | `20c095c` | [29891318380](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29891318380) ✅ (main) · [29891167026](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29891167026) ✅ (rama) | Docs no disparó — homólogo = CI verde |
| obra C05 pre-version | zeus `05d70fd` | [29889950458](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29889950458) ✅ | Release [29889950457](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29889950457) ✅ (pre-changeset C05) |
| obra C05 GL pre-hotfix | `e03f11a` | [29889952844](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29889952844) ❌ (motivó hotfix) | — |

## npm view (C8 · scriptorium)

```text
npm view @zeus/player-mcp-kit version → 0.1.3
npm view @zeus/rooms version          → 0.1.1
# time['0.1.3'] = 2026-07-22T04:25:09.723Z
```

## CA C05 (aceptados)

| eje / check | veredicto |
| ----------- | --------- |
| I · peercard en bootstrap kit+ciudad | ✅ obra `05d70fd` / `e03f11a` |
| IV · regla 6 (≥2 tipos) | ✅ test humano-puerta + agente-MCP |
| v2 / v3 | ✅ respondidos en [WP-C05 reporte](WP-C05-ciudadano-agente.md) |
| ceguera δ12/14 | ✅ (reporte worker) |
| CI post-hotfix | ✅ `20c095c` |

## Hito observación (no en este tick)

**Campana live** (authority + MCP + operator-ui) → **PRUEBA-DE-DOS**
(R14 / cola v3). Cable unitario = campanas desde parte en ledger; e2e
mesh = hito custodio+vigía.

## Lección S01 (encolar al bosque · NO ejecutar aquí)

> **Para bosque / S01:** «merge solo post-aceptación» — caso fundante 2º
> (merge prematuro pre-STOP C05 / CI rojo en tip `e03f11a` antes de
> cadena version+hotfix). No abrir WP bosque desde city.

## Fuera

E_SDK · force · reopen C05 · PRUEBA-DE-DOS (espera R14) · cierre Z#5/#6.
