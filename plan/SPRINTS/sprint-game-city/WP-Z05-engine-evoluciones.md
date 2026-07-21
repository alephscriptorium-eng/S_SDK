# WP-Z05 — Evoluciones de engine (ex-wishlist, ahora WPs reales)

| dato | valor |
|---|---|
| estado | 🔶 GC-4: **f1** (`GAME_STATE_DELTA`) + **f2** (zonas) abiertos; items 3–6 parked |
| track / prio | ENGINE / 3 |
| depende de | señales de dolor reales de Z01–Z04 (no especular) — items 1–2: Z04 multi-peer + Z03 mapa |
| base zeus | `packages\engine\game-engine` (+ `rooms`, `protocol`, `authority-kit`) |

## Objetivo

Lo que en el encargo antiguo era «anexo wishlist» aquí es backlog de primera clase:
la base es nuestra y el juego depende de que crezca (decisión del usuario). Cada item
se abre como WP propio cuando el pack ciudad lo pida de verdad.

## Items (ordenados por lo que el juego-ciudad necesita antes)

| # | Item | Límite actual que ataca | Lo dispara |
|---|---|---|---|
| 1 | `GAME_STATE_DELTA` (protocolo v0.2) | Snapshots completos por tick — no escalan con N rabbits | Z04 con >2 peers |
| 2 | Suscripción por zona/distrito en gamechannel | Firehose de juego sin filtrado por zona | Z03 con mapa completo (24 barrios) |
| 3 | Ownership / ACL por gameobject | Solo roles globales player/dj/operator; barrio sin dueño | mecánica «barrio despertado pertenece a quien lo despertó» |
| 4 | Loader de escenas (`gamemap/scenes/index`) | Escena única embebida; mapas grandes incómodos | Z02 si el seed ciudad crece por capas |
| 5 | Multi-autoridad / sharding por distrito | 1 autoridad por room, tick único global | horizonte — solo si el juego vivo lo exige |
| 6 | Spec del rol Launcher meta-ops | Hoy transcript de Copilot, no spec | Z06 (es su cara de contrato) |

## Criterios de aceptación (del WP paraguas)

- [ ] Cada item abierto tiene su WP con caso de dolor concreto citado (demo o test que
      hoy falla/duele), no motivación abstracta.
- [ ] Cambios de protocolo (items 1, 2) versionados en la spec del engine, con demo
      previa actualizada como prueba de no-regresión.
- [ ] El engine sigue game-agnostic (D-8): nada de lógica «ciudad» dentro del engine.

## Notas

- La regla de tránsito Z03→Z05: el juego anota el límite, el engine lo resuelve.
  Nunca parchear el engine desde el paquete del juego.
