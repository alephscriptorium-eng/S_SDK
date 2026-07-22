# WP-C03 · arg-edificios — reporte

| dato | valor |
| ---- | ----- |
| agente | worker C03 (swarm) |
| fecha | 2026-07-22 |
| rama | `wp/cr-c03-arg-edificios` (games-library) |
| commits | GL `f388451f9aa7d1ffcd140d4c0b9460dc29bca71f` (padre `19317c1`) |
| eje(s) CA | I · II + ceguera (DE-I20 δ12) |
| estado propuesto | listo para revisión |
| worktree | `HOLONES/01-mythos/games-library/.worktrees/wp-cr-c03-arg-edificios` |
| tip base | `19317c1` (post-C01 · shape real salud) |

## Qué se hizo

Se encarnó SEMILLA-ARG §A4 en `@zeus/ciudad`: destino canónico
`src/edificios.mjs` mapea edificio↔paquete **solo** con ids del catálogo
fleet (`CATALOG_SEED`, patrón mcp-launcher). Gentes = `capabilities`.
`indexArbolEdificios` rechaza `catalogId` del arbol fuera de catálogo
(p. ej. `prolog-ui`, `state-machine-server`). Consume
`SALUD_SHAPE_FOR_ACL` vía `saludBindingDesdeVinculo` → `npm-view` (sin
reinventar probes ni capability). Dominio expone `snapshot.edificios` /
`getEdificios()`. Sin ACL C02 · sin E_SDK · Z_SDK #5/#6 solo citar.

## Archivos tocados

- `packages/ciudad/src/edificios.mjs` — creado: gate catálogo, map, gentes, binding salud
- `packages/ciudad/src/domain.mjs` — modificado: índice edificios en create/snapshot
- `packages/ciudad/src/salud.mjs` — modificado: comentario apunta a `/edificios` (probes intactos)
- `packages/ciudad/test/edificios.test.mjs` — creado: CA I·II + rechazo
- `packages/ciudad/fixtures/edificios-smoke.mjs` — creado: smoke mapping + cara salud
- `packages/ciudad/package.json` — export `./edificios` + script `edificios-smoke`
- `packages/ciudad/README.md` — sección edificios

## Shape / invariante

```js
// @zeus/ciudad/edificios → EDIFICIOS_SHAPE
{
  version: 'edificios/1',
  invariante: 'solo_ids_catalogo',
  gentesKey: 'capabilities',
  paqueteKey: 'workspace',
  salud: { version: 'salud/1', wakeDefaultActions, probeKinds } // cita SALUD_SHAPE_FOR_ACL
}
```

## ∩ exclusion-paths

| C03 tocó | No tocado |
| -------- | --------- |
| `packages/ciudad/**` mapping edificio↔catálogo | ACL engine C02 (zeus) |
| comment pointer en `salud.mjs` | probes/kind/wakeConSalud C01 (lógica intacta) |
| — | startpack seeds · E_SDK · C05 |

## Evidencia

```
$ git -C …/wp-cr-c03-arg-edificios rev-parse HEAD
f388451f9aa7d1ffcd140d4c0b9460dc29bca71f

$ npm test -w @zeus/ciudad
# tests 57 · pass 57 · fail 0

$ npm run edificios-smoke -w @zeus/ciudad
ok catalog linea-editor → @zeus/linea-editor
ok probe mapa=muerto code=E404
ok rechazo fuera de catálogo × 6
EDIFICIOS_SMOKE_OK
{"ok":true,"catalogId":"linea-editor","packageName":"@zeus/linea-editor",
 "probeOk":false,"probeCode":"E404","barrio":"muerto","rechazadosArbol":6,
 "shape":"edificios/1","saludShape":"salud/1"}

$ rg -n "WP-[A-Z]{1,2}\d" packages/ciudad -g "!node_modules/**" -g "!**/ceguera.test.mjs"
# (sin matches) → ceguera árbol 0

$ git log -1 -p -- packages/ciudad | rg "WP-[A-Z]{1,2}\d"
# (sin matches) → ceguera historial (regla 14) 0
```

Nota smoke: `@zeus/linea-editor` no está en el canal registry → E404 → mapa
`muerto` (verdad del sistema; CA = mapping+rechazo, no publish del workspace).

## Auto-revisión (PRACTICAS)

- [x] Diff solo dentro de `ALCANCE_DIFF`: `packages/ciudad/**`
- [x] Cero árboles copiados; espejo de ids/workspace del catálogo fleet
- [x] Sellos con fuente: `SALUD_SHAPE_FOR_ACL` · tip base `19317c1`
- [x] Sin fluff; Z_SDK #5/#6 citadas OPEN, no cerradas
- [x] Eje I: dominio + smoke consumen API edificios → binding → applySalud
- [x] Eje II: destino canónico `edificios.mjs`; una def. `getCatalogEntry`
- [x] Gates: test 57/57 · edificios-smoke · ceguera árbol+log
- [x] Commits convencionales: `feat(ciudad): …`
- [x] Diff solo del alcance del WP: sin ACL, sin rewrite startpack, sin C05

## Cómo probar

```bash
cd HOLONES/01-mythos/games-library/.worktrees/wp-cr-c03-arg-edificios
npm test -w @zeus/ciudad
npm run edificios-smoke -w @zeus/ciudad
```

## Hallazgos fuera de alcance

- `catalogId` del arbol startpack (prolog-ui, aaia-*, state-machine-server)
  estánen fuera del catálogo fleet → rechazados (correcto); alinear seeds =
  WP futuro startpack (fuera de ALCANCE_DIFF C03).
- Workspaces del catálogo fleet no publicados en Verdaccio (E404 en smoke).
- Z_SDK #5 / #6 siguen OPEN — citar; no cerrar.

## Dudas / bloqueos

Ninguno para revisión. Sin merge · sin push · LOCAL-ONLY · pin zeus lo
hace el aceptador.

---

## Revisión del orquestador

**Aceptado ✅** · 2026-07-22 · CR-1 CIUDAD-REAL cierre (C03).

| check | resultado |
| ----- | --------- |
| CA I·II | ✅ dominio+smoke consumen edificios · `getCatalogEntry` única · 57/57 · `EDIFICIOS_SMOKE_OK` |
| Shape | ✅ `edificios/1` · cita `SALUD_SHAPE_FOR_ACL` · invariante solo ids catálogo |
| Ceguera δ12 + regla 14 | ✅ árbol/diff/log-p `WP-*`=0 (excl. ceguera.test) |
| ∩ C01/C02 | ✅ ∅ (comment pointer salud; probes intactos · ACL no tocado) |
| Merge | ✅ FF `19317c1..f388451` → `origin/main` (no force) · CI [29888361565](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29888361565) ✅ |

**No despacha C05** — aviso **listo-R12**.
