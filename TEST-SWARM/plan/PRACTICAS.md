# PRACTICAS — lectura obligatoria antes de tocar nada

Derivadas del protocolo canónico de los mundos hermanos (@ 2026-07-16),
adaptadas a TEST-SWARM. Son la lista de cosas por las que un WP **se
devuelve**.

## 1. Reglas duras

1. **Autocontención.** El diff vive entero dentro de `TEST-SWARM/`. Tocar
   cualquier otra ruta de SCRIPT_SDK o de otro mundo = devolución.
2. **Leer y citar, jamás tocar ni copiar.** Los mundos reales (zeus,
   emmanuel, aleph-scriptorium, NETWORK-ENGINE) y el resto de SCRIPT_SDK se
   releen como fuente, con ruta citada. Copiar árboles o ficheros enteros =
   devolución; citar fragmentos con procedencia, sí.
3. **Ningún sello sin fuente.** Verificado exige ruta existente en disco;
   Doctrina exige documento vigente citado; lo no comprobado se marca
   `<pendiente>`. Sello sin fuente = alucinación soberbia = devolución.
4. **Castellano.** Cuerpo y nombres de fichero y carpeta. Un nombre en
   inglés delata falta de idea de la casa (LLM.md §lengua).
5. **Papel primero.** Los entregables son documentos; código solo
   instrumental (gates, validadores). Nada de aquí se promete a los mundos
   reales.
6. **Sin nombres de transición.** `legacy`, `-old`, `-new`, aliases de
   compatibilidad: prohibidos. Lo sustituido se demuele en el mismo WP.
   (Excepción nombrada: el «acta v2» es reedición explícita frente a la v1
   histórica intocada, DE-6 — no es alias de transición.)
7. **Voz de la casa; las Notas, no el pitch (DE-4).** Prosa breve y
   cervantina; densidad sobre volumen. Retórica de fundraising —hockey,
   curvas de mercado, TAM, «retorno», teología del futuro— = devolución. El
   género es comparecencia y ejecución trazada, no solicitud.
8. **Munición ≠ moneda; la unidad es el punto de scrum (DE-5, DE-6).**
   Cifras de capacidad solo en puntos de scrum; cero unidades monetarias;
   «munición» solo como idea/obra (línea Ibáñez), jamás pólvora ni dinero.
   Violación = devolución (gate e).
9. **La M como forma, no como física (DE-4).** Afirmación física sin cita de
   procedencia = devolución. La constelación se corre como forma
   comprensible, no como tesis de física.
10. **El look es la plantilla fanzine (DE-8).** Todo artefacto web se maqueta
    sobre el poster-template monocromo; sin CDNs, sin fuentes web, sin
    paletas ajenas ni modo oscuro inventado. `assets/fanzine.css` entra como
    copia-release con cabecera de procedencia (la cabecera es la cita; gate
    d no aplica al canal de release).
11. **Commits convencionales**: `tipo(alcance): resumen`
    (`feat|fix|refactor|test|docs|chore`). Rupturas: `!` o
    `BREAKING CHANGE:`.

## 2. Repo y ramas

Un solo repo: SCRIPT_SDK (este mundo vive en `TEST-SWARM/`).

- Rama `wp/<id>-<slug>` por WP; el brief la declara.
- Paralelismo: un worktree por chat worker:

```bash
git worktree add ../SCRIPT_SDK-wp-d00 -b wp/d00-gates
# al aceptar y mergear: git worktree remove ../SCRIPT_SDK-wp-d00
```

- El merge a main lo autoriza el ✅ del orquestador, nunca el worker.

## 3. Alcance

El WP, todo el WP y solo el WP. Hallazgos → §hallazgos del reporte, no fixes
de pasada. WP mal especificado → parar y reportar, no reinterpretar.

## 4. Auto-revisión obligatoria

Al terminar, PARA. Relee el diff completo contra este checklist y corrige
antes de reportar; luego rellénalo con honestidad en el reporte:

- [ ] ¿El diff toca algo fuera de `TEST-SWARM/`?
- [ ] ¿Árbol o fichero copiado de otro mundo (citar ≠ copiar; salvo
      `fanzine.css` con cabecera de procedencia)?
- [ ] ¿Algún sello sin fuente o ruta citada que no existe?
- [ ] ¿Nombres de fichero en inglés o de transición?
- [ ] ¿Fluff de pitch o promesa de futuro sin `<pendiente>`?
- [ ] ¿Cifras monetarias, o munición equiparada a dinero/pólvora (gate e)?
- [ ] ¿Física más allá de la forma citada (afirmación sin procedencia)?
- [ ] ¿Artefacto web fiel a la plantilla fanzine (sin fuentes/CDNs/paletas
      ajenas)?
- [ ] ¿Gates ejecutados de verdad (salida literal, no leída)?
- [ ] ¿Commits convencionales?
- [ ] ¿El diff contiene solo el alcance del WP?

Regla de evidencia: **no inventes observaciones**. Salida literal o
`⏳ sin verificar`.

## 5. Reporte

Desde [REPORTES/PLANTILLA.md](REPORTES/PLANTILLA.md) a
`REPORTES/WP-<id>-<slug>.md`. Sin reporte con evidencia y auto-revisión, no
hay revisión.
