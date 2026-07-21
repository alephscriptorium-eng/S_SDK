# BRIEF · WP-Z12-f2 · Cascada/zonas + wake Z03 + rollup

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z12-f2 · Cascada/zonas + wake Z03 + rollup (árbol de vida)
Rama: wp/gc-z12-f2-arbol-cascada
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-z12-f2-arbol-cascada
Reporte: plan/REPORTES/WP-Z12-f2-arbol-cascada.md
Issue: (sync-map / S_SDK#12 si aplica)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/engine/lifecycle-kit/** (guarda canRetry /
    cascada genérica; sin nombres de mundo)
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/ciudad-lifecycle/** (rollup barrio/ciudad,
    cascada por zonas, consumo intentionalStops del actuador, wake→snapshot)
  - HOLONES/01-mythos/games-library/** SOLO si hace falta cable wake/seeds mínimo
    (no regenerar startpack entero; no spawn)
  - plan/REPORTES/WP-Z12-f2-arbol-cascada.md
  Fuera: reimplementar spawn/kill (Z06 ✅), reopen Z12-f1/Z15, BACKLOG, flows Z08
    como obra (tablero = consumidor; gate eje IV si cabe sin feature NR).

Eje CA aplicable: I (cascada/zonas e2e) · III (spawn solo vía Z06) · IV (wake Z03 /
  mando) · ceguera kit.

Deps (ya ✅ — no bloquean apertura):
  - Z15 ✅ intentionalStops read API (zeus `a4aaf8c`) — consumir; no reimplementar
  - Z12-f1 ✅ lifecycle XState start/stop real
  - Z03 ✅ juego ciudad (wake authority si aplica)

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. BACKLOG §Ola GC-3 + ficha WP-Z12 (fase f2 + CA + riesgos)
  3. BRIEF/reporte Z12-f1 + Z15 (gap f2 literal; API isIntentionalStop)
  4. WP-Z06 ficha frontera actuador (NO duplicar ProcessManager)
  5. WP-Z03 ficha / wake authority (round-trip snapshot)
  6. DECISIONES.md DC-GC-ceguera-marca
  7. Plantilla reporte del skill

Notas del orquestador (GC-3 · post-Z15 · V2 gobierno propio):
  - **Consumí** `ProcessManager.isIntentionalStop` / hook
    `resolveIntentionalStop` / `CityLifecycleRuntime.isIntentionalStop` ya en main.
    Cascada/zonas + `canRetry` deben preferir señal del actuador (no solo flag
    interno del actor).
  - **NO** reimplementar spawn/kill ni XState en mcp-launcher (Z06).
  - **Wake Z03 authority** si aplica: round-trip wake → snapshot/ledger; no inventar
    segundo cerebro.
  - **A1b:** vivos/re-smoke deferibles **con intento documentado** (runtime deps
    mcp-core-sdk/express; no bloquea merge de código/contrato).
  - Ceguera método en kit. No edites BACKLOG. Push tip gobierno = gate custodio.
  - Rama exactamente: `wp/gc-z12-f2-arbol-cascada`.

Empieza: rama/worktree zeus-sdk, PRACTICAS + ficha Z12 f2 + Z15 API, implementá solo f2.
```
