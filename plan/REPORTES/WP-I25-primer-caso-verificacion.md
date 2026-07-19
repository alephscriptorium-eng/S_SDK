# WP-I25 · primer-caso-verificacion — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i25 (holón 07) |
| fecha | 2026-07-19 |
| rama (skills-library) | `wp/i25-primer-caso-verificacion` @ `dfdb563` |
| checkout skill | `C:\Users\aleph\S_SDK-skills-library` |
| base skills-library | `main` @ `fcac110` |
| rama (reporte SCRIPT_SDK) | `wp/i25-primer-caso-verificacion` |
| worktree reporte | `C:\Users\aleph\SCRIPT_SDK-wp-i25` |
| base SCRIPT_SDK | `main` @ `82ee2b6` |
| remote skill | origin `wp/i25-primer-caso-verificacion` (push DE-I7) |
| estado propuesto | listo para revisión |

## Qué se hizo

Simulación Eje IV (segundo consumidor): un agente con **solo** el skill
`vigilancia` + la fixture `instancias/ejemplo-M/` reprodujo un ciclo
completo de vigilancia. WORLD_ROOT = repo git sintético «mundo M» (temp;
**no** SCRIPT_SDK). OUT_DIR de ensayo bajo
`ensayos/i25-ciclo-M/` en la rama WP de skills-library (sin mutar
`ejemplo-M`). Pulso del `watcher.sh` (2 ciclos, `!!HUERFANO`), addenda
dos caras + veredicto persistidos. Ceguera = 0 en acta del ciclo y
artefactos nuevos. No I26, no BACKLOG, no push raíz, no HOLONES/.

## Archivos tocados

### Repo `S_SDK-skills-library` (rama `wp/i25-primer-caso-verificacion`)

- `ensayos/i25-ciclo-M/README.md` — creado; parámetros del ensayo
- `ensayos/i25-ciclo-M/watch.log.sample` — creado; pulso literal
- `ensayos/i25-ciclo-M/anomalias.log.sample` — creado; anomalías
- `ensayos/i25-ciclo-M/addenda-A-i25-huerfano.md` — creado; dos caras + ceguera
- `ensayos/i25-ciclo-M/veredicto.md` — creado; cierre del ciclo
- `instancias/ejemplo-M/**` — **no tocado** (solo lectura)

### Repo SCRIPT_SDK (worktree `SCRIPT_SDK-wp-i25`)

- `plan/REPORTES/WP-I25-primer-caso-verificacion.md` — este reporte

## Evidencia

> No inventes observaciones. Salida literal o `⏳ sin verificar`.

### CA-1 · ciclo completo con solo skill + `ejemplo-M`

Carga (solo lectura):

```text
$ ls instancias/ejemplo-M/
addendas/  bitacora.md  handoffs/  logs/  README.md  revisiones/
$ test -f skills/vigilancia/SKILL.md && test -f skills/vigilancia/scripts/watcher.sh
skill+fixture OK
```

Pulso (`WORLD_ROOT=/tmp/mundo-M-i25`, `OUT_DIR=ensayos/i25-ciclo-M`,
`INTERVAL=2`):

```text
[2026-07-19 19:49:45] wt_reg=1 wt_dir=1 mtime[ wp-m10-contrato:2s ] ajenos[ ] locks=''
[2026-07-19 19:49:45] !!HUERFANO carpeta .worktrees/wp-m10-contrato sin registro en git worktree list
[2026-07-19 19:49:48] wt_reg=1 wt_dir=1 mtime[ wp-m10-contrato:6s ] ajenos[ ] locks=''
[2026-07-19 19:49:48] !!HUERFANO carpeta .worktrees/wp-m10-contrato sin registro en git worktree list
index.lock: ausente (OK)
```

Veredicto/addenda:

```text
ensayos/i25-ciclo-M/addenda-A-i25-huerfano.md  (§interna / §WP / ceguera)
ensayos/i25-ciclo-M/veredicto.md               (cierre Eje IV)
```

Commits skills-library: `683c623` (ensayo) + `dfdb563` (muestras pulso).

### CA-2 · ceguera = 0 (acta del ciclo + artefactos WP)

Patrón PRACTICAS delta 5:
`zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura|OASIS`

```text
$ rg -n -e 'zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura|OASIS' \
    ensayos/i25-ciclo-M/
→ (0 matches — OK)

$ rg -n -e 'zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura|OASIS' \
    instancias/ejemplo-M/
→ (0 matches — OK)

$ awk '/^## §WP$/,/^## Prueba de ceguera$/' \
    ensayos/i25-ciclo-M/addenda-A-i25-huerfano.md \
  | rg -n -e 'zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura|OASIS' \
  || echo "(0 matches en §WP — OK)"
(0 matches en §WP — OK)

$ git -C S_SDK-skills-library status --short instancias/ejemplo-M/
→ (vacío — fixture canónica intacta)
```

WORLD_ROOT del ciclo = temp `mundo-M-i25` (no el marco SCRIPT_SDK).

### CA-3 · acta en este reporte

Ruta: `plan/REPORTES/WP-I25-primer-caso-verificacion.md` (este fichero).
Evidencia literal arriba (comandos, greps, rutas).

## Auto-revisión (PRACTICAS §4 + deltas holón 07)

- [x] Diff solo en alcance autorizado (delta 1: skills-library
      `ensayos/i25-ciclo-M/` + reporte SCRIPT_SDK): sí
- [x] Fixture `ejemplo-M` no mutada: sí
- [x] Sellos con fuente; watcher/ESTACION leídos, no reescritos: sí
- [x] Nombres en castellano donde aplica: sí
- [x] Sin fluff; I26 marcado fuera: sí
- [x] Cero moneda: sí
- [x] Skills marco-agnósticos (delta 5): ceguera 0 en ciclo
- [x] Push solo skills-library rama WP (DE-I7); raíz sin push: sí
- [x] Gates CA ejecutados de verdad: sí (arriba)
- [x] Commits convencionales: `docs(i25): …` / `docs(plan): reporte WP-I25 …`
- [x] Diff solo I25 (no I26, no BACKLOG, no HOLONES/): sí

## Hallazgos fuera de alcance

- `*.log` gitignored en skills-library: el pulso se versiona como
  `.log.sample` (mismo patrón que `instancias/ejemplo-M/logs/`).
- Mejora watcher (≥2 ciclos antes de logar huérfano): ya en ESTACION /
  bitácora fixture; no implementada (fuera de alcance; I23 hallazgo).
- I26 publish: no tocado.

## Dudas / bloqueos

Ninguno bloqueante. CA en verde.

---

## Revisión del orquestador

**Aceptado ✅** · 2026-07-19 · orquestador holón 07 (modo REVISIÓN)

### Qué se verificó (canal real)

1. **CA-1** — Ciclo completo con solo skill `vigilancia` + `instancias/ejemplo-M`:
   ensayos `ensayos/i25-ciclo-M/` @ `dfdb563` (README, `watch.log.sample` con
   `!!HUERFANO` ×2, addenda dos caras, `veredicto.md`). Fixture canónica
   sin dirty. WORLD_ROOT = temp mundo M (no SCRIPT_SDK).
2. **CA-2** — Ceguera = 0: `rg` delta 5
   (`zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura|OASIS`) en
   `ensayos/i25-ciclo-M/` y `instancias/ejemplo-M/` = 0 matches.
3. **CA-3** — Acta en
   `plan/REPORTES/WP-I25-primer-caso-verificacion.md` @ `1e6f518`
   (evidencia literal de comandos/greps/rutas).
4. **PRACTICAS** — deltas 1/5/6; alcance solo `ensayos/i25-ciclo-M/` +
   reporte; sin mutar skill/fixture canónica; sin I26; castellano.

### Orden de merge (recomendado — no ejecutado aquí)

1. **skills-library:** merge `wp/i25-primer-caso-verificacion` (`dfdb563`) →
   `main`; push origin (DE-I7).
2. **SCRIPT_SDK:** merge `wp/i25-primer-caso-verificacion` (tip con esta
   revisión) → `main`; **sin push raíz**.
3. Limpiar worktree `SCRIPT_SDK-wp-i25` si aplica.
4. Siguiente: brief WP-I26 (publish, DE-I12 procedimiento zeus/Verdaccio).
   NO implementar I26 en esta revisión.
