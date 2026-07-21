# BRIEF · WP-E01-f1 · Kit embajador · 🔶 GO-E1

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)
  — NO DESPACHAR hasta vigía R7 PASS

WP: WP-E01-f1 · Kit embajador (contrato mínimo peer)
Rama: wp/ee-e01-f1-kit
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-ee-e01-f1-kit
Reporte: plan/REPORTES/WP-E01-f1-kit.md
Issue: LOCAL bajo umbrella S_SDK #22 (no gh issue create; regla 17)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-embajador-entrada/
Proyección issues = LOCAL-ONLY

Dolor real: peers esperando entrada no tienen API/contrato estable para
emitir ni consumir credencial de peer — cada intento reinventaría el borde.

CA experiencia: kit permite emitir+consumir peercard que enchufa al
startpack-ciudad-v0.1.0 como base default del entrante.

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/engine/embajador-kit/** (nuevo)
  - HOLONES/01-mythos/zeus-sdk/package-lock.json (workspace)
  - plan/REPORTES/WP-E01-f1-kit.md
  Fuera: protocol/peer-card crypto · webrtc-signaling handshake ·
    authority-kit/issue-peer-card · E01-f3/f4 · E_SDK · DE-I8 · engine
    ciudad/GL · reopen ✅ · BACKLOG · .sync-map.json

Eje CA aplicable: I · II (contrato kit) · ceguera (regla 14)

Deps:
  - pavimentación GO-4 · Z04 ✅
  - Paralelo OK con E02 (paths distintos: kit vs signaling/crypto)
  - Firma real la provee E02 — kit puede tipar/consumir stubs hasta merge

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado al brief GO-E1: zeus≈1086392 · GL≈84f9d79 · S_SDK tip post-GO-E1.

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. BACKLOG + ficha WP-E01-f1 + DECISIONES DC-EE-*
  3. city WP-E01-embajador.md (fuente paraguas · item 1)
  4. patrón parte-kit (WP-A01) como referencia de kit zeus
  5. Plantilla reporte del skill

Notas del orquestador (GO-E1):
  - No edites BACKLOG. No gh issue create. No cerrar Z_SDK #5/#6.
  - Ceguera marca OK. City cerrado.
  - Z_SDK #6 = guardarraíl: kit no escala automático a poder.

Empieza (solo tras R7): worktree zeus, PRACTICAS + ficha f1, scaffolding
embajador-kit.
```
