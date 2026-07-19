# Brief — WP-I11 · docs.yml + CNAME

_Orquestador holón 07 · 2026-07-19 · ola I1 (tras merge I10 @ `550095d`)_

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I11 · docs.yml + CNAME
Rama: wp/i11-docs-yml-cname
Worktree: ../SCRIPT_SDK-wp-i11
Reporte: plan/REPORTES/WP-I11-docs-yml-cname.md

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I1/DE-I2 (web VitePress; dominio
  s-sdk.escrivivir.co) y DE-I13 (push raíz = GO custodio — no ejecutar)
- plan/BACKLOG.md WP-I11 (CA literal) + tabla de fuentes + frágiles
  #1 (CNAME), #4 (npm ci), #6 (sin spec-gen), #7 (gap paths)
- Fuente canónica a exportar (SOLO lectura; no mutar zeus ni library):
  C:\Users\aleph\OASIS\SCRIPTORIUM_V0\Z_SDK-games-library\.github\workflows\docs.yml
  (variante library: build→upload-pages-artifact→deploy-pages).
  Fallback si hace falta: submodule HOLONES/01-mythos/games-library
  (puede no traer docs/.github checked out — usar OASIS).
- docs/.vitepress/ ya en main tras I10 (config + theme + index).
- docs/guide/publicar-la-web.md (I12 ✅) — alinear checklist al workflow
  real que escribas; no reescribir la guía salvo typo bloqueante.

Notas del orquestador:
- Entregables:
  1) `.github/workflows/docs.yml` — export variante library:
     triggers push `main` + `wp/**` con `paths: docs/**`,
     `pull_request` paths docs/**, `workflow_dispatch`, concurrency
     (group docs-${{ github.workflow }}-${{ github.ref }},
     cancel-in-progress).
  2) Install con `npm ci` (corregir frágil #4; la fuente OASIS usa
     `npm install` — S_SDK debe usar ci).
  3) `docs/public/CNAME` = `s-sdk.escrivivir.co` (frágil #1).
  4) Sin spec-gen en el pipeline ni en docs:build (frágil #6).
  5) Documentar en el reporte el gap del filtro `paths: docs/**`
     (frágil #7): cambios solo en package.json / workflow / lock no
     disparan el job — cómo se mitiga (workflow_dispatch u otro).
- CA: workflow parsea (actionlint o equivalente / YAML válido);
  build CI verde en rama `wp/` (evidencia en reporte; sin push si el
  entorno no tiene remote usable — declarar canal real o pendiente).
- Deploy Pages solo en main (como la fuente library); build también
  en wp/** para validar.
- NO tocar theme/config VitePress (I10 ✅). NO reescribir
  publicar-la-web salvo ancla mínima. No editar BACKLOG. No push.
  No mutar HOLONES/ ni OASIS.
- Commits: ci(docs): … o chore(docs): …

Empieza: sitúate en rama/worktree (crear desde main @ 550095d si falta),
lee PRACTICAS entero, luego implementa.
```
