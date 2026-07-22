# WP-C01 · semilla-salud — reporte

| dato | valor |
| ---- | ----- |
| agente | worker C01 (swarm) |
| fecha | 2026-07-22 |
| rama | `wp/cr-c01-semilla-salud` (games-library) |
| commits | GL `19317c12bcab4c5a9ad775871a1a2f460ed858c5` (padre `b54a2d2`) |
| eje(s) CA | I · IV + ceguera (DE-I20 δ12) |
| estado propuesto | listo para revisión |
| worktree | `HOLONES/01-mythos/games-library/.worktrees/wp-cr-c01-semilla-salud` |
| tip S al despacho | ~`fadb743` (reporte sobre tip local al cerrar) |

## Qué se hizo

Se cableó SEMILLA §2 en `@zeus/ciudad`: probes read-only/idempotentes
(`npm-view` / `http-status` / `smoke`) alimentan el mapa vía
`domain.applySalud`; `wakeConSalud` hace del wake la acción real acotada
(`tool: salud.<kind>`). Binding demo: barrio `mcp-gallery` →
`npm view @zeus/protocol` en canal `npm.scriptorium.escrivivir.co`.
Shape `SALUD_SHAPE_FOR_ACL` documenta qué exige capability (para C02).
Docs startpack: campos `health`/`puerto` como fuente de URLs status.
Sin tocar ACL engine ni catálogo §A4.

## Archivos tocados

- `packages/ciudad/src/salud.mjs` — creado: probes, bindings, wakeConSalud, shape ACL
- `packages/ciudad/src/domain.mjs` — modificado: `applySalud` + snapshot `salud`/`lastSalud`
- `packages/ciudad/fixtures/salud-smoke.mjs` — creado: smoke canal real
- `packages/ciudad/test/salud.test.mjs` — creado: eje I/IV + fail path
- `packages/ciudad/test/ceguera.test.mjs` — modificado: patrón δ12 `WP-[A-Z]{1,2}\d`
- `packages/ciudad/package.json` — export `./salud` + script `salud-smoke`
- `packages/ciudad/README.md` — sección salud + guardarraíl capability
- `packages/startpack-ciudad/README.md` — nota health fields → probes ciudad

## Shape exportado (integración C02)

```js
// @zeus/ciudad/salud → SALUD_SHAPE_FOR_ACL
{
  version: 'salud/1',
  wakeDefaultActions: ['npm-view', 'http-status', 'smoke'], // sin capability
  capabilityRequired: [
    'maq.launch', 'maq.stop', 'maq.restart',
    'npm.publish', 'git.force-push', 'acl.write', 'process.kill'
  ],
  probeResultKeys: ['barrioId','kind','ok','detail','checkedAt','estadoSugerido']
}
```

C02 debe gatear `capabilityRequired` (default deny donde hay poder). C01 no
implementa el gate; solo declara la frontera. Snapshot expone
`salud` / `lastSalud` para que ACL anote límite por barrio/gameobject.

## ∩ C02 (exclusion-paths)

| C01 tocó | C02 exclusivo (intacto) |
| -------- | ----------------------- |
| `packages/ciudad/**` health | zeus `authority-kit` / protocol ACL peer |
| `packages/startpack-ciudad/README.md` (docs health) | tests engine ACL |

∩ paths = vacío. Sin obra en zeus-sdk.

## Evidencia

```
$ git -C …/wp-cr-c01-semilla-salud rev-parse HEAD
19317c12bcab4c5a9ad775871a1a2f460ed858c5

$ npm test -w @zeus/ciudad
# tests 49 · pass 49 · fail 0

$ npm run salud-smoke -w @zeus/ciudad
ok npm view @zeus/protocol → 0.3.0
… SALUD_SMOKE_OK
{"ok":true,"protocolVersion":"0.3.0","mcpGallery":"vivo","blockly":"vivo",
 "lastWakeTool":"salud.npm-view","shape":"salud/1"}

$ rg -n "WP-[A-Z]{1,2}\d" packages/ciudad packages/startpack-ciudad \
    -g "!node_modules/**" -g "!**/ceguera.test.mjs"
# (sin matches) → ceguera árbol 0

$ git log -1 -p -- packages/ciudad packages/startpack-ciudad | rg "WP-[A-Z]…"
# (sin matches) → ceguera historial (regla 14) 0
```

## Auto-revisión (PRACTICAS)

- [x] Diff solo dentro de `ALCANCE_DIFF`: ciudad health + docs startpack health
- [x] Cero árboles copiados de otros mundos
- [x] Sellos con fuente: `@zeus/protocol@0.3.0` vía npm view canal real
- [x] Sin fluff; capability documentada, no implementada (C02)
- [x] Eje I: dominio + smoke consumen API salud (payload version real)
- [x] Eje IV: 2º cliente = `probeSalud` http-status inyectable + smoke wake
- [x] Gates ejecutados: test 49/49 · salud-smoke · ceguera árbol+log
- [x] Commits convencionales: `feat(ciudad): …`
- [x] Diff solo del alcance del WP: sin ACL, sin §A4 catalog ids

## Cómo probar

```bash
cd HOLONES/01-mythos/games-library/.worktrees/wp-cr-c01-semilla-salud
npm test -w @zeus/ciudad
npm run salud-smoke -w @zeus/ciudad
```

## Hallazgos fuera de alcance

- Catálogo edificio↔paquete (`catalogId`) sigue parcial en arbol — C03.
- `http-status` contra puertos locales suele `ECONNREFUSED` si el servicio
  no corre; el mapa lo refleja como `latente` (correcto; no se lanza maq).
- PRACTICAS δ2 (submodules read-only desde S) vs obra PACK en GL: commit
  vive en repo GL; el orquestador decide bump de puntero submodule al merge.

## Dudas / bloqueos

Ninguno para revisión. Sin merge · sin push · Z_SDK #5/#6 intactos ·
LOCAL-ONLY.

---

## Revisión del orquestador

**Aceptado ✅** · 2026-07-22 · OLA 1 CIUDAD-REAL gate.

| check | resultado |
| ----- | --------- |
| CA I·IV | ✅ dominio+smoke consumen salud · 2º cliente http-status inyectable · 49/49 · `SALUD_SMOKE_OK` |
| Shape | ✅ `SALUD_SHAPE_FOR_ACL` exportado (`salud/1`) |
| Ceguera δ12 + regla 14 | ✅ árbol `WP-*`=0 (excl. self) · log-p excl. ceguera.test =0 |
| ∩ C02 | ✅ ∅ (repos distintos · paths GL ciudad/startpack vs zeus protocol/authority) |
| Merge | ✅ FF `b54a2d2..19317c1` → `origin/main` (no force) |

**No despacha C03** — aviso **listo-R11**.
