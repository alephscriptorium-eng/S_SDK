# WP-D22 · estreno-publico — reporte

| dato | valor |
| ---- | ----- |
| agente | worker D22 (subagente) |
| fecha | 2026-07-16 |
| rama | `wp/d22-estreno-publico` |
| commits | `2426cb7`, `be0c47e`, `13bf90a` |
| estado propuesto | listo para revisión |

## Qué se hizo

Se creó el worktree `../SCRIPT_SDK-wp-d22` con rama `wp/d22-estreno-publico` desde
`main`. Se redactó `TEST-SWARM/ESTRENO-RUNBOOK.md` con el runbook literal del
BACKLOG (DE-7, DA-4, DA-5), notas del worker y sección dry-run. Se añadió
`TEST-SWARM/estreno-dry-run.sh` para ejecutar la prueba en seco sin tocar `main`
ni `draft` (pasos 1–3 del runbook; sin pasos 4–5). El dry-run verificó: rama
`main-sitio` huérfana (1 commit, sin ancestros), solo `docs/` + `TEST-SWARM/`,
sin backstage en raíz, sin `TEST-SWARM/docs` duplicado, sin anidado
`TEST-SWARM/_ensayo/`. **No se hizo push** (DA-5).

Desviación menor: se añadió `rm -rf TEST-SWARM` antes del `cp` en paso 3 y en
el script dry-run — evita anidar `../_ensayo` si quedan restos untracked tras
`git rm -rf .`.

## Archivos tocados

- `TEST-SWARM/ESTRENO-RUNBOOK.md` — creado: runbook literal + notas + CA
- `TEST-SWARM/estreno-dry-run.sh` — creado: automatización dry-run (worker)
- `TEST-SWARM/plan/REPORTES/WP-D22-estreno-publico.md` — creado: este reporte

## Evidencia

```
$ cd C:/Users/aleph/SCRIPT_SDK && git worktree add ../SCRIPT_SDK-wp-d22 -b wp/d22-estreno-publico main
Preparing worktree (new branch 'wp/d22-estreno-publico')
HEAD is now at 8631a1b docs(TEST-SWARM): aceptar WP-D20 — revisión orquestador

$ cd C:/Users/aleph/SCRIPT_SDK-wp-d22 && bash TEST-SWARM/estreno-dry-run.sh
=== ANTES ===
main=9f417bdf4b86c72dbcde474f25020172e3e6264e draft=e18ff9cb8938894fb6163f63ae11152367e683e5 branch=wp/d22-estreno-publico
=== VERIFICACIÓN ===
0f81d8b docs: pack demo + ensayo para Pages (dry-run)
=== DESPUÉS ===
main y draft intactas: OK

$ bash TEST-SWARM/validar-ensayo.sh 2>&1 | tail -4
--- Resumen ---
  OK:   81
  FAIL: 0
RESULTADO: VERDE
```

Verificación manual del árbol en `main-sitio` (antes de borrar la rama):

- top-level: `docs`, `TEST-SWARM` únicamente
- `docs/`: `index.html`, `assets/`
- `TEST-SWARM/ESTRENO-RUNBOOK.md`: presente
- ausentes: `HIPOTESIS.md`, `DEVOPS`, `LLM.md`, `docs/autoridades`, `TEST-SWARM/docs`

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo dentro de TEST-SWARM/: sí — runbook, script, reporte
- [x] Cero árboles/ficheros copiados de otros mundos (salvo `fanzine.css`
      con cabecera): sí — gate (d) VERDE
- [x] Sellos con fuente; rutas citadas existentes: N/A (documentación operativa)
- [x] Nombres en castellano, sin transición: sí
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`; las Notas, no el
      pitch: sí — runbook procedural
- [x] Cero moneda; munición = idea/obra; cifras en puntos de scrum (gate e):
      gate (e) VERDE (bloques bash con variables movidos a `.sh`)
- [x] La M como forma; física solo con procedencia citada: N/A
- [x] Web fiel a la plantilla fanzine (sin fuentes/CDNs/paleta ajena): N/A
- [x] Gates ejecutados de verdad: sí — `validar-ensayo.sh` VERDE (a–e)
- [x] Commits convencionales: `docs(TEST-SWARM): …`
- [x] Diff solo del alcance: sí — sin BACKLOG, sin merge, sin push

## Hallazgos fuera de alcance

- El runbook literal del BACKLOG no incluye `rm -rf TEST-SWARM` antes del
  `cp`; conviene que el custodio lo aplique (o commitear todo antes del paso 2)
  para evitar `TEST-SWARM/_ensayo/` anidado.
- Paso 5 (push + Pages) queda exclusivamente para el custodio (DA-5).

## Dudas / bloqueos

_(ninguno)_

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
