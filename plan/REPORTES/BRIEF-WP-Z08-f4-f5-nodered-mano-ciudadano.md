# BRIEF · WP-Z08 f4–f5 · Node-RED Mano + Ciudadano

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z08 · fases f4–f5 (Mano + Ciudadano) — f1–f3 ya ✅
Rama: wp/gc-z08-f4-f5-nodered
Worktree: C:\Users\aleph\SCRIPT_SDK\.worktrees\wp-gc-z08-f4-f5-nodered
  (obra en plan/SPRINTS/sprint-game-city/flows/ + reporte; no pisar miniclon Z09)
Reporte: plan/REPORTES/WP-Z08-f4-f5-nodered-mano-ciudadano.md
Issue: alephscriptorium-eng/S_SDK#8

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/

ALCANCE_DIFF =
  - plan/SPRINTS/sprint-game-city/flows/**
  - plan/REPORTES/WP-Z08-f4-f5-nodered-mano-ciudadano.md
  - (si hace falta) operator-bridge / function-node helpers bajo el pack
    del sprint — documentá rutas
  Fuera: f6–f7 (GC-3), packages engine/authority Node-RED-aware (regla 3),
  mcp-launcher (Z06), juego ciudad (Z03) salvo consumir intents vía
  envelope, BACKLOG, miniclon/.

Eje CA aplicable: IV (intent válido desde inject; ciudadano como client
  de room; transparencia: authority sin Node-RED-aware en packages/).

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. BACKLOG §Replan GC-1.5 §E + ficha WP-Z08
  3. RECAP-NODERED.md (constelación)
  4. Flows existentes f1–f3 bajo plan/SPRINTS/sprint-game-city/flows/
  5. Plantilla reporte del skill

APERTURA OBLIGATORIA (§E b — antes de implementar f4):
  1. **Re-smoke f1–f3** contra zeus socket-server `:3017` (A1✅;
     checkout actual). Evidencia en reporte: dashboard rooms + fleet +
     volumen vivo (o gap literal si falla).
  2. **Reinicio cache-browser `:3015`** (H1) con `ZEUS_VOLUMES_ROOT` →
     checkout actual — no el worktree borrado. Si no podés reiniciar,
     pedí al custodio y dejá `<pendiente>` con causa.
  Sin re-smoke documentado, no marques f4 listo.

Notas del orquestador (GC-2 · §E REVISION-GC15):
  - **Push gate (§E a):** tip ahead ~33. No pusheés vos; verificá tip en
    origin / pedí push antes de afirmar CI remota.
  - **Env checks (§E c):** `git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD`
    (y games-library si tocás seeds). NUNCA `test -d .git`.
  - f4 = Mano: envelopes walk/wake (pozo/Z03); si Z03 aún no mergeó,
    usá contrato pozo / stubs documentados.
  - f5 = Ciudadano subflow (censo); caminos Z10 si disponibles, si no
    random-walk. NO f6 población plena.
  - Transparencia: `rg` de Node-RED-aware acotado a `packages/`.
  - Paralelo Z03∥Z06. No edites BACKLOG.

Empieza: re-smoke f1–f3 + H1, luego rama/worktree, implementá solo f4–f5.
```
