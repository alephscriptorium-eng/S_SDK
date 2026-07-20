# BRIEF · WP-Z14 · Procedencia estados de barrio → cantera versionada

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z14 · Procedencia estados de barrio → cantera versionada
Rama: wp/gc-z14-procedencia-estados
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-gc-z14-procedencia-estados
  (código de generador/seeds en games-library; cantera + reporte en superproyecto)
  NO uses worktrees i70–i74 ni C:\Users\aleph\SCRIPT_SDK\.claude\worktrees\ ajenos.
Reporte: plan/REPORTES/WP-Z14-procedencia-estados.md

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/
Proyección issues = LOCAL-ONLY (no GitHub)

ALCANCE_DIFF =
  - plan/SPRINTS/sprint-game-city/cantera/CIUDAD/**   (CENSO-ESTADOS.md o
    campo estado en fichas 01-BARRIOS — preferí un solo fichero censo)
  - HOLONES/01-mythos/games-library/packages/startpack-ciudad/**
    (generador + seeds/gamemap.json; regenerar citando cantera)
  - HOLONES/01-mythos/games-library/packages/mockdatas-ciudad/**
    (SOLO si el generador de Z01 también lee estados — mismo ancla cantera)
  - plan/REPORTES/WP-Z14-procedencia-estados.md
  Fuera: Docker/WiringEditor/Z09, zeus-sdk mesh, TEMP/, BACKLOG, otros startpacks.

Eje CA aplicable: I (generador regenera desde cantera versionada; evidencia
  de cita + regeneración determinista).

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. plan/SPRINTS/sprint-game-city/BACKLOG.md — reglas §1–7 + DC-GC-ceguera-marca
     (marca aleph/scriptorium ADMISIBLE; ceguera = solo método)
  3. plan/SPRINTS/sprint-game-city/DECISIONES.md (DC-GC-ceguera-marca)
  4. plan/SPRINTS/sprint-game-city/WP-Z14-procedencia-estados.md
  5. Seeds actuales startpack-ciudad (pueden ser la fuente a importar a cantera
     vía round-trip — no reinventar el censo)
  6. Plantilla: .claude/skills/swarm-orquestacion/reference/plantilla-reporte.md

Notas del orquestador (lote GC-1.5 · paralelo Z14|Z09):
  - Z02 ✅ NO se reabre; este WP sella trazabilidad.
  - En el entregable games-library: citar SOLO «cantera del sprint» / rutas bajo
    cantera/CIUDAD — NUNCA borradores TEMP ni nombres de dossier externos.
  - Preferible: importar estados desde seeds actuales → CENSO-ESTADOS.md →
    generador lee cantera → regenerar (diff 0 si ya coincidían).
  - NO pisar paths de Z09 (clon Docker / WiringEditor / flows VPS).
  - No edites BACKLOG. No push. No toques zeus-sdk (A1 caído — no lo necesitás).
  - Commits de obra en games-library; cantera en SCRIPT_SDK; puntero submodule
    lo actualiza el orquestador al merge.

Empieza: worktree/rama, lee PRACTICAS + ficha Z14 + DECISIONES, implementá solo Z14.
```
