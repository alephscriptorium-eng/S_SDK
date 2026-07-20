# WP-I72 · contrato-regla15-semver — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i72 · holón 07 (fresco, regla 13) |
| fecha | 2026-07-20 |
| rama | `wp/i72-contrato-regla15-semver` |
| base | `main` @ `bf42a9f` |
| commits | `ede4f3b` docs(plan): WP-I72 — citar contrato 0.3.4 (regla 15 + semver DC-22) |
| eje(s) CA | contrato/capa (documental puro; no depende de I70) |
| estado propuesto | listo para revisión |
| push | no (canal custodio media) |

## Qué se hizo

Se añadió a `plan/PRACTICAS.md` una sub-sección breve (delta 9) que **cita**
como contrato del mundo las dos piezas nuevas del skill 0.3.4: **regla 15**
(fuente de verdad única + efimeralidad) y la doctrina **semver DC-22** (regla
de método = minor; patch = sin cambio de contrato), con la fuente por versión
del skill. Se afirma que holón 07 **cumple de facto** (fuente de verdad única
= el `plan/`/BACKLOG; solo el orquestador escribe el BACKLOG, delta 7) y se
declara **sin refactor retro**. No se tocó `plan/DECISIONES.md` (DE-I17 ya
cubre la decisión; se evita el choque con I70). Un único fichero de obra +
esta acta.

## Archivos tocados

- `plan/PRACTICAS.md` — modificado: nueva delta 9 (regla 15 + semver DC-22).
- `plan/REPORTES/WP-I72-contrato-regla15-semver.md` — creado: esta acta.

**No tocados:** `plan/DECISIONES.md` · `plan/BACKLOG.md` · `HOLONES/` ·
skills-library (solo leída como fuente) · `docs/**`.

## Evidencia

> Salida literal; nada inventado.

### CA1 — grep > 0 con cita por versión

```
$ grep -n "regla 15\|DC-22\|efimeralidad" plan/PRACTICAS.md
63:9. **Contrato 0.3.4 adoptado — regla 15 + semver DC-22** (base DE-I17; el
67:   - **Regla 15 — fuente de verdad única + efimeralidad**
77:   - **Doctrina semver DC-22 — por versión** (`CHANGELOG.md §[0.3.4]` del
85:     (reconciliación de la expansión regla 15 + gates 0.3.x; retarget del

$ grep -c "regla 15\|DC-22\|efimeralidad" plan/PRACTICAS.md
4
```

Cita **por versión** presente en el texto: regla 15 anclada a la publicación
en el paquete **0.3.1** (`CHANGELOG §[0.3.1] · WP-05`); doctrina DC-22 anclada
a `CHANGELOG.md §[0.3.4] · WP-13`, con la evidencia por versión copiada del
propio CHANGELOG del skill (`0.2.0`/`0.3.0` = minor por contrato ampliado;
`0.3.1`–`0.3.4` = patch por override del custodio). **PASS.**

### CA2 — cero promesa sin sello («cumple de facto» justificado)

La afirmación «holón 07 cumple de facto» no promete trabajo futuro: se apoya
en prácticas **ya vigentes** del propio `PRACTICAS.md` — delta 1
(autocontención) y delta 7 (gobierno a git; **solo el orquestador escribe el
BACKLOG**). El texto cierra con la cláusula explícita «Sin sello de futuro:
"cumple de facto" no promete trabajo nuevo … Sin refactor retro.» Congruente
con DE-I17, que ya reza «holón 07 cumple de facto, solo se cita». Ningún
`<pendiente>` abierto ni compromiso sin canal. **PASS.**

### CA3 — git diff --stat contra main = solo PRACTICAS + reporte

```
$ git diff --stat main..HEAD
 plan/PRACTICAS.md | 30 ++++++++++++++++++++++++++++++
 1 file changed, 30 insertions(+)
```

(El reporte se cuenta en su propio commit tras esta acta; ver nota de cierre.)
Fuera del alcance del commit hay un `.claude/settings.local.json` **modificado
por el harness** — **no** se stageó ni commiteó (es config funcional efímera,
regla 15). El diff de los commits del WP contra `main` es solo obra + acta.
**PASS.**

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo del alcance (delta 9 en `PRACTICAS.md` + esta acta): sí.
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia: skill
  solo leído como fuente; se **cita** ruta/versión, no se copia texto.
- [x] Sellos con fuente; rutas citadas existentes: `reglas-metodo-v04.md`,
  `CHANGELOG §[0.3.1]/§[0.3.4]`, DE-I17 — todas verificadas literalmente.
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: «cumple de facto»
  justificado por prácticas vigentes; cláusula anti-promesa explícita.
- [x] Eje contrato/capa evidenciado: se cita contrato del mundo; sin refactor.
- [x] Gates ejecutados de verdad: `grep -n`/`grep -c` + `git diff --stat`
  corridos, salida literal arriba.
- [x] Commits convencionales: `docs(plan): WP-I72 …`.
- [x] `DECISIONES.md` intacto (evita choque con I70); sin push.

## Hallazgos fuera de alcance

- `.claude/settings.local.json` aparece modificado en el working tree (harness);
  candidato a higiene de cierre de ola (checklist regla 15: carpetas de IDE =
  solo config funcional). No se tocó aquí.

## Dudas / bloqueos

Ninguno. CA1–CA3 con evidencia literal.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
