# BRIEF · WP-Z07 · Dramaturgo `ciudad` (capa lectura)

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z07 · Instancia dramaturgo `ciudad` (capa lectura)
Rama: wp/gc-z07-dramaturgo-ciudad
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-gc-z07-dramaturgo-ciudad
Reporte: plan/REPORTES/WP-Z07-dramaturgo-ciudad.md
Issue: alephscriptorium-eng/S_SDK#7 (si sync-map)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/

ALCANCE_DIFF =
  - HOLONES/01-mythos/games-library/kits/carpeta-dramaturgo/** SOLO
    invocación CLI (no fork del kit)
  - HOLONES/01-mythos/games-library/instances/ciudad/** (instancia generada)
  - HOLONES/01-mythos/games-library/** mapeo ledger→actos mínimo si vive
    junto a la instancia (documentá rutas)
  - plan/REPORTES/WP-Z07-dramaturgo-ciudad.md
  Fuera: engine ciudad (Z03 salvo leer ledger), Z04 peer, Z08 flows,
  Z11/Z12, BACKLOG.

Eje CA aplicable: CA del kit (instantiate + validate-story-board) ·
  proyección ledger→actos.

Lecturas obligatorias:
  1. plan/PRACTICAS.md
  2. BACKLOG §Ola GC-3 + ficha WP-Z07
  3. kits/carpeta-dramaturgo (CLI real — contrastá flags antes de invocar)
  4. Ledger/track Z03 (materia de actos)
  5. TRAMA-AGUA.md §ejes REIC (propuesta de flags; no inventar fuera del CLI)
  6. Plantilla reporte del skill

Notas del orquestador (GC-3):
  - Dep Z03 ✅. Paralelo con Z04·Z15·Z08-f6. CA ficha cita e2e Z04 para el
    acto «barrio despertó»: si Z04 aún no ✅, usá ledger/fixture Z03 y
    dejá gap literal «pendiente Z04 e2e».
  - **A1 pendiente:** `git -C <path> rev-parse HEAD`; vivos deferibles
    con intento. NUNCA `test -d .git`.
  - **Push S_SDK:** gate ola (custodio); no pusheés.
  - Dramaturgo = lectura; no produce mundos gamemap. Ceguera. No BACKLOG.

Empieza: rama/worktree, PRACTICAS + ficha + CLI kit, solo Z07.
```
