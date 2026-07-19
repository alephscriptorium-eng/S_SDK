# WP-I03 · submodules-mythos — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i03 · holón 07 |
| fecha | 2026-07-19 |
| rama | `wp/i03-submodules-mythos` |
| worktree | `C:/Users/aleph/SCRIPT_SDK-wp-i03` |
| commits | `2edd88c` (chore: submodules mythos 01); docs reporte en HEAD de rama |
| estado propuesto | listo para revisión |

## Qué se hizo

Se ancló el holón 01 (Mythos) con dos submodules read-only: `zeus-sdk` →
`alephscriptorium-eng/Z_SDK` y `games-library` →
`alephscriptorium-eng/Z_SDK-games-library`. Por DE-I8 se reservaron rutas
placeholder en `HOLONES/03-emmanuel`, `05-aleph-scriptorium` y
`06-aleph-scriptorium` (README de asiento, **sin** `git submodule add`).
Cero commits ni dirty dentro de los submodules. No se tocó I01/I02 ni
BACKLOG. Sin push.

## Archivos tocados

- `.gitmodules` — creado: registro de los dos submodules mythos.
- `HOLONES/01-mythos/zeus-sdk` — gitlink `160000` → `0afe1e1` (Z_SDK).
- `HOLONES/01-mythos/games-library` — gitlink `160000` → `b463a1a`
  (Z_SDK-games-library).
- `HOLONES/03-emmanuel/README.md` — creado: placeholder DE-I8.
- `HOLONES/05-aleph-scriptorium/README.md` — creado: placeholder DE-I8.
- `HOLONES/06-aleph-scriptorium/README.md` — creado: placeholder DE-I8.
- `plan/REPORTES/WP-I03-submodules-mythos.md` — este acta.

## Evidencia

### `.gitmodules`

```
[submodule "HOLONES/01-mythos/zeus-sdk"]
	path = HOLONES/01-mythos/zeus-sdk
	url = https://github.com/alephscriptorium-eng/Z_SDK.git
[submodule "HOLONES/01-mythos/games-library"]
	path = HOLONES/01-mythos/games-library
	url = https://github.com/alephscriptorium-eng/Z_SDK-games-library.git
```

### CA — `git submodule update --init` en clon fresco

Equivalente local (rama no pusheada): clon `file://` de este worktree a
`/tmp/ssdk-i03-vsZlNd/clone`, luego `git submodule update --init`.

```
Submodule 'HOLONES/01-mythos/games-library' (...Z_SDK-games-library.git) registered for path 'HOLONES/01-mythos/games-library'
Submodule 'HOLONES/01-mythos/zeus-sdk' (...Z_SDK.git) registered for path 'HOLONES/01-mythos/zeus-sdk'
Cloning into '.../HOLONES/01-mythos/games-library'...
Cloning into '.../HOLONES/01-mythos/zeus-sdk'...
Submodule path 'HOLONES/01-mythos/games-library': checked out 'b463a1a6dcb7310c8008cb6769d46f714b787c05'
Submodule path 'HOLONES/01-mythos/zeus-sdk': checked out '0afe1e1fb44e361c24c2baacb9792883c7ce06a5'
```

`git submodule status` post-init:

```
 b463a1a6dcb7310c8008cb6769d46f714b787c05 HOLONES/01-mythos/games-library (startpack-solve-coagula-v0.1.0-33-gb463a1a)
 0afe1e1fb44e361c24c2baacb9792883c7ce06a5 HOLONES/01-mythos/zeus-sdk (@zeus/app-shell@0.2.1-95-g0afe1e1)
```

### Cero commits / dirty dentro de submodules

```
git -C HOLONES/01-mythos/zeus-sdk status -sb
## main...origin/main

git -C HOLONES/01-mythos/games-library status -sb
## main...origin/main

git -C HOLONES/01-mythos/zeus-sdk diff --stat
(vacío)

git -C HOLONES/01-mythos/games-library diff --stat
(vacío)
```

Modo de entrada en el commit raíz: `160000` (gitlink), no árbol copiado.

### Ceguera (árbol zeus)

Comando del CA:

```
git -C HOLONES/01-mythos/zeus-sdk grep -i "script_sdk|holón|holarquía"
```

Salida: *(ninguna línea)*. Exit code `1` (sin matches). Conteo: `0`.

Repetido en el clon fresco tras `--init`: igual, conteo `0`, exit `1`.

## Auto-revisión (PRACTICAS §4 — con honestidad)

Nota: delta 1 de `plan/PRACTICAS.md` redefine autocontención a todo el repo
S_SDK (no solo TEST-SWARM/). Checklist TEST-SWARM §4 leído con ese delta.

- [x] Diff solo del alcance WP-I03 (HOLONES + `.gitmodules` + reporte): sí.
      No I01/I02, no BACKLOG, no package.json.
- [x] Cero árboles/ficheros copiados de otros mundos: anclas = gitlink
      submodule (DE-I5), no copia.
- [x] Sellos con fuente; rutas citadas existentes: sí (worktree + tmp clone).
- [x] Nombres en castellano en placeholders; paths técnicos mythos/zeus-sdk
      /games-library según brief.
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: placeholders
      declaran «remoto por decidir».
- [x] Cero moneda; munición no aplica.
- [x] La M / física: no aplica.
- [x] Web fanzine: no aplica (sin artefacto web).
- [x] Gates/CA ejecutados de verdad: clon fresco local + ceguera.
- [x] Commits convencionales: `chore: …`.
- [x] Diff solo del alcance: sí. Hallazgos → §siguiente.

## Hallazgos fuera de alcance

- El directorio `plan/` aún no está en `main` (untracked en el árbol de
  trabajo del custodio); este reporte vive en la rama del WP.
- Remotos de emmanuel/aleph siguen sin decidir (tick DE-I8 del custodio).

## Dudas / bloqueos

Ninguno que bloquee la revisión. CA verificado con clon `file://` local
porque la rama no se pushea (brief: No push); equivalente funcional a clon
fresco remoto.

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-19 · orquestador holón 07 (modo revisión)

### CA verificados (canal real, worktree)

1. Submodules: `zeus-sdk` → `Z_SDK.git`, `games-library` →
   `Z_SDK-games-library.git` (`.gitmodules` + remotes).
2. DE-I8: placeholders `HOLONES/03|05|06-*/README.md` modo `100644`;
   cero entradas 03/05/06 en `.gitmodules`.
3. Dirty dentro de submodules: `status --porcelain` vacío; gitlinks
   `160000` @ `0afe1e1` / `b463a1a`.
4. Ceguera re-ejecutada:
   `git -C HOLONES/01-mythos/zeus-sdk grep -i "script_sdk|holón|holarquía"`
   → 0 matches (exit 1).
5. `git submodule update --init` → exit 0 (smoke en worktree; evidencia
   clon fresco `file://` en reporte del worker).
6. Diff `main...HEAD`: solo `.gitmodules`, HOLONES mythos+placeholders,
   reporte. Cero BACKLOG / I01 / I02 / package.json. Sin push.

### PRACTICAS

Delta 2 (submodules read-only) OK. Delta 1: alcance S_SDK (no solo
TEST-SWARM) — conforme al brief I0.

### Merge

- Rama `wp/i03-submodules-mythos` @ `1746b87` — **mergeable**.
- Orden lote I0: I01 → I02 (unión `.gitignore`) → I03 (sin solape con
  `.gitignore`; submodules independientes).
- Padre: **no mergear aquí** (orden del custodio / merge coordinado).
