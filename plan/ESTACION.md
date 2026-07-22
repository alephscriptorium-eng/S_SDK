# ESTACIÓN · calibración del mundo s-sdk (script-sdk)

**La estación se activa desde aquí.** Instancia del consumidor. El método
vive en el paquete `@alephscript/skills-scriptorium` (skills `vigilancia` +
`estacion-viva`). **Esta calibración NO va en el skill** — solo aquí en
`plan/`.

## Params

| param | valor |
| ----- | ----- |
| `MUNDO_RAIZ` / `WORLD_ROOT` | `C:\S_LAB\s-sdk` (checkout principal) |
| `WORKTREE_BASE` | `C:\S_LAB\.worktrees\s` |
| `OUT_DIR` | `C:\S_LAB\vigilancia\s` |
| `INTERVAL` | `45` (default del watcher) |

## OUT_DIR

- Ruta canónica: **`C:\S_LAB\vigilancia\s`**
- Contiene: `watch.log`, `anomalias.log`, `watcher.pid` (sesión)
- Fuera del repo público. Crear con `mkdir` al primer arranque del watcher.

## Espejo de skills

| dato | valor |
| ---- | ----- |
| paquete | `@alephscript/skills-scriptorium@0.7.0` |
| registry | `https://npm.scriptorium.escrivivir.co` |
| comando | `npm run skills:sync` → `alephscript-skills-sync --runtime claude` |
| destino | `.claude/skills/` (trackeado — espejo auditable commiteado) |

Tras `npm install`, regenerar el espejo con `npm run skills:sync`. El
README bajo `.claude/skills/` documenta procedencia `@0.7.0` y
generador `alephscript-skills-sync`.

## Watcher

```text
# One-shot (evidencia / pulso)
WORLD_ROOT=<worktree-o-mundo> OUT_DIR=C:/S_LAB/vigilancia/s ONCE=1 \
  bash .claude/skills/estacion-viva/scripts/watcher-sesion.sh

# Sesión (muere con el padre; PID en OUT_DIR/watcher.pid)
WORLD_ROOT=<worktree-o-mundo> OUT_DIR=C:/S_LAB/vigilancia/s INTERVAL=45 \
  bash .claude/skills/estacion-viva/scripts/watcher-sesion.sh
```

## Relación con VISION / PRACTICAS

Estación = layout operativo del carril s (calibración auditable en plan).
No reescribe `plan/PRACTICAS.md` ni `plan/VISION.md` — PORT local únicamente.
