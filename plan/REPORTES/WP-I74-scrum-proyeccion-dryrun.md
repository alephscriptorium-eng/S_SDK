# WP-I74 · Scrum: proyección BACKLOG→issues (preparar · dry-run)

| dato | valor |
| ---- | ----- |
| ola | I7 · dep I70 ✅ (`main` @ `1cbb712`) |
| rama | `wp/i74-scrum-proyeccion-dryrun` (desde `main`) |
| herramienta | `@alephscript/skills-scriptorium@0.3.4` · `skills/swarm-orquestacion/scripts/proyectar-backlog.mjs` |
| modo | **LOCAL-ONLY (DC-15)** — solo `export --dry-run`; proyección real **no activada** |
| agente | fresco (regla 13) |
| push | **NO** |

## Qué se hizo

1. Rama `wp/i74-scrum-proyeccion-dryrun` desde `main` (`1cbb712`, con la dep
   I70 `"@alephscript/skills-scriptorium": "0.x"`). `npm install` resuelve la
   efectiva **0.3.4** (lock la fija).
2. `plan/.sync-map.json` creado con `{}` inicial, git-tracked (no gitignoreado).
3. Corrido **solo** `export --dry-run` (preview, sin API), con un
   `CEGUERA_PATTERN` **provisional** pasado **por env** (nunca commiteado).
4. Verificado el **fail-safe** por dos gates independientes (DC-15 opt-in +
   DC-12 ceguera).
5. npm script `scrum:preview` que envuelve el dry-run. `CEGUERA_PATTERN` va
   **por env en runtime** (no se hornea en el script).

## Patrón de ceguera provisional (DC-12)

El gate valida el contenido a proyectar contra `CEGUERA_PATTERN` (regex de
los tokens de marco del **mundo real**, por env — «nunca almacenado, para no
auto-contaminarse»). Para este dry-run se usó un patrón **provisional**:
un **placeholder sintético no-sensible** — tres tokens centinela en
mayúsculas unidos por `|`, **ninguno de ellos un token de identidad real**.
Por construcción no contiene marco del mundo, así que:

- valida contra el BACKLOG ya cegado → **ceguera OK** (no hay hits), lo que
  permite que el preview se imprima; y
- **no se reproduce literalmente en ningún fichero committeado** (honra DC-12
  y CA4); su literal viaja solo en el retorno efímero del worker al
  orquestador.

**Provisional, no definitivo.** El patrón **definitivo** (los tokens reales
del mundo) es **custodio-held** y **requiere GO explícito del custodio**
antes de cualquier proyección real. Aquí **no** se usó ni se commiteó.

## CA — evidencia literal

### CA1 · `scrum:preview` (dry-run) coherente con el BACKLOG

`CEGUERA_PATTERN='<provisional>' npm run scrum:preview` — extracto literal:

```
[proyectar] ceguera OK (33 WP validados contra el patrón del mundo).
[proyectar] export (DRY-RUN) · alcance=todos · 33 proyectado(s), 0 a cerrar · repo=(cwd)
  · crear WP-I00 → closed
  · crear WP-I01 → closed
  ...
  · crear WP-I62 → closed
  · crear WP-I63 → open
  · crear WP-I70 → closed
  · crear WP-I72 → closed
  · crear WP-I71 → open
  · crear WP-I73 → open
  · crear WP-I74 → open
[proyectar] OK.  (EXIT=0)
```

WP-id-keyed. Mapeo (DC-14) verificado: los `✅` → **closed**; los `⬜`/`🔶`
→ **open** (`WP-I63` ⬜ · `WP-I71`/`WP-I73`/`WP-I74` 🔶 → todos **open**).
**CA1 PASS.**

> **Hallazgo (ver §Hallazgos):** el parser materializa **33 de 36** WP. Los
> 3 omitidos (`WP-I24`, `WP-I29`, `WP-I42`, todos `✅`) tienen el título en
> negrita `**WP-XX · …**` **partido en dos líneas**; el parser casa el
> encabezado por línea única y no los capta. El preview es coherente con lo
> que el parser ve; la omisión es de **formato del BACKLOG**, no del cableado.

### CA2 · Fail-safe: export real sin opt-in → **rehúsa**

`export` **sin** `--dry-run` y **sin** `PROYECCION_GITHUB=1` (con patrón, para
aislar el gate DC-15):

```
[proyectar] proyección a GitHub DESHABILITADA por defecto (local-only, DC-15).
  Actívala solo si el usuario lo pidió: --habilitar-github o PROYECCION_GITHUB=1.
  (Para previsualizar sin tocar la API: añade --dry-run.)
EXIT=4
```

Rehúsa **antes** de `cegueraGate` y de cualquier llamada a `gh` (el candado
DC-15 es lo primero en `doExport`). **No** toca la API. **CA2 PASS.**

### CA3 · Ceguera: sin `CEGUERA_PATTERN` → rehúsa

`export --dry-run` **sin** `CEGUERA_PATTERN`:

```
[proyectar] CEGUERA_PATTERN no definido: se rehúsa exportar a un tracker público sin prueba de ceguera (DC-12).
EXIT=3
```

Doble fail-safe verificado: `export` real sin patrón **y** sin opt-in → el
candado DC-15 dispara primero (`EXIT=4`), así que jamás se llega a la API sin
prueba de ceguera. **CA3 PASS.**

### CA4 · `.sync-map.json` `{}` git-tracked · patrón ausente

- `plan/.sync-map.json` = `{}` (contenido literal), **no gitignoreado**
  (`git check-ignore` → NOT ignored), aparece como `?? plan/.sync-map.json`
  y se commitea.
- `CEGUERA_PATTERN` (su **valor**): **ausente de todo fichero committeado**.
  El literal provisional solo existió en env de shell; nunca en
  `package.json`, `.sync-map.json` ni este reporte. Grep de los tokens
  centinela sobre el árbol staged/tracked = **0**.

**CA4 PASS.**

### CA5 · Diff acotado

`git diff` del WP = exactamente **`plan/.sync-map.json`** + **`package.json`**
+ **este reporte**. Sin tocar `BACKLOG.md`, `docs/`, `.claude/`, submódulos.
**CA5 PASS.**

## Cableado entregado

- `plan/.sync-map.json` — `{}` git-tracked (mapa `WP-XX → nº issue`, vacío).
- `package.json` — npm script:
  `"scrum:preview": "node node_modules/@alephscript/skills-scriptorium/skills/swarm-orquestacion/scripts/proyectar-backlog.mjs export --dry-run --backlog plan/BACKLOG.md --map plan/.sync-map.json"`.
  `CEGUERA_PATTERN` **por env en runtime** (no horneado).

Uso (preview seguro, sin API):
`CEGUERA_PATTERN='<patrón del mundo>' npm run scrum:preview`.

## Hallazgos fuera de alcance

- **Parser de una sola línea (33/36 WP).** `WP-I24`, `WP-I29`, `WP-I42`
  tienen el `**WP-XX · título**` partido en dos líneas y el regex de
  encabezado (`^- <estado> **WP-XX · … **`, por línea) no los casa. Antes de
  cualquier proyección real convendría o bien reformatear esos 3
  encabezados a una sola línea en el BACKLOG (fuente de verdad, regla 15) o
  bien que el skill soporte encabezados multi-línea. **No corregido aquí**
  (tocar `BACKLOG.md` violaría CA5; y el skill es dep externa). Queda como
  gate previo al GO de proyección real.
- **`gh` está en PATH** pero ninguna ruta ejecutada lo invoca: dry-run y los
  dos fail-safe salen (`EXIT` 0/3/4) antes del adaptador GitHub. Cero
  escritura a API.
- `.claude/settings.local.json` llega **modificado** de fábrica del worktree
  (allowlist de permisos, ajeno a este WP); **no tocado ni commiteado**.

## Auto-revisión (PRACTICAS del mundo — §4, con honestidad)

- [x] Diff solo dentro del alcance: `plan/.sync-map.json` + `package.json` +
  reporte. Sin `BACKLOG.md`, sin `.claude/`, sin submódulos, sin `docs/`.
- [x] Cero árboles copiados de otros mundos: no se copió nada; se consumió la
  dep versionada del registry propio (`@alephscript/skills-scriptorium@0.3.4`).
- [x] Sellos con fuente; rutas citadas existentes: doctrina
  `…/reference/proyeccion-issues.md` y cabecera de `proyectar-backlog.mjs`
  leídas; mapeo DC-14 / candados DC-12·DC-15 citados desde el código real.
- [x] Sin promesa de futuro sin `<pendiente>`: la proyección real queda
  **no activada** (LOCAL-ONLY DC-15), declarada como capacidad lista y
  sujeta a GO del custodio; no se afirma que funcione contra GitHub.
- [x] Gates ejecutados de verdad: los cuatro EXIT (0 dry-run, 4 sin opt-in,
  3 sin patrón, 4 doble) medidos con `echo $?`, no simulados. Preview real.
- [x] Ceguera (DC-12): patrón provisional no-sensible, por env, nunca
  commiteado; definitivo custodio-held con GO pendiente.
- [x] Commits convencionales; **sin push** (canal custodio media).
- [x] Regla CASOS: evidencia literal pegada; el hallazgo 33/36 se reporta tal
  cual, no se maquilla.

## Dudas / bloqueos

- **Ninguno bloqueante para la capacidad dry-run** (entregada y verificada).
- **Bloqueo previo a proyección real:** (a) GO del custodio + patrón de
  ceguera **definitivo**; (b) resolver el 33/36 del parser (formato de los 3
  encabezados multi-línea del BACKLOG). Ambos fuera del alcance de este WP.
- **Sin push. Sin proyección real a GitHub.**
