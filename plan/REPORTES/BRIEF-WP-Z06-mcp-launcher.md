# BRIEF · WP-Z06 · `@zeus/mcp-launcher`

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z06 · `@zeus/mcp-launcher` — habilitador r/s/h + meta-ops
Rama: wp/gc-z06-mcp-launcher
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-z06-mcp-launcher
  (A1✅ — checkout zeus-sdk sano; verificá con rev-parse, no test -d .git)
Reporte: plan/REPORTES/WP-Z06-mcp-launcher.md
Issue: alephscriptorium-eng/S_SDK#6

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/mcp-launcher/** (o ruta final
    documentada; paquete mesh dedicado)
  - HOLONES/01-mythos/zeus-sdk/packages/** SOLO enganches mínimos
    (createStandardMcpServer / editor-ui refresh) necesarios al CA
  - plan/REPORTES/WP-Z06-mcp-launcher.md
  Fuera: juego ciudad (Z03), lifecycle-kit (Z12), flows Z08, miniclon,
  BACKLOG, spawn arbitrario fuera de catálogo.

Eje CA aplicable: I (linea-system + ≥1 satélite por tool call; health fleet).

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. plan/SPRINTS/sprint-game-city/BACKLOG.md — §Replan GC-1.5 §E + reglas
  3. plan/SPRINTS/sprint-game-city/WP-Z06-mcp-launcher.md (ficha + CA)
  4. plan/SPRINTS/sprint-game-city/WP-Z12-encendido-arbol-vida.md §«Reparto
     con Z06» — frontera dura: Z06 = actuador; Z12 = comportamiento
  5. DECISIONES.md (DC-GC-ceguera-marca) + nota cantera zeus-mcp-servers
     (concepto, no código)
  6. Plantilla reporte del skill

Notas del orquestador (GC-2 · §E REVISION-GC15):
  - **Push gate (§E a):** no pusheés tip salvo custodio. Antes de afirmar
    CI/runner: tip en origin o pedir push. Gate temprano de ola.
  - **Env checks (§E c):** `git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD`
    (y worktree). NUNCA `test -d .git`. Confirmar linea-kit / configs
    satélite presentes antes de inventar paths.
  - **Frontera Z06/Z12 (§E c):** launch/stop/restart/health + catálogo =
    este WP. NO implementes XState/lifecycle ni supervisión de árbol
    (eso es Z12). Si el catálogo necesita campos de árbol, dejá extensión
    documentada para Z12 — no duplicar cerebro.
  - Paralelo Z03∥Z08. Z12-f1 despacha tras tu merge.
  - Portá concepto MCPLauncher (aleph), no el código. Seguridad: solo
    catálogo declarado.
  - Ceguera método. No edites BACKLOG.

Empieza: creá rama/worktree en zeus-sdk, lee PRACTICAS + ficha Z06 +
frontera Z12, implementá solo Z06.
```
