# WP-CAMPANAS · CAMPANAS-city — reporte

| dato | valor |
| ---- | ----- |
| agente | worker/gobierno · WP-CAMPANAS |
| fecha | 2026-07-21 |
| rama | `wp/gc-campanas-city` (zeus-sdk) · `wp/gc-campanas-city` (S_SDK) |
| commits | zeus-sdk `1086392` (base `fe75269`) · S_SDK gobierno `706c02b` + aceptación |
| eje(s) CA | I (operator-ui consume clases parte-kit) · IV (bridge 2º cliente ledger `parte`) · ceguera |
| estado propuesto | listo para revisión → aceptado ✅ |

## Qué se hizo

Re-scope S-03: el parte de plaza **suena** en operator-ui sin inflar E_SDK/DE-I8.

- **parte-kit:** `claseTitular` / `campanasDesdeParte` — un evento por clase
  presente (`despertar` · `degradar` · `roto`) alineado a plantillas.
- **operator-bridge:** ledger `parte`/`parte_rechazado` en hub +
  `campanasFromLedger(entry)` puro (dep `@zeus/parte-kit`).
- **operator-ui:** Web Audio (Hz 660/392/220) + toggle silencio (localStorage) +
  botón Probar en HUD; bridge service toca campanas al recibir ledger `parte`.

## Archivos tocados

- `packages/engine/parte-kit/src/campanas.mjs` — clasificación
- `packages/engine/parte-kit/test/campanas.test.mjs` — tests
- `packages/mesh/operator-bridge/src/index.mjs` — ledger parte + campanasFromLedger
- `packages/mesh/operator-bridge/test/bridge.test.mjs` — 13 tests
- `packages/mesh/operator-ui/.../campanas-audio*.ts` + HUD + bridge service
- `packages/mesh/operator-ui/fixtures/campanas-smoke.mjs` — evidencia mute/schedule
- `plan/REPORTES/WP-CAMPANAS-city.md` — este reporte (S_SDK)

## Evidencia

```
# SHAs
zeus base fe75269 → obra 1086392 (rama wp/gc-campanas-city)
S_SDK gobierno 🔶 706c02b

# npm test -w @zeus/operator-bridge
13 pass / 0 fail (incl. onLedger parte + campanasFromLedger)

# node --test packages/engine/parte-kit/test/campanas.test.mjs
3 pass / 0 fail

# npm --prefix packages/mesh/operator-ui run smoke:campanas
CAMPANAS_SMOKE_OK {"clases":["despertar","degradar","roto"],"hz":[660,392,220],"muteClears":true,"ledgerContent":"parte tick=7 titulares=4"}

# npm --prefix packages/mesh/operator-ui run build:dev-app
Application bundle generation complete OK (main ~822 kB)

# Ceguera (packs tocados, excl. node_modules/dist)
rg holones|SCRIPT_SDK|S_SDK|WP-Z\d+|WP-CAMPANAS|swarm-orquestacion|juntura|BACKLOG → 0 hits
```

### Criterios de aceptación

| CA | evidencia |
| --- | --- |
| clases titular en parte-kit | campanas.test.mjs 3/3 · plantillasOk |
| bridge campanasFromLedger | bridge 13/13 · smoke |
| UI sonido + mute | scheduleCampanas mute→[] · HUD Silencio ON/OFF · build OK |
| sin DE-I8 / sin embajador | alcance ALCANCE_DIFF |
| ceguera | 0 hits método |

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: parte-kit + bridge + operator-ui + reporte
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia
- [x] Sellos con fuente; rutas citadas existentes
- [x] Sin fluff: juntura 01↔03 = horizonte, no obra
- [x] Ejes I/IV evidenciados
- [x] Gates: bridge + campanas tests + smoke + build
- [x] Commits convencionales
- [x] Diff solo del alcance del WP

## Hallazgos fuera de alcance

- `consumidores.test.mjs` golden falla en Windows por CRLF del snapshot
  (preexistente; CI Linux OK). No tocado.
- DE-I8 / emmanuel-sdk sigue horizonte.

## Dudas / bloqueos

Ninguno.

---

## Revisión del orquestador

**Aceptado ✅** 2026-07-21 (gobierno): re-scope cumplido; evidencia sonido/mute
literal; sin DE-I8; ceguera 0. Tip zeus merge FF + push; puntero submodule
actualizado; issue #25 cerrado.
