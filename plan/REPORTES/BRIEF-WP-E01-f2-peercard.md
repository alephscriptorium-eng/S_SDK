# BRIEF · WP-E01-f2 · Peercard · 🔶 GO-E1

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)
  — NO DESPACHAR hasta vigía R7 PASS
  — SERIE: arrancar SOLO tras E02 mergeado (o tip con firma usable)

WP: WP-E01-f2 · Peercard (tarjeta viajera + TTL)
Rama: wp/ee-e01-f2-peercard
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-ee-e01-f2-peercard
Reporte: plan/REPORTES/WP-E01-f2-peercard.md
Issue: LOCAL bajo umbrella S_SDK #22 (no gh issue create)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-embajador-entrada/
Proyección issues = LOCAL-ONLY

Dolor real: peers necesitan tarjeta viajera con ciclo de vida (campos +
TTL/caducidad); sin ella el amigo no tiene credencial portable al startpack.

CA experiencia: peercard firmada (E02) + kit (f1) → entrada con
startpack-ciudad-v0.1.0 default.

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/engine/authority-kit/src/issue-peer-card.mjs
  - HOLONES/01-mythos/zeus-sdk/packages/engine/protocol/src/peer-card.mjs
    (SOLO campos/TTL/ciclo no-crypto — coordinar con tip post-E02; no pisar firma)
  - wiring mínimo consumidor vía embajador-kit (imports; no reescribir kit entero)
  - tests authority-kit / peer-card asociados a TTL
  - plan/REPORTES/WP-E01-f2-peercard.md
  Fuera: webrtc-signaling handshake/ssb · peer-card-gate crypto · E01-f3/f4 ·
    E_SDK · DE-I8 · Z17 reopen · cerrar Z_SDK #5/#6 · BACKLOG · .sync-map.json

Eje CA aplicable: I · II · ceguera (regla 14)

Deps (duras):
  - E02 ✅ (firma) — NO arrancar en paralelo con E02
  - E01-f1 (kit) — preferible merged; stub documentado OK
  - Guardarraíl Z_SDK #6: lo automático nunca escala a poder (diseño f2/f3)

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado: zeus tip post-E02 · GL≈84f9d79 · S_SDK tip post-GO-E1.

Lecturas obligatorias:
  1. PRACTICAS.md
  2. BACKLOG + ficha WP-E01-f2 + DECISIONES DC-EE-exclusion-paths
  3. city WP-E01 item 2 · Z_SDK #4 (firma ya en E02) · #6 (guardarraíl)
  4. ACTA-OPS-GO4 D-40
  5. Plantilla reporte

Notas del orquestador (GO-E1):
  - Firma crypto → E02; acá TTL/campos/ciclo.
  - No edites BACKLOG. No gh issue create. No cerrar #5/#6.
  - Ceguera marca OK. City cerrado.

Empieza (solo tras R7 + E02): worktree zeus tip post-E02, PRACTICAS + ficha f2.
```
