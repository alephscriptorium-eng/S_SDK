# WP-A03 · acta-barrio — reporte

| dato | valor |
| ---- | ----- |
| agente | worker gc-a03 (swarm) |
| fecha | 2026-07-21 |
| rama | `wp/gc-a03-acta-barrio` (zeus-sdk + games-library) · reporte SCRIPT_SDK `wp/gc-a03-acta-barrio` |
| commits | zeus `a6381a54f9cff73df4e58af2af978d67f2432121` · GL `32885103bd66b0855d971872a5997fa6aba59c70` · reporte S_SDK (este commit) |
| eje(s) CA | **I** (emisión/adopción/wake `roto`/reparar) · **II** (ActaDeBarrio v1 congelado) · ceguera ampliada |
| estado propuesto | listo para revisión |
| issue | LOCAL-ONLY |

## Qué se hizo

Paquete nuevo `@zeus/acta-kit` (zeus): contrato **ActaDeBarrio v1** en
`tipos.mjs`, `emitirActa` pura, `validarActa` + ceguera, publicación en canal
**ledger** plaza (`entryKind: acta` / `acta_rechazada`), `adoptarActaDesdePlaza`.
Wiring mínimo Z10: `runViajeReparacionJuguete` en `@zeus/linea-kit/viaje`
(R0→R2 juguete; no reopen viaje core).

En `@zeus/ciudad` (GL): `acta.mjs` alineado al contrato; seeds con acta
fundacional; `sleep` persiste acta en plaza; wake **sin** acta → `roto`;
`completarReparacion` tras viaje juguete cierra drift (`roto`→`latente` +
nueva acta). Tests + ceguera. **Sin** BACKLOG / §A4–§A6 / embajador /
reopen A01·A02·Z10·Z16. **Sin push** tip gobierno.

## Archivos tocados

- `packages/engine/acta-kit/**` (creado, zeus): kit + tests
- `packages/engine/linea-kit/src/viaje/reparar.mjs` (creado): wiring reparar
- `packages/engine/linea-kit/src/viaje/index.mjs` / `test/viaje.test.mjs` (mod): export + CA
- `packages/ciudad/src/acta.mjs` (creado, GL): contrato + helpers plaza
- `packages/ciudad/src/domain.mjs` (mod): wake `roto` / sleep acta / reparar
- `packages/ciudad/test/acta.test.mjs` (creado): CA §A3
- `packages/ciudad/package.json` / `README.md` (mod): export `./acta` · doc
- `plan/REPORTES/WP-A03-acta-barrio.md` (este reporte, superproyecto)

## Worktrees / SHAs

| repo | worktree / rama | SHA |
| ---- | --------------- | --- |
| zeus-sdk | `.worktrees/wp-gc-a03-acta-barrio` · `wp/gc-a03-acta-barrio` | obra `a6381a5` (base `c7ec7d0`) |
| games-library | `.worktrees/wp-gc-a03-acta-barrio` · `wp/gc-a03-acta-barrio` | obra `3288510` (base `2b14d36`) |
| SCRIPT_SDK | rama `wp/gc-a03-acta-barrio` (reporte) | (este commit) |

Env-check (rev-parse, nunca `test -d .git`):

```
zeus tip al brief / base = c7ec7d080ff19aab97ed9a5d324439d77c833045
GL tip al brief / base   = 2b14d360fbdd59c95a35ff75aa077ed929ee4241
S_SDK tip al arranque    = 1fa121d8ef58705e47969f4f157e7f9e421111e0
```

## Evidencia

### Gates

```
$ npm test -w @zeus/acta-kit   # cwd zeus worktree
# tests 7 · pass 7 · fail 0
# ceguera · frontera · contrato · round-trip · pureza

$ node --test packages/engine/linea-kit/test/viaje.test.mjs
# tests 6 · pass 6 · fail 0  (incl. viaje · reparar juguete)

$ npm test -w @zeus/ciudad     # cwd GL worktree
# tests 30 · pass 30 · fail 0
# (24 previos + 6 acta: contrato · wake vivo · wake roto · plaza adopt · reparar · ceguera)
```

### CA (ficha §A3)

| CA | estado |
| -- | ------ |
| Contrato `acta/1` campos literales; `resumen` ≤400 | ✅ |
| Emisión → plaza/ledger → acta recuperable al adoptar | ✅ |
| Sin acta persistida → wake `estado: 'roto'` | ✅ |
| Misión reparar: viaje juguete completado → sale de `roto` | ✅ |
| Diff ALCANCE_DIFF; ceguera árbol + `git log -p`; marca OK | ✅ |

### Ceguera ampliada (árbol + log-p)

```
# acta-kit + reparar.mjs — tokens método (rg)
SCRIPT_SDK|HOLONES|holón|holarqu|juntura|swarm-orquestacion|BACKLOG|orquestador → 0

$ git log -p c7ec7d0..HEAD -- packages/engine/acta-kit packages/engine/linea-kit/src/viaje/reparar.mjs
→ ZEUS_LOG_P_CEGUERA count=0

$ git log -p 2b14d36..HEAD -- packages/ciudad
→ GL_LOG_P_CEGUERA count=0

# Marca aleph/scriptorium admisible (DC-GC-ceguera-marca): fixture scriptorium-plaza / registry URL
```

### Eje I / II

- **I:** tests emisión/publicar/adoptar; wake `roto`; `completarReparacion` post-viaje.
- **II:** campos v1 solo SEMILLA-ARG §A3; `isActaDeBarrioShaped` en kit y ciudad.

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: acta-kit + linea wiring + ciudad acta/roto + reporte; sin BACKLOG
- [x] Cero árboles copiados de otros mundos
- [x] Sellos con fuente; tip A01 `c7ec7d0` / A02 `2b14d36` verificados
- [x] Sin fluff; composición authority live = `<pendiente>` (adapter domain listo)
- [x] Ejes I/II evidenciados (tests)
- [x] Gates ejecutados de verdad
- [x] Commits convencionales (zeus + GL)
- [x] Diff solo del alcance del WP

## Hallazgos fuera de alcance

- Ciudad embebía shape ActaDeBarrio localmente (evita dep npm unpublished de
  `@zeus/acta-kit`); kit canónico vive en zeus — unificar import cuando el
  kit se publique / override file: en GL (`<pendiente>` ola siguiente).
- `runViajeReparacionJuguete` aún no publicado en registry; ciudad tests usan
  fixture de viaje `{ ok, reparacion }` (mismo contrato de adapter).

## Dudas / bloqueos

- Ningún bloqueo para revisión. ¿Orquestador mergea zeus `wp/gc-a03-acta-barrio`
  + GL `wp/gc-a03-acta-barrio` y bump submodules, o solo tras push tip custodio?

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-21 · orquestador (merge/gobierno).

zeus-sdk `main` @ `a6381a5` (FF + push `origin/main`) · games-library `main` @ `3288510` (FF + push `origin/main`) · SCRIPT_SDK submodules → ambos tips.
Reporte tip `2e917c2` (obra reporte en rama `wp/gc-a03-acta-barrio`).

ActaDeBarrio v1 + `@zeus/acta-kit` (emitir/validar/publicar ledger/adoptar) + wake `roto` + reparar vía viaje juguete Z10; tests acta-kit 7/7 · viaje 6/6 · ciudad 30/30; ceguera 0. **WP-A03 ✅** · slice ARG-1 masticado cerrado (A01·A02·A03 ✅) · §A4–§A6 parked sin GO.

### Verificado (brazo merge/gobierno)
- Rama zeus `wp/gc-a03-acta-barrio` @ `a6381a5` · FF → `main` · push tip autorizado (`alephscriptorium-eng`)
- Rama GL `wp/gc-a03-acta-barrio` @ `3288510` · FF → `main` · push tip autorizado
- Rama reporte S_SDK `wp/gc-a03-acta-barrio` @ `2e917c2` · FF → `main` · bump submodules zeus+GL
- Sin force-push; sin §A4–§A6 · sin embajador · sin reopen A01/A02/Z10 · V2 atómico
