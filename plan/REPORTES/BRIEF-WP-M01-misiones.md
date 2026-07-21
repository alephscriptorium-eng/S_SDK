# BRIEF · WP-M01 · Ciudadanos con misión · SEMILLA §3

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-M01 · Ciudadanos con misión · SEMILLA-GAMIFICACION §3
Rama: wp/v1-m01-misiones
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-v1-m01-misiones
Reporte: plan/REPORTES/WP-M01-misiones.md
Issue: LOCAL-ONLY (no gh issue create; apply+sync-map post-lote · regla 17)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-vida-1/
Proyección issues = LOCAL-ONLY

ALCANCE_DIFF =
  - HOLONES/01-mythos/games-library/** (PACK ciudad / población / misiones;
    mínimo necesario — documentá paths exactos en el reporte)
  - plan/REPORTES/WP-M01-misiones.md
  Fuera: packages/engine · domain.mjs / reducer · zeus-sdk salvo lectura ·
    BACKLOG city · fichas Z*/A*/E* city · embajador · E_SDK · SEMILLA §2/§6 ·
    M02 paths si el orquestador los asignó al otro worker · .sync-map.json

Eje CA aplicable: I · II · ceguera (regla 14 árbol + git log -p)

Deps (✅ — arrancable hoy):
  - Z10 ✅ viajes/grafo · Z08 población · Z16 loop (decay visible en censo)
  - Censo: plan/SPRINTS/sprint-game-city/cantera/CIUDAD/CENSO-ESTADOS.md
    (lectura; generadores ya en startpack — no reopen Z14/Z02)
  - Paralelo OK con M02 si no pisás sus paths

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado al brief: zeus≈1086392 · GL≈80f6157 · S_SDK tip post-GO-V2.

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. plan/SPRINTS/sprint-vida-1/BACKLOG.md + ficha WP-M01
  3. plan/SPRINTS/sprint-game-city/SEMILLA-GAMIFICACION.md §3 (literal)
  4. CENSO-ESTADOS.md + (opcional) BRIEF/reporte Z10 como plantilla de viaje
  5. DECISIONES vida-1 + DE-I19 v2 (cola; no reopen city)
  6. Plantilla: .claude/skills/swarm-orquestacion/reference/plantilla-reporte.md

Notas del orquestador (GO-V2 · VIDA-1 · V2 gobierno):
  - Misión = A→B por grafo; origen/destino por VERDAD del censo (zona,
    barrio que decae). Random-walk = idle solamente.
  - Cero engine. Track PACK. Coste bajo.
  - No edites BACKLOG (ninguno). No push tip gobierno. No gh issue create.
  - Ceguera: grep -c/-q; marca aleph/scriptorium OK (DC-GC-ceguera-marca).
  - City cerrado: no tocar su BACKLOG de WPs.

Empieza: worktree GL, PRACTICAS + ficha M01 + SEMILLA §3, implementá solo
misiones PACK.
```
