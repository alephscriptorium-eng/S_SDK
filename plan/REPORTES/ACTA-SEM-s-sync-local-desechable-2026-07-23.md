# ACTA · SEM-s · borrado `scripts/sync-claude-skills.mjs` · 2026-07-23

| dato | valor |
| ---- | ----- |
| Mandato | GO SEM-s · SKILLS-EN-MUNDOS · mundo s-sdk · 2026-07-23 |
| Carril | s · worktree `C:\S_LAB\.worktrees\s\wp-sem-s-skills-0.7.0` |
| Tip PRE (fetch) | `7db1d4941267d857d93ab4005dcc4ecd0e49ecfb` (= `origin/main`) |
| Paquete | `@alephscript/skills-scriptorium@0.7.0` |
| Issue | #16 (migración consumidores → bin del paquete) |

## Veredicto desechable

`scripts/sync-claude-skills.mjs` nació en WP-I71 como PORT del mecanismo
de espejo (o-sdk → s-sdk). Con el publish **0.7.0** ese mecanismo vive en
el paquete (`bin/alephscript-skills-sync.mjs` / `alephscript-skills-sync`).
El script local **nació para extinguirse** (issue #16): duplicar la lógica
en el consumidor = deriva asegurada.

| campo | valor |
| ----- | ----- |
| Path | `C:\S_LAB\.worktrees\s\wp-sem-s-skills-0.7.0\scripts\sync-claude-skills.mjs` |
| Origen | WP-I71 · PORT de `codebase/o-sdk/scripts/sync-claude-skills.mjs` |
| SHA256 PRE | `D8A3D2ECA95508E689A4A6E5904CCB144A6C8B2E0D7B8EA625595BEEC3097A07` |
| Tamaño PRE | 3301 bytes · 91 líneas |
| Sustituto canónico | `alephscript-skills-sync --runtime claude` (bin `@0.7.0`) |
| Enganche | `package.json` → `"skills:sync": "alephscript-skills-sync --runtime claude"` |
| Veredicto | **BORRAR** (desechable · nació para extinguirse) |
| Ejecutado | **sí** (este GO · SEM-s) |
| POST | path ausente |

## No borrados (explícito)

| path | motivo |
| ---- | ------ |
| `node_modules/@alephscript/skills-scriptorium/bin/…` | bin canónico del paquete |
| `.claude/skills/**` | espejo regenerado por el bin (trackeado) |
| `codebase/o-sdk/scripts/sync-claude-skills.mjs` | mundo o-sdk EXCLUIDO; no tocar |

## Relación

- Issue #16 · release `v0.7.0` / `@alephscript/skills-scriptorium@0.7.0`
- Patrón OLA0: `plan/REPORTES/ACTA-OLA0-sync-local-desechable-2026-07-23.md` (scriptorium)
