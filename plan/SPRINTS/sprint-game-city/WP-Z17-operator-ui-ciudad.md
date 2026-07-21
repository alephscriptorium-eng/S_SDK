# WP-Z17 — Vista 3D: operator-ui pinta la ciudad (SEMILLA §5)

| dato | valor |
|---|---|
| estado | ✅ aceptado (ola GC-5 · 2026-07-21 · zeus-sdk `8afc0a0`) |
| track / prio | VISOR / 1 · **ola GC-5** |
| depende de | Z02 ✅ (escena/seeds) · Z03 ✅ (snapshot `ciudad`) — **no** exige Z16 para el slice mínimo |
| fuente | [SEMILLA-GAMIFICACION.md](SEMILLA-GAMIFICACION.md) §5 |
| base | `@zeus/operator-ui` (`packages/mesh/operator-ui`) + `@zeus/operator-bridge` |

## Objetivo

Conectar la UI de operador gamificada que **ya existe** (Angular + Three,
ThreeGamification / threejs-ui-lib) como **vista 3D de la ciudad**: varias vistas,
un contrato (`state` / `ledger` / intents). Sin inventar visor nuevo ni contrato
nuevo — reusar Z02 escena + Z03 snapshot.

## Entregables

1. **Cableado ciudad:** `serve.mjs` / `window.__ZEUS__` (o equivalente) apunta
   room + `game: 'ciudad'` al authority vivo / fixture documentado.
2. **Proyección visual mínima:** barrios del snapshot (estados
   vivo/latente/muerto/roto) visibles en la escena Three — sin rediseñar el hub.
3. **Segundo cliente del contrato (eje IV):** operator-ui como vista distinta de
   player-ui / Z08 leyendo el mismo wire `state|intent|track|ledger`.
4. **Smoke / evidencia:** arranque documentado (`npm run build:operator-ui` +
   serve / script del monorepo) + captura o log de snapshot proyectado.
5. **Reporte:** `plan/REPORTES/WP-Z17-operator-ui-ciudad.md`.

## Criterios de aceptación

- [ ] operator-ui conecta a room `ciudad` y proyecta snapshot (barrios + estados).
- [ ] Cero contrato nuevo de engine; reusa protocol existente + operator-bridge.
- [ ] Eje IV: evidencia de 2ª vista independiente (vs player-ui o fixture socket).
- [ ] Diff solo en `ALCANCE_DIFF`; **no** reimplementar Three desde cero.
- [ ] Ceguera: 0 tokens método/marco/`WP-Z\d+` en packs tocados (árbol +
      `git log -p`); marca `aleph`/`scriptorium` admisible.

## Ejes CA

- **IV** — segundo cliente del contrato de estado (operator-ui).
- **I** — consumidor real del snapshot/startpack ciudad (no demo genérico suelto).
- Ceguera ampliada (reglas 13–14).

## Fuera de alcance

- SEMILLA §1 loop (→ Z16; si Z16 ya mergeó, pintar energía/decay es bonus, no
  bloqueante del slice).
- §2 salud real, §3 misiones, §4 cronista, §6 meta-juego.
- Z05 items 3–6 parked; **no reopen Z05-f1**.
- Reescritura de player-3d-ui / nuevo pack de visor.
- BACKLOG (solo orquestador). Proyección issues = LOCAL-ONLY.

## Notas

- Paralelo OK con Z16 (paths distintos).
- Soft-dep Z16: enriquecer visual con energía/decay si ya está en tip; no esperar.
- Rama: `wp/gc-z17-operator-ui-ciudad`.
- Workspace aislado Angular: build propio del pack (ver README del paquete).
