# Brief — WP-I28 · Housekeeping post-I4 (V4+V5+V6)

_Orquestador holón 07 · 2026-07-19 · ola I2.5 (residual post-I27 / higiene)_
_SCRIPT_SDK `main` post-I41 ✅ · I27 ✅. GO custodio (nota vigía vía padre)._
_NO I50/I51/I52. NO bump skill. NO Pages library. Solo housekeeping._

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I28 · Housekeeping post-I4 — cierra V4+V5+V6
Checkout hermano (library): C:\Users\aleph\S_SDK-skills-library
  Rama trabajo skill: wp/i28-housekeeping-v4-v5-v6
  Base: main (skills-library)
  Alcance library: SOLO higiene de ramas (V4). Sin bump, sin publish,
  sin docs.yml, sin CSS.
Rama obra raíz (SCRIPT_SDK): wp/i28-housekeeping-v4-v5-v6
Worktree raíz: ../SCRIPT_SDK-wp-i28
Worktree hermano: ../S_SDK-skills-library-wp-i28
  (o checkout limpio en el hermano; ambos worktrees obligatorios)
Reporte: plan/REPORTES/WP-I28-housekeeping-v4-v5-v6.md
  (vive en SCRIPT_SDK)

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/REPORTES/VIGIA-ESTADO.md (hallazgos V4 / V5 / V6 — fuente)
- plan/REPORTES/WP-I41-verificacion-sitio-vivo.md (favicon 404 + copy)
- plan/REPORTES/WP-I27-skills-v02-pages-higiene.md (confesó ramas library
  «fuera de alcance»)
- Skill v0.2: regla 10 / checklist cierre + regla 4 (hermano)
  en @alephscript/skills-scriptorium (swarm-orquestacion)

Notas del orquestador — alcance obligatorio (un solo micro-WP):

  V4 — skills-library (regla 10 al hermano · regla 4):
     - Listar ramas locales y remotas que matcheen wp/i20…wp/i27
       (nombres exactos o prefijo; p.ej. wp/i20-skills-library-scaffold).
     - Borrar las 7 (o el conjunto vivo) en LOCAL y en origin.
       git push origin --delete <rama> por cada una remota.
     - Evidencia: git branch -a | grep -E 'wp/i2[0-7]' = vacío
       (local + refs/remotes/origin tras fetch --prune).
     - Documentar en el reporte qué ramas borraste (lista literal).
     - NO tocar main del library salvo si hace falta un commit vacío
       de higiene (preferible: solo delete branches; sin código).

  V5 — SCRIPT_SDK docs:
     - Añadir favicon en raíz del sitio VitePress (hoy /favicon.ico
       404 en s-sdk.escrivivir.co; pack sí tiene /ensayo/favicon.ico).
       Colocar asset en docs/public/ (o convención VitePress) de modo
       que dist sirva /favicon.ico con 200.
     - Quitar copy stale «<pendiente I40>» en docs/ (I40 ya ✅).
       Grep debe cubrir al menos: docs/index.md, docs/holones/*.md
       y cualquier otro bajo docs/. Sustituir por estado real
       (sitio vivo / dominio s-sdk.escrivivir.co) sin inventar ops.

  V6 — nav:
     - En docs/.vitepress/config.mjs: añadir enlace a
       /guide/publicar-la-web en nav (y sidebar si encaja con el
       patrón existente). Hoy solo es navegable por URL directa.

- CA (evidencia literal en reporte):
  1) Ramas wp/i20–i27 ausentes en skills-library local + remoto
     (post fetch --prune).
  2) Favicon 200: curl sitio vivo y/o existencia en docs/.vitepress/dist
     tras docs:build (declara cuál verificaste).
  3) grep -r '<pendiente I40>' docs/ = 0.
  4) nav (config.mjs) contiene enlace a /guide/publicar-la-web
     (o path equivalente VitePress).
  5) npm run docs:build EXIT=0.

- Cadencia: merge al ✅. Tú NO merges a main del raíz ni empujas raíz.
  Push de rama WP en skills-library OK solo si hay commit de obra;
  deletes de ramas origin sí (higiene V4).
- NO I50/I51/I52. NO editar BACKLOG (ya 🔶). NO bump skill.
- NO mutar HOLONES/, OASIS, zeus. NO tocar I52/ENTREGA.
- Commits sugeridos:
  - skills-library: chore(git): borrar ramas wp/i20–i27 (regla 10)
    (si solo deletes: documenta en reporte; commit opcional)
  - SCRIPT_SDK: fix(docs): favicon + scrub pendiente I40 + nav guía
    + docs(plan): reporte WP-I28 …

Empieza: provisiona worktrees (raíz SCRIPT_SDK + hermano skills-library),
lee VIGIA V4–V6, implementa V4→V5→V6, evidencia CA, reporta.
NO implementes nada fuera de este micro-WP.
```
