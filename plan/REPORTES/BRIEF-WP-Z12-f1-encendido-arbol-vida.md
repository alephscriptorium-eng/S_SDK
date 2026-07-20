# BRIEF · WP-Z12-f1 · Encendido árbol de vida (f1)

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z12 · f1 Encendido del árbol de vida (lifecycle XState)
Rama: wp/gc-z12-f1-arbol-vida
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-z12-f1-arbol-vida
Reporte: plan/REPORTES/WP-Z12-f1-encendido-arbol-vida.md
Issue: alephscriptorium-eng/S_SDK#12

⚠️ BLOQUEO SOFT: no implementar hasta Z06 ✅ mergeado (actuadores reales).
   Orquestador despacha este chat tras merge Z06. Podés leer/preparar
   diseño en idle, cero código de spawn/kill propio.

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/engine/** (lifecycle-kit genérico)
  - HOLONES/01-mythos/zeus-sdk/packages/** servicio ciudad-lifecycle
    (composición; tools MCP gateadas)
  - HOLONES/01-mythos/games-library/** SOLO extensión catálogo/`arbol` en
    seeds (mínimo; no regenerar startpack entero)
  - plan/REPORTES/WP-Z12-f1-encendido-arbol-vida.md
  Fuera: reimplementar launcher (Z06), f2 cascada/zonas (GC-3), domain.mjs
    con xstate, BACKLOG, flows Z08 (tablero f4 es consumidor, no tu obra).

Eje CA aplicable: I (e2e barrio StateMachine) · III (spawn solo vía Z06) ·
  IV (2º cliente mando) · ceguera kit.

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. BACKLOG §Replan GC-1.5 §E + ficha WP-Z12 (fases f1 + CA + frontera Z06)
  3. WP-Z06 ficha (catálogo/tools que consumís — no duplicar)
  4. player-ui session-machine.mjs (precedente estilo XState 5; no tocar)
  5. DECISIONES.md DC-GC-ceguera-marca
  6. Plantilla reporte del skill

Notas del orquestador (GC-2 · §E REVISION-GC15):
  - **Push gate (§E a):** no pusheés tip; verificá origin / pedí push antes
    de afirmar CI.
  - **Env checks (§E c):** `git -C <zeus-sdk|games-library|worktree>
    rev-parse HEAD`. NUNCA `test -d .git`. Tras Z06: confirmá que el
    paquete launcher está en el tip que consumís.
  - **Frontera (§E c + ficha):** Z06 = actuador (launch/stop/health);
    Z12 = cuándo/orden/fallo (XState). Cero `child_process` en Z12.
    Extender catálogo Z06, no clonarlo.
  - f1 = catálogo semilla 3 barrios + kit hoja/edificio + e2e StateMachine
    (1 maquinaria). f2 fuera de alcance.
  - Dep Z03 wake: si Z03 aún no ✅, documentá round-trip pendiente; no
    bloquees f1 mínimo si health→hecho→proyección se demuestra.
  - Win32: CA supervisión en local antes de aceptar.
  - Ceguera: kit sin ciudad/barrio/marco. No edites BACKLOG.

Empieza (solo post-Z06 ✅): rama/worktree, PRACTICAS + ficha Z12 + API Z06,
implementá solo f1.
```
