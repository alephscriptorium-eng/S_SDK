# BRIEF · WP-Z02 · `@zeus/startpack-ciudad` (seeds desde MAPA.md)

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z02 · @zeus/startpack-ciudad (seeds desde MAPA.md)
Rama: wp/gc-z02-startpack-ciudad
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-gc-z02-startpack-ciudad
  (alternativa hermana si preferís fuera del submodule:
   C:\Users\aleph\SCRIPT_SDK-wp-gc-z02-startpack-ciudad — solo si el worktree
   apunta al mismo repo games-library)
  NO uses worktrees i70–i74 ni C:\Users\aleph\SCRIPT_SDK\.claude\worktrees\ ajenos.
Reporte: plan/REPORTES/WP-Z02-startpack-ciudad.md
  (superproyecto SCRIPT_SDK; código en git de games-library)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/
Proyección issues = LOCAL-ONLY (no GitHub)

ALCANCE_DIFF =
  - HOLONES/01-mythos/games-library/packages/startpack-ciudad/**  (nuevo)
  - HOLONES/01-mythos/games-library/packages/startpack-kit/**     (solo si el
    patrón de startpacks exige tocar kit compartido — mínimo; documentá)
  - HOLONES/01-mythos/games-library/packages/startpack-plaza/**   (SOLO LECTURA
    para nota de solape; no mutar plaza salvo colisión de ids que exija fix
    mínimo — preferí slugs nuevos)
  - Generador de seeds (si vive junto al pack): bajo startpack-ciudad o
    tools del games-library — NO bajo firehose/cache-browser
  - plan/REPORTES/WP-Z02-startpack-ciudad.md
  Fuera: mesh browsers, Node-RED/flows Z08, WiringEditor, zeus-sdk salvo
  verificación de carga vía @zeus/game-engine (consumidor, no edición),
  BACKLOG, TEMP/.

Eje CA aplicable: I (engine carga seeds/gamemap.json sin error).
  Eje IV diferido a cuando exista ciudad-model compartido con Z01 — no lo
  bloquees en este lote; documentá en §hallazgos si el módulo aún no existe.

Lecturas obligatorias (antes de tocar nada):
  1. plan/PRACTICAS.md (entero)
  2. plan/SPRINTS/sprint-game-city/BACKLOG.md — reglas del sprint §1–7
  3. plan/SPRINTS/sprint-game-city/WP-Z02-startpack-ciudad.md (ficha)
  4. plan/SPRINTS/sprint-game-city/README.md + VISTA.md §1–3
  5. Cantera (build-time only):
     plan/SPRINTS/sprint-game-city/cantera/CIUDAD/MAPA.md
     + fichas barrios/locales para sección `arbol` (edificios/maquinarias)
  6. Patrón vivo: games-library packages/startpack-plaza (y un hermano
     startpack-*) — manifest zeus.startpack/v0 + seeds/gamemap.json
  7. Spec gamemap del engine (zeus-sdk packages/engine/game-engine/spec/gamemap/)
     — límites: grafo plano, sin pathfinding
  8. Plantilla reporte: .claude/skills/swarm-orquestacion/reference/plantilla-reporte.md

Notas del orquestador (lote GC-1 · paralelo Z01|Z02|Z08-f1..3):
  - NO tocar firehose-browser / cache-browser / volúmenes mock de Z01.
  - NO tocar flows Node-RED de Z08.
  - Revisá solape con startpack-plaza ANTES de crear; documentá qué
    reutiliza / extiende / no duplica.
  - Incluí sección `arbol` en seeds (para Z12); el engine de juego la ignora
    (D-8 intacto) — validá schema, no la ejercites en el CA de juego.
  - Si Z01 aún no mergeó ciudad-model: generá seeds con transform propio;
    no bloquees esperando Z01. Homogeneizar modelo = follow-up / eje IV.
  - Ceguera: cero nombres marco/holones/SCRIPT_SDK en el paquete publicado.
  - Release canal startpacks (release-startpack.yml) — no publiques sin
    autorización del WP; prepará para el canal, evidencia en reporte.
  - No edites BACKLOG. No push.

Empieza: sitúate en rama/worktree de games-library, lee PRACTICAS entero +
ficha Z02 + startpack-plaza, luego implementa solo Z02.
```
