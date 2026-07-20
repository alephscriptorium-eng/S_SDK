# BRIEF · WP-I71 · Materialización a `.claude/skills/`

| dato | valor |
| ---- | ----- |
| ola | I7 · dep I70 ✅ (`main` @ `2f25e51`) |
| repos | **SCRIPT_SDK (raíz) únicamente** |
| rama | `wp/i71-materializar-claude-skills` (desde `main`) |
| base decisión | DE-I17 · espejo zeus U147 |
| push | **NO** (canal custodio media) |
| agente | fresco (regla 13) |

## Objetivo

Materializar las **3 skills** del paquete instalado a `.claude/skills/`
(commiteado, auditable), con un script de sync idempotente. La fuente de
verdad sigue siendo el paquete versionado; `.claude/skills/` es espejo.

## Trabajo

1. `git checkout -b wp/i71-materializar-claude-skills`.
2. `npm install` (el lock ya fija 0.3.4 → `node_modules/@alephscript/skills-scriptorium/skills/{site-web,swarm-orquestacion,vigilancia,_plantilla}`). Si reescribe EOL de `bin/*.mjs` de submódulos, `git restore` y no incluyas.
3. Crear `scripts/sync-claude-skills.mjs` (Node ESM, estilo de los scripts del repo): copia `node_modules/@alephscript/skills-scriptorium/skills/*` → `.claude/skills/` **excluyendo `_plantilla`**; para cada skill sincronizada borra-y-recrea su dir (sin arrasar otros contenidos de `.claude/`); regenera `.claude/skills/README.md` de procedencia con **nombre+versión** leídos del `package.json` del paquete instalado.
4. Añadir npm script `"skills:sync": "node scripts/sync-claude-skills.mjs"` al `package.json` raíz.
5. Ejecutar `npm run skills:sync` (2–3 veces para probar idempotencia). Commit de la obra (`scripts/…`, `package.json`, `.claude/skills/**`).
6. Reporte `plan/REPORTES/WP-I71-materializar-claude-skills.md` + commit.

## CA (evidencia literal)

- **CA1** `for s in site-web swarm-orquestacion vigilancia; do diff -rq node_modules/@alephscript/skills-scriptorium/skills/$s .claude/skills/$s; done` → sin diferencias (idéntico byte a byte).
- **CA2** Idempotencia: 2ª corrida de `npm run skills:sync` → `git status --porcelain` sin cambios nuevos.
- **CA3** `.claude/skills/README.md` declara `@alephscript/skills-scriptorium@0.3.4` (versión leída del paquete, no hardcodeada).
- **CA4** `_plantilla` **no** aparece en `.claude/skills/`.
- **CA5** `git diff --stat` = solo `scripts/sync-claude-skills.mjs`, `package.json`, `.claude/skills/**`, y el reporte.

## Restricciones

- **Sin push.** Sin bump de submódulos. Cero cambios fuera de la raíz.
- **No** toques `.claude/settings*.json` (config del harness; regla 15 = efímero).
- Auto-revisión PRACTICAS §4 al pie.
