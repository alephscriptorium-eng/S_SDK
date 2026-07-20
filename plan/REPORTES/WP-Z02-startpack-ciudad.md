# WP-Z02 · startpack-ciudad — reporte

| dato | valor |
| ---- | ----- |
| agente | worker gc-z02 (swarm) |
| fecha | 2026-07-20 |
| rama | `wp/gc-z02-startpack-ciudad` (games-library) · reporte en SCRIPT_SDK `wp/gc-z02-startpack-ciudad` |
| commits | games-library `fab17c7b41f07d6fb3237346c45bd776ba908180` |
| eje(s) CA | I (engine carga seeds); IV diferido (`ciudad-model` compartido con Z01) |
| estado propuesto | listo para revisión |

## Qué se hizo

Se creó `@zeus/startpack-ciudad` en games-library con manifest `zeus.startpack/v0`,
loader vía `@zeus/startpack-kit`, y `seeds/gamemap.json` generado desde topología
embebida (build-time; sin lectura de cantera en runtime): Plaza/Zigurat como nodos
gobierno, 6 zonas/distritos, 24 anclas-barrio con `estado`, 6 calles walk, sección
`arbol` (edificios + maquinarias) con schema. Solape con plaza documentado en README.
Registrado en `startpack-games.mjs` + opciones de `release-startpack.yml`. Notario
`--dry-run` OK; **sin publish**. Eje IV no cerrado (sin módulo compartido con Z01).

## Archivos tocados

- `packages/startpack-ciudad/**` (creado): pack, seeds, generator, schema, tests, acta, volumes
- `scripts/lib/startpack-games.mjs` (modificado): entrada `ciudad` para notario
- `package.json` / `package-lock.json` (modificado): `test:startpack` incluye ciudad
- `.github/workflows/release-startpack.yml` (modificado): opción `ciudad` (+ hermanos ya existentes)
- `plan/REPORTES/WP-Z02-startpack-ciudad.md` (creado, superproyecto): este reporte

## Evidencia

> Worktree: `C:\Users\aleph\SCRIPT_SDK\.claude\worktrees\gc-z02-startpack-ciudad`
> Rama código: `wp/gc-z02-startpack-ciudad` @ `fab17c7`

```
$ node packages/startpack-ciudad/scripts/generate-seeds.mjs
wrote .../seeds/gamemap.json · nodes=7 links=6 anchors=24 barrios=24

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

$ node scripts/notario-release.mjs --game ciudad --dry-run --skip-tests
✅ Notario done
  loadStartPack ok game=ciudad
  volumes.json ok
  acta ok
  gamemap ok ciudad-demo
  github skipped / npm skipped

$ rg -i 'SCRIPT_SDK|S_SDK|hol[oó]n|holarqu[ií]a|juntura|HOLONES' \
    (published files del pack)
# (sin matches) CEGUERA_OK count=0
```

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: pack + canal startpack mínimo + reporte; sin browsers/Z08/Z01 mocks
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia: patrón startpack-plaza/pozo citado; datos transformados a `ciudad-source.mjs`
- [x] Sellos con fuente; rutas citadas existentes: sí (worktree + commit hash)
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: publish y acta notario = pendiente autorización
- [x] Eje(s) aplicables evidenciado(s): I vía `createMapEngine` + walk plaza→zigurat; IV diferido documentado
- [x] Gates ejecutados de verdad: test workspace + notario dry-run + ceguera grep
- [x] Commits convencionales: `feat(startpack-ciudad): …`
- [x] Diff solo del alcance del WP: sí (no BACKLOG)

## Hallazgos fuera de alcance

- **Solape Z01 / `ciudad-model`:** Z02 embebe topología en `scripts/ciudad-source.mjs` (duplicación mínima local). Homogeneizar con mockdatas Z01 = follow-up / eje IV cuando exista módulo compartido.
- **Notario dry-run reescribe `acta/ACTA.md` con rutas absolutas de máquina** → rompe ceguera si se commitea esa acta. Se dejó plantilla limpia; el acta de release debe sanitizarse o vivir solo bajo `.release-startpack/`.
- **`release-startpack.yml`** antes solo listaba delta|pozo en `workflow_dispatch`; se ampliaron opciones (plaza/sketch/solve-coagula/ciudad) para alinear con el catálogo notario — cambio mínimo de canal, no publish.

## Dudas / bloqueos

- Ningún bloqueo para revisión. Publish npm/GitHub Release queda a autorización orquestador.
- ¿Conviene bump del puntero submodule en el superproyecto en el merge, o solo merge de rama games-library por su orquestador (eje V)?

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-20 · orquestador (merge/gobierno).

Eje I evidenciado; publish npm/GitHub pendiente autorización; eje IV diferido (`ciudad-model` con Z01). games-library `main` @ `fab17c7` + puntero submodule.
