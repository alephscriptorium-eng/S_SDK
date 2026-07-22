# BRIEF · WP-WW-G · games «ciudad, juego insignia» ⊃ W2 · 🔶 (sin despacho)

> Brief definitivo WW-1. **NO despachar worker** hasta gate **R15-city** PASS.
> **Absorbe W2** ([ABSORCION-W2](../REPORTES/ABSORCION-W2.md)) — no WP-W2 suelto.
> Método copy: skill `site-web` — destilar CANTERA + lo **publicado**; no inventar.

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)
  — NO DESPACHAR hasta R15-city PASS
  — Paralelo OK con WW-Z ∥ WW-S (repos distintos)
  — ⊃ W2: una sola pasada web games (ficha /games/ciudad + nav)

WP: WP-WW-G · games «ciudad, juego insignia» ⊃ W2
Rama: wp/ww-g-ciudad-insignia
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-ww-g-ciudad-insignia
Reporte: plan/SPRINTS/sprint-webs-post-city/REPORTES/WP-WW-G-games-ciudad-insignia.md
Issue: LOCAL-ONLY (no gh issue create; umbrella al cierre · regla 17)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-webs-post-city/
Proyección issues = LOCAL-ONLY

ALCANCE_DIFF =
  - HOLONES/01-mythos/games-library/docs/**  (index · games/ciudad · futuros ·
    startpacks · releases · nav/.vitepress)
  - plan/SPRINTS/sprint-webs-post-city/REPORTES/WP-WW-G-*.md
  Fuera: packages/** runtime (salvo lectura) · zeus docs · S docs ·
    sprint-skills-bosque/** · E_SDK · BACKLOG · WP-W2 suelto

Eje CA aplicable: III · IV · ceguera (regla 1 / PRACTICAS δ12)

Deps: R15-city PASS · W1 ✅ (/startpacks fila ciudad) · startpack-ciudad-v0.1.0
      · C05 ✅ (tests regla 6 citables) · VIDA-1 M01/M02 ✅ (misiones/cronista)

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado al brief: zeus≈2aec4cb · GL≈20c095c · S tip post-montaje.

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. PLAN_DIR BACKLOG + ficha WP-WW-G + ABSORCION-W2 + DECISIONES
  3. .claude/skills/site-web/SKILL.md — destilar CANTERA; no inventar
  4. CANTERA / SEMILLA (lectura):
       plan/SPRINTS/sprint-game-city/SEMILLA-GAMIFICACION.md
       plan/SPRINTS/sprint-game-city/SEMILLA-ARG.md (si aplica voz)
       plan/SPRINTS/sprint-game-city/cantera/ (estados · barrios · censo)
  5. docs GL vivos: index.md · games/pozo.md · games/futuros.md ·
       startpacks.md · releases.md — y WP-W1 reporte
  6. Evidencia regla 6 / C05: plan/REPORTES/WP-C05-* · ACTA-C05 (citar tests;
       no reabrir C05)
  7. Plantilla reporte del skill swarm-orquestacion

Argumento BASE-1 (PO · citar; destilar CANTERA/publicado):
  · Hero ciudad en home + ficha /games/ciudad:
      pozo→ciudad estados vivos · tres jugadores · loop/decay/objetivo ·
      misiones · partes/actas · campanas · cronista.
  · «jugar con agentes»: MCP+peercard · regla 6 («ningún jugador privilegiado»)
      como copy público — verdad técnica citable (tests CA regla 6 de C05).
  · «Cómo instalar tu ciudad»: startpack-ciudad-v0.1.0 (release real) +
      enlaces /startpacks y /releases.
  · Revisar /games/futuros (ciudad ya no es futuro).
  · CA: docs:build verde · C8 post-deploy /games/ciudad 200 + enlaces
      navegados · ceguera regla 1 · sin promesas sin sello.

W2 (obligatorio dentro de este WP):
  - Crear docs/games/ciudad.md (+ entrada nav/sidebar).
  - Cierra el hallazgo W1 («aún no hay página dedicada»).
  - NO abras rama/brief WP-W2.

Notas del orquestador:
  - Destilá desde CANTERA/SEMILLA/actas — no inventes loops ni misiones.
  - No edites BACKLOG. No gh issue create. No force-push.
  - ∩ con WW-Z/WW-S = ∅ (solo GL docs + reporte).

Empieza SOLO tras R15-city PASS: worktree GL, PRACTICAS + ABSORCION-W2 +
site-web, implementá ficha ciudad + hero + instalar + futuros.
```
