# Brief — WP-I22 · Skill `site-web`

_Orquestador holón 07 · 2026-07-19 · ola I2 (tras merge I20 @ `4a0f1eb`)_
_Paralelo: I21 ∥ I22 ∥ I23 — no tocar skills de los otros WPs._

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I22 · Skill site-web
Checkout hermano (trabajo del skill): C:\Users\aleph\S_SDK-skills-library
  Rama skill: wp/i22-skill-site-web
  Path: skills/site-web/
Rama reporte (SCRIPT_SDK): wp/i22-skill-site-web
Worktree reporte (paralelo): ../SCRIPT_SDK-wp-i22
Reporte: plan/REPORTES/WP-I22-skill-site-web.md
  (vive en SCRIPT_SDK; el skill vive en el repo hermano)

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I1 (VitePress + piel zine + 7 frágiles), DE-I3,
  DE-I6 (capa contenido = método WEBS; instancia aparte), DE-I7, DE-I9,
  DE-I10 (separar método vs datos)
- plan/PRACTICAS.md deltas 1, 3 (C8/familia), 5 (ceguera), 6
- plan/BACKLOG.md WP-I22 (CA literal) + tabla fuentes + frágiles #1–#7
- plan/REPORTES/WP-I20-skills-library-scaffold.md + WP-I11-docs-yml-cname.md
  (export docs.yml / CNAME / mitigaciones frágiles ya aplicadas en casa)
- Método WEBS (SOLO lectura; abstraer método, **NO** meter datos CANTERA
  ni ENTREGA de zeus):
  C:\Users\aleph\OASIS\SCRIPTORIUM_V0\WEBS\
  — README.md · BASE-1-ARGUMENTO.md · BASE-2-SISTEMA-DE-JUEGO.md ·
    BASE-3-MECANISMO.md (backtracking, filtros §C incl. C8/C9, entrega §E)
  — CANTERA/ y ENTREGA-* = **datos de instancia**; citar como ejemplo de
    lo que NO entra al skill (DE-I6 / DE-I10)
- Protocolo ghpages (SOLO lectura / export de patrón):
  - `.github/workflows/docs.yml` de SCRIPT_SDK (I11 ✅) y/o scaffold
    skills-library; config VitePress parametrizada; piel zine (copia-
    release con cabecera de procedencia si se incluye CSS de referencia);
  - checklist dominio/DNS/HTTPS + mitigación de los 7 frágiles
    (BACKLOG cabecera: #1 CNAME · #2 base guard · #3 DNS · #4 npm ci ·
    #5 dist/ · #6 spec-gen · #7 paths gap)

Notas del orquestador:
- Entregable en S_SDK-skills-library:
  1) Rama `wp/i22-skill-site-web` desde main skills-library.
  2) `skills/site-web/` (formato `_plantilla`): SKILL.md name=`site-web`
     + reference/ (método BASE-1/2/3 abstraído, ghpages, frágiles) +
     examples/ **sin** copy de mundo real + scripts/ opcionales.
  3) **Separar:** método limpio (plantillas BASE, bucle backtracking,
     C8/C9, formato entrega §E, pipeline Pages). Datos concretos
     (CANTERA/ENTREGA zeus) NO entran — van a instancias/ en I24/I30.
  4) Parametrizar dominio, base VitePress, rutas docs/, registry — «el
     mundo». Cero rutas absolutas a OASIS/zeus en la cara pública.
  5) Push skill a origin skills-library OK (DE-I7), solo rama WP.
- Entregable SCRIPT_SDK: solo reporte en wp/i22-… (worktree paralelo).
- CA (evidencia literal en reporte):
  1) Con el skill + un mundo limpio (dir temp / fixture mínima inventada
     sin consultar zeus) se describe/genera un sitio publicable.
  2) `rg` en `skills/site-web/`: cero rutas absolutas de mundo real; cero
     nombres zeus/CANTERA concreta; ceguera delta 5 = 0.
  3) Formato skill OK; plantillas del método sin datos de instancia.
- NO I21/I23. NO meter CANTERA/ENTREGA zeus. NO I24. NO editar BACKLOG.
  NO push raíz SCRIPT_SDK. Fuentes WEBS/OASIS = solo lectura.
- Conflictos paralelo: dirs `skills/site-web/` vs swarm-orquestacion /
  vigilancia. Merge independiente.
- Commits:
  - skills-library: feat(skills): site-web …
  - SCRIPT_SDK: docs(plan): reporte WP-I22 …

Empieza: sitúate en rama/worktree (skill + reporte), lee PRACTICAS entero,
implementa solo el skill site-web, evidencia CA, reporta.
```
