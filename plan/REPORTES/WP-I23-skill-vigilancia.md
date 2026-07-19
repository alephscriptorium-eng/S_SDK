# WP-I23 · skill-vigilancia — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i23 (holón 07) |
| fecha | 2026-07-19 |
| rama (skills-library) | `wp/i23-skill-vigilancia` @ `bf90627` |
| checkout skill | `C:\Users\aleph\S_SDK-skills-library` |
| rama (reporte SCRIPT_SDK) | `wp/i23-skill-vigilancia` |
| worktree reporte | `C:\Users\aleph\SCRIPT_SDK-wp-i23` |
| base SCRIPT_SDK | `main` @ `48004ea` |
| remote skill | origin `wp/i23-skill-vigilancia` (push DE-I7 OK) |
| estado propuesto | listo para revisión |

## Qué se hizo

Skill `vigilancia` en skills-library (formato `_plantilla`): protocolo
ESTACION abstraído a «el mundo», formato addenda dos caras con prueba de
ceguera como paso del método, examples sintéticos (cero histórico), y
`scripts/watcher.sh` parametrizado por `WORLD_ROOT` / `OUT_DIR` /
`INTERVAL` (sin rutas absolutas a mundos reales). Evidencia CA: ceguera
grep=0; watcher muestreó skills-library y un repo temp con huérfano.
Reporte solo en worktree SCRIPT_SDK. No I21/I22/I24. No BACKLOG. No push
raíz. No se mutó `VIGILANCIA/` en SCRIPT_SDK.

## Archivos tocados

### Repo `S_SDK-skills-library` (rama `wp/i23-skill-vigilancia`)

- `skills/vigilancia/SKILL.md` — creado; frontmatter `name=vigilancia`
- `skills/vigilancia/README.md` — creado; activación / separación dato
- `skills/vigilancia/reference/ESTACION.md` — creado; protocolo v1 abstraído
- `skills/vigilancia/reference/ADDENDA-DOS-CARAS.md` — creado; §interna/§WP + ceguera
- `skills/vigilancia/examples/addenda-sintetica.md` — creado; fixture sintética
- `skills/vigilancia/examples/fixture-mundo-minimo/README.md` — creado
- `skills/vigilancia/scripts/watcher.sh` — creado; watcher parametrizado

### Repo SCRIPT_SDK (worktree `SCRIPT_SDK-wp-i23`)

- `plan/REPORTES/WP-I23-skill-vigilancia.md` — este reporte

## Evidencia

### CA-1 · skill agnóstico (param «el mundo»)

```text
SKILL.md frontmatter name=vigilancia
Parámetros documentados: WORLD_ROOT, OUT_DIR, INTERVAL
reference/ESTACION.md + ADDENDA-DOS-CARAS.md sin nombres de mundo real
Árbol: skills/vigilancia/{SKILL.md,README.md,reference/,examples/,scripts/}
```

### CA-2 · watcher contra repo arbitrario (sin tocar index)

Muestreo A — `WORLD_ROOT` = skills-library, `INTERVAL=2`, ~2 ciclos:

```text
[2026-07-19 19:23:51] wt_reg=2 wt_dir=0 mtime[ ] ajenos[ ] locks=''
[2026-07-19 19:23:54] wt_reg=2 wt_dir=0 mtime[ ] ajenos[ ] locks=''
index.lock: ausente tras la corrida
```

Muestreo B — repo temp con `.worktrees/orphan-demo` sin registro:

```text
[2026-07-19 19:24:08] wt_reg=1 wt_dir=1 mtime[ orphan-demo:1s ] ajenos[ ] locks=''
[2026-07-19 19:24:08] !!HUERFANO carpeta .worktrees/orphan-demo sin registro en git worktree list
[2026-07-19 19:24:12] wt_reg=1 wt_dir=1 mtime[ orphan-demo:5s ] ajenos[ ] locks=''
[2026-07-19 19:24:12] !!HUERFANO carpeta .worktrees/orphan-demo sin registro en git worktree list
```

Watcher no invoca `git status` (solo `worktree list --porcelain` + find).

### CA-3 · ceguera delta 5 en `skills/vigilancia/` = 0

```text
$ rg -n 'zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura|OASIS' skills/vigilancia/
→ 0 matches

$ rg -n 'C:/Users|/Users/aleph|zeus-sdk' skills/vigilancia/
→ 0 matches (sin rutas hardcodeadas)
```

## Auto-revisión (PRACTICAS §4 + deltas holón 07)

- [x] Diff solo en alcance autorizado (delta 1: skills-library
      `skills/vigilancia/` + reporte SCRIPT_SDK): sí
- [x] Cero datos de sesión / histórico copiados (I24 fuera): sí — solo
      doctrina abstraída + fixture sintética
- [x] Sellos con fuente; ESTACION/watcher = lectura, no mutados en
      SCRIPT_SDK: sí
- [x] Nombres en castellano donde aplica: sí
- [x] Sin fluff; I24 marcado fuera de alcance: sí
- [x] Cero moneda: sí
- [x] Skills marco-agnósticos (delta 5): ceguera 0
- [x] Push solo skills-library rama WP (DE-I7); raíz sin push: sí
- [x] Gates CA ejecutados de verdad: sí (arriba)
- [x] Commits convencionales: `feat(skills): vigilancia …` /
      `docs(plan): reporte WP-I23 …`
- [x] Diff solo I23 (no I21/I22/I24, no BACKLOG): sí — `skills/site-web/`
      ajeno presente en working tree compartido, **no** staged

## Hallazgos fuera de alcance

- Checkout skills-library compartido entre I21∥I22∥I23: riesgo de
  cambio de rama concurrente; I21 ya usa worktree (`+`). Candidato:
  worktree por WP en library.
- Mejora del watcher (doctrina): clasificar huérfano vacío/no-vacío y
  ≥2 ciclos antes de logar — documentada en ESTACION, no implementada.
- I24: mover histórico real + fixture `instancias/ejemplo-M/`.

## Dudas / bloqueos

Ninguno bloqueante. CA en verde.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
