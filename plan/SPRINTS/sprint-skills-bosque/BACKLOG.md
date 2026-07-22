# BACKLOG — sprint-skills-bosque

> Solo el orquestador bosque-orq escribe aquí (regla de oro 2). Workers: un
> WP = un chat = rama `wp/sb-<id>-<slug>` (+ worktree si paralelo); NO
> editar este fichero. Estados: ⬜ · 🔶 · ✅.
> Contrato: DE-I22 · convivencia multi-orq v1.1.
> Decisiones: [DECISIONES.md](DECISIONES.md).
> B-1 ✅ · B-3 parcial GO (S06) · S07 🔶 condicionado · S04 traspasado city.

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
- [AVISO-R14-bosque](REPORTES/AVISO-R14-bosque.md)

## Ola B-2 · estacion-viva (⬜ · dep C05 ✅ · sin brief aún)

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| S03 | estación viva / watcher calibrado al hermano | C05 ✅ ciudad-real → [S_SDK#31](https://github.com/alephscriptorium-eng/S_SDK/issues/31) | I·IV + ceguera | ⬜ sin BRIEF/obra · skill `estacion-viva` ausente · listo cuando PO pida R15-S03 | [#13](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/13) B-2 |

## Ola B-3 · mapa+broche (S06 GO · S07 condicionado · S04 fuera)

| Id | Título | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|
| S06 | mapa de proyección / sync-map ritual (docs) | B-1 ✅ · ∥ S03 OK (dirs disjuntos) | III + ceguera | ✅ merge `2743176` · tip `834f706` · [reporte](REPORTES/WP-S06-mapa.md) · brief [BRIEF-WP-S06](BRIEFS/BRIEF-WP-S06-mapa.md) | [#14](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/14) B-3 |
| S07 | broche release `0.5.0` (bump + Release + portal + catálogo) | **S03 ✅ + S06 ✅ + S05b ✅** | IV + ceguera | 🔶 condicionado · falta **solo S03** · [NOTA-S07](BRIEFS/NOTA-WP-S07-condicionado.md) · **NO despachar** | [#14](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/14) B-3 |

### Traspaso S04 → city (fuera del backlog bosque)

| Id | Título | Destino | Estado |
|---|---|---|---|
| S04 | skill embajador (lado método; obra zeus) | **city-orq / zeus** · contrato §1 · epic [S_SDK#22](https://github.com/alephscriptorium-eng/S_SDK/issues/22) (WP-E01) · insumo vía WP-T1 (R15 city) | **SALE** del backlog bosque · no obra aquí |

## Overview

| Ola | Contenido | Estado gate |
|---|---|---|
| B-1 | S01 · S02 · S05 · S05b | ✅ cerrado (+ encoding mergeado) |
| B-2 | S03 | ⬜ dep C05 ✅ · sin brief/obra |
| B-3 | S06 · S07 (S04→city) | S06 ✅ · S07 🔶 condicionado (falta S03) |

## Parked / fuera

- zeus / games-library / pins / `DECISIONES` raíz → city-orq
- **S04** → city-orq / zeus (este replan R15) — no reabrir aquí
- peercard / GAME_MCP e2e → post C05 ✅ (vía c contrato); entra con S03
- **NO** despachar S07 hasta S03 ✅ + S06 ✅ + S05b ✅
- Issue hermano [#11](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/11): dep C05 → [S_SDK#31](https://github.com/alephscriptorium-eng/S_SDK/issues/31) (hecho)

## Reglas (además del skill)

1. `ALCANCE_DIFF` = hermano skills-library + este sprint. Veto zeus·GL·pins·DECISIONES-raíz.
2. Ceguera cara pública: `CEGUERA_PATTERN` por env; marca del paquete admisible; marco = 0.
3. E2E: solo (a) registry · (b) fixture copiada. No checkouts raíz ajenos.
4. Higiene §8 antes de cualquier despacho.
5. Proyección: markdown local = fuente; issues desechables (regla 15/17).
6. S06 vive en `docs/` (o raíz hermano); **veto** `skills/` (territorio S03).
