# WP-I01 · higiene-backstage — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i01 (holón 07) |
| fecha | 2026-07-19 |
| rama | `wp/i01-higiene-backstage` |
| worktree | `C:/Users/aleph/SCRIPT_SDK-wp-i01` |
| commits | `8c452dc` (higiene); `4881775` (reporte) + docs de anclaje hasta HEAD |
| estado propuesto | listo para revisión |

## Qué se hizo

Se alineó la línea público/backstage a DE-I11 sin ejecutar I24 entero. Se
creó el worktree `../SCRIPT_SDK-wp-i01` desde `main` con rama
`wp/i01-higiene-backstage`. Se archivó el scratch `HIPOTESIS.md` (~50 KB de la
working copy del checkout principal) en `VIGILANCIA/TRASH/HIPOTESIS.md`
(worktree y checkout principal) y se eliminó del índice (`git rm`). Se añadió
`.gitignore` raíz con `VIGILANCIA/`, `ADDENDA/`, `HANDOFF_*`, `/HIPOTESIS.md`.
No se borraron `HANDOFF_*` ni el resto del histórico. No se tocó
`package.json`, HOLONES/ ni docs VitePress (I02/I03). Sin push.

## Archivos tocados

- `.gitignore` — creado: exclusiones backstage DE-I11
- `HIPOTESIS.md` — borrado del árbol tracked; contenido preservado en
  `VIGILANCIA/TRASH/HIPOTESIS.md` (gitignoreado)
- `plan/REPORTES/WP-I01-higiene-backstage.md` — este reporte
- `VIGILANCIA/TRASH/HIPOTESIS.md` — archivo local (no tracked; histórico)

## Evidencia

> No inventes observaciones. Salida literal o `⏳ sin verificar`.

### CA: `git status` limpio respecto a lo publicable

```
$ cd C:/Users/aleph/SCRIPT_SDK-wp-i01 && git status -sb
## wp/i01-higiene-backstage
```

(tras commit de higiene; backstage no aparece como untracked.)

### CA: histórico sigue en disco

```
$ wc -c /c/Users/aleph/SCRIPT_SDK/VIGILANCIA/TRASH/HIPOTESIS.md \
       /c/Users/aleph/SCRIPT_SDK-wp-i01/VIGILANCIA/TRASH/HIPOTESIS.md
49999 /c/Users/aleph/SCRIPT_SDK/VIGILANCIA/TRASH/HIPOTESIS.md
49999 /c/Users/aleph/SCRIPT_SDK-wp-i01/VIGILANCIA/TRASH/HIPOTESIS.md

$ ls -la /c/Users/aleph/SCRIPT_SDK/HANDOFF_VIGIA_CIERRE_U101.md \
         /c/Users/aleph/SCRIPT_SDK/HANDOFF_VIGIA_TRANSPORTE_U100_U101.md
-rw-r--r-- ... HANDOFF_VIGIA_CIERRE_U101.md
-rw-r--r-- ... HANDOFF_VIGIA_TRANSPORTE_U100_U101.md

$ ls -d /c/Users/aleph/SCRIPT_SDK/VIGILANCIA /c/Users/aleph/SCRIPT_SDK/ADDENDA
/c/Users/aleph/SCRIPT_SDK/ADDENDA/
/c/Users/aleph/SCRIPT_SDK/VIGILANCIA/
```

### CA: grep marco sensible en árbol publicable (= paths backstage en índice)

Interpretación aplicada (DE-I11 / alcance I01): el índice no debe contener
`VIGILANCIA/`, `ADDENDA/`, `HANDOFF_*` ni `HIPOTESIS.md`.

```
$ git ls-files | grep -E '^(VIGILANCIA/|ADDENDA/|HANDOFF_|HIPOTESIS\.md$)' || echo "(ninguno — OK)"
(ninguno — OK)

$ git check-ignore -v VIGILANCIA/ ADDENDA/ HANDOFF_VIGIA_CIERRE_U101.md HIPOTESIS.md
.gitignore:2:VIGILANCIA/	VIGILANCIA/
.gitignore:3:ADDENDA/	ADDENDA/
.gitignore:4:HANDOFF_*	HANDOFF_VIGIA_CIERRE_U101.md
.gitignore:5:/HIPOTESIS.md	HIPOTESIS.md
```

Grep semántico amplio de «datos zeus» sobre todo el núcleo (CA de I24):
`⏳ sin verificar` — fuera del alcance I01; I24 lo cierra.

### Diff vs main

```
$ git diff --stat main...HEAD
 .gitignore   |   5 +
 HIPOTESIS.md | 322 -----------------------------------------------------------
 2 files changed, 5 insertions(+), 322 deletions(-)
```

(El commit del reporte añade la tercera pieza bajo `plan/REPORTES/`.)

### Contenido `.gitignore`

```
# WP-I01 / DE-I11 — backstage local (histórico vigilancia; no remoto privado nuevo)
VIGILANCIA/
ADDENDA/
HANDOFF_*
/HIPOTESIS.md
```

`plan/HANDOFF-ARRANQUE.md` (guion) no cae bajo `HANDOFF_*` (guion bajo):
verificado con `git check-ignore` → no ignorado.

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo dentro de TEST-SWARM/: **no** — holón 07 delta 1 redefine
      autocontención a todo S_SDK; este WP toca raíz a propósito.
- [x] Cero árboles/ficheros copiados de otros mundos: sí (solo mover scratch
      propio y gitignore).
- [x] Sellos con fuente; rutas citadas existentes: sí (DE-I11 en
      `plan/DECISIONES.md`; rutas de TRASH/HANDOFF verificadas en disco).
- [x] Nombres en castellano, sin transición: sí (`higiene-backstage`; sin
      `-old`/`legacy`).
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: sí.
- [x] Cero moneda; munición = idea/obra: sí (N/A).
- [x] La M como forma; física solo con procedencia: sí (N/A).
- [x] Web fiel a la plantilla fanzine: N/A (sin artefacto web).
- [x] Gates ejecutados de verdad: status / ls-files / check-ignore /
      wc -c literales arriba; grep amplio tipo I24 = `⏳ sin verificar`.
- [x] Commits convencionales: `chore(plan-root): …`
- [x] Diff solo del alcance: sí (no I02/I03; no BACKLOG; no push).

## Hallazgos fuera de alcance

1. **Colisión probable con WP-I02:** I02 también escribe `.gitignore` (p.ej.
   `docs/.vitepress/dist/`). Al mergear I01∥I02 habrá que unir entradas, no
   pisar.
2. **`CONECTOR_ZEUS_SDK_BLOCKCHAIN_COMPORT_PLAN.md`:** scratch suelto en el
   checkout principal; no está en DE-I11. Quedó fuera del `.gitignore` de
   I01 (evitar alcance inventado). Candidato a ignorar o archivar en I24 /
   higiene posterior.
3. **Checkout `main` aún tiene `HIPOTESIS.md` modificado en raíz:** la rama
   I01 lo quita del árbol; la copia canónica está en
   `VIGILANCIA/TRASH/HIPOTESIS.md`. Hasta checkout/merge de esta rama, el
   working tree de `main` puede seguir mostrando el scratch en raíz.
4. **`plan/` completo sigue untracked en `main`:** I00 aceptado en papel;
   el commit de este WP solo añade el reporte bajo `plan/REPORTES/` en la
   rama I01 — no asienta el resto del plan (orquestador / otros WPs).

## Dudas / bloqueos

Ninguno que bloquee el CA de I01 con la interpretación de «marco sensible»
como paths backstage en el índice. Si el orquestador exige el grep amplio
de datos zeus al estilo I24, falta ese pase (`⏳`) o exención firmada.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
