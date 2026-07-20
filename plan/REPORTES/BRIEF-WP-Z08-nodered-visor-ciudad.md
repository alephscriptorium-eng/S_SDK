# BRIEF · WP-Z08 · Constelación Node-RED — solo f1–f3 (lote GC-1)

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z08 · Constelación Node-RED: visor + coordinación + población (169)
  ★ ALCANCE DE ESTE LOTE = fases 1–3 únicamente (Oreja · Ojo · Ciudad completa
    lectura/agregación). NO implementes f4 (Mano), f5 (Ciudadano), f6
    (Población/constelación), f7 (wishlist) en este chat.
Rama: wp/gc-z08-nodered-visor
Worktree: C:\Users\aleph\SCRIPT_SDK\.claude\worktrees\wp-gc-z08-nodered-visor
  (rama del superproyecto SCRIPT_SDK — este WP aterriza flows/docs en el
   sprint; alternativa: C:\Users\aleph\SCRIPT_SDK-wp-gc-z08-nodered-visor)
  NO uses worktrees i70–i74 ni agent-* ajenos.
Reporte: plan/REPORTES/WP-Z08-nodered-visor-ciudad.md

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/
Proyección issues = LOCAL-ONLY (no GitHub)

ALCANCE_DIFF =
  - plan/SPRINTS/sprint-game-city/**  (flows Node-RED f1–f3, README de
    arranque, config de instancia :1880, dashboards; p.ej. subcarpeta flows/)
  - plan/REPORTES/WP-Z08-nodered-visor-ciudad.md
  Lectura / consumo sin editar:
  - HOLONES/01-mythos/zeus-sdk/**  «tal cual» (socket-server :3017 /runtime,
    console-monitor :3014, editor-ui :3012, firehose :3016, cache :3015)
  - WiringEditor\packages\ y WiringEditor\examples\flows\ (referencia;
    nodos desde Verdaccio o npm install de fuentes — CERO forks)
  Fuera de escritura: games-library startpacks, mockdatas Z01, zeus-sdk
  (no meter código Node-RED-aware en authority — regla 3 sprint), f4+.

Eje CA aplicable: IV (Node-RED = segundo cliente independiente del contrato
  /runtime). Para f1–f3 el CA mínimo del lote:
  - F1 Oreja: NR escucha state|track|ledger + SET_STATE (PUBLIC_ROOM + room
    de juego) vía ws://localhost:3017/runtime (dev-secret).
  - F2 Ojo: widget dashboard-2-alephscript-rooms con clients/rooms en vivo.
  - F3 Ciudad completa: http request agregando REST zeus (snapshot fleet /
    servers / volúmenes); dashboard con grupo por distrito; taxonomía
    sys/app/ui/agent/game.
  Evidencia: dashboard muestra rooms + fleet MCP + un volumen, refrescando
  en vivo (CA ficha F1–F3). Transparencia: grep node-red en zeus-sdk = 0.

Lecturas obligatorias (antes de tocar nada):
  1. plan/PRACTICAS.md (entero)
  2. plan/SPRINTS/sprint-game-city/BACKLOG.md — reglas del sprint §1–7
     (esp. regla 3 transparencia Node-RED)
  3. plan/SPRINTS/sprint-game-city/WP-Z08-nodered-visor-ciudad.md (ficha;
     leé todas las fases para no desbordar, implementá solo 1–3)
  4. plan/SPRINTS/sprint-game-city/RECAP-NODERED.md
  5. plan/SPRINTS/sprint-game-city/RECURSOS-LIBS.md §0–2 (nodos, puertos,
     enganche protocolo)
  6. plan/SPRINTS/sprint-game-city/VISTA.md + README.md del sprint
  7. Cantera solo si necesitás etiquetas de distrito (lectura):
     plan/SPRINTS/sprint-game-city/cantera/CIUDAD/ — no para población 169
     (eso es f6)
  8. Plantilla reporte: .claude/skills/swarm-orquestacion/reference/plantilla-reporte.md

Notas del orquestador (lote GC-1 · paralelo Z01|Z02|Z08-f1..3):
  - Paralelo seguro: Z01/Z02 no tocan flows; vos no toqués browsers ni
    startpack. Si Z01 aún no generó volúmenes, F3 puede apuntar a volumen
    vacío/demo — documentá dependencia blanda en §hallazgos.
  - Piezas: node-red-contrib-alephscript-core@0.2.0 +
    node-red-dashboard-2-alephscript-rooms@0.2.0 (Verdaccio).
  - Auth fabric: {token:'dev-secret', room, user} — ns /runtime.
  - Ceguera en cualquier paquete zeus que toqués (idealmente cero diffs
    zeus): sin nombres marco/holones. Flows del sprint SÍ pueden citar
    rutas del plan (gobierno).
  - Wishlist / dolores → §hallazgos, no f7 en este lote.
  - No edites BACKLOG. No push. No abras f4+.

Empieza: sitúate en rama/worktree del superproyecto, lee PRACTICAS + ficha
Z08 + RECAP/RECURSOS, levantá NR :1880 contra zeus :3017, implementá solo
f1–f3, reportá.
```
