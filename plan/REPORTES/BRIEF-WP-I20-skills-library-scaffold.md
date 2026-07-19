# Brief — WP-I20 · Scaffold del repo skills-library

_Orquestador holón 07 · 2026-07-19 · ola I2 (tras merge I11 @ `d61d9a1`)_

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I20 · Scaffold del repo skills-library
Rama (repo nuevo): wp/i20-skills-library-scaffold
Checkout hermano: C:\Users\aleph\S_SDK-skills-library
  (hermano de SCRIPT_SDK; NO worktree de S_SDK salvo para el reporte)
Rama reporte (SCRIPT_SDK): wp/i20-skills-library-scaffold
Worktree reporte (opcional): ../SCRIPT_SDK-wp-i20
Reporte: plan/REPORTES/WP-I20-skills-library-scaffold.md
  (vive en SCRIPT_SDK; el scaffold vive en el repo hermano)

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I3 (repo nuevo S_SDK-skills-library, parejo a
  Z_SDK-games-library), DE-I7 (swarm crea remote + publicará luego;
  I20 = crear repo + scaffold, NO npm publish), DE-I9 (dominio
  skills.s-sdk.escrivivir.co), DE-I10 (simulación local vía npm pack)
- plan/PRACTICAS.md deltas 1 (escribir en skills-library), 5 (skills
  marco-agnósticos), 6 (gh repo create autorizado; sin push del raíz S_SDK)
- plan/BACKLOG.md WP-I20 (CA literal) + orden ola I2
- Fuente layout/docs a exportar (SOLO lectura; no mutar):
  - docs.yml + patrón Pages: SCRIPT_SDK `.github/workflows/docs.yml`
    (I11 ✅ en main @ d61d9a1) y/o
    C:\Users\aleph\OASIS\SCRIPTORIUM_V0\Z_SDK-games-library\.github\workflows\docs.yml
  - Formato skill Cursor: un dir por skill con SKILL.md (frontmatter
    name + description) + recursos opcionales (reference/examples/scripts)
  - Parejo games-library: package.json + docs/ VitePress + README

Notas del orquestador:
- Scope del paquete (fijado por brief citando BACKLOG/DE-I3):
  `@alephscript/skills-scriptorium` (version semver inicial 0.0.0 o 0.1.0;
  private:false — publicable en I26; I20 no publica).
- Entregables en el repo hermano `S_SDK-skills-library`:
  1) Crear checkout local hermano + `git init` si hace falta.
  2) `gh repo create alephscriptorium-eng/S_SDK-skills-library`
     (DE-I7 — el swarm crea el remote). Público; sin material sensible.
     Push inicial del skills-library SÍ permitido (DE-I7). Si `gh` falla
     por auth/org → declarar ⏳ y dejar remote listo en local.
  3) `package.json`: name `@alephscript/skills-scriptorium`, engines
     node >=22, scripts `docs:dev` / `docs:build`, files que empaqueten
     el layout de skills (no meter docs/.vitepress/dist).
  4) Layout skills (scaffold vacío/plantilla; contenido real = I21–I23):
     p. ej. `skills/<nombre>/SKILL.md` con frontmatter válido + README
     corto por skill o un skill stub `skills/_plantilla/`.
  5) README raíz: cómo un mundo **activa** el skill (install desde
     registry / path local / npm pack — simulación DE-I10).
  6) `instancias/` con `.gitkeep` + README: aquí caen datos separados
     de-identificados (I24); I20 no mete datos de zeus.
  7) `docs/` VitePress mínimo + `.github/workflows/docs.yml` export I11
     (npm ci, paths docs/**, wp/**, concurrency, deploy solo main) +
     `docs/public/CNAME` = `skills.s-sdk.escrivivir.co` (DE-I9).
- CA (evidencia literal en reporte):
  1) formato skill OK (frontmatter name/description; árbol dirs);
  2) `npm pack` + `npm install` del tarball en dir temporal EXIT=0;
  3) `npm run docs:build` en la library EXIT=0.
- NO implementar skills I21–I23 (stubs/plantilla sí). NO I24 datos.
  NO I26 publish. NO editar BACKLOG. NO push del raíz SCRIPT_SDK.
  NO mutar HOLONES/, OASIS, zeus, games-library.
- Commits:
  - en S_SDK-skills-library: feat/chore/docs según archivo
  - en SCRIPT_SDK: solo el reporte (docs(plan): …)

Empieza: crea el checkout hermano y la rama wp/i20-… en ese repo;
crea (si hace falta) rama/worktree en SCRIPT_SDK solo para el reporte;
lee PRACTICAS entero; implementa el scaffold; evidencia CA; reporta.
```
