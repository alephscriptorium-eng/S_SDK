# BACKLOG — sprint-skills-bosque

> Solo el orquestador bosque-orq escribe aquí (regla de oro 2). Workers: un
> WP = un chat = rama `wp/sb-<id>-<slug>` (+ worktree si paralelo); NO
> editar este fichero. Estados: ⬜ · 🔶 · ✅.
> Contrato: DE-I22 · convivencia multi-orq v1.1.
> Decisiones: [DECISIONES.md](DECISIONES.md).
> B-1 ✅ · B-2 S03 ✅ · B-3 S06 ✅ · S07 ✅ broche `0.5.0` ·
> S04 traspasado city.

## Ola B-1 · método (✅ cerrado)

> Caso fundante: convivencia multi-orquestador 2026-07-22 → skill
> `swarm-orquestacion` v0.6. Merges hermano tip post-B-1 `c57a0eb`.

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| S01 | swarm-orquestacion vNext (§convivencia multi-orq) | contrato v1.1 · higiene ✅ · R13 PASS | I·III + ceguera | ✅ merge `6fe0b31` · tip `5db593d` | [#12](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/12) B-1 |
| S02 | vigilancia vNext (pulso multi-carril / Rn-*) | S01 shape (blanda) · R13 PASS | I·III + ceguera | ✅ merge `1d195f1` · tip `0f04b4b` | [#12](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/12) B-1 |
| S05 | site-web (portal skills · docs/consumo) | R13 PASS | III·IV + ceguera | ✅ merge `b52c4cf` · tip `1915575` | [#12](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/12) B-1 |
| S05b | encoding UTF-8 catálogo (residual S05) | S05 ✅ | III·IV + ceguera | ✅ merge `71824d0` · tip `4068cd2` | residual B-1 |

Reportes:

- [WP-S01](REPORTES/WP-S01-swarm-vnext.md) · [WP-S02](REPORTES/WP-S02-vigilancia-vnext.md) · [WP-S05](REPORTES/WP-S05-site-web.md) · [WP-S05b](REPORTES/WP-S05b-encoding.md)
- [AVISO-R14-bosque](REPORTES/AVISO-R14-bosque.md) · [AVISO-R17-bosque](REPORTES/AVISO-R17-bosque.md) · [WP-S03](REPORTES/WP-S03-estacion-viva.md) · [WP-S07](REPORTES/WP-S07-broche-0.5.0.md)

## Ola B-2 · estacion-viva (✅)

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| S03 | estación viva / watcher calibrado al hermano | C05 ✅ · gate PASS `a37d4c2` | I·IV + ceguera | ✅ tip `be68f07` · merge `9b89495` · [reporte](REPORTES/WP-S03-estacion-viva.md) | [#13](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/13) B-2 |

## Ola B-3 · mapa+broche (✅ cerrado · S04 fuera)

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| S06 | mapa de proyección / sync-map ritual (docs) | B-1 ✅ · ∥ S03 OK (dirs disjuntos) | III + ceguera | ✅ merge `2743176` · tip `834f706` · [reporte](REPORTES/WP-S06-mapa.md) · brief [BRIEF-WP-S06](BRIEFS/BRIEF-WP-S06-mapa.md) | [#14](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/14) B-3 |
| S07 | broche release `0.5.0` (bump + Release + portal + catálogo) | **S03 ✅ + S06 ✅ + S05b ✅** | IV + ceguera | ✅ tip `4c2e322` · tag `v0.5.0` · npm `0.5.0` · [reporte](REPORTES/WP-S07-broche-0.5.0.md) · Publish [29927743629](https://github.com/alephscriptorium-eng/S_SDK-skills-library/actions/runs/29927743629) · Docs [29927725261](https://github.com/alephscriptorium-eng/S_SDK-skills-library/actions/runs/29927725261) | [#14](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/14) B-3 |

### Traspaso S04 → city (fuera del backlog bosque)

| Id | Título | Destino | Estado |
|---|---|---|---|
| S04 | skill embajador (lado método; obra zeus) | **city-orq / zeus** · contrato §1 · epic [S_SDK#22](https://github.com/alephscriptorium-eng/S_SDK/issues/22) (WP-E01) · insumo vía WP-T1 (R15 city) | **SALE** del backlog bosque · no obra aquí |

## Overview

| Ola | Contenido | Estado gate |
|---|---|---|
| B-1 | S01 · S02 · S05 · S05b | ✅ cerrado (+ encoding mergeado) |
| B-2 | S03 | ✅ merge `9b89495` |
| B-3 | S06 · S07 | ✅ cerrado (broche `4c2e322` / `v0.5.0`) |

## Parked / fuera

- zeus / games-library / pins / `DECISIONES` raíz → city-orq
- **S04** → city-orq / zeus (este replan R15) — no reabrir aquí
- peercard / GAME_MCP e2e live (C8 kit registry) — residual post-broche si vigía lo pide
- Issue hermano [#11](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/11): dep C05 → [S_SDK#31](https://github.com/alephscriptorium-eng/S_SDK/issues/31) (hecho)
- Aviso gate: [AVISO-R17-bosque](REPORTES/AVISO-R17-bosque.md)

## Reglas (además del skill)

1. `ALCANCE_DIFF` = hermano skills-library + este sprint. Veto zeus·GL·pins·DECISIONES-raíz.
2. Ceguera cara pública: `CEGUERA_PATTERN` por env; marca del paquete admisible; marco = 0.
3. E2E: solo (a) registry · (b) fixture copiada. No checkouts raíz ajenos.
4. Higiene §8 antes de cualquier despacho.
5. Proyección: markdown local = fuente; issues desechables (regla 15/17).
6. S06 vive en `docs/` (o raíz hermano); **veto** `skills/` (territorio S03).
