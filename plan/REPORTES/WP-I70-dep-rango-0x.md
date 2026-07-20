# WP-I70 · dep-rango-0x — reporte

| dato | valor |
| ---- | ----- |
| agente | worker fresco (regla 13) |
| fecha | 2026-07-20 |
| rama | `wp/i70-dep-rango-0x` (desde `main` @ `bf42a9f`) |
| commits | `33af967` (obra) · reporte (este commit) |
| eje(s) CA | ninguno (WP de dependencia + prosa; sin extracción/demolición/contrato) |
| estado propuesto | listo para revisión |

## Qué se hizo

Se declaró `@alephscript/skills-scriptorium` como devDependency del
`package.json` raíz con rango `0.x` (no pin exacto), materializando DE-I17.
`npm install` resolvió la efectiva **0.3.4** y escribió `package-lock.json`
(EXIT=0). No se tocó `.npmrc` (ya rutea `@alephscript` al registry propio).
Se alineó la prosa: `plan/README.md:14` (`@0.1.0` stale → rango `0.x`,
efectiva 0.3.4) y `plan/DECISIONES.md` (3 citas históricas de `@0.3.0`
cosidas con remisión a **DE-I17**, sin reescribir DE-I17).

**Desviación declarada:** el brief pedía tocar `plan/PRACTICAS.md`
(«versión fijada» → «rango `0.x`») *condicionado a* que ese texto exista.
No existe: `plan/PRACTICAS.md` no contiene «versión fijada» ni cita alguna
de versión del skill (verificado por grep + lectura íntegra). Por tanto no
se editó. Consecuencia: el diff toca **2** docs de `plan/`, no 3 — CA4 se
cumple en fondo (solo package.json + lock + docs de plan/ + reporte) pero
con 2 docs en vez de 3. Sin cambio inventado para cuadrar el número.

## Archivos tocados

- `package.json` — modificado: añadida devDependency `"@alephscript/skills-scriptorium": "0.x"`.
- `package-lock.json` — modificado (por `npm install`): resuelve 0.3.4 + árbol transitivo.
- `plan/README.md` — modificado: línea 14, `@0.1.0` stale → rango `0.x` (efectiva 0.3.4; DE-I17).
- `plan/DECISIONES.md` — modificado: 3 citas `@0.3.0` (I62/D-35, I61 aceptado, DE-I15) cosidas con remisión a DE-I17.
- `plan/REPORTES/WP-I70-dep-rango-0x.md` — creado: este reporte.

## Evidencia

> Salida literal. `⏳ sin verificar` donde no se comprobó.

**CA1 — `npm view` contra el canal real (C8):**

```
$ npm view @alephscript/skills-scriptorium --registry=https://npm.scriptorium.escrivivir.co version
0.3.4
```

**CA2 — `npm install` EXIT=0 + lock resuelve 0.3.4:**

```
$ npm install
added 128 packages, and audited 129 packages in 18s
38 packages are looking for funding
3 vulnerabilities (2 moderate, 1 high)
EXIT=0
```

Sección de `package-lock.json` (declaración raíz + nodo resuelto):

```
line 12:        "@alephscript/skills-scriptorium": "0.x",
line 19:    "node_modules/@alephscript/skills-scriptorium": {
line 20-      "version": "0.3.4",
line 21-      "resolved": "https://npm.scriptorium.escrivivir.co/@alephscript/skills-scriptorium/-/skills-scriptorium-0.3.4.tgz",
line 22-      "integrity": "sha512-wSPMaUPnFMfk+qMbJpuZz/+zfUbiBXEj96EeKeoh34s4j4HDjcmj3Wmj0Y6YrzwBqWyySxOcPJRpwq+gDtoQpA==",
line 23-      "dev": true,
```

**CA3 — grep residual = 0 en README + PRACTICAS:**

```
$ grep -rn "versión fijada\|0\.3\.0\b" plan/README.md plan/PRACTICAS.md
grep exit=1 (1 = sin coincidencias = PASS)
```

**CA4 — diff contra la base real (merge-base `bf42a9f`), obra + reporte:**

Nota: durante el WP, `main` avanzó en paralelo (`bf42a9f` → `aa7a4e4`:
WP-I72 mergeado por el worktree hermano). Por eso `git diff --stat main`
muestra ficheros de WP-I72 (PRACTICAS delta 9, reporte I72) como
"borrados" — no son míos, son trabajo paralelo ausente de mi rama. La
comparación correcta es contra la **merge-base** (`git merge-base HEAD
main` = `bf42a9f`), mi base real:

```
$ git diff --stat bf42a9f
 package-lock.json                    |  11 ++++
 package.json                         |   1 +
 plan/DECISIONES.md                   |  10 ++-
 plan/README.md                       |   2 +-
 plan/REPORTES/WP-I70-dep-rango-0x.md | 120 +++++++++++++++++++++++++++++++++++
 5 files changed, 140 insertions(+), 4 deletions(-)
```

Exactamente los 5 ficheros previstos (package.json + lock + 2 docs de
plan/ + reporte). CA4 PASS. Snapshot de la obra sola (antes del commit del
reporte, cuando `main` aún era `bf42a9f`): 4 ficheros
(package.json, package-lock.json, plan/DECISIONES.md, plan/README.md).

Verificación de higiene (sin EOL-rewrite de `bin/*.mjs` de submódulos, sin
untracked, sin cambios fuera de la raíz):

```
$ git status --short
 M package-lock.json
 M package.json
 M plan/DECISIONES.md
 M plan/README.md
(sin ?? untracked; node_modules gitignorado; ningún HOLONES/* ni bin/*.mjs)
```

## Auto-revisión (PRACTICAS del mundo — §4, con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: raíz SCRIPT_SDK; package.json + lock + 2 docs de plan/ + reporte. Sin submódulos, sin `.npmrc`.
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia: no se copió nada; solo se declaró una dependencia versionada del registry propio.
- [x] Sellos con fuente; rutas citadas existentes: DE-I17 citada (existe, líneas 208+ de DECISIONES.md); 0.3.4 verificada contra canal real (C8).
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: no se materializó `.claude/skills/` (es I71, fuera de alcance) — no prometido aquí.
- [x] Eje(s) aplicables evidenciado(s): ninguno aplica (no hay extracción, demolición, layout, ni contrato con cliente); WP de dependencia + prosa.
- [x] Gates ejecutados de verdad: `npm view` y `npm install` corridos contra el registry real, no simulados; grep con exit-code medido, no `| head && echo OK`.
- [x] Commits convencionales: `feat(deps): WP-I70 …`. (Nota honesta: el primer intento de commit `5439707` salió con subject mangled `@` por fuga de sintaxis PowerShell en la Bash tool; corregido con `--amend -F` → `33af967`. Rama nunca empujada.)
- [x] Diff solo del alcance del WP: confirmado por CA4 + `git status --short`.

## Hallazgos fuera de alcance

- `plan/PRACTICAS.md` no cita el versionado del skill en absoluto. Si el
  mundo quiere que PRACTICAS refleje explícitamente el rango `0.x`/DE-I17,
  sería un delta nuevo (candidato a micro-WP), no cabía en este alcance.
- `npm audit`: 3 vulnerabilidades (2 moderate, 1 high) en el árbol
  transitivo tras el install. No tocadas (fuera de alcance de I70).

## Dudas / bloqueos

- Ninguno. **Sin push** (canal custodio media, per brief). Base de I71/I73/I74.
