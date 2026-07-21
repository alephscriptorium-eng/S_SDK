# WP-Z16 — Loop de juego: objetivo, decay, energía (SEMILLA §1)

| dato | valor |
|---|---|
| estado | ✅ aceptado (ola GC-5 · 2026-07-21 · GL `21a6592`) |
| track / prio | PACK / 1 · **ola GC-5** |
| depende de | Z03 ✅ (juego `@zeus/ciudad`) — **no** reabre Z03 |
| fuente | [SEMILLA-GAMIFICACION.md](SEMILLA-GAMIFICACION.md) §1 |
| base | `games-library/packages/ciudad` — `domain.mjs` (reducer puro) + intents existentes |

## Objetivo

Pasar de **mecánica** (entra → walk → wake → snapshot) a **loop**: meta colectiva,
coste y consecuencia. Todo en el reducer puro + intents mínimos — sin tocar engine.

## Entregables

1. **Decay:** barrio `vivo` sin visita en N ticks → `latente`; `latente` → `muerto`
   más lento. Reloj inyectable (`now` / tick) — sin `Date.now` escondido.
2. **Energía:** `wake` gasta energía del actor; `announce` en plaza la recarga.
   Presupuesto simple por actor en el reducer.
3. **Objetivo colectivo:** condición de estado de ciudad «mantener vivos ≥K
   barrios» visible en snapshot (bien/mal común). Sin ganador individual.
4. **Tests + smoke:** dominio puro + extensión de `spec/CASOS.md` (al menos 1
   caso decay, 1 energía, 1 objetivo).
5. **Reporte:** `plan/REPORTES/WP-Z16-loop-juego.md`.

## Criterios de aceptación

- [ ] Reducer sigue puro y testeable sin transporte.
- [ ] Decay / energía / objetivo evidenciados en tests (`node --test`) + smoke.
- [ ] Snapshot expone estado colectivo (K vivos / umbral) de forma legible.
- [ ] Diff solo en `ALCANCE_DIFF` (ciudad + reporte); **cero** engine / Z05 / SEMILLA §2–§4/§6.
- [ ] Ceguera: 0 tokens método/marco/`WP-Z\d+` en `packages/`+`e2e/` (árbol +
      `git log -p`); marca `aleph`/`scriptorium` admisible (DC-GC-ceguera-marca).

## Ejes CA

- **I** — consumidor real = tests/smoke del pack `@zeus/ciudad` ejercitan el loop.
- **IV** (parcial / diferido) — segundo cliente del snapshot (Z08 / Z17) puede
  leer el estado colectivo cuando exista; no bloquea ✅ de este WP si el contrato
  de snapshot queda documentado.

## Fuera de alcance

- SEMILLA §2 (salud real / CI), §3 misiones, §4 cronista, §5 operator-ui (→ Z17),
  §6 meta-juego.
- Z05 items 3–6 parked; **no reopen Z05-f1**.
- Engine (`protocol` / `game-engine` / ACL / loader / sharding).
- BACKLOG (solo orquestador).

## Notas

- Paralelo OK con Z17 (paths distintos: GL `ciudad` vs zeus `operator-ui`).
- Rama: `wp/gc-z16-loop-juego`.
