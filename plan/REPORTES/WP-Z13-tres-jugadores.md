# WP-Z13 · tres-jugadores — reporte

| dato | valor |
| ---- | ----- |
| agente | worker gc-z13 (swarm fresco) |
| fecha | 2026-07-21 |
| rama | `wp/gc-z13-tres-jugadores` (games-library) · reporte S_SDK `wp/gc-z13-tres-jugadores` |
| commits | games-library `2b8ed3176af1397aeaa3150d15db016d4a1dd008` |
| eje(s) CA | **IV** (≥2 tipos + tablero/cronista) · ceguera lore |
| estado propuesto | listo para revisión |
| issue | ⏳ sin verificar sync-map → `S_SDK#13` |

## Qué se hizo

Se armonizó lore + contrato de mapeo sobre el protocolo existente (sin
tercer canal): `residente` / `visitante` / `corriente` → rol de catálogo +
`features[]` (`jugador:*`, `residente:<edificio>`). El dominio hace nacer al
residente en el mismo tick que `wake` y lo retira con `sleep` (una fuente de
verdad). Flujo documentado sobre el oráculo `prolog-editor`. Acto V:
fixture ledger Z13 → proyector tipado → story-board validado. Eje IV:
cliente **tablero** (`tablero-jugadores.mjs`) + cliente **cronista**
(proyector dramaturgo), ambos consumen `jugadores.mjs`.

**Desviaciones:** e2e socket vivo / UI real diferidos (A1b; brief lo permite).
Z11 export no tocado (export Z07 alcanza para validar story-board). Sin push.

## Archivos tocados

- `packages/ciudad/src/jugadores.mjs` (creado): contrato de mapeo
- `packages/ciudad/src/contract.mjs` / `domain.mjs`: export mapeo + intent `sleep` + spawn/retiro residente
- `packages/ciudad/spec/LORE.md` · `FLUJO-RESIDENTE.md` · `CASOS.md` (C-04)
- `packages/ciudad/test/jugadores.test.mjs` · `casos.test.mjs`
- `packages/ciudad/fixtures/tablero-jugadores.mjs` · `z13-ledger-dump.mjs`
- `kits/.../ciudad/scripts/project-ledger-to-story-board.mjs` + `MAPEO.md` + fixture Z13 + story-board regenerado
- `plan/REPORTES/WP-Z13-tres-jugadores.md` (este reporte, superproyecto)

## Evidencia

> Worktree GL: `…/games-library/.worktrees/wp-gc-z13-tres-jugadores`
> Worktree S_SDK: `…/SCRIPT_SDK/.worktrees/wp-gc-z13-tres-jugadores`

```
git -C …/games-library/.worktrees/wp-gc-z13-tres-jugadores rev-parse HEAD
→ 2b8ed3176af1397aeaa3150d15db016d4a1dd008

git -C …/zeus-sdk rev-parse HEAD
→ e7d9766c0d9c7ad19111fac9f018f04db751a1e8

git -C …/SCRIPT_SDK/.worktrees/wp-gc-z13-tres-jugadores rev-parse HEAD
→ (tip rama reporte; base brief 34cd485)

$ node --test test/*.test.mjs   # cwd packages/ciudad
# tests 14
# pass 14
# fail 0
  ok — CASOS C-01..C-04
  ok — ceguera método
  ok — domain MVP + rechazo muerto
  ok — federation Z04
  ok — tres jugadores (demo · sleep · cronista ≥2 orígenes)

$ node fixtures/tablero-jugadores.mjs
TABLERO_JUGADORES {
  typesPresent: [ 'residente', 'visitante', 'corriente' ],
  ok: true,
  barrio: 'vivo'
}

$ node fixtures/z13-ledger-dump.mjs
Z13_LEDGER_OK { ledgerKinds: [ 'announce', 'wake' ],
  types: [ 'visitante', 'corriente', 'residente' ] }

$ node …/project-ledger-to-story-board.mjs
acts=act-0:Semilla/— · act-1:Presencia en plaza/visitante ·
     act-2:Cruce de distrito/corriente · act-3:Un barrio despertó/corriente

$ node …/validate-story-board.mjs …/story-board.json
✅ dialect=solve-inline  act-0→…; act-1→…; act-2→…; act-3→…

$ rg -i '\bmarco\b|hol[oó]n|mundos?' packages/ciudad/spec/LORE.md \
    packages/ciudad/src/jugadores.mjs → 0
```

Push tip / submodule bump: **no** (gate custodio). Vivos A1b: ⏳ diferido.

## Criterios de aceptación (ficha)

| CA | estado |
| -- | ------ |
| Tres tipos distinguibles en un snapshot | ✅ tests + tablero CLI |
| Una fuente de verdad (`sleep` retira residente mismo tick) | ✅ test dedicado |
| Acto V: story-board solo desde ledger | ✅ fixture Z13 + validate |
| Eje IV: ≥2 tipos + 2 clientes (tablero/cronista) | ✅ |
| Ceguera lore/contrato | ✅ |

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: ciudad + consumo dramaturgo acto V + reporte; sin BACKLOG; sin reopen Z12/Z03/Z04
- [x] Cero árboles copiados de otros mundos
- [x] Sellos con fuente (`rev-parse` arriba)
- [x] Sin fluff; vivos A1b / Z11 export marcados pendiente o fuera
- [x] Eje IV + ceguera evidenciados
- [x] Gates ejecutados de verdad (14/14 + validate)
- [x] Commits convencionales
- [x] Push tip: **no**

## Hallazgos fuera de alcance

- Cablear `player_sleep` en player-mcp UI (C-04 usa rooms_intent)
- Dashboard Z08 como consumidor visual del mapeo (CLI tablero cubre eje IV)
- Horse físico oráculo / tools/call vivo (A1b)
- Export líneas Z11 (parked; story-board Z07 alcanza)

## Dudas / bloqueos

Ninguno bloqueante. Pedir push GL + bump submodule al orquestador cuando revise.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
