# Acta OPS · H2.3 · arqueología flotas `wp/u*` — 2026-07-22

| dato | valor |
| ---- | ----- |
| rol | ops arqueología H2.3 |
| claim | inventario `origin/wp/u*` · ficha camino U-sprints · poda solo `--merged origin/main` |
| tick custodio | **RECIBIDO** |
| force-push | **no** |
| embajador | **no tocado** |
| tip Z_SDK `origin/main` (pre/post) | `1086392` (`1086392d67d6398b43ccf5379062713b3c0dd486`) |
| tip GL `origin/main` (pre/post) | `406000f` (`406000f9f5e1fb302419265cbe84a6c7c3e451fe`) |
| ficha compañera | [`FICHA-camino-U-sprints-2026-07-22.md`](./FICHA-camino-U-sprints-2026-07-22.md) |

## Resumen conteos

| repo | inventario remoto | locales `wp/u*` | borradas (merged) | conservadas (no-merged) |
| ---- | ----------------- | --------------- | ----------------- | ----------------------- |
| Z_SDK (zeus-sdk) | **30** | 0 | **28** | **2** |
| GL (games-library) | **20** | 0 | **20** | **0** |
| **total** | **50** | **0** | **48** | **2** |

Estimación brief (~34 / ~21) vs reality post-`fetch --prune`: 30 / 20.

## CA H2.3

| id | criterio | veredicto | evidencia |
| -- | -------- | --------- | --------- |
| CA1 | acta-inventario completa (ref · SHA · fecha · subject) | **PASS** | §§ Inventario Z_SDK / GL abajo |
| CA2 | borradas/conservadas listadas | **PASS** | §§ Poda |
| CA3 | Z_SDK main intacto `1086392` o tip actual | **PASS** | pre=post `1086392d67d6398b43ccf5379062713b3c0dd486` |
| CA4 | GL main intacto `406000f` | **PASS** | pre=post `406000f9f5e1fb302419265cbe84a6c7c3e451fe` |
| CA5 | poda solo merged; sin force-push | **PASS** | `git push origin --delete` (sin `-f`) |

---

## Inventario Z_SDK · `refs/remotes/origin/wp/u*`

`for-each-ref` @ claim (antes de poda). Locales `refs/heads/wp/u*`: **vacío**.

| ref | SHA | fecha | subject | merged? |
| --- | --- | ----- | ------- | ------- |
| `origin/wp/u03-z-sdk-ci` | `d1ffa30` | 2026-07-17 16:59:49 +0200 | chore(ci): Actions con lint, gates y matriz de tests | sí → borrada |
| `origin/wp/u55-demoler-file-deps` | `655a4ec` | 2026-07-19 00:34:36 +0200 | docs(plan): revisión orquestador acepta U55 | sí → borrada |
| `origin/wp/u109-solve-ports` | `54dd0af` | 2026-07-18 13:49:04 +0200 | docs(plan): hashes library en reporte WP-U109 | sí → borrada |
| `origin/wp/u110-startpack-kit` | `e450f6b` | 2026-07-18 14:02:35 +0200 | docs(plan): reporte WP-U110 startpack-kit | sí → borrada |
| `origin/wp/u111-editor-materialize-narrativo` | `1c20215` | 2026-07-18 18:45:00 +0200 | docs(plan): hash corrección WP-U111 (0079ee1) | sí → borrada |
| `origin/wp/u112-carpeta-instantiate-from-obra` | `d1bc299` | 2026-07-18 19:07:02 +0200 | docs(plan): hashes commits WP-U112 en reporte | sí → borrada |
| `origin/wp/u113-widgets-solve-view-kit` | `76db097` | 2026-07-18 19:32:36 +0200 | docs(reportes): tip ff70f35 en hashes WP-U113 | sí → borrada |
| `origin/wp/u114-dialectos-story-board-editor` | `6d507e5` | 2026-07-18 19:46:48 +0200 | docs(reportes): tip commit WP-U114 | sí → borrada |
| `origin/wp/u115-schema-story-board-ajv` | `530cb8b` | 2026-07-18 19:58:56 +0200 | docs(plan): aclara commits WP-U115 en reporte | sí → borrada |
| `origin/wp/u116-cast-table-alias` | `0eec9eb` | 2026-07-18 20:16:04 +0200 | feat(view-kit): id canónico cast-table + alias panel-elenco | **no** → conservada |
| `origin/wp/u117-story-board-schema` | `ef87f96` | 2026-07-18 20:26:34 +0200 | docs(plan): reporte WP-U117 con hashes de commit | sí → borrada |
| `origin/wp/u119-ci-main-verde` | `3d45b8b` | 2026-07-18 21:45:22 +0200 | docs(plan): revisión orquestador WP-U119 aceptado | sí → borrada |
| `origin/wp/u120-prosa-zeus-docs` | `14982d4` | 2026-07-18 21:54:25 +0200 | docs(plan): tip HEAD en reporte WP-U120 | sí → borrada |
| `origin/wp/u121-prosa-library-docs` | `4115dcb` | 2026-07-18 21:55:16 +0200 | docs(plan): revisión orquestador WP-U121 aceptado | sí → borrada |
| `origin/wp/u122-registry-password-auth` | `409c3bb` | 2026-07-18 22:14:52 +0200 | docs(plan): tip HEAD ed6a21a reporte WP-U122 | sí → borrada |
| `origin/wp/u123-retiro-file-deps` | `ac5f93b` | 2026-07-19 00:34:41 +0200 | docs(plan): revisión orquestador acepta U123 | sí → borrada |
| `origin/wp/u124-copy-web-a` | `7d1d607` | 2026-07-19 03:27:45 +0200 | docs(plan): reporte WP-U124 CAPA hero W-A | sí → borrada |
| `origin/wp/u125-copy-web-b` | `4f28d46` | 2026-07-19 03:34:48 +0200 | chore(plan): acepta revisión orquestador WP-U125 | sí → borrada |
| `origin/wp/u126-release-startpack-yml` | `97089cf` | 2026-07-19 03:15:14 +0200 | docs(reportes): reporte WP-U126 release-startpack.yml | sí → borrada |
| `origin/wp/u127-higiene-worktrees` | `0f9b53f` | 2026-07-19 03:46:05 +0200 | docs(reportes): WP-U127 desbloqueado — cáscara u123 retirada | sí → borrada |
| `origin/wp/u128-zeus-deps-semver` | `03031ff` | 2026-07-19 03:40:56 +0200 | docs(reportes): reporte WP-U128 zeus deps caret semver | sí → borrada |
| `origin/wp/u129-estado-repo-links` | `1d865e2` | 2026-07-19 03:41:00 +0200 | docs(reportes): reporte WP-U129 links estado.md → Z_SDK | sí → borrada |
| `origin/wp/u130-plantilla-sprint` | `0ff0fcd` | 2026-07-19 04:06:56 +0200 | docs(reportes): acepta WP-U130 plantilla sprint (revisión orquestador) | sí → borrada |
| `origin/wp/u131-publicar-la-web` | `2a41a0c` | 2026-07-19 03:50:31 +0200 | docs(report): tip commits WP-U131 | sí → borrada |
| `origin/wp/u132-wb-prime-canales` | `fe0ed58` | 2026-07-19 14:59:49 +0200 | docs(reportes): ancla commit library en reporte WP-U132 | **no** → conservada |
| `origin/wp/u133-practicas-c8-c9` | `e25fd71` | 2026-07-19 14:57:54 +0200 | docs(reportes): hash final WP-U133 | sí → borrada |
| `origin/wp/u134-archivar-entregas` | `aed60e7` | 2026-07-19 14:58:55 +0200 | docs(reportes): hashes completos WP-U134 | sí → borrada |
| `origin/wp/u135-protocolo-actions-gh` | `d665173` | 2026-07-19 15:19:08 +0200 | docs(plan): tip commits en cabecera reporte U135 | sí → borrada |
| `origin/wp/u136-c8-startpacks-residual` | `085c38f` | 2026-07-19 15:43:17 +0200 | docs(reportes): evidencia CI WP-U136 (Docs+CI success) | sí → borrada |
| `origin/wp/u139-api-nav-cuerpo` | `bc0b2ac` | 2026-07-19 17:02:19 +0200 | docs(reportes): evidencia Docs U139 (CI N/A md-only) | sí → borrada |

### Poda Z_SDK

**Borradas (28)** — `git branch -r --merged origin/main` ∩ `origin/wp/u*`:

`u03` · `u55` · `u109` · `u110` · `u111` · `u112` · `u113` · `u114` · `u115` · `u117` · `u119` · `u120` · `u121` · `u122` · `u123` · `u124` · `u125` · `u126` · `u127` · `u128` · `u129` · `u130` · `u131` · `u133` · `u134` · `u135` · `u136` · `u139`

**Conservadas (2)** — no-merged:

| ref | SHA | motivo |
| --- | --- | ------ |
| `origin/wp/u116-cast-table-alias` | `0eec9eb` | tip no ancestro de `origin/main` |
| `origin/wp/u132-wb-prime-canales` | `fe0ed58` | tip no ancestro de `origin/main` |

Post-poda remotes `wp/u*`: solo esas 2.

---

## Inventario GL · `refs/remotes/origin/wp/u*`

`for-each-ref` @ claim (antes de poda). Locales `refs/heads/wp/u*`: **vacío**.

| ref | SHA | fecha | subject | merged? |
| --- | --- | ----- | ------- | ------- |
| `origin/wp/u61-migrate-games` | `daddf72` | 2026-07-18 11:37:01 +0200 | fix(scripts): realpath Zeus SDK root for Windows junctions (WP-U61) | sí → borrada |
| `origin/wp/u62-release-pipeline` | `688be30` | 2026-07-18 12:01:18 +0200 | feat(startpack): pipeline Notario + @zeus/startpack-delta/pozo (WP-U62) | sí → borrada |
| `origin/wp/u70-editor-gamemaps` | `b4a8fb6` | 2026-07-18 12:25:42 +0200 | feat(startpack): @zeus/startpack-sketch + fila Notario (WP-U70) | sí → borrada |
| `origin/wp/u86-carpeta-dramaturgo` | `a28b9ad` | 2026-07-18 12:18:15 +0200 | feat(kits): CARPETA DRAMATURGO — plantilla experiencia (WP-U86) | sí → borrada |
| `origin/wp/u107-games-catalog-pages` | `dfd6f06` | 2026-07-18 12:44:29 +0200 | feat(docs): catálogo VitePress Pages + piel zine (WP-U107) | sí → borrada |
| `origin/wp/u109-solve-ports` | `ced9af1` | 2026-07-18 13:48:17 +0200 | refactor(pozo,solve-coagula): puertos vía presets-sdk slots (U109) | sí → borrada |
| `origin/wp/u110-startpack-kit` | `22c7d0d` | 2026-07-18 14:02:12 +0200 | feat(startpack-kit): extract shared loadStartPack (WP-U110) | sí → borrada |
| `origin/wp/u111-editor-materialize-narrativo` | `51d7420` | 2026-07-18 18:30:40 +0200 | feat(startpack-plaza): pack narrativo para editor U111 | sí → borrada |
| `origin/wp/u112-carpeta-instantiate-from-obra` | `5c48c7d` | 2026-07-18 19:06:58 +0200 | feat(carpeta-dramaturgo): instantiate --from obra (U112) | sí → borrada |
| `origin/wp/u113-widgets-solve-view-kit` | `5ab457a` | 2026-07-18 19:31:48 +0200 | feat(solve-coagula): monta panel-elenco vía view-kit | sí → borrada |
| `origin/wp/u115-schema-story-board-ajv` | `7050664` | 2026-07-18 19:57:49 +0200 | feat(carpeta-dramaturgo): valida story-board con AJV | sí → borrada |
| `origin/wp/u117-story-board-schema` | `233c564` | 2026-07-18 20:26:25 +0200 | refactor(carpeta-dramaturgo): consume @zeus/story-board-schema (WP-U117) | sí → borrada |
| `origin/wp/u121-prosa-library-docs` | `2314b8e` | 2026-07-18 21:52:51 +0200 | docs(portal): prosa library sin fechas/versiones a mano (WP-U121) | sí → borrada |
| `origin/wp/u123-retiro-file-deps` | `e70a40d` | 2026-07-18 23:54:42 +0200 | chore(u123): quitar .gitignore.tmp accidental | sí → borrada |
| `origin/wp/u125-copy-web-b` | `eb06199` | 2026-07-19 03:31:06 +0200 | docs(portal): capa editorial W-B (hero, solve-coagula, call4makers) | sí → borrada |
| `origin/wp/u126-release-startpack-yml` | `6c5241a` | 2026-07-19 03:14:45 +0200 | fix(ci): comentar prosa inválida en release-startpack.yml | sí → borrada |
| `origin/wp/u128-zeus-deps-semver` | `43b6f9b` | 2026-07-19 03:40:13 +0200 | fix(deps): fijar @zeus/* de "*" a caret semver | sí → borrada |
| `origin/wp/u131-publicar-la-web` | `2014816` | 2026-07-19 03:49:56 +0200 | docs: puntero corto publicar la web (pipeline Pages) | sí → borrada |
| `origin/wp/u132-wb-prime-canales` | `c55955b` | 2026-07-19 14:59:04 +0200 | docs(portal): W-B′ verdad de canales CAPA rev2 (WP-U132) | sí → borrada |
| `origin/wp/u136-c8-startpacks-residual` | `b3efec1` | 2026-07-19 15:39:34 +0200 | docs(startpacks): Registry doctrinal C8 (sin fence npm 404) | sí → borrada |

### Poda GL

**Borradas (20)** — todas las del inventario (100 % merged en `origin/main`).

**Conservadas (0)** — ninguna no-merged.

Post-poda remotes `wp/u*`: **vacío**.

---

## Comandos literales

```text
# Inventario (ambos repos)
git fetch origin --prune
git for-each-ref --format="%(refname)|%(objectname:short)|%(committerdate:iso8601)|%(subject)" "refs/remotes/origin/wp/u*"
git for-each-ref --format="..." "refs/heads/wp/u*"
git branch -r --merged origin/main    # filtrar origin/wp/u*
git branch -r --no-merged origin/main

# Poda (solo merged; sin -f)
git push origin --delete <lista-merged-wp/u*>

# CA mains
git rev-parse --short=7 origin/main   # Z → 1086392 · GL → 406000f
```

## NO hechos

- No force-push
- No borrar no-merged (`u116`, `u132` en Z_SDK)
- No embajador / parked
- No rewrite de `main` en Z_SDK ni GL
- Ficha skills-library `instancias/`: no materializada este tick (commit solo S_SDK); al copiar → ceguera = 0 obligatoria
