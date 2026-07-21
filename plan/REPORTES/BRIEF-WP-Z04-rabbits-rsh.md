# BRIEF · WP-Z04 · Rabbits r/s/h e2e (federación)

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z04 · Rabbits r/s/h como actores externos (e2e)
Rama: wp/gc-z04-rabbits-rsh
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-gc-z04-rabbits-rsh
  (demo peer / e2e contra authority ciudad; launcher vive en zeus — solo
   consumí tools, no edites mcp-launcher salvo bug bloqueante → reportá)
Reporte: plan/REPORTES/WP-Z04-rabbits-rsh.md
Issue: alephscriptorium-eng/S_SDK#4 (si sync-map; si no, anotá en reporte)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/

ALCANCE_DIFF =
  - HOLONES/01-mythos/games-library/packages/** (cliente peer / e2e / CASOS)
  - HOLONES/01-mythos/games-library/** fixtures mínimos federación
  - plan/REPORTES/WP-Z04-rabbits-rsh.md
  Fuera: mcp-launcher (Z06/Z15), lifecycle (Z12), flows Z08, dramaturgo
  (Z07), BACKLOG.

Eje CA aplicable: IV (peer externo = 2º cliente del contrato rooms/protocol).

Lecturas obligatorias:
  1. plan/PRACTICAS.md
  2. BACKLOG §Cola post-GC-2 + §Ola GC-3 + ficha WP-Z04
  3. WP-Z03 (juego ✅) + WP-Z06 (capacidad real / launch)
  4. DECISIONES.md DC-GC-ceguera-marca
  5. Plantilla reporte del skill

Notas del orquestador (GC-3):
  - Deps Z03 ✅ · Z06 ✅. Paralelo con Z15 (prio alta) · Z07 · Z08-f6.
  - **A1 pendiente (npm ci zeus+GL):** sanity con
    `git -C <path> rev-parse HEAD`. NUNCA `test -d .git`. Vivos pueden
    deferirse con intento documentado (mock control-plane OK si real no
    está servido — ficha).
  - **Push S_SDK:** gate de ola (custodio); no pusheés tip gobierno.
  - Solo contrato sancionado (protocol+rooms / player-mcp-kit). Ceguera.
  - No edites BACKLOG.

Empieza: rama/worktree games-library, PRACTICAS + ficha Z04 + authority Z03,
implementá solo Z04.
```
