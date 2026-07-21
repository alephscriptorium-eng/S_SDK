# BRIEF · WP-A03 · Acta de barrio + estado `roto` · SEMILLA-ARG §A3

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-A03 · Acta de barrio + estado roto · SEMILLA-ARG §A3
Rama: wp/gc-a03-acta-barrio
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-a03-acta-barrio
  (si el alcance principal cae en GL ciudad, usá en su lugar
   HOLONES/01-mythos/games-library/.worktrees/wp-gc-a03-acta-barrio —
   UN solo worktree = el repo donde vive la obra principal)
Reporte: plan/REPORTES/WP-A03-acta-barrio.md
Issue: LOCAL-ONLY (no proyectar salvo GO proyección aparte)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/
Proyección issues = LOCAL-ONLY por defecto

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/engine/parte-kit/** y/o
    packages/engine/acta-kit/** (NUEVO) — contrato ActaDeBarrio v1 +
    emisión/adopción vía plaza (consumir A01; no canal nuevo)
  - HOLONES/01-mythos/zeus-sdk/packages/engine/linea-kit/** SOLO wiring
    mínimo consumo viaje (Z10) para misión reparar — no reopen Z10
  - HOLONES/01-mythos/games-library/packages/ciudad/** — estado `roto` +
    wake sin acta + misión reparar (mínimo; no reopen A02/Z16 como obra)
  - HOLONES/01-mythos/{zeus-sdk,games-library}/** SOLO package.json /
    workspace si el monorepo lo exige
  - plan/REPORTES/WP-A03-acta-barrio.md
  Fuera: §A4–§A6, SEMILLA §2–§4/§6, Z05 items 3–6, epic embajador,
    BACKLOG, .sync-map.json, LLM, canal nuevo, reopen A01/A02/Z10.

Eje CA aplicable: I · II (contrato ActaDeBarrio v1) · ceguera ampliada.

Deps (✅ — gate «A1 viva» satisfecho · arrancable):
  - A01 ✅ parte-kit / plaza (zeus `c7ec7d0`) — el acta viaja por la plaza
  - Z10 ✅ viaje (reparación como viaje; consumir, no reopen)
  - Soft: A02 ✅ presencia (GL `2b14d36`) — no bloquea

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado al brief: zeus≈c7ec7d0 · GL≈2b14d36 · S_SDK tip≈7d592e4
    (post-aceptación A01/A02).

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. BACKLOG §Ola ARG-1 + reglas §1–7 + ficha WP-A03
  3. SEMILLA-ARG.md §A3 (literal — contrato/regla persistencia/misión)
  4. DECISIONES.md DC-GC-ceguera-marca · DC-GC-arg-1 (gate A1 viva)
  5. Ficha/reporte WP-A01 (plaza) + WP-Z10 (viaje) — consumir, no reopen
  6. Plantilla reporte del skill

Notas del orquestador (ARG-1 · §A3 · V2 gobierno propio · A01 viva):
  - **Contrato congelado** en SEMILLA-ARG §A3 — no inventes campos.
  - Persistencia: ventanas terminan; solo plaza/ledger sobrevive.
  - Sin acta persistida → wake `roto`. Misión reparar = viaje Z10.
  - No abras §A4–§A6 / SEMILLA §2–§4/§6 / embajador / Z05 3–6.
  - Ceguera: árbol + git log -p; grep -c/-q. Marca OK.
  - No edites BACKLOG. No push tip gobierno. Rama exacta arriba.
  - **Listo para despacho** — este brief NO es GO inmediato autónomo:
    el orquestador despacha el worker en paso aparte (no spawnear aquí).

Empieza: rama/worktree del repo de obra principal, PRACTICAS + ficha A03
+ SEMILLA-ARG §A3, implementá solo acta + roto + reparar-vía-viaje.
```
