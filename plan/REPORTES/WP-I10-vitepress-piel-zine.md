# WP-I10 · vitepress-piel-zine — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i10 (holón 07) |
| fecha | 2026-07-19 |
| rama | `wp/i10-vitepress-piel-zine` |
| worktree | `C:\Users\aleph\SCRIPT_SDK-wp-i10` |
| commits | `a80b4e2` feat(docs) · `386742d` docs reporte |
| estado propuesto | listo para revisión |

## Qué se hizo

Sin desviaciones de alcance. Se montó `docs/` VitePress usable en local:
`resolveDocsBase()` con env `SSDK_DOCS_BASE` y guard MSYS (frágil #2);
theme `custom.css` copia-release desde zeus con cabecera de procedencia
(DE-8); `theme/index.js` importa el CSS; portada mínima `docs/index.md`;
nav/sidebar integran `docs/autoridades/` ya existente. Se añadió
`vitepress@^1.6.4` (devDependency) y se regeneró el lock. No se escribió
`docs.yml` ni `CNAME` (I11); no se escribió `docs/guide/publicar-la-web.md`
(I12). Sin push; sin editar BACKLOG; sin tocar `HOLONES/`.

Fuente de config: lectura de
`C:\Users\aleph\OASIS\SCRIPTORIUM_V0\Z_SDK-games-library\docs\.vitepress\config.mjs`
(tabla BACKLOG). El path del brief
`HOLONES/01-mythos/games-library/docs/.vitepress/config.mjs` no estaba
presente en el worktree (submodule sin checkout de docs) — ver §hallazgos.

## Archivos tocados

- `docs/.vitepress/config.mjs` — creado: base `SSDK_DOCS_BASE` + guard MSYS; nav autoridades
- `docs/.vitepress/theme/custom.css` — creado: copia-release piel zine + cabecera procedencia
- `docs/.vitepress/theme/index.js` — creado: DefaultTheme + import CSS
- `docs/index.md` — creado: portada home mínima
- `package.json` — modificado: `devDependencies.vitepress ^1.6.4`
- `package-lock.json` — modificado: lock con vitepress y árbol
- `plan/REPORTES/WP-I10-vitepress-piel-zine.md` — creado: este reporte

## Evidencia

> No inventes observaciones. Salida literal o `⏳ sin verificar`.

```text
$ git -C C:/Users/aleph/SCRIPT_SDK worktree add ../SCRIPT_SDK-wp-i10 -b wp/i10-vitepress-piel-zine
Preparing worktree (new branch 'wp/i10-vitepress-piel-zine')
HEAD is now at 092fe5f docs(plan): asentar plan/ canónico I0✅ y lanzar ola I1 (I10∥I12)

$ npm install
added 127 packages, and audited 128 packages in 33s
…
EXIT_INSTALL=0

$ npm run docs:build

> script-sdk@0.0.0 docs:build
> vitepress build docs

  vitepress v1.6.4
✓ building client + server bundles...
✓ rendering pages...
build complete in 8.97s.
BUILD_EXIT=0

$ rg -n -i "cdn|fonts\.google|googleapis\.com/css|typekit|fontshare|bunny\.net/fonts|@import\s+url\s*\(\s*['\"]https?" docs/ --glob '!**/.vitepress/dist/**' --glob '!**/.vitepress/cache/**'
(sin salida)
GREP_CDN_EXIT=1   # ripgrep: 1 = cero matches

$ rg -n -i "cdn\.|fonts\.googleapis|fonts\.gstatic|unpkg\.com|jsdelivr\.net|cdnjs\.|typekit\.net" docs/.vitepress/dist/
(sin salida)
GREP_DIST_EXIT=1

$ SSDK_DOCS_BASE='C:/Program Files/Git/foo' node -e "import('./docs/.vitepress/config.mjs').then(m=>console.log('base=', m.default.base))"
base= /
```

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo dentro de TEST-SWARM/: **N/A por delta 1 de
      `plan/PRACTICAS.md`** — este mundo escribe en todo S_SDK; el diff
      vive en `docs/`, `package.json`, `package-lock.json`,
      `plan/REPORTES/` (ningún mundo ajeno ni `HOLONES/`).
- [x] Cero árboles/ficheros copiados de otros mundos (salvo `fanzine.css`
      / piel zine con cabecera): **sí** — `custom.css` es copia-release
      autorizada (DE-8) con cabecera de procedencia citada.
- [x] Sellos con fuente; rutas citadas existentes: sí (OASIS zeus +
      games-library leídos; autoridades en disco).
- [x] Nombres en castellano, sin transición: sí (`autoridades/` intacto;
      sin `-old`/`legacy`).
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`; las Notas, no el
      pitch: sí (portada mínima; dominio citado como DE-I2, workflow → I11).
- [x] Cero moneda; munición = idea/obra; cifras en puntos de scrum (gate e): sí.
- [x] La M como forma; física solo con procedencia citada: N/A (no se
      habla de M aquí).
- [x] Web fiel a la plantilla fanzine (sin fuentes/CDNs/paleta ajena): sí
      (Courier local; grep CDN = 0).
- [x] Gates ejecutados de verdad: sí (`docs:build` + grep, salida literal).
- [x] Commits convencionales: sí (`feat(docs): …`).
- [x] Diff solo del alcance: sí (solo I10; sin I11/I12/BACKLOG/push).

## Hallazgos fuera de alcance

1. El path del brief
   `HOLONES/01-mythos/games-library/docs/.vitepress/config.mjs` no existe
   aún en el worktree (submodule games-library sin árbol docs checked out).
   Se usó la fuente absoluta de la tabla BACKLOG en OASIS. Candidato: tick
   de `submodule update --init` / verificación I03 post-merge, no fix aquí.
2. `npm install` reportó 3 vulnerabilities (2 moderate, 1 high) en el árbol
   de vitepress — fuera de CA de I10; no se audit-fixeó.
3. La portada menciona «Dominio previsto… → WP-I11» como puntero; el
   workflow real sigue pendiente de I11.

## Dudas / bloqueos

Ninguno bloqueante. CA de I10 cumplido en local.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
