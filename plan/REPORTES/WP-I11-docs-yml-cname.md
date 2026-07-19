# WP-I11 · docs-yml-cname — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i11 (holón 07) |
| fecha | 2026-07-19 |
| rama | `wp/i11-docs-yml-cname` |
| worktree | `C:\Users\aleph\SCRIPT_SDK-wp-i11` |
| commits | `444b33b` ci(docs); este reporte en el commit `docs(plan)` siguiente |
| estado propuesto | listo para revisión |

## Qué se hizo

Sin desviaciones de alcance. Se exportó la variante library de
`docs.yml` (build → upload-pages-artifact → deploy-pages) desde OASIS
games-library: triggers `push` main+`wp/**` con `paths: docs/**`,
`pull_request` paths `docs/**`, `workflow_dispatch`, concurrency
`docs-${{ github.workflow }}-${{ github.ref }}`. Install con `npm ci`
(frágil #4; la fuente usa `npm install`). `docs/public/CNAME` =
`s-sdk.escrivivir.co` (frágil #1). Sin spec-gen en pipeline ni
`docs:build` (frágil #6). Gap `paths: docs/**` (frágil #7) documentado
en cabecera del workflow, en la guía y en este reporte. Ancla mínima en
`docs/guide/publicar-la-web.md`: se quitaron `<pendiente I11>` (y
residuos I10 ya ✅) para calzar con el workflow real — brief:
«alinear checklist». Sin push (DE-I13); sin editar BACKLOG; sin tocar
theme/config VitePress ni `HOLONES/` ni OASIS.

## Archivos tocados

- `.github/workflows/docs.yml` — creado: export library + `npm ci` + comentarios frágiles #4/#6/#7
- `docs/public/CNAME` — creado: `s-sdk.escrivivir.co`
- `docs/guide/publicar-la-web.md` — modificado: ancla mínima; checklist alineada al workflow real
- `plan/REPORTES/WP-I11-docs-yml-cname.md` — creado: este reporte

## Evidencia

> No inventes observaciones. Salida literal o `⏳ sin verificar`.

```text
$ git -C C:/Users/aleph/SCRIPT_SDK worktree add ../SCRIPT_SDK-wp-i11 -b wp/i11-docs-yml-cname main
Preparing worktree (new branch 'wp/i11-docs-yml-cname')
HEAD is now at b143689 docs(plan): aceptar I10/I12 en BACKLOG y brief WP-I11

$ npm ci
added 127 packages, and audited 128 packages in 12s
…
NPM_CI_EXIT=0

$ npm run docs:build

> script-sdk@0.0.0 docs:build
> vitepress build docs

  vitepress v1.6.4
✓ building client + server bundles...
✓ rendering pages...
build complete in 10.26s.
BUILD_EXIT=0

$ cat docs/public/CNAME
s-sdk.escrivivir.co

$ cat docs/.vitepress/dist/CNAME
s-sdk.escrivivir.co

$ ruby -ryaml -e "YAML.load_file('.github/workflows/docs.yml'); puts 'RUBY_YAML_OK'"
RUBY_YAML_OK

$ node (checks estructurales: name, branches, paths, dispatch, concurrency, npm ci, docs:build, upload, deploy, artifact path)
OK name / branches / paths / dispatch / concurrency / npm ci / docs:build / upload / deploy / artifact path
install runs: [ '        run: npm ci', '        run: npm run' ]
PARSE_EXIT=0

$ actionlint
⏳ sin verificar — binario actionlint / npx actionlint no disponible en el entorno
(parser Ruby + asserts estructurales OK)

$ CI Actions en rama wp/
⏳ sin verificar — sin push al remoto (DE-I13 / brief: no push). Canal real de
CA «build CI verde en rama wp/» = build local `npm ci` + `npm run docs:build`
EXIT=0 en worktree de rama `wp/i11-docs-yml-cname`. Run de GitHub Actions
queda pendiente del GO de push raíz.
```

### Gap paths (frágil #7) — documentación

Filtro `paths: docs/**` en `push`/`pull_request`: un cambio **solo** en
`package.json`, `package-lock.json` o `.github/workflows/docs.yml` **no**
dispara el job. Mitigación operativa:

1. Actions → Docs → **Run workflow** (`workflow_dispatch`), o
2. Push que toque algún path bajo `docs/**` (p. ej. bump menor de guía o
   del propio `docs/public/CNAME`).

Documentado también en cabecera de `docs.yml` y en
`docs/guide/publicar-la-web.md` §Publicar.

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo dentro de TEST-SWARM/: **N/A por delta 1 de
      `plan/PRACTICAS.md`** — este mundo escribe en todo S_SDK; el diff
      vive en `.github/workflows/`, `docs/`, `plan/REPORTES/`.
- [x] Cero árboles/ficheros copiados de otros mundos: se **citó** la
      fuente OASIS library; el YAML se reescribió (npm ci, dominio S_SDK),
      no se copió el árbol.
- [x] Sellos con fuente; rutas citadas existentes: CNAME y workflow en
      disco; fuente leída en
      `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\Z_SDK-games-library\.github\workflows\docs.yml`.
- [x] Nombres en castellano, sin transición: guía/reporte en castellano;
      ids de Actions (`Docs`, job names) siguen convención de la fuente.
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: CI remoto marcado
      `⏳ sin verificar`.
- [x] Cero moneda; munición = idea/obra; cifras en puntos de scrum: N/A.
- [x] La M como forma: N/A.
- [x] Web fiel a fanzine: no se tocó theme/CSS; CNAME no introduce CDN.
- [x] Gates ejecutados de verdad: `npm ci` + `docs:build` EXIT=0;
      YAML parse Ruby OK; actionlint pendiente.
- [x] Commits convencionales: `ci(docs): …`.
- [x] Diff solo del alcance: docs.yml + CNAME + ancla guía I12 + reporte.
      Sin BACKLOG, sin I10 theme, sin push, sin HOLONES/OASIS.

## Hallazgos fuera de alcance

- `npm audit` reportó 3 vulnerabilidades en el árbol vitepress tras
  `npm ci` — no es CA de I11; candidato a higiene deps si el orquestador
  lo pide.
- PyYAML trata la clave `on` de Actions como booleano YAML 1.1 (`True`);
  no invalida el workflow en GHA. Validar con actionlint cuando haya
  binario, o con el loader de Actions.

## Dudas / bloqueos

Ninguno de implementación. CA «build CI verde en rama `wp/`» cubierto en
canal local; evidencia de run en GitHub Actions pendiente de push
autorizado (DE-I13).

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
