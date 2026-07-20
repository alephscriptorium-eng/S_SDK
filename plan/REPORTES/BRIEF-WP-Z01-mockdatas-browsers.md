# BRIEF · WP-Z01 · Pack mockdatas ciudad → firehose/cache-browser

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z01 · Pack mockdatas ciudad → firehose/cache-browser
Rama: wp/gc-z01-mockdatas-browsers
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-gc-z01-mockdatas-browsers
  (si también cableás scripts en zeus-sdk mesh: segundo worktree
   C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-z01-mockdatas-browsers
   — misma rama slug; NO uses worktrees i70–i74 ni agentes ajenos en
   C:\Users\aleph\SCRIPT_SDK\.claude\worktrees\)
Reporte: plan/REPORTES/WP-Z01-mockdatas-browsers.md
  (en el superproyecto SCRIPT_SDK; commits de código en el repo del submodule
   donde aterricen los archivos)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/
Proyección issues = LOCAL-ONLY (no GitHub)

ALCANCE_DIFF =
  - HOLONES/01-mythos/games-library/**   (generador .mjs, pack mockdatas,
    volúmenes generados versionados; opcional módulo ciudad-model si lo creás)
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/firehose-browser/**
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/cache-browser/**
  - HOLONES/01-mythos/zeus-sdk/tools/**  (solo si el generador vive ahí en vez
    de games-library — elegí UNO, no ambos)
  - plan/REPORTES/WP-Z01-mockdatas-browsers.md
  Fuera: WiringEditor, startpack-*, Node-RED, otros mesh packages, TEMP/,
  cantera en runtime, BACKLOG del sprint.

Eje CA aplicable: I (consumidores reales = firehose-browser + cache-browser
  arrancados con los volúmenes generados; evidencia de preview/navegación).

Lecturas obligatorias (antes de tocar nada):
  1. plan/PRACTICAS.md (entero — deltas holón 07; sellos/ejes)
  2. plan/SPRINTS/sprint-game-city/BACKLOG.md — reglas del sprint §1–7
     (esp. regla 1 ceguera + regla 4 cantera→repo)
  3. plan/SPRINTS/sprint-game-city/WP-Z01-mockdatas-browsers.md (ficha)
  4. plan/SPRINTS/sprint-game-city/README.md (parámetros ALCANCE / rama)
  5. plan/SPRINTS/sprint-game-city/VISTA.md §1–3 (vista + contratos que se conservan)
  6. Cantera (solo lectura para el generador): 
     plan/SPRINTS/sprint-game-city/cantera/CIUDAD/
     (MAPA.md, fichas, GRAFO/handoffs*.tsv) — regenerar → mismos bytes
  7. Spec openapi de cada browser (packages/mesh/*/spec/openapi.yaml) antes
     de inventar formato de volumen
  8. Plantilla reporte: .claude/skills/swarm-orquestacion/reference/plantilla-reporte.md

Notas del orquestador (lote GC-1 · paralelo Z01|Z02|Z08-f1..3):
  - NO pisar paths de Z02 (startpack-ciudad / seeds/gamemap.json) ni de Z08
    (flows Node-RED bajo el sprint).
  - Si extraés `ciudad-model` compartido: lo aterrizás VOS en este WP (dueño
    del generador). Z02 puede duplicar proyección mínima o depender del módulo
    si ya mergeó — NO pelear el mismo path en paralelo sin coordinar vía
    orquestador. Preferible: módulo en games-library + Z02 consume después,
    o generators separados sin package compartido en este lote.
  - Cero nombres del marco/holones/SCRIPT_SDK en entregables que aterricen en
    zeus-sdk/games-library (regla 1 sprint = ceguera). El plan sí puede nombrarlos.
  - Runtime NO lee cantera; solo el generador (build-time).
  - No edites BACKLOG. No push. No implementes Z02/Z08.
  - Commits de obra en el git del submodule (games-library y/o zeus-sdk);
    el puntero de submodule en SCRIPT_SDK lo actualiza el orquestador al merge.

Empieza: sitúate en rama/worktree (creá worktree desde main del repo destino),
lee PRACTICAS entero + ficha Z01 + reglas del sprint, luego implementa solo Z01.
```
