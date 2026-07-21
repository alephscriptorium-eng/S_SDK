# BRIEF · WP-A02 · Señal de presencia · SEMILLA-ARG §A2

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-A02 · Señal de presencia · SEMILLA-ARG §A2
Rama: wp/gc-a02-presencia
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-gc-a02-presencia
Reporte: plan/REPORTES/WP-A02-presencia.md
Issue: LOCAL-ONLY (no proyectar salvo GO proyección aparte)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/
Proyección issues = LOCAL-ONLY por defecto

ALCANCE_DIFF =
  - HOLONES/01-mythos/games-library/packages/ciudad/** (módulo presencia +
    consumo en reducer/loop; config TICKS_PRESENCIA)
  - HOLONES/01-mythos/games-library/** SOLO si kit hermano / fixture mock
    de presencia lo exige (mínimo; no reopen Z16 como obra nueva)
  - plan/REPORTES/WP-A02-presencia.md
  Fuera: parte-kit (WP-A01), §A3 actas, health/paradas/zona REALES,
    SEMILLA §2–§4/§6, Z05 items 3–6, epic embajador, BACKLOG,
    .sync-map.json, nuevas clases de jugador, engine zeus.

Eje CA aplicable: I (integración loop Z16) · II (contrato SeñalDePresencia)
  · ceguera ampliada.

Deps (✅ — arrancable hoy):
  - Z16 ✅ loop decay/energía/objetivo (no reopen; extender input presencia)
  - Soft: Z06/Z15/Z05-f2 = enchufe futuro documentado, NO implementar
  - Paralelo OK con WP-A01 (paths distintos)

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado al brief: zeus≈8afc0a0 · GL≈21a6592 · S_SDK tip post-GO ARG-1.

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. BACKLOG §Ola ARG-1 + reglas §1–7 + ficha WP-A02
  3. SEMILLA-ARG.md §A2 (literal — contratos/regla decay/CA/no-hacer)
  4. WP-Z16 + reporte WP-Z16 (loop vigente)
  5. DECISIONES.md DC-GC-ceguera-marca · DC-GC-arg-1
  6. Plantilla reporte del skill

Notas del orquestador (GO ARG-1 · solo §A2 · V2 gobierno propio):
  - **Contrato congelado** en SEMILLA-ARG §A2 — no inventes campos.
  - UN contrato + UN adapter mock; fuentes reales = solo interfaz.
  - TICKS_PRESENCIA en config; reloj simulado en tests.
  - flujo cuenta presencia, NO recarga energía (announce sí).
  - No abras §A3 / §A4–§A6 / SEMILLA §2–§4/§6 / embajador.
  - Ceguera: árbol + git log -p; grep -c/-q. Marca OK.
  - No edites BACKLOG. No push tip gobierno. Rama exacta arriba.
  - Este brief NO es GO inmediato de despacho autónomo: el orquestador
    despacha workers en paso aparte.

Empieza: rama/worktree games-library, PRACTICAS + ficha A02 + SEMILLA-ARG §A2
+ domain del loop Z16, implementá solo presencia mock.
```
