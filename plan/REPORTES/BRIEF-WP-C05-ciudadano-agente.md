# BRIEF · WP-C05 · ciudadano-agente · 🔶 (tick PO · sin despacho)

> Brief definitivo (promovido desde BRIEF-BORRADOR PREP R10.6).
> **🔶 en BACKLOG.** **NO despachar worker** hasta cierre CR-1 (C03 ✅) +
> gate **R12**. Secuencia cola v3: tras C04 · tras CR-1.

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)
  — NO DESPACHAR hasta R12 PASS (post C03 ✅)

WP: WP-C05 · ciudadano-agente (un MCP = un actor con peercard)
Rama: wp/cr-c05-ciudadano-agente
Worktree: GL + zeus player-mcp según ALCANCE_DIFF pineado (R12)
Reporte: plan/REPORTES/WP-C05-ciudadano-agente.md
Issue: LOCAL-ONLY (no gh issue create)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-ciudad-real/
Proyección issues = LOCAL-ONLY

Dolor real: el agente MCP entra «por detrás» (type/features en room) sin
peercard firmada; la campana del operator-ui no trata al agente como peer
de la misma puerta que el humano (E02 / peer-card-seat).

CA experiencia (norte):
  «un agente con peercard se conecta por MCP, señala presencia, anuncia —
   y la campana suena en el operator-ui del humano»

CA formales: ejes I·IV + regla 6 (≥2 tipos jugador: humano puerta +
agente MCP) + ceguera δ12 (DE-I20).

ALCANCE_DIFF (tentativo — R12 pinea):
  - Cablear ciudad al patrón un-MCP-por-actor ya existente:
      intents pack (presencia A02 · announce · walk/misión M01 · leer parte)
      → kit; resources ciudad://player/state · scene · casos
  - Peercard firmada (peer-card-seat) en bootstrap del actor MCP —
    mismo carril identidad puerta (E02); agente no entra por detrás
  - GL packages/ciudad/** (player-mcp / config instancia) +
    zeus packages/engine/player-mcp-kit/** (room-bridge bootstrap)
  Fuera: C01 health · C02 ACL · C03 §A4 · C04 publish kits ·
    Z05 4–6 · §6 · trama-agua · E_SDK · reopen ✅

Deps: C04 ✅ (kits FOSS / publish) · secuenciar **tras CR-1**
  (después de C01/C03 ✅; no // con ola 1). Despacho solo tras R12.

Hallazgos prep R10.6 (tip main, read-only) — al cerrar C05 el reporte
DEBE responder explícitamente:
  - v2 wiring ciudad→MCP / player-mcp-kit (instancia/config)
  - v3 peercard en room-bridge bootstrap
  (contexto prep: v2 EXISTE · v3 NO-EXISTE → gap = obra C05)

Lecturas (cuando R12):
  1. plan/PRACTICAS.md
  2. BACKLOG + DC-CR-cola-v3 + checklist cierre C04 (v1–v3)
  3. E02 / peer-card-seat · tick-cero puerta
  4. city regla 6 (≥2 tipos jugador)

Notas: no edites BACKLOG. Ceguera δ12. Invariante peercard = mismo carril
puerta. Empezá solo tras R12: worktree pineado + PRACTICAS + este brief.
```
