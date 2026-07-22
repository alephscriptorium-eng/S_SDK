# BRIEF · WP-T1 · equipo de testing · 🔶 (sin despacho)

> Brief definitivo PCO-1. **NO despachar worker** hasta gate **R15-T1-S04** PASS.
> Entregable = ACTA DE FRICCIÓN. **Sin commits de obra** en zeus/GL.

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)
  — NO DESPACHAR hasta R15-T1-S04 PASS
  — Paralelo OK con WW-Z∥WW-G∥WW-S SOLO si ∩ paths = ∅ (vos = runtime/acta;
    ellos = docs/**)

WP: WP-T1 · equipo de testing · acta de fricción
Rama: (preferí sin rama de obra) — si hace falta scratch: wp/pco-t1-testing
Worktree: scratch efímero bajo .worktrees/ o TMP — NO mergear obra
Reporte/acta: plan/SPRINTS/sprint-post-city-ops/REPORTES/ACTA-T1-FRICCION-YYYY-MM-DD.md
Issue: LOCAL-ONLY (no gh issue create)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-post-city-ops/
Proyección issues = LOCAL-ONLY

ALCANCE_DIFF =
  - plan/SPRINTS/sprint-post-city-ops/REPORTES/ACTA-T1-FRICCION-*.md  (único commit)
  - scratch efímero NO versionado (authority · operator-ui · actor MCP)
  Fuera: HOLONES/** packages commits · docs/** webs · sprint-webs-post-city/obra
    · sprint-skills-bosque/** · hermano skills-library · E_SDK
    · cerrar Z_SDK #4/#5/#6 · BACKLOG · file: installs

Eje CA aplicable: I · IV · ceguera (regla 1 / PRACTICAS δ12)

Deps: R15-T1-S04 PASS · C05 ✅ (peercard MCP) · kits FOSS en registry C8
      · pins tip: zeus≈2aec4cb · GL≈20c095c (verificar rev-parse)

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  npm view @zeus/protocol version
  npm view @zeus/player-mcp-kit version
  npm view @zeus/rooms version
  # + embajador/parte/acta/lifecycle/ciudad-lifecycle @ registry C8
  # registry: npm.scriptorium.escrivivir.co — C8 puro, NO file:

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. PLAN_DIR BACKLOG + ficha WP-T1 + DECISIONES (DC-PCO-*)
  3. plan/REPORTES/ACTA-C05-CIUDAD-REAL-cierre-2026-07-22.md
  4. plan/REPORTES/BRIEF-WP-C05-ciudadano-agente.md (CA «campana suena»)
  5. sprint-ciudad-real fixtures/tick-cero/ (patrón registry; COPIAR scratch)
  6. Plantilla: .claude/skills/swarm-orquestacion/reference/plantilla-reporte.md

Argumento BASE (PO · flujo vivo · documentar fricción):
  · Levantar authority + operator-ui + actor MCP con kits DEL REGISTRY.
  · Entrada humana puerta + agente MCP + presencia + announce.
  · CA diferido C05: «campana suena» en operator-ui del humano.
  · Misiones / partes de paso (ledger) — anotar gaps.
  · ACTA DE FRICCIÓN: qué costó · qué confunde · qué falta → insumo S04.
  · Citar Z_SDK #4/#5/#6 OPEN; E_SDK veto.

Notas del orquestador:
  - NO commits de obra zeus/GL. Solo el acta en gobierno.
  - NO inventes mecánicas. Todo claim = evidencia de sesión o gap explícito.
  - No edites BACKLOG. No gh issue create. No force-push.
  - ∩ con WW-* = ∅. ∩ con bosque = ∅.
  - Al cerrar: avisar city-orq; S04 sigue parked hasta tu acta ✅.

Empieza SOLO tras R15-T1-S04 PASS: scratch + registry C8 + PRACTICAS + ficha;
corrê el flujo; escribí el acta.
```
