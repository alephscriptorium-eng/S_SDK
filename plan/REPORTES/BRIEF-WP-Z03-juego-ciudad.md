# BRIEF · WP-Z03 · Juego de engine `ciudad` (patrón pozo)

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z03 · Juego de engine `ciudad` (patrón pozo)
Rama: wp/gc-z03-juego-ciudad
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-gc-z03-juego-ciudad
  (plantilla pozo vive en games-library; NO uses worktrees i70–i74 ni stale z01)
Reporte: plan/REPORTES/WP-Z03-juego-ciudad.md
Issue: alephscriptorium-eng/S_SDK#3

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/

ALCANCE_DIFF =
  - HOLONES/01-mythos/games-library/packages/** (paquete ciudad / patrón pozo)
  - HOLONES/01-mythos/games-library/** SOLO fixtures/smoke mínimos del juego
  - plan/REPORTES/WP-Z03-juego-ciudad.md
  Fuera: mcp-launcher (Z06), lifecycle-kit (Z12), flows Z08 f4+, miniclon,
  BACKLOG, cantera regeneración (Z14 ya ✅).

Eje CA aplicable: I (e2e entra→walk→wake→snapshot) · IV diferido (Z04/Z08).

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. plan/SPRINTS/sprint-game-city/BACKLOG.md — reglas §1–7 + §Replan GC-1.5 §E
  3. plan/SPRINTS/sprint-game-city/WP-Z03-juego-ciudad.md (ficha + CA)
  4. plan/SPRINTS/sprint-game-city/DECISIONES.md (DC-GC-ceguera-marca)
  5. Base: packages/pozo (contract/domain/authority/player-mcp) — plantilla
  6. Seeds Z02 `@zeus/startpack-ciudad` (solo lectura / import; no regenerar)
  7. Plantilla: .claude/skills/swarm-orquestacion/reference/plantilla-reporte.md

Notas del orquestador (GC-2 · §E REVISION-GC15):
  - **Push gate (§E a):** tip main ahead sin CI. NO pusheés vos obra a origin
    salvo mandato custodio. Antes de afirmar runner/CI: verificá tip en
    origin (`git fetch` + comparar) o pedí push al custodio. Gate temprano
    de ola, no bloquea apertura de implementación.
  - **Env checks (§E c):** sanity de checkouts con
    `git -C <path> rev-parse HEAD` (zeus-sdk / games-library). NUNCA
    `test -d .git` (en submódulo `.git` es fichero — lección N3 vigía).
  - Dep Z02 ✅. Paralelo con Z06∥Z08-f4..5 (paths no se pisan). Z12 espera Z06.
  - wake puede quedar con contraparte física vía Z06 después; documentá gap
    si horse/tools aún no están vivos.
  - Ceguera método: cero tokens de marco en entregables GL; aleph/scriptorium ok.
  - No edites BACKLOG. No toques obra Z06/Z08/Z12.

Empieza: creá rama/worktree en games-library, lee PRACTICAS + ficha Z03 +
pozo, implementá solo Z03.
```
