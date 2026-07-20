# WP-Z14 · procedencia-estados — reporte

| dato | valor |
| ---- | ----- |
| agente | worker gc-z14 (swarm) |
| fecha | 2026-07-20 |
| rama | `wp/gc-z14-procedencia-estados` (SCRIPT_SDK + games-library) |
| commits | GL `8a39ecee49e8abe02f9140bcb541e04c80db55fd` · SDK tip `2c32239f4c32284862198dd0d1c51ea61958a06e` (obra cantera `41359625cc4ea8a26abd09b90b9f856ef28e45cb`) |
| eje(s) CA | I (generador regenera desde cantera versionada; cita + regeneración determinista) |
| estado propuesto | listo para revisión |

## Qué se hizo

Se importó el censo de `estado` (24 barrios) desde seeds operativos del
startpack (round-trip) a `cantera/CIUDAD/CENSO-ESTADOS.md`. El generador de
`startpack-ciudad` ya no embebe `estado` en `ciudad-source.mjs`: lo aplica en
build-time desde la proyección `data/censo-estados.json` (o `--censo` al markdown
de cantera). Regeneración desde cantera MD → contenido de `seeds/gamemap.json`
idéntico (diff 0 normalizado LF; el fichero committed no se reescribe). Mockdatas:
cita de cantera en `data/censo.json` + comentario del generador; sin regenerar
volumes (valores ya alineados). Sin tocar paths Z09.

## Archivos tocados

- `plan/SPRINTS/sprint-game-city/cantera/CIUDAD/CENSO-ESTADOS.md` (creado): censo canónico
- `plan/SPRINTS/sprint-game-city/cantera/CIUDAD/README.md` (modificado): índice capa 0b
- `packages/startpack-ciudad/data/censo-estados.json` (creado): proyección build-time
- `packages/startpack-ciudad/scripts/load-censo-estados.mjs` (creado): loader md/json
- `packages/startpack-ciudad/scripts/ciudad-source.mjs` (modificado): sin `estado` inline
- `packages/startpack-ciudad/scripts/generate-seeds.mjs` (modificado): aplica censo + `--censo`
- `packages/startpack-ciudad/README.md` (modificado): sección provenance
- `packages/mockdatas-ciudad/data/censo.json` (modificado): note cita cantera
- `packages/mockdatas-ciudad/tools/generate-ciudad-volumes.mjs` (modificado): cita cantera
- `plan/REPORTES/WP-Z14-procedencia-estados.md` (creado): este reporte

## Evidencia

> Worktree SDK: `C:\Users\aleph\SCRIPT_SDK\.claude\worktrees\gc-z14-procedencia-estados`
> Worktree GL: `C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-gc-z14-procedencia-estados`

```
$ node packages/startpack-ciudad/scripts/generate-seeds.mjs --censo \
    <SDK>/plan/SPRINTS/sprint-game-city/cantera/CIUDAD/CENSO-ESTADOS.md
wrote .../seeds/gamemap.json · censo=cantera/CIUDAD/CENSO-ESTADOS.md · nodes=7 links=6 anchors=24 barrios=24

$ diff -q <(tr -d '\r' < seeds/gamemap.json.bak) <(tr -d '\r' < seeds/gamemap.json)
# (sin salida) REGEN_FROM_CANTERA_MD_CONTENT=0

$ npm test -w @zeus/startpack-ciudad
# tests 7
# pass 7
# fail 0
  ok 1 - loadStartPack: ciudad gamemap + 24 barrios + 6 zones + arbol
  ok 2 - barrio anchors carry estado enum
  ok 3 - validateArbol accepts seed catalog
  ok 4 - arbol.schema.json is present and draft-shaped
  ok 5 - no id collision with startpack-plaza gamemap
  ok 6 - eje I: createMapEngine loads ciudad scene without error
  ok 7 - ceguera: published tree has zero framework/holon path tokens

$ rg -i 'SCRIPT_SDK|S_SDK|hol[oó]n|holarqu[ií]a|juntura|HOLONES' \
    (index/scene/manifest/seeds/volumes/acta/schemas/README)
# CEGUERA_OK count=0

$ rg -n 'TEMP/|draft/material' packages/startpack-ciudad/scripts packages/startpack-ciudad/data
# solo menciones negativas ("Does not read TEMP/") — NO_TEMP_REFS a borradores

$ rg -n 'cantera/CIUDAD/CENSO-ESTADOS' packages/startpack-ciudad/{scripts,data,README.md}
# citas en generate-seeds, load-censo-estados, ciudad-source, censo-estados.json, README

$ git diff --name-only | grep -iE 'docker|wiring|miniclon|vps' || echo NO_Z09_PATHS_IN_DIFF
NO_Z09_PATHS_IN_DIFF
```

Commits (post-commit):

```
games-library: 8a39ecee49e8abe02f9140bcb541e04c80db55fd
SCRIPT_SDK tip: 2c32239f4c32284862198dd0d1c51ea61958a06e
SCRIPT_SDK cantera+reporte: 41359625cc4ea8a26abd09b90b9f856ef28e45cb
```

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: cantera CIUDAD + startpack-ciudad + mockdatas cita + reporte; sin Docker/WiringEditor/Z09/zeus-sdk/BACKLOG
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia: round-trip desde seeds del propio pack; fuente cantera del sprint
- [x] Sellos con fuente; rutas citadas existentes: `cantera/CIUDAD/CENSO-ESTADOS.md` creado y leído por generador
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: regeneración volumes mockdatas no hecha (valores ya coherentes; cite-only)
- [x] Eje(s) aplicables evidenciado(s): I — generate desde cantera MD + tests engine + diff seeds 0
- [x] Gates ejecutados de verdad: `npm test -w @zeus/startpack-ciudad` 7/7; ceguera grep 0
- [x] Commits convencionales: `feat(startpack-ciudad): …` / `docs(cantera): …`
- [x] Diff solo del alcance del WP: sí (no BACKLOG; no push)

## Hallazgos fuera de alcance

- **Proyección dual id/displayName:** startpack usa slug-id (`vscode-extension`); mockdatas `data/censo.json` sigue keyed por displayName (`VsCodeExtension`). Homogeneizar = follow-up / posible `ciudad-model` (eje IV diferido Z02).
- **Line endings:** `generate-seeds.mjs` escribe LF; seeds committed pueden ser CRLF en Windows → diff cosmético si se reescribe el fichero; se dejó el seed committed intacto (contenido idéntico).

## Dudas / bloqueos

Ninguno. Listo para revisión orquestador (sin push; puntero submodule lo actualiza el orquestador al merge).

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-21 · orquestador (merge/gobierno).

Eje I evidenciado (generador regenera desde `cantera/CIUDAD/CENSO-ESTADOS.md`; tests startpack 7/7; ceguera 0). games-library `main` @ `8a39ece` + puntero submodule. Hallazgos fuera de alcance (proyección dual id/displayName; CRLF) no bloquean. Z09/Z10 intactos.
