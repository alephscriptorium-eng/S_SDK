# Acta · webs-post-city cierre · WW-Z∥WW-G∥WW-S · 2026-07-22

| dato | valor |
| ---- | ----- |
| sprint | [`sprint-webs-post-city`](../SPRINTS/sprint-webs-post-city/) |
| ola | **WW-1** ✅ |
| umbrella | [S_SDK #32](https://github.com/alephscriptorium-eng/S_SDK/issues/32) → **CLOSED** |
| tip zeus | `2917634` (obra WW-Z `2985c76` + Jugar→ciudad + UTF-8) |
| tip GL | `2802f6a` (obra WW-G `4a74b98` + hotfix Docs `npm install`) |
| tip S webs | merge `f0ee71d` · reportes Z/G/S |
| listo-R16-webs | **sí** |
| vetos | no T1/S04 · Z_SDK #4/#5/#6 OPEN · no E_SDK · no force |

## CA re-verificados (aceptación)

| WP | tip obra | ejes III·IV | ceguera | docs:build local |
| -- | -------- | ----------- | ------- | ---------------- |
| **WW-Z** | `2985c76` | ✅ puertas + registry/startpacks sensor | ✅ árbol 0 · hist scrub WP-U152 | vitepress ✅ |
| **WW-G** | `4a74b98` ⊃ W2 | ✅ ficha única + Release/regla 6 | ✅ `ciudad.md` 0 | docs:build ✅ |
| **WW-S** | `8e497ea` | ✅ arco/vigía sin duplicar devops | ✅ WP-id/sesión 0 en prosa | docs:build ✅ |

∩ diffs repos = ∅ (zeus docs · GL docs · S docs+reportes).

## Runner (regla 16)

| repo | tip | CI | Docs / homólogo |
| ---- | --- | --- | --------------- |
| **zeus-sdk** | `2917634` | [29924286352](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29924286352) ✅ (Jugar retarget) · obra [29923895538](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29923895538) ✅ | [29924574684](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29924574684) ✅ tip |
| **games-library** | `2802f6a` | [29924164870](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29924164870) ✅ · obra [29923898991](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29923898991) ✅ | [29924167429](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29924167429) ✅ (tras hotfix; 29923898966 ❌ npm ci) |
| **S_SDK** | tip gobierno este acta | — (docs-only) | [29923991880](https://github.com/alephscriptorium-eng/S_SDK/actions/runs/29923991880) ✅ pre-cierre · tip post-push en commit gobierno |

## C8 post-deploy

| URL | HTTP |
| --- | ---- |
| https://games.z-sdk.escrivivir.co/games/ciudad | **200** |
| https://z-sdk.escrivivir.co/ | **200** (Jugar → games/ciudad) |
| https://z-sdk.escrivivir.co/guide/external-handshake | **200** |
| https://z-sdk.escrivivir.co/guide/kits-foss | **200** |
| https://s-sdk.escrivivir.co/ | **200** |
| https://s-sdk.escrivivir.co/guide/el-vigia-juega | **200** |
| https://s-sdk.escrivivir.co/holones/07-script-sdk | **200** |

## Micro follow-ups (mismo lote)

1. **GL Docs:** `npm ci` falló (lockfile vs `@zeus/protocol@^0.3` en ciudad) → hotfix `2802f6a` alinea Docs a `npm install` (como CI).
2. **WW-Z Jugar:** retarget `startpacks` → `/games/ciudad` tras C8 200 + restore UTF-8 (`2917634`).

## Sync-map (regla 17 · post-apply)

`plan/SPRINTS/sprint-webs-post-city/.sync-map.json` → umbrella **#32**.

## Higiene

Worktrees/ramas `wp/ww-*` removidos tras merge (×3 repos). T1/S04 **no** tocados en este cierre (ops ∥).

## Fuera

bosque S03 · E_SDK · force · cerrar Z#4/#5/#6 · reopen CR.
