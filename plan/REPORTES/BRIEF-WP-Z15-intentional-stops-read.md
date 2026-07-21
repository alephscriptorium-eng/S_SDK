# BRIEF · WP-Z15 · Lectura `intentionalStops` (A2 post-GC-2)

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z15 · Lectura de intentionalStops en @zeus/mcp-launcher (+ hook Z12)
Rama: wp/gc-z15-intentional-stops-read
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-z15-intentional-stops-read
Reporte: plan/REPORTES/WP-Z15-intentional-stops-read.md
Issue: (sync-map / nuevo si custodio abre)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/mcp-launcher/**
  - HOLONES/01-mythos/zeus-sdk/packages/engine/lifecycle-kit/** SOLO
    consumo/hook mínimo de la señal (si hace falta)
  - HOLONES/01-mythos/zeus-sdk/packages/** ciudad-lifecycle SOLO cableado
    mínimo a la API de lectura (no cascada/zonas = Z12-f2)
  - plan/REPORTES/WP-Z15-intentional-stops-read.md
  Fuera: Z12-f2 cascada, Z04/Z07/Z08, BACKLOG, spawn arbitrario.

Eje CA aplicable: I (contrato read tras stop/launch) · III (actuador único) ·
  ceguera.

Lecturas obligatorias:
  1. plan/PRACTICAS.md
  2. BACKLOG §Cola post-GC-2 + §Ola GC-3 + ficha WP-Z15
  3. WP-Z06 ficha (frontera) + código ProcessManager.intentionalStops
  4. WP-Z12 ficha §guarda de intención / intentionalStops
  5. DECISIONES.md DC-GC-ceguera-marca
  6. Plantilla reporte del skill

Notas del orquestador (GC-3 · ADDENDAS-GC2 A2):
  - **Prio alta** — paralelo con Z04; desbloquea Z12-f2.
  - Follow-up de Z06 (write-only hoy); NO reabrir Z06/Z12-f1 ✅.
  - **A1 pendiente (npm ci zeus+GL):** env robusto con
    `git -C <path> rev-parse HEAD` (NUNCA test -d .git). Vivos pueden
    deferirse con intento documentado.
  - **Push S_SDK:** gate de ola (custodio); no pusheés vos tip gobierno.
  - Cero XState en launcher. API read + test contrato bastan para ✅
    si el consumo Z12 queda como hook + gap literal hacia f2.
  - Ceguera método. No edites BACKLOG.

Empieza: rama/worktree zeus-sdk, PRACTICAS + ficha Z15 + ProcessManager,
implementá solo Z15.
```
