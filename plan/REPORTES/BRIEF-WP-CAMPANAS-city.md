# BRIEF · WP-CAMPANAS · CAMPANAS-city (S-03 re-scope)

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-CAMPANAS · CAMPANAS-city — parte de plaza SUENA en operator-ui
Rama: wp/gc-campanas-city
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-campanas-city
Reporte: plan/REPORTES/WP-CAMPANAS-city.md
Issue: S_SDK #25 (actualizar body al re-scope; cerrar al ✅)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/engine/parte-kit/** (clase titular /
    campanasDesdeParte — sin romper contrato ParteDeCiudad v1)
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/operator-bridge/**
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/operator-ui/**
  - plan/REPORTES/WP-CAMPANAS-city.md
  Fuera: DE-I8 / E_SDK / HOLONES/03-emmanuel · embajador E01–E03 ·
    §A4–§A6 · SEMILLA §2–§4/§6 · mundo nuevo · canal transporte nuevo.

Eje CA aplicable: I (operator-ui consume parte-kit clases) · IV (bridge
  como 2º cliente del contrato ledger `parte`) · ceguera ampliada.

Deps (✅):
  - A01 ✅ parte-kit · Z17 ✅ operator-ui ciudad · HOTFIX-ARG-1 ✅ tip fe75269

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado al brief: zeus≈fe75269 · GL tip post-ARG-1 · S_SDK tip post-GO-6.

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. BACKLOG §CAMPANAS + ficha WP-CAMPANAS (re-scope)
  3. parte-kit plantillas.mjs + publicar.mjs (ledger entryKind parte)
  4. operator-bridge INTEGRATION.md + operator-hud.component.ts
  5. DECISIONES.md DC-GC-campanas-s03 (+ addenda) · DC-GC-ceguera-marca
  6. Plantilla reporte del skill

Notas del orquestador (re-scope · V2 gobierno):
  - Clases de titular: despertar (= gana pulso) · degradar (= pierde pulso /
    latente / muerto plantillas) · roto (= queda roto). Censo/work/igual → null.
  - Un evento sonoro por clase presente en el parte (máx 3 tonos).
  - Mute toggle en HUD (persiste en session/localStorage OK).
  - Sin DE-I8. Sin embajador. Sin inflar 03.
  - Ceguera: árbol + git log -p; grep -c/-q. Marca OK.
  - Commits convencionales en zeus; reporte en S_SDK.

Empieza: worktree zeus @ fe75269, PRACTICAS + ficha, implementá sonido.
```
