# BACKLOG — sprint-webs-post-city

> Solo el orquestador city escribe aquí (regla de oro 2). Workers: un WP =
> un chat = rama `wp/ww-<id>-<slug>` (+ worktree si paralelo); NO editar
> este fichero. Estados: ⬜ · 🔶 · ✅.
> Padre: GO PO R15-plan · 2026-07-22 · [DECISIONES](DECISIONES.md).
> Gate: [AVISO-R15-city](REPORTES/AVISO-R15-city.md) — despacho hecho · **ola ✅**.

## Ola WW-1 (GO PO · montaje 2026-07-22 — ✅ cerrada 2026-07-22)

> Repos distintos → paralelo pleno. Cierre = GO-5/GO-6 + regla 16/17.
> Acta: [`ACTA-WW-webs-post-city-cierre-2026-07-22`](../../REPORTES/ACTA-WW-webs-post-city-cierre-2026-07-22.md).
> Umbrella: [S_SDK #32](https://github.com/alephscriptorium-eng/S_SDK/issues/32) CLOSED · sync-map post-apply.

| Id | Título | Repo | Deps | Ejes | Estado | Issue |
|---|---|---|---|---|---|---|
| [WW-Z](WP-WW-Z-z-sdk-motor-federados.md) | z-sdk «motor de mundos federados» | zeus docs | R15-city PASS | III·IV + ceguera | ✅ | [#32](https://github.com/alephscriptorium-eng/S_SDK/issues/32) |
| [WW-G](WP-WW-G-games-ciudad-insignia.md) | games «ciudad, juego insignia» ⊃ W2 | GL docs | R15-city PASS · W2 absorbido | III·IV + ceguera | ✅ | [#32](https://github.com/alephscriptorium-eng/S_SDK/issues/32) |
| [WW-S](WP-WW-S-s-sdk-casa-era.md) | s-sdk «la casa cuenta la era» | S docs | R15-city PASS | III·IV + ceguera | ✅ | [#32](https://github.com/alephscriptorium-eng/S_SDK/issues/32) |

### Briefs

- [BRIEF-WW-Z](BRIEFS/BRIEF-WP-WW-Z.md)
- [BRIEF-WW-G](BRIEFS/BRIEF-WP-WW-G.md) · **⊃ W2** ([ABSORCION](REPORTES/ABSORCION-W2.md))
- [BRIEF-WW-S](BRIEFS/BRIEF-WP-WW-S.md)

### Reportes

- [WP-WW-Z](REPORTES/WP-WW-Z-z-sdk-motor-federados.md) · tip zeus `2917634`
- [WP-WW-G](REPORTES/WP-WW-G-games-ciudad-insignia.md) · tip GL `2802f6a`
- [WP-WW-S](REPORTES/WP-WW-S-s-sdk-casa-era.md) · obra `8e497ea`

### Aviso gate

- [AVISO-R15-city](REPORTES/AVISO-R15-city.md)

## Absorción W2 (no es WP suelto)

| id | origen | destino | estado |
|---|---|---|---|
| **W2** | residual W1 · encolado R14.5 · hallazgo `/games/ciudad` ausente | **WW-G** | **✅ absorbido en WW-G** (ficha + nav live 200) |

Fuente: [`WP-W1-catalogo-ciudad.md`](../../REPORTES/WP-W1-catalogo-ciudad.md) §Hallazgos.

## Proyección

| fase | política |
|---|---|
| durante | **LOCAL-ONLY** (DC-WW-proyeccion) |
| cierre | ✅ umbrella [#32](https://github.com/alephscriptorium-eng/S_SDK/issues/32) + sync-map post-apply → [`.sync-map.json`](.sync-map.json) |

## Parked / fuera

- `sprint-skills-bosque` · hermano skills-library (S03/S05b) — **no pisar**
- E_SDK / DE-I8 · reopen ✅ city/CR · cerrar Z_SDK #4/#5/#6
- §6 meta-juego · trama-agua · E01-f3/f4 (#22 parked)
- **Ops ∥ (no es este sprint):** [`sprint-post-city-ops`](../sprint-post-city-ops/)
  T1+S04 · [AVISO-R15-T1-S04](../sprint-post-city-ops/REPORTES/AVISO-R15-T1-S04.md)
  — paths disjuntos de WW-* (`docs/**`) · **no tocados en cierre WW**

## Reglas (además del skill)

1. Destilar CANTERA + copy publicado (`site-web`) — **no inventar**.
2. Ceguera regla 1 / PRACTICAS δ12: `WP-[A-Z]{1,2}\d` = 0 en obra docs pública tocada (grep -c/-q).
3. Cero promesas sin sello · C8 canal real.
4. Claim→acta/SHA · ∩ diffs = ∅ · higiene al aceptar.
5. No editar BACKLOG (workers) · no push tip gobierno desde worker.
