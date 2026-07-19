# Brief — WP-I21 · Skill `swarm-orquestacion`

_Orquestador holón 07 · 2026-07-19 · ola I2 (tras merge I20 @ `4a0f1eb`)_
_Paralelo: I21 ∥ I22 ∥ I23 — no tocar skills de los otros WPs._

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I21 · Skill swarm-orquestacion
Checkout hermano (trabajo del skill): C:\Users\aleph\S_SDK-skills-library
  Rama skill: wp/i21-skill-swarm-orquestacion
  Path: skills/swarm-orquestacion/
Rama reporte (SCRIPT_SDK): wp/i21-skill-swarm-orquestacion
Worktree reporte (paralelo): ../SCRIPT_SDK-wp-i21
Reporte: plan/REPORTES/WP-I21-skill-swarm-orquestacion.md
  (vive en SCRIPT_SDK; el skill vive en el repo hermano)

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I3 (skills-library), DE-I7 (push skills-library OK;
  NO push raíz SCRIPT_SDK), DE-I10 (abstraer método; cero datos de mundo)
- plan/PRACTICAS.md deltas 1, 4 (5 ejes = CA por tipo), 5 (ceguera
  marco-agnóstica), 6 (quién publica)
- plan/BACKLOG.md WP-I21 (CA literal) + orden ola I2
- plan/REPORTES/WP-I20-skills-library-scaffold.md (revisión orquestador:
  layout `_plantilla`, npm pack, ceguera plantilla)
- Fuente protocolo (SOLO lectura; abstraer, no copiar árbol):
  - TEST-SWARM/plan/roles/ — ORQUESTADOR.md, WORKER.md, REVISION.md,
    CORRECCION.md, BRIEF.md, README.md
  - TEST-SWARM/plan/REPORTES/PLANTILLA.md (plantilla de reporte)
  - VIGILANCIA/RE-PLAN-protocolo-swarm.md — **5 ejes** como CA
    obligatorios del skill (I extracción+cableado · II demolición con
    destino canónico · III gate dedup · IV segundo consumidor · V
    mediación transparente)
- Ceguera: plan/PRACTICAS.md delta 5 — grep
  `zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura` = 0 en cara pública
  del skill

Notas del orquestador:
- Entregable en S_SDK-skills-library:
  1) Crear rama `wp/i21-skill-swarm-orquestacion` desde `main` @ scaffold
     I20 (`88217dd` o tip de main skills-library).
  2) `skills/swarm-orquestacion/` siguiendo `_plantilla`: SKILL.md
     (frontmatter name=`swarm-orquestacion` + description) + reference/
     examples/ scripts/ según haga falta + README corto de activación.
  3) Contenido = protocolo canónico **abstraído y mejorado**: roles +
     ciclo prep→worker→revisión→merge + BRIEF + plantilla de reporte;
     los **5 ejes del RE-PLAN cosidos como CA obligatorios por tipo de WP**
     (PRACTICAS delta 4). Parametrizar «el mundo» (rutas, worktrees,
     BACKLOG del consumidor) — jamás nombrar mundos reales ni el marco.
  4) Cero datos de mundo / cero histórico de vigilancia. No tocar
     `instancias/` (eso es I24).
  5) Push del skill a origin en skills-library **sí** (DE-I7), solo la
     rama del WP.
- Entregable en SCRIPT_SDK: solo el reporte en la rama wp/i21-… (worktree
  si paralelo). Diff reporte = solo plan/REPORTES/.
- CA (evidencia literal en reporte):
  1) Un agente fresco (o simulación documentada) monta el `plan/` de un
     mundo nuevo **solo** con el skill (roles + BRIEF + plantilla + ejes).
  2) Prueba de ceguera en `skills/swarm-orquestacion/` = 0 (delta 5).
  3) Formato skill OK (frontmatter; árbol); opcional: `npm pack` sigue
     EXIT=0 con el skill nuevo incluido.
- NO implementar I22/I23. NO I24 datos. NO editar BACKLOG. NO push del
  raíz SCRIPT_SDK. NO mutar HOLONES/, OASIS, zeus, TEST-SWARM fuentes
  (solo lectura).
- Conflictos paralelo: I22 escribe `skills/site-web/`; I23 escribe
  `skills/vigilancia/`. No tocar `_plantilla` salvo fix mínimo compartido
  documentado. Merge skills-library: independientes (dirs distintos).
- Commits:
  - skills-library: feat(skills): swarm-orquestacion …
  - SCRIPT_SDK: docs(plan): reporte WP-I21 …

Empieza: sitúate en rama/worktree (skill + reporte), lee PRACTICAS entero,
implementa solo el skill swarm-orquestacion, evidencia CA, reporta.
```
