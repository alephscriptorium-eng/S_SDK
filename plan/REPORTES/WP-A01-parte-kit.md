# WP-A01 · parte-kit — reporte

| dato | valor |
| ---- | ----- |
| agente | worker gc-a01 (swarm fresco) |
| fecha | 2026-07-21 |
| rama | `wp/gc-a01-parte-kit` (zeus-sdk) · reporte en SCRIPT_SDK `wp/gc-a01-parte-kit` |
| commits | zeus `c7ec7d080ff19aab97ed9a5d324439d77c833045` |
| eje(s) CA | **I** (tests redactar/render/validar/publicar) · **II** (ParteDeCiudad v1 congelado) · ceguera ampliada |
| estado propuesto | listo para revisión |
| issue | LOCAL-ONLY |
| GL tocado | **no** |

## Qué se hizo

Paquete nuevo `@zeus/parte-kit` (rol lectura) en zeus `packages/engine/parte-kit`:
contrato **ParteDeCiudad v1** en `tipos.mjs`, `redactarParte` pura,
`renderProsa` con plantillas fijas, `validarParte` con patrón proyector,
publicación en canal **ledger** existente (`entryKind: parte` /
`parte_rechazado`). Adaptadores mock (`estadoDesdeCenso` /
`deltasDesdeMockWork` / `deltasDesdeStatePatch`) aceptan JSON shape
Z01/Z02 **sin** editar games-library (el consumidor pasa el censo).
Tests: determinismo snapshot 50 deltas, pureza, ceguera envenenada, tres
consumidores, frontera imports.

**Desviación env tip:** brief stale decía zeus≈`8afc0a0`; addenda vigía
`48e2062`. Tip real al arranque = `b67b9ca` (ancestro `48e2062` ✅). Rama
creada desde `b67b9ca`.

## Archivos tocados

- `packages/engine/parte-kit/**` (creado, zeus): kit + tests + snapshots
- `package-lock.json` (zeus): workspace `@zeus/parte-kit`
- `plan/REPORTES/WP-A01-parte-kit.md` (este reporte, superproyecto)

## Worktrees / SHAs

| repo | worktree / rama | SHA |
| ---- | --------------- | --- |
| zeus-sdk | `.worktrees/wp-gc-a01-parte-kit` · `wp/gc-a01-parte-kit` | obra `c7ec7d0` (base `b67b9ca`) |
| games-library | **no tocado** (main) | `21a6592` |
| SCRIPT_SDK | rama `wp/gc-a01-parte-kit` (reporte) | tip al commit del reporte |

Env-check (rev-parse, nunca `test -d .git`):

```
zeus tip main al arranque = b67b9caf4ea0952fc17cf9d9be9208495d50ab45
zeus addenda 48e2062      = 48e2062ff046648df52ae0740db4ec22cdb9a2a4 (ancestro de tip ✅)
GL                        = 21a6592d5c8105890e2d84e60d341416751818b8
S_SDK                     = 8cea103996520ecc05467a5b13d7054019af6775
```

## Evidencia

### Gates

```
$ npm test -w @zeus/parte-kit
# tests 11 · pass 11 · fail 0
# determinismo · pureza · ceguera · consumidores · frontera
```

### CA (ficha §A1)

| CA | estado |
| -- | ------ |
| Determinismo snapshot 50 deltas byte-idéntico | ✅ |
| Pureza 2× deep-equal | ✅ |
| Ceguera envenenada → `ok===false` + sin publish parte | ✅ |
| Tres consumidores (prosa golden / JSON schema / pendientes) | ✅ |
| Frontera: solo `@zeus/protocol`; cero `domain.mjs` | ✅ |
| Diff ALCANCE_DIFF; ceguera árbol + `git log -p` | ✅ |
| Marca aleph/scriptorium admisible (fixture `ScriptoriumVps`) | ✅ |

### Ceguera ampliada (árbol + log-p)

```
# packages/engine/parte-kit — tokens método (rg -F)
SCRIPT_SDK|HOLONES|holón|holarqu|juntura|swarm-orquestacion|BACKLOG|orquestador → 0

$ git log -p b67b9ca..HEAD -- packages/engine/parte-kit
→ LOG_P_CEGUERA_OK count=0
```

### Eje I / II

- I: 11 tests ejercitan redactar / render / validar / intentarPublicarParte.
- II: campos v1 solo los de SEMILLA-ARG §A1; `isParteDeCiudadShaped` en test.

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: parte-kit + lock + reporte; sin GL, sin domain, sin A02/A3, sin BACKLOG
- [x] Cero árboles copiados de otros mundos
- [x] Sellos con fuente; tip addenda `48e2062` verificado como ancestro
- [x] Sin fluff; cableado runtime ciudad = consumidor pasa censo (`<pendiente>` composición)
- [x] Ejes I/II evidenciados (tests)
- [x] Gates ejecutados de verdad
- [x] Commits convencionales (zeus); un commit limpio post-squash ceguera
- [x] Diff solo del alcance del WP

## Hallazgos fuera de alcance

- Composición ciudad (authority `stateDelta` + emit ledger parte) queda al
  pack juego / ola siguiente — este WP entrega el kit puro + adapters.
- A02 ya tiene worktree GL `wp-gc-a02-presencia` @ `2b14d36` — paths
  disjuntos respetados (no se pisó).

## Dudas / bloqueos

- Ningún bloqueo para revisión. ¿Orquestador mergea zeus `wp/gc-a01-parte-kit`
  y bump submodule, o solo mergea tras push tip custodio?

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
