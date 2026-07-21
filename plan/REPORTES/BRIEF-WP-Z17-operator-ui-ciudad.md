# BRIEF · WP-Z17 · operator-ui vista ciudad (SEMILLA §5)

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z17 · Vista 3D: operator-ui pinta la ciudad (SEMILLA §5)
Rama: wp/gc-z17-operator-ui-ciudad
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-z17-operator-ui-ciudad
Reporte: plan/REPORTES/WP-Z17-operator-ui-ciudad.md
Issue: LOCAL-ONLY (no proyectar; sync-map intacto)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/
Proyección issues = LOCAL-ONLY (no GitHub)

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/operator-ui/**
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/operator-bridge/** SOLO si el
    cableado ciudad exige thin wrap (mínimo; documentá)
  - HOLONES/01-mythos/games-library/** SOLO fixture/smoke de autoridad ciudad
    si hace falta evidencia e2e (no reabrir Z03; no loop Z16)
  - plan/REPORTES/WP-Z17-operator-ui-ciudad.md
  Fuera: Z16 loop (SEMILLA §1 — otro WP), §2–§4/§6, Z05 items 3–6,
    reopen Z05-f1, nuevo visor Three, BACKLOG, .sync-map.json, flows Z08 obra.

Eje CA aplicable: IV (2ª vista del contrato state/ledger) · I (consume
  snapshot/startpack ciudad real) · ceguera ampliada.

Deps (✅ — arrancable hoy; soft-dep Z16 no bloquea):
  - Z02 ✅ startpack-ciudad · Z03 ✅ snapshot/authority
  - operator-ui ya existe (README: varias vistas, un contrato)
  - Paralelo OK con Z16 (paths distintos)
  - Si Z16 ya en tip: pintar energía/decay = bonus, no gate

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado al brief: zeus≈0b566e6 · GL≈d5548b1 · S_SDK tip post-GO GC-5.

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. BACKLOG §Ola GC-5 + reglas §1–7 + ficha WP-Z17
  3. SEMILLA-GAMIFICACION.md §5 (literal — no §1–§4/§6 como obra)
  4. operator-ui/README.md + serve.mjs (window.__ZEUS__)
  5. DECISIONES.md DC-GC-ceguera-marca
  6. Plantilla reporte del skill

Notas del orquestador (GO GC-5 · solo §5 · V2 gobierno propio):
  - **Reusá** @zeus/operator-ui; no construyas visor desde cero.
  - Slice: game:'ciudad' + proyección barrios/estados en Three.
  - Workspace Angular aislado: build propio del pack.
  - No abras §2–§4/§6. No reopen Z05-f1. No edites BACKLOG.
  - Ceguera: árbol + git log -p; grep -c/-q. Marca OK.
  - No push tip gobierno. Rama exacta arriba.

Empieza: rama/worktree zeus-sdk, PRACTICAS + ficha Z17 + operator-ui README,
cableá solo la vista ciudad.
```
