# BRIEF · WP-I73 · CHANGELOG de gobierno + gate

| dato | valor |
| ---- | ----- |
| ola | I7 · dep I70 ✅ (`main` @ `2f25e51`) |
| repos | **SCRIPT_SDK (raíz) únicamente** |
| rama | `wp/i73-changelog-gobierno-gate` (desde `main`) |
| base decisión | DE-I17 · nuevo tooling 0.3.4 |
| push | **NO** (canal custodio media) |
| agente | fresco (regla 13) |

## Objetivo

Crear el **CHANGELOG de gobierno** de holón 07 (uno por mundo, derivado del
BACKLOG, WP-id-keyed) y cablear su **gate** (viene con el paquete instalado).
NO es changelog de paquete.

## Fuente y contrato

- Gate: `node_modules/@alephscript/skills-scriptorium/skills/swarm-orquestacion/scripts/verificar-changelog.mjs` (tras `npm install`). Lee su cabecera `--help`: exige `--role gobierno`, `--changelog`, `--backlog`, comprueba que **todo WP ✅ del BACKLOG** aparezca referenciado y que exista la sección de versión.
- Disciplina **C9**: el CHANGELOG **se deriva** del backlog cerrado — se copian los WP ✅, **no se inventa texto**.

## Trabajo

1. `git checkout -b wp/i73-changelog-gobierno-gate`; `npm install` (para el gate).
2. Crear `CHANGELOG.md` raíz, formato Keep-a-Changelog, **granularidad gruesa por ola** (I0…I7), cada entrada rastreando a los WP ✅ del `plan/BACKLOG.md`. Encabezado que declare: «CHANGELOG de **gobierno** (derivado del BACKLOG); no es changelog de paquete». Incluye una sección de versión (p.ej. `## [I7]` o la convención que uses) que el gate pueda anclar.
3. Añadir npm script `"changelog:check"` que invoque el gate: `node node_modules/@alephscript/skills-scriptorium/skills/swarm-orquestacion/scripts/verificar-changelog.mjs --role gobierno --backlog plan/BACKLOG.md --changelog CHANGELOG.md`.
4. Ejecutar `npm run changelog:check` → **verde**. Ajusta el CHANGELOG hasta que pase (si el gate exige `--version`, cablea la que corresponda). Commit obra + reporte `plan/REPORTES/WP-I73-changelog-gobierno-gate.md`.

## CA (evidencia literal)

- **CA1** `npm run changelog:check` EXIT=0 (pega salida). Todo WP ✅ referenciado.
- **CA2** Control negativo: correr el gate con `--role paquete` (o sin `gobierno`) → **rehúsa** (EXIT≠0).
- **CA3** Cada entrada del CHANGELOG rastrea a un WP ✅ real del BACKLOG (sin texto inventado; spot-check de 3 entradas contra el BACKLOG).
- **CA4** `git diff --stat` = solo `CHANGELOG.md`, `package.json`, y el reporte.

## Restricciones

- **Sin push.** Cero cambios fuera de la raíz. No toques `.claude/`.
- Auto-revisión PRACTICAS §4 al pie.
