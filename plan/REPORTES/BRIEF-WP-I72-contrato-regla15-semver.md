# BRIEF · WP-I72 · Adoptar contrato — regla 15 + semver DC-22

| dato | valor |
| ---- | ----- |
| ola | I7 (upgrade skills 0.3.4) |
| repos | **SCRIPT_SDK (raíz) únicamente** |
| rama | `wp/i72-contrato-regla15-semver` (crear desde `main`) |
| base decisión | DE-I17 |
| push | **NO** (canal custodio media) |
| agente | fresco (regla 13) |
| independencia | **no** depende de I70; documental puro |

## Objetivo

Citar como contrato del mundo las dos piezas nuevas del skill 0.3.4:
**regla 15** (fuente de verdad única + efimeralidad) y la doctrina
**semver DC-22** (regla de método = minor; patch = sin cambio de contrato).
Como zeus: holón 07 **cumple de facto** → se **cita**, sin refactor retro.

## Fuente (léela, no la inventes)

- `C:\Users\aleph\S_SDK-skills-library\skills\swarm-orquestacion\reference\reglas-metodo-v04.md` (regla 15).
- `C:\Users\aleph\S_SDK-skills-library\CHANGELOG.md` §[0.3.4] (doctrina semver DC-22).

## Trabajo

- Editar **solo `plan/PRACTICAS.md`**: añadir una sub-sección breve que cite
  regla 15 y DC-22 por versión (con la ruta/fuente del skill 0.3.4), y
  afirme que holón 07 ya cumple de facto (fuente de verdad única = el
  BACKLOG/plan; nada de refactor).
- **NO** tocar `plan/DECISIONES.md` (DE-I17 ya cubre la decisión; evitar
  choque con I70, que anota ahí).

## CA (evidencia literal)

- **CA1** `grep -n "regla 15\|DC-22\|efimeralidad" plan/PRACTICAS.md` > 0
  con la cita por versión.
- **CA2** cero promesa sin sello (no afirmar cumplimiento que no puedas
  mostrar; «cumple de facto» se justifica por «solo el orquestador escribe
  BACKLOG» ya vigente).
- **CA3** `git diff --stat` = solo `plan/PRACTICAS.md` (+ el reporte).

## Restricciones

- **Sin push.** Cero cambios fuera de `plan/PRACTICAS.md`.
- Reporte en `plan/REPORTES/WP-I72-contrato-regla15-semver.md`.
- Auto-revisión PRACTICAS §4 al pie.
