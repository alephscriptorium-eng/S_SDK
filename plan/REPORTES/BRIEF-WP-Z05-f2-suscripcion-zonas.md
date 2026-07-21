# BRIEF · WP-Z05-f2 · Suscripción por zona/distrito (gamechannel)

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z05-f2 · Suscripción por zona/distrito en gamechannel — umbrella Z05 item 2
Rama: wp/gc-z05-f2-suscripcion-zonas
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-z05-f2-suscripcion-zonas
Reporte: plan/REPORTES/WP-Z05-f2-suscripcion-zonas.md
Issue: (sync-map si aplica; si no, anotá en reporte)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/
Proyección issues = LOCAL-ONLY (no GitHub)

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/engine/game-engine/** (filtro
    zona/distrito en gamechannel)
  - HOLONES/01-mythos/zeus-sdk/packages/engine/rooms/** / protocol/**
    SOLO wire de suscripción (mínimo; preferí no pelear con f1 —
    si f1 aún no mergeó y chocás, esperá o coordiná en reporte)
  - HOLONES/01-mythos/games-library/** SOLO smoke/demo mapa zonas
    (24 barrios / seeds existentes; no regenerar startpack)
  - plan/REPORTES/WP-Z05-f2-suscripcion-zonas.md
  Fuera: Z05-f1 (salvo consumo del contrato delta ya en main), items 3–6,
    ACL/loader/sharding, Z11, flows Z08 como obra, BACKLOG, SEMILLA.

Eje CA aplicable: IV (2º cliente suscrito por zona) · II (engine
  game-agnostic) · ceguera ampliada.

Deps / preticket (claim → acta/SHA — no reabrir):
  - Tick A1b ✅ PASS — acta plan/REPORTES/ACTA-A1b-PASS-2026-07-21.md
    · zeus `af0bad9` · GL `439788f` · tip gobierno brief ~`59fd564`
  - Señal: firehose sin filtrado + Z03 mapa completo; vigía
    ACTA-CONSOLIDADA-GC23 / WISHLIST-f7 techo
  - Preferí base: Z05-f1 mergeado en main si tocás los mismos paths;
    si f1 aún 🔶, limitá alcance a capas que no pisen o documentá rebase

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado al brief: zeus≈af0bad9 · GL≈439788f · S_SDK tip post-GO.

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. BACKLOG §Ola GC-4 + ficha WP-Z05 (item 2 + CA)
  3. ACTA-A1b-PASS-2026-07-21.md
  4. BRIEF/reporte Z05-f1 cuando exista (contrato delta a consumir)
  5. DECISIONES.md DC-GC-ceguera-marca
  6. Plantilla reporte del skill

Notas del orquestador (GO GC-4 · V2 gobierno propio):
  - **Solo item 2** (suscripción zona/distrito). No ACL (item 3), no
    loader, no sharding, no SEMILLA.
  - Firehose de juego filtrable por zona — dolor citado, no wishlist.
  - Merge order lote: **después de f1** si hay colisión protocol/engine.
  - Paralelo con Z11 OK (paths distintos).
  - Ceguera ampliada: árbol + `git log -p` reachable; `grep -c`/`grep -q`;
    cero método/marco/`WP-Z\d+` en packages/+e2e/. Marca admisible.
  - No edites BACKLOG. No push tip gobierno. Rama exacta arriba.

Empieza: rama/worktree zeus-sdk, PRACTICAS + ficha Z05 item 2, implementá
solo f2 (zonas). Si f1 no está en main y chocás, reportá y esperá merge.
```
