# BRIEF · WP-Z09 · Mini-clon local VPS Node-RED + pago deuda rooms

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z09 · Mini-clon local VPS Node-RED + pago deuda rooms
Rama: wp/gc-z09-miniclon-vps-rooms
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-z09-miniclon-vps-rooms
  ⚠️ Si el checkout zeus-sdk está desmaterializado (tick A1 pendiente), creá el
  worktree SOLO cuando el custodio confirme A1 O depositá el clon bajo
  plan/SPRINTS/sprint-game-city/ (p.ej. delta/miniclon/) / carpeta nueva en
  ALCANCE del sprint — NO intentes reparar el submódulo vos (eso es A1 custodio).
  Preferible aterrizaje: zeus-sdk/delta/ o plan/SPRINTS/sprint-game-city/miniclon/
  si zeus-sdk no está usable; documentá la ruta elegida en el reporte.
  NO uses worktrees i70–i74 ni .claude/worktrees ajenos.
Reporte: plan/REPORTES/WP-Z09-miniclon-vps-rooms.md

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/
Proyección issues = LOCAL-ONLY (no GitHub)

ALCANCE_DIFF =
  - Destino del clon (UNO): HOLONES/01-mythos/zeus-sdk/delta/**  Ó
    plan/SPRINTS/sprint-game-city/miniclon/**  (si A1 impide zeus-sdk)
  - Fuentes SOLO LECTURA: WiringEditor/packages/, ScriptoriumVps/PATTERN-DOCKER/,
    ScriptoriumVps/node-red-projects/ (rutas en ficha / RECURSOS-LIBS)
  - plan/REPORTES/WP-Z09-miniclon-vps-rooms.md
  - plan/SPRINTS/sprint-game-city/RECURSOS-LIBS.md (solo si documentás el switch)
  Fuera: startpack-ciudad, cantera/CENSO (Z14), linea-kit, mockdatas, BACKLOG,
  reparar .git del submódulo zeus-sdk.

Eje CA aplicable: I (nodos 0.3.x desde registry/Verdaccio instalados por el
  clon como consumidor real; dashboard rooms vivo).

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. plan/SPRINTS/sprint-game-city/BACKLOG.md — reglas; Z09 GO sin depender de A1
     para instalar nodos desde registry
  3. plan/SPRINTS/sprint-game-city/WP-Z09-miniclon-vps-rooms.md (ficha + receta)
  4. plan/SPRINTS/sprint-game-city/RECURSOS-LIBS.md §0–3 y §6 (registry, switch)
  5. plan/SPRINTS/sprint-game-city/DECISIONES.md (ceguera = método; marca ok)
  6. Plantilla: .claude/skills/swarm-orquestacion/reference/plantilla-reporte.md

Notas del orquestador (lote GC-1.5 · paralelo Z14|Z09):
  - Instalá / publicá nodos 0.3.x contra SDK ^1.5.0 desde el **registry**
    (Verdaccio). NO dependés del árbol fuente de linea-kit ni de rematerializar
    zeus-sdk para el CA de «nodos instalables en el clon».
  - Si zeus-sdk/.git falta: NO ejecutes submodule update vos; aterrizá el clon
    bajo el sprint (miniclon/) y dejá nota para que el orquestador mueva tras A1
    si hace falta. El CA del dashboard local sigue siendo válido.
  - Switch documentado: mismo flow cliente → :3010/1880 (clon) y, si hay red,
    VPS wss://rooms.scriptorium.escrivivir.co; zeus :3017 es bonus si A1 ya
    restauró el socket-server — si no, declarar gap honesto.
  - NO pisar cantera ni startpack-ciudad (Z14).
  - No edites BACKLOG. No push. No toques i70–i74.
  - Ceguera: entregables sin tokens de método/marco; aleph/scriptorium ok como datos.

Empieza: elegí destino de aterrizaje (zeus-sdk si sano, si no miniclon/ del sprint),
rama/worktree, lee PRACTICAS + ficha Z09 + RECURSOS-LIBS, implementá solo Z09.
```
