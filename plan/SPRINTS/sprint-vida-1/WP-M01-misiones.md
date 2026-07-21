# WP-M01 — Ciudadanos con misión (SEMILLA §3)

| dato | valor |
|---|---|
| track / prio | PACK / 1 · ola **V1-1** |
| depende de | Z10 ✅ (viajes/grafo) · Z08 población · censo cantera (verdad) — **no** reopen |
| fuente | [SEMILLA-GAMIFICACION §3](../sprint-game-city/SEMILLA-GAMIFICACION.md) |
| base | pack ciudad / población (games-library) — **sin engine** |

> **Estado canónico:** solo en [BACKLOG.md](BACKLOG.md).

## Objetivo

Que los ciudadanos lleven **misiones** (ir de A a B sobre el grafo de
handoffs / Z10) con origen/destino elegidos por **verdad del censo**
(zona del ciudadano, barrio que decae y «pide» visita). El random-walk
queda como **idle**; la misión es el comportamiento con intención.

## Entregables

1. Selección de origen/destino anclada a censo (`CENSO-ESTADOS` / seeds):
   zona home + bias a barrio `latente`/`muerto`/`roto` que decae.
2. Misión = secuencia de walks/viaje sobre grafo ya disponible (Z10) —
   consumidor PACK; no reimplementar camino en engine.
3. Idle = random-walk existente cuando no hay misión activa.
4. Smoke/fixture: ≥1 ciudadano con misión A→B derivada del censo;
   idle documentado.
5. Reporte: `plan/REPORTES/WP-M01-misiones.md`.

## Criterios de aceptación

- [ ] Origen/destino no son random puros: trazables a zona censo y/o barrio
      que decae (evidencia en fixture o log de selección).
- [ ] Con misión activa: camino usa grafo/viaje (Z10); sin misión: idle =
      random-walk.
- [ ] **Cero** diff en engine / `domain.mjs` / reducer.
- [ ] Eje **I**: smoke/pack consume la API de misión (comportamiento, no solo import).
- [ ] Eje **II**: destino canónico de la lógica de selección documentado
      (un módulo PACK; no duplicar en flows/engine).
- [ ] Ceguera: árbol + `git log -p`; marca `aleph`/`scriptorium` OK.
- [ ] Diff solo en `ALCANCE_DIFF` del brief.

## Fuera de alcance

- Engine / domain / ACL / SEMILLA §2/§6.
- Embajador / E_SDK / reopen ✅ city.
- Proyección GitHub (`gh issue create`).

## Notas

- Paralelo OK con M02 si paths no se pisan (orquestador asigna en briefs).
- Rama: `wp/v1-m01-misiones`.
