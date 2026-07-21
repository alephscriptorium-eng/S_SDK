# BRIEF · WP-E02 · Privacidad federación · 🔶 GO-E1

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)
  — NO DESPACHAR hasta vigía R7 PASS

WP: WP-E02 · Privacidad de federación (ssbId + firma peercard)
Rama: wp/ee-e02-privacidad-federacion
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-ee-e02-privacidad-federacion
Reporte: plan/REPORTES/WP-E02-privacidad-federacion.md
Issue: umbrella S_SDK #23 · obra pack = Z_SDK #4 (citar; NO cerrar #4/#5/#6)
Proyección = LOCAL-ONLY para filas nuevas del lote (regla 17)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-embajador-entrada/

Dolor real: peers federados (Z04) esperan entrada — handshake sin identidad
criptográfica verificable; tarjeta viajera sin firma → visor confía a ciegas.

CA experiencia (norte del corte): un amigo entra con peercard firmada y
arranca con startpack-ciudad-v0.1.0 como base default.

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/engine/protocol/src/peer-card.mjs
    (hooks firma / ssbId en card — no rediseñar TTL de f2)
  - HOLONES/01-mythos/zeus-sdk/packages/engine/webrtc-signaling/src/
      peer-card-gate.mjs · ssb-private-signaling.mjs · signaling-service.mjs
      · socket-room-signaling.mjs (mínimo handshake ssbId + verify)
  - tests/e2e peer-card / ssb asociados · docs/guide/external-handshake.md
  - plan/REPORTES/WP-E02-privacidad-federacion.md
  Fuera: packages/engine/embajador-kit/** · authority-kit/issue-peer-card.mjs
    (TTL/campos f2) · E01-f3/f4 · E_SDK · DE-I8 · reopen city · cerrar Z_SDK
    #4/#5/#6 · GL engine · BACKLOG · .sync-map.json

Eje CA aplicable: I · IV · ceguera (regla 14 árbol + git log -p)

Deps (✅ arrancable post-R7):
  - Z04 ✅ · D-40 («visor pide card») · pavimentación GO-4
  - Paralelo OK con E01-f1 si no pisás embajador-kit
  - E01-f2 / A5 esperan este merge (serie)

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado al brief GO-E1: zeus≈1086392 · GL≈84f9d79 · S_SDK tip post-GO-E1.

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. plan/SPRINTS/sprint-embajador-entrada/BACKLOG.md + ficha WP-E02
  3. plan/SPRINTS/sprint-embajador-entrada/DECISIONES.md (DC-EE-*)
  4. plan/SPRINTS/sprint-game-city/WP-E02-privacidad-federacion.md (fuente)
  5. Z_SDK #4 (cuerpo) · ACTA-OPS-GO4 · D-40
  6. Plantilla: .claude/skills/swarm-orquestacion/reference/plantilla-reporte.md

Notas del orquestador (GO-E1 · V2 gobierno):
  - Identidad = dep dura de peercard; este WP va primero.
  - Citar Z_SDK #4 en reporte; no cerrar #4 ni #5/#6.
  - No edites BACKLOG. No push tip gobierno. No gh issue create.
  - Ceguera: grep -c/-q; marca aleph/scriptorium OK (DC-GC-ceguera-marca).
  - City cerrado: no tocar BACKLOG/fichas city.

Empieza (solo tras R7): worktree zeus, PRACTICAS + ficha E02 + Z_SDK #4,
implementá solo handshake ssbId + firma.
```
