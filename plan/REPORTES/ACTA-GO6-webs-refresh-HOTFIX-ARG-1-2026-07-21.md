# ACTA — GO-6 · Webs refresh (HOTFIX-ARG-1) — 2026-07-21

| dato | valor |
| ---- | ----- |
| rol | ops webs (skill `site-web`) |
| tip zeus | `fe75269` (`fe75269483bd925e163a79b9a2c8d654444c3adc`) |
| tip GL | `3288510` |
| tip S_SDK | `d7a422c` (gobierno previo `229e3b7` + nota C8 kits) |
| CI zeus | [29865037586](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29865037586) success |
| Release zeus | [29865037568](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29865037568) success |
| método | `workflow_dispatch` Docs ×2 + push `docs/**` S_SDK (frágil #7) |

## Docs regenerados

| # | URL | repo | Docs run-id | headSha |
| - | --- | ---- | ----------- | ------- |
| 1 | https://z-sdk.escrivivir.co/ | Z_SDK | [29865822370](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29865822370) success | `fe75269` |
| 2 | https://games.z-sdk.escrivivir.co/ | Z_SDK-games-library | [29865824398](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29865824398) success | `3288510` |
| 3 | https://s-sdk.escrivivir.co/ | S_SDK | [29866044815](https://github.com/alephscriptorium-eng/S_SDK/actions/runs/29866044815) success | `d7a422c` |

Dispatch intermedio S_SDK (pre-nota): [29865905629](https://github.com/alephscriptorium-eng/S_SDK/actions/runs/29865905629) success — superseded por push tip.

## Tip · parte-kit / acta-kit (private)

En tip zeus `fe75269`: `@zeus/parte-kit` + `@zeus/acta-kit` en
`packages/engine/*` con `"private": true`. Canal real: `npm view` → **404**
(no npm públicos). Ficha viva
https://s-sdk.escrivivir.co/holones/01-mythos — nota C8 sin fila en tabla
de publicados.

## Nav C8 ampliado (post-deploy)

| URL | HTTP | señal |
| --- | ---- | ----- |
| https://z-sdk.escrivivir.co/ | 200 | Zeus SDK · Z_SDK / Juegos… |
| https://z-sdk.escrivivir.co/guide/publicar-la-web | 200 | Publicar la web… |
| https://z-sdk.escrivivir.co/games/ | 200 | Games |
| https://games.z-sdk.escrivivir.co/ | 200 | Zeus Games Library · Catálogo |
| https://games.z-sdk.escrivivir.co/startpacks | 200 | Start packs |
| https://games.z-sdk.escrivivir.co/releases | 200 | Releases |
| https://s-sdk.escrivivir.co/ | 200 | SCRIPT_SDK · Holón 07 |
| https://s-sdk.escrivivir.co/holones/01-mythos | 200 | 01 — Mythos · parte-kit + acta-kit |
| https://s-sdk.escrivivir.co/guide/publicar-la-web | 200 | Publicar la web… |
| https://s-sdk.escrivivir.co/guide/tuberia-protegida | 200 | La tubería, protegida (I75 intacta) |

CSS piel `/assets/style.DDFe9G3k.css` → **200** en las 3 raíces ·
`Server: GitHub.com`.

## NO hechos

- No CAMPANAS / no tick DE-I8 · sin inventar copy de campañas
- No force-push · sin commits en `HOLONES/*`
- No reopen Z17 / SEMILLA parked
- No un-private / publish de parte-kit · acta-kit
