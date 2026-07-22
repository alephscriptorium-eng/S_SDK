# BRIEF BORRADOR · WP-C05 · ciudadano-agente · **sin 🔶** (PREP R10.6)

> Esqueleto parked. **No despachar.** Ratificar + emitir BRIEF formal tras
> cierre C04 y CR-1 (C01/C03). Sin emoji de despacho en BACKLOG hasta GO.

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  — BORRADOR · NO DESPACHAR · sin 🔶

WP: WP-C05 · ciudadano-agente (un MCP = un actor con peercard)
Rama (tentativa): wp/cr-c05-ciudadano-agente
Worktree (tentativo): GL + zeus player-mcp según ALCANCE_DIFF pineado
Reporte: plan/REPORTES/WP-C05-ciudadano-agente.md (aún no)
Issue: LOCAL-ONLY

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

Alcance (borrador):
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
  (después de C01/C03; no // con ola 1)

Hallazgos prep R10.6 (tip main, read-only):
  - v1 player-mcp-kit private:true? NO → no entra clase kit C04
  - v2 cableado ciudad→kit: EXISTE (packages/ciudad + dep ^0.1.2)
  - v3 peercard en room-bridge bootstrap: NO-EXISTE (obra C05)

Lecturas (cuando GO):
  1. plan/PRACTICAS.md
  2. BACKLOG + DC-CR-* + checklist cierre C04 (v1–v3)
  3. E02 / peer-card-seat · tick-cero puerta
  4. city regla 6 (≥2 tipos jugador)

Notas: no edites BACKLOG. No 🔶 desde este borrador. Ceguera marca OK.
```
