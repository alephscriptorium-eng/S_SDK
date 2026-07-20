# WP-I73 · CHANGELOG de gobierno + gate — reporte

| dato | valor |
| ---- | ----- |
| agente | worker fresco (regla 13) |
| fecha | 2026-07-20 |
| rama | `wp/i73-changelog-gobierno-gate` (desde `main` @ `1cbb712`) |
| commits | obra (CHANGELOG + package.json) · reporte (este commit) |
| eje(s) CA | ninguno de los 5 ejes RE-PLAN (WP de tooling de gobierno); CA propios del brief |
| estado propuesto | listo para revisión |

## Qué se hizo

1. Rama `wp/i73-changelog-gobierno-gate` desde `main` @ `1cbb712` (la punta
   con I70 ✅ — el lock ya fija `@alephscript/skills-scriptorium` **0.3.4**).
   `npm install` (EXIT=0) materializa el gate en `node_modules/`.
2. `CHANGELOG.md` raíz nuevo — **CHANGELOG de gobierno derivado del BACKLOG**,
   formato Keep-a-Changelog, **granularidad gruesa por ola** (I0…I7). Encabezado
   declara explícitamente: «CHANGELOG de **gobierno** (derivado del BACKLOG);
   **no** es changelog de paquete». Una entrada `## [Ix]` por ola; cada bullet
   rastrea a un **WP ✅ real** del BACKLOG (título + sello + hash copiados, no
   inventados — disciplina C9). Sección `## [Unreleased]` para los abiertos
   (I63 ⬜, I71/I73/I74 🔶) — no marcados ✅, el gate los ignora.
3. npm script `"changelog:check"` que invoca el gate con
   `--role gobierno --backlog plan/BACKLOG.md --changelog CHANGELOG.md
   --version I7`. El gate **exige** versión (sale 2 si falta): `package.json`
   raíz es `0.0.0` (no significativa), así que se cablea `--version I7` y el
   CHANGELOG ancla `## [I7] - 2026-07-20`.
4. `npm run changelog:check` → **verde a la primera** (32 WP ✅ referenciados).

## Archivos tocados

- `CHANGELOG.md` — creado: CHANGELOG de gobierno, gruesa por ola I0…I7, 32
  entradas WP ✅ + sección `[Unreleased]`.
- `package.json` — modificado: añadido script `changelog:check` (invoca el gate).
- `plan/REPORTES/WP-I73-changelog-gobierno-gate.md` — creado: este reporte.

`package-lock.json` **no** cambió: `main` @ `1cbb712` ya tenía 0.3.4 resuelto
(I70), así que `npm install` no tocó el lock. `node_modules/` gitignorado.
Cero cambios en `.claude/` (se revirtió un `settings.local.json` sucio heredado
del checkout). Cero cambios fuera de la raíz.

## Evidencia (literal)

**Cabecera `--help` del gate (leída antes de cablearlo):**

```
verificar-changelog — gate del CHANGELOG de gobierno (opt-in)
  --role ROLE     Obligatorio. Solo 'gobierno' ejecuta el gate.
                  'paquete' se rechaza ...
  --version x.y.z Versión a verificar (o VERSION / package.json)
  --changelog F   Ruta del CHANGELOG de gobierno (default: CHANGELOG.md)
  --backlog F     Ruta del BACKLOG (default: plan/BACKLOG.md)
```

El gate comprueba (leído del fuente): (1) existe la sección de la versión
(`## [x.y.z]` o `## x.y.z`); (2) todo WP marcado ✅ en el BACKLOG
(`- ✅ **WP-…`) está referenciado (`\bWP-…\b`) en el CHANGELOG.

**CA1 — `npm run changelog:check` EXIT=0 (todo WP ✅ referenciado):**

```
> node .../verificar-changelog.mjs --role gobierno --backlog plan/BACKLOG.md --changelog CHANGELOG.md --version I7
[verificar-changelog] role=gobierno · version=I7 · changelog=CHANGELOG.md · WP ✅ en backlog: 32
[verificar-changelog] OK: CHANGELOG de gobierno I7 presente y todos los WP ✅ referenciados.
CA1_EXIT=0
```

Los 32 WP ✅ que el gate extrae del BACKLOG (mismo algoritmo del gate):
`WP-I00, I01, I02, I03, I10, I11, I12, I20, I21, I22, I23, I24, I25, I26,
I27, I28, I29, I30, I31, I32, I33, I40, I41, I42, I52, I50, I51, I60, I61,
I62, I70, I72`.

**CA2 — control negativo (rol ≠ gobierno → rehúsa, EXIT≠0):**

```
$ verificar-changelog.mjs --role paquete ...
[verificar-changelog] rol=paquete rechazado. ... Usar --role gobierno ...
CA2_paquete_EXIT=2

$ verificar-changelog.mjs (sin --role) ...
[verificar-changelog] falta --role (opt-in). Declarar: --role gobierno
CA2_norole_EXIT=2
```

**CA3 — spot-check: 3 entradas rastreadas a WP ✅ reales del BACKLOG:**

| WP | BACKLOG (fuente derivada) | CHANGELOG (entrada) |
| -- | -- | -- |
| WP-I42 | «Refresh del sitio: ficha 07 al día + retiro de `/ensayo/`» · Aceptado ✅ 2026-07-20 · push `7a72e2f..45a328d` | ola `[I4]`: mismo título + «vigilante PASS (5 gates)» + mismo rango de push |
| WP-I24 | «Separación de datos + corrección del error fundamental (DS-5)» · Aceptado ✅ · SCRIPT_SDK `main` @ `0c6e342` | ola `[I2]`: mismo título + fixture `instancias/ejemplo-M/` + `@ 0c6e342` |
| WP-I70 | «Dependencia + rango `0.x`» · Aceptado ✅ 2026-07-20 · merge `main` @ `2f25e51` | ola `[I7]`: mismo título + «resuelve 0.3.4» + `@ 2f25e51` |

Cada bullet del CHANGELOG copia título/sello/hash del BACKLOG; sin texto
inventado. Los abiertos (I63/I71/I73/I74) van en `[Unreleased]`, no como ✅.

**CA4 — `git diff` = solo CHANGELOG.md + package.json + reporte:**

```
$ git status --short
 M package.json
?? CHANGELOG.md
$ git diff HEAD --stat   (antes de añadir CHANGELOG/reporte al índice)
 package.json | 3 ++-
```

Tras stage completo el alcance es exactamente `CHANGELOG.md` (nuevo) +
`package.json` (M) + `plan/REPORTES/WP-I73-changelog-gobierno-gate.md` (nuevo).
`package-lock.json` intacto (I70 ya lo dejó en 0.3.4). Sin untracked ajenos;
`node_modules/` gitignorado; sin tocar `HOLONES/*` ni `.claude/`.

## Auto-revisión (PRACTICAS del mundo — §4, con honestidad)

- [x] Diff solo dentro del alcance: raíz SCRIPT_SDK; CHANGELOG.md + package.json + reporte. Sin submódulos, sin `.claude/`, sin `.npmrc`.
- [x] Cero árboles copiados de otros mundos: el CHANGELOG se **deriva** del propio BACKLOG (C9); no se copió nada externo.
- [x] Sellos con fuente; rutas/hashes citados existentes: cada entrada rastrea a un WP ✅ del BACKLOG (spot-check CA3); versión anclada = `## [I7]`.
- [x] Sin fluff ni promesa sin `<pendiente>`: los WP abiertos van en `[Unreleased]` marcados 🔶/⬜, no como logro cerrado.
- [x] Eje(s): ninguno de los 5 ejes RE-PLAN aplica (tooling de gobierno); se cumplen los 4 CA del brief con evidencia literal.
- [x] Gates ejecutados de verdad: `changelog:check` corrido (EXIT=0 medido); control negativo corrido con dos variantes (EXIT=2 medido), no simulado.
- [x] Disciplina C9 respetada: el CHANGELOG se derivó del BACKLOG cerrado (título/sello/hash copiados), no se inventó texto.
- [x] Diff solo del alcance del WP: confirmado por CA4 + `git status --short`.

## Notas / decisiones

- **Versión anclada = `I7`** (no semver x.y.z): el gate no valida formato
  semver de `--version` — usa la cadena como ancla de sección y para el chequeo
  de existencia. `## [I7]` casa el regex del gate (`^##\s*\[?I7\]?\b`) y encaja
  con la convención «una versión de gobierno por ola». `package.json` raíz es
  `0.0.0` (repo privado, sin publicar), por eso se cablea `--version I7`
  explícito en vez de heredar `0.0.0`.
- **Sección `[Unreleased]`** añadida por higiene Keep-a-Changelog: lista
  I63 ⬜ / I71 🔶 / I73 🔶 / I74 🔶. No afecta al gate (solo verifica los ✅).

## Dudas / bloqueos

- Ninguno. **Sin push** (canal custodio media, per brief). Dep I70 satisfecha.
