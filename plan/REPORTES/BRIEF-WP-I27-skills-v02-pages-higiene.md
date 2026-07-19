# Brief — WP-I27 · Skills v0.2.0 + Pages library + higiene

_Orquestador holón 07 · 2026-07-19 · ola I2.5 (paralelo a I41)_
_SCRIPT_SDK `main` @ `0849e8b` (+ commit gobierno I40/I41/I27). Skills-library
`main` @ `019a90b` (push OK DE-I7)._
_NO implementar I41/I50/I52. Solo skill bump + Pages library + scrubs._

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I27 · Skill package bump v0.2.0 + Pages + higiene
Checkout hermano (paquete): C:\Users\aleph\S_SDK-skills-library
  Rama trabajo skill: wp/i27-skills-v02-pages-higiene
  Base: main @ 019a90b
  Paquete: @alephscript/skills-scriptorium (hoy 0.1.0 → 0.2.0)
Rama reporte / obra raíz (SCRIPT_SDK): wp/i27-skills-v02-pages-higiene
Worktree raíz: ../SCRIPT_SDK-wp-i27
  (V1 scrub custom.css + higiene ramas viven aquí)
Reporte: plan/REPORTES/WP-I27-skills-v02-pages-higiene.md
  (vive en SCRIPT_SDK)

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/RETRO-2026-07-19-metodo.md (12 reglas → skill v0.2)
- plan/REPORTES/INTERVENCION-2026-07-19-estabilizacion.md (F7, Pages)
- plan/REPORTES/VIGIA-ESTADO.md (hallazgos V1/V2/V3)
- plan/DECISIONES.md DE-I7 (push library), DE-I9 (Pages skills),
  DE-I12 (publish Verdaccio / NPM_USERNAME+NPM_PASSWORD)
- plan/BACKLOG.md WP-I27 (CA literal)

Notas del orquestador — alcance obligatorio:
  A) skills-library — bump v0.2.0:
     - Coser las 12 reglas RETRO al skill swarm-orquestacion.
     - V2: práctica explícita «1 commit gobierno ≠ mezcla
       aceptación+brief» (deuda ej. 666cefd).
     - Checklist de cierre de ola en el skill; este WP lo estrena.
     - Scrub F7: publish.yml «zeus» → «Verdaccio canónico» (delta 5).
     - Publish v0.2.0 al registry (DE-I12). Secrets:
       NPM_USERNAME / NPM_PASSWORD del entorno custodio — NO inventar.
       Si falta auth escritura → «esperando: tick ops (.npmrc)» + resto
       del WP hecho.
  B) SCRIPT_SDK — V1 (real):
     - docs/.vitepress/theme/custom.css ~L2: quitar ruta absoluta
       C:\Users\aleph\OASIS\... del comentario de procedencia.
       Sustituir por procedencia relativa / DE-8 sin path absoluto host
       (ej. cita a origen zeus-sdk tema / WP-U103, sin disco local).
  C) Higiene V3 (S_SDK):
     - Borrar ramas locales/remotas wp/i30*, wp/i32* (y otras wp/*
       mergeadas obsoletas). Documenta qué borraste.
  D) Pages library:
     - skills.s-sdk.escrivivir.co — arreglar 404 si sigue (Pages
       Source=Actions / CNAME / workflow docs). Evidencia curl/browser.
     - Push skills-library OK (DE-I7); push raíz solo orquestador.

- CA (evidencia literal en reporte):
  1) npm view @alephscript/skills-scriptorium@0.2.0 (canal real) o
     gate «esperando: tick ops» + semver/notes/Pages listos.
  2) Grep mundos reales (zeus, rutas host) en cara pública library = 0.
  3) custom.css sin path absoluto C:\Users\... (V1 cerrado).
  4) Checklist cierre de ola presente en skill + aplicado (stash/ramas).
  5) Pages library HTTP 200 (o gate ops declarado con evidencia).
  6) Ramas wp/i30*, wp/i32* (y obsoletas) borradas o justificadas.

- Cadencia: merge al ✅. Tú NO merges a main del raíz ni empujas raíz.
  Push de rama WP en skills-library OK (DE-I7) hasta merge orquestador.
- NO I41 (acta sitio raíz). NO I50/I52.
- NO editar BACKLOG (ya 🔶). NO inventar credenciales npm.
- NO mutar HOLONES/, OASIS, zeus.
- Commits:
  - skills-library: feat(skills): swarm-orquestacion v0.2.0 …
  - SCRIPT_SDK: fix(docs): procedencia custom.css sin path host …
    + docs(plan): reporte WP-I27 … (+ chore ramas si aplica)

Empieza: provisiona worktrees (raíz + hermano), lee RETRO + VIGIA,
implementa A–D, evidencia CA, reporta. NO implementes I41.
```
