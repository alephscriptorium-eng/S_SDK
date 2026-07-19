# Brief — WP-I23 · Skill `vigilancia`

_Orquestador holón 07 · 2026-07-19 · ola I2 (tras merge I20 @ `4a0f1eb`)_
_Paralelo: I21 ∥ I22 ∥ I23 — no tocar skills de los otros WPs._
_I24 (histórico zeus → instancias/) depende de este skill; I23 NO mueve datos._

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I23 · Skill vigilancia
Checkout hermano (trabajo del skill): C:\Users\aleph\S_SDK-skills-library
  Rama skill: wp/i23-skill-vigilancia
  Path: skills/vigilancia/
Rama reporte (SCRIPT_SDK): wp/i23-skill-vigilancia
Worktree reporte (paralelo): ../SCRIPT_SDK-wp-i23
Reporte: plan/REPORTES/WP-I23-skill-vigilancia.md
  (vive en SCRIPT_SDK; el skill vive en el repo hermano)

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I3, DE-I7, DE-I10 (doctrina pública vs dato),
  DE-I11 (histórico backstage = I24, no este WP)
- plan/PRACTICAS.md deltas 1, 3 (C8/C8-ampliado/CA-por-clase/pulso CI),
  5 (ceguera), 6
- plan/BACKLOG.md WP-I23 (CA literal) + nota: cero histórico zeus (I24)
- plan/REPORTES/WP-I20-skills-library-scaffold.md (revisión: layout,
  ceguera plantilla)
- Doctrina (SOLO lectura; abstraer a skill marco-agnóstico):
  - VIGILANCIA/ESTACION.md — PROTOCOLO v1: rol read-only, mediación
    transparente, mtime≠commits, clases de huérfano (a/b/c/d), locks,
    C8/C8-ampliado, CA-por-clase, pulso CI (`gh run list`), ciclo
    sprint PRE/DURANTE/POST, addenda dos caras + prueba de ceguera
  - VIGILANCIA/watcher.sh — doctrina operativa a **parametrizar** por
    «el mundo» (repo vigilado, OUT, INTERVAL); hoy hardcodea rutas zeus
    — el skill debe entregar un watcher **sin** esas rutas fijas
- NO leer/copiar como contenido del skill: bitacora, revisiones/,
  anomalias.log, watch.log, ADDENDA/, HANDOFF_* (dato → I24)

Notas del orquestador:
- Entregable en S_SDK-skills-library:
  1) Rama `wp/i23-skill-vigilancia` desde main skills-library.
  2) `skills/vigilancia/` (formato `_plantilla`): SKILL.md
     name=`vigilancia` + reference/ (ESTACION abstrída) + examples/
     de-identificados (fixture mínima sintética OK) + scripts/watcher
     parametrizado (env/args: WORLD_ROOT, OUT_DIR, INTERVAL — sin
     paths absolutos a zeus/SCRIPT_SDK).
  3) Incluir formato addenda dos-caras (§interna / §WP copiable) con
     prueba de ceguera como paso del método.
  4) **Cero histórico de zeus dentro del skill** (bitácoras, logs,
     addendas reales). Eso es I24 → `instancias/ejemplo-M/`.
  5) Push skill a origin skills-library OK (DE-I7), solo rama WP.
- Entregable SCRIPT_SDK: solo reporte en wp/i23-… (worktree paralelo).
- CA (evidencia literal en reporte):
  1) Skill agnóstico del mundo vigilado (param «el mundo»).
  2) Watcher corre contra un repo **arbitrario** (p. ej. dir temp o
     skills-library mismo) — evidencia de muestreo sin tocar index.
  3) `rg` nombres de mundo real / marco en `skills/vigilancia/` = 0
     (delta 5; sin rutas hardcodeadas a OASIS/zeus).
- NO I21/I22. NO I24 (no mover VIGILANCIA/ ni gitignore). NO editar
  BACKLOG. NO push raíz SCRIPT_SDK. Fuentes ESTACION/watcher = lectura;
  no mutar VIGILANCIA/ en SCRIPT_SDK.
- Conflictos paralelo: solo `skills/vigilancia/`. Merge independiente.
  Tras ✅ I23, el padre emite brief I24.
- Commits:
  - skills-library: feat(skills): vigilancia …
  - SCRIPT_SDK: docs(plan): reporte WP-I23 …

Empieza: sitúate en rama/worktree (skill + reporte), lee PRACTICAS entero,
implementa solo el skill vigilancia, evidencia CA, reporta.
```
