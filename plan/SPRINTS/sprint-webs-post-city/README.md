# sprint-webs-post-city — **PREP R15-city** (sin despacho)

> **Estado: montado · 🔶 emitidos · AVISO-R15-city.** Tick PO 2026-07-22
> (vía vigía R15-plan). **NO despachar** WW-Z ∥ WW-G ∥ WW-S hasta gate
> vigía **R15-city** PASS (protocolo R7/R10).
> Orquestador: city-orq · Contrato convivencia multi-orq v1.1 (DE-I22).
> Territorio: zeus docs · games-library docs · S_SDK docs (webs).
> **Veto:** no tocar [`sprint-skills-bosque`](../sprint-skills-bosque/)
> (bosque S03/S05b en paralelo).
> **Hermano ops (∥ paths):** [`sprint-post-city-ops`](../sprint-post-city-ops/)
> = T1+S04 · gate **R15-T1-S04** (distinto de R15-city) · runtime/acta/skill
> ≠ `docs/**`.

## Parámetros del mundo

| parámetro | valor |
|---|---|
| `MUNDO_RAIZ` | `C:\Users\aleph\SCRIPT_SDK` |
| `PLAN_DIR` | `plan\SPRINTS\sprint-webs-post-city\` |
| `ALCANCE_DIFF` | zeus `docs/**` · GL `docs/**` · S_SDK `docs/**` + este sprint — **veto** `sprint-skills-bosque/**` · hermano skills-library · E_SDK · reopen ✅ city/CR · cerrar Z_SDK #4/#5/#6 |
| `WORKTREE_BASE` | `.worktrees\` del repo dominante de cada WP |
| `RAMA_WP` | `wp/ww-<id>-<slug>` (ww = webs-post-city) |

## Ola WW-1 (documentada · sin despacho)

| WP | Repo dominante | Tema |
|---|---|---|
| **WW-Z** | zeus-sdk | z-sdk «motor de mundos federados» |
| **WW-G** | games-library | games «ciudad, juego insignia» ⊃ **W2** |
| **WW-S** | S_SDK | s-sdk «la casa cuenta la era» |

Paralelo pleno (repos distintos · ∩ = ∅). Cierre futuro = patrón GO-5/GO-6:
Docs×3 + nav C8 + regla 16 + acta.

## Guardarraíles

1. Partición V2: solo territorio city (este sprint + webs de zeus/GL/S).
2. Worker **destila** CANTERA + copy publicado vía skill `site-web` — **no inventa**.
3. Proyección = **LOCAL-ONLY** durante sprint; al cierre 1 umbrella (patrón DE-I23) + sync-map post-apply (regla 17).
4. Vetos: E_SDK/DE-I8 · Z_SDK #4/#5/#6 citar-no-cerrar · claim→acta/SHA · higiene · ∩=∅.
5. REPORTES/BRIEFS viven **bajo este sprint**.

## Dónde está cada cosa

| fichero | rol |
|---|---|
| [BACKLOG.md](BACKLOG.md) | WPs, olas, 🔶. Solo orquestador. |
| [DECISIONES.md](DECISIONES.md) | DC-WW-* (proyección, absorción W2). |
| [WP-WW-Z](WP-WW-Z-z-sdk-motor-federados.md) · [WP-WW-G](WP-WW-G-games-ciudad-insignia.md) · [WP-WW-S](WP-WW-S-s-sdk-casa-era.md) | Fichas stub. |
| [BRIEFS/](BRIEFS/) | Briefs definitivos (sin despacho). |
| [REPORTES/AVISO-R15-city.md](REPORTES/AVISO-R15-city.md) | Pedido gate vigía. |
| [REPORTES/ABSORCION-W2.md](REPORTES/ABSORCION-W2.md) | W2 → WW-G. |
| [.sync-map.json](.sync-map.json) | Vacío hasta post-apply. |
