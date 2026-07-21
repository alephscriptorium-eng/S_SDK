# WP-Z16 · loop-juego — reporte

| dato | valor |
| ---- | ----- |
| agente | worker gc-z16 (swarm) |
| fecha | 2026-07-21 |
| rama | `wp/gc-z16-loop-juego` (games-library) · reporte en SCRIPT_SDK `wp/gc-z16-loop-juego` |
| commits | games-library `21a6592d5c8105890e2d84e60d341416751818b8` |
| eje(s) CA | I (tests/smoke decay·energía·objetivo) · IV diferido (contrato `objetivo` documentado; 2º cliente = Z08/Z17) · ceguera ampliada |
| estado propuesto | listo para revisión |

## Qué se hizo

Se implementó el **loop §1** en el reducer puro de `@zeus/ciudad`: decay
(vivo→latente→muerto por ms sin visita, reloj inyectable + `tick`), energía
(`wake` gasta / `announce` en plaza recarga) y objetivo colectivo
(`snapshot.objetivo: { vivos, umbral, cumplido }`). Defaults en
`LOOP_DEFAULTS` (`decayVivoMs` 60s / `decayLatenteMs` 180s / `aliveTargetK` 15
dado el seed con ~14 vivos). Playbook C-05..C-07 + `loop-smoke`. Scrub de
tokens `WP-Z*` residuales en el pack. **Sin** engine / Z05 / SEMILLA §2–§4/§6 /
Z17 / BACKLOG. **Sin push** tip gobierno.

## Archivos tocados

- `packages/ciudad/src/domain.mjs` (modificado): decay / energía / objetivo / tick
- `packages/ciudad/src/contract.mjs` (modificado): `LOOP_DEFAULTS` + descripciones intents
- `packages/ciudad/test/domain.test.mjs` (modificado): 3 tests loop
- `packages/ciudad/test/casos.test.mjs` (modificado): C-01..C-07
- `packages/ciudad/test/ceguera.test.mjs` (modificado): forbids `WP-Z\d+`
- `packages/ciudad/test/jugadores.test.mjs` / `fixtures/federation-smoke.mjs` (modificado): scrub `WP-Z*`
- `packages/ciudad/spec/CASOS.md` (modificado): C-05 decay · C-06 energía · C-07 objetivo
- `packages/ciudad/fixtures/loop-smoke.mjs` (creado): smoke del loop
- `packages/ciudad/package.json` / `README.md` (modificado): script `loop-smoke` + doc contrato
- `plan/REPORTES/WP-Z16-loop-juego.md` (creado, superproyecto): este reporte

## Evidencia

> Worktree GL: `C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-gc-z16-loop-juego`
> Rama código: `wp/gc-z16-loop-juego` @ `21a6592`
> Env: zeus-sdk `0b566e6…` · GL tip pre-obra `d5548b1…` · S_SDK `975d22a…` (pre-reporte)

```
$ npm test -w @zeus/ciudad   # cwd worktree GL
# tests 18
# pass 18
# fail 0
  ok — CASOS C-01..C-07 coherencia playbook-kit
  ok — ceguera método (0 tokens marco / WP-Z*)
  ok — domain MVP + decay + energía + objetivo
  ok — federación / tres jugadores / linea-editor

$ npm run smoke -w @zeus/ciudad
SMOKE_OK { sceneId: 'ciudad-v0', barrio: 'vivo', … }

$ npm run loop-smoke -w @zeus/ciudad
ok decay vivo→latente / latente→muerto / energia / objetivo
LOOP_SMOKE_OK { … }

$ rg -c 'WP-Z[0-9]+' packages/ciudad   → 0 (árbol)
$ git log -p -1 -- packages/ciudad | Select-String 'WP-Z'
  → solo líneas de scrub (`-` WP-Z07 / WP-Z13 eliminados) + patrón
    `swarm-orquestacion` en ceguera.test (autoexcluido del scan de árbol)
```

### Contrato snapshot (eje IV diferido)

Campo nuevo legible por 2º cliente (tablero Z08 / operator-ui Z17) sin tocar
el reducer:

```js
objetivo: { vivos: number, umbral: number, cumplido: boolean }
actors[id].energy: number
lastDecay: { barrioId, from, to, ts, tick } | null
tick: number
```

Defaults: `LOOP_DEFAULTS` en `contract.mjs`. Eje IV completo queda a Z08/Z17.

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: `packages/ciudad/**` + este reporte; cero engine / Z17 / BACKLOG
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia: extensión del dominio Z03
- [x] Sellos con fuente; rutas citadas existentes: worktree + SHA `21a6592`
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: eje IV = diferido documentado
- [x] Eje(s) aplicables evidenciado(s): I vía node:test 18/18 + smokes; IV diferido con contrato
- [x] Gates ejecutados de verdad: test + mvp-smoke + loop-smoke
- [x] Commits convencionales: `feat(ciudad): …`
- [x] Diff solo del alcance del WP: sí

## Hallazgos fuera de alcance

- Con umbrales de test cortos, un `tick` tras avanzar el reloj puede decaer
  **varios** barrios seed a la vez (lastDecay apunta al último del barrido);
  en defaults de producción (60s/180s) el efecto es gradual.
- Eje IV vivo (lectura desde operator-ui / flows Z08) = Z17 / residual Z08;
  no bloquea este WP.
- Push tip GL / bump submodule S_SDK = orquestador / custodio.

## Dudas / bloqueos

- Ningún bloqueo para revisión. ¿El orquestador hace FF merge GL + bump
  submodule, o solo mergea la rama?

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
