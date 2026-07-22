# BACKLOG — sprint-skills-bosque

> Solo el orquestador bosque-orq escribe aquí (regla de oro 2). Workers: un
> WP = un chat = rama `wp/sb-<id>-<slug>` (+ worktree si paralelo); NO
> editar este fichero. Estados: ⬜ · 🔶 · ✅.
> Contrato: DE-I22 · convivencia multi-orq v1.1.
> Decisiones: [DECISIONES.md](DECISIONES.md).
> B-1 ✅ · aviso [R14-bosque](REPORTES/AVISO-R14-bosque.md) · **no** despachar B-2/B-3.

## Ola B-1 · método (✅ cerrado · espera R14-bosque)

> Caso fundante: convivencia multi-orquestador 2026-07-22 → skill
> `swarm-orquestacion` v0.6. Merges hermano tip `af1fd5a`.

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| S01 | swarm-orquestacion vNext (§convivencia multi-orq) | contrato v1.1 · higiene ✅ · R13 PASS | I·III + ceguera | ✅ merge `6fe0b31` · tip `5db593d` | [#12](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/12) B-1 |
| S02 | vigilancia vNext (pulso multi-carril / Rn-*) | S01 shape (blanda) · R13 PASS | I·III + ceguera | ✅ merge `1d195f1` · tip `0f04b4b` | [#12](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/12) B-1 |
| S05 | site-web (portal skills · docs/consumo) | R13 PASS | III·IV + ceguera | ✅ merge `b52c4cf` · tip `1915575` | [#12](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/12) B-1 |

Reportes:

- [WP-S01](REPORTES/WP-S01-swarm-vnext.md) · [WP-S02](REPORTES/WP-S02-vigilancia-vnext.md) · [WP-S05](REPORTES/WP-S05-site-web.md)
- [AVISO-R14-bosque](REPORTES/AVISO-R14-bosque.md)

## Ola B-2 · estacion-viva (⬜ parked)

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| S03 | estación viva / watcher calibrado al hermano | C05 ✅ ciudad-real → [S_SDK#31](https://github.com/alephscriptorium-eng/S_SDK/issues/31) | I·IV + ceguera | ⬜ parked | [#13](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/13) B-2 |

## Ola B-3 · embajador+mapa+broche (⬜ parked)

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| S04 | skill embajador (lado método; obra zeus = city-orq) | cierre carril CR / re-asigna | I·V + ceguera | ⬜ parked / re-asignable | [#14](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/14) B-3 |
| S06 | mapa de proyección / sync-map ritual | B-1 issues | III + ceguera | ⬜ parked | [#14](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/14) B-3 |
| S07 | broche release paquete | B-1 ✅ · ceguera 0 | IV + ceguera | ⬜ parked | [#14](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/14) B-3 |

## Overview

| Ola | Contenido | Estado gate |
|---|---|---|
| B-1 | S01 · S02 · S05 | ✅ cerrado · espera R14-bosque |
| B-2 | S03 | ⬜ dep C05 |
| B-3 | S04 · S06 · S07 | ⬜ parked |

## Parked / fuera

- zeus / games-library / pins / `DECISIONES` raíz → city-orq
- peercard / GAME_MCP e2e → post C05 ✅ (vía c contrato)
- **NO** despachar B-2/B-3 hasta gates correspondientes
- Issue hermano [#11](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/11): dep C05 → [S_SDK#31](https://github.com/alephscriptorium-eng/S_SDK/issues/31) (hecho)

## Reglas (además del skill)

1. `ALCANCE_DIFF` = hermano skills-library + este sprint. Veto zeus·GL·pins·DECISIONES-raíz.
2. Ceguera cara pública: `CEGUERA_PATTERN` por env; marca del paquete admisible; marco = 0.
3. E2E: solo (a) registry · (b) fixture copiada. No checkouts raíz ajenos.
4. Higiene §8 antes de cualquier despacho.
5. Proyección: markdown local = fuente; issues desechables (regla 15/17).
