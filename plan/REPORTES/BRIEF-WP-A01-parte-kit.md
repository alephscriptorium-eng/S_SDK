# BRIEF · WP-A01 · Parte de plaza (`parte-kit`) · SEMILLA-ARG §A1

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-A01 · Parte de plaza (parte-kit) · SEMILLA-ARG §A1
Rama: wp/gc-a01-parte-kit
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-a01-parte-kit
Reporte: plan/REPORTES/WP-A01-parte-kit.md
Issue: LOCAL-ONLY (no proyectar salvo GO proyección aparte)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/
Proyección issues = LOCAL-ONLY por defecto

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/engine/parte-kit/** (paquete NUEVO)
  - HOLONES/01-mythos/zeus-sdk/** SOLO wiring mínimo workspace/package.json
    si el monorepo lo exige para el pack nuevo
  - HOLONES/01-mythos/games-library/packages/mockdatas-ciudad/** y/o
    startpack-ciudad/** SOLO si el cableado mock→parte lo pide (mínimo;
    no reopen Z01/Z02)
  - plan/REPORTES/WP-A01-parte-kit.md
  Fuera: domain.mjs / reducer ciudad, WP-A02 presencia, §A3 actas,
    SEMILLA §2–§4/§6, Z05 items 3–6, epic embajador, BACKLOG,
    .sync-map.json, canal de transporte nuevo, LLM.

Eje CA aplicable: I · II (contrato ParteDeCiudad v1) · ceguera ampliada
  (validarParte = patrón proyector por env).

Deps (✅ — arrancable hoy):
  - Z01 ✅ mockdatas · Z02 ✅ startpack · Z07 ✅ dramaturgo (redactor =
    plantillas; no LLM)
  - Z05-f1 ✅ deltas (consumir; no reopen)
  - Paralelo OK con WP-A02 (paths distintos: zeus parte-kit vs GL presencia)

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado al brief: zeus≈8afc0a0 · GL≈21a6592 · S_SDK tip post-GO ARG-1.

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. BACKLOG §Ola ARG-1 + reglas §1–7 + ficha WP-A01
  3. SEMILLA-ARG.md §A1 (literal — contratos/firma/CA/no-hacer)
  4. DECISIONES.md DC-GC-ceguera-marca · DC-GC-arg-1
  5. Un kit hermano de lectura en packages/engine/*-kit (patrón layout)
  6. Plantilla reporte del skill

Notas del orquestador (GO ARG-1 · solo §A1 · V2 gobierno propio):
  - **Contrato congelado** en SEMILLA-ARG §A1 — no inventes campos.
  - Firma: redactarParte(estadoAnterior, deltas[]) → { parte, estado } PURA.
  - renderProsa = plantillas fijas; validarParte con CEGUERA_PATTERN.
  - No LLM. No domain.mjs. No canal nuevo. No estado persistente del parte.
  - No abras §A3 / §A4–§A6 / SEMILLA §2–§4/§6 / embajador.
  - Ceguera: árbol + git log -p; grep -c/-q. Marca OK.
  - No edites BACKLOG. No push tip gobierno. Rama exacta arriba.
  - Este brief NO es GO inmediato de despacho autónomo: el orquestador
    despacha workers en paso aparte.

Empieza: rama/worktree zeus-sdk, PRACTICAS + ficha A01 + SEMILLA-ARG §A1,
implementá solo parte-kit.
```
