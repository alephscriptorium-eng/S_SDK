# BACKLOG — sprint-skills-bosque

> Solo el orquestador bosque-orq escribe aquí (regla de oro 2). Workers: un
> WP = un chat = rama `wp/sb-<id>-<slug>` (+ worktree si paralelo); NO
> editar este fichero. Estados: ⬜ · 🔶 · ✅.
> Contrato: DE-I22 · convivencia multi-orq v1.1.
> Decisiones: [DECISIONES.md](DECISIONES.md).
> **SIN despacho** de workers hasta gate **R13-bosque** PASS.

## Ola B-1 · método (🔶 briefs · gate R13)

> Caso fundante (anotado, obra post-R13): convivencia multi-orquestador
> 2026-07-22 (eval → enmiendas v1.1 → reconciliación) → sección método en
> skill `swarm-orquestacion` vNext (S01). **NO despachar** worker S01 aún.

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| S01 | swarm-orquestacion vNext (§convivencia multi-orq) | contrato v1.1 · higiene ✅ | I·III + ceguera | 🔶 brief · sin despacho | [#12](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/12) B-1 |
| S02 | vigilancia vNext (pulso multi-carril / Rn-city·Rn-bosque) | S01 shape | I·III + ceguera | 🔶 brief · sin despacho | [#12](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/12) B-1 |
| S05 | site-web (portal skills · docs/consumo) | — | III·IV + ceguera | 🔶 brief · sin despacho | [#12](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/12) B-1 |

Briefs:

- [BRIEF-WP-S01](BRIEFS/BRIEF-WP-S01-swarm-vnext.md)
- [BRIEF-WP-S02](BRIEFS/BRIEF-WP-S02-vigilancia-vnext.md)
- [BRIEF-WP-S05](BRIEFS/BRIEF-WP-S05-site-web.md)

## Ola B-2 · estacion-viva (⬜ parked)

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| S03 | estación viva / watcher calibrado al hermano | C05 ✅ ciudad-real | I·IV + ceguera | ⬜ parked | [#13](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/13) B-2 |

## Ola B-3 · embajador+mapa+broche (⬜ parked)

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| S04 | skill embajador (lado método; obra zeus = city-orq) | cierre carril CR / re-asigna | I·V + ceguera | ⬜ parked / re-asignable | [#14](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/14) B-3 |
| S06 | mapa de proyección / sync-map ritual | B-1 issues | III + ceguera | ⬜ parked | [#14](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/14) B-3 |
| S07 | broche release paquete | B-1 ✅ · ceguera 0 | IV + ceguera | ⬜ parked | [#14](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/14) B-3 |

## Overview

| Ola | Contenido | Estado gate |
|---|---|---|
| B-1 | S01 · S02 · S05 | 🔶 briefs · espera R13-bosque |
| B-2 | S03 | ⬜ dep C05 |
| B-3 | S04 · S06 · S07 | ⬜ parked |

## Parked / fuera

- zeus / games-library / pins / `DECISIONES` raíz → city-orq
- peercard / GAME_MCP e2e → post C05 ✅ (vía c contrato)
- Workers de implementación S01/S02/S05 → solo tras R13 PASS

## Reglas (además del skill)

1. `ALCANCE_DIFF` = hermano skills-library + este sprint. Veto zeus·GL·pins·DECISIONES-raíz.
2. Ceguera cara pública: `CEGUERA_PATTERN` por env; marca del paquete admisible; marco = 0.
3. E2E: solo (a) registry · (b) fixture copiada. No checkouts raíz ajenos.
4. Higiene §8 antes de cualquier despacho.
5. Proyección: markdown local = fuente; issues desechables (regla 15/17).
