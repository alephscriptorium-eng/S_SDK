# BRIEF · WP-Z16 · Loop de juego (SEMILLA §1)

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z16 · Loop de juego: objetivo, decay, energía (SEMILLA §1)
Rama: wp/gc-z16-loop-juego
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-gc-z16-loop-juego
Reporte: plan/REPORTES/WP-Z16-loop-juego.md
Issue: LOCAL-ONLY (no proyectar; sync-map intacto)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/
Proyección issues = LOCAL-ONLY (no GitHub)

ALCANCE_DIFF =
  - HOLONES/01-mythos/games-library/packages/ciudad/** (domain/contract/spec/tests/fixtures)
  - HOLONES/01-mythos/games-library/** SOLO si hace falta wiring mínimo de
    test/smoke del pack ciudad (no regenerar startpack; no otros packs)
  - plan/REPORTES/WP-Z16-loop-juego.md
  Fuera: engine zeus, Z05 (f1 no reopen · items 3–6 parked), Z17,
    SEMILLA §2–§4/§6, flows Z08 como obra, BACKLOG, .sync-map.json.

Eje CA aplicable: I (tests/smoke ejercitan decay·energía·objetivo) ·
  IV diferido (2º cliente snapshot = Z08/Z17; documentá contrato) ·
  ceguera ampliada.

Deps (✅ — arrancable hoy):
  - Z03 ✅ @zeus/ciudad (no reopen)
  - GC-4 ✅ (Z05-f1·f2·Z11) — no tocar
  - Tick A1b ✅ PASS — acta plan/REPORTES/ACTA-A1b-PASS-2026-07-21.md
  - Paralelo OK con Z17 (paths distintos)

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado al brief: zeus≈0b566e6 · GL≈d5548b1 · S_SDK tip post-GO GC-5.

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. BACKLOG §Ola GC-5 + reglas §1–7 + ficha WP-Z16
  3. SEMILLA-GAMIFICACION.md §1 (literal — no §2–§6)
  4. DECISIONES.md DC-GC-ceguera-marca
  5. Reporte WP-Z03 (patrón dominio puro)
  6. Plantilla reporte del skill

Notas del orquestador (GO GC-5 · solo §1 · V2 gobierno propio):
  - **Slice:** decay + energía + objetivo colectivo en reducer puro.
  - Reloj inyectable; sin Date.now escondido.
  - No toques engine. No abras §2 salud-real / §3 misiones / §4 cronista /
    §6 meta-juego. No reopen Z05-f1.
  - Ceguera: árbol + `git log -p` reachable; medí con grep -c/-q.
    Marca aleph/scriptorium OK como datos.
  - No edites BACKLOG. No push tip gobierno. Rama exacta arriba.

Empieza: rama/worktree games-library, PRACTICAS + ficha Z16 + domain.mjs,
implementá solo el loop §1.
```
