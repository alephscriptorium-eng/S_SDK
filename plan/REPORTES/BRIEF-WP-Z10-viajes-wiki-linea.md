# BRIEF · WP-Z10 · «Viaje»: gestor de caminos wiki → lib sobre linea-kit

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z10 · «Viaje»: gestor de caminos wiki → lib sobre linea-kit
Rama: wp/gc-z10-viajes-wiki-linea
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-z10-viajes-wiki-linea
  (A1✅ — checkout zeus-sdk sano @ 7567bf3; linea-kit presente)
  NO uses worktrees i70–i74 ni C:\Users\aleph\SCRIPT_SDK\.claude\worktrees\ ajenos.
  NO reutilices el worktree stale z01 (ya removido).
Reporte: plan/REPORTES/WP-Z10-viajes-wiki-linea.md

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS\sprint-game-city/
Proyección issues = LOCAL-ONLY (no GitHub)

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/engine/linea-kit/**
    (familia viaje / subpath o extensión del kit — ver ficha)
  - HOLONES/01-mythos/zeus-sdk/packages/** SOLO si hace falta un paquete
    hermano `@zeus/viaje-kit` (documentá la elección en el reporte)
  - HOLONES/01-mythos/games-library/** SOLO si el adaptador gamemap o un
    smoke de walks necesita seeds/fixtures del pack (mínimo; no regenerar
    startpack/mockdatas)
  - plan/REPORTES/WP-Z10-viajes-wiki-linea.md
  Fuera: delta/miniclon (Z09), cantera/CENSO (Z14), BACKLOG, flows Z08,
  mcp-launcher (Z06), reparar .git / submódulos.

Eje CA aplicable: I (viaje e2e sobre línea sintética + wiki corto con
  fetchSnapshot/gate) · II (envolver linea-kit; no duplicar schemas/curación).

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. plan/SPRINTS/sprint-game-city/BACKLOG.md — reglas §1–7 esp. glosario
     «viaje» (regla 5) + ceguera método (regla 1 / DC-GC-ceguera-marca)
  3. plan/SPRINTS/sprint-game-city/WP-Z10-viajes-wiki-linea.md (ficha + CA)
  4. plan/SPRINTS/sprint-game-city/DECISIONES.md (DC-GC-ceguera-marca:
     marca aleph/scriptorium ADMISIBLE; ceguera = solo método/marco)
  5. Base: packages/engine/linea-kit (conectar-satelite, fetchSnapshot,
     segmentar, schemas/curación) — solo lectura hasta que toques el alcance
  6. Plantilla: .claude/skills/swarm-orquestacion/reference/plantilla-reporte.md

Notas del orquestador (post-A1 · paralelo Z09|Z14):
  - Tick A1 cerrado: zeus-sdk rematerializado; no intentes «arreglar» el
    submódulo. Si algo falta, reportá gap — no toques gitdir.
  - Portá el CONCEPTO de camino (wiki-racer / WiringAppHypergraphEditor),
    no el código ni Puppeteer. Fetch wiki = APIs del kit.
  - Adaptador gamemap puede quedar stub/parcial si Z03 no está; documentá
    el gap. Preferí línea sintética + wiki corto como CA duros.
  - Z09 puede estar en paralelo (miniclon/flows/delta): NO pisar esos paths.
  - Z14 puede tocar cantera + startpack/mockdatas: NO regenerar seeds ni
    CENSO; si necesitás fixtures, copiá mínimo bajo tu alcance o citá
    seeds existentes en solo lectura.
  - No edites BACKLOG. No push. No toques obra Z09/Z14.
  - Ceguera: entregables sin tokens de método/marco; aleph/scriptorium ok
    como datos de instancia.

Empieza: creá rama/worktree en zeus-sdk, lee PRACTICAS + ficha Z10 +
linea-kit, implementá solo Z10.
```
