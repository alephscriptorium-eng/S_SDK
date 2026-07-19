# WP-I22 · skill-site-web — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i22 (holón 07) |
| fecha | 2026-07-19 |
| rama (skills-library) | `wp/i22-skill-site-web` @ `31b8105` |
| checkout skill | `C:\Users\aleph\S_SDK-skills-library` |
| rama (reporte SCRIPT_SDK) | `wp/i22-skill-site-web` |
| worktree reporte | `C:\Users\aleph\SCRIPT_SDK-wp-i22` |
| base SCRIPT_SDK | `main` @ `48004ea` |
| estado propuesto | listo para revisión |

## Qué se hizo

Skill `site-web` en skills-library: método de bases (argumento / sistema /
mecanismo con backtracking, filtros C1–C9 incl. C8/C9, entrega §E) +
protocolo ghpages (plantillas docs.yml / config VitePress con guard /
CNAME / piel zine / checklist DNS + mitigación de los 7 frágiles).
Separación DE-I6/DE-I10: método en el skill; datos de instancia solo en
fixture inventada `examples/mundo-limpio/` (nexo-atlas) — cero copy de
CANTERA/ENTREGA de mundos reales. Push de la rama WP al remote
skills-library (DE-I7). Reporte solo en worktree SCRIPT_SDK; sin push
raíz; sin editar BACKLOG; sin tocar I21/I23.

## Archivos tocados

### Repo `S_SDK-skills-library` (solo `skills/site-web/`)

- `SKILL.md` + `README.md` — skill name=`site-web`, parámetros del mundo
- `reference/metodo-*.md` — BASE-1/2/3 abstraídas
- `reference/protocolo-ghpages.md` — Pages + 7 frágiles
- `reference/plantillas/` — BASE-*, docs.yml.tpl, config.mjs.tpl, CNAME,
  custom.css.tpl
- `examples/mundo-limpio/` — fixture inventada (docs + workflow + bases +
  cantera/entrega locales del ejemplo)
- `scripts/ceguera.sh` · `scripts/generar-sitio.sh`

### Repo SCRIPT_SDK (solo reporte)

- `plan/REPORTES/WP-I22-skill-site-web.md` — este reporte

## Evidencia

> No inventes observaciones. Salida literal o `⏳ sin verificar`.

### CA-1 · skill + mundo limpio → sitio publicable

```text
$ bash skills/site-web/scripts/generar-sitio.sh /tmp/tmp.5W1N8XuWeW
SITIO_OK destino=/tmp/tmp.5W1N8XuWeW
siguiente: cd "…" && npm install && npm run docs:build

$ cd /tmp/tmp.5W1N8XuWeW && npm install && npm run docs:build
vitepress v1.6.4
✓ building client + server bundles...
✓ rendering pages...
build complete in 23.54s.
BUILD_EXIT=0
DIST_OK
$ cat docs/.vitepress/dist/CNAME
atlas.ejemplo.co
```

Fixture: `examples/mundo-limpio/` (inventada; sin consultar canteras ajenas).

### CA-2 · ceguera delta 5 = 0 + sin rutas absolutas de mundo real

```text
$ rg -n -e 'zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura' skills/site-web/
(sin matches)
RG_EXIT=1

$ bash skills/site-web/scripts/ceguera.sh 'zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura'
CEGUERA_OK matches=0

$ rg -n -e 'C:\\Users|/OASIS/|CANTERA/0|ENTREGA-CAPA|ENTREGA-SPRINT' skills/site-web/
(sin matches)
ABS_EXIT=1
```

### CA-3 · formato skill OK; plantillas sin datos de instancia real

```text
skills/site-web/SKILL.md frontmatter:
---
name: site-web
description: >-
  Método de copy + protocolo de publicación web …
---
Árbol: SKILL.md · reference/ · examples/ · scripts/
Plantillas método en reference/plantillas/ (placeholders {{MUNDO_ID}}…).
Datos concretos de mundos reales: ausentes.
```

### Remote skills-library (DE-I7)

```text
$ git push -u origin wp/i22-skill-site-web
branch 'wp/i22-skill-site-web' set up to track 'origin/wp/i22-skill-site-web'.
* [new branch] wp/i22-skill-site-web -> wp/i22-skill-site-web
@ 31b8105
```

## Auto-revisión (PRACTICAS §4 + deltas holón 07)

- [x] Diff solo en alcance autorizado (delta 1: skills-library
      `skills/site-web/` + reporte en `plan/REPORTES/`): sí
- [x] Cero árboles copiados de mundos reales (método abstraído; fixture
      inventada; CSS plantilla mínima sin ruta OASIS): sí
- [x] Sellos con fuente; evidencia literal arriba: sí
- [x] Nombres en castellano donde aplica (metodo-*, mundo-limpio,
      entrega): sí
- [x] Sin fluff; I24/I30 no hechos: sí
- [x] Cero moneda: sí
- [x] Ceguera delta 5 = 0 en `skills/site-web/`: sí
- [x] Push solo skills-library rama WP (DE-I7 / delta 6); raíz sin push: sí
- [x] Gates CA ejecutados de verdad: sí
- [x] Commits convencionales: `feat(skills): …` / `docs(plan): …`
- [x] Diff solo del alcance I22 (no I21/I23, no BACKLOG): sí
- [x] Nota: checkout skills-library fue interferido por rama I23 en
      paralelo; el commit se reubicó en `wp/i22-skill-site-web` antes de
      push (solo `skills/site-web/`; temps I23 no incluidos)

## Hallazgos fuera de alcance

- DNS/HTTPS de `skills.s-sdk.escrivivir.co` y del dominio de cada
  consumidor → ops del mundo (checklist en protocolo; no verificados aquí).
- Activación en casa / instancia WEBS propia → I30.
- Separación de datos reales DS-5 → I24.

## Dudas / bloqueos

Ninguno. CA en verde; rama skill empujada.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
