# WP-I02 · workspace-raiz — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i02 (holón 07) |
| fecha | 2026-07-19 |
| rama | `wp/i02-workspace-raiz` |
| worktree | `C:\Users\aleph\SCRIPT_SDK-wp-i02` |
| commits | `84ba6f3` feat package.json/.npmrc · `c8cef5a` chore .gitignore · `9d39491` docs reporte |
| estado propuesto | listo para revisión |

## Qué se hizo

Sin desviaciones de alcance. Se asentó el workspace raíz vacío de main:
`package.json` con `engines.node >=22` y scripts planos `docs:dev` /
`docs:build` (`vitepress … docs`); `.npmrc` con scopes `@zeus` y
`@alephscript` al registry vivo; `.gitignore` con `dist/`,
`docs/.vitepress/dist/` (frágil #5) y tipicos de node. No se añadieron
dependencias npm (VitePress entra en I10); `package-lock.json` vacío de
deps se commiteó porque `npm install` lo generó. No se tocó I01/I03 ni
BACKLOG; sin push ni publish.

## Archivos tocados

- `package.json` — creado: engines node 22 + scripts docs planos
- `package-lock.json` — creado: lock vacío (solo el paquete raíz)
- `.npmrc` — creado: scopes @zeus / @alephscript → canal C8
- `.gitignore` — creado: dist/ + docs/.vitepress/dist/ + tipicos node
- `plan/REPORTES/WP-I02-workspace-raiz.md` — creado: este reporte

## Evidencia

> No inventes observaciones. Salida literal o `⏳ sin verificar`.

```text
$ node -v
v22.21.1

$ npm install
up to date, audited 1 package in 5s

found 0 vulnerabilities
EXIT_INSTALL=0

$ npm view @zeus/protocol --registry=https://npm.scriptorium.escrivivir.co
@zeus/protocol@0.2.0 | AIPLv1 | deps: 1 | versions: 1
Contrato único Zeus: envelope state|intent|track|ledger, makeIntent, roles, gates, Peer Card, AsyncAPI

dist
.tarball: https://npm.scriptorium.escrivivir.co/@zeus/protocol/-/protocol-0.2.0.tgz
.shasum: a2c4cfcf2ab1da026c224fa8acc1a9c3d4333991
.integrity: sha512-MV8zi2DIWl3CRvADwjt68m9N0ZyfZWoFmnZsdPMF/VYyCRa5vEFHU2DqGV9DmsUcwcjNOKLmFHXiS7mBKxLgGg==

dependencies:
yaml: ^2.8.0

dist-tags:
latest: 0.2.0

published 19 hours ago
EXIT_VIEW=0

$ npm view @zeus/protocol version --registry=https://npm.scriptorium.escrivivir.co
0.2.0
EXIT_VER=0

$ npm view @zeus/protocol   # vía .npmrc scoped, sin --registry
@zeus/protocol@0.2.0 | AIPLv1 | deps: 1 | versions: 1
… (mismo tarball en npm.scriptorium.escrivivir.co)
EXIT_SCOPED=0
```

Nota: `npm install` verde sin `node_modules/` porque no hay dependencies /
devDependencies aún; el lockfile solo registra el paquete raíz. Los
scripts `docs:*` quedan declarados para I10 (montaje VitePress).

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo dentro de TEST-SWARM/: **N/A por delta 1 de
      `plan/PRACTICAS.md`** — este mundo escribe en todo S_SDK; el diff
      vive en raíz (`package.json`, `.npmrc`, `.gitignore`,
      `plan/REPORTES/…`). Cero toques a `HOLONES/*` ni mundos ajenos.
- [x] Cero árboles/ficheros copiados de otros mundos: solo se **citó** el
      patrón de scopes de
      `Z_SDK-games-library/.npmrc` y scripts de su `package.json`
      (lectura); no se copió fichero alguno.
- [x] Sellos con fuente; rutas citadas existentes: CA ejecutado contra
      canal real; versión `0.2.0` observada (coincide con HANDOFF, no
      asumida).
- [x] Nombres en castellano, sin transición: reporte y carpeta
      `plan/REPORTES/` en castellano; nombres de tooling (`package.json`,
      `.npmrc`) son convención de ecosistema, no transición.
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: scripts docs
      declarados; build real queda en I10 (`<pendiente>` hasta I10).
- [x] Cero moneda; munición = idea/obra; cifras en puntos de scrum: N/A.
- [x] La M como forma; física solo con procedencia: N/A.
- [x] Web fiel a la plantilla fanzine: N/A (este WP no monta docs/).
- [x] Gates ejecutados de verdad: `npm install` + `npm view` literales
      arriba.
- [x] Commits convencionales: `feat:` / `chore:` / `docs:`.
- [x] Diff solo del alcance: solo entregables WP-I02 + reporte.

## Hallazgos fuera de alcance

1. **Conflicto `.gitignore` con WP-I01 (verificado en worktree I01).**
   Main no tenía `.gitignore`. I02 crea uno (node + `dist/` +
   `docs/.vitepress/dist/`). I01 en
   `C:\Users\aleph\SCRIPT_SDK-wp-i01\.gitignore` (rama
   `wp/i01-higiene-backstage`) trae solo backstage DE-I11:
   `VIGILANCIA/`, `ADDENDA/`, `HANDOFF_*`, `/HIPOTESIS.md` — sin
   `dist/` ni tipicos node. Merge = conflicto de creación dual;
   resolución: **unión** de ambas listas; no descartar el lado I02.
2. **`plan/` aún no está en main** (solo working tree del checkout
   principal). Este reporte se commitea en la rama I02 bajo
   `plan/REPORTES/`; el orquestador deberá ordenar el merge con I00/plan
   si hace falta.
3. **VitePress no instalado** a propósito (I10). `npm run docs:build`
   fallaría hoy — fuera de CA de I02.

## Dudas / bloqueos

Ninguno que bloquee CA. Auth de escritura Verdaccio no requerida aquí
(solo `npm view` lectura; DE-I12 queda para I26).

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
