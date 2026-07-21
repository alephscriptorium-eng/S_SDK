# WP-A02 · presencia — reporte

| dato | valor |
| ---- | ----- |
| agente | worker gc-a02 (swarm) |
| fecha | 2026-07-21 |
| rama | `wp/gc-a02-presencia` (games-library) · reporte en SCRIPT_SDK `wp/gc-a02-presencia` |
| commits | games-library `2b14d360fbdd59c95a35ff75aa077ed929ee4241` · reporte S_SDK `5e99b8154ace673c101d6c8ee23dda000ecb3f1d` |
| eje(s) CA | I (integración loop Z16) · II (contrato SeñalDePresencia; fuentes reales = interfaz) · ceguera ampliada |
| estado propuesto | listo para revisión |

## Qué se hizo

Se implementó **SeñalDePresencia v1** + interfaz `FuentePresencia` + adapter
**mock** en `@zeus/ciudad`, enganchado al loop Z16: `tick` drena señales
(junto a intents) y `applyDecay` respeta ventana `ticksPresencia`
(`TICKS_PRESENCIA` en `LOOP_DEFAULTS`). Clase `flujo` sostiene barrio y
**no** recarga energía (solo `announce`). Swap de adapter vía
`attachFuentePresencia` / `detachFuentePresencia` sin tocar el reducer.
Tests + `presencia-smoke`. **Sin** §A3 / health·paradas·zona reales /
embajador / BACKLOG / reopen Z16. **Sin push** tip gobierno.

## Archivos tocados

- `packages/ciudad/src/presencia.mjs` (creado): contrato v1 · validate · mock
- `packages/ciudad/src/domain.mjs` (modificado): ingest / attach / tick+señales · gate presencia en decay
- `packages/ciudad/src/contract.mjs` (modificado): `LOOP_DEFAULTS.ticksPresencia`
- `packages/ciudad/test/presencia.test.mjs` (creado): CA sostenido / corte / swap / flujo
- `packages/ciudad/fixtures/presencia-smoke.mjs` (creado): smoke presencia
- `packages/ciudad/package.json` / `README.md` (modificado): export `./presencia` · script smoke · doc
- `plan/REPORTES/WP-A02-presencia.md` (creado, superproyecto): este reporte

## Evidencia

> Worktree GL: `C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-gc-a02-presencia`
> Rama código: `wp/gc-a02-presencia` @ `2b14d36`
> Env (worker): zeus-sdk HEAD `b67b9ca…` (addenda tip esperado `48e2062` — ancestro reachable; brief stale `8afc0a0`) · GL base `21a6592` → obra `2b14d36` · S_SDK tip pre-reporte `8cea103…`

```
$ npm test -w @zeus/ciudad   # cwd worktree GL
# tests 24
# pass 24
# fail 0
  ok — CASOS C-01..C-07
  ok — ceguera método
  ok — domain MVP + decay + energía + objetivo
  ok — presencia: sostenido N×2 · corte TP+1 · swap adapter · flujo sin recarga
  ok — federación / jugadores / linea-editor

$ npm run smoke -w @zeus/ciudad
SMOKE_OK { sceneId: 'ciudad-v0', barrio: 'vivo', … }

$ npm run loop-smoke -w @zeus/ciudad
LOOP_SMOKE_OK { … }

$ npm run presencia-smoke -w @zeus/ciudad
ok presencia sostenida (flujo, sin recarga energía)
ok flujo no recarga energía
ok corte → decay en TICKS_PRESENCIA+1
ok tick consume señales input
PRESENCIA_SMOKE_OK { ticksPresencia: 2, … }

$ rg -c 'WP-Z[0-9]+' packages/ciudad --glob '!**/ceguera.test.mjs'  → 0
$ rg -q 'swarm-orquestacion' packages/ciudad --glob '!**/ceguera.test.mjs'  → exit 1 (sin match)
$ git log -p -1 -- packages/ciudad | Select-String 'SCRIPT_SDK|HOLONES|swarm-orquestacion|WP-Z'
  → (vacío)
```

### Contrato (eje II · congelado SEMILLA-ARG §A2)

```js
// SeñalDePresencia v1
{ barrioId, fuente: 'mock'|'health'|'paradas'|'zona',
  agenteId, clase: 'residente'|'visitante'|'flujo', tick }
// FuentePresencia: { suscribir(cb) → desuscribir() }
```

Defaults: `LOOP_DEFAULTS.ticksPresencia` (= `TICKS_PRESENCIA`). Fuentes
`health`/`paradas`/`zona` = solo enum de interfaz; adapter implementado =
`mock`. Enchufe futuro Z06/Z15/Z05-f2 documentado, no implementado.

### Integración loop (eje I)

Consumidor real del pack: `createCiudadDomainState` / `tick` / `applyDecay`
(Z16). Presencia como input: `tick(_, _, { señales })` o
`attachFuentePresencia(mock|fake)`.

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: `packages/ciudad/**` + este reporte; cero parte-kit / §A3 / BACKLOG / engine
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia: extensión dominio Z16
- [x] Sellos con fuente; rutas citadas existentes: worktree + SHA `2b14d36`
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: fuentes reales = interfaz only
- [x] Eje(s) aplicables evidenciado(s): I vía tests/smoke loop; II contrato congelado + swap adapter
- [x] Gates ejecutados de verdad: test 24/24 + mvp/loop/presencia-smoke
- [x] Commits convencionales: `feat(ciudad): …`
- [x] Diff solo del alcance del WP: sí · paths distintos de A01 (parte-kit)

## Hallazgos fuera de alcance

- Tip zeus local (`b67b9ca`) ≠ addenda `48e2062` (sí es ancestro); no bloquea obra en GL.
- `npm install` en worktree necesario (main GL `node_modules` incompleto al despacho); lockfile no tocado.
- Push tip GL / bump submodule S_SDK = orquestador / custodio.

## Dudas / bloqueos

- Ningún bloqueo para revisión. ¿Orquestador hace FF merge GL `2b14d36` + bump submodule, o solo mergea tras revisión?

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-21 · orquestador (merge/gobierno).

games-library `main` @ `2b14d36` (FF + push `origin/main`) · SCRIPT_SDK submodule → `2b14d36`.
Reporte tip `610502b` (obra reporte `5e99b81` + anotación SHA `610502b`; cabecera del reporte cita obra `5e99b81`).

SeñalDePresencia v1 + mock + enganche loop Z16 (`ticksPresencia` / clase `flujo` sin recarga); tests 24/24 + mvp/loop/presencia-smoke; ceguera 0. **WP-A02 ✅** · ARG-1 sigue abierta (A01 🔶 · A03 parked).

### Verificado (brazo merge/gobierno)
- Rama GL `wp/gc-a02-presencia` @ `2b14d36` · FF → `main` · push tip autorizado (`alephscriptorium-eng`)
- Rama reporte S_SDK `wp/gc-a02-presencia` @ `610502b` · FF → `main` · bump submodule GL
- Sin force-push; sin reopen Z16 · sin §A3 · sin embajador · sin tocar A01 (`wp/gc-a01-parte-kit`)
