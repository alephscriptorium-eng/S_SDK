# BRIEF · WP-A5 · Puerta externos (SEMILLA-ARG §A5) · 🔶 GO-E1

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)
  — NO DESPACHAR hasta vigía R7 PASS
  — SERIE ola 2: arrancar SOLO con E02 + E01-f1 en tip usable (firma+kit
    reales — NO stubs). f2 preferible merged; A5 no implementa f2.

WP: WP-A5 · Puerta de externos · SEMILLA-ARG §A5
Rama: wp/ee-a5-puerta
Árbol dominante (Z17-zeus):
  Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-ee-a5-puerta
Satélites (solo si hay diff en ese repo):
  Z04-GL: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-ee-a5-puerta
  webs/S_SDK: rama `wp/ee-a5-puerta` en MUNDO_RAIZ (docs/ + plan/REPORTES/)
Reporte: plan/REPORTES/WP-A5-puerta.md
Issue: LOCAL bajo umbrella S_SDK #22 (no gh issue create)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-embajador-entrada/
Proyección issues = LOCAL-ONLY

Repos canónicos (hasta 3 — inequívoco):
  1. Z17-zeus  = HOLONES/01-mythos/zeus-sdk          ← DOMINANTE
  2. Z04-GL    = HOLONES/01-mythos/games-library      ← satélite rabbits/startpack
  3. webs/S_SDK = MUNDO_RAIZ (docs/guide + reporte)   ← satélite tracker/guía casa

Dolor real: superficies ya existen (Z04 rabbits, webs, tracker, Z17) pero
no hay «puerta» que una peercard + startpack-ciudad-v0.1.0 como default.
Sin puerta, el amigo no sabe por dónde entrar.

CA experiencia (norte del corte):
  «un amigo entra con su peercard y arranca con startpack-ciudad-v0.1.0
   como base default».

ALCANCE_DIFF (paths exactos — tocar SOLO estos):

  ### Z17-zeus (dominante) — operator-ui entrada
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/operator-ui/serve.mjs
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/operator-ui/projects/dev-app/src/app/zeus-operator-bridge.service.ts
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/operator-ui/projects/dev-app/src/app/app.ts
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/operator-ui/projects/dev-app/src/app/operator-hud.component.ts
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/operator-ui/fixtures/**  (smoke puerta; sin paquete nuevo)
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/operator-ui/package.json  (scripts smoke si hace falta)
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/operator-ui/README.md
  - import/consumo de @zeus/embajador-kit (API pública f1) — NO reescribir embajador-kit/**

  ### Z04-GL (satélite) — rabbits federación + ref startpack
  - HOLONES/01-mythos/games-library/packages/ciudad/fixtures/federation/peer-external.mjs
  - HOLONES/01-mythos/games-library/packages/ciudad/fixtures/federation/demo-peer.mjs
  - HOLONES/01-mythos/games-library/packages/ciudad/fixtures/federation-smoke.mjs
  - HOLONES/01-mythos/games-library/packages/ciudad/test/federation.test.mjs
  - HOLONES/01-mythos/games-library/packages/ciudad/README.md
  - HOLONES/01-mythos/games-library/docs/startpacks.md
    (default visible: tag/ref startpack-ciudad-v0.1.0)

  ### webs / S_SDK (satélite) — tracker cita + guía casa
  - docs/guide/tuberia-protegida.md
    (flujo peercard→startpack-ciudad-v0.1.0 · citas S_SDK#22/#23 · Z_SDK#4)
  - plan/REPORTES/WP-A5-puerta.md

  **Ninguna superficie nueva** (cero paquetes/UI/productos greenfield).

  Fuera (NO tocar):
    — Frontera vs f2: packages/engine/authority-kit/** ·
      packages/engine/protocol/src/peer-card.mjs (TTL/campos) ·
      tests protocol/authority-kit de peercard
    — Frontera vs E02: packages/engine/webrtc-signaling/** ·
      docs/guide/external-handshake.md (citar; no editar — exclusivo E02)
    — Frontera vs f1: packages/engine/embajador-kit/** (salvo import)
    — packages/startpack-ciudad/** (ref/tag only; no reescribir pack)
    — packages/ciudad/src/** (dominio/authority; A5 = fixtures+docs)
    — E01-f3/f4 · E_SDK · DE-I8 · inventar canal · reopen city WPs ·
      crypto E02 · greenfield embajador-kit · .sync-map.json · BACKLOG

Eje CA aplicable: I · IV (2º cliente de la puerta) · ceguera (regla 14)

Deps (duras — ola 2; NO stubs de firma/kit):
  - E02 ✅ en tip usable (firma / ssbId)
  - E01-f1 ✅ en tip usable (embajador-kit API)
  - E01-f2 preferible merged (peercard TTL); A5 SOLO consume — no implementa f2
  - Fuente literal: SEMILLA-ARG §A5

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado al despacho A5: zeus tip post-E02 (+ f1) · GL tip con Z04 ✅ ·
    S_SDK tip post-GO-E1 / post-pin paths.

Lecturas obligatorias:
  1. PRACTICAS.md
  2. BACKLOG + ficha WP-A5 + DECISIONES DC-EE-* (exclusion-paths A5)
  3. SEMILLA-ARG §A5 literal
  4. ACTA-OPS-GO4 · BRIEF E02/f1/f2 (norte; frontera paths)
  5. WP-Z17-operator-ui-ciudad · WP-Z04-rabbits-rsh (superficies existentes)
  6. ACTA-GO5-webs-release (3 webs paths)
  7. Plantilla reporte

Notas del orquestador (GO-E1 · pin gobierno micro ola 1 margen):
  - No edites BACKLOG. No gh issue create. No E_SDK/DE-I8.
  - No despachar este WP ni f2 desde este brief (solo pin paths).
  - No tocar worktrees E02/f1 si existen.
  - Ceguera marca OK. City cerrado. CIUDAD-REAL/§6/trama-agua parked.
  - Cableá firma+kit REALES (post-E02+f1); cero stubs de identidad/kit.

Empieza (solo tras R7 + deps tip): worktree zeus dominante, PRACTICAS + §A5,
cableá puerta sin superficie nueva; satélites GL/S_SDK solo si hay diff.
```
