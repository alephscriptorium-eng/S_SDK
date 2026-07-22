# BACKLOG — sprint-webs-post-city

> Solo el orquestador city escribe aquí (regla de oro 2). Workers: un WP =
> un chat = rama `wp/ww-<id>-<slug>` (+ worktree si paralelo); NO editar
> este fichero. Estados: ⬜ · 🔶 · ✅.
> Padre: GO PO R15-plan · 2026-07-22 · [DECISIONES](DECISIONES.md).
> Gate: [AVISO-R15-city](REPORTES/AVISO-R15-city.md) — **sin despacho**
> hasta PASS.

## Ola WW-1 (GO PO · montaje 2026-07-22 — 🔶 sin despacho)

> Repos distintos → paralelo pleno tras R15-city. Cierre futuro = GO-5/GO-6.

| Id | Título | Repo | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|---|
| [WW-Z](WP-WW-Z-z-sdk-motor-federados.md) | z-sdk «motor de mundos federados» | zeus docs | R15-city PASS | III·IV + ceguera | 🔶 brief | LOCAL-ONLY |
| [WW-G](WP-WW-G-games-ciudad-insignia.md) | games «ciudad, juego insignia» ⊃ W2 | GL docs | R15-city PASS · W2 absorbido | III·IV + ceguera | 🔶 brief | LOCAL-ONLY |
| [WW-S](WP-WW-S-s-sdk-casa-era.md) | s-sdk «la casa cuenta la era» | S docs | R15-city PASS | III·IV + ceguera | 🔶 brief | LOCAL-ONLY |

### Briefs

- [BRIEF-WW-Z](BRIEFS/BRIEF-WP-WW-Z.md)
- [BRIEF-WW-G](BRIEFS/BRIEF-WP-WW-G.md) · **⊃ W2** ([ABSORCION](REPORTES/ABSORCION-W2.md))
- [BRIEF-WW-S](BRIEFS/BRIEF-WP-WW-S.md)

### Aviso gate

- [AVISO-R15-city](REPORTES/AVISO-R15-city.md)

## Absorción W2 (no es WP suelto)

| id | origen | destino | estado |
|---|---|---|---|
| **W2** | residual W1 · encolado R14.5 · hallazgo `/games/ciudad` ausente | **WW-G** | **absorbido** — no despachar |

Fuente: [`WP-W1-catalogo-ciudad.md`](../../REPORTES/WP-W1-catalogo-ciudad.md) §Hallazgos.

## Proyección

| fase | política |
|---|---|
| ahora | **LOCAL-ONLY** (DC-WW-proyeccion) |
| cierre | 1 umbrella patrón DE-I23 + sync-map post-apply → [`.sync-map.json`](.sync-map.json) |

## Parked / fuera

- `sprint-skills-bosque` · hermano skills-library (S03/S05b) — **no pisar**
- E_SDK / DE-I8 · reopen ✅ city/CR · cerrar Z_SDK #4/#5/#6
- §6 meta-juego · trama-agua · E01-f3/f4 (#22 parked)
- **Ops ∥ (no es este sprint):** [`sprint-post-city-ops`](../sprint-post-city-ops/)
  T1+S04 · [AVISO-R15-T1-S04](../sprint-post-city-ops/REPORTES/AVISO-R15-T1-S04.md)
  — paths disjuntos de WW-* (`docs/**`)

## Reglas (además del skill)

1. Destilar CANTERA + copy publicado (`site-web`) — **no inventar**.
2. Ceguera regla 1 / PRACTICAS δ12: `WP-[A-Z]{1,2}\d` = 0 en obra docs pública tocada (grep -c/-q).
3. Cero promesas sin sello · C8 canal real.
4. Claim→acta/SHA · ∩ diffs = ∅ · higiene al aceptar.
5. No editar BACKLOG (workers) · no push tip gobierno desde worker.
