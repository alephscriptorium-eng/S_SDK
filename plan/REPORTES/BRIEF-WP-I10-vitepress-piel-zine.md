# Brief — WP-I10 · VitePress base + piel zine

_Orquestador holón 07 · 2026-07-19 · ola I1 (paralelo I10 ∥ I12)_

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I10 · VitePress base + piel zine
Rama: wp/i10-vitepress-piel-zine
Worktree: ../SCRIPT_SDK-wp-i10
Reporte: plan/REPORTES/WP-I10-vitepress-piel-zine.md

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I1 (VitePress + piel zine), DE-I2 (dominio
  s-sdk.escrivivir.co), DE-8 de TEST-SWARM (copia-release con cabecera
  de procedencia — patrón fanzine/casa)
- Fuentes a exportar (SOLO lectura; no mutar zeus ni games-library):
  - HOLONES/01-mythos/games-library/docs/.vitepress/config.mjs
    (resolveDocsBase ~L9–18; renombrar env a SSDK_DOCS_BASE)
  - C:\Users\aleph\OASIS\SCRIPTORIUM_V0\zeus-sdk\docs\.vitepress\theme\custom.css
    (piel zine → copia-release a docs/.vitepress/theme/custom.css)
  - docs/autoridades/ ya existente en este repo (integrar en nav)
- plan/BACKLOG.md tabla de fuentes + frágil #2 (base sin guard)

Notas del orquestador:
- Entregable: docs/ VitePress usable localmente. Config con base
  parametrizado SSDK_DOCS_BASE + guard MSYS (frágil #2). Theme con
  custom.css copia-release + cabecera de procedencia (DE-8). Nav incluye
  docs/autoridades/.
- CA: npm run docs:build verde; grep CDN/fuentes web = 0.
- NO implementar docs.yml ni CNAME (eso es I11, tras merge de I10).
- NO escribir docs/guide/publicar-la-web.md (eso es I12, paralelo).
- No tocar HOLONES/ (submodules read-only). No push. No editar BACKLOG.
- Commits: feat(docs): … o chore(docs): …

Empieza: sitúate en rama/worktree, lee PRACTICAS entero, luego implementa.
```
