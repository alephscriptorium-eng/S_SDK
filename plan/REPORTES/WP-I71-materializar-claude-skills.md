# WP-I71 · materializar-claude-skills — reporte

| dato | valor |
| ---- | ----- |
| agente | worker fresco (regla 13) |
| fecha | 2026-07-20 |
| repos tocados | **SCRIPT_SDK (raíz) únicamente** |
| rama | `wp/i71-materializar-claude-skills` (desde `main` @ `1cbb712`) |
| commits | `a9fbce3` (obra: script + package.json + `.claude/skills/**`) · reporte (este commit) |
| eje(s) CA | ninguno de los clásicos (extracción/demolición/contrato); WP de materialización + script idempotente |
| estado propuesto | listo para revisión |

## Qué se hizo

Se materializaron las **3 skills** del paquete instalado
`@alephscript/skills-scriptorium@0.3.4` a `.claude/skills/` como espejo
auditable y commiteado. Se creó `scripts/sync-claude-skills.mjs` (Node ESM):
copia `node_modules/@alephscript/skills-scriptorium/skills/*` →
`.claude/skills/` **excluyendo `_plantilla`**; para cada skill borra-y-recrea
**solo su dir** (no arrasa otros contenidos de `.claude/`); regenera
`.claude/skills/README.md` de procedencia con **nombre+versión leídos del
`package.json` del paquete instalado** (no hardcode). npm script
`"skills:sync"` añadido a la raíz. `npm install` resolvió 0.3.4 sin reescribir
EOL de submódulos (`git status` limpio tras el install).

**Desviación declarada (blocker resuelto sin salir de alcance):** la regla
`.gitignore:2` `VIGILANCIA/` (backstage local, WP-I01/DE-I11) colisiona con
`.claude/skills/vigilancia/` porque `core.ignorecase=true` en Windows — git
la ignoraba y `git add .claude/skills` dejaba `vigilancia/` (7 ficheros)
fuera. Resuelto con `git add -f .claude/skills/vigilancia` **una vez**: un
path trackeado prevalece sobre la regla de ignore en todo `git add` futuro,
así que el espejo queda commiteable sin tocar `.gitignore`. **No se editó
`.gitignore`** (fuera de alcance; CA5 intacta). Ver Hallazgos.

## Archivos tocados (por repo)

- SCRIPT_SDK · `scripts/sync-claude-skills.mjs` — creado: sync idempotente paquete→espejo (90 líneas, Node ESM).
- SCRIPT_SDK · `package.json` — modificado: añadido npm script `"skills:sync": "node scripts/sync-claude-skills.mjs"`.
- SCRIPT_SDK · `.claude/skills/**` — creado: espejo de las 3 skills + `README.md` de procedencia (**58 ficheros**: site-web 28, swarm-orquestacion 22, vigilancia 7, README.md 1).
- SCRIPT_SDK · `plan/REPORTES/WP-I71-materializar-claude-skills.md` — creado: este reporte.

`package-lock.json` **no** se tocó (I70 ya fijaba 0.3.4; `npm install` no lo
modificó). `.claude/settings*.json` **no** tocado (restaurado el `M` previo
del worktree antes de empezar).

## Evidencia

> Salida literal. `⏳ sin verificar` donde no se comprobó.

**CA1 — `diff -rq` fuente↔espejo (las 3 skills), idéntico byte a byte:**

```
$ for s in site-web swarm-orquestacion vigilancia; do
    diff -rq node_modules/@alephscript/skills-scriptorium/skills/$s .claude/skills/$s; done
site-web: identico
swarm-orquestacion: identico
vigilancia: identico
diff overall rc=0
```

(sin ninguna línea de diferencia → mirror = fuente).

**CA2 — Idempotencia: 2ª/3ª corrida sin cambios en git status.** Tras la 1ª
corrida se stageó todo; la 2ª y 3ª corrida de `npm run skills:sync` + `git add
.claude/skills` (sin `-f`, probando que `vigilancia` ya trackeado se re-añade
normal) no produjeron entradas sucias:

```
$ npm run skills:sync   # run 2 y run 3 → exit=0
$ git status --porcelain | grep -E '^(AM|MM| M|\?\?)'
NO unstaged/dirty entries -> idempotent
```

**CA3 — README procedencia = versión leída del paquete (no hardcode):**

```
$ grep -n 'procedencia\|origen' .claude/skills/README.md
9:| procedencia | `@alephscript/skills-scriptorium@0.3.4` |
10:| origen | `node_modules/@alephscript/skills-scriptorium/skills/` |
```

El script lee `name`/`version` de
`node_modules/@alephscript/skills-scriptorium/package.json`
(`JSON.parse(readFileSync(...))`), no cadenas literales.

**CA4 — `_plantilla` ausente en `.claude/skills/`:**

```
$ ls .claude/skills/
README.md  site-web  swarm-orquestacion  vigilancia
$ test -e .claude/skills/_plantilla && echo PRESENT-FAIL || echo ABSENT-PASS
ABSENT-PASS
```

**CA5 — diff = solo scripts + package.json + .claude/skills/** + reporte.**
Obra (`a9fbce3`) vs merge-base (`1cbb712`):

```
$ git diff --name-only 1cbb712 HEAD | sed -E 's#/.*##' | sort | uniq -c
     58 .claude
      1 package.json
      1 scripts
$ git diff --stat 1cbb712 HEAD | tail -1
 60 files changed, 3595 insertions(+), 1 deletion(-)
```

Solo `.claude/skills/**` (58) + `package.json` + `scripts/sync-claude-skills.mjs`.
`package-lock.json` NO en el diff; `.gitignore` NO tocado. El reporte suma en
su propio commit (→ obra 60 ficheros + reporte).

## Digestión

No aplica: no se demolió ni archivó código. `.claude/skills/` es un **derivado**
(espejo) del paquete versionado; la fuente de verdad sigue siendo la dependencia
fijada en `package-lock.json` (0.3.4). Regenerable en cualquier momento con
`npm run skills:sync`.

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Deps file:/tgz/ruta-relativa nuevas: ninguna. Se consume la dep ya declarada por I70 (`@alephscript/skills-scriptorium` rango `0.x` → 0.3.4).
- [x] Referencias a zeus-sdk: ninguna introducida.
- [x] Nombres de transición / copy-paste: el espejo conserva los nombres canónicos de las skills; README marcado `GENERADO … NO editar a mano`.
- [x] If-chains que debieron ser tabla/máquina: N/A; el script itera dirs de la fuente (data-driven), exclusión vía `Set`.
- [x] Canales ad-hoc: N/A.
- [x] Digestión completa: N/A (materialización, no demolición).
- [x] Tests de comportamiento: idempotencia verificada por 3 corridas + git status limpio (CA2); `diff -rq` byte-a-byte (CA1).
- [x] Arranque real verificado: `npm run skills:sync` corrido de verdad (exit=0), no simulado; `diff`/`grep`/`test` con salida y rc medidos.
- [x] Commits por repo correctos; puntero de submódulo SIN bumpear: solo raíz SCRIPT_SDK; cero cambios en `HOLONES/*`; sin push.
- [x] Diff solo del alcance: CA5 confirma (.claude/skills/** + package.json + script; reporte en su commit).

## Hallazgos fuera de alcance

- **Colisión `.gitignore` `VIGILANCIA/` ↔ `.claude/skills/vigilancia/` (Windows `core.ignorecase=true`).**
  Resuelto para este WP vía `git add -f` (path trackeado prevalece en adelante).
  Es robusto tras el commit inicial (clones futuros traen la skill ya trackeada;
  el borra-y-recrea del sync opera sobre paths trackeados). Si el mundo prefiere
  blindaje explícito, candidato a micro-WP: añadir negación acotada
  `!.claude/skills/vigilancia/` a `.gitignore` — se dejó fuera por respetar CA5
  (diff = solo script + package.json + .claude/skills/** + reporte) y la regla
  de no ampliar alcance.
- `npm audit`: 3 vulnerabilidades (2 moderate, 1 high) en el árbol transitivo,
  heredadas de I70. No tocadas (fuera de alcance).

## Dudas / bloqueos

- Ninguno pendiente. **Sin push** (canal custodio media, per brief). El único
  blocker (ignore-case de `vigilancia/`) quedó resuelto dentro de alcance.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
