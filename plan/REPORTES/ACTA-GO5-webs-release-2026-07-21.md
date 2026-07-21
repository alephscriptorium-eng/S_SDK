# ACTA — GO-5 · Webs + Release — 2026-07-21

| dato | valor |
| ---- | ----- |
| rol | brazo ops/docs webs (orquestador GO-5) |
| tip zeus | `48e2062` (`48e2062ff046648df52ae0740db4ec22cdb9a2a4` = `origin/main`) |
| Release run-id | **29857967650** — [Release](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29857967650) success @ `48e2062` (HOTFIX-GATES-3; primer Release verde post-touch `packages/**`) |
| CI tip (previo) | **29857964265** — [CI](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29857964265) success |
| método | skill `site-web` (`.claude/skills/site-web/SKILL.md` + `reference/protocolo-ghpages.md`) |
| Z17 / SEMILLA | **no reabre** Z17 · SEMILLA parked **no tocada** |

## Las 3 webs (paths reales)

Parejo VISION holón 01+07 · calibración `WEBS/CALIBRACION.md` · guías
`docs/guide/publicar-la-web.md` (S_SDK) y zeus
`docs/guide/publicar-la-web.md` (solo lectura submodule).

| # | dominio | repo / path fuente | tip deploy Docs |
| - | ------- | ------------------ | --------------- |
| 1 | https://z-sdk.escrivivir.co/ | `HOLONES/01-mythos/zeus-sdk` → `alephscriptorium-eng/Z_SDK` · `docs/` VitePress + piel zine · CNAME `docs/public/CNAME` | `48e2062` |
| 2 | https://games.z-sdk.escrivivir.co/ | `HOLONES/01-mythos/games-library` → `alephscriptorium-eng/Z_SDK-games-library` · `docs/` · CNAME `games.z-sdk.escrivivir.co` | `21a6592` (GL tip; GC-5 obra) |
| 3 | https://s-sdk.escrivivir.co/ | raíz `S_SDK` · `docs/` · instancia `WEBS/` · CNAME `s-sdk.escrivivir.co` | `087d81d` (bump zeus HOTFIX-GATES-3) |

**Fuera de alcance GO-5 (existe, no es packing GC+Release zeus):**
`https://skills.s-sdk.escrivivir.co/` (library método DE-I9) — **no** regenerada
aquí; skill `site-web` aplica al método, no exige redeploy de skills-library
para este GO.

## Regeneración / publicación (protocolo ghpages)

HOTFIX-GATES-3 tocó `packages/**` → Docs **no** disparó solo (frágil #7
`paths: docs/**`). Mitigación skill: `workflow_dispatch` Docs en `main`.

| repo | Docs run-id | conclusion | headSha |
| ---- | ----------- | ---------- | ------- |
| Z_SDK | [29858825757](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29858825757) | **success** (build + verify + deploy Pages) | `48e2062` |
| Z_SDK-games-library | [29858827677](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29858827677) | **success** | `21a6592` |
| S_SDK | [29858829917](https://github.com/alephscriptorium-eng/S_SDK/actions/runs/29858829917) | **success** | `087d81d` |

Gate local (S_SDK, skill `verificar-sitio.mjs` sobre `docs/.vitepress/dist`):

```
[verificar-sitio] dist=docs/.vitepress/dist base=/ html=12
  enlaces internos rotos: 0
  anclas rotas:           0
[verificar-sitio] OK
```

`npm run docs:build` S_SDK → EXIT=0 (vitepress 1.6.4).
Zeus `docs:build` local: **no** re-corrido completo aquí (falta
`@alephscript/mcp-core-sdk` en checkout submodule); CI Docs @ `48e2062`
cubrió build+verify — canal real de publicación.

Sin commits dentro de `HOLONES/*` (PRACTICAS delta 2 · submodules
read-only). Sin force-push.

## GC-1..5 citado (sin reabrir WPs)

Fuente gobierno: `plan/SPRINTS/sprint-game-city/BACKLOG.md` (olas cerradas).
No se reabre ningún WP; solo se cita el empaquetado vivo con el tip Release.

| ola | estado (gobierno) | packing con tip / Release |
| --- | ----------------- | ------------------------- |
| GC-1 | cerrada de facto | obra Z01/Z02/Z08 en tip GL/zeus |
| GC-1.5 | cerrada | Z14/Z09 en tip |
| GC-2..4 | cerradas (gobierno) | packs/libs en tip zeus `48e2062` + GL `21a6592` |
| GC-5 | cerrada (Z16 ✅ · Z17 ✅) | Z17 en tip zeus; HOTFIX-GATES-3 no reabre; Release **29857967650** @ `48e2062` |

## Evidencia nav (C8 ampliado)

Canal: fetch HTML vivo + parse título/H1 (navegación de contenido, no solo
`curl -I`). Post-deploy Docs GO-5 · 2026-07-21.

| URL | HTTP | título | H1 / señal |
| --- | ---- | ------ | ---------- |
| https://z-sdk.escrivivir.co/ | 200 | Zeus SDK | Z_SDK · Juegos de Ventana de Contexto |
| https://z-sdk.escrivivir.co/guide/publicar-la-web | 200 | Publicar la web… \| Zeus SDK | Publicar la web (portal de docs) |
| https://z-sdk.escrivivir.co/games/ | 200 | Games \| Zeus SDK | Games |
| https://games.z-sdk.escrivivir.co/ | 200 | Zeus Games Library | Juegos Z_SDK · Catálogo |
| https://games.z-sdk.escrivivir.co/startpacks | 200 | Start packs… | Start packs — consumo y release |
| https://games.z-sdk.escrivivir.co/releases | 200 | Releases… | Releases — start packs |
| https://s-sdk.escrivivir.co/ | 200 | SCRIPT_SDK | SCRIPT_SDK Holón 07 |
| https://s-sdk.escrivivir.co/holones/01-mythos | 200 | 01 — Mythos \| SCRIPT_SDK | 01 — Mythos |
| https://s-sdk.escrivivir.co/guide/publicar-la-web | 200 | Publicar la web… \| SCRIPT_SDK | Publicar la web (portal de docs) |

Assets piel (CSS VitePress servido):

- `z-sdk` `/assets/style.DDFe9G3k.css` → **200**
- `games.z-sdk` mismo asset → **200**
- `s-sdk` mismo asset → **200**

HTTPS + `Server: GitHub.com` en las tres raíces.

Nota: `https://z-sdk.escrivivir.co/guide/` (índice directorio) → **404**
esperado VitePress (la guía viva es `/guide/publicar-la-web`). No es enlace
roto de nav.

## Incidencias / `<pendiente>`

1. **Catálogo startpacks (games web):** paquete
   `packages/startpack-ciudad` existe en tip GL `21a6592`, pero la tabla
   pública `/startpacks` lista delta/pozo/sketch/solve-coagula/plaza —
   **sin** fila `ciudad`. Copy docs GL **no** actualizada en este GO
   (submodule read-only; no reopen Z02). `<pendiente>` ops/copy games-
   library si se quiere el packing GC visible en catálogo.
2. **skills.s-sdk.escrivivir.co:** superficie 4ª del patrón VISION; fuera
   de las 3 webs GC+Release zeus. Viva (200) · no regenerada GO-5.
3. Zeus `docs:build` local incompleto sin deps full install — no bloquea:
   Docs Actions verde @ tip.

## NO hechos

- No reopen Z17 / GC-5
- No tocar SEMILLA parked
- No force-push
- No commits en `HOLONES/*`
- No reescritura de copy de olas en portales zeus/games (solo redeploy)
