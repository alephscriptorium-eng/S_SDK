# BRIEF · WP-Z05-f1 · `GAME_STATE_DELTA` (protocolo v0.2)

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z05-f1 · GAME_STATE_DELTA (protocolo v0.2) — umbrella Z05 item 1
Rama: wp/gc-z05-f1-game-state-delta
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-z05-f1-game-state-delta
Reporte: plan/REPORTES/WP-Z05-f1-game-state-delta.md
Issue: (sync-map si aplica; si no, anotá en reporte)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/
Proyección issues = LOCAL-ONLY (no GitHub)

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/engine/protocol/**
  - HOLONES/01-mythos/zeus-sdk/packages/engine/game-engine/**
  - HOLONES/01-mythos/zeus-sdk/packages/engine/rooms/** SOLO si el wire
    de delta exige contrato room (mínimo; documentá)
  - HOLONES/01-mythos/zeus-sdk/packages/engine/authority-kit/** SOLO si
    authority emite/aplica deltas (mínimo)
  - HOLONES/01-mythos/games-library/** SOLO demo/test no-regresión del
    consumidor ciudad (no regenerar startpack; no spawn)
  - plan/REPORTES/WP-Z05-f1-game-state-delta.md
  Fuera: Z05-f2 (zonas), items 3–6, Z11, flows Z08, BACKLOG, SEMILLA loop.

Eje CA aplicable: IV (2º cliente del contrato delta) · II (engine
  game-agnostic; nada «ciudad» dentro del engine) · ceguera ampliada.

Deps / preticket (claim → acta/SHA — no reabrir):
  - Tick A1b ✅ PASS — acta plan/REPORTES/ACTA-A1b-PASS-2026-07-21.md
    · zeus `af0bad9` · GL `439788f` · tip gobierno brief ~`59fd564`
  - Señal dolor items 1–2: vigía ACTA-CONSOLIDADA-GC23 (backpressure /
    techo snapshots; Z04 multi-peer)
  - Z04 ✅ · Z03 ✅ (consumidores; no reopen)

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado al brief: zeus≈af0bad9 · GL≈439788f · S_SDK tip post-GO.

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. BACKLOG §Ola GC-4 + ficha WP-Z05 (item 1 + CA paraguas)
  3. ACTA-A1b-PASS-2026-07-21.md (claim→acta)
  4. DECISIONES.md DC-GC-ceguera-marca
  5. Plantilla reporte del skill
  6. Spec/protocol existente en packages/engine/protocol + game-engine

Notas del orquestador (GO GC-4 · V2 gobierno propio):
  - **Solo item 1.** No implementes suscripción por zona (eso es f2).
  - Protocolo versionado (v0.2); demo/test previa = no-regresión.
  - Engine game-agnostic (D-8 / ficha): cero lógica ciudad en engine.
  - Merge order: este f1 **antes** de f2 si pisáis protocol/game-engine.
  - Paralelo OK con Z11 (paths distintos: engine vs linea-editor).
  - Ceguera ampliada (reglas 13–14): árbol **y** `git log -p` reachable
    a 0 tokens método/marco/`WP-Z\d+` en packages/+e2e/. Medí con
    `grep -c` / `grep -q` (nunca `grep | head && echo OK`). Marca
    aleph/scriptorium admisible (DC-GC-ceguera-marca).
  - Vivos: A1b PASS ya citable; si re-smoke extra, claim→acta nueva.
  - No edites BACKLOG. No push tip gobierno. Rama exacta arriba.

Empieza: rama/worktree zeus-sdk, PRACTICAS + ficha Z05 item 1 + protocol,
implementá solo f1 (deltas).
```
